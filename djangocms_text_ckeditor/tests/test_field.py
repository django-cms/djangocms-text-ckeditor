# -*- coding: utf-8 -*-
from django.template import Context, Template

from djangocms_helper.base_test import BaseTestCase

from djangocms_text_ckeditor.test_app.forms import SimpleTextForm
from djangocms_text_ckeditor.test_app.models import SimpleText


class FieldTestCase(BaseTestCase):

    text_normal = '<p>some non malicious text</p>'
    text_with_iframe = ('<p>some non malicious text</p>'
                        '<iframe src="http://www.w3schools.com"></iframe>')
    text_with_script = ('<p>some non malicious text</p>'
                        '<script>alert("Hello! I am an alert box!");</script>')

    def test_model_field_text_is_safe(self):
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

    def test_model_field_sanitized(self):
        obj = SimpleText(text=self.text_normal)
        obj.full_clean()
        obj.save()

        obj = SimpleText.objects.get(pk=obj.pk)

        self.assertEqual(obj.text, self.text_normal)

        obj = SimpleText(text=self.text_with_iframe)
        obj.full_clean()
        obj.save()

        escaped = ('<p>some non malicious text</p>&lt;iframe '
                   'src="http://www.w3schools.com"&gt;&lt;/iframe&gt;')
        self.assertEqual(obj.text, escaped)

        obj = SimpleText(text=self.text_with_script)
        obj.full_clean()
        obj.save()

        escaped = ('<p>some non malicious text</p>&lt;script&gt;'
                   'alert("Hello! I am an alert box!");&lt;/script&gt;')
        self.assertEqual(obj.text, escaped)

    def test_form_field_sanitized(self):
        form = SimpleTextForm(data={'text': self.text_normal})
        self.assertTrue(form.is_valid())

        self.assertEqual(form.cleaned_data['text'], self.text_normal)

        form = SimpleTextForm(data={'text': self.text_with_iframe})
        self.assertTrue(form.is_valid())

        escaped = ('<p>some non malicious text</p>&lt;iframe '
                   'src="http://www.w3schools.com"&gt;&lt;/iframe&gt;')
        self.assertEqual(form.cleaned_data['text'], escaped)

        form = SimpleTextForm(data={'text': self.text_with_script})
        self.assertTrue(form.is_valid())

        escaped = ('<p>some non malicious text</p>&lt;script&gt;'
                   'alert("Hello! I am an alert box!");&lt;/script&gt;')
        self.assertEqual(form.cleaned_data['text'], escaped)
