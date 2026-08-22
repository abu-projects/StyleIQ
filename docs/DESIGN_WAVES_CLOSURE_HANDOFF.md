# StyleIQ Design Waves Closure & Implementation Handoff

## A. Design Waves Status

WP-11 through WP-20 are complete:

- WP-11 — Visual & Outfit-First Foundation
- WP-12 — Today / Daily Outfit Loop
- WP-13 — Style Studio
- WP-14 — Creator Experience
- WP-15 — Discover & Shopping
- WP-16 — Closet Becomes Outfit-Enabling
- WP-17 — Planner & Saved Looks
- WP-18 — Profile / My Atelier
- WP-19 — Onboarding Visual Simplification
- WP-20 — Global Visual/Text Cleanup & Final Product Polish

WP-20 is the final Design Waves package. No WP-21 is planned. Future design work should be recorded as a Design Fix, UX Refinement, or Stakeholder Change Request.

Phase transition: **Design Waves → Stakeholder Review & Implementation Handoff**.

## B. Final Product Principles

- **Outfit first:** the dominant model is Outfit → Action → Details if needed.
- **Less text, more pictures:** outfits, garments, creators, swatches, thumbnails, and visual states communicate before explanation.
- **Observation before interrogation:** learning comes from reactions, saves, wears, Closet behavior, Creator/Studio use, and Wishlist/shopping activity—not a long aesthetic questionnaire.
- **No style judgment:** no user-facing Style Score, Closet Readiness percentage, completion grade, or fashion ranking. Wear count, cost per wear, spend, and other neutral facts remain valid.
- **Useful from zero data:** inspiration works without a Closet or Style Twin. One owned item is enough to unlock styling.
- **Contextual depth:** reasoning, value details, settings, and configuration are available when needed without dominating recommendation surfaces.

## C. Canonical Architecture

| Section | Product area | Architectural role |
|---|---|---|
| X / Y | Onboarding and personalization | Account entry, minimal context, three outfit reactions, optional Twin/Closet/inspiration setup |
| A | Today | Daily outfit, actions, alternatives, feedback, and Muse |
| B | Saved Looks | Reusable saved-outfit library and saved-look detail |
| C | Closet | Owned items, item capture, item-led outfits, factual Closet utilities |
| D | Planner | Dated outfit occurrences, calendar, travel wardrobe, packing |
| E | Wardrobe Value / Utility | Budget, purchase import, brand value, resale, cost/value facts |
| F | Profile / My Style Profile | Visual personal hub, preferences, history, boards, settings |
| G | Discover / Intentional Shopping | Outfit feed, product checks, Wishlist, missing-piece shopping |
| H | Studio / Creator | Contextual outfit creation, Try On, variants, creators, reconstruction |

Canonical primary navigation, in order:

1. Today
2. Closet
3. Planner
4. Discover
5. Profile

Studio is contextual, not a sixth global tab. Primary screens use the bottom navigation; child/detail screens use Back or an origin-aware return.

## D. Screen Inventory

The inventory below was generated from the current implementation. “Utility—form” and “Utility—state” preserve the requested four-way handoff classification while identifying configuration and feedback-state screens precisely.

### X — Entry

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| X-1 | Entry / value proposition | Child | Understand StyleIQ and begin | App launch or logout | Continue to returning Today or account entry |
| X-2 | Create account | Utility—form | Choose account method | X-1 or returning auth flow | X-3 email signup or provider flow |
| X-3 | Sign up with email | Utility—form | Submit email credentials | X-2 | X-4 verification; back to X-2 |
| X-4 | Check your email | Utility—form | Complete email verification | X-3 | Return to X-3 to change/resend; proceed into Y flow after verification |

### Y — Personalization

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| Y-1 | Styling Context | Child | Choose the main practical dressing context | New-account completion | Y-2 visual learning |
| Y-2 | Visual Style Learning | Child | Like or dislike three outfits | Y-1; optional later refinement | Today or optional setup hub after three reactions |
| Y-3 | Create Your Style Twin | Child | Choose Photo Twin, no-photo Twin, or skip | Setup hub, Profile, or Try On fallback | Y-4, Y-6, or return to origin/Profile |
| Y-4 | Face Photos | Utility—form | Add face photos for Photo Twin | Y-3 | Y-5; save and finish later |
| Y-5 | Body Photos | Utility—form | Add body photos for Photo Twin | Y-4 | Y-6; save and finish later |
| Y-6 | Your Details | Utility—form | Add presentation/body details | Y-3 no-photo path or Y-5 | Y-8 or finish later |
| Y-7 | Your Brand Fit | Utility—form | Maintain brand-specific fit notes | F-2 or F-3 | Save/cancel to the recorded origin |
| Y-8 | Body Shape | Utility—form | Refine optional Twin representation | Y-6 | Y-9 or finish later |
| Y-9 | Hair Details | Utility—form | Refine optional Twin representation | Y-8 | Y-13 processing or finish later |
| Y-10 | Shoe Preferences | Utility—form | Maintain shoe sizes/preferences | F-3 | Save/cancel to F-3 |
| Y-11 | Visual Style Learning refinement | Child | Add more visual reactions later | F-2 or setup hub | Return to style profile/setup origin |
| Y-12 | Style Inspiration | Utility—form | Add personal images, sources, or creators | F-1, F-2, F-14, setup hub | Done to recorded Profile/setup origin |
| Y-13 | Creating Your Style Twin | Utility—state | See finite processing and resume/finish | Y-9 or resumed Twin setup | Y-14 reveal or finish later |
| Y-14 | Meet Your Style Twin | Utility—state | Review completed Twin and scenes | Y-13 or Profile | Done to Profile; edit via Y-3 |

