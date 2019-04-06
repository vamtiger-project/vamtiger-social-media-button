import VamtigerSocialMediaIcon, { name as VamtigerSocialMediaIconName} from '../node_modules/vamtiger-social-media-icon/source/element';
import defineCustomElement from '../node_modules/vamtiger-browser-method/source/define-custom-element';
import constructor, { name } from './element';

const params = [
    {
        name: VamtigerSocialMediaIconName,
        constructor: VamtigerSocialMediaIcon
    },
    {
        name,
        constructor
    }
];

params.forEach(currentParams => defineCustomElement(currentParams));