# -*- coding: utf-8 -*-
from django.contrib.admin import widgets as admin_widgets
from django.db import models
from django.forms.fields import CharField
from django.utils.safestring import mark_safe

from .html import clean_html
from .widgets import TextEditorWidget


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
        clean_value = clean_html(value, full=False)

        # We `mark_safe` here (as well as in the correct places) because Django
        # Parler cache's the value directly from the in-memory object as it
        # also stores the value in the database. So the cached version is never
        # processed by `from_db_value()`.
        clean_value = mark_safe(clean_value)

        return clean_value


class HTMLField(models.TextField):

    def __init__(self, *args, **kwargs):
        # This allows widget configuration customization
        # from the model definition
        self.configuration = kwargs.pop('configuration', None)
        super(HTMLField, self).__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection, context):
        if value is None:
            return value
        return mark_safe(value)

    def to_python(self, value):
        # On Django >= 1.8 a new method
        # was introduced (from_db_value) which is called
        # whenever the value is loaded from the db.
        # And to_python is called for serialization and cleaning.
        # This means we don't need to add mark_safe on Django >= 1.8
        # because it's handled by (from_db_value)
        if value is None:
            return value
        return value

    def formfield(self, **kwargs):
        if self.configuration:
            widget = TextEditorWidget(configuration=self.configuration)
        else:
            widget = TextEditorWidget

        defaults = {
            'form_class': HTMLFormField,
            'widget': widget,
        }
        defaults.update(kwargs)

        # override the admin widget
        if defaults['widget'] == admin_widgets.AdminTextareaWidget:
            defaults['widget'] = widget
        return super(HTMLField, self).formfield(**defaults)

    def clean(self, value, model_instance):
        # This needs to be marked safe as well because the form field's
        # clean method is not called on model.full_clean()
        value = super(HTMLField, self).clean(value, model_instance)
        return mark_safe(clean_html(value, full=False))
