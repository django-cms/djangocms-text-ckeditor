from django.conf import settings

#See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for all settings

CKEDITOR_SETTINGS = getattr(settings, 'CKEDITOR_SETTINGS', {
	'default': {
	    'language': '{{ language }}',
	    'toolbar': 'CMS',
	    'skin': 'moono',
		#'stylesSet': [
		#    {'name': 'Custom Style', 'element': 'h3', 'styles': {'color': 'Blue'}}
		#],
	    'toolbarCanCollapse': False,
	}
})

# Backward compatibility with single setting definition
if 'default' not in CKEDITOR_SETTINGS:
	CKEDITOR_SETTINGS = {'default': CKEDITOR_SETTINGS}

TEXT_SAVE_IMAGE_FUNCTION = getattr(settings, 'TEXT_SAVE_IMAGE_FUNCTION', 'djangocms_text_ckeditor.picture_save.create_picture_plugin')

