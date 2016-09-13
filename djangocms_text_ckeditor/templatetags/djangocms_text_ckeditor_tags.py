from django import template


register = template.Library()


@register.simple_tag(takes_context=True)
def render_plugin_preview(context, plugin):
    content_renderer = context.get('cms_content_renderer')

    if content_renderer:
        content = content_renderer.render_plugin(
            instance=plugin,
            context=context,
            editable=False,
        )
    else:
        content = plugin.render_plugin(context)
    return content
