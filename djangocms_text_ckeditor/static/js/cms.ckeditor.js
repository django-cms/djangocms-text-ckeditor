/*##################################################|*/
/* #CMS.CKEDITOR# */
jQuery(document).ready(function ($) {
	/*!
	 * CKEditor
	 * @version: 1.0.0
	 * @description: Adds cms specific plugins to CKEditor
	 */
	CMS.CKEditor = {

		options: {
			// ckeditor default settings, will be overwritten by CKEDITOR_SETTINGS
			'language': 'en',
			'skin': 'moono',
			'toolbar': 'CMS',
			'toolbar_CMS': [
				['Undo', 'Redo'],
				['cmsplugins', '-', 'ShowBlocks'],
				['Format', 'Font', 'FontSize'],
				['TextColor', 'BGColor', '-', 'PasteFromWord'],
				['Maximize', ''],
				'/',
				['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
				['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
				['Link', 'Unlink'],
				['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Table'],
				['Source']
			],
			// cms default settings, will be overwritten by CKEDITOR_SETTINGS
			'cmsLang': {
				'toolbar': 'CMS Plugins',
				'title': 'CMS Plugins',
				'aria': 'cms plugins'
			},
			'cmsPlugins': [
				{ group: 'Standard Plugins', items: [
					{ 'title': 'Picture', 'urls': { 'edit': '/admin/cms/page/1/edit-plugin/140/edit-plugin/169/?_popup=1' } },
					{ 'title': 'File', 'urls': { 'edit': '/admin/cms/page/1/edit-plugin/140/edit-plugin/169/?_popup=1' } },
					{ 'title': 'Video', 'urls': { 'edit': '/admin/cms/page/1/edit-plugin/140/edit-plugin/169/?_popup=1' } },
					{ 'title': 'Link', 'urls': { 'edit': '/admin/cms/page/1/edit-plugin/140/edit-plugin/169/?_popup=1' } },
					{ 'title': 'Snippet', 'urls': { 'edit': '/admin/cms/page/1/edit-plugin/140/edit-plugin/169/?_popup=1' } }
				]}
			],
			'cmsStaticUrl': '/static/',
			// this part should not be altered
			'toolbarCanCollapse': false,
			'extraPlugins': 'cmsplugins'
		},

		init: function (container, options) {
			this.container = $(container);
			this.options = $.extend(true, {}, this.options, options);

			// add additional plugins (autoloads plugins.js)
			CKEDITOR.plugins.addExternal('cmsplugins', this.options.cmsStaticUrl + 'ckeditor_plugins/cmsplugins/');

			// render cckeditor
			CKEDITOR.replace(container, this.options);

			// add additional styling
			CKEDITOR.on('instanceReady', $.proxy(CMS.CKEditor, 'setup'));
		},

		// setup is called after ckeditor has been initialized
		setup: function () {
			// add css tweks to the editor
			this.styles();
		},

		styles: function () {
			// add styling to source and fullscreen view
			$('.cke_button__maximize, .cke_button__source').parent()
				.css('margin-right', 0).parent()
				.css('float', 'right');
		}

	};
});