### A — Today

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| A-1 | Today / Morning Outfit | Primary | Receive and act on the current outfit | Primary nav or onboarding completion | View pieces, Try On, Wear, alternative, Muse, Save/Plan actions |
| A-2 | Outfit Detail | Child | Inspect pieces, brands, ownership, and optional reasoning | A-1 or alternative selection | Try On, Make From My Closet, Wear, Save, Plan, alternatives |
| A-3 | Choose a Look | Child | Select an alternative daily outfit | A-1/A-2 | Apply selection and continue to A-4/A-2 |
| A-4 | Outfit Feedback | Child | Mark wear and capture how the outfit felt | A-1/A-2/A-3 | Done to Today; feedback updates learning/wear state |
| A-5 | Ask Muse | Child | Request a practical styling task | A-1 or Profile | A-6 result or D-4 packing flow |
| A-6 | Muse Outfit Result | Child | Act on Muse’s outfit result | A-5 | Try On, Make From My Closet, Apply, Plan, Find Similar, Save |

### B — Saved Looks

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| B-1 | Saved Looks | Child | Browse and filter reusable saved outfits | Today/Profile/Studio save references | B-2 detail, Wear, Try On, Edit copy, Plan, or remove |
| B-2 | Saved Look Detail | Child | Inspect and act on one saved outfit | B-1 selection | Back to B-1; Wear, Try On, Plan, edit copy, remove |

### C — Closet

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| C-1 | Closet | Primary | See outfit value and owned wardrobe; add an item | Primary nav | C-2 add, C-6 pieces, C-7 item/outfit, C-13 insights, Studio |
| C-2 | Add to My Closet | Utility—form | Add by photo, gallery, manual entry, or purchase import | C-1/Profile/Discover/setup hub | C-3 processing, C-4 confirmation, or return to origin |
| C-3 | Preparing Your Item | Utility—state | Understand finite item processing and recovery | C-2 photo selection | C-4 confirm, retry, or C-2 |
| C-4 | Confirm Your Item | Utility—form | Confirm detected/imported item data | C-2/C-3/E-5/G Wishlist purchase | C-5 added state or save draft/cancel |
| C-5 | Item Added | Utility—state | See immediate outfit value from the new item | C-4 commit | Style It, Save, Plan, add another, Closet/setup hub |
| C-6 | My Pieces | Child | Browse/filter owned garments | C-1, insights, seasonal review | C-7 item detail or back to C-1 |
| C-7 | Closet Item / Anchored Outfit | Child | Style an owned item and manage its record | C-1/C-6/C-5 | Studio/Try On/Save/Plan/Wear; edit, listing, cost per wear |
| C-8 | Prepare Your Listing | Utility—form | Prepare resale listing details | C-7 | C-9 platform selection or C-7 |
| C-9 | Choose Where to Sell | Utility—form | Select an external resale platform | C-8 | C-10 listing handoff |
| C-10 | Link Your Listing | Utility—form | Record the external listing URL/state | C-9 or E-7 | C-11 success or C-7 later |
| C-11 | Listing Connected | Utility—state | Confirm linked resale listing | C-10 | C-7 item or C-6 pieces |
| C-12 | Archive This Item? | Utility—form | Confirm archive/delete-style mutation safely | C-7 | Confirm or cancel to C-7 |
| C-13 | Closet Insights | Utility | Review neutral Closet observations | C-1/F-1 | C-14/C-16/C-18/C-19/C-20 or Closet |
| C-14 | Useful Gaps | Utility | See gaps only after styling owned pieces | C-13 | G-11 opportunity or C-6 |
| C-15 | Mark as Worn | Utility | Add dated wear/occasion data | C-7/C-18 | Save and return to item detail |
| C-16 | Wear More Often | Utility | Find outfits for underused owned items | C-13/F-4 | Item-led outfit/Studio or C-13 |
| C-17 | Closet Prompts | Utility | Add pieces opportunistically as they are worn | Contextual prompt | C-1/add-item flow |
| C-18 | Cost per Wear | Utility | Review factual purchase/wear economics | C-7/C-13/E-1/E-6/F-4 | Mark worn or return to insights |
| C-19 | Similar Pieces | Utility | Compare overlapping owned items | C-13/F-4 | Select/compare or return to C-13 |
| C-20 | Seasonal Audit | Utility | Review owned pieces for the coming season | C-13/F-4 | C-6 review pieces or C-13 |

### D — Planner

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| D-1 | Planner | Primary | View dated outfits and add a plan | Primary nav or cross-app Plan | D-2 plan, D-3 detail, D-4 travel, Wear |
| D-2 | Plan a Look | Utility—form | Choose outfit, date, and occasion | D-1 or explicit cross-app Add to Planner | Commit to D-1/D-3 or return to origin |
| D-3 | Planned Look Detail | Child | Inspect one occurrence and act on it | D-1 calendar slot | Wear, change/edit copy, Save, remove occurrence |
| D-4 | Packing Assistant | Utility—form | Configure destination, dates, and occasions | D-1 or Muse | D-5 travel wardrobe plan |
| D-5 | Travel Wardrobe Plan | Child | Review day outfits, missing pieces, and packing | D-4 | Add to Planner, edit packing list, shop missing |

