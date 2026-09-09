import { test, expect } from "@playwright/test";

test("trip uses basics, activities, generation, and one result hub", async ({ page }) => {
  await page.goto("/index.html#J-02");
  await page.evaluate(() => { localStorage.removeItem("styleiqTripV1"); localStorage.removeItem("styleiqTripDraftV2"); });
  await page.reload();
  await page.locator("#trip-destination").fill("Lisbon");
  await page.locator("#trip-start-date").fill("2099-09-01");
  await page.locator("#trip-end-date").fill("2099-09-04");
  await page.locator("#app").getByRole("button", { name: "Choose vibe & activities" }).click();
  await page.locator("#app").getByRole("button", { name: "Dinners" }).click();
  await page.locator("#app").getByRole("button", { name: "Sightseeing" }).click();
  await page.locator("#app").getByRole("button", { name: "Create My Packing Plan" }).click();
  await expect(page.locator("#app").getByRole("heading", { name: "Building your trip" })).toBeVisible();
  await page.locator("#app").getByRole("button", { name: "Open completed trip" }).click();
  await expect(page.locator("#app").getByRole("heading", { name: "Lisbon is ready" })).toBeVisible();
  await page.locator("#app").getByRole("button", { name: "Outfits" }).click();
  await page.locator("#app").getByRole("button", { name: "Days" }).click();
  await expect(page.locator("#app").getByText("Day 1")).toBeVisible();
});

test("trip basics remain editable before generation", async ({ page }) => {
  await page.goto("/index.html#J-02");
  await page.locator("#app").getByRole("button", { name: "Choose vibe & activities" }).click();
  await page.locator("#app").getByRole("button", { name: "Edit trip basics" }).click();
  await expect(page.locator("#trip-destination")).toBeVisible();
});
