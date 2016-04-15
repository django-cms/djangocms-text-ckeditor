# -*- coding: utf-8 -*-
from django.template import Context, Template

from djangocms_helper.base_test import BaseTestCase

from djangocms_text_ckeditor.test_app.models import SimpleText


class FieldTestCase(BaseTestCase):

    def test_text_is_safe(self):
        original = 'Hello <h2>There</h2>'
        template = Template("{{ obj.text }}")
        text = SimpleText.objects.create(text='Hello <h2>There</h2>')
        rendered = template.render(Context({'obj': text}))
        # This fails because I'm explicitly passing  a non-safe string
        # to the create() method.
        self.assertNotEqual(original, rendered)
        # Fetching a new instance should now have the string marked
        # as safe.
        text = SimpleText.objects.get(pk=text.pk)
        rendered = template.render(Context({'obj': text}))
        self.assertEqual(original, rendered)
