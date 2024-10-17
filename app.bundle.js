(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 62.5%;\n    --ship-bg-colour: #43464B;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.5fr;\n    height: 100vh;\n}\n\nfooter {\n    text-shadow: 0px 2px 2px orange, 0px 0px 0.5rem red;\n    box-shadow: inset 0px 0px 7px 9px #b6a9a978, 1px 0px 3rem 3px #db4315;\n    background-color: #000000bf;\n}\n\nbutton {\n    border-radius: 10px;\n    border: 2px solid orangered;\n    color: white;\n    box-shadow: 0px 0px 1px 0.5px orange;\n    background-color: var(--ship-bg-colour);\n}\n\nbutton:hover {\n    background-color: black;\n}\n\n.game-container {\n    display: flex;\n    flex-direction: column;\n    background-color: #262626;\n    z-index: 1;\n}\n\n.game-display {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    justify-items: center;\n}\n\n.game-board-container, .game-toolbar {\n    display: flex;\n    justify-content: center;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(10, minmax(10px, 60px));\n    justify-content: center;\n    max-width: 90%;\n    border: 1px solid black;\n}\n\n.game-cell {\n    border: 1px solid black;\n    background-color: #3987c9;\n    aspect-ratio: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.pin {\n    border: 1px solid black;\n    background-color: black;\n    width: 35%;\n    height: 35%;\n    border-radius: 20px;\n}\n\n#attacking .game-cell:not(.attacked):not(.ship-attacked){\n    cursor: pointer;\n}\n\nheader, dialog {\n    font-size: 3.5rem;\n    letter-spacing: 0.2rem;\n    font-weight: bolder;\n    text-shadow: 0px 2px 2px orange, 0px 0px 0.5rem red;\n    box-shadow:  inset 0px 0px 7px 9px #b6a9a978, 1px 0px 3rem 3px #db4315;\n    background-color: #000000bf;\n    z-index: 2;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship {\n    background-color: var(--ship-bg-colour);\n}\n\n.game-cell.ship-attacked {\n    background-color: var(--ship-bg-colour);\n}\n\n\n.attacked .pin {\n    background-color: white;\n    box-shadow: inset 0px 0px 5px 2px grey;\n}\n\n.game-cell.ship-attacked .pin {\n    background-color: red;\n    box-shadow: inset 0px 0px 5px 2px darkred;\n}\n\n#display-winner {\n    font-size: 3rem;\n    letter-spacing: 0.1rem;\n}\n\n#randomise-ships {\n    font-size: 2rem;\n    margin: 5px;\n    padding: 5px 10px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 500px) {\n    .game-display {\n        grid-template-rows: 1fr 1fr;\n        grid-template-columns: 1fr;\n        row-gap: 10px;\n    }\n    .game-display {\n        margin: 10px;\n    }\n}\n\n@media only screen and (max-height: 750px) {\n    .game-board {\n        max-width: 70%;\n    }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,wCAAwC;IACxC,gBAAgB;IAChB,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,mDAAmD;IACnD,qEAAqE;IACrE,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qDAAqD;IACrD,uBAAuB;IACvB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,mDAAmD;IACnD,sEAAsE;IACtE,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;;AAGA;IACI,uBAAuB;IACvB,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,2BAA2B;QAC3B,0BAA0B;QAC1B,aAAa;IACjB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ",sourcesContent:[":root {\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 62.5%;\n    --ship-bg-colour: #43464B;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.5fr;\n    height: 100vh;\n}\n\nfooter {\n    text-shadow: 0px 2px 2px orange, 0px 0px 0.5rem red;\n    box-shadow: inset 0px 0px 7px 9px #b6a9a978, 1px 0px 3rem 3px #db4315;\n    background-color: #000000bf;\n}\n\nbutton {\n    border-radius: 10px;\n    border: 2px solid orangered;\n    color: white;\n    box-shadow: 0px 0px 1px 0.5px orange;\n    background-color: var(--ship-bg-colour);\n}\n\nbutton:hover {\n    background-color: black;\n}\n\n.game-container {\n    display: flex;\n    flex-direction: column;\n    background-color: #262626;\n    z-index: 1;\n}\n\n.game-display {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-content: center;\n    align-items: center;\n    justify-items: center;\n}\n\n.game-board-container, .game-toolbar {\n    display: flex;\n    justify-content: center;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(10, minmax(10px, 60px));\n    justify-content: center;\n    max-width: 90%;\n    border: 1px solid black;\n}\n\n.game-cell {\n    border: 1px solid black;\n    background-color: #3987c9;\n    aspect-ratio: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.pin {\n    border: 1px solid black;\n    background-color: black;\n    width: 35%;\n    height: 35%;\n    border-radius: 20px;\n}\n\n#attacking .game-cell:not(.attacked):not(.ship-attacked){\n    cursor: pointer;\n}\n\nheader, dialog {\n    font-size: 3.5rem;\n    letter-spacing: 0.2rem;\n    font-weight: bolder;\n    text-shadow: 0px 2px 2px orange, 0px 0px 0.5rem red;\n    box-shadow:  inset 0px 0px 7px 9px #b6a9a978, 1px 0px 3rem 3px #db4315;\n    background-color: #000000bf;\n    z-index: 2;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship {\n    background-color: var(--ship-bg-colour);\n}\n\n.game-cell.ship-attacked {\n    background-color: var(--ship-bg-colour);\n}\n\n\n.attacked .pin {\n    background-color: white;\n    box-shadow: inset 0px 0px 5px 2px grey;\n}\n\n.game-cell.ship-attacked .pin {\n    background-color: red;\n    box-shadow: inset 0px 0px 5px 2px darkred;\n}\n\n#display-winner {\n    font-size: 3rem;\n    letter-spacing: 0.1rem;\n}\n\n#randomise-ships {\n    font-size: 2rem;\n    margin: 5px;\n    padding: 5px 10px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 500px) {\n    .game-display {\n        grid-template-rows: 1fr 1fr;\n        grid-template-columns: 1fr;\n        row-gap: 10px;\n    }\n    .game-display {\n        margin: 10px;\n    }\n}\n\n@media only screen and (max-height: 750px) {\n    .game-board {\n        max-width: 70%;\n    }\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],c=r.base?A[0]+r.base:A[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=t(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var A=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),A=t.n(s),c=t(540),d=t.n(c),l=t(113),p=t.n(l),u=t(208),h={};h.styleTagTransform=p(),h.setAttributes=A(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(u.A,h),u.A&&u.A.locals&&u.A.locals;class m{constructor(n){this.length=n,this.hits=0}hit(){this.hits+=1}isSunk(){return this.length<=this.hits}}class g{constructor(n,e){this.height=n,this.width=e,this.ships=[];const t=new Array(e);for(let r=0;r<e;r+=1){t[r]=new Array(n);for(let e=0;e<n;e+=1){const n={ship:null,isAttacked:!1};t[r][e]=n}}this.boardCoordinates=t}receiveAttack(n,e){return this.boardCoordinates[n][e].isAttacked=!0,!!this.boardCoordinates[n][e].ship&&(this.boardCoordinates[n][e].ship.hit(),!0)}placeShip(n,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"horizontal";const o=new m(t);if(this.ships.push(o),1!==t)for(let a=0;a<t;a+=1)"horizontal"===r?this.boardCoordinates[n+a][e].ship=o:this.boardCoordinates[n][e+a].ship=o;else this.boardCoordinates[n][e].ship=o}allShipsSunk(){return this.ships.every((n=>n.isSunk()))}}class x{constructor(n){this.type=n,this.gameboard=new g(10,10)}}function f(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}function C(n){const{gameboard:e}=n;let t=!1,r=null,o=null;const a=n=>{const e=document.createElement("div"),r=document.createElement("div");return e.classList.add("game-cell"),r.classList.add("pin"),n.ship&&n.isAttacked?e.classList.add("ship-attacked"):n.ship&&t?e.classList.add("ship"):n.isAttacked&&e.classList.add("attacked"),e.appendChild(r),e};return{createGrid:()=>{(()=>{const n=document.createElement("div");n.classList.add("game-board");for(let t=0;t<e.height;t+=1)for(let r=0;r<e.width;r+=1)n.appendChild(a(e.boardCoordinates[t][r]));const r=t?"ship":"attacking";document.querySelector(`#${r}`).innerHTML="",document.querySelector(`#${r}`).appendChild(n)})(),t||(()=>{if(null===o)return;r=new AbortController;const n=Array.from(document.querySelectorAll("#attacking .game-cell"));let t=0;for(let a=0;a<e.width;a+=1)for(let i=0;i<e.height;i+=1)e.boardCoordinates[a][i].isAttacked||n[t].addEventListener("click",(()=>{e.receiveAttack(a,i),o()&&r.abort()}),{signal:r.signal}),t+=1})()},toggleShowShips:()=>(t=!t,t),setTurnEvent:n=>{o=n}}}const b=[2,3,3,4,5],B=10;function I(n,e){return n.allShipsSunk()||e.allShipsSunk()}function y(n,e,t,r,o){if("horizontal"===r){if(n+t>B)return!1;for(let r=0;r<t;r+=1)if(o.boardCoordinates[n+r][e].ship)return!1}if("vertical"===r){if(e+t>B)return!1;for(let r=0;r<t;r+=1)if(o.boardCoordinates[n][e+r].ship)return!1}return!0}function v(n){for(let e=0;e<b.length;e+=1){let[t,r]=f();const o=["horizontal","vertical"][Math.floor(2*Math.random())];for(;!y(t,r,b[e],o,n.gameboard);)[t,r]=f();n.gameboard.placeShip(t,r,b[e],o)}}function k(){!function(n,e){const t=document.getElementById("display-winner");v(n),v(e);const r=C(n),o=C(e),a=function(n){let e=null,t=[],r=[],o=null;return{attack:()=>{let a=null,i=null;null===e?[a,i]=(()=>{let[e,t]=f();for(;n.boardCoordinates[e][t].isAttacked;)[e,t]=f();return[e,t]})():({x:a,y:i}=e),n.receiveAttack(a,i)&&(e={x:a,y:i},(()=>{const{x:o,y:a}=e;o>0&&!n.boardCoordinates[o-1][a].isAttacked&&t.push([o-1,a]),o+1<B&&!n.boardCoordinates[o+1][a].isAttacked&&t.push([o+1,a]),a>0&&!n.boardCoordinates[o][a-1].isAttacked&&r.push([o,a-1]),a+1<B&&!n.boardCoordinates[o][a+1].isAttacked&&r.push([o,a+1])})(),"h"===o?r=[]:"v"===o&&(t=[])),t.length>0?([a,i]=t.shift(),e={x:a,y:i},o="h"):r.length>0?([a,i]=r.shift(),e={x:a,y:i},o="v"):(e=null,o=null)}}}(n.gameboard);o.setTurnEvent((()=>(o.createGrid(),I(n.gameboard,e.gameboard)?(t.innerHTML="Player 1 wins!",t.showModal(),!0):(a.attack(),r.createGrid(),!!I(n.gameboard,e.gameboard)&&(t.innerHTML="Player 2 wins!",t.showModal(),!0))))),r.toggleShowShips(),r.createGrid(),o.createGrid()}(new x("human"),new x("computer"))}document.getElementById("randomise-ships").addEventListener("click",(()=>k())),k()})()})();
//# sourceMappingURL=app.bundle.js.map