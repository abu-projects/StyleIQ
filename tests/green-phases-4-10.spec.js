import { test, expect } from "@playwright/test";

test("Phase 4 receipt import isolates ambiguity and exposes failure recovery", async ({ page }) => {
  await page.goto("/index.html#B-09");
  await page.locator("#app").getByRole("button", { name: "Preview mixed receipt" }).click();
  await expect(page.locator("#app").getByRole("heading", { name: "We found 3 purchases." })).toBeVisible();
  await expect(page.locator("#app").getByText("2 are ready. 1 needs your help.")).toBeVisible();
  await page.locator("#app").getByRole("button", { name: "Cancel import" }).click();
  await page.locator("#app").getByRole("button", { name: "Preview failed receipt" }).click();
  await expect(page.locator("#app").getByRole("button", { name: "Enter purchase manually" })).toBeVisible();
});

test("Phase 5 OTP keeps account context through error and expiry states", async ({ page }) => {
  await page.goto("/index.html#A-04");
  await page.locator("#app").getByText("Prototype states").click();
  await page.locator("#app").getByRole("button", { name: "Invalid" }).click();
  await page.locator("#app").getByRole("button", { name: "Verify email" }).click();
  await expect(page.locator("#app").getByRole("alert")).toContainText("invalid");
  await page.locator("#app").getByText("Prototype states").click();
  await page.locator("#app").getByRole("button", { name: "Expired" }).click();
  await expect(page.locator("#app").getByRole("button", { name: "Send New Code" })).toBeVisible();
});

test("Phase 6 Closet and Discover searches expose different actions", async ({ page }) => {
  await page.goto("/index.html#B-04");
  await expect(page.locator("#app").getByText("Closet Search · owned item")).toBeVisible();
  await page.locator("#app").getByRole("button", { name: "Search My Item" }).click();
  await expect(page.locator("#app").getByRole("button", { name: "Add to My Closet" }).first()).toBeVisible();
  await page.goto("/index.html#K-02");
  await expect(page.locator("#app").getByText("Discover Search · consider a product")).toBeVisible();
  await expect(page.locator("#app").getByRole("button", { name: "Save to Wishlist", exact: true })).toBeVisible();
});

test("Phase 7 Item Detail leads with intelligence and canonical actions", async ({ page }) => {
  await page.goto("/index.html#C-02");
  await expect(page.locator("#app").getByRole("button", { name: "Style It" })).toBeVisible();
  await expect(page.locator("#app").getByRole("button", { name: "Try On" })).toBeVisible();
  await expect(page.locator("#app").getByText("Closet matches")).toBeVisible();
});

test("Phase 9 proactive week retains manual Add Event", async ({ page }) => {
  await page.goto("/index.html#I-01");
  await page.evaluate(() => localStorage.removeItem("styleiqProactiveWeekV1"));
  await page.reload();
  await page.locator("#app").getByRole("button", { name: "Plan My Week" }).click();
  await expect(page.locator("#app").getByText("StyleIQ planned 4 looks.")).toBeVisible();
  await expect(page.locator("#app").getByRole("button", { name: "Add Event" })).toBeVisible();
  await page.locator("#app").getByRole("button", { name: "Change Look" }).first().click();
  await expect(page.locator("#app").getByText("StyleIQ planned 4 looks.")).toBeVisible();
});
