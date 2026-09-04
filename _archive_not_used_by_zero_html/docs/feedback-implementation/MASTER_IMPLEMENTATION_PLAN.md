# StyleIQ Feedback Master Implementation Plan

## Planning scope

This is the planning-only deliverable for all 69 feedback tickets. The product baseline is [0.html](../../0.html). No product UI changes are included in this pass.

## Baseline architecture audit

- Stack: one vanilla HTML document with embedded CSS and JavaScript; no framework migration is planned.
- Screen model: 123 registered screens/states across S-00–M-03, rendered through `renderScreen` and routed through `go`.
- Shared shells: `shell`, root navigation, bottom navigation, sheets/overlays, account menu, and `mirrorScreen` overrides.
- Shared prototype state: `canvasState`, Closet tab/item sample state, Trip state, Planner state, Style Twin state, and menu/overlay flags. The prototype currently has no canonical persistence layer.
- Current tests: Playwright exists, but the checked-in suites primarily target other HTML entry points. A dedicated `0.html` baseline suite is required before the first UI mutation.
- Visual baseline: preserve the current editorial photography, typography, and restrained liquid-material language. New colors must use CSS variables.
- Main UX risk: duplicated feature routes and intermediate screens make common jobs longer than necessary.

## Mandatory ticket gate

A ticket or phase may move to DONE only after all of the following pass:

1. Re-open the ticket plan and mark only that ticket/phase IN PROGRESS.
2. Capture the current target route and neighboring flow.
3. Implement the smallest coherent change in `0.html`; do not start the next ticket.
4. Run route, happy-path, back, cancel/dismiss, and adjacent-regression tests.
5. Run desktop and 375×812 mobile checks with zero page/console errors.
6. Inspect a screenshot at normal zoom for clipping, nested-screen behavior, safe-area issues, and visual consistency.
7. Update the ticket file with exact files/functions/screens changed and QA evidence.
8. Mark the ticket DONE in this plan only when every acceptance criterion is satisfied.
9. Update Google Sheets only after the full requested implementation run, and only for tickets actually marked DONE.

## Dependency map

- Product foundation: SIQ-001, SIQ-002, SIQ-021–SIQ-025, SIQ-062, SIQ-063.
- Visual constraints applied throughout: SIQ-067 and SIQ-068; SIQ-069 is the final whole-app audit.
- Onboarding: SIQ-014–SIQ-020; SIQ-051 removes Style Twin from the required path.
- Closet/import foundation: SIQ-029–SIQ-038 plus shared approval/uncertainty patterns SIQ-065–SIQ-066.
- Photo learning: SIQ-003–SIQ-004 reuse the Closet ingestion foundation.
- Lens: SIQ-005 provides the shared architecture; SIQ-006–SIQ-013 reuse it; SIQ-064 supplies visual search.
- Look source: SIQ-044 precedes SIQ-043 and supports creator/Lens/Muse attribution.
- Planner precedes next-week recap: SIQ-054–SIQ-055 before SIQ-060.
- Lifecycle model: SIQ-032 before SIQ-033.
- Studio: SIQ-048 establishes Simple mode; SIQ-049 preserves advanced mode; SIQ-050 finalizes language.

## Classification totals

- Foundation: 17
- Large: 22
- Medium: 26
- Small: 4

## Recommended execution order

