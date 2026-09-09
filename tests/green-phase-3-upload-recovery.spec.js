import { test, expect } from "@playwright/test";

async function openIssuePicker(page) {
  await page.goto("/index.html#B-07");
  const app = page.locator("#app");
  await app.getByText("Choose a different issue", { exact: true }).click();
  return app;
}

test.describe("Green Phase 3 upload recovery", () => {
  test("separates quality, format, content, detection, and multi-item failures", async ({ page }) => {
    const cases = [
      ["Low-quality / blurry", "This photo is too blurry."],
      ["Unsupported image", "This image format is not supported."],
      ["Non-fashion image", "This doesn’t look like a fashion item."],
      ["Unable to detect item", "We couldn’t detect one clear item."],
      ["Multiple items detected", "We found more than one item."],
    ];
    for (const [label, heading] of cases) {
      const app = await openIssuePicker(page);
      await app.getByRole("button", { name: label, exact: true }).click();
      await expect(app.getByRole("heading", { name: heading })).toBeVisible();
      await expect(app.getByText("Upload exception")).toBeVisible();
    }
  });

  test("duplicate and already-owned states offer existing-item recovery", async ({ page }) => {
    let app = await openIssuePicker(page);
    await app.getByRole("button", { name: "Likely duplicate", exact: true }).click();
    await expect(app.getByRole("heading", { name: "This may already be in your Closet." })).toBeVisible();
    await expect(app.getByRole("button", { name: "View existing item" })).toBeVisible();
    await expect(app.getByRole("button", { name: "Add anyway" })).toBeVisible();
    await expect(app.getByRole("button", { name: "Replace / update existing photo" })).toBeVisible();

    app = await openIssuePicker(page);
    await app.getByRole("button", { name: "Already in Closet", exact: true }).click();
    await expect(app.getByRole("heading", { name: "This item is already in your Closet." })).toBeVisible();
    await expect(app.getByRole("button", { name: "Replace / update photo" })).toBeVisible();
  });

  test("recovery actions stay actionable and do not commit a failed upload", async ({ page }) => {
    await page.goto("/index.html#B-07");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const app = page.locator("#app");
    await app.getByText("Choose a different issue", { exact: true }).click();
    await app.getByRole("button", { name: "Non-fashion image", exact: true }).click();
    await app.getByRole("button", { name: "Choose another photo" }).click();
    await expect(app).toHaveAttribute("data-screen", "B-02");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("styleiqClosetItemsV1"))).toBeNull();
  });
});
