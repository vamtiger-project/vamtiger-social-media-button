import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-social-media-button', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-social-media-button.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-social-media-button.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});