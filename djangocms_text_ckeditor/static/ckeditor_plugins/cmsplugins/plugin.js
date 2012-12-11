jQuery(document).ready(function ($) {
	CKEDITOR.plugins.add('cmsplugins', {

		// Register the icons. They must match command names.
		icons: 'cmsplugins',

		// The plugin initialization logic goes inside this method.
		init: function(editor) {
			var that = this;

			this.lang = CMS.CKEditor.options.cmsLang;
			this.plugins = CMS.CKEditor.options.cmsPlugins;
			this.editor = editor;

			// add the button
			this.editor.ui.add('cmsplugins', CKEDITOR.UI_PANELBUTTON, {
				'toolbar': 'cms,0',
				'label': this.lang.toolbar,
				'title': this.lang.title,
				'className' : 'cke_panelbutton__cmsplugins',
				'modes': { wysiwyg:1 },
				'editorFocus': 1,

				'panel': {
					'css': [ CKEDITOR.skin.getPath( 'editor' ) ].concat(that.editor.config.contentsCss ),
					'attributes': { role: 'cmsplugins', 'aria-label': this.lang.title }
				},

				// this is called when creating the dropdown list
				'onBlock': function (panel, block) {
					block.element.setHtml(that.editor.plugins.cmsplugins.renderPlugins());

					var anchors = $(block.element.$).find('.cke_panel_listItem a');
						anchors.bind('click', function (e) {
							e.preventDefault();

							that.openPlugin($(this), panel);
						});
				},

				'onOpen': function () {}
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
		},

		scanPlugins: function () {},

		openPlugin: function (item, panel) {
			var that = this;

			// hide the panel
			panel.hide();

			// lets figure out how to write something to the editor
			this.editor.focus();
			this.editor.fire('saveSnapshot');

			// setup dialog
			// TODO settings not applied correctly
			CKEDITOR.dialog.add('cmsplugins', function(editor) {
				return {
					'title': item.attr('text'),
					'minWidth': 500,
					'minHeight': 250,
					'contents':[{
						'id': 'general',
						'label': 'iframe',
						'elements': [{ type: 'html', html: '<iframe src="' + item.attr('href') + '" style="position:absolute; left:0; top:0; width:100%; height:100%;" frameborder="0" />' }]
					}],
					'onOk': function () {
						that.insertPlugin(1337, item.attr('text'), false);
					}
				};
			});
			//open dialog
			this.editor.openDialog('cmsplugins');
		},

		insertPlugin: function (id, type, wrap) {
			var element = new CKEDITOR.dom.element('span', this.editor.document);
				element.setAttributes({
					'contentEditable': 'false',
					'data-cke-cms-placeholder': 1,
					'class': 'cke_cms_placeholder',
					'style': 'font-size:12px; line-height:12px; font-family:"Courier New", courir, monospace; color:#fff; margin:0 1px; position:relative; top:-2px; background:#4ea8ee;'
				});
				element.appendHtml('[' + type + ' /]');

			this.editor.insertElement(element);
		}

	});
});