=========
Changelog
=========

5.1.5 (2023-11-30)
==================

* fix(settings): Extend ALLOW_TOKEN_PARSERS if custom one is provided by @DmytroLitvinov in `#654 <https://github.com/django-cms/djangocms-text-ckeditor/pull/654>`_
* fix: Support djangocms-picture 2.0.0 and higher in create_picture_plugin by @leture in `#660 <https://github.com/django-cms/djangocms-text-ckeditor/pull/660>`_ 
* Remove Flash plugin in the default settings by @MacLake in `#656 <https://github.com/django-cms/djangocms-text-ckeditor/pull/656>`_
* fix: Allow for request-free context objects for testing purposes by @fsbraun in `#659 <https://github.com/django-cms/djangocms-text-ckeditor/pull/659>`_
* Update test matrix to include Django 5 by @protoroto in `#662 <https://github.com/django-cms/djangocms-text-ckeditor/pull/662>`_


5.1.4 (2023-10-03)
==================

* fix: Issue #641 which lead to disappearing content after adding child plugins and cancelling the edit by @fsbraun in `#652 <https://github.com/django-cms/djangocms-text-ckeditor/pull/652>`_
* Feature/issue 648 unable to unlink by @jrief in `#649 <https://github.com/django-cms/djangocms-text-ckeditor/pull/649>`_
* fix: Remove legacy code from Django pre 1.4 by @fsbraun in `#651 <https://github.com/django-cms/djangocms-text-ckeditor/pull/651>`_
* fix: test suite for Django 2.2 by @fsbraun in `#650 <https://github.com/django-cms/djangocms-text-ckeditor/pull/650>`_

5.1.3 (2022-06-21)
==================

* Upgrade Ckeditor to 4.21.0 via `#640 <https://github.com/django-cms/djangocms-text-ckeditor/pull/640>`_


5.1.2 (2022-12-27)
==================

* Add suport for django CMS 4.1
* Fix `#468 <https://github.com/django-cms/djangocms-text-ckeditor/issues/468>`_ via `#637 <https://github.com/django-cms/djangocms-text-ckeditor/pull/637>`_: Delay importing models.CMSPlugin in utils to allow adding an HTMLField to a custom user model.


5.1.1 (2022-06-22)
==================

* Removed inline editing toggle button from touch devices (where it is inactive anyways) and collapsed menus
* Add workaround for toolbar bug in django CMS < 3.10: Reload page after change in inline editor
* Fix `578 <https://github.com/django-cms/djangocms-text-ckeditor/pull/578>`_: If parent plugins to not set body css class the default from CKEDITOR_SETTINGS is used

5.1.0 (2022-03-24)
==================

* Added inline editing in `#606 <https://github.com/django-cms/djangocms-text-ckeditor/pull/606>`_
* fix: Update skin patch to avoid @media query in `#614 <https://github.com/django-cms/djangocms-text-ckeditor/pull/614>`_

5.0.1 (2022-03-24)
==================

* Generated new static bundle.

5.0.0 (2022-03-24)
==================

* Drop support for Python 3.5 and 3.6
* Drop support for django 3.0
* Added support for Python 3.9 and 3.10
* Added support for django 3.2
* Added support for django-cms 3.9 and 3.10

New features
------------
* Upgrade ckeditor to 4.17.2 in `595 <https://github.com/django-cms/djangocms-text-ckeditor/pull/595>`_
* Dark mode support for standard editor UI (a.k.a. "skin") moono-lisa in `592 <https://github.com/django-cms/djangocms-text-ckeditor/pull/592>`_
* Basic dark mode compatibility and fix for source edit bug in `590 <https://github.com/django-cms/djangocms-text-ckeditor/pull/590>`_

