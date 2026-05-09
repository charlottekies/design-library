import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { color } from '../../tokens/semantic-color';

/* =========================
   TYPES & CONTEXT
   ========================= */

export type SidebarVariant =
  | 'full'
  | 'rail'
  | 'collapsed';

export interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  rail?: ReactNode;
  children: ReactNode;
  icons?: { menu?: ReactNode };
}

interface LayoutContextValue {
  variant: SidebarVariant;
  isMobileViewport: boolean;
  toggleSidebar: () => void;
}

const LayoutContext =
  createContext<LayoutContextValue | null>(
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

/* =========================
   LAYOUT COMPONENT
   ========================= */

export const Layout = ({
  header,
  sidebar,
  rail,
  children,
  icons,
}: LayoutProps) => {
  const MOBILE_BREAKPOINT = 768;

  const [isMobileViewport, setIsMobileViewport] =
    useState(false);

  const [isPhoneDevice, setIsPhoneDevice] =
    useState(false);

  const [variant, setVariant] =
    useState<SidebarVariant>('full');

  /* =========================
     MEDIA / DEVICE DETECTION
     ========================= */
  useEffect(() => {
    const mq = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`
    );

    const update = () => {
      const isSmallViewport = mq.matches;

      const isTouchDevice =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;

      const isPhoneUA =
        /Android|iPhone|iPod/i.test(
          navigator.userAgent
        );

      const isRealPhone =
        isSmallViewport &&
        isTouchDevice &&
        isPhoneUA;

      setIsMobileViewport(isSmallViewport);
      setIsPhoneDevice(isRealPhone);

      // auto-collapse on small screens
      setVariant((prev) => {
        if (isSmallViewport) {
          return prev === 'full'
            ? 'collapsed'
            : prev;
        }

        return prev === 'collapsed'
          ? 'full'
          : prev;
      });
    };

    update();
    mq.addEventListener('change', update);

    return () =>
      mq.removeEventListener(
        'change',
        update
      );
  }, []);

  /* =========================
     TOGGLE LOGIC
     ========================= */
  const toggleSidebar = () => {
    setVariant((prev) => {
      if (isMobileViewport) {
        return prev === 'full'
          ? 'collapsed'
          : 'full';
      }

      if (prev === 'full') {
        return rail
          ? 'rail'
          : 'collapsed';
      }

      return 'full';
    });
  };

  /* =========================
     DERIVED STATE
     ========================= */
  const menuIcon =
    icons?.menu ?? <span>☰</span>;

  const hasSidebar = !!sidebar;
  const hasHeader = !!header;

  const sidebarIsCollapsed =
    variant === 'collapsed';

  /* =========================
     MOBILE HEADER (REAL PHONE ONLY)
     ========================= */
  const shouldRenderDefaultPhoneHeader =
    !hasHeader &&
    isPhoneDevice &&
    hasSidebar;

  /* =========================
     HEADER TOGGLE RULE
     FIXED:
     - ALWAYS in mobile header
     - Desktop only when collapsed + no rail
     ========================= */
  const showHeaderToggle =
    hasSidebar &&
    (
      shouldRenderDefaultPhoneHeader ||
      (
        hasHeader &&
        sidebarIsCollapsed &&
        !rail
      )
    );

  /* =========================
     MAIN CONTENT TOGGLE RULE
     Only fallback when no header exists
     ========================= */
  const showMainContentToggle =
    hasSidebar &&
    !hasHeader &&
    !shouldRenderDefaultPhoneHeader &&
    sidebarIsCollapsed &&
    !isPhoneDevice;

  return (
    <LayoutContext.Provider
      value={{
        variant,
        isMobileViewport:
          isMobileViewport,
        toggleSidebar,
      }}
    >
      <StyledLayoutContainer
        variant={variant}
        isPhoneDevice={isPhoneDevice}
        isMobileViewport={isMobileViewport}
        hasHeader={
          hasHeader ||
          shouldRenderDefaultPhoneHeader
        }
        hasSidebar={hasSidebar}
        hasRail={!!rail}
      >
        {/* =========================
           SIDEBAR (DESKTOP)
           ========================= */}
        {!isMobileViewport &&
          hasSidebar && (
            <StyledSidebarArea
              isVisible={
                variant !== 'collapsed' ||
                !!rail
              }
            >
              {variant !==
                'collapsed' && (
                  <SidebarToggleButton
                    onClick={
                      toggleSidebar
                    }
                  >
                    {menuIcon}
                  </SidebarToggleButton>
                )}

              {variant === 'rail' &&
                rail
                ? rail
                : variant === 'full'
                  ? sidebar
                  : null}
            </StyledSidebarArea>
          )}

        {/* =========================
           MOBILE DRAWER
           ========================= */}
        {isMobileViewport &&
          hasSidebar && (
            <>
              <MobileDrawerOverlay
                active={
                  variant === 'full'
                }
                onClick={() =>
                  setVariant(
                    'collapsed'
                  )
                }
              />

              <StyledMobileDrawer
                data-open={
                  variant === 'full'
                }
              >
                <SidebarToggleButton
                  onClick={
                    toggleSidebar
                  }
                >
                  {menuIcon}
                </SidebarToggleButton>

                {sidebar}
              </StyledMobileDrawer>
            </>
          )}

        {/* =========================
           HEADER
           ========================= */}
        {(hasHeader ||
          shouldRenderDefaultPhoneHeader) && (
            <StyledHeaderArea
              $isDefaultMobile={
                shouldRenderDefaultPhoneHeader
              }
            >
              <HeaderContentSlot
                $hasToggle={
                  showHeaderToggle
                }
              >
                {hasHeader ? (
                  header
                ) : (
                  <></>
                )}
              </HeaderContentSlot>

              {showHeaderToggle && (
                <HeaderToggleButton
                  onClick={
                    toggleSidebar
                  }
                >
                  {menuIcon}
                </HeaderToggleButton>
              )}
            </StyledHeaderArea>
          )}

        {/* =========================
           MAIN CONTENT
           ========================= */}
        <StyledMainContentArea>
          {showMainContentToggle && (
            <MainContentToggle
              onClick={
                toggleSidebar
              }
            >
              {menuIcon}
            </MainContentToggle>
          )}

          {children}
        </StyledMainContentArea>
      </StyledLayoutContainer>
    </LayoutContext.Provider>
  );
};

/* =========================
   STYLES
   ========================= */

const SIDEBAR_BG = '#f9f9f9';

const StyledLayoutContainer = styled.div<{
  variant: SidebarVariant;
  isPhoneDevice: boolean;
  isMobileViewport: boolean;
  hasHeader: boolean;
  hasSidebar: boolean;
  hasRail: boolean;
}>`
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: ${(p) => {
    if (p.isMobileViewport) return '1fr';
    if (
      !p.hasSidebar ||
      (p.variant === 'collapsed' &&
        !p.hasRail)
    )
      return '0px 1fr';
    return p.variant === 'rail'
      ? '100px 1fr'
      : '300px 1fr';
  }};

  grid-template-rows: ${(p) => {
    if (!p.hasHeader) return '1fr';
      return p.isPhoneDevice ? '50px 1fr' : '80px 1fr';
    }};
  

  grid-template-areas: ${(p) =>
    p.hasHeader
      ? '"sidebar header" "sidebar main"'
      : '"sidebar main"'};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${(p) =>
    p.hasHeader
      ? '"header" "main"'
      : '"main"'};
  }
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
      ? color.primary.default
      : 'transparent'};
  color: ${(p) =>
    p.$isDefaultMobile
      ? '#fff'
      : 'inherit'};
  border-bottom: 1px solid #eee;
`;

const HeaderContentSlot = styled.div<{
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

const HeaderToggleButton = styled.button`
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

const SidebarToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 12px;
  z-index: 40;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const MainContentToggle = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 50;
`;

const StyledSidebarArea = styled.aside<{
  isVisible: boolean;
}>`
  grid-area: sidebar;
  position: relative;
  height: 100vh;
  background: ${SIDEBAR_BG};
`;

const StyledMainContentArea = styled.main`
  grid-area: main;
  position: relative;
  overflow-y: auto;
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

  &[data-open='true'] {
    transform: translateX(0);
  }
`;

const MobileDrawerOverlay = styled.div<{
  active: boolean;
}>`
  display: ${(p) =>
    p.active ? 'block' : 'none'};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;