(function ($) {
    window.CKEDITOR_BASEPATH = $('[data-ckeditor-basepath]').attr('data-ckeditor-basepath') ||
     "/static/djangocms_text_ckeditor/ckeditor/";

    // CMS.$ will be passed for $
    /**
     * CMS.CKEditor
     *
     * @description: Adds cms specific plugins to CKEditor
     */
    CMS.CKInlineEditor = {

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
            toolbar: "CMS",
            allowedContent: true,
            toolbarCanCollapse: false,
            removePlugins: 'resize',
            extraPlugins: ''
        },

        init: function (wrapper, id, url, csrfmiddlewaretoken, settings) {
            if(wrapper !== undefined ) {
                this.container = wrapper;
                this.container.data('ckeditor-initialized', true);
                // add additional settings to options
                // this.options.toolbar = {}.toolbar;
                this.options = $.extend(false, {
                    settings: settings
                }, this.options, {});
                // add extra plugins that we absolutely must have
                this.options.extraPlugins = this.options.extraPlugins +=
                   ',cmsplugins,cmswidget,cmsdialog,widget';

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

                // create ckeditor
                CKEDITOR.disableAutoInline = true;
                var editor = CKEDITOR.inline(wrapper[0], this.options);
                this.editor = editor;
                if (id in CMS.CKInlineEditors) {
                    CMS.CKInlineEditors[id].editor.destroy(false);
                }
                CMS.CKInlineEditors[id] = {
                    csrfmiddlewaretoken: csrfmiddlewaretoken,
                    url: url,
                    wrapper: wrapper,
                    id: id,
                    editor: editor,
                };
                wrapper.on('dblclick', function (event) {
                    event.stopPropagation();
                });
                wrapper.on('pointerover', function (event) {
                    event.stopPropagation();
                });
                wrapper.on("blur", function click_outside(event) {
                    CMS.CKInlineEditor.save_data(id, editor.getData());
                });

                // add additional styling
                CKEDITOR.on('instanceReady', $.proxy(CMS.CKInlineEditor, 'setup'));
            }
        },

        // setup is called after ckeditor has been initialized
        setup: function () {
            $("link[rel='stylesheet'][type='text/css'][href*='ckeditor'").each(
                function (index, element) {
                    if (!CMS.CKInlineEditor.CSS.includes(element.href)) {
                        CMS.CKInlineEditor.CSS.push(element.href);
                    }
                }
            );
            // auto maximize modal if alone in a modal
            var that = this;
            var win = window.parent || window;
            // 70px is hardcoded to make it more performant. 20px + 20px - paddings, 30px label height
            var TOOLBAR_HEIGHT_WITH_PADDINGS = 70;


            // add css tweks to the editor
            this.styles();
        },

        save_data: function (id, data, action) {
            $.post(CMS.CKInlineEditors[id].url, {  // send changes
                csrfmiddlewaretoken: CMS.CKInlineEditors[id].csrfmiddlewaretoken,
                body: data,
                _save: "Save"
            }, function (response) {
                if (action !== undefined) {
                    action();
                }
                var scripts = $(response).find("script").addClass("cms-ckeditor5-result");
                // $("body").append(scripts);
            }).fail(function (error) {
                console.log(error);
                alert("Error saving data" + error)
            });
        },

        styles: function () {
            // add styling to source and fullscreen view
            $('.cke_button__maximize, .cke_button__source').parent()
                .css('margin-right', 0).parent()
                .css('float', 'right');
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
            CMS._plugins.forEach(function (plugin) {
                if (plugin[1].plugin_type === "TextPlugin") {
                    var url = plugin[1].urls.edit_plugin,
                        id = plugin[1].plugin_id,
                        container_id = "_ck_inline-" + plugin[1].plugin_id;
                    var elements = $(".cms-plugin.cms-plugin-" + id);
                    if (elements.length > 0) {
                        $.get(url, {}, function (response) {
                            // get form incl. csrf token
                            var responseDOM = $(response);
                            var csrfmiddlewaretoken = responseDOM.find('input[name="csrfmiddlewaretoken"]');
                            var content = responseDOM.find('textarea[name="body"]');
                            window.CKEDITOR_BASEPATH = responseDOM.find('[data-ckeditor-basepath]').attr('data-ckeditor-basepath');
                            if (csrfmiddlewaretoken) {  // success <=> middlewaretoken
                                elements = elements
                                        .removeClass('cms-plugin')
                                        .removeClass("cms-plugin-" + id);
                                var wrapper = elements.wrapAll("<div class='cms-ckeditor-wrapper' contenteditable='true'></div>").parent();
                                wrapper.addClass('cms-plugin').addClass("cms-plugin-" + id);
                                wrapper.html(content.val());
                                var settings = {},
                                    settings_script_tag = responseDOM.find(".ck-settings")[0];
                                for (var attr in settings_script_tag.dataset) {
                                    settings[attr] = settings_script_tag.dataset[attr];
                                    if (attr === "lang" || attr === "plugins") {
                                        settings[attr] = JSON.parse(settings[attr])
                                    }
        }                       CMS.CKInlineEditor.init(wrapper,
                                    id,
                                    url,
                                    csrfmiddlewaretoken.val(),
                                    settings);
                            }
                        });
                    }
                }
            });
        },

        _resetInlineEditors: function () {
            CMS.CKInlineEditor.CSS.forEach(function (stylefile) {
                if($("link[href='"+stylefile+"']").length === 0) {
                    $("head").append($("<link rel='stylesheet' type='text/css' href='"+stylefile+"'>"))
                }
            });
            CMS.CKInlineEditor._initAll();
        }
    };


    setTimeout(function init() {
        CMS.CKInlineEditors = CMS.CKInlineEditors || {};
        CMS.CKInlineEditor.CSS = [];
        CMS.CKInlineEditor._initAll();
    }, 0);
    $(window).on('cms-content-refresh', CMS.CKInlineEditor._resetInlineEditors);

})(CMS.$);
