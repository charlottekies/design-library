import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n,u as r}from"./iframe-B95RtUpL.js";import{t as i}from"./compiler-runtime-BGLzeY-d.js";import{i as a,n as o,r as s,t as c}from"./semantic-color-COP5VF85.js";var l,u=t((()=>{l={space01:`1px`,space02:`2px`,space03:`3px`,space04:`4px`,space05:`8px`,space06:`10px`,space07:`12px`,space08:`24px`,space09:`32px`,space10:`36px`,space11:`40px`}})),d,f,p,m,h,g,ee,_,te,ne,re,ie,ae,oe,v,y=t((()=>{d=i(),s(),f=e(r(),1),o(),u(),p=n(),m=(0,f.createContext)(null),h=()=>{let e=(0,f.useContext)(m);if(!e)throw Error(`useLayout must be used within Layout`);return e},g=e=>{let t=(0,d.c)(61),{header:n,sidebar:r,rail:i,children:a,icons:o}=e,[s,c]=(0,f.useState)(!1),[l,u]=(0,f.useState)(!1),h;t[0]!==s||t[1]!==l||t[2]!==i||t[3]!==r?(h=()=>!r&&i&&!l?`rail`:r&&!i&&!l||r&&i&&!l?`full`:r&&i&&s?`rail`:`collapsed`,t[0]=s,t[1]=l,t[2]=i,t[3]=r,t[4]=h):h=t[4];let[g,y]=(0,f.useState)(h),b;t[5]!==l||t[6]!==i||t[7]!==r?(b=()=>{y(e=>l?e===`full`?`collapsed`:`full`:e===`full`?i?`rail`:`collapsed`:e===`rail`&&!r?`rail`:`full`)},t[5]=l,t[6]=i,t[7]=r,t[8]=b):b=t[8];let x=b,S;t[9]===o?.menu?S=t[10]:(S=o?.menu??(0,p.jsx)(`span`,{children:`☰`}),t[9]=o?.menu,t[10]=S);let C=S,w=!!r,T=!!n,E=!!i,D=g===`collapsed`,O=!T&&l&&w,k=l&&(w||E)?!0:(w||E)&&(O||T&&D),A=w&&!T&&!O&&D&&!l,j,M;t[11]!==E||t[12]!==w?(j=()=>{let e=window.matchMedia(`(max-width: 768px)`),t=e.matches,n=()=>{let n=e.matches,r=window.matchMedia(`(pointer: coarse)`).matches,i=n&&r;c(n),u(i),(t!==n||t===e.matches)&&(y(e=>n?n&&E&&w?`rail`:i?e===`full`?`collapsed`:e:E&&!w||E?`rail`:e===`full`?`collapsed`:e:w&&E?`full`:E?`rail`:w?`full`:e),t=n)};return n(),e.addEventListener(`change`,n),window.addEventListener(`resize`,n),()=>{e.removeEventListener(`change`,n),window.removeEventListener(`resize`,n)}},M=[E,w],t[11]=E,t[12]=w,t[13]=j,t[14]=M):(j=t[13],M=t[14]),(0,f.useEffect)(j,M);let N=!!i&&!r,P;t[15]!==s||t[16]!==l||t[17]!==N||t[18]!==x||t[19]!==g?(P={variant:g,isMobileViewport:s,railMode:N,isPhoneDevice:l,toggleSidebar:x},t[15]=s,t[16]=l,t[17]=N,t[18]=x,t[19]=g,t[20]=P):P=t[20];let F=T||O,I;t[21]!==l||t[22]!==i||t[23]!==r||t[24]!==g?(I=!l&&(r||i)&&(0,p.jsxs)(ie,{isVisible:g!==`collapsed`||!!i,children:[g===`rail`&&i&&i,g===`full`&&r&&r]}),t[21]=l,t[22]=i,t[23]=r,t[24]=g,t[25]=I):I=t[25];let L;t[26]!==E||t[27]!==w||t[28]!==l||t[29]!==i||t[30]!==r||t[31]!==g?(L=l&&(w||E)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{active:g===`full`,onClick:()=>y(`collapsed`)}),(0,p.jsx)(oe,{hasSidebar:w,"data-open":g===`full`,children:r||i})]}),t[26]=E,t[27]=w,t[28]=l,t[29]=i,t[30]=r,t[31]=g,t[32]=L):L=t[32];let R;t[33]!==T||t[34]!==n||t[35]!==C||t[36]!==O||t[37]!==k||t[38]!==x?(R=(T||O)&&(0,p.jsxs)(_,{$isDefaultMobile:O,children:[(0,p.jsx)(te,{$hasToggle:k,children:T?n:(0,p.jsx)(p.Fragment,{})}),k&&(0,p.jsx)(ne,{onClick:x,children:C})]}),t[33]=T,t[34]=n,t[35]=C,t[36]=O,t[37]=k,t[38]=x,t[39]=R):R=t[39];let z;t[40]!==C||t[41]!==A||t[42]!==x?(z=A&&(0,p.jsx)(re,{onClick:x,children:C}),t[40]=C,t[41]=A,t[42]=x,t[43]=z):z=t[43];let B;t[44]!==a||t[45]!==z?(B=(0,p.jsxs)(ae,{children:[z,a]}),t[44]=a,t[45]=z,t[46]=B):B=t[46];let V;t[47]!==E||t[48]!==w||t[49]!==s||t[50]!==l||t[51]!==L||t[52]!==R||t[53]!==B||t[54]!==F||t[55]!==I||t[56]!==g?(V=(0,p.jsxs)(ee,{variant:g,isPhoneDevice:l,isMobileViewport:s,hasHeader:F,hasSidebar:w,hasRail:E,children:[I,L,R,B]}),t[47]=E,t[48]=w,t[49]=s,t[50]=l,t[51]=L,t[52]=R,t[53]=B,t[54]=F,t[55]=I,t[56]=g,t[57]=V):V=t[57];let H;return t[58]!==V||t[59]!==P?(H=(0,p.jsx)(m.Provider,{value:P,children:V}),t[58]=V,t[59]=P,t[60]=H):H=t[60],H},ee=a.div`
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
`,_=a.header`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.$isDefaultMobile?c.surface.default:`transparent`};
  color: ${e=>e.$isDefaultMobile?`#fff`:`inherit`};
  border-bottom: 1px solid ${c.border.primary};
