import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { createContext, useContext, useEffect, useState } from 'react';

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}

/* =========================
   CONTEXT (optional)
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
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    const update = () => setIsMobile(mq.matches);
    update();

    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile]);

  const toggleSidebar = () => setSidebarOpen(v => !v);

  return (
    <LayoutContext.Provider value={{ isMobile, sidebarOpen, toggleSidebar }}>
      <StyledLayoutContainer hasSidebar={!!sidebar}>

        {/* DESKTOP HEADER */}
        {!isMobile && header && (
          <StyledHeaderSlot>
            {header}
          </StyledHeaderSlot>
        )}

        {/* MOBILE HEADER (always full width bar) */}
        {isMobile && (
          <MobileHeader>
            {sidebar && (
              <HamburgerButton onClick={toggleSidebar}>
                ☰
              </HamburgerButton>
            )}

            <MobileHeaderContent>
              {header}
            </MobileHeaderContent>
          </MobileHeader>
        )}

        {/* SIDEBAR (drawer on mobile) */}
        {sidebar && (
          <StyledSidebarSlot data-open={sidebarOpen}>
            {sidebar}
          </StyledSidebarSlot>
        )}

        {/* MAIN CONTENT */}
        <StyledMainContentArea>
          {children}
        </StyledMainContentArea>

      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* =========================
   GRID CONTAINER
   ========================= */
export const StyledLayoutContainer = styled.div<{ hasSidebar: boolean }>`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  grid-template-columns: ${p => (p.hasSidebar ? '300px 1fr' : '1fr')};
  grid-template-rows: 100px 1fr;

  grid-template-areas: ${p =>
    p.hasSidebar
      ? `
        "sidebar header"
        "sidebar main"
      `
      : `
        "header"
        "main"
      `};

  @media (max-width: 1200px) {
    grid-template-columns: ${p =>
      p.hasSidebar ? '100px 1fr' : '1fr'};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

/* =========================
   HEADER (DESKTOP)
   ========================= */
export const StyledHeaderSlot = styled.header`
  grid-area: header;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  // make content fill up whole header slot
  & > * {
    flex: 1;
    min-width: 0;
    width: 100%;
  }
`;

/* =========================
   MOBILE HEADER
   ========================= */
export const MobileHeader = styled.div`
  grid-area: header;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding: 0 12px;
  box-sizing: border-box;

  border-bottom: 1px solid #eee;
`;

export const MobileHeaderContent = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;
`;

/* =========================
   HAMBURGER
   ========================= */
export const HamburgerButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  background: none;
  border: none;
  cursor: pointer;
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

    &[data-open="true"] {
      transform: translateX(0);
    }
  }
`;

/* =========================
   MAIN
   ========================= */
export const StyledMainContentArea = styled.main`
  grid-area: main;
  overflow-y: auto;
  position: relative;
`;