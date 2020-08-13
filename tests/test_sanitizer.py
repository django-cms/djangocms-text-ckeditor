from django.test import TestCase

import html5lib
from html5lib import treebuilders

from djangocms_text_ckeditor import attribute_parsers, html, sanitizer


class SanitizerTestCase(TestCase):

    def setUp(self):
        self.allow_token_parsers = sanitizer.TextSanitizer.allow_token_parsers

    def tearDown(self):
        sanitizer.TextSanitizer.allow_token_parsers = self.allow_token_parsers

    def test_sanitizer(self):
        allowed_attrs = html5lib.filters.sanitizer.allowed_attributes
        sanitizer.TextSanitizer.allow_token_parsers = (attribute_parsers.DataAttributeParser,)
        parser = html5lib.HTMLParser(
            tree=treebuilders.getTreeBuilder('dom'),
        )
        body = '<span data-one="1" data-two="2">some text</span>'
        body = html.clean_html(body, full=False, parser=parser)
        self.assertTrue('data-one="1"' in body)
        self.assertTrue('data-two="2"' in body)
        self.assertEqual(allowed_attrs, html5lib.filters.sanitizer.allowed_attributes)

    def test_sanitizer_with_custom_token_parser(self):

        class DonutAttributeParser(sanitizer.AllowTokenParser):

            def parse(self, attribute, val):
                return attribute == 'donut'

        sanitizer.TextSanitizer.allow_token_parsers = (DonutAttributeParser,)
        parser = html5lib.HTMLParser(
            tree=treebuilders.getTreeBuilder('dom'),
        )
        body = '<span donut="yummy">some text</span>'
        body = html.clean_html(body, full=False, parser=parser)
        self.assertEqual('<span donut="yummy">some text</span>', body)

    def test_sanitizer_without_token_parsers(self):
        sanitizer.TextSanitizer.allow_token_parsers = ()
        parser = html5lib.HTMLParser(
            tree=treebuilders.getTreeBuilder('dom'),
        )
        body = '<span data-one="1" data-two="2">some text</span>'
        body = html.clean_html(body, full=False, parser=parser)
        self.assertEqual('<span>some text</span>', body)
