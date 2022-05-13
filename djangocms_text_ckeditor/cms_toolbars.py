from urllib.parse import urlparse, urlunparse

from django import forms
from django.http import QueryDict
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from cms.cms_toolbars import ADMIN_MENU_IDENTIFIER, CMSToolbar
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


class InlineEditingToolbar(CMSToolbar):
    @property
    def media(self):
        if self.toolbar.edit_mode_active and self.inline_editing:
            return forms.Media(
                css={'screen': ('djangocms_text_ckeditor/css/cms.inline-ckeditor.css',)},
                js=(PATH_TO_JS,),
            )
        return forms.Media()

    @property
    def inline_editing(self):
        inline_editing = getattr(self.request.session, "inline_editing", True)
        change = self.request.GET.get("inline_editing", None)
        if change is not None:
            inline_editing = change == "1"
            self.request.session["inline_editing"] = inline_editing
        return inline_editing

    def populate(self):
        if self.toolbar.edit_mode_active:
            admin_menu = self.toolbar.get_menu(ADMIN_MENU_IDENTIFIER)
            admin_menu.add_break(position=-2)
            admin_menu.add_link_item(
                name=_("Inline editing (on)") if self.inline_editing else _("Inline editing (off)"),
                url=self.get_full_path_with_param("inline_editing", int(not self.inline_editing)),
                active=self.inline_editing,
                position=-2,
            )
            if self.inline_editing:
                self.toolbar.add_item(InlineEditingItem(), position=None)

    def get_full_path_with_param(self, key, value):
        url = urlparse(self.request.get_full_path())
        query_dict = QueryDict(url.query).copy()
        query_dict[key] = value
        url = url._replace(query=query_dict.urlencode())
        return urlunparse(url)


if settings.TEXT_INLINE_EDITING:
    toolbar_pool.register(InlineEditingToolbar)
