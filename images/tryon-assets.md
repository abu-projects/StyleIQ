# Try-On prepared assets

Generated with the built-in `image_gen` tool. These are prepared prototype views of the existing `body_front.png` Twin identity, not live personalized rendering or a 3D engine. Twin setup remains the existing simulated setup.

- `images/tryon-tailoring-views.png`: four columns (Front, 3/4, Side, Back), two rows (Coffee Meeting, Soft Tailoring).
- `images/tryon-reference-dress-views.png`: four columns (Front, 3/4, Side, Back), one row. Dress and boots inspired by the supplied WhatsApp video, sampled at 3 and 7 seconds.

`tryOnLooks` in `1.html` holds the selected formula and asset manifest. `tryOnSession` binds that selection to the completed Twin ID and stores angle, background context, origin, and return route. A production renderer can replace the prepared assets with outputs keyed by Twin ID and Look ID. Background context is currently `neutral`; no background-changing UI is implied.

## Final prompt: tailoring views

Use case: identity-preserve. Create a precise photographic sprite sheet for a virtual try-on prototype: 4 equal columns by 2 equal rows, total 2048x2048 square. Each cell 512x1024 portrait, no borders, no text. SAME woman as FIRST input image, preserve her face, black tied-back hair, skin tone, body proportions across ALL eight cells. NOT the woman in second reference. Full head to soles visible with generous margins, model fills 90% height, fixed scale, centered in each cell. Seamless warm ivory studio background in every cell, soft diffuse lighting. TOP ROW outfit Coffee Meeting: black tailored open blazer, ivory silk shell, black straight trousers, tan suede loafers, small gold earrings. BOTTOM ROW outfit Soft Tailoring: camel blazer, ivory silk shell, cream wide-leg trousers, tan pointed flats, small gold earrings (outfit inspired by second input). In each row columns from left to right: straight FRONT, THREE QUARTER facing left, LEFT SIDE profile, straight BACK. Exact same garments shoes and identity across four angles within each row. Hands relaxed at sides. No furniture props bags or cropping. Eight separate standing full body figures aligned precisely in equal grid cells. This sheet will be shown one cell at a time using CSS background positioning.

Inputs: `body_front.png`, `outfit_soft_tailoring.png`.

## Final prompt: client reference Look

Use case identity-preserve. Prepare a photographic virtual try-on sprite sheet, landscape ratio 2:1, FOUR EQUAL VERTICAL PANELS in ONE ROW. Each panel contains the full body same woman from FIRST input reference, face identity and proportions and tied back black hair preserved. Dress her in the exact outfit from SECOND and THIRD reference video screenshots: washed black asymmetric off-shoulder fitted denim mini dress, wide asymmetric folded neckline with one shoulder bare, subtly flared short skirt, black knee-high leather heeled boots. Do not use original woman from video. Panel order FRONT, THREE QUARTER facing left, LEFT SIDE profile, BACK. Equal panel widths, all head to soles visible with generous margins at same fixed scale 90% height. Clean light grey studio wall and floor like the video, minimal soft shadows. No borders, no UI, no text, no icons, no screenshot chrome. Preserve exact same outfit and body across all four views. Used one panel at a time in a swipe viewer.

Inputs: `body_front.png`, frames at 3 and 7 seconds from `videos/WhatsApp Video 2026-09-04 at 23.55.18.mp4`.
