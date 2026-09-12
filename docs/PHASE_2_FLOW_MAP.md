# StyleIQ — Phase 2 Flow Reduction Architecture Map

## Overview & Core UX Guarantees

Phase 2 reduces StyleIQ's 127-screen prototype inventory to **1–2 steps per core task**, with an absolute ceiling of **3 steps maximum** (strictly confined to 3 approved exceptions).

- **Total Screen Inventory Maintained**: Exactly 127 screens (all 127 legacy and granular screen IDs resolve predictably for routing and test suites).
- **Canonical Destinations**: Exactly 34 primary operational screens.
- **Merged / Subsumed Surfaces**: Exactly 93 screens transitioned into inline progressive-disclosure states, contextual modal sheets, drawers, or embedded tabs.
- **Normal Task Target**: 1–2 full-screen steps (`Step 1 → Result` or `Step 1 → Step 2 → Result`).
- **Strict 3-Step Exceptions**: Exactly 3 approved workflows (New Style Twin creation, Full Trip from Trips list, and Stylist Discovery Look → Detail → Studio).

---

## Central Routing & Machine-Checkable Attribute Strategy

All routing passes through `resolveCanonicalRoute(id)` and `go(id)`:
1. `#app` receives:
   - `data-screen="<requestedId>"`: Preserves 100% backward compatibility for existing tests and deep-links.
   - `data-canonical-screen="<canonicalId>"` and `data-phase2-canonical="<canonicalId>"`: Enforces Phase 2 consolidation assertions.
2. `navHistory` pushes canonical IDs only, preventing multi-step trapped browser history.
3. Every screen ID maps to exactly one canonical destination and state.

---

## The 21 Canonical Flow Reductions

