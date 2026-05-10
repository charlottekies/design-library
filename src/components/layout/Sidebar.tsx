import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../../tokens/semantic-color';
import { space } from '../../tokens/space';
// or your icon system
import { useLayout } from './Layout';


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
  const { toggleSidebar } = useLayout();

  return (
    <StyledSidebarContainer>
      
      <StyledSidebarHeader>
        <HeaderLeftSlot>
          {header}
        </HeaderLeftSlot>

        <HeaderRightSlot>
          <CloseButton onClick={toggleSidebar}>
            "X" 
          </CloseButton>
        </HeaderRightSlot>
      </StyledSidebarHeader>

      <StyledSidebarNav>
        {children}
      </StyledSidebarNav>

      {footer && (
        <StyledSidebarFooter>
          {footer}
        </StyledSidebarFooter>
      )}
    </StyledSidebarContainer>
  );
};


/* Styled Components */
const StyledSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${color.surface.default};
  border-right: ${space.space01} solid ${color.border.primary};
`;

const StyledSidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  flex-shrink: 0;
  border-bottom: ${space.space01} solid ${color.border.primary};
`;

const HeaderLeftSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
`;

const HeaderRightSlot = styled.div`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSidebarNav = styled.nav`
  flex: 1;
  overflow-y: auto;
`;

export const StyledSidebarFooter = styled.div`
  padding: 1rem;
  flex-shrink: 0;
  border-top: ${space.space01} solid ${color.border.primary};
`;