# Phase 2.5 / Phase 2 Semantic Migration

## Locked architecture

- Visible canonical screens: 34
- Hidden compatibility routes/states: 93
- Supported route IDs: 127
- Phase 3 visual recomposition is intentionally deferred.

## Ownership matrix

| Feature | Before owner | After owner | Reason |
| --- | --- | --- | --- |
| First Name | A-02 | A-16 / Email Account | Account identity |
| Last Name | A-02 | A-16 / Email Account | Account identity |
| Email and OTP | A-03 / A-04 aliases | A-16 inline states | One authentication intent |
| Google and Apple authentication | A-16 | A-16 | Account authentication |
| First Goal | A-02 | A-02 | Personalization |
| Wardrobe Context | A-02 | A-02 | Personalization |
| Closet Starter | A-02 | Removed as a question; goal routes to B-01 or the relevant destination | Redundant mixed intent |
| Style preferences | L-05 alias | L-04 section | Profile identity and preference intent |
| Brands, sizes, and fit notes | L-06 alias | L-04 / Brands & Fit | Personal fit intent |
| Style Inspiration | L-01 decoration | L-04 section | Profile preference intent; existing behavior preserved |
| Budget preferences | L-04 / L-07 | G-08 / Shopping budget | Shopping intent |
| Product budget context | G-09 | G-09 | Product-specific purchase decision |
| Recurring Events | L-04 / L-08 | I-01 section | Planning intent |
| Planner Insights | I-02 | I-01 panel | Planner overview context |
| Planner Day Sheet | I-03 | I-01 panel | Inspecting one planner day |
| Planner Validation | I-05 | I-04 state | Event creation validation |
| Planner Share | I-06 | I-01 panel | Planner-level sharing |
| Batch photo intake | B-02 | B-01 / Photos | Universal Closet intake |
| Batch review and confirmation | broken B-06 mode / B-11 transition | B-06 Batch Mode | One review intent, without a hidden visual transition |
| Batch preview compatibility | B-08 | B-06, selected from active or saved batch state | Preserve legacy route semantics |
| Draft imports | B-10 | B-01 / Draft Imports | Intake recovery intent |
| Style This Item context | broken F-01 seed | F-01 | Style Studio owns outfit editing |

## Compatibility mapping changes

| Legacy route | Canonical owner/state |
| --- | --- |
| A-03 | A-16 / Email Account |
| A-04 | A-16 / OTP |
| A-05, A-09 | A-02 / First Goal |
| A-06 | B-01 / Photos |
| A-10 | A-02 / Wardrobe Context |
| B-02 | B-01 / Photos |
| B-08 | B-06 / active Batch Review or single Preview |
| B-10 | B-01 / Draft Imports |
| I-02 | I-01 / Insights |
| I-03 | I-01 / Day Sheet |
| I-05 | I-04 / Validation |
| I-06 | I-01 / Share |
| L-05 | L-04 / Style Preferences |
| L-06 | L-04 / Brands & Fit |
| L-07 | G-08 / Shopping Budget |
| L-08 | I-01 / Recurring Events |

Live controls now open the canonical screen and set its section, panel, or mode directly. The aliases above remain deep-link compatibility entries and are not restored to Screen Inventory. Navigation history records canonical origins, and canonical B-06 and I-04 fallbacks return to B-01 and I-01 respectively.

## Functional repairs

### Batch import

B-01 supports single-photo and multi-photo intake. An active batch renders the batch review implementation in B-06, confident items bypass individual review, exceptions are reviewed in place, and the prepared confirmation remains in B-06 until commit. Unresolved items persist as resumable drafts. B-08 restores saved batch state when available; B-10 opens Draft Imports on B-01.

### Closet to Style Studio

Styling a C-02 item seeds F-01 with the selected item as a locked anchor and a `Styled around [Item Name]` context. Closet categories are translated into the Studio's supported role vocabulary, and every canvas item is defensively normalized before Studio rendering so malformed legacy data cannot call string methods on an undefined role.

## Feature preservation

- Authentication retains email, inline OTP, Google, and Apple paths. Identity persists independently from personalization.
- Personalization retains wardrobe context and all first-goal destinations.
- L-04 retains About you, style preferences, Brands & Fit, and the existing Style Inspiration editor.
- G-08 persists budget guides; G-09 consumes them as product-specific context.
- I-01 persists recurring events and retains Insights, Day Sheet, and Share panels; I-04 owns creation and validation.
- Batch drafts, exception edits, confirmation, and Closet commit behavior remain available.
- C-02 still owns item identity, metadata, styling details, wear intelligence, and Style This Item.

## Deferred to Phase 3

No global spacing, typography, palette, card, density, Studio-layout, Trip-layout, or Closet hierarchy redesign was performed in this migration.