| Order | Ticket | Title | Size | Workstream | Dependencies | Planned phases | Status |
|---:|---|---|---|---|---|---:|---|
| 1 | SIQ-001 | Make the overall product significantly leaner | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 3 | DONE |
| 2 | SIQ-002 | Make the experience more image-first | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 3 | DONE |
| 3 | SIQ-021 | Reduce Continue-driven workflows | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 4 | SIQ-022 | Use bottom sheets instead of unnecessary pages | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 5 | SIQ-023 | Use inline editing instead of separate forms | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 6 | SIQ-024 | Use natural language instead of technical forms | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 7 | SIQ-025 | Use progressive disclosure | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 8 | SIQ-026 | Use chips for lightweight choices | Medium | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 9 | SIQ-027 | Use swipe, hold, and drag where appropriate | Medium | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 10 | SIQ-062 | Make intelligence contextual | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 11 | SIQ-063 | Design around user jobs instead of features | Foundation | Product Simplification Foundation | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 12 | SIQ-067 | Keep the current HTML visual direction | Foundation | Visual System Constraints | Constraint for all tickets. | 1 | DONE |
| 13 | SIQ-068 | Treat the current color palette as provisional | Foundation | Visual System Constraints | Constraint for all visual implementation. | 1 | DONE |
| 14 | SIQ-014 | Remove Occupation from onboarding | Small | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 15 | SIQ-015 | Simplify Man / Woman styling selection | Medium | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 16 | SIQ-016 | Remove How Did You Hear About Us from core onboarding | Small | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 17 | SIQ-017 | Defer brand selection | Medium | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 18 | SIQ-018 | Shorten onboarding aggressively | Foundation | Onboarding | Related to SIQ-014, SIQ-015, SIQ-016, SIQ-017, SIQ-019, SIQ-020, SIQ-051. | 4 | DONE |
| 19 | SIQ-019 | Ask what StyleIQ should help with | Medium | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 20 | SIQ-020 | Deliver useful value immediately | Medium | Onboarding | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 21 | SIQ-051 | Move Style Twin out of required onboarding | Medium | Style Twin | Should be coordinated with SIQ-018 and SIQ-052. | 1 | DONE |
| 22 | SIQ-029 | Design Closet to scale from 0 to 100+ items | Large | Closet & Photo Import | Related to SIQ-030, SIQ-031, SIQ-032, SIQ-033. | 4 | DONE |
| 23 | SIQ-030 | Make the Closet an actual visual wardrobe | Large | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 24 | SIQ-031 | Add clear category classification | Medium | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 25 | SIQ-032 | Add item lifecycle statuses | Large | Closet & Photo Import | Must define lifecycle data before SIQ-033. | 4 | DONE |
| 26 | SIQ-033 | Surface lifecycle collections in the Closet | Medium | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 27 | SIQ-034 | Consolidate Item Detail into one page | Large | Closet & Photo Import | Related to SIQ-022, SIQ-023, SIQ-025, SIQ-062. | 4 | DONE |
| 28 | SIQ-035 | Let AI handle item processing automatically | Large | Closet & Photo Import | Related to SIQ-036, SIQ-037, SIQ-038, SIQ-065, SIQ-066. | 1 | DONE |
| 29 | SIQ-036 | Only interrupt when AI confidence is low | Medium | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 30 | SIQ-037 | Remove Prettify as a separate workflow | Medium | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 31 | SIQ-038 | Support batch photo import | Large | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 32 | SIQ-065 | Use one-tap approval when confidence is high | Medium | Closet & Photo Import | Shared pattern supporting SIQ-035, SIQ-036, SIQ-003, SIQ-004. | 1 | DONE |
| 33 | SIQ-066 | Use uncertainty as the exception | Foundation | Closet & Photo Import | Shared pattern supporting AI-heavy import/Lens flows. | 1 | DONE |
| 34 | SIQ-003 | Add Learn from My Photos | Large | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 3 | DONE |
| 35 | SIQ-004 | Add Build My Closet from Photos | Large | Closet & Photo Import | No hard dependency identified. Audit adjacent tickets before implementation. | 4 | DONE |
| 36 | SIQ-064 | Make visual search a core interaction | Large | StyleIQ Lens & Visual Search | Shared foundation for SIQ-008, SIQ-012, SIQ-013. | 1 | DONE |
| 37 | SIQ-005 | Create StyleIQ Lens | Foundation | StyleIQ Lens & Visual Search | No hard dependency identified. Audit adjacent tickets before implementation. | 5 | DONE |
| 38 | SIQ-006 | StyleIQ Lens should always be available | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005. | 1 | DONE |
| 39 | SIQ-007 | Lens: Add items from a Closet | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005 and should reuse SIQ-004/SIQ-035 import architecture. | 1 | DONE |
| 40 | SIQ-008 | Lens: Should I buy this? | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005; related to SIQ-013 and SIQ-064. | 1 | DONE |
| 41 | SIQ-009 | Lens: Recreate someone's outfit | Large | StyleIQ Lens & Visual Search | Depends on SIQ-005; related to SIQ-041, SIQ-048, SIQ-064. | 4 | DONE |
| 42 | SIQ-010 | Lens: Improve my current outfit | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005 and contextual Muse SIQ-028. | 1 | DONE |
| 43 | SIQ-011 | Lens: Check my suitcase | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005 and Trip context SIQ-056. | 1 | DONE |
| 44 | SIQ-012 | Lens: Shop my Closet from a screenshot | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005, SIQ-064, and Closet architecture SIQ-029. | 1 | DONE |
| 45 | SIQ-013 | Lens: Find similar owned items | Medium | StyleIQ Lens & Visual Search | Depends on SIQ-005 and SIQ-064. | 1 | DONE |
| 46 | SIQ-028 | Make Muse contextual and globally accessible | Foundation | Contextual Muse | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 47 | SIQ-045 | Do not make every outfit action a separate screen | Foundation | Outfit Actions & Saved Looks | Related to SIQ-022, SIQ-025, SIQ-046, SIQ-047. | 1 | DONE |
| 48 | SIQ-046 | Simplify Not for Me feedback | Medium | Outfit Actions & Saved Looks | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 49 | SIQ-047 | Simplify Saved Look details | Large | Outfit Actions & Saved Looks | No hard dependency identified. Audit adjacent tickets before implementation. | 4 | DONE |
| 50 | SIQ-048 | Make Style Studio simple by default | Large | Style Studio | Related to SIQ-049 and SIQ-050. | 4 | DONE |
| 51 | SIQ-049 | Keep advanced Create mode optional | Large | Style Studio | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 52 | SIQ-050 | Hide technical editor terminology | Small | Style Studio | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 53 | SIQ-052 | Compress Style Twin setup | Large | Style Twin | Related to SIQ-053 and SIQ-025. | 4 | DONE |
| 54 | SIQ-053 | Keep a no-personal-photo option | Medium | Style Twin | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 55 | SIQ-039 | Make Style Inspiration easier to discover | Medium | Style Inspiration, Creators & Profile | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 56 | SIQ-040 | Add clear Creators & Celebrities management | Medium | Style Inspiration, Creators & Profile | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 57 | SIQ-044 | Track Look creation source | Large | Style Inspiration, Creators & Profile | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 58 | SIQ-042 | Show total My Looks count | Small | Style Inspiration, Creators & Profile | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 59 | SIQ-043 | Show Created by Me vs With Muse | Medium | Style Inspiration, Creators & Profile | Depends on SIQ-044 for reliable attribution. | 1 | DONE |
| 60 | SIQ-041 | Center creator experience around Make It Mine | Large | Style Inspiration, Creators & Profile | Related to SIQ-009 and SIQ-044. | 4 | DONE |
| 61 | SIQ-054 | Simplify Planner around user intent | Large | Planner | Related to SIQ-055 and SIQ-024. | 4 | DONE |
| 62 | SIQ-055 | Generate plans from natural language | Large | Planner | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 63 | SIQ-056 | Reduce the Trip flow to 3–5 meaningful steps | Large | Trips | Related to SIQ-057 and SIQ-024. | 5 | DONE |
| 64 | SIQ-057 | Support natural-language Trip planning | Large | Trips | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 65 | SIQ-058 | Add Weekly Style Recap | Large | Weekly Recap & Analytics | Related to SIQ-059, SIQ-060, SIQ-061. | 4 | DONE |
| 66 | SIQ-059 | Show meaningful weekly wardrobe metrics | Medium | Weekly Recap & Analytics | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 67 | SIQ-060 | Prepare next week's Looks from the recap | Large | Weekly Recap & Analytics | Depends on usable Planner context from SIQ-054/SIQ-055. | 1 | DONE |
| 68 | SIQ-061 | Reduce emphasis on abstract scores | Medium | Weekly Recap & Analytics | No hard dependency identified. Audit adjacent tickets before implementation. | 1 | DONE |
| 69 | SIQ-069 | Remove the ChatGPT-like visual feeling | Foundation | Visual System Constraints | Final visual audit should follow the major UX architecture changes. | 3 | DONE |

