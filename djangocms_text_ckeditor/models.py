from django.db import models
from cms.models import CMSPlugin
from django.utils.html import strip_tags
from django.utils.text import truncate_words
from django.utils.translation import ugettext_lazy as _
from djangocms_text_ckeditor.utils import plugin_tags_to_id_list, replace_plugin_tags
from djangocms_text_ckeditor.html import clean_html, extract_images


class Text(CMSPlugin):
    """Abstract Text Plugin Class"""
    body = models.TextField(_("body"))

    search_fields = ('body',)

    def __unicode__(self):
        return u"%s" % (truncate_words(strip_tags(self.body), 3)[:30] + "...")

    def save(self, *args, **kwargs):
        body = self.body
        body = extract_images(body, self)
        body = clean_html(body, full=False)
        self.body = body
        super(Text, self).save(*args, **kwargs)

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

