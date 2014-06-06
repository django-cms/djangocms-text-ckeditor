from django.db import models
from django.contrib.admin import widgets as admin_widgets
from .html import clean_html
from .widgets import TextEditorWidget

try:
    from south.modelsinspector import add_introspection_rules
    add_introspection_rules([], ['^djangocms_text_ckeditor\.fields\.HTMLField'])
except ImportError:
    pass


class HTMLField(models.TextField):
    configuration = None

    def __init__(self, *args, **kwargs):
        # This allow widget configuration customization from the model definition
        if kwargs.get('configuration', False):
            self.configuration = kwargs['configuration']
            del(kwargs['configuration'])
        super(HTMLField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        if self.configuration:
            text_editor_widget = TextEditorWidget(configuration=self.configuration)
        else:
            text_editor_widget = TextEditorWidget
        defaults = {'widget': text_editor_widget}
        defaults.update(kwargs)

        # override the admin widget
        if defaults['widget'] == admin_widgets.AdminTextareaWidget:
            defaults['widget'] = text_editor_widget

        return super(HTMLField, self).formfield(**defaults)

    def clean(self, value, model_instance):
        value = super(HTMLField, self).clean(value, model_instance)
        return clean_html(value, full=False)