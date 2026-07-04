# IMPLEMENTATION PROMPT — StyleIQ Phase 1 Onboarding Reorganization (`1.html`)

## Context & Goal
`1.html` contains the Phase 1 onboarding screen gallery. It currently holds **two competing onboarding systems**: a new AI-first photo flow AND a legacy multi-screen quiz. Your job is to make the **AI-first photo flow the single canonical path**, cleanly separate **Build My Style** (style discovery) from **Build My Closet** (inventory import), shorten the manual path, add a missing "Rebuild with Muse" action, and keep the **Woman (`-w`) and Man (`-m`) flows in exact parity**.

**Follow `DESIGN.md` exactly.** Palette: ink `#1B1716`, ivory `#F8F6F3`, canvas `#EFECE7`, gold `#C89B45`, line `#ECE7E1`, muted `#6F675F`/`#9F9387`. Playfair Display headings, Inter body. 375×812 shell. Selected state = **gold 2px border + gold check, never black cards**. Voice = warm personal stylist, never "AI/chatbot/quiz/dashboard". Every change must carry an HTML comment `<!-- PHASE 1 REORG: ... -->`.

**Do not break** the existing `scrollToScreen()`, `toggleAccordion()`, and Lucide init scripts.

---

## Current inventory (verified — do not assume, this is the real state)

**Woman flow (canonical AI-first spine to keep):**
`screen-08b` (Personalize) → `screen-bmc-w` (Build My Style, photo-only) → `screen-upload-w` (photo preview) → `screen-14-w` (Muse analysing loader) → `screen-14b-w` (Meet Your Style) → `screen-14c-results-w` (What Muse Learned) → `screen-14d-w` (First 3 Looks) → `screen-14e-w` (Decision) → `screen-14c-w` (Fine-Tune sliders).

**Man flow (mirror):** `screen-08b-man`, `screen-bmc-m`, `screen-upload-m`, `screen-14-m`, `screen-14b-m`, `screen-14c-results-m`, `screen-14d-m`, `screen-14e-m`, `screen-14c-m`.

**Legacy quiz to archive (Woman):** `screen-09-w` (Refine accordion), `screen-manual-setup-w` (Style grid) + the un-ID'd sequential quiz screens after it (Celebrity/Outfit/Color/Lifestyle at ~lines 2338/2470/2603/2770), plus the un-ID'd legacy `Screen 14 Building` and `Screen 15 Your Style DNA` (~lines 2034/2077 and 1055). **Man equivalents:** `screen-09-m`, `screen-manual-setup-m` + its trailing quiz screens, and legacy 14/15 man variants.

**Build My Closet (keep, but clean up):** `screen-16`/`screen-16-man` (Choose How To Start), `screen-17..25` / `-man` (capture methods), `screen-26/27/28` / `-man` (building profile / first looks / feedback).

---

## 1. FINAL RECOMMENDED SCREEN ORDER (canonical Woman path; Man mirrors identically)

```
PART 1 — BUILD MY STYLE
  1. 08b  Personalize (who is this for + Woman/Man)
  2. bmc-w  Build My Style — "Let Muse Understand Your Style" (photo upload only)
  3. upload-w  Photo preview (2–4 uploaded) + "Analyse My Style"
  4. 14-w  Muse Analysing (animated checklist)
  5. 14b-w  Style Result (MERGED profile — see §3)
  6. 14d-w  Your First 3 Looks
  7. 14e-w  Decision screen (4 CTAs — see §7)
        ├─ Customize → 14c-w  Fine-Tune sliders
        └─ Rebuild   → back to upload-w

PART 2 — BUILD MY CLOSET (only after Continue with Muse)
  8. Transition intro: "Muse understands your style. Now let's introduce your wardrobe."
  9. 16   Build My Closet — inventory tools only (NO photo upload — see §4)
 10. 17–25  Capture methods (video / purchase import / receipts / barcode / manual item)
 11. 26   Building Your Profile → 27 First Looks → 28 Feedback → into app

OPTIONAL MANUAL PATH (reached only from 14e "Start Manual Setup")
 - manual-setup-w  → reduced to 1–2 visual screens (see §8), then jumps to 14b-w (Style Result)
```

---

## 2. WHICH SCREENS REMAIN (keep as-is or lightly polished)
- `08b` / `08b-man` — Personalize. Keep. This is the only pre-photo input; keep it 2 questions max.
- `bmc-w` / `bmc-m` — Build My Style. Keep; apply §6 copy/example changes.
- `upload-w` / `upload-m` — Photo preview. Keep.
- `14-w` / `14-m` — Muse Analysing loader. Keep (already has animated checklist).
- `14d-w` / `14d-m` — First 3 Looks. Keep.
- `14e-w` / `14e-m` — Decision. Keep but **add Rebuild CTA** (§7).
- `14c-w` / `14c-m` — Fine-Tune sliders. Keep; apply §8 slider/CTA updates.
- `16`/`16-man` and `17–28` (+`-man`) — Build My Closet. Keep; apply §4 cleanup.

