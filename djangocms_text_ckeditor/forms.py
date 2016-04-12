# -*- coding: utf-8 -*-
from django import forms
from django.core import signing
from django.db.models import Q
from django.forms.models import ModelForm

from cms.models import CMSPlugin

from .models import Text


class DeleteOnCancelForm(forms.Form):
    plugin = forms.ModelChoiceField(
        queryset=CMSPlugin.objects.none(),
        required=True,
    )
    token = forms.CharField(required=True)

    def __init__(self, *args, **kwargs):
        self.text_plugin_type = kwargs.pop('text_plugin_type')
        super(DeleteOnCancelForm, self).__init__(*args, **kwargs)
        self.fields['plugin'].queryset = self.get_plugin_queryset()

    def is_valid_token(self):
        plugin = self.cleaned_data['plugin']
        payload = ':'.join([plugin.pk, self.cleaned_data['token']])
        signer = signing.Signer(salt=plugin.plugin_type)

        try:
            signer.unsign(payload)
        except:
            return False
        else:
            return True

    def get_plugin_queryset(self):
        plugins = (
            CMSPlugin
            .objects
            .select_related('placeholder')
            .filter(
                Q(plugin_type=self.text_plugin_type)|
                Q(parent__plugin_type=self.text_plugin_type)
            )
        )
        return plugins


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
