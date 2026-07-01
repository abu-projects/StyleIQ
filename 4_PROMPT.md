# StyleIQ — Phase 4 Build Prompt: Friction Reduction, Muse Rework & Profile Suite

> **Purpose of this file.** This is an execution prompt for the next build pass. It has three jobs:
> 1. **Reduce onboarding friction** in the existing screens (`1.html`) toward "one button, job done."
> 2. **Rework Muse** so it solves emotions with one tap instead of feeling like a chatbot / AI startup.
> 3. **Build the missing Profile & Wardrobe Dashboard suite** — all new screens go into a **new file `4.html`**.
>
> Read `DESIGN.md` before writing any markup. Match the existing design system exactly.

---

## 0. Non-negotiable design constraints (from DESIGN.md)

- **Palette:** ink `#1B1716`, ivory `#F8F6F3`, canvas `#EFECE7`, muted `#6F675F`, soft `#9F9387`, gold `#C89B45`, line `#ECE7E1`, line-strong `#D6CCC2`, white `#FFFFFF`.
- **Type:** Playfair Display (`.font-serif`) for headings; Inter for everything else. Labels = 9–12px, uppercase, wide tracking.
- **Shell:** `375×812` phone, `border-[12px] border-[#ECE7E1]`, `rounded-[48px]`, `shadow-xl`.
- **Buttons:** primary = ink bg / white text, `rounded-2xl` (16px), 52–56px tall. Secondary = white bg, 1px line border, 14px radius.
- **Selected state (CRITICAL):** gold 2px border + gold check on `#F8F6F3` bg — **never** black-filled cards, never hide thumbnails.
- **Brand feeling:** quiet luxury, editorial, warm personal stylist. **NOT** AI-first, NOT a SaaS dashboard, NOT a chatbot product. No blue/purple tech glows, no neural graphics. AI is a hidden layer — talk about "Muse", "style", "recommendations", never "AI".
- **Interaction philosophy:** one clear primary action per screen. "Show, don't ask." Every screen must save time or reveal something rewarding.

### Reuse the exact CSS component classes already defined in `2.html` / `3.html`
`.phone`, `.phone-scroll`, `.status-bar`, `.card`, `.muse-card`, `.muse-portrait`, `.primary-btn`, `.secondary-btn`, `.chip` / `.chip.active`, `.icon-btn`, `.section-label`, `.small-caps`, `.image-card`, `.bottom-nav`, `.flow-note`. Copy the `<style>` block + `:root` variables + the `scrollToScreen()` / bottom-nav script from the top of `3.html` so `4.html` behaves identically (screen selector dropdown, tap-to-navigate `data-target`, Lucide icons).

---

## PART 0 — Reduce auth friction (edits to `index.html`, screens 01–05)

**Problem:** SSO buttons (Google / Apple) are buried below 4-field forms on Login (03) and Sign Up (04). Sign Up asks First Name, Last Name, Email, Password before the user has seen any value. The Splash screen (01) adds dead time.

**Changes:**
- Screens 03 & 04: move SSO to the top as hero buttons; demote form to "Use email instead".
- Screen 02 (Welcome): add Google + Apple buttons so returning users never see a form.
- Screen 04 (Sign Up): show **email only** at step 1; defer name to onboarding screen 08B.
- Screen 01 (Splash): auto-dismiss after 1.5 s; no interaction required.

Mark changes `<!-- PHASE 4: auth-friction — ... -->`.

---

## PART A — Reduce onboarding friction (edits to `1.html`)

**Goal:** cut the ~14–16 taps to first value down to as few as **3 taps** on the express path, without removing the rich path for users who want it.

The quiz screens (09–13) **already** ship with pre-selection ("4 of 6 preselected") and a per-screen "Let Muse Decide" button — keep those. The problem is there is no *single* express route and there are too many sequential screens.

### A1. Add an Express path on the very first onboarding screen
On **Screen 06**, add a secondary CTA under "Continue":