| Flow # | Flow Name | Canonical Flow Path | Step Count | Canonical Screen(s) | Subsumed Screen IDs & States | Flow Type |
|---|---|---|---|---|---|---|
| **1** | **Account Creation** | `S-01 → A-16 → A-02 → destination` | 2 steps | `A-16`, `A-02` | `A-03` (A-16 email state), `A-04` (A-16 OTP state) | Standard (≤2) |
| **2** | **Returning Sign-In** | `S-01 → A-01 → D-02` | 1–2 steps | `A-01`, `D-02` | None (direct sign-in to Today) | Standard (≤2) |
| **3** | **First-Use Setup** | `A-02 → D-02 / C-01` | 1 step | `A-02` | `A-05` (goal), `A-06` (closet starter), `A-09` (goal), `A-10` (wardrobe context) | Standard (≤2) |
| **4** | **Add Closet Item** | `B-01 → B-06 → C-01` | 2 steps | `B-01`, `B-06` | `B-02` (photos mode), `B-03` (processing state), `B-11` (toast) | Standard (≤2) |
| **5** | **Batch Import** | `B-01 → B-06 → C-01` | 2 steps | `B-01`, `B-06` | `B-08` (preview state), `B-10` (draft imports drawer) | Standard (≤2) |
| **6** | **Product Search / URL Import** | `B-01 → B-06 → C-01` | 2 steps | `B-01`, `B-06` | `B-04` (search mode), `B-05` (search results), `B-07` (recovery state) | Standard (≤2) |
| **7** | **Closet Item Detail & Actions** | `C-01 → C-02` (with direct Studio route `→ F-01`) | 2 steps | `C-01`, `C-02` | `C-03` (photo tools), `C-04` (edit), `C-05` (styling), `C-06` (intelligence), `C-07` (style action) | Standard (≤2) |
| **8** | **Daily Styling (Today)** | `D-02` (Today hub) | 1 step | `D-02` | `D-01` (zero-closet state), `D-03` (loading state), `D-06` (missing piece card) | Standard (≤2) |
| **9** | **Outfit Actions** | `D-02` (with `changeLook` bottom sheet) | 1 step | `D-02` | `D-04` (change look sheet), `D-05` (alternatives carousel), `E-01` (save), `E-03` (feedback), `E-04` (share), `E-06` (next look) | Standard (≤2) |
| **10** | **Style Studio & Canvas** | `F-01` (Studio workspace with drawers) | 1 step | `F-01` | `F-02` (flatlay), `F-03` (twin), `F-04` (context), `F-05` (layers), `F-06` (add layer), `F-07` (picker), `F-08` (multiselect), `F-09` (sources), `F-10` (missing item), `F-11` (draft) | Standard (≤2) |
| **11** | **Saved Looks** | `G-01 → G-02` | 2 steps | `G-01`, `G-02` | `G-03` (items), `G-04` (about), `G-05` (value), `G-06` (visibility sheet), `G-07` (activity) | Standard (≤2) |
| **12** | **Wishlist & Before You Buy** | `G-08 → G-09` | 2 steps | `G-08`, `G-09` | None (G-08 Wishlist grid, G-09 Before You Buy evaluation) | Standard (≤2) |
| **13** | **Style Twin Creation** | `H-01 → H-06 → H-10` | 3 steps | `H-01`, `H-06`, `H-10` | `H-02` (face), `H-03` (body), `H-04` (angle), `H-05` (manual), `H-07` (hair), `H-08` (pose), `H-09` (styling) | **Approved Exception 1** |
| **14** | **Try On** | Originating Look (`D-02`/`F-01`/`C-02`) `→ H-10` | 1 step | `H-10` | `E-05` (try-on dispatch) | Standard (≤2) |
| **15** | **Planner Event** | `I-01 → I-04 → I-01` | 2 steps | `I-01`, `I-04` | `I-02` (insights sheet), `I-03` (event composer alias), `I-05` (validation state), `I-06` (share sheet) | Standard (≤2) |
| **16** | **Trip Planning** | `J-01 → J-02 → J-08` (from list) or `J-02 → J-08` (contextual) | 3 steps (list) / 2 steps (context) | `J-01`, `J-02`, `J-08` | `J-03` (destination), `J-04` (luggage), `J-05` (must-bring), `J-06` (activities), `J-07` (building state), `J-09` (packing tab), `J-10` (looks tab), `J-11` (add look sheet), `J-12` (muse sheet), `J-13` (review modal), `J-14` (created state) | **Approved Exception 2** |
| **17** | **Stylist Experience & Make It Mine** | `H-11 → H-13 → F-01` | 3 steps | `H-11`, `H-13`, `F-01` | `H-12` (optional stylist profile browsing) | **Approved Exception 3** |
| **18** | **Inspiration / Community** | `K-01 → K-04` | 2 steps | `K-01`, `K-04` | `K-02` (search state), `K-03` (filters sheet), `K-05` (try on), `K-06` (restyle action), `K-07` (comments sheet), `K-08` (report modal) | Standard (≤2) |
| **19** | **Profile & Preferences** | `L-01 → L-04` | 2 steps | `L-01`, `L-04` | `L-02` (completion card), `L-03` (content section), `L-05` (style), `L-06` (brands), `L-07` (budget), `L-08` (events), `L-09` (twin avatar link) | Standard (≤2) |
| **20** | **Settings** | `L-01 → L-11` | 2 steps | `L-01`, `L-11` | `L-10` (photos section), `L-13` (notifications section), `L-15` (privacy section) | Standard (≤2) |
| **21** | **Ask Muse** | Any screen `→ M-01` (contextual overlay / sheet) | 1 step | `M-01` | `M-02` (why look context), `M-03` (wardrobe gap context) | Standard (≤2) |

---

## Full 127-Screen Machine-Checkable Inventory Audit

Every screen ID belongs to exactly one product domain and resolves to a single canonical destination and state.

### Section S: Splash & Editorial Entry (2 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `S-00` | StyleIQ splash | Canonical | `S-00` | Standalone | Brand / Splash |
| `S-01` | Meet Muse | Canonical | `S-01` | Standalone | Editorial Entry |