### E — Wardrobe Value / Utility

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| E-1 | Wardrobe Value & Activity | Utility | Review factual wardrobe value/activity | F-1 | Cost per wear, resale, brand value, import, budget |
| E-2 | Style Budget | Utility | Review monthly wardrobe plan against Wishlist | E-1/E-3/E-7 | G-8/G-9 Wishlist or E-3 settings |
| E-3 | Budget Settings | Utility—form | Configure budget/currency guardrails | E-2 or F-14 | Save/cancel to E-2 |
| E-4 | Import Purchase History | Utility—form | Choose a receipt/purchase-history source | E-1/C-2 | E-5 detected purchases or return origin |
| E-5 | Detected Purchases | Utility—form | Select detected purchases to import | E-4 | C-4 confirmation or E-4 |
| E-6 | Brand Value Insights | Utility | Compare factual wear/cost by brand | E-1 | C-18 cost per wear or E-1 |
| E-7 | Resale Activity | Utility | Review active/sold item listings | E-1 | C-7 item, C-10 listing, E-2 budget |

### F — Profile / My Style Profile

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| F-1 | Profile / My Style Profile | Primary | Access personal looks, Closet, observed style, Wishlist, Twin, following, and utilities | Primary nav or optional setup returns | B/C/F/G/H/Y utilities; settings; setup hub |
| F-2 | My Style Profile | Child | Review visual preferences, palette, inspiration, and observed patterns | F-1/F-14 | Y-11/Y-12 refinement, creators, F-3/Y-7 |
| F-3 | Preferences & Sizes | Utility—form | Maintain sizing, fit, brand, and shoe preferences | F-1/F-2/F-14 | Y-7 Brand Fit, Y-10 shoes, save to Profile |
| F-4 | Closet Insights preview | Utility | Open Closet facts from Profile | F-1 | C-7/C-16/C-18/C-19/C-20 |
| F-5 | Historical Profile compatibility | Compatibility | Preserve canonical route/ID contract | Legacy-only reference | Non-prominent; no primary navigation role |
| F-6 | Historical Profile compatibility | Compatibility | Preserve canonical route/ID contract | Legacy-only reference | Non-prominent; no primary navigation role |
| F-7 | Outfit History | Utility | Review recorded wears | F-1/F-8 | Outfit details or F-1 |
| F-8 | Style Evolution | Utility | Review neutral change over time | F-1 | F-7 history or F-1 |
| F-9 | Style Wrapped | Utility | Review visual factual recap | F-1 | F-1 |
| F-10 | Style Boards | Utility | Browse personal/shared visual boards | F-1/H-8 | F-11 board or H-8 add look |
| F-11 | Board Collaboration | Utility—form | Review a board and collaborative activity | F-10 | F-12 poll or F-10 |
| F-12 | Poll Details | Utility | Review a board outfit poll | F-11 | F-13 participate or F-11 |
| F-13 | Participant Vote | Utility | Vote accessibly on a board choice | F-12 | Submit and return to F-12 |
| F-14 | Settings | Utility—form | Manage account, preferences, services, accessibility, privacy | F-1 | Profile modules, budget/Wishlist, or modal settings tasks |

### G — Discover / Intentional Shopping

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| G-1 | Discover | Primary | Browse outfit-led recommendations and contextual shopping tools | Primary nav | G-10 outfit, G-4 Style Check, G-8 Wishlist, G-11 opportunity, H-9 creators |
| G-2 | Check a Piece | Child | Inspect a candidate product in outfit context | A-6/G-10/H-5 | G-4 Style Check or back to origin |
| G-3 | Checking the Piece | Child | Show finite product-check processing | G-2 | G-4 result or back |
| G-4 | Before-You-Buy Style Check | Child | Compare Closet overlap and outfit relevance | G-1/G-2/G-3 | G-5 similar owned, G-6 outfits, G-7 save |
| G-5 | Similar Owned Pieces | Child | Review Closet alternatives before buying | G-4/G-9 | G-6 outfit relevance or C-2 add item |
| G-6 | Outfit Possibilities | Child | See outfits enabled by a candidate/missing piece | G-4/G-5/G-9/G-11 | Save/Plan/Shop or return to product check |
| G-7 | Save for Later | Child | Save a candidate without purchasing | G-4 | G-8 Wishlist or back |
| G-8 | Wishlist | Child | Review deduplicated saved products | G-1/Profile/E-2/G-7 | G-9 item, G-12 review, purchase/import path |
| G-9 | Wishlist Item Detail | Child | Review one saved product and its outfit need | G-8/E-2 | G-5 similar owned, G-6 outfits, purchase/remove |
| G-10 | Complete This Look | Child | Act on a Discover outfit and its missing piece | G-1 | Try On, Make From My Closet, Save, Plan, G-2 product |
| G-11 | Wardrobe Opportunity | Child | See outfits unlocked by one intentional gap | G-1/C-14 | G-6 outfits or Discover |
| G-12 | Wishlist Review | Child | Triage saved products against current need | G-8 | Keep/remove/open item; return to G-8 |

### H — Studio / Creator

