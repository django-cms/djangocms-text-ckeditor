from django.conf import settings
import settings as text_settings
from django.conf import settings
from django.forms import Textarea
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe
from django.utils.translation.trans_real import get_language
from djangocms_text_ckeditor.utils import static_url
from cms.utils import cms_static_url
from django.utils import simplejson

class TextEditorWidget(Textarea):
    def __init__(self, attrs=None, installed_plugins=None, pk=None):
        """
        Create a widget for editing text + plugins.

        installed_plugins is a list of plugins to display that are text_enabled
        """
        self.attrs = {'class': 'ckeditor'}
        if attrs:
            self.attrs.update(attrs)
        super(TextEditorWidget, self).__init__(attrs)
        self.installed_plugins = installed_plugins
        self.pk = pk

    def render_textarea(self, name, value, attrs=None):
        return super(TextEditorWidget, self).render(name, value, attrs)

    def render_additions(self, name, value, attrs=None):
        language = get_language().split('-')[0]
        context = {
            'name': name,
            'language': language,
            'settings': language.join(simplejson.dumps(text_settings.CKEDITOR_SETTINGS).split("{{ language }}")),
            'STATIC_URL': settings.STATIC_URL,
            'installed_plugins': self.installed_plugins,
            'plugin_pk': self.pk,
        }
        return mark_safe(render_to_string('cms/plugins/widgets/ckeditor.html', context))

    def render(self, name, value, attrs=None):
        return self.render_textarea(name, value, attrs) + \
            self.render_additions(name, value, attrs)

    class Media:
        css = {
            'all': ('%scss/cms.ckeditor.css' % settings.STATIC_URL,)
        }
        js = ('%sckeditor/ckeditor.js' % settings.STATIC_URL,
              '%sjs/cms.ckeditor.js' % settings.STATIC_URL,)
