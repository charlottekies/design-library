import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../../tokens/semantic-color';
import { space } from '../../tokens/space';
import { useLayout } from './Layout';
import { Hamburger } from '../../icons/hamburger';

interface RailProps {
  footer?: ReactNode;
  children: ReactNode;
}

/**
 * A compact right rail (icon/tool strip style)
 * fixed width: 100px
 */
export const Rail = ({
  footer,
  children,
}: RailProps) => {
  const {
    toggleSidebar,
    railMode,
    isPhoneDevice,
  } = useLayout();

  const shouldShowClose =
    isPhoneDevice || !railMode;

  return (
    <StyledRailContainer>
      <StyledRailHeader>
        <HeaderSpacer />

        <HeaderRightSlot>
          {shouldShowClose && (
            <CloseButton
              onClick={toggleSidebar}
            >
              <Hamburger />
            </CloseButton>
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
  align-items: center;
  justify-content: space-between;

  height: 80px;
  flex: 0 0 80px;
  flex-shrink: 0;

  padding: 0 12px;

  border-bottom: ${space.space01}
    solid ${color.border.primary};
`;

/**
 * Empty left space so button
 * stays aligned consistently
 */
const HeaderSpacer = styled.div`
  flex: 1;
`;

/**
 * Fixed right slot
 * NEVER collapses
 */
const HeaderRightSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 40px;
`;

/**
 * Stable button footprint
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

export const StyledRailNav = styled.nav`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

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