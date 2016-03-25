CHANGELOG
=========

2.9.1 (2015-03-25)
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
