import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import Edit from './edit';
import UI from './ui';

export default class Demo extends Plugin {
    static get requires() {
        return [ Edit, UI ];
    }
}