from django import template


register = template.Library()


@register.simple_tag(takes_context=True)
def render_plugin_preview(context, plugin):
    request = context['request']

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
