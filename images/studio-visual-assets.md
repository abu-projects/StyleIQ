# Studio visual assets and rendering

The Studio now uses one canonical Look (`canvasState.items`) and a shared visual picker for both On My Twin and Flat Lay. The existing draft persistence, Save route, Simple/Create controls, Twin setup and Closet schema remain in place.

## References inspected

- `videos/WhatsApp Video 2026-08-11 at 07.12.43.mp4`: full-body Twin and directly connected visual clothing selection. Frames inspected at 15%, 40%, 65% and 85% of its 27.285-second duration.
- `videos/WhatsApp Video 2026-08-11 at 07.12.51 (1).mp4`: product selection and composed flat lay. Frames inspected at the same intervals of its 36.17-second duration.

Flat Lay uses fixed responsive composition zones. Tapping a piece changes the active category, and choosing a replacement updates the canonical layer. Free positioning is intentionally omitted as allowed by the brief; only the existing reorder controls change layer order.

## Product artwork

Existing `alta-*` product cutouts are reused. Missing products use `images/studio-product-sprites.png`, generated with the built-in `image_gen` tool. It has four columns and three rows. CSS shows a single cell per product without altering the canonical Closet records. The final generation prompt was:

Photorealistic ecommerce isolated product sprite sheet. Exactly FOUR equal columns and THREE equal rows, twelve square cells, landscape 4:3. Genuinely transparent background with alpha, no checkerboard, no text, no dividers, no mannequins, no people, no hangers. Each product centered within its cell with generous 15% padding; every entire product visible, consistent soft lighting. Row1 left to right: ivory sleeveless silk shell; black tailored open blazer; camel tailored blazer; beige long trench coat. Row2 left to right: cream wide-leg trousers; pair of minimal white leather sneakers; brown structured leather tote bag; pair of small gold hoop earrings. Row3 left to right: washed black asymmetric off-shoulder fitted mini dress with flared skirt; pair black knee-high heeled boots; cream relaxed button shirt; pair tan pointed flat shoes. Flat lay front view for garments. Matching high-end warm neutral wardrobe. Precisely twelve separate objects or pairs each confined to its equal square cell, used separately via CSS sprites.

## Twin rendering boundary

Known matching Looks use the existing prepared Twin images. A changed Look shows its actual current pieces, “Preview needs refresh” and “Update Try-On”. No remote generation service is configured in this static prototype, so unsupported Looks show an explicit unavailable message without losing edits or falsely displaying a successful render.

An optional host integration can provide `window.styleiqStudioRenderer({twin, look})`, returning a promise for `{image}`. Requests receive snapshots. Results are cached separately from the draft against a key containing the Twin identity and the visible canonical pieces. A result produced while the user changes the Look is kept out of the current preview. Errors retain the draft and allow retry. This interface is tested with a mocked external renderer, not a live AI service.

Studio Lens uses the existing capture and intent flow, then offers sample Closet matches for the active role that return directly to the same Studio draft. Existing Lens behavior on other screens is unchanged.

## Verification

`tests/studio-routes.spec.js` covers shared selections, all Studio compatibility routes, source filters, Lens return, empty state, visibility/reorder/removal, Save, persisted view/category state, and stale async render handling. `tests/try-on.spec.js` and `tests/twin-scenarios.spec.js` guard the separate Today and Profile Twin flows.
