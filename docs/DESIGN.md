---
version: alpha
name: StyleIQ Personal Styling App Template
description: A premium, editorial-style personal styling application featuring a sophisticated ivory and charcoal palette, serif-led typography, and high-density image-driven onboarding flows.
colors:
  primary: "#1B1716"
  background: "#F8F6F3"
  canvas: "#EFECE7"
  text-secondary: "#6F675F"
  accent-gold: "#C89B45"
  border: "#ECE7E1"
  border-interactive: "#D6CCC2"
  white: "#FFFFFF"
typography:
  headings:
    family: "Playfair Display"
    weight: 400
    style: "serif"
  body:
    family: "Inter"
    weight: 400
    style: "sans-serif"
  labels:
    family: "Inter"
    weight: 500
    size: "12px"
    case: "uppercase"
    spacing: "widest"
spacing:
  container-px: "32px"
  section-gap: "48px"
  item-gap: "12px"
rounded:
  button: "16px"
  card: "24px"
  app-shell: "48px"
components:
  primary-button: "{colors.primary} background, {colors.white} text, rounded-2xl, font-sans"
  selection-card: "{colors.background} background, border-{colors.border-interactive}, rounded-xl"
  status-bar: "Sticky, backdrop-blur-md, 48px height"
---

## Overview
StyleIQ is a high-end fashion intelligence platform characterized by a minimalist, editorial aesthetic. The interface uses an "Ivory Canvas" approach, where off-white backgrounds ({colors.background}) and deep charcoal text ({colors.primary}) create a luxury print-magazine feel. The density is medium-to-high, relying on large-scale photography and tactile selection cards to guide users through an onboarding journey. Motion is subtle, focused on state transitions and progress indicators, while the layout remains strictly vertical and centered within a mobile-first viewport.

## Colors
- **Base Shell**: `#EFECE7` used for the area surrounding the mobile mockups.
- **App Background**: `#F8F6F3` (Ivory) acts as the primary surface color.
- **Primary Ink**: `#1B1716` (Rich Charcoal) used for headings, primary buttons, and active borders.
- **Neutral Muted**: `#6F675F` and `#9F9387` for subtext and disabled states.
- **Status Accents**: `#C89B45` (Gold) used sparingly for "success" or profile ready indicators.
- **Palette Grids**: Functional colors used in preference selection (e.g., `#F5F5DC`, `#D2B48C`, `#8B4513` for Warm Neutrals).

## Typography
- **Display Headings**: Playfair Display. Used for large onboarding headlines with tight tracking and leading (~1.05 - 1.1). Sizes range from 3xl (30px) to 5xl (48px).
- **Interface Text**: Inter. Used for buttons, labels, and paragraph summaries. Focus is on clarity and medium weights for interactive elements.
- **Metadata**: Small, uppercase, wide-tracked Inter for screen titles and technical labels.

## Layout
- **Viewport**: Optimized for a 375x812 mobile frame (iPhone X-style).
- **Shell Architecture**: 12px thick borders (`#ECE7E1`) with a 48px corner radius.
- **Content Alignment**: Heavy use of vertical flex containers with centered or bottom-aligned calls to action.
- **Grids**:
  - 2-column grids for celebrity and outfit selection screens.
  - Flex-wrap tags for lifestyle preferences.
  - Full-width stacks for primary onboarding choices.

## Elevation & Depth
- **Surfaces**: Flat, ivory surfaces are the standard. Elevation is communicated through 1px-2px borders rather than heavy shadows.
- **Mockup Shadows**: The external mobile shell uses a large `shadow-xl` to pop against the `#EFECE7` canvas.
- **Stickiness**: Top status bars and bottom button containers use sticky positioning with `backdrop-blur-md` and 80% opacity ivory backgrounds to maintain hierarchy during scroll.

## Shapes
- **Major Containers**: 48px radius for the app shell.
- **Buttons**: 16px (rounded-2xl) for primary actions; 12px (rounded-xl) for selection cards.
- **Image Frames**: 16px-24px radius for profile photos and outfit cards.
- **Progress Bars**: Fully rounded (pill-shaped) trackers.

## Components
- **Action Button**: Large, full-width blocks with 16px padding and 1.5pt stroke icons (Arrow Right).
- **Preference Card (Text)**: 64px tall items with left-aligned text and a right-aligned checkmark icon when active.
- **Visual Card (Image)**: 192px tall (h-48) frames with a 2px border that switches from transparent to `{colors.primary}` upon selection.
- **Palette Bar**: A horizontal strip divided into four equal segments representing a color story.
- **DNA Loading Spinner**: A dual-ring concentric spinner; the outer ring is 30% opacity, the inner ring features a high-contrast charcoal segment with an `animate-spin` property.

## Page Sections
### Welcome & Onboarding (Screens 06-08)
- **Composition**: 60% height image header with a bottom-to-top gradient fade into the ivory background.
- **Content**: Center-aligned serif typography over the gradient transition.
- **CTA**: Single primary "Continue" button at the bottom.

### Style & Celebrity Selection (Screens 09-11)
- **Composition**: Sticky header with system clock/icons. Scrollable central area for selection.
- **Interaction**: Multi-select behavior. Active items receive a 2px charcoal border and a circular checkmark badge.
- **Constraints**: Screen 11 implements a "minimum selection" logic (3 of 5) with a disabled gray button until the threshold is met.

### Palette & Lifestyle Tags (Screens 12-13)
- **Composition**: Vertical list of palette cards (Screen 12) and a tag-cloud (Screen 13).
- **Styling**: Tags use a pill shape (rounded-full) and shift from a light border to a solid charcoal fill when toggled.

