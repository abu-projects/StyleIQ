import { test, expect } from "@playwright/test";

test("single-photo import exposes processing, recovery, review, and success states", async ({ page }) => {
  await page.goto("/index.html#B-02");
  await page.getByRole("button", { name: "Process one photo" }).click();
  await expect(page.getByRole("heading", { name: "Cleaning and identifying your piece." })).toBeVisible();
  await page.getByRole("button", { name: "Photo needs help" }).click();
  await expect(page.getByRole("heading", { name: "We couldn’t detect one clear item." })).toBeVisible();
  await page.getByRole("button", { name: "Keep original and review" }).click();
  await expect(page.getByRole("heading", { name: "Review item" })).toBeVisible();
});

test("batch import prepares confident items and isolates exceptions", async ({ page }) => {
  await page.goto("/index.html#B-02");
  await page.getByRole("button", { name: "Process 12 photos" }).click();
  await expect(page.getByRole("heading", { name: "Found 12 pieces ✨" })).toBeVisible();
  await expect(page.getByText("10 ready · 2 need your help")).toBeVisible();
  await expect(page.locator(".batch-ready-row")).toHaveCount(10);
  await expect(page.locator(".batch-exception-row")).toHaveCount(2);
  await page.getByRole("button", { name: "Add 10 Ready Items" }).click();
  await expect(page.getByRole("heading", { name: "10 items prepared" })).toBeVisible();
});
