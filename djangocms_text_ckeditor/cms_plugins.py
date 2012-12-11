from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.forms.fields import CharField
from django.utils.translation import ugettext_lazy as _
from djangocms_text_ckeditor.widgets import TextEditorWidget
from djangocms_text_ckeditor.models import Text
from djangocms_text_ckeditor.utils import plugin_tags_to_user_html
from djangocms_text_ckeditor.forms import TextForm


class TextPlugin(CMSPluginBase):
    model = Text
    name = _("Text")
    form = TextForm
    render_template = "cms/plugins/text.html"
    change_form_template = "cms/plugins/text_plugin_change_form.html"

    def get_editor_widget(self, request, plugins, pk):
        """
        Returns the Django form Widget to be used for
        the text area
        """
        return TextEditorWidget(installed_plugins=plugins, pk=pk)

    def get_form_class(self, request, plugins, pk):
        """
        Returns a subclass of Form to be used by this plugin
        """
        # We avoid mutating the Form declared above by subclassing
        class TextPluginForm(self.form):
            pass
        widget = self.get_editor_widget(request, plugins, pk)
        TextPluginForm.declared_fields["body"] = CharField(
            widget=widget, required=False
        )
        return TextPluginForm

    def get_form(self, request, obj=None, **kwargs):
        plugins = plugin_pool.get_text_enabled_plugins(
            self.placeholder,
            self.page
        )
        pk = self.cms_plugin_instance.pk
        form = self.get_form_class(request, plugins, pk)
        kwargs['form'] = form  # override standard form
        return super(TextPlugin, self).get_form(request, obj, **kwargs)

    def render(self, context, instance, placeholder):
        context.update({
            'body': plugin_tags_to_user_html(
                instance.body,
                context,
                placeholder
            ),
            'placeholder': placeholder,
            'object': instance
        })
        return context

    def save_model(self, request, obj, form, change):
        obj.clean_plugins()
        super(TextPlugin, self).save_model(request, obj, form, change)

plugin_pool.register_plugin(TextPlugin)
