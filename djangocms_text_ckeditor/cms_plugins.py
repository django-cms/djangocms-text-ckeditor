# -*- coding: utf-8 -*-
import json
import re
from distutils.version import LooseVersion

from django.conf.urls import url
from django.contrib.admin.utils import unquote
from django.core import signing
from django.core.exceptions import PermissionDenied, ValidationError
from django.db import transaction
from django.forms.fields import CharField
from django.http import (
    Http404, HttpResponse, HttpResponseBadRequest, HttpResponseForbidden,
    HttpResponseRedirect,
)
from django.shortcuts import get_object_or_404
from django.template import RequestContext
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.utils.encoding import force_text
from django.utils.translation import ugettext
from django.views.decorators.clickjacking import xframe_options_sameorigin
from django.views.decorators.http import require_POST

import cms
from cms.models import CMSPlugin
from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.utils.placeholder import get_toolbar_plugin_struct
from cms.utils.urlutils import admin_reverse

from six import text_type

from . import settings
from .forms import (
    ActionTokenValidationForm, DeleteOnCancelForm, RenderPluginForm, TextForm,
)
from .models import Text
from .utils import (
    OBJ_ADMIN_WITH_CONTENT_RE_PATTERN, _plugin_tags_to_html,
    plugin_tags_to_admin_html, plugin_tags_to_id_list,
    plugin_tags_to_user_html, plugin_to_tag, random_comment_exempt,
    replace_plugin_tags,
)
from .widgets import TextEditorWidget


CMS_34 = LooseVersion(cms.__version__) >= LooseVersion('3.4')


def _user_can_change_placeholder(request, placeholder):
    if CMS_34:
        return placeholder.has_change_permission(request.user)
    return placeholder.has_change_permission(request)


def post_add_plugin(operation, **kwargs):
    from djangocms_history.actions import ADD_PLUGIN
    from djangocms_history.helpers import get_bound_plugins, get_plugin_data
    from djangocms_history.models import dump_json

    text_plugin = kwargs['plugin']
    new_plugin_ids = set(text_plugin._get_inline_plugin_ids())

    if not new_plugin_ids:
        # User has not embedded any plugins on the text
        return

    new_plugins = CMSPlugin.objects.filter(pk__in=new_plugin_ids)
    new_plugins = get_bound_plugins(new_plugins)

    # Extend the recorded added plugins to include the inline plugins (if any)
    action = operation.actions.only('post_action_data').get(action=ADD_PLUGIN, order=1)
    post_data = json.loads(action.post_action_data)
    post_data['plugins'].extend(get_plugin_data(plugin) for plugin in new_plugins)
    action.post_action_data = dump_json(post_data)
    action.save(update_fields=['post_action_data'])


def pre_change_plugin(operation, **kwargs):
    from djangocms_history.actions import ADD_PLUGIN, DELETE_PLUGIN
    from djangocms_history.helpers import get_bound_plugins, get_plugin_data

    old_text_plugin = kwargs['old_plugin']
    old_plugin_ids = set(old_text_plugin._get_inline_plugin_ids())

    new_text_plugin = kwargs['new_plugin']
    new_plugin_ids = set(new_text_plugin._get_inline_plugin_ids())

    added_plugin_ids = new_plugin_ids.difference(old_plugin_ids)
    deleted_plugin_ids = old_plugin_ids.difference(new_plugin_ids)
    plugin_ids = added_plugin_ids | deleted_plugin_ids

    if added_plugin_ids == deleted_plugin_ids:
        # User has not added or removed embedded plugins
        return

    order = 1

    # This app is a special case.
    # We know the old and new tree orders because inline plugins
    # have already been set on the database when this pre operation
    # is executed.
    old_tree = (
        old_text_plugin
        .cmsplugin_set
        .filter(pk__in=old_plugin_ids)
        .order_by('position')
        .values_list('pk', flat=True)
    )
    old_tree = list(old_tree)

    new_tree = (
        new_text_plugin
        .cmsplugin_set
        .filter(pk__in=new_plugin_ids)
        .order_by('position')
        .values_list('pk', flat=True)
    )
    new_tree = list(new_tree)

    plugins = CMSPlugin.objects.filter(pk__in=plugin_ids)
    bound_plugins = list(get_bound_plugins(plugins))

    if added_plugin_ids:
        order += 1

        pre_action_data = {
            'order': old_tree,
            'parent_id': old_text_plugin.pk,
        }

        post_plugin_data = [get_plugin_data(plugin) for plugin in bound_plugins
                            if plugin.pk in added_plugin_ids]
        post_action_data = {
            'order': new_tree,
            'parent_id': old_text_plugin.pk,
            'plugins': post_plugin_data,
        }

        operation.create_action(
            action=ADD_PLUGIN,
            language=old_text_plugin.language,
            placeholder=kwargs['placeholder'],
            pre_data=pre_action_data,
            post_data=post_action_data,
            order=order,
        )

    if deleted_plugin_ids:
        order += 1
        deleted_plugins = [plugin for plugin in bound_plugins if plugin.pk in deleted_plugin_ids]
        pre_plugin_data = [get_plugin_data(plugin) for plugin in deleted_plugins]
        pre_action_data = {
            'order': old_tree,
            'parent_id': old_text_plugin.pk,
            'plugins': pre_plugin_data,
        }

        post_plugin_data = [get_plugin_data(plugin, only_meta=True) for plugin in deleted_plugins]
        post_action_data = {
            'order': new_tree,
            'parent_id': old_text_plugin.pk,
            'plugins': post_plugin_data,
        }

        operation.create_action(
            action=DELETE_PLUGIN,
            language=old_text_plugin.language,
            placeholder=kwargs['placeholder'],
            pre_data=pre_action_data,
            post_data=post_action_data,
            order=order,
        )


