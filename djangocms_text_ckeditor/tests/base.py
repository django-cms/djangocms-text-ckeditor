# -*- coding: utf-8 -*-
from cms.models import Page
from cms.test_utils.testcases import CMSTestCase
from cms.utils.urlutils import admin_reverse

from django.utils.http import urlencode
from djangocms_helper.base_test import BaseTestCase as _BaseTestCase

from ..compat import LTE_CMS_3_3


class BaseTestCase33(CMSTestCase, _BaseTestCase):

    def get_admin_url(self, model, action, *args):
        opts = model._meta
        url_name = "{}_{}_{}".format(opts.app_label, opts.model_name, action)
        return admin_reverse(url_name, args=args)

    def get_add_plugin_uri(self, placeholder, plugin_type, language='en', parent=None):
        endpoint = placeholder.get_add_url()
        data = {
            'plugin_type': plugin_type,
            'placeholder_id': placeholder.pk,
            'plugin_language': language,
        }

        if parent:
            data['plugin_parent'] = parent.pk
        return endpoint + '?' + urlencode(data)

    def get_change_plugin_uri(self, plugin, container=None, language=None):
        container = container or Page
        return self.get_admin_url(container, 'edit_plugin', plugin.pk)

    def get_move_plugin_uri(self, plugin, container=None, language=None):
        container = container or Page
        return self.get_admin_url(container, 'move_plugin')

    def get_copy_plugin_uri(self, plugin, container=None, language=None):
        container = container or Page
        return self.get_admin_url(container, 'copy_plugins')

    def get_copy_placeholder_uri(self, placeholder, container=None, language=None):
        container = container or Page
        return self.get_admin_url(container, 'copy_plugins')

    def get_delete_plugin_uri(self, plugin, container=None, language=None):
        container = container or Page
        return self.get_admin_url(container, 'delete_plugin', plugin.pk)


if LTE_CMS_3_3:
    BaseTestCase = BaseTestCase33
else:
    BaseTestCase = type('BaseTestCase', (CMSTestCase, _BaseTestCase), {})