## 3. WHICH SCREENS SHOULD BE MERGED
- **Merge `14b-w` (Meet Your Style) + `14c-results-w` (What Muse Learned) → one Style Result screen.** They are two consecutive, text-dense review screens. Combine into a single visual result: keep the 2×2/3×2 stat cards (Style Identity, Colour Palette, Fit, Lifestyle, Shopping Style, Wardrobe Health) from `14b`, fold in the palette swatch bar + short "What Muse Learned" recommendation bullets from `14c-results`. Result = **one scrollable visual card stack**, ending in a single CTA "Show My First Looks" → `14d-w`.
- Do the identical merge for **`14b-m` + `14c-results-m`**.
- After merging, `14c-results-w`/`14c-results-m` are removed and their inbound links repointed to the merged `14b`.

## 4. WHICH LEGACY SCREENS TO ARCHIVE / REMOVE FROM PRIMARY FLOW
Remove these from the *default* navigation (do not delete blindly — wrap each in a clearly commented archive block `<!-- PHASE 1 REORG: ARCHIVED legacy quiz — not in primary flow -->` and drop it to the bottom of the file, OR delete if the team confirms):
- Legacy **Refine accordion** `screen-09-w` / `screen-09-m` — superseded by photo flow + Fine-Tune.
- Legacy sequential quiz: the un-ID'd **Style grid, Celebrity (10), Outfit (11), Colour (12), Lifestyle (13)** screens in both flows.
- Legacy **`Screen 14 Building Your Style DNA`** and **`Screen 15 Your Style DNA`** (the old loader + old report) — replaced by `14-w` loader and merged `14b` result.
- **Critical:** no button in the canonical flow may route to any archived screen. In particular, the legacy Screen 15 CTA "Build My Closet" must not be a live path.

**`screen-manual-setup-w`/`-m` are NOT archived** — they are repurposed as the short optional manual path (§8).

## 5. WHICH SCREENS NEED RENAMING (label + heading copy only)
- `bmc-w`/`bmc-m` gallery label → **"Build My Style"**; on-screen H1 → **"Let Muse Understand Your Style"** (replace current "Let's Build Your Style").
- Merged `14b-w`/`14b-m` label → **"Your Style Result"**.
- `14c-w`/`14c-m` label stays **"Fine-Tune — Customize My Style"**.
- `screen-16`/`-man` H1 → **"Now Let's Build Your Closet"** with subcopy **"Muse understands your style. Now let's introduce your wardrobe."** (it currently reads "Let's Build Your Closet" but is reached mid-style-flow — reframe it as the Part 2 opener).
- `manual-setup-w`/`-m` label → **"Manual Setup — Choose Your Direction"** (drop "Screen 09 fallback" language and the "30 seconds left" urgency line).

## 6. EXACT NAVIGATION RELATIONSHIPS (set these `onclick="scrollToScreen('…')"` targets)

**Woman flow:**
| From | Action | Target |
|---|---|---|
| `08b` | Continue | `screen-bmc-w` |
| `bmc-w` | Add Photos / Analyse My Style | `screen-upload-w` |
| `upload-w` | Analyse My Style | `screen-14-w` |
| `14-w` | View My Style | `screen-14b-w` (merged result) |
| `14b-w` | Show My First Looks | `screen-14d-w` |
| `14d-w` | These look great | `screen-14e-w` |
| `14e-w` | **Continue with Muse** (primary) | `screen-16` (Build My Closet Part 2) |
| `14e-w` | **Customize My Style** | `screen-14c-w` |
| `14e-w` | **Rebuild with Muse** (NEW) | `screen-upload-w` |
| `14e-w` | **Start Manual Setup** (quiet link) | `screen-manual-setup-w` |
| `14c-w` | Save My Style / Update | `screen-14e-w` |
| `14c-w` | back arrow | `screen-14e-w` |
| `manual-setup-w` | Continue (after ≤2 screens) | `screen-14b-w` (merged result) |
| `16` | Continue | `screen-17` (or chosen method) → … → `26`→`27`→`28` |

**Man flow: identical mapping with every ID suffixed `-m` / `-man`** (e.g. `14e-m` Continue → `screen-16-man`, Rebuild → `screen-upload-m`, Manual → `screen-manual-setup-m`).

## 7. FINAL CTA HIERARCHY on Decision screen (`14e-w` / `14e-m`)
Render in this exact visual order and weight:
1. **Continue with Muse** — dark `#1B1716` filled card, white text, gold sparkle icon. Strongest. → Build My Closet (`screen-16`/`-man`). Sub-label: *"This looks right — start using Muse's recommendations."*
2. **Customize My Style** — white card, 1px border, sliders icon. → `14c-w`/`14c-m`. Sub-label: *"Fine-tune with sliders — quick and visual."*
3. **Rebuild with Muse** *(NEW — add this)* — white card, 1px border, `refresh-cw`/`rotate-ccw` icon. → `upload-w`/`upload-m`. Sub-label: *"Use different photos and let Muse try again."*
4. **Start Manual Setup** — small centered grey **text link only**, no card, no border. → `manual-setup-w`/`-m`. Sub-label: *"Answer a few questions yourself instead."*

