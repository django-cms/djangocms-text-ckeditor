from copy import deepcopy

from django.db import models
from django.utils.encoding import force_str
from django.utils.html import strip_tags
from django.utils.text import Truncator
from django.utils.translation import gettext_lazy as _

from cms.models import CMSPlugin

from . import settings
from .html import clean_html, extract_images
from .utils import plugin_tags_to_db, plugin_tags_to_id_list, plugin_to_tag, replace_plugin_tags


try:
    from softhyphen.html import hyphenate
except ImportError:
    def hyphenate(t):
        return t


class AbstractText(CMSPlugin):
    """
    Abstract Text Plugin Class
    """

    # Add an app namespace to related_name to avoid field name clashes
    # with any other plugins that have a field with the same name as the
    # lowercase of the class name of this model.
    # https://github.com/divio/django-cms/issues/5030
    cmsplugin_ptr = models.OneToOneField(
        CMSPlugin,
        on_delete=models.CASCADE,
        related_name='%(app_label)s_%(class)s',
        parent_link=True,
    )
    body = models.TextField(_('body'))
    search_fields = ('body',)

    # This property is deprecated. And will be removed in a future release.
    # It should be set on the Plugin, not the model.
    disable_child_plugins = True

    class Meta:
        abstract = True

    def __str__(self):
        return Truncator(strip_tags(self.body).replace('&shy;', '')).words(3, truncate='...')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.body = force_str(self.body)

    def clean(self):
        self.body = plugin_tags_to_db(self.body)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
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
        super().save(update_fields=('body',))

    def clean_plugins(self):
        ids = self._get_inline_plugin_ids()
        unbound_plugins = self.cmsplugin_set.exclude(pk__in=ids)

        for plugin in unbound_plugins:
            # delete plugins that are not referenced in the text anymore
            plugin.delete()

    def copy_referenced_plugins(self):
        referenced_plugins = self.get_referenced_plugins()
        if referenced_plugins:
            plugin_pairs = []
            for source_plugin in referenced_plugins:
                new_plugin = deepcopy(source_plugin)
                new_plugin.pk = None
                new_plugin.id = None
                new_plugin._state.adding = True
                new_plugin.parent = self
                if hasattr(self.placeholder, "add_plugin"):  # CMS v4
                    new_plugin.position = self.position + 1
                    new_plugin = self.placeholder.add_plugin(new_plugin)
                else:
                    new_plugin = self.add_child(instance=new_plugin)
                new_plugin.copy_relations(source_plugin)
                plugin_pairs.append((new_plugin, source_plugin))
            self.add_existing_child_plugins_to_pairs(plugin_pairs)
            self.post_copy(self, plugin_pairs)

    def get_referenced_plugins(self):
        ids_in_body = set(plugin_tags_to_id_list(self.body))
        child_plugins_ids = set(self.cmsplugin_set.all().values_list('id', flat=True))
        referenced_plugins_ids = ids_in_body - child_plugins_ids
        return CMSPlugin.objects.filter(id__in=referenced_plugins_ids)

    def add_existing_child_plugins_to_pairs(self, plugins_pairs):
        for plugin in self.cmsplugin_set.all():
            plugins_pairs.append((plugin, plugin))

    def _get_inline_plugin_ids(self):
        return plugin_tags_to_id_list(self.body)

    def post_copy(self, old_instance, ziplist):
        """
        Fix references to plugins
        """
        replace_ids = {}
        for new, old in ziplist:
            replace_ids[old.pk] = new.pk

        old_text = old_instance.get_plugin_instance()[0].body
        self.body = replace_plugin_tags(old_text, replace_ids)
        self.save()

    def notify_on_autoadd_children(self, request, conf, children):
        """
        Method called when we auto add children to this plugin via
        default_plugins/<plugin>/children in CMS_PLACEHOLDER_CONF.
        we must replace some strings with child tag for the CKEDITOR.
        Strings are "%(_tag_child_<order>)s" with the inserted order of chidren
        """
        replacements = {}
        order = 1
        for child in children:
            replacements['_tag_child_' + str(order)] = plugin_to_tag(child)
            order += 1
        self.body = self.body % replacements
        self.save()


class Text(AbstractText):

    class Meta:
        abstract = False
