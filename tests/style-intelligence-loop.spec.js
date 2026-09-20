import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem("styleiqTestBooted")) {
      localStorage.clear();
      sessionStorage.setItem("styleiqTestBooted", "true");
    }
  });
  await page.goto("/index.html?customer=existing#K-01");
});

test("Products exposes only All Products and Complete Saved Looks", async ({ page }) => {
  await page.getByRole("tab", { name: "Products" }).click();
  const selector = page.getByRole("tablist", { name: "Product recommendations" });
  await expect(selector.getByRole("tab")).toHaveCount(2);
  await expect(selector.getByRole("tab", { name: "All Products" })).toHaveAttribute("aria-selected", "true");
  await expect(selector.getByRole("tab", { name: "Complete Saved Looks" })).toBeVisible();
  await expect(selector.getByText("From Your Closet")).toHaveCount(0);
  await expect(selector.getByText("Your Style")).toHaveCount(0);
  await expect(page.locator(".discover-product-card")).toHaveCount(5);
  await expect(page.getByText("Recommendations improve as you save Looks.")).toBeVisible();
  await expect(page.getByRole("group", { name: "Product categories" })).toBeVisible();
});

test("Complete Saved Looks has an honest no-saved-Looks state", async ({ page }) => {
  await page.getByRole("tab", { name: "Products" }).click();
  await page.getByRole("tab", { name: "Complete Saved Looks" }).click();
  await expect(page.getByRole("heading", { name: "No saved Looks yet" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Explore Looks" })).toBeVisible();
  await expect(page.locator(".discover-product-card")).toHaveCount(0);
});

test("saved Looks expose only missing needs and external Product candidates", async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem("styleiqSavedStudioLooksV1", JSON.stringify([
      { id:"studio-weekend-structure", title:"Weekend Structure", image:"images/look-soft-tailoring-cairo.png", state:{}, pieces:[{ id:"weekend-hat", role:"Hat", name:"Black Wool Cap", image:"images/cat_accessories.png" }] },
      { id:"studio-dinner-edit", title:"Dinner Edit", image:"images/look-evening-cairo.png", state:{}, pieces:[{ id:"dinner-belt", role:"Belt", name:"Slim Leather Belt", image:"images/cat_accessories.png" },{ id:"dinner-vest", role:"Vest", name:"Tailored Evening Vest", image:"images/item_blazer.png" }] },
    ]));
  });
  await page.reload();
  await page.getByRole("tab", { name: "Products" }).click();
  await page.getByRole("tab", { name: "Complete Saved Looks" }).click();
  await expect(page.locator(".discover-complete-look")).toHaveCount(2);
  await expect(page.locator(".discover-missing-needs .chip").first()).toBeVisible();
  await expect(page.locator(".discover-completion-products .discover-product-card").first()).toBeVisible();
  await expect(page.locator(".discover-product-card .closet-item")).toHaveCount(0);
});

test("missing-piece handoff preserves Look intent and filters Products", async ({ page }) => {
  await page.evaluate(() => window.findProductsForLookPiece(
    { id:"missing-loafers", role:"Shoes", name:"Black loafers" },
    { id:"weekend-structure", title:"Weekend Structure" },
  ));
  await expect(page.locator("#app")).toHaveAttribute("data-canonical-screen", "K-01");
  await expect(page.getByRole("tab", { name: "Products", exact:true })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tab", { name: "Complete Saved Looks" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#discover-product-query")).toHaveValue("Black loafers");
  await expect(page.getByText("Find Black loafers for this Look")).toBeVisible();
  await expect(page.getByRole("button", { name: "Shoes" })).toHaveAttribute("aria-pressed", "true");
});

test("Product Detail gives a non-blocking similar Closet route while Buy remains", async ({ page }) => {
  await page.getByRole("tab", { name: "Products" }).click();
  await page.locator(".discover-product-card", { hasText:"Camel Tailored Blazer" }).click();
  await expect(page.getByText("You may already own something similar")).toBeVisible();
  await expect(page.getByRole("button", { name:"View Closet Item" })).toBeVisible();
  await expect(page.getByRole("button", { name:"Buy", exact:true })).toBeVisible();
  await page.getByRole("button", { name:"View Closet Item" }).click();
  await expect(page.locator("#app")).toHaveAttribute("data-canonical-screen", "C-02");
});
