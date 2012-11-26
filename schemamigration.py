#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys

INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.admin',
    'mptt',
    'cms',
    'menus',
    'djangocms_text_ckeditor',
    'south',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}

TEMPLATE_CONTEXT_PROCESSORS = [
    'django.core.context_processors.auth',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'cms.context_processors.media',
    'sekizai.context_processors.sekizai',
]

ROOT_URLCONF = 'cms.urls'

def schemamigration():
    # turn ``schemamigration.py --initial`` into
    # ``manage.py schemamigration cmsplugin_disqus --initial`` and setup the 
    # enviroment
    from django.conf import settings

    from django.core.management import ManagementUtility
    settings.configure(
        INSTALLED_APPS=INSTALLED_APPS,
        ROOT_URLCONF=ROOT_URLCONF,
        DATABASES=DATABASES,
        TEMPLATE_CONTEXT_PROCESSORS=TEMPLATE_CONTEXT_PROCESSORS
    )
    argv = list(sys.argv)
    argv.insert(1, 'schemamigration')
    argv.insert(2, 'djangocms_text_ckeditor')
    utility = ManagementUtility(argv)
    utility.execute()

if __name__ == "__main__":
    schemamigration()
