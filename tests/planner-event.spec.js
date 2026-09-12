import { test, expect } from "@playwright/test";

async function openPlanner(page) {
  await page.goto("/index.html#I-01");
  await page.evaluate(() => {
    localStorage.removeItem("styleiqPlannerEventV2");
    localStorage.removeItem("styleiqPlannerIntentV1");
  });
  await page.reload();
}

test.describe("Planner event flow", () => {
  test("custom event details persist directly on Planner", async ({ page }) => {
    await openPlanner(page);
    await page.locator("#app").getByRole("button", { name: "Add Event" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "What are you dressing for?" })).toBeVisible();
    await page.locator("#planner-event-date").fill("2099-08-23");
    await page.locator("#app details").getByText("More details").click();
    await page.locator("#planner-event-daypart").selectOption("Evening");
    await page.locator("#planner-event-occasion").selectOption("Dinner");
    await page.locator("#planner-event-title").fill("Birthday dinner");
    await page.locator("#app").getByRole("button", { name: "Plan My Look" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Your planned Look" })).toBeVisible();
    await expect(page.locator("#app").getByText("Coffee Meeting").first()).toBeVisible();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqPlannerEventV2")));
    expect(saved).toMatchObject({ date: "2099-08-23", daypart: "Evening", occasion: "Dinner", title: "Birthday dinner", lookId: "coffee" });
  });

  test("default event details create a usable plan without a legacy review step", async ({ page }) => {
    await openPlanner(page);
    await page.locator("#app").getByRole("button", { name: "Add Event" }).click();
    await page.locator("#app").getByRole("button", { name: "Plan My Look" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Your planned Look" })).toBeVisible();
    await expect(page.locator("#app").getByText("Coffee Meeting").first()).toBeVisible();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqPlannerEventV2")));
    expect(saved).toMatchObject({
      time: "10:00",
      daypart: "Morning",
      occasion: "Work",
      title: "Client presentation at 10, dinner after work",
      lookId: "coffee",
    });
    expect(saved.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
