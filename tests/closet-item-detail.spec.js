import { test, expect } from "@playwright/test";

test.describe("canonical Closet item detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#C-01");
    await page.evaluate(() => localStorage.removeItem("styleiqSelectedClosetItemV1"));
    await page.reload();
    await page.getByRole("button", { name: /Black tailored blazer/ }).click();
  });

  test("uses local detail tabs and opens real photo tools", async ({ page }) => {
    await expect(page.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("tab", { name: "Details" }).click();
    await expect(page.getByText("Storage location")).toBeVisible();
    await page.getByRole("tab", { name: "Photo" }).click();
    await expect(page.getByText("Photo tools")).toBeVisible();
    await page.getByRole("button", { name: "Edit item photo" }).click();
    await expect(page.getByRole("dialog", { name: "Edit without leaving" })).toBeVisible();
  });

  test("Style this item preserves the selected Closet item", async ({ page }) => {
    await page.getByRole("button", { name: "Style this item" }).click();
    await expect(page.getByText("Styled around Black tailored blazer")).toBeVisible();
    await expect(page.getByRole("button", { name: "Try on" })).toBeVisible();
  });
});
