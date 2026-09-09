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
  test("valid event reaches Look selection and persists on Planner", async ({ page }) => {
    await openPlanner(page);
    await page.locator("#app").getByRole("button", { name: "Add Event" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "What are you dressing for?" })).toBeVisible();
    await page.locator("#planner-event-date").fill("2099-08-23");
    await page.locator("#planner-event-daypart").selectOption("Evening");
    await page.locator("#planner-event-occasion").selectOption("Dinner");
    await page.locator("#planner-event-title").fill("Birthday dinner");
    await page.locator("#app").getByRole("button", { name: "Review event" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Check the event details" })).toBeVisible();
    await page.locator("#app").getByRole("button", { name: "Choose a Look" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Which Look should we plan?" })).toBeVisible();
    await page.locator("#app").getByRole("button", { name: /Soft Tailoring/ }).click();
    await page.locator("#app").getByRole("button", { name: "Save to Planner" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Your planned Look" })).toBeVisible();
    await expect(page.locator("#app").getByText("Soft Tailoring").first()).toBeVisible();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("styleiqPlannerEventV2")));
    expect(saved).toMatchObject({ date: "2099-08-23", occasion: "Dinner", title: "Birthday dinner", lookId: "tailoring" });
  });

  test("missing required event fields produces real validation errors", async ({ page }) => {
    await openPlanner(page);
    await page.locator("#app").getByRole("button", { name: "Add Event" }).click();
    await page.locator("#app").getByRole("button", { name: "Review event" }).click();
    await expect(page.locator("#app").getByRole("heading", { name: "Check the event details" })).toBeVisible();
    await expect(page.locator("#app").getByRole("alert")).toContainText("Choose a date");
    await expect(page.locator("#app").getByRole("alert")).toContainText("Choose an occasion");
    await expect(page.locator("#app").getByRole("alert")).toContainText("Choose a time or daypart");
    await expect(page.locator("#app").getByRole("button", { name: "Choose a Look" })).toBeDisabled();
  });
});
