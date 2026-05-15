import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n,u as r}from"./iframe-Cy_hy2LA.js";import{t as i}from"./compiler-runtime-DMcVA_aZ.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./semantic-AK5FhGlg.js";var d,f=t((()=>{d={drawer:1e3,flyout:800,tooltip:600,modal:400}})),p,m=t((()=>{p={small:16,medium:24,large:32}})),h,g,_,ee=t((()=>{h=i(),s(),m(),g=n(),_=e=>{let t=(0,h.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({size:a,style:i,children:n,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=p[a===void 0?`medium`:a],s;t[5]===i?s=t[6]:(s={color:u.text.primary.default,...i},t[5]=i,t[6]=s);let c;return t[7]!==n||t[8]!==o||t[9]!==r||t[10]!==s?(c=(0,g.jsx)(`svg`,{width:o,height:o,viewBox:`0 0 24 24`,fill:`none`,style:s,"aria-hidden":`true`,...r,children:n}),t[7]=n,t[8]=o,t[9]=r,t[10]=s,t[11]=c):c=t[11],c},_.__docgenInfo={description:``,methods:[],displayName:`BaseIcon`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`SVGProps`]}})),v,y,b,x=t((()=>{v=i(),ee(),y=n(),b=e=>{let t=(0,v.c)(5),n,r,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,y.jsx)(`path`,{d:`M4 4H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),r=(0,y.jsx)(`path`,{d:`M4 12H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),i=(0,y.jsx)(`path`,{d:`M4 20H20`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`}),t[0]=n,t[1]=r,t[2]=i):(n=t[0],r=t[1],i=t[2]);let a;return t[3]===e?a=t[4]:(a=(0,y.jsxs)(_,{...e,children:[n,r,i]}),t[3]=e,t[4]=a),a},b.__docgenInfo={description:``,methods:[],displayName:`Hamburger`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``}},composes:[`SVGProps`]}})),S,C,w,T,E,D=t((()=>{l(),P(),x(),s(),S=n(),C=({children:e,menuIcon:t=(0,S.jsx)(b,{color:`#ff00ff`})})=>{let n=A(),r=!n.hasRail&&n.hasSidebar&&!n.isOpen||n.isPhone&&(n.hasRail||n.hasSidebar);return(0,S.jsxs)(w,{"data-testid":`header-container`,children:[r&&(0,S.jsx)(T,{"data-testid":`header-toggle-btn`,type:`button`,onClick:n.toggleSidebar,"aria-label":`Toggle navigation`,children:t}),(0,S.jsx)(E,{$hasToggle:r,children:e})]})},w=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${u.border.primary};
  background: ${u.surface.default};
`,T=o.button`
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

  color: ${u.text.primary.default};
`,E=o.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  /* key layout contract: reserve space if toggle exists */
  padding-left: ${e=>e.$hasToggle?`60px`:`0`};

  overflow: hidden;
`,C.__docgenInfo={description:``,methods:[],displayName:`LayoutHeader`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},menuIcon:{required:!1,tsType:{name:`ReactNode`},description:`Optional override for menu icon`,defaultValue:{value:`<Hamburger color="#ff00ff" />`,computed:!1}}}}}));function te(e){return!e}var ne,O,k,re,A,j,ie,M,N,ae,oe,se,ce,le,ue,de,P=t((()=>{ne=i(),l(),O=e(r(),1),s(),f(),D(),k=n(),re=(0,O.createContext)(null),A=()=>{let e=(0,O.useContext)(re);if(!e)throw Error(`useLayout must be used within Layout`);return e},j=e=>{let t=(0,ne.c)(49),{header:n,sidebar:r,rail:i,children:a}=e,[o,s]=(0,O.useState)(!1),[c,l]=(0,O.useState)(!1),u;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=window.matchMedia(`(max-width: 786px)`),t[0]=u):u=t[0];let d=u,f;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=window.matchMedia(`(pointer: coarse)`),t[1]=f):f=t[1];let p=f,m=d.matches&&p.matches,h;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{s(te)},t[2]=h):h=t[2];let g=h,_;t[3]!==o||t[4]!==c||t[5]!==i||t[6]!==r?(_=()=>{if(!c){if(r&&o)return r;if(r&&i&&!o||!r&&i)return i}if(c)return i&&r?o?r:i:r&&!i?o?r:null:i&&!r?i:null},t[3]=o,t[4]=c,t[5]=i,t[6]=r,t[7]=_):_=t[7];let ee=_,v,y;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(v=()=>{let e=window.matchMedia(`(max-width: 786px)`),t=()=>{l(e.matches)};return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},y=[],t[8]=v,t[9]=y):(v=t[8],y=t[9]),(0,O.useEffect)(v,y);let b,x;t[10]!==c||t[11]!==i||t[12]!==r?(b=()=>{if(m){s(!1);return}if(c){s(!1);return}(r||i)&&s(!0)},x=[m,c,r,i],t[10]=c,t[11]=i,t[12]=r,t[13]=b,t[14]=x):(b=t[13],x=t[14]),(0,O.useEffect)(b,x);let S=!!r,C=!!i,w=!!n,T;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>g(),t[15]=T):T=t[15];let E;t[16]!==o||t[17]!==c||t[18]!==C||t[19]!==w||t[20]!==S?(E={isOpen:o,isSmallViewport:c,isPhone:m,hasSidebar:S,hasRail:C,hasHeader:w,toggleSidebar:T},t[16]=o,t[17]=c,t[18]=C,t[19]=w,t[20]=S,t[21]=E):E=t[21];let D=E,A=m&&!n,j=!!n,M=!!r,N=!!i,P;t[22]!==o||t[23]!==i||t[24]!==ee||t[25]!==r?(P=!m&&(!!r||!!i)&&(0,k.jsx)(ce,{isVisible:o,"data-testid":`layout-sidebar`,children:ee()}),t[22]=o,t[23]=i,t[24]=ee,t[25]=r,t[26]=P):P=t[26];let F;t[27]!==o||t[28]!==i||t[29]!==r?(F=m&&(!!r||!!i)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(de,{"data-testid":`layout-drawer-overlay`,isOpen:o,onClick:()=>g}),(0,k.jsx)(ue,{"data-testid":`layout-drawer`,hasSidebar:!!r,"data-open":o,children:r||i})]}),t[27]=o,t[28]=i,t[29]=r,t[30]=F):F=t[30];let I;t[31]!==n||t[32]!==A?(I=(!!n||A)&&(0,k.jsx)(oe,{"data-testid":`layout-header`,children:(0,k.jsx)(se,{children:n||ie})}),t[31]=n,t[32]=A,t[33]=I):I=t[33];let L;t[34]===a?L=t[35]:(L=(0,k.jsx)(le,{"data-testid":`layout-main`,children:a}),t[34]=a,t[35]=L);let R;t[36]!==o||t[37]!==c||t[38]!==j||t[39]!==M||t[40]!==N||t[41]!==P||t[42]!==F||t[43]!==I||t[44]!==L?(R=(0,k.jsxs)(ae,{"data-testid":`layout-grid`,isPhone:m,isSmallViewport:c,isOpen:o,hasHeader:j,hasSidebar:M,hasRail:N,children:[P,F,I,L]}),t[36]=o,t[37]=c,t[38]=j,t[39]=M,t[40]=N,t[41]=P,t[42]=F,t[43]=I,t[44]=L,t[45]=R):R=t[45];let z;return t[46]!==D||t[47]!==R?(z=(0,k.jsx)(re.Provider,{value:D,children:R}),t[46]=D,t[47]=R,t[48]=z):z=t[48],z},ie=(0,k.jsx)(C,{}),M=`300px`,N=`100px`,ae=o.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  /* =========================
     GRID COLUMNS
     ========================= */
  grid-template-columns: ${e=>e.isPhone?`minmax(0, 1fr)`:!e.hasSidebar&&!e.hasRail?`0px minmax(0, 1fr)`:e.isSmallViewport?e.hasSidebar&&e.hasRail?e.isOpen?`${M} minmax(0, 1fr)`:`${N} minmax(0, 1fr)`:!e.hasSidebar&&e.hasRail?`${N} minmax(0, 1fr)`:e.hasSidebar&&!e.hasRail?e.isOpen?`${M} minmax(0, 1fr)`:`0px minmax(0, 1fr)`:`minmax(0, 1fr)`:e.hasSidebar&&e.hasRail?e.isOpen?`${M} minmax(0, 1fr)`:`100px minmax(0, 1fr)`:!e.hasSidebar&&e.hasRail?`${N} minmax(0, 1fr)`:e.hasSidebar&&!e.hasRail?e.isOpen?`${M} minmax(0, 1fr)`:`0px minmax(0, 1fr)`:`minmax(0, 1fr)`};

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
`,oe=o.header`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.$isDefaultMobile?u.surface.default:`transparent`};
  color: ${e=>e.$isDefaultMobile?`#fff`:`inherit`};
  border-bottom: 1px solid ${u.border.primary};
