# StyleIQ — Screen Specification

**Document type:** Product and UX screen reference  
**Source:** `index(2).html`, MyStyleIQ UX Brief v4, and Product & UX Deep-Dive  
**Naming version:** X–Z and A–G screen system  
**Prepared:** 17 July 2026

## 1. Purpose

This document describes the intent, visible content, actions, navigation, and important implementation behavior of every screen in the current StyleIQ prototype. It is a screen specification, not a set of user stories and not a final API contract.

The prototype contains sample names, products, prices, weather, dates, scores, and wardrobe statistics. During development, these values should come from the relevant user, wardrobe, recommendation, shopping, planner, and profile data sources rather than being treated as fixed content.

## 2. Product-wide behavior

- **Muse** is the styling assistant and explains recommendations in human, supportive language.
- **Closet Readiness** represents how much useful wardrobe information StyleIQ currently has. It should be recalculated as items are added, edited, archived, or removed.
- **Style Twin** represents the user's visual and fit profile. It is created from photos and preferences and can be edited later.
- **Style Check** evaluates a product or inspiration piece against the user's Style DNA and existing closet before purchase.
- **Pre-owned results** can come from StyleIQ community members or external resale platforms. Checkout and sale management remain external in the current concept.
- **Wishlist** is more than a saved-products list: it stores compatibility, similarity, gap value, collections, notes, and review reminders.
- **Primary navigation** is Today, Closet, Planner, Discover, and Profile.
- Screens should preserve one obvious primary action, reduce data-entry effort, and show an immediate personal payoff whenever possible.
- Back navigation should return to the originating screen without losing entered or selected data.
- Loading, empty, error, permission-denied, offline, and retry states are required in production even when the static prototype only shows the success state.

## 3. Screen registry

| Section | Area | Screens |
|---|---|---:|
| X | Core Entry | 2 |
| Y | Build Your Style Twin | 18 |
| Z | Realistic Closet Growth previews | 2 |
| A | Daily Outfit Loop | 6 |
| B | Saved Looks | 2 |
| C | Closet Notes and Item Management | 17 |
| D | Planner and Packing | 5 |
| E | Legacy Discover, Savings, Import, and Resale | 10 |
| F | Profile / My Atelier | 13 |
| G | Shopping Scan, Wishlist, and Intentional Buying | 12 |
| **Total** |  | **87** |

---

# Section X — Core Entry

## X-1 — Welcome to StyleIQ

- **Purpose:** Introduces the product promise and gives new or returning users a clear entry point.
- **Main content:** Editorial wardrobe image, StyleIQ and Atelier branding, the headline “Your personal style, made easier,” and a short explanation of closet understanding and outfit discovery.
- **Actions:** `Get Started` opens X-2. The returning-user login link currently also points to X-2 in the prototype.
- **Development notes:** Production must distinguish sign-up and sign-in routes. Preserve the editorial image overlay, readable contrast, and fast first render.

## X-2 — Create Your Account

- **Purpose:** Creates or accesses an account before personalization begins.
- **Main content:** Apple, Google, and email authentication options; Terms and Privacy acknowledgement; returning-user login link.
- **Actions:** Successful authentication continues to Y-1. The prototype login link points to A-1 as a returning-user shortcut.
- **Development notes:** Implement provider errors, cancelled OAuth, existing-account detection, email verification/OTP if selected, legal links, session creation, and restoration of the user's last valid destination.

---

# Section Y — Build Your Style Twin

This section captures who is being styled, visual fit inputs, and personal preferences. Draft progress should be saved after every completed step so the user can safely leave and continue later.

## Y-1 — Meet Muse

- **Purpose:** Introduces Muse before asking for personal information.
- **Main content:** Muse portrait, onboarding progress `1 of 5`, and the promise of styling that starts with what the user already owns.
- **Action:** `Let's Begin` opens Y-2.
- **Development notes:** Show this introduction only when appropriate for first-time onboarding; returning users should not be forced through it again.

## Y-2 — Who Are We Styling?

- **Purpose:** Selects the initial profile context.
- **Main content:** Women's, Men's, Both / Shared Wardrobe, and Styling for Someone Else options.
- **Action:** Selecting a profile and continuing opens Y-3.
- **Development notes:** Persist the selected profile type. A shared or additional-person profile will require profile ownership, switching, consent, and data-separation rules beyond the static prototype.

## Y-3 — Create Your Style Twin

- **Purpose:** Explains why StyleIQ needs more than a single photo and previews the Style Twin flow.
- **Main content:** Benefits: looks styled around the user, realistic visualization, and better color, fit, and style guidance.
- **Actions:** `Let's Start` opens Y-4; the user can go back to Y-2.
- **Development notes:** This is an explanatory consent moment. Photo use, storage, deletion, and AI-processing information should be accessible before capture begins.

## Y-4 — Face Photos

- **Purpose:** Collects front, left, and right face references for the Style Twin.
- **Main content:** Step `1 of 7`, capture guidance, main preview, angle thumbnails, and photo-quality tips.
- **Actions:** Inspect/replace each angle; `Continue` opens Y-5.
- **Development notes:** Validate required angles, image quality, face presence, lighting, and duplicates. Support camera permission, gallery fallback, retake, upload progress, and explicit deletion.

## Y-5 — Body Photos