| ID | Screen name | Type | Main user goal | Main entry | Main exit / next step |
|---|---|---|---|---|---|
| H-1 | Style Studio Home | Child | Start, resume, or review a look | Profile/Closet/Today/Discover/contextual Studio entry | H-2 setup, H-4 canvas, B-1 saved |
| H-2 | Blank Canvas Setup | Child | Choose occasion/mood/start mode | H-1 | H-3 Closet selection or H-4 canvas |
| H-3 | Choose Closet Items | Utility—form | Select owned pieces for the canvas | H-2/H-4 | H-4 canvas |
| H-4 | Outfit Canvas / Dress My Twin | Child | Build and adjust an outfit visually | Try On, item styling, H-2/H-3 | H-5 review; Y-3 Twin setup; return origin |
| H-5 | Outfit Review | Child | Review outfit, ownership, brands, and actions | H-4 | Save, Plan, Wear, edit, variants, board, shopping |
| H-6 | Outfit Variants | Child | Compare generated outfit variations | H-5 | H-7 preview or apply to H-5/H-4 |
| H-7 | Variant Scene Preview | Child | Preview a selected variation in context | H-6 | Apply or return to H-6 |
| H-8 | Save to Style Board | Utility—form | Save an outfit to an existing/new board | H-5/F-10 | F-10 boards or H-5 |
| H-9 | Creator Discovery | Child | Browse creators through their outfits | Discover/Profile | H-10 Creator profile or origin |
| H-10 | Creator Profile / Creator Closet | Child | Browse a creator’s outfits, boards, Closet, and patterns | H-9/Discover/Profile | H-11/H-12/H-13/H-15; origin-aware return |
| H-11 | Creator Closet Items | Child | Inspect recurring creator pieces and roles | H-10 | H-13 looks/H-14 matching or H-10 |
| H-12 | Creator Outfit Boards | Child | Browse creator-curated outfit groups | H-10 | H-13 look detail or H-10 |
| H-13 | Creator Look Detail | Child | Inspect and act on a creator outfit | H-10/H-12 | Try On, H-14 reconstruction, save/plan, H-15 patterns |
| H-14 | Make From My Closet | Child | Map creator/outfit roles to Owned, Similar Owned, and Missing pieces | A/G/H outfit detail | Build in H-4, shop missing, save/plan, return origin |
| H-15 | Style Patterns & Recipes | Utility | Review optional creator patterns after outfits | H-10/H-13 | H-16 pack, H-14 preview, H-10 |
| H-16 | Style Pack Detail | Utility | Review and apply a creator recipe pack | H-15/H-10 | H-14 Closet preview or H-15 |
| H-17 | Creator Impact Analytics | Utility | Review neutral creator content impact | Creator analytics entry | H-10 Creator profile |

### Primary implementation summaries

- **A-1 Today:** needs user/time/context, weather/calendar signals where enabled, selected daily Outfit, pieces/brands, Closet matches, saved/planned/wear state, Twin mode, and recommendation alternatives. Main actions: View Pieces, Try On, Make From My Closet, Save, Plan, Wear, See Another, and Muse.
- **C-1 Closet:** needs owned items, item count/categories, recent item, outfit suggestions, and empty/one-item/populated mode. Empty still shows inspiration and Add Item; one item anchors outfits; populated enables reconstruction, filters, item detail, and insights. Persistent action: Add Item.
- **D-1 Planner:** needs dated occurrences separate from reusable Saved Looks, selected day, event/occasion metadata, travel ranges, and reminder state. It must support calendar slots, add/change/remove occurrence, Wear, and travel-plan population without duplication.
- **G-1 Discover:** needs an outfit feed, source/Creator attribution, product/missing-piece context, Closet overlap, saved/planned state, Wishlist state, and shopping filters. Outfit cards lead; shopping and utilities remain contextual.
- **F-1 Profile:** needs user identity, observed visual profile, recent Saved Looks, Closet preview, Wishlist preview, Twin mode/status, followed creators, preferences, and optional setup progress. It is a personal hub, not a score dashboard.
- **B-1 Saved Looks:** needs deduplicated reusable Outfit records, filters, source context, and saved state. Actions can Wear, Try On, copy into Studio, Plan, and remove without deleting Planner occurrences.
- **H-1 Studio:** needs current Studio session, source outfit/item, canvas pieces, mode (flat/Twin), history, and saved boards. It starts or resumes a contextual visual build and hands off to review/save/plan/wear.
- **H-10 Creator Profile:** needs creator identity, follow state, outfit/board/piece collections, patterns, and stable source attribution. Outfits lead; Creator analysis is secondary.

## E. Core User Journeys

Primary product loop:

**Discover / Receive Outfit → Try On / Make From My Closet → Save → Plan → Wear → StyleIQ Learns**

Secondary Closet loop:

**Closet Item → Style It → Studio → Save / Plan / Wear**

Creator loop:

**Creator Outfit → Try On → Make From My Closet → Shop Missing → Save / Plan**

Cross-app journeys for stakeholder and implementation validation:

1. **Minimum onboarding:** X-1 → account → Y-1 context → Y-2 three reactions → Today or optional setup hub.
2. **First outfit:** A-1 → A-2 → Try On/Closet reconstruction → Save → B-1 → Plan → D-1/D-3 → Wear.
3. **Empty Closet:** C-1 inspiration → C-2 add → C-3/C-4 → C-5 outfits → Style It → H-4/H-5.
4. **Owned-item styling:** C-6/C-7 → Style It → H-4 → H-5 → Save/Plan/Wear.
5. **Discover:** G-1 → G-10 → H-14 → G-2/G-4 missing-piece check → G-8 Wishlist → Save/Plan.
6. **Creator:** H-9 → H-10 → H-13 → Try On/H-14 → H-4 → Save/Plan while attribution survives.
7. **Travel:** D-1 → D-4 → D-5 → missing-piece shopping/packing → add dated trip occurrences without duplicates.
8. **Profile:** F-1 → F-2/F-3/Y-7 → F-4/G-8/F-10/F-14 → origin-aware return to F-1.
9. **No Twin/no-photo Twin:** Y-3 choose skip or no-photo → Today/Studio/Discover/Profile remain usable; Try On offers setup or a valid neutral fallback.

## F. Reusable Component Map