`,se=o.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ce=o.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`,le=o.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`,ue=o.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.hasSidebar?`300px`:`100px`};
  height: 100vh;
  background: white;
  z-index: ${d.drawer};
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-open='true'] {
    transform: translateX(0);
  }
`,de=o.div`
  display: ${e=>e.isOpen?`block`:`none`};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${d.drawer};
`,j.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},sidebar:{required:!1,tsType:{name:`ReactNode`},description:``},rail:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),F,I=t((()=>{F={space01:`1px`,space02:`2px`,space03:`3px`,space04:`4px`,space05:`8px`,space06:`10px`,space07:`12px`,space08:`24px`,space09:`32px`,space10:`36px`,space11:`40px`}})),L,R,z,fe,pe,me,he,ge,_e,ve,ye=t((()=>{L=i(),l(),s(),I(),P(),x(),R=n(),z=e=>{let t=(0,L.c)(16),{header:n,footer:r,children:i}=e,a=A(),o;t[0]===n?o=t[1]:(o=(0,R.jsx)(me,{children:n}),t[0]=n,t[1]=o);let s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,R.jsx)(b,{}),t[2]=s):s=t[2];let c;t[3]===a.toggleSidebar?c=t[4]:(c=(0,R.jsx)(he,{children:(0,R.jsx)(ge,{"data-testid":`sidebar-toggle-btn`,onClick:a.toggleSidebar,children:s})}),t[3]=a.toggleSidebar,t[4]=c);let l;t[5]!==o||t[6]!==c?(l=(0,R.jsxs)(pe,{children:[o,c]}),t[5]=o,t[6]=c,t[7]=l):l=t[7];let u;t[8]===i?u=t[9]:(u=(0,R.jsx)(_e,{children:i}),t[8]=i,t[9]=u);let d;t[10]===r?d=t[11]:(d=r&&(0,R.jsx)(ve,{children:r}),t[10]=r,t[11]=d);let f;return t[12]!==l||t[13]!==u||t[14]!==d?(f=(0,R.jsxs)(fe,{"data-testid":`sidebar-container`,children:[l,u,d]}),t[12]=l,t[13]=u,t[14]=d,t[15]=f):f=t[15],f},fe=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${u.surface.default};
  border-right: ${F.space01} solid ${u.border.primary};
`,pe=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${F.space01} solid ${u.border.primary};
`,me=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  flex: 1;
  min-width: 0;
`,he=o.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 40px; 
`,ge=o.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  flex-shrink: 0;
`,_e=o.nav`
  flex: 1;
  overflow-y: auto;
  min-width: 0;
`,ve=o.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: ${F.space01} solid ${u.border.primary};
`,z.__docgenInfo={description:``,methods:[],displayName:`LayoutSidebar`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),be,B,xe,Se,Ce,we,Te,Ee,De,Oe=t((()=>{be=i(),l(),s(),I(),P(),x(),B=n(),xe=e=>{let t=(0,be.c)(13),{footer:n,children:r}=e,i=A(),a=i.isPhone||i.hasSidebar,o;t[0]!==i.toggleSidebar||t[1]!==a?(o=a&&(0,B.jsx)(Te,{"data-testid":`rail-toggle-btn`,onClick:i.toggleSidebar,children:(0,B.jsx)(b,{})}),t[0]=i.toggleSidebar,t[1]=a,t[2]=o):o=t[2];let s;t[3]===o?s=t[4]:(s=(0,B.jsx)(Ce,{children:(0,B.jsx)(we,{children:o})}),t[3]=o,t[4]=s);let c;t[5]===r?c=t[6]:(c=(0,B.jsx)(Ee,{children:r}),t[5]=r,t[6]=c);let l;t[7]===n?l=t[8]:(l=n&&(0,B.jsx)(De,{children:n}),t[7]=n,t[8]=l);let u;return t[9]!==s||t[10]!==c||t[11]!==l?(u=(0,B.jsxs)(Se,{"data-testid":`rail-container`,children:[s,c,l]}),t[9]=s,t[10]=c,t[11]=l,t[12]=u):u=t[12],u},Se=o.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: 100%;

  background-color: ${u.surface.default};
  border-right: ${F.space01}
    solid ${u.border.primary};

  box-sizing: border-box;
`,Ce=o.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  box-sizing: border-box;

  height: 80px;
  width: 100%;
  padding: 0 12px;

  border-bottom: ${F.space01}
    solid ${u.border.primary};
`,we=o.div`
  margin: auto;
  background: transparent;
`,Te=o.button`
  background: transparent;
  border: none;
  cursor: pointer;
`,Ee=o.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;

  padding: 0.5rem 0;
`,De=o.div`
  padding: 0.75rem;
  flex-shrink: 0;

  border-top: ${F.space01}
    solid ${u.border.primary};

  display: flex;
  justify-content: center;
`,xe.__docgenInfo={description:`A compact right rail (icon/tool strip style)
fixed width: 100px`,methods:[],displayName:`LayoutRail`,props:{footer:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),ke,Ae=t((()=>{ke={fontFamily:{primary:`var(--font-family-primary)`,mono:`var(--font-family-mono)`},text:{h1:{fontSize:`var(--text-h1-font-size)`,lineHeight:`var(--text-h1-line-height)`,fontWeight:`var(--text-h1-font-weight)`,letterSpacing:`var(--text-h1-letter-spacing)`},h2:{fontSize:`var(--text-h2-font-size)`,lineHeight:`var(--text-h2-line-height)`,fontWeight:`var(--text-h2-font-weight)`,letterSpacing:`var(--text-h2-letter-spacing)`},h3:{fontSize:`var(--text-h3-font-size)`,lineHeight:`var(--text-h3-line-height)`,fontWeight:`var(--text-h3-font-weight)`,letterSpacing:`var(--text-h3-letter-spacing)`},h4:{fontSize:`var(--text-h4-font-size)`,lineHeight:`var(--text-h4-line-height)`,fontWeight:`var(--text-h4-font-weight)`,letterSpacing:`var(--text-h4-letter-spacing)`},body:{fontSize:`var(--text-body-font-size)`,lineHeight:`var(--text-body-line-height)`,fontWeight:`var(--text-body-font-weight)`,letterSpacing:`var(--text-body-letter-spacing)`},bodySmall:{fontSize:`var(--text-body-small-font-size)`,lineHeight:`var(--text-body-small-line-height)`,fontWeight:`var(--text-body-small-font-weight)`,letterSpacing:`var(--text-body-small-letter-spacing)`},caption:{fontSize:`var(--text-caption-font-size)`,lineHeight:`var(--text-caption-line-height)`,fontWeight:`var(--text-caption-font-weight)`,letterSpacing:`var(--text-caption-letter-spacing)`}}}})),je,Me,Ne,Pe,V,Fe,H,Ie=t((()=>{je=i(),l(),c(),s(),Ae(),Me=n(),Ne={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,body:`p`,bodySmall:`span`,caption:`span`},Pe={regular:`400`,medium:`500`,semibold:`600`,bold:`700`},V=({$variant:e,$color:t,$italic:n,$underline:r,$weight:i,$align:o,$truncate:s,$mono:c})=>{let l=ke.text[e];return a`
    margin: 0;
    padding: 0;

    color: ${t??u.text.primary.default};

    font-family: ${c?`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`:ke.fontFamily.primary};

    font-size: ${l.fontSize};
    line-height: ${l.lineHeight};
    letter-spacing: ${l.letterSpacing};

    font-weight: ${i?Pe[i]:l.fontWeight};

    font-style: ${n?`italic`:`normal`};

    text-decoration: ${r?`underline`:`none`};

    text-align: ${o??`left`};

    overflow-wrap: break-word;

    ${s&&a`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  `},Fe={h1:o.h1(V),h2:o.h2(V),h3:o.h3(V),h4:o.h4(V),p:o.p(V),span:o.span(V)},H=e=>{let t=(0,je.c)(11),{children:n,variant:r,renderAs:i,color:a,italic:o,underline:s,weight:c,align:l,truncate:u,mono:d}=e,f=r===void 0?`body`:r,p=Fe[i??Ne[f]],m;return t[0]!==p||t[1]!==l||t[2]!==n||t[3]!==a||t[4]!==o||t[5]!==d||t[6]!==u||t[7]!==s||t[8]!==f||t[9]!==c?(m=(0,Me.jsx)(p,{$variant:f,$color:a,$italic:o,$underline:s,$weight:c,$align:l,$truncate:u,$mono:d,children:n}),t[0]=p,t[1]=l,t[2]=n,t[3]=a,t[4]=o,t[5]=d,t[6]=u,t[7]=s,t[8]=f,t[9]=c,t[10]=m):m=t[10],m},H.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'body'
| 'bodySmall'
| 'caption'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'body'`},{name:`literal`,value:`'bodySmall'`},{name:`literal`,value:`'caption'`}]},description:``,defaultValue:{value:`'body'`,computed:!1}},renderAs:{required:!1,tsType:{name:`union`,raw:`| 'span'
| 'p'
| 'h1'
| 'h2'
| 'h3'
| 'h4'`,elements:[{name:`literal`,value:`'span'`},{name:`literal`,value:`'p'`},{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`}]},description:``},color:{required:!1,tsType:{name:`string`},description:``},italic:{required:!1,tsType:{name:`boolean`},description:``},underline:{required:!1,tsType:{name:`boolean`},description:``},weight:{required:!1,tsType:{name:`union`,raw:`| 'regular'
| 'medium'
| 'semibold'
| 'bold'`,elements:[{name:`literal`,value:`'regular'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semibold'`},{name:`literal`,value:`'bold'`}]},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``},truncate:{required:!1,tsType:{name:`boolean`},description:``},mono:{required:!1,tsType:{name:`boolean`},description:``}}}})),U,W,Le,G,K,Re,ze,q,J,Y,X,Z,Q,$,Be;t((()=>{U=i(),r(),P(),s(),ye(),Oe(),D(),Ie(),I(),W=n(),Le={title:`Components/Layout`,component:j,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{header:{control:!1},sidebar:{control:!1}}},G=e=>{let t=(0,U.c)(8),{label:n,backgroundColor:r,fontColor:i}=e,a;t[0]!==r||t[1]!==i?(a={backgroundColor:r,height:`100%`,display:`flex`,alignItems:`flex-start`,justifyContent:`flex-start`,color:i,padding:F.space07},t[0]=r,t[1]=i,t[2]=a):a=t[2];let o;t[3]===n?o=t[4]:(o=(0,W.jsx)(H,{variant:`h2`,children:n}),t[3]=n,t[4]=o);let s;return t[5]!==a||t[6]!==o?(s=(0,W.jsx)(`div`,{style:a,children:o}),t[5]=a,t[6]=o,t[7]=s):s=t[7],s},K=e=>{let t=(0,U.c)(13),{icon:n,label:r,isActive:i}=e,a=i?u.primary.default:`transparent`,o;t[0]===a?o=t[1]:(o={display:`flex`,alignItems:`center`,padding:`${F.space07} ${F.space07}`,borderRadius:6,cursor:`pointer`,background:a},t[0]=a,t[1]=o);let s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(s={width:20,height:20},t[2]=s):s=t[2];let c;t[3]===n?c=t[4]:(c=(0,W.jsx)(`span`,{style:s,children:n}),t[3]=n,t[4]=c);let l=i?u.text.primary.inverse:u.text.primary.default,d=i?`bold`:`regular`,f;t[5]!==r||t[6]!==l||t[7]!==d?(f=(0,W.jsx)(H,{variant:`body`,color:l,weight:d,children:r}),t[5]=r,t[6]=l,t[7]=d,t[8]=f):f=t[8];let p;return t[9]!==o||t[10]!==c||t[11]!==f?(p=(0,W.jsxs)(`div`,{style:o,children:[c,f]}),t[9]=o,t[10]=c,t[11]=f,t[12]=p):p=t[12],p},Re=()=>{let e=(0,U.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(K,{label:`Dashboard`,isActive:!0,icon:(0,W.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20`,height:`20`,children:(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25`})})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,W.jsxs)(W.Fragment,{children:[t,(0,W.jsx)(K,{label:`Settings`,icon:(0,W.jsx)(`svg`,{xmlns:`http://w3.org`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,width:`20`,height:`20`,children:(0,W.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z`})})})]}),e[1]=n):n=e[1],n},ze=()=>{let e=(0,U.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(K,{label:``,isActive:!0,icon:(0,W.jsx)(`span`,{children:`🏠`})}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,W.jsxs)(xe,{children:[t,(0,W.jsx)(K,{label:``,icon:(0,W.jsx)(`span`,{children:`⚙️`})})]}),e[1]=n):n=e[1],n},q=()=>{let e=(0,U.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,W.jsx)(z,{children:(0,W.jsx)(Re,{})}),e[0]=t):t=e[0],t},J={args:{header:(0,W.jsx)(C,{children:(0,W.jsx)(H,{variant:`h2`,renderAs:`span`,children:`Header`})}),sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})}},Y={args:{header:(0,W.jsx)(C,{children:(0,W.jsx)(H,{variant:`h2`,renderAs:`span`,children:`Header`})}),sidebar:(0,W.jsx)(q,{}),rail:(0,W.jsx)(ze,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})}},X={args:{sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})}},Z={args:{header:(0,W.jsx)(C,{children:(0,W.jsx)(H,{variant:`h2`,renderAs:`span`,children:`Header`})}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})}},Q={args:{header:(0,W.jsx)(C,{children:(0,W.jsx)(H,{variant:`h2`,renderAs:`span`,children:`Header`})}),rail:(0,W.jsx)(ze,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})}},$={args:{header:(0,W.jsx)(C,{menuIcon:(0,W.jsx)(`span`,{style:{fontSize:20},children:`🍔`}),children:(0,W.jsx)(H,{variant:`h2`,renderAs:`span`,children:`Header`})}),sidebar:(0,W.jsx)(q,{}),children:(0,W.jsx)(G,{label:`Main Content`,backgroundColor:u.surface.secondary,fontColor:u.text.primary.default})},parameters:{viewport:{defaultViewport:`mobile`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    header: <LayoutHeader><Text variant="h2" renderAs='span'>Header</Text></LayoutHeader>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    header: <LayoutHeader><Text variant="h2" renderAs='span'>Header</Text></LayoutHeader>,
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
    header: <LayoutHeader><Text variant="h2" renderAs='span'>Header</Text></LayoutHeader>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    header: <LayoutHeader><Text variant="h2" renderAs='span'>Header</Text></LayoutHeader>,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    header: <LayoutHeader menuIcon={<span style={{
      fontSize: 20
    }}>🍔</span>}>
        <Text variant='h2' renderAs='span'>Header</Text>
      </LayoutHeader>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...$.parameters?.docs?.source}}},Be=[`Default`,`WithRail`,`NoHeader`,`NoSidebar`,`NoSidebarWithRail`,`CustomMenuIcon`]}))();export{$ as CustomMenuIcon,J as Default,X as NoHeader,Z as NoSidebar,Q as NoSidebarWithRail,Y as WithRail,Be as __namedExportsOrder,Le as default};