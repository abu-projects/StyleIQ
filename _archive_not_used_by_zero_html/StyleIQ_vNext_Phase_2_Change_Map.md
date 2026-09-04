# StyleIQ vNext — Phase 2 Change Map

**Purpose:** Convert the consolidated client / team feedback into an implementation-ready change plan for the current master HTML prototype.

**Current implementation baseline:** `index(20260815-194014).html`

**Safety rule:** The existing HTML is the baseline. Work only on the new vNext copy. Do not destroy the current approved prototype while this plan is being implemented.

---

## 1. What Phase 2 is

Phase 2 is **not** the visual redesign itself.

It is the product/UX change map that defines:

- what must change;
- what must stay;
- which screens are affected by each decision;
- which changes are cross-section rather than local;
- what order the work should be implemented in;
- which decisions are still open and must not be silently guessed.

The implementation should happen **work-package by work-package**, with a review after each package.

---

# 2. Current Baseline Audit

The latest HTML currently contains:

- **101 unique app screens**.
- Sections: **X, Y, Z, A, B, C, D, E, F, G, H**.
- **57 `data-master-only` cross-file references** that still need eventual conversion to canonical internal routes.
- Section Y currently mixes onboarding, Style Twin, profile-edit tasks, and Style Intelligence inputs under one numbering family.
- Current user-facing concepts still include:
  - Style Score;
  - Closet Readiness percentages;
  - Style DNA as a separate destination;
  - repeated style identity labels;
  - named outfits such as “Camel Composer”;
  - multiple shopping / missing-piece surfaces.

These are the main areas affected by the new feedback.

---

# 3. vNext Product Rules — Apply Everywhere

These rules are global. Every updated screen must pass them before it is considered complete.

## R1 — Show, don’t tell

Fashion should be understood primarily through:

- imagery;
- outfit composition;
- swatches;
- visual comparisons;
- direct interactions.

Reduce explanatory copy wherever the visual can communicate the same idea.

## R2 — No unnecessary fashion taxonomy burden

Do not force users to understand labels such as “Classic”, “Chic”, “Edgy”, etc. when StyleIQ can learn taste through outfit reactions.

## R3 — One action, one CTA

Do not expose duplicate CTAs that perform the same conceptual action on the same screen.

Example: only one clear **Why This Look?** entry on Today.

## R4 — Avoid unnecessary outfit naming

Do not invent editorial names such as:

- Camel Composer;
- Sunday Soft;
- Structured Monochrome;
- Layered Cashmere;

unless a name has a real organizational purpose, such as a user-saved custom name.

Prefer useful context:

- Office;
- Dinner;
- Travel;
- 18°C;
- Light rain;
- Today;
- Planned Wednesday.

## R5 — Item intelligence belongs with the item

Examples:

- versatility;
- wears;
- cost per wear;
- similar owned pieces;
- possible outfits using this item.

These belong primarily in **Closet Item Details**, not Outfit Details.

## R6 — Outfit intelligence belongs with the outfit

Examples:

- why the combination works;
- weather / occasion suitability;
- included pieces;
- alternatives;
- wear / save / plan actions.

## R7 — Do not score the user’s style

Remove concepts that can feel like StyleIQ is judging how stylish a person is.

**Style Score is marked for removal.**

## R8 — Prefer useful neutral analytics

Prioritize:

- cost per wear;
- most worn;
- underused;
- recently worn;
- wardrobe value where meaningful;
- duplicate pieces;
- possible outfit combinations.

## R9 — Avoid making wardrobe size feel like a goal

Do not imply that the user must own a certain number of items to “complete” a closet.

Closet coverage may remain an **internal confidence/data-quality signal**, but user-facing percentages must be re-evaluated.

## R10 — One item must create value

A user with one Closet item must already be able to:

- see outfit ideas around it;
- ask Muse to style it;
- use it in Style Studio;
- receive inspiration without needing a “complete” Closet.