- **Purpose:** Captures body proportions from front, side, back, and 45-degree angles.
- **Main content:** Step `2 of 7`, fitted-clothing guidance, main preview, four angle references, and tips.
- **Actions:** Inspect/replace angles; `Continue` opens Y-6.
- **Development notes:** Validate framing and full-body visibility without making medical or body-value judgments. Apply the same privacy, upload, retake, and deletion controls as Y-4.

## Y-6 — Your Details

- **Purpose:** Collects structured attributes that improve sizing and fit interpretation.
- **Main content:** Height, date of birth, gender, and usual clothing fit: Slim, True to size, Relaxed, or Oversized.
- **Action:** `Continue` opens Y-7.
- **Development notes:** Localize units and date format, allow inclusive gender handling, define required versus optional fields, validate age rules, and store fit preference separately from inferred body data.

## Y-7 — Body Shape

- **Purpose:** Lets the user select the silhouette that most closely represents them.
- **Main content:** Hourglass, Pear, Rectangle, and Inverted Triangle cards with a selection indicator.
- **Action:** Select one silhouette and continue to Y-8.
- **Development notes:** The copy should remain neutral and optional. Confirm whether one selection is required and whether the available shapes must vary by the profile selected in Y-2.

## Y-8 — Hair Details

- **Purpose:** Adds hair information to the Style Twin's appearance profile.
- **Main content:** Hair length, color swatches, and usual styling: Open, Up, or Half Up.
- **Action:** Choose values and continue to Y-9.
- **Development notes:** Define single- versus multi-select behavior, accessible names for color swatches, and an “Other / Not listed” path if production needs broader coverage.

## Y-9 — Shoe Preferences

- **Purpose:** Captures the footwear and heel heights the user is realistically comfortable wearing.
- **Main content:** Flats/Sneakers, Low Heel, Mid Heel, High Heel, and Boots.
- **Action:** Select footwear preferences and continue to Y-10.
- **Development notes:** The UI suggests multiple selections. Store comfort and usage preferences for recommendation filtering rather than treating them as strict exclusions unless the user chooses that behavior.

## Y-10 — Style Preferences

- **Purpose:** Seeds the initial Style DNA before the closet is fully populated.
- **Main content:** Visual cards for Classic, Minimal, Chic, Elegant, Edgy, Boho, Romantic, Sporty, and Trendy; maximum three selections.
- **Action:** `Create My Twin` starts Y-11.
- **Development notes:** Enforce the three-item maximum with clear feedback. Save both selected styles and later behavioral signals so the profile can evolve rather than remain fixed.

## Y-11 — Creating Your Style Twin

- **Purpose:** Communicates processing progress while StyleIQ builds the first Style Twin.
- **Main content:** Progress percentage and stages for face details, body details, proportions, and completion.
- **Actions:** When processing succeeds, `Reveal My Style Twin` opens Y-12. The prototype includes a simulation control.
- **Development notes:** Replace simulated timing with job status. Provide retry, recoverable failure, partial-upload handling, safe cancellation, and notification/background completion for long processing.

## Y-12 — Meet Your Style Twin

- **Purpose:** Reveals the generated result and confirms that the fit profile is ready.
- **Main content:** Style Twin visual, “100% Calibrated” status, and completion message.
- **Actions:** `Explore Looks` opens Y-13; `Edit My Twin` returns to Y-3.
- **Development notes:** Editing should preserve existing inputs. “100% Calibrated” should only be shown if a real calibration model supports that claim; otherwise use a product-defined readiness state.

## Y-13 — Start With Your Favorites

- **Purpose:** Prevents full-closet onboarding from feeling like a large setup task.
- **Main content:** Closet Readiness, category targets for tops, bottoms, shoes, and outerwear, plus reassurance that a few essentials are enough to begin.
- **Actions:** `Add My First Item` opens Y-14; `I'll build it later` opens Y-18.
- **Development notes:** Targets should be configurable and personalized. Skipping must not block the core product, but recommendations should explain their current confidence level.

## Y-14 — Add One Item

- **Purpose:** Captures the first wardrobe item with minimal effort.
- **Main content:** Flat-lay, hanger, and mannequin examples; guidance against crowded or dark photos.
- **Actions:** Camera or gallery proceeds to Y-15.
- **Development notes:** Support permission handling, upload progress, image validation, retake, compression, HEIC conversion where needed, and accessible alternatives.

## Y-15 — Item Style Check

- **Purpose:** Shows that StyleIQ is cleaning and classifying the uploaded item.
- **Main content:** Original and cleaned views; stages for background, category, color, fabric, and season detection.
- **Action:** Completion proceeds to Y-16.
- **Development notes:** Use real processing state and confidence values. Low-confidence properties should be highlighted for confirmation rather than silently accepted.

## Y-16 — Confirm Your Item

- **Purpose:** Lets the user verify and lightly correct extracted item data.
- **Main content:** Category, color, pattern, material clarification, and use/season tags such as Autumn, Work, and Smart Casual.
- **Actions:** `Add to My Closet` opens Y-17; `Edit Photo` returns to Y-14.
- **Development notes:** Define controlled taxonomies, support multi-select tags, retain the original image, and log user corrections to improve future classification.

## Y-17 — Closet Progress Celebration

- **Purpose:** Gives an immediate reward after the first item is saved.
- **Main content:** Updated readiness percentage and category counts, compatibility guidance, and a Muse note.
- **Actions:** Add another item via Y-14 or preview value via Y-18.
- **Development notes:** Counts and readiness must update from the saved closet item. Avoid celebratory values that are not derived from actual data.

