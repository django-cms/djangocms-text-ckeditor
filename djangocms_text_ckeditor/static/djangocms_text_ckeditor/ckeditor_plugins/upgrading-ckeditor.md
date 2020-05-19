# Upgrade to a newer version of CKEditor

## Simple upgrade

## Full upgrade

This requires to access the sources of CKEditor. Clone the repository
and build CKEditor:

```bash
git clone https://github.com/ckeditor/ckeditor4.git
cd ckeditor4
./dev/builder/build.sh --leave-js-unminified
```

This creates an unminified release of CKEditor, which is useful for debugging.
In a production environment, remove the option `--leave-js-unminified`.

**djangocms-text-ckeditor** reuses two plugins from CKEditor-4, which are
patched to work inside **django-CMS**. These plugins are found at
`cmsdialog/plugin.js` and `cmsresize/plugin.js`. These plugins have been derived
from `ckeditor4/plugins/plugins/dialog/plugin.js` and
`ckeditor4/plugins/plugins/resize/plugin.js` respectively, currently from
version 4.14.0 of CKEditor4. If these two plugins have to be ported to a later
version, first make a `diff -u ...` against the old version, then copy these
plugins into the current folders, `cmsdialog` and `cmsresize`. There apply the
patch previously created.

Replace the folder `ckeditor` with that from
`ckeditor4/dev/builder/release/ckeditor`. Afterwards rebundle everything running
`gulp build` from `djangocms-text-ckeditor`. 