Fixes and other changes
-----------------------
* Copying plugins inside ckeditor creates a child plugin copy in `569 <https://github.com/django-cms/djangocms-text-ckeditor/pull/569>`_
* 504 copy paste plugins inside ckeditor refer to same instance in `572 <https://github.com/django-cms/djangocms-text-ckeditor/pull/572>`_
* Use assertEqual instead of assertEquals for Python 3.11 compatibility in `580 <https://github.com/django-cms/djangocms-text-ckeditor/pull/580>`_
* fix breaking tests in `585 <https://github.com/django-cms/djangocms-text-ckeditor/pull/585>`_
* Update Node.js to version 16 LTS and Gulpfile upgrade as well in `593 <https://github.com/django-cms/djangocms-text-ckeditor/pull/593>`_
* Replace ``force_text`` with ``force_str`` in `546 <https://github.com/django-cms/djangocms-text-ckeditor/pull/546>`_
* Fix django 3.2 tests, pypi release actions and pre-commit in `594 <https://github.com/django-cms/djangocms-text-ckeditor/pull/594>`_
* Remove excessive spaces (`#531 <https://github.com/django-cms/djangocms-text-ckeditor/issues/531>`_) in `597 <https://github.com/django-cms/djangocms-text-ckeditor/pull/597>`_

4.0.0 (2020-09-15)
==================

