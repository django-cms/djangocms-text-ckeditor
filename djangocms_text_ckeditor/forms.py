# -*- coding: utf-8 -*-
from django import forms
from django.forms.models import ModelForm

from .models import Text


class TextForm(ModelForm):
    body = forms.CharField()

    class Meta:
        model = Text
        exclude = (
            'page',
            'position',
            'placeholder',
            'language',
            'plugin_type',
        )
