# Phase 3 — Unified Design System & UI Recomposition

## Skill / reference used

- Skill: official `heroui-react` Agent Skill, HeroUI v3.0.1, authored by HeroUI.
- Why: it directly covers component composition, semantic variants, token theming, BEM-style class architecture, and React Aria-based state/accessibility patterns.
- Sources: official HeroUI v3 getting-started/component index and component documentation for Input/TextField, Select, Autocomplete, Button, Card, Surface, Disclosure, Tabs, Modal, and Drawer.
- Translation: static `.siq-*` HTML/CSS/JavaScript primitives; no React, Tailwind, or HeroUI runtime dependency.

## Design system

The final stylesheet layer establishes 41 semantic token declarations/aliases covering StyleIQ color roles, 4–48px spacing, five radii, three elevation roles, typography, a 52px control height, 44px hit target, and constrained content width.

Standardized components: Field, Input, Textarea, Select, Autocomplete, Search, OTP, Button, Icon Button, Chip, selection controls, Tabs, Disclosure, Surface, Card, Modal, Drawer/Sheet, Toast, Empty State, AI Insight, and Skeleton. The runtime migration layer decorates all canonical and compatibility-rendered markup after each render so behavior hooks may coexist with one visual system.

## Components replaced

| Area | Before | After |
| --- | ---: | ---: |
| Text inputs | 8 visual/anatomy variations | 1 SIQ field/input family plus intentional search and OTP members |
| Selects | 5 treatments | 1 SIQ Select family |
| Buttons | 11 treatments | 4 intentional semantic variants plus icon-only sizing |
| Cards/surfaces | 12 grouping patterns | 2 controlled roles: Surface and Card, with transparent nesting |
| Chips/filters | 6 treatments | 1 SIQ Chip family |
| Headers | 7 constructions | 3 semantic variants: standard, root, immersive |
| Drawers/modals | 11 overlay treatments | SIQ Drawer and SIQ Modal families |
| Disclosures | 6 treatments | 1 native details/summary pattern |

## Liquid glass

Strong glass remains on the canonical header and floating five-destination bottom navigation. Secondary use remains on transient sheets/overlays and selected contextual floating controls. Ordinary fields, buttons, cards, choices, and content containers were removed from the pointer-reactive glass selector and use clean editorial surfaces.

## Screen-by-screen review

Every canonical screen was reviewed against primary task, visual, CTA, always-visible content, disclosure, nesting, spacing, and shared component use.

| Screen | Primary task / visual | Recomposition outcome |
| --- | --- | --- |
| S-00 | Enter StyleIQ / wardrobe hero | Immersive visual preserved; shared type/token foundation applied. |
| S-01 | Meet Muse / runway video | Runway-video direction preserved; actions normalized without form-like treatment. |
| A-01 | Sign in / editorial auth | Glass form card flattened; login fields and provider actions joined the SIQ families. |
| A-02 | Choose first goal / guided choices | Choice controls, hierarchy, spacing, and CTA normalized. |
| A-16 | Create account / identity form | Heavy shell removed; first/last/email use equal anatomy; sign-in footer integrated by divider and whitespace. |
| B-01 | Add Closet items / intake media | Search, inputs, chips, sheets, and import actions standardized; existing guidance visual retained. |
| B-06 | Review processed items / garment preview | Fields, uncertainty controls, disclosure, feedback, and confirmation CTA normalized. |
| C-01 | Browse Closet / garment grid | Canonical header/search/filter/card/nav styling applied; image-first grid retained. |
| C-02 | Inspect/edit item / garment hero | Editors and intelligence use fields/disclosure/AI panel; nested surfaces flatten. |
| D-02 | Choose today’s Look / editorial outfit | Media-first hierarchy retained; contextual reasoning and actions normalized. |
| F-01 | Build a Look / Studio canvas | Workspace remains media/tool-first; tabs, sheets, layers, save actions, and cards normalized. |
| G-01 | Browse saved Looks / look grid | Filter chips, cards, empty states, and creation CTA unified. |
| G-02 | Use/manage saved Look / look media | Peer sections use tabs/disclosures; nested panels flatten and actions standardize. |
| G-08 | Review Wishlist / product list | Search, budget fields, product cards, chips, modal, and actions standardized. |
| G-09 | Evaluate purchase / product comparison | Recommendation hierarchy, decision actions, surfaces, and confirmation dialog unified. |
| H-01 | Start Style Twin / reference visual | Editorial reference imagery retained; steps, choices, and CTA standardized. |
| H-06 | Enter Twin details / reference adjustment | Directly recomposed into intro, core fields, and one optional disclosure with separated label/value rows. |
| H-10 | Use completed Twin / generated preview | Generated result remains primary; actions use controlled hierarchy. |
| H-11 | Discover stylists / fashion feed | Photography remains primary; filters, creator cards, and navigation normalized. |
| H-12 | Explore stylist / profile media | Profile hierarchy and featured Look cards standardized. |
| H-13 | Make Look mine / outfit breakdown | Media, piece states, Muse insight, and CTA hierarchy unified. |
| I-01 | Plan wardrobe / calendar | Root glass header/nav retained; calendar, insight sheets, and actions normalized. |
| I-04 | Add event / event form | Inputs/selects share anatomy; optional details use one disclosure; CTA spacing normalized. |
| J-01 | Browse/plan trips / travel visual | Existing editorial empty-state/trip imagery retained; CTA and cards unified. |
| J-02 | Describe trip / structured trip form | Destination gains accessible autocomplete; dates/text/optional fields and CTA use shared primitives. |
| J-08 | Manage trip / packing and Looks | Tabs, packing rows, chips, sheets, modal, and save actions normalized. |
| K-01 | Discover inspiration / fashion feed | Root header, search, filters, cards, and bottom nav unified. |
| K-04 | Inspect community Look / outfit media | Comments/report overlays, contextual AI insight, and actions standardized. |
| L-01 | Use My Atelier / profile visual | Profile sections, inline editor disclosure, cards, and navigation normalized. |
| L-04 | Edit style preferences / preference form | Inputs, brand/search selections, chips, and sections standardized. |
| L-11 | Manage settings / settings list | Rows, toggles, disclosures, danger actions, header, and spacing unified. |
| L-12 | Learn product / tutorial visual | Tutorial steps and actions use shared typography and controls. |
| L-14 | Get help / help topics | Search/list/disclosure/actions normalized with calmer section grouping. |
| M-01 | Ask Muse / contextual stylist | Composer field, suggestions, wardrobe-gap insight, and floating context use the SIQ system. |

