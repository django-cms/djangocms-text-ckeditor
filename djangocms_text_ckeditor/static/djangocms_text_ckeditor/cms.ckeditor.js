// TODO: 	window.CKEDITOR_BASEPATH = document.querySelector('[data-ckeditor-basepath]').getAttribute('data-ckeditor-basepath');

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Demo from './packages/ckeditor5-plugin-demo/src/demo';

document.addEventListener('DOMContentLoaded', () => {

ClassicEditor
    .create( document.querySelector( '.CMS_CKEditor' ), {
        plugins: [ Paragraph, Essentials, Heading, List, Bold, Italic, Demo ],
        toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', '|', 'demo' ],
        demoConfig: {
            types: [ 'Title', 'Text', 'Author', 'Editor' ]                       // ADDED
        }        
    } )
    .then( editor => {
        // hide field label
        editor.sourceElement.parentElement.querySelector('label').style.display = "none";

        // Expose for playing in the console.
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
	 } );
	});
