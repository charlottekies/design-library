import { test, expect } from '@playwright/test';

const desktop = { width: 1440, height: 900 };
const mobile = { width: 390, height: 844 };

const story = (id: string) => `/iframe.html?id=components-layout--${id}`;

async function gridColumns(page: any) {
    const template = await page
        .getByTestId('layout-grid')
        .evaluate(
            (el: Element) =>
                getComputedStyle(el).gridTemplateColumns
        );

    return template
        .trim()
        .split(/\s+/)
}

test.describe(
    'Shared Behavior Tests',
    () => {
        test(
            'Expected shared elements are visible on load',
            async ({ page }) => {
                await page.goto(
                    story('with-rail')
                );

                await expect(
                    page.getByTestId(
                        'layout-header'
                    )
                ).toBeVisible();
            }
        )
    }
)

test.describe(
    'Desktop Behavior Tests',
    () => {
        test(
            'expected elements are visible on load',
            async ({ page, isMobile }) => {
                test.skip(isMobile, 'This interaction is desktop-specific');
                await page.setViewportSize({ width: 1400, height: 900 });
                await page.goto(
                    story('with-rail')
                );

                await expect(
                    page.getByTestId(
                        'layout-sidebar'
                    )
                ).toBeVisible();

                await expect(
                    page.getByTestId(
                        'layout-rail'
                    )
                ).toBeHidden();

                const c = await gridColumns(page);
                expect(c).toHaveLength(2);
                const firstColumn = c[0];
                expect(firstColumn).toBe('300px');
            }
        );

        test(
            'Desktop Sidebar toggle button behavior',
            async ({ page, isMobile }) => {
                test.skip(isMobile, 'This interaction is desktop-specific');
                await page.setViewportSize({ width: 1400, height: 900 });
                await page.goto(
                    story('with-rail')
                );

                const sidebar = page.getByTestId('layout-sidebar');
                const sidebarToggleBtn = sidebar.getByTestId('sidebar-toggle-btn');
                await expect (sidebarToggleBtn).toBeVisible();
                
                await sidebarToggleBtn.click();

                await expect(page.getByTestId('layout-grid'))
                    .toHaveCSS(
                        'grid-template-columns',
                        '100px 1300px'
                    );
                const rail = page.getByTestId('rail-container');
                
                await expect(rail).toBeVisible();
                const railToggleBtn = rail.getByTestId('rail-toggle-btn');
                await expect(railToggleBtn).toBeVisible();

                let c = await gridColumns(page);
                expect(c).toHaveLength(2);
                let firstColumn = c[0];
                expect(firstColumn).toBe('100px');

                await railToggleBtn.click();

                await expect(sidebar).toBeVisible();
                c = await gridColumns(page);
                expect(c).toHaveLength(2);
                firstColumn = c[0];
                expect(firstColumn).toBe('300px');
            }
        );
    }
);

test.describe(
    'Mobile Behavior Tests',
    () => {
        test(
            'Renders expected elements on load',
            async ({ page, isMobile }) => {
                test.skip(!isMobile, 'This interaction is mobile-specific');
                await page.goto(
                    story('with-rail')
                );
                await expect(
                    page.getByTestId(
                        'layout-sidebar'
                    )
                ).toBeHidden();

                await expect(
                    page.getByTestId(
                        'layout-rail'
                    )
                ).toBeHidden();

                const c = await gridColumns(page);
                expect(c).toHaveLength(1);
            }
        );
        test(
            'Mobile Sidebar toggle button behavior',
            async ({ page, isMobile }) => {
                test.skip(!isMobile, 'This interaction is mobile-specific');
                await page.goto(
                    story('with-rail')
                );

                const headerToggle = page.getByTestId('header-toggle-btn');
                await expect(headerToggle).toBeVisible();

                headerToggle.click();

                const drawerOverlay = page.getByTestId('layout-drawer-overlay');
                await expect(drawerOverlay).toBeVisible();

                const sidebar = page.getByTestId('sidebar-container');
                const sidebarToggleBtn = sidebar.getByTestId('sidebar-toggle-btn');
                await expect(sidebarToggleBtn).toBeVisible();
                const rail = page.getByTestId('rail-container');
                
                await expect(rail).not.toBeVisible();
                
                await sidebarToggleBtn.click();

                await expect(drawerOverlay).not.toBeVisible();

            }
        );
    }
);

