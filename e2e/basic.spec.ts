import { expect, test } from "@playwright/test";

test("index page has expected headings", async ({ page }) => {
	await page.goto("/");
	expect(await page.textContent("h1")).toBe("Hey, I'm Crawl!");
	expect(await page.textContent("h2")).toBe("Software Developer");
});