* Added support for Django 3.1
* Dropped support for Python 2.7 and Python 3.4
* Dropped support for Django < 2.2
* Ensure that correct urls are generated when static files are hosted on a CDN
* Allow to style WYSIWYG content based on parent plugins, by adding
  ``CMSPluginBase.child_ckeditor_body_css_class`` to a parent (#520)
* Upgrade to CKeditor version to 4.14.1


3.10.0 (2020-08-04)
===================

* Upgrade to CKeditor version 4.14.0.
* Replace icon for CMS plugins with nicer looking SVG puzzle piece.
* Prevent ``clean_html`` from sanitizing when TEXT_HTML_SANITIZE is False.


3.9.1 (2020-05-20)
==================

* Fix compatibility issue with Django-3.0 in ``Field.from_db_value()``.


3.9.0 (2020-02-20)
==================

* Added support for Django 3.0
* Added support for Python 3.8
* Removed Aldryn Boilerplate support


3.8.0 (2019-05-23)
==================

* Added support for Django 2.2 and django CMS 3.7
* Removed support for Django 2.0
* Extended test matrix
* Added isort and adapted imports
* Adapted code base to align with other supported addons
* Updated translations


3.7.0 (2018-12-05)
==================

* Added support for Django 1.11, 2.0 and 2.1
* Removed support for Django < 1.11
* Adapted testing infrastructure (tox/travis) to incorporate
  django CMS 3.5 and 3.6


3.6.1 (2018-11-08)
==================

* Added Django 2.0 & 2.1 support
* Updated setup.py to use html5lib>=0.999999999
* Fixed ValueError on  static file resolution at import time


3.6.0 (2018-04-11)
==================

* Changed the way ckeditor widget is initialized


3.5.3 (2018-01-29)
==================

* Updated CKEditor to 4.7.3
* Added context to translation payload when dealing with TextPlugin instances


3.5.1 (2017-10-17)
==================

* Introduced support for django CMS 3.5.0
* Fixed a regression which prevented multiple HTMLFields
  from having different configurations.
* Fixed a bug where text coming from ``HtmlField`` was escaped
  when using it with other third party apps like django-parler.
* Fixed a bug where dialog backdrop would've been incorrectly removed allowing
  for disallowed actions.
* Fixed a bug when a dialog would open underneath maximized editor.


3.5.0 (2017-05-03)
==================

* Fixed an issue where the rendered HTML of plugins nested in text plugins
  leaked and became editable in some cases.
* Updated CKEditor to 4.6.2


3.4.0 (2017-01-23)
==================

* Introduced support for the djangocms-history app.
* Fixed an issue when CKEditor was triggering unnecessary `delete-on-cancel`
  requests after editing a plugin.
* Fixed a bug which raised an exception when using a lazy object on the plugin
  configuration.


3.3.1 (2016-11-02)
==================

* Fixed an issue with maximized CKEditor inside of maximized CMS modal in FF
* Fixed path to the icon in the context menu
* Fixed JavaScript error happening when certain fields wouldn't exist in child
  plugin
* Fixed an issue with CKEditor dialogs going outside of the ckeditor area, which
  was making them unusable
* Fixed an issue when only the first selected text would be populated to the
  title field in supported child plugins


3.3.0 (2016-10-04)
==================

* Fixed a problem with editing links that are not CMS plugins
* Fixed a problem with prefilling fields when editing CMS plugins
* Fixed a bug with extra whitespace appearing around plugin rendered inside of
  the text plugin
* Updated CKEditor to 4.5.11
* Fixed JavaScript error thrown when multiple instances of TextField are used on
  the page
* Fixed CKEditor not initializing inside of the ``inline``.


3.2.1 (2016-09-14)
==================

* Changed the way ckeditor js is loaded, everything is now loaded in one bundle
* Changed the way ckeditor loads must-have external plugins, so user config
  would have no effect on the settings
* Fixed error which prevented plugins extending TextPlugin to work
* Fixed a regression where CKEditor would create unnecessary ``<p>`` tags around
  CMS plugins
* Fixed a bug when child plugin cannot be edited while text plugin is not
  completely created
* Fixed a bug where plugins rendered via the real-preview would not trigger
  the context processors.


3.2.0 (2016-09-07)
==================

* Introduced support for djangoCMS 3.4.0
* Fixed a JavaScript issue when using TextEditorWidget or HTMLField
* Added native Aldryn support
* Fixed a bug where invalid markup created by previous versions of the plugin
  would result in a broken markup after upgrading
* Fixed a bug where whitespace would be incorrectly removed before the child
  plugin on save of the text plugin


3.1.0 (2016-08-18)
==================

* Added support for inline preview of text enabled CMS plugins
* Added support for plugins to declare "text_editor_preview=False" in order for
  them to be rendered with old-style label (useful for plugins with no valuable
  visual representation, such as snippet, spacer, etc).


3.0.1 (2016-07-15)
==================

* Replace remaining CMS base module with CMS admin bundle that was missed in
  2.8.0
* Updated ckeditor to 4.5.9
* Freeze html5lib-python<0.99999999/1.0b9


3.0.0 (2016-05-26)
==================

* Added support for django CMS 3.3
* Backwards incompatible with django CMS < 3.3


2.9.3 (2016-04-27)
==================

* Adds work-around for Django Parler internal caching


2.9.2 (2016-04-26)
==================

* Adds HtmlFormField
* Moves text sanitation logic to the HtmlFormField
* Text coming from an HTMLField is now marked safe by default.


2.9.1 (2015-03-29)
==================

* Fixes backwards compatibility with Django 1.6
* Fixes bug on Text.objects.create()


2.9.0 (2015-03-04)
==================

* fix field name clashes with in Django 1.9


2.8.1 (2015-12-30)
==================

* Fixes DatabaseError on newer CMS releases.
* Adds setting to override Text plugin name
* Adds setting to override Text plugin module name.


2.8.0 (2015-11-19)
==================

* Add touch support for CKEditor dialogs
* Add possibility to edit nested plugins on touch devices
* Replace CMS base module with CMS admin bundle (will only work with CMS 3.2+)
* Update CKEditor to 4.5.4
* Set the property `disable_child_plugins` to the Plugin class, deprecate the
  existing property on the model class.


2.7.0 (2015-11-03)
==================

* Plugin is now only compatible with Django 1.6+, for Django 1.4 and 1.5 use
  ``djangocms-text-ckeditor`` < 2.7


2.0.0 (2013-07-10)
==================

* Plugin is now only compatible with djangoCMS 3+
