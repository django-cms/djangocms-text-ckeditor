# -*- coding: utf-8 -*-
from cms.api import create_page, add_plugin
from cms.test_utils.testcases import (CMSTestCase, URL_CMS_PLUGIN_EDIT)


class WidgetTestCase(CMSTestCase):
    def setUp(self):
        self.super_user = self._create_user("test", True, True)

    def test_sub_plugin_config(self):
        page = create_page(title='home', template='page.html', language='en')
        plugin = add_plugin(page.placeholders.get(slot='content'), 'TextPlugin', 'en',
                            body='some text')
        url = '%s%s/' % (URL_CMS_PLUGIN_EDIT, plugin.pk)
        with self.login_user_context(self.super_user):
            response = self.client.get(url)
            self.assertContains(response, "group: 'Extra'")
            self.assertContains(response, "'title': 'Add a link'")
            self.assertContains(response, "group: 'Generic'")
            self.assertContains(response, "'title': 'Picture'")
