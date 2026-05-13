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
                        'rail-container'
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

test.describe('Small Viewport Behavior Tests', () => {
    test('layout adapts correctly at small viewport', async ({ page, isMobile }) => {
        test.skip(isMobile, 'This interaction is mobile-specific');

        await page.setViewportSize({ width: 768, height: 900 });
        await page.goto(story('with-rail'));

        // 1. Header still present
        await expect(page.getByTestId('layout-header')).toBeVisible();

        // 2. Header grid row still present
        const header = page.getByTestId('layout-header');
        await expect(header).toBeVisible();

        // 3. Main grid row still present
        await expect(page.getByTestId('layout-grid')).toBeVisible();

        // 4. Sidebar grid column still present (layout exists even if hidden)
        const c = await gridColumns(page);
        expect(c.length).toBeGreaterThanOrEqual(1);

        // 5. No hamburger toggle button in header
        await expect(page.getByTestId('header-toggle-btn')).toBeHidden();

        // 6. Rail is visible (desktop small-viewport rule)
        await expect(page.getByTestId('rail-container')).toBeVisible();

        // 7. Sidebar is not visible
        await expect(page.getByTestId('sidebar-container')).toBeHidden();

        // 8. Sidebar grid size is 100px
        expect(c[0]).toBe('100px');

        // 9. Rail has hamburger toggle
        await expect(
            page.getByTestId('rail-container')
                .getByTestId('rail-toggle-btn')
        ).toBeVisible();
    });

    test('rail toggle opens sidebar', async ({ page, isMobile }) => {
        test.skip(isMobile, 'This interaction is mobile-specific');

        await page.setViewportSize({ width: 768, height: 900 });
        await page.goto(story('with-rail'));

        const rail = page.getByTestId('rail-container');
        const railToggleBtn = rail.getByTestId('rail-toggle-btn');

        await railToggleBtn.click();

        // 1. rail is not visible
        await expect(rail).toBeHidden();

        // 2. sidebar is visible
        const sidebar = page.getByTestId('sidebar-container');
        await expect(sidebar).toBeVisible();

        // 3. sidebar toggle button exists
        const sidebarToggleBtn = sidebar.getByTestId('sidebar-toggle-btn');
        await expect(sidebarToggleBtn).toBeVisible();

        // 4. grid column exists
        const c = await gridColumns(page);
        expect(c.length).toBeGreaterThanOrEqual(1);

        // 5. sidebar width is 300px
        expect(c[0]).toBe('300px');
    });

    test('sidebar toggle returns to rail', async ({ page, isMobile }) => {
        test.skip(isMobile, 'This interaction is mobile-specific');

        await page.setViewportSize({ width: 768, height: 900 });
        await page.goto(story('with-rail'));

        const rail = page.getByTestId('rail-container');
        const railToggleBtn = rail.getByTestId('rail-toggle-btn');

        // open sidebar
        await railToggleBtn.click();

        const sidebarContainer = page.getByTestId('layout-sidebar');
        const sidebar = page.getByTestId('sidebar-container');
        const sidebarToggleBtn = sidebarContainer.getByTestId('sidebar-toggle-btn');

        await sidebarToggleBtn.click();

        // 1. rail visible again
        await expect(rail).toBeVisible();

        // 2. sidebar hidden
        await expect(sidebar).toBeHidden();

        // 3. grid column still exists
        const c = await gridColumns(page);
        expect(c.length).toBeGreaterThanOrEqual(1);

        expect(c[0]).toBe('100px');
    });
});
