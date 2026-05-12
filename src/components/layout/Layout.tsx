import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { color } from '../../tokens/semantic-color';
import { space } from '../../tokens/space';
import { Hamburger } from '../../icons/Hamburger';

/* Types & Context  */

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  rail?: ReactNode;
  children: ReactNode;
  icons?: { menu?: ReactNode };
}

interface LayoutContextType {
  isOpen: boolean;
  isSmallViewport: boolean; // Based on width (CSS breakpoint)
  isPhone: boolean;          // Based on width + Touch (Physical phone)
  hasSidebar: boolean;
  hasRail: boolean;
  toggleSidebar: () => void;
}

const LayoutContext =
  createContext<LayoutContextType | null>(
    null
  );

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx)
    throw new Error(
      'useLayout must be used within Layout'
    );
  return ctx;
};

/* Default Exported Layout Component */

export const Layout = ({
  header,
  sidebar,
  rail,
  icons,
  children,
}: LayoutProps) => {
  /** State variables that are used to determine what shape the Layout should take at any given time. */
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const mq = window.matchMedia('(max-width: 786px)');
  const pointerMq = window.matchMedia('(pointer: coarse)');

  const isPhone = mq.matches && pointerMq.matches;

  /** Functions like toggleSidebar allow menu buttons to toggle the open state of the sidebar.
   * This function is broadcasted via a context provider to all child components of this component */ 
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  }

  /**
   * Tracks and responds to changes in the browser size
   * */
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: 786px)`);

    const update = () => {
      setIsSmallViewport(mq.matches);
    };

    update(); // Run once on mount
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /**
   * Sets the open/closed position of the sidebar/rail.
   *  */ 
  useEffect(() => {
  // PHONE RULES (highest priority)
    if (isPhone) {
      setIsOpen(false);
      return;
    }

    // DESKTOP / TABLET RULES
    if (sidebar && rail) {
      setIsOpen(true);
      return;
    }

    if (sidebar && !rail) {
      setIsOpen(!isSmallViewport); // collapse on small, open on large
      return;
    }

    if (!sidebar && rail) {
      setIsOpen(true);
    }
  }, [isPhone, isSmallViewport, sidebar, rail]);

  /** 
   *  This broadcasted object is what children of this component (header/sidebar/rail) will be able to see
   */
  const contextValue = {
    isOpen,
    isSmallViewport,
    isPhone,
    hasSidebar: !!sidebar,
    hasRail: !!rail,
    hasHeader: !!header,
    toggleSidebar: () => toggleSidebar(),
  };

  /** Derived variable that derives from the presence of a header and the type of device the user is browsing on
   * whether a default header should be provided */ 
  const shouldRenderDefaultPhoneHeader = isPhone && !!!header;

  return (
    <LayoutContext.Provider value={contextValue} >
      <StyledLayoutContainer
        isPhone={isPhone}
        isSmallViewport={isSmallViewport}
        isOpen={isOpen}
        hasHeader={!!header ||shouldRenderDefaultPhoneHeader}
        hasSidebar={!!sidebar}
        hasRail={!!rail}
      >
        {/* Desktop Sidebar */}
        {!isPhone && (!!sidebar || !!rail) && (
          <StyledSidebarArea isVisible={isOpen}>
            
            {/* if small viewport, render the rail if rail exists */}
            {isSmallViewport && !!rail ? rail : null}

            {/* if not small viewport, render the sidebar if both sidebar and rail exist */}
            {!isSmallViewport && (!!sidebar && !!rail) ? sidebar : null}

            {/* if not small viewport, render the rail if sidebar does not exist */}
            {!isSmallViewport && (!!!sidebar && !!rail) ? rail : null}

            {/* if not small viewport, render the sidebar if rail does not exist */}
            {!isSmallViewport && (!!sidebar && !!!rail) ? sidebar : null}

          </StyledSidebarArea>
        )}

        {/* Mobile Side Drawer */}
        {isPhone && (!!sidebar || !!rail) && (
          <>
            <StyledMobileDrawerOverlay
              isOpen={isOpen}
              onClick={() => toggleSidebar}
            />
            <StyledMobileDrawer hasSidebar={!!sidebar}
              data-open={isOpen}
            >
              {sidebar ? sidebar : rail}
            </StyledMobileDrawer>
          </>
        )}

        {/* Header */}
        {(!!header || shouldRenderDefaultPhoneHeader) && (
          <StyledHeaderArea
            $isDefaultMobile={
              shouldRenderDefaultPhoneHeader
            }
          >
            <StyledHeaderContentSlot
              $hasToggle={
                !isOpen && (!!rail || !!sidebar)
              }
            >
              {!!header ? (
                header
              ) : (
                <></>
              )}
            </StyledHeaderContentSlot>

            {!isOpen && (
              <StyledHeaderToggleButton
                onClick={
                  toggleSidebar
                }
              >
                {/* <Hamburger /> */}
              </StyledHeaderToggleButton>
            )}
          </StyledHeaderArea>
        )}

        {/* Main Content Area */}
        <StyledMainContentArea>
          {((!!rail || !!sidebar) && !isOpen && !!!header) && (
            <StyledMainContentToggle
              onClick={
                toggleSidebar
              }
            >
              icons
            </StyledMainContentToggle>
          )}

          {children}
        </StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* Styled Components for Internal Use */

const StyledLayoutContainer = styled.div<{
  isPhone: boolean;
  isSmallViewport: boolean;
  isOpen: boolean;
  hasHeader: boolean;
  hasSidebar: boolean;
  hasRail: boolean;
}>`
  display: grid;
  width: 100vw;
  height: 100vh;

  /* =========================
     GRID COLUMNS
     ========================= */
  grid-template-columns: ${(p) => {
    if (p.isPhone) {
      return '1fr';
    } 

      // No sidebar or rail
      if (!p.hasSidebar && !p.hasRail) {
        return '0px 1fr';
      }

      // has both sidebar and rail
      if (p.hasSidebar && p.hasRail) {
        if (p.isOpen && p.isSmallViewport) {
          return '100px 1fr';
        } else if (p.isOpen && !p.isSmallViewport) {
          return '300px 1fr';
        } 
      } 

      // Only has a rail 
      if (p.hasRail) {
        return '100px 1fr';
      }

      // Only has sidebar
      if (p.hasSidebar) {
        if (!p.isSmallViewport) {
          if (p.isOpen) {
            return '300px 1fr';
          } else {
            return '0px 1fr';
          }
        }

      }
      return '0px 1fr';
    }

  };

  /* =========================
     GRID ROWS
     ========================= */
  grid-template-rows: ${(p) => {
    // no provided header
    // AND no default phone header
    if (!p.hasHeader) {
      return '1fr';
    }

    // phone header
    if (p.isPhone && !p.hasHeader) {
      return '50px 1fr';
    }

    if (p.isPhone && p.hasHeader) {
      return '80px 1fr';
    }

    // desktop / resized browser
    return '80px 1fr';
  }};

  /* =========================
     GRID AREAS
     ========================= */
  grid-template-areas: ${(p) => {
    // REAL PHONE
    // sidebar is drawer-only

    if (p.isPhone) {

      return p.hasHeader
        ? `
          "header"
          "main"
        `
        : `
          "header"
          "main"
        `;
    }

    // DESKTOP / RESIZED WINDOW
    return p.hasHeader
      ? `
        "sidebar header"
        "sidebar main"
      `
      : `
        "sidebar main"
      `;
  }};
