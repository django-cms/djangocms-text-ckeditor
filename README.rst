djangocms-text-ckeditor
=======================

Text Plugin for django-cms with CK-Editor.

The latest version of this package supports:

* Django >= 1.8
* django CMS >= 3.3

.. WARNING::
   - For django CMS 3.3.x use ``djangocms-text-ckeditor`` >= 3.0.x (e.g.: version 3.0.0).
   - For django CMS 3.2.x use ``djangocms-text-ckeditor`` <= 2.9.x (e.g.: version 2.9.3).
   - For django CMS 3.0 and 3.1 use ``djangocms-text-ckeditor`` <= 2.7 (e.g.: version 2.7.0).
   - For django CMS 2.3 and 2.4 use the ``djangocms-text-ckeditor`` 1.x releases (e.g.: version 1.0.10).
   - For Django 1.4 and 1.5 use ``djangocms-text-ckeditor`` < 2.7.
   - ``cms.plugins.text`` and ``djangocms-text-ckeditor`` can't be used at the same time.


Installation
------------

This plugin requires `django CMS` 3.3 or higher to be properly installed.

* In your projects `virtualenv`, run ``pip install djangocms-text-ckeditor``.
* Add ``djangocms_text_ckeditor`` to your ``INSTALLED_APPS`` (the order does not matter).
* Run ``manage.py migrate djangocms_text_ckeditor``.

Some notes:
***********

* If upgrading from previous ``djangocms_text_ckeditor``, be aware that the
  names of the migration modules have changed:

  * Django 1.6: ``djangocms_text_ckeditor.migrations`` to
    ``djangocms_text_ckeditor.south_migrations``
  * Django 1.7: ``djangocms_text_ckeditor.migrations_django`` to
    ``djangocms_text_ckeditor.migrations``
* If using Django 1.6 add ``'djangocms_text_ckeditor': 'djangocms_text_ckeditor.south_migrations',``
  to ``SOUTH_MIGRATION_MODULES``  (or define ``SOUTH_MIGRATION_MODULES`` if it does not exists);
* If using Django 1.7 and you were using version prior to 2.5, remove
  ``djangocms_text_ckeditor`` from ``MIGRATION_MODULES``;


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
(see docs about the `CMS_PLACEHOLDER_CONF`_ setting in Django CMS 3.0).
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

.. _CMS_PLACEHOLDER_CONF: http://docs.django-cms.org/en/latest/how_to/placeholders.html?highlight=cms_placeholder_conf

CKEDITOR_SETTINGS
*****************

You can override the setting ``CKEDITOR_SETTINGS`` in your settings.py::

    CKEDITOR_SETTINGS = {
        'language': '{{ language }}',
        'toolbar': 'CMS',
        'skin': 'moono',
    }

This is the default dict that holds all **CKEditor** settings.

Customizing plugin editor
#########################

To customize the plugin editor, use `toolbar_CMS` attribute, as in::

    CKEDITOR_SETTINGS = {
        'language': '{{ language }}',
        'toolbar_CMS': [
            ['Undo', 'Redo'],
            ['cmsplugins', '-', 'ShowBlocks'],
            ['Format', 'Styles'],
        ],
        'skin': 'moono',
    }

Customizing HTMLField editor
############################

If you use ``HTMLField`` from ``djangocms_text_ckeditor.fields`` in your own
models, use `toolbar_HTMLField` attribute::

    CKEDITOR_SETTINGS = {
        'language': '{{ language }}',
        'toolbar_HTMLField': [
            ['Undo', 'Redo'],
            ['ShowBlocks'],
            ['Format', 'Styles'],
        ],
        'skin': 'moono',
    }


