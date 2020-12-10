import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import {toWidget, viewToModelPositionOutsideModelElement} from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

import Command from './command';

export default class Editing extends Plugin {
    static get requires() {                                                    
        return [ Widget ];
    }

    init() {
        console.log( 'Editing#init() got called' );

        this._defineSchema();
        this._defineConverters();                                              

        this.editor.commands.add( 'placeholder', new DemoCommand( this.editor ) );

        this.editor.editing.mapper.on(
            'viewToModelPosition',
            viewToModelPositionOutsideModelElement( this.editor.model, viewElement => viewElement.hasClass( 'placeholder' ) )
        );

        this.editor.config.define( 'demoConfig', {
            types: [ 'Blog Title', 'Author', 'Editor', 'Date' ]
        } );        
    }

    _defineSchema() {
        // ...
    }

    _defineConverters() {                                                      
        const conversion = this.editor.conversion;

        conversion.for( 'upcast' ).elementToElement( {
            view: {
                name: 'span',
                classes: [ 'placeholder' ]
            },
            model: ( viewElement, { writer: modelWriter } ) => {
                // Extract the "name" from "{name}".
                const name = viewElement.getChild( 0 ).data.slice( 1, -1 );

                return modelWriter.createElement( 'placeholder', { name } );
            }
        } );

        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'placeholder',
            view: ( modelItem, { writer: viewWriter } ) => {
                const widgetElement = createPlaceholderView( modelItem, viewWriter );

                // Enable widget handling on a placeholder element inside the editing view.
                return toWidget( widgetElement, viewWriter );
            }
        } );

        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'placeholder',
            view: ( modelItem, { writer: viewWriter } ) => createPlaceholderView( modelItem, viewWriter )
        } );

        // Helper method for both downcast converters.
        function createPlaceholderView( modelItem, viewWriter ) {
            const name = modelItem.getAttribute( 'name' );

            const placeholderView = viewWriter.createContainerElement( 'span', {
                class: 'placeholder'
            } );

            // Insert the placeholder name (as a text).
            const innerText = viewWriter.createText( '{' + name + '}' );
            viewWriter.insert( viewWriter.createPositionAt( placeholderView, 0 ), innerText );

            return placeholderView;
        }
    }
}