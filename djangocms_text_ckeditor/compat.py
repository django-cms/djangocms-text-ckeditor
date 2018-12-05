from distutils.version import LooseVersion

import cms

cms_version = LooseVersion(cms.__version__)

LTE_CMS_3_3 = cms_version < LooseVersion('3.4')
LTE_CMS_3_4 = cms_version < LooseVersion('3.5')


def get_page_placeholders(page, language=None):
    try:
        # cms3.6 compat
        return page.get_placeholders()
    except TypeError:
        return page.get_placeholders(language)
