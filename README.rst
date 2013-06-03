djangocms-text-ckeditor
=======================

Text Plugin for django-cms with CK-Editor

.. WARNING::
   ``cms.plugins.text`` and ``djangocms-text-ckeditor`` can't be used at the same time.


Installation
------------

This plugin requires `django CMS` 2.3 or higher to be properly installed.

* In your projects `virtualenv`_, run ``pip install djangocms-text-ckeditor``.
* Add ``'djangocms_text_ckeditor'`` to your ``INSTALLED_APPS`` setting **BEFORE** the ``cms`` entry.
* Run ``manage.py migrate djangocms_text_ckeditor``.


Upgrading from ``cms.plugins.text``
-----------------------------------

* Remove ``cms.plugins.text`` from ``INSTALLED_APPS``
* Add ``djangocms_text_ckeditor`` to ``INSTALLED_APPS``
* Run ``python manage.py migrate djangocms_text_ckeditor 0001 --fake``


Usage
-----

You can add a new setting to your settings.py called `CKEDITOR_SETTINGS`

the default is::

    CKEDITOR_SETTINGS = {
	    'language': '{{ language }}',
	    'toolbar': 'CMS',
	    'skin': 'moono'
	}

It is a dict that hold all CKEditor settings. For an  overview of all the available settings have a look here:

http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for all settings

If you want to use the ckeditor in your own models there is a HTMLField in djangocms_text_ckeditor.fields.

Drag & Drop Images
------------------

In IE and Firefox based browsers it is possible to drag and drop a picture into the text editor.
This image is base64 encoded and lives in the 'src' attribute as a 'data' tag.

We detect this images, encode them and convert them to picture plugins.
If you want to overwirite this behavior for your own picture plugin:

There is a setting called:

`TEXT_SAVE_IMAGE_FUNCTION = 'djangocms_text_ckeditor.picture_save.create_picture_plugin'` 

you can overwrite this setting in your settings.py and point it to a function that handles image saves.
Have a look at the function `create_picture_plugin` for details.

To completely disable the feature, set `TEXT_SAVE_IMAGE_FUNCTION = None`.


Translations
------------

If you want to help translate the plugin please do it on transifex:

https://www.transifex.com/projects/p/django-cms/resource/djangocms-text-ckeditor/


Usage as a model field
----------------------

If you want to use the widget on your own model fields, you can! Just import the provided ``HTMLField`` like so:

::

    from djangocms_text_ckeditor.fields import HTMLField

And use it in your models, just like a TextField:

::

    class MyModel(models.Model):
        myfield = HTMLField(blank=True)

If you are using South migrations, you might need to add an inspection rule:

::

    try:
        from south.modelsinspector import add_introspection_rules
        add_introspection_rules([], ['^djangocms_text_ckeditor\.fields\.HTMLField'])
    except ImportError:
        pass


