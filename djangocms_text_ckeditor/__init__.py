"""
See PEP 440 (https://www.python.org/dev/peps/pep-0440/)

Release logic:
 1. Increase version number (change __version__ below).
 2. Ensure the static bundle is upto date with ``nvm use && gulp bundle``
 3. Assure that all changes have been documented in CHANGELOG.rst.
 4. In setup.py check that
   - versions from all third party packages are pinned in ``REQUIREMENTS``.
   - the list of ``CLASSIFIERS`` is up to date.
 5. git add djangocms_text_ckeditor/__init__.py CHANGELOG.rst setup.py
 6. git commit -m 'Bump to {new version}'
 7. git push
 8. Assure that all tests pass on https://github.com/django-cms/djangocms-text-ckeditor/actions
 9. Create a new release on https://github.com/django-cms/djangocms-text-ckeditor/releases/new
10. Publish the release when ready
11. Github actions will publish the new package to pypi
"""
__version__ = '5.1.3'

default_app_config = 'djangocms_text_ckeditor.apps.TextCkeditorConfig'
