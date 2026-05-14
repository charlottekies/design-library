import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n,u as r}from"./iframe-McBhhHBy.js";import{t as i}from"./compiler-runtime-C5zb4QAy.js";import{i as a,n as o,r as s,t as c}from"./semantic-color-hYuVauSm.js";var l,u=t((()=>{l={drawer:1e3,flyout:800,tooltip:600,modal:400}})),d,f=t((()=>{d={small:16,medium:24,large:32}})),p,m,h,ee=t((()=>{p=i(),o(),f(),m=n(),h=e=>{let t=(0,p.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({size:a,style:i,children:n,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=d[a===void 0?`medium`:a],s;t[5]===i?s=t[6]:(s={color:c.text.primary.default,...i},t[5]=i,t[6]=s);let l;return t[7]!==n||t[8]!==o||t[9]!==r||t[10]!==s?(l=(0,m.jsx)(`svg`,{width:o,height:o,viewBox:`0 0 24 24`,fill:`none`,style:s,"aria-hidden":`true`,...r,children:n}),t[7]=n,t[8]=o,t[9]=r,t[10]=s,t[11]=l):l=t[11],l},h.__docgenInfo={description:``,methods:[],displayName:`BaseIcon`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`SVGProps`]}})),g,_,v,y=t((()=>{g=i(),ee(),_=n(),v=e=>{let t=(0,g.c)(5),n,r,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,_.jsx)(`path`,{d:`M4 4H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),r=(0,_.jsx)(`path`,{d:`M4 12H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),i=(0,_.jsx)(`path`,{d:`M4 20H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),t[0]=n,t[1]=r,t[2]=i):(n=t[0],r=t[1],i=t[2]);let a;return t[3]===e?a=t[4]:(a=(0,_.jsxs)(h,{...e,children:[n,r,i]}),t[3]=e,t[4]=a),a},v.__docgenInfo={description:``,methods:[],displayName:`Hamburger`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``}},composes:[`SVGProps`]}})),b,x,S,C,w,T=t((()=>{s(),N(),y(),o(),b=n(),x=({children:e,menuIcon:t=(0,b.jsx)(v,{color:`#ff00ff`})})=>{let n=k(),r=!n.hasRail&&n.hasSidebar&&!n.isOpen||n.isPhone&&(n.hasRail||n.hasSidebar);return(0,b.jsxs)(S,{"data-testid":`header-container`,children:[r&&(0,b.jsx)(C,{"data-testid":`header-toggle-btn`,type:`button`,onClick:n.toggleSidebar,"aria-label":`Toggle navigation`,children:t}),(0,b.jsx)(w,{$hasToggle:r,children:e})]})},S=a.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${c.border.primary};
  background: ${c.surface.default};
`,C=a.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  color: ${c.text.primary.default};
`,w=a.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  /* key layout contract: reserve space if toggle exists */
  padding-left: ${e=>e.$hasToggle?`60px`:`0`};

  overflow: hidden;
`,x.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},menuIcon:{required:!1,tsType:{name:`ReactNode`},description:`Optional override for menu icon`,defaultValue:{value:`<Hamburger color="#ff00ff" />`,computed:!1}}}}}));function te(e){return!e}var ne,E,D,O,k,A,re,j,M,ie,ae,oe,se,ce,le,ue,N=t((()=>{ne=i(),s(),E=e(r(),1),o(),u(),T(),D=n(),O=(0,E.createContext)(null),k=()=>{let e=(0,E.useContext)(O);if(!e)throw Error(`useLayout must be used within Layout`);return e},A=e=>{let t=(0,ne.c)(49),{header:n,sidebar:r,rail:i,children:a}=e,[o,s]=(0,E.useState)(!1),[c,l]=(0,E.useState)(!1),u;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=window.matchMedia(`(max-width: 786px)`),t[0]=u):u=t[0];let d=u,f;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=window.matchMedia(`(pointer: coarse)`),t[1]=f):f=t[1];let p=f,m=d.matches&&p.matches,h;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{s(te)},t[2]=h):h=t[2];let ee=h,g;t[3]!==o||t[4]!==c||t[5]!==i||t[6]!==r?(g=()=>{if(!c){if(r&&o)return r;if(r&&i&&!o||!r&&i)return i}if(c)return i&&r?o?r:i:r&&!i?o?r:null:i&&!r?i:null},t[3]=o,t[4]=c,t[5]=i,t[6]=r,t[7]=g):g=t[7];let _=g,v,y;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(v=()=>{let e=window.matchMedia(`(max-width: 786px)`),t=()=>{l(e.matches)};return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},y=[],t[8]=v,t[9]=y):(v=t[8],y=t[9]),(0,E.useEffect)(v,y);let b,x;t[10]!==c||t[11]!==i||t[12]!==r?(b=()=>{if(m){s(!1);return}if(c){s(!1);return}(r||i)&&s(!0)},x=[m,c,r,i],t[10]=c,t[11]=i,t[12]=r,t[13]=b,t[14]=x):(b=t[13],x=t[14]),(0,E.useEffect)(b,x);let S=!!r,C=!!i,w=!!n,T;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>ee(),t[15]=T):T=t[15];let k;t[16]!==o||t[17]!==c||t[18]!==C||t[19]!==w||t[20]!==S?(k={isOpen:o,isSmallViewport:c,isPhone:m,hasSidebar:S,hasRail:C,hasHeader:w,toggleSidebar:T},t[16]=o,t[17]=c,t[18]=C,t[19]=w,t[20]=S,t[21]=k):k=t[21];let A=k,j=m&&!n,M=!!n,N=!!r,P=!!i,F;t[22]!==o||t[23]!==i||t[24]!==_||t[25]!==r?(F=!m&&(!!r||!!i)&&(0,D.jsx)(se,{isVisible:o,"data-testid":`layout-sidebar`,children:_()}),t[22]=o,t[23]=i,t[24]=_,t[25]=r,t[26]=F):F=t[26];let I;t[27]!==o||t[28]!==i||t[29]!==r?(I=m&&(!!r||!!i)&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ue,{"data-testid":`layout-drawer-overlay`,isOpen:o,onClick:()=>ee}),(0,D.jsx)(le,{"data-testid":`layout-drawer`,hasSidebar:!!r,"data-open":o,children:r||i})]}),t[27]=o,t[28]=i,t[29]=r,t[30]=I):I=t[30];let L;t[31]!==n||t[32]!==j?(L=(!!n||j)&&(0,D.jsx)(ae,{"data-testid":`layout-header`,children:(0,D.jsx)(oe,{children:n||re})}),t[31]=n,t[32]=j,t[33]=L):L=t[33];let R;t[34]===a?R=t[35]:(R=(0,D.jsx)(ce,{"data-testid":`layout-main`,children:a}),t[34]=a,t[35]=R);let z;t[36]!==o||t[37]!==c||t[38]!==M||t[39]!==N||t[40]!==P||t[41]!==F||t[42]!==I||t[43]!==L||t[44]!==R?(z=(0,D.jsxs)(ie,{"data-testid":`layout-grid`,isPhone:m,isSmallViewport:c,isOpen:o,hasHeader:M,hasSidebar:N,hasRail:P,children:[F,I,L,R]}),t[36]=o,t[37]=c,t[38]=M,t[39]=N,t[40]=P,t[41]=F,t[42]=I,t[43]=L,t[44]=R,t[45]=z):z=t[45];let B;return t[46]!==A||t[47]!==z?(B=(0,D.jsx)(O.Provider,{value:A,children:z}),t[46]=A,t[47]=z,t[48]=B):B=t[48],B},re=(0,D.jsx)(x,{}),j=`300px`,M=`100px`,ie=a.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  /* =========================
     GRID COLUMNS
     ========================= */
  grid-template-columns: ${e=>e.isPhone?`minmax(0, 1fr)`:!e.hasSidebar&&!e.hasRail?`0px minmax(0, 1fr)`:e.isSmallViewport?e.hasSidebar&&e.hasRail?e.isOpen?`${j} minmax(0, 1fr)`:`${M} minmax(0, 1fr)`:!e.hasSidebar&&e.hasRail?`${M} minmax(0, 1fr)`:e.hasSidebar&&!e.hasRail?e.isOpen?`${j} minmax(0, 1fr)`:`0px minmax(0, 1fr)`:`minmax(0, 1fr)`:e.hasSidebar&&e.hasRail?e.isOpen?`${j} minmax(0, 1fr)`:`100px minmax(0, 1fr)`:!e.hasSidebar&&e.hasRail?`${M} minmax(0, 1fr)`:e.hasSidebar&&!e.hasRail?e.isOpen?`${j} minmax(0, 1fr)`:`0px minmax(0, 1fr)`:`minmax(0, 1fr)`};

  /* =========================
     GRID ROWS
     ========================= */
  grid-template-rows: ${e=>{if(e.isPhone)return e.hasHeader?`80px 1fr`:`50px 1fr`;if(!e.hasHeader)return`1fr`;if(e.hasHeader)return`80px 1fr`}};

  /* =========================
     GRID AREAS
     ========================= */
  grid-template-areas: ${e=>e.isPhone?`
        "header"
        "main"
      `:e.hasHeader?`
        "sidebar header"
        "sidebar main"
      `:`
        "sidebar main"
      `};
`,ae=a.header`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.$isDefaultMobile?c.surface.default:`transparent`};
  color: ${e=>e.$isDefaultMobile?`#fff`:`inherit`};
  border-bottom: 1px solid ${c.border.primary};
`,oe=a.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,se=a.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`,ce=a.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`,le=a.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.hasSidebar?`300px`:`100px`};
  height: 100vh;
  background: white;
  z-index: ${l.drawer};
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-open='true'] {
    transform: translateX(0);
  }
`,ue=a.div`
  display: ${e=>e.isOpen?`block`:`none`};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${l.drawer};
`,A.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},sidebar:{required:!1,tsType:{name:`ReactNode`},description:``},rail:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),P,F=t((()=>{P={space01:`1px`,space02:`2px`,space03:`3px`,space04:`4px`,space05:`8px`,space06:`10px`,space07:`12px`,space08:`24px`,space09:`32px`,space10:`36px`,space11:`40px`}})),I,L,R,z,B,de,fe,pe,me,he,ge=t((()=>{I=i(),s(),o(),F(),N(),y(),L=n(),R=e=>{let t=(0,I.c)(16),{header:n,footer:r,children:i}=e,a=k(),o;t[0]===n?o=t[1]:(o=(0,L.jsx)(de,{children:n}),t[0]=n,t[1]=o);let s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,L.jsx)(v,{}),t[2]=s):s=t[2];let c;t[3]===a.toggleSidebar?c=t[4]:(c=(0,L.jsx)(fe,{children:(0,L.jsx)(pe,{"data-testid":`sidebar-toggle-btn`,onClick:a.toggleSidebar,children:s})}),t[3]=a.toggleSidebar,t[4]=c);let l;t[5]!==o||t[6]!==c?(l=(0,L.jsxs)(B,{children:[o,c]}),t[5]=o,t[6]=c,t[7]=l):l=t[7];let u;t[8]===i?u=t[9]:(u=(0,L.jsx)(me,{children:i}),t[8]=i,t[9]=u);let d;t[10]===r?d=t[11]:(d=r&&(0,L.jsx)(he,{children:r}),t[10]=r,t[11]=d);let f;return t[12]!==l||t[13]!==u||t[14]!==d?(f=(0,L.jsxs)(z,{"data-testid":`sidebar-container`,children:[l,u,d]}),t[12]=l,t[13]=u,t[14]=d,t[15]=f):f=t[15],f},z=a.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${c.surface.default};
  border-right: ${P.space01} solid ${c.border.primary};
`,B=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${P.space01} solid ${c.border.primary};
`,de=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  flex: 1;
  min-width: 0;
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
`,he=a.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: ${P.space01} solid ${c.border.primary};
`,R.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),_e,V,H,ve,ye,be,xe,Se,Ce,we=t((()=>{_e=i(),s(),o(),F(),N(),y(),V=n(),H=e=>{let t=(0,_e.c)(13),{footer:n,children:r}=e,i=k(),a=i.isPhone||i.hasSidebar,o;t[0]!==i.toggleSidebar||t[1]!==a?(o=a&&(0,V.jsx)(xe,{"data-testid":`rail-toggle-btn`,onClick:i.toggleSidebar,children:(0,V.jsx)(v,{})}),t[0]=i.toggleSidebar,t[1]=a,t[2]=o):o=t[2];let s;t[3]===o?s=t[4]:(s=(0,V.jsx)(ye,{children:(0,V.jsx)(be,{children:o})}),t[3]=o,t[4]=s);let c;t[5]===r?c=t[6]:(c=(0,V.jsx)(Se,{children:r}),t[5]=r,t[6]=c);let l;t[7]===n?l=t[8]:(l=n&&(0,V.jsx)(Ce,{children:n}),t[7]=n,t[8]=l);let u;return t[9]!==s||t[10]!==c||t[11]!==l?(u=(0,V.jsxs)(ve,{"data-testid":`rail-container`,children:[s,c,l]}),t[9]=s,t[10]=c,t[11]=l,t[12]=u):u=t[12],u},ve=a.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: 100%;

  background-color: ${c.surface.default};
  border-right: ${P.space01}
    solid ${c.border.primary};

  box-sizing: border-box;
`,ye=a.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  box-sizing: border-box;

  height: 80px;
  width: 100%;
  padding: 0 12px;

  border-bottom: ${P.space01}
    solid ${c.border.primary};
`,be=a.div`
  margin: auto;
  background: transparent;
`,xe=a.button`
  background: transparent;
  border: none;
  cursor: pointer;
`,Se=a.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.5rem 0;
`,Ce=a.div`
  padding: 0.75rem;
  flex-shrink: 0;

  border-top: ${P.space01}
    solid ${c.border.primary};

  display: flex;
  justify-content: center;
`,H.__docgenInfo={description:`A compact right rail (icon/tool strip style)
fixed width: 100px`,methods:[],displayName:`Rail`,props:{footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),U,W,Te,G,K,Ee,De,q,J,Y,X,Z,Q,$,Oe;t((()=>{U=i(),N(),o(),ge(),r(),we(),T(),W=n(),Te={title:`Components/Layout`,component:A,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{header:{control:!1},sidebar:{control:!1}}},G=e=>{let t=(0,U.c)(6),{label:n,backgroundColor:r,fontColor:i}=e,a;t[0]!==r||t[1]!==i?(a={backgroundColor:r,height:`100%`,display:`flex`,alignItems:`top`,justifyContent:`top`,color:i,fontWeight:`bold`},t[0]=r,t[1]=i,t[2]=a):a=t[2];let o;return t[3]!==n||t[4]!==a?(o=(0,W.jsx)(`div`,{style:a,children:n}),t[3]=n,t[4]=a,t[5]=o):o=t[5],o},K=e=>{let t=(0,U.c)(8),{icon:n,label:r,isActive:i}=e,a=`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${i?`bg-blue-600 text-white`:`text-gray-300 hover:bg-gray-800`}`,o;t[0]===n?o=t[1]:(o=(0,W.jsx)(`span`,{className:`w-5 h-5 flex items-center justify-center`,children:n}),t[0]=n,t[1]=o);let s;t[2]===r?s=t[3]:(s=(0,W.jsx)(`span`,{className:`font-medium text-sm`,children:r}),t[2]=r,t[3]=s);let c;return t[4]!==a||t[5]!==o||t[6]!==s?(c=(0,W.jsxs)(`div`,{className:a,children:[o,s]}),t[4]=a,t[5]=o,t[6]=s,t[7]=c):c=t[7],c},Ee=()=>{let e=(0,U.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(K,{label:`Dashboard`,isActive:!0,icon:(0,W.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,W.jsxs)(W.Fragment,{children:[t,(0,W.jsx)(K,{label:`Settings`,icon:(0,W.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},De=()=>{let e=(0,U.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(K,{label:``,isActive:!0,icon:(0,W.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,W.jsxs)(H,{children:[t,(0,W.jsx)(K,{label:``,icon:(0,W.jsxs)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20px`,height:`20px`,children:[(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`}),(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`})]})})]}),e[1]=n):n=e[1],n},q=()=>{let e=(0,U.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(R,{children:(0,W.jsx)(Ee,{})}),e[0]=t):t=e[0],t},J={args:{header:(0,W.jsx)(x,{children:`Header`}),sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})}},Y={args:{header:(0,W.jsx)(x,{children:`Header`}),sidebar:(0,W.jsx)(q,{}),rail:(0,W.jsx)(De,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})}},X={args:{sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})}},Z={args:{header:(0,W.jsx)(x,{children:`Header`}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})}},Q={args:{header:(0,W.jsx)(x,{children:`Header`}),rail:(0,W.jsx)(De,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})}},$={args:{header:(0,W.jsx)(x,{menuIcon:(0,W.jsx)(`span`,{style:{fontSize:20},children:`🍔`}),children:`Header`}),sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:c.surface.secondary,fontColor:c.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header>Header</Header>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header>Header</Header>,
    sidebar: <MySidebar />,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header>Header</Header>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header>Header</Header>,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header menuIcon={<span style={{
      fontSize: 20
    }}>🍔</span>}>Header</Header>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...$.parameters?.docs?.source}}},Oe=[`Default`,`WithRail`,`NoHeader`,`NoSidebar`,`NoSidebarWithRail`,`CustomMenuIcon`]}))();export{$ as CustomMenuIcon,J as Default,X as NoHeader,Z as NoSidebar,Q as NoSidebarWithRail,Y as WithRail,Oe as __namedExportsOrder,Te as default};