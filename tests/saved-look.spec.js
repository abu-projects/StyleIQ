import { test, expect } from "@playwright/test";

test.describe("canonical Saved Look detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#G-01");
    await page.evaluate(() => localStorage.removeItem("styleiqSelectedSavedLookV1"));
    await page.reload();
  });

  test("selects a Saved Look and exposes distinct local sections", async ({ page }) => {
    await page.getByRole("button", { name: /Dinner Classic/ }).click();
    await expect(page.getByRole("heading", { name: "Dinner Classic" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("tab", { name: "Items" }).click();
    await expect(page.getByText("pieces in this Look")).toBeVisible();
    await page.getByRole("tab", { name: "Planning" }).click();
    await expect(page.getByRole("button", { name: "Add to Planner" })).toBeVisible();
    await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqSelectedSavedLookV1")));
    expect(await page.evaluate(() => localStorage.getItem("styleiqSelectedSavedLookV1"))).toBe("Dinner Classic");
  });

  test("Try On and Planner actions remain attached to the selected Saved Look", async ({ page }) => {
    await page.getByRole("button", { name: /Gallery Tailoring/ }).click();
    await page.getByRole("button", { name: "Try On" }).click();
    const pending = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqPendingTryOnV1")));
    expect(pending).toMatchObject({ lookId: "saved", sourceType: "saved-look" });
    expect(pending.selectedLook.title).toBe("Gallery Tailoring");
  });
});
