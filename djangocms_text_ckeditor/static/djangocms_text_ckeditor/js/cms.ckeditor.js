/*##################################################|*/
/* #CMS.CKEDITOR# */
(function($) {
// CMS.$ will be passed for $
$(document).ready(function () {
	/**
	 * CMS.CKEditor
	 *
	 * @description: Adds cms specific plugins to CKEditor
	 */
	CMS.CKEditor = {

		options: {
			// ckeditor default settings, will be overwritten by CKEDITOR_SETTINGS
			'language': 'en',
			'skin': 'moono',
			'toolbar_CMS': [
				['Undo', 'Redo'],
				['cmsplugins', '-', 'ShowBlocks'],
				['Format', 'Styles'],
				['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
				['Maximize', ''],
				'/',
				['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
				['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
				['HorizontalRule'],
				['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Table'],
				['Source']
			],
			'toolbar_HTMLField': [
				['Undo', 'Redo'],
				['ShowBlocks'],
				['Format', 'Styles'],
				['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
				['Maximize', ''],
				'/',
				['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
				['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
				['HorizontalRule'],
				['Link', 'Unlink'],
				['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Table'],
				['Source']
			],

			'allowedContent': true,
			'toolbarCanCollapse': false,
			'removePlugins': 'resize',
			'extraPlugins': 'cmsplugins,cmsresize,cmsdialog'
		},

		init: function (container, options, settings) {
			if ($('#' + container).length > 0) {
				this.container = $('#' + container);
				// add additional settings to options
				this.options.toolbar = settings.toolbar;
				this.options = $.extend(false, {
					'settings': settings
				}, this.options, options);

				// add additional plugins (autoloads plugins.js)
				CKEDITOR.plugins.addExternal('cmsplugins', settings.static_url + '/ckeditor_plugins/cmsplugins/');
				CKEDITOR.plugins.addExternal('cmsresize', settings.static_url + '/ckeditor_plugins/cmsresize/');
				CKEDITOR.plugins.addExternal('cmsdialog', settings.static_url + '/ckeditor_plugins/cmsdialog/');

				// render ckeditor
				this.editor = CKEDITOR.replace(container, this.options);

				// add additional styling
				CKEDITOR.on('instanceReady', $.proxy(CMS.CKEditor, 'setup'));
				// uncomment to enable maximize on iOS, see
				// https://github.com/ckeditor/ckeditor-dev/blob/3b32b2564d545c42a718bb43a9d3de9bd31ec0a0/plugins/maximize/plugin.js#L126
				// currently disabled because add plugins panel is unusable with it on iPads
				// CKEDITOR.env.iOS = false;
			}
		},

		// setup is called after ckeditor has been initialized
		setup: function () {
			// auto maximize modal if alone in a modal
			var that = this;
			var win = window.parent || window;
			if (this._isAloneInModal()) {
				// 70px is hardcoded to make it more performant. 20px + 20px - paddings, 30px label height
				that.editor.resize('100%', win.CMS.$('.cms-modal-frame').height() - 70);
				this.editor.execCommand('maximize');
				win.CMS.API.Helpers.addEventListener('modal-maximized modal-restored', function (e, payload) {
					that.editor.resize('100%', win.CMS.$('.cms-modal-frame').height() - 70);
				});
			}

			// add css tweks to the editor
			this.styles();
			this._resizing();
		},

		styles: function () {
			// add styling to source and fullscreen view
			$('.cke_button__maximize, .cke_button__source').parent()
				.css('margin-right', 0).parent()
				.css('float', 'right');
		},

		_resizing: function () {
			$(document).on('pointerdown', '.cms-ckeditor-resizer', function (e) {
				e.preventDefault();
				var event = CMS.$.Event('mousedown');
				$.extend(event, {
					screenX: e.originalEvent.screenX,
					screenY: e.originalEvent.screenY
				});
				$(this).trigger(event);
			});
		},

		_isAloneInModal: function () {
			// return true if the ckeditor is alone in a modal popup
			return this.container.parents('body.app-djangocms_text_ckeditor.model-text').length > 0 // Django >= 1.7
				|| this.container.parents('body.djangocms_text_ckeditor-text').length > 0; // Django < 1.7
		}

	};

});
})(CMS.$);
