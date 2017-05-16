from django import template

from cms.toolbar.utils import get_toolbar_from_request

register = template.Library()


@register.simple_tag(takes_context=True)
def render_plugin_preview(context, plugin):
    request = context['request']
    toolbar = get_toolbar_from_request(request)

    try:
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