You can further customize each `HTMLField` field by using different
configuration parameter in your settings::


    models.py

    class Model1(models.Model):
        text = HTMLField(configuration='CKEDITOR_SETTINGS_MODEL1')

    class Model2(models.Model):
        text = HTMLField(configuration='CKEDITOR_SETTINGS_MODEL2')

    settings.py

    CKEDITOR_SETTINGS_MODEL1 = {
        'toolbar_HTMLField': [
            ['Undo', 'Redo'],
            ['ShowBlocks'],
            ['Format', 'Styles'],
            ['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
        ]
    }

    CKEDITOR_SETTINGS_MODEL2 = {
        'toolbar_HTMLField': [
            ['Undo', 'Redo'],
            ['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
        ]
    }


#. Add `configuration='MYSETTING'` to the `HTMLField` usage(s) you want to
   customize;
#. Define a setting parameter named as the string used in the `configuration`
   argument of the `HTMLField` instance with the desidered configuration;

Values not specified in your custom configuration will be taken from the global
``CKEDITOR_SETTINGS``.

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

This field does not allow you to embed any other CMS plugins within the text editor. Plugins can only be embedded
within ``Placeholder`` fields.

If you need to allow additional plugins to be embedded in a HTML field, convert the ``HTMLField`` to a ``Placeholderfield``
and configure the placeholder to only accept TextPlugin. For more information on using placeholders outside of the CMS see:

http://docs.django-cms.org/en/latest/introduction/templates_placeholders.html


Auto Hyphenate Text
-------------------

You can hyphenate the text entered into the editor, so that the HTML entity ``&shy;`` (soft-hyphen_)
automatically is added in between words, at the correct syllable boundary.

To activate this feature, ``pip install django-softhyphen``. In ``settings.py`` add ``'softhyphen'``
to the list of ``INSTALLED_APPS``. django-softhyphen_ also installs hyphening dictionaries for 25
natural languages.

In case you already installed ``django-softhyphen`` but do not want to soft hyphenate, set
``TEXT_AUTO_HYPHENATE`` to ``False``.

.. _soft-hyphen: http://www.w3.org/TR/html4/struct/text.html#h-9.3.3
.. _django-softhyphen: https://github.com/datadesk/django-softhyphen

Extending the plugin
--------------------

.. NOTE::
    Added in version 2.0.1

You can use this plugin as base to create your own CKEditor-based plugins.

You need to create your own plugin model extending ``AbstractText``::

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

Note that if you override the `render` method that is inherited from the base ``TextPlugin`` class, any child text
plugins will not render correctly. You must call the super ``render`` method in order for ``plugin_tags_to_user_html()``
to render out all child plugins located in the ``body`` field. For example::

    from djangocms_text_ckeditor.cms_plugins import TextPlugin
    from .models import MyTextModel


    class MyTextPlugin(TextPlugin):
        name = _(u"My text plugin")
        model = MyTextModel

        def render(self, context, instance, placeholder):
            context.update({
                'name': instance.name,
            })
            # Other custom render code you may have
        return super(MyTextPlugin, self).render(context, instance, placeholder)

    plugin_pool.register_plugin(MyTextPlugin)

You can further `customize your plugin`_ as other plugins.

.. _customize your plugin: http://docs.django-cms.org/en/latest/how_to/custom_plugins.html

Adding plugins to the "CMS Plugins" dropdown
--------------------------------------------

If you have another plugin that you want to use inside texts you can make them appear in the dropdown by making them text_enabled.
Check in `django-cms doc`_ how to do this.

.. _django-cms doc: http://docs.django-cms.org/en/latest/reference/plugins.html#text-enabled

Configurable sanitizer
----------------------

``djangocms-text-ckeditor`` uses `html5lib`_ to sanitize HTML to avoid
security issues and to check for correct HTML code.
Sanitisation may strip tags usesful for some use cases such as ``iframe``;
you may customize the tags and attributes allowed by overriding the
``TEXT_ADDITIONAL_TAGS`` and ``TEXT_ADDITIONAL_ATTRIBUTES`` settings::

    TEXT_ADDITIONAL_TAGS = ('iframe',)
    TEXT_ADDITIONAL_ATTRIBUTES = ('scrolling', 'allowfullscreen', 'frameborder')

In case you need more control on sanitisation you can extend AllowTokenParser class and define
your logic into parse() method. For example, if you want to skip your donut attribute during
sanitisation, you can create a class like this::

    from djangocms_text_ckeditor.sanitizer import AllowTokenParser


    class DonutAttributeParser(AllowTokenParser):

        def parse(self, attribute, val):
            return attribute.startswith('donut-')

And add your class to ``ALLOW_TOKEN_PARSERS`` settings::

    ALLOW_TOKEN_PARSERS = (
        'mymodule.DonutAttributeParser',
    )

**NOTE**: Some versions of CKEditor will pre-sanitize your text before passing it to the web server,
rendering the above settings useless. To ensure this does not happen, you may need to add the
following parameters to ``CKEDITOR_SETTINGS``::

      ...
      'basicEntities': False,
      'entities': False,
      ...

To completely disable the feature, set ``TEXT_HTML_SANITIZE = False``.

See the `html5lib documentation`_ for further information.

.. _html5lib: https://pypi.python.org/pypi/html5lib
.. _html5lib documentation: https://code.google.com/p/html5lib/wiki/UserDocumentation#Sanitizing_Tokenizer

Search
------

djangocms-text-ckeditor works well with `aldryn-search <https://github.com/aldryn/aldryn-search>`_ to make text content using Haystack.

About CKEditor
--------------

The current integrated Version of CKeditor is **4.5.4**. For a full documentation visit: http://ckeditor.com/
