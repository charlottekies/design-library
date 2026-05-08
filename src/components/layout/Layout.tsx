import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { createContext, useContext, useEffect, useState } from 'react';

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}

/* =========================
   CONTEXT (optional usage)
   ========================= */
interface LayoutContextValue {
  isMobile: boolean;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextValue | null>(null);

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within Layout');
  return ctx;
};

/* =========================
   LAYOUT
   ========================= */
export const Layout = ({ header, sidebar, children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile breakpoint */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    const update = () => setIsMobile(mq.matches);
    update();

    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const toggleSidebar = () => setSidebarOpen(v => !v);

  /* Auto-close drawer when leaving mobile */
  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile]);

  return (
    <LayoutContext.Provider
      value={{ isMobile, sidebarOpen, toggleSidebar }}
    >
      <StyledLayoutContainer hasHeader={!!header} hasSidebar={!!sidebar}>
        {header && (
          <StyledHeaderSlot>
            {header}

            {/* Auto hamburger (only mobile + sidebar exists) */}
            {isMobile && sidebar && (
              <HamburgerButton onClick={toggleSidebar}>
                ☰
              </HamburgerButton>
            )}
          </StyledHeaderSlot>
        )}

        {sidebar && (
          <StyledSidebarSlot data-open={sidebarOpen}>
            {sidebar}
          </StyledSidebarSlot>
        )}

        <StyledMainContentArea>{children}</StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* =========================
   STYLED COMPONENTS
   ========================= */

export interface StyledLayoutContainerProps {
  hasHeader: boolean;
  hasSidebar: boolean;
}

export const StyledLayoutContainer = styled.div<StyledLayoutContainerProps>`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  /* Desktop */
  grid-template-columns: ${p => (p.hasSidebar ? '300px 1fr' : '1fr')};
  grid-template-rows: ${p => (p.hasHeader ? '100px 1fr' : '1fr')};

  grid-template-areas: ${p => {
    if (p.hasHeader && p.hasSidebar) {
      return `
        "sidebar header"
        "sidebar main"
      `;
    }
    if (p.hasHeader) return `"header" "main"`;
    if (p.hasSidebar) return `"sidebar main"`;
    return `"main"`;
  }};

  /* Tablet: collapsed rail */
  @media (max-width: 1200px) {
    grid-template-columns: ${p =>
      p.hasSidebar ? '100px 1fr' : '1fr'};
  }

  /* Mobile: sidebar removed from grid (drawer mode) */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${p =>
      p.hasHeader ? '100px 1fr' : '1fr'};

    grid-template-areas: ${p =>
      p.hasHeader ? `"header" "main"` : `"main"`};
  }
`;

export const StyledHeaderSlot = styled.header`
  grid-area: header;
  width: 100%; 
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
    min-width: 0;
  }
`;

export const StyledSidebarSlot = styled.aside`
  grid-area: sidebar;
  height: 100%;
  overflow: hidden;

  /* Mobile drawer behavior */
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

    &[data-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const StyledMainContentArea = styled.main`
  grid-area: main;
  overflow-y: auto;
  position: relative;
`;

const HamburgerButton = styled.button`
  margin-left: auto;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;