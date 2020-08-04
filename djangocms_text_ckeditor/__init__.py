# -*- coding: utf-8 -*-
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
 7. Assure that all tests pass on https://travis-ci.org/github/divio/djangocms-text-ckeditor.
 8. git tag {new_version_number}
 9. git push --tags
10. python setup.py sdist
11. twine upload dist/djangocms-text-ckeditor-{new_version_number}.tar.gz
"""
__version__ = '3.10.0'

default_app_config = 'djangocms_text_ckeditor.apps.TextCkeditorConfig'
