import {
    ILoadIcon,
    IDataset,
    SocialMediaIcon,
    Selector,
    EventName,
    StringConstant
} from './types';
import getTemplate from './get-template';
import { name as slotName } from './element';

const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};
const buttonLoadedEvent = new CustomEvent(
    EventName.buttonLoaded,
    eventParams
);

export default async function ({ element }: ILoadIcon) {
    const dataset = element.dataset as IDataset;
    const {
        color
    } = dataset;
    const socialMediaIconSelector = dataset.hasOwnProperty(SocialMediaIcon.twitter) && Selector.twitterIcon
        || dataset.hasOwnProperty(SocialMediaIcon.facebook) && Selector.facebookIcon
        || dataset.hasOwnProperty(SocialMediaIcon.instagram) && Selector.instagramIcon;
    const socialMediaIcon = socialMediaIconSelector && getTemplate({
        selector: socialMediaIconSelector,
        attributes: {
            slot: slotName
        }
    });

    if (socialMediaIcon) {
        socialMediaIcon.addEventListener('iconLoaded', handleIconLoaded);

        if (color) {
            socialMediaIcon.dataset.color = color;
        }
    }

    socialMediaIcon && element.appendChild(socialMediaIcon);

    function handleIconLoaded() {
        if (socialMediaIcon) {
            socialMediaIcon.removeEventListener('iconLoaded', handleIconLoaded);

            dataset.loaded = nothing;

            element.dispatchEvent(buttonLoadedEvent);
        }
    }
}