> **"Build my style in one tap"**  ✨  *(applies Muse's smart defaults to every step)*

Tapping it should conceptually apply "Let Muse Decide" across **all** of 08B→13 at once and jump straight to **Screen 14 (Building DNA) → 15 (result)**. Model this in the demo by wiring the button's `data-target` to `screen-14`. Copy underneath: *"You can refine anything later."*

### A2. Collapse the 5-screen quiz (09–13) into ONE optional "Refine" screen
Create a single screen "**Screen 09 — Refine Your Style (optional)**" that stacks the four preference groups as **collapsible accordion sections**, each already pre-answered by Muse:
- Style (chips) · Style muses (chips) · Color palette (palette bars) · Lifestyle (chips)

Default state: all collapsed, all pre-filled, big "Looks good — Continue" primary button + "Let Muse Decide everything" secondary. Power users expand a section to tweak. This turns 5 required screens into **1 tap**. (Keep the original 09–13 screens in the file as a reference/appendix, or replace them — note which you did in a comment.)

### A3. Merge the 3 intro screens (06/07/08) into a swipeable single value screen
Keep one hero screen with the 3 messages as swipeable pager dots (dots already exist), and a persistent **"Skip"** in the top-right that routes to the express path. Don't force 3 separate Continue taps.

### A4. Photo-first capture (Screen 16)
"Upload Photos / Record Video" is already tagged **"Fastest."** Make it the single visual hero action. Add a line: *"Muse learns your style from your photos — no quiz needed."* For photo users, the quiz (Part A2) becomes fully skippable.

### A5. Preserve the "one button, job done" daily loop
On the Home Dashboard (`2.html`, screen 29) and Today's Look (screen 30), ensure the primary morning action is a single **"Wear this today"** tap that logs the outfit (routes to the "Look Worn" confirmation, screen 40). This is the daily embodiment of the client's ask — verify it's one tap, not a multi-step flow.

**Deliverable for Part A:** edits applied in `1.html` (+ the one-tap wire-ups). Leave `HTML` comments marking each change with `<!-- PHASE 4: friction — ... -->`.

---

## PART B — Rework Muse to solve emotions in one tap (edits to `2.html` screen 61 + `3.html` screens 78/79)

**Problem:** Screen 78 leads with a **text input** and Screen 79 is a **full chatbot** — this reads as "AI startup / tech platform" and requires typing (friction). The client wants Muse to solve five **emotions** with one tap.

### B1. Reframe the Muse entry (Screen 78 "Ask Muse") into an emotion-led launcher
Replace the headline area's emphasis on the chat input with **five large tappable intent cards**, written in the user's own emotional voice. Each card is **one tap → an instant result** (an outfit or a plan) — no typing required. Suggested cards + targets:

| Card copy (emotional, first-person) | Sub-label | One-tap target |
|---|---|---|
| "Help me feel confident today" | Today's most flattering look | `screen-30` (Today's Look) |
| "I don't know what to wear" | An outfit for right now | `screen-30` / occasion picker `screen-33` |
| "Make me look put together" | A polished, occasion-ready look | `screen-33` |
| "Save me time this week" | Auto-plan all 7 days | `screen-80` (Action Plan) / `screen-49` |
| "Help me not overbuy" | Style what I already own + duplicate check | `screen-53` / `screen-52` |

Design: use `.card` / `.muse-card` with a gold icon, serif intent line, muted sub-label, chevron. Warm, editorial — like a stylist offering to help, not a menu of AI functions.

### B2. Demote chat to a secondary affordance
Keep the "Ask Muse anything…" input, but move it **below** the intent cards as a quiet secondary option ("Or ask Muse something else"). The conversation screen (79) stays available but is no longer the headline experience. Keep Muse's proactive daily check-ins (they're on-brand and good).

### B3. Keep Muse's voice warm & human
Muse speaks like a personal stylist ("Good morning. I prepared three tailored options for your lunch."), never like a bot. No "AI", no "prompt", no "model". Retain the persona card but reword "Editorial Stylist Persona" → something warmer if it reads techy.

**Deliverable for Part B:** edits to screens 61/78/79 with `<!-- PHASE 4: muse — ... -->` comment markers. If cleaner, build the new emotion-led Muse hub as a fresh screen in `4.html` and note the replacement.

---

## PART C — Build the Profile & Wardrobe Dashboard suite (NEW FILE `4.html`)

Create `4.html` as a standalone screen-gallery file, structured **exactly** like `3.html` (same `<head>`, `<style>`, `:root`, screen-selector dropdown, bottom-nav script, Lucide init). Title it `StyleIQ — Phase 4 Profile & Wardrobe Dashboard`.

Add a **"Profile" tab** to the bottom nav (`navigationItems`): `{ id: "profile", label: "Profile", icon: "user-round", target: "screen-82" }`.

Build these screens:

