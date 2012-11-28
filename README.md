djangocms-text-ckeditor
=======================

Text Plugin for django-cms with CK-Editor

Installation
------------

This plugin requires `django CMS` 2.3 or higher to be properly installed.

* In your projects `virtualenv`_, run ``pip install djangocms-text-ckeditor``.
* Add ``'djangocms_text_ckeditor'`` to your ``INSTALLED_APPS`` setting.
* Run ``manage.py migrate djangocms_text_ckeditor``.


Usage
-----


You can add a new setting to your settings.py called `CKEDITOR_SETTINGS`

the default is::

	CKEDITOR_SETTINGS = {
	    'language': '{{ language }}',
	    'toolbar': 'Basic',
	    'skin': 'kama',
	    'toolbarCanCollapse': False,
	}

It is a dict that hold all CKEditor settings. For an  overview of all the available settings have a look here:

http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for all settings


Translations
------------

If you want to help translate the plugin please do it on transifex:

https://www.transifex.com/projects/p/django-cms/resource/djangocms-text-ckeditor/