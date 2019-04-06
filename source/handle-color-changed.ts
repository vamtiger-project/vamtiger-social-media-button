import {
    IHandleAttributeChanged,
    Selector,
    StringConstant
} from './types';

const selector = [
    Selector.facebookSvgPath,
    Selector.twitterSvgPath
].join(StringConstant.comma);

export default function ({ element, newValue: fill}: IHandleAttributeChanged) {
    const { shadowRoot } = element;
    const path = shadowRoot && shadowRoot.querySelector<SVGPathElement>(selector);

    if (path && fill) {
        path.style.fill = fill;
    }
}