### Section A: Authentication & First Use (16 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `A-01` | Sign in | Canonical | `A-01` | Returning sign-in | Auth |
| `A-02` | Set up your StyleIQ | Canonical | `A-02` | Consolidated first-use setup | Onboarding |
| `A-03` | Email sign-up | Merged | `A-16` | State: `email` (inline email input) | Auth |
| `A-04` | Verify email | Merged | `A-16` | State: `otp` (inline OTP verification) | Auth |
| `A-05` | First goal | Merged | `A-02` | Section: `goal` (focused goal selector) | Onboarding |
| `A-06` | Build Closet | Merged | `A-02` | Section: `closet` (starter closet choice) | Onboarding |
| `A-07` | Style Twin | Merged | `H-01` | Alias to Style Twin Step 1 | Style Twin |
| `A-08` | Style Twin photo | Merged | `H-01` | Section: `photo` (photo reference active) | Style Twin |
| `A-09` | First goal | Merged | `A-02` | Section: `goal` | Onboarding |
| `A-10` | Wardrobe context | Merged | `A-02` | Section: `wardrobe` (department/styling chips) | Onboarding |
| `A-11` | Today | Merged | `D-02` | Alias to canonical Today | Daily Styling |
| `A-12` | Add to Closet | Merged | `B-01` | Alias to canonical Closet intake | Closet Intake |
| `A-13` | Closet zero-state | Merged | `C-01` | State: `zero` (empty closet view) | Closet |
| `A-14` | My Looks | Merged | `G-01` | Alias to canonical Saved Looks | Saved Looks |
| `A-15` | Trip planning | Merged | `J-02` | Alias to canonical Trip Setup | Trips |
| `A-16` | Sign up | Canonical | `A-16` | Unified sign-up (Google, Apple, inline email/OTP) | Auth |

### Section B: Closet Import & Intake (11 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `B-01` | Add to Closet | Canonical | `B-01` | Universal intake (photos, search, receipts, drafts) | Closet Intake |
| `B-02` | Photo picker | Merged | `B-01` | Mode: `photos` | Closet Intake |
| `B-03` | Automatic photo cleanup | Merged | `B-01` | Mode: `processing` (background cleanup state) | Closet Intake |
| `B-04` | Import search | Merged | `B-01` | Mode: `search` (owned item search/URL) | Closet Intake |
| `B-05` | Search results | Merged | `B-01` | Mode: `search-results` | Closet Intake |
| `B-06` | Review Items | Canonical | `B-06` | Consolidated item/batch review | Closet Review |
| `B-07` | Photo recovery | Merged | `B-06` | State: `recovery` (upload exception handling) | Closet Review |
| `B-08` | Review result | Merged | `B-06` | State: `preview` | Closet Review |
| `B-09` | Receipt forwarding | Merged | `B-01` | Mode: `receipt` | Closet Intake |
| `B-10` | Draft imports | Merged | `B-01` | Panel: `draftImports` (side drawer) | Closet Intake |
| `B-11` | Success toast | Merged | `C-01` | Toast: `Added to your Closet` | Closet |

### Section C: Closet Wardrobe Management (7 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `C-01` | Closet grid | Canonical | `C-01` | Wardrobe catalog with filters & sorting | Closet |
| `C-02` | Item detail | Canonical | `C-02` | Consolidated item page with care, wears, metrics | Closet |
| `C-03` | Photo tools | Merged | `C-02` | Panel: `photoTools` | Closet |
| `C-04` | Edit details | Merged | `C-02` | Section: `edit` | Closet |
| `C-05` | Styling details | Merged | `C-02` | Section: `styling` | Closet |
| `C-06` | Intelligence | Merged | `C-02` | Section: `intelligence` (wear counts, look pairings) | Closet |
| `C-07` | Style this item | Merged | `F-01` | Action: `style-item` (preloaded canvas) | Style Studio |

