# -*- coding: utf-8 -*-
import json
from copy import deepcopy

from django import forms
from django.conf import settings
from django.contrib.admin.templatetags.admin_static import static
from django.core.serializers.json import DjangoJSONEncoder
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe
from django.utils.translation.trans_real import get_language

from cms.utils.urlutils import static_with_version

from . import settings as text_settings

# this path is changed automatically whenever you run `gulp bundle`
PATH_TO_JS = 'djangocms_text_ckeditor/js/dist/bundle-45a646fecc.cms.ckeditor.min.js'


class TextEditorWidget(forms.Textarea):
    def __init__(self, attrs=None, installed_plugins=None, pk=None,
                 placeholder=None, plugin_language=None, configuration=None,
                 cancel_url=None, render_plugin_url=None, action_token=None,
                 delete_on_cancel=False):
        """
        Create a widget for editing text + plugins.

        installed_plugins is a list of plugins to display that are text_enabled
        """
        if attrs is None:
            attrs = {}

        self.ckeditor_class = 'CMS_CKEditor'
        if self.ckeditor_class not in attrs.get('class', '').join(' '):
            new_class = attrs.get('class', '') + ' %s' % self.ckeditor_class
            attrs.update({
                'class': new_class.strip()
            })
        attrs.update({
            'data-ckeditor-basepath': text_settings.TEXT_CKEDITOR_BASE_PATH
        })
        super(TextEditorWidget, self).__init__(attrs)
        self.installed_plugins = installed_plugins
        self.pk = pk
        self.placeholder = placeholder
        self.plugin_language = plugin_language
        if configuration and getattr(settings, configuration, False):
            conf = deepcopy(text_settings.CKEDITOR_SETTINGS)
            conf.update(getattr(settings, configuration))
            self.configuration = conf
        else:
            self.configuration = text_settings.CKEDITOR_SETTINGS
        self.cancel_url = cancel_url
        self.render_plugin_url = render_plugin_url
        self.action_token = action_token
        self.delete_on_cancel = delete_on_cancel

    @property
    def media(self):
        return forms.Media(
            css={
                'all': ('djangocms_text_ckeditor/css/cms.ckeditor.css',)
            },
            js=(
                static_with_version('cms/js/dist/bundle.admin.base.min.js'),
                static(PATH_TO_JS),
            )
        )

    def render_textarea(self, name, value, attrs=None, renderer=None):
        return super(TextEditorWidget, self).render(name, value, attrs, renderer)

    def render_additions(self, name, value, attrs=None, renderer=None):
        # id attribute is always present when rendering a widget
        ckeditor_selector = attrs['id']
        language = get_language().split('-')[0]
        configuration = deepcopy(self.configuration)
        # We are in a plugin -> we use toolbar_CMS or a custom defined toolbar
        if self.placeholder:
            configuration['toolbar'] = configuration.get('toolbar', 'CMS')
        # We are not in a plugin but toolbar is set to CMS (the default) ->
        # we force the use of toolbar_HTMLField
        elif configuration.get('toolbar', False) == 'CMS':
            configuration['toolbar'] = 'HTMLField'
        # Toolbar is not set or set to a custom value -> we use the custom
        # value or fallback to HTMLField
        else:
            configuration['toolbar'] = configuration.get('toolbar', 'HTMLField')

        config = json.dumps(configuration, cls=DjangoJSONEncoder)
        context = {
            'ckeditor_class': self.ckeditor_class,
            'ckeditor_selector': ckeditor_selector,
            'ckeditor_function': ckeditor_selector.replace('-', '_'),
            'name': name,
            'language': language,
            'settings': config.replace("{{ language }}", language),
            'STATIC_URL': settings.STATIC_URL,
            'CKEDITOR_BASEPATH': text_settings.TEXT_CKEDITOR_BASE_PATH,
            'installed_plugins': self.installed_plugins,
            'plugin_pk': self.pk,
            'plugin_language': self.plugin_language,
            'placeholder': self.placeholder,
            'widget': self,
            'renderer': renderer,
        }
        return mark_safe(render_to_string('cms/plugins/widgets/ckeditor.html', context))

    def render(self, name, value, attrs=None, renderer=None):
        return (
            self.render_textarea(name, value, attrs) + self.render_additions(name, value, attrs, renderer)
        )
