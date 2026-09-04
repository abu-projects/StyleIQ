# StyleIQ `index.html` → `al.html` Mirror Guide

`index.html` is the visual source of truth. `al.html` keeps Alta's screen inventory and behavior, but must render through the same visual grammar.

## Non-negotiable foundation

- Mobile shell: `375 × 812px`, `12px solid #ECE7E1`, `48px` radius, `#F8F6F3` surface, `0 24px 48px -12px rgba(0,0,0,.12)` shadow.
- No black device bezel and no dynamic island.
- App canvas: `#EFECE7`; app surface: `#F8F6F3`; white components: `#FFFFFF`.
- Ink: `#1B1716`; secondary copy: `#6F675F`; faint copy/icons: `#9F9387`; accent: `#C89B45`.
- Headings: Playfair Display 400. Interface: Inter 300–600.
- Primary mobile content padding: `20px`; compact child-screen padding: `16–20px`.
- Photography is the main hierarchy. Prefer complete lifestyle/outfit images over product-only tiles.

## Shared chrome

- Root screens use the same compact `SI + Search StyleIQ` header from Today, Closet, Planner, Discover, and My Atelier.
- Child screens use one circular back control, a centered serif title, and only contextual actions.
- Status row is `48px`, with 1.5px signal/wifi/battery marks.
- Bottom navigation is exactly: Today / Closet / Planner / Discover / More.
- Icons use the Lucide vocabulary and 1.5px stroke. Active navigation adds an 18×2px gold underline.
- Root scroll areas reserve `88px` for the bottom navigation.

## Component contracts

### Buttons

- Primary: 100% width where used as the main action, `48–56px` height, `16px` radius, charcoal fill, white text.
- Secondary: white fill, `1px #ECE7E1` border, same geometry.
- Icon control: `40px` circle, white fill, `1px #ECE7E1` border.

### Cards and selection

- Standard card: white, `1px #ECE7E1`, `16–20px` radius, no shadow.
- Selected state: `2px #C89B45`, ivory fill, gold check. Never invert a selected card to black.
- Filter tabs are compact pills. Only the active filter may use charcoal fill.

### Images

- Daily recommendation: large complete lifestyle Look, approximately `3:4`, `20px` radius.
- Outfit rail: image-led horizontal cards with caption overlays.
- Product/Closet item: contained product image on warm white/ivory surface.
- Profile: real lifestyle portrait, not an AI-styled decorative portrait.

### Photo upload

- One large guide image with a bottom-left example label.
- Three equal dashed upload slots below it.
- Active slot uses a gold dashed border and warm cream fill.
- Camera icon sits inside a smaller dashed circle.
- Primary capture action is sticky above a separate Continue footer action.

## Screen-family mapping

| `al.html` family | `index.html` reference |
|---|---|
| Entry / auth | X-1 to X-4 |
| Personalization | Y-1 to Y-14 |
| Today / outfit recommendations | A-1 to A-6 |
| Saved Looks / detail | B-1 to B-2 |
| Closet / add / item intelligence | C-1 to C-20 |
| Planner / Trips | D-1 to D-5 |
| Profile / My Atelier / settings | F-1 to F-14 |
| Discover / shopping / Wishlist | G-1 to G-12 |
| Studio / Style Twin / creators | H-1 to H-17 |

## Acceptance rule

A screen is not considered mirrored because it uses similar colors. It must share the same shell, type scale, spacing rhythm, icon vocabulary, image role, navigation, control geometry, and selection treatment as its mapped `index.html` family.