### Section D: Today & Daily Outfit (6 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `D-01` | Zero Closet | Merged | `D-02` | State: `zero-closet` (starter look) | Daily Styling |
| `D-02` | Today | Canonical | `D-02` | Daily outfit hub with weather, recommendations | Daily Styling |
| `D-03` | Loading | Merged | `D-02` | State: `loading` (skeleton loader) | Daily Styling |
| `D-04` | Change Look | Merged | `D-02` | Panel: `changeLook` (bottom sheet) | Daily Styling |
| `D-05` | Alternatives | Merged | `D-02` | Panel: `changeLook`, view: `carousel` | Daily Styling |
| `D-06` | Missing piece | Merged | `D-02` | State: `missing-category` | Daily Styling |

### Section E: Outfit Quick Actions (6 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `E-01` | Save Look | Merged | `D-02` | Panel: `save` (save sheet over outfit) | Outfit Actions |
| `E-02` | Customize | Merged | `F-01` | Action: `customize` (opens Studio canvas) | Style Studio |
| `E-03` | Dislike reason | Merged | `D-02` | Panel: `feedback` (feedback sheet) | Outfit Actions |
| `E-04` | Share | Merged | `D-02` | Panel: `share` (share sheet) | Outfit Actions |
| `E-05` | Try On | Merged | `H-10` / `H-01` | Dynamic Try On dispatch | Style Twin |
| `E-06` | Next Look | Merged | `D-02` | Action: `next-look` (variant toggle) | Outfit Actions |

### Section F: Style Studio Workspace (11 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `F-01` | Style Studio | Canonical | `F-01` | Full-screen interactive outfit builder | Style Studio |
| `F-02` | Flat Lay | Merged | `F-01` | View: `flatlay` | Style Studio |
| `F-03` | On My Twin | Merged | `F-01` | View: `twin` | Style Studio |
| `F-04` | Context | Merged | `F-01` | Section: `context` | Style Studio |
| `F-05` | Layers | Merged | `F-01` | Section: `layers` | Style Studio |
| `F-06` | Add layer | Merged | `F-01` | Panel: `add-layer` | Style Studio |
| `F-07` | Picker | Merged | `F-01` | Panel: `picker` | Style Studio |
| `F-08` | Multi-select | Merged | `F-01` | State: `multiselect` | Style Studio |
| `F-09` | Sources | Merged | `F-01` | Panel: `sources` | Style Studio |
| `F-10` | Missing item | Merged | `F-01` | State: `missing-item` | Style Studio |
| `F-11` | Draft | Merged | `F-01` | Action: `resume-draft` | Style Studio |

### Section G: Saved Looks & Wishlist (9 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `G-01` | My Looks | Canonical | `G-01` | Saved outfits collection | Saved Looks |
| `G-02` | Saved Look Detail | Canonical | `G-02` | Consolidated Look detail | Saved Looks |
| `G-03` | Items | Merged | `G-02` | Section: `items` | Saved Looks |
| `G-04` | About | Merged | `G-02` | Section: `details` | Saved Looks |
| `G-05` | Value | Merged | `G-02` | Section: `value` | Saved Looks |
| `G-06` | Visibility | Merged | `G-02` | Panel: `visibility` (privacy sheet) | Saved Looks |
| `G-07` | Activity | Merged | `G-02` | Section: `activity` | Saved Looks |
| `G-08` | My Wishlist | Canonical | `G-08` | Standalone Wishlist collection (KEEP) | Wishlist |
| `G-09` | Before You Buy | Canonical | `G-09` | Product evaluation / purchase check (KEEP) | Wishlist |

### Section H: Style Twin & Stylist Experience (13 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `H-01` | Create Style Twin | Canonical | `H-01` | Step 1 of 3: Photos & Reference Setup | Style Twin |
| `H-02` | Face reference | Merged | `H-01` | Section: `photo-face` | Style Twin |
| `H-03` | Body reference | Merged | `H-01` | Section: `photo-body` | Style Twin |
| `H-04` | Full reference | Merged | `H-01` | Section: `photo-angle` | Style Twin |
| `H-05` | No-photo mode | Merged | `H-01` | Mode: `manual` | Style Twin |
| `H-06` | Twin Details & Adjustments | Canonical | `H-06` | Step 2 of 3: Measurements & Fine-tuning | Style Twin |
| `H-07` | Hair refine | Merged | `H-06` | Section: `refine-hair` | Style Twin |
| `H-08` | Pose refine | Merged | `H-06` | Section: `refine-fit` | Style Twin |
| `H-09` | Styling refine | Merged | `H-06` | Section: `refine-styling` | Style Twin |
| `H-10` | First result / Your Twin | Canonical | `H-10` | Step 3 of 3: Rendered Twin preview | Style Twin |
| `H-11` | Stylist discovery | Canonical | `H-11` | Curated stylist directory & feed (KEEP) | Stylist Experience |
| `H-12` | Stylist profile | Canonical | `H-12` | Stylist portfolio & bio (KEEP) | Stylist Experience |
| `H-13` | Stylist look detail | Canonical | `H-13` | Look breakdown; Make It Mine routes to F-01 (KEEP) | Stylist Experience |