## R11 — Style Twin is genuinely optional

The product must work with:

- a personal-photo Style Twin;
- a no-personal-photo representation;
- no Style Twin at all.

No major feature may silently assume a personal face image exists.

## R12 — Minimize AI visual drift

If a user chooses to use personal photos:

- preserve identity consistency;
- avoid unnecessary regeneration of the person;
- keep the visualization stable;
- prefer restrained, simple presentation over repeated editorial AI scenes.

## R13 — Wishlist is prominent, but not a sixth tab

Wishlist should remain one canonical entity and be visible contextually in:

- Profile;
- Today when useful;
- Discover / intentional shopping.

The five primary tabs remain:

**Today · Closet · Planner · Discover · Profile**

## R14 — One canonical shopping-intelligence model

Do not build separate “should I buy this?” engines in Today, Muse, Discover, and Complete This Look.

They should converge on one consistent evaluation model.

## R15 — Preserve user creativity

Muse assists; it should not make the user feel that AI owns the styling process.

Style Studio remains user-led with optional Muse support.

---

# 4. Protected / Preserve List

Do not rebuild these areas unless a later direct screen comment requires it.

## Preserve P1 — Quick Closet Add core

Keep the current direction:

`C-2 → inline processing → C-4 / optional C-3 fallback → C-5`

Key behavior to preserve:

- one clear photo can be enough;
- detailed processing is fallback, not mandatory;
- quick confirmation;
- immediate outfit ideas after adding an item.

## Preserve P2 — Zero / one-item Closet states

Keep the logic:

- zero items → editorial / inspiration value;
- one item → style around the owned anchor;
- populated Closet → full Closet-based suggestions.

## Preserve P3 — Canonical Wishlist

Keep a single Wishlist entity and the current owned-item handoff when a Wishlist purchase becomes owned.

## Preserve P4 — Style Studio shared canvas

The main H-4 Canvas / Dress My Twin work is currently protected.

Do not fork multiple editors.

## Preserve P5 — Creator recreation philosophy

Creator inspiration should lead back to:

**recreate the styling logic with my Closet**

rather than “buy the exact creator outfit”.

## Preserve P6 — Five-tab primary navigation

Do not add Studio, Creators, or Wishlist as extra permanent bottom tabs.

---

# 5. Open Product Decisions

These must remain explicit until confirmed. Do not silently choose one during implementation.

## OPEN-01 — Where does required onboarding land?

There are two conflicting directions in the feedback set:

### Direction A — Profile first

Direct client feedback requested Profile as the first main screen after onboarding so the user can:

- build profile;
- add Closet items;
- create Style Twin;
- see Wishlist.

### Direction B — Today first

The later corrected-flow brief argues onboarding should end on Today because Today is the flagship habit-forming surface.

### Implementation rule

Build both F-1 first-run and A-1 zero-state correctly, but do not permanently lock the final onboarding arrow until this decision is confirmed.

---

## OPEN-02 — Exact no-photo Style Twin representation

The requirement is confirmed: users must have a no-personal-photo option.

The exact representation is still open.

Candidates:

- faceless / neutral avatar;
- mannequin;
- silhouette;
- garment-only flat lay;
- stable generic figure with user proportions but no face.

Do not invent a final product decision without approval.

---

## OPEN-03 — User-facing Closet Readiness

Confirmed concern:

- percentage completeness can feel like a shopping goal;
- it may imply the user does not own “enough”.

Possible replacement:

- possible outfits;
- useful category insights;
- direct neutral analytics.

Internal readiness/confidence logic may remain even if the visible score is removed.

---

## OPEN-04 — Possible Outfit metric

Possible directions:

- whole Closet: “42 outfit combinations”;
- per item: “Works in 12 outfits”;
- both.

This is a candidate metric, not yet a confirmed final rule.

---

# 6. Implementation Work Packages

---

# WP-00 — Baseline & Architecture Safety

**Goal:** Prepare the vNext HTML for controlled changes without changing product UI yet.

