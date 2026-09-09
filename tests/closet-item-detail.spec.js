import { test, expect } from "@playwright/test";

test.describe("canonical Closet item detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#C-01");
    await page.evaluate(() => localStorage.removeItem("styleiqSelectedClosetItemV1"));
    await page.reload();
    await page.locator("#app").getByRole("button", { name: /Black tailored blazer/ }).click();
  });

  test("uses local detail tabs and opens real photo tools", async ({ page }) => {
    await expect(page.locator("#app").getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
    await page.locator("#app").getByRole("tab", { name: "Details" }).click();
    await expect(page.locator("#app").getByText("Storage location")).toBeVisible();
    await page.locator("#app").getByRole("tab", { name: "Photo" }).click();
    await expect(page.locator("#app").getByText("Photo tools")).toBeVisible();
    await page.locator("#app").getByRole("button", { name: "Edit item photo" }).click();
    await expect(page.locator("#app").getByRole("dialog", { name: "Edit without leaving" })).toBeVisible();
  });

  test("Style this item preserves the selected Closet item", async ({ page }) => {
    await page.locator("#app").getByRole("button", { name: "Style this item" }).click();
    await expect(page.locator("#app").getByText("Styled around Black tailored blazer")).toBeVisible();
    await expect(page.locator("#app").getByRole("button", { name: "Try on" })).toBeVisible();
  });
});
