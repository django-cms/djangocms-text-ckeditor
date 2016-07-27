(function ($) {
    CKEDITOR.plugins.add('cmswidget', {
        requires: 'widget',
        onLoad: function () {
            CKEDITOR.addCss(
                // when widget contents are inline,
                // but have block-level css
                '.cke_widget_wrapper_force_block{' +
                    'display:block!important;' +
                '}' +
                // empty elements focus outline
                '.cke_widget_block>.cke_widget_element{' +
                    'display:block!important;' +
                '}' +
                'span.cms-ckeditor-plugin-label{' +
                    'display: inline-block !important;' +
                    'padding-left: 8px;' +
                    'padding-right: 8px;' +
                '}' +
                '.cms-ckeditor-plugin-label{' +
                    'background: black;' +
                    'color: white;' +
                    'text-align: center;' +
                    'border-radius: 3px;' +
                    'height: 24px;' +
                    'line-height: 24px;' +
                    'font-size: 14px !important;' +
                '}'
            );
        },

        init: function (editor) {
            this.addWidgetDefinition(editor);
            this.setupJustifyCommandHandlers(editor);
        },

        addWidgetDefinition: function (editor) {
            editor.widgets.add('cmswidget', (function widgetDef() {
                return {
                    button: 'CMS Plugin',

                    template:
                        '<cms-plugin style="unset: all">' +
                        '</cms-plugin>',

                    allowedContent: 'cms-plugin',
                    disallowedContent: 'cms-plugin{float}',

                    requiredContent: 'cms-plugin',

                    upcast: function (element) {
                        return element.name === 'cms-plugin';
                    },

                    init: function () {
                        var contents = $(this.element.$).children();
                        var displayProp = contents.css('display');

                        if (displayProp !== 'inline' && displayProp !== 'inline-block') {
                            this.wrapper.addClass('cke_widget_wrapper_force_block');
                        }

                        this.bindJustifyHandlers();
                    },

                    /**
                     * @function bindJustifyHandlers
                     * @public
                     * @see {setupJustifyCommandHandlers}
                     */
                    bindJustifyHandlers: function () {
                        this.on('select', function () {
                            editor.getCommand('justifyleft').disable();
                            editor.getCommand('justifyright').disable();
                            editor.getCommand('justifycenter').disable();
                            editor.getCommand('justifyblock').disable();
                        });

                        this.on('deselect', function () {
                            editor.getCommand('justifyleft').enable();
                            editor.getCommand('justifyright').enable();
                            editor.getCommand('justifycenter').enable();
                            editor.getCommand('justifyblock').enable();
                        });
                    }
                };
            })());
        },

        /**
         * With "real preview" plugin markup can be incorrectly justified because of the extra
         * wrapper. To avoid breaking up cms-plugin markup we disable justify commands when widgets
         * are selected.
         *
         * @function setupJustifyCommandHandlers
         * @param {CKEDITOR.editor} editor instance
         */
        setupJustifyCommandHandlers: function (editor) {
            var commands = ['left', 'center', 'right', 'block'];

            commands.forEach(function (command) {
                var justifyCommand = editor.getCommand('justify' + command);

                if (!justifyCommand) {
                    return;
                }

                var originalRefresh = justifyCommand.refresh.bind(justifyCommand);

                justifyCommand.refresh = function (ckeditor, path) {
                    if (this.state !== CKEDITOR.TRISTATE_DISABLED) {
                        originalRefresh(ckeditor, path);
                    }
                };
            });
        }
    });
})(CMS.$);
