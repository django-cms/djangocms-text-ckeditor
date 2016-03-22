# -*- coding: utf-8 -*-
import json

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

    def get_plugin_id_from_response(self, response, path):
        # Expects response to be a JSON response
        # with a structure like so:
        # {'path.1': {
        #   'path.2': '/en/admin/app/example1/edit-plugin/3/'}
        # }
        # path is used to access nested keys

        data = json.loads(response.content.decode('utf-8'))
        keys = path.split('.')

        for key in keys:
            data = data[key]
        return data.split('/')[-2]

    def test_add_and_edit_plugin(self):
        """
        Test that you can add a text plugin
        """
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        native_placeholder_admin = self.get_page_admin()

        request = self.get_post_request({
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        })
        response = native_placeholder_admin.add_plugin(request)

        self.assertEqual(response.status_code, 200)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(
            response,
            path='url',
        )

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        # Assert "real" plugin has not been created yet
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)

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

        request = self.get_post_request({
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        })
        response = native_placeholder_admin.add_plugin(request)

        self.assertEqual(response.status_code, 200)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(
            response,
            path='url',
        )

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        request = self.get_post_request({'body': "Hello world", '_cancel': True})
        response = native_placeholder_admin.edit_plugin(request, text_plugin_pk)

        self.assertEqual(response.status_code, 200)

        # Assert "ghost" plugin has been removed
        self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        # Assert "real" plugin was never created
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)
