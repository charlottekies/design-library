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

      // coarse pointer = finger device
      const isCoarsePointer =
        window.matchMedia('(pointer: coarse)')
          .matches;

      // phone-ish width
      const isPhoneWidth =
        window.innerWidth <= 768;

      // true phone
      const isRealPhone =
        isPhoneWidth &&
        isCoarsePointer;

      setIsMobileViewport(isSmallViewport);
      setIsPhoneDevice(isRealPhone);
      console.log(hasRail)

      if (isSmallViewport && hasRail) {
        console.log('setting variant to rail')

        setVariant('rail');
      }
      if (!isSmallViewport && hasRail && hasSidebar) {
        console.log('setting variant to full')

        setVariant('full');
      }

      if (!isSmallViewport && hasRail && !hasSidebar) {
        console.log('setting variant to rail')
        setVariant('rail');
      }
      if (isSmallViewport && hasRail && !hasSidebar) {
        console.log('setting variant to rail')

        setVariant('rail');
      }



      // auto collapse on smaller screens
      setVariant((prev) => {

        if (isSmallViewport) {
          console.log(`prev is ${prev}`)

          return prev === 'full'
            ? 'collapsed'
            : prev;
        }
        console.log(`prev is ${prev}`)

        return prev === 'collapsed'
          ? 'full'
          : prev;
      });

      console.log({
        isSmallViewport,
        isCoarsePointer,
        isPhoneWidth,
        isRealPhone,
        variant
      });


    };

    update();

    mq.addEventListener('change', update);
    window.addEventListener('resize', update);

    return () => {
      mq.removeEventListener(
        'change',
        update
      );
      window.removeEventListener(
        'resize',
        update
      );
    };
  }, []);

  /* =========================
     TOGGLE LOGIC
     ========================= */
  const toggleSidebar = () => {
    setVariant((prev) => {
      // REAL PHONE → drawer open/close
      if (isPhoneDevice) {
        return prev === 'full'
          ? 'collapsed'
          : 'full';
      }

      // DESKTOP / RESIZED WINDOW
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
  const hasRail = !!rail;

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
    (isPhoneDevice && (hasSidebar || hasRail))
      ? true
      : (hasSidebar || hasRail) &&
      (
        shouldRenderDefaultPhoneHeader ||
        (hasHeader && sidebarIsCollapsed)
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
        hasRail={hasRail}
      >
        {/* =========================
           SIDEBAR (DESKTOP)
           ========================= */}

        {!isPhoneDevice && (sidebar || rail) && (
          <StyledSidebarArea
            isVisible={variant !== 'collapsed' || !!rail}
          >
            {/* Toggle ONLY if sidebar exists (rail alone cannot expand) */}
            {sidebar && (
              <StyledSidebarToggleButton onClick={toggleSidebar}>
                {menuIcon}
              </StyledSidebarToggleButton>
            )}

            {/* Render based on variant */}
            {variant === 'rail' && rail && rail}

            {variant === 'full' && sidebar && sidebar}
          </StyledSidebarArea>
        )}

        {/* =========================
           MOBILE DRAWER
           ========================= */}
        {isPhoneDevice &&
          (hasSidebar || hasRail) && (
            <>
              <StyledMobileDrawerOverlay
                active={
                  variant === 'full'
                }
                onClick={() =>
                  setVariant(
                    'collapsed'
                  )
                }
              />
              <StyledMobileDrawer hasSidebar={hasSidebar}
                data-open={
                  variant === 'full'
                }
              >
                <StyledSidebarToggleButton
                  onClick={
                    toggleSidebar
                  }
                >
                  {menuIcon}
                </StyledSidebarToggleButton>
                  { sidebar ? sidebar : rail }
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
              <StyledHeaderContentSlot
                $hasToggle={
                  showHeaderToggle
                }
              >
                {hasHeader ? (
                  header
                ) : (
                  <></>
                )}
              </StyledHeaderContentSlot>

              {showHeaderToggle && (
                <StyledHeaderToggleButton
                  onClick={
                    toggleSidebar
                  }
                >
                  {menuIcon}
                </StyledHeaderToggleButton>
              )}
            </StyledHeaderArea>
          )}

        {/* =========================
           MAIN CONTENT
           ========================= */}
        <StyledMainContentArea>
          {showMainContentToggle && (
            <StyledMainContentToggle
              onClick={
                toggleSidebar
              }
            >
              {menuIcon}
            </StyledMainContentToggle>
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
  isPhoneDevice: boolean;
  isMobileViewport: boolean;
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
    // PHONE: drawer mode, no grid sidebar column
    if (p.isPhoneDevice) {
      return '1fr';
    }

    // NO NAV AT ALL
    if (!p.hasSidebar && !p.hasRail) {
      return '0px 1fr';
    }

    // RAIL MODE (explicit or fallback when no sidebar exists)
    if (p.variant === 'rail') {
      return '100px 1fr';
    }

    // FULL SIDEBAR MODE
    if (p.variant === 'full') {
      return '300px 1fr';
    }

    // COLLAPSED → still reserve layout stability (prevents shift bugs)
    return '0px 1fr';
  }};

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
    if (p.isPhoneDevice && !p.hasHeader) {
      return '50px 1fr';
    }

    if (p.isPhoneDevice && p.hasHeader) {
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

    if (p.isPhoneDevice) {

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
      ? color.primary.default
      : 'transparent'};
  color: ${(p) =>
    p.$isDefaultMobile
      ? '#fff'
      : 'inherit'};
  border-bottom: 1px solid #eee;
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

const StyledSidebarToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 12px;
  z-index: 40;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const StyledMainContentToggle = styled.button`
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  background: ${SIDEBAR_BG};
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
  active: boolean;
}>`
  display: ${(p) =>
    p.active ? 'block' : 'none'};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;