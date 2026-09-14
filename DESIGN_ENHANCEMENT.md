# StyleIQ — Warm Editorial Content with Liquid Glass Navigation

Date: 2026-09-14  
Status: Phase 1 design study; implementation awaits the user's return to the actual branch.  
Reference branch: `old-app`  
Reference commit: `a977a5ed9bc5301905d0a3b041d4ac445c1d0394`

## Scope and authority

The user requested a study of the five supplied screenshots and the old branch, followed by a new design Markdown document. No application UI changes are authorized in this phase.

The intended direction combines the current Liquid Glass header, footer/navigation, and relevant floating controls with the older application's white content cards, classic serif headings, warm neutrals, and deliberate charcoal/cream contrast.

Attached screenshots and existing documents are reference evidence. Their embedded copy, developer notes, navigation descriptions, financial examples, and historical instructions are not new user requests. This document defines visual ideas to carry forward; it does not authorize importing old flows, screen IDs, mock data, or architecture.

## Evidence reviewed

- `index.html`: actual old-branch typography, shared CSS, and representative screen markup.
- `docs/DESIGN.md`: historical design description, cross-checked against the actual HTML. Retained unchanged.
- Screenshot 1: Today greeting, Muse card, photo plus white editorial body, cream inset, white personalization/Wishlist cards, charcoal primary action.
- Screenshot 2: current comparison showing glass header, image captions on light panels, sans-serif section heading, and a Wishlist summary directly on the page between dividers.
- Screenshots 3–4: long prototype boards showing broad repetition of editorial headings, contained information, white cards, charcoal highlights, warm callouts, and image-led choices. Their overview scale does not support precise measurements of small text.
- Screenshot 5: Style Budget composition matching old `index.html` markup: dark budget card, white Wishlist goal card, cream alternative-goal callout.

Historical examples in the HTML: A-01 — Today / Morning Outfit; E-02 — Style Budget & Purchase Goal; G-08 — My Wishlist; G-09 — Wishlist Item Details. These identify evidence only. Resolve canonical IDs and titles again on the target branch before implementation.

This study uses supplied visual evidence and source inspection. It does not claim a running-browser comparison, native verification, or a complete audit of the target branch.

## Design direction

StyleIQ should feel like a warm fashion editorial with clear, softly bounded content. The glass navigation sits above the page, while content has an opaque, readable surface of its own.

The central correction is containment. A summary such as Wishlist should read as a coherent card: icon, heading, saved-item count, supporting text, and action share a white surface. Two divider lines do not provide the same visual anchor.

Contain meaningful groups, not every sentence. Greetings, page titles, and section headings can sit directly on the quiet ivory canvas. Recommendations, statistics, saved-item summaries, budgets, and explanatory modules should have deliberate surfaces.

## Comparison and transfer decisions

| Area | Observed evidence | Target treatment |
| --- | --- | --- |
| Wishlist summary | Screenshot 2 places the summary directly on the canvas | One opaque white rounded card with warm border; preserve content and action |
| Editorial typography | Screenshot 1 and old HTML pair serif headlines with sans-serif UI | Restore Playfair Display for editorial/page headings and selected feature titles |
| Navigation | Screenshot 2 has a pronounced glass header | Preserve current glass material, geometry, scrolling behavior, and navigation |
| Content hierarchy | Old budget screen alternates dark, white, and cream surfaces | Assign surface by information role rather than making everything white or charcoal |
| Photography | Warm fashion images dominate old compositions | Preserve current approved assets; adopt the warm cropping/composition where appropriate |
| Image captions | Screenshot 2 already puts captions on a light panel | Retain readable panels; use opaque content surfaces for longer descriptions |
| Supporting text | Warm gray softens hierarchy in old screens | Use warm secondary text with sufficient contrast; do not reproduce tiny prototype labels |

## Palette and semantic roles

