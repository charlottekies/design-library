import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../../tokens/semantic-color';
import { space } from '../../tokens/space';
import { useLayout } from './Layout';

interface RailProps {
  footer?: ReactNode;
  children: ReactNode;
}

/**
 * A compact right rail (icon/tool strip style)
 * fixed width: 100px
 */
export const Rail = ({  footer, children }: RailProps) => {
  const { toggleSidebar } = useLayout(); // assume you add this or reuse pattern

  return (
    <StyledRailContainer>
        <StyledRailHeader>
          <CloseButton onClick={toggleSidebar}>
            X
          </CloseButton>
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

/* =========================
   STYLED COMPONENTS
   ========================= */

const StyledRailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  background-color: ${color.surface.default};
  border-right: ${space.space01} solid ${color.border.primary};
  box-sizing: border-box;
`;

const StyledRailHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  flex-shrink: 0;
  border-bottom: ${space.space01} solid ${color.border.primary};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
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
  border-top: ${space.space01} solid ${color.border.primary};

  display: flex;
  justify-content: center;
`;