import type { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}

/**
 * @param header spans top of layout
 * @param sidebar left navigation slot
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

/* Styled Components */
export interface StyledLayoutContainerProps {
  hasHeader: boolean;
  hasSidebar: boolean;
}

export const StyledLayoutContainer = styled.div<StyledLayoutContainerProps>`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  /* Base desktop layout */
  grid-template-columns: ${props => (props.hasSidebar ? '300px 1fr' : '1fr')};
  grid-template-rows: ${props => (props.hasHeader ? '100px 1fr' : '1fr')};

  grid-template-areas: ${props => {
    if (props.hasHeader && props.hasSidebar) {
      return `
        "sidebar header"
        "sidebar main"
      `;
    }

    if (props.hasHeader && !props.hasSidebar) {
      return `
        "header"
        "main"
      `;
    }

    if (!props.hasHeader && props.hasSidebar) {
      return `
        "sidebar main"
      `;
    }

    return `"main"`;
  }};

  /* Tablet: collapsed rail */
  @media (max-width: 1200px) {
    grid-template-columns: ${props =>
      props.hasSidebar ? '100px 1fr' : '1fr'};
  }

  /* Mobile: REMOVE sidebar from layout entirely */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${props =>
      props.hasHeader ? '100px 1fr' : '1fr'};

    grid-template-areas: ${props =>
      props.hasHeader ? `"header" "main"` : `"main"`};

    /* 🔥 CRITICAL FIX:
       Prevent orphan grid item behavior */
    & > *:nth-of-type(2) {
      grid-area: unset;
    }
  }
`;

export const StyledHeaderSlot = styled.header`
  grid-area: header;
  z-index: 10;
`;

export const StyledSidebarSlot = styled.aside`
  grid-area: sidebar;
  height: 100%;
  overflow: hidden;

  /* IMPORTANT FIX: Mobile must fully remove sidebar from grid flow */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMainContentArea = styled.main`
  grid-area: main;
  overflow-y: auto;
  position: relative;
`;