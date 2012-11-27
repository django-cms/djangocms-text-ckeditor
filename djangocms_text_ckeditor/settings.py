from django.conf import settings

# Uses TinyMCE as editor (no inline plugins). Requires django-tinymce app. 
# If false, then WYMEditor is used. 
USE_TINYMCE = getattr(settings, 'CMS_USE_TINYMCE', "tinymce" in settings.INSTALLED_APPS)

SKIN = getattr(settings, 'CKEDITOR_SKIN', 'kama')

