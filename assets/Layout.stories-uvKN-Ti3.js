import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n,u as r}from"./iframe-nBQGP4oZ.js";import{t as i}from"./compiler-runtime-BTG1aDpG.js";import{i as a,n as o,r as s,t as c}from"./semantic-color-CICw0mtX.js";var l,u=t((()=>{l={space01:`1px`,space02:`2px`,space03:`3px`,space04:`4px`,space05:`8px`,space06:`10px`,space07:`12px`,space08:`24px`,space09:`32px`,space10:`36px`,space11:`40px`}})),d,f=t((()=>{d={small:16,medium:24,large:32}})),p,m,h,g=t((()=>{p=i(),o(),f(),m=n(),h=e=>{let t=(0,p.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({size:a,style:i,children:n,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=d[a===void 0?`medium`:a],s;t[5]===i?s=t[6]:(s={color:c.text.primary.default,...i},t[5]=i,t[6]=s);let l;return t[7]!==n||t[8]!==o||t[9]!==r||t[10]!==s?(l=(0,m.jsx)(`svg`,{width:o,height:o,viewBox:`0 0 24 24`,fill:`none`,style:s,"aria-hidden":`true`,...r,children:n}),t[7]=n,t[8]=o,t[9]=r,t[10]=s,t[11]=l):l=t[11],l},h.__docgenInfo={description:``,methods:[],displayName:`BaseIcon`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`SVGProps`]}})),_,v,y,b=t((()=>{_=i(),g(),v=n(),y=e=>{let t=(0,_.c)(5),n,r,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,v.jsx)(`path`,{d:`M4 4H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),r=(0,v.jsx)(`path`,{d:`M4 12H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),i=(0,v.jsx)(`path`,{d:`M4 20H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),t[0]=n,t[1]=r,t[2]=i):(n=t[0],r=t[1],i=t[2]);let a;return t[3]===e?a=t[4]:(a=(0,v.jsxs)(h,{...e,children:[n,r,i]}),t[3]=e,t[4]=a),a},y.__docgenInfo={description:``,methods:[],displayName:`Hamburger`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``}},composes:[`SVGProps`]}})),ee,x,S,C,w,T,te,ne,re,ie,ae,oe,se,ce,le,E=t((()=>{ee=i(),s(),x=e(r(),1),o(),u(),b(),S=n(),C=(0,x.createContext)(null),w=()=>{let e=(0,x.useContext)(C);if(!e)throw Error(`useLayout must be used within Layout`);return e},T=e=>{let t=(0,ee.c)(61),{header:n,sidebar:r,rail:i,children:a,icons:o}=e,[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(!1),d;t[0]!==s||t[1]!==l||t[2]!==i||t[3]!==r?(d=()=>!r&&i&&!l?`rail`:r&&!i&&!l||r&&i&&!l?`full`:r&&i&&s?`rail`:`collapsed`,t[0]=s,t[1]=l,t[2]=i,t[3]=r,t[4]=d):d=t[4];let[f,p]=(0,x.useState)(d),m;t[5]!==l||t[6]!==i||t[7]!==r?(m=()=>{p(e=>l?e===`full`?`collapsed`:`full`:e===`full`?i?`rail`:`collapsed`:e===`rail`&&!r?`rail`:`full`)},t[5]=l,t[6]=i,t[7]=r,t[8]=m):m=t[8];let h=m,g;t[9]===o?.menu?g=t[10]:(g=o?.menu??(0,S.jsx)(y,{}),t[9]=o?.menu,t[10]=g);let _=g,v=!!r,b=!!n,w=!!i,T=f===`collapsed`,E=!b&&l&&v,D=l&&(v||w)?!0:(v||w)&&(E||b&&T),O=v&&!b&&!E&&T&&!l,k,A;t[11]!==w||t[12]!==v?(k=()=>{let e=window.matchMedia(`(max-width: 768px)`),t=e.matches,n=n=>{let r=n===void 0?!1:n,i=e.matches,a=window.matchMedia(`(pointer: coarse)`).matches,o=i&&a,s=t!==i;c(i),u(o),(s||r)&&(p(e=>{if(i)return o?e===`full`?`collapsed`:e:w&&v||w&&!v||w?`rail`:e===`full`?`collapsed`:e;if(!i){if(v&&w)return`full`;if(w)return`rail`;if(v)return`full`}return e}),t=i)},r=()=>{n()};return n(),e.addEventListener(`change`,r),window.addEventListener(`resize`,r),()=>{e.removeEventListener(`change`,r),window.removeEventListener(`resize`,r)}},A=[w,v],t[11]=w,t[12]=v,t[13]=k,t[14]=A):(k=t[13],A=t[14]),(0,x.useEffect)(k,A);let j=!!i&&!r,M;t[15]!==s||t[16]!==l||t[17]!==j||t[18]!==h||t[19]!==f?(M={variant:f,isMobileViewport:s,railMode:j,isPhoneDevice:l,toggleSidebar:h},t[15]=s,t[16]=l,t[17]=j,t[18]=h,t[19]=f,t[20]=M):M=t[20];let N=b||E,P;t[21]!==l||t[22]!==i||t[23]!==r||t[24]!==f?(P=!l&&(r||i)&&(0,S.jsxs)(oe,{isVisible:f!==`collapsed`||!!i,children:[f===`rail`&&i&&i,f===`full`&&r&&r]}),t[21]=l,t[22]=i,t[23]=r,t[24]=f,t[25]=P):P=t[25];let F;t[26]!==w||t[27]!==v||t[28]!==l||t[29]!==i||t[30]!==r||t[31]!==f?(F=l&&(v||w)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(le,{active:f===`full`,onClick:()=>p(`collapsed`)}),(0,S.jsx)(ce,{hasSidebar:v,"data-open":f===`full`,children:r||i})]}),t[26]=w,t[27]=v,t[28]=l,t[29]=i,t[30]=r,t[31]=f,t[32]=F):F=t[32];let I;t[33]!==b||t[34]!==n||t[35]!==_||t[36]!==E||t[37]!==D||t[38]!==h?(I=(b||E)&&(0,S.jsxs)(ne,{$isDefaultMobile:E,children:[(0,S.jsx)(re,{$hasToggle:D,children:b?n:(0,S.jsx)(S.Fragment,{})}),D&&(0,S.jsx)(ie,{onClick:h,children:_})]}),t[33]=b,t[34]=n,t[35]=_,t[36]=E,t[37]=D,t[38]=h,t[39]=I):I=t[39];let L;t[40]!==_||t[41]!==O||t[42]!==h?(L=O&&(0,S.jsx)(ae,{onClick:h,children:_}),t[40]=_,t[41]=O,t[42]=h,t[43]=L):L=t[43];let R;t[44]!==a||t[45]!==L?(R=(0,S.jsxs)(se,{children:[L,a]}),t[44]=a,t[45]=L,t[46]=R):R=t[46];let z;t[47]!==w||t[48]!==v||t[49]!==s||t[50]!==l||t[51]!==F||t[52]!==I||t[53]!==R||t[54]!==N||t[55]!==P||t[56]!==f?(z=(0,S.jsxs)(te,{variant:f,isPhoneDevice:l,isMobileViewport:s,hasHeader:N,hasSidebar:v,hasRail:w,children:[P,F,I,R]}),t[47]=w,t[48]=v,t[49]=s,t[50]=l,t[51]=F,t[52]=I,t[53]=R,t[54]=N,t[55]=P,t[56]=f,t[57]=z):z=t[57];let B;return t[58]!==z||t[59]!==M?(B=(0,S.jsx)(C.Provider,{value:M,children:z}),t[58]=z,t[59]=M,t[60]=B):B=t[60],B},te=a.div`
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
`,ne=a.header`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.$isDefaultMobile?c.surface.default:`transparent`};
  color: ${e=>e.$isDefaultMobile?`#fff`:`inherit`};
  border-bottom: 1px solid ${c.border.primary};
`,re=a.div`
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
`,ie=a.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
`,ae=a.button`
  position: absolute;
  top: ${l.space08};
  left: ${l.space08};
  z-index: 50;
`,oe=a.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`,se=a.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`,ce=a.aside`
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
`,le=a.div`
  display: ${e=>e.active?`block`:`none`};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`,T.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},sidebar:{required:!1,tsType:{name:`ReactNode`},description:``},rail:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ menu?: ReactNode }`,signature:{properties:[{key:`menu`,value:{name:`ReactNode`,required:!1}}]}},description:``}}}})),D,O,k,A,j,M,N,P,F,I,L=t((()=>{D=i(),s(),o(),u(),E(),b(),O=n(),k=e=>{let t=(0,D.c)(16),{header:n,footer:r,children:i}=e,{toggleSidebar:a}=w(),o;t[0]===n?o=t[1]:(o=(0,O.jsx)(M,{children:n}),t[0]=n,t[1]=o);let s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,O.jsx)(y,{}),t[2]=s):s=t[2];let c;t[3]===a?c=t[4]:(c=(0,O.jsx)(N,{children:(0,O.jsx)(P,{onClick:a,children:s})}),t[3]=a,t[4]=c);let l;t[5]!==o||t[6]!==c?(l=(0,O.jsxs)(j,{children:[o,c]}),t[5]=o,t[6]=c,t[7]=l):l=t[7];let u;t[8]===i?u=t[9]:(u=(0,O.jsx)(F,{children:i}),t[8]=i,t[9]=u);let d;t[10]===r?d=t[11]:(d=r&&(0,O.jsx)(I,{children:r}),t[10]=r,t[11]=d);let f;return t[12]!==l||t[13]!==u||t[14]!==d?(f=(0,O.jsxs)(A,{children:[l,u,d]}),t[12]=l,t[13]=u,t[14]=d,t[15]=f):f=t[15],f},A=a.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${c.surface.default};
  border-right: ${l.space01} solid ${c.border.primary};
`,j=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${l.space01} solid ${c.border.primary};
`,M=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  flex: 1;
  min-width: 0;
`,N=a.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 40px; 
`,P=a.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  flex-shrink: 0;
`,F=a.nav`
  flex: 1;
  overflow-y: auto;
`,I=a.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: ${l.space01} solid ${c.border.primary};
`,k.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),R,z,B,V,ue,de,fe,pe,me,he,ge=t((()=>{R=i(),s(),o(),u(),E(),b(),z=n(),B=e=>{let t=(0,R.c)(14),{footer:n,children:r}=e,{toggleSidebar:i,railMode:a,isPhoneDevice:o}=w(),s=o||!a,c;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,z.jsx)(de,{}),t[0]=c):c=t[0];let l;t[1]!==s||t[2]!==i?(l=s&&(0,z.jsx)(pe,{onClick:i,children:(0,z.jsx)(y,{})}),t[1]=s,t[2]=i,t[3]=l):l=t[3];let u;t[4]===l?u=t[5]:(u=(0,z.jsxs)(ue,{children:[c,(0,z.jsx)(fe,{children:l})]}),t[4]=l,t[5]=u);let d;t[6]===r?d=t[7]:(d=(0,z.jsx)(me,{children:r}),t[6]=r,t[7]=d);let f;t[8]===n?f=t[9]:(f=n&&(0,z.jsx)(he,{children:n}),t[8]=n,t[9]=f);let p;return t[10]!==u||t[11]!==d||t[12]!==f?(p=(0,z.jsxs)(V,{children:[u,d,f]}),t[10]=u,t[11]=d,t[12]=f,t[13]=p):p=t[13],p},V=a.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: 100%;

  background-color: ${c.surface.default};
  border-right: ${l.space01}
    solid ${c.border.primary};

  box-sizing: border-box;
`,ue=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex: 0 0 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${l.space01}
    solid ${c.border.primary};
`,de=a.div`
  flex: 1;
`,fe=a.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 40px;
`,pe=a.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  flex-shrink: 0;
`,me=a.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.5rem 0;
`,he=a.div`
  padding: 0.75rem;
  flex-shrink: 0;

  border-top: ${l.space01}
    solid ${c.border.primary};

  display: flex;
  justify-content: center;
`,B.__docgenInfo={description:`A compact right rail (icon/tool strip style)
fixed width: 100px`,methods:[],displayName:`Rail`,props:{footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),H,U,_e,W,G,ve,K,q,J,Y,X,Z,Q,$,ye;t((()=>{H=i(),E(),o(),L(),r(),ge(),U=n(),_e={title:`Components/Layout`,component:T,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{header:{control:!1},sidebar:{control:!1},icons:{control:!1}}},W=e=>{let t=(0,H.c)(6),{label:n,backgroundColor:r,fontColor:i}=e,a;t[0]!==r||t[1]!==i?(a={backgroundColor:r,height:`100%`,display:`flex`,alignItems:`top`,justifyContent:`top`,color:i,fontWeight:`bold`},t[0]=r,t[1]=i,t[2]=a):a=t[2];let o;return t[3]!==n||t[4]!==a?(o=(0,U.jsx)(`div`,{style:a,children:n}),t[3]=n,t[4]=a,t[5]=o):o=t[5],o},G=e=>{let t=(0,H.c)(8),{icon:n,label:r,isActive:i}=e,a=`
    flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer 
    ${i?`bg-blue-600 text-white`:`text-gray-300 hover:bg-gray-800`}
  `,o;t[0]===n?o=t[1]:(o=(0,U.jsx)(`span`,{className:`w-5 h-5 flex items-center justify-center`,children:n}),t[0]=n,t[1]=o);let s;t[2]===r?s=t[3]:(s=(0,U.jsx)(`span`,{className:`font-medium text-sm`,children:r}),t[2]=r,t[3]=s);let c;return t[4]!==a||t[5]!==o||t[6]!==s?(c=(0,U.jsxs)(`div`,{className:a,children:[o,s]}),t[4]=a,t[5]=o,t[6]=s,t[7]=c):c=t[7],c},ve=()=>{let e=(0,H.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,U.jsx)(G,{label:`Dashboard`,isActive:!0,icon:(0,U.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,U.jsxs)(U.Fragment,{children:[t,(0,U.jsx)(G,{label:`Settings`,icon:(0,U.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},K=()=>{let e=(0,H.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,U.jsx)(G,{label:``,isActive:!0,icon:(0,U.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,U.jsxs)(B,{children:[t,(0,U.jsx)(G,{label:``,icon:(0,U.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},q=()=>{let e=(0,H.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,U.jsx)(k,{children:(0,U.jsx)(ve,{})}),e[0]=t):t=e[0],t},J={args:{header:(0,U.jsx)(W,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,U.jsx)(q,{}),children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},Y={args:{header:(0,U.jsx)(W,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,U.jsx)(q,{}),rail:(0,U.jsx)(K,{}),children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},X={args:{sidebar:(0,U.jsx)(q,{}),children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Z={args:{header:(0,U.jsx)(W,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Q={args:{header:(0,U.jsx)(W,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),rail:(0,U.jsx)(K,{}),children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},$={args:{header:(0,U.jsx)(W,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,U.jsx)(q,{}),icons:{menu:(0,U.jsx)(`span`,{style:{fontSize:20},children:`🍔`})},children:(0,U.jsx)(W,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <MySidebar />,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
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
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <MySidebar />,
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
}`,...$.parameters?.docs?.source}}},ye=[`Default`,`WithRail`,`NoHeader`,`NoSidebar`,`NoSidebarWithRail`,`CustomMenuIcon`]}))();export{$ as CustomMenuIcon,J as Default,X as NoHeader,Z as NoSidebar,Q as NoSidebarWithRail,Y as WithRail,ye as __namedExportsOrder,_e as default};