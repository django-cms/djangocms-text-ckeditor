from django.db import models
from django.contrib.admin import widgets as admin_widgets
from djangocms_text_ckeditor.html import clean_html
from djangocms_text_ckeditor.widgets import TextEditorWidget
try:
    from south.modelsinspector import add_introspection_rules
    add_introspection_rules([], ['^djangocms_text_ckeditor\.fields\.HTMLField'])
except ImportError:
    pass


class HTMLField(models.TextField):
    def __init__(self, *args, **kwargs):
        self.settings_name = kwargs.pop('settings_name', 'default')
        super(HTMLField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        widget_kwargs = {'settings_name': self.settings_name}
        defaults = {'widget': TextEditorWidget(**widget_kwargs)}
        defaults.update(kwargs)

        # override the admin widget
        if defaults['widget'] == admin_widgets.AdminTextareaWidget:
            defaults['widget'] = TextEditorWidget(**widget_kwargs)

        return super(HTMLField, self).formfield(**defaults)

    def clean(self, value, model_instance):
        value = super(HTMLField, self).clean(value, model_instance)
        return clean_html(value, full=False)