Summary: **34 reviewed, 34 migrated to shared primitives, 2 directly recomposed (A-16 and H-06), 32 required no route-specific structural rewrite.** Five representative patterns (A-16 forms, H-06 field/disclosure, D-02 editorial content, F-01 complex workspace, and G-08 list/card state) informed the shared rollout.

## Visual cleanup

- Removed strong glass/refraction from authentication content surfaces.
- Removed ordinary cards, choices, chips, and buttons from the reactive liquid-glass selector.
- Established consistent page/section/field/action rhythm and a bottom safe-area inset.
- Flattened nested surfaces and removed default content elevation.
- Preserved purposeful editorial imagery: S-00 wardrobe, S-01 runway video, Closet/item photography, Today outfits, Trip visual, Style Twin reference/result, stylist photography, Muse insight graphics, and existing empty-state art.
- Constrained desktop content width while allowing mobile scrolling rather than compression.

## Accessibility

- Runtime enforcement supplies a programmatic label for every visible input/select/textarea that lacks one.
- Descriptions/errors are connected through `aria-describedby` where present.
- All shared controls have a visible focus treatment and disabled/invalid states.
- Destination and brand/product autocomplete expose combobox/listbox/option state with Arrow, Enter, and Escape support.
- Disclosures mirror native `open` to `aria-expanded` and `aria-controls`.
- Dialogs receive canonical roles/styles, focus entry, a Tab loop, and Escape dismissal; the native Wishlist dialog retains focus restoration.
- Bottom navigation maintains five named destinations and `aria-current` state.

## Regression and verification

Automated structural suite added: `tests/design-system-consistency.spec.js`, covering canonical controls, selects, buttons, headers, bottom navigation, 375×812 overflow, CTA/navigation collision, labels, visible focus, autocomplete behavior, and the exact 34-screen inventory.

Completed checks:

- `node --check app.js`: pass
- `node --check tests/design-system-consistency.spec.js`: pass
- `git diff --check`: pass
- Static inventory assertion: 34 canonical screens
- Static system inventory: 41 SIQ token declarations/aliases

Browser checks were attempted but could not start in the current restricted execution sandbox:

- Local Playwright web server: blocked before tests (`socket(): EPERM`)
- Durable systemd server: blocked (`Failed to connect to bus: Operation not permitted`)
- Direct Chromium/file launch: blocked by Chromium crashpad socket (`setsockopt: EPERM`)

Therefore no browser assertions or screenshots executed in this environment. Recorded totals for both requested runs are **0 passed / 0 failed / 0 skipped; runner blocked before test discovery/execution**. The historical closure baseline remains 148/148, but this change set cannot truthfully claim a new 148/148 run until executed in a browser-capable environment.

## Architecture

- Visible inventory remains exactly 34.
- Compatibility inventory remains 93 and route ownership is unchanged.
- Supported routes remain 127.
- No product flow or route logic was intentionally changed.
- Implementation remains static HTML/CSS/JavaScript; React was not introduced.
