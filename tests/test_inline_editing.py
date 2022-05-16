# original from
# http://tech.octopus.energy/news/2016/01/21/testing-for-missing-migrations-in-django.html
import io

from cms.api import create_page, add_plugin
from django.core.management import call_command
from django.test import TestCase, override_settings

from djangocms_text_ckeditor.compat import get_page_placeholders


class MigrationTestCase(TestCase):

    @override_settings(TEXT_INLINE_EDITING=True)
    def test_inline_editing(self):
        """
         Test that you can add a text plugin
         """
        admin = self.get_superuser()
        simple_page = create_page('test page', 'page.html', 'en')
        simple_placeholder = get_page_placeholders(simple_page, 'en').get(slot='content')

        text_plugin = add_plugin(
            simple_placeholder,
            'TextPlugin',
            'en',
            body="<p>I'm the first</p>",
        )

        with self.login_user_context(admin):
            response = self.client.get(simple_page.get_absolute_url())
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, '<div class="cms-ckeditor-inline-wrapper', )

        with self.login_user_context(admin):
            response = self.client.get(simple_page.get_absolute_url() + "?inline_editing=0")
        self.assertEqual(response.status_code, 200)
        self.assert(response, '<p>I'm the first</p>")


