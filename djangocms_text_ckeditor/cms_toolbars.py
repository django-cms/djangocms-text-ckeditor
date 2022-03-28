from cms.cms_toolbars import CMSToolbar
from cms.toolbar_pool import toolbar_pool
from django import forms

@toolbar_pool.register
class InlineEditingToolbar(CMSToolbar):
    @property
    def media(self):
        if self.toolbar.edit_mode_active:
            return forms.Media(
                js = (
                    "djangocms_text_ckeditor/ckeditor/ckeditor.js",
                    "djangocms_text_ckeditor/js/cms.inline-editor.js",
                )
            )
        return forms.Media()


