// TODO: 	window.CKEDITOR_BASEPATH = document.querySelector('[data-ckeditor-basepath]').getAttribute('data-ckeditor-basepath');

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

document.addEventListener('DOMContentLoaded', () => {
ClassicEditor
    .create( document.querySelector( '.CMS_CKEditor' ), {
        plugins: [ Paragraph ],
        toolbar: [ ],
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );

        // Expose for playing in the console.
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
	 } );
	});
