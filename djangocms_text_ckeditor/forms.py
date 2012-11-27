
from django import forms
from django.forms.models import ModelForm
from djangocms_text_ckeditor.models import TextCKEditor

class TextForm(ModelForm):
    body = forms.CharField()

    class Meta:
        model = TextCKEditor
        exclude = ('page', 'position', 'placeholder', 'language', 'plugin_type')