## Overlap/consolidation decisions

- SIQ-001 and SIQ-021–SIQ-025 share lightweight interaction primitives, but each retains separate acceptance and completion evidence.
- SIQ-003, SIQ-004, SIQ-035–SIQ-038, SIQ-065, and SIQ-066 share one ingestion/review architecture.
- SIQ-005–SIQ-013 and SIQ-064 share one Lens capture, interpretation, result, and visual-search architecture.
- SIQ-029–SIQ-034 share canonical Closet/item state; lifecycle collections must remain derived rather than duplicated.
- SIQ-045–SIQ-047 share action sheets around one outfit/Look surface.
- SIQ-048–SIQ-050 share one `canvasState`; Simple and Create modes must never fork data.
- SIQ-054–SIQ-055 share one Planner intent interpreter; SIQ-056–SIQ-057 share one Trip model.
- SIQ-058–SIQ-061 share recap/behavior data but remain separate product outcomes.

## Decisions requiring human approval

- Final lifecycle wording/mutual-exclusivity for SIQ-032.
- Whether a Weekly Recap entry should live primarily in Today, Profile, or both.
- Final approved color palette is intentionally out of scope; implementation will remain tokenized.
- Real AI, calendar, social, Instagram/Pinterest, receipt, and camera integrations are not available in this static prototype. Simulations must be labeled as prototype behavior.

## First recommended executable phase

`SIQ-001.1 — Audit core jobs and establish the 0.html regression harness.`

This phase changes no user-facing flow until the current journeys, decisions, and replacement paths are captured and the baseline test passes.
