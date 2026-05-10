import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-B95RtUpL.js";import{t as n}from"./compiler-runtime-BGLzeY-d.js";import{i as r,n as i,r as a,t as o}from"./semantic-color-COP5VF85.js";var s,c,l,u,d,f,p,m,h=e((()=>{s=n(),a(),i(),c=t(),l=e=>{let t=(0,s.c)(12),{token:n,bg:r,description:i}=e,a;t[0]===r?a=t[1]:(a=(0,c.jsx)(f,{style:{background:r}}),t[0]=r,t[1]=a);let o;t[2]===n?o=t[3]:(o=(0,c.jsx)(`code`,{children:n}),t[2]=n,t[3]=o);let l;t[4]===i?l=t[5]:(l=(0,c.jsx)(`span`,{children:i}),t[4]=i,t[5]=l);let u;t[6]!==o||t[7]!==l?(u=(0,c.jsxs)(p,{children:[o,l]}),t[6]=o,t[7]=l,t[8]=u):u=t[8];let m;return t[9]!==a||t[10]!==u?(m=(0,c.jsxs)(d,{children:[a,u]}),t[9]=a,t[10]=u,t[11]=m):m=t[11],m},u=e=>{let t=(0,s.c)(5),{label:n,bg:r}=e,i;t[0]===r?i=t[1]:(i={background:r},t[0]=r,t[1]=i);let a;return t[2]!==n||t[3]!==i?(a=(0,c.jsx)(m,{style:i,children:n}),t[2]=n,t[3]=i,t[4]=a):a=t[4],a},d=r.div`
  border: 1px solid ${o.border.primary};
  border-radius: 12px;
  overflow: hidden;
  background: white;
`,f=r.div`
  height: 80px;
  width: 100%;
`,p=r.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  code { font-weight: 700; font-size: 0.85rem; color: ${o.primary.default}; }
  span { font-size: 0.8rem; opacity: 0.7; }
`,m=r.div`
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`,l.__docgenInfo={description:`HELPER COMPONENTS`,methods:[],displayName:`Swatch`,props:{token:{required:!0,tsType:{name:`string`},description:``},bg:{required:!0,tsType:{name:`string`},description:``},description:{required:!0,tsType:{name:`string`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`InteractiveDemo`,props:{label:{required:!0,tsType:{name:`string`},description:``},bg:{required:!0,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{a(),i(),h(),g=t(),_={title:`Tokens/Colors`},v={render:()=>(0,g.jsxs)(y,{children:[(0,g.jsxs)(`header`,{children:[(0,g.jsx)(x,{children:`Documentation`}),(0,g.jsx)(b,{children:`Color Tokens`})]}),(0,g.jsx)(`header`,{children:(0,g.jsxs)(S,{children:[(0,g.jsx)(`div`,{className:`label`,children:`Tokens`}),(0,g.jsx)(`h1`,{children:`1. Color Tokens`}),(0,g.jsx)(`p`,{children:`The following tokens are here to help you define a color palette across text, UI elements, and surfaces across your application`}),(0,g.jsx)(`p`,{children:`A default color palette has been created in this library for you, but if you want to style and define your own brand, you can override the variable values associated with each token in a global css file in your application.`})]})}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(`h2`,{children:`Surface Colors`}),(0,g.jsx)(`p`,{children:`Define UI layering and background structure.`})]}),(0,g.jsxs)(T,{children:[(0,g.jsx)(l,{token:`surface.default`,bg:o.surface.default,description:`Main application background`}),(0,g.jsx)(l,{token:`surface.secondary`,bg:o.surface.secondary,description:`Cards, panels, and sidebars`})]})]}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(`h2`,{children:`Text Colors`}),(0,g.jsx)(`p`,{children:`Standardized colors for readability and hierarchy.`})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(D,{color:o.text.primary.default,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:`Primary Text`}),` — Used for body content and headings.`]})}),(0,g.jsx)(D,{color:o.text.primary.default,opacity:.6,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:`Secondary Emphasis`}),` — Used for captions and supporting text.`]})}),(0,g.jsx)(D,{bg:o.primary.default,color:o.text.primary.inverse,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:`Inverse Text`}),` — High contrast text on primary backgrounds.`]})})]})]}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(`h2`,{children:`Primary Action Colors`}),(0,g.jsx)(`p`,{children:`Interactive states for buttons and clickable elements.`})]}),(0,g.jsxs)(O,{children:[(0,g.jsx)(u,{label:`Default`,bg:o.primary.default}),(0,g.jsx)(u,{label:`Hover`,bg:o.primary.hover}),(0,g.jsx)(u,{label:`Pressed`,bg:o.primary.pressed}),(0,g.jsx)(u,{label:`Disabled`,bg:o.primary.disabled})]})]}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(`h2`,{children:`Border & Outline Colors`}),(0,g.jsx)(`p`,{children:`Structural elements for containment and selection.`})]}),(0,g.jsxs)(T,{children:[(0,g.jsx)(k,{border:o.border.primary,children:`border.primary`}),(0,g.jsx)(k,{border:o.border.highlight,children:`border.highlight`})]})]})]})},y=r.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: ${o.text.primary.default};
  display: flex;
  flex-direction: column;
  gap: 64px;
