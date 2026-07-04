# Sprint 1 — Critical Fixes
## "Make the prototype navigable and trustworthy"

**File:** `2.html`
**Goal:** Fix every dead-end, broken flow, and image mismatch that would make this prototype feel unfinished to a client. No new screens — only fix what exists.

---

## Fix 1 — Screen 39 (Look Saved Confirmation) — Add forward navigation

**Problem:** Screen 39 has 12 incoming links but 0 outgoing actions. Users are trapped after saving a look.

**What to build:**
- Below the confirmation message add two CTA buttons:
  - Primary: `View in Saved Looks` → `data-target="screen-36"`
  - Secondary: `Plan it for the week` → `data-target="screen-49"`
- Keep the existing confirmation content. Just add the two buttons beneath it.

**Design rules:**
- Primary button: `.primary-btn` full-width
- Secondary button: `.secondary-btn` full-width, margin-top 8px

---

## Fix 2 — Screen 40 (Look Worn Confirmation) — Add forward navigation

**Problem:** Screen 40 has 4 incoming links but no forward path. Wearing an outfit should feel like progress, not a dead-end.

**What to build:**
- Below the confirmation message add:
  - Primary CTA: `Back to Home` → `data-target="screen-29"`
  - Secondary link row (small, inline): `View Outfit History` → `data-target="screen-51"` | `Update Style Score` → `data-target="screen-56"`
- Show a small gold stat line: `+1 wear logged · Cost per wear improving`

**Design rules:**
- Use `.small-caps` gold text for the stat line
- Secondary links: `text-xs text-[#6F675F] underline` inline with a `·` separator

---

## Fix 3 — Screen 38 (Home Muse Insight Detail) — Add back navigation and forward action

**Problem:** Screen 38 has only 1 entry point (home dashboard muse card) and no exit path.

**What to build:**
- Add a back arrow button at top-left: `data-target="screen-29"`  
  Use `<button class="icon-btn" data-target="screen-29"><i data-lucide="arrow-left"></i></button>`
- At the bottom of the screen add a primary CTA: `See Today's Outfit` → `data-target="screen-30"`

---

## Fix 4 — Screen 35 (Outfit Feedback) — Wire it to more outfit screens

**Problem:** Screen 35 only has 2 incoming links. Every outfit-view screen should offer feedback.

