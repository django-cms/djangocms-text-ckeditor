import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';


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
            language: {
                ui: 'en',
                content: 'en'
            },
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
            //toolbarCanCollapse: false, //TODO for true use Inline or Balloon editors
            removePlugins: ['resize'],
            extraPlugins: ''
        },

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
                
                this.editor = $('#' + container).length ? ClassicEditor.create( document.querySelector( '#' +  container), {
                    initialData: '',                    
                    plugins: [
                        EssentialsPlugin,
                        AutoformatPlugin,
                        BoldPlugin,
                        ItalicPlugin,
                        BlockQuotePlugin,
                        HeadingPlugin,
                        ImagePlugin,
                        ImageCaptionPlugin,
                        ImageStylePlugin,
                        ImageToolbarPlugin,
                        EasyImagePlugin,
                        ImageUploadPlugin,
                        LinkPlugin,
                        ListPlugin,
                        ParagraphPlugin,
                        UploadAdapterPlugin
                    ],
            
                    // So is the rest of the default configuration.
                    toolbar: [
                        'heading',
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        'imageUpload',
                        'blockQuote',
                        'undo',
                        'redo'
                    ],
                    image: {
                        toolbar: [
                            'imageStyle:full',
                            'imageStyle:side',
                            '|',
                            'imageTextAlternative'
                        ]
                    }
                } ).catch( error => {console.error( error );}) : null;
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