## Y-18 — Your First Style Snapshot

- **Purpose:** Ends onboarding with a useful style direction even when wardrobe data is still limited.
- **Main content:** Early identity such as Elevated Minimal, palette notes, style tags, a starter outfit direction, and an explicit low-readiness indicator.
- **Action:** `Explore My StyleIQ` opens A-1.
- **Development notes:** Clearly distinguish inferred early guidance from mature Style DNA. The snapshot should refresh as more items and feedback are collected.

---

# Section Z — Realistic Closet Growth Previews

These screens demonstrate progressive closet growth behavior. Product should confirm whether they remain user-facing screens or become reusable patterns embedded elsewhere.

## Z-1 — Closet Readiness Preview

- **Purpose:** Explains what additional closet coverage unlocks.
- **Main content:** Current coverage, next-category recommendation, and milestone benefits at 20%, 40%, 60%, and 80%.
- **Action:** `Add One Item` opens Y-14.
- **Development notes:** Milestones and benefits must match real feature gating. Do not promise an unlock that the implemented recommendation engine does not provide.

## Z-2 — Natural Closet Prompts Preview

- **Purpose:** Demonstrates non-blocking prompts that grow the closet in context.
- **Main content:** Prompt examples after an outfit, saved look, trip plan, and worn-today event.
- **Actions:** Each add action opens Y-14; `Back to Today` opens A-1.
- **Development notes:** In production, these should be event-driven reusable cards with dismiss, snooze, frequency limits, and deduplication.

---

# Section A — Daily Outfit Loop

## A-1 — Today / Morning Outfit

- **Purpose:** Main daily habit screen and primary recommendation surface.
- **Main content:** Greeting, weather and day context, Muse rationale, Ask Muse entry, recommended outfit, extra-piece count, and primary navigation.
- **Actions:** Outfit details A-2, alternatives A-3, wear/feedback A-4, save to B-1, Ask Muse A-5.
- **Development notes:** Recommendation should combine current closet availability, weather, calendar/occasion, fit, preferences, recent wear, laundry/availability if supported, and feedback history. Define fallback when no complete look can be generated.

## A-2 — Outfit Details

- **Purpose:** Builds trust by explaining the chosen look.
- **Main content:** Occasion, weather, outfit imagery, “Why This Works,” color profile, wardrobe pieces, and closet-versatility insight.
- **Actions:** Wear the look via A-4 or see A-3 alternatives; back to A-1.
- **Development notes:** Every displayed piece should reference a real closet item. Explanation text must be grounded in the recommendation inputs and not invent materials or compatibility.

## A-3 — Alternatives

- **Purpose:** Offers controlled alternatives without restarting outfit discovery.
- **Main content:** Relaxed, warmer, and more polished variations with supporting piece descriptions.
- **Action:** Choose a variation and continue to A-4.
- **Development notes:** Preserve the original context and record which alternative was selected. Alternatives should differ on a meaningful axis, not merely imagery.

## A-4 — Outfit Feedback

- **Purpose:** Captures explicit preference signals after a recommendation.
- **Main content:** Love This, Not Today, Too Formal, Too Casual, Save for Later, and optional free-text feedback.
- **Action:** `Send to Muse` saves feedback and returns to A-1.
- **Development notes:** Define whether multiple chips can be selected. Store feedback against recommendation, outfit, occasion, weather, and individual pieces so future styling can use it.

## A-5 — Ask Muse Quick Action

- **Purpose:** Starts a styling request quickly from common intents or a custom question.
- **Main content:** Shortcuts for today's outfit, styling an item, packing, wardrobe gaps, and formality adjustment, plus a custom query.
- **Actions:** Most shortcuts and custom Ask open A-6; packing opens D-4; back to A-1.
- **Development notes:** Intent routing should preserve the originating item/context. Add input validation, response loading, failure/retry, and safe limits for unsupported questions.

## A-6 — Muse Styling Plan

- **Purpose:** Returns an actionable styling answer and optionally fills a missing wardrobe piece.
- **Main content:** Muse explanation, curated outfit, owned/missing items, New/Pre-owned filters, StyleIQ-community filter, external marketplace results, empty results, and plan actions.
- **Actions:** Save missing pieces to G-8, open external listings, apply via A-4, save the plan, or ask another question via A-5.
- **Development notes:** Separate owned items from shopping recommendations; label affiliate/external results; preserve filter state; validate external links; support sold/unavailable listings; never imply StyleIQ processes an external transaction.

---

# Section B — Saved Looks

## B-1 — Saved Looks

- **Purpose:** Provides a reusable library of outfits the user chose to keep.
- **Main content:** Category filters and saved-look cards for work, weekend, evening, and travel.
- **Actions:** Open B-2 details or linked outfit details; use primary navigation.
- **Development notes:** Support search/filter, empty state, pagination or lazy loading, and stable saved snapshots even if a source item is later edited or archived.

## B-2 — Saved Look Detail

- **Purpose:** Explains and reuses one saved outfit.
- **Main content:** Image, reason saved, best occasion, weather range, and related closet pieces.
- **Actions:** Wear, add to D-1 planner, or remove the save.
- **Development notes:** Confirm destructive removal; show unavailable/archived pieces; adding to planner should request a date if no planning context exists.

