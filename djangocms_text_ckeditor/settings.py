import warnings
from django.conf import settings

#See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for all settings

CKEDITOR_SETTINGS = getattr(settings, 'CKEDITOR_SETTINGS', {
    'language': '{{ language }}',
    'toolbar': 'CMSPlaceholder',
    'skin': 'moono',
#    'stylesSet': [
#        {'name': 'Custom Style', 'element': 'h3', 'styles': {'color': 'Blue'}}
#    ],
    'toolbarCanCollapse': False,
})

if CKEDITOR_SETTINGS.get('toolbar') == 'CMS':
    warnings.warn("'toolbar': 'CMS' is deprecated in CKEDITOR_SETTINGS; use 'toolbar': 'CMSPlaceholder' instead",
              DeprecationWarning)
    CKEDITOR_SETTINGS['toolbar'] = 'CMSPlaceholder'

TEXT_SAVE_IMAGE_FUNCTION = getattr(settings, 'TEXT_SAVE_IMAGE_FUNCTION', 'djangocms_text_ckeditor.picture_save.create_picture_plugin')
