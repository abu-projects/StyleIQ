import { test, expect } from "@playwright/test";

async function beginNewUser(page, goal = "Get dressed faster") {
  await page.goto("/index.html#A-16");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  const app = page.locator("#app");
  await app.getByRole("button", { name: "Sign up with Google" }).click();
  await expect(app.getByRole("heading", { name: "Set up your StyleIQ" })).toBeVisible();
  expect(await app.getAttribute("data-canonical-screen")).toBe("A-02");

  // Select goal
  if (goal) {
    const goalBtn = app.getByRole("button", { name: goal });
    if (await goalBtn.isVisible()) await goalBtn.click();
  }

  // Complete setup -> routes to destination
  await app.getByRole("button", { name: "Start with StyleIQ" }).click();
  return app;
}

async function selectExistingCustomer(page) {
  await page.evaluate(() => {
    if (typeof setCustomerScenario === 'function') setCustomerScenario('existing');
  });
}

test.describe("Green Phase 1 onboarding (Phase 2 Canonical Alignment)", () => {
  test("email signup reaches the same first-goal step", async ({ page }) => {
    await page.goto("/index.html#A-16");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const app = page.locator("#app");

    await expect(app.getByRole("button", { name: "Sign up with Apple" })).toBeVisible();
    await app.getByRole("button", { name: /Continue with email/ }).click();

    // Inline email state inside A-16
    expect(await app.getAttribute("data-canonical-screen")).toBe("A-16");
    await app.locator("#signup-first-name").fill("Test");
    await app.locator("#signup-last-name").fill("Person");
    await app.getByPlaceholder("name@email.com").fill("test@example.com");
    await app.getByRole("button", { name: "Create Account" }).click();

    // Inline OTP state inside A-16
    expect(await app.getAttribute("data-canonical-screen")).toBe("A-16");
    for (const [index, digit] of [..."123456"].entries()) {
      await app.getByLabel(`Digit ${index + 1}`, { exact: true }).fill(digit);
    }
    await app.getByRole("button", { name: "Verify email" }).click();

    // Advances to A-02 Setup
    await expect(app.getByRole("heading", { name: "Set up your StyleIQ" })).toBeVisible();
    expect(await app.getAttribute("data-canonical-screen")).toBe("A-02");
  });

  test("new user can skip an empty Closet and use Today", async ({ page }) => {
    const app = await beginNewUser(page, "Get dressed faster");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqOnboardingGoalV1"))).toBe("Get dressed faster");

    await expect(app).toHaveAttribute("data-canonical-screen", "D-02");
    await expect(app.getByRole("heading", { name: /An easy direction to begin with|Your first Look starts with one piece/ })).toBeVisible();
    await expect(app.getByRole("button", { name: /Add First Item|Add an item/ })).toBeVisible();
    await expect(app.getByRole("button", { name: "Ask Muse" })).toBeVisible();
    await expect(app.getByRole("button", { name: /See Another Direction|Browse inspiration/ })).toBeVisible();
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("styleiqClosetItemsV1") || "[]").length)).toBe(0);
  });

  test("new user saves reviewed item metadata and sees it after reload", async ({ page }) => {
    const app = await beginNewUser(page, "Make more outfits from Closet");
    // Lands on B-01
    expect(await app.getAttribute("data-canonical-screen")).toBe("B-01");
    await app.getByRole("button", { name: "Review first item" }).click();
    // B-06 Review
    expect(await app.getAttribute("data-canonical-screen")).toBe("B-06");
    const editBtn = app.getByText("Edit details", { exact: true }).or(app.getByRole("button", { name: /Edit/i })).first();
    if (await editBtn.isVisible()) await editBtn.click();
    if (await app.locator("#inline-item-name").isVisible()) {
      await app.locator("#inline-item-name").fill("Blue linen overshirt");
      await app.locator("#inline-brand").fill("Field Notes");
      await app.locator("#inline-category").fill("Outerwear");
    }
    await app.getByRole("button", { name: /Looks right · Add|Add to Closet|Save item/i }).first().click();
    await expect(app).toHaveAttribute("data-canonical-screen", /D-02|C-01/);
    await page.reload();
    await selectExistingCustomer(page);
    await page.goto("/index.html#C-01");
    await expect(app).toContainText("Blue linen overshirt");
  });

  test("legacy goal and Closet setup routes resolve to their canonical owners", async ({ page }) => {
    // Goal stays in A-02.
    await page.goto("/index.html#A-05");
    const app = page.locator("#app");
    expect(await app.getAttribute("data-canonical-screen")).toBe("A-02");
    await expect(app.getByRole("heading", { name: "Set up your StyleIQ" })).toBeVisible();

    await page.goto("/index.html#A-06");
    expect(await app.getAttribute("data-canonical-screen")).toBe("B-01");
    await expect(app.getByRole("heading", { name: "Choose garment photos" })).toBeVisible();
  });

  test("backing out of Closet setup clears its onboarding handoff", async ({ page }) => {
    await page.goto("/index.html#A-16");
    await page.evaluate(() => {
      localStorage.clear();
      localStorage.setItem("styleiqOnboardingClosetPendingV1", "true");
    });
    await page.goto("/index.html#B-01");
    const app = page.locator("#app");
    expect(await app.getAttribute("data-canonical-screen")).toBe("B-01");
    // Backing out
    await page.goto("/index.html#D-02");
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
    await selectExistingCustomer(page);
    await app.getByRole("button", { name: "Open StyleIQ" }).click();
    await expect(app).toHaveAttribute("data-canonical-screen", "D-02");
    await app.getByRole("navigation").getByRole("button", { name: "Closet" }).click();
    await expect(app).toContainText("Existing red coat");
  });

  test("Style Twin remains optional and resumes Try-On from the Profile entry", async ({ page }) => {
    const app = await beginNewUser(page, "Get dressed faster");
    await expect(app.getByText("Style Twin", { exact: true })).toHaveCount(0);
    await page.goto("/index.html?customer=new#L-01");
    await page.locator('.profile-utility').filter({ hasText: 'Style Twin' }).click();
    expect(await app.getAttribute("data-canonical-screen")).toBe("H-01");
    await expect(app.getByRole("heading", { name: /Create.*Style Twin/i }).first()).toBeVisible();
  });
});