---

# Section C — Closet Notes and Item Management

## C-1 — My Closet

- **Purpose:** Closet dashboard showing progress and the next useful action.
- **Main content:** Readiness, category coverage, recently added pieces, wardrobe direction, and a Closet Note.
- **Actions:** Browse C-6, add C-2, view notes C-13, or use primary navigation.
- **Development notes:** Metrics must update from active items. Make category counts and recommendations explainable and handle a brand-new empty closet.

## C-2 — Add to My Closet

- **Purpose:** Starts the standard item-add flow.
- **Main content:** Capture guidance and photo-source options.
- **Actions:** Camera/gallery opens C-3; manual entry currently jumps to C-5 in the prototype.
- **Development notes:** Manual entry needs its own form or must route to an editable confirmation screen, not directly to success. Reuse upload requirements from Y-14.

## C-3 — Preparing Your Item

- **Purpose:** Cleans the image and extracts wardrobe metadata.
- **Main content:** Original/clean views and detection stages for background, image quality, category, color, pattern, and material.
- **Action:** Completion opens C-4.
- **Development notes:** Implement asynchronous status, confidence, retry, cancel, and a failure route. Preserve both source and processed assets according to privacy policy.

## C-4 — Confirm Your Item

- **Purpose:** Reviews extracted data and warns about likely duplicates.
- **Main content:** Category, color, pattern, estimated brand/material, clarification choices, and similarity warning.
- **Actions:** Save to C-5, edit photo via C-2, or save draft and return to C-1.
- **Development notes:** Drafts need a recoverable status. Similarity should show confidence and comparison evidence; it should advise, not block saving.

## C-5 — Item Added

- **Purpose:** Confirms save and demonstrates immediate closet value.
- **Main content:** Readiness change, category count, and outfit compatibility.
- **Actions:** See ideas via C-14, add another via C-2, or return to C-1.
- **Development notes:** The current `See Outfit Ideas` destination is a wardrobe-opportunity screen rather than outfit ideas; confirm the intended destination before implementation.

## C-6 — Browse My Closet

- **Purpose:** Searchable, filterable inventory of wardrobe pieces.
- **Main content:** Search, category/status chips, item cards, wear recency, favorite state, and navigation.
- **Actions:** Filters open C-12 in the prototype; item cards open C-7.
- **Development notes:** Decide whether C-12 is a global filter drawer or item-edit screen—the prototype combines both concepts. Support sorting, empty results, lazy loading, and archived-item handling.

## C-7 — Item Details

- **Purpose:** Single source of truth for an owned wardrobe item and its resale state.
- **Main content:** Item attributes, wears, added/last-worn dates, compatible and similar pieces, external listing platform/price/status, and item actions.
- **Actions:** Edit C-12, mark worn C-15, use in A-1, archive to C-6, sell via C-8, edit listing via C-10, mark sold/remove listing, or open the external listing.
- **Development notes:** Confirm archive and listing removal; protect against stale external status; maintain wear history; define sold-item behavior in the active closet; external URLs must be validated.

## C-8 — Prepare Your Listing

- **Purpose:** Converts closet data into a resale-ready listing draft.
- **Main content:** Item preview, attributes, condition, original price, suggested range, asking price, and generated description.
- **Action:** `Choose Selling Platform` opens C-9.
- **Development notes:** User must be able to edit all generated values. Define price currency, condition taxonomy, disclosure requirements, image export, and what data is shared externally.

## C-9 — Choose Where to Sell

- **Purpose:** Selects an external marketplace.
- **Main content:** Poshmark, Depop, Vestiaire Collective, Grailed, eBay, and Other platform with audience descriptions.
- **Actions:** Select platform, continue to C-10, or copy listing details.
- **Development notes:** Marketplace availability should depend on country/category. Copy/export must include text and images where supported. The CTA label must update to the selected platform.

## C-10 — Link Your Listing

- **Purpose:** Connects a listing created outside StyleIQ back to the closet item.
- **Main content:** Platform, external URL, asking price, and Active status.
- **Actions:** Save to C-11 or do later and return to C-7.
- **Development notes:** Validate URL/domain, prevent duplicate links, store normalized platform and price, and define manual versus automated status synchronization.

## C-11 — Listing Connected

- **Purpose:** Confirms that an external listing is discoverable in StyleIQ pre-owned results.
- **Main content:** Connected state, marketplace name, and reminder that purchase completes externally.
- **Actions:** Open external listing or return to C-6.
- **Development notes:** Only claim discoverability after the listing is successfully indexed. Provide an error/pending state when indexing fails or moderation is required.

## C-12 — Filters & Edit Item

- **Purpose:** Current prototype combines closet filters with editable item attributes.
- **Main content:** Category, season, recency/favorite filters, and favorite toggle.
- **Actions:** Save to C-7 or cancel to C-6.
- **Development notes:** This is conceptually ambiguous. Split global closet filters from item editing in production, or clearly change fields based on entry context.

## C-13 — Closet Notes

- **Purpose:** Summarizes wardrobe direction, strengths, gaps, and underused pieces.
- **Main content:** Style direction, strongest categories, opportunity area, and underused count.
- **Actions:** Explore gaps C-14, underused pieces C-16, or return to C-1.
- **Development notes:** Notes should include an “as of” time and be regenerated after meaningful closet changes.

