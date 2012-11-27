from django.db import models
from cms.models import CMSPlugin
from django.utils.html import strip_tags
from django.utils.text import truncate_words
from django.utils.translation import ugettext_lazy as _
from djangocms_text_ckeditor.utils import plugin_admin_html_to_tags, \
    plugin_tags_to_admin_html, plugin_tags_to_id_list, replace_plugin_tags
from djangocms_text_ckeditor.html import clean_html

class TextCKEditor(CMSPlugin):
    """Abstract Text Plugin Class"""
    body = models.TextField(_("body"))

    def _set_body_admin(self, text):
        self.body = plugin_admin_html_to_tags(text)

    def _get_body_admin(self):
        return plugin_tags_to_admin_html(self.body)

    body_for_admin = property(_get_body_admin, _set_body_admin, None,
                              """
                              body attribute, but with transformations
                              applied to allow editing in the
                              admin. Read/write.
                              """)

    search_fields = ('body',)

    def __unicode__(self):
        return u"%s" % (truncate_words(strip_tags(self.body), 3)[:30] + "...")

    def clean(self):
        self.body = clean_html(self.body, full=False)

    def clean_plugins(self):
        ids = plugin_tags_to_id_list(self.body)
        plugins = CMSPlugin.objects.filter(parent=self)
        for plugin in plugins:
            if not plugin.pk in ids:
                plugin.delete() #delete plugins that are not referenced in the text anymore

    def post_copy(self, old_instance, ziplist):
        """
        Fix references to plugins
        """

        replace_ids = {}
        for new, old in ziplist:
            replace_ids[old.pk] = new.pk

        self.body = replace_plugin_tags(old_instance.get_plugin_instance()[0].body, replace_ids)
        self.save()

