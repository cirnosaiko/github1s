/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const t=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS"),e=({onFocus:t,onBlur:e})=>{let n=document.hasFocus();setInterval(()=>{const o=document.hasFocus();o!==n&&(n=o,o?t():e())},50)
},n=()=>document.getElementById("active-frame"),o=()=>document.getElementById("pending-frame"),r="\n\thtml {\n\t\tscrollbar-color: var(--vscode-scrollbarSlider-background) var(--vscode-editor-background);\n\t}\n\n\tbody {\n\t\tbackground-color: transparent;\n\t\tcolor: var(--vscode-editor-foreground);\n\t\tfont-family: var(--vscode-font-family);\n\t\tfont-weight: var(--vscode-font-weight);\n\t\tfont-size: var(--vscode-font-size);\n\t\tmargin: 0;\n\t\tpadding: 0 20px;\n\t}\n\n\timg {\n\t\tmax-width: 100%;\n\t\tmax-height: 100%;\n\t}\n\n\ta {\n\t\tcolor: var(--vscode-textLink-foreground);\n\t}\n\n\ta:hover {\n\t\tcolor: var(--vscode-textLink-activeForeground);\n\t}\n\n\ta:focus,\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 1px solid -webkit-focus-ring-color;\n\t\toutline-offset: -1px;\n\t}\n\n\tcode {\n\t\tcolor: var(--vscode-textPreformat-foreground);\n\t}\n\n\tblockquote {\n\t\tbackground: var(--vscode-textBlockQuote-background);\n\t\tborder-color: var(--vscode-textBlockQuote-border);\n\t}\n\n\tkbd {\n\t\tcolor: var(--vscode-editor-foreground);\n\t\tborder-radius: 3px;\n\t\tvertical-align: middle;\n\t\tpadding: 1px 3px;\n\n\t\tbackground-color: hsla(0,0%,50%,.17);\n\t\tborder: 1px solid rgba(71,71,71,.4);\n\t\tborder-bottom-color: rgba(88,88,88,.4);\n\t\tbox-shadow: inset 0 -1px 0 rgba(88,88,88,.4);\n\t}\n\t.vscode-light kbd {\n\t\tbackground-color: hsla(0,0%,87%,.5);\n\t\tborder: 1px solid hsla(0,0%,80%,.7);\n\t\tborder-bottom-color: hsla(0,0%,73%,.7);\n\t\tbox-shadow: inset 0 -1px 0 hsla(0,0%,73%,.7);\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 10px;\n\t\theight: 10px;\n\t}\n\n\t::-webkit-scrollbar-corner {\n\t\tbackground-color: var(--vscode-editor-background);\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: var(--vscode-scrollbarSlider-background);\n\t}\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: var(--vscode-scrollbarSlider-hoverBackground);\n\t}\n\t::-webkit-scrollbar-thumb:active {\n\t\tbackground-color: var(--vscode-scrollbarSlider-activeBackground);\n\t}"
;function a(a){let s,c=!0,i=[];const d={initialScrollProgress:void 0},l=(t,e)=>{if(t&&(e&&(e.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),e.classList.add(d.activeTheme),e.dataset.vscodeThemeKind=d.activeTheme,e.dataset.vscodeThemeName=d.themeName||""),d.styles)){const e=t.documentElement.style;for(let t=e.length-1;t>=0;t--){const n=e[t];n&&n.startsWith("--vscode-")&&e.removeProperty(n)}for(const t of Object.keys(d.styles))e.setProperty(`--${t}`,d.styles[t])}},u=t=>{if(!t||!t.view||!t.view.document)return;let e=t.view.document.getElementsByTagName("base")[0],n=t.target;for(;n;){if(n.tagName&&"a"===n.tagName.toLowerCase()&&n.href){if("#"===n.getAttribute("href"))t.view.scrollTo(0,0);else if(n.hash&&(n.getAttribute("href")===n.hash||e&&n.href.indexOf(e.href)>=0)){let e=t.view.document.getElementById(n.hash.substr(1,n.hash.length-1));e&&e.scrollIntoView()}else a.postMessage("did-click-link",n.href.baseVal||n.href);t.preventDefault();break}n=n.parentNode}},m=t=>{
if(t.view&&t.view.document&&1===t.button){let e=t.target;for(;e;){if(e.tagName&&"a"===e.tagName.toLowerCase()&&e.href){t.preventDefault();break}e=e.parentNode}}},g=t=>{if(function(t){return(t.ctrlKey||t.metaKey)&&["z","y"].includes(t.key)}(t)||function(t){return(t.ctrlKey||t.metaKey)&&["p"].includes(t.key)}(t))t.preventDefault();else if(function(t){return(t.ctrlKey||t.metaKey)&&["c","v","x"].includes(t.key)}(t)){if(!a.onElectron)return;t.preventDefault()}a.postMessage("did-keydown",{key:t.key,keyCode:t.keyCode,code:t.code,shiftKey:t.shiftKey,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,repeat:t.repeat})};let f=!1;const v=t=>{f||a.postMessage("did-scroll-wheel",{deltaMode:t.deltaMode,deltaX:t.deltaX,deltaY:t.deltaY,deltaZ:t.deltaZ,detail:t.detail,type:t.type})},b=t=>{if(!t.target||!t.target.body)return;if(f)return;const e=t.currentTarget.scrollY/t.target.body.clientHeight;isNaN(e)||(f=!0,window.requestAnimationFrame(()=>{try{a.postMessage("did-scroll",e)}catch(t){}f=!1}))};function h(t){
const e=t.options,n=t.contents,o=(new DOMParser).parseFromString(n,"text/html");if(o.querySelectorAll("a").forEach(t=>{t.title||(t.title=t.getAttribute("href"))}),e.allowScripts){const n=o.createElement("script");n.id="_vscodeApiScript",n.textContent=function(t,e){const n=e?encodeURIComponent(e):void 0
;return`\n\t\t\tglobalThis.acquireVsCodeApi = (function() {\n\t\t\t\tconst originalPostMessage = window.parent.postMessage.bind(window.parent);\n\t\t\t\tconst targetOrigin = '*';\n\t\t\t\tlet acquired = false;\n\n\t\t\t\tlet state = ${e?`JSON.parse(decodeURIComponent("${n}"))`:void 0};\n\n\t\t\t\treturn () => {\n\t\t\t\t\tif (acquired && !${t}) {\n\t\t\t\t\t\tthrow new Error('An instance of the VS Code API has already been acquired');\n\t\t\t\t\t}\n\t\t\t\t\tacquired = true;\n\t\t\t\t\treturn Object.freeze({\n\t\t\t\t\t\tpostMessage: function(msg) {\n\t\t\t\t\t\t\treturn originalPostMessage({ command: 'onmessage', data: msg }, targetOrigin);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tsetState: function(newState) {\n\t\t\t\t\t\t\tstate = newState;\n\t\t\t\t\t\t\toriginalPostMessage({ command: 'do-update-state', data: JSON.stringify(newState) }, targetOrigin);\n\t\t\t\t\t\t\treturn newState;\n\t\t\t\t\t\t},\n\t\t\t\t\t\tgetState: function() {\n\t\t\t\t\t\t\treturn state;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t};\n\t\t\t})();\n\t\t\tdelete window.parent;\n\t\t\tdelete window.top;\n\t\t\tdelete window.frameElement;\n\t\t`
}(e.allowMultipleAPIAcquire,t.state),o.head.prepend(n)}const s=o.createElement("style");s.id="_defaultStyles",s.textContent=r,o.head.prepend(s),l(o,o.body);const c=o.querySelector('meta[http-equiv="Content-Security-Policy"]');if(c)try{c.setAttribute("content",a.rewriteCSP(c.getAttribute("content"),t.endpoint))}catch(t){console.error(`Could not rewrite csp: ${t}`)}else a.postMessage("no-csp-found");return"<!DOCTYPE html>\n"+o.documentElement.outerHTML}document.addEventListener("DOMContentLoaded",()=>{const r=document.location.search.match(/\bid=([\w-]+)/),f=r?r[1]:void 0;if(!document.body)return;a.onMessage("styles",(t,e)=>{d.styles=e.styles,d.activeTheme=e.activeTheme,d.themeName=e.themeName;const o=n();o&&o.contentDocument&&l(o.contentDocument,o.contentDocument.body)}),a.onMessage("focus",()=>{const t=n();t&&t.contentWindow&&document.activeElement!==t&&t.contentWindow.focus()});let p=0;a.onMessage("content",async(e,r)=>{const w=++p;if(await a.ready,w!==p)return;const y=r.options,k=h(r),x=n(),M=c;let S
;if(c)c=!1,S=(t,e)=>{isNaN(d.initialScrollProgress)||0===e.scrollY&&e.scroll(0,t.clientHeight*d.initialScrollProgress)};else{const t=x&&x.contentDocument&&x.contentDocument.body?x.contentWindow.scrollY:0;S=(e,n)=>{0===n.scrollY&&n.scroll(0,t)}}const E=o();E&&(E.setAttribute("id",""),document.body.removeChild(E)),M||(i=[]);const L=document.createElement("iframe");function D(t){setTimeout(()=>{a.fakeLoad&&(t.open(),t.write(k),t.close(),A(L)),t&&l(t,t.body)},0)}if(L.setAttribute("id","pending-frame"),L.setAttribute("frameborder","0"),L.setAttribute("sandbox",y.allowScripts?"allow-scripts allow-forms allow-same-origin allow-pointer-lock allow-downloads":"allow-same-origin allow-pointer-lock"),a.fakeLoad&&(L.src=`./fake.html?id=${f}`),L.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",document.body.appendChild(L),a.fakeLoad||L.contentDocument.open(),a.fakeLoad&&!y.allowScripts&&t){const t=setInterval(()=>{
L.parentElement?"loading"!==L.contentDocument.readyState&&(clearInterval(t),D(L.contentDocument)):clearInterval(t)},10)}else L.contentWindow.addEventListener("DOMContentLoaded",t=>{D(t.target?t.target:void 0)});const C=(t,e)=>{t&&t.body&&S(t.body,e);const r=o();if(r&&r.contentDocument&&r.contentDocument===t){const t=n();t&&document.body.removeChild(t),l(r.contentDocument,r.contentDocument.body),r.setAttribute("id","active-frame"),r.style.visibility="visible",a.focusIframeOnCreate&&r.contentWindow.focus(),e.addEventListener("scroll",b),e.addEventListener("wheel",v),i.forEach(t=>{e.postMessage(t,"*")}),i=[]}a.postMessage("did-load")};function A(t){clearTimeout(s),s=void 0,s=setTimeout(()=>{clearTimeout(s),s=void 0,C(t.contentDocument,t.contentWindow)},200),t.contentWindow.addEventListener("load",(function(t){const e=t.target;s&&(clearTimeout(s),s=void 0,C(e,this))})),t.contentWindow.addEventListener("click",u),t.contentWindow.addEventListener("auxclick",m),t.contentWindow.addEventListener("keydown",g),
t.contentWindow.addEventListener("contextmenu",t=>t.preventDefault()),a.onIframeLoaded&&a.onIframeLoaded(t)}a.fakeLoad||A(L),a.fakeLoad||(L.contentDocument.write(k),L.contentDocument.close()),a.postMessage("did-set-content",void 0)}),a.onMessage("message",(t,e)=>{if(!o()){const t=n();if(t)return void t.contentWindow.postMessage(e,"*")}i.push(e)}),a.onMessage("initial-scroll-position",(t,e)=>{d.initialScrollProgress=e}),a.onMessage("execCommand",(t,e)=>{const o=n();o&&o.contentDocument.execCommand(e)}),e({onFocus:()=>a.postMessage("did-focus"),onBlur:()=>a.postMessage("did-blur")}),a.postMessage("webview-ready",{})})}"undefined"!=typeof module?module.exports=a:window.createWebviewManager=a}();
//# sourceMappingURL=main.js.map
