# -*- coding: utf-8 -*-
try:
    from urllib.parse import urljoin
except ImportError:
    # Python 2
    from urlparse import urljoin

from django.conf import settings
from django.utils.translation import ugettext_lazy as _

# See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
# for all settings

CKEDITOR_SETTINGS = getattr(settings, 'CKEDITOR_SETTINGS', {
    'language': '{{ language }}',
    'toolbar': 'CMS',
    'skin': 'moono-lisa',
    'toolbarCanCollapse': False,
})

INSTALLED_APPS = getattr(settings, 'INSTALLED_APPS', [])
if 'cms.plugins.picture' in INSTALLED_APPS or 'djangocms_picture' in INSTALLED_APPS:
    save_function_default = 'djangocms_text_ckeditor.picture_save.create_picture_plugin'
else:
    save_function_default = None

TEXT_SAVE_IMAGE_FUNCTION = getattr(settings, 'TEXT_SAVE_IMAGE_FUNCTION', save_function_default)
TEXT_ADDITIONAL_TAGS = getattr(settings, 'TEXT_ADDITIONAL_TAGS', ())
TEXT_ADDITIONAL_ATTRIBUTES = getattr(settings, 'TEXT_ADDITIONAL_ATTRIBUTES', ())
TEXT_ADDITIONAL_PROTOCOLS = getattr(settings, 'TEXT_ADDITIONAL_PROTOCOLS', ())
TEXT_CKEDITOR_CONFIGURATION = getattr(settings, 'TEXT_CKEDITOR_CONFIGURATION', None)
TEXT_HTML_SANITIZE = getattr(settings, 'TEXT_HTML_SANITIZE', True)
TEXT_CKEDITOR_BASE_PATH = getattr(settings, 'TEXT_CKEDITOR_BASE_PATH', urljoin(settings.STATIC_URL, 'djangocms_text_ckeditor/ckeditor/'))
TEXT_AUTO_HYPHENATE = getattr(settings, 'TEXT_AUTO_HYPHENATE', True)
TEXT_PLUGIN_NAME = getattr(settings, 'TEXT_PLUGIN_NAME', _("Text"))
TEXT_PLUGIN_MODULE_NAME = getattr(settings, 'TEXT_PLUGIN_MODULE_NAME', _("Generic"))

ALLOW_TOKEN_PARSERS = (
    'djangocms_text_ckeditor.attribute_parsers.DataAttributeParser',
)