### Affected

Whole HTML.

### Tasks

- [ ] Confirm the working file is the new vNext copy, not the archived zero copy.
- [ ] Add a small internal version marker for vNext work.
- [ ] Keep all 101 current screens available until a merge/remove decision is implemented.
- [ ] Create a simple shared prototype-state object instead of relying only on hardcoded screen demos.
- [ ] Define state fields for at least:
  - `closetCount`;
  - `closetMode` (`zero`, `one`, `populated`);
  - `styleTwinMode` (`none`, `no-photo`, `photo`);
  - `styleTwinStatus` (`not-started`, `in-progress`, `complete`);
  - `styleLearningStatus`;
  - `wishlistCount`;
  - `onboardingComplete`.
- [ ] Do not renumber screens yet.
- [ ] Record all future screen merges before deleting anything.

### Acceptance criteria

- Current prototype remains recoverable.
- vNext state model exists.
- No visual regressions introduced in this package.

---

# WP-01 — First Experience Architecture

**Priority:** P0

**Goal:** Fix the first-run logic before redesigning the rest of the app.

### Primary screens

- X-1
- X-2
- X-3
- X-4
- Y-1
- Y-2
- F-1 first-run
- A-1 zero-state

### Required changes

#### 1. Observation before interrogation

Current flow requests account credentials before the user experiences much of StyleIQ’s visual intelligence.

Design a short visual taste / value moment before or around account creation.

Do not make it a long mandatory questionnaire.

#### 2. Keep authentication simple

Preserve Apple / Google / email structure unless implementation constraints require otherwise.

#### 3. F-1 first-run must remain a valid setup hub

It must allow direct entry to:

- add first Closet item;
- Style Twin;
- Style learning / inspiration;
- Wishlist.

#### 4. A-1 zero-state must remain valuable

With zero Closet items:

- no fabricated owned outfit;
- show inspiration;
- inspiration may eventually reflect connected references/preferences;
- obvious next actions without overload.

#### 5. Keep landing destination open

Do not close OPEN-01 in this package without confirmation.

### Acceptance criteria

Test a new user through:

`Welcome → first-value experience → account → onboarding → landing`

Both candidate landing screens must make sense independently.

---

# WP-02 — Separate Onboarding, Style Learning, Profile Edits, and Style Twin IA

**Priority:** P0

**Goal:** Stop Section Y from reading like one fake sequential journey.

### Current problem

Y currently contains:

- required onboarding;
- optional Style Twin;
- Brand Fit;
- Shoe Preferences;
- Style Preferences;
- Style Inspiration.

The numbering visually promises a sequence that does not exist.

### Required architecture

Treat these as distinct flows:

1. **Required onboarding**
2. **Style Twin**
3. **Style Learning / Style Intelligence inputs**
4. **Profile / fit edits**

### Implementation rule

Do **not** immediately renumber screen IDs at the beginning of the work.

First:

- fix the flow;
- fix entries / exits;
- remove false step-count language;
- confirm the architecture.

Then do one atomic renumber / alias pass later so routes do not break gradually.

### Specific current screens

- Y-1 / Y-2 → required onboarding responsibility.
- Y-3 / Y-4 / Y-5 / Y-6 / Y-8 / Y-9 / Y-13 / Y-14 → Style Twin responsibility.
- Y-7 → Profile Brand Fit edit.
- Y-10 → Profile Shoe Preferences edit.
- Y-11 / Y-12 → Style Learning responsibility.

### Acceptance criteria

A developer looking only at the UI and route notes must not reasonably conclude that Brand Fit, Shoe Preferences, Style Preferences, or Style Inspiration are mandatory Twin/onboarding steps.

---

# WP-03 — Replace Style Preference Labels With Visual Outfit Learning

**Priority:** P0

**Primary current screen:** Y-11

### Current experience

User selects named style labels such as:

