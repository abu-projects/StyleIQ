import { test, expect } from "@playwright/test";

test.describe("creator following", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#H-12");
    await page.evaluate(() => localStorage.removeItem("styleiqFollowedCreatorsV1"));
    await page.reload();
  });

  test("follows a creator and surfaces them in Profile and Discover", async ({ page }) => {
    const follow = page.getByRole("button", { name: "Follow creator", exact: true });
    await expect(follow).toHaveAttribute("aria-pressed", "false");
    await follow.click();
    await expect(page.getByRole("button", { name: "Following", exact: true })).toHaveAttribute("aria-pressed", "true");

    await page.goto("/index.html#L-01");
    const profileFollowing = page.getByRole("region", { name: "Creators I follow" });
    await expect(profileFollowing.getByText("Maya Chen")).toBeVisible();

    await page.goto("/index.html#K-01");
    await page.getByRole("tablist", { name: "Discover filters" }).getByRole("tab", { name: "Following" }).click();
    const discoverFollowing = page.getByRole("region", { name: "Creators you follow" });
    await expect(discoverFollowing.getByRole("button", { name: "Maya Chen 4 looks" })).toBeVisible();
    await expect(discoverFollowing.getByRole("button", { name: /Soft Workday/ })).toBeVisible();

    await page.reload();
    await expect(page.getByRole("region", { name: "Creators you follow" }).getByRole("button", { name: "Maya Chen 4 looks" })).toBeVisible();
  });

  test("supports following directly from creator discovery", async ({ page }) => {
    await page.goto("/index.html#H-11");
    await page.getByRole("button", { name: "Follow Maya Chen" }).click();
    await expect(page.getByRole("button", { name: "Unfollow Maya Chen" })).toHaveAttribute("aria-pressed", "true");
  });
});
