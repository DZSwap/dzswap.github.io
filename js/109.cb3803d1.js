(self["webpackChunkdz_swap"]=self["webpackChunkdz_swap"]||[]).push([[109],{5109:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(6252),o=n(3577),u=n(6773);(0,r.dD)("data-v-5a393090");const i={class:"invite-page container"},a={class:"poster-box"},l=(0,r._)("img",{class:"logo",src:u.Z,alt:""},null,-1),s={class:"qr-code"},c=["disabled","data-clipboard-text"],f={class:"info-box"},m={class:"link"};function h(e,t,n,u,h,d){const g=(0,r.up)("qrcode-vue");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",a,[l,(0,r._)("div",s,[(0,r.Wm)(g,{value:u.state.link,size:160,level:"H",class:"qr-code-img"},null,8,["value"])]),(0,r._)("div",null,(0,o.zw)(e.$t("shareView.scanTip")),1),(0,r._)("button",{class:"primary-btn copy-btn",disabled:!u.state.link,"data-clipboard-text":u.state.link,onClick:t[0]||(t[0]=e=>u.onCopy(".copy-btn"))},(0,o.zw)(e.$t("copy")),9,c),(0,r._)("div",f,[(0,r._)("div",m,(0,o.zw)(u.state.link),1)])])])}(0,r.Cn)();n(1087);var d=n(5803),g=n(2262),v=n(2976),_=n.n(v),p=(n(558),n(2152)),b=n.n(p),E=n(7175),y=n(6251),C=n(2005),L=n(4986);
/*!
  * vue-i18n v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const T="9.1.7";function k(){let e=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(e=!0,(0,E.E9)().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(e=!0,(0,E.E9)().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __VUE_I18N_PROD_DEVTOOLS__&&(e=!0,(0,E.E9)().__VUE_I18N_PROD_DEVTOOLS__=!1),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&((0,E.E9)().__INTLIFY_PROD_DEVTOOLS__=!1)}function w(e,...t){return(0,C.t)(e,null,void 0)}const D="__INTLIFY_META__",P=(0,E.je)("__transrateVNode"),A=(0,E.je)("__datetimeParts"),B=(0,E.je)("__numberParts"),N=(0,E.je)("__enableEmitter"),S=(0,E.je)("__disableEmitter"),R=(0,E.je)("__setPluralRules");(0,E.je)("__intlifyMeta");let I=0;function M(e){return(t,n,o,u)=>e(n,o,(0,r.FN)()||void 0,u)}function O(e,t){const{messages:n,__i18n:r}=t,o=(0,E.PO)(n)?n:(0,E.kJ)(r)?{}:{[e]:{}};if((0,E.kJ)(r)&&r.forEach((({locale:e,resource:t})=>{e?(o[e]=o[e]||{},F(t,o[e])):F(t,o)})),t.flatJson)for(const u in o)(0,E.RI)(o,u)&&(0,L.iq)(o[u]);return o}const H=e=>!(0,E.Kn)(e)||(0,E.kJ)(e);function F(e,t){if(H(e)||H(t))throw w(20);for(const n in e)(0,E.RI)(e,n)&&(H(e[n])||H(t[n])?t[n]=e[n]:F(e[n],t[n]))}const x=()=>{const e=(0,r.FN)();return e&&e.type[D]?{[D]:e.type[D]}:null};function U(e={}){const{__root:t}=e,n=void 0===t;let o=!(0,E.jn)(e.inheritLocale)||e.inheritLocale;const u=(0,g.iH)(t&&o?t.locale.value:(0,E.HD)(e.locale)?e.locale:"en-US"),i=(0,g.iH)(t&&o?t.fallbackLocale.value:(0,E.HD)(e.fallbackLocale)||(0,E.kJ)(e.fallbackLocale)||(0,E.PO)(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:u.value),a=(0,g.iH)(O(u.value,e)),l=(0,g.iH)((0,E.PO)(e.datetimeFormats)?e.datetimeFormats:{[u.value]:{}}),s=(0,g.iH)((0,E.PO)(e.numberFormats)?e.numberFormats:{[u.value]:{}});let c=t?t.missingWarn:!(0,E.jn)(e.missingWarn)&&!(0,E.Kj)(e.missingWarn)||e.missingWarn,f=t?t.fallbackWarn:!(0,E.jn)(e.fallbackWarn)&&!(0,E.Kj)(e.fallbackWarn)||e.fallbackWarn,m=t?t.fallbackRoot:!(0,E.jn)(e.fallbackRoot)||e.fallbackRoot,h=!!e.fallbackFormat,d=(0,E.mf)(e.missing)?e.missing:null,v=(0,E.mf)(e.missing)?M(e.missing):null,_=(0,E.mf)(e.postTranslation)?e.postTranslation:null,p=!(0,E.jn)(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter;const C=t?t.modifiers:(0,E.PO)(e.modifiers)?e.modifiers:{};let k,D=e.pluralRules||t&&t.pluralRules;function N(){return(0,y.kA)({version:T,locale:u.value,fallbackLocale:i.value,messages:a.value,datetimeFormats:l.value,numberFormats:s.value,modifiers:C,pluralRules:D,missing:null===v?void 0:v,missingWarn:c,fallbackWarn:f,fallbackFormat:h,unresolving:!0,postTranslation:null===_?void 0:_,warnHtmlMessage:p,escapeParameter:b,__datetimeFormatters:(0,E.PO)(k)?k.__datetimeFormatters:void 0,__numberFormatters:(0,E.PO)(k)?k.__numberFormatters:void 0,__v_emitter:(0,E.PO)(k)?k.__v_emitter:void 0,__meta:{framework:"vue"}})}function S(){return[u.value,i.value,a.value,l.value,s.value]}k=N(),(0,y.zn)(k,u.value,i.value);const H=(0,g.Fl)({get:()=>u.value,set:e=>{u.value=e,k.locale=u.value}}),U=(0,g.Fl)({get:()=>i.value,set:e=>{i.value=e,k.fallbackLocale=i.value,(0,y.zn)(k,u.value,e)}}),V=(0,g.Fl)((()=>a.value)),j=(0,g.Fl)((()=>l.value)),z=(0,g.Fl)((()=>s.value));function K(){return(0,E.mf)(_)?_:null}function Y(e){_=e,k.postTranslation=e}function G(){return d}function W(e){null!==e&&(v=M(e)),d=e,k.missing=v}function q(e,n,r,o,u,i){let a;if(S(),__INTLIFY_PROD_DEVTOOLS__)try{(0,y.VB)(x()),a=e(k)}finally{(0,y.VB)(null)}else a=e(k);if((0,E.hj)(a)&&a===y.zS){const[e,r]=n();return t&&m?o(t):u(e)}if(i(a))return a;throw w(14)}function J(...e){return q((t=>(0,y.Iu)(t,...e)),(()=>(0,y.cr)(...e)),"translate",(t=>t.t(...e)),(e=>e),(e=>(0,E.HD)(e)))}function X(...e){const[t,n,r]=e;if(r&&!(0,E.Kn)(r))throw w(15);return J(t,n,(0,E.f0)({resolvedMessage:!0},r||{}))}function Z(...e){return q((t=>(0,y.t2)(t,...e)),(()=>(0,y.Ls)(...e)),"datetime format",(t=>t.d(...e)),(()=>y.In),(e=>(0,E.HD)(e)))}function Q(...e){return q((t=>(0,y.Rx)(t,...e)),(()=>(0,y.sb)(...e)),"number format",(t=>t.n(...e)),(()=>y.In),(e=>(0,E.HD)(e)))}function $(e){return e.map((e=>(0,E.HD)(e)?(0,r.Wm)(r.xv,null,e,0):e))}const ee=e=>e,te={normalize:$,interpolate:ee,type:"vnode"};function ne(...e){return q((t=>{let n;const r=t;try{r.processor=te,n=(0,y.Iu)(r,...e)}finally{r.processor=null}return n}),(()=>(0,y.cr)(...e)),"translate",(t=>t[P](...e)),(e=>[(0,r.Wm)(r.xv,null,e,0)]),(e=>(0,E.kJ)(e)))}function re(...e){return q((t=>(0,y.Rx)(t,...e)),(()=>(0,y.sb)(...e)),"number format",(t=>t[B](...e)),(()=>[]),(e=>(0,E.HD)(e)||(0,E.kJ)(e)))}function oe(...e){return q((t=>(0,y.t2)(t,...e)),(()=>(0,y.Ls)(...e)),"datetime format",(t=>t[A](...e)),(()=>[]),(e=>(0,E.HD)(e)||(0,E.kJ)(e)))}function ue(e){D=e,k.pluralRules=D}function ie(e,t){const n=(0,E.HD)(t)?t:u.value,r=se(n);return null!==(0,L.GK)(r,e)}function ae(e){let t=null;const n=(0,y.Sv)(k,i.value,u.value);for(let r=0;r<n.length;r++){const o=a.value[n[r]]||{},u=(0,L.GK)(o,e);if(null!=u){t=u;break}}return t}function le(e){const n=ae(e);return null!=n?n:t&&t.tm(e)||{}}function se(e){return a.value[e]||{}}function ce(e,t){a.value[e]=t,k.messages=a.value}function fe(e,t){a.value[e]=a.value[e]||{},F(t,a.value[e]),k.messages=a.value}function me(e){return l.value[e]||{}}function he(e,t){l.value[e]=t,k.datetimeFormats=l.value,(0,y.R7)(k,e,t)}function de(e,t){l.value[e]=(0,E.f0)(l.value[e]||{},t),k.datetimeFormats=l.value,(0,y.R7)(k,e,t)}function ge(e){return s.value[e]||{}}function ve(e,t){s.value[e]=t,k.numberFormats=s.value,(0,y.bB)(k,e,t)}function _e(e,t){s.value[e]=(0,E.f0)(s.value[e]||{},t),k.numberFormats=s.value,(0,y.bB)(k,e,t)}I++,t&&((0,r.YP)(t.locale,(e=>{o&&(u.value=e,k.locale=e,(0,y.zn)(k,u.value,i.value))})),(0,r.YP)(t.fallbackLocale,(e=>{o&&(i.value=e,k.fallbackLocale=e,(0,y.zn)(k,u.value,i.value))})));const pe={id:I,locale:H,fallbackLocale:U,get inheritLocale(){return o},set inheritLocale(e){o=e,e&&t&&(u.value=t.locale.value,i.value=t.fallbackLocale.value,(0,y.zn)(k,u.value,i.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:V,datetimeFormats:j,numberFormats:z,get modifiers(){return C},get pluralRules(){return D||{}},get isGlobal(){return n},get missingWarn(){return c},set missingWarn(e){c=e,k.missingWarn=c},get fallbackWarn(){return f},set fallbackWarn(e){f=e,k.fallbackWarn=f},get fallbackRoot(){return m},set fallbackRoot(e){m=e},get fallbackFormat(){return h},set fallbackFormat(e){h=e,k.fallbackFormat=h},get warnHtmlMessage(){return p},set warnHtmlMessage(e){p=e,k.warnHtmlMessage=e},get escapeParameter(){return b},set escapeParameter(e){b=e,k.escapeParameter=e},t:J,rt:X,d:Z,n:Q,te:ie,tm:le,getLocaleMessage:se,setLocaleMessage:ce,mergeLocaleMessage:fe,getDateTimeFormat:me,setDateTimeFormat:he,mergeDateTimeFormat:de,getNumberFormat:ge,setNumberFormat:ve,mergeNumberFormat:_e,getPostTranslationHandler:K,setPostTranslationHandler:Y,getMissingHandler:G,setMissingHandler:W,[P]:ne,[B]:re,[A]:oe,[R]:ue};return pe}const V={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};(0,E.f0)({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>(0,E.hj)(e)||!isNaN(e)}},V);function j({slots:e},t){return 1===t.length&&"default"===t[0]?e.default?e.default():[]:t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),{})}function z(e,t,n,o){const{slots:u,attrs:i}=t;return()=>{const t={part:!0};let a={};e.locale&&(t.locale=e.locale),(0,E.HD)(e.format)?t.key=e.format:(0,E.Kn)(e.format)&&((0,E.HD)(e.format.key)&&(t.key=e.format.key),a=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?(0,E.f0)({},t,{[r]:e.format[r]}):t),{}));const l=o(e.value,t,a);let s=[t.key];(0,E.kJ)(l)?s=l.map(((e,t)=>{const n=u[e.type];return n?n({[e.type]:e.value,index:t,parts:l}):[e.value]})):(0,E.HD)(l)&&(s=[l]);const c=(0,E.f0)({},i);return(0,E.HD)(e.tag)||(0,E.Kn)(e.tag)?(0,r.h)(e.tag,c,s):(0,r.h)(r.HY,c,s)}}const K=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],Y=((0,E.f0)({value:{type:Number,required:!0},format:{type:[String,Object]}},V),["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"]);(0,E.f0)({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},V);let G;function W(e,t){if(G){let n;t&&"groupId"in t&&(n=t.groupId,delete t.groupId),G.addTimelineEvent({layerId:"vue-i18n-timeline",event:{title:e,groupId:n,time:Date.now(),meta:{},data:t||{},logType:"compile-error"===e?"error":"fallback"===e||"missing"===e?"warning":"default"}})}}function q(e={}){const t=(0,r.FN)();if(null==t)throw w(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw w(17);const n=(0,r.f3)(t.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw w(22);const o="composition"===n.mode?n.global:n.global.__composer,u=(0,E.Qr)(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if("global"===u){let n=(0,E.Kn)(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(n=O(o.locale.value,{messages:n,__i18n:t.type.__i18nGlobal}));const r=Object.keys(n);if(r.length&&r.forEach((e=>{o.mergeLocaleMessage(e,n[e])})),(0,E.Kn)(e.datetimeFormats)){const t=Object.keys(e.datetimeFormats);t.length&&t.forEach((t=>{o.mergeDateTimeFormat(t,e.datetimeFormats[t])}))}if((0,E.Kn)(e.numberFormats)){const t=Object.keys(e.numberFormats);t.length&&t.forEach((t=>{o.mergeNumberFormat(t,e.numberFormats[t])}))}return o}if("parent"===u){let e=J(n,t);return null==e&&(e=o),e}if("legacy"===n.mode)throw w(18);const i=n;let a=i.__getInstance(t);if(null==a){const n=t.type,r=(0,E.f0)({},e);n.__i18n&&(r.__i18n=n.__i18n),o&&(r.__root=o),a=U(r),X(i,t,a),i.__setInstance(t,a)}return a}function J(e,t){let n=null;const r=t.root;let o=t.parent;while(null!=o){const t=e;if("composition"===e.mode)n=t.__getInstance(o);else{const e=t.__getInstance(o);null!=e&&(n=e.__composer)}if(null!=n)break;if(r===o)break;o=o.parent}return n}function X(e,t,n){let o=null;(0,r.bv)((()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&t.vnode.el){t.vnode.el.__VUE_I18N__=n,o=(0,E.z5)();const e=n;e[N]&&e[N](o),o.on("*",W)}}),t),(0,r.Ah)((()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&t.vnode.el&&t.vnode.el.__VUE_I18N__){o&&o.off("*",W);const e=n;e[S]&&e[S](),delete t.vnode.el.__VUE_I18N__}e.__deleteInstance(t)}),t)}if(k(),__INTLIFY_PROD_DEVTOOLS__){const e=(0,E.E9)();e.__INTLIFY__=!0,(0,y.Ve)(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var Z={name:"Index",components:{QrcodeVue:_()},setup(){const e=(0,r.f3)("chainInfo"),{t:t}=q(),n=(0,g.qj)({link:""});(0,r.m0)((()=>{e.isActive&&(n.link=`${window.location.origin}/#/?code=${e.account}`)}));const o=e=>{n.clipboard=new(b())(e),n.clipboard.on("success",(function(e){(0,d.Z)(t("copySuccess")),e.clearSelection()}))};return{state:n,chainInfo:e,onCopy:o}}};Z.render=h,Z.__scopeId="data-v-5a393090";var Q=Z},2976:function(e,t,n){
/*!
 * qrcode.vue v3.3.2
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 */
(function(t,r){e.exports=r(n(9812))})(0,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)},n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r=n;function o(e){this.mode=r.MODE_8BIT_BYTE,this.data=e}o.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var u=o,i={L:1,M:0,Q:3,H:2},a=i;function l(e,t){this.totalCount=e,this.dataCount=t}l.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],l.getRSBlocks=function(e,t){var n=l.getRsBlockTable(e,t);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,o=new Array,u=0;u<r;u++)for(var i=n[3*u+0],a=n[3*u+1],s=n[3*u+2],c=0;c<i;c++)o.push(new l(a,s));return o},l.getRsBlockTable=function(e,t){switch(t){case a.L:return l.RS_BLOCK_TABLE[4*(e-1)+0];case a.M:return l.RS_BLOCK_TABLE[4*(e-1)+1];case a.Q:return l.RS_BLOCK_TABLE[4*(e-1)+2];case a.H:return l.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var s=l;function c(){this.buffer=new Array,this.length=0}c.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var f=c,m={glog:function(e){if(e<1)throw new Error("glog("+e+")");return m.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return m.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)m.EXP_TABLE[h]=1<<h;for(h=8;h<256;h++)m.EXP_TABLE[h]=m.EXP_TABLE[h-4]^m.EXP_TABLE[h-5]^m.EXP_TABLE[h-6]^m.EXP_TABLE[h-8];for(h=0;h<255;h++)m.LOG_TABLE[m.EXP_TABLE[h]]=h;var d=m,g=d;function v(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);var n=0;while(n<e.length&&0==e[n])n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}v.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=g.gexp(g.glog(this.get(n))+g.glog(e.get(r)));return new v(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=g.glog(this.get(0))-g.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=g.gexp(g.glog(e.get(r))+t);return new v(n,0).mod(e)}};var _=v,p=n,b=_,E=d,y={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},C={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var t=e<<10;while(C.getBCHDigit(t)-C.getBCHDigit(C.G15)>=0)t^=C.G15<<C.getBCHDigit(t)-C.getBCHDigit(C.G15);return(e<<10|t)^C.G15_MASK},getBCHTypeNumber:function(e){var t=e<<12;while(C.getBCHDigit(t)-C.getBCHDigit(C.G18)>=0)t^=C.G18<<C.getBCHDigit(t)-C.getBCHDigit(C.G18);return e<<12|t},getBCHDigit:function(e){var t=0;while(0!=e)t++,e>>>=1;return t},getPatternPosition:function(e){return C.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case y.PATTERN000:return(t+n)%2==0;case y.PATTERN001:return t%2==0;case y.PATTERN010:return n%3==0;case y.PATTERN011:return(t+n)%3==0;case y.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case y.PATTERN101:return t*n%2+t*n%3==0;case y.PATTERN110:return(t*n%2+t*n%3)%2==0;case y.PATTERN111:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new b([1],0),n=0;n<e;n++)t=t.multiply(new b([1,E.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case p.MODE_NUMBER:return 10;case p.MODE_ALPHA_NUM:return 9;case p.MODE_8BIT_BYTE:return 8;case p.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case p.MODE_NUMBER:return 12;case p.MODE_ALPHA_NUM:return 11;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case p.MODE_NUMBER:return 14;case p.MODE_ALPHA_NUM:return 13;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var o=0;o<t;o++){for(var u=0,i=e.isDark(r,o),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var l=-1;l<=1;l++)o+l<0||t<=o+l||0==a&&0==l||i==e.isDark(r+a,o+l)&&u++;u>5&&(n+=3+u-5)}for(r=0;r<t-1;r++)for(o=0;o<t-1;o++){var s=0;e.isDark(r,o)&&s++,e.isDark(r+1,o)&&s++,e.isDark(r,o+1)&&s++,e.isDark(r+1,o+1)&&s++,0!=s&&4!=s||(n+=3)}for(r=0;r<t;r++)for(o=0;o<t-6;o++)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(o=0;o<t;o++)for(r=0;r<t-6;r++)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);var c=0;for(o=0;o<t;o++)for(r=0;r<t;r++)e.isDark(r,o)&&c++;var f=Math.abs(100*c/t/t-50)/5;return n+=10*f,n}},L=C,T=u,k=s,w=f,D=L,P=_;function A(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var B=A.prototype;B.addData=function(e){var t=new T(e);this.dataList.push(t),this.dataCache=null},B.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},B.getModuleCount=function(){return this.moduleCount},B.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=k.getRSBlocks(e,this.errorCorrectLevel),n=new w,r=0,o=0;o<t.length;o++)r+=t[o].dataCount;for(o=0;o<this.dataList.length;o++){var u=this.dataList[o];n.put(u.mode,4),n.put(u.getLength(),D.getLengthInBits(u.mode,e)),u.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},B.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=A.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},B.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},B.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=D.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},B.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n),o=1;this.make();for(var u=0;u<this.modules.length;u++)for(var i=u*o,a=0;a<this.modules[u].length;a++){var l=a*o,s=this.modules[u][a];s&&(r.beginFill(0,100),r.moveTo(l,i),r.lineTo(l+o,i),r.lineTo(l+o,i+o),r.lineTo(l,i+o),r.endFill())}return r},B.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},B.setupPositionAdjustPattern=function(){for(var e=D.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],o=e[n];if(null==this.modules[r][o])for(var u=-2;u<=2;u++)for(var i=-2;i<=2;i++)this.modules[r+u][o+i]=-2==u||2==u||-2==i||2==i||0==u&&0==i}},B.setupTypeNumber=function(e){for(var t=D.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},B.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=D.getBCHTypeInfo(n),o=0;o<15;o++){var u=!e&&1==(r>>o&1);o<6?this.modules[o][8]=u:o<8?this.modules[o+1][8]=u:this.modules[this.moduleCount-15+o][8]=u}for(o=0;o<15;o++){u=!e&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=u:o<9?this.modules[8][15-o-1+1]=u:this.modules[8][15-o-1]=u}this.modules[this.moduleCount-8][8]=!e},B.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,o=7,u=0,i=this.moduleCount-1;i>0;i-=2){6==i&&i--;while(1){for(var a=0;a<2;a++)if(null==this.modules[r][i-a]){var l=!1;u<e.length&&(l=1==(e[u]>>>o&1));var s=D.getMask(t,r,i-a);s&&(l=!l),this.modules[r][i-a]=l,o--,-1==o&&(u++,o=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}}},A.PAD0=236,A.PAD1=17,A.createData=function(e,t,n){for(var r=k.getRSBlocks(e,t),o=new w,u=0;u<n.length;u++){var i=n[u];o.put(i.mode,4),o.put(i.getLength(),D.getLengthInBits(i.mode,e)),i.write(o)}var a=0;for(u=0;u<r.length;u++)a+=r[u].dataCount;if(o.getLengthInBits()>8*a)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*a+")");o.getLengthInBits()+4<=8*a&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*a)break;if(o.put(A.PAD0,8),o.getLengthInBits()>=8*a)break;o.put(A.PAD1,8)}return A.createBytes(o,r)},A.createBytes=function(e,t){for(var n=0,r=0,o=0,u=new Array(t.length),i=new Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,s=t[a].totalCount-l;r=Math.max(r,l),o=Math.max(o,s),u[a]=new Array(l);for(var c=0;c<u[a].length;c++)u[a][c]=255&e.buffer[c+n];n+=l;var f=D.getErrorCorrectPolynomial(s),m=new P(u[a],f.getLength()-1),h=m.mod(f);i[a]=new Array(f.getLength()-1);for(c=0;c<i[a].length;c++){var d=c+h.getLength()-i[a].length;i[a][c]=d>=0?h.get(d):0}}var g=0;for(c=0;c<t.length;c++)g+=t[c].totalCount;var v=new Array(g),_=0;for(c=0;c<r;c++)for(a=0;a<t.length;a++)c<u[a].length&&(v[_++]=u[a][c]);for(c=0;c<o;c++)for(a=0;a<t.length;a++)c<i[a].length&&(v[_++]=i[a][c]);return v};var N=A,S=N,R=i,I=function(e,t){t=t||{};var n=new S(t.typeNumber||-1,t.errorCorrectLevel||R.H);return n.addData(e),n.make(),n};I.ErrorCorrectLevel=R;var M=I,O="H",H=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function F(e,t){return M(U(e),{typeNumber:-1,errorCorrectLevel:t})}function x(e){return e in M.ErrorCorrectLevel}function U(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}function V(e,t){void 0===t&&(t=0);var n=[];return e.forEach((function(e,r){var o=null;e.forEach((function(u,i){if(!u&&null!==o)return n.push("M"+(o+t)+" "+(r+t)+"h"+(i-o)+"v1H"+(o+t)+"z"),void(o=null);if(i!==e.length-1)u&&null===o&&(o=i);else{if(!u)return;null===o?n.push("M"+(i+t)+","+(r+t)+" h1v1H"+(i+t)+"z"):n.push("M"+(o+t)+","+(r+t)+" h"+(i+1-o)+"v1H"+(o+t)+"z")}}))})),n.join("")}var j={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:O,validator:function(e){return x(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},z=t(t({},j),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),K=e.defineComponent({name:"QRCodeSvg",props:j,setup:function(t){var n=e.ref(0),r=e.ref(""),o=function(){var e=t.value,o=t.level,u=t.margin,i=F(e,M.ErrorCorrectLevel[o]).modules;n.value=i.length+2*u,r.value=V(i,u)};return o(),e.onUpdated(o),function(){return e.h("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+n.value+" "+n.value},[e.h("path",{fill:t.background,d:"M0,0 h"+n.value+"v"+n.value+"H0z"}),e.h("path",{fill:t.foreground,d:r.value})])}}}),Y=e.defineComponent({name:"QRCodeCanvas",props:j,setup:function(t){var n=e.ref(null),r=function(){var e=t.value,r=t.level,o=t.size,u=t.margin,i=t.background,a=t.foreground,l=F(e,M.ErrorCorrectLevel[r]).modules,s=l.length+2*u,c=n.value;if(c){var f=c.getContext("2d");if(f){var m=window.devicePixelRatio||1,h=o/s*m;c.height=c.width=o*m,f.scale(h,h),f.fillStyle=i,f.fillRect(0,0,s,s),f.fillStyle=a,H?f.fill(new Path2D(V(l,u))):l.forEach((function(e,t){e.forEach((function(e,n){e&&f.fillRect(n+u,t+u,1,1)}))}))}}};return e.onMounted(r),e.onUpdated(r),function(){return e.h("canvas",{ref:n,style:{width:t.size+"px",height:t.size+"px"}})}}}),G=e.defineComponent({name:"Qrcode",render:function(){var t=this.$props,n=t.renderAs,r=t.value,o=t.size,u=t.margin,i=t.level,a=t.background,l=t.foreground,s=o>>>0,c=u>>>0,f=x(i)?i:O;return e.h("svg"===n?K:Y,{value:r,size:s,margin:c,level:f,background:a,foreground:l})},props:z});return G}))},6773:function(e,t,n){"use strict";t["Z"]=n.p+"img/logo.e54a417e.png"},9812:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX},compile:function(){return o}});var r=n(9963);const o=()=>{0}}}]);