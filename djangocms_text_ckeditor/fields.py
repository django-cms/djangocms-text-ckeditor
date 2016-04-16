# -*- coding: utf-8 -*-
from django.forms.fields import CharField
from django.contrib.admin import widgets as admin_widgets
from django.db import models
from django.utils.safestring import mark_safe

from .html import clean_html
from .widgets import TextEditorWidget

try:
    from south.modelsinspector import add_introspection_rules
    add_introspection_rules([], ['^djangocms_text_ckeditor\.fields\.HTMLField'])
except ImportError:
    pass


class HTMLFormField(CharField):

    widget = TextEditorWidget

    def __init__(self, *args, **kwargs):
        conf = kwargs.pop('configuration', None)

        if conf:
            widget = TextEditorWidget(configuration=conf)
        else:
            widget = None
        kwargs.setdefault('widget', widget)
        super(HTMLFormField, self).__init__(*args, **kwargs)

    def clean(self, value):
        value = super(HTMLFormField, self).clean(value)
        return clean_html(value, full=False)


class HTMLField(models.TextField):
    configuration = None

    def __init__(self, *args, **kwargs):
        # This allows widget configuration customization
        # from the model definition
        if kwargs.get('configuration', None):
            self.configuration = kwargs.pop('configuration')
        super(HTMLField, self).__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection, context):
        if value is None:
            return value
        return mark_safe(value)

    def to_python(self, value):
        # needed for django <= 1.8 compatibility
        if value is None:
            return value

        # could be that value is already marked safe
        # this is ok because mark_safe is idempotent
        return mark_safe(value)

    def formfield(self, **kwargs):
        if self.configuration:
            widget = TextEditorWidget(configuration=self.configuration)
        else:
            widget = TextEditorWidget

        defaults = {
            'form_class': HTMLFormField,
            'widget': TextEditorWidget,
        }
        defaults.update(kwargs)

        # override the admin widget
        if defaults['widget'] == admin_widgets.AdminTextareaWidget:
            defaults['widget'] = widget
        return super(HTMLField, self).formfield(**defaults)
