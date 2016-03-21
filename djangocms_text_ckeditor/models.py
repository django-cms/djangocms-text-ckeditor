# -*- coding: utf-8 -*-
import re
import sys

from cms.models import CMSPlugin
from django.db import models
from django.utils.encoding import force_text, python_2_unicode_compatible
from django.utils.html import strip_tags
from django.utils.text import Truncator
from django.utils.translation import ugettext_lazy as _

from . import compat, settings
from .html import clean_html, extract_images
from .utils import plugin_tags_to_id_list, plugin_to_tag, replace_plugin_tags

try:
    from softhyphen.html import hyphenate
except ImportError:
    def hyphenate(t):
        return t


@python_2_unicode_compatible
class AbstractText(CMSPlugin):
    """Abstract Text Plugin Class"""

    # Add an app namespace to related_name to avoid field name clashes
    # with any other plugins that have a field with the same name as the
    # lowercase of the class name of this model.
    # https://github.com/divio/django-cms/issues/5030
    if compat.LTE_DJANGO_1_6:
        # related_name='%(app_label)s_%(class)s' does not work on  Django 1.6
        cmsplugin_ptr = models.OneToOneField(
            CMSPlugin,
            related_name='+',
            parent_link=True,
        )
        search_fields = tuple()
    else:
        cmsplugin_ptr = models.OneToOneField(
            CMSPlugin,
            related_name='%(app_label)s_%(class)s',
            parent_link=True,
        )
        search_fields = ('body',)

    body = models.TextField(_("body"))

    # This property is deprecated. And will be removed in a future release.
    # It should be set on the Plugin, not the model.
    disable_child_plugins = True

    class Meta:
        abstract = True

    def __str__(self):
        return Truncator(strip_tags(self.body).replace('&shy;', '')).words(3, truncate="...")

    def __init__(self, *args, **kwargs):
        super(AbstractText, self).__init__(*args, **kwargs)
        self.body = force_text(self.body)

    def save(self, *args, **kwargs):
        super(AbstractText, self).save(*args, **kwargs)
        body = self.body
        body = extract_images(body, self)
        body = clean_html(body, full=False)
        if settings.TEXT_AUTO_HYPHENATE:
            try:
                body = hyphenate(body, language=self.language)
            except (TypeError, CMSPlugin.DoesNotExist):
                body = hyphenate(body)
        self.body = body
        # no need to pass args or kwargs here
        # this 2nd save() call is internal and should be
        # fully managed by us.
        # think of it as an update() vs save()
        super(AbstractText, self).save(update_fields=('body',))

    def clean_plugins(self):
        ids = plugin_tags_to_id_list(self.body)
        plugins = CMSPlugin.objects.filter(parent=self)
        for plugin in plugins:
            if plugin.pk not in ids:
                # delete plugins that are not referenced in the text anymore
                plugin.delete()

    def post_copy(self, old_instance, ziplist):
        """
        Fix references to plugins
        """
        replace_ids = {}
        for new, old in ziplist:
            replace_ids[old.pk] = new.pk
        self.body = replace_plugin_tags(old_instance.get_plugin_instance()[0].body, replace_ids)
        self.save()

    def get_translatable_content(self):
        translatable_content = super(AbstractText, self).get_translatable_content()
        if not translatable_content:
            return False

        for field, value in translatable_content.items():
            # Check for an embedded LinkPlugin
            matches = re.findall(
                r'(<img alt="(Link[^"]*)" id="plugin_obj_([\d]*)" src="([^"]*)" title="(Link[^"]*)">)', value
            )

            if matches:
                for match in matches:
                    try:
                        link_plugin = CMSPlugin.objects.get(pk=match[2]).get_plugin_instance()[0]
                    except CMSPlugin.DoesNotExist:
                        sys.stderr.write("ERROR: Could not find plugin with pk %s!\n" % str(match[2]))
                        continue

                    text = '<a plugin="%s" href="%s" target="%s" alt="%s" title="%s" img_src="%s">%s</a>' % (
                        match[2], link_plugin.link(), link_plugin.target, match[1],
                        match[4], match[3], link_plugin.name
                    )
                    translatable_content[field] = value.replace(match[0], text)

        return translatable_content

    def set_translatable_content(self, fields):
        for field, value in fields.items():
            # Check for 'serialized' link plugin
            exp = r'(<a plugin="([\d]*)" href="[^"]*" target="[^"]*" alt="([^"]*)" title="([^"]*)" ' \
                  'img_src="([^"]*)">(.*[^</a>])</a>)'
            matches = re.findall(exp, value)
            if matches:
                for match in matches:
                    try:
                        linkplugin = CMSPlugin.objects.get(pk=match[1]).get_plugin_instance()[0]
                    except CMSPlugin.DoesNotExist:
                        sys.stderr.write("ERROR: Could not find plugin with pk %s\n" % str(match[0]))

                    # Save changes to linkplugin
                    linkplugin.name = match[5]
                    linkplugin.save()

                    # Save changes to parent text plugin
                    text = '<img alt="%s" id="plugin_obj_%s" src="%s" title="%s">' % (match[2], match[1], match[4], match[3])
                    value = value.replace(match[0], text)

            setattr(self, field, value)
        self.save()

        return True

    def notify_on_autoadd_children(self, request, conf, children):
        """
        Method called when we auto add children to this plugin via
        default_plugins/<plugin>/children in CMS_PLACEHOLDER_CONF.
        we must replace some strings with child tag for the CKEDITOR.
        Strings are "%(_tag_child_<order>)s" with the inserted order of chidren
        """
        replacements = dict()
        order = 1
        for child in children:
            replacements['_tag_child_' + str(order)] = plugin_to_tag(child)
            order += 1
        self.body = self.body % replacements
        self.save()


class Text(AbstractText):

    class Meta:
        abstract = False
