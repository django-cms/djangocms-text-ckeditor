# -*- coding: utf-8 -*-
from django import template

from djangocms_text_ckeditor.compat import LTE_CMS_3_3


register = template.Library()


@register.simple_tag(takes_context=True)
def render_plugin_preview(context, plugin):
    request = context['request']

    if LTE_CMS_3_3:
        return plugin.render_plugin(context)

    try:
        content_renderer = request.toolbar.content_renderer
    except AttributeError:
        from cms.plugin_rendering import ContentRenderer

        content_renderer = ContentRenderer(request)

    content = content_renderer.render_plugin(
        instance=plugin,
        context=context,
        editable=False,
    )
    return content
