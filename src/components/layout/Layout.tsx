import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { createContext, useContext, useEffect, useState } from 'react';
import { color } from '../../tokens/semantic-color';

/* =========================
   TYPES
   ========================= */

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;

  children: ReactNode;

  icons?: {
    menu?: ReactNode;
  };
}

/* =========================
   CONTEXT
   ========================= */

interface LayoutContextValue {
  isMobile: boolean;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextValue | null>(null);

export const useLayout = () => {
  const ctx = useContext(LayoutContext);

  if (!ctx) {
    throw new Error('useLayout must be used within Layout');
  }

  return ctx;
};

/* =========================
   DEFAULT ICON
   ========================= */

const defaultMenuIcon = (
  <span style={{ fontSize: 22, lineHeight: 1 }}>☰</span>
);

/* =========================
   LAYOUT
   ========================= */

export const Layout = ({
  header,
  sidebar,
  children,
  icons,
}: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    const update = () => {
      setIsMobile(mq.matches);
    };

    update();

    mq.addEventListener('change', update);

    return () => {
      mq.removeEventListener('change', update);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(v => !v);
  };

  const hasCustomHeader = !!header;

  /**
   * Show header row when:
   * 1. user provided a header
   * 2. mobile + sidebar exists (for default mobile header)
   */
  const showHeaderRow =
    hasCustomHeader || (isMobile && !!sidebar);

  return (
    <LayoutContext.Provider
      value={{
        isMobile,
        sidebarOpen,
        toggleSidebar,
        openSidebar: () => setSidebarOpen(true),
        closeSidebar: () => setSidebarOpen(false),
      }}
    >
      <StyledLayoutContainer
        hasSidebar={!!sidebar}
        showHeaderRow={showHeaderRow}
      >
        {sidebar && (
          <StyledSidebarSlot data-open={sidebarOpen}>
            {sidebar}
          </StyledSidebarSlot>
        )}

        {showHeaderRow && (
          <StyledHeaderContainer
            hasCustomHeader={hasCustomHeader}
          >
            {/* USER HEADER */}
            <div className="header-content">
              {hasCustomHeader ? (
                header
              ) : (
                <DefaultMobileHeader />
              )}
            </div>

            {/* HAMBURGER */}
            {isMobile && !!sidebar && (
              <div className="header-end">
                <MobileSidebarTrigger
                  onClick={toggleSidebar}
                >
                  {icons?.menu ?? defaultMenuIcon}
                </MobileSidebarTrigger>
              </div>
            )}
          </StyledHeaderContainer>
        )}

        <StyledMainContentArea>
          {children}
        </StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* =========================
   DEFAULT MOBILE HEADER
   ========================= */

const DefaultMobileHeader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  background: ${color.primary.default};
`;

/* =========================
   LAYOUT CONTAINER
   ========================= */

const StyledLayoutContainer = styled.div<{
  hasSidebar: boolean;
  showHeaderRow: boolean;
}>`
  display: grid;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  grid-template-columns: ${p =>
    p.hasSidebar ? '300px 1fr' : '1fr'};

  grid-template-rows: ${p =>
    p.showHeaderRow ? '80px 1fr' : '1fr'};

  grid-template-areas: ${p => {
    if (p.showHeaderRow) {
      return p.hasSidebar
        ? `
          "sidebar header"
          "sidebar main"
        `
        : `
          "header"
          "main"
        `;
    }

    return p.hasSidebar
      ? `
        "sidebar main"
      `
      : `
        "main"
      `;
  }};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    grid-template-areas: ${p =>
      p.showHeaderRow
        ? `
          "header"
          "main"
        `
        : `
          "main"
        `};
  }
`;

/* =========================
   HEADER
   ========================= */

const StyledHeaderContainer = styled.header<{
  hasCustomHeader: boolean;
}>`
  grid-area: header;

  position: relative;

  width: 100%;
  height: 100%;

  min-width: 0;

  display: flex;
  align-items: stretch;

  /* Default mobile header bg */
  background: ${p =>
    p.hasCustomHeader
      ? 'transparent'
      : color.primary.default};

  .header-content {
    flex: 1;
    min-width: 0;
    height: 100%;

    display: flex;
    align-items: stretch;
  }

  /* Force injected header to fully stretch */
  .header-content > * {
    flex: 1;
    min-width: 0;
    height: 100%;
  }

  /**
   * Fixed hamburger positioning:
   * always pinned to flex-end with spacing
   */
  .header-end {
    position: absolute;

    top: 50%;
    right: 24px;

    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
  }
`;

/* =========================
   MOBILE SIDEBAR BUTTON
   ========================= */

export const MobileSidebarTrigger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
`;

/* =========================
   SIDEBAR
   ========================= */

export const StyledSidebarSlot = styled.aside`
  grid-area: sidebar;

  height: 100%;

  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;

    top: 0;
    left: 0;

    width: 280px;
    height: 100vh;

    background: white;

    z-index: 1000;

    transform: translateX(-100%);

    transition: transform 0.2s ease;

    &[data-open='true'] {
      transform: translateX(0);
    }
  }
`;

/* =========================
   MAIN CONTENT
   ========================= */

export const StyledMainContentArea = styled.main`
  grid-area: main;

  position: relative;

  overflow-y: auto;

  min-width: 0;
  min-height: 0;
`;