Nothing below Continue may match its visual weight.

## 8. HOW TO REDUCE THE MANUAL JOURNEY TO 1–2 SCREENS
Repurpose `manual-setup-w`/`-m` so it no longer chains into Celebrity/Outfit/Colour/Lifestyle:
- **Manual Screen 1 — "Choose Your Direction":** keep the existing visual style-card grid (Classic, Minimal, Smart Casual, Modern Professional, Elevated Everyday, Creative — add Streetwear/Feminine/Tailored/Relaxed if desired). Multi-select, gold-border selected state. Primary CTA "Continue".
- **Manual Screen 2 — "Quick Preferences" (optional, single screen):** three compact visual groups on ONE screen — colour direction swatches, lifestyle/occasion chips, fit preference. All pre-selected/optional.
- Manual Screen 2 Primary CTA → **`screen-14b-w`** (the same merged Style Result). Manual must **not** revisit the old 14/15 legacy report.
- Remove the "Almost ready • 30 seconds left" urgency line and any `Continue → screen-10/11/12/13` links. Delete/archive those trailing quiz screens per §4.
- Keep "Let Muse Decide everything" as a secondary escape that jumps straight to `screen-14-w` (analysing) or `14b-w` (result).

## 9. HOW TO KEEP WOMAN & MAN FLOWS IN PARITY
- Every structural change made to a `-w`/(no-suffix) screen must be applied to its `-m`/`-man` twin: same layout, same CTA count, same copy, same targets (suffix swapped).
- The Man decision screen `14e-m` must get the **same new Rebuild CTA**.
- The Man merge (`14b-m` + `14c-results-m`) must mirror the Woman merge.
- Man manual path (`manual-setup-m`) reduced to the same 1–2 screens, routing to `14b-m`.
- After editing, both flows must have an identical screen count and identical navigation graph shape.

## 10. POST-EDIT VERIFICATION CHECKLIST (agent runs this after editing)

**Structure & separation**
- [ ] Build My Style screen (`bmc-w`/`-m`) contains **only** photo upload — no video, receipts, barcode, purchase import, or manual item entry.
- [ ] Build My Closet (`screen-16`/`-man`) contains inventory tools and **does NOT** show "Upload Photos" as an option.
- [ ] Build My Closet is only reachable **after** "Continue with Muse" on the Decision screen — never before the Style Result.
- [ ] Transition copy on `screen-16` reads "Muse understands your style. Now let's introduce your wardrobe."

**AI-first path is canonical**
- [ ] From Personalize, the user reaches photo upload in ≤1 intermediate screen.
- [ ] No button in the default flow routes into any archived legacy quiz screen.
- [ ] Legacy `09` accordion, sequential Style/Celebrity/Outfit/Colour/Lifestyle quiz, and legacy 14/15 report are archived/removed from the primary flow (both `-w` and `-m`).

**Result & decision**
- [ ] `14b` + `14c-results` are merged into one visual Style Result screen (both flows); `14c-results-*` no longer in the live chain.
- [ ] Style Result shows Style Identity, Colour Palette, Fit, Lifestyle, Shopping Style, Wardrobe Health as visual cards/swatches — not a long text report.
- [ ] First 3 Looks (`14d`) each show a brief "why Muse chose it" line.
- [ ] Decision screen shows exactly 4 actions in order: Continue with Muse (dark primary) > Customize (card) > Rebuild (card) > Start Manual Setup (text link).
- [ ] **Rebuild with Muse exists** and routes to `upload-w`/`upload-m` (not manual setup).
- [ ] Continue with Muse routes to Build My Closet (`16`/`-man`).

**Fine-Tune & Manual**
- [ ] Fine-Tune (`14c-w`/`-m`) uses sliders with live Muse feedback; has "Save My Style" + "Reset to Muse Recommendation"; is 1 screen (max 2); returns to `14e`.
- [ ] Manual Setup is ≤2 visual screens and ends by routing to the merged Style Result (`14b`), not the old report.
- [ ] Manual Setup is visually the quietest entry (text link only on `14e`).

**Parity & integrity**
- [ ] Woman and Man flows have identical screen counts, CTA sets, and navigation graph (IDs differ only by suffix).
- [ ] All `scrollToScreen()` targets resolve to existing IDs; no dead links; back arrows work.
- [ ] Design system intact: gold-border selected states (no black cards), Playfair/Inter, ivory/charcoal/gold only, warm-stylist voice (no "AI/quiz/chatbot").
- [ ] Every change is marked with `<!-- PHASE 1 REORG: ... -->`; Lucide icons render; no broken images.

---

**Deliverable:** an edited `1.html` where Build My Style (photo-first) is the single canonical discovery path, Build My Closet is cleanly deferred, the manual journey is ≤2 visual screens, the Decision screen has all four correctly-ranked CTAs including the new Rebuild, and Woman/Man flows are in full parity.
