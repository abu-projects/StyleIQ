# StyleIQ tab-system audit

Scope: the active prototype (`index.html`, `app.js`, and `styles.css`). Archived mockups and reference exports are intentionally outside the executable application scope.

## Canonical tab groups

| Screen or surface | Group | Variant | Preserved behavior |
| --- | --- | --- | --- |
| Add to Closet | Photos / Search / Receipts | Primary | Intake source state and rendering |
| Closet | Smart collections | Primary | Collection filtering and counts |
| Discover | For You / Top This Week / Following / brands | Primary | Feed filtering |
| Style Studio | My Studio / Explore | Primary | Studio hub state and persistence |
| My Content | Saved Looks / Trips | Primary | Existing route destinations |
| Closet item detail | Overview / Details / Care / Looks / History | Secondary | Detail-section state |
| Trip Hub | Packing / Looks / Outfits / Days | Secondary | Trip-section state and packing actions |
| Saved Look | Overview / Items / Why it works / Activity / Planning | Secondary | Saved-look section state |
| Style Studio workspace | Simple / Create | Secondary | Studio editing mode and test ID |
| Wishlist | All / Considering / Later / Ready | Compact | Status filtering and counts |
| Closet | Category navigation | Compact | Category filtering |
| Creator discovery | Style categories | Compact | Creator filtering |
| My Looks | Creation-source navigation | Compact | Source filtering |
| Style Studio picker | Active layer | Compact | Edited garment layer |
| Style Studio picker | Piece source | Compact | Candidate-source filtering |
| Style Studio preview | On My Twin / Flat Lay | Compact | Preview-mode state |

Totals: 16 canonical groups — 5 Primary, 4 Secondary, and 7 Compact. The variants preserve semantic intent while sharing the same text-only underline treatment.

## Audited patterns intentionally kept as non-tabs

Fifteen tab-like pattern families were kept as non-tabs because they do not switch peer views in one persistent content context:

- Photo edit mode, item lifecycle, feedback reason, planner occasion, trip context, outfit occasion, styling context, and Look visibility are choice controls.
- Inferred photo signals are multi-select attributes.
- Outfit-family chips are lightweight actions rather than a persistent selected view.
- Closet-building options, Studio entry options, and per-role wardrobe option rails select cards or products.
- Model views control a preview pose.
- Saved Look media controls paginate a carousel; they use grouped buttons with `aria-pressed`, not tab semantics.

## Implementation note

This repository is a dependency-free HTML/CSS/JavaScript prototype and has no React component runtime or HeroUI package. A literal HeroUI `Tabs` dependency therefore cannot be mounted without changing the application architecture. `AppTabs` and `AppTabPanel` are the single framework-native compatibility layer: they expose the requested semantic variants, use StyleIQ tokens, and implement the equivalent tablist/tab/tabpanel contract, roving focus, arrow/Home/End activation, focus-visible states, 44px targets, and horizontal mobile scrolling.

Removed legacy styling includes the Wishlist filter rail, Closet category rail, intake source tabs, Trip tabs, Studio hub tabs, Studio experience switch, Studio preview tabs, and the older generic `siq-tabs` layer.
