from django import forms
from django.utils.safestring import mark_safe

from cms.cms_toolbars import CMSToolbar
from cms.toolbar.items import BaseItem
from cms.toolbar_pool import toolbar_pool

from . import settings
from .widgets import PATH_TO_JS


class InlineEditingItem(BaseItem):
    """Make ckeditor config available for inline editing"""
    def render(self):
        return mark_safe(
            f'<script class="ckeditorconfig" '
            f'data-ckeditor-basepath="{settings.TEXT_CKEDITOR_BASE_PATH}"></script>')


@toolbar_pool.register
class InlineEditingToolbar(CMSToolbar):
    @property
    def media(self):
        if self.toolbar.edit_mode_active:
            return forms.Media(
                css={"screen": ("djangocms_text_ckeditor/css/cms.inline-ckeditor.css",)},
                js=(PATH_TO_JS,)
            )
        return forms.Media()

    def populate(self):
        self.toolbar.add_item(InlineEditingItem(), position=None)
