import VamtigerSocialMediaIcon from '../node_modules/vamtiger-social-media-icon/source/element';
import VamtigerSocialMediaButton from './element';

export enum StringConstant {
    nothing = '',
    newline = '\n',
    comma = ','
}

export enum Selector {
    style = 'style',
    slot = 'slot',
    figure = 'figure',
    figcaption = 'figcaption',
    facebookIcon = 'vamtiger-social-media-icon[data-facebook]',
    twitterIcon = 'vamtiger-social-media-icon[data-twitter]',
    instagramIcon = 'vamtiger-social-media-icon[data-instagram]',
    facebookSvg = 'svg[data-facebook-svg]',
    twitterSvg = 'svg[data-twitter-svg]',
    instagramSvg = 'svg[data-instagram-svg]',
    facebookSvgPath = 'svg[data-facebook-svg] > path',
    twitterSvgPath = 'svg[data-twitter-svg] > path',
    instagramSvgPath = 'svg[data-instagram-svg] > path'
}

export enum ObservedAttributes {
    'data-color' = 'data-color'
}

export enum SocialMediaIcon {
    facebook = 'facebook',
    twitter = 'twitter',
    instagram = 'instagram'
}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
    name?: string;
    slot?: string;
    color?: string;
}

export interface IProperties {
    innerHTML?: string;
}

export interface IDataset extends DOMStringMap {
    twitter: SocialMediaIcon;
    color?: string;
}

export interface IHandleAttributeChanged {
    name: ObservedAttribute,
    oldValue: string;
    newValue: string;
    element: VamtigerSocialMediaButton;
}

export interface ILoadIcon {
    element: VamtigerSocialMediaButton
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type HandleAttributeChanged = {
    [K in ObservedAttribute]: (params: IHandleAttributeChanged) => void;
}

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends
        Selector.figure
        | Selector.figcaption
            ? HTMLElement :
    P['selector'] extends
        Selector.twitterIcon
        | Selector.facebookIcon
        | Selector.instagramIcon ? VamtigerSocialMediaIcon :
    P['selector'] extends
        Selector.facebookSvg
        | Selector.twitterSvg
        | Selector.instagramSvg
            ? SVGElement :
    null;