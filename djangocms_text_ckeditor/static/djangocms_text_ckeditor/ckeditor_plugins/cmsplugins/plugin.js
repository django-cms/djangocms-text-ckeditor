(function($) {
// CMS.$ will be passed for $
$(document).ready(function () {

	CKEDITOR.plugins.add('cmsplugins', {

		// Register the icons. They must match command names.
		icons: 'cmsplugins',

		// The plugin initialization logic goes inside this method.
		init: function(editor) {
			var that = this;

			this.options = CMS.CKEditor.options.settings;
			this.editor = editor;

			// don't do anything if there are no plugins defined
			if(this.options === undefined || this.options.plugins === undefined) return false;

			this.setupDialog();

			// add the button
			this.editor.ui.add('cmsplugins', CKEDITOR.UI_PANELBUTTON, {
				'toolbar': 'cms,0',
				'label': this.options.lang.toolbar,
				'title': this.options.lang.toolbar,
				'className' : 'cke_panelbutton__cmsplugins',
				'modes': { wysiwyg:1 },
				'editorFocus': 1,

				'panel': {
					'css': [CKEDITOR.skin.getPath('editor')].concat(that.editor.config.contentsCss),
					'attributes': { role: 'cmsplugins', 'aria-label': this.options.lang.aria }
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
						var selection = that.editor.getSelection();
						var element = selection.getSelectedElement() || selection.getCommonAncestor().getAscendant('a', true);
						that.editPlugin(element);
					}
				});
			}

			// hande event via doubleclick
			// handle edit event on double click
			this.editor.on('doubleclick', function(event) {
				var selection = that.editor.getSelection();
				var element = selection.getSelectedElement() || selection.getCommonAncestor().getAscendant('a', true);
				if(element && element.getAttribute('id').indexOf('plugin_obj_') === 0 && !element.isReadOnly()) {
					event.data.dialog = '';
					that.editPlugin(element);
				}
			});

			// setup CKEDITOR.htmlDataProcessor
			this.setupDataProcessor();
		},

		setupDialog: function () {
			var that = this;
			var definition = function () { return {
				'title': '',
				'minWidth': 600,
				'minHeight': 200,
				'contents': [{
					'elements': [{ type: 'html', html: '<iframe style="position:absolute; left:0; top:0; width:100%; height:100%; border:none;" />' }]
				}],
				'onOk': function () {
					var iframe = $(CKEDITOR.dialog.getCurrent().parts.contents.$).find('iframe').contents();
						iframe.find('form').submit();

					// catch the reload event and reattach
					var reload = CMS.API.Helpers.reloadBrowser;

					CMS.API.Helpers.reloadBrowser = function() {
						CKEDITOR.dialog.getCurrent().hide();

						that.insertPlugin(CMS.API.Helpers.dataBridge);

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
			$.each(this.options.plugins, function (i, group) {
				// add template
				tpl += '<h1 class="cke_panel_grouptitle">' + group.group + '</h1>';
				tpl += '<ul role="presentation" class="cke_panel_list">';
				// loop through the plugins
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
				label: this.options.lang.edit,
				icon: this.path + 'icons/cmsplugins.png',
				command: 'cmspluginsEdit',
				group: 'cmspluginsGroup'
			});

			this.editor.removeMenuItem('image');

			this.editor.contextMenu.addListener(function(element) {
				if (element.$.id.indexOf('plugin_obj_') === 0) {
					return { cmspluginsItem: CKEDITOR.TRISTATE_OFF };
				}
			});
		},

		editPlugin: function (element) {
			var id = element.getAttribute('id').replace('plugin_obj_', '');
			this.editor.openDialog('cmspluginsDialog');

			// now tweak in dynamic stuff
			var dialog = CKEDITOR.dialog.getCurrent();
			$(dialog.parts.title.$).text(this.options.lang.edit);
			$(dialog.parts.contents.$).find('iframe').attr('src', '../' + id + '/?_popup=1&no_preview')
				.bind('load', function () {
					$(this).contents().find('.submit-row').hide().end()
						.find('#container').css('min-width', 0).css('padding', 0);
				});
		},

		addPlugin: function (item, panel) {
			var that = this;

			// hide the panel
			panel.hide();

			// lets figure out how to write something to the editor
			this.editor.focus();
			this.editor.fire('saveSnapshot');

			// gather data
			var data = {
				'placeholder_id': this.options.placeholder_id,
				'plugin_type': item.attr('rel'),
				'parent_id': this.options.plugin_id,
				'plugin_language':  this.options.plugin_language
			};

			// lets do some ajax
			$.ajax({
				'type': 'POST',
				'url': this.options.add_plugin_url,
				'data': data,
				'success': function (data) {
					// cancel if error is returned
					if(data === 'error') return false;

					// trigger dialog
					that.addPluginDialog(item, data);
				},
				'error': function (error) {
					alert('There was an error creating the plugin.');
				}
			});
		},

		addPluginDialog: function (item, data) {
			// open the dialog
			var selected_text = this.editor.getSelection().getSelectedText();
			this.editor.openDialog('cmspluginsDialog');

			// now tweak in dynamic stuff
			var dialog = CKEDITOR.dialog.getCurrent();
			$(dialog.parts.title.$).text(this.options.lang.add);
			$(dialog.parts.contents.$).find('iframe').attr('src', data.url)
				.bind('load', function () {
					$(this).contents().find('.submit-row').hide().end()
					.find('#container').css('min-width', 0).css('padding', 0)
					.find('#id_name').val(selected_text);
				});
		},

		// on ajax receivement from server, build <a> or <img> tag dependig in the plugin type
		insertPlugin: function (data) {
			var element, attrs = { id: 'plugin_obj_' + data.plugin_id };
			if (data.plugin_type === 'Link') {
				element = new CKEDITOR.dom.element('a', this.editor.document);
				$.extend(attrs, {
					'href': '#',
					'data-cmsplugin_title': data.plugin_desc,
					'data-cmsplugin_alt': data.plugin_type,
					'data-cmsplugin_src': data.plugin_icon
				});
				element.setText(data.plugin_name);
			} else {
				element = new CKEDITOR.dom.element('img', this.editor.document);
				$.extend(attrs, {
					'title': data.plugin_desc,
					'alt': data.plugin_type,
					'src': data.plugin_icon
				});
			}
			element.setAttributes(attrs);
			this.editor.insertElement(element);
		},

		setupDataProcessor: function () {
			var link_pattern = /^Link\s-\s(.+)$/;

			this.editor.dataProcessor.dataFilter.addRules({
				elements: {
					// on load from server replace <img> tag by <a> in order to display a real link
					img: function(element) {
						var new_element, matches;
						if (element.attributes.id && element.attributes.alt
						  && element.attributes.alt === 'Link'
						  && element.attributes.id.indexOf('plugin_obj_') === 0) {
							matches = link_pattern.exec(element.attributes.title);
							new_element = new CKEDITOR.htmlParser.element('a', {
								'href': '#',
								'id': element.attributes.id,
								'data-cmsplugin_title': element.attributes.title,
								'data-cmsplugin_src': element.attributes.src,
								'data-cmsplugin_alt': element.attributes.alt
							});
							if (matches) {
								new_element.add(new CKEDITOR.htmlParser.text(matches[1]));
							}
							return new_element;
						}
					}
				}
			});

			this.editor.dataProcessor.htmlFilter.addRules({
				elements: {
					// on post to server replace <a> tag by <img> in order keep plugin format consistent
					a: function(element) {
						var new_element;
						if (element.attributes.id && element.attributes.id.indexOf('plugin_obj_') === 0) {
							new_element = new CKEDITOR.htmlParser.element('img', {
								id: element.attributes.id,
								src: element.attributes['data-cmsplugin_src'],
								title: element.attributes['data-cmsplugin_title'],
								alt: element.attributes['data-cmsplugin_alt']
							});
							return new_element;
						}
					}
				}
			});
		}

	});

});
})(CMS.$);
