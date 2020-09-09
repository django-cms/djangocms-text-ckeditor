from cms.test_utils.testcases import CMSTestCase

from djangocms_helper.base_test import BaseTestCase as _BaseTestCase


BaseTestCase = type('BaseTestCase', (CMSTestCase, _BaseTestCase), {})
