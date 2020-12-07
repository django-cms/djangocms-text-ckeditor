import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import {classic_config, migrating_options} from './settings.ckeditor';

document.addEventListener('DOMContentLoaded', () => {
	window.CKEDITOR_BASEPATH = document.querySelector('[data-ckeditor-basepath]').getAttribute('data-ckeditor-basepath');

	/**
     * CMS.CKEditor
     *
     * @description: Adds cms specific plugins to CKEditor
     */
	CMS.CKEditor = {

		options: migrating_options,

		init(container, options, settings) {
			this.container = document.getElementById(container);
			this.container.setAttribute('ckeditor-initialized', true);
			this.options = Object.assign({}, {
				settings,
				initialData: ''
			}, this.options, options);

			this.editor = this.container ? ClassicEditor.create(document.getElementById(container), classic_config).catch(error => {
				console.error(error);
			}) : null;
		},

		_initAll() {
			const dynamics = [];

			window._cmsCKEditors.forEach(editorConfig => {
				const selector = editorConfig[0];

				if (selector.match(/__prefix__/)) {
					dynamics.push(editorConfig);
				} else {
					CMS.CKEditor.init(editorConfig[0], editorConfig[1], editorConfig[2]);
				}
			});
		}
	};

	setTimeout(function init() {
		CMS.CKEditor._initAll();
	}, 0);
});