## C-14 — Wardrobe Gaps & Opportunities

- **Purpose:** Explains categories that could unlock more outfits without forcing a purchase.
- **Main content:** Versatile bottoms, everyday shoes, and light-layer opportunities with estimated combination value.
- **Actions:** Save an opportunity for later, explore when ready, or view C-6 closet.
- **Development notes:** “Keep this in mind” needs a defined saved-opportunity state. Recommendations must account for existing similar items and user budget.

## C-15 — Mark as Worn

- **Purpose:** Records real usage to improve cost-per-wear and future recommendations.
- **Main content:** Date, occasion, and optional note.
- **Actions:** Save or cancel back to C-7.
- **Development notes:** Support past dates, duplicate-wear prevention/editing, timezone, and optional linkage to a complete outfit rather than only one item.

## C-16 — Underused Pieces

- **Purpose:** Helps revive or resell items that have not been worn recently.
- **Main content:** Underused cards with last-worn age and actions to style or sell.
- **Actions:** Style via A-1, sell via C-8, or return to C-13.
- **Development notes:** Styling should pass the selected item into the recommendation request. “Underused” thresholds should be seasonal and configurable, not a universal number of days.

## C-17 — Natural Closet Growth Prompts

- **Purpose:** Demonstrates contextual, optional item-add prompts.
- **Main content:** Prompts after outfits, saved looks, trip planning, and wear logging.
- **Actions:** Add through C-2 or dismiss where offered.
- **Development notes:** Implement as reusable event-based components with frequency caps, persistent dismissal, deduplication, and analytics—not as one required destination screen.

---

# Section D — Planner and Packing

## D-1 — Planner Home

- **Purpose:** Weekly view of scheduled events, planned outfits, and travel preparation.
- **Main content:** Date strip, event cards, planned and unplanned looks, weather, and packing entry.
- **Actions:** Plan D-2, open detail D-3, pack D-4, or use primary navigation.
- **Development notes:** Define calendar permission/sync, timezone, all-day events, conflict handling, and behavior when weather or calendar data is unavailable.

## D-2 — Plan a Look

- **Purpose:** Generates an outfit for a selected date and occasion.
- **Main content:** Date, occasion chips, forecast, and Muse recommendation rationale.
- **Action:** `Create My Look` opens D-3.
- **Development notes:** Date and occasion must be editable and passed into generation. Avoid presenting a completed recommendation before the generation action unless it is explicitly a preview.

## D-3 — Planned Look Detail

- **Purpose:** Reviews and manages a scheduled outfit.
- **Main content:** Date, occasion, weather, selected outfit, piece description, and rationale.
- **Actions:** Wear via A-4, change via D-2, or remove and return to D-1.
- **Development notes:** Confirm removal, preserve event association, and detect pieces that become unavailable before the planned date.

## D-4 — Packing Edit

- **Purpose:** Collects trip context for a coordinated capsule.
- **Main content:** Destination, duration/date range, occasions, expected weather, and capsule promise.
- **Action:** `Build My Packing Plan` opens D-5.
- **Development notes:** Validate dates/destination, fetch forecast when available, allow manual weather context, and support multiple occasion selections and laundry/re-wear preferences.

## D-5 — Travel Wardrobe Plan

- **Purpose:** Presents a day-by-day travel capsule and packing checklist.
- **Main content:** Destination summary, weather, daily outfits, seven-piece capsule, and grouped checklist.
- **Actions:** Add schedule to D-1 or edit via D-4.
- **Development notes:** Avoid double-booking unavailable items, allow checklist completion and substitutions, and persist the trip as an editable entity.

---

# Section E — Legacy Discover, Savings, Import, and Resale

Section E is labeled “Discover (Old)” in the current jump navigation, while G is the newer shopping/discovery experience. Do not develop both as competing primary Discover homes without a product decision. Features retained from E can be linked from G or Profile.

## E-1 — Discover Home

- **Purpose:** Legacy hub for editorial discovery, wishlist, savings, purchase import, resale, and complete-the-look.
- **Main content:** Weekly feature, utility cards, closet-inspired content, and thoughtful additions.
- **Actions:** E-2, E-3, E-5, E-7, E-10, and primary navigation.
- **Development notes:** Determine whether this screen is retired, merged into G-1, or retained as a secondary Insights hub.

## E-2 — Complete This Look

- **Purpose:** Identifies one missing item that could expand an existing look.
- **Main content:** Owned pieces, Muse note, missing-piece suggestion, and estimated new combinations.
- **Actions:** See similar options or save the idea; return to E-1.
- **Development notes:** Both buttons are prototype-only and need explicit destinations or behavior. G-10 is the more complete modern version of this feature.

## E-3 — Wishlist Main

- **Purpose:** Legacy wishlist showing unlock value and price changes.
- **Main content:** Saved products, price, compatibility/unlock score, sale indicator, and search.
- **Actions:** Open E-4 evaluation; return to E-1.
- **Development notes:** Consolidate with G-8 to avoid two wishlist data models and two detail flows.

## E-4 — Before You Buy Evaluation

- **Purpose:** Evaluates a wishlist purchase for versatility, color, duplicates, and closet fit.
- **Main content:** Compatibility score, outfit unlock estimate, synergy, duplicate risk, and Muse recommendation.
- **Actions:** Simulate in C-1 or check E-5 savings; back to E-3.
- **Development notes:** “Simulate Purchase” currently routes to Closet Home without a visible simulation. Define a preview state and avoid implying certainty from heuristic scores.

