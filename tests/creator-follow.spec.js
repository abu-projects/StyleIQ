import { test, expect } from "@playwright/test";

test.describe("creator following", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#H-12");
    await page.evaluate(() => localStorage.removeItem("styleiqFollowedCreatorsV1"));
    await page.reload();
  });

  test("follows a creator and surfaces their Looks in Discover", async ({ page }) => {
    const follow = page.getByRole("button", { name: "Follow stylist", exact: true });
    await expect(follow).toHaveAttribute("aria-pressed", "false");
    await follow.click();
    await expect(page.getByRole("button", { name: "Following", exact: true })).toHaveAttribute("aria-pressed", "true");

    await page.goto("/index.html#K-01");
    await page.getByRole("tablist", { name: "Looks feed" }).getByRole("tab", { name: "Following" }).click();
    await expect(page.getByRole("heading", { name: "From stylists you follow" })).toBeVisible();
    await expect(page.locator(".discover-feature-look", { hasText: "Soft Workday" })).toBeVisible();

    await page.reload();
    await page.getByRole("tablist", { name: "Looks feed" }).getByRole("tab", { name: "Following" }).click();
    await expect(page.locator(".discover-feature-look", { hasText: "Soft Workday" })).toBeVisible();
  });

  test("supports following directly from creator discovery", async ({ page }) => {
    await page.goto("/index.html#H-11");
    await expect(page.locator("#app")).toHaveAttribute("data-screen", "K-01");
    await page.getByRole("button", { name: "Follow Maya Chen" }).click();
    await expect(page.getByRole("button", { name: "Unfollow Maya Chen" })).toHaveAttribute("aria-pressed", "true");
  });
});
