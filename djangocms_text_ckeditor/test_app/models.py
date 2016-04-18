# -*- coding: utf-8 -*-
from django.db import models

from djangocms_text_ckeditor.fields import HTMLField


class SimpleText(models.Model):
    text = HTMLField(blank=True)
