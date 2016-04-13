# -*- coding: utf-8 -*-
from django import forms
from django.core import signing
from django.core.signing import BadSignature
from django.db.models import Q
from django.forms.models import ModelForm
from django.utils.encoding import force_text
from django.utils.translation import ugettext

from cms.models import CMSPlugin

from .models import Text
from .utils import plugin_tags_to_id_list


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

    def clean(self):
        plugin = self.cleaned_data['plugin']

        if plugin.plugin_type == self.text_plugin_type:
            text_plugin = plugin.get_plugin_instance()[0]

            if text_plugin:
                # Plugin has been saved
                # This check prevents users from using a cancel token
                # to delete any text plugin.
                # Only non-saved text plugins can be deleted.
                message = ugettext("Can't delete a saved plugin.")
                raise forms.ValidationError(message, code='invalid')
            return self.cleaned_data

        text_plugin = plugin.parent.get_plugin_instance()[0]

        if text_plugin:
            plugin_ids = plugin_tags_to_id_list(text_plugin.body)
        else:
            plugin_ids = []

        if plugin.pk in plugin_ids:
            # Plugin has been saved
            # This check prevents users from using a cancel token
            # to delete any child of the text plugin.
            # Only non-saved children can be deleted.
            message = ugettext("Can't delete a saved plugin.")
            raise forms.ValidationError(message, code='invalid')
        return self.cleaned_data

    def is_valid_token(self, session_id):
        plugin = self.cleaned_data['plugin']

        if plugin.plugin_type != self.text_plugin_type:
            plugin = plugin.parent

        plugin_id = force_text(plugin.pk)
        payload = ':'.join([plugin_id, self.cleaned_data['token']])

        signer = signing.Signer(salt=session_id)

        try:
            signer.unsign(payload)
        except BadSignature:
            return False
        else:
            return True

    def get_plugin_queryset(self):
        plugins = (
            CMSPlugin
            .objects
            .select_related('placeholder', 'parent')
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
