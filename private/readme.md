Patching ckeditor4's standard skin
==================================

This directory includes ckeditor4's standard skin ``moono-lisa`` and a patch
script that replaces hard-coded color values in the skin's css with variables used
by django CMS and available through
``static/djangocms-text-ckeditor/ckeditor/contents.css``.

To recreate the production skin in
``static/djangocms-text-ckeditor/ckeditor/skins/moono-lisa``
type ``python3 patch_moono_lisa.py``.
