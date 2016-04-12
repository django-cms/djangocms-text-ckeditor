# -*- coding: utf-8 -*-
import json
import re

from cms.api import create_page
from cms.models import CMSPlugin, Page
from cms.test_utils.testcases import CMSTestCase
from django.contrib import admin
from djangocms_helper.base_test import BaseTestCase

from djangocms_text_ckeditor.models import Text


class PluginActionsTestCase(CMSTestCase, BaseTestCase):

    def get_page_admin(self):
        admin.autodiscover()
        return admin.site._registry[Page]

    def get_post_request(self, data):
        return self.get_request(post_data=data)

    def get_plugin_id_from_response(self, response):
        # Ideal case, this looks like:
        # /en/admin/cms/page/edit-plugin/1/
        return re.findall('\d+', response.url)[0]

    def test_add_and_edit_plugin(self):
        """
        Test that you can add a text plugin
        """
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        native_placeholder_admin = self.get_page_admin()

        request = self.get_request()
        request.GET = {
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        }
        response = native_placeholder_admin.add_plugin(request)

        text_plugin_pk = self.get_plugin_id_from_response(response)

        self.assertIn('?delete-on-cancel', response.url)
        self.assertEqual(response.status_code, 302)

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        # Assert "real" plugin has not been created yet
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, cms_plugin)
            response = self.client.get(response.url)

            self.assertEqual(response.status_code, 200)

            # Assert cancel token is present
            self.assertContains(response, cancel_token)

        request = self.get_post_request({'body': "Hello world"})
        response = native_placeholder_admin.edit_plugin(request, text_plugin_pk)

        self.assertEqual(response.status_code, 200)

        # Assert "real" plugin has been created yet
        self.assertObjectExist(Text.objects.all(), pk=text_plugin_pk)

        text_plugin = Text.objects.get(pk=text_plugin_pk)

        # Assert the text was correctly saved
        self.assertEqual(text_plugin.body, "Hello world")

    def test_add_and_cancel_plugin(self):
        """
        Test that you can add a text plugin
        """
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        native_placeholder_admin = self.get_page_admin()

        request = self.get_request()
        request.GET = {
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        }

        response = native_placeholder_admin.add_plugin(request)

        self.assertEqual(response.status_code, 302)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(response)
        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, cms_plugin)
            data = {'plugin': text_plugin_pk, 'token': cancel_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
            self.assertEqual(response.status_code, 204)

        # Assert "ghost" plugin has been removed
        self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        # Assert "real" plugin was never created
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)