`,te=a.div`
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
`,ne=a.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
`,re=a.button`
  position: absolute;
  top: ${l.space08};
  left: ${l.space08};
  z-index: 50;
`,ie=a.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`,ae=a.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`,oe=a.aside`
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
`,v=a.div`
  display: ${e=>e.active?`block`:`none`};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`,g.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},sidebar:{required:!1,tsType:{name:`ReactNode`},description:``},rail:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ menu?: ReactNode }`,signature:{properties:[{key:`menu`,value:{name:`ReactNode`,required:!1}}]}},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A=t((()=>{b=i(),s(),o(),u(),y(),x=n(),S=e=>{let t=(0,b.c)(15),{header:n,footer:r,children:i}=e,{toggleSidebar:a}=h(),o;t[0]===n?o=t[1]:(o=(0,x.jsx)(T,{children:n}),t[0]=n,t[1]=o);let s;t[2]===a?s=t[3]:(s=(0,x.jsx)(E,{children:(0,x.jsx)(D,{onClick:a,children:`"X"`})}),t[2]=a,t[3]=s);let c;t[4]!==o||t[5]!==s?(c=(0,x.jsxs)(w,{children:[o,s]}),t[4]=o,t[5]=s,t[6]=c):c=t[6];let l;t[7]===i?l=t[8]:(l=(0,x.jsx)(O,{children:i}),t[7]=i,t[8]=l);let u;t[9]===r?u=t[10]:(u=r&&(0,x.jsx)(k,{children:r}),t[9]=r,t[10]=u);let d;return t[11]!==c||t[12]!==l||t[13]!==u?(d=(0,x.jsxs)(C,{children:[c,l,u]}),t[11]=c,t[12]=l,t[13]=u,t[14]=d):d=t[14],d},C=a.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${c.surface.default};
  border-right: ${l.space01} solid ${c.border.primary};
`,w=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  flex-shrink: 0;
  border-bottom: ${l.space01} solid ${c.border.primary};
`,T=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
`,E=a.div`
  display: flex;
  align-items: center;
`,D=a.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`,O=a.nav`
  flex: 1;
  overflow-y: auto;