`;

const StyledHeaderArea = styled.header<{
  $isDefaultMobile?: boolean;
}>`
  grid-area: header;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(p) =>
    p.$isDefaultMobile
      ? color.surface.default
      : 'transparent'};
  color: ${(p) =>
    p.$isDefaultMobile
      ? '#fff'
      : 'inherit'};
  border-bottom: 1px solid ${color.border.primary};
`;

const StyledHeaderContentSlot = styled.div<{
  $hasToggle: boolean;
}>`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
      padding-right: ${(p) =>
    p.$hasToggle ? '60px' : '0'};

  & > * {
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: ${(p) =>
    p.$hasToggle ? '60px' : '0'};
  }
`;

const StyledHeaderToggleButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const StyledMainContentToggle = styled.button`
  position: absolute;
  top: ${space.space08};
  left: ${space.space08};
  z-index: 50;
`;

const StyledSidebarArea = styled.aside<{
  isVisible: boolean;
}>`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

const StyledMainContentArea = styled.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
`;

const StyledMobileDrawer = styled.aside<{
  hasSidebar: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(p) => p.hasSidebar ? '300px' : `100px`};
  height: 100vh;
  background: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-open='true'] {
    transform: translateX(0);
  }
`;

const StyledMobileDrawerOverlay = styled.div<{
  isOpen: boolean;
}>`
  display: ${(p) =>
    p.isOpen ? 'block' : 'none'};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;