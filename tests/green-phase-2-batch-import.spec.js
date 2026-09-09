import { test, expect } from "@playwright/test";

test.describe("Green Phase 2 batch Closet import", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#B-02");
  });

  test("reviews exceptions only and keeps confident items out of individual review", async ({ page }) => {
    await page.getByRole("button", { name: "Process 12 photos" }).click();
    await page.getByRole("button", { name: "Review", exact: true }).first().click();
    await expect(page.getByRole("heading", { name: "Review item" })).toBeVisible();
    await expect(page.getByText(/Review exception 1 of 2/)).toBeVisible();
    await page.getByRole("button", { name: /Confirm 2 details/ }).click();
    await expect(page.getByText(/Review exception 2 of 2/)).toBeVisible();
    await page.getByRole("button", { name: /Confirm 2 details/ }).click();
    await expect(page.getByText("12 ready · 2 need your help")).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Add 12 Ready Items" })).toBeVisible();
  });

  test("cancel leaves the existing Closet and batch drafts untouched", async ({ page }) => {
    await page.evaluate(() => localStorage.setItem("styleiqClosetItemsV1", JSON.stringify([{ id: "existing", name: "Existing coat" }])));
    await page.reload();
    await page.getByRole("button", { name: "Process 12 photos" }).click();
    await page.getByRole("button", { name: "Cancel batch" }).click();
    await expect(page).toHaveAttribute("data-screen", "B-01");
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1")).length)).toBe(1);
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqBatchImportDraftsV1"))).toBeNull();
  });

  test("adds only ready records and persists unresolved exceptions as drafts", async ({ page }) => {
    await page.getByRole("button", { name: "Process 12 photos" }).click();
    await page.getByRole("button", { name: "Add 10 Ready Items" }).click();
    await page.getByRole("button", { name: /Add Ready Items/ }).click();
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1") || "[]").filter((item) => item.source === "photo-import").length)).toBe(10);
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqBatchImportDraftsV1") || "[]").length)).toBe(2);
  });
});
