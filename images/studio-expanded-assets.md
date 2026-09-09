# Studio expanded wardrobe assets

Generated with the built-in imagegen tool for the F-01 interactive prototype. These are prepared demo assets, not a live try-on service.

## September 9 fitting correction

- `studio-avatar-front.jpg` restores the original registered front-facing atlas. Independent tops, trousers and shoes only use this pose; they must never be cut from the editorial pose atlas.
- `studio-jackets-fitted.png` contains fitted front panels and sleeves at the front model's scale. The generated file has an opaque neutral backdrop, **not PNG alpha**. CSS silhouette clips remove the outside and open center. Do not render this file as an unmasked wearable. The old jacket atlas remains the product thumbnail source.
- `studio-walk-ivory.jpg` contains four complete photographs of the ivory shirt / black trousers / tan loafers look: forward step, side, back and backward step.
- `studio-walk-dress.jpg` contains those four complete views of the black midi dress / black ankle boots look.
- `studio-avatar-poses.jpg` is now used only as complete photos for the exact matching rust/cream/sneakers, black/charcoal/boots and blue/jeans/flats outfits. No body-part crops from this file are allowed.

Pose views are selected still photographs, not a continuous video or 3D rotation. Adding a different garment or accessory returns to the registered front view. The complete-look buttons explicitly apply outfits that have prepared pose photos. Supporting arbitrary outfits in every angle requires additional matched assets or a rendering service.

New image generation used the original front atlas as the identity/garment reference, requesting four equal 384 × 1024 columns on a 1536 × 1024 canvas, unchanged clothing across four natural poses, full head-to-toe framing and a warm neutral background. The dress pose asset was subsequently edited to match the lower heels of the existing black boots. Jacket generation requested open fronts aligned to the model's shoulders and arms; alpha generation produced a painted checkerboard, so the final asset uses a neutral backdrop and explicit browser clipping instead.

Verification: JavaScript syntax check, diff whitespace check, 1,296 rendered outfit combinations (pose eligibility, unsplit complete photos, visible selected-piece controls, dress separation) and restoration of previous separates. Browser checks at 375 × 812 and 1280 × 900 covered the reported black blazer/cream trousers combination, all jacket and dress selections, accessory chips, full pose views, horizontal scroll selection and resize stability. These checks do not claim photorealistic fitting for every possible combination.

- `studio-dresses.jpg`: four registered full-body dress views; generated using `studio-avatar-wardrobe.jpg` as the reference, converted to JPEG for delivery.
- `studio-jackets.png`: four jacket options with alpha; the interface clips the open fronts to retain the independently selected top/dress underneath.
- `studio-accessories.png`: 3 × 3 atlas of sunglasses, earrings, and watches, with alpha.

## Final prompts

### Dresses

Edit this fashion sprite sheet to change ONLY outfits to FOUR different dresses. Preserve exactly the same 1536x1024 dimensions, four 384x1024 columns, identical woman identity, pixel registered pose, head, hands, feet, lighting and plain warm off-white background. No text borders. Column1 black sleeveless fitted midi dress, column2 sage green sleeveless A-line midi dress, column3 burgundy short sleeve wrap midi dress, column4 cream sleeveless fitted midi dress. Hem at y=78% so ankles and shoes remain separate at y=87.2%. All shoes identical tan loafers. Keep each model's head and feet EXACTLY at original reference positions. Full outfit photo for interactive dress replacement.

### Jackets

Transparent background PNG cutout: 4 realistic open-front women's jackets in one horizontal row, black blazer, camel blazer, blue denim jacket, olive utility jacket. Invisible mannequin product photos; sleeves hanging down, hollow open center, no shirts or bodies. Output actual transparent background, NOT a checkerboard drawing. All 4 objects aligned in four equal width columns, centered vertically. 1536x1024 landscape. High quality sharp cutouts for overlay compositing. Every background pixel must be fully transparent alpha.

### Accessories

Create a photorealistic luxury accessories product sprite atlas PNG with TRUE transparent background. Square 1536x1536 exact THREE by THREE equal square cells, no lines or text. One centered accessory product per cell with generous margins, fitting centered 80% of cell. Row1 front-facing sunglasses: column1 black rectangular sunglasses, column2 tortoiseshell cat-eye sunglasses, column3 thin gold aviator sunglasses. Row2 pairs of earrings, front view, each pair with wide gap: column1 small gold hoop pair, column2 pearl stud pair, column3 silver drop earring pair. Row3 vertical front view wristwatches with straps: column1 small silver metal watch, column2 tan leather gold watch, column3 black slim watch. No people, no boxes, no pedestal, no cast shadow, isolated genuine transparency including gaps and lenses translucent charcoal. Visually precise polished materials. This sheet will be cropped into nine equal cells and used as wearable overlays and chooser thumbnails.