## E-5 — Savings Portal

- **Purpose:** Tracks progress toward an intentional purchase using budget and resale funds.
- **Main content:** Purchase goal, progress, resale balance, and monthly allocation.
- **Actions:** Configure E-6 or open E-10 resale tracker; back to E-1.
- **Development notes:** Decide whether balances represent real money, manually tracked values, or estimates. Financial wording and transaction handling require clear legal/product scope.

## E-6 — Budget Configurator

- **Purpose:** Sets a monthly wardrobe budget and resale allocation preference.
- **Main content:** Monthly amount, range, investment-frequency estimate, and auto-allocation toggle.
- **Action:** Save and return to E-5.
- **Development notes:** Store currency and locale, validate limits, explain calculations, and clarify that “auto-allocation” is virtual unless real wallet infrastructure exists.

## E-7 — Import Order History

- **Purpose:** Requests permission to find fashion purchases in email receipts.
- **Main content:** Supported-brand examples and Gmail connection explanation.
- **Action:** Connect and continue to E-8.
- **Development notes:** Use least-privilege OAuth, clear consent, provider review requirements, revocation, privacy retention, duplicate detection, and non-Gmail alternatives.

## E-8 — Detected Purchases

- **Purpose:** Reviews purchases found during receipt import before adding them to the closet.
- **Main content:** Scan result, selectable purchase cards, receipt date, and price.
- **Action:** Import selected items to C-1.
- **Development notes:** Provide selection controls, item-level correction, duplicate matching, image sourcing rules, partial failures, and an import summary.

## E-9 — Brand Value Notes

- **Purpose:** Compares brand value using closet share and wear frequency.
- **Main content:** Dominant brand, investment share, average wear rate, and value labels.
- **Action:** Back to E-1.
- **Development notes:** Define calculation period and cost-per-wear inputs. Avoid judging a brand from incomplete purchase prices or wear logs.

## E-10 — Resale & Marketplace Tracker

- **Purpose:** Summarizes resale wallet value and listed/sold items.
- **Main content:** Balance, intended wishlist use, item statuses, price, views, and sold date.
- **Action:** Back to E-1.
- **Development notes:** Reconcile with the external-listing flow C-8–C-11. Views and sale status require platform APIs or manual updates; do not display fabricated live metrics.

---

# Section F — Profile / My Atelier

## F-1 — Profile / My Atelier

- **Purpose:** Personal hub for style identity, progress, history, settings, and social boards.
- **Main content:** User identity, Muse message, Style Score, Style DNA, history, story, wrapped, boards, resale activity, preferences, and closet readiness.
- **Actions:** Opens F-2 through F-10, E-10, Style Twin editing, C-1, and primary navigation.
- **Development notes:** Personalize module order and hide unavailable modules gracefully. The Closet Readiness card visually references F-4 but its current card link points to C-1; align destination.

## F-2 — My Style Profile

- **Purpose:** Summarizes the user's current style identity and evidence.
- **Main content:** Identity label, confidence score, silhouettes, palette, and active occasion groups.
- **Action:** Fine-tune preferences; back to F-1.
- **Development notes:** `Fine-Tune My Style` needs a defined edit flow, likely Y-10 or a dedicated profile editor. Explain how the identity changes over time.

## F-3 — Preferences & Sizes

- **Purpose:** Maintains brands, sizes, fit preferences, and shopping comfort zone.
- **Main content:** Brand list, category-specific sizing, tops/bottoms fit, and investment preference.
- **Action:** Update preferences; back to F-1.
- **Development notes:** The update action has no prototype destination. Implement editable fields, regional size conversion, brand-specific sizing, validation, and save feedback.

## F-4 — Closet Readiness

- **Purpose:** Detailed wardrobe-health overview.
- **Main content:** Readiness, category balance, sleeping items, most-worn item, and a recommendation connecting resale to a wardrobe gap.
- **Actions:** Cost per wear, similar pieces, seasonal audit, and Discover.
- **Development notes:** Three routes are mislabeled in the prototype: `View Cost Per Wear` opens C-13 Closet Notes; `Check Similar Pieces` opens C-12 Filters/Edit; `Start Seasonal Audit` opens C-14 Opportunities. Create the missing features or rename/re-route these actions before development.

## F-5 — Style Score

- **Purpose:** Shows an overall progress score and its contributing dimensions.
- **Main content:** Score, monthly change, versatility, cost efficiency, and sustainability.
- **Action:** Back to F-1.
- **Development notes:** Publish a stable scoring definition, data sufficiency state, update cadence, and explanations for score changes. Avoid false precision.

## F-6 — Style DNA Deep Profile

- **Purpose:** Provides a deeper narrative of the user's evolving taste.
- **Main content:** Core identity, descriptive explanation, silhouette, color essence, and preferred fabric profiles.
- **Action:** Back to F-1.
- **Development notes:** Derive claims from selected preferences and behavior; allow correction and show that Style DNA evolves.

## F-7 — Outfit History Timeline

- **Purpose:** Personal archive of worn/logged outfits and ratings.
- **Main content:** Chronological outfit entries with dates and ratings.
- **Action:** Back to F-1.
- **Development notes:** Add entry detail, pagination, filtering, edit/delete, missing-image handling, and clear distinction between planned, recommended, and actually worn outfits.

