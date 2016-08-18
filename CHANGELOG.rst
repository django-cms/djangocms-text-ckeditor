CHANGELOG
=========

3.1.0 (2016-08-18)
------------------

* Added support for inline preview of text enabled CMS plugins
* Added support for plugins to declare "text_editor_preview=False" in order for
  them to be rendered with old-style label (useful for plugins with no valuable
  visual representation, such as snippet, spacer, etc).


3.0.1 (2016-07-15)
------------------

* Replace remaining CMS base module with CMS admin bundle that was missed in
  2.8.0
* Updated ckeditor to 4.5.9
* Freeze html5lib-python<0.99999999/1.0b9


3.0.0 (2016-05-26)
------------------

* Added support for django CMS 3.3
* Backwards incompatible with django CMS < 3.3


2.9.3 (2016-04-27)
------------------

* Adds work-around for Django Parler internal caching


2.9.2 (2016-04-26)
------------------

* Adds HtmlFormField
* Moves text sanitation logic to the HtmlFormField
* Text coming from an HTMLField is now marked safe by default.


2.9.1 (2015-03-29)
------------------

* Fixes backwards compatibility with Django 1.6
* Fixes bug on Text.objects.create()


2.9.0 (2015-03-04)
------------------

* fix field name clashes with in Django 1.9


2.8.1 (2015-12-30)
------------------

* Fixes DatabaseError on newer CMS releases.
* Adds setting to override Text plugin name
* Adds setting to override Text plugin module name.

2.8.0 (2015-11-19)
------------------

* Add touch support for CKEditor dialogs
* Add possibility to edit nested plugins on touch devices
* Replace CMS base module with CMS admin bundle (will only work with CMS 3.2+)
* Update CKEditor to 4.5.4
* Set the property `disable_child_plugins` to the Plugin class, deprecate the
  existing property on the model class.

2.7.0 (2015-11-03)
------------------

* Plugin is now only compatible with Django 1.6+, for Django 1.4 and 1.5 use
  ``djangocms-text-ckeditor`` < 2.7

2.0.0
-----

* Plugin is now only compatible with djangoCMS 3+
