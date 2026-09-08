import { test, expect } from "@playwright/test";

async function openTrips(page) {
  await page.goto("/index.html#J-01");
  await page.evaluate(() => {
    localStorage.removeItem("styleiqTripV1");
    localStorage.removeItem("styleiqTripDraftV2");
  });
  await page.reload();
}

test("trip creation preserves the draft through review, building, and completion", async ({ page }) => {
  await openTrips(page);
  await page.getByRole("button", { name: "Plan a trip" }).click();
  await page.locator("#trip-destination").fill("Lisbon");
  await page.locator("#trip-start-date").fill("2099-09-01");
  await page.locator("#trip-end-date").fill("2099-09-04");
  await page.getByRole("button", { name: "Continue to trip details" }).click();
  await expect(page.getByRole("heading", { name: "Shape the days you’ll dress for" })).toBeVisible();
  await page.getByRole("button", { name: "Continue to packing context" }).click();
  await page.getByRole("button", { name: "Build packing & Looks" }).click();
  await expect(page.getByRole("heading", { name: "Your first trip draft" })).toBeVisible();
  await page.getByRole("button", { name: "Edit Looks" }).click();
  await expect(page.getByRole("heading", { name: "Edit the Looks for each day" })).toBeVisible();
  await page.getByRole("button", { name: "Review & create" }).click();
  await expect(page.getByRole("heading", { name: /Everything for Lisbon/ })).toBeVisible();
  await page.getByRole("button", { name: "Confirm & create trip" }).click();
  await expect(page.getByRole("heading", { name: "Building your trip" })).toBeVisible();
  await page.getByRole("button", { name: "Open completed trip" }).click();
  await expect(page.getByRole("heading", { name: "Your trip is ready" })).toBeVisible();
  await expect(page.getByText("Lisbon").first()).toBeVisible();
  const trip = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqTripV1")));
  expect(trip.created).toBe(true);
  expect(trip.building).toBe(false);
});

test("trip draft keeps edits when navigating back from review", async ({ page }) => {
  await openTrips(page);
  await page.getByRole("button", { name: "Plan a trip" }).click();
  await page.getByRole("button", { name: "Continue to trip details" }).click();
  await page.getByRole("button", { name: "Continue to packing context" }).click();
  await page.getByRole("button", { name: "Build packing & Looks" }).click();
  await page.getByRole("button", { name: "Review & create" }).click();
  await page.getByRole("button", { name: "Edit Trip" }).click();
  await expect(page.locator("#trip-destination")).toHaveValue("Alexandria");
});
