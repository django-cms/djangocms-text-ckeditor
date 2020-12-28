
import ClassicEditor from './dist/bundle';
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
