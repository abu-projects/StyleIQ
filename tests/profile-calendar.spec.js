import { test, expect } from "@playwright/test";

test("Profile exposes My Content and Settings separates Tutorial from Help Center", async ({ page }) => {
  await page.goto("/index.html#L-01");
  await page.getByRole("button", { name: "Open My Content" }).click();
  await expect(page.getByRole("heading", { name: "My content" })).toBeVisible();
  await page.goto("/index.html#L-11");
  await page.getByRole("button", { name: "Help Center" }).click();
  await expect(page.getByRole("heading", { name: "How can we help?" })).toBeVisible();
  await page.goto("/index.html#I-01");
  await page.getByRole("button", { name: "Share Calendar" }).click();
  await expect(page.getByRole("heading", { name: "Share selected plans only." })).toBeVisible();
});
