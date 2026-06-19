# Sprint 2 — New Screens
## "Fill the product gaps that matter most to conversion"

**File:** `2.html`
**Goal:** Build the 5 screens that are most central to the product's value proposition but entirely absent from the prototype. These are the screens a client would immediately ask "where is this?" during a demo.

**Design system reference:** See DESIGN.md for all colors, typography, components, and photography rules.
**Prototype conventions:** All screens use `<section id="screen-XX">` wrapper, `.phone.phone-scroll.overflow-y-auto` with `data-nav="XX"` attribute, status bar at top, bottom-nav at bottom.

---

## Screen 57 — Style Score

**Bottom nav tab:** `home` (accessible from home dashboard score card)
**Entry points:** Screen 29 (Style Score card tap), Screen 56 (Closet Intelligence Summary link)
**Exit paths:** Screen 29 (back), Screen 51 (Outfit Usage Analytics), Screen 53 (Duplicate Detection)

### Layout

**Header:**
- Back arrow (icon-btn) left | "Style Score" section-label
- Large serif heading: `Your Style Score`
- Subtitle: `Updated weekly · Based on your wardrobe activity`

**Score Hero Card** (`.card`, full-width, centered):
- Giant number: `78` in `font-serif text-[72px] text-[#1B1716]`
- Label below: `out of 100` in `.small-caps` gold
- Thin progress bar (pill-shaped, gold fill) showing 78% width
- One-line summary beneath: *"Strong wardrobe utilisation. Room to grow outfit variety."*

**Four Score Components** (2×2 grid of `.card` cells, each with `.stat-num` / `.stat-label`):
| Metric | Value | Label |
|--------|-------|-------|
| Utilisation | 82% | Items worn this month |
| Efficiency | 74% | Cost per wear trend |
| Diversity | 71% | Outfit variety score |
| Coherence | 85% | How well items mix |

**Progress Section:**
- `.section-label`: `Weekly Progress`
- 4-row list: Mon–Sun with gold dot = dressed intentionally, grey dot = no log
- Streak callout card: `🔥 12-day streak · Keep it going` — use `.muse-card` styling, replace emoji with `flame` Lucide icon in gold

**Improvement Nudges** (`.section-label`: `Boost Your Score`):
- 3 row items, each a `.card` with icon + text + chevron-right:
  1. `Log today's outfit` → `data-target="screen-30"` — `+3 pts`
  2. `Wear a sleeping item` → `data-target="screen-51"` — `+5 pts`
  3. `Resolve 2 duplicates` → `data-target="screen-53"` — `+4 pts`

**Bottom:** `View Full Wardrobe Report` secondary-btn → `data-target="screen-56"`

---

## Screen 58 — Savings Dashboard

**Bottom nav tab:** `home` (accessible from home dashboard savings counter)
**Entry points:** Screen 29 (savings counter tap), Screen 57 (Style Score efficiency nudge)
**Exit paths:** Screen 29 (back), Screen 53 (Duplicate Detection), Screen 52 (Closet Gaps), Screen 59 (Style Budget)

### Layout

**Header:**
- Back arrow left | section-label `Savings`
- Serif heading: `Your Style Savings`
- Subtitle: `Money you've kept by dressing smarter`

**Total Savings Hero Card** (`.card`, ivory background, centered):
- Large gold number: `£847` in `font-serif text-[56px] text-[#C89B45]`
- Label: `saved this year` in `.small-caps text-[#6F675F]`
- Three sub-stats in a row (`.stat-block` × 3, divided by `divide-x divide-[#ECE7E1]`):
  - `£312` / `Duplicates avoided`
  - `£290` / `Price drops captured`
  - `£245` / `Resale earnings`

**Monthly Savings Chart** (`.section-label`: `Monthly Breakdown`):
- Simple horizontal bar chart — 6 months of bars using divs with inline widths
- Bar color: `bg-[#C89B45]` with opacity variations
- Max bar = tallest month; label month name + amount to the right
- Example data: Jan £62 / Feb £89 / Mar £71 / Apr £104 / May £138 / Jun £91

