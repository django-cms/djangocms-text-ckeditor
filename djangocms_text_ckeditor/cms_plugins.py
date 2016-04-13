# -*- coding: utf-8 -*-
from cms import __version__ as cms_version
from cms.models import CMSPlugin
from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.utils.placeholder import get_toolbar_plugin_struct
from cms.utils.urlutils import admin_reverse
from django.conf.urls import url
from django.core import signing
from django.core.exceptions import PermissionDenied, ValidationError
from django.core.urlresolvers import reverse
from django.forms.fields import CharField
from django.db import transaction
from django.db.models import F
from django.http import (
    HttpResponse,
    HttpResponseRedirect,
    HttpResponseForbidden,
    HttpResponseBadRequest,
)
from django.utils.decorators import method_decorator
from django.utils.encoding import force_text
from django.utils.translation import ugettext
from django.views.decorators.http import require_POST

from . import settings
from .forms import DeleteOnCancelForm, TextForm
from .models import Text
from .utils import plugin_tags_to_user_html
from .widgets import TextEditorWidget


class TextPlugin(CMSPluginBase):
    model = Text
    name = settings.TEXT_PLUGIN_NAME
    module = settings.TEXT_PLUGIN_MODULE_NAME
    form = TextForm
    render_template = "cms/plugins/text.html"
    change_form_template = "cms/plugins/text_plugin_change_form.html"
    ckeditor_configuration = settings.TEXT_CKEDITOR_CONFIGURATION
    disable_child_plugins = True

    def get_editor_widget(self, request, plugins, plugin):
        """
        Returns the Django form Widget to be used for
        the text area
        """
        cancel_url_name = self.get_admin_url_name('delete_on_cancel')
        cancel_url = reverse('admin:%s' % cancel_url_name)
        cancel_token = self.get_cancel_token(request, plugin)

        # should we delete the text plugin when
        # the user cancels?
        delete_text_on_cancel = (
            'delete-on-cancel' in request.GET and
            not plugin.get_plugin_instance()[0]
        )

        widget = TextEditorWidget(
            installed_plugins=plugins, pk=plugin.pk,
            placeholder=plugin.placeholder,
            plugin_language=plugin.language,
            configuration=self.ckeditor_configuration,
            cancel_url=cancel_url,
            cancel_token=cancel_token,
            delete_on_cancel=delete_text_on_cancel,
        )
        return widget

    def get_form_class(self, request, plugins, plugin):
        """
        Returns a subclass of Form to be used by this plugin
        """
        widget = self.get_editor_widget(
            request=request,
            plugins=plugins,
            plugin=plugin,
        )

        # We avoid mutating the Form declared above by subclassing
        class TextPluginForm(self.form):
            body = CharField(widget=widget, required=False)

        return TextPluginForm

    def add_view(self, request, form_url='', extra_context=None):
        """
        This is a special case add view for the Text Plugin. Plugins should
        never have to create an instance on a GET request, but unfortunately
        the way the Text Plugin works (allowing child plugins on add), there is
        no way around here.

        If you're reading this code to learn how to write your own CMS Plugin,
        please read another plugin as you should not do what this plugin does.
        """
        plugin_instance = getattr(self, "cms_plugin_instance")

        if plugin_instance:
            # This can happen if the user did not properly cancel the plugin
            # and so a "ghost" plugin instance is left over.
            # The instance is a record that points to the Text plugin
            # but is not a real text plugin instance.
            return super(TextPlugin, self).add_view(
                request, form_url, extra_context
            )

        try:
            data = self.validate_add_request(request)
        except PermissionDenied:
            message = ugettext('You do not have permission to add a plugin')
            return HttpResponseForbidden(force_text(message))
        except ValidationError as error:
            return HttpResponseBadRequest(error.message)

        # Sadly we have to create the CMSPlugin record on add GET request
        # because we need this record in order to allow the user to add
        # child plugins to the text (image, link, etc..)
        plugin = CMSPlugin.objects.create(
            language=data['plugin_language'],
            plugin_type=data['plugin_type'],
            position=data['position'],
            placeholder=data['placeholder_id'],
            parent=data.get('plugin_parent'),
        )
        success_url = admin_reverse('cms_page_edit_plugin', args=(plugin.pk,))
        # Because we've created the cmsplugin record
        # we need to delete the plugin when a user cancels.
        success_url += '?delete-on-cancel'
        return HttpResponseRedirect(success_url)

    def get_plugin_urls(self):
        def pattern(regex, func):
            name = self.get_admin_url_name(func.__name__)
            return url(regex, func, name=name)

        url_patterns = [
            pattern(r'delete-on-cancel/$', self.delete_on_cancel),
        ]
        return url_patterns

    def get_admin_url_name(self, name):
        model_name = self.model._meta.model_name
        url_name = "%s_%s_%s" % (self.model._meta.app_label, model_name, name)
        return url_name

    @method_decorator(require_POST)
    @transaction.atomic
    def delete_on_cancel(self, request):
        # This view is responsible for deleting a plugin
        # bypassing the delete permissions.
        # We check for add permissions because this view is meant
        # only for plugins created through the ckeditor
        # and the ckeditor plugin itself.
        if not request.user.is_active and request.user.is_staff:
            message = ugettext("Unable to process your request. "
                               "You don't have the required permissions.")
            return HttpResponseForbidden(message)

        plugin_type = self.__class__.__name__

        # This form validates the the given plugin is a child
        # of the text plugin or is a text plugin.
        # If the plugin is a child then we validate that this child
        # is not present in the text plugin (because then it's not a cancel).
        # If the plugin is a text plugin then we validate that the text
        # plugin does NOT have a real instance attached.
        form = DeleteOnCancelForm(request.POST, text_plugin_type=plugin_type)

        if not form.is_valid():
            message = ugettext("Unable to process your request.")
            return HttpResponseBadRequest(message)

        plugin = form.cleaned_data['plugin']

        plugin_class = plugin.get_plugin_class_instance()

        # The following attributes are needed for permission checking
        # These are set when instantiating the plugin class
        # with an admin site.
        # Plugin views are currently not instantiated with an admin site.
        plugin_class.model = plugin_class.model
        plugin_class.opts = plugin_class.model._meta

        has_add_permission = plugin_class.has_add_permission(request)

        placeholder = plugin.placeholder

        if not (has_add_permission
                and placeholder.has_add_permission(request)):
            message = ugettext("Unable to process your request. "
                               "You don't have the required permissions.")
            return HttpResponseForbidden(message)
        elif form.is_valid_token(request.session.session_key):
            # Token is validated after checking permissions
            # to avoid non-auth users from triggering validation mechanism.
            plugin._no_reorder = True

            if plugin.parent_id:
                CMSPlugin.objects.filter(
                    pk=plugin.parent_id,
                    numchild__gt=0,
                ).update(numchild=F('numchild') - 1)
            plugin.delete(no_mp=True)
            # 204 -> request was successful but no response returned.
            return HttpResponse(status=204)
        else:
            message = ugettext("Unable to process your request. Invalid token.")
            return HttpResponseBadRequest(message)

    def get_form(self, request, obj=None, **kwargs):
        plugins = get_toolbar_plugin_struct(
            plugin_pool.get_text_enabled_plugins(
                self.placeholder.slot,
                self.page
            ),
            self.placeholder.slot,
            self.page,
            parent=self.__class__
        )
        form = self.get_form_class(
            request=request,
            plugins=plugins,
            plugin=self.cms_plugin_instance,
        )
        kwargs['form'] = form  # override standard form
        return super(TextPlugin, self).get_form(request, obj, **kwargs)

    def render(self, context, instance, placeholder):
        context.update({
            'body': plugin_tags_to_user_html(
                instance.body,
                context,
                placeholder
            ),
            'placeholder': placeholder,
            'object': instance
        })
        return context

    def save_model(self, request, obj, form, change):
        super(TextPlugin, self).save_model(request, obj, form, change)
        # This must come after calling save
        # If `clean_plugins()` deletes child plugins, django-treebeard will call
        # save() again on the Text instance (aka obj in this context) to update mptt values (numchild, etc).
        # See this ticket for details https://github.com/divio/djangocms-text-ckeditor/issues/212
        obj.clean_plugins()

    def get_cancel_token(self, request, obj):
        plugin_id = force_text(obj.pk)
        # salt is different for every user
        signer = signing.Signer(salt=request.session.session_key)
        return signer.sign(plugin_id).split(':')[1]


plugin_pool.register_plugin(TextPlugin)