- Minimal;
- Classic;
- Modern Pro;
- Creative;
- Smart Casual;
- Elevated;
- Soft Tailoring;
- Relaxed;
- Tonal.

### New direction

Replace the taxonomy-heavy grid with a **visual outfit reaction flow**.

Preferred interaction direction:

- one large outfit card at a time;
- swipe right / Like;
- swipe left / Not for me;
- accessible tap controls as an alternative to gesture-only interaction;
- optionally Undo the last reaction.

### Important rule

Do not show the underlying fashion-style labels while the user is deciding.

The system can store inferred traits internally.

### Suggested result state

After enough reactions, show a concise visual summary rather than a score.

Example structure:

- preferred silhouettes;
- palette swatches;
- a few liked outfit thumbnails;
- editable / continue refining.

### Copy principle

Keep the instruction extremely short.

Example conceptual direction:

**“Show us what feels like you.”**

### Acceptance criteria

- User can complete the task without understanding fashion taxonomy.
- Both gesture and buttons work.
- No “pick up to 3 style labels” model remains.
- Result can feed the same Style Learning data model used elsewhere.

---

# WP-04 — Style Twin: Photo, No-Photo, and No-Twin States

**Priority:** P0

### Primary screens

- Y-3
- Y-4
- Y-5
- Y-6
- Y-8
- Y-9
- Y-13
- Y-14
- F-1
- A-1
- H-4 integration state

### Required changes

#### 1. Entry screen must offer real choice

Style Twin should not imply that personal face photos are the only path.

The user needs clear options such as:

- use my photos;
- create without personal photos;
- skip Style Twin.

Exact wording can be refined during design.

#### 2. Photo path

Preserve personal identity as much as possible.

Avoid making every outfit visualization a newly generated editorial person.

#### 3. No-photo path

Create a valid Twin representation without personal face imagery.

Exact visual remains OPEN-02.

#### 4. No-Twin path

Every affected outfit surface needs a fallback.

No screen should simply show a random “user model” and pretend it is the user.

#### 5. Background treatment

Prefer simple / restrained presentation.

The outfit and person / figure should remain the focus.

### H-4 protection

Do not rebuild H-4 Canvas in this package.

Only add the minimum state behavior needed so:

- Photo Twin → On My Twin works;
- No-photo Twin → appropriate neutral figure works;
- No Twin → Flat Lay can be default / available.

### Acceptance criteria

Run all three scenarios:

1. photo Twin;
2. no-photo Twin;
3. no Twin.

All three must be able to use the main app without broken or misleading visuals.

---

# WP-05 — Today / Daily Outfit Visual Simplification

**Priority:** P0

### Primary screens

- A-1
- A-2
- A-3
- A-4
- A-5
- A-6

### A-1 changes

- [ ] Reduce repeated explanatory Muse copy.
- [ ] Keep one clear **Why This Look?** action.
- [ ] Avoid duplicate explanation entry points.
- [ ] Make the outfit / inspiration image the visual priority.
- [ ] Keep Wishlist visible but lightweight.
- [ ] Preserve zero / one-item / populated states.
- [ ] Respect Style Twin mode.

### A-2 changes — Outfit Details

- [ ] Remove editorial outfit title if it adds no product value.
- [ ] Keep useful context: occasion, weather, date / use.
- [ ] Convert written Color Profile blocks into clean unlabeled Pantone-style swatches.
- [ ] Remove Closet Versatility from this screen.
- [ ] Keep one concise Why This Works explanation.
- [ ] Keep included wardrobe pieces and outfit actions.

### A-3 changes — Alternatives

- [ ] Make alternatives more visual.
- [ ] Remove unnecessary invented outfit names.
- [ ] Prefer useful difference labels such as:
  - warmer;
  - more relaxed;
  - more polished;
  - rain-friendly.

### A-4 changes — Outfit Feedback

- [ ] Reduce copy.
- [ ] Keep quick reactions visual / scannable.
- [ ] Preserve optional free-text feedback.
- [ ] Avoid star-style judging of the outfit if a simpler reaction is enough.

