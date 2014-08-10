#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import test_settings


def schemamigration():
    # turn ``schemamigration.py --initial`` into
    # ``manage.py schemamigration cmsplugin_disqus --initial`` and setup the
    # enviroment
    from django.conf import settings

    from django.core.management import ManagementUtility
    settings.configure(
        INSTALLED_APPS=test_settings.INSTALLED_APPS,
        DATABASES=test_settings.DATABASES,
        TEMPLATE_CONTEXT_PROCESSORS=test_settings.TEMPLATE_CONTEXT_PROCESSORS,
        ROOT_URLCONF=test_settings.ROOT_URLCONF)
    argv = list(sys.argv)
    argv.insert(1, 'schemamigration')
    argv.insert(2, 'djangocms_text_ckeditor')
    utility = ManagementUtility(argv)
    utility.execute()

if __name__ == "__main__":
    schemamigration()
