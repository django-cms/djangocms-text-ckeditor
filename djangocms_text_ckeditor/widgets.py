import json
from copy import deepcopy
from itertools import groupby

from django import forms
from django.conf import settings
from django.core.serializers.json import DjangoJSONEncoder
from django.template.loader import render_to_string
from django.templatetags.static import static
from django.utils.safestring import mark_safe
from django.utils.translation.trans_real import get_language, gettext

from cms.utils.urlutils import admin_reverse, static_with_version

from . import settings as text_settings
from .utils import cms_placeholder_add_plugin


# this path is changed automatically whenever you run `gulp bundle`
PATH_TO_JS = 'djangocms_text_ckeditor/js/dist/bundle-a9032984d4.cms.ckeditor.min.js'


class TextEditorWidget(forms.Textarea):
    def __init__(self, attrs=None, installed_plugins=None, pk=None,
                 placeholder=None, plugin_language=None, plugin_position=None,
                 configuration=None, cancel_url=None, render_plugin_url=None, action_token=None,
                 delete_on_cancel=False, body_css_classes=''):
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
                'class': new_class.strip(),
            })
        attrs.update({
            'data-ckeditor-basepath': text_settings.TEXT_CKEDITOR_BASE_PATH,
        })
        super().__init__(attrs)
        self.installed_plugins = installed_plugins  # general
        self.pk = pk  # specific
        self.placeholder = placeholder  # specific
        self.plugin_language = plugin_language
        self.plugin_position = plugin_position
        if configuration and getattr(settings, configuration, False):
            conf = deepcopy(text_settings.CKEDITOR_SETTINGS)
            conf.update(getattr(settings, configuration))
            self.configuration = conf  # specific
        else:
            self.configuration = text_settings.CKEDITOR_SETTINGS
        self.cancel_url = cancel_url
        self.render_plugin_url = render_plugin_url
        self.action_token = action_token
        self.delete_on_cancel = delete_on_cancel
        self.body_css_classes = body_css_classes if body_css_classes else self.configuration.get('bodyClass', '')

    @property
    def media(self):
        return forms.Media(
            css={
                'all': ('djangocms_text_ckeditor/css/cms.ckeditor.css',),
            },
            js=(
                static_with_version('cms/js/dist/bundle.admin.base.min.js'),
                static(PATH_TO_JS),
            ),
        )

    def render_textarea(self, name, value, attrs=None, renderer=None):
        return super().render(name, value, attrs, renderer)

    def get_ckeditor_settings(self, language):
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

        configuration['bodyClass'] = self.body_css_classes
        config = json.dumps(configuration, cls=DjangoJSONEncoder)

        # Group plugins by module
        if self.installed_plugins:
            plugins = groupby(sorted(self.installed_plugins, key=lambda x: x.get("module")), key=lambda x: x.get("module"))
            plugins = [{'group': group, 'items':
                [{'title': item.get('name'), 'type': item.get('value')} for item in items]} for group, items in plugins]
        else:
            plugins = []

        return {
            'language': language,
            'installed_plugins': self.installed_plugins,
            'static_url': settings.STATIC_URL + 'djangocms_text_ckeditor',
            'plugin_id': self.pk,
            'plugin_language': self.plugin_language,
            'plugin_position': self.plugin_position,
            'placeholder_id': self.placeholder.pk if self.placeholder else None,
            'render_plugin_url': self.render_plugin_url or '',
            'add_plugin_url': admin_reverse(cms_placeholder_add_plugin) if self.placeholder else '',
            'cancel_plugin_url': self.cancel_url or '',
            'delete_on_cancel': self.delete_on_cancel or False,
            'action_token': self.action_token or '',
            'lang': {
                'toolbar': gettext('CMS Plugins'),
                'add': gettext('Add CMS Plugin'),
                'edit': gettext('Edit CMS Plugin'),
                'aria': gettext('CMS Plugins'),
            },
            'plugins': plugins,
            'options': json.loads(config.replace('{{ language }}', language)),
        }

    def render_additions(self, name, value, attrs=None, renderer=None):
        # id attribute is always present when rendering a widget
        ckeditor_selector = attrs['id']
        language = get_language().split('-')[0]

        context = {
            'ckeditor_class': self.ckeditor_class,
            'ckeditor_selector': ckeditor_selector,
            'ckeditor_function': ckeditor_selector.replace('-', '_'),
            'name': name,
            'language': language,
            'STATIC_URL': settings.STATIC_URL,
            'CKEDITOR_BASEPATH': text_settings.TEXT_CKEDITOR_BASE_PATH,
            'installed_plugins': self.installed_plugins,
            'plugin_pk': self.pk,
            'plugin_language': self.plugin_language,
            'plugin_position': self.plugin_position,
            'placeholder': self.placeholder,
            'widget': self,
            'renderer': renderer,
            'ckeditor_settings': self.get_ckeditor_settings(language),
            'ckeditor_settings_id': 'ck-cfg-' + (str(self.pk) if self.pk else ckeditor_selector),
        }
        return mark_safe(render_to_string('cms/plugins/widgets/ckeditor.html', context))

    def render(self, name, value, attrs=None, renderer=None):
        return (
            self.render_textarea(name, value, attrs) + self.render_additions(name, value, attrs, renderer)
        )
