import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useLayout } from '../layout/Layout';
import { Hamburger } from '../../icons/Hamburger';
import { color } from '../../tokens/semantic-color';

/**
 * Header is a layout-aware shell component.
 * It is responsible for rendering:
 * - header content
 * - optional sidebar toggle button
 *
 * Layout decides *when toggles are allowed* via context.
 */
export interface HeaderProps {
  children?: ReactNode;
  /**
   * Optional override for menu icon
   */
  menuIcon?: ReactNode;
}

export const Header = ({
  children,
  menuIcon = <Hamburger color="#ff00ff" />,
}: HeaderProps) => {
  const layoutContext = useLayout();

const shouldShowToggle = 
  (!layoutContext.hasRail && layoutContext.hasSidebar && !layoutContext.isOpen) || // condition 1
  (layoutContext.isPhone && (layoutContext.hasRail || layoutContext.hasSidebar)) // Condition 2 

  return (
    <StyledHeader data-testid="header-container">
      {shouldShowToggle && (
        <StyledToggleButton
          data-testid="header-toggle-btn"
          type="button"
          onClick={layoutContext.toggleSidebar}
          aria-label="Toggle navigation"
        >
          {menuIcon}
        </StyledToggleButton>
      )}

      <StyledContent $hasToggle={shouldShowToggle}>
        {children}
      </StyledContent>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${color.border.primary};
  background: ${color.surface.default};
`;

const StyledToggleButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  color: ${color.text.primary.default};
`;

const StyledContent = styled.div<{ $hasToggle: boolean }>`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  /* key layout contract: reserve space if toggle exists */
  padding-left: ${(p) => (p.$hasToggle ? '60px' : '0')};

  overflow: hidden;
`;