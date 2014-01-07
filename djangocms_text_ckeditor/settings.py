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

TEXT_SAVE_IMAGE_FUNCTION = getattr(settings, 'TEXT_SAVE_IMAGE_FUNCTION', 'djangocms_text_ckeditor.picture_save.create_picture_plugin')

TEXT_HTML_SANITIZE = getattr(settings, 'TEXT_HTML_SANITIZE', True)
