import type { ReactNode } from 'react';
import styled from '@emotion/styled';


/**
 * 
 * @param header is a slot that spans the width of the Layout container
 * @param sidebar is a slot that is where your sidebar content will go
 * @returns 
 */
export const Layout = ({ header, sidebar, children }: LayoutProps) => {
  return (
    <StyledLayoutContainer hasHeader={!!header} hasSidebar={!!sidebar}>
      {header && <StyledHeaderSlot>{header}</StyledHeaderSlot>}
      {sidebar && <StyledSidebarSlot>{sidebar}</StyledSidebarSlot>}
      <StyledMainContentArea>{children}</StyledMainContentArea>
    </StyledLayoutContainer>
  );
};

/** Styled Components */
export interface StyledLayoutContainerProps {
  hasHeader: boolean;
  hasSidebar: boolean;
}

export const StyledLayoutContainer = styled.div<StyledLayoutContainerProps>`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  grid-template-columns: ${props => (props.hasSidebar ? '300px 1fr' : '1fr')};
  grid-template-rows: ${props => (props.hasHeader ? '100px 1fr' : '1fr')};
  
  grid-template-areas: ${props => {
    if (props.hasHeader && props.hasSidebar) {
      return `
        "sidebar header"
        "sidebar main"
      `;
    }
    if (props.hasHeader) return `"header" "main"`;
    if (props.hasSidebar) return `"sidebar main"`;
    return `"main"`;
  }};
`;

export const StyledHeaderSlot = styled.header`
  grid-area: header;
  z-index: 10;
`;

export const StyledSidebarSlot = styled.div`
  grid-area: sidebar;
  height: 100%;
  overflow: hidden;
`;

export const StyledMainContentArea = styled.main`
  grid-area: main;
  overflow-y: auto;
  position: relative;
`;

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}