//
// =====================================================
// 2. DESKTOP: TOGGLE SIDEBAR ↔ RAIL
// =====================================================
// //
// test.describe(
//   'Desktop interactions',
//   () => {
//     test(
//       'sidebar toggle shows rail',
//       async ({ page }) => {
//         await page.setViewportSize(
//           desktop
//         );
//         await page.goto(
//           story('playwright-desktop')
//         );

//         await page
//           .getByTestId(
//             'layout-sidebar-toggle'
//           )
//           .click();

//         await expect(
//           page.getByTestId(
//             'layout-rail'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeHidden();

//         const c = await cols(page);
//         expect(c).toContain('100px');
//       }
//     );

//     test(
//       'rail toggle restores sidebar',
//       async ({ page }) => {
//         await page.setViewportSize(
//           desktop
//         );
//         await page.goto(
//           story('playwright-desktop')
//         );

//         await page
//           .getByTestId(
//             'layout-sidebar-toggle'
//           )
//           .click();

//         await page
//           .getByTestId(
//             'layout-rail-toggle'
//           )
//           .click();

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-rail'
//           )
//         ).toBeHidden();

//         const c = await cols(page);
//         expect(c).toContain('300px');
//       }
//     );
//   }
// );

// //
// // =====================================================
// // 3. MOBILE: VIEWPORT + DRAWER BEHAVIOR
// // =====================================================
// //
// test.describe(
//   'Mobile behavior',
//   () => {
//     test(
//       'mobile shows rail + hides sidebar',
//       async ({ page }) => {
//         await page.setViewportSize(
//           mobile
//         );
//         await page.goto(
//           story('playwright-mobile')
//         );

//         await expect(
//           page.getByTestId(
//             'layout-header'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeHidden();

//         await expect(
//           page.getByTestId(
//             'layout-rail'
//           )
//         ).toBeVisible();

//         const c = await cols(page);
//         expect(c).toContain('100px');
//       }
//     );

//     test(
//       'rail opens drawer with sidebar',
//       async ({ page }) => {
//         await page.setViewportSize(
//           mobile
//         );
//         await page.goto(
//           story('playwright-mobile')
//         );

//         await page
//           .getByTestId(
//             'layout-rail-toggle'
//           )
//           .click();

//         await expect(
//           page.getByTestId(
//             'layout-drawer'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeVisible();
//       }
//     );

//     test(
//       'sidebar toggle returns rail',
//       async ({ page }) => {
//         await page.setViewportSize(
//           mobile
//         );
//         await page.goto(
//           story('playwright-mobile')
//         );

//         await page
//           .getByTestId(
//             'layout-rail-toggle'
//           )
//           .click();

//         await page
//           .getByTestId(
//             'layout-sidebar-toggle'
//           )
//           .click();

//         await expect(
//           page.getByTestId(
//             'layout-rail'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeHidden();
//       }
//     );
//   }
// );

// //
// // =====================================================
// // 4. NO SIDEBAR SYSTEM (HEADER ONLY MODE)
// // =====================================================
// //
// test.describe(
//   'No-sidebar layouts',
//   () => {
//     test(
//       'no sidebar = no toggle in header',
//       async ({ page }) => {
//         await page.setViewportSize(
//           desktop
//         );
//         await page.goto(
//           story('no-sidebar')
//         );

//         await expect(
//           page.getByTestId(
//             'layout-sidebar'
//           )
//         ).toBeHidden();

//         await expect(
//           page.getByTestId(
//             'layout-header-toggle'
//           )
//         ).toHaveCount(0);
//       }
//     );
//   }
// );

// //
// // =====================================================
// // 5. NO HEADER + RAIL ONLY SYSTEM
// // =====================================================
// //
// test.describe(
//   'Rail-only system',
//   () => {
//     test(
//       'rail visible, no toggle',
//       async ({ page }) => {
//         await page.setViewportSize(
//           desktop
//         );
//         await page.goto(
//           story('no-header-with-rail')
//         );

//         await expect(
//           page.getByTestId(
//             'layout-rail'
//           )
//         ).toBeVisible();

//         await expect(
//           page.getByTestId(
//             'layout-header'
//           )
//         ).toBeHidden();

//         await expect(
//           page.getByTestId(
//             'layout-rail-toggle'
//           )
//         ).toHaveCount(0);
//       }
//     );
//   }
// );