### Section I: Planner & Scheduling (6 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `I-01` | Calendar month | Canonical | `I-01` | Planner calendar root with day & week sheets | Planner |
| `I-02` | Insights | Merged | `I-01` | Panel: `plannerInsights` (wardrobe utilization) | Planner |
| `I-03` | Add Event | Merged | `I-04` | Event form route | Planner |
| `I-04` | Event Composer | Canonical | `I-04` | Consolidated event composer & validation | Planner |
| `I-05` | Validation state | Merged | `I-04` | State: `validation` | Planner |
| `I-06` | Share Calendar | Merged | `I-01` | Panel: `shareCalendar` (privacy-safe sharing) | Planner |

### Section J: Trips & Travel Wardrobe (14 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `J-01` | Trips list | Canonical | `J-01` | Trip collection (upcoming & past) | Trips |
| `J-02` | Trip Setup | Canonical | `J-02` | Consolidated Trip setup (NL prompt, dates, luggage) | Trips |
| `J-03` | Destination | Merged | `J-02` | Section: `destination` | Trips |
| `J-04` | Luggage | Merged | `J-02` | Section: `luggage` | Trips |
| `J-05` | Must bring | Merged | `J-02` | Section: `must-bring` | Trips |
| `J-06` | Activities | Merged | `J-02` | Section: `activities` | Trips |
| `J-07` | Building Trip | Merged | `J-02` | State: `building` (animated generation) | Trips |
| `J-08` | Trip Hub | Canonical | `J-08` | Itinerary workspace (Packing list & Daily looks) | Trips |
| `J-09` | Packing | Merged | `J-08` | Tab: `packing` | Trips |
| `J-10` | Looks | Merged | `J-08` | Tab: `looks` | Trips |
| `J-11` | Add Look | Merged | `J-08` | Tab: `looks`, panel: `tripAddLook` | Trips |
| `J-12` | Ask Muse Look | Merged | `J-08` | Tab: `looks`, panel: `tripMuse` | Trips |
| `J-13` | Review Trip | Merged | `J-08` | Modal: `tripReview` | Trips |
| `J-14` | Trip created | Merged | `J-08` | State: `success` | Trips |

### Section K: Inspiration / Community (8 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `K-01` | Feed | Canonical | `K-01` | Community inspiration feed (KEEP) | Inspiration |
| `K-02` | Search | Merged | `K-01` | State: `search` (inline search bar/overlay) | Inspiration |
| `K-03` | Filters | Merged | `K-01` | Panel: `discoverFilters` (filter sheet) | Inspiration |
| `K-04` | Look detail | Canonical | `K-04` | Social look detail (KEEP) | Inspiration |
| `K-05` | Try On Me | Merged | `H-10` / `H-01` | Dynamic Try On dispatch | Style Twin |
| `K-06` | Restyle | Merged | `F-01` | Action: `restyle` in Style Studio | Style Studio |
| `K-07` | Comments | Merged | `K-04` | Panel: `lookComments` (local social sheet) | Inspiration |
| `K-08` | Report | Merged | `K-04` | Modal: `reportLook` | Inspiration |

