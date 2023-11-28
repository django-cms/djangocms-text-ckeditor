import copy
import json
import re
import unittest
from urllib.parse import unquote

from django.conf import settings
from django.contrib import admin
from django.contrib.auth import get_permission_codename
from django.contrib.auth.models import Permission
from django.template import RequestContext
from django.utils.encoding import force_str
from django.utils.html import escape
from django.utils.http import urlencode

from cms.api import add_plugin, create_title
from cms.models import CMSPlugin, Page, Placeholder
from cms.utils.urlutils import admin_reverse

from djangocms_text_ckeditor.cms_plugins import TextPlugin
from djangocms_text_ckeditor.models import Text
from djangocms_text_ckeditor.utils import (
    _plugin_tags_to_html, _render_cms_plugin, plugin_tags_to_admin_html, plugin_tags_to_id_list, plugin_to_tag,
)
from tests.test_app.cms_plugins import DummyChildPlugin, DummyParentPlugin

from .base import BaseTestCase
from .fixtures import DJANGO_CMS4, DJANGOCMS_VERSIONING, TestFixture


try:
    from djangocms_transfer.exporter import export_page
    HAS_DJANGOCMS_TRANSFER = True
except ImportError:
    HAS_DJANGOCMS_TRANSFER = False

try:
    import djangocms_translations  # noqa
    HAS_DJANGOCMS_TRANSLATIONS = True
except ImportError:
    HAS_DJANGOCMS_TRANSLATIONS = False


HAS_DJANGOCMS_PICTURE = "djangocms_picture" in settings.INSTALLED_APPS


