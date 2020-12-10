import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Demo from './lib/demo/plugin';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Demo
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		 items: [
			  'demo'
		 ]
	},
	demoConfig: {
		types: [ 'Blog Title', 'Author', 'Editor', 'Date']
  },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default Editor;

// TODO MIG
export const migrating_options = {
	initialData: '',
	plugins: [
		EssentialsPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		BlockQuotePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImageCaptionPlugin,
		ImageStylePlugin,
		ImageToolbarPlugin,
		EasyImagePlugin,
		ImageUploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		UploadAdapterPlugin
	],

	// So is the rest of the default configuration.
	toolbar: [
		'heading',
		'bold',
		'italic',
		'link',
		'bulletedList',
		'numberedList',
		'imageUpload',
		'blockQuote',
		'undo',
		'redo'
	],
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	}
};
