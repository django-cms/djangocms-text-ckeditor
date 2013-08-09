/*##################################################|*/
/* #CMS.CKEDITOR# */
(function($) {
// CMS.$ will be passed for $
$(document).ready(function () {
	/*!
	 * CNS.CKEditor
	 * @version: 1.1.0
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
				['Format', 'Styles'],
				['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
				['Maximize', ''],
				'/',
				['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
				['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
				['Link', 'Unlink'],
				['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Table'],
				['Source']
			],
			'allowedContent': true,
			'toolbarCanCollapse': false,
			'extraPlugins': 'cmsplugins'
		},

		init: function (container, options, settings) {
			this.container = $(container);

			// add additional settings to options
			this.options = $.extend(true, {
				'settings': settings
			}, this.options, options);

			// add additional plugins (autoloads plugins.js)
			CKEDITOR.plugins.addExternal('cmsplugins', settings.static_url + 'ckeditor_plugins/cmsplugins/');

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
})(CMS.$);