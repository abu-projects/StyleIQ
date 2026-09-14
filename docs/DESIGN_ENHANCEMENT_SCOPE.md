# Design Enhancement — historical style transfer

Date: 2026-09-14
Source: `old-app`, commit `a977a5ed9bc5301905d0a3b041d4ac445c1d0394`, `index.html`.
Target: current main branch, 35 canonical screens. Compatibility route E-06 shares the component treatment.

The latest request supersedes the earlier 29-screen scope: use the historical component composition and styling with the current content and flows, preserving Liquid Glass navigation. Historical screenshots and example figures are visual evidence; no historical content, financial amounts, routes or data models are imported.

## Source recipes

The reference uses ivory canvas #f8f6f3, white cards, ink #1b1716, warm borders #ece7e1 / #d6ccc2, gold #c89b45 and cream #fff9ed. Playfair Display supplies editorial headings and Inter supplies body, forms and controls. Page interiors use 24px spacing, feature bodies 20px, utility cards 12–16px, outer corners 24px and smaller utility corners 12–20px. Content cards have opaque surfaces rather than glass blur.

Today uses an image above an attached white body; Discover feature images and product information are complete cards. Wishlist uses horizontal white item rows rather than loose metadata below a two-column image grid. Profile and planning forms contain their expanded content within bordered white cards. Cream notes and charcoal buying-preferences summaries provide the historical hierarchy. Current images, copy, controls, statuses and navigation remain current.

## Current inventory and transfer

| Current routes | Historical family | Applied treatment |
| --- | --- | --- |
| S-00, S-01 | Welcome / editorial opening | Serif editorial typography and charcoal action hierarchy; retain current opening media composition. |
| A-01, A-16 | Account entry / email | Serif title, opaque white fields and charcoal actions; current authentication fields and methods. |
| A-02 | Who are we styling | White choice sections, warm inset choices, serif section headings and gold labels. |
| B-01, B-06 | Add pieces / confirm item | Opaque intake panel and contained review disclosure, warm guidance, current import states. |
| C-01, C-02 | Closet / item intelligence | Image with attached white caption, white title/metrics groups and contained lifecycle details. |
| D-02 | Daily look loop | Image above white feature body, attached alternative-look captions, white Muse/Wishlist summaries. |
| F-01 | Style building | Current interactive canvas retained; source typography and solid context/control surfaces where applicable. |
| G-01, G-02 | Saved looks | White image/caption objects, contained details and serif editorial headings. |
| G-08, G-09 | Wishlist / purchase assessment | Horizontal item cards, white shortlist/assessment groups, charcoal preferences, cream guidance. |
| H-01, H-06, H-10 | Build your Style Twin | White reference/detail/result panels, gold step labels and solid fields. |
| H-11, H-12, H-13 | Creator / editorial discovery | Contained creator bio/captions, white look groups and cream Muse notes. |
| I-01, I-04 | Planner | White schedule/event groups, solid event form and contained expanded details. |
| J-01, J-02, J-08 | Trip / packing | White travel entry card, contained setup form and packing summary/rows, cream intent notes. |
| K-01, K-04 | Discover / editorial shopping | Attached feature image/body and full white product cards including brand, price and advice. |
| L-01, L-03 | My Atelier / content | White utilities, statistics and content panels, serif editorial titles and gold labels. |
| L-04 | Profile / preferences | Opaque rounded disclosures; expanded fields stay within card padding and bounds. |
| L-11, L-12, L-14 | Settings / tutorial / help | White grouped utility/help sections, warm accents and serif editorial introductions. |
| M-01 | Muse | White welcome/recommendation groups and cream contextual guidance; current conversation layout. |

This is a transfer between different inventories (historical board and current 35 routes), not a replacement with historical HTML. The current compositions that have no direct historical counterpart retain their task structure.

## Verification

Charcoal is now a content-section material for Atelier overview, item/Look metrics and product budget context, with white values, muted light labels, gold emphasis and lighter charcoal inset metrics. Cream text highlights sit inside white first-use Today, Twin introduction and purchase-evaluation cards, and in Muse response notes. Current values and copy are preserved.

All 35 routes were inspected for content width and restored component hooks at 375px. Representative source-layout families were visually checked, including Discover, Today, Wishlist, profile preferences, event/trip forms, import, Closet, Studio, Twin and settings. Previous narrow 320px checks cover shared summary wrapping. These checks do not establish pixel identity for every conditional state.

The regression assertion for expanded forms now checks opaque cards, field containment and secondary-copy placement. Existing broader import/trip/scenario/settings failures were reproduced on isolated unchanged HEAD (8 failures, 1 pass); their retired controls and expectations are not changed as part of style work.

The broader relevant run passed 17 checks. The final design-system run passed all 9 selected checks. Five Studio failures were also reproduced on unchanged HEAD at the same missing controls. JavaScript syntax and whitespace checks passed. Final visual checks confirmed the Twin disclosure indicator and narrow Wishlist layout; the shortlist stacks below 350px to keep its current image clear of the title.
