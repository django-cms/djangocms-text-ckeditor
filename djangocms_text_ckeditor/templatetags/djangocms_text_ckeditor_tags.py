from django import template

register = template.Library()


@register.simple_tag(takes_context=True)
def render_plugin_preview(context, plugin):
    request = context['request']

    try:
        toolbar = request.toolbar
        content_renderer = toolbar.content_renderer
    except AttributeError:
        content_renderer = None

    if content_renderer:
        content = content_renderer.render_plugin(
            instance=plugin,
            context=context,
            editable=False,
        )
    else:
        content = plugin.render_plugin(context)
    return content
