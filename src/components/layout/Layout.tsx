import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { createContext, useContext, useEffect, useState } from 'react';
import { color } from '../../tokens/semantic-color';

/* =========================
   TYPES & CONTEXT
   ========================= */

export type SidebarVariant = 'full' | 'rail' | 'collapsed';

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  rail?: ReactNode;
  children: ReactNode;
  icons?: { menu?: ReactNode };
}

interface LayoutContextValue {
  variant: SidebarVariant;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextValue | null>(null);

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within Layout');
  return ctx;
};

/* =========================
   LAYOUT COMPONENT
   ========================= */

export const Layout = ({ header, sidebar, rail, children, icons }: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [variant, setVariant] = useState<SidebarVariant>('full');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => {
      const matches = mq.matches;
      setIsMobile(matches);
      setVariant(matches ? 'collapsed' : 'full');
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const toggleSidebar = () => {
    setVariant((prev) => {
      if (isMobile) return prev === 'collapsed' ? 'full' : 'collapsed';
      if (prev === 'full') return rail ? 'rail' : 'collapsed';
      return 'full';
    });
  };

  const menuIcon = icons?.menu ?? <span>☰</span>;
  const hasSidebar = !!sidebar;
  const hasHeader = !!header;
  const showHeaderToggle = ((!isMobile && variant === 'collapsed' && !rail) || (isMobile && hasSidebar));

  return (
    <LayoutContext.Provider value={{ variant, isMobile, toggleSidebar }}>
      <StyledLayoutContainer
        variant={variant}
        isMobile={isMobile}
        hasHeader={hasHeader || (isMobile && hasSidebar)}
        hasSidebar={hasSidebar}
        hasRail={!!rail}
      >
        {/* SIDEBAR */}
        {!isMobile && hasSidebar && (
          <StyledSidebarArea isVisible={variant !== 'collapsed' || !!rail}>
            {variant !== 'collapsed' && (
              <SidebarToggleButton onClick={toggleSidebar}>
                {menuIcon}
              </SidebarToggleButton>
            )}
            {variant === 'rail' && rail ? rail : variant === 'full' ? sidebar : null}
          </StyledSidebarArea>
        )}

        {/* MOBILE DRAWER */}
        {isMobile && hasSidebar && (
          <>
            <MobileDrawerOverlay active={variant === 'full'} onClick={() => setVariant('collapsed')} />
            <StyledMobileDrawer data-open={variant === 'full'}>
              <SidebarToggleButton onClick={toggleSidebar}>{menuIcon}</SidebarToggleButton>
              {sidebar}
            </StyledMobileDrawer>
          </>
        )}

        {/* HEADER AREA */}
        {(hasHeader || (isMobile && hasSidebar)) && (
          <StyledHeaderArea $isDefaultMobile={!hasHeader && isMobile}>
            
            {/* 1. THE USER CONTENT: Now fills 100% of the header row */}
            <HeaderContentSlot $hasToggle={showHeaderToggle}>
              {hasHeader ? header : <DefaultMobileTitle>Menu</DefaultMobileTitle>}
            </HeaderContentSlot>

            {/* 2. THE TOGGLE: Absolutely positioned OVER the header content */}
            {showHeaderToggle && (
              <HeaderToggleButton onClick={toggleSidebar}>
                {menuIcon}
              </HeaderToggleButton>
            )}

          </StyledHeaderArea>
        )}

        {/* MAIN CONTENT AREA */}
        <StyledMainContentArea>
          {!hasHeader && !isMobile && variant === 'collapsed' && !rail && (
            <MainContentToggle onClick={toggleSidebar}>{menuIcon}</MainContentToggle>
          )}
          {children}
        </StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* =========================
   STYLED COMPONENTS
   ========================= */

const SIDEBAR_BG = '#f9f9f9'; 

const StyledLayoutContainer = styled.div<{
  variant: SidebarVariant;
  isMobile: boolean;
  hasHeader: boolean;
  hasSidebar: boolean;
  hasRail: boolean;
}>`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: ${p => {
    if (p.isMobile) return '1fr';
    if (!p.hasSidebar || (p.variant === 'collapsed' && !p.hasRail)) return '0px 1fr';
    return p.variant === 'rail' ? '100px 1fr' : '300px 1fr';
  }};
  grid-template-rows: ${p => (p.hasHeader ? '80px 1fr' : '1fr')};
  grid-template-areas: ${p => 
    p.hasHeader ? '"sidebar header" "sidebar main"' : '"sidebar main"'
  };

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${p => p.hasHeader ? '"header" "main"' : '"main"'};
  }
`;

const StyledHeaderArea = styled.header<{ $isDefaultMobile?: boolean }>`
  grid-area: header;
  position: relative; /* Base for absolute toggle */
  display: flex;
  width: 100%;
  height: 100%;
  background: ${p => p.$isDefaultMobile ? color.primary.default : 'transparent'};
  color: ${p => p.$isDefaultMobile ? '#fff' : 'inherit'};
  border-bottom: 1px solid #eee;
`;

const HeaderContentSlot = styled.div<{ $hasToggle: boolean }>`
  flex: 1;
  width: 100%;
  height: 100%;
  
  /* 
     This ensures your provided header fills the ENTIRE top bar,
     even the space 'under' the hamburger.
  */
  & > * {
    display: flex;
    width: 100%;
    height: 100%;
    /* 
       We push your internal content (text/logo) to the right 
       to make room for the floating button.
    */
    padding-left: ${p => p.$hasToggle ? '60px' : '0'};
  }
`;

const HeaderToggleButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10; /* Sits on top of HeaderContentSlot */
  
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-size: 1.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const SidebarToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 12px;
  z-index: 40;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: inherit;
`;

const MainContentToggle = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 50;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const DefaultMobileTitle = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const StyledSidebarArea = styled.aside<{ isVisible: boolean }>`
  grid-area: sidebar;
  position: relative;
  height: 100vh;
  border-right: ${p => p.isVisible ? '1px solid #eee' : 'none'};
  background: ${SIDEBAR_BG};
  transition: width 0.2s ease;
  overflow: hidden;
  z-index: 30;
`;

const StyledMainContentArea = styled.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
  height: 100%;
`;

const StyledMobileDrawer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  &[data-open='true'] { transform: translateX(0); }
`;

const MobileDrawerOverlay = styled.div<{ active: boolean }>`
  display: ${p => p.active ? 'block' : 'none'};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 999;
`;