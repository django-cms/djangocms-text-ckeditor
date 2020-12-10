
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

export default class UI extends Plugin {
    init() {
        const editor = this.editor;
        const t = editor.t;
        const placeholderNames = editor.config.get( 'demoConfig.types' );

        // to be displayed in the toolbar.
        editor.ui.componentFactory.add( 'placeholder', locale => {
            const dropdownView = createDropdown( locale );

            // Populate the list in the dropdown with items.
            addListToDropdown( dropdownView, getDropdownItemsDefinitions( placeholderNames ) );

            dropdownView.buttonView.set( {
                // The t() function helps localize the editor. All strings enclosed in t() can be
                // translated and change when the language of the editor changes.
                label: t( 'Placeholder' ),
                tooltip: true,
                withText: true
            } );

            // Disable the placeholder button when the command is disabled.
            const command = editor.commands.get( 'placeholder' );
            dropdownView.bind( 'isEnabled' ).to( command );

            // Execute the command when the dropdown item is clicked (executed).
            this.listenTo( dropdownView, 'execute', evt => {
                editor.execute( 'placeholder', { value: evt.source.commandParam } );
                editor.editing.view.focus();
            } );

            return dropdownView;
        } );
    }
}

function getDropdownItemsDefinitions( placeholderNames ) {
    const itemDefinitions = new Collection();

    for ( const name of placeholderNames ) {
        const definition = {
            type: 'button',
            model: new Model( {
                commandParam: name,
                label: name,
                withText: true
            } )
        };

        // Add the item definition to the collection.
        itemDefinitions.add( definition );
    }

    return itemDefinitions;
}