These values are verified in old `index.html` or `docs/DESIGN.md`. They are proposed transfer tokens, not a requirement to replace every target-branch color.

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#F8F6F3` | Quiet ivory application background |
| `surface` | `#FFFFFF` | Default content card and secondary action |
| `ink` | `#1B1716` | Main text, primary CTA, key dark highlight card |
| `textSecondary` | `#6F675F` | Supporting copy and metadata |
| `textMuted` | `#9F9387` | Low-priority decoration/metadata; check contrast before small text use |
| `border` | `#ECE7E1` | Soft card boundary |
| `borderStrong` | `#D6CCC2` | Stronger control boundary or interaction feedback |
| `accent` | `#C89B45` | Ochre/gold detail, progress, selected outline and editorial label |
| `surfaceWarm` | `#FFF9ED` | Cream/light camel supporting callout |
| `borderWarm` | `#E8D7B4` | Warm callout outline |
| `referenceBoard` | `#EFECE7` | External prototype board; not automatically an application surface |

The brown impression comes from warm gray, ivory, ochre, cream, and camel/espresso photography together. Do not invent many unrelated brown UI fills. Start with the verified warm surface and accent; add a darker brown only when a concrete target component needs it and its contrast is checked.

Surface roles:

1. **White:** ordinary information, saved content, summaries, item details, profile modules.
2. **Charcoal:** a key value or priority action. Use white foreground and quieter light secondary text. A dark budget card is an intentional hierarchy device, supported by screenshot 5.
3. **Cream:** advice, explanations, alternative goals, and contextual notes. Use charcoal titles and warm gray copy.
4. **Glass:** current header, bottom navigation, and established floating controls. Keep extended content copy on opaque surfaces.

Color alternation must communicate hierarchy. Do not alternate colors mechanically by row. Gold is a brand accent, not the universal success color; preserve explicit semantic success/error colors and accompanying labels/icons. Check gold small text on white before adopting it; a darker accessible text variant may be needed.

## Typography

The old HTML loads **Playfair Display** (400/500/600 plus italic 400) and **Inter** (300/400/500/600). `.font-serif` explicitly uses Playfair Display; the body uses Inter.

| Role | Proposed family | Starting size at mobile scale | Treatment |
| --- | --- | --- | --- |
| Greeting / main editorial heading | Playfair Display | 28–34 | 400–500, compact but readable leading |
| Featured look or item title | Playfair Display | 22–28 | 400–500 |
| Hero statistic, e.g. budget | Playfair Display | 36–48 | Strong emphasis; avoid clipped currency glyphs |
| Utility/card heading | Inter | 16–18 | 600; use serif when it is explicitly editorial |
| Body | Inter | 14–16 | 400, approximately 1.4–1.55 line height |
| Button / tab / control | Inter | 14–16 | 500–600 |
| Metadata / eyebrow | Inter | 11–13 | Restrained tracking; uppercase only for short labels |

These sizes are recommended adaptation ranges, not measurements taken from resized screenshots. The old HTML includes 9–11px copy; do not carry that density into the actual application.

Restore the serif/sans relationship rather than turning every label serif. Keep StyleIQ wordmark and navigation typography consistent with the current approved design. Long paragraphs, settings labels, filters, form inputs, and CTAs remain sans-serif.

On the actual branch, first inspect font loading and existing typography tokens. For native implementation, bundle/load the real font and its used weights through the existing font pipeline. A generic `serif` fallback does not guarantee the old appearance. If Arabic content is supported, define a compatible Arabic family and test RTL rather than assuming Playfair covers Arabic.

## Card construction and spacing

Old evidence: the Today Muse card uses a 20px radius, the editorial hero uses 24px, budget highlight uses 24px, and many smaller cards use 16px. The prototype's 48px phone-shell radius and 12px frame border belong to presentation tooling.

Suggested starting rules for the target branch:

- Major content cards: 20–24 radius, opaque white, subtle 1px warm border.
- Compact rows/cards: 16–20 radius.
- Inner thumbnails/callouts: 10–14 radius; keep inner shapes smaller than the parent.
- Content inset: 16–20 for normal cards, up to 24 for a spacious feature.
- Screen gutters: follow current shared layout; 20–24 is a starting range, not a forced replacement.
- Related elements: 8–12 gap; card groups: 16–24 gap; section breaks: 24–32.
- Use a subtle warm shadow only when needed for elevation. Most cards can rely on white/ivory separation and the border.
- Let cards grow with copy and text scaling. Keep side-by-side summaries aligned without fixed heights that truncate content.