### A-5 changes — Ask Muse

- [ ] Keep the fast prompt model.
- [ ] Reduce biography / explanatory text.
- [ ] Make the user’s task the focus.

### A-6 changes — Muse Styling Plan

This screen currently mixes styling with a shopping-results surface.

- [ ] Keep Muse styling recommendation.
- [ ] Keep owned / missing-piece context.
- [ ] Remove the full marketplace browsing block from the styling result.
- [ ] Missing piece should route to the canonical Before-You-Buy / Shopping Intelligence flow.
- [ ] Remove match-score theater unless there is a real useful interpretation.

### Acceptance criteria

A user should understand the daily recommendation primarily by looking, not reading.

---

# WP-06 — Closet: Persistent Add + Item Intelligence

**Priority:** P0 / P1

### Primary screens

- C-1
- C-2 to C-5 preserved flow
- C-6
- C-7
- C-13
- C-14
- C-16
- C-18
- C-19
- C-20
- Z-1 review

### C-1 / C-6

- [ ] Add item must always be accessible without scrolling to the bottom.
- [ ] Keep the existing header `+` where useful.
- [ ] Consider a floating `+` only if it improves discoverability without duplicating the header action unnecessarily.
- [ ] Never require scrolling to find the main Add Item action.

### C-7 Item Details

Move / consolidate item-level intelligence here:

- [ ] Works well with;
- [ ] item versatility;
- [ ] possible outfits using this piece, if approved;
- [ ] wears / last worn;
- [ ] cost per wear when data exists;
- [ ] similar owned pieces;
- [ ] resale status;
- [ ] style this item.

This becomes the canonical location for the feedback removed from A-2.

### Closet analytics

Keep useful neutral analytics:

- most worn;
- underused;
- duplicates;
- cost per wear;
- resale / archive opportunities.

### Closet Readiness

Do not keep pushing visible completion percentages without resolving OPEN-03.

Until resolved:

- internal readiness logic may remain;
- avoid making it a motivational purchase goal;
- do not design new screens around “reach 100%”.

### Z-1

The current reusable Closet Readiness pattern must be redesigned or retired if the visible percentage model is removed.

### Acceptance criteria

- Add Item is reachable immediately.
- One owned item creates styling value.
- Closet Item Details contains item-level versatility instead of Outfit Details.
- No screen tells the user their wardrobe is “bad” because it is small.

---

# WP-07 — Profile / My Atelier Simplification

**Priority:** P0

### Primary screens

- F-1
- F-2
- F-3
- F-4
- F-5
- F-6
- F-7
- F-8
- F-9
- E-1 / C analytics links as needed

### F-1

Current problems:

- repeated style identity;
- Style Profile vs Style DNA duplication;
- Style Score;
- Closet Readiness pressure;
- too much information density.

### Required direction

- [ ] One clear personal style summary, not repeated “Elevated Minimalist” labels.
- [ ] Wishlist remains prominent.
- [ ] Style Twin entry remains visible and optional.
- [ ] Closet Add / setup remains visible in first-run state.
- [ ] Use visuals / thumbnails / swatches more than explanation cards.
- [ ] Replace judgmental / goal-like metrics with useful behavior analytics.

### F-2 + F-6 — Style Profile vs Style DNA

Default vNext direction: **merge conceptually** unless a meaningful user-facing difference is proven.

Suggested model:

**My Style Profile** is the canonical destination.

Inside it, show:

- liked outfit references;
- silhouettes;
- palette;
- recurring fit / styling tendencies;
- creators / inspiration sources;
- editable preferences.

“Style DNA” can become internal terminology or a subsection rather than a separate competing destination.

Do not keep two screens that answer the same user question.

### F-5 — Style Score

**Remove from vNext.**

Do not replace it with another “you are 88/100 stylish” number.

### F-4 — Closet Readiness

