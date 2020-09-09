======================================
Upgrade to a newer version of CKEditor
======================================

Simple upgrade
--------------

Download the latest minified version of ckeditor, bundled with all
configured CKEditor-4 plugins. The correct URL can be found in
``djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor/build-config.js``
under (3).

Unzip that file and replace
``djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor`` with
it.

Rebundle everything running ``gulp build``.

Full upgrade
------------

This requires to access the sources of CKEditor. Clone the repository
and build CKEditor:

.. code:: bash

    git clone https://github.com/ckeditor/ckeditor4.git
    cd ckeditor4
    ./dev/builder/build.sh --leave-js-unminified

This creates an unminified release of CKEditor, which is useful for
debugging. In a production environment, remove the option
``--leave-js-unminified``.

**djangocms-text-ckeditor** reuses two plugins from CKEditor-4, which
are patched to work inside **django-CMS**. These plugins are found at
``djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor_plugins/cmsdialog/plugin.js``
and
``djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor_plugins/cmsresize/plugin.js``.
These plugins have been derived from
``ckeditor4/plugins/plugins/dialog/plugin.js`` and
``ckeditor4/plugins/plugins/resize/plugin.js`` respectively.

The current version of djangocms-text-ckeditor is based on the version
4.14.0 of CKEditor4. If these two plugins have to be ported to a later
version, first make a ``diff -u ...`` against version 4.14.0, then copy
these plugins into the current folders, ``cmsdialog`` and ``cmsresize``.
Then switch back to the latest version of CKEditor-4 and apply the
patches previously created.

Replace the folder
``djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor`` with
that from ``ckeditor4/dev/builder/release/ckeditor``.

Rebundle everything running ``gulp build``.

``.editorconfig``
~~~~~~~~~~~~~~~~~

Please don't convert tabs to spaces in the plugins patched from
CKEditor-4. They use tabs for indentation and if they are converted, it
makes file diffs much harder. That's the reason, why this folder
contains its own ``.editorconfig``.
