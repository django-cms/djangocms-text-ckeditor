import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import {classic_config, migrating_options} from './settings.ckeditor'

(function ($) {
    window.CKEDITOR_BASEPATH = $('[data-ckeditor-basepath]').attr('data-ckeditor-basepath');

    // CMS.$ will be passed for $
    /**
     * CMS.CKEditor
     *
     * @description: Adds cms specific plugins to CKEditor
     */
    CMS.CKEditor = {

        options: migrating_options,

        init: function (container, options, settings) {
                // this.container = $('#' + container);
                // this.container.data('ckeditor-initialized', true);
                // // add additional settings to options
                // // TODO
                // // this.options.toolbar = settings.toolbar;
                this.options = $.extend(false, {
                    settings: settings,
                    initialData: '',
                }, this.options, options);

                // // add extra plugins that we absolutely must have
                // this.options.extraPlugins = this.options.extraPlugins +=
                //     ',cmsplugins,cmswidget,cmsdialog,cmsresize,widget';

                // document.createElement('cms-plugin');

                /* 
                    TODO: Migrate to version 5
                */

                // CKEDITOR.dtd['cms-plugin'] = CKEDITOR.dtd.div;
                // CKEDITOR.dtd.$inline['cms-plugin'] = 1;
                // // has to be here, otherwise extra <p> tags appear
                // CKEDITOR.dtd.$nonEditable['cms-plugin'] = 1;
                // CKEDITOR.dtd.$transparent['cms-plugin'] = 1;
                // CKEDITOR.dtd.body['cms-plugin'] = 1;

                // add additional plugins (autoloads plugins.js)
                // CKEDITOR.skin.addIcon('cmsplugins', settings.static_url +
                //     '/ckeditor_plugins/cmsplugins/icons/cmsplugins.svg');

                // render ckeditor
                
                this.editor = $('#' + container).length ? ClassicEditor.create( document.querySelector( '#' +  container),  classic_config).catch( error => {console.error( error );}) : null;
        },

        _initAll: function () {
            var dynamics = [];

            window._cmsCKEditors.forEach(function (editorConfig) {
                var selector = editorConfig[0];

                if (selector.match(/__prefix__/)) {
                    dynamics.push(editorConfig);
                } else {
                    CMS.CKEditor.init(editorConfig[0], editorConfig[1], editorConfig[2]);
                }
            });

            // $('.add-row a').on('click', function () {
            //     $('.CMS_CKEditor').each(function (i, el) {
            //         var container = $(el);

            //         if (container.data('ckeditor-initialized')) {
            //             return;
            //         }

            //         var containerId = container.attr('id');

            //         // in case there are multiple different inlines we need to check
            //         // newly added one against all of them
            //         dynamics.forEach(function (config) {
            //             var selector = config[0];
            //             var regex = new RegExp(selector.replace('__prefix__', '\\d+'));

            //             if (containerId.match(regex)) {
            //                 CMS.CKEditor.init(containerId, config[1], config[2]);
            //             }
            //         });
            //     });
            // });
        }
    };

    setTimeout(function init() {
        CMS.CKEditor._initAll();
    }, 0);
})(CMS.$);