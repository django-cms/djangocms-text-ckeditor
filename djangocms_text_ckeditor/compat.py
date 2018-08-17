from distutils.version import LooseVersion

import cms
from cms.models import Page
from cms.utils.urlutils import admin_reverse

cms_version = LooseVersion(cms.__version__)

LTE_CMS_3_3 = cms_version < LooseVersion('3.4')
LTE_CMS_3_4 = cms_version < LooseVersion('3.5')
LTE_CMS_3_6 = cms_version < LooseVersion('3.7')


def get_page_placeholders(page, language=None):
    try:
        # cms3.6 compat
        return page.get_placeholders()
    except TypeError:
        return page.get_placeholders(language)


def get_page_placeholder_endpoint(action, *args, **kwargs):
    if LTE_CMS_3_6:
        viewname = '{}_{}_{}'.format(
            Page._meta.app_label,
            Page._meta.model_name,
            action,
        )
    else:
        viewname = 'cms_placeholder_{}'.format(action)
    return admin_reverse(viewname, args=args, kwargs=kwargs)
