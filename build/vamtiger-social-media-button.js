!function(){"use strict";function t(t,e,o,a){return new(o||(o=Promise))(function(i,n){function r(t){try{s(a.next(t))}catch(t){n(t)}}function c(t){try{s(a.throw(t))}catch(t){n(t)}}function s(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(r,c)}s((a=a.apply(t,e)).next())})}var e,o,a,i,n;!function(t){t.nothing="",t.newline="\n",t.comma=","}(e||(e={})),function(t){t.buttonLoaded="buttonLoaded"}(o||(o={})),function(t){t.style="style",t.slot="slot",t.figure="figure",t.figcaption="figcaption",t.facebookIcon="vamtiger-social-media-icon[data-facebook]",t.twitterIcon="vamtiger-social-media-icon[data-twitter]",t.instagramIcon="vamtiger-social-media-icon[data-instagram]",t.facebookSvg="svg[data-facebook-svg]",t.twitterSvg="svg[data-twitter-svg]",t.instagramSvg="svg[data-instagram-svg]",t.facebookSvgPath="svg[data-facebook-svg] > path",t.twitterSvgPath="svg[data-twitter-svg] > path",t.instagramSvgPath="svg[data-instagram-svg] > path"}(a||(a={})),function(t){t["data-color"]="data-color"}(i||(i={})),function(t){t.facebook="facebook",t.twitter="twitter",t.instagram="instagram"}(n||(n={}));const r={mode:"open"},c=Object.keys(i),s=["https://unpkg.com/vamtiger-social-media-icon@latest"];var d="vamtiger-social-media-button vamtiger-social-media-icon{width:100%;height:100%}vamtiger-social-media-button[data-loaded]{opacity:1;-webkit-box-shadow:2px 2px 1px rgba(0,0,0,.2);box-shadow:2px 2px 1px rgba(0,0,0,.2)}\n/*# sourceMappingURL=document-index.ts.map */",l="<style></style> <slot></slot> <figure></figure> <figcaption></figcaption> <vamtiger-social-media-icon data-twitter></vamtiger-social-media-icon> <vamtiger-social-media-icon data-facebook></vamtiger-social-media-icon> <vamtiger-social-media-icon data-instagram></vamtiger-social-media-icon>";const{nothing:m}=e,g=document.createElement("template"),u=["<style>:host{display:inline-block;position:relative;cursor:pointer;border-radius:100%;padding:.75em;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;-webkit-box-shadow:2px 2px 1px transparent;box-shadow:2px 2px 1px transparent;opacity:0;-webkit-transition:opacity 225ms linear;transition:opacity 225ms linear}\n/*# sourceMappingURL=index.ts.map */</style>",l].join(m);g.innerHTML=u;var p=t=>{const{selector:e,attributes:o={},properties:a={}}=t,i=Object.keys(o),n=g.content.querySelector(e),r=n&&n.cloneNode(!0);return r&&(Object.assign(r,a),i.forEach(t=>o[t]&&r.setAttribute(t,o[t]||""))),r};const v=[a.facebookSvgPath,a.twitterSvgPath].join(e.comma);var b={"data-color":function({element:t,newValue:e}){const{shadowRoot:o}=t,a=o&&o.querySelector(v);a&&e&&(a.style.fill=e)}};const{nothing:f}=e,h=new CustomEvent(o.buttonLoaded,{bubbles:!0});const{VamtigerBrowserMethod:w}=window,{loadScript:x}=w,y="vamtiger-social-media-button";x({name:y,css:d}).catch(console.error);const{VamtigerBrowserMethod:k}=window,{defineCustomElement:S,loadScript:L}=k,P={name:y,constructor:class extends HTMLElement{constructor(){super();const t=this.attachShadow(r);[p({selector:a.style}),p({selector:a.slot,attributes:{name:y}})].forEach(e=>e&&t.appendChild(e))}static get observedAttributes(){return c}connectedCallback(){return t(this,void 0,void 0,function*(){yield function({element:e}){return t(this,void 0,void 0,function*(){const t=e.dataset,{color:o}=t,i=t.hasOwnProperty(n.twitter)&&a.twitterIcon||t.hasOwnProperty(n.facebook)&&a.facebookIcon||t.hasOwnProperty(n.instagram)&&a.instagramIcon,r=i&&p({selector:i,attributes:{slot:y}});r&&(r.addEventListener("iconLoaded",function o(){r&&(r.removeEventListener("iconLoaded",o),t.loaded=f,e.dispatchEvent(h))}),o&&(r.dataset.color=o)),r&&e.appendChild(r)})}({element:this})})}attributeChangedCallback(t,e,o){b[t]({name:t,oldValue:e,newValue:o,element:this})}}};(function(){return t(this,void 0,void 0,function*(){yield Promise.all(s.map(t=>L({src:t}))),S(P)})})().catch(console.warn)}();
//# sourceMappingURL=vamtiger-social-media-button.js.map
