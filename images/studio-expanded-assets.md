# Studio expanded wardrobe assets

Generated with the built-in imagegen tool for the F-01 interactive prototype. These are prepared demo assets, not a live try-on service.

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

