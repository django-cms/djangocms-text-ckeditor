# -*- coding: utf-8 -*-
from tempfile import mkdtemp
import sys


def gettext(s):
    return s


class DisableMigrations(dict):
    def __contains__(self, item):
        return True

    def __getitem__(self, item):
        from distutils.version import LooseVersion
        import django
        DJANGO_1_9 = LooseVersion(django.get_version()) < LooseVersion('1.10')
        if DJANGO_1_9:
            return 'notmigrations'
        else:
            return None


HELPER_SETTINGS = {
    'INSTALLED_APPS': [
        'easy_thumbnails',
        'filer',
        'mptt',
        'djangocms_picture',
        'djangocms_link',
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
            }
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
}
if 'test' in sys.argv:
    HELPER_SETTINGS['MIGRATION_MODULES'] = DisableMigrations()
    HELPER_SETTINGS['INSTALLED_APPS'].append('djangocms_text_ckeditor.test_app')


def run():
    from djangocms_helper import runner
    runner.cms('djangocms_text_ckeditor')


if __name__ == '__main__':
    run()
