# TODO: Remove this terrible hackery as soon as we move out of Django 1.4
import django
from distutils.version import LooseVersion
if LooseVersion('1.5') <= LooseVersion(django.get_version()) < LooseVersion('1.7'):
    from django.utils.module_loading import import_by_path as import_string
else:
    from django.utils.module_loading import import_string

def import_module(module_string):
    return import_string(module_string)
