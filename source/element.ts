import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector,
    ObservedAttribute,
    StringConstant
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import handleAttributeChange from './handle-attribute-changed';
import loadIcon from './load-icon';

export const name = 'vamtiger-social-media-button';
const {
    newline
} = StringConstant;

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerSocialMediaButton extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const slot = getTemplate({
            selector: Selector.slot,
            attributes: {
                name
            }
        });
        const elements = [
            stylesheet,
            slot
        ];

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        const element = this;

        await loadIcon({ element });
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {
        const element = this;

        handleAttributeChange[name]({
            name,
            oldValue,
            newValue,
            element
        });
    }
}