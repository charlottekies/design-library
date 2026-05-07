import type { ReactNode } from 'react';
import styled from '@emotion/styled';

/** 
 * Internal Styled Components (Exported for advanced customization)
 */
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  flex-shrink: 0;
  border-bottom: 1px solid #f1f5f9;
`;

export const SidebarNav = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

export const SidebarFooter = styled.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: 1px solid #f1f5f9;
  background-color: #f8fafc;
`;

/**
 * Main Component
 */
interface SidebarProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode; // This becomes the "Main/Nav" section
}

export const Sidebar = ({ header, footer, children }: SidebarProps) => {
  return (
    <SidebarContainer>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      
      <SidebarNav>
        {children}
      </SidebarNav>
      
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </SidebarContainer>
  );
};