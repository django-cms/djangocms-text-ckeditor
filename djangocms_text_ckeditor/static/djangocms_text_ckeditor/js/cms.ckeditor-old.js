(function ($) {
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
        static_url: '/static/djangocms-text-ckeditor/',
        ckeditor_basepath: '/static/djangocms-text-ckeditor/ckeditor/',
        CSS: null,
        editors: {},


        init: function (container, options, settings) {
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

            CMS.CKEditor = CMS.CKEditor || {};
            CMS.CKEditor.static_url = this.options.settings.static_url;

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

            // render ckeditor
            this.editor = CKEDITOR.replace(container, this.options);

            // add additional styling
            CKEDITOR.on('instanceReady', $.proxy(CMS.CKEditor, 'setup'));
        },

        initInlineEditors: function () {
            if (CMS._plugins === undefined) {
                // no plugins -> no inline editors
                return;
            }
            CMS._plugins.forEach(function (plugin) {
                if (plugin[1].plugin_type === 'TextPlugin') {
                    var url = plugin[1].urls.edit_plugin,
                        id = plugin[1].plugin_id,
                        elements = $('.cms-plugin.cms-plugin-' + id);

                    if (elements.length > 0) {
                        $.get(url, {}, function (response) {
                            // get form incl. csrf token
                            var responseDOM = $(response);
                            var csrfmiddlewaretoken = responseDOM.find('input[name="csrfmiddlewaretoken"]');
                            var content = responseDOM.find('textarea[name="body"]');

                            if (csrfmiddlewaretoken) {  // success <=> middleware token
                                var wrapper = elements
                                    .wrapAll("<div class='cms-ckeditor-inline-wrapper' contenteditable='true'></div>")
                                    .parent(),
                                    options = {},
                                    settings_script_tag = responseDOM.find('.ck-settings')[0];

                                elements = elements
                                        .removeClass('cms-plugin')
                                        .removeClass('cms-plugin-' + id);
                                wrapper.addClass('cms-plugin').addClass('cms-plugin-' + id);
                                wrapper.html(content.val());
                                for (var attr in settings_script_tag.dataset) {
                                    options[attr] = settings_script_tag.dataset[attr];
                                    if (attr === 'lang' || attr === 'plugins' || attr === "settings") {
                                        options[attr] = JSON.parse(options[attr]);
                                    }
                                }
                                CMS.CKEditor.init(
                                    wrapper[0],
                                    options,
                                    {
                                        editor: CKEDITOR.InlineEditor,
                                        url: url,
                                        csrfmiddlewaretoken: csrfmiddlewaretoken.val(),
                                        callback: function () {
                                            var styles = $('style[data-cke="true"]');

                                            if (styles.length > 0) {
                                                CMS.CKEditor5.CSS = styles.clone();
                                            }
                                            wrapper.on('dblclick', function (event) {
                                                event.stopPropagation();
                                            });
                                            wrapper.on('pointerover', function (event) {
                                                event.stopPropagation();
                                            });
                                            wrapper.on('blur', function click_outside() {
                                                CMS.CKEditor5.save_data(id);
                                            });
                                         }
                                    }
                                );
                            }
                        });
                    }
                }
            });
        },

        save_data: function (id, action) {
            var instance = CMS.CKEditor.editors[id];

            if (instance.changed) {
                var data = instance.editor.getData();

                console.log('save called', id, instance.setup);
                $.post(instance.setup.url, {  // send changes
                    csrfmiddlewaretoken: instance.setup.csrfmiddlewaretoken,
                    body: data,
                    _save: 'Save'
                }, function (response) {
                    if (action !== undefined) {
                        action(instance, response);
                    }
                    // var scripts = $(response).find("script").addClass("cms-ckeditor5-result");
                    // $("body").append(scripts);
                }).fail(function (error) {
                    console.log(error);
                    alert("Error saving data" + error)
                });
            }
            CMS.CKEditor5.editors[id].changed = false;
        },


        // setup is called after ckeditor has been initialized
        setup: function () {
            // auto maximize modal if alone in a modal
            var that = this;
            var win = window.parent || window;
            // 70px is hardcoded to make it more performant. 20px + 20px - paddings, 30px label height
                var TOOLBAR_HEIGHT_WITH_PADDINGS = 63;

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
            return body.is('.app-djangocms_text_ckeditor.model-text') || // Django >= 1.7
                body.is('.djangocms_text_ckeditor-text'); // Django < 1.7
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

        _initAll: function () {
            var dynamics = [];

            if (!window._cmsCKEditors) {
                return;
            }
            window._cmsCKEditors.forEach(function (editorConfig) {
                var selector = editorConfig[0];

                if (selector.match(/__prefix__/)) {
                    dynamics.push(editorConfig);
                } else {
                    CMS.CKEditor.init(editorConfig[0], editorConfig[1], editorConfig[2]);
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
                        var selector = config[0];
                        var regex = new RegExp(selector.replace('__prefix__', '\\d+'));

                        if (containerId.match(regex)) {
                            CMS.CKEditor.init(containerId, config[1], config[2]);
                        }
                    });
                });
            });
        }
    };

    setTimeout(function init() {
        CMS.CKEditor._initAll();
    }, 0);
})(CMS.$);
