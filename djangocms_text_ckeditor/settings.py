from django.conf import settings

#See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for all settings

CKEDITOR_SETTINGS = getattr(settings, 'CKEDITOR_SETTINGS', {
    'language': '{{ language }}',
    'toolbar': 'CMS',
    'skin': 'moono',
#    'stylesSet': [
#        {'name': 'Custom Style', 'element': 'h3', 'styles': {'color': 'Blue'}}
#    ],
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
TEXT_HTML_SANITIZE = getattr(settings, 'TEXT_HTML_SANITIZE', True)