**What to do:**
- In **Screen 30** (Today's Outfit Details): find the existing action row and add a `Not feeling it?` text button → `data-target="screen-35"`
- In **Screen 31** (Alternative Looks): add a `Give Feedback` chip below each outfit card → `data-target="screen-35"`
- In **Screen 34** (Occasion Outfit Results): add a `Rate this look` secondary button → `data-target="screen-35"`

**Design rules:**
- Use `<button class="chip" data-target="screen-35">` for the chip variants
- Use `<button class="secondary-btn" data-target="screen-35">` for the full-width variant in screen 34

---

## Fix 5 — Screen 49 (Weekly Outfit Planner) — Wire it from more entry points

**Problem:** Screen 49 has only 2 incoming links. The weekly planner is a core feature and should be reachable from home and from the planner calendar.

**What to do:**
- In **Screen 29** (Home Dashboard): find the "This Week" or planner section and add a `Plan My Week` button → `data-target="screen-49"`
- In **Screen 37** (Weekly Style Preview): add a `Full Planner` or `Edit Plan` button → `data-target="screen-49"`
- In **Screen 47** (Outfit Calendar): add a `Weekly View` toggle or button → `data-target="screen-49"`

---

## Fix 6 — Screen 56 (Closet Intelligence Summary) — Wire it from multiple surfaces

**Problem:** Screen 56 has only 1 incoming link. The intelligence summary should be a destination from the home dashboard style score, the closet hub stats, and from analytics.

**What to do:**
- In **Screen 29** (Home Dashboard): make the Style Score number/card tappable → `data-target="screen-56"`
- In **Screen 41** (Closet Hub): the wardrobe stats card (248 Items / 8 Categories / 42 Looks / £12k Value) — make it tappable or add a `Full Report →` link beneath it → `data-target="screen-56"`
- In **Screen 51** (Outfit Usage Analytics): add a `View Full Intelligence Report` bottom link → `data-target="screen-56"`

---

## Fix 7 — Male images in female user flows

**Problem:** `style_smart_casual_man.png`, `style_minimal_man.png`, and `style_classic_man.png` appear in Screens 31, 36, and occasionally Screen 32. The prototype defaults to a female persona (profile_woman.png is used throughout). Mixed gender imagery in the same flow looks like a bug to a client.

**What to do:**
Replace all male outfit image references in these screens with female equivalents:

| Replace | With |
|---------|------|
| `style_smart_casual_man.png` | `style_smart_casual.png` |
| `style_minimal_man.png` | `style_minimal.png` |
| `style_classic_man.png` | `style_classic.png` |
| `style_creative_man.png` | `style_creative.png` |
| `style_elevated_everyday_man.png` | `style_elevated_everyday.png` |

Only change occurrences in screens 31, 32, 33, 34, 36 — screens where the female persona is clearly active. Do not change occurrences in screens that explicitly show "male user" flows if any exist.

**How to find:** Search for `_man.png` in 2.html and check the surrounding `<section id="screen-XX">` context for each one.

---

## Fix 8 — Screen 41 category cards — replace outfit photos with item/environment photos

**Problem:** The 8 category image cards in Screen 41 (Closet Hub) all use full-outfit editorial photos (`style_modern_prof.png`, etc.). A "Clothing" category should show clothing items, "Shoes" should show shoes, etc.

**Current image assignments to replace:**

| Category | Current image | Replace with |
|----------|--------------|-------------|
| Clothing | `style_modern_prof.png` | `images/closet.jpeg` (shows wardrobe environment) |
| Shoes | `style_smart_casual.png` | `images/closet.webp` (closet shelf detail) |
| Bags | `style_classic.png` | `images/closet.jpeg` with `object-position: right` |
| Watches | `style_minimal.png` | `images/closet.webp` with `object-position: top` |
| Jewelry | `style_creative.png` | `images/closet.jpeg` with `object-position: bottom` |
| Accessories | `style_elevated_everyday.png` | `images/closet.webp` with `object-position: left` |
| Seasonal | `style_modern_prof.png` | `images/closet.jpeg` |

**Note:** The closet.jpeg and closet.webp images exist in the `/images/` folder and are currently unused. Use `object-position` variations to make each card look slightly different from the same source photo. This is a temporary fix — proper item photos per category are a Sprint 2 item.

---

## Fix 9 — Screen 43 (Item Details) — Surface cost-per-wear and add forward actions

**Problem:** Screen 43 is a dead-end for item browsing. The brief says every item screen should show cost-per-wear and route to outfit suggestions and resale.

**What to add to Screen 43:**

1. **Cost-per-wear stat** — add below the item price/details section:
   ```
   £4.20 per wear  ·  Worn 18 times
   ```
   Style: `.small-caps` gold label above, then two `.stat-num` / `.stat-label` blocks side by side

2. **Action row** — add 3 icon+label buttons in a horizontal flex row:
   - `Style It` (sparkles icon) → `data-target="screen-31"`
   - `View Similar` (copy icon) → `data-target="screen-53"`
   - `Resell` (tag icon) → no target yet, use `data-target="screen-52"` as placeholder

3. **Muse suggestion chip** — add a small `.card` beneath the action row:
   > *"This blazer pairs with 14 pieces in your wardrobe. Last worn 3 weeks ago."*
   With a `Create Look →` link → `data-target="screen-50"`

---

## Acceptance Criteria for Sprint 1

- [ ] No screen with incoming links has 0 outgoing paths
- [ ] Zero male outfit images appear in female persona flows (screens 31, 32, 33, 34, 36)
- [ ] Screen 41 category cards use closet environment photos, not full outfit shots
- [ ] Screen 43 shows cost-per-wear stat, action row, and a forward navigation option
- [ ] Tapping the Style Score on Screen 29 navigates to Screen 56
- [ ] Screen 35 (Outfit Feedback) is reachable from at least 4 screens
- [ ] Screen 49 (Weekly Planner) is reachable from at least 3 screens