Rework around neutral wardrobe insights.

Possible content:

- most worn;
- underused;
- category distribution;
- possible outfits, if approved;
- useful next action without implying “buy more”.

### F-7 / F-8 / F-9

Keep only if they provide distinct value.

Apply the global rules:

- more visual;
- less narrative copy;
- no unnecessary outfit names;
- no style ratings.

### Acceptance criteria

A first-time reviewer should be able to explain the difference between every visible Profile destination in one sentence.

If two destinations cannot be distinguished clearly, merge them.

---

# WP-08 — Canonical Before-You-Buy / Shopping Intelligence

**Priority:** P0 / P1

### Primary screens

- G-1
- G-2
- G-3
- G-4
- G-5
- G-6
- G-7
- G-8
- G-9
- G-10
- G-11
- G-12
- A-6 handoff

### Goal

Create one recognizable shopping-intelligence experience rather than three versions of “you are missing a piece / should you buy this”.

### Canonical evaluation should answer

- Do I already own something similar?
- Does this fit my style?
- What could I wear it with?
- How many useful outfits could it unlock?
- Is it a real wardrobe gap?
- Is there duplicate risk?
- Is it already in Wishlist?

### G-2 → G-4

Can remain the core check flow, but simplify visual presentation.

### G-5

Keep as owned-similarity evidence.

### G-6

Keep outfit possibilities as a strong positive value surface.

### G-8 / G-9

Keep canonical Wishlist.

### G-10 Complete This Look

Do not maintain a completely separate shopping engine.

Convert it into an **outfit-context entry** to the same evaluation model.

### A-6

A missing piece in a Muse recommendation should route here rather than embedding marketplace feeds inside Muse Styling Plan.

### Commerce hierarchy

Closet / style logic first.

Shopping results second and optional.

### Acceptance criteria

The same considered item produces the same underlying evaluation whether the user enters from:

- Discover;
- Wishlist;
- Muse missing piece;
- active outfit context.

---

# WP-09 — Saved Looks, Planner, Wardrobe Value Visual Pass

**Priority:** P1

### Sections

- B
- D
- E

### Goal

Apply the new global visual language without unnecessary architecture changes.

### B — Saved Looks

- [ ] Reduce invented editorial names where not user-created.
- [ ] Let image + occasion / date / context identify the look.
- [ ] Preserve save / planner ecosystem.

### D — Planner

- [ ] Keep calendar / trip value.
- [ ] Reduce outfit naming.
- [ ] Make planned outfits more visual.
- [ ] Keep weather / occasion context.
- [ ] Avoid extra Muse explanation when the outfit card already communicates the result.

### E — Wardrobe Value & Activity

Prioritize genuinely useful analytics:

- cost per wear;
- resale activity;
- brand value where supported;
- confirmed vs estimated values clearly separated.

Review whether Style Budget remains sufficiently useful and clear after the new intentional-shopping architecture.

Do not treat budget as money held by StyleIQ.

### Acceptance criteria

No screen in these sections violates the global “show, don’t tell” or “do not score style” rules.

---

# WP-10 — Style Studio & Creator Integration Pass

**Priority:** P1 / Protected

### Section H

This is not a rebuild package.

### H-4 Canvas

Protected.

Only make integration changes required by:

- Twin mode;
- no-photo mode;
- no-Twin Flat Lay behavior;
- route consistency.

### Creator screens

Preserve:

- creator style logic;
- closet roles;
- style recipes;
- recreate with my Closet;
- route back into the shared Canvas.

### Review points

- [ ] remove unnecessary creator / outfit naming if it conflicts with the global rule;
- [ ] reduce copy where imagery / recipe structure can explain it;
- [ ] ensure creator commerce does not become the primary behavior;
- [ ] Creator Style DNA naming should be reviewed after F-2 / F-6 terminology is consolidated.

### Acceptance criteria

H remains a contextual system connected to the five-tab app rather than becoming a parallel product.

---

