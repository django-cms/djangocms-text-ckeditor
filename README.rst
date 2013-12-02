djangocms-text-ckeditor
=======================

Text Plugin for django-cms with CK-Editor

.. WARNING::
   ``cms.plugins.text`` and ``djangocms-text-ckeditor`` can't be used at the same time.

.. WARNING::
   For django CMS 2.3 and 2.4 use ``djangocms-text-ckeditor`` < 2 (e.g.: version 1.0.10).

   ``djangocms-text-ckeditor`` >= 2 is compatible with django CMS 3 only.


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

You can override the setting `CKEDITOR_SETTINGS` in your settings.py::

    CKEDITOR_SETTINGS = {
	    'language': '{{ language }}',
	    'toolbar': 'CMS',
	    'skin': 'moono',
	}

This is the default dict that holds all **CKEditor** settings. If you want to use the CKEditor in
your own models, then use the ``HTMLField`` from ``djangocms_text_ckeditor.fields`` and replace
``'toolbar': 'CMS'`` against ``'toolbar': 'HTMLField'`` in the above settings, in order to add an
additional Link/Unlink editor to the toolbar.

For an  overview of all the available settings have a look here:

http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html


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

Extending the plugin
--------------------

.. NOTE::
    Added in version 2.0.1

You can use this plugin as base to create your own CKEditor-based plugins.

You need to create your own plugin model extending ``AbstractClass``:

::

    from djangocms_text_ckeditor.models import AbstractText

    class MyTextModel(AbstractText):
        title = models.CharField(max_length=100)

and a plugin class extending ``TextPlugin`` class:

::

    from djangocms_text_ckeditor.cms_plugins import TextPlugin
    from .models import MyTextModel
    
    
    class MyTextPlugin(TextPlugin):
        name = _(u"My text plugin")
        model = MyTextModel
    plugin_pool.register_plugin(MyTextPlugin)

You can further customize your plugin as other plugins: http://django-cms.readthedocs.org/en/latest/extending_cms/custom_plugins.html

About CKEditor
--------------

The vurrent integrated Version of CKeditor is **4.3**. For a full documentation visit: http://ckeditor.com/
