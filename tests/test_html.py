from django.test import TestCase

from djangocms_text_ckeditor import html, settings


class HtmlSanitizerAdditionalProtocolsTests(TestCase):

    def test_default_tag_escaping(self):
        settings.TEXT_ADDITIONAL_TAGS = []
        parser = html._get_default_parser()
        text = html.clean_html(
            '<iframe src="rtmp://testurl.com/"></iframe>',
            full=False,
            parser=parser,
        )
        self.assertEqual(
            '&lt;iframe src="rtmp://testurl.com/"&gt;&lt;/iframe&gt;',
            text,
        )

    def test_custom_tag_enabled(self):
        settings.TEXT_ADDITIONAL_TAGS = ['iframe']
        parser = html._get_default_parser()
        text = html.clean_html(
            '<iframe src="rtmp://testurl.com/"></iframe>',
            full=False,
            parser=parser,
        )
        self.assertEqual(
            '<iframe src="rtmp://testurl.com/"></iframe>',
            text,
        )

    def test_default_attribute_escaping(self):
        settings.TEXT_ADDITIONAL_ATTRIBUTES = []
        parser = html._get_default_parser()
        text = html.clean_html(
            '<span test-attr="2">foo</span>',
            full=False,
            parser=parser,
        )
        self.assertEqual(
            '<span>foo</span>',
            text,
        )

    def test_custom_attribute_enabled(self):
        settings.TEXT_ADDITIONAL_ATTRIBUTES = ['test-attr']
        parser = html._get_default_parser()
        text = html.clean_html(
            '<span test-attr="2">foo</span>',
            full=False,
            parser=parser,
        )
        self.assertEqual(
            '<span test-attr="2">foo</span>',
            text,
        )

    def test_default_protocol_escaping(self):
        settings.TEXT_ADDITIONAL_PROTOCOLS = []
        parser = html._get_default_parser()
        text = html.clean_html(
            '<source src="rtmp://testurl.com/">',
            full=False,
            parser=parser,
        )
        self.assertEqual('<source>', text)

    def test_custom_protocol_enabled(self):
        settings.TEXT_ADDITIONAL_PROTOCOLS = ['rtmp']
        parser = html._get_default_parser()
        text = html.clean_html(
            '<source src="rtmp://testurl.com/">',
            full=False,
            parser=parser,
        )
        self.assertEqual('<source src="rtmp://testurl.com/">', text)

    def test_clean_html_with_sanitize_enabled(self):
        old_text_html_sanitize = settings.TEXT_HTML_SANITIZE
        settings.TEXT_HTML_SANITIZE = True
        parser = html._get_default_parser()

        original = '<span test-attr="2">foo</span>'
        cleaned = html.clean_html(
            original,
            full=False,
            parser=parser,
        )
        try:
            self.assertHTMLEqual('<span>foo</span>', cleaned)
        finally:
            settings.TEXT_HTML_SANITIZE = old_text_html_sanitize

    def test_clean_html_with_sanitize_disabled(self):
        old_text_html_sanitize = settings.TEXT_HTML_SANITIZE
        settings.TEXT_HTML_SANITIZE = False
        parser = html._get_default_parser()

        original = '<span test-attr="2">foo</span>'
        cleaned = html.clean_html(
            original,
            full=False,
            parser=parser,
        )
        try:
            self.assertHTMLEqual(original, cleaned)
        finally:
            settings.TEXT_HTML_SANITIZE = old_text_html_sanitize
