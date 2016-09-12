from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.template import engines
from djangocms_text_ckeditor.cms_plugins import TextPlugin


class PreviewDisabledPlugin(CMSPluginBase):
    text_editor_preview = False

    def get_render_template(self, context, instance, placeholder):
        template = '<span>Preview is disabled for this plugin</span>'
        return engines['django'].from_string(template)


plugin_pool.register_plugin(PreviewDisabledPlugin)


@plugin_pool.register_plugin
class ExtendedTextPlugin(TextPlugin):
    name = 'Extended'