**Savings Opportunities** (`.section-label`: `Opportunities This Month`):
- 3 cards, each `.card p-4` with icon + description + potential saving chip:
  1. `Duplicate blazers detected` — `Could save £180` — button `Review` → `data-target="screen-53"`
  2. `3 wish list items on sale` — `Save up to £95` — button `View` → `data-target="screen-60"` (wishlist — placeholder)
  3. `12 sleeping items to resell` — `Earn up to £240` — button `Review` → `data-target="screen-51"`

**CTA:**
- Primary btn: `Open Style Budget™` → `data-target="screen-59"`
- Secondary link: `View All Savings History` (no target, greyed out, labelled `Coming soon`)

---

## Screen 59 — Style Budget™

**Bottom nav tab:** `home`
**Entry points:** Screen 58 (Savings Dashboard), Screen 29 (home budget chip if present)
**Exit paths:** Screen 58 (back), Screen 52 (Closet Gaps / shopping), Screen 60 (Wishlist)

### Layout

**Header:**
- Back arrow | section-label `Style Budget™`
- Serif heading: `Your Fashion Wallet`
- Subtitle: `Funded by smart wardrobe decisions`

**Balance Card** (`.card`, gold-tinted — use `bg-[#1B1716]` dark card for contrast, white text):
- Label (small-caps white/60): `Available Balance`
- Large serif number: `£847` in white
- Two rows below with icons:
  - `+ £245 from resale earnings`
  - `+ £312 from duplicate savings`
  - `+ £290 from price drops`
- Each row: green-ish text using `text-[#C89B45]` with `+` prefix

**Spend History** (`.section-label`: `Recent Activity`, on ivory background):
- 4 list rows, each: icon + description + date + amount (positive green or negative charcoal)
  - `Resale: Silk blouse sold` · Jun 12 · `+£45`
  - `Price drop: Trench coat` · Jun 8 · `+£38`
  - `Purchase: White sneakers` · Jun 5 · `−£89`
  - `Duplicate avoided: Black blazer` · Jun 1 · `+£180`

**How to Grow Your Budget** (`.section-label`):
- 3 chip-style action rows:
  - `Resell sleeping items` → `data-target="screen-51"`
  - `Detect duplicates` → `data-target="screen-53"`
  - `Track your wish list` → `data-target="screen-60"`

**CTA:**
- Primary btn: `Shop With Your Budget` → `data-target="screen-52"` (closet gaps → shopping)

---

## Screen 60 — Wishlist & Price Tracking

**Bottom nav tab:** `home` or reachable from closet hub
**Entry points:** Screen 59 (Style Budget), Screen 52 (Closet Gaps), Screen 58 (Savings Dashboard)
**Exit paths:** Screen 59 (back), Screen 52 (Closet Gaps), item detail external

### Layout

**Header:**
- Back arrow | section-label `Wishlist`
- Serif heading: `Things Worth Wanting`
- Subtitle: `Tracked against your wardrobe and budget`

**Filter chips row:** `All · On Sale · Gap Items · Budget Ready` — use `.chip` and `.chip.active`

**Wishlist items** (vertical stack of `.card` items):
Each card:
- Left: square item thumbnail 56×56px (use `images/style_minimal.png` cropped square, `rounded-xl object-cover`)
- Right: item name (bold `text-sm`), brand + colour (`text-xs text-[#6F675F]`), retail price struck through + sale price in gold if on sale
- Bottom row: `gap-badge` chip showing wardrobe gap reason + `wear-badge` showing projected cost-per-wear

4 example items:
1. `Camel Trench Coat` · Massimo Dutti · ~~£189~~ `£142 now` · `Fills a gap` + `Est. £4/wear`
2. `White Tailored Shirt` · & Other Stories · £79 · `Wardrobe gap` + `Est. £2/wear`
3. `Black Ankle Boots` · COS · £165 · `Already own similar` (warning) + `Est. £6/wear`
4. `Cashmere Rollneck` · Uniqlo · ~~£99~~ `£69 now` · `Budget ready ✓` + `Est. £3/wear`

