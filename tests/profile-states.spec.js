import { test, expect } from "@playwright/test";

test("new customer profile prioritizes the first wardrobe action", async ({ page }) => {
  await page.goto("/index.html?customer=new#L-01");

  await expect(page.getByRole("heading", { name: "Build from one piece you already love." })).toBeVisible();
  await expect(page.getByRole("button", { name: /Add your first item/ })).toBeVisible();
  await expect(page.getByRole("region", { name: "Atelier setup progress" })).toContainText("0 of 3");
  await expect(page.getByText("Outfits I return to")).toHaveCount(0);
});

test("existing customer profile summarizes their Atelier and opens My Content", async ({ page }) => {
  await page.goto("/index.html?customer=existing#L-01");

  const overview = page.getByRole("region", { name: "Atelier overview" });
  await expect(overview).toContainText("12");
  await expect(overview).toContainText("Saved Looks");
  await expect(page.getByRole("heading", { name: "Outfits I return to" })).toBeVisible();
  await page.getByRole("button", { name: "Open My Content" }).click();
  await expect(page.locator("#app").getByRole("heading", { name: "My content" })).toBeVisible();
});

test("profile preferences can change and remove the profile photo", async ({ page }) => {
  await page.goto("/index.html?customer=existing#L-04");
  const input = page.getByLabel("Choose profile photo");
  await input.setInputFiles({
    name: "profile.png",
    mimeType: "image/png",
    buffer: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64"),
  });

  await expect(page.getByAltText("Current profile photo")).toHaveAttribute("src", /^data:image\/png/);
  await expect(page.getByRole("button", { name: "Change photo" })).toBeVisible();
  await page.getByRole("button", { name: "Remove" }).click();
  await expect(page.getByAltText("Current profile photo")).toHaveAttribute("src", "images/person-amelia-profile.png");
});
