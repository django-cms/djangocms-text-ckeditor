import json

from django.conf import settings
from django.forms import Textarea
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe
from django.utils.translation.trans_real import get_language

import djangocms_text_ckeditor.settings as text_settings


class TextEditorWidget(Textarea):
    def __init__(self, attrs=None, installed_plugins=None, pk=None, placeholder=None, plugin_language=None):
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

        super(TextEditorWidget, self).__init__(attrs)
        self.installed_plugins = installed_plugins
        self.pk = pk
        self.placeholder = placeholder
        self.plugin_language = plugin_language

    def render_textarea(self, name, value, attrs=None):
        return super(TextEditorWidget, self).render(name, value, attrs)

    def render_additions(self, name, value, attrs=None):
        language = get_language().split('-')[0]
        ck_settings = text_settings.CKEDITOR_SETTINGS
        if not self.placeholder and 'toolbar_htmlfield' in ck_settings:
            ck_settings['toolbar'] = ck_settings['toolbar_htmlfield']
        context = {
            'ckeditor_class': self.ckeditor_class,
            'name': name,
            'language': language,
            'settings': language.join(json.dumps(ck_settings).split("{{ language }}")),
            'STATIC_URL': settings.STATIC_URL,
            'installed_plugins': self.installed_plugins,
            'plugin_pk': self.pk,
            'plugin_language': self.plugin_language,
            'placeholder': self.placeholder
        }
        return mark_safe(render_to_string('cms/plugins/widgets/ckeditor.html', context))

    def render(self, name, value, attrs=None):
        return self.render_textarea(name, value, attrs) + \
               self.render_additions(name, value, attrs)