# WP-11 — Global Route & Legacy Cleanup

**Priority:** Final P0 before declaring vNext complete

### Current baseline issue

The latest HTML still contains **57 `data-master-only` references**.

### Tasks

- [ ] Replace cross-file Session 3 links with canonical internal `#screen-*` routes where the destination exists in the same master.
- [ ] Remove `data-master-only` once the internal route is valid.
- [ ] Audit every CTA label against its destination.
- [ ] Fix known label / route mismatches instead of preserving them.
- [ ] Audit duplicate IDs after any merge / renumber.
- [ ] Recount screens after removals / merges.
- [ ] Update board quick navigation labels if Y architecture changes.
- [ ] Update section descriptions.
- [ ] Update prototype header screen counts.
- [ ] Update any route notes under screens.

### Search terms for final cleanup

Search the HTML for at least:

- `data-master-only`
- `index - Session 3 Draft.html`
- `Style Score`
- `Closet Readiness`
- `Style DNA`
- `Elevated Minimalist`
- `Camel Composer`
- `Sunday Soft`
- `Layered Cashmere`
- `Structured Monochrome`
- `Why This Works`
- old Y step labels

Each occurrence must be intentionally kept, changed, or removed.

---

# 7. Recommended Execution Order

Do not execute by alphabetical section order.

Use this order because it follows product dependencies:

1. **WP-00 — Baseline & state model**
2. **WP-01 — First experience architecture**
3. **WP-02 — Separate the Y responsibilities / IA**
4. **WP-03 — Visual style-learning swipe flow**
5. **WP-04 — Style Twin three-mode behavior**
6. **WP-05 — Daily Outfit Loop visual simplification**
7. **WP-06 — Closet / item intelligence**
8. **WP-07 — Profile simplification / analytics**
9. **WP-08 — Shopping Intelligence consolidation**
10. **WP-09 — Saved Looks / Planner / Value pass**
11. **WP-10 — Protected Studio / Creator integration pass**
12. **WP-11 — Global route and legacy cleanup**

---

# 8. Review Gate After Every Work Package

A package is not finished only because the screens look good.

Run all relevant checks below.

## Gate A — Flow

- Every CTA has a clear destination or explicit local state.
- Back returns to a logical parent/origin.
- No dead end.

## Gate B — State

Where relevant, test:

- zero Closet;
- one Closet item;
- populated Closet;
- photo Twin;
- no-photo Twin;
- no Twin;
- empty Wishlist;
- populated Wishlist.

## Gate C — Duplication

Ask:

- Is this concept already presented elsewhere?
- Are two CTAs doing the same thing?
- Are two screens answering the same user question?

## Gate D — Show, don’t tell

For each explanatory block:

> Can an image, swatch, state, thumbnail, comparison, or interaction communicate this more clearly?

If yes, reduce the text.

## Gate E — Product philosophy

The updated experience must reinforce:

- know what you own;
- know your style;
- wear more of what you have;
- spend less time deciding;
- buy intentionally;
- keep the user in control.

---

# 9. Definition of Done for Phase 2

Phase 2 planning is complete when:

- [x] The current baseline is protected.
- [x] Consolidated feedback is translated into cross-screen rules.
- [x] Work is divided into implementation packages.
- [x] Protected features are identified.
- [x] Open decisions are explicitly separated from confirmed changes.
- [x] Each package has acceptance criteria.
- [ ] Product owner resolves OPEN-01 when needed.
- [ ] Product owner resolves the exact OPEN-02 visual direction before final Twin implementation.
- [ ] Product owner confirms the visible analytics direction for OPEN-03 / OPEN-04 before the Profile / Closet analytics package is finalized.

---

# 10. Immediate Next Step

Start with **WP-00**, then **WP-01**.

Do not start by visually redesigning all of Section Y or all 101 screens at once.

The first implementation checkpoint should produce a coherent first-run journey with the shared state model in place, while leaving the rest of the current master available for comparison.
