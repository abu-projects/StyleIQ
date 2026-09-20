import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/index.html#K-01");
  await page.evaluate(() => {
    localStorage.removeItem("styleiqCommunityFollowedV1");
    localStorage.removeItem("styleiqCommunityLikedV1");
    localStorage.removeItem("styleiqCommunityCommentsV1");
  });
  await page.reload();
});

test("Discover opens on stylist Looks and switches to Products", async ({ page }) => {
  const modes = page.getByRole("tablist", { name: "Discover modes" });
  await expect(modes.getByRole("tab", { name: "Looks" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("heading", { name: "Featured Stylists" })).toBeVisible();
  await expect(page.locator(".discover-feature-look", { hasText: "Soft Workday" })).toBeVisible();
  await modes.getByRole("tab", { name: "Products" }).click();
  await expect(page.getByRole("heading", { name: "Shop by Category" })).toBeVisible();
  await expect(page.getByRole("group", { name: "Product categories" }).getByRole("button", { name: "All", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "View Wishlist" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Shop by Brand" })).toBeVisible();
  await modes.getByRole("tab", { name: "Looks" }).click();
  await expect(page.getByRole("heading", { name: "Featured Stylists" })).toBeVisible();
});

test("editorial Look retains community actions", async ({ page }) => {
  await page.getByRole("button", { name: /Tailored ease/ }).click();
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "K-04");
  await page.locator("#app").getByRole("button", { name: "Follow" }).click();
  await page.locator("#app").getByRole("button", { name: "Like" }).click();
  await page.locator("#app").getByRole("button", { name: "Comment" }).click();
  await page.locator("#community-comment").fill("Love the relaxed proportion.");
  await page.locator("#app").getByRole("button", { name: "Post" }).click();
  await expect(page.locator("#app").getByText("Love the relaxed proportion.")).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem("styleiqCommunityLikedV1"))).toBe("true");
});
