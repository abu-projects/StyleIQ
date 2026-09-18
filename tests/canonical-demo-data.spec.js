const { test, expect } = require("@playwright/test");

const app = (page) => page.locator("#app");

async function boot(page, { route = "C-01", profile = "Womenswear", storage = {} } = {}) {
  await page.addInitScript(({ profile, storage }) => {
    localStorage.clear();
    localStorage.setItem("styleiqStylingContextV1", profile);
    for (const [key, value] of Object.entries(storage)) localStorage.setItem(key, String(value));
  }, { profile, storage });
  await page.goto(`/index.html?customer=existing#${route}`);
}

test.describe("canonical demo dataset", () => {
  for (const profile of ["Womenswear", "Menswear"]) {
    test(`migrates a stale one-piece Closet and agrees across data, runtime, and rendered UI for ${profile}`, async ({ page }) => {
      await boot(page, { profile, storage: { styleiqClosetSizeV1: "1" } });

    await expect(page.locator(".closet-item")).toHaveCount(8);
    await expect(app(page).getByText("Wardrobe · 8 pieces")).toHaveCount(1);
    expect(await page.evaluate(() => localStorage.getItem("styleiqClosetSizeV1"))).toBe("8");

    const audit = await page.evaluate(() => ({
      snapshot: window.StyleIQDemoData.snapshot(),
      validation: window.StyleIQDemoData.validate(),
      names: [...document.querySelectorAll(".closet-item-copy b")].map((node) => node.textContent.trim()),
      brokenImages: [...document.querySelectorAll(".closet-item img")].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    }));
    expect(audit.snapshot.active).toMatchObject({ canonicalCloset: 8, runtimeCanonicalCloset: 8, renderedCanonicalCloset: 8 });
    expect(audit.validation).toEqual({ valid: true, issues: [] });
    expect(new Set(audit.names).size).toBe(8);
      expect(audit.brokenImages).toEqual([]);
    });
  }

  for (const [profile, suffix] of [["Womenswear", "women"], ["Menswear", "men"]]) {
    test(`${profile} exposes exactly four canonical Looks with valid IDs and three media states`, async ({ page }) => {
      await boot(page, { route: "G-01", profile });
      await expect(page.locator(".item-card")).toHaveCount(4);
      for (const title of ["Party Look", "Workout Look", "Office Look", "Dinner Look"])
        await expect(app(page).getByRole("button", { name: new RegExp(title) })).toHaveCount(1);
      await expect(page.locator(".look-popularity", { hasText: "Most popular" })).toHaveCount(1);
      await expect(app(page).getByRole("button", { name: /Dinner Look/ }).locator(".look-popularity")).toHaveText("Most popular");

      const records = await page.evaluate(() => Object.values(window.StyleIQDemoData.canonicalLooksByProfile[window.StyleIQDemoData.snapshot().profile]));
      expect(records.map((record) => record.id)).toEqual([
        `look-party-${suffix}`,
        `look-workout-${suffix}`,
        `look-office-${suffix}`,
        `look-dinner-${suffix}`,
      ]);
      for (const record of records) {
        expect(record.media.map((media) => media.label)).toEqual(["Avatar", "Avatar + Details", "Outfit Video"]);
        expect(record.media.map((media) => media.kind)).toEqual(["avatar", "details", "video"]);
        expect(record.media.every((media) => Boolean(media.src))).toBe(true);
      }

      await app(page).getByRole("button", { name: /Office Look/ }).click();
      await expect(page.getByRole("group", { name: "Look media options" }).getByRole("button")).toHaveCount(3);
      await page.getByRole("button", { name: "Avatar + Details", exact: true }).click();
      await expect(page.locator(".look-media-details > span")).toHaveCount(4);
      await page.getByRole("button", { name: "Outfit Video", exact: true }).click();
      await expect(page.locator("video.saved-look-media")).toBeVisible();
    });
  }

  test("Make It Mine reports the required Closet matches and keeps partial gaps explicit", async ({ page }) => {
    await boot(page, { route: "D-02" });
    const expected = {
      office: { score: "3/4", legend: ["2 exact", "1 similar", "1 missing"], action: "Create With My Closet", used: 3, missing: 1 },
      dinner: { score: "4/4", legend: ["4 exact", "0 similar", "0 missing"], action: "Wear This Look", used: 4, missing: 0 },
      party: { score: "1/4", legend: ["1 exact", "0 similar", "3 missing"], action: "Create an Inspired Version", used: 1, missing: 3 },
      workout: { score: "2/4", legend: ["1 exact", "1 similar", "2 missing"], action: "Create With My Closet", used: 2, missing: 2 },
    };

    for (const [key, result] of Object.entries(expected)) {
      await page.evaluate((lookKey) => window.makeTodayLookMine(`look-${lookKey}-women`), key);
      await expect(app(page)).toHaveAttribute("data-canonical-screen", "E-07");
      await expect(page.locator(".make-mine-score")).toContainText(result.score);
      for (const label of result.legend) await expect(page.locator(".make-mine-legend")).toContainText(label);
      await app(page).getByRole("button", { name: result.action, exact: true }).click();
      await expect(page.locator(".make-mine-used h3")).toHaveText(`${result.used} ${result.used === 1 ? "piece" : "pieces"} used`);
      if (result.missing) await expect(page.locator(".make-mine-missing-list h3")).toContainText(String(result.missing));
      else await expect(page.locator(".make-mine-missing-list")).toHaveCount(0);
      await expect(app(page).getByRole("button", { name: "Wear This Look" })).toBeVisible();
      await expect(app(page).getByRole("button", { name: "Save Look" })).toBeVisible();
      await expect(app(page).getByRole("button", { name: "Add to Planner" })).toBeVisible();
      await expect(app(page).getByRole("button", { name: "Try On with Style Twin" })).toBeVisible();
      await app(page).getByRole("button", { name: "Review Closet matches" }).click();
    }
  });

  test("Today and stylist Make It Mine entry points open E-07, never Studio", async ({ page }) => {
    await boot(page, { route: "D-02" });
    await app(page).getByRole("button", { name: "Make it mine", exact: true }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "E-07");

    await page.goto("/index.html?customer=existing#H-11");
    await app(page).locator(".discover-feature-look").first().click();
    await app(page).getByRole("button", { name: "Make It Mine", exact: true }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "E-07");
    await expect(app(page)).not.toHaveAttribute("data-canonical-screen", "F-01");
  });

  test("Make It Mine result actions persist and open their intended destinations", async ({ page }) => {
    await boot(page, { route: "D-02" });
    const createOfficeEdit = () => page.evaluate(() => {
      window.makeTodayLookMine("look-office-women");
      window.createMakeItMineAdaptation();
    });

    await createOfficeEdit();
    await app(page).getByRole("button", { name: "Wear This Look" }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "D-02");
    expect(await page.evaluate(() => localStorage.getItem("styleiqTodayLookV1"))).toMatch(/^made-mine-/);

    await createOfficeEdit();
    await app(page).getByRole("button", { name: "Save Look" }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "G-02");
    expect(await page.evaluate(() => ({
      selected: localStorage.getItem("styleiqSelectedSavedLookV1"),
      saved: JSON.parse(localStorage.getItem("styleiqSavedStudioLooksV1") || "[]").map((look) => look.id),
    }))).toEqual(expect.objectContaining({
      selected: expect.stringMatching(/^made-mine-/),
      saved: expect.arrayContaining([expect.stringMatching(/^made-mine-/)]),
    }));

    await createOfficeEdit();
    await app(page).getByRole("button", { name: "Add to Planner" }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "I-01");

    await createOfficeEdit();
    await app(page).getByRole("button", { name: "Try On with Style Twin" }).click();
    await expect(app(page)).toHaveAttribute("data-canonical-screen", "E-06");
    expect(await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqTryOnResultV1")))).toMatchObject({
      sourceScreen: "E-07",
      sourceType: "make-it-mine",
      returnTo: "E-07",
    });
  });

  test("keeps one canonical Trip linked to the active Looks and Dinner as the sole featured Look", async ({ page }) => {
    await boot(page, { route: "J-01" });
    await expect(page.getByRole("region", { name: "Saved trips" }).getByRole("button")).toHaveCount(1);
    const audit = await page.evaluate(() => ({
      snapshot: window.StyleIQDemoData.snapshot(),
      featured: Object.values(window.StyleIQDemoData.canonicalLooksByProfile.women).filter((look) => look.featured).map((look) => look.id),
    }));
    expect(audit.snapshot.trip).toEqual({
      count: 1,
      id: "trip-demo-01",
      lookIds: ["look-office-women", "look-dinner-women", "look-workout-women"],
    });
    expect(audit.featured).toEqual(["look-dinner-women"]);
    await page.getByRole("button", { name: /Open trip to/ }).click();
    await expect(page.getByRole("group", { name: "Trip Looks" }).getByRole("button")).toHaveCount(3);
    await expect(page.locator(".trip-look-position")).toHaveText("1 / 3");
  });
});
