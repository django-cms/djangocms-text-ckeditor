# -*- coding: utf-8 -*-
from django import forms

from djangocms_text_ckeditor.fields import HTMLFormField


class SimpleTextForm(forms.Form):
    text = HTMLFormField()
