import {
    ILoadIcon,
    IDataset,
    SocialMediaIcon,
    Selector
} from './types';
import getTemplate from './get-template';
import { name as slotName } from './element';

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

    if (socialMediaIcon && color) {
        socialMediaIcon.dataset.color = color;
    }

    socialMediaIcon && element.appendChild(socialMediaIcon)
}