class TextPlugin(CMSPluginBase):
    model = Text
    name = settings.TEXT_PLUGIN_NAME
    module = settings.TEXT_PLUGIN_MODULE_NAME
    form = TextForm
    render_template = 'cms/plugins/text.html'
    change_form_template = 'cms/plugins/text_plugin_change_form.html'
    ckeditor_configuration = settings.TEXT_CKEDITOR_CONFIGURATION
    disable_child_plugins = True

    # These are executed by the djangocms-history app
    # We use them to inject inline plugin data
    operation_handler_callbacks = {
        'post_add_plugin': post_add_plugin,
        'pre_change_plugin': pre_change_plugin,
    }

    if CMS_34:
        # On django CMS 3.5 this attribute is set automatically
        # when do_post_copy is defined in the plugin class.
        _has_do_post_copy = True

    @classmethod
    def do_post_copy(self, instance, source_map):
        ids = plugin_tags_to_id_list(instance.body)
        ids_map = {pk: source_map[pk].pk for pk in ids if pk in source_map}
        new_text = replace_plugin_tags(instance.body, ids_map)
        self.model.objects.filter(pk=instance.pk).update(body=new_text)

    @staticmethod
    def get_translation_export_content(field, plugin_data):
        def _render_plugin_with_content(obj, match):
            from djangocms_translations.utils import get_text_field_child_label
            field = get_text_field_child_label(obj.plugin_type)
            content = getattr(obj, field) if field else ''
            return plugin_to_tag(obj, content)

        content = _plugin_tags_to_html(plugin_data[field], output_func=_render_plugin_with_content)
        subplugins_within_this_content = plugin_tags_to_id_list(content)
        return content, subplugins_within_this_content

    @staticmethod
    def set_translation_import_content(content, plugin):
        data = [x.groups() for x in re.finditer(OBJ_ADMIN_WITH_CONTENT_RE_PATTERN, content)]
        data = {int(pk): value for pk, value in data}

        return {
            subplugin_id: data[subplugin_id]
            for subplugin_id in plugin_tags_to_id_list(content)
        }

    def get_editor_widget(self, request, plugins, plugin):
        """
        Returns the Django form Widget to be used for
        the text area
        """
        cancel_url_name = self.get_admin_url_name('delete_on_cancel')
        cancel_url = reverse('admin:%s' % cancel_url_name)

        render_plugin_url_name = self.get_admin_url_name('render_plugin')
        render_plugin_url = reverse('admin:%s' % render_plugin_url_name)

        action_token = self.get_action_token(request, plugin)

        # should we delete the text plugin when
        # the user cancels?
        delete_text_on_cancel = (
            'delete-on-cancel' in request.GET and  # noqa
            not plugin.get_plugin_instance()[0]
        )

        widget = TextEditorWidget(
            installed_plugins=plugins, pk=plugin.pk,
            placeholder=plugin.placeholder,
            plugin_language=plugin.language,
            configuration=self.ckeditor_configuration,
            render_plugin_url=render_plugin_url,
            cancel_url=cancel_url,
            action_token=action_token,
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

        instance = plugin.get_plugin_instance()[0]

        if instance:
            context = RequestContext(request)
            context['request'] = request
            rendered_text = plugin_tags_to_admin_html(
                text=instance.body,
                context=context,
            )
        else:
            rendered_text = None

        # We avoid mutating the Form declared above by subclassing
        class TextPluginForm(self.form):
            body = CharField(widget=widget, required=False)

            def __init__(self, *args, **kwargs):
                initial = kwargs.pop('initial', {})

                if rendered_text:
                    initial['body'] = rendered_text
                super(TextPluginForm, self).__init__(*args, initial=initial, **kwargs)
        return TextPluginForm

    @xframe_options_sameorigin
    def add_view(self, request, form_url='', extra_context=None):
        if 'plugin' in request.GET:
            # CMS >= 3.4 compatibility
            self.cms_plugin_instance = self._get_plugin_or_404(request.GET['plugin'])

        if getattr(self, 'cms_plugin_instance', None):
            # This can happen if the user did not properly cancel the plugin
            # and so a "ghost" plugin instance is left over.
            # The instance is a record that points to the Text plugin
            # but is not a real text plugin instance.
            return super(TextPlugin, self).add_view(
                request, form_url, extra_context
            )

        if not self.has_add_permission(request):
            # this permission check is done by Django on the normal
            # workflow of adding a plugin.
            # This is NOT the normal workflow because we create a plugin
            # on GET request to the /add/ endpoint and so we bypass
            # django's add_view, thus bypassing permission check.
            message = ugettext('You do not have permission to add a plugin.')
            return HttpResponseForbidden(force_text(message))

        try:
            # CMS 3.3 compatibility
            data = self.validate_add_request(request)
        except AttributeError:
            # CMS >= 3.4 compatibility
            _data = self._cms_initial_attributes
            data = {
                'plugin_language': _data['language'],
                'placeholder_id': _data['placeholder'],
                'parent': _data['parent'],
                'position': _data['position'],
                'plugin_type': _data['plugin_type'],
                'plugin_parent': _data['parent'],
            }

        except PermissionDenied:
            message = ugettext('You do not have permission to add a plugin.')
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

        query = request.GET.copy()
        query['plugin'] = text_type(plugin.pk)

        success_url = admin_reverse('cms_page_add_plugin')
        # Because we've created the cmsplugin record
        # we need to delete the plugin when a user cancels.
        success_url += '?delete-on-cancel&' + query.urlencode()
        return HttpResponseRedirect(success_url)

    def get_plugin_urls(self):
        def pattern(regex, func):
            name = self.get_admin_url_name(func.__name__)
            return url(regex, func, name=name)

        url_patterns = [
            pattern(r'^render-plugin/$', self.render_plugin),
            pattern(r'^delete-on-cancel/$', self.delete_on_cancel),
        ]
        return url_patterns

    def get_admin_url_name(self, name):
        plugin_type = self.__class__.__name__.lower()
        url_name = '%s_%s_%s' % (self.model._meta.app_label, plugin_type, name)
        return url_name

    def _get_text_plugin_from_request(self, request, data):
        if not (request.user.is_active and request.user.is_staff):
            raise PermissionDenied

        form = ActionTokenValidationForm(data)

        if form.is_valid():
            session_key = request.session.session_key
            text_plugin_id = form.get_id_from_token(session_key)

            if text_plugin_id:
                return self._get_plugin_or_404(text_plugin_id)
        message = ugettext('Unable to process your request. Invalid token.')
        raise ValidationError(message=force_text(message))

    @random_comment_exempt
    @xframe_options_sameorigin
    def render_plugin(self, request):
        try:
            text_plugin = self._get_text_plugin_from_request(request, data=request.GET)
        except ValidationError as error:
            return HttpResponseBadRequest(error.message)

        form = RenderPluginForm(request.GET, text_plugin=text_plugin)

        if not form.is_valid():
            message = ugettext('Unable to process your request.')
            return HttpResponseBadRequest(message)

        plugin_class = text_plugin.get_plugin_class_instance()
        # The following is needed for permission checking
        plugin_class.opts = plugin_class.model._meta

        if not (plugin_class.has_change_permission(request, obj=text_plugin) and  # noqa
                _user_can_change_placeholder(request, text_plugin.placeholder)):
            raise PermissionDenied
        return HttpResponse(form.render_plugin(request))

    @method_decorator(require_POST)
    @xframe_options_sameorigin
    @transaction.atomic
    def delete_on_cancel(self, request):
        # This view is responsible for deleting a plugin
        # bypassing the delete permissions.
        try:
            text_plugin = self._get_text_plugin_from_request(request, data=request.POST)
        except ValidationError as error:
            return HttpResponseBadRequest(error.message)

        # This form validates the the given plugin is a child
        # of the text plugin or is a text plugin.
        # If the plugin is a child then we validate that this child
        # is not present in the text plugin (because then it's not a cancel).
        # If the plugin is a text plugin then we validate that the text
        # plugin does NOT have a real instance attached.
        form = DeleteOnCancelForm(request.POST, text_plugin=text_plugin)

        if not form.is_valid():
            message = ugettext('Unable to process your request.')
            return HttpResponseBadRequest(message)

        plugin_class = text_plugin.get_plugin_class_instance()
        # The following is needed for permission checking
        plugin_class.opts = plugin_class.model._meta

        # Check for add permissions because this view is meant
        # only for plugins created through the ckeditor
        # and the ckeditor plugin itself.
        if not (plugin_class.has_add_permission(request) and  # noqa
                _user_can_change_placeholder(request, text_plugin.placeholder)):
            raise PermissionDenied
        # Token is validated after checking permissions
        # to avoid non-auth users from triggering validation mechanism.
        form.delete()
        # 204 -> request was successful but no response returned.
        return HttpResponse(status=204)

    @classmethod
    def get_child_plugin_candidates(cls, slot, page):
        # This plugin can only have text_enabled plugins
        # as children.
        text_enabled_plugins = plugin_pool.get_text_enabled_plugins(
            placeholder=slot,
            page=page,
        )
        return text_enabled_plugins

    def get_form(self, request, obj=None, **kwargs):
        plugin = getattr(self, 'cms_plugin_instance', None) or obj
        get_plugin = plugin_pool.get_plugin
        child_plugin_types = self.get_child_classes(
            slot=plugin.placeholder.slot,
            page=self.page,
        )
        child_plugins = (get_plugin(name) for name in child_plugin_types)
        plugins = get_toolbar_plugin_struct(
            child_plugins,
            plugin.placeholder.slot,
            self.page,
        )
        form = self.get_form_class(
            request=request,
            plugins=plugins,
            plugin=plugin,
        )
        kwargs['form'] = form  # override standard form
        return super(TextPlugin, self).get_form(request, obj, **kwargs)

    def render(self, context, instance, placeholder):
        context.update({
            'body': plugin_tags_to_user_html(
                instance.body,
                context,
            ),
            'placeholder': placeholder,
            'object': instance
        })
        return context

    def save_model(self, request, obj, form, change):
        if getattr(self, 'cms_plugin_instance', None):
            # Because the plugin was created by manually
            # creating the CMSPlugin record, it's important
            # to assign all the values from the CMSPlugin record
            # to the real "non ghost" instance.
            fields = self.cms_plugin_instance._meta.fields

            for field in fields:
                # assign all the fields - we can do this, because object is
                # subclassing cms_plugin_instance (one to one relation)
                value = getattr(self.cms_plugin_instance, field.name)
                setattr(obj, field.name, value)

        super(TextPlugin, self).save_model(request, obj, form, change)
        # This must come after calling save
        # If `clean_plugins()` deletes child plugins, django-treebeard will call
        # save() again on the Text instance (aka obj in this context) to update mptt values (numchild, etc).
        # See this ticket for details https://github.com/divio/djangocms-text-ckeditor/issues/212
        obj.clean_plugins()

    def get_action_token(self, request, obj):
        plugin_id = force_text(obj.pk)
        # salt is different for every user
        signer = signing.Signer(salt=request.session.session_key)
        return signer.sign(plugin_id)

    def _get_plugin_or_404(self, pk):
        plugin_type = self.__class__.__name__
        plugins = (
            CMSPlugin
            .objects
            .select_related('placeholder', 'parent')
            .filter(plugin_type=plugin_type)
        )

        field = self.model._meta.pk

        try:
            object_id = field.to_python(unquote(pk))
        except (ValidationError, ValueError):
            raise Http404('Invalid plugin id')
        return get_object_or_404(plugins, pk=object_id)


plugin_pool.register_plugin(TextPlugin)
