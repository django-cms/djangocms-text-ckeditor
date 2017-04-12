from distutils.version import LooseVersion

import cms
import django

cms_version = LooseVersion(cms.__version__)


if django.VERSION < (1, 7):
    from django.utils.module_loading import import_by_path
    import_string = import_by_path
    LTE_DJANGO_1_6 = True
else:
    from django.utils.module_loading import import_string  # noqa
    LTE_DJANGO_1_6 = False  # noqa

if django.VERSION < (1, 8):
    LTE_DJANGO_1_7 = True
else:
    LTE_DJANGO_1_7 = False

LTE_CMS_3_3 = cms_version < LooseVersion('3.4')
LTE_CMS_3_4 = cms_version < LooseVersion('3.5')
