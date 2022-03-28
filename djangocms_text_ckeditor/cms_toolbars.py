from django import forms

from cms.cms_toolbars import CMSToolbar
from cms.toolbar_pool import toolbar_pool

from .widgets import PATH_TO_JS


@toolbar_pool.register
class InlineEditingToolbar(CMSToolbar):
    @property
    def media(self):
        if self.toolbar.edit_mode_active:
            return forms.Media(
                js=(PATH_TO_JS,)
            )
        return forms.Media()
