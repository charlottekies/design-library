import type { ReactNode } from 'react';
import styled from '@emotion/styled';


interface SidebarProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode; // This becomes the "Main/Nav" section
}

/* Main Component */

/** 
 * A Sidebar with optional header and footer content areas 
*/
export const Sidebar = ({ header, footer, children }: SidebarProps) => {
  return (
    <StyledSidebarContainer>
      {header && 
        <StyledSidebarHeader>
            {header}
        </StyledSidebarHeader>}
      
      <StyledSidebarNav>
        {children}
      </StyledSidebarNav>
      
      {footer && 
        <StyledSidebarFooter>
            {footer}
        </StyledSidebarFooter>}
    </StyledSidebarContainer>
  );
};

/* Styled Components */
const StyledSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
`;

const StyledSidebarHeader = styled.div`
  padding: 1rem;
  flex-shrink: 0;
  border-bottom: 1px solid #f1f5f9;
`;

export const StyledSidebarNav = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

export const StyledSidebarFooter = styled.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: 1px solid #f1f5f9;
  background-color: #f8fafc;
`;
