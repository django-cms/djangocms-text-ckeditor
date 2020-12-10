const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },
	// Final Step
	entry: './djangocms_text_ckeditor/static/djangocms_text_ckeditor/cms.ckeditor.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '../djangocms_text_ckeditor/static/djangocms_text_ckeditor/dist/bundle.js'
  },		

  // First Step
	// entry: './djangocms_text_ckeditor/static/djangocms_text_ckeditor/settings.ckeditor.js',

	// output: {
	// 	// The name under which the editor will be exported.
	// 	library: 'DemoEditor',
	// 	path: path.resolve(__dirname, 'djangocms_text_ckeditor/static/djangocms_text_ckeditor/build'),
	// 	filename: 'ckeditor.js',
	// 	libraryTarget: 'umd',
	// 	libraryExport: 'default'
	// },

	plugins: [
		new CKEditorWebpackPlugin( {
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'en',
			additionalLanguages: 'all'
		} ),
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: styles.getPostCssConfig( {
								themeImporter: {
									themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
								},
								minify: true
							} )
						}
					},
				]
			}
		]
	}
};
