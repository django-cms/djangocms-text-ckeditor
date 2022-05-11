from cms.test_utils.testcases import CMSTestCase

from djangocms_helper.base_test import BaseTestCase as _BaseTestCase
from djangocms_helper.base_test import \
    BaseTransactionTestCase as _BaseTransactionTestCase


BaseTestCase = type('BaseTestCase', (CMSTestCase, _BaseTestCase), {})
BaseTransactionTestCase = type('BaseTestCase', (CMSTestCase, _BaseTransactionTestCase), {})
