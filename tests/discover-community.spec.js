import { test, expect } from "@playwright/test";

test.describe("Discover filters and community actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#K-01");
    await page.evaluate(() => {
      localStorage.removeItem("styleiqDiscoverFilterV1");
      localStorage.removeItem("styleiqCommunityFollowedV1");
      localStorage.removeItem("styleiqCommunityLikedV1");
      localStorage.removeItem("styleiqCommunityCommentsV1");
    });
    await page.reload();
  });

  test("filters change the Discover result set and can be cleared", async ({ page }) => {
    await expect(page.getByRole("button", { name: "For You" })).toHaveAttribute("aria-pressed", "true");
    await page.getByRole("button", { name: "COS" }).click();
    await expect(page.getByRole("button", { name: "COS" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: /Tailored ease/ })).toBeVisible();
    await page.getByRole("button", { name: "Clear" }).click();
    await expect(page.getByRole("button", { name: "For You" })).toHaveAttribute("aria-pressed", "true");
  });

  test("community actions persist and report has a confirmation state", async ({ page }) => {
    await page.getByRole("button", { name: /Tailored ease/ }).click();
    await page.getByRole("button", { name: "Follow" }).click();
    await page.getByRole("button", { name: "Like" }).click();
    await page.getByRole("button", { name: "Comment" }).click();
    await page.locator("#community-comment").fill("Love the relaxed proportion.");
    await page.getByRole("button", { name: "Post" }).click();
    await expect(page.getByText("Love the relaxed proportion.")).toBeVisible();
    await page.getByRole("button", { name: "Report this Look" }).click();
    await page.locator("#community-report-reason").selectOption("Spam");
    await page.getByRole("button", { name: "Submit report" }).click();
    await expect(page.getByText("Thanks. We’ve received your report.")).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem("styleiqCommunityLikedV1"))).toBe("true");
  });
});
