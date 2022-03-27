from cms.cms_toolbars import CMSToolbar
from cms.toolbar_pool import toolbar_pool


@toolbar_pool.register
class InlineEditingToolbar(CMSToolbar):
    class Media:
        ...
        # css = {"all": ("djangocms_text_ckeditor/css/cms.ckeditor.inline.css",)}
        js = (
            "djangocms_text_ckeditor/ckeditor/ckeditor.js",
            "djangocms_text_ckeditor/js/cms.inline-editor.js",
        )