| Component/pattern | Primary consumers | Required reusable behavior |
|---|---|---|
| App Header / Child Header | A–H, X/Y | Primary identity/action vs concise title, Back, origin-aware return |
| Bottom Navigation | A-1, C-1, D-1, G-1, F-1 | Exact five labels/order, one active item, safe-area padding |
| Outfit Hero | A-1/A-2, G-10, H-5/H-13 | Large image, source/context, dominant action, accessible alt |
| Outfit Card / Grid / Rail | A/B/C/D/F/G/H | Stable Outfit identity, image, context, source, saved/planned state |
| Outfit Pieces / Brand Strip | A-2, G-10, H-5/H-13 | Piece image/name/brand plus ownership state; avoid redundant brand repetition |
| Closet Match Summary | A/G/H | Coverage count and Owned / Similar Owned / Missing without readiness percentage |
| Ownership State Badge | A/C/G/H | Text/icon plus color; canonical labels only |
| Closet Item Card | C/F/G/H | Clean item image, name/category/brand, ownership, actionable detail |
| Creator Card / Avatar | F/G/H | Creator identity, outfit preview, follow/source context |
| Missing Piece Card | G/H/D | Missing role/product, outfit relationship, Shop/Wishlist/owned alternatives |
| Wishlist Item Card | E/F/G | Deduplicated product, needed-for context, price/status, review/remove/purchase |
| Planner Outfit Slot | D | Date/event occurrence linked to but independent from Outfit/Saved Look |
| Travel Day / Packing Item | D-4/D-5 | Date/day assignment, packed state, missing-piece relation, dedupe |
| Style Twin Preview | Y/F/H | No Twin, Photo, no-photo, in-progress, complete modes |
| Swipe Outfit Card | Y-2/Y-11 | Like/Dislike buttons, swipe equivalent, Undo, progress, completion guard |
| Filter Chips / Segmented Control | B/C/G/H | Compact selection, `aria-pressed`, horizontal rail only when intentional |
| Swatches | F/Y/G | Visual color with accessible names |
| Studio Canvas / Item Tray | H-4 | Flat/Twin modes, owned/inspiration source, selection, Undo/reset, visual dominance |
| Bottom Sheet / Modal | Settings, filters, choices | Focus placement, Escape/close, backdrop, return focus, mobile-safe sizing |
| Confirmation Dialog | Saved/Planner/Closet/account | Destructive context, explicit confirm/cancel, preserve related independent state |
| Empty State | B/C/D/F/G/H | Visual example, one short message, one useful action |
| Loading / Processing State | Y-13, C-3, G-3 | Finite stage/progress, recovery, no infinite-looking state |
| Error / Validation State | Auth/forms/import | What happened, inline fix, concise retry/cancel |
| Toast / Live Feedback | Cross-app mutations | `role=status`, concise success, Undo where safe |

This is an implementation map only; no React/native component work is started here.

## G. Shared State Map

| Domain | Key UX-visible data | Read by | Mutated by | Persistence expectation | Integrity / deduplication rule |
|---|---|---|---|---|---|
| Authentication / user | user ID, profile identity, auth/onboarding status | X, Y, F, all personalized areas | X auth, account/settings actions | Server-backed session and durable account | Returning-user hydration must not overwrite a newly completed onboarding state |
| Onboarding | context, step, completion, optional-module status, destination | X/Y, F setup hub, A first run | Y-1/Y-2 and optional setup modules | Durable per user; resumable | Three reactions required; optional modules never block product access |
| Styling context | occasion, weather/calendar context, Muse request, active source | A, D, G, H | Y-1, A-5, D-2/D-4, cross-app handoffs | Session plus durable preferences/history where relevant | Preserve selected context and origin through handoffs |
| Visual reactions | reaction ID/type/order, current index, liked/passed IDs | Y-2/Y-11, F-2, recommendations | Like, Dislike, Undo | Durable event history; resumable draft | One reaction per shown outfit; Undo reverses the latest event exactly |
| Closet | item records, count, categories, drafts, selected item, last added | A/C/F/G/H/E | Add/import/edit/archive/wear/listing | Durable per user; image/file storage | Stable item IDs; add/import retry and Wishlist purchase must not duplicate items |
| Saved Looks | stable Outfit references/copies, source, saved status, filters | A/B/D/F/G/H | Save/remove/edit-copy actions | Durable per user | Repeated Save is idempotent; removing Saved Look does not remove Planner occurrences |
| Planner | dated occurrences, date/event, source Outfit, status | A/B/D/F/H | Add/change/remove occurrence, Wear, travel population | Durable and calendar-aware | Occurrence ID is distinct from Outfit ID; repeated handoff/travel add must not duplicate |
| Travel planning | trip dates, destination, occasions, day outfits, packing status | D-1/D-4/D-5 | Configure trip, assign outfits, toggle packing, add to Planner | Durable draft plus committed occurrences | Date-range population is idempotent; packing edits do not silently replace outfits |
| Wishlist | product IDs, status, needed-for Outfit IDs, goal/price change | E/F/G/C import | Save/remove/purchase/review | Durable per user | One product entity; merge `neededFor`; purchase preserves source and avoids a duplicate Closet item |
| Style Twin | mode, status, step/progress, resume screen, media/details | Y/F/H/A/G/C | Y setup/edit, processing completion | Durable; media in protected file storage | No Twin and no-photo are valid modes; in-progress resumes safely; never fabricate a face |
| Inspiration sources | uploads, screenshots, creator/source connections | Y-12, F-1/F-2 | Add/remove/connect/disconnect | Durable; media/file storage; explicit permissions | Preserve source provenance; optional connections cannot gate onboarding |
| Creator source/following | creator ID, outfit ID, follow state, source attribution | F/G/H/B/D/Studio | Follow, open outfit, Try On, reconstruct, save/plan | Durable follow and attribution metadata | Creator/outfit attribution survives every derived state; no fabricated commission data |
| Studio/current outfit | session ID, source, pieces, canvas mode, history, active variant | H, downstream B/D/A | Add/remove/reorder pieces, mode, Undo/reset, variant, save/plan/wear | Autosaved draft plus explicit durable saves | Stable source Outfit; edits are a copy unless explicitly editing; no stale hydration overwrite |
| Style Boards | board IDs, names, looks, visibility, collaboration/polls | F-10–F-13, H-8 | Create/save/share/vote | Durable with access control | Stable board/look IDs; one user vote per poll unless change is supported |
| Wear history | outfit/item, timestamp/date, occasion, feedback | A-4, C-15, C-18, F-7–F-9 | Wear/Mark Worn/feedback | Durable append-only events with corrections | One intended wear event per action; updates item/outfit facts without deleting source entities |
| Preferences / sizes | sizes, fit notes, shoes, settings, reminder/search filters | F/Y/A/G/H | F-3/F-14/Y-7/Y-10 | Durable per user/device as appropriate | Origin-aware save/cancel; partial edits do not erase existing values |
| Brand Fit | brand, category sizes, fit note | F-2/F-3/Y-7, shopping guidance | Y-7 add/edit/remove | Durable per user | One canonical brand record or explicit multiple-category record; preserve return origin |
| Shopping/product | product, retailer/source, price, condition filter, Closet overlap, affiliate context | G/E/C import, H/D missing pieces | Filter, save, purchase/import, link listing | Backend catalog plus per-user state | Stable product IDs; New/Pre-owned filters do not alter underlying Wishlist/Outfit identity |

