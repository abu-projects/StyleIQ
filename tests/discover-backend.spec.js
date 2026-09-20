import { test, expect } from "@playwright/test";

test("Closet outfits and catalog products use their separate backend paths", async ({ page }) => {
  const calls = [];
  await page.addInitScript(() => { window.STYLEIQ_API_BASE_URL = "/api"; });
  await page.route("**/api/**", async (route) => {
    const request = route.request();
    const path = new URL(request.url()).pathname;
    calls.push(`${request.method()} ${path}`);
    const responses = {
      "/api/closet": { items: [{ id: "owned-1", name: "My ivory top", category: "top", photo_url: "/images/ivory_silk_shell.png" }] },
      "/api/suggestions": { id: "suggestion-1", outfits: [{ item_ids: ["owned-1"], rationale: "Works with your wardrobe." }] },
      "/api/styles": { results: [{ product_id: "sku-1", title: "Cotton Shirt", merchant: "COS", price: 39.9, currency: "USD", thumbnail: "/images/ivory_silk_shell.png", url: "https://example.com/buy", category: "top" }] },
      "/api/styles/search": { results: [{ product_id: "sku-2", title: "Online Shirt", merchant: "Arket", price: 49, currency: "USD", url: "https://example.com/online" }] },
      "/api/closet/photos/from-style": { id: "proposed-1" },
    };
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(responses[path]) });
  });

  await page.goto("/index.html#K-01");
  const muse = page.locator(".discover-muse-card");
  await expect(muse).toContainText("Works with your wardrobe.");
  await expect(muse.locator("img")).toHaveAttribute("alt", "My ivory top");
  await muse.getByRole("button", { name: "Save" }).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqSavedStudioLooksV1"))[0].pieces[0].closetId)).toBe("owned-1");

  await page.getByRole("tab", { name: "Products" }).click();
  await page.locator("#discover-product-query").fill("shirt");
  const catalog = page.locator(".discover-product-card", { hasText: "Cotton Shirt" });
  await expect(catalog).toBeVisible();
  await catalog.getByRole("button", { name: "♡ Save" }).click();
  await expect(catalog.getByRole("button", { name: "♥ Saved" })).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent("popup"), catalog.getByRole("button", { name: "Buy" }).click()]);
  await expect(popup).toHaveURL("https://example.com/buy");
  await popup.close();
  await catalog.getByRole("button", { name: /Add to Closet/ }).click();
  await page.getByRole("button", { name: "Search Online" }).click();
  await expect(page.locator(".discover-product-card", { hasText: "Online Shirt" })).toBeVisible();
  expect(calls).toContain("GET /api/closet");
  expect(calls).toContain("POST /api/suggestions");
  expect(calls).toContain("GET /api/styles");
  expect(calls).toContain("POST /api/styles/search");
  expect(calls).toContain("POST /api/closet/photos/from-style");
});
