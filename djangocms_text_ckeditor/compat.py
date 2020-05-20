# -*- coding: utf-8 -*-
from distutils.version import LooseVersion
from functools import WRAPPER_ASSIGNMENTS

import cms

import six


cms_version = LooseVersion(cms.__version__)

LTE_CMS_3_3 = cms_version < LooseVersion('3.4')
LTE_CMS_3_4 = cms_version < LooseVersion('3.5')


def get_page_placeholders(page, language=None):
    try:
        # cms3.6 compat
        return page.get_placeholders()
    except TypeError:
        return page.get_placeholders(language)


# this also exists on the latest django CMS release (3.7.2)
# though we want to keep compatibility to older CMS versions
def available_attrs(fn):
    if six.PY3:
        return WRAPPER_ASSIGNMENTS
    else:
        return tuple(a for a in WRAPPER_ASSIGNMENTS if hasattr(fn, a))
