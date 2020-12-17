import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import DemoEditing from './edit';
import DemoUI from './ui';

export default class Demo extends Plugin {
    static get requires() {
        return [ DemoEditing, DemoUI ];
    }
}
