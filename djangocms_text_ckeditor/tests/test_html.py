# -*- coding: utf-8 -*-
from django.test import TestCase

from .. import html
from .. import settings


class HtmlSanitizerAdditionalProtocolsTests(TestCase):

    def tearDown(self):
        settings.TEXT_ADDITIONAL_PROTOCOLS = []

    def test_default_protocol_escaping(self):
        settings.TEXT_ADDITIONAL_PROTOCOLS = []
        parser = html._get_default_parser()
        text = html.clean_html('''<source src="rtmp://testurl.com/">''',
                               full=False,
                               parser=parser)
        self.assertEqual('<source>', text)

    def test_custom_protocol_enabled(self):
        settings.TEXT_ADDITIONAL_PROTOCOLS = ('rtmp',)
        parser = html._get_default_parser()
        text = html.clean_html('''<source src="rtmp://testurl.com/">''',
                               full=False,
                               parser=parser)
        self.assertEqual('''<source src="rtmp://testurl.com/">''', text)
