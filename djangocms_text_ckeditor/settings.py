from typing import Dict, List, Union

from django.conf import settings
from django.templatetags.static import static
from django.utils.translation import gettext_lazy as _


# See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
# for all settings

CKEDITOR_SETTINGS: Dict[str, Union[str, List]] = {
    'language': '{{ language }}',
    'toolbar': 'CMS',
    'skin': 'moono-lisa',
    'baseFloatZIndex': 10000000,
    'toolbarCanCollapse': False,
    'removePlugins': ['flash'],
    **getattr(settings, 'CKEDITOR_SETTINGS', {}),
}

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
# This would make sure correct urls are created for
# when static files are hosted on django and on a CDN. Old code was working fine for Django but not for CDNs.
TEXT_CKEDITOR_BASE_PATH = getattr(
    settings, 'TEXT_CKEDITOR_BASE_PATH', static('djangocms_text_ckeditor/ckeditor/'),
)
TEXT_AUTO_HYPHENATE = getattr(settings, 'TEXT_AUTO_HYPHENATE', True)
TEXT_PLUGIN_NAME = getattr(settings, 'TEXT_PLUGIN_NAME', _('Text'))
TEXT_PLUGIN_MODULE_NAME = getattr(settings, 'TEXT_PLUGIN_MODULE_NAME', _('Generic'))

ALLOW_TOKEN_PARSERS = (
    'djangocms_text_ckeditor.attribute_parsers.DataAttributeParser',
    *getattr(settings, 'ALLOW_TOKEN_PARSERS', []),
)
TEXT_INLINE_EDITING = getattr(settings, 'TEXT_INLINE_EDITING', False)
