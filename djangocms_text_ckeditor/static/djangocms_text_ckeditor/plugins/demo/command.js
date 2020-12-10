import Command from '@ckeditor/ckeditor5-core/src/command';

export default class DemoCommand extends Command {
    execute( { value } ) {
        const editor = this.editor;

        editor.model.change( writer => {
            // Create a <placeholder> elment with the "name" attribute...
            const placeholder = writer.createElement( 'placeholder', { name: value } );

            // ... and insert it into the document.
            editor.model.insertContent( placeholder );

            // Put the selection on the inserted element.
            writer.setSelection( placeholder, 'on' );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;

        const isAllowed = model.schema.checkChild( selection.focus.parent, 'placeholder' );

        this.isEnabled = isAllowed;
    }
}