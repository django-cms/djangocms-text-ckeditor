# -*- coding: utf-8 -*-
import re

from cms.api import add_plugin, create_page
from cms.models import CMSPlugin, Page, Title
from cms.test_utils.testcases import CMSTestCase
from django.contrib import admin
from django.contrib.auth import get_permission_codename
from django.contrib.auth.models import Permission
from django.utils.encoding import force_text
from djangocms_helper.base_test import BaseTestCase

from djangocms_text_ckeditor.models import Text
from djangocms_text_ckeditor.utils import plugin_to_tag


class PluginActionsTestCase(CMSTestCase, BaseTestCase):

    def add_plugin_to_text(self, text_plugin, plugin):
        text_plugin.body = '%s %s' % (text_plugin.body, plugin_to_tag(plugin))
        text_plugin.save()
        return text_plugin

    def _give_permission(self, user, model, permission_type, save=True):
        codename = get_permission_codename(permission_type, model._meta)
        user.user_permissions.add(Permission.objects.get(codename=codename))

    def _give_cms_permissions(self, user):
        for perm_type in ['add', 'change', 'delete']:
            for model in [Page, Title]:
                self._give_permission(user, model, perm_type)

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
        request.GET = request.GET.copy()
        request.GET.update({
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        })
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
        request.GET = request.GET.copy()
        request.GET.update({
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        })

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
            response = text_plugin_class.delete_on_cancel(request, text_plugin_pk)
            self.assertEqual(response.status_code, 204)

        # Assert "ghost" plugin has been removed
        self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        # Assert "real" plugin was never created
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)

        # Assert user can't delete a non "ghost" plugin
        text_plugin = add_plugin(
            simple_placeholder,
            "TextPlugin",
            "en",
            body="I'm the first",
        )

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, text_plugin)
            data = {'token': cancel_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(
                request,
                force_text(text_plugin.pk)
            )
            self.assertEqual(response.status_code, 400)

    def test_add_and_cancel_child_plugin(self):
        """
        Test that you can add a text plugin
        """
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            "TextPlugin",
            "en",
            body="I'm the first",
        )

        text_plugin_class = text_plugin.get_plugin_class_instance()

        child_plugin_1 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            image=self.create_django_image_obj(),
            alt="Foo",
        )
        child_plugin_2 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            image=self.create_django_image_obj(),
            alt="Foo",
        )
        child_plugin_3 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            image=self.create_django_image_obj(),
            alt="Foo",
        )
        child_plugin_4 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            image=self.create_django_image_obj(),
            alt="Foo",
        )

        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_1)
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_4)
        text_plugin_id = force_text(text_plugin.pk)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, text_plugin)

            # Assert user is unable to delete a saved child plugin
            data = {'token': cancel_token, 'child_plugins': [child_plugin_1.pk]}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request, text_plugin_id)
            self.assertEqual(response.status_code, 400)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_1.pk)

            # Assert user is unable to delete if plugins array contains
            # an unsaved plugin.
            plugin_ids = [
                child_plugin_1.pk,
                child_plugin_2.pk,
                child_plugin_3.pk,
                child_plugin_4.pk,
            ]
            data = {'token': cancel_token, 'child_plugins': plugin_ids}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request, text_plugin_id)
            self.assertEqual(response.status_code, 400)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_1.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_2.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_3.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_4.pk)

            plugin_ids = [
                child_plugin_2.pk,
                child_plugin_3.pk,
            ]
            data = {'token': cancel_token, 'child_plugins': plugin_ids}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request, text_plugin_id)
            self.assertEqual(response.status_code, 204)

            self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=child_plugin_2.pk)
            self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=child_plugin_3.pk)

    def test_cancel_token_per_session(self):
        # Assert that a cancel token for the same plugin
        # is different per user session.
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            "TextPlugin",
            "en",
            body="I'm the first",
        )

        text_plugin_class = text_plugin.get_plugin_class_instance()

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token_1 = text_plugin_class.get_cancel_token(request, text_plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            cancel_token_2 = text_plugin_class.get_cancel_token(request, text_plugin)

        self.assertNotEqual(cancel_token_1, cancel_token_2)

    def test_add_and_cancel_plugin_permissions(self):
        simple_page = create_page('test page', 'page.html', u'en')
        simple_placeholder = simple_page.placeholders.get(slot='content')

        native_placeholder_admin = self.get_page_admin()

        request = self.get_request()
        request.GET = request.GET.copy()
        request.GET.update({
            'plugin_type': 'TextPlugin',
            'placeholder_id': simple_placeholder.pk,
            'plugin_language': 'en',
            'plugin_parent': '',
        })

        response = native_placeholder_admin.add_plugin(request)

        self.assertEqual(response.status_code, 302)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(response)
        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        # Assert a standard user (no staff) can't delete ghost plugin
        with self.login_user_context(self.get_standard_user()):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, cms_plugin)
            data = {'plugin': text_plugin_pk, 'token': cancel_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request, text_plugin_pk)
            self.assertEqual(response.status_code, 403)

        staff_user = self._create_user("addonly-staff", is_staff=True, is_superuser=False)

        self._give_cms_permissions(staff_user)
        self._give_permission(staff_user, text_plugin_class.model, 'add')

        with self.login_user_context(staff_user):
            request = self.get_request()
            cancel_token = text_plugin_class.get_cancel_token(request, cms_plugin)
            data = {'plugin': text_plugin_pk, 'token': cancel_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request, text_plugin_pk)
            self.assertEqual(response.status_code, 204)
