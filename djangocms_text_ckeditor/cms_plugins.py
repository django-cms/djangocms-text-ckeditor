from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.plugins.text.forms import TextForm
from django.forms.fields import CharField
from django.utils.translation import ugettext_lazy as _
from djangocms_text_ckeditor.widgets import TextEditorWidget
from djangocms_text_ckeditor.models import TextCKEditor
from djangocms_text_ckeditor.utils import plugin_tags_to_user_html


class TextPlugin(CMSPluginBase):
    model = TextCKEditor
    name = _("Text")
    form = TextForm
    render_template = "cms/plugins/text.html"
    change_form_template = "cms/plugins/text_plugin_change_form.html"

    def get_editor_widget(self, request, plugins):
        """
        Returns the Django form Widget to be used for
        the text area
        """
        return TextEditorWidget(installed_plugins=plugins)

    def get_form_class(self, request, plugins):
        """
        Returns a subclass of Form to be used by this plugin
        """
        # We avoid mutating the Form declared above by subclassing
        class TextPluginForm(self.form):
            pass
        widget = self.get_editor_widget(request, plugins)
        TextPluginForm.declared_fields["body"] = CharField(widget=widget, required=False)
        return TextPluginForm

    def get_form(self, request, obj=None, **kwargs):
        plugins = plugin_pool.get_text_enabled_plugins(self.placeholder, self.page)
        form = self.get_form_class(request, plugins)
        kwargs['form'] = form # override standard form
        return super(TextPlugin, self).get_form(request, obj, **kwargs)

    def render(self, context, instance, placeholder):
        context.update({
            'body': plugin_tags_to_user_html(instance.body, context, placeholder),
            'placeholder': placeholder,
            'object': instance
        })
        return context

    def save_model(self, request, obj, form, change):
        obj.clean_plugins()
        super(TextPlugin, self).save_model(request, obj, form, change)

plugin_pool.register_plugin(TextPlugin)
