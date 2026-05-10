import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./iframe-B95RtUpL.js";import{i as n,n as r,r as i,t as a}from"./semantic-color-COP5VF85.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),r(),o=t(),s={title:`Tokens/Overview`},c={render:()=>(0,o.jsxs)(l,{children:[(0,o.jsxs)(`header`,{children:[(0,o.jsx)(d,{children:`Documentation`}),(0,o.jsx)(u,{children:`Design Tokens and How to Use Them`}),(0,o.jsxs)(f,{children:[`There are currently three types of design tokens in this library:`,(0,o.jsx)(`strong`,{children:` Color`}),`, `,(0,o.jsx)(`strong`,{children:`Spacing`}),`, and `,(0,o.jsx)(`strong`,{children:`Borders`}),`.`]})]}),(0,o.jsx)(p,{children:(0,o.jsxs)(`div`,{className:`content`,children:[(0,o.jsx)(`h3`,{children:`Why use tokens?`}),(0,o.jsx)(`p`,{children:`Using tokens is a way to keep the style of your application consistent across multiple pages and feature areas. Consistent color tokens, border radiuses, and fonts give your application a unified, professional feel.`}),(0,o.jsxs)(`p`,{children:[`Most importantly, if you decide to change a theme color—from`,(0,o.jsx)(m,{bg:a.primary.pressed}),` `,(0,o.jsx)(`strong`,{children:`this shade`}),` to`,(0,o.jsx)(m,{bg:a.primary.hover}),` `,(0,o.jsx)(`strong`,{children:`this one`}),`—you only need to make that change in `,(0,o.jsx)(`em`,{children:`one`}),` place!`]}),(0,o.jsxs)(`p`,{children:[`When you update the hex value associated with a reusable token, everywhere across the app that uses it will see the color `,(0,o.jsx)(`strong`,{children:`magically update`}),`.`]})]})})]})},l=n.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: ${a.text.primary.default};
  display: flex;
  flex-direction: column;
  gap: 64px;
`,u=n.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 8px 0 16px;
  letter-spacing: -0.02em;
`,d=n.span`
  background: ${a.primary.default}20;
  color: ${a.primary.default};
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`,f=n.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 700px;
`,p=n.div`
  background: ${a.surface.secondary};
  border-left: 4px solid ${a.primary.default};
  padding: 24px 32px;
  border-radius: 0 12px 12px 0;
  max-width: 800px;
  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 1.6;
    font-size: 1.05rem;
  }
`,m=n.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin: 0 4px;
  border-radius: 3px;
  background: ${({bg:e})=>e};
  border: 1px solid rgba(0,0,0,0.1);
`,c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <header>
        <Badge>Documentation</Badge>
        <Title>Design Tokens and How to Use Them</Title>
        <IntroText>
          There are currently three types of design tokens in this library: 
          <strong> Color</strong>, <strong>Spacing</strong>, and <strong>Borders</strong>.
        </IntroText>
      </header>

      <InfoSection>
        <div className="content">
          <h3>Why use tokens?</h3>
          <p>
            Using tokens is a way to keep the style of your application consistent across multiple 
            pages and feature areas. Consistent color tokens, border radiuses, and fonts give 
            your application a unified, professional feel.
          </p>
          <p>
            Most importantly, if you decide to change a theme color—from 
            <InlineSwatch bg={color.primary.pressed} /> <strong>this shade</strong> to 
            <InlineSwatch bg={color.primary.hover} /> <strong>this one</strong>—you 
            only need to make that change in <em>one</em> place!
          </p>
          <p>
            When you update the hex value associated with a reusable token, everywhere 
            across the app that uses it will see the color <strong>magically update</strong>.
          </p>
        </div>
      </InfoSection>
    </Page>
}`,...c.parameters?.docs?.source},description:{story:`STORY 1: OVERVIEW`,...c.parameters?.docs?.description}}},h=[`Overview`]}))();export{c as Overview,h as __namedExportsOrder,s as default};