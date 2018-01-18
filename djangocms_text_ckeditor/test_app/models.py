# -*- coding: utf-8 -*-
from cms.models import CMSPlugin
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from djangocms_text_ckeditor.fields import HTMLField


class SimpleText(models.Model):
    text = HTMLField(blank=True)


@python_2_unicode_compatible
class DummyLink(CMSPlugin):
    label = models.TextField()

    class Meta:
        abstract = False

    def __str__(self):
        return 'dummy link object'


@python_2_unicode_compatible
class DummySpacer(CMSPlugin):
    class Meta:
        abstract = False

    def __str__(self):
        return 'dummy spacer object'
