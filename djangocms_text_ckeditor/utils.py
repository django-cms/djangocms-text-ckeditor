# -*- coding: utf-8 -*-
import os
import re

from cms.models import CMSPlugin
from django.core.files.storage import get_storage_class
from django.template.defaultfilters import force_escape
from django.utils.functional import LazyObject

OBJ_ADMIN_RE_PATTERN = r'<img [^>]*\bid="plugin_obj_(\d+)"[^>]*/?>'
OBJ_ADMIN_RE = re.compile(OBJ_ADMIN_RE_PATTERN)


def plugin_to_tag(obj):
    return (
        u'<img src="%(icon_src)s" alt="%(icon_alt)s" title="%(icon_alt)s"'
        u'id="plugin_obj_%(id)d" />' % (
            dict(
                id=obj.id, icon_src=force_escape(obj.get_instance_icon_src()),
                icon_alt=force_escape(obj.get_instance_icon_alt()),
            )
        )
    )


def plugin_tags_to_id_list(text, regex=OBJ_ADMIN_RE):
    ids = regex.findall(text)
    return [int(id) for id in ids if id.isdigit()]


def plugin_tags_to_user_html(text, context, placeholder):
    """
    Convert plugin object 'tags' into the form for public site.

    context is the template context to use, placeholder is the placeholder name
    """
    plugin_map = _plugin_dict(text)

    def _render_tag(m):
        plugin_id = int(m.groups()[0])
        try:
            obj = plugin_map[plugin_id]
            obj._render_meta.text_enabled = True
        except KeyError:
            # Object must have been deleted.  It cannot be rendered to
            # end user so just remove it from the HTML altogether
            return u''
        return obj.render_plugin(context, placeholder)
    return OBJ_ADMIN_RE.sub(_render_tag, text)


def replace_plugin_tags(text, id_dict):
    def _replace_tag(m):
        plugin_id = int(m.groups()[0])
        new_id = id_dict.get(plugin_id)
        try:
            obj = CMSPlugin.objects.get(pk=new_id)
        except CMSPlugin.DoesNotExist:
            # Object must have been deleted.  It cannot be rendered to
            # end user, or edited, so just remove it from the HTML
            # altogether
            return u''
        return (
            u'<img src="%(icon_src)s" alt="%(icon_alt)s"'
            u'title="%(icon_alt)s" id="plugin_obj_%(id)d" />' % (
                dict(id=new_id,
                     icon_src=force_escape(obj.get_instance_icon_src()),
                     icon_alt=force_escape(obj.get_instance_icon_alt()),
                     )
            )
        )
    return OBJ_ADMIN_RE.sub(_replace_tag, text)


def _plugin_dict(text, regex=OBJ_ADMIN_RE):
    try:
        from cms.utils.plugins import downcast_plugins
    except ImportError:
        from cms.plugins.utils import downcast_plugins

    plugin_ids = plugin_tags_to_id_list(text, regex)
    plugin_list = downcast_plugins(CMSPlugin.objects.filter(pk__in=plugin_ids), select_placeholder=True)
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
