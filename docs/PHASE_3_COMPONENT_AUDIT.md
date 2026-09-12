# Phase 3 Component Audit

## Scope and baseline

Audit completed before Phase 3 UI implementation against the active static prototype: `index.html`, `styles.css`, and `app.js`.

- Visible canonical screens: **34**
- Hidden compatibility routes/states: **93**
- Supported routes: **127**
- Runtime architecture: static HTML, CSS, and JavaScript
- React dependencies: none

Canonical screens reviewed in the inventory: S-00, S-01, A-01, A-02, A-16, B-01, B-06, C-01, C-02, D-02, F-01, G-01, G-02, G-08, G-09, H-01, H-06, H-10, H-11, H-12, H-13, I-01, I-04, J-01, J-02, J-08, K-01, K-04, L-01, L-04, L-11, L-12, L-14, and M-01.

## Source inventory

The screen templates contain 57 input elements, 9 selects, 7 textareas, 544 buttons, 28 native disclosures, and one native dialog. Visual duplication is higher than the element count because later CSS layers repeatedly redefine the same legacy classes.

| Current element | Variations found | Canonical replacement |
| --- | ---: | --- |
| Text input | 8: base input, auth input, inline editor, search, date/time, numeric, OTP, visually bare input | SIQ Field + SIQ Input; SIQ OTP for verification |
| Textarea | 4: base input textarea, trip prompt, Muse composer, notes/editor | SIQ Field + SIQ Textarea |
| Select | 5: input-styled select, select row, rail select, filter select, inline editor | SIQ Field + SIQ Select |
| Search | 5: rail search, global search, mirror search, picker search, input search | SIQ Search |
| Button | 11: base, primary, gold, ghost, danger, text action, icon button, mirror action, provider, CTA-specific, tool button | SIQ Button with primary, secondary, ghost, danger, and icon-only variants |
| Card | 12: base, flat, dark, signal, choice, progressive, profile utility, settings list, item card, planner card, nested editor card, glass card | SIQ Section, SIQ Surface, or SIQ Card based on grouping and prominence |
| Chip | 6: base, active, filter, pill, tag, studio quick action | SIQ Chip / native radio-card selection |
| Tabs | 5: tab row, mirror tabs, studio tabs, segmented switch, profile tabs | SIQ Tabs / SIQ Segmented Control |
| Modal | 4: overlay modal, alert dialog, confirmation dialog, report dialog | SIQ Modal using native dialog semantics where practical |
| Drawer/sheet | 7: bottom sheet, notifications sheet, account menu, lightweight panel, picker sheet, comments sheet, lens layer | SIQ Drawer/Sheet |
| Disclosure | 6: plain details, progressive card, refine panel, settings group, layer row, formula disclosure | SIQ Disclosure using native details/summary where suitable |
| Header | 7: shell header, screen head, onboard top, mirror head, instant header, immersive entry header, custom studio header | SIQ Header: standard, root, or immersive |
| Bottom navigation | 1 shared renderer with several accumulated CSS definitions | SIQ Bottom Navigation with five fixed destinations |
| Feedback | 7: toast, inline error, success badge, validation card, skeleton, empty state, AI status | SIQ Toast, Field Error, Status, Skeleton, Empty State, and AI Insight |

## Duplicate-system findings

1. `:root` is redefined repeatedly across the stylesheet, including competing palettes, radii, shadows, and surface meanings. The last cascade currently changes StyleIQ's gold accent to near-black and uses an unrelated indigo focus ring.
2. `.input`, `.btn`, `.card`, `.chip`, and `.bottom-nav` are each redefined in multiple historical layers. Equivalent controls therefore inherit appearance based on route-specific ancestry and source order.
3. Form anatomy varies: some controls have a direct label, some wrap labels in an auth header, some are visually presented as rows, and several compact controls rely on placeholder text or group labels.
4. A-16 places its form inside a strong glass/refraction shell and uses separate first/last-name construction from the email construction.
5. H-06 mixes a free text Height field with a visually different Fit Reference select and nests refinement controls inside multiple heavy containers.
6. Cards are often used as layout wrappers, disclosures, alerts, action rows, and navigation links. This creates card-within-card density on merged screens.
7. Glass selectors currently include ordinary cards, choices, buttons, and chips. This conflicts with the intended navigation-first use of liquid glass.
8. Header markup is not canonical across all renderers, even though the product only needs standard, root, and immersive variants.
9. Existing native controls and semantic elements provide a good accessibility base, but focus styling, error association, expanded state, and modal focus management require normalization.

## Canonical replacement rules

- Every editable control receives the SIQ field/control anatomy at render time; screen-specific classes may remain only as behavior hooks during migration.
- Native `select`, `details`, `button`, `input`, and `textarea` remain the default accessible implementation.
- Cards are retained only for discrete grouped objects. Page layout and form grouping move to sections, whitespace, and dividers.
- Glass is reserved for the canonical header, bottom navigation, transient overlays, and selected floating AI/media controls.
- Semantic tokens are the source of color, type, spacing, radius, border, elevation, and focus values.
- Compatibility routes continue to resolve to the same 34 canonical visual owners.

## Wave review

| Wave | Screens | Main audit outcome |
| --- | --- | --- |
| 1 — Foundation/forms | A-01, A-02, A-16, H-01, H-06, I-04, J-02, L-04, L-11 | Normalize all fields, selections, disclosures, form rhythm, and CTAs; A-16 and H-06 require direct recomposition. |
| 2 — Daily product | D-02, C-01, C-02, B-01, B-06, G-08, G-09 | Reduce card nesting; standardize search, filters, item cards, contextual AI, and primary actions. |
| 3 — Looks/studio | F-01, G-01, G-02, H-10, H-11, H-12, H-13 | Preserve media-first workspaces; standardize tabs, tool actions, provenance, sheets, and save CTAs. |
| 4 — Planning/discovery/profile | I-01, J-01, J-08, K-01, K-04, L-01, L-12, L-14, M-01 | Normalize lists, tabs, overlays, settings rows, empty states, and Muse insight surfaces. |
| 5 — Entry | S-00, S-01 | Preserve the runway-video and immersive direction; align actions and typography only. |

## Screen review rubric

Every canonical screen is reviewed against the same questions: primary task, primary visual, dominant CTA, always-visible content, progressive disclosure, card nesting, shared component use, whitespace, visual calm, and StyleIQ identity. Significant outcomes are recorded in `PHASE_3_UI_RECOMPOSITION_REPORT.md`.
