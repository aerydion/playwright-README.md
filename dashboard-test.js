const { test, expect } = require('@playwright/test');
const DashboardPage = require('./dashboardPage'); // Import the page object

test('dashboard access after login', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    // Assume user is already logged in
    await page.goto('/dashboard');

    // Use page object methods
    await expect(dashboardPage.header).toHaveText('Welcome to Your Dashboard');
});
