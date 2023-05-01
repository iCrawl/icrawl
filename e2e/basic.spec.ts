import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test.describe("Visit home", () => {
	test("/", async ({ page }) => {
		await page.goto("/");
		expect(await page.getByRole("heading", { level: 1 }).textContent()).toBe("Hey, I'm Crawl!");
		expect(await page.getByRole("heading", { level: 2 }).textContent()).toBe("Software Developer");
	});
});
