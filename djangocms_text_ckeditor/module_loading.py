# TODO: Remove this terrible hackery as soon as we move out of Django 1.4
import django
from distutils.version import LooseVersion
if LooseVersion(django.get_version()) < LooseVersion('1.5'):
    from django.utils.importlib import import_module as import_string
elif LooseVersion('1.5') <= LooseVersion(django.get_version()) < LooseVersion('1.7'):
    from django.utils.module_loading import import_by_path as import_string
else:
    from django.utils.module_loading import import_string

def import_module(module_string):
    if LooseVersion(django.get_version()) < LooseVersion('1.5'):
        module, __, cls = module_string.rpartition('.')
        return import_string(module).__dict__[cls]
    else:
        return import_string(module_string)
