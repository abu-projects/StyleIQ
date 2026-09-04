# StyleIQ — Alta Experience Replication Specification

**Document type:** End-to-end product teardown, screen inventory, interaction specification, and StyleIQ adaptation plan  
**Reference product:** [Alta Daily web application](https://www.altadaily.com/)  
**Research date:** August 22, 2026  
**Research surface:** Authenticated mobile web experience at 390 × 844  
**Target product:** StyleIQ  
**Status:** Implementation reference

---

## 1. Objective

Reproduce the **interaction model, screen responsibilities, progression, feedback loops, and perceived simplicity** of the reviewed Alta experience inside StyleIQ.

Do not copy Alta's name, copywriting, icons, illustrations, photography, generated assets, or monochrome identity. Implement the same product completeness through StyleIQ's own system:

- Ivory background `#F8F6F3`
- Canvas surface `#EFECE7`
- Primary ink `#1B1716`
- Secondary text `#6F675F`
- Accent gold `#C89B45`
- Playfair Display for editorial headings
- Inter for interface text
- Quiet-luxury photography and tone

The visual source of truth remains [DESIGN.md](./DESIGN.md). The functional inventory remains [StyleIQ_Screen_Reference_Updated.md](./StyleIQ_Screen_Reference_Updated.md).

---

## 2. Executive Product Finding

Alta feels small because its navigation is small, not because the product is shallow. A large system is hidden behind four destinations and one global creation button:

1. Home / Today
2. Closet
3. Inspiration / Search
4. Profile / Looks / Trips
5. Global Add

The strongest loop is:

```text
Add one item
  → immediately improve Home
  → generate complete outfit suggestions
  → edit a suggestion in Studio
  → save it as a Look
  → plan it on a date or trip
  → learn from feedback
```

StyleIQ should copy this progressive reveal. Advanced capabilities should appear through useful moments, not a large feature menu.

---

## 3. Information Architecture

### 3.1 Primary navigation

| Position | Reference responsibility | StyleIQ destination |
|---|---|---|
| 1 | Home, daily styling, weather, calendar | Today |
| 2 | Closet and Wishlist | Closet |
| 3 | Community looks, people, products, brands | Discover |
| 4 | Profile, saved Looks, Trips, settings | My Atelier |
| Floating action | Add clothing and shopping data | Global Add |

### 3.2 Canonical loop

```text
Authentication
  → Preference Onboarding
  → Empty Home
  → Import
  → Closet Item
  → Styling Results
  → Style Studio / Canvas
  → Saved Look
  → Calendar / Event / Trip
  → Wear and feedback signals
  → Better recommendations
```

---

## 4. Screen and State Inventory

Rows are product states. Many are overlays or bottom sheets rather than routes.

**Verified total: 114 screens/states** — 15 authentication and first-use, 11 import, 7 Closet, 6 Home, 6 outfit actions, 11 Canvas/Studio, 8 saved Looks, 10 Avatar, 6 calendar/events, 14 Trips, 8 Inspiration/social, and 12 Profile/settings. This is an implementation-state count, not 114 distinct URL routes.

### A. Authentication and first use

| ID | State | Required behavior |
|---|---|---|
| A-01 | Sign in | Google, Apple, and Email. |
| A-02 | Name | First and last name; OAuth profile data may prefill both fields. |
| A-03 | Shopping email | Ask for the address used for online purchases and explain receipt forwarding. |
| A-04 | Shopping-email verification | Six-digit OTP, resend countdown, expired-code error, disabled Continue until complete. |
| A-05 | Occupation | Searchable free entry plus suggested roles; selecting a role advances immediately. |
| A-06 | Wardrobe interest | Womenswear, Menswear, or both; Continue remains disabled until at least one is selected. |
| A-07 | Avatar value proposition | Explain virtual try-on; Continue or Skip. |
| A-08 | Avatar photo setup | Separate face and full-body photo actions, privacy reassurance, Continue or Skip. |
| A-09 | Referral source | TikTok, Instagram, Reddit, Friend, ChatGPT, Google, YouTube, or Other. |
| A-10 | Brand likes | Searchable list; heart at least three owned or desired brands, with a visible minimum-count gate. |
| A-11 | Empty Home | Welcome, one-piece promise, import demonstration, Add CTA. |
| A-12 | Import education | Before/after Prettify for a garment and full outfit. |
| A-13 | Empty Closet | Illustration, reassurance, Add to Closet. |
| A-14 | Empty Looks | Explain saved outfits. |
| A-15 | Empty Trips | Explain planning, packing, and travel Looks. |

#### Verified new-user onboarding sequence

The true first-run path was replayed with a newly recreated account. Its order is:

```text
Sign in / create account
  → Name
  → Shopping email
  → Six-digit email verification
  → Occupation
  → Womenswear / Menswear / both
  → Optional Avatar introduction
  → Optional face and body photos
  → Referral source
  → Like at least three brands
  → Empty Home
```

Key product findings:

- The onboarding's explicit taste-learning step is **brand liking**, represented by heart controls. It is not a swipe deck of outfit images.
- Three brand likes are required to continue, but the entire brand step can also be skipped from the header.
- Occupation is framed as a weekday/weekend recommendation signal and supports both suggestions and free-form entry.
- Wardrobe interest is multi-select; choosing both Womenswear and Menswear is supported.
- Avatar setup is presented early but remains optional. Face and full-body images are requested separately and described as private.
- Budget, detailed style rules, disliked brands, events, and other advanced preferences are not part of first-run onboarding; they remain in Settings.
- The final transition lands directly on an empty Home with one primary promise: add a single item to start receiving value.

For the audited test path, Product designer, both wardrobe interests, ChatGPT referral, and three brand likes were selected; Avatar photos were skipped.

### B. Import and Closet creation

| ID | State | Required behavior |
|---|---|---|
| B-01 | Global Add sheet | Photos, Search items, Forward receipts. |
| B-02 | Photo picker | Multi-image selection and enhancement explanation. |
| B-03 | Prettify guide | Real photo → isolated studio-quality item. |
| B-04 | Import search | One field for a keyword or product URL. |
| B-05 | Search results | Image, inferred title, source domain, brand when known. |
| B-06 | Confirmation | Editable name, brand, category, image, Prettify, Add, Add All. |
| B-07 | Prettifying | Disable Add and keep metadata visible. |
| B-08 | Result | Processed image with Retry and Add. |
| B-09 | Receipt forwarding | Personalized instructions and copy-address action. |
| B-10 | Draft imports | Persistent unresolved-draft counter. |
| B-11 | Success | Toast, Closet count update, immediate Home transformation. |

### C. Closet

| ID | State | Required behavior |
|---|---|---|
| C-01 | Closet grid | Closet/Wishlist, count, sort, filters, Select mode, categories. |
| C-02 | Item detail | Hero image and editable metadata. |
| C-03 | Image tools | Crop and Prettify/Retry. |
| C-04 | Core metadata | Brand, name, category, colors, seasons, fit, tags, price. |
| C-05 | Styling metadata | Dress codes, lengths, fabrics, allow in styling. |
| C-06 | Intelligence | Saved Looks, worn count, cost-per-wear. |
| C-07 | Style this item | Occasion families with the selected item locked in. |

### D. Home and daily styling

| ID | State | Required behavior |
|---|---|---|
| D-01 | Before Closet data | Import-first onboarding. |
| D-02 | After first item | Greeting, weather, contextual stylist prompt. |
| D-03 | Loading | Human wording such as “Considering weather…”. |
| D-04 | Outfit families | Business casual, party, dressy, professional, semi-formal. |
| D-05 | Carousel | Multiple variants per occasion with pagination. |
| D-06 | Missing category | Explicitly identify missing compatible items. |

### E. Outfit card actions

| ID | Action | Result |
|---|---|---|
| E-01 | Heart | Save Look. |
| E-02 | Pencil | Open Customize Outfit. |
| E-03 | Dislike | Capture negative styling feedback. |
| E-04 | Send | Open sharing flow. |
| E-05 | Create Avatar | Open Try-On or Avatar setup gate. |
| E-06 | Swipe | Move between alternatives while retaining the occasion. |

### F. Style Studio / Canvas

| ID | State | Required behavior |
|---|---|---|
| F-01 | Header | Close/back, editable title, Save. |
| F-02 | Flat lay | Composition using background-removed assets. |
| F-03 | Avatar entry | Optional enhancement; Studio remains usable without it. |
| F-04 | Context | Feedback, Show on Calendar, date, location. |
| F-05 | Category layer | Label, carousel, hide/show, Add. |
| F-06 | Add layer | Open item-source selector. |
| F-07 | Manual selector | Closet/Wishlist, search, filters, item selection. |
| F-08 | Multi-select layers | Batch selection and layer management. |
| F-09 | Provenance | Shopping badge on catalog items; none on owned items. |
| F-10 | Missing item | Visible placeholder with explanation. |
| F-11 | Draft persistence | Preserve title, items, date, location, ordering. |

### G. Saved Looks

| ID | State | Required behavior |
|---|---|---|
| G-01 | Looks grid | Sort, filter, Select, Lookbooks, Worn Looks. |
| G-02 | Look detail | Preview, caption, date, location, notes, calendar state. |
| G-03 | Items | Owned and suggested pieces with Shop links. |
| G-04 | Classification | Tags, dress codes, seasons, styles. |
| G-05 | Value | Known total cost plus unknown-price handling. |
| G-06 | Visibility | Private/followers/public. StyleIQ defaults to Private. |
| G-07 | Social metrics | Likes, comments, restyles, sends when permitted. |
| G-08 | Delete | Destructive confirmation. |

### H. Avatar and Virtual Try-On

| ID | State | Required behavior |
|---|---|---|
| H-01 | Introduction | Explain rendering saved Looks on an Avatar. |
| H-02 | Face guidance | One visible face and no other person. |
| H-03 | Face upload | Picker and processing. |
| H-04 | Body reference | Separate body photo. |
| H-05 | Measurements | Height/weight with metric/imperial. |
| H-06 | Appearance | Skin and hair color. |
| H-07 | Pose | Standing, leaning, phone, walking, random. |
| H-08 | Tuck preference | Tucked, untucked, no preference. |
| H-09 | Usage limit | Remaining generations and reset time. |
| H-10 | Result | Render, feedback, save, retry. |

### I. Planner and events

| ID | State | Required behavior |
|---|---|---|
| I-01 | Calendar month | Month navigation, daily Add, today highlight. |
| I-02 | Dashboard | Streak, most-worn, Closet usage, style journey. |
| I-03 | Day menu | Closet, saved Looks, Plan Event. |
| I-04 | Add Event | Title, date, repeat, dress code, items, notes. |
| I-05 | Validation | Create disabled until required context is complete. |
| I-06 | Share Calendar | Explicit sharing and privacy explanation. |

### J. Trips

| ID | State | Required behavior |
|---|---|---|
| J-01 | Trips list | Empty state or destination cards with Look count. |
| J-02 | Destination | City/landmark autocomplete and date range. |
| J-03 | Multi-city | Additional destinations with independent dates. |
| J-04 | Bag selection | Carry on, checked, or both. |
| J-05 | Must-have items | Select owned items that must be included. |
| J-06 | Activities | Location-aware suggestions plus free text. |
| J-07 | Generation | Human tips while building the packing list. |
| J-08 | Packing list | Owned items grouped by category and editable. |
| J-09 | Suggested items | Shopping gaps and optional products. |
| J-10 | Trip Looks | One row per date. |
| J-11 | Add Look menu | Packing list, saved Looks, Ask Stylist. |
| J-12 | Ask Stylist | Date-, place-, weather-, and activity-aware prompt. |
| J-13 | Sharing | Shareable itinerary/packing list. |
| J-14 | Edit/Delete | Itinerary edit or destructive confirmation. |

### K. Inspiration and community

| ID | State | Required behavior |
|---|---|---|
| K-01 | Feed | Dense image-led grid with minimal chrome. |
| K-02 | Unified search | People, products, Looks, brands. |
| K-03 | Filters | For You, Top This Week, personalized brands. |
| K-04 | Look detail | Creator, location, image, items, metrics. |
| K-05 | Try on me | Reuse Avatar gate for another creator's Look. |
| K-06 | Restyle | Copy community Look into an editable draft. |
| K-07 | Follow/like/comment | Explicit representational actions. |
| K-08 | Report | Reason and confirmation. |

### L. Profile and settings

| ID | State | Required behavior |
|---|---|---|
| L-01 | Profile | Photo, name, Looks, Avatars, items, follows, member date. |
| L-02 | Completion prompt | Contextual, non-blocking. |
| L-03 | Looks/Trips | Switch creative output and travel planning. |
| L-04 | About you | Personal styling context. |
| L-05 | Style preferences | Prefer, Dislike, learned personal rules. |
| L-06 | Brands | Preferred/disliked brands with search. |
| L-07 | Budget | Per-item recommendation ranges. |
| L-08 | Events | Repeating events used in styling. |
| L-09 | Avatar | Private configuration and usage. |
| L-10 | Auto-Prettify | Automatically enhance uploads. |
| L-11 | Standard settings | Account, privacy, notifications, units, language. |
| L-12 | Tutorial | Stylist → add → get styled → save/Avatar → feedback. |

---

## 5. Importing Specification

### 5.1 One entry sheet

```text
Add with photos
Search items
Forward receipts
```

Do not ask the user to choose a data model. Classification happens later.

### 5.2 Photo import

1. Choose one or more photos.
2. Create draft items immediately.
3. Show source image, inferred category, and enhancement state.
4. Run Auto-Prettify when enabled.
5. Preserve original and processed images.
6. Infer metadata in parallel.
7. Let the user correct all fields.
8. Add one item or Add All ready drafts.

### 5.3 Keyword and URL import

One field accepts `black blazer` or a pasted product URL. Results include image, inferred name, source domain, and brand when known. Selecting a result creates a draft; it does not silently save it.

### 5.4 Receipt import

- Explain which account should forward receipts.
- Provide a copy action and confirmation toast.
- Convert multiple products to drafts.
- Show unresolved drafts as a persistent badge.
- Never auto-add uncertain products to the owned Closet.

### 5.5 Prettify states

```text
Original → Prettifying → Processed → Retry or Add
```

While processing, disable Add, retain metadata, and preserve the source image.

### 5.6 Item metadata

Name, brand, category, dress codes, seasons, colors, fit, item length, sleeve length, fabrics, tags, price, and styling eligibility.

Store whether each value is `inferred`, `confirmed`, or `unknown` even if the visual UI stays simple.

---

## 6. Style Studio / Canvas Specification

### 6.1 Entry points

- Style this item
- Generated outfit pencil
- Add Look → Select from Closet
- Saved Look → Customize
- Community Look → Restyle
- Trip date → Ask Stylist or select items

All entries create or restore one canonical draft.

### 6.2 Generated result anatomy

```text
Occasion title
Flat-lay composition
“N items suggested” provenance
Pagination
Heart · Edit · Dislike · Send
Create Avatar
```

### 6.3 Customize Outfit

Use a dark, distraction-free Canvas while the surrounding StyleIQ experience remains ivory.

Header: back, editable title, Save.  
Preview: Flat Lay by default; optional Avatar.  
Context: feedback, calendar toggle, date, location.  
Layers: category, selected-item carousel, provenance, hide/show, Add, Add Layer, multi-select.

### 6.4 Layer selector

- Closet / Wishlist
- Local search
- All and category filters
- Item thumbnail and name
- Immediate selection

Recommendation items remain Inspiration and never silently become owned.

### 6.5 Role rules

The reference allowed duplicate category layers. StyleIQ should use explicit roles:

- one Base;
- one Bottom;
- one Dress instead of Base + Bottom;
- one primary Outerwear;
- optional secondary Layer;
- one Shoes role;
- one Bag;
- multiple Accessories.

Ask whether to replace an occupied role or add a compatible secondary layer.

### 6.6 Save payload

- title/caption;
- item IDs and provenance;
- role assignments and ordering;
- date, location, and calendar flag;
- generation prompt and occasion;
- feedback state;
- Avatar render IDs;
- visibility.

StyleIQ defaults to **Private**. Publishing is a separate explicit action.

---

## 7. Progressive Reveal

### Before the first item

- welcome;
- one-piece promise;
- import demonstration;
- one Add action.

### After the first item

- greeting;
- local weather;
- contextual stylist prompt;
- loading state;
- occasion-based results.

Do not show analytics, gaps, cost-per-wear, packing, or creator tools before the first item.

---

## 8. Trip Planning

```text
Destination and dates
  → Bag size
  → Must-have Closet items
  → Activities
  → Packing list and shopping gaps
  → Daily Looks
```

Inputs: destination climate, duration, multi-city weather, bag size, must-haves, activities, style rules, budget.  
Outputs: owned packing list, missing-category explanation, optional shopping, daily Look planner.

Each trip day exposes:

```text
From packing list
From saved Looks
Ask Stylist
```

Ask Stylist is scoped to date, destination, weather, activities, and bag contents.

---

## 9. Recommendation Signals

### Positive

Save, wear, add to calendar, include in trip, repeat usage, create Avatar, purchase/add suggestion.

### Negative

Dislike, hide layer, replace suggestion, dislike brand, add a personal rule.

### Persistent controls

Preferred/disliked brands, per-item budget, style rules, repeating events, Avatar details, tuck preference, Auto-Prettify, units, and language.

Explain that feedback improves styling without foregrounding technical AI language.

---

## 10. Canonical Data Model

### ClosetItem

```text
id, ownerId
sourceType: photo | product_url | search | receipt
sourceUrl, sourceImageUrl, processedImageUrl
prettifyStatus
name, brand, category
colors[], seasons[], dressCodes[]
fit, itemLength, sleeveLength, fabrics[], tags[]
price, currency
allowInStyling
metadataConfidence
createdAt
```

### OutfitDraft

```text
id, ownerId
title, occasion, prompt
date, location, calendarEnabled
layers[], feedback, entryPoint
updatedAt
```

### OutfitLayer

```text
id, role, itemId
source: owned | wishlist | inspiration
visible, order
```

### SavedLook

```text
id, ownerId
caption, draftSnapshot, notes
date, location
visibility: private | followers | public
calendarEnabled, avatarRenders[]
likesCount, commentsCount, restylesCount, wornCount
```

### Trip

```text
id, ownerId
destinations[], startDate, endDate
bagType, mustHaveItemIds[], activities[]
packingItemIds[], suggestedProductIds[]
dailyLooks[], generationStatus
```

### StyleSignal

```text
id, ownerId
type: prefer | dislike | save | wear | hide | replace | purchase
subjectType, subjectId, context, createdAt
```

---

## 11. Loading, Empty, Failure, and Edge States

### Loading

Searching products, Prettifying, extracting metadata, considering weather, generating outfits, creating Avatar, generating packing list, generating trip Looks.

### Empty

No Closet items, no compatible category, no saved Looks, no Trips, no Avatar, no search results, no notifications, no followers/following.

### Failures

- Prettify failed → Retry.
- URL extraction failed → manual entry.
- Receipt contained no identifiable products.
- Generation timed out.
- Location lookup failed.
- Avatar photo rejected.
- Daily Avatar limit reached.
- Closet coverage too low.

### Observed risk

Trip outfit generation stayed in rotating-tip loading with a one-item Closet. StyleIQ must fail with an actionable readiness message:

> Add at least one top, one bottom, and one pair of shoes to generate complete trip Looks.

Never leave the user in indefinite loading.

---

## 12. Interaction and Motion Rules

- Keep four primary destinations and one global Add.
- Use full-screen tasks for Import, Studio, Avatar, and Trip setup.
- Use sheets for quick choices and metadata editing.
- Preserve underlying context when a sheet closes.
- Use 180–250 ms transitions.
- Use subtle tap scale and item-replacement crossfades.
- Use horizontal snap for outfit and item carousels.
- Show toasts after import, save, and copy.
- Disable primary actions while processing.
- Give every icon-only control an accessibility label.

---

## 13. StyleIQ Visual Translation

| Reference behavior | StyleIQ treatment |
|---|---|
| White/black shell | Ivory canvas and charcoal ink |
| Heavy black sheets | Charcoal only for Studio; ivory elsewhere |
| Sans-serif hierarchy | Playfair headings with Inter controls |
| Black pill CTA | Charcoal rounded-2xl CTA with ivory text |
| Gray loading | Warm neutral placeholders |
| Social-first profile | My Atelier; Private default |
| AI wording | Muse/personal-stylist language |
| Catalog density | Editorial cards with restrained pricing and provenance |

StyleIQ should retain the speed and low chrome while feeling warmer, more private, and more editorial.

---

## 14. Mapping to Existing StyleIQ

| Capability | Existing owner | Required change |
|---|---|---|
| Import sheet | Closet C-2–C-5 | Converge photo, keyword/URL, receipt. |
| Prettify | Closet processing | Add comparison, Retry, drafts. |
| Daily styling | Today A-1–A-6 | Transform after first item. |
| Studio | H-1–H-5 | Add role carousels, hide/show, layers, provenance, calendar/location. |
| Look detail | B / H-5 | Add items, cost, notes, classification, visibility. |
| Avatar | Style Twin Y / H | Studio works without Twin; Try-On optional. |
| Calendar | Planner D | Add Closet/saved Look/event menu per date. |
| Trips | D-4–D-5 | Add destination, bag, must-haves, activities, gaps, daily Looks. |
| Inspiration | Discover G | Add Look detail, Try on me, Restyle. |
| Learning | Profile F | Add prefer/dislike rules and disliked brands. |

---

## 15. Delivery Order

### Phase 1 — First value

Empty Home → Add sheet → import → Prettify → item detail → Home transformation.

### Phase 2 — Styling

Style this item → occasion results → card actions → Studio layers → Save Look → Look detail.

### Phase 3 — Planning

Calendar day menu → Event → calendar integration → Trip wizard → packing → daily Looks.

### Phase 4 — Personalization and social

Feedback rules → brand/budget → Avatar → Inspiration → Restyle → deliberate publishing.

---

## 16. Acceptance Criteria

### Onboarding

- OAuth-provided name data is editable before continuing.
- Shopping email is explained as an import signal, verified by six-digit OTP, and recoverable through resend.
- Occupation supports suggestion chips and free-form entry.
- Womenswear and Menswear can be selected independently or together.
- Avatar education can be explored and then skipped without blocking setup.
- Brand search supports at least three heart selections and communicates the remaining minimum clearly.
- Completion lands on a focused empty Home with one primary Add action.

### Import

- First item in under two minutes.
- All sources produce one canonical ClosetItem.
- Add disabled during Prettify.
- All inferred fields correctable.
- Failed processing preserves the draft.

### Studio

- Enter with one owned item.
- Owned and Inspiration provenance is clear.
- Replace, hide, or add every layer.
- Draft survives closing and reopening.
- Save creates one canonical SavedLook.
- Avatar is not required for Flat Lay.

### Planner and Trips

- Schedule a saved Look without rebuilding it.
- Event supports date, repeat, dress code, items, notes.
- Trip supports multiple destinations.
- Packing uses bag size and must-haves.
- Each date can use packing list, saved Looks, or Stylist.
- Sparse Closet fails with guidance, not indefinite loading.

### Privacy

- New Looks default to Private.
- Follow, like, comment, send, sharing, and publishing are explicit.
- Explain Avatar photo privacy before upload.
- Destructive deletion requires confirmation.

---

## 17. Test Account Artifacts

The review created:

- one Prettified black blazer Closet item;
- one saved Look titled `Test Business Casual`;
- one Alexandria trip for August 23–25, 2026;
- Carry-on packing configuration;
- one must-have item;
- one location-aware activity.

The reference app defaulted the saved Look to **Followers** visibility. The test account showed zero followers during review. Cleanup requires explicit confirmation because deletion is destructive.

---

## 18. Final Product Principle

Copy the sequence and restraint, not the visual skin.

```text
I added one real thing I own.
The app immediately understood it.
It gave me a useful outfit.
I changed it without learning a design tool.
I saved it and planned when to wear it.
The system became smarter without a long setup.
```

That is the experience to reproduce.
