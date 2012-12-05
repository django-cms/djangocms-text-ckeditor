jQuery(document).ready(function ($) {
	CKEDITOR.plugins.add('cmsplugins', {

		// Register the icons. They must match command names.
		icons: 'cmsplugins',

		// The plugin initialization logic goes inside this method.
		init: function(editor) {

			this.lang = CMS.CKEditor.options.cmsLang;
			this.plugins = CMS.CKEditor.options.cmsPlugins;

			// add the button
			editor.ui.add('cmsplugins', CKEDITOR.UI_PANELBUTTON, {
				'toolbar': 'cms,0',
				'label': this.lang.toolbar,
				'title': this.lang.title,
				'className' : 'cke_panelbutton__cmsplugins',
				'modes': { wysiwyg:1 },
				'editorFocus': 1,

				'panel': {
					'css': [ CKEDITOR.skin.getPath( 'editor' ) ].concat( editor.config.contentsCss ),
					'attributes': { role: 'cmsplugins', 'aria-label': this.lang.title }
				},

				'onClick': function (value) {
					console.log('onClick');
				},

				'onBlock': function (panel, block) {
					console.log('onBlock');
					block.element.setHtml(editor.plugins.cmsplugins.renderPlugins());
				},

				'onOpen': function () {
					console.log('onOpen');
					var selection = editor.getSelection();

					//console.log(selection[0]);
				}
			});
		},

		renderPlugins: function () {
			var tpl = '<div class="cke_panel_block">';

			// loop through the groups
			$.each(this.plugins, function (i, group) {
				// add template
				tpl += '<h1 class="cke_panel_grouptitle">' + group.group + '</h1>'
				tpl += '<ul role="presentation" class="cke_panel_list">';
				// loop through the plugins
				$.each(group.items, function (ii, item) {
					tpl += '<li class="cke_panel_listItem"><a href="' + item.urls.edit + '" title="Normal">' + item.title + '</a></li>';
				});
				tpl += '</ul>';
			});

			tpl += '</div>';

			return tpl;
		}
	});
});