`,b=r.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 8px 0 16px;
  letter-spacing: -0.02em;
`,x=r.span`
  background: ${o.primary.default}20;
  color: ${o.primary.default};
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`,S=r.div`
  .label {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: ${o.primary.default};
    margin-bottom: 4px;
  }
  h1 { 
    font-size: 2rem; 
    margin: 0 0 12px 0; 
  }
  p { 
    max-width: 650px; 
    line-height: 1.6; 
    opacity: 0.8; 
  }
`,C=r.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=r.div`
  border-bottom: 1px solid ${o.border.primary};
  padding-bottom: 16px;
  h2 { margin: 0; font-size: 1.5rem; }
  p { margin: 4px 0 0; opacity: 0.6; }
`,T=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,E=r.div`
  border: 1px solid ${o.border.primary};
  border-radius: 12px;
  overflow: hidden;
`,D=r.div`
  padding: 16px 20px;
  background: ${({bg:e})=>e||`transparent`};
  color: ${({color:e})=>e};
  opacity: ${({opacity:e})=>e||1};
  border-bottom: 1px solid ${o.border.primary};
  &:last-child { border-bottom: none; }
`,O=r.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,k=r.div`
  padding: 24px;
  border: 2px solid ${({border:e})=>e};
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  background: ${o.surface.secondary};
`,v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
            <header>
                <Badge>Documentation</Badge>
                <Title>Color Tokens</Title>
            </header>

              {/* COLOR SYSTEM HEADER */}
                <header>
                    <CategoryHeader>
                    <div className="label">Tokens</div>
                    <h1>1. Color Tokens</h1>
                    <p>
                        The following tokens are here to help you define a color palette across text, UI elements, and surfaces across your application
                    </p>
                    <p>
                        A default color palette has been created in this library for you, but if you want to style and define your own brand,
                        you can override the variable values associated with each token in a global css file in your application. 
                    </p>
                    </CategoryHeader>
                </header>

            {/* SURFACES */}
            <Section>
                <SectionHeader>
                    <h2>Surface Colors</h2>
                    <p>Define UI layering and background structure.</p>
                </SectionHeader>
                <Grid>
                    <Swatch token="surface.default" bg={color.surface.default} description="Main application background" />
                    <Swatch token="surface.secondary" bg={color.surface.secondary} description="Cards, panels, and sidebars" />
                </Grid>
            </Section>

            {/* TEXT */}
            <Section>
                <SectionHeader>
                    <h2>Text Colors</h2>
                    <p>Standardized colors for readability and hierarchy.</p>
                </SectionHeader>
                <Card>
                    <TextRow color={color.text.primary.default}>
                        <div><strong>Primary Text</strong> — Used for body content and headings.</div>
                    </TextRow>
                    <TextRow color={color.text.primary.default} opacity={0.6}>
                        <div><strong>Secondary Emphasis</strong> — Used for captions and supporting text.</div>
                    </TextRow>
                    <TextRow bg={color.primary.default} color={color.text.primary.inverse}>
                        <div><strong>Inverse Text</strong> — High contrast text on primary backgrounds.</div>
                    </TextRow>
                </Card>
            </Section>

            {/* PRIMARY */}
            <Section>
                <SectionHeader>
                    <h2>Primary Action Colors</h2>
                    <p>Interactive states for buttons and clickable elements.</p>
                </SectionHeader>
                <Row>
                    <InteractiveDemo label="Default" bg={color.primary.default} />
                    <InteractiveDemo label="Hover" bg={color.primary.hover} />
                    <InteractiveDemo label="Pressed" bg={color.primary.pressed} />
                    <InteractiveDemo label="Disabled" bg={color.primary.disabled} />
                </Row>
            </Section>

            {/* BORDERS */}
            <Section>
                <SectionHeader>
                    <h2>Border & Outline Colors</h2>
                    <p>Structural elements for containment and selection.</p>
                </SectionHeader>
                <Grid>
                    <BorderCard border={color.border.primary}>border.primary</BorderCard>
                    <BorderCard border={color.border.highlight}>border.highlight</BorderCard>
                </Grid>
            </Section>
        </Page>
}`,...v.parameters?.docs?.source}}},A=[`Colors`]}))();export{v as Colors,A as __namedExportsOrder,_ as default};