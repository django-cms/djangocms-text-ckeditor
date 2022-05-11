(function ($, CMS) {
    'use strict';
    window.CKEDITOR_BASEPATH = $('[data-ckeditor-basepath]').attr('data-ckeditor-basepath');

    // CMS.$ will be passed for $
    /**
     * CMS.CKEditor
     *
     * @description: Adds cms specific plugins to CKEditor
     */
    CMS.CKEditor = {

        options: {
            // ckeditor default settings, will be overwritten by CKEDITOR_SETTINGS
            language: 'en',
            skin: 'moono-lisa',
            toolbar_CMS: [
                ['Undo', 'Redo'],
                ['cmsplugins', 'cmswidget', '-', 'ShowBlocks'],
                ['Format', 'Styles'],
                ['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
                ['Scayt'],
                ['Maximize', ''],
                '/',
                ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
                ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                ['HorizontalRule'],
                ['NumberedList', 'BulletedList'],
                ['Outdent', 'Indent', '-', 'Blockquote', '-', 'Link', 'Unlink', '-', 'Table'],
                ['Source']
            ],
            toolbar_HTMLField: [
                ['Undo', 'Redo'],
                ['ShowBlocks'],
                ['Format', 'Styles'],
                ['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
                ['Scayt'],
                ['Maximize', ''],
                '/',
                ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
                ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                ['HorizontalRule'],
                ['Link', 'Unlink'],
                ['NumberedList', 'BulletedList'],
                ['Outdent', 'Indent', '-', 'Blockqote', '-', 'Link', 'Unlink', '-', 'Table'],
                ['Source']
            ],

            allowedContent: true,
            toolbarCanCollapse: false,
            removePlugins: 'resize',
            extraPlugins: ''
        },

        static_url: '/static/djangocms-text-ckeditor',
        ckeditor_basepath: '/static/djangocms-text-ckeditor/ckeditor/',
        CSS: [],
        editors: {},


        init: function (container, mode, options, settings) {
            this.container = $(container);
            this.container.data('ckeditor-initialized', true);
            // add additional settings to options
            this.options.toolbar = settings.toolbar;
            this.options = $.extend(false, {
                settings: settings
            }, this.options, options);

            // add extra plugins that we absolutely must have
            this.options.extraPlugins = this.options.extraPlugins +=
                ',cmsplugins,cmswidget,cmsdialog,cmsresize,widget';

            document.createElement('cms-plugin');
            CKEDITOR.dtd['cms-plugin'] = CKEDITOR.dtd.div;
            CKEDITOR.dtd.$inline['cms-plugin'] = 1;
            // has to be here, otherwise extra <p> tags appear
            CKEDITOR.dtd.$nonEditable['cms-plugin'] = 1;
            CKEDITOR.dtd.$transparent['cms-plugin'] = 1;
            CKEDITOR.dtd.body['cms-plugin'] = 1;

            // add additional plugins (autoloads plugins.js)
            CKEDITOR.skin.addIcon('cmsplugins', settings.static_url +
                '/ckeditor_plugins/cmsplugins/icons/cmsplugins.svg');

            if (mode === 'admin') {
                // render ckeditor
                this.editor = CKEDITOR.replace(container, this.options);

                // add additional styling
                CKEDITOR.on('instanceReady', $.proxy(CMS.CKEditor, 'setupAdmin'));
            } else {
                this.editor = CKEDITOR.inline(container, this.options);
                CKEDITOR.on('instanceReady', settings.callback);
            }

            CMS.CKEditor.editors[this.editor.id] = {
                editor: this.editor,
                options: options,
                settings: settings,
                container: container,
                changed: false,
                child_changed: false
            };
        },

        initInlineEditors: function () {
            if (CMS._plugins === undefined) {
                // no plugins -> no inline editors
                return;
            }

            CMS.CKEditor.observer = CMS.CKEditor.observer || new IntersectionObserver(function (entries, opts) {
                entries.forEach(function (entry ){
                    if (entry.isIntersecting) {
                        var plugin_id = entry.target.dataset.plugin_id;
                        var url = entry.target.dataset.edit_url;

                        if (CMS.CKEditor.editors[plugin_id] === undefined) {
                            CMS.CKEditor.startInlineEditor(plugin_id, url);
                        }
                    }
                });
            }, {
                root: null,
                threshold: 0.5
            });

            CMS._plugins.forEach(function (plugin) {
                if (plugin[1].plugin_type === 'TextPlugin') {
                    var url = plugin[1].urls.edit_plugin;
                    var id = plugin[1].plugin_id;
                    var elements = $('.cms-plugin.cms-plugin-' + id);

                    if (elements.length > 0) {
                         var wrapper = elements
                            .wrapAll("<div class='cms-ckeditor-inline-wrapper' contenteditable='true'></div>")
                            .parent();
                        elements
                                .removeClass('cms-plugin')
                                .removeClass('cms-plugin-' + id);
                        wrapper.addClass('cms-plugin').addClass('cms-plugin-' + id);
                        wrapper.attr('data-edit_url', url);
                        wrapper.attr('data-plugin_id', id);
                        CMS.CKEditor.observer.observe(wrapper[0]);
                    }
                }
            });
        },

        startInlineEditor: function (plugin_id, url) {
             var options = {},
                settings = JSON.parse(document.getElementById('ck-cfg-' + plugin_id).textContent),
                wrapper = $('.cms-plugin.cms-plugin-' + plugin_id);

            if (wrapper[0].dataset.editor) {
                // Already contains editor
                return;
            }

            if (settings) {
                options = settings.options;
                delete settings.options;
            }
            settings.plugin_id = plugin_id;
            settings.callback = function (callback) {
                var editor = callback.editor;

                editor.element.removeAttribute('title');
                wrapper[0].dataset.editor = true;
                editor.on('change', function () {
                    CMS.CKEditor.editors[editor.id].changed = true;
                });
                wrapper.on('clickx', function (event) {
                    event.stopPropagation();
                });
                wrapper.on('dblclick', function (event) {
                    event.stopPropagation();
                });
                wrapper.on('pointerover', function (event) {
                    event.stopPropagation();
                });
                wrapper.on('blur', function () {
                    setTimeout(function () {
                        // avoid save when clicking on editor dialogs or toolbar
                        if (!document.activeElement.classList.contains('cke_panel_frame') &&
                            !document.activeElement.classList.contains('cke_dialog_ui_button')) {
                            CMS.CKEditor.save_data(editor.id);
                        }
                    }, 0);

                });
                wrapper.on('click', function () {
                    CMS.CKEditor._highlight_Textplugin(plugin_id);  // Highlight plugin in structure board
                });
                CMS.CKEditor.storeCSSlinks();  // store css that ckeditor loaded before save
            };
            settings.url = url;

            CMS.CKEditor.init(
                wrapper[0],
                'inline',
                options,
                settings
            );
        },

        save_data: function (editor_id, action) {
            var instance = CMS.CKEditor.editors[editor_id];

            if (instance && instance.changed) {
                CMS.CKEditor.storeCSSlinks();  // store css that ckeditor loaded before save
                var data = instance.editor.getData();

                instance.changed = false;
                CMS.API.Toolbar.showLoader();
                $.post(CMS.API.Helpers.updateUrlWithPath(instance.settings.url), {  // send changes
                    csrfmiddlewaretoken: CMS.config.csrf,
                    body: data,
                    _save: 'Save'
                }, function (response) {
                    CMS.API.Toolbar.hideLoader();
                    if (action !== undefined) {
                        action(instance, response);
                    }
                    if (instance.child_changed) {
                        var scripts = $(response).find('script:not([src])').addClass('cms-ckeditor-result');

                        CMS.CKEditor._destroyAll();
                        scripts.each(function (item, element) {
                            $('body').append(element);
                        });
                    } else {
                        CMS.CKEditor.loadToolbar();
                    }
                }).fail(function (error) {
                    instance.changed = true;
                    CMS.API.Messages.open({
                        message: error.message,
                        error: true
                    });
                });
            }
        },

        loadToolbar: function () {
            CMS.API.StructureBoard._loadToolbar()
                .done(function (newToolbar) {
                    CMS.API.Toolbar._refreshMarkup($(newToolbar).find('.cms-toolbar'));
                })
                .fail(CMS.API.Helpers.reloadBrowser);
        },

        storeCSSlinks: function () {
            $("link[rel='stylesheet'][type='text/css'][href*='ckeditor']").each(
                function (index, element) {
                    if (!CMS.CKEditor.CSS.includes(element.href)) {
                        CMS.CKEditor.CSS.push(element.href);
                    }
                }
            );
        },


        // setup is called after ckeditor has been initialized
        setupAdmin: function () {
            // auto maximize modal if alone in a modal
            var that = this;
            var win = window.parent || window;
            // 70px is hardcoded to make it more performant. 20px + 20px - paddings, 30px label height
            var TOOLBAR_HEIGHT_WITH_PADDINGS = 70;

            if (this._isAloneInModal()) {
                that.editor.resize('100%', win.CMS.$('.cms-modal-frame').height() - TOOLBAR_HEIGHT_WITH_PADDINGS);
                this.editor.execCommand('maximize');

                $(window).on('resize.ckeditor', function () {
                    that._repositionDialog(CKEDITOR.dialog.getCurrent(), win);
                }).trigger('resize.ckeditor');

                win.CMS.API.Helpers.addEventListener('modal-maximized modal-restored', function () {
                    try {
                        if (!$('.cke_maximized').length) {
                            that.editor.resize(
                                '100%',
                                win.CMS.$('.cms-modal-frame').height() - TOOLBAR_HEIGHT_WITH_PADDINGS
                            );
                            setTimeout(function () {
                                that._repositionDialog(CKEDITOR.dialog.getCurrent(), win);
                            }, 0);
                        }
                    } catch (e) {
                        // sometimes throws errors if modal with text plugin is closed too fast
                    }
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
                var event = new CMS.$.Event('mousedown');

                $.extend(event, {
                    screenX: e.originalEvent.screenX,
                    screenY: e.originalEvent.screenY
                });
                $(this).trigger(event);
            });
        },

        _isAloneInModal: function () {
            var body = this.container.closest('body');

            // return true if the ckeditor is alone in a modal popup
            return body.is('.app-djangocms_text_ckeditor.model-text');
        },

        /**
         * @method _repositionDialog
         * @private
         * @param {CKEDITOR.dialog} dialog instance
         */
        _repositionDialog: function (dialog) {
            var OFFSET = 80;

            if (!dialog) {
                return;
            }
            var size = dialog.getSize();
            var position = dialog.getPosition();
            var win = CKEDITOR.document.getWindow();
            var viewSize = win.getViewPaneSize();
            var winWidth = viewSize.width;
            var winHeight = viewSize.height;

            if (position.x < 0) {
                dialog.move(0, position.y);
                position.x = 0;
            }

            if (position.y < 0) {
                dialog.move(position.x, 0);
                position.y = 0;
            }

            if (position.y + size.height > winHeight) {
                dialog.resize(size.width, winHeight - position.y - OFFSET);
            }

            if (position.x + size.width > winWidth) {
                dialog.resize(winWidth - position.x, size.height);
            }
        },

        initAdminEditors: function () {
            window._cmsCKEditors = window._cmsCKEditors || [];
            var dynamics = [];
            var settings;
            var options;

            window._cmsCKEditors.forEach(function (editorConfig) {
                var elementId = 'ck-cfg-' + (editorConfig[1] ? editorConfig[1] : editorConfig[0]);
                settings = JSON.parse(document.getElementById(elementId).textContent);
                options = settings.options;
                delete settings.options;

                if (editorConfig[0].match(/__prefix__/)) {
                    dynamics.push(editorConfig);
                } else {
                    CMS.CKEditor.init(
                        document.getElementById(editorConfig[0]),
                        'admin',
                        options,
                        settings
                    );
                }
            });

            $('.add-row a').on('click', function () {
                $('.CMS_CKEditor').each(function (i, el) {
                    var container = $(el);

                    if (container.data('ckeditor-initialized')) {
                        return;
                    }

                    var containerId = container.attr('id');

                    // in case there are multiple different inlines we need to check
                    // newly added one against all of them
                    dynamics.forEach(function (config) {
                        var selector = config[0].id;
                        var regex = new RegExp(selector.replace('__prefix__', '\\d+'));

                        if (containerId.match(regex)) {
                            CMS.CKEditor.init(
                                document.getElementById(containerId),
                                options,
                                settings
                            );
                        }
                    });
                });
            });
        },

        _highlight_Textplugin: function (pluginId) {
            var HIGHLIGHT_TIMEOUT = 10;
            var DRAGGABLE_HEIGHT = 50; // it's not precisely 50, but it fits

            var draggable = $('.cms-draggable-' + pluginId);
            var doc = $(document);
            var currentExpandmode = doc.data('expandmode');


            // expand necessary parents
            doc.data('expandmode', false);
            draggable
                .parents('.cms-draggable')
                .find('> .cms-dragitem-collapsable:not(".cms-dragitem-expanded") > .cms-dragitem-text')
                .each(function (i, el) {
                    $(el).triggerHandler(CMS.Plugin.click);
                });
            if (draggable.length > 0) {  // Expanded elements available
                setTimeout(function () {
                    doc.data('expandmode', currentExpandmode);
                });
                setTimeout(function () {
                    var offsetParent = draggable.offsetParent();
                    var position = draggable.position().top + offsetParent.scrollTop();

                    draggable.offsetParent().scrollTop(position - window.innerHeight / 2 + DRAGGABLE_HEIGHT);

                    CMS.Plugin._highlightPluginStructure(draggable.find('.cms-dragitem:first'),
                        { successTimeout: 200, delay: 2000, seeThrough: true });
                }, HIGHLIGHT_TIMEOUT);
            }
        },

        _initAll: function () {
            CMS.CKEditor.touchdevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;  // on touch device?
            if (!CMS.CKEditor.touchdevice) {  // no inline editing on touch devices to not interfere with scrolling
                CMS.CKEditor.initInlineEditors();
            }
            CMS.CKEditor.initAdminEditors();
        },

        _destroyAll: function () {
            for (var id in CMS.CKEditor.editors) {
                if (CMS.CKEditor.editors.hasOwnProperty(id)) {
                    CMS.CKEditor.editors[id].editor.destroy();
                    delete CMS.CKEditor.editors[id];
                }
            }
        },

        _resetInlineEditors: function () {
            CMS.CKEditor.CSS.forEach(function (stylefile) {
                if ($("link[href='" + stylefile + "']").length === 0) {
                    $('head').append($("<link rel='stylesheet' type='text/css' href='" + stylefile + "'>"));
                }
            });
            CMS.CKEditor._destroyAll();
            CMS.CKEditor._initAll();
        }
    };

    setTimeout(function init() {
        CMS.CKEditor._initAll();
    }, 0);
    $(window).on('cms-content-refresh', CMS.CKEditor._resetInlineEditors);
})(window.CMS.$, window.CMS);
