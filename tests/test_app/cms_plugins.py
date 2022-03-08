from django.template import engines

from cms.models import CMSPlugin
from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.utils.plugins import get_plugin_model

from djangocms_text_ckeditor.cms_plugins import TextPlugin
from tests.test_app.models import DummyLink, DummySpacer


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


@plugin_pool.register_plugin
class DummyParentPlugin(CMSPluginBase):
    render_template = 'test_app/dummy_parent_plugin.html'
    model = DummyLink
    allow_children = True

    _ckeditor_body_class = 'parent-plugin-css-class'
    _ckeditor_body_class_label_trigger = 'parent link label'

    @classmethod
    def get_child_ckeditor_body_css_class(cls, plugin: CMSPlugin) -> str:
        plugin_model = get_plugin_model(plugin.plugin_type)
        plugin_instance = plugin_model.objects.get(pk=plugin.pk)
        if plugin_instance.label == cls._ckeditor_body_class_label_trigger:
            return cls._ckeditor_body_class
        else:
            return ''


@plugin_pool.register_plugin
class DummyChildPlugin(CMSPluginBase):
    render_template = 'test_app/dummy_child_plugin.html'
    child_ckeditor_body_css_class = 'child-plugin-css-class'
    allow_children = True
