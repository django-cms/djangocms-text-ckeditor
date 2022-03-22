"""
See PEP 440 (https://www.python.org/dev/peps/pep-0440/)

Release logic:
 1. Increase version number (change __version__ below).
 2. Assure that all changes have been documented in CHANGELOG.rst.
 3. In setup.py check that
   - versions from all third party packages are pinned in ``REQUIREMENTS``.
   - the list of ``CLASSIFIERS`` is up to date.
 4. git add djangocms_text_ckeditor/__init__.py CHANGELOG.rst setup.py
 5. git commit -m 'Bump to {new version}'
 6. git push
 7. Assure that all tests pass on https://github.com/django-cms/djangocms-text-ckeditor/actions
 8. Create a new release on https://github.com/django-cms/djangocms-text-ckeditor/releases/new
 9. Publish the release when ready
10. Github actions will publish the new package to pypi
"""
__version__ = '5.0.0'

default_app_config = 'djangocms_text_ckeditor.apps.TextCkeditorConfig'
