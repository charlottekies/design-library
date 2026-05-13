import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { color } from '../../tokens/semantic-color';
import { layers } from '../../tokens/layers';
import { Header } from '../header/Header';

/* Types & Context  */

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  rail?: ReactNode;
  children: ReactNode;
}

interface LayoutContextType {
  isOpen: boolean;
  isSmallViewport: boolean; // Based on width (CSS breakpoint)
  hasHeader: boolean;
  isPhone: boolean;          // Based on width + Touch (Physical phone)
  hasSidebar: boolean;
  hasRail: boolean;
  toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

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

  const renderedSidebarElement = () => {
    if (!isSmallViewport) {
      if (sidebar && isOpen) {
        return sidebar;
      }
      if (sidebar && rail && !isOpen) {
        return rail;
      } 
      if (!sidebar && rail) {
        return rail
      }
    }

    if (isSmallViewport) {
      if (!!rail && !!sidebar) {
        if (!isOpen) {
          return rail;
        } else {
          return sidebar;
        }
      }

      if (!!sidebar && !!!rail) {
        if (isOpen) {
          return sidebar;
        } else {
          return null;
        }
      }

      if (!!rail && !!!sidebar) {
        return rail;
      }
      
      return null;
    }
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
    if (isSmallViewport) {
      setIsOpen(false);
      return;
    } 

    if (sidebar || rail) {
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
        data-testid="layout-grid"
        isPhone={isPhone}
        isSmallViewport={isSmallViewport}
        isOpen={isOpen}
        hasHeader={!!header}
        hasSidebar={!!sidebar}
        hasRail={!!rail}
      >
        {/* Desktop Sidebar */}
        {!isPhone && (!!sidebar || !!rail) && (
          <StyledSidebarArea isVisible={isOpen} data-testid="layout-sidebar">
             {renderedSidebarElement()}
          </StyledSidebarArea>
        )}

        {/* Mobile Side Drawer */}
        {isPhone && (!!sidebar || !!rail) && (
          <>
            <StyledMobileDrawerOverlay
              data-testid="layout-drawer-overlay"
              isOpen={isOpen}
              onClick={() => toggleSidebar}
            />
            <StyledMobileDrawer data-testid="layout-drawer" hasSidebar={!!sidebar}
              data-open={isOpen}
            >
              {sidebar ? sidebar : rail}
            </StyledMobileDrawer>
          </>
        )}

        {/* Header */}
        {(!!header || shouldRenderDefaultPhoneHeader) && (
          <StyledHeaderArea data-testid="layout-header"
>
            <StyledHeaderContentSlot>
              {!!header ? (
                header
              ) : (
                DefaultHeader
              )}
            </StyledHeaderContentSlot>
          </StyledHeaderArea>
        )}

        {/* Main Content Area */}
        <StyledMainContentArea
          data-testid="layout-main"
        >
          {children}
        </StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/** A default header to be rendered in the Layout when viewed from a phone, if one is not provided */
const DefaultHeader: ReactNode = <Header />; 
const SIDEBAR_WIDTH = '300px';
const RAIL_WIDTH = '100px';

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
    // Phone = drawer only
    if (p.isPhone) {
      return 'minmax(0, 1fr)';
    }


     // NEW: no sidebar + no rail
    if (!p.hasSidebar && !p.hasRail) {
      return '0px minmax(0, 1fr)';
    } 

    // Small viewport behavior
    if (p.isSmallViewport) {
      // Sidebar + Rail
      if (p.hasSidebar && p.hasRail) {
        return p.isOpen
          ? `${SIDEBAR_WIDTH} minmax(0, 1fr)`
          : `${RAIL_WIDTH} minmax(0, 1fr)`;
      }

      // Rail only
      if (!p.hasSidebar && p.hasRail) {
        return `${RAIL_WIDTH} minmax(0, 1fr)`;
      }

      // Sidebar only
      if (p.hasSidebar && !p.hasRail) {
        return p.isOpen
          ? `${SIDEBAR_WIDTH} minmax(0, 1fr)`
          : `0px minmax(0, 1fr)`;
      }

      return 'minmax(0, 1fr)';
    }

    // =========================
    // Desktop behavior
    // =========================

    // Sidebar + Rail
    if (p.hasSidebar && p.hasRail) {
      return p.isOpen
        ? `${SIDEBAR_WIDTH} minmax(0, 1fr)`
        : `100px minmax(0, 1fr)`;
    }

    // Rail only
    if (!p.hasSidebar && p.hasRail) {
      return `${RAIL_WIDTH} minmax(0, 1fr)`;
    }

    // Sidebar only
    if (p.hasSidebar && !p.hasRail) {
      return p.isOpen
        ? `${SIDEBAR_WIDTH} minmax(0, 1fr)`
        : `0px minmax(0, 1fr)`;
    }

    return 'minmax(0, 1fr)';
  }};

  /* =========================
     GRID ROWS
     ========================= */
  grid-template-rows: ${(p) => {
    if (p.isPhone) {
      if (p.hasHeader) {
        return '80px 1fr';
      } else {
        return '50px 1fr';
      }
    }
    
    if (!p.hasHeader) {
      return '1fr';
    }

  }};

  /* =========================
     GRID AREAS
     ========================= */
  grid-template-areas: ${(p) => {
    // Phone = no sidebar column
    if (p.isPhone) {
      return `
        "header"
        "main"
      `;
    }

    // Always maintain 2-column grid on desktop/tablet
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

const StyledHeaderContentSlot = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  z-index: ${layers.drawer};
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
  z-index: ${layers.drawer};
`;