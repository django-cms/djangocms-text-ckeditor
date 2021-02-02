/**
 * @module demo/democommand
 */

import Command from '@ckeditor/ckeditor5-core/src/command';

export default class DemoCommand extends Command {
    execute( { value } ) {
        const editor = this.editor;

        editor.model.change( writer => {
            // Create a <demo> elment with the "name" attribute...
            const demo = writer.createElement( 'demo', { name: value } );

            // ... and insert it into the document.
            editor.model.insertContent( demo );

            // Put the selection on the inserted element.
            writer.setSelection( demo, 'on' );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;

        const isAllowed = model.schema.checkChild( selection.focus.parent, 'demo' );

        this.isEnabled = isAllowed;
    }
}