Current prototype persistence caveat: most shared product state is in-memory demo state. Settings, simulated connections, and selected Studio state use local storage. Production must define deliberate server/local ownership and hydration ordering for every domain above.

## H. Core UX Data Contracts

### Outfit

The UI expects:

- `id`: stable across Today, Discover, Creator, Closet reconstruction, Studio, Saved Looks, and Planner.
- `image` plus accessible description; optional visual variants.
- `source`: Today, Closet, Discover, Creator, Studio, Saved Looks, Planner, or Muse.
- `creatorAttribution`: creator ID/name and source outfit ID when creator-originated.
- `name`: optional; preserve explicit user-created names. Otherwise prefer practical `context`/`occasion`.
- `context` / `occasion`: e.g. Work, Dinner, Weekend, Travel, Event, Casual.
- `pieces`: ordered piece references or snapshots containing item/product identity, role, image, name, brand, and source.
- `brands`: derived compact brand presentation where known.
- `closetCoverage`: factual count and per-piece `Owned`, `Similar Owned`, or `Missing` state.
- `missingPieces`: missing role/product references used by shopping and Wishlist.
- `savedState`: whether the stable Outfit is already in Saved Looks.
- `plannedOccurrences`: references/count, not a single boolean replacing occurrence data.
- `wearState`: wear-event references and latest feedback where relevant.
- `twinState`: render availability/mode and generated preview reference where relevant.
- `createdIn` / `origin`: return context and attribution for handoffs.

### Closet Item / Piece

Confirmed UI requirements:

- Stable `id`
- Image and accessible description
- Name/type and category
- Brand when known
- Color, pattern, and material when known
- Size/fit note where supplied
- Ownership/source (manual, photo, purchase import, Wishlist purchase)
- Purchase retailer/date/price when available
- Added timestamp and draft/processing state
- Wear count, last worn, and dated wear events
- Derived factual cost per wear
- Resale/listing state and external listing reference when used
- Optional Wishlist relationship for a purchased saved item

No unsupported production scoring property is required. The prototype contains an internal legacy readiness calculation; it is not a user-facing contract and should not be implemented as a product metric.

### Saved Look

A reusable saved Outfit reference/snapshot with its own saved-record ID, stable Outfit ID, image, pieces, source/creator attribution, optional user-created title, and created/updated timestamps. Removing it removes the reusable save only.

### Planned Outfit

A dated/event occurrence with its own occurrence ID, referenced stable Outfit/snapshot, date/time or day, occasion/event, source, status, reminder, and optional wear completion. Multiple occurrences may reference one Outfit.

**Critical rule:** Saved Look and Planned Outfit are independent. Removing a Saved Look must not remove Planner occurrences; removing an occurrence must not unsave the Outfit.

### Creator Attribution

At minimum retain `creatorId`, display name, `sourceOutfitId`, and source label through Creator → Try On → Closet reconstruction → Studio → Saved Look → Planner → missing-piece shopping. Derived outfits may add a transformation/source step, but must not erase the original attribution. No commission or payout model is implied.

### Style Twin

| Mode/state | Try On | Studio | Profile |
|---|---|---|---|
| No Twin | Offer optional setup/fallback; keep selected Outfit | Flat-lay remains usable; Twin control explains setup | Neutral optional module; no broken/fake avatar |
| Photo Twin, in progress | Preserve Outfit and route to resume/setup | Flat mode remains usable | Show finite progress/resume action |
| Photo Twin, complete | Render approved Twin preview | Twin and flat modes available | Show real configured Twin preview |
| No-photo Twin, in progress | Preserve Outfit and continue/resume details | Flat/no-photo representation remains usable | Show finite progress/resume action |
| No-photo Twin, complete | Render neutral non-face representation | No-photo Twin and flat modes available | Show neutral valid Twin state, never an invented AI face |

