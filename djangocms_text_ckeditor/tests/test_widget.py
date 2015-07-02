# -*- coding: utf-8 -*-
from cms.api import create_page, add_plugin
from cms.test_utils.testcases import (CMSTestCase, URL_CMS_PLUGIN_EDIT)
from cms.models import CMSPlugin
from djangocms_text_ckeditor.utils import plugin_to_tag
from djangocms_helper.base_test import BaseTestCase

from .. import html
from .. import settings


class WidgetTestCase(CMSTestCase, BaseTestCase):

    def setUp(self):
        self.super_user = self._create_user("test", True, True)
        self.default_parser = html.DEFAULT_PARSER

    def tearDown(self):
        settings.ALLOW_TOKEN_PARSERS = (
            'djangocms_text_ckeditor.attribute_parsers.DataAttributeParser',
        )
        html.DEFAULT_PARSER = self.default_parser

    def test_sub_plugin_config(self):
        page = create_page(title='home', template='page.html', language='en')
        plugin = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin', 'en',
                            body='some text')
        url = '%s%s/' % (URL_CMS_PLUGIN_EDIT, plugin.pk)
        with self.login_user_context(self.user):
            response = self.client.get(url)
            self.assertContains(response, "group: 'Extra'")
            self.assertContains(response, "'title': 'Add a link'")
            self.assertContains(response, "group: 'Generic'")
            self.assertContains(response, "'title': 'Picture'")

    def test_plugin_edit(self):
        page    = create_page(title='pagina',template='page.html',language='en')
        plugin  = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin','en',body="Lorem ipsum")
        page.publish('en')
        response = self.client.get(page.get_absolute_url('en'))
        self.assertContains(response, "Lorem ipsum")

    def test_child_plugin(self):
        page    = create_page(title='pagina',template='page.html',language='en')
        placeholder = page.placeholders.get(slot='content')
        plugin  = add_plugin(placeholder, 'TextPlugin','en',body="Lorem ipsum")
        test_image = self.create_django_image_obj()
        pic_plugin  = add_plugin(placeholder,'PicturePlugin','en',target=plugin,image=test_image,alt="Foo")
        plugin.body = '%s %s'%( plugin.body,plugin_to_tag(pic_plugin))
        plugin.save()
        page.publish('en')
        response = self.client.get(page.get_absolute_url('en'))
        self.assertContains(response, 'Lorem ipsum')
        self.assertContains(response, '<img src="/media/%s' % pic_plugin.image)

    def test_contain_text(self):
        page = create_page(title='home', template='page.html', language='en')
        plugin = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin', 'en',
                            body='some text')
        language = 'en'
        page.publish(language)
        url = page.get_absolute_url(language)
        response = self.client.get(url)
        self.assertContains(response, "some text")

    def test_text_sanitizer(self):
        page = create_page(title='home', template='page.html', language='en')
        plugin = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin', 'en',
                            body='<span data-one="1" data-two="2">some text</span>')
        language = 'en'
        page.publish(language)
        url = page.get_absolute_url(language)
        response = self.client.get(url)
        self.assertContains(response, 'data-one="1"')
        self.assertContains(response, 'data-two="2"')

    def test_text_sanitizer_no_settings(self):
        settings.ALLOW_TOKEN_PARSERS = []
        html.DEFAULT_PARSER = html._get_default_parser()
        page = create_page(title='home', template='page.html', language='en')
        plugin = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin', 'en',
                            body='<span data-one="1" data-two="2">some text</span>')
        language = 'en'
        page.publish(language)
        url = page.get_absolute_url(language)
        response = self.client.get(url)
        self.assertContains(response, '<span>some text</span>')