## F-8 — Style Story

- **Purpose:** Turns wardrobe behavior into a positive evolution narrative.
- **Main content:** Active chapter, narrative change, active-piece count, and timeline-entry count.
- **Actions:** View F-7 timeline; back to F-1.
- **Development notes:** Narrative claims must be grounded in historical changes and should not appear until enough data exists.

## F-9 — Style Wrapped

- **Purpose:** Shareable annual recap of wardrobe behavior and value.
- **Main content:** Most-worn brand and cost-per-wear champion.
- **Action:** Back to F-1.
- **Development notes:** Define recap period, eligibility threshold, privacy/share behavior, and cost-per-wear formula. Add an insufficient-data state.

## F-10 — Style Boards Hub

- **Purpose:** Lists private or collaborative boards and active outfit polls.
- **Main content:** Search and board card with collaborator, item count, and poll status.
- **Action:** Open F-11; back to F-1.
- **Development notes:** Support create board, permissions, invites, ownership, search, empty state, and archived boards.

## F-11 — Style Board Collaboration

- **Purpose:** Shared planning space with collaborator presence and an active poll.
- **Main content:** Board title, members, poll question, and closing time.
- **Action:** Open F-12 poll; back to F-10.
- **Development notes:** Enforce board roles, invitation acceptance, real-time or refresh behavior, poll expiry, notifications, and content moderation/reporting.

## F-12 — Outfit Poll Details

- **Purpose:** Shows poll choices and current results.
- **Main content:** Question, two outfit options, percentages, vote counts, and share/participate CTA.
- **Action:** Open F-13 participant view; back to F-11.
- **Development notes:** Define whether the creator can vote, when results are visible, tie/expiry behavior, secure share links, and duplicate-vote prevention.

## F-13 — Poll Participant Vote

- **Purpose:** Simple participant-facing vote flow.
- **Main content:** Host context, two visual options, and submit CTA.
- **Actions:** Select one option, submit, then return to F-12.
- **Development notes:** Require one selection, show submitted/expired/already-voted states, and determine whether external participants need authentication.

---

# Section G — Shopping Scan, Wishlist, and Intentional Buying

## G-1 — Discover

- **Purpose:** New intentional-shopping home and the primary Discover destination.
- **Main content:** Style Check, Complete Your Look, New/Pre-owned results, StyleIQ-community filtering, wishlist summary, wardrobe opportunity, empty-result treatment, and primary navigation.
- **Actions:** G-2, G-10, G-8, G-11, save/open marketplace listings, apply filters, or navigate globally.
- **Development notes:** Use one shared search/result model for New and Pre-owned. Clearly label community versus external sellers, validate availability, disclose external purchase behavior, and preserve filters.

## G-2 — Style Check

- **Purpose:** Accepts a product photo, screenshot, link, or store photo for pre-purchase evaluation.
- **Main content:** Upload/paste area, capture options, examples, and a short explanation.
- **Actions:** All input methods proceed to G-3; back to G-1.
- **Development notes:** Implement URL validation and metadata extraction, camera/gallery permissions, paste/upload progress, supported formats, duplicate request prevention, and failure recovery.

## G-3 — Checking the Piece

- **Purpose:** Shows extraction and comparison progress.
- **Main content:** Original screenshot, extracted item, detected category/color/material, similarity check, and outfit-compatibility stage.
- **Action:** Completion opens G-4; back to G-2.
- **Development notes:** Use job state rather than tap-to-complete in production. Flag low-confidence extraction and support retry or manual correction.

## G-4 — Style Check Result

- **Purpose:** Gives an evidence-based recommendation before the user buys or saves a piece.
- **Main content:** Extracted attributes, closet compatibility, style alignment, likely duplicate, owned-versus-considered comparison, and next actions.
- **Actions:** Compare G-5, save G-8, outfit ideas G-6, save options G-7, remove/back G-2.
- **Development notes:** Compatibility and duplicate language should expose uncertainty. Save the analyzed product entity so downstream screens do not rely on temporary mock data.

## G-5 — Similar Pieces in Your Closet

- **Purpose:** Helps prevent duplicates through a side-by-side comparison.
- **Main content:** Owned and considered items, category/color/silhouette/occasion/season comparison, and Muse's balanced recommendation.
- **Actions:** Keep in G-8, decline and return G-1, inspect C-7 owned item, or back to G-4.
- **Development notes:** Preserve the considered product when visiting C-7. Record the user's decision as a useful future shopping signal.

## G-6 — Outfit Possibilities

- **Purpose:** Demonstrates how a considered piece could work with existing closet items.
- **Main content:** Workday and weekend combinations, owned-item counts, and included pieces.
- **Actions:** Save look to A-1, add to D-1, save product G-8, view C-1, or back G-4.
- **Development notes:** A considered but unowned piece must remain visibly labeled. `Save Look` should ideally save to B-1 rather than simply returning to Today; confirm intended behavior.

## G-7 — Save for Later

- **Purpose:** Adds context and a review moment to a wishlist save.
- **Main content:** Collection choice, personal note, and reminder options for next month, next season, or none.
- **Actions:** Save to G-8 or cancel back to G-4.
- **Development notes:** The prototype has no visible Cancel control although navigation notes mention it. Add it. Implement collection management, reminder scheduling/timezone, notification permission, and note limits.

## G-8 — My Wishlist