“In-progress” and “Complete” are lifecycle states applied to Photo or no-photo mode; “No Twin” is a valid product state, not an error.

## I. Backend/API Dependency Map

| Product area | Reads | Writes | Async processing | Real-time | Image/file needs |
|---|---|---|---|---|---|
| Authentication / Profile | session, user/profile, onboarding status | signup/login/logout, profile/settings, deletion/export request | email verification/export | Session refresh only | Profile/Twin/inspiration media |
| Closet | items, drafts, wear/listing facts, derived outfits | add/import/edit/archive/wear/link listing | image detection/background cleanup/import matching | Not required; optimistic mutation useful | Original/processed garment images |
| Outfit Recommendations | daily/contextual recommendations, alternatives, Closet coverage | feedback, accept/apply, recommendation event | recommendation generation and Closet matching | Not required for initial build | Outfit composites/previews |
| Saved Looks | saved Outfit records and details | idempotent save, edit-copy metadata, remove | None required | Not required | Outfit snapshot/reference |
| Planner / Travel | occurrences, trips, packing status, calendar context | add/change/remove occurrence, trip/packing updates, Wear | travel recommendation/population | Optional calendar synchronization | Outfit/travel imagery |
| Wishlist / Products | products, prices, retailers, availability, condition, Wishlist | save/remove/review/purchase linkage | catalog matching, price/availability updates | Optional price/availability updates | Product images |
| Creator | creator/profile/outfits/boards/follow state | follow/unfollow, content interaction | feed/profile retrieval | Optional follow/content updates | Creator avatars and outfit media |
| Style Twin | mode/status/progress/generated previews | create/update/resume/cancel | protected media processing and preview generation | Progress polling or push useful | Face/body uploads and generated previews |
| Studio | draft/current outfit, owned pieces, variants, boards | canvas mutations, autosave, variant selection, board/save/plan | optional outfit/variant generation | Not required; collaboration only if later approved | Canvas/item/Twin preview assets |
| Wear History | outfit/item wear events and aggregates | create/correct wear, feedback | Aggregate recomputation | Not required | Existing outfit/item references |
| Preferences / Brand Fit | sizes, fit notes, settings, inspiration connections | update preferences/settings/connections | Optional recommendation re-ranking | Not required | Inspiration uploads |
| Wardrobe Value / Resale | purchase/value/wear/listing facts | budget, import, listing link/status | receipt parsing/import and valuation refresh | Optional external listing updates | Receipts/product images if supported |

API design should preserve stable identifiers, idempotency keys for Save/Plan/Wishlist/import actions, source attribution, and explicit version/timestamp handling for hydration conflicts.

## J. Prototype-Only Behavior

Confirmed simulations/static behavior that must not be presented as production services:

- Recommendation, alternative-outfit, Closet-match, Muse, and variant-generation content uses predefined samples and local selection logic.
- Closet image “processing” is a finite timer-driven local simulation with sample detection/confidence data.
- Style Twin generation/progress and its resulting visuals are simulated locally; no protected media service exists.
- Creator profiles, Creator outfits, follow metrics, boards, patterns, and impact analytics are sample data.
- Discover products, prices, retailers, availability, New/Pre-owned listings, shopping results, price drops, and affiliate context are mock catalog data.
- Wishlist purchase/import and receipt-detection flows use sample purchases; there is no retailer/email/receipt integration.
- Resale platform handoff/listing connection and resale activity are simulated.
- Wardrobe value, budget, brand value, cost-per-wear examples, and Style Wrapped/Evolution summaries are static or locally derived demo analytics.
- Board collaboration, participant identities, polls, and votes are local sample state; no multi-user service exists.
- Calendar/weather awareness, reminders, notifications, and travel recommendations are illustrative settings/content without production integrations.
- Instagram, Pinterest, Gmail, and Calendar connection states are simulated; the prototype explicitly stores connection toggles locally.
- Authentication/email verification, account export/deletion, feedback submission, and legal/account operations are demonstrations only.
- Most product state resets on reload. Local persistence currently covers selected settings/connections and Studio-related demo state, not a production account model.

## K. Implementation Risk Register

### High

| Risk | Why it needs attention | Acceptance condition |
|---|---|---|
| Cross-section Outfit identity | One Outfit moves through recommendations, Creator, Closet, Studio, saves, plans, and wears | Stable Outfit ID/source survives every handoff and derived-copy rule is explicit |
| Saved Look / Planner independence | Shared visuals can tempt a single-record implementation | Deleting either entity leaves the other intact; multiple occurrences supported |
| Async hydration and optimistic mutations | Save/Plan/Wishlist/Closet actions cross domains and may race initial data | No stale hydration overwrite; idempotent writes; retries do not duplicate |
| Style Twin privacy and mode branching | Media is sensitive and five UX states affect multiple areas | Protected media lifecycle; No Twin/no-photo paths remain first-class and non-blocking |
| Creator attribution | Attribution must survive multiple transformations | Original creator/outfit source persists through Studio, saves, plans, and shopping |
| Closet add/import integrity | Photo/import/Wishlist purchase can converge on the same garment | Stable/deduplicated item, resumable processing, retry safety, explicit source |

### Medium

