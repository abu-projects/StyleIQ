import { test, expect } from "@playwright/test";

test("single-photo import exposes processing, recovery, review, and success states", async ({ page }) => {
  await page.goto("/index.html#B-02");
  await page.getByRole("button", { name: "Process one photo" }).click();
  await expect(page.getByRole("heading", { name: "Cleaning and identifying your piece." })).toBeVisible();
  await page.getByRole("button", { name: "Photo needs help" }).click();
  await expect(page.getByRole("heading", { name: "We couldn’t isolate one clear item." })).toBeVisible();
  await page.getByRole("button", { name: "Keep original and review" }).click();
  await expect(page.getByRole("heading", { name: "Review item" })).toBeVisible();
});

test("batch import exposes one canonical review and success route", async ({ page }) => {
  await page.goto("/index.html#B-02");
  await page.getByRole("button", { name: "Process 4 photos" }).click();
  await expect(page.getByRole("heading", { name: "4 photos processed" })).toBeVisible();
  await page.getByRole("button", { name: /Add 2 ready items/ }).click();
  await expect(page.getByRole("heading", { name: "2 items added" })).toBeVisible();
});
