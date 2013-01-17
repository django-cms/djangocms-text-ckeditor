jQuery(document).ready(function ($) {
	CKEDITOR.plugins.add('cmsplugins', {

		// Register the icons. They must match command names.
		icons: 'cmsplugins',

		// The plugin initialization logic goes inside this method.
		init: function(editor) {
			var that = this;

			this.lang = CMS.CKEditor.options.cmsLang;
			this.plugins = CMS.CKEditor.options.cmsPlugins;
			this.page_id = CMS.CKEditor.options.cmsPage;
			this.editor = editor;

			// don't do anything if there are no plugins defined
			if (this.plugins.length === 0) return;

			this.setupDialog();

			// add the button
			this.editor.ui.add('cmsplugins', CKEDITOR.UI_PANELBUTTON, {
				'toolbar': 'cms,0',
				'label': this.lang.toolbar,
				'title': this.lang.toolbar,
				'className' : 'cke_panelbutton__cmsplugins',
				'modes': { wysiwyg:1 },
				'editorFocus': 1,

				'panel': {
					'css': [CKEDITOR.skin.getPath('editor')].concat(that.editor.config.contentsCss),
					'attributes': { role: 'cmsplugins', 'aria-label': this.lang.aria }
				},

				// this is called when creating the dropdown list
				'onBlock': function (panel, block) {
					block.element.setHtml(that.editor.plugins.cmsplugins.setupDropdown());

					var anchors = $(block.element.$).find('.cke_panel_listItem a');
						anchors.bind('click', function (e) {
							e.preventDefault();

							that.addPlugin($(this), panel);
						});
				}
			});

			// handle edit event via context menu
			if(this.editor.contextMenu) {
				this.setupContextMenu();
				this.editor.addCommand('cmspluginsEdit', {
					exec: function () {
						that.editPlugin(that.editor.getSelection().getSelectedElement());
					}
				});
			}

			// hande event via doubleclick
			// handle edit event on double click
			this.editor.on('doubleclick', function(event) {
				var element = that.editor.getSelection().getSelectedElement();

				if(element && $(element.$).attr('id').split('_')[0] === 'plugin' && !element.isReadOnly()) {
					event.data.dialog = '';
					that.editPlugin(element);
				}
			});
		},

		setupDialog: function () {
			var that = this;
			var definition = function () { return {
				'title': '',
				'minWidth': 600,
				'minHeight': 250,
				'contents': [{
					'elements': [{ type: 'html', html: '<iframe style="position:absolute; left:0; top:0; width:100%; height:100%; border:none;" />' }]
				}],
				'onOk': function () {
					var iframe = $(CKEDITOR.dialog.getCurrent().parts.contents.$).find('iframe').contents();
						iframe.find('form').submit();

					// catch the reload event and reattach
					var reload = CMS.API.Helpers.reloadBrowser;
					CMS.API.Helpers.reloadBrowser = function(id, icon, alt) {
						CKEDITOR.dialog.getCurrent().hide();
						that.insertPlugin({
							'id': id,
							'icon': icon,
							'alt': alt
						});

						CMS.API.Helpers.reloadBrowser = reload;
						return false;
					};
					return false;
				}
			}};

			// set default definition and open dialog
			CKEDITOR.dialog.add('cmspluginsDialog', definition);
		},

		setupDropdown: function () {
			var tpl = '<div class="cke_panel_block">';

			// loop through the groups
			$.each(this.plugins, function (i, group) {
				// add template
				tpl += '<h1 class="cke_panel_grouptitle">' + group.group + '</h1>';
				tpl += '<ul role="presentation" class="cke_panel_list">';
				// loop through the plugins
				// TODO the url is static, will change for 3.0
				$.each(group.items, function (ii, item) {
					tpl += '<li class="cke_panel_listItem"><a href="#" rel="' + item.type + '">' + item.title + '</a></li>';
				});
				tpl += '</ul>';
			});

			tpl += '</div>';

			return tpl;
		},

		setupContextMenu: function () {
			this.editor.addMenuGroup('cmspluginsGroup');
			this.editor.addMenuItem('cmspluginsItem', {
				label: this.lang.edit,
				icon: '../ckeditor_plugins/cmsplugins/icons/cmsplugins.png',
				command: 'cmspluginsEdit',
				group: 'cmspluginsGroup'
			});

			this.editor.removeMenuItem('image');

			this.editor.contextMenu.addListener(function(element) {
				if($(element.$).attr('id').split('_')[0] === 'plugin') {
					return { cmspluginsItem: CKEDITOR.TRISTATE_OFF };
				}
			});
		},

		editPlugin: function (el) {
			var id = el.getAttribute('id').replace('plugin_obj_', '');

			this.editor.openDialog('cmspluginsDialog');

			// now tweak in dynamic stuff
			var dialog = CKEDITOR.dialog.getCurrent();
			$(dialog.parts.title.$).text(this.lang.edit);
			$(dialog.parts.contents.$).find('iframe').attr('src', '../' + id + '/?_popup=1&no_preview')
				.bind('load', function () {
					$(this).contents().find('.plugin-submit-row').hide().end()
						.find('#container').css('min-width', 0);
				});
				dialog.data = { 'id': el.getAttribute('id') };
		},

		addPlugin: function (item, panel) {
			var that = this;

			// hide the panel
			panel.hide();

			// lets figure out how to write something to the editor
			this.editor.focus();
			this.editor.fire('saveSnapshot');

			// lets do some ajax
			$.ajax({
				'type': 'POST',
				'url': 'add-plugin/',
				'data': {
					parent_id: that.page_id,
					plugin_type: item.attr('rel')
				},
				'success': function (plugin_id) {
					if(plugin_id === 'error') return false;

					that.addPluginDialog(item, plugin_id);
				},
				'error': function () {
					alert('There was an error creating the plugin.');
				}
			});
		},

		addPluginDialog: function (item, id) {
			// open the dialog
			this.editor.openDialog('cmspluginsDialog');

			// now tweak in dynamic stuff
			var dialog = CKEDITOR.dialog.getCurrent();
				$(dialog.parts.title.$).text(this.lang.add);
				$(dialog.parts.contents.$).find('iframe').attr('src', '../' + id + '/?_popup=1')
					.bind('load', function () {
						$(this).contents().find('.plugin-submit-row').hide().end()
							.find('#container').css('min-width', 0);
					});
				// set new data
				dialog.data = { 'id': id };
		},

		insertPlugin: function (data) {
			var element = new CKEDITOR.dom.element('img', this.editor.document);
				element.setAttributes({
					'id': 'plugin_obj_' + data.id,
					'src': data.icon,
					'alt': data.alt,
					'title': data.alt
				});

			this.editor.insertElement(element);
		}

	});
});