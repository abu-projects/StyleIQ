const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto("/index.html#C-01");
});

test("Closet search and sort stay on the owned wardrobe", async ({ page }) => {
  await expect(page.locator("header [aria-label='Search Closet']")).toHaveCount(0);

  const search = page.getByRole("searchbox", { name: "Search Closet" });
  await expect(search).toHaveAttribute("placeholder", "Search your Closet");
  await search.pressSequentially("COS");
  await expect(page.locator(".siq-autocomplete-popover")).toHaveCount(0);
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "C-01");

  await search.fill("");
  const sort = page.getByRole("combobox", { name: "Sort Closet" });
  await sort.selectOption("Most worn");
  await expect(page.getByRole("combobox", { name: "Sort Closet" })).toHaveValue("Most worn");
});

test("Closet collections, Favorites, and image matching are actionable", async ({ page }) => {
  const favoritesBefore = await page.locator(".closet-favorite[aria-pressed='true']").count();
  await page.locator(".closet-favorite[aria-pressed='false']").first().click();
  await expect(page.locator(".closet-favorite[aria-pressed='true']")).toHaveCount(favoritesBefore + 1);

  const collections = page.getByRole("tablist", { name: "Smart collections" });
  const needsLocation = collections.getByRole("tab", { name: "Needs location" });
  await needsLocation.click();
  await expect(needsLocation).toHaveAttribute("aria-selected", "true");

  await page.evaluate(() => window.resetClosetFilters());
  await page.locator("#closet-image-search-input").setInputFiles({
    name: "closet.png",
    mimeType: "image/png",
    buffer: Buffer.from("closet-image-smoke-test"),
  });
  await expect(page.getByRole("dialog", { name: "StyleIQ Lens" })).toBeVisible();
  await expect(page.locator(".lens-result-hero")).toHaveAttribute("src", /^data:image\//);
});

test("Closet has no horizontal overflow at the target mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const categoryTabs = page.getByRole("tablist", { name: "Closet categories" });
  await expect(categoryTabs.getByRole("tab")).toHaveCount(8);
  await expect(categoryTabs.getByRole("tab", { name: "Accessories" })).toBeVisible();
  const selectedTab = categoryTabs.getByRole("tab", { name: "All", exact: true });
  const unselectedTab = categoryTabs.getByRole("tab", { name: "Tops" });
  await expect(selectedTab).toHaveCSS("border-top-width", "0px");
  expect(await selectedTab.evaluate((tab) => getComputedStyle(tab).backgroundColor))
    .toBe(await unselectedTab.evaluate((tab) => getComputedStyle(tab).backgroundColor));
  expect(await selectedTab.evaluate((tab) => getComputedStyle(tab, "::after").backgroundColor))
    .not.toBe(await unselectedTab.evaluate((tab) => getComputedStyle(tab, "::after").backgroundColor));
  const overflow = await page.locator("#app").evaluate((root) => {
    const screen = root.querySelector(".screen");
    return screen.scrollWidth > screen.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1;
  });
  expect(overflow).toBe(false);
});

test("Closet no-results state has artwork and one centered recovery action", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("searchbox", { name: "Search Closet" }).fill("no-piece-can-match-this");

  const state = page.getByRole("region", { name: "No matching Closet pieces" });
  await expect(state.locator(".closet-no-results-art .empty-art-lips")).toBeVisible();
  await expect(page.locator(".closet-style-entry")).toHaveCount(0);
  const action = state.getByRole("button", { name: "Clear filters" });
  await expect(action).toBeVisible();

  const [stateBox, actionBox] = await Promise.all([state.boundingBox(), action.boundingBox()]);
  expect(stateBox).not.toBeNull();
  expect(actionBox).not.toBeNull();
  const stateCenter = stateBox.x + stateBox.width / 2;
  const actionCenter = actionBox.x + actionBox.width / 2;
  expect(Math.abs(stateCenter - actionCenter)).toBeLessThanOrEqual(1);
});
