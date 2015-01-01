# -*- coding: utf-8 -*-
from distutils.version import LooseVersion
import sys
from tempfile import mkdtemp
import django

gettext = lambda s: s

HELPER_SETTINGS = {
    'ROOT_URLCONF': 'cms.urls',
    'INSTALLED_APPS': [
    ],
    'LANGUAGE_CODE': 'en',
    'LANGUAGES': (
        ('en', gettext('English')),
        ('fr', gettext('French')),
        ('it', gettext('Italiano')),
    ),
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
    'MIGRATION_MODULES': {
        'djangocms_text_ckeditor': 'djangocms_text_ckeditor.migrations_django',
    },
    'FILE_UPLOAD_TEMP_DIR': mkdtemp(),
    'SITE_ID': 1
}

if LooseVersion(django.get_version()) < LooseVersion('1.6'):
    HELPER_SETTINGS['INSTALLED_APPS'] += [
        'discover_runner'
    ]
    HELPER_SETTINGS['TEST_RUNNER'] = 'discover_runner.DiscoverRunner'


def run():
    from collections import defaultdict
    from djangocms_helper import main
    args = defaultdict(str)
    args['<application>'] = 'djangocms_text_ckeditor'
    args['test'] = True
    args['--cms'] = True
    args['--extra-settings'] = 'test_settings.py'
    main.core(args=args, application='djangocms_text_ckeditor')
