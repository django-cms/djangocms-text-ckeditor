from django.db import models

from cms.models import CMSPlugin

from djangocms_text_ckeditor.fields import HTMLField
from djangocms_text_ckeditor.models import AbstractText


class SimpleText(models.Model):
    text = HTMLField(blank=True)


class DummyLink(CMSPlugin):
    label = models.TextField()

    class Meta:
        abstract = False

    def __str__(self):
        return 'dummy link object'


class DummySpacer(CMSPlugin):
    class Meta:
        abstract = False

    def __str__(self):
        return 'dummy spacer object'


class Pizza(models.Model):
    description = HTMLField()
    allergens = HTMLField(blank=True)

    def __str__(self):
        return 'Pizza object'


class Topping(models.Model):
    name = models.CharField(max_length=255)
    description = HTMLField()
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)


class ExtendedText(AbstractText):
    title = models.CharField(max_length=100)

    class Meta:
        abstract = False
