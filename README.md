

# Create DLL Build and/or Bundle

1. ```npm run inst``` - install all required packages
2. ```npm run build:dev```- bundle the **user plugins** from `/static/djangocms_text_ckeditor/packages` (those that are `imported` in `/static/djangocms_text_ckeditor/cms.ckeditor.js`), with the **ckeditor5-dll** build.

The new bundled ckeditor+basic+user plugins `/static/djangocms_text_ckeditor/cms.ckeditor.js` is used in `widgets.py`.

Currently, all user plugin related options are part of `/static/djangocms_text_ckeditor/cms.ckeditor.js`.



NOTE: re-build the ckeditor5 with ```npm run build:dll``` - as stand alone, i.e. inside ```@ckeditor```