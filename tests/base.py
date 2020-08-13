# -*- coding: utf-8 -*-
from django.utils.http import urlencode

from cms.models import Page
from cms.test_utils.testcases import CMSTestCase
from cms.utils.urlutils import admin_reverse

from djangocms_helper.base_test import BaseTestCase as _BaseTestCase


BaseTestCase = type('BaseTestCase', (CMSTestCase, _BaseTestCase), {})