**Budget Banner:**
- `.muse-card` styled banner: `You have £847 in your Style Budget. Item 4 is budget-ready.`
- With `Buy Now` chip button on the right (no link, placeholder)

**CTA:**
- `Add to Wishlist` secondary-btn with `+` icon (no action, placeholder)

---

## Screen 61 — Muse Tab Hub

**Bottom nav tab:** `muse`
**Entry points:** Bottom nav `muse` tap from any screen
**Exit paths:** Screen 38 (Muse Insight Detail), Screen 30 (Today's Outfit), Screen 29 (home)

**Purpose:** The Muse tab currently has no landing screen — tapping `muse` in the bottom nav goes nowhere or loops. This screen is the hub for the personal stylist / AI coaching layer. It should feel like a private session with your stylist, not a dashboard.

### Layout

**Header (no back arrow — this is a root tab):**
- section-label: `Your Muse`
- Serif heading: `Style Intelligence`
- Subtitle: `Your personal wardrobe advisor`

**Muse Portrait Card** (`.muse-card` full-width):
- Muse portrait left (`images/profile_woman.png`, 48×48 circular)
- Quote right: *"You've worn 23% more of your wardrobe this month. Your style is getting more intentional."*
- Gold divider line below
- `See Today's Outfit →` link → `data-target="screen-30"`

**Today's Insight** (`.section-label`: `Today`):
- One tall `.card` with light-gold left border (`border-l-2 border-[#C89B45]`):
  - Heading: `Sleeping Item Alert`
  - Body: *"Your camel blazer hasn't been worn in 47 days. It pairs perfectly with your navy trousers for tomorrow's meeting."*
  - `Create Look` chip → `data-target="screen-50"`

**Weekly Themes** (`.section-label`: `This Week's Focus`):
- 2-column grid of small `.card` tiles, each with a Lucide icon + label:
  - `Wardrobe Gaps` (layout-grid icon) → `data-target="screen-52"`
  - `Cost Per Wear` (trending-down icon) → `data-target="screen-51"`
  - `Duplicate Check` (copy icon) → `data-target="screen-53"`
  - `Style Score` (award icon) → `data-target="screen-57"`

**Style DNA Snapshot** (`.section-label`: `Your Style DNA`):
- Horizontal pill chips showing detected style archetypes: `Classic · Minimal · Smart Casual`
- Each chip: `.chip.active` gold-border style
- Below: `Refine your DNA →` text link → `data-target="screen-29"` (placeholder)

**Past Insights** (`.section-label`: `Recent Insights`):
- 3 condensed row cards (no image), each with a date + one-line insight + chevron:
  - `Jun 16 · You wore 6 outfits this week. Personal best.`
  - `Jun 10 · Blazers are your most-worn category (34%).`
  - `Jun 3 · You avoided a £180 duplicate purchase.`

**Bottom nav:** `data-nav="muse"` active state

---

## Acceptance Criteria for Sprint 2

- [ ] Screen 57 (Style Score) exists, is reachable from Screen 29, and shows score + 4 component metrics + improvement nudges
- [ ] Screen 58 (Savings Dashboard) exists, is reachable from Screen 29, shows total savings + monthly chart + 3 opportunities
- [ ] Screen 59 (Style Budget™) exists, shows dark balance card + spend history + ways to grow
- [ ] Screen 60 (Wishlist) exists with 4 items, price tracking chips, budget-ready banner
- [ ] Screen 61 (Muse Hub) exists and is wired as the `muse` bottom-nav tab destination
- [ ] All 5 screens have a valid back navigation path to their entry point
- [ ] No screen in this sprint uses male outfit images
- [ ] All screens follow the ivory/charcoal/gold color system — no new colors introduced
