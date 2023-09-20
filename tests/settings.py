#!/usr/bin/env python
import os
import sys
from tempfile import mkdtemp

from cms import __version__


port = 8000

for arg in sys.argv:
    if arg.startswith('--port='):
        port = arg.split('=')[1]


def gettext(s):
    return s


class DisableMigrations(dict):
    def __contains__(self, item):
        return True

    def __getitem__(self, item):
        return None


HELPER_SETTINGS = {
    'SECRET_KEY': 'djangocms-text-ckeditor-test-suite',
    'INSTALLED_APPS': [
        'easy_thumbnails',
        'filer',
        'djangocms_picture',
        'djangocms_link',
        'djangocms_text_ckeditor',
        'tests.test_app',
    ],
    'CMS_LANGUAGES': {
        1: [
            {
                'code': 'en',
                'name': gettext('English'),
                'public': True,
            },
            {
                'code': 'it',
                'name': gettext('Italiano'),
                'public': True,
            },
            {
                'code': 'fr',
                'name': gettext('French'),
                'public': True,
            },
        ],
        'default': {
            'hide_untranslated': False,
        },
    },
    'LANGUAGES': (
        ('en', gettext('English')),
        ('fr', gettext('French')),
        ('it', gettext('Italiano')),
    ),
    'LANGUAGE_CODE': 'en',
    'ALLOWED_HOSTS': ['localhost'],
    'CMS_PERMISSION': False,
    'CMS_PLACEHOLDER_CONF': {
        'content': {
            'plugins': ['TextPlugin', 'PicturePlugin'],
            'text_only_plugins': ['LinkPlugin'],
            'extra_context': {'width': 640},
            'name': gettext('Content'),
            'language_fallback': True,
            'default_plugins': [
                {
                    'plugin_type': 'TextPlugin',
                    'values': {
                        'body': '<p>Lorem ipsum dolor sit amet...</p>',
                    },
                },
            ],
            'child_classes': {
                'TextPlugin': ['PicturePlugin', 'LinkPlugin'],
            },
            'parent_classes': {
                'LinkPlugin': ['TextPlugin'],
            },
            'plugin_modules': {
                'LinkPlugin': 'Extra',
            },
            'plugin_labels': {
                'LinkPlugin': 'Add a link',
            },
        },
    },
    'FILE_UPLOAD_TEMP_DIR': mkdtemp(),
    'SITE_ID': 1,
    'THUMBNAIL_PROCESSORS': (
        'easy_thumbnails.processors.colorspace',
        'easy_thumbnails.processors.autocrop',
        'filer.thumbnail_processors.scale_and_crop_with_subject_location',
        'easy_thumbnails.processors.filters',
    ),
    'CMS_TEMPLATES': (
        ('page.html', 'Normal page'),
        ('plugin_with_sekizai.html', 'Plugin with sekizai'),
    ),
    'DJANGOCMS_TRANSLATIONS_CONF': {
        'Bootstrap3ButtonCMSPlugin': {'text_field_child_label': 'label'},
        'DummyLinkPlugin': {'text_field_child_label': 'label'},
    },
    'TEXT_INLINE_EDITING': True,
}

HELPER_SETTINGS['MIGRATION_MODULES'] = DisableMigrations()

if not (__version__ < "4"):  # V4 test?
    HELPER_SETTINGS['INSTALLED_APPS'] += [
        # "djangocms_versioning",  # TODO: Enable tests for versioning
    ]
    HELPER_SETTINGS['CMS_CONFIRM_VERSION4'] = True


def _helper_patch(*args, **kwargs):
    from django.core.management import call_command
    call_command('migrate', run_syncdb=True)


def test():
    from app_helper import runner
    runner.cms('djangocms_text_ckeditor', extra_args=[])


def run():
    from app_helper import runner, utils

    os.environ.setdefault('DATABASE_URL', 'sqlite://localhost/testdb.sqlite')

    # Patch app_helper to create tables
    utils._create_db = _helper_patch

    # we use '.runner()', not '.cms()' nor '.run()' because it does not
    # add 'test' argument implicitly
    runner.runner([sys.argv[0], 'cms', '--cms', 'server', '--bind', '0.0.0.0', '--port', str(port)])


if __name__ == '__main__':
    run()
