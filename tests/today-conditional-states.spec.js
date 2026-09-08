import { test, expect } from "@playwright/test";

test.describe("Today conditional states", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#D-02");
    await page.evaluate(() => {
      localStorage.removeItem("styleiqTodayModeV1");
      localStorage.removeItem("styleiqTodayLookV1");
    });
  });

  test("loading and missing-category states have real exits", async ({ page }) => {
    await page.evaluate(() => localStorage.setItem("styleiqTodayModeV1", "loading"));
    await page.reload();
    await expect(page.getByRole("heading", { name: "Muse is checking the details." })).toBeVisible();
    await page.getByRole("button", { name: "Show my Look" }).click();
    await page.evaluate(() => localStorage.setItem("styleiqTodayModeV1", "missing-category"));
    await page.reload();
    await expect(page.getByRole("heading", { name: "This Look needs a complete base." })).toBeVisible();
    await page.getByRole("button", { name: "Continue with this Look" }).click();
    await expect(page.getByRole("heading", { name: "Today" })).toBeVisible();
  });
});
