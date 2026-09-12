import { test, expect } from "@playwright/test";

test.describe("Green Phase 2 batch Closet import", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html#B-02");
  });

  test("reviews exceptions only and keeps confident items out of individual review", async ({ page }) => {
    await page.locator("#app").getByRole("button", { name: "Process 12 photos" }).click();
    await page.locator("#app").getByRole("button", { name: "Review", exact: true }).first().click();
    await expect(page.locator("#app").getByRole("heading", { name: "Review item" })).toBeVisible();
    await expect(page.locator("#app").getByText(/Review exception 1 of 2/)).toBeVisible();
    await page.locator("#app").getByLabel("Brand", { exact: true }).selectOption("Balmain");
    await page.locator("#app").getByLabel("Category", { exact: true }).selectOption("Accessories");
    await page.locator("#app").getByRole("button", { name: /Confirm 2 details/ }).click();
    await expect(page.locator("#app").getByText(/Review exception 2 of 2/)).toBeVisible();
    await page.locator("#app").getByRole("button", { name: /Confirm 2 details/ }).click();
    await expect(page.locator("#app").getByText("12 ready · 2 need your help")).toHaveCount(0);
    await page.locator("#app").getByRole("button", { name: "Add 12 Ready Items" }).click();
    await expect(page.locator("#app")).toHaveAttribute("data-screen", "B-06");
    await expect(page).toHaveURL(/#B-06$/);
    await page.locator("#app").getByRole("button", { name: /Add Ready Items/ }).click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1")));
    expect(saved.find(item => item.name === "Tan suede loafers")).toMatchObject({ brand: "Balmain", category: "Accessories" });
    expect(saved.find(item => item.name === "Black leather loafers")).toMatchObject({ brand: "Unknown", category: "Shoes" });
  });

  test("cancel leaves the existing Closet and batch drafts untouched", async ({ page }) => {
    await page.evaluate(() => localStorage.setItem("styleiqClosetItemsV1", JSON.stringify([{ id: "existing", name: "Existing coat" }])));
    await page.reload();
    await page.locator("#app").getByRole("button", { name: "Process 12 photos" }).click();
    await page.locator("#app").getByRole("button", { name: "Cancel batch" }).click();
    await expect(page.locator("#app")).toHaveAttribute("data-screen", "B-01");
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1")).length)).toBe(1);
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqBatchImportDraftsV1"))).toBeNull();
  });

  for (const entry of ["B-01", "B-10"]) test(`ready items commit once and drafts resume from ${entry}`, async ({ page }) => {
    await page.locator("#app").getByRole("button", { name: "Process 12 photos" }).click();
    await page.locator("#app").getByRole("button", { name: "Add 10 Ready Items" }).click();
    await page.locator("#app").getByRole("button", { name: /Add Ready Items/ }).click();
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1") || "[]").filter((item) => item.source === "photo-import").length)).toBe(10);
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqBatchImportDraftsV1") || "[]").length)).toBe(2);
    await page.goto(`/index.html#${entry}`);
    await page.reload();
    await page.locator("#app").getByRole("button", { name: "Resume 2 saved import drafts" }).click();
    // Review the second exception first; it must not mark the first one reviewed.
    await page.locator("#app").getByRole("button", { name: "Review", exact: true }).nth(1).click();
    await page.locator("#app").getByRole("button", { name: /Confirm 2 details/ }).click();
    await expect(page.locator("#app").getByText("Review exception 1 of 2", { exact: true })).toBeVisible();
    await page.locator("#app").getByRole("button", { name: /Confirm 2 details/ }).click();
    await page.locator("#app").getByRole("button", { name: "Add 2 Ready Items" }).click();
    await page.locator("#app").getByRole("button", { name: /Add Ready Items/ }).click();
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqBatchImportDraftsV1"))).toBeNull();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1")));
    expect(saved).toHaveLength(12);
    expect(new Set(saved.map(item => item.id)).size).toBe(12);
  });

  test("B-08 restores saved batch state inside canonical B-06", async ({ page }) => {
    await page.locator("#app").getByRole("button", { name: "Process 12 photos" }).click();
    await page.locator("#app").getByRole("button", { name: "Add 10 Ready Items" }).click();
    await page.locator("#app").getByRole("button", { name: /Add Ready Items/ }).click();
    await page.goto("/index.html#B-08");
    await expect(page.locator("#app")).toHaveAttribute("data-canonical-screen", "B-06");
    await expect(page.locator("#app").getByRole("heading", { name: "Found 2 pieces ✨" })).toBeVisible();
    await expect(page.locator(".batch-exception-row")).toHaveCount(2);
  });
});

// Regression: selecting a subset must import those photos, not the first N catalog entries.
test("batch selection preserves the chosen photos across repeated imports", async ({ page }) => {
  for (let run = 0; run < 2; run++) {
    await page.goto("/index.html#B-02");
    await page.locator('.batch-photo').first().click();
    await page.locator("#app").getByRole("button", { name: "Process 11 photos" }).click();
    await page.locator("#app").getByRole("button", { name: "Add 9 Ready Items" }).click();
    await page.locator("#app").getByRole("button", { name: /Add Ready Items/ }).click();
  }
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1")));
  expect(saved).toHaveLength(18);
  expect(saved.some(item => item.name === "Black tailored blazer")).toBe(false);
  expect(new Set(saved.map(item => item.id)).size).toBe(18);
});
