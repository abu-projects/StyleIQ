import { test, expect } from "@playwright/test";

async function beginNewUser(page, goal = "Get dressed faster") {
  await page.goto("/index.html#A-16");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  const app = page.locator("#app");
  await app.getByRole("button", { name: "Sign up with Google" }).click();
  await expect(app.getByRole("heading", { name: "What can StyleIQ help with?" })).toBeVisible();
  await app.getByRole("button", { name: goal }).click();
  await expect(app.getByRole("heading", { name: "Build your closet" })).toBeVisible();
  return app;
}

test.describe("Green Phase 1 onboarding", () => {
  test("email signup reaches the same first-goal step", async ({ page }) => {
    await page.goto("/index.html#A-16");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const app = page.locator("#app");
    await expect(app.getByRole("button", { name: "Sign up with Apple" })).toBeVisible();
    await app.getByRole("button", { name: /Continue with email/ }).click();
    await app.getByRole("button", { name: "Use this name" }).click();
    await app.getByRole("button", { name: "Create my account" }).click();
    await app.getByRole("button", { name: "Verify email" }).click();
    await expect(app.getByRole("heading", { name: "What can StyleIQ help with?" })).toBeVisible();
  });

  test("new user can skip an empty Closet and use Today", async ({ page }) => {
    const app = await beginNewUser(page);
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqOnboardingGoalV1"))).toBe("Get dressed faster");
    await app.getByRole("button", { name: /Skip for now/ }).click();

    await expect(app).toHaveAttribute("data-screen", "D-02");
    await expect(app.getByRole("heading", { name: "Your first Look starts with one piece." })).toBeVisible();
    await expect(app.getByRole("button", { name: "Add an item" })).toBeVisible();
    await expect(app.getByRole("button", { name: "Ask Muse" })).toBeVisible();
    await expect(app.getByRole("button", { name: "Browse inspiration" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1") || "[]").length)).toBe(0);
  });

  test("new user saves reviewed item metadata and sees it after reload", async ({ page }) => {
    const app = await beginNewUser(page, "Make more outfits from my closet");
    await app.getByRole("button", { name: /Add photos/ }).click();
    await app.getByRole("button", { name: "Process one photo" }).click();
    await app.getByRole("button", { name: "Review processed item" }).click();
    await app.getByRole("button", { name: "Review item" }).click();
    await app.getByText("Edit details", { exact: true }).click();
    await app.locator("#inline-item-name").fill("Blue linen overshirt");
    await app.locator("#inline-brand").fill("Field Notes");
    await app.locator("#inline-category").fill("Outerwear");
    await app.getByRole("button", { name: "Looks right · Add" }).click();
    await app.getByRole("button", { name: "Continue to Today" }).click();
    await expect(app).toHaveAttribute("data-screen", "D-02");

    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1") || "[]")[0]?.name)).toBe("Blue linen overshirt");
    await page.reload();
    await app.getByRole("button", { name: "View Closet" }).click();
    await expect(app).toContainText("Blue linen overshirt");
    await expect(app).toContainText("Field Notes");
  });

  test("Closet setup routes search and purchase import into canonical flows", async ({ page }) => {
    const app = await beginNewUser(page, "All of it");
    const closet = app.getByRole("region", { name: "Build your closet options" });
    await expect(closet.getByRole("button", { name: /Scan clothes/ })).toBeVisible();
    await expect(closet.getByRole("button", { name: /Add photos/ })).toBeVisible();
    await closet.getByRole("button", { name: /Search an item/ }).click();
    await expect(app).toHaveAttribute("data-screen", "B-04");
    await page.goto("/index.html#A-06");
    await app.getByRole("button", { name: /Import purchases/ }).click();
    await expect(app).toHaveAttribute("data-screen", "B-09");
  });

  test("backing out of Closet setup clears its onboarding handoff", async ({ page }) => {
    const app = await beginNewUser(page);
    await app.getByRole("button", { name: /Add photos/ }).click();
    await app.getByRole("button", { name: "Back" }).click();
    await app.getByRole("button", { name: "Back" }).click();
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqOnboardingClosetPendingV1"))).toBeNull();
  });

  test("returning user bypasses onboarding and retains existing Closet data", async ({ page }) => {
    await page.goto("/index.html#S-00");
    await page.evaluate(() => {
      localStorage.clear();
      localStorage.setItem("styleiqOnboardingCompleteV1", "true");
      localStorage.setItem("styleiqClosetItemsV1", JSON.stringify([{ id: "closet-user-existing", name: "Existing red coat", brand: "Atelier", category: "Outerwear", image: "images/alta-black-tailored-trousers.png", status: "Available", lifecycle: "Keep", wears: 2 }]));
    });
    await page.reload();
    const app = page.locator("#app");
    await app.getByRole("button", { name: "Open StyleIQ" }).click();
    await expect(app).toHaveAttribute("data-screen", "D-02");
    await app.getByRole("button", { name: "View Closet" }).click();
    await expect(app).toContainText("Existing red coat");
  });

  test("Style Twin remains optional and resumes Try-On from the Profile entry", async ({ page }) => {
    const app = await beginNewUser(page);
    await expect(app.getByText("Style Twin", { exact: true })).toHaveCount(0);
    await app.getByRole("button", { name: /Skip for now/ }).click();
    await page.goto("/index.html#L-01");
    await app.getByRole("button", { name: /Style Twin/ }).click();
    await expect(app.getByRole("heading", { name: "Create your Style Twin" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqPendingTryOnV1"))).not.toBeNull();
    await page.evaluate(() => localStorage.setItem("styleiqTwinSetupV2", JSON.stringify({ id: "twin-phase-1", method: "photo", step: 4, complete: true })));
    await page.reload();
    await expect(app).toHaveAttribute("data-screen", "E-06");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqTryOnResultV1"))).not.toBeNull();
  });
});
