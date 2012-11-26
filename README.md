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


You can add a new setting to your settings.py called `COLUMN_WIDTH_CHOICES`

the default is::

	COLUMN_WIDTH_CHOICES = (
	    ('1', _("normal")),
	    ('2', _("2x")),
	    ('3', _("3x")),
	    ('4', _("4x"))
	)

but you can change that to fit your CSS grid framework or other purposes.

Translations
------------

If you want to help translate the plugin please do it on transifex:

https://www.transifex.com/projects/p/django-cms/resource/djangocms-column/