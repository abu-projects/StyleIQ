# StyleIQ Visual & Outfit-First Rules

## Product hierarchy

Use `See outfit → Take action → View details if needed`. The outfit is the primary object; imagery, pieces, brands, Closet coverage, and actions appear before styling theory. Aim for an image-led first viewport and keep support copy to one short sentence.

## Shared implementation

`window.StyleIQOutfitUI` in `index.html` exposes the shared model and renderers:

- `renderHero`, `renderOutfitCard`, and `renderPieces`
- `renderClosetMatch` and `closetSummary`
- `renderBrandStrip`, `renderActions`, and `renderMissingPiece`
- `tryOnState`, `MATCH_STATES`, and `OUTFIT_ACTIONS`

Reusable CSS uses the `si-` prefix. Section Z patterns Z-3 through Z-5 are the visual reference implementations for outfit detail, Creator outfits, missing pieces, and zero-Closet value.

## Standard behavior

- Primary outfit actions: **Try On** and **Make From My Closet**.
- Add only context-relevant secondary actions: Wear, Save, Edit, Plan, See Another, Shop Missing, View Pieces, or Share.
- Closet match states are exactly **Owned**, **Similar Owned**, and **Missing**. Show a compact count and piece thumbnails; do not explain the count in a paragraph.
- Show each piece's brand immediately. Product names are secondary metadata.
- Try On routes to the dressing experience when a Style Twin exists. Without one, the outfit stays usable and setup is an optional route, never a gate.
- Zero Closet still receives complete StyleIQ/editorial outfits. Use one clear visual action; Closet setup may be offered secondarily.
- Put Why This Works, Styling Details, Style DNA, formulas, and recipes in a collapsed disclosure by default.
- Creator order is **identity → outfits → recreate / try on / shop missing**. Monetization begins from a missing outfit piece, not a generic product catalog.
- Missing-piece cards may show brand, item, price, New/Pre-owned state, and Find Similar/Shop Missing/Save actions.

## Copy constraints

- Screen title: roughly 2–5 words.
- Supporting copy: one short sentence by default.
- Card description: none when imagery and metadata are sufficient; otherwise one short line.
- Do not repeat visible image, brand, status, or action information in prose.
- Prefer thumbnails, icons, status badges, counts, and swatches over explanation cards.

## Current prototype implementation map

| Section | Pattern | Classification | Later action |
| --- | --- | --- | --- |
| A — Today | Starter outfit imagery exists, but zero-Closet actions prioritize setup and populated outfits lack the shared action pair | SIMPLIFY | Apply the Z-3/Z-5 hierarchy in WP-12 |
| A — Outfit details / Muse | Hero imagery exists; rationale and missing-role explanation are prominent; piece brands and shared Closet match are incomplete | REPLACE / MOVE TO SECONDARY | Use hero, branded piece strip, match count, action pair, disclosure |
| B — Saved Looks | Canonical renderers preserve outfit entities and Planner handoff | KEEP | Adopt shared outfit card/hero without changing data ownership |
| C — Closet | Strong item imagery exists; zero state remains instruction-led and item reasoning repeats prose | SIMPLIFY | Keep Closet Item canonical; add outfit inspiration and visual relationships later |
| D — Planner | Planned Look is a canonical outfit destination | KEEP | Reuse outfit hero, pieces, and context-appropriate Wear/Edit actions |
| F — Profile | Atelier imagery improved; style-learning explanations and empty blocks remain | SIMPLIFY / REMOVE LATER | Lead with saved outfit/visual grids in its future work package |
| G — Discover | Shopping and Wishlist relationships are already canonical; some product/reasoning cards lead over outfits | REPLACE | Make outfits the entry object and reveal shopping through missing pieces |
| H — Studio / Creator | Studio supports visual composition; Creator profile currently leads into patterns/formulas before enough outfit imagery | MOVE TO SECONDARY | Use Creator outfit cards before theory in WP-14 |
| X/Y — Onboarding | Style Twin is optional and visual learning exists | KEEP | Preserve optional setup; apply shorter copy only in its later package |

Do not duplicate the canonical Outfit, Closet Item, Wishlist Item, Planner, Creator, Style Twin, external-listing, or Style Budget data models when adopting these views.
