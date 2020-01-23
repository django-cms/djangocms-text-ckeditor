# -*- coding: utf-8 -*-
from django.template import engines

from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool

from tests.test_app.models import DummyLink, DummySpacer

from djangocms_text_ckeditor.cms_plugins import TextPlugin


@plugin_pool.register_plugin
class PreviewDisabledPlugin(CMSPluginBase):
    text_editor_preview = False

    def get_render_template(self, context, instance, placeholder):
        template = '<span>Preview is disabled for this plugin</span>'
        return engines['django'].from_string(template)


@plugin_pool.register_plugin
class SekizaiPlugin(CMSPluginBase):
    name = 'Sekizai'
    render_template = 'test_app/plugin_with_sekizai.html'


@plugin_pool.register_plugin
class ExtendedTextPlugin(TextPlugin):
    name = 'Extended'


@plugin_pool.register_plugin
class DummyLinkPlugin(CMSPluginBase):
    render_plugin = False
    model = DummyLink


@plugin_pool.register_plugin
class DummySpacerPlugin(CMSPluginBase):
    render_plugin = False
    model = DummySpacer