- **Purpose:** Intentional purchase backlog enriched with wardrobe value.
- **Main content:** Summary metrics, collection filters, compatibility/gap/similarity notes, item cards, add action, and primary navigation.
- **Actions:** Open G-9, add through G-2, filter collections, or navigate globally.
- **Development notes:** Consolidate legacy E-3 here. Support price/availability refresh, sorting, empty collections, pagination, stale products, and reminder status.

## G-9 — Wishlist Item Details

- **Purpose:** Reviews one saved product before purchase.
- **Main content:** Collection/date/price, compatibility, similar-owned warning, gap note, personal note, reminder, retailer information, and management actions.
- **Actions:** Outfit ideas G-6, similarity G-5, move via G-7, remove to G-8, or open retailer site.
- **Development notes:** Confirm removal, validate external URLs, indicate last price check, handle unavailable products, and preserve collection/note when moving.

## G-10 — Complete This Look

- **Purpose:** Suggests an optional missing piece for a known outfit, comparing new and pre-owned sources.
- **Main content:** Owned pieces, optional addition, filters, community/external listings, empty state, and cross-feature actions.
- **Actions:** Check G-4, save G-7, view C-1, add D-1, filter or open listings.
- **Development notes:** G-4 normally depends on G-2/G-3 extraction; when entering from G-10, create/pass the selected product first. Reuse shared marketplace and filter components from G-1/A-6.

## G-11 — Wardrobe Opportunity

- **Purpose:** Explains a closet gap and offers a relevant pre-owned example without forcing a purchase.
- **Main content:** Gap category, estimated outfit synergy, benefiting closet items, color/season guidance, and community listing.
- **Actions:** Open external listing, explore G-1, save G-7, or view C-1.
- **Development notes:** The displayed pre-owned item may become unavailable; provide alternatives and refresh. Synergy counts must be derived from actual closet combinations.

## G-12 — Wishlist Review Moment

- **Purpose:** Periodic lightweight review that separates strong-fit items, likely duplicates, and seasonal ideas.
- **Main content:** Strong Fit, Similar to What You Own, and Keep for Later groups with explanations.
- **Actions:** Review G-8, compare G-5, reschedule through G-7, or dismiss to G-1.
- **Development notes:** Trigger from reminders or meaningful wishlist changes with frequency limits. Persist dismiss/reschedule decisions and avoid repeating unchanged reviews.

---

# 4. Cross-screen implementation gaps and decisions

## Must resolve before development handoff

1. **Discover architecture:** Decide whether Section E is retired, merged into G, or retained as a secondary insights/savings area. G-1 is currently the primary bottom-navigation destination.
2. **Wishlist consolidation:** E-3/E-4 and G-8/G-9 overlap. Use one wishlist entity and one canonical UI flow.
3. **F-4 destinations:** Cost Per Wear, Similar Pieces, and Seasonal Audit labels do not match their current destinations. Either create the missing screens or correct the labels/routes.
4. **C-12 scope:** Separate global closet filtering from editing a single item, or explicitly support both modes.
5. **Manual item entry:** C-2 currently jumps directly to C-5. Add a manual data-entry/confirmation path.
6. **Authentication routes:** X-1/X-2 prototype login paths are shortcuts, not a complete sign-in flow.
7. **External marketplace behavior:** Define supported countries/platforms, external-link validation, listing moderation, status refresh, and disclosure language.
8. **Virtual savings/budget:** Define whether balances are informational estimates or real stored value before using wallet-like language.
9. **Missing button behavior:** Several prototype buttons are static, including fine-tune profile, update preferences, save plan, see similar options, and saved-opportunity actions.
10. **Feature naming:** Z screens are previews; decide whether they ship as destinations or reusable cards. Ensure every navigation label reflects the feature that actually opens.

## Shared production requirements

- Authentication and authorization for private closets, profiles, boards, and polls.
- Consent, encryption, retention, export, and deletion rules for personal photos and Style Twin data.
- Accessible labels, focus order, keyboard support, contrast, reduced motion, and screen-reader announcements.
- Localization, RTL readiness, currency, measurement, sizing, date, and timezone support.
- Analytics for screen view, primary CTA, completion, skip, correction, save, external click, and failure—without collecting sensitive image content unnecessarily.
- Consistent loading, skeleton, empty, partial, error, offline, permission, retry, and stale-data states.
- Confirmation and undo for destructive actions such as remove, archive, delete, unlink, and dismiss.
- Deep-link behavior and state restoration when returning from an external marketplace or interrupted upload.

## Suggested core entities

- User, Profile, StyleTwin, StylePreference, FitProfile
- ClosetItem, ItemImage, ItemAttribute, WearLog, ClosetReadiness
- Outfit, OutfitPiece, OutfitRecommendation, OutfitFeedback, SavedLook
- CalendarEvent, PlannedLook, Trip, PackingPlan
- ProductCandidate, StyleCheck, CompatibilityResult, SimilarityResult
- WishlistItem, WishlistCollection, WishlistReminder, WardrobeOpportunity
- ExternalListing, Marketplace, ListingStatus, ResaleActivity
- StyleScore, StyleDNA, StyleStory, WrappedPeriod
- StyleBoard, BoardMember, OutfitPoll, PollOption, PollVote

This entity list is a conceptual implementation aid. Final database and API design should be derived from approved product behavior and technical architecture.
