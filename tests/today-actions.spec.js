import { test, expect } from "@playwright/test";

test("Today groups secondary actions while keeping wear and Change Look visible", async ({ page }) => {
  await page.goto("/index.html#D-02");
  await page.evaluate(() => localStorage.removeItem("styleiqTodayModeV1"));
  await page.reload();

  const today = page.locator('#app[data-screen="D-02"]');
  await expect(today.locator(".today-actions--compact .today-wear-action")).toBeVisible();
  await expect(today.getByRole("button", { name: "Change Look" })).toBeVisible();
  await expect(today.getByRole("button", { name: "More actions for today’s Look" })).toBeVisible();
  await expect(today.locator(".today-hero .today-look-switcher, .today-hero .today-save")).toHaveCount(0);

  await today.getByRole("button", { name: "More actions for today’s Look" }).click();
  const dialog = page.getByRole("dialog", { name: "More actions" });
  await expect(dialog).toBeVisible();
  for (const name of ["Save Look", "Try On", "Make it mine", "View Closet"]) {
    await expect(dialog.getByRole("button", { name })).toBeVisible();
  }
  await dialog.getByRole("button", { name: "Save Look" }).click();
  await expect(page.getByRole("dialog", { name: "Save this Look" })).toBeVisible();
  await page.getByRole("button", { name: "Close Save this Look" }).click();

  await today.getByRole("button", { name: "Change Look" }).click();
  await expect(page.getByRole("dialog", { name: "Change Look" })).toBeVisible();
});
