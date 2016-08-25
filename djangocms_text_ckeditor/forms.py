# -*- coding: utf-8 -*-
from cms.models import CMSPlugin
from django import forms
from django.core import signing
from django.core.signing import BadSignature
from django.forms.models import ModelForm
from django.template import RequestContext
from django.utils.translation import ugettext

from .models import Text
from .utils import _render_cms_plugin, plugin_tags_to_id_list, plugin_to_tag


class ActionTokenValidationForm(forms.Form):

    token = forms.CharField(required=True)

    def get_id_from_token(self, session_id):
        payload = self.cleaned_data['token']

        signer = signing.Signer(salt=session_id)

        try:
            return signer.unsign(payload)
        except BadSignature:
            return False


class RenderPluginForm(forms.Form):
    plugin = forms.ModelChoiceField(
        queryset=CMSPlugin.objects.none(),
        required=True,
    )

    def __init__(self, *args, **kwargs):
        self.text_plugin = kwargs.pop('text_plugin')
        super(RenderPluginForm, self).__init__(*args, **kwargs)
        self.fields['plugin'].queryset = self.get_child_plugins()

    def get_child_plugins(self):
        return self.text_plugin.get_descendants()

    def render_plugin(self, request):
        plugin = self.cleaned_data['plugin']
        context = RequestContext(request)
        context['request'] = request
        rendered_content = _render_cms_plugin(plugin, context)
        return plugin_to_tag(plugin, content=rendered_content, admin=True)


class DeleteOnCancelForm(forms.Form):
    child_plugins = forms.ModelMultipleChoiceField(
        queryset=CMSPlugin.objects.none(),
        required=False,
    )

    def __init__(self, *args, **kwargs):
        self.text_plugin = kwargs.pop('text_plugin')
        super(DeleteOnCancelForm, self).__init__(*args, **kwargs)
        self.fields['child_plugins'].queryset = self.get_child_plugins()

    def clean(self):
        children = self.cleaned_data.get('child_plugins')

        if not children and self.text_plugin.get_plugin_instance()[0]:
            # This check prevents users from using a cancel token
            # to delete just any text plugin.
            # Only non-saved text plugins can be deleted.
            message = ugettext("Can't delete a saved plugin.")
            raise forms.ValidationError(message, code='invalid')
        return self.cleaned_data

    def get_child_plugins(self):
        # We use this queryset to limit the plugins
        # a user can delete to only plugins that have not
        # been saved in text and are descendants of the text plugin.
        instance = self.text_plugin.get_plugin_instance()[0]

        if instance:
            # Only non-saved children can be deleted.
            excluded_plugins = plugin_tags_to_id_list(instance.body)
        else:
            excluded_plugins = []

        queryset = self.text_plugin.get_descendants()

        if excluded_plugins:
            queryset = queryset.exclude(pk__in=excluded_plugins)
        return queryset

    def delete(self):
        child_plugins = self.cleaned_data.get('child_plugins')

        if child_plugins:
            child_plugins.delete()
        else:
            self.text_plugin.delete()


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
