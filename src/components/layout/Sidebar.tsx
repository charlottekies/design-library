import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../../tokens/semantic-color';
import { space } from '../../tokens/space';
import { useLayout } from './Layout';
import { Hamburger } from '../../icons/Hamburger';

interface SidebarProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export const Sidebar = ({ header, footer, children }: SidebarProps) => {
  const layoutContext = useLayout();


  return (
    <StyledSidebarContainer 
      data-testid="sidebar-container"
    >
      <StyledSidebarHeader>
        <HeaderLeftSlot>
          {header}
        </HeaderLeftSlot>

        <HeaderRightSlot>
          <CloseButton 
            data-testid="sidebar-toggle-btn" 
            onClick={layoutContext.toggleSidebar}>
            <Hamburger />
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

/* =========================
   STYLES
   ========================= */

const StyledSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${color.surface.default};
  border-right: ${space.space01} solid ${color.border.primary};
`;

/**
 * FLEX HEADER (stable version)
 */
const StyledSidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${space.space01} solid ${color.border.primary};
`;

/**
 * LEFT SLOT
 * - can grow
 * - can shrink
 * - never breaks layout
 */
const HeaderLeftSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  flex: 1;
  min-width: 0;
`;

/**
 * RIGHT SLOT (FIXED)
 * - NEVER collapses
 * - always same footprint
 */
const HeaderRightSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 40px; 
`;

/**
 * BUTTON (fixed hit area)
 */
const CloseButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  flex-shrink: 0;
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