import styled from '@emotion/styled';

// 1. Define the prop types for the styled container
interface LayoutWrapperProps {
  hasHeader: boolean;
  hasSidebar: boolean;
}

// 2. Create the styled container with dynamic grid logic
export const LayoutWrapper = styled.div<LayoutWrapperProps>`
  display: grid;
  height: 100vh;
  
  /* Dynamic Columns: 260px if sidebar exists, else 1fr */
  grid-template-columns: ${props => (props.hasSidebar ? '300px 1fr' : '1fr')};
  
  /* Dynamic Rows: auto if header exists, else 1fr */
  grid-template-rows: ${props => (props.hasHeader ? 'auto 1fr' : '1fr')};
  
  grid-template-areas: ${props => {
    if (props.hasHeader && props.hasSidebar) {
      return `
        "sidebar header"
        "sidebar main"
      `;
    }
    if (props.hasHeader) {
      return `"header" "main"`;
    }
    if (props.hasSidebar) {
      return `"sidebar main"`;
    }
    return `"main"`;
  }};
`;

// TODO: use tokens
export const HeaderSlot = styled.header`
  grid-area: header;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

export const SidebarSlot = styled.div`
  grid-area: sidebar;
  height: 100%;
`;

export const MainContent = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 20px;
`;