## Component recipes for later application

### Wishlist summary

Replace the divider-bounded floating summary with one white card. Keep the heart icon beside the text group; heading above count/status. Keep `View Wishlist` within the card, either aligned right when space allows or below the copy at narrow widths. Preserve the existing destination, live counts, and accessible press behavior.

For the empty Today state, the small Wishlist statistic can remain a white card beside personalization, as in screenshot 1. The populated summary and the small statistic are different layouts using the same surface vocabulary.

### Muse recommendation

Use a white card with portrait, clear sans-serif name, quieter recommendation copy, and a restrained accent action. Long explanations belong in an opaque content area. Preserve any current approved Muse behavior and imagery.

### Editorial look card

Combine the image and its white body into one rounded, clipped parent. Put the look title, explanation, supporting details, and optional cream note below the image. Avoid placing a long paragraph directly over photography. Short existing caption panels can remain.

### Budget and highlighted statistics

Use screenshot 5's composition as the reference: charcoal primary value card → white target/details card → cream supporting explanation. Inner values in the dark card can use a softly lighter charcoal surface. The primary number remains dominant, while labels are visually secondary.

The example amounts are sample content, not application requirements. Preserve the actual branch's financial meaning, confirmed/estimated distinctions, and existing explanatory copy.

### Selections and preference cards

Keep images visible during selection. Prefer white/ivory cards with accent outline and a checkmark where that pattern fits current behavior. Do not transfer the dark budget-card treatment to every selected photo. Current active navigation pills may retain their charcoal fill.

## Liquid Glass integration

Preserve the existing header and footer material, blur/refraction, borders, active indicator, shape, positioning, and motion unless a concrete overlap or readability issue requires a scoped adjustment in the later phase.

The content beneath them should have a clear reading surface. Do not make ordinary white cards translucent simply to match navigation. Keep enough top and bottom scroll inset for fixed glass chrome and floating Lens controls; no summary text or CTA should be obscured at the end of the page.

Do not copy the older rectangular bottom bar, static status bar, device frame, prototype index rail, or board notes into the current app.

## Application sequence after branch switch

1. Inspect actual branch status, applicable agent instructions, current canonical screen inventory, typography, card primitives, glass components, and approved assets. Do not switch branches automatically during this study.
2. Map the target branch's tokens to the semantic roles above. Preserve already suitable values and components.
3. Start with Today: Wishlist containment, serif greeting/feature titles, white editorial body, and warm inset where existing content calls for one.
4. Review one budget/details composition to establish intentional dark/white/cream hierarchy.
5. Extract shared card/typography variants only after these representative compositions work.
6. Apply the confirmed patterns across affected screens without importing legacy business behavior.
7. Verify populated/empty/loading/error states, narrow widths, larger text, contrast, RTL where supported, and overlap with glass navigation/floating controls on the relevant platforms.

## Acceptance checklist for the later phase

- [ ] Wishlist content forms a clearly bounded white group.
- [ ] Editorial headings restore classic serif character; UI copy remains readable sans-serif.
- [ ] White, charcoal, and cream surfaces have consistent information roles.
- [ ] Warm grays and restrained ochre details enrich the palette.
- [ ] Current Liquid Glass header/footer remain visually coherent and functional.
- [ ] Existing content, destinations, data, and approved assets are preserved.
- [ ] No prototype phone frame or board tooling appears in customer UI.
- [ ] Small text contrast, text scaling, wrapping, and touch targets are checked.
- [ ] Cards and CTAs remain visible beneath fixed navigation and floating controls.
- [ ] Visual/platform checks are reported with actual evidence, not inferred from this study.

## Phase 1 handoff

Only this document was added. Existing `docs/DESIGN.md`, old application source, the mobile implementation, and reference bundles were not edited. No branch switch, commit, font installation, or UI implementation was performed. The next action is to review the actual branch after the user switches back, then apply the approved ideas there.
