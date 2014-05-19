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

* In your projects `virtualenv`, run ``pip install djangocms-text-ckeditor``.
* Add ``'djangocms_text_ckeditor'`` to your ``INSTALLED_APPS`` setting **BEFORE** the ``cms`` entry.
* Run ``manage.py migrate djangocms_text_ckeditor``.

Upgrading from ``cms.plugins.text``
-----------------------------------

* Remove ``cms.plugins.text`` from ``INSTALLED_APPS``
* Add ``djangocms_text_ckeditor`` to ``INSTALLED_APPS``
* Run ``python manage.py migrate djangocms_text_ckeditor 0001 --fake``


Usage
-----

Default content in Placeholder
******************************

If you use Django-CMS >= 3.0, you can use ``TextPlugin`` in "default_plugins"
(see docs about the CMS_PLACEHOLDER_CONF setting in Django CMS 3.0).
``TextPlugin`` requires just one value: ``body`` where you write your default
HTML content. If you want to add some "default children" to your
automagically added plugin (i.e. a ``LinkPlugin``), you have to put children
references in the body. References are ``"%(_tag_child_<order>)s"`` with the
inserted order of chidren. For example::

    CMS_PLACEHOLDER_CONF = {
        'content': {
            'name' : _('Content'),
            'plugins': ['TextPlugin', 'LinkPlugin'],
            'default_plugins':[
                {
                    'plugin_type':'TextPlugin',
                    'values':{
                        'body':'<p>Great websites : %(_tag_child_1)s and %(_tag_child_2)s</p>'
                    },
                    'children':[
                        {
                            'plugin_type':'LinkPlugin',
                            'values':{
                                'name':'django',
                                'url':'https://www.djangoproject.com/'
                            },
                        },
                        {
                            'plugin_type':'LinkPlugin',
                            'values':{
                                'name':'django-cms',
                                'url':'https://www.django-cms.org'
                            },
                        },
                    ]
                },
            ]
        }
    }

CKEDITOR_SETTINGS
*****************

You can override the setting ``CKEDITOR_SETTINGS`` in your settings.py::

    CKEDITOR_SETTINGS = {
        'language': '{{ language }}',
        'toolbar': 'CMS',
        'skin': 'moono',
    }

This is the default dict that holds all **CKEditor** settings. If you want to
use the CKEditor in your own models, then use the ``HTMLField`` from
``djangocms_text_ckeditor.fields`` and replace ``'toolbar': 'CMS'`` with
``'toolbar': 'HTMLField'`` in the above settings, in order to add an

For an  overview of all the available settings have a look here:

http://docs.ckeditor.com/#!/api/CKEDITOR.config

Drag & Drop Images
------------------

In IE and Firefox based browsers it is possible to drag and drop a picture into the text editor.
This image is base64 encoded and lives in the 'src' attribute as a 'data' tag.

We detect this images, encode them and convert them to picture plugins.
If you want to overwirite this behavior for your own picture plugin:

There is a setting called::

    TEXT_SAVE_IMAGE_FUNCTION = 'djangocms_text_ckeditor.picture_save.create_picture_plugin'

you can overwrite this setting in your settings.py and point it to a function that handles image saves.
Have a look at the function ``create_picture_plugin`` for details.

To completely disable the feature, set ``TEXT_SAVE_IMAGE_FUNCTION = None``.


Translations
------------

If you want to help translate the plugin please do it on transifex:

https://www.transifex.com/projects/p/django-cms/resource/djangocms-text-ckeditor/


Usage as a model field
----------------------

If you want to use the widget on your own model fields, you can! Just import the provided ``HTMLField`` like so::

    from djangocms_text_ckeditor.fields import HTMLField

And use it in your models, just like a ``TextField``::

    class MyModel(models.Model):
        myfield = HTMLField(blank=True)

Extending the plugin
--------------------

.. NOTE::
    Added in version 2.0.1

You can use this plugin as base to create your own CKEditor-based plugins.

You need to create your own plugin model extending ``AbstractClass``::

    from djangocms_text_ckeditor.models import AbstractText

    class MyTextModel(AbstractText):
        title = models.CharField(max_length=100)

and a plugin class extending ``TextPlugin`` class::

    from djangocms_text_ckeditor.cms_plugins import TextPlugin
    from .models import MyTextModel


    class MyTextPlugin(TextPlugin):
        name = _(u"My text plugin")
        model = MyTextModel
    plugin_pool.register_plugin(MyTextPlugin)

You can further customize your plugin as other plugins: http://django-cms.readthedocs.org/en/latest/extending_cms/custom_plugins.html

Adding plugins to the "CMS Plugins" dropdown
--------------------------------------------

If you have another plugin that you want to use inside texts you can make them appear in the dropdown by making them text_enabled.
Check in `django-cms doc`_ how to do this.

.. _django-cms doc: http://django-cms.readthedocs.org/en/develop/extending_cms/custom_plugins.html#text-enabled

Configurable sanitizer
----------------------

``djangocms-text-ckeditor`` uses `html5lib`_ to sanitize HTML to avoid
security issues and to check for correct HTML code.
Sanitisation may strip tags usesful for some use cases such as ``iframe``;
you may customize the tags and attributes allowed by overriding the
``TEXT_ADDITIONAL_TAGS`` and ``TEXT_ADDITIONAL_ATTRIBUTES`` settings::

    TEXT_ADDITIONAL_TAGS = ('iframe',)
    TEXT_ADDITIONAL_TAGS = ('scrolling', 'allowfullscreen', 'frameborder')

To completely disable the feature, set ``TEXT_HTML_SANITIZE = False``.

See the `html5lib documentation`_ for further information.

.. _html5lib: https://pypi.python.org/pypi/html5lib
.. _html5lib documentation: https://code.google.com/p/html5lib/wiki/UserDocumentation#Sanitizing_Tokenizer

About CKEditor
--------------

The current integrated Version of CKeditor is **4.3**. For a full documentation visit: http://ckeditor.com/