class PluginActionsTestCase(TestFixture, BaseTestCase):

    def get_custom_admin_url(self, plugin_class, name):
        plugin_type = plugin_class.__name__.lower()
        url_name = f'{plugin_class.model._meta.app_label}_{plugin_type}_{name}'
        return admin_reverse(url_name)

    def _add_child_plugin(self, text_plugin, plugin_type='PicturePlugin', data_suffix=None):
        name = f'{plugin_type} record'

        if data_suffix is not None:
            name = f'{name} {data_suffix}'

        basic_plugins = {
            'LinkPlugin': {
                'name': name,
                'external_link': 'https://www.django-cms.org',
            },
            'PreviewDisabledPlugin': {},
            'SekizaiPlugin': {},
        }

        if plugin_type == 'PicturePlugin':
            data = {'caption_text': name, 'picture': self.create_filer_image_object()}
        else:
            data = basic_plugins[plugin_type]

        plugin = add_plugin(
            text_plugin.placeholder,
            plugin_type,
            'en',
            target=text_plugin,
            **data,
        )
        return plugin

    def _add_text_plugin(self, placeholder, plugin_type='TextPlugin'):
        text_plugin = add_plugin(
            placeholder,
            plugin_type,
            'en',
            body='Hello World',
        )
        return text_plugin

    def _replace_plugin_contents(self, text, new_plugin_content):
        def _do_replace(obj, match):
            return plugin_to_tag(obj, content=new_plugin_content)
        return _plugin_tags_to_html(text, output_func=_do_replace)

    def add_plugin_to_text(self, text_plugin, plugin):
        text_plugin.body = f'{text_plugin.body} {plugin_to_tag(plugin)}'
        text_plugin.save()
        return text_plugin

    def _give_permission(self, user, model, permission_type, save=True):
        codename = get_permission_codename(permission_type, model._meta)
        user.user_permissions.add(Permission.objects.get(codename=codename))

    def _give_cms_permissions(self, user):
        for perm_type in ['add', 'change', 'delete']:
            for model in [Page]:
                self._give_permission(user, model, perm_type)

    def get_page_admin(self):
        admin.autodiscover()
        return admin.site._registry[Page]

    def get_post_request(self, data):
        return self.get_request(post_data=data)

    def get_plugin_id_from_response(self, response):
        url = unquote(response.url)
        # Ideal case, this looks like:
        # /en/admin/cms/page/edit-plugin/1/
        return re.findall(r'\d+', url)[0]

    def test_add_and_edit_plugin(self):
        """
        Test that you can add a text plugin
        """
        admin = self.get_superuser()
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        endpoint = self.get_add_plugin_uri(simple_placeholder, 'TextPlugin')

        with self.login_user_context(admin):
            response = self.client.get(endpoint)

        text_plugin_pk = self.get_plugin_id_from_response(response)

        self.assertIn('?delete-on-cancel', response.url)
        self.assertEqual(response.status_code, 302)

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        # Assert "real" plugin has not been created yet
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)

        add_url = response.url

        with self.login_user_context(admin):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, cms_plugin)
            response = self.client.get(add_url)

            self.assertEqual(response.status_code, 200)

            # Assert cancel token is present
            self.assertContains(response, action_token)

        with self.login_user_context(admin):
            data = {'body': 'Hello world'}
            response = self.client.post(add_url, data)

        self.assertEqual(response.status_code, 200)

        # Assert "real" plugin has been created yet
        self.assertObjectExist(Text.objects.all(), pk=text_plugin_pk)

        text_plugin = Text.objects.get(pk=text_plugin_pk)

        # Assert the text was correctly saved
        self.assertEqual(text_plugin.body, 'Hello world')

    def test_add_and_cancel_plugin(self):
        """
        Test that you can add a text plugin
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        endpoint = self.get_add_plugin_uri(simple_placeholder, 'TextPlugin')

        with self.login_user_context(self.get_superuser()):
            response = self.client.get(endpoint)

        self.assertEqual(response.status_code, 302)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(response)
        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        # Assert "ghost" plugin has been created
        self.assertObjectExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, cms_plugin)
            data = {'token': action_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
            self.assertEqual(response.status_code, 204)

        # Assert "ghost" plugin has been removed
        self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=text_plugin_pk)

        # Assert "real" plugin was never created
        self.assertObjectDoesNotExist(Text.objects.all(), pk=text_plugin_pk)

        # Assert user can't delete a non "ghost" plugin
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            data = {'token': action_token}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
            self.assertEqual(response.status_code, 400)

    def test_copy_referenced_plugins(self):
        """
        Test that copy+pasting a child plugin between text editors
        creates proper copies of the child plugin and messes no other data up
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        def _get_text_plugin_with_children():
            text_plugin = add_plugin(
                simple_placeholder,
                'TextPlugin',
                'en',
                body='Text plugin we copy child plugins to',
            )
            _add_child_plugins_to_text_plugin(text_plugin)
            return text_plugin

        def _add_child_plugins_to_text_plugin(text_plugin):
            child_plugin_1 = add_plugin(
                simple_placeholder,
                'PicturePlugin',
                'en',
                target=text_plugin,
                picture=self.create_filer_image_object(),
                caption_text='Child plugin one',
            )
            child_plugin_2 = add_plugin(
                simple_placeholder,
                'PicturePlugin',
                'en',
                target=text_plugin,
                picture=self.create_filer_image_object(),
                caption_text='Child plugin two',
            )
            self.add_plugin_to_text(text_plugin, child_plugin_1)
            self.add_plugin_to_text(text_plugin, child_plugin_2)

        def _copy_child_plugins_from_text(text_plugin_source, text_plugin_destination):
            for child_plugin in text_plugin_source.cmsplugin_set.all():
                text_plugin_destination.body += ' ' + plugin_to_tag(child_plugin)
            text_plugin_destination.save()
            _run_clean_and_copy(text_plugin_destination)

        def _run_clean_and_copy(text_plugin):
            text_plugin.clean_plugins()
            text_plugin.copy_referenced_plugins()

        def _get_common_children_ids(text_plugin_one, text_plugin_two):
            original_children_ids = set(plugin_tags_to_id_list(text_plugin_one.body))
            copied_children_ids = set(plugin_tags_to_id_list(text_plugin_two.body))
            return original_children_ids.intersection(copied_children_ids)

        text_plugin_copy_from = _get_text_plugin_with_children()
        text_plugin_copy_to = _get_text_plugin_with_children()

        _copy_child_plugins_from_text(text_plugin_copy_from, text_plugin_copy_to)
        self.assertEqual(text_plugin_copy_from.cmsplugin_set.count(), 2)
        self.assertEqual(text_plugin_copy_to.cmsplugin_set.count(), 4)

        _run_clean_and_copy(text_plugin_copy_from)
        _run_clean_and_copy(text_plugin_copy_to)
        self.assertEqual(text_plugin_copy_from.cmsplugin_set.count(), 2)
        self.assertEqual(text_plugin_copy_to.cmsplugin_set.count(), 4)

        common_children_ids = _get_common_children_ids(text_plugin_copy_from, text_plugin_copy_to)
        self.assertFalse(common_children_ids)

    def test_add_and_cancel_child_plugin(self):
        """
        Test that you can add a text plugin
        """
        admin = self.get_superuser()
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )

        text_plugin_class = text_plugin.get_plugin_class_instance()

        child_plugin_1 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            picture=self.create_filer_image_object(),
            caption_text='Foo',
        )
        child_plugin_2 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            picture=self.create_filer_image_object(),
            caption_text='Foo',
        )
        child_plugin_3 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            picture=self.create_filer_image_object(),
            caption_text='Foo',
        )
        child_plugin_4 = add_plugin(
            simple_placeholder,
            'PicturePlugin',
            'en',
            target=text_plugin,
            picture=self.create_filer_image_object(),
            caption_text='Foo',
        )

        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_1)
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_4)

        with self.login_user_context(admin):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)

            # Assert user is unable to delete a saved child plugin
            data = {'token': action_token, 'child_plugins': [child_plugin_1.pk]}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
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
            data = {'token': action_token, 'child_plugins': plugin_ids}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
            self.assertEqual(response.status_code, 400)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_1.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_2.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_3.pk)
            self.assertObjectExist(CMSPlugin.objects.all(), pk=child_plugin_4.pk)

            plugin_ids = [
                child_plugin_2.pk,
                child_plugin_3.pk,
            ]
            data = {'token': action_token, 'child_plugins': plugin_ids}
            request = self.get_post_request(data)
            response = text_plugin_class.delete_on_cancel(request)
            self.assertEqual(response.status_code, 204)

            self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=child_plugin_2.pk)
            self.assertObjectDoesNotExist(CMSPlugin.objects.all(), pk=child_plugin_3.pk)

    def test_action_token_per_session(self):
        # Assert that a cancel token for the same plugin
        # is different per user session.
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )

        text_plugin_class = text_plugin.get_plugin_class_instance()

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token_1 = text_plugin_class.get_action_token(request, text_plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token_2 = text_plugin_class.get_action_token(request, text_plugin)

        self.assertNotEqual(action_token_1, action_token_2)

    def test_add_and_cancel_plugin_permissions(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        endpoint = self.get_add_plugin_uri(simple_placeholder, 'TextPlugin')

        with self.login_user_context(self.user):
            response = self.client.post(endpoint, {})
            self.assertEqual(response.status_code, 302)

        # Point to the newly created text plugin
        text_plugin_pk = self.get_plugin_id_from_response(response)
        cms_plugin = CMSPlugin.objects.get(pk=text_plugin_pk)
        text_plugin_class = cms_plugin.get_plugin_class_instance()

        endpoint = self.get_custom_admin_url(TextPlugin, 'delete_on_cancel')

        # Assert a standard user (no staff) can't delete ghost plugin
        with self.login_user_context(self.get_standard_user()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, cms_plugin)
            data = {'token': action_token}
            response = self.client.post(endpoint, data)
            self.assertEqual(response.status_code, 403)

        staff_user = self._create_user('addonly-staff', is_staff=True, is_superuser=False)

        self._give_cms_permissions(staff_user)
        self._give_permission(staff_user, text_plugin_class.model, 'add')

        with self.login_user_context(staff_user):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, cms_plugin)
            data = {'token': action_token}
            response = self.client.post(endpoint, data)
            self.assertEqual(response.status_code, 204)

    def test_change_form_has_rendered_plugin_content(self):
        """
        When the text form is rendered in the admin,
        the child plugins are rendered as their contents passed
        as initial data to the text field.
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )

        child_plugins = [
            self._add_child_plugin(text_plugin),
            self._add_child_plugin(text_plugin),
        ]

        for plugin in child_plugins:
            text_plugin = self.add_plugin_to_text(text_plugin, plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            context = RequestContext(request)
            context['request'] = request
            text_with_rendered_plugins = plugin_tags_to_admin_html(
                text=text_plugin.body,
                context=context,
            )

            endpoint = self.get_change_plugin_uri(text_plugin)
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 200)
            self.assertEqual(
                response.context['adminform'].form['body'].value(),
                text_with_rendered_plugins,
            )
            self.assertContains(
                response,
                escape(text_with_rendered_plugins),
                html=False,
            )

    def test_only_inline_editing_has_rendered_plugin_content(self):
        """
        Tests of child plugins of a TextPlugin are rendered correctly in edit mode
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        # import pdb; pdb.set_trace()
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="<p>I'm the first</p>",
        )

        self.add_plugin_to_text(text_plugin, self._add_child_plugin(text_plugin))
        if DJANGO_CMS4:
            try:
                from cms.models.contentmodels import PageContent
            except ModuleNotFoundError:
                from cms.models.titlemodels import PageContent
            from cms.toolbar.utils import get_object_edit_url

            if DJANGOCMS_VERSIONING:
                from djangocms_versioning.constants import DRAFT

                edit_endpoint = get_object_edit_url(
                    PageContent._original_manager.filter(
                        page=simple_page, language='en', version__state=DRAFT
                    ).first()
                )
            else:
                try:
                    edit_endpoint = get_object_edit_url(simple_page.get_content_obj(language='en'))
                except AttributeError:
                    edit_endpoint = get_object_edit_url(simple_page.get_title_obj(language='en'))
        else:
            edit_endpoint = simple_page.get_absolute_url()
        with self.login_user_context(self.get_superuser()):
            response = self.client.get(edit_endpoint + "?edit&inline_editing=1")
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "<cms-plugin")

        with self.login_user_context(self.get_superuser()):
            response = self.client.get(edit_endpoint + "?edit&inline_editing=0")
            self.assertEqual(response.status_code, 200)
            self.assertNotContains(response, "<cms-plugin")

    def test_user_cant_edit_child_plugins_directly(self):
        """
        No user regardless of permissions can modify the contents
        of a child plugin directly in the text plugin text.
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )

        child_plugins = [
            self._add_child_plugin(text_plugin),
            self._add_child_plugin(text_plugin),
        ]

        for plugin in child_plugins:
            text_plugin = self.add_plugin_to_text(text_plugin, plugin)

        with self.login_user_context(self.get_superuser()):
            expected_text = text_plugin.body

            # This returns the child plugins with their content
            # overridden to <img src="">
            overridden_text = self._replace_plugin_contents(
                text_plugin.body,
                new_plugin_content='<img src="">',
            )

            endpoint = self.get_change_plugin_uri(text_plugin)
            response = self.client.post(endpoint, {'body': overridden_text})
            text_plugin.refresh_from_db()

            self.assertEqual(response.status_code, 200)
            self.assertXMLEqual(text_plugin.body, expected_text)

    def test_render_child_plugin_endpoint(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )
        text_plugin_class = text_plugin.get_plugin_class_instance()
        child_plugin = self._add_child_plugin(text_plugin, 'LinkPlugin')
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 200)

            context = RequestContext(request)
            context['request'] = request
            rendered_content = _render_cms_plugin(child_plugin, context)
            rendered_child_plugin = plugin_to_tag(
                child_plugin,
                content=rendered_content,
                admin=True,
            )
            self.maxDiff = None
            self.assertEqual(force_str(response.content), rendered_child_plugin)

        child_plugin = self._add_child_plugin(text_plugin, plugin_type='PreviewDisabledPlugin')
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 200)

            # it is important that we do not add any extra whitespace inside of
            # <cms-plugin></cms-plugin>
            rendered_child_plugin = ('<cms-plugin render-plugin=false '
                                     'alt="Preview Disabled Plugin - 3 '
                                     '"title="Preview Disabled Plugin - 3" '
                                     'id="3"><span>Preview is disabled for this plugin</span>'
                                     '</cms-plugin>')

            self.assertEqual(force_str(response.content), rendered_child_plugin)

    def test_render_child_plugin_endpoint_calls_context_processors(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )
        text_plugin_class = text_plugin.get_plugin_class_instance()
        child_plugin = self._add_child_plugin(
            text_plugin,
            plugin_type='SekizaiPlugin',
        )
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin)

        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 200)

            context = RequestContext(request)
            context['request'] = request
            rendered_content = _render_cms_plugin(child_plugin, context)
            rendered_child_plugin = plugin_to_tag(
                child_plugin,
                content=rendered_content,
                admin=True,
            )

            self.assertEqual(force_str(response.content), rendered_child_plugin)

    def test_render_child_plugin_permissions(self):
        """
        Users can't render a child plugin without change permissions
        on the placeholder attached object and the text plugin.
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )
        text_plugin_class = text_plugin.get_plugin_class_instance()
        child_plugin = self._add_child_plugin(text_plugin)
        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin)

        with self.login_user_context(self.get_standard_user()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertContains(response, '<h1>403 Forbidden</h1>', status_code=403, html=True)

    def test_render_child_plugin_token_validation(self):
        """
        Users can only render a child plugin if the token
        was created in the current session and it's text plugin
        matches the child plugin parent.
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the first",
        )
        text_plugin_class = text_plugin.get_plugin_class_instance()
        child_plugin = self._add_child_plugin(text_plugin)

        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin)

        # Tokens are unique per session.
        # Users can't render a child plugin with a token
        # from another session.
        with self.login_user_context(self.get_superuser()):
            request = self.get_request()

        with self.login_user_context(self.get_superuser()):
            action_token = text_plugin_class.get_action_token(request, text_plugin)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 400)
            self.assertEqual(force_str(response.content), 'Unable to process your request. Invalid token.')

        text_plugin_2 = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="I'm the second",
        )

        # Tokens are unique per text plugin.
        # User can't render a child plugin for a token whose text plugin
        # does not match the plugin's parent.
        with self.login_user_context(self.get_superuser()):
            request = self.get_request()
            action_token = text_plugin_class.get_action_token(request, text_plugin_2)
            endpoint = self.get_custom_admin_url(TextPlugin, 'render_plugin')
            endpoint += f'?token={action_token}&plugin={child_plugin.pk}'
            response = self.client.get(endpoint)

            self.assertEqual(response.status_code, 204)
            self.assertEqual(force_str(response.content), '')

    def test_custom_ckeditor_body_css_classes(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        parent_plugin = add_plugin(
            simple_placeholder,
            DummyParentPlugin,
            'en',
            label=DummyParentPlugin._ckeditor_body_class_label_trigger,
        )
        child_plugin = add_plugin(
            simple_placeholder,
            DummyChildPlugin,
            'en',
            target=parent_plugin,
        )
        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body='Content',
            target=child_plugin,
        )

        with self.login_user_context(self.get_superuser()):
            change_endpoint = self.get_change_plugin_uri(text_plugin)
            response = self.client.get(change_endpoint)
            self.assertContains(response, DummyParentPlugin._ckeditor_body_class)
            self.assertContains(response, DummyChildPlugin.child_ckeditor_body_css_class)

    def test_render_plugin(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = self._add_text_plugin(simple_placeholder)

        for i in range(0, 10):
            plugin = self._add_child_plugin(
                text_plugin,
                plugin_type='LinkPlugin',
                data_suffix=i,
            )

            text_plugin = self.add_plugin_to_text(text_plugin, plugin)

        with self.assertNumQueries(2):
            request = self.get_request()
            context = RequestContext(request)
            context['request'] = request
            rendered = _render_cms_plugin(text_plugin, context)

        for i in range(0, 10):
            self.assertTrue('LinkPlugin record %d' % i in rendered)

    def test_render_extended_plugin(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')
        text_plugin = self._add_text_plugin(simple_placeholder, 'ExtendedTextPlugin')

        for i in range(0, 10):
            plugin = self._add_child_plugin(
                text_plugin,
                plugin_type='LinkPlugin',
                data_suffix=i,
            )

            text_plugin = self.add_plugin_to_text(text_plugin, plugin)

        with self.assertNumQueries(2):
            request = self.get_request()
            context = RequestContext(request)
            context['request'] = request
            rendered = _render_cms_plugin(text_plugin, context)

        for i in range(0, 10):
            self.assertTrue('LinkPlugin record %d' % i in rendered)

    def test_copy_plugin_integrity(self):
        """
        Test that copying of textplugins replaces references to copied plugins
        """
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = self._add_text_plugin(simple_placeholder)

        child_plugin_1 = self._add_child_plugin(
            text_plugin,
            plugin_type='LinkPlugin',
        )

        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_1)

        child_plugin_2 = self._add_child_plugin(
            text_plugin,
            plugin_type='LinkPlugin',
        )

        text_plugin = self.add_plugin_to_text(text_plugin, child_plugin_2)

        # create a page translation to copy plugins to
        translation = create_title(
            'fr',
            'test-page-fr',
            simple_page,
            slug='test-page-fr',
        )

        self.assertEqual(CMSPlugin.objects.filter(language='en').count(), 3)
        self.assertEqual(CMSPlugin.objects.filter(language=translation.language).count(), 0)

        data = {
            'source_placeholder_id': simple_placeholder.pk,
            'target_placeholder_id': simple_placeholder.pk,
            'target_language': translation.language,
            'source_language': 'en',
        }

        endpoint = self.get_admin_url(Placeholder if DJANGO_CMS4 else Page, 'copy_plugins')
        endpoint += '?' + urlencode({'cms_path': '/en/'})

        with self.login_user_context(self.user):
            response = self.client.post(endpoint, data)
            self.assertEqual(response.status_code, 200)
            self.assertEqual(CMSPlugin.objects.filter(language='en').count(), 3)
            self.assertEqual(CMSPlugin.objects.filter(language=translation.language).count(), 3)

            plugins = list(CMSPlugin.objects.order_by("id"))  # Look at the order of creation
            new_plugin = plugins[3].get_plugin_instance()[0]
            idlist = sorted(plugin_tags_to_id_list(new_plugin.body))
            expected = sorted([plugins[4].pk, plugins[5].pk])
            self.assertEqual(idlist, expected)

    def test_copy_plugin_callback(self):
        simple_page = self.create_page('test page', template='page.html', language='en')
        simple_placeholder = self.get_placeholders(simple_page, 'en').get(slot='content')

        text_plugin_1 = self._add_text_plugin(simple_placeholder)

        child_plugin_1_a = self._add_child_plugin(
            text_plugin_1,
            plugin_type='LinkPlugin',
        )

        text_plugin_1 = self.add_plugin_to_text(text_plugin_1, child_plugin_1_a)

        child_plugin_1_b = self._add_child_plugin(
            text_plugin_1,
            plugin_type='LinkPlugin',
        )

        text_plugin_1 = self.add_plugin_to_text(text_plugin_1, child_plugin_1_b)

        text_plugin_2 = copy.copy(text_plugin_1)
        text_plugin_2.pk = None
        text_plugin_2.save()

        child_plugin_2_a = self._add_child_plugin(
            text_plugin_2,
            plugin_type='LinkPlugin',
        )
        child_plugin_2_b = self._add_child_plugin(
            text_plugin_2,
            plugin_type='LinkPlugin',
        )
        source_map = {
            child_plugin_1_a.pk: child_plugin_2_a,
            child_plugin_1_b.pk: child_plugin_2_b,
        }

        TextPlugin.do_post_copy(text_plugin_2, source_map)

        text_plugin_2.refresh_from_db()
        idlist = sorted(plugin_tags_to_id_list(text_plugin_2.body))
        expected = sorted([child_plugin_2_a.pk, child_plugin_2_b.pk])
        self.assertEqual(idlist, expected)

    def test_plugin_tags_to_id_list(self):
        pairs = (
            ('<cms-plugin id="1"></cms-plugin><cms-plugin id="2"></cms-plugin>', [1, 2]),
            ('<cms-plugin alt="<h1>markup</h1>" id="1"></cms-plugin><cms-plugin id="1"></cms-plugin>', [1, 1]),
        )

        for markup, expected in pairs:
            self.assertEqual(plugin_tags_to_id_list(markup), expected)

    def test_text_plugin_xss(self):
        page = self.create_page('test page', template='page.html', language='en')
        placeholder = self.get_placeholders(page, 'en').get(slot='content')
        plugin = add_plugin(placeholder, 'TextPlugin', 'en', body='body')
        endpoint = self.get_change_plugin_uri(plugin)

        with self.login_user_context(self.user):
            data = {
                'body': (
                    '<div onload="do_evil_stuff();">divcontent</div><a href="javascript:do_evil_stuff();">acontent</a>'
                ),
            }
            response = self.client.post(endpoint, data)
            self.assertEqual(response.status_code, 200)
            self.assertEqual(self.reload(plugin).body, '<div>divcontent</div><a>acontent</a>')


@unittest.skipUnless(
    HAS_DJANGOCMS_TRANSLATIONS and HAS_DJANGOCMS_TRANSFER,
    'Optional dependencies for tests are not installed.',
)
class DjangoCMSTranslationsIntegrationTestCase(BaseTestCase):
    def setUp(self):
        super().setUp()
        self.page = self.create_page('test page', template='page.html', language='en')
        self.placeholder = self.get_placeholders(self.page, 'en').get(slot='content')

    def _export_page(self):
        return json.loads(export_page(self.page, 'en'))

    def test_textfield_without_children(self):
        raw_content = '<p>Please <a href="http://www.google.com">CLICK ON LINK1</a> to go to link1.</p>'
        add_plugin(self.placeholder, 'TextPlugin', 'en', body=raw_content)

        plugin = self._export_page()[0]['plugins'][0]
        result, children_included_in_this_content = TextPlugin.get_translation_export_content('body', plugin['data'])

        self.assertEqual(result, raw_content)
        self.assertEqual(children_included_in_this_content, [])

        result = TextPlugin.set_translation_import_content(result, plugin)
        self.assertDictEqual(result, {})

    def test_textfield_with_children(self):
        parent = add_plugin(self.placeholder, 'TextPlugin', 'en', body='')
        child1 = add_plugin(self.placeholder, 'DummyLinkPlugin', 'en', target=parent, label='CLICK ON LINK1')
        parent_body = (
            '<p>Please <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}"></cms-plugin> to go to link1.</p>'
        ).format(child1.pk)
        parent.body = parent_body
        parent.save()

        plugin = self._export_page()[0]['plugins'][0]
        result, children_included_in_this_content = TextPlugin.get_translation_export_content('body', plugin['data'])

        expected = (
            parent_body
            .replace('></cms-plugin>', '>CLICK ON LINK1</cms-plugin>', 1)
        )
        self.assertEqual(result, expected)
        self.assertEqual(children_included_in_this_content, [child1.pk])

        result = TextPlugin.set_translation_import_content(result, plugin)
        self.assertDictEqual(result, {child1.pk: 'CLICK ON LINK1'})

    def test_textfield_with_multiple_children(self):
        parent = add_plugin(self.placeholder, 'TextPlugin', 'en', body='')
        child1 = add_plugin(self.placeholder, 'DummyLinkPlugin', 'en', target=parent, label='CLICK ON LINK1')
        child2 = add_plugin(self.placeholder, 'DummyLinkPlugin', 'en', target=parent, label='CLICK ON LINK2')
        parent_body = (
            '<p>Please <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}"></cms-plugin> to go to link1 '
            'or <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}"></cms-plugin> to go to link2.</p>'
        ).format(child1.pk, child2.pk)
        parent.body = parent_body
        parent.save()

        plugin = self._export_page()[0]['plugins'][0]
        result, children_included_in_this_content = TextPlugin.get_translation_export_content('body', plugin['data'])

        expected = (
            parent_body
            .replace('></cms-plugin>', '>CLICK ON LINK1</cms-plugin>', 1)
            .replace('></cms-plugin>', '>CLICK ON LINK2</cms-plugin>', 1)
        )
        self.assertEqual(result, expected)
        self.assertEqual(children_included_in_this_content, [child1.pk, child2.pk])

        result = TextPlugin.set_translation_import_content(result, plugin)
        self.assertDictEqual(result, {child1.pk: 'CLICK ON LINK1', child2.pk: 'CLICK ON LINK2'})

    def test_textfield_with_multiple_children_one_deleted(self):
        parent = add_plugin(self.placeholder, 'TextPlugin', 'en', body='')
        child1 = add_plugin(self.placeholder, 'DummyLinkPlugin', 'en', target=parent, label='CLICK ON LINK1')
        child2 = add_plugin(self.placeholder, 'DummyLinkPlugin', 'en', target=parent, label='CLICK ON LINK2')
        parent_body = (
            '<p>Please <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}"></cms-plugin> to go to link1 '
            'or <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}"></cms-plugin> to go to link2.</p>'
        ).format(child1.pk, child2.pk)
        parent.body = parent_body
        parent.save()

        plugin = self._export_page()[0]['plugins'][0]

        child1.delete()

        result, children_included_in_this_content = TextPlugin.get_translation_export_content('body', plugin['data'])

        expected = (
            '<p>Please  to go to link1 '
            'or <cms-plugin alt="Dummy Link Plugin - dummy link object "'
            'title="Dummy Link Plugin - dummy link object" id="{}">CLICK ON LINK2</cms-plugin> to go to link2.</p>'
        ).format(child2.pk)
        self.assertEqual(result, expected)
        self.assertEqual(children_included_in_this_content, [child2.pk])

        result = TextPlugin.set_translation_import_content(result, plugin)
        self.assertDictEqual(result, {child2.pk: 'CLICK ON LINK2'})

    def test_textfield_with_untranslatable_children(self):
        parent = add_plugin(self.placeholder, 'TextPlugin', 'en', body='')
        child1 = add_plugin(self.placeholder, 'DummySpacerPlugin', 'en', target=parent)
        parent_body = (
            '<p>This is cool <cms-plugin alt="Dummy Spacer Plugin - dummy spacer object "'
            'title="Dummy Spacer Plugin - dummy spacer object" id="{}"></cms-plugin> this is nice</p>'
        ).format(child1.pk)
        parent.body = parent_body
        parent.save()

        plugin = self._export_page()[0]['plugins'][0]
        result, children_included_in_this_content = TextPlugin.get_translation_export_content('body', plugin['data'])

        expected = (
            parent_body
        )
        self.assertEqual(result, expected)
        self.assertEqual(children_included_in_this_content, [child1.pk])

        result = TextPlugin.set_translation_import_content(result, plugin)
        self.assertDictEqual(result, {child1.pk: ''})


@unittest.skipUnless(
    HAS_DJANGOCMS_PICTURE,
    'Optional dependency djangocms-picture for tests is not installed.',
)
class DjangoCMSPictureIntegrationTestCase(TestFixture, BaseTestCase):
    def setUp(self):
        super().setUp()
        self.page = self.create_page('test page', template='page.html', language='en')
        self.placeholder = self.get_placeholders(self.page, 'en').get(slot='content')

    def test_extract_images(self):
        text_plugin = add_plugin(
            self.placeholder,
            'TextPlugin',
            'en',
            body='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==">',
        )

        from djangocms_picture.models import Picture
        picture_plugin = Picture.objects.order_by('-id')[0]
        self.assertEqual(picture_plugin.parent.id, text_plugin.id)
        self.assertHTMLEqual(
            text_plugin.body,
            '<cms-plugin alt="Image - unnamed file " title="Image - unnamed file" id="{}"></cms-plugin>'.format(
                picture_plugin.id,
            ),
        )
