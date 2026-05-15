import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../../tokens/color/semantic';
import { space } from '../../tokens/space';
import { useLayout } from '../layout/Layout';
import { Hamburger } from '../../icons/Hamburger';

interface RailProps {
  footer?: ReactNode;
  children: ReactNode;
}

/**
 * A compact right rail (icon/tool strip style)
 * fixed width: 100px
 */
export const LayoutRail = ({
  footer,
  children,
}: RailProps) => {
  const layoutContext = useLayout();

  const shouldShowClose = (layoutContext.isPhone || (layoutContext.hasSidebar))

  return (
    <StyledRailContainer data-testid="rail-container">
      <StyledRailHeader>

        <HeaderRightSlot>

          {shouldShowClose && (
            <StyledCloseButton
              data-testid="rail-toggle-btn" 
              onClick={layoutContext.toggleSidebar}
            >
              <Hamburger />
            </StyledCloseButton>
          )}
        </HeaderRightSlot>

      </StyledRailHeader>

      <StyledRailNav>
        {children}
      </StyledRailNav>

      {footer && (
        <StyledRailFooter>
          {footer}
        </StyledRailFooter>
      )}
    </StyledRailContainer>
  );
};

/* STYLED COMPONENTS  */

const StyledRailContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: 100%;

  background-color: ${color.surface.default};
  border-right: ${space.space01}
    solid ${color.border.primary};

  box-sizing: border-box;
`;

/**
 * Stable flex header
 */
const StyledRailHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  box-sizing: border-box;

  height: 80px;
  width: 100%;
  padding: 0 12px;

  border-bottom: ${space.space01}
    solid ${color.border.primary};
`;

/**
 * Fixed right slot
 * NEVER collapses
 */
const HeaderRightSlot = styled.div`
  margin: auto;
  background: transparent;
`;

/**
 * Stable button footprint
 */
const StyledCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledRailNav = styled.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;

  padding: 0.5rem 0;
`;

export const StyledRailFooter = styled.div`
  padding: 0.75rem;
  flex-shrink: 0;

  border-top: ${space.space01}
    solid ${color.border.primary};

  display: flex;
  justify-content: center;
`;