# -*- coding: utf-8 -*-
import os
import re
from collections import OrderedDict
from functools import wraps

from django.core.files.storage import get_storage_class
from django.template.defaultfilters import force_escape
from django.template.loader import render_to_string
from django.utils.functional import LazyObject

from cms.models import CMSPlugin

from classytags.utils import flatten_context

from .compat import available_attrs


OBJ_ADMIN_RE_PATTERN = r'<cms-plugin .*?\bid="(?P<pk>\d+)".*?>.*?</cms-plugin>'
OBJ_ADMIN_WITH_CONTENT_RE_PATTERN = r'<cms-plugin .*?\bid="(?P<pk>\d+)".*?>(?P<content>.*?)</cms-plugin>'
OBJ_ADMIN_RE = re.compile(OBJ_ADMIN_RE_PATTERN, flags=re.DOTALL)


def _render_cms_plugin(plugin, context):
    context = flatten_context(context)
    context['plugin'] = plugin

    # This my fellow ckeditor enthusiasts is a hack..

    # If I let djangoCMS render the plugin using {% render_plugin %}
    # it will wrap the output in the toolbar markup which we don't want.

    # If I render the plugin without rendering a template first, then context processors
    # are not called and so plugins that rely on these like those using sekizai will error out.

    # The compromise is to render a template so that Django binds the context to it
    # and thus calls context processors AND render the plugin manually with the context
    # after it's been bound to a template.
    response = render_to_string(
        'cms/plugins/render_plugin_preview.html',
        context,
        request=context['request'],
    )
    return response


def random_comment_exempt(view_func):
    # Borrowed from
    # https://github.com/lpomfrey/django-debreach/blob/f778d77ffc417/debreach/decorators.py#L21
    # This is a no-op if django-debreach is not installed
    def wrapped_view(*args, **kwargs):
        response = view_func(*args, **kwargs)
        response._random_comment_exempt = True
        return response
    return wraps(view_func, assigned=available_attrs(view_func))(wrapped_view)


def plugin_to_tag(obj, content='', admin=False):
    plugin_attrs = OrderedDict(
        id=obj.pk,
        icon_alt=force_escape(obj.get_instance_icon_alt()),
        content=content,
    )

    if admin:
        # Include extra attributes when rendering on the admin
        plugin_class = obj.get_plugin_class()
        preview = getattr(plugin_class, 'text_editor_preview', True)
        plugin_tag = (
            u'<cms-plugin render-plugin=%(preview)s alt="%(icon_alt)s "'
            u'title="%(icon_alt)s" id="%(id)d">%(content)s</cms-plugin>'
        )
        plugin_attrs['preview'] = 'true' if preview else 'false'
    else:
        plugin_tag = (
            u'<cms-plugin alt="%(icon_alt)s "'
            u'title="%(icon_alt)s" id="%(id)d">%(content)s</cms-plugin>'
        )
    return plugin_tag % plugin_attrs


def plugin_tags_to_id_list(text, regex=OBJ_ADMIN_RE):
    def _find_plugins():
        for tag in regex.finditer(text):
            plugin_id = tag.groupdict().get('pk')

            if plugin_id:
                yield plugin_id
    return [int(id) for id in _find_plugins()]


def _plugin_tags_to_html(text, output_func):
    """
    Convert plugin object 'tags' into the form for public site.

    context is the template context to use, placeholder is the placeholder name
    """
    plugins_by_id = get_plugins_from_text(text)

    def _render_tag(m):
        try:
            plugin_id = int(m.groupdict()['pk'])
            obj = plugins_by_id[plugin_id]
        except KeyError:
            # Object must have been deleted.  It cannot be rendered to
            # end user so just remove it from the HTML altogether
            return u''
        else:
            obj._render_meta.text_enabled = True
            return output_func(obj, m)
    return OBJ_ADMIN_RE.sub(_render_tag, text)


def plugin_tags_to_user_html(text, context):
    def _render_plugin(obj, match):
        return _render_cms_plugin(obj, context)
    return _plugin_tags_to_html(text, output_func=_render_plugin)


def plugin_tags_to_admin_html(text, context):
    def _render_plugin(obj, match):
        plugin_content = _render_cms_plugin(obj, context)
        return plugin_to_tag(obj, content=plugin_content, admin=True)
    return _plugin_tags_to_html(text, output_func=_render_plugin)


def plugin_tags_to_db(text):
    def _strip_plugin_content(obj, match):
        return plugin_to_tag(obj)
    return _plugin_tags_to_html(text, output_func=_strip_plugin_content)


def replace_plugin_tags(text, id_dict, regex=OBJ_ADMIN_RE):
    plugins_by_id = CMSPlugin.objects.in_bulk(id_dict.values())

    def _replace_tag(m):
        try:
            plugin_id = int(m.groupdict()['pk'])
            new_id = id_dict[plugin_id]
            plugin = plugins_by_id[new_id]
        except KeyError:
            # Object must have been deleted.  It cannot be rendered to
            # end user, or edited, so just remove it from the HTML
            # altogether
            return u''
        return plugin_to_tag(plugin)
    return regex.sub(_replace_tag, text)


def get_plugins_from_text(text, regex=OBJ_ADMIN_RE):
    from cms.utils.plugins import downcast_plugins

    plugin_ids = plugin_tags_to_id_list(text, regex)
    plugins = CMSPlugin.objects.filter(pk__in=plugin_ids).select_related('placeholder')
    plugin_list = downcast_plugins(plugins, select_placeholder=True)
    return dict((plugin.pk, plugin) for plugin in plugin_list)


"""
The following class is taken from https://github.com/jezdez/django/compare/feature/staticfiles-templatetag
and should be removed and replaced by the django-core version in 1.4
"""
default_storage = 'django.contrib.staticfiles.storage.StaticFilesStorage'


class ConfiguredStorage(LazyObject):

    def _setup(self):
        from django.conf import settings
        self._wrapped = get_storage_class(getattr(settings, 'STATICFILES_STORAGE', default_storage))()


configured_storage = ConfiguredStorage()


def static_url(path):
    '''
    Helper that prefixes a URL with STATIC_URL and cms
    '''
    if not path:
        return ''
    return configured_storage.url(os.path.join('', path))