`,k=a.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: ${l.space01} solid ${c.border.primary};
`,S.__docgenInfo={description:`A Sidebar with optional header and footer content areas`,methods:[],displayName:`Sidebar`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),j,M,N,P,F,I,L,R,z=t((()=>{j=i(),s(),o(),u(),y(),M=n(),N=e=>{let t=(0,j.c)(13),{footer:n,children:r}=e,{toggleSidebar:i,railMode:a,isPhoneDevice:o}=h(),s=o||!a,c;t[0]!==s||t[1]!==i?(c=s&&(0,M.jsx)(I,{onClick:i,children:`X`}),t[0]=s,t[1]=i,t[2]=c):c=t[2];let l;t[3]===c?l=t[4]:(l=(0,M.jsx)(F,{children:c}),t[3]=c,t[4]=l);let u;t[5]===r?u=t[6]:(u=(0,M.jsx)(L,{children:r}),t[5]=r,t[6]=u);let d;t[7]===n?d=t[8]:(d=n&&(0,M.jsx)(R,{children:n}),t[7]=n,t[8]=d);let f;return t[9]!==l||t[10]!==u||t[11]!==d?(f=(0,M.jsxs)(P,{children:[l,u,d]}),t[9]=l,t[10]=u,t[11]=d,t[12]=f):f=t[12],f},P=a.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  background-color: ${c.surface.default};
  border-right: ${l.space01} solid ${c.border.primary};
  box-sizing: border-box;
`,F=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  flex-shrink: 0;
  border-bottom: ${l.space01} solid ${c.border.primary};
`,I=a.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`,L=a.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
`,R=a.div`
  padding: 0.75rem;
  flex-shrink: 0;
  border-top: ${l.space01} solid ${c.border.primary};

  display: flex;
  justify-content: center;
`,N.__docgenInfo={description:`A compact right rail (icon/tool strip style)
fixed width: 100px`,methods:[],displayName:`Rail`,props:{footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,se;t((()=>{B=i(),y(),o(),A(),r(),z(),V=n(),H={title:`Components/Layout`,component:g,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{header:{control:!1},sidebar:{control:!1},icons:{control:!1}}},U=e=>{let t=(0,B.c)(6),{label:n,backgroundColor:r,fontColor:i}=e,a;t[0]!==r||t[1]!==i?(a={backgroundColor:r,height:`100%`,display:`flex`,alignItems:`top`,justifyContent:`top`,color:i,fontWeight:`bold`},t[0]=r,t[1]=i,t[2]=a):a=t[2];let o;return t[3]!==n||t[4]!==a?(o=(0,V.jsx)(`div`,{style:a,children:n}),t[3]=n,t[4]=a,t[5]=o):o=t[5],o},W=e=>{let t=(0,B.c)(8),{icon:n,label:r,isActive:i}=e,a=`
    flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer 
    ${i?`bg-blue-600 text-white`:`text-gray-300 hover:bg-gray-800`}
  `,o;t[0]===n?o=t[1]:(o=(0,V.jsx)(`span`,{className:`w-5 h-5 flex items-center justify-center`,children:n}),t[0]=n,t[1]=o);let s;t[2]===r?s=t[3]:(s=(0,V.jsx)(`span`,{className:`font-medium text-sm`,children:r}),t[2]=r,t[3]=s);let c;return t[4]!==a||t[5]!==o||t[6]!==s?(c=(0,V.jsxs)(`div`,{className:a,children:[o,s]}),t[4]=a,t[5]=o,t[6]=s,t[7]=c):c=t[7],c},G=()=>{let e=(0,B.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,V.jsx)(W,{label:`Dashboard`,isActive:!0,icon:(0,V.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,V.jsxs)(V.Fragment,{children:[t,(0,V.jsx)(W,{label:`Settings`,icon:(0,V.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},K=()=>{let e=(0,B.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,V.jsx)(W,{label:``,isActive:!0,icon:(0,V.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,V.jsxs)(N,{children:[t,(0,V.jsx)(W,{label:``,icon:(0,V.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},q=()=>{let e=(0,B.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,V.jsx)(S,{children:(0,V.jsx)(G,{})}),e[0]=t):t=e[0],t},J={args:{header:(0,V.jsx)(U,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,V.jsx)(q,{}),children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},Y={args:{header:(0,V.jsx)(U,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,V.jsx)(q,{}),rail:(0,V.jsx)(K,{}),children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`desktop`}}},X={args:{sidebar:(0,V.jsx)(q,{}),children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Z={args:{header:(0,V.jsx)(U,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},Q={args:{header:(0,V.jsx)(U,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),rail:(0,V.jsx)(K,{}),children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},$={args:{header:(0,V.jsx)(U,{label:`Header`,backgroundColor:c.surface.default,fontColor:c.text.primary.default}),sidebar:(0,V.jsx)(q,{}),icons:{menu:(0,V.jsx)(`span`,{style:{fontSize:20},children:`🍔`})},children:(0,V.jsx)(U,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile1`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},se=[`Default`,`WithRail`,`NoHeader`,`NoSidebar`,`NoSidebarWithRail`,`CustomMenuIcon`]}))();export{$ as CustomMenuIcon,J as Default,X as NoHeader,Z as NoSidebar,Q as NoSidebarWithRail,Y as WithRail,se as __namedExportsOrder,H as default};