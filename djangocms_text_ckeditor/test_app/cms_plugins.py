from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.template import Template


class PreviewDisabledPlugin(CMSPluginBase):
    render_template = Template("<span>Preview is disabled for this plugin</span>")
    text_editor_preview = False


plugin_pool.register_plugin(PreviewDisabledPlugin)