| Risk | Why it needs attention | Acceptance condition |
|---|---|---|
| Origin-aware Back | The same child flow has several entry points | Return destination and selected context survive refresh/deep link where supported |
| Studio canvas interactions | Undo/reset, flat/Twin modes, item tray, and source tracking share state | Deterministic history; autosave does not overwrite committed Outfit records |
| Zero-/one-item Closet recommendations | The experience must provide value without mature data | Complete outfits remain available; one item reliably anchors results |
| Travel population and packing | Range generation can duplicate Planner occurrences | Repeated add is idempotent; packing state is independent and resumable |
| Wishlist/catalog deduplication | Same product may arrive through several outfit needs or catalog sources | Stable product matching; merge needed-for references without duplicate cards |
| Onboarding resume/Undo | Reaction sequence and optional detours can be interrupted | Resume exact index; Undo reverses last event; completion guard stays correct |
| Swipe accessibility | Gesture UX needs keyboard/button parity | Like/Dislike buttons perform the same mutation and announce progress |

### Low

| Risk | Why it needs attention | Acceptance condition |
|---|---|---|
| Settings/local preferences | Mostly conventional forms/toggles | Validated persistence and dependent-setting rules |
| Neutral analytics | Aggregates are straightforward but wording matters | Facts only; no score/readiness judgment reintroduced |
| Toasts/dialogs | Shared feedback patterns need consistent semantics | Focus/close/return behavior and live announcements remain accessible |
| Visual filters/chips | Primarily UI state | One canonical selection model with accessible pressed state |

## L. Do Not Lose During Build

- Show complete outfits from Day 1.
- Do not require Closet data for Today, Discover, Save, Planner, or Studio inspiration.
- Do not require a Style Twin; preserve no-photo Twin as a first-class option.
- Learn visually through reactions, saves, wears, Closet, Creator, Studio, and Wishlist behavior.
- Keep minimum onboarding to one practical context plus three outfit reactions.
- Do not add taxonomy-heavy questionnaires, Style Score, Closet Readiness, completion grades, or fashion rankings.
- Keep brands visible with outfit pieces where useful.
- Preserve Try On and Make From My Closet as distinct, contextual actions.
- Preserve Owned / Similar Owned / Missing terminology and factual coverage counts.
- Preserve Creator/source attribution across every outfit handoff.
- Keep missing-piece shopping intentional and linked to an Outfit need.
- Keep Saved Look and Planner occurrence independent.
- Keep Add Item persistent and make one owned item useful immediately.
- Keep Today, Closet, Planner, Discover, Profile as the only five global tabs.
- Keep Studio contextual and child/detail screens origin-aware with Back.
- Keep analytics neutral and factual.
- Keep empty states visual, short, and actionable; zero data must not mean zero product.
- Keep destructive confirmations and accessible focus, progress, selection, and swipe alternatives.

## M. Stakeholder Review Checklist

### Onboarding

- Is one practical context plus three visual reactions enough to reach value?
- Are Twin, Closet, and inspiration clearly optional?
- Does the experience learn without asking users to describe an aesthetic taxonomy?

### First Outfit

- Does Today communicate the recommended outfit and next action immediately?
- Are Try On, Make From My Closet, Save, Plan, and Wear understandable without explanation?

### Closet

- Is an empty Closet still useful and inspiring?
- Does one item immediately unlock credible outfits?
- Is Add Item persistent without making inventory administration dominate?

### Planner

- Is the difference between a Saved Look and a dated planned occurrence clear?
- Are changing, removing, and wearing an occurrence predictable?

### Discover

- Does the outfit feed lead before products and shopping utilities?
- Are Style Check and Closet overlap useful before buying?

### Creator

- Do real Creator outfits lead before analysis/patterns?
- Is the Creator/source still visible after Try On, reconstruction, save, and planning?

### Try On

- Does Try On remain useful with Photo Twin, no-photo Twin, and No Twin?
- Is setup optional and does the chosen Outfit remain selected through setup?

### Studio

- Is the outfit canvas visually dominant and understandable in flat and Twin modes?
- Are item source, Undo/reset, review, Save, Plan, and Wear behavior clear?

### Shopping Missing Pieces

- Is each shopping suggestion tied to a specific missing role/outfit?
- Are Owned/Similar Owned alternatives shown before unnecessary buying?

### Profile

- Does Profile feel like a visual personal hub rather than a score/dashboard?
- Are My Looks, Closet, My Style, Wishlist, Twin, creators, and utilities appropriately prioritized?

### Wishlist

- Is there one canonical Wishlist entity across Profile, Discover, shopping, and budget?
- Does saving the same product for multiple outfits merge rather than duplicate?

### Travel

- Do travel days, packing, missing pieces, and Planner occurrences form one coherent flow?
- Can the trip be added/revisited without duplicating planned days?

## N. Final Regression

Final closure verification:

- Complete Playwright suite: **306/306 passed** using one worker across desktop Chromium and 375×812 mobile.
- Focused WP-20 acceptance coverage retained in the suite: **18/18 passed** across desktop/mobile.
- Canonical screens: **101 unique**.
- Duplicate IDs: **0**.
- Unresolved internal targets: **0**.
- Broken images: **0**.
- Images missing alt attributes: **0**.
- Console errors during the final browser audit: **0**.
- Accidental canonical-screen overflow at 375×812: **0**.
- Narrower 360×800 spot-check overflow: **0**.
- Bottom navigation on all five primary screens: **Today · Closet · Planner · Discover · Profile**, in that exact order, with no Studio tab.
- WP-20 changed/verified audit remains **22 changed / 79 intentionally unchanged**; this closure review found no clear UX blocker requiring another prototype edit.

## O. Design Waves Closure

**The StyleIQ Design Waves series is closed at WP-20.**

The next project phase is:

**Stakeholder Review & Implementation Handoff**

This document is the bridge into that phase. It does not begin implementation, create a WP-21, or authorize speculative redesign. Future design changes should enter review as a Design Fix, UX Refinement, or Stakeholder Change Request.
