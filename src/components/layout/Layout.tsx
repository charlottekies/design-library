import type { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface LayoutWrapperProps {
  hasHeader: boolean;
  hasSidebar: boolean;
}

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
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

export const HeaderSlot = styled.header`
  grid-area: header;
  z-index: 10;
`;

export const SidebarSlot = styled.div`
  grid-area: sidebar;
  height: 100%;
  overflow: hidden;
`;

export const MainContent = styled.main`
  grid-area: main;
  overflow-y: auto;
  position: relative;
`;

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}

export const Layout = ({ header, sidebar, children }: LayoutProps) => {
  return (
    <LayoutWrapper hasHeader={!!header} hasSidebar={!!sidebar}>
      {header && <HeaderSlot>{header}</HeaderSlot>}
      {sidebar && <SidebarSlot>{sidebar}</SidebarSlot>}
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};