### Screen 82 — Profile / Wardrobe Dashboard  *(the hero screen)*
The "wardrobe dashboard" the client asked for. Sections top-to-bottom:
1. **Header:** avatar (`images/profile_woman.png`), name ("Amelia"), member-since, an "Edit" icon-btn → `screen-83`.
2. **Wardrobe Value hero card:** large serif number, e.g. **"£4,820 wardrobe value"** with sub-stat "142 items · avg £34/wear". This is the emotional centerpiece.
3. **Savings card:** **"£847 saved this year"** (reuse the figure from `2.html` screen 29) + "£245 resale earnings" — tappable → savings breakdown (`screen-58` in `2.html`).
4. **Stat grid (2×2 or 4 tiles):** Style Score `87` · Items worn this month · Cost-per-wear trend · Closet utilization %.
5. **"Your activity" preview:** last 3–4 actions (added / worn / sold / donated) with a "View all" → `screen-84`.
6. **Manage closet row:** "Edit closet", "Sold & donated" (→ `screen-85`), "Style DNA" (→ `3.html` screen-62), "Settings" (→ `screen-86`).
Use `.card`, gold accents, generous spacing. Warm, not a data console.

### Screen 83 — Edit Profile
Form (reuse the manual-entry form styling from `1.html` screen 25): name, email, style profile (Woman/Man cards), preferred palettes (chips), sizes, notification prefs toggle. Primary "Save changes". Include a "Refine Style DNA" link → `3.html` screen-62.

### Screen 84 — Wardrobe Activity Log  *(every action the user has taken)*
A vertical **timeline** of all wardrobe actions, each as a `.card` row with an icon, date, and description. Action types + icons:
- `plus-circle` **Added** — "Added Linen Blazer to closet"
- `check-circle` **Worn** — "Wore Soft Tailoring look"
- `heart` **Saved** — "Saved The Silk Drape Look"
- `tag` **Sold** — "Sold Wool Coat · +£120"
- `gift` **Donated** — "Donated 3 items to charity"
- `shield-check` **Avoided** — "Avoided a £180 duplicate purchase"
- `sparkles` **Restyled** — "Muse restyled your camel blazer"
Group by month with `.section-label` headers. Filter chips at top (All · Worn · Sold · Donated · Saved · Savings). This is the "all the actions they've made" surface.

### Screen 85 — Sold & Donated Items
Two segments (chips or tabs): **Sold** and **Donated**.
- **Sold:** list of items with thumbnail, name, sale price, date, platform (Depop/Poshmark) — header shows **total resale earnings £245** flowing into Style Budget. Reuse resale styling from `3.html` screens 70/71/83.
- **Donated:** items donated, date, charity, an emotional "You gave 8 pieces a second life" line.
Primary CTA: "Sell more unworn items" → `3.html` screen-70.

### Screen 86 — Settings
Grouped list rows (`.card` with chevrons): Account · Notifications (morning reminder toggle) · Connected accounts (retailers, email) · **Subscription** (Premium status, "Manage plan") · **Privacy & Data** (data controls, export, delete) · Help · Sign out. Keep it calm and minimal; this consolidates the planned screens 85/86/87 from the inventory.

### (Optional) Screen 87 — Style Wrapped / Style Story entry
If time allows, a small card linking to the emotional layer (`3.html` screens 72/74) from the profile.

**Cross-file linking note:** `data-target`s that point to screens in `2.html`/`3.html` won't resolve inside `4.html` alone — that's fine for the mockup gallery; add a code comment `<!-- cross-file: screen-XX lives in N.html -->` so the intent is clear. Keep all Profile-suite screens self-navigable within `4.html`.

---

## Deliverables checklist
- [ ] `1.html` — express onboarding path, quiz collapsed to 1 refine screen, intro merged, photo-first hero, one-tap "Wear this today" verified. Marked with `<!-- PHASE 4: friction -->`.
- [ ] `2.html`/`3.html` — Muse reframed as emotion-led one-tap launcher; chat demoted. Marked with `<!-- PHASE 4: muse -->`.
- [ ] `4.html` — new file: screens 82 (Profile/Wardrobe Dashboard), 83 (Edit Profile), 84 (Activity Log), 85 (Sold & Donated), 86 (Settings), optional 87. Same design system, screen selector, bottom nav with Profile tab.
- [ ] All new imagery uses existing `images/` assets; no broken placeholders.
- [ ] No black selected states; gold border + gold check everywhere.
- [ ] Nothing reads as "AI"/"chatbot"/"dashboard tech" — voice stays warm-stylist.

## Success criteria (from client feedback)
- Fastest onboarding route = **≤ 3 taps** to a Style DNA result.
- Muse answers each of the 5 emotions in **one tap**, no typing required.
- Profile page makes wardrobe **value + savings** the emotional hero and shows **every action** (added/worn/sold/donated/avoided) in one place, with the ability to edit the closet.
