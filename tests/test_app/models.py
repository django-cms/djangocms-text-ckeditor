# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from cms.models import CMSPlugin

from six import python_2_unicode_compatible

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


class Pizza(models.Model):
    description = HTMLField()
    allergens = HTMLField(blank=True)


class Topping(models.Model):
    name = models.CharField(max_length=255)
    description = HTMLField()
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
