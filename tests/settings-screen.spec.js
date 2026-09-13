import { test, expect } from "@playwright/test";

test("settings controls are editable and persist", async ({ page }, testInfo) => {
  await page.goto("/index.html#L-11");

  const originals = page.locator("#app").getByRole("switch", {
    name: "Keep original photos",
  });
  await expect(originals).toHaveAttribute("aria-checked", "true");
  const toggleShape = await originals.evaluate((node) => {
    const style = getComputedStyle(node);
    return { width: style.width, height: style.height, radius: style.borderRadius };
  });
  expect(toggleShape).toEqual({ width: "52px", height: "28px", radius: "9px" });
  await expect(page.locator("#app select[aria-label='Style Twin visibility']")).toHaveCount(0);
  await originals.click();
  await expect(originals).toHaveAttribute("aria-checked", "false");

  await page.getByRole("group", { name: "Style Twin visibility" }).getByRole("button", { name: "Followers" }).click();
  await page.reload();

  await expect(
    page.locator("#app").getByRole("switch", {
      name: "Keep original photos",
    }),
  ).toHaveAttribute("aria-checked", "false");
  await expect(
    page.getByRole("group", { name: "Style Twin visibility" }).getByRole("button", { name: "Followers" }),
  ).toHaveAttribute("aria-pressed", "true");

  if (testInfo.project.name === "mobile") {
    await page.screenshot({
      path: testInfo.outputPath("settings-mobile.png"),
      fullPage: false,
    });
  }
});

test("preference disclosures use canonical application fields", async ({ page }) => {
  await page.goto("/index.html#L-04");
  const about = page.locator(".siq-form-disclosure").filter({ hasText: "About you" });
  if (!(await about.evaluate((node) => node.hasAttribute("open")))) {
    await about.locator("summary").click();
  }
  const input = about.locator("input").first();
  await expect(input).toBeVisible();
  const fieldStyle = await input.evaluate((node) => {
    const style = getComputedStyle(node);
    return {
      height: style.height,
      radius: style.borderRadius,
      fontSize: style.fontSize,
    };
  });
  expect(fieldStyle).toEqual({ height: "52px", radius: "14px", fontSize: "15px" });
});
