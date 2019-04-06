import {
    IHandleAttributeChanged,
    HandleAttributeChanged
} from './types';
import handleColorChanged from './handle-color-changed';

export default {
    'data-color': handleColorChanged
} as HandleAttributeChanged;