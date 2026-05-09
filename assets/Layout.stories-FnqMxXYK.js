import{a as e,n as t,t as n}from"./chunk-DnJy8xQt.js";import{a as r,i,n as a,r as o,t as s,u as c}from"./iframe-Gp1nDcnF.js";import{t as l}from"./compiler-runtime-CnmquwS7.js";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}var d=t((()=>{}));function f(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function p(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var m,h,g=t((()=>{m=!1,h=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!m:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(p(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=f(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}()})),_,v,y,b,x,S,C,w,ee,T=t((()=>{_=`-ms-`,v=`-moz-`,y=`-webkit-`,b=`comm`,x=`rule`,S=`decl`,C=`@import`,w=`@keyframes`,ee=`@layer`}));function te(e,t){return A(e,0)^45?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}function E(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function k(e,t){return e.indexOf(t)}function A(e,t){return e.charCodeAt(t)|0}function j(e,t,n){return e.slice(t,n)}function M(e){return e.length}function ne(e){return e.length}function re(e,t){return t.push(e),e}function ie(e,t){return e.map(t).join(``)}var ae,oe,se,ce=t((()=>{ae=Math.abs,oe=String.fromCharCode,se=Object.assign}));function le(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:we,column:F,length:o,return:``}}function ue(e,t){return se(le(``,null,null,``,null,null,0),e,{length:-e.length},t)}function de(){return L}function fe(){return L=I>0?A(R,--I):0,F--,L===10&&(F=1,we--),L}function N(){return L=I<Te?A(R,I++):0,F++,L===10&&(F=1,we++),L}function P(){return A(R,I)}function pe(){return I}function me(e,t){return j(R,e,t)}function he(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ge(e){return we=F=1,Te=M(R=e),I=0,[]}function _e(e){return R=``,e}function ve(e){return E(me(I-1,xe(e===91?e+2:e===40?e+1:e)))}function ye(e){for(;(L=P())&&L<33;)N();return he(e)>2||he(L)>3?``:` `}function be(e,t){for(;--t&&N()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return me(e,pe()+(t<6&&P()==32&&N()==32))}function xe(e){for(;N();)switch(L){case e:return I;case 34:case 39:e!==34&&e!==39&&xe(L);break;case 40:e===41&&xe(e);break;case 92:N();break}return I}function Se(e,t){for(;N()&&e+L!==57&&!(e+L===84&&P()===47););return`/*`+me(t,I-1)+`*`+oe(e===47?e:N())}function Ce(e){for(;!he(P());)N();return me(e,I)}var we,F,Te,I,L,R,Ee=t((()=>{ce(),we=1,F=1,Te=0,I=0,L=0,R=``}));function De(e){return _e(Oe(``,null,null,null,[``],e=ge(e),0,[0],e))}function Oe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=N()){case 40:if(m!=108&&A(C,d-1)==58){k(C+=O(ve(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ve(v);break;case 9:case 10:case 13:case 32:C+=ye(m);break;case 92:C+=be(pe()-1,7);continue;case 47:switch(P()){case 42:case 47:re(Ae(Se(N(),pe()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=M(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=O(C,/\f/g,``)),p>0&&M(C)-d&&re(p>32?je(C+`;`,r,n,d-1):je(O(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(re(S=ke(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Oe(C,t,S,S,b,a,d,s,x);else switch(f===99&&A(C,3)===110?100:f){case 100:case 108:case 109:case 115:Oe(e,S,S,r&&re(ke(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Oe(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+M(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&fe()==125)continue}switch(C+=oe(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(M(C)-1)*_,_=1;break;case 64:P()===45&&(C+=ve(N())),f=P(),u=d=M(y=C+=Ce(pe())),v++;break;case 45:m===45&&M(C)==2&&(h=0)}}return a}function ke(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=ne(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=j(e,d+1,d=ae(h=o[m])),y=e;_<p;++_)(y=E(h>0?f[_]+` `+v:O(v,/&\f/g,f[_])))&&(c[g++]=y);return le(e,t,n,i===0?x:s,c,l,u)}function Ae(e,t,n){return le(e,t,n,b,oe(de()),j(e,2,-2),0)}function je(e,t,n,r){return le(e,t,n,S,j(e,0,r),j(e,r+1,-1),r)}var Me=t((()=>{T(),ce(),Ee()})),Ne=t((()=>{}));function z(e,t){for(var n=``,r=ne(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Pe(e,t,n,r){switch(e.type){case ee:if(e.children.length)break;case C:case S:return e.return=e.return||e.value;case b:return``;case w:return e.return=e.value+`{`+z(e.children,r)+`}`;case x:e.value=e.props.join(`,`)}return M(n=z(e.children,r))?e.return=e.value+`{`+n+`}`:``}var Fe=t((()=>{T(),ce()}));function Ie(e){var t=ne(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Le(e){return function(t){t.root||(t=t.return)&&e(t)}}var Re=t((()=>{ce()})),ze=t((()=>{T(),ce(),Me(),Ne(),Ee(),Fe(),Re()}));function Be(e,t){switch(te(e,t)){case 5103:return y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+v+e+_+e+e;case 6828:case 4268:return y+e+_+e+e;case 6165:return y+e+_+`flex-`+e+e;case 5187:return y+e+O(e,/(\w+).+(:[^]+)/,y+`box-$1$2`+_+`flex-$1$2`)+e;case 5443:return y+e+_+`flex-item-`+O(e,/flex-|-self/,``)+e;case 4675:return y+e+_+`flex-line-pack`+O(e,/align-content|flex-|-self/,``)+e;case 5548:return y+e+_+O(e,`shrink`,`negative`)+e;case 5292:return y+e+_+O(e,`basis`,`preferred-size`)+e;case 6060:return y+`box-`+O(e,`-grow`,``)+y+e+_+O(e,`grow`,`positive`)+e;case 4554:return y+O(e,/([^-])(transform)/g,`$1`+y+`$2`)+e;case 6187:return O(O(O(e,/(zoom-|grab)/,y+`$1`),/(image-set)/,y+`$1`),e,``)+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,y+`box-pack:$3`+_+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+y+e+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,`$1`+y+`$2-$3$1`+v+(A(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~k(e,`stretch`)?Be(O(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(A(e,t+1)!==115)break;case 6444:switch(A(e,M(e)-3-(~k(e,`!important`)&&10))){case 107:return O(e,`:`,`:`+y)+e;case 101:return O(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+y+(A(e,14)===45?`inline-`:``)+`box$3$1`+y+`$2$3$1`+_+`$2box$3`)+e}break;case 5936:switch(A(e,t+11)){case 114:return y+e+_+O(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return y+e+_+O(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return y+e+_+O(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return y+e+_+e+e}return e}var Ve,He,Ue,We,Ge,Ke,qe,Je,Ye=t((()=>{g(),ze(),Ve=function(e,t,n){for(var r=0,i=0;r=i,i=P(),r===38&&i===12&&(t[n]=1),!he(i);)N();return me(e,I)},He=function(e,t){var n=-1,r=44;do switch(he(r)){case 0:r===38&&P()===12&&(t[n]=1),e[n]+=Ve(I-1,t,n);break;case 2:e[n]+=ve(r);break;case 4:if(r===44){e[++n]=P()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=oe(r)}while(r=N());return e},Ue=function(e,t){return _e(He(ge(e),t))},We=new WeakMap,Ge=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!We.get(n))&&!r){We.set(e,!0);for(var i=[],a=Ue(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Ke=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}},qe=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:e.return=Be(e.value,e.length);break;case w:return z([ue(e,{value:O(e.value,`@`,`@`+y)})],r);case x:if(e.length)return ie(e.props,function(t){switch(D(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return z([ue(e,{props:[O(t,/:(read-\w+)/,`:`+v+`$1`)]})],r);case`::placeholder`:return z([ue(e,{props:[O(t,/:(plac\w+)/,`:`+y+`input-$1`)]}),ue(e,{props:[O(t,/:(plac\w+)/,`:`+v+`$1`)]}),ue(e,{props:[O(t,/:(plac\w+)/,_+`input-$1`)]})],r)}return``})}}],Je=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||qe,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[Ge,Ke],l,u=[Pe,Le(function(e){l.insert(e)})],d=Ie(c.concat(r,u)),f=function(e){return z(De(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new h({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p}})),Xe=n((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Ze=n(((e,t)=>{t.exports=Xe()})),Qe=n(((e,t)=>{var n=Ze(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function $e(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var et,tt,nt,rt=t((()=>{et=!0,tt=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||et===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},nt=function(e,t,n){tt(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}}}));function it(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var at=t((()=>{})),ot,st=t((()=>{ot={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}}));function ct(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return B={name:i.name,styles:i.styles,next:B},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)B={name:o.name,styles:o.styles,next:B},o=o.next;return a.styles+`;`}return lt(e,t,n);case`function`:if(e!==void 0){var s=B,c=n(e);return B=s,ct(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function lt(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ct(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:ht(s)&&(r+=gt(a)+`:`+_t(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&dt)throw Error(vt);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)ht(o[c])&&(r+=gt(a)+`:`+_t(a,o[c])+`;`);else{var l=ct(e,t,o);switch(a){case`animation`:case`animationName`:r+=gt(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}function ut(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;B=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=ct(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=ct(n,t,e[o]),r&&(i+=a[o]);yt.lastIndex=0;for(var s=``,c;(c=yt.exec(i))!==null;)s+=`-`+c[1];return{name:it(i)+s,styles:i,next:B}}var dt,ft,pt,mt,ht,gt,_t,vt,yt,B,bt=t((()=>{at(),st(),i(),dt=!1,ft=/[A-Z]|^ms/g,pt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,mt=function(e){return e.charCodeAt(1)===45},ht=function(e){return e!=null&&typeof e!=`boolean`},gt=r(function(e){return mt(e)?e:e.replace(ft,`-$&`).toLowerCase()}),_t=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(pt,function(e,t,n){return B={name:t,styles:n,next:B},t})}return ot[e]!==1&&!mt(e)&&typeof t==`number`&&t!==0?t+`px`:t},vt=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`,yt=/label:\s*([^\s;{]+)\s*(;|$)/g})),xt,St,Ct,wt,Tt=t((()=>{xt=e(c()),St=function(e){return e()},Ct=xt.useInsertionEffect?xt.useInsertionEffect:!1,wt=Ct||St,Ct||xt.useLayoutEffect})),V,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft=t((()=>{V=e(c()),Et=e(c()),Ye(),rt(),bt(),Tt(),Dt=V.createContext(typeof HTMLElement<`u`?Je({key:`css`}):null),Dt.Provider,Ot=function(e){return(0,Et.forwardRef)(function(t,n){return e(t,(0,Et.useContext)(Dt),n)})},kt=V.createContext({}),At={}.hasOwnProperty,jt=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,Mt=function(e,t){var n={};for(var r in t)At.call(t,r)&&(n[r]=t[r]);return n[jt]=e,n},Nt=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return tt(t,n,r),wt(function(){return nt(t,n,r)}),null},Pt=Ot(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[jt],a=[r],o=``;typeof e.className==`string`?o=$e(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=ut(a,void 0,V.useContext(kt));o+=t.key+`-`+s.name;var c={};for(var l in e)At.call(e,l)&&l!==`css`&&l!==jt&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),V.createElement(V.Fragment,null,V.createElement(Nt,{cache:t,serialized:s,isStringTag:typeof i==`string`}),V.createElement(i,c))})})),It,Lt,Rt=t((()=>{Ft(),It=e(c()),Tt(),Qe(),Lt=function(e,t){var n=arguments;if(t==null||!At.call(t,`css`))return It.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=Pt,i[1]=Mt(e,t);for(var a=2;a<r;a++)i[a]=n[a];return It.createElement.apply(null,i)},(function(e){var t;(function(e){})(t||=e.JSX||={})})(Lt||={})})),H,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt=t((()=>{d(),Rt(),bt(),Tt(),rt(),H=e(c()),a(),zt=!1,Bt=o,Vt=function(e){return e!==`theme`},Ht=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Bt:Vt},Ut=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Wt=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return tt(t,n,r),wt(function(){return nt(t,n,r)}),null},Gt=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Ut(t,n,r),c=s||Ht(i),l=!c(`as`);return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&f.push(`label:`+a+`;`),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{var p=d[0];f.push(p[0]);for(var m=d.length,h=1;h<m;h++)f.push(d[h],p[h])}var g=Ot(function(e,t,n){var r=l&&e.as||i,a=``,u=[],d=e;if(e.theme==null){for(var p in d={},e)d[p]=e[p];d.theme=H.useContext(kt)}typeof e.className==`string`?a=$e(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=ut(f.concat(u),t.registered,d);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Ht(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),H.createElement(H.Fragment,null,H.createElement(Wt,{cache:t,serialized:m,isStringTag:typeof r==`string`}),H.createElement(r,g))});return g.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=s,Object.defineProperty(g,`toString`,{value:function(){return o===void 0&&zt?`NO_COMPONENT_SELECTOR`:`.`+o}}),g.withComponent=function(t,r){return e(t,u({},n,r,{shouldForwardProp:Ut(g,r,!0)})).apply(void 0,f)},g}}})),qt,U,Jt=t((()=>{Kt(),Tt(),c(),qt=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),U=Gt.bind(null),qt.forEach(function(e){U[e]=U(e)})})),W,Yt=t((()=>{W={surface:{default:`var(--color-surface-default)`,secondary:`var(--color-surface-secondary)`},text:{primary:{default:`var(--color-text-primary)`,inverse:`var(--color-text-inverse)`}},primary:{default:`var(--color-primary)`,hover:`var(--color-primary-hover)`,pressed:`var(--color-primary-pressed)`,disabled:`var(--color-primary-disabled)`},border:{primary:`var(--color-border-primary)`,highlight:`var(--color-border-highlight)`}}})),Xt,Zt=t((()=>{Xt={space01:`1px`,space02:`2px`,space03:`3px`,space04:`4px`,space05:`8px`,space06:`10px`,space07:`12px`,space08:`24px`,space09:`32px`,space10:`36px`,space11:`40px`}})),Qt,G,K,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn=t((()=>{Qt=l(),Jt(),G=e(c(),1),Yt(),Zt(),K=s(),$t=(0,G.createContext)(null),en=e=>{let t=(0,Qt.c)(55),{header:n,sidebar:r,rail:i,children:a,icons:o}=e,[s,c]=(0,G.useState)(!1),[l,u]=(0,G.useState)(!1),[d,f]=(0,G.useState)(`full`),p,m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{let e=window.matchMedia(`(max-width: 768px)`),t=()=>{let t=e.matches,n=window.matchMedia(`(pointer: coarse)`).matches,r=window.innerWidth<=768&&n;c(t),u(r),t&&x&&f(`rail`),!t&&x&&y&&f(`full`),!t&&x&&!y&&f(`rail`),t&&x&&!y&&f(`rail`),f(e=>t?e===`full`?`collapsed`:e:e===`collapsed`?`full`:e)};return t(),e.addEventListener(`change`,t),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`change`,t),window.removeEventListener(`resize`,t)}},m=[],t[0]=p,t[1]=m):(p=t[0],m=t[1]),(0,G.useEffect)(p,m);let h;t[2]!==l||t[3]!==i?(h=()=>{f(e=>l?e===`full`?`collapsed`:`full`:e===`full`?i?`rail`:`collapsed`:`full`)},t[2]=l,t[3]=i,t[4]=h):h=t[4];let g=h,_;t[5]===o?.menu?_=t[6]:(_=o?.menu??(0,K.jsx)(`span`,{children:`☰`}),t[5]=o?.menu,t[6]=_);let v=_,y=!!r,b=!!n,x=!!i,S=d===`collapsed`,C=!b&&l&&y,w=l&&(y||x)?!0:(y||x)&&(C||b&&S),ee=y&&!b&&!C&&S&&!l,T;t[7]!==s||t[8]!==g||t[9]!==d?(T={variant:d,isMobileViewport:s,toggleSidebar:g},t[7]=s,t[8]=g,t[9]=d,t[10]=T):T=t[10];let te=b||C,E;t[11]!==l||t[12]!==v||t[13]!==i||t[14]!==r||t[15]!==g||t[16]!==d?(E=!l&&(r||i)&&(0,K.jsxs)(cn,{isVisible:d!==`collapsed`||!!i,children:[r&&(0,K.jsx)(on,{onClick:g,children:v}),d===`rail`&&i&&i,d===`full`&&r&&r]}),t[11]=l,t[12]=v,t[13]=i,t[14]=r,t[15]=g,t[16]=d,t[17]=E):E=t[17];let D;t[18]!==x||t[19]!==y||t[20]!==l||t[21]!==v||t[22]!==i||t[23]!==r||t[24]!==g||t[25]!==d?(D=l&&(y||x)&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(dn,{active:d===`full`,onClick:()=>f(`collapsed`)}),(0,K.jsxs)(un,{hasSidebar:y,"data-open":d===`full`,children:[(0,K.jsx)(on,{onClick:g,children:v}),r||i]})]}),t[18]=x,t[19]=y,t[20]=l,t[21]=v,t[22]=i,t[23]=r,t[24]=g,t[25]=d,t[26]=D):D=t[26];let O;t[27]!==b||t[28]!==n||t[29]!==v||t[30]!==C||t[31]!==w||t[32]!==g?(O=(b||C)&&(0,K.jsxs)(nn,{$isDefaultMobile:C,children:[(0,K.jsx)(rn,{$hasToggle:w,children:b?n:(0,K.jsx)(K.Fragment,{})}),w&&(0,K.jsx)(an,{onClick:g,children:v})]}),t[27]=b,t[28]=n,t[29]=v,t[30]=C,t[31]=w,t[32]=g,t[33]=O):O=t[33];let k;t[34]!==v||t[35]!==ee||t[36]!==g?(k=ee&&(0,K.jsx)(sn,{onClick:g,children:v}),t[34]=v,t[35]=ee,t[36]=g,t[37]=k):k=t[37];let A;t[38]!==a||t[39]!==k?(A=(0,K.jsxs)(ln,{children:[k,a]}),t[38]=a,t[39]=k,t[40]=A):A=t[40];let j;t[41]!==x||t[42]!==y||t[43]!==s||t[44]!==l||t[45]!==A||t[46]!==te||t[47]!==E||t[48]!==D||t[49]!==O||t[50]!==d?(j=(0,K.jsxs)(tn,{variant:d,isPhoneDevice:l,isMobileViewport:s,hasHeader:te,hasSidebar:y,hasRail:x,children:[E,D,O,A]}),t[41]=x,t[42]=y,t[43]=s,t[44]=l,t[45]=A,t[46]=te,t[47]=E,t[48]=D,t[49]=O,t[50]=d,t[51]=j):j=t[51];let M;return t[52]!==j||t[53]!==T?(M=(0,K.jsx)($t.Provider,{value:T,children:j}),t[52]=j,t[53]=T,t[54]=M):M=t[54],M},tn=U.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  /* =========================
     GRID COLUMNS
     ========================= */
  grid-template-columns: ${e=>e.isPhoneDevice?`1fr`:!e.hasSidebar&&!e.hasRail?`0px 1fr`:e.variant===`rail`?`100px 1fr`:e.variant===`full`?`300px 1fr`:`0px 1fr`};

  /* =========================
     GRID ROWS
     ========================= */
  grid-template-rows: ${e=>e.hasHeader?e.isPhoneDevice&&!e.hasHeader?`50px 1fr`:(e.isPhoneDevice&&e.hasHeader,`80px 1fr`):`1fr`};

  /* =========================
     GRID AREAS
     ========================= */
  grid-template-areas: ${e=>e.isPhoneDevice?(e.hasHeader,`
          "header"
          "main"
        `):e.hasHeader?`
        "sidebar header"
        "sidebar main"
      `:`
        "sidebar main"
      `};
`,nn=U.header`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.$isDefaultMobile?W.surface.default:`transparent`};
  color: ${e=>e.$isDefaultMobile?`#fff`:`inherit`};
  border-bottom: 1px solid ${W.border.primary};
`,rn=U.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
      padding-right: ${e=>e.$hasToggle?`60px`:`0`};

  & > * {
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: ${e=>e.$hasToggle?`60px`:`0`};
  }
`,an=U.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
`,on=U.button`
  position: absolute;
  top: ${Xt.space08};
  right: ${Xt.space07};
  z-index: 40;
  background: transparent;
  border: none;
  cursor: pointer;
`,sn=U.button`
  position: absolute;
  top: ${Xt.space08};
  left: ${Xt.space08};
  z-index: 50;
`,cn=U.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`,ln=U.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`,un=U.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.hasSidebar?`300px`:`100px`};
  height: 100vh;
  background: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-open='true'] {
    transform: translateX(0);
  }
`,dn=U.div`
  display: ${e=>e.active?`block`:`none`};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`,en.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},sidebar:{required:!1,tsType:{name:`ReactNode`},description:``},rail:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ menu?: ReactNode }`,signature:{properties:[{key:`menu`,value:{name:`ReactNode`,required:!1}}]}},description:``}}}})),pn,q,mn,J,Y,X,Z,Q,hn,$,gn;t((()=>{pn=l(),fn(),Yt(),q=s(),mn={title:`Components/Layout`,component:en,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{header:{control:!1},sidebar:{control:!1},icons:{control:!1}}},J=e=>{let t=(0,pn.c)(6),{label:n,backgroundColor:r,fontColor:i}=e,a;t[0]!==r||t[1]!==i?(a={backgroundColor:r,height:`100%`,display:`flex`,alignItems:`top`,justifyContent:`top`,color:i,fontWeight:`bold`},t[0]=r,t[1]=i,t[2]=a):a=t[2];let o;return t[3]!==n||t[4]!==a?(o=(0,q.jsx)(`div`,{style:a,children:n}),t[3]=n,t[4]=a,t[5]=o):o=t[5],o},Y={args:{header:(0,q.jsx)(J,{label:`Header`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),sidebar:(0,q.jsx)(J,{label:`Sidebar`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},X={args:{header:(0,q.jsx)(J,{label:`Header`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),sidebar:(0,q.jsx)(J,{label:`Sidebar`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),rail:(0,q.jsx)(J,{label:`Rail`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},Z={args:{sidebar:(0,q.jsx)(J,{label:`Sidebar`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Q={args:{header:(0,q.jsx)(J,{label:`Header`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},hn={args:{header:(0,q.jsx)(J,{label:`Header`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),rail:(0,q.jsx)(J,{label:`Rail`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},$={args:{header:(0,q.jsx)(J,{label:`Header`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),sidebar:(0,q.jsx)(J,{label:`Sidebar`,backgroundColor:W.surface.default,fontColor:W.text.primary.default}),icons:{menu:(0,q.jsx)(`span`,{style:{fontSize:20},children:`🍔`})},children:(0,q.jsx)(J,{label:`Main Content`,backgroundColor:W.surface.secondary,fontColor:W.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    rail: <Placeholder label="Rail" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...Q.parameters?.docs?.source}}},hn.parameters={...hn.parameters,docs:{...hn.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    rail: <Placeholder label="Rail" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...hn.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    icons: {
      menu: <span style={{
        fontSize: 20
      }}>
          🍔
        </span>
    },
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...$.parameters?.docs?.source}}},gn=[`Default`,`WithRail`,`NoHeader`,`NoSidebar`,`NoSidebarWithRail`,`CustomMenuIcon`]}))();export{$ as CustomMenuIcon,Y as Default,Z as NoHeader,Q as NoSidebar,hn as NoSidebarWithRail,X as WithRail,gn as __namedExportsOrder,mn as default};