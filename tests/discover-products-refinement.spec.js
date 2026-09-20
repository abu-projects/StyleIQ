import { test, expect } from "@playwright/test";

const products = [
  { product_id: "shoe-vagabond", title: "Marja Leather Loafers", merchant: "Vagabond", category: "Shoes", price: 145, currency: "USD", thumbnail: "/images/alta-tan-suede-loafers.png", url: "https://example.com/vagabond" },
  { product_id: "shoe-arket", title: "Soft Leather Loafers", merchant: "Arket", category: "Shoes", price: 170, currency: "USD", thumbnail: "/images/alta-tan-suede-loafers.png", url: "https://example.com/arket" },
  { product_id: "blazer-balmain", title: "Long Marketplace Title Tailored Wool Blazer With Extra Descriptive Copy", merchant: "Balmain", category: "Blazers", price: 320, currency: "USD", thumbnail: "/images/item_blazer.png", url: "https://example.com/blazer" },
  { product_id: "owned-aritzia", title: "Ivory Silk Shell", merchant: "Aritzia", category: "Tops", price: 120, currency: "USD", thumbnail: "/images/item_silk_shell.png", url: "https://example.com/shell" },
];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.STYLEIQ_API_BASE_URL = "/api";
    localStorage.setItem("styleiqWishlistV1", "[]");
    localStorage.setItem("styleiqClosetItemsV1", "[]");
  });
  await page.route("**/api/**", async route => {
    const path = new URL(route.request().url()).pathname;
    const body = path === "/api/closet" ? { items: [{ id: "closet-owned", product_id: "owned-aritzia", name: "Ivory Silk Shell" }] }
      : path === "/api/suggestions" ? { suggestions: [] }
      : path === "/api/styles" ? { results: products }
      : path === "/api/styles/search" ? { results: [] }
      : path === "/api/closet/photos/from-style" ? { id: "prepared" }
      : {};
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(body) });
  });
  await page.goto("/index.html#K-01");
  await page.getByRole("tab", { name: "Products" }).click();
  await page.locator("#discover-product-query").fill("style");
  await expect(page.locator(".discover-product-card")).toHaveCount(4);
});

test("brand All resets while category and brand remain independently visible", async ({ page }) => {
  const categories = page.getByRole("group", { name: "Product categories" });
  const brands = page.getByRole("group", { name: "Brands" });
  await expect(brands.getByRole("button", { name: "All", exact: true })).toHaveAttribute("aria-pressed", "true");
  await brands.getByRole("button", { name: "Vagabond" }).click();
  await expect(page.locator(".discover-product-card")).toHaveCount(1);
  await categories.getByRole("button", { name: "Shoes" }).click();
  await expect(categories.getByRole("button", { name: "Shoes" })).toHaveAttribute("aria-pressed", "true");
  await expect(brands.getByRole("button", { name: "Vagabond" })).toHaveAttribute("aria-pressed", "true");
  await brands.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".discover-product-card")).toHaveCount(2);
  await categories.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".discover-product-card")).toHaveCount(4);
  await brands.getByRole("button", { name: "Balmain" }).click();
  await expect(page.locator(".discover-product-card")).toContainText(["Long Marketplace Title"]);
});

test("full-width card actions and shared Product Detail preserve independent behavior", async ({ page, context }) => {
  const card = page.locator(".discover-product-card", { hasText: "Marja Leather Loafers" });
  await expect(card).toHaveCSS("grid-column", "auto");
  await card.getByRole("button", { name: /Save to Wishlist/ }).click();
  await expect(card.getByRole("button", { name: /Remove from Wishlist/ })).toBeVisible();
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "K-01");

  const popupPromise = context.waitForEvent("page");
  await card.getByRole("button", { name: "Buy" }).click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL("https://example.com/vagabond");
  await popup.close();
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "K-01");

  await card.click({ position: { x: 8, y: 8 } });
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "G-09");
  await expect(page.getByRole("heading", { name: "Marja Leather Loafers" })).toBeVisible();
  await expect(page.locator(".wishlist-detail-heading .small")).toContainText("Saved");
  await page.getByRole("button", { name: "Back" }).click();
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "K-01");
});

test("unsaved Product Detail saves in place and owned products suppress Closet insertion", async ({ page }) => {
  const blazer = page.locator(".discover-product-card", { hasText: "Long Marketplace Title" });
  await blazer.click();
  await expect(page.getByRole("heading", { name: "Product Details" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Save to Wishlist" })).toBeVisible();
  await page.getByRole("button", { name: "Save to Wishlist" }).click();
  await expect(page.locator(".wishlist-detail-heading .small")).toContainText("Saved");
  await page.getByRole("button", { name: "Back" }).click();

  await page.locator(".discover-product-card", { hasText: "Ivory Silk Shell" }).click();
  await expect(page.locator(".discover-detail-owned")).toHaveText("In your Closet");
  await expect(page.getByRole("button", { name: "Add to Closet", exact: true })).toHaveCount(0);
});

test("Product Detail Add to Closet enters the existing review flow", async ({ page }) => {
  await page.locator(".discover-product-card", { hasText: "Long Marketplace Title" }).click();
  await page.getByRole("button", { name: "Add to Closet", exact: true }).click();
  await expect(page.locator("#app")).toHaveAttribute("data-screen", "B-06");
  await expect(page.getByLabel("Item name", { exact: true })).toHaveValue(/Long Marketplace Title/);
});

test("Discover and Wishlist card hearts are positioned on the right", async ({ page }) => {
  const card = page.locator(".discover-product-card", { hasText: "Marja Leather Loafers" });
  const discoverHeart = card.getByRole("button", { name: /Save to Wishlist/ });
  const [discoverMediaBox, discoverHeartBox] = await Promise.all([
    card.locator(".discover-product-media").boundingBox(),
    discoverHeart.boundingBox(),
  ]);
  expect(discoverHeartBox.x + discoverHeartBox.width / 2 - discoverMediaBox.x).toBeGreaterThan(discoverMediaBox.width / 2);
  await discoverHeart.click();
  await page.getByRole("button", { name: "View Wishlist" }).click();
  const wishlistCard = page.locator(".wishlist-product", { hasText: "Marja Leather Loafers" });
  const [wishlistMediaBox, wishlistHeartBox] = await Promise.all([
    wishlistCard.locator(".wishlist-product-media").boundingBox(),
    wishlistCard.locator(".wishlist-heart").boundingBox(),
  ]);
  expect(wishlistHeartBox.x + wishlistHeartBox.width / 2 - wishlistMediaBox.x).toBeGreaterThan(wishlistMediaBox.width / 2);
});

test("mobile product feed and detail have no horizontal overflow or nav overlap", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only geometry check");
  const card = page.locator(".discover-product-card").first();
  const [cardBox, contentBox] = await Promise.all([card.boundingBox(), page.locator("#app .content").boundingBox()]);
  expect(cardBox.width).toBeGreaterThan(contentBox.width * .9);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await card.click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  const lastAction = page.locator(".wishlist-detail-actions, .discover-detail-closet, .discover-detail-owned").last();
  if (await lastAction.count()) await lastAction.scrollIntoViewIfNeeded();
  const nav = page.locator(".bottom-nav");
  const [navBox, actionBox] = await Promise.all([nav.boundingBox(), lastAction.count() ? lastAction.boundingBox() : null]);
  if (actionBox && navBox) expect(actionBox.y + actionBox.height).toBeLessThanOrEqual(navBox.y + 1);
});