### Style DNA Synthesis (Screen 14)
- **Composition**: Full-height centered layout.
- **Assets**: Sparkles icon centered within a spinning ring.
- **Feedback**: A text stack showing multi-stage status updates with pulse animations on the active task.

### Style Profile (Screen 15)
- **Composition**: Summary dashboard. Uses small-caps gold headers for section titles.
- **Cards**: White cards with 1px border (`#ECE7E1`) containing text summaries, palette bars, and a 3-image "Vibe Check" gallery.

## Motion & Interaction
- **Transitions**: Standard 150ms-200ms color transitions on button hovers and border changes.
- **Loading State**: A continuous 360-degree rotation (`animate-spin`) on the DNA spinner and a 2s opacity cycle (`animate-pulse`) on status text.
- **Hover States**: Desktop-view buttons dim to 90% opacity; selection cards darken their border to `#D6CCC2` on hover.

## Do's and Don'ts
- **Do**: Maintain the Ivory-on-Ivory aesthetic between the page background and app background.
- **Do**: Use high-resolution, fashion-focused photography (Unsplash source provided).
- **Don't**: Use standard blue or vibrant brand colors; stick to the charcoal and ivory palette.
- **Don't**: Use sharp corners; every interactive element must have at least an 8px radius.

## Accessibility
- **Contrast**: High contrast (15:1) between `{colors.primary}` text and `{colors.background}`.
- **Status Icons**: Every selection state is indicated by both a visual border change and a checkmark icon to support color-blind users.
- **Touch Targets**: All interactive selection cards and buttons are at least 48px in height.

Brand Positioning Rules

StyleIQ Should Feel Like

* Quiet luxury
* Editorial fashion
* Premium lifestyle assistant
* Personal stylist experience
* Warm wardrobe companion
* Calm confidence builder

StyleIQ Should Not Feel Like

* AI startup
* SaaS dashboard
* Technology platform
* Futuristic product
* Generic fashion catalog
* Cold wardrobe management tool

AI Usage Rule

StyleIQ is NOT an AI-first product.

AI exists as a hidden intelligence layer behind recommendations.

Avoid:

* AI-first messaging
* Neural network graphics
* Futuristic gradients
* Blue/purple tech glows
* AI particles
* AI sparkles as brand identity
* Robotic or synthetic imagery

Allowed:

* Personalization cues
* Recommendation feedback
* Style profile synthesis
* Calm intelligent assistance

⸻

Photography Direction

Photography is one of the most important parts of the StyleIQ experience.

Global Image Mood

Use:

* Warm natural daylight
* Morning routine moments
* Quiet luxury styling
* Editorial fashion photography
* Beige, ivory, camel, taupe, cream, and soft brown tones
* Real people in real environments
* Premium wardrobe moments
* Natural poses
* Personal stylist feeling

Avoid:

* Cold blue-toned photography
* Generic stock photos
* Broken image placeholders
* Futuristic visuals
* AI-looking imagery
* Product-only closet shots
* Runway-only fashion
* Overly posed studio imagery

Preferred Lifestyle Scenes

* Woman holding a blazer and taking a mirror selfie
* Morning dressing routine
* Looking in a mirror before work
* Coffee shop lifestyle
* Office arrival moments
* Packing for a trip
* Outfit planning moments
* Wardrobe rediscovery moments

Image Quality Rule

Every image should tell a story about:

* Confidence
* Getting dressed
* Feeling put together
* Rediscovering style
* Making better wardrobe decisions

⸻

Selection State Rules

Selected cards must NOT use full black backgrounds.

Default State

Background:
#FFFFFF

Border:
#ECE7E1

Text:
#1B1716

Selected State

Background:
#F8F6F3

Border:
#C89B45

Border Width:
2px

Check Icon:
#C89B45

Text:
#1B1716

Important

Do NOT:

* Turn selected cards black
* Hide thumbnails
* Darken selected images

Selected items should remain easy to compare visually.

Gold border + gold checkmark should be the primary selected state pattern throughout StyleIQ.

⸻

Screen 09 Special Rule

Prefer visual card grids over text-only lists.

Users choose style visually, not verbally.

Recommended:

* 2-column card layout
* Large image thumbnails
* Style name underneath
* Gold border when selected

Avoid:

* Large black list rows
* Text-heavy style selection
* Hidden imagery after selection

## Assets
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Icons**: `https://unpkg.com/lucide@latest` (Lucide Icons)
- **Fonts**: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap`
- **Images**:
  - Hero 1: `https://images.unsplash.com/photo-1550614000-4b95d466f272?q=80&w=1600&auto=format&fit=crop`
  - Hero 2: `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop`
  - Hero 3: `https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop`
  - Hailey Bieber: `https://images.unsplash.com/photo-1512316635851-410fbde64d08?q=80&w=800&auto=format&fit=crop`
  - Zendaya: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop`
  - Rosie HW: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop`
  - Kendall Jenner: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop`
  - Outfit 1: `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop`
  - Outfit 2: `https://images.unsplash.com/photo-1434389670869-bac0858e14d1?q=80&w=600&auto=format&fit=crop`
  - Outfit 3: `https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=600&auto=format&fit=crop`
  - Outfit 4: `https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop`
  - Outfit 5: `https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=600&auto=format&fit=crop`
  - Outfit 6: `https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop`

### Exported Codebase Asset Inventory
1. other: https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop
   Context: index.html: markup attribute; index.html: absolute url literal
2. other: https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop
   Context: index.html: markup attribute; index.html: absolute url literal
3. other: https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=400&auto=format&fit=crop
   Context: index.html: markup attribute; index.html: absolute url literal