### Section L: Profile & Settings (15 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `L-01` | Profile | Canonical | `L-01` | Atelier root with completion card & content links | Profile |
| `L-02` | Completion prompt | Merged | `L-01` | Section: `completion` | Profile |
| `L-03` | My content | Merged | `L-01` | Section: `content` | Profile |
| `L-04` | Profile & Style Preferences | Canonical | `L-04` | Consolidated preferences (About, Style, Brands, Budget) | Profile |
| `L-05` | Style preferences | Merged | `L-04` | Section: `style` | Profile |
| `L-06` | Brands | Merged | `L-04` | Section: `brands` | Profile |
| `L-07` | Budget | Merged | `L-04` | Section: `budget` | Profile |
| `L-08` | Events | Merged | `L-04` | Section: `events` | Profile |
| `L-09` | Avatar | Merged | `H-10` / `H-01` | Reuses Style Twin H-flow | Style Twin |
| `L-10` | Original photos | Merged | `L-11` | Section: `photos` | Settings |
| `L-11` | Settings | Canonical | `L-11` | Consolidated app & privacy settings (KEEP) | Settings |
| `L-12` | Tutorial | Canonical | `L-12` | Interactive guide & walkthrough (KEEP) | Settings |
| `L-13` | Notifications | Merged | `L-11` | Section: `notifications` | Settings |
| `L-14` | Help center | Canonical | `L-14` | Customer support & FAQ (KEEP) | Settings |
| `L-15` | Privacy | Merged | `L-11` | Section: `privacy` | Settings |

### Section M: Muse Assistant (3 screens)
| Screen ID | Title | Status | Canonical Screen | Canonical State / Sub-mode | Domain |
|---|---|---|---|---|---|
| `M-01` | Ask Muse | Canonical | `M-01` | Conversational stylist & wardrobe gap solver | Muse Assistant |
| `M-02` | Why this Look | Merged | `M-01` | Context: `why-look` | Muse Assistant |
| `M-03` | Wardrobe gap | Merged | `M-01` | Context: `wardrobe-gap` | Muse Assistant |

---

## Detailed Specifications for Approved 3-Step Exceptions

### Exception 1: New Style Twin Creation (`H-01` → `H-06` → `H-10`)
1. **Step 1 (`H-01`)**: Reference Photo Capture & Upload. User uploads face and body reference photos with local privacy processing, or selects measurement-only manual mode (`H-05`).
2. **Step 2 (`H-06`)**: Avatar Measurements & Fine-Tuning. User enters height, body fit proportions, and optional fine-tuning (pose, tuck, hairstyle).
3. **Step 3 (`H-10`)**: Style Twin Result. Rendered 3D twin appears ready to wear outfits, with quick actions to dress, refine, or use across Studio.
- *Total: Exactly 3 full-screen steps.*

### Exception 2: Full Trip Planning from Trips List (`J-01` → `J-02` → `J-08`)
1. **Step 1 (`J-01`)**: Trips Index. User views past and upcoming trips and clicks "Plan New Trip".
2. **Step 2 (`J-02`)**: Unified Trip Setup. Destination, start/end dates, luggage type (carry-on/checked), planned activities, and weather considerations in a single form with natural language autofill.
3. **Step 3 (`J-08`)**: Trip Hub. Complete itinerary workspace featuring toggleable Packing List (with packed checkboxes) and Daily Looks tabs, plus Muse trip styling advice.
- *Total: Exactly 3 full-screen steps (or 2 steps when invoked directly via Planner/Search `J-02 → J-08`).*

### Exception 3: Stylist Discovery Look to Studio Customization (`H-11` → `H-13` → `F-01`)
1. **Step 1 (`H-11`)**: Stylist Feed. User explores curated editorial looks filtered by occasion, stylist, or aesthetic.
2. **Step 2 (`H-13`)**: Stylist Look Detail. User opens the look directly from the feed to inspect individual garments, styling commentary, and compatibility scores (with optional route to Stylist Profile `H-12`).
3. **Step 3 (`F-01`)**: "Make It Mine" in Style Studio. Look layers are loaded directly into the interactive styling canvas for personalization and swapping.
- *Total: Exactly 3 full-screen steps.*
