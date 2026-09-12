# StyleIQ Design System

Version: Phase 3 static component system

StyleIQ uses a calm editorial content layer with deliberately stronger glass navigation. HeroUI v3 informs component anatomy, composition, semantic variants, and state behavior; StyleIQ supplies the palette, typography, spacing, and fashion-oriented visual voice.

## Foundations

### Color

Semantic tokens live in the final `:root` layer in `styles.css`.

| Role | Token | Use |
| --- | --- | --- |
| App background | `--siq-bg` | Page canvas |
| Surface | `--siq-surface` | Grouped content and cards |
| Subtle surface | `--siq-surface-subtle` | Low-emphasis controls and tab tracks |
| Elevated surface | `--siq-surface-elevated` | Inputs, popovers, modals |
| Primary text | `--siq-text` | Headings and body emphasis |
| Secondary/tertiary text | `--siq-text-secondary`, `--siq-text-tertiary` | Descriptions and metadata |
| Border | `--siq-border`, `--siq-border-strong` | Default and hover boundaries |
| Brand accent | `--siq-accent`, `--siq-accent-strong`, `--siq-accent-soft` | Editorial emphasis and Muse context |
| Feedback | `--siq-danger`, `--siq-success` and soft pairs | Errors and success only |
| Focus | `--siq-focus` | Visible keyboard focus |

Do not add raw screen-level colors when an existing semantic role fits. HeroUI default colors are not imported.

### Typography

- Display: Playfair Display, 32–40px, medium; only for major editorial moments.
- Page title: Playfair Display, 25px, medium.
- Section title: Playfair Display, 19px, medium.
- Body: Inter, 14px/1.6.
- Label: Inter, 12px, semibold.
- Secondary: Inter, 12px.
- Caption/helper: Inter, 11px/1.45.

Density must be solved with hierarchy and disclosure, not by shrinking below these roles.

### Spacing

Use `--siq-space-1/2/3/4/5/6/8/10/12`: 4, 8, 12, 16, 20, 24, 32, 40, and 48px. Default field gap is 8px, field-to-field rhythm is 20px, section rhythm is 32px, and major actions follow 32px of separation.

### Radius, border, and elevation

- Radius: 8, 12, 16, 22px, and pill only.
- Default border: 1px `--siq-border`; stronger border is reserved for hover/current emphasis.
- Elevation: none for content, floating for navigation/floating controls, overlay for popovers and dialogs.
- Glass: header, bottom navigation, transient overlays, and limited floating controls only.

## Components

### Field, Input, and Textarea

Anatomy: label → control → optional description or field error. Use `.siq-field`, `.siq-input`, and `.siq-textarea`. Primary and lower-emphasis fields share the same size and state model. States: default, hover, focus-visible, disabled, readonly, invalid. Default input height is 52px; textarea minimum height is 104px. Do not wrap every field in a decorative card, use a placeholder as its only accessible name, or create route-specific borders and shadows.

### Select

Anatomy: label → native select/selected value + trailing indicator → optional description. Use `.siq-select`. It shares input height, typography, radius, border, and focus treatment. Prefer native select for short or moderate fixed lists. Do not use it for long searchable data.

### Autocomplete and Search

Anatomy: field label → combobox input → filtered listbox popover → options. Use `.siq-autocomplete-input` and `.siq-autocomplete-popover`; the enhancer supplies `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, keyboard navigation, selection, and Escape dismissal. Use for brands, destinations, and product searches. Use `.siq-search-input` for free search without selection. Do not use autocomplete for three-option decisions.

### OTP

Anatomy: group context → six individually named numeric inputs → timing/status → action. Use `.siq-otp-input`. Each cell has an accessible digit name and consistent focus/error treatment. Do not visually merge OTP with an unrelated text input.

### Button and Icon Button

Use `.siq-button` with one semantic modifier:

- `.siq-button--primary`: the dominant forward action; normally one per context.
- `.siq-button--secondary`: supporting action.
- `.siq-button--ghost`: inline, dismissive, edit, back, or learn-more action.
- `.siq-button--danger`: delete/remove action only.
- `.siq-button--icon-only`: 44px minimum square/circle and mandatory accessible name.

States: hover, pressed, focus-visible, disabled, and pending. Do not choose button color by screen or use primary styling for equal competing actions.

### Chip

Anatomy: concise label with pressed/selected state. Use `.siq-chip`; state is expressed through `aria-pressed` or `aria-selected`. Use for filters and compact multi-select choices. Do not use as a substitute for a primary action or long explanatory choice.

### Radio/card selection

Use the existing semantic choice button with `.siq-button` normalization, a group label, and `aria-pressed` for the current choice. Use image/card choices only when the visual materially supports the decision. Do not use a card for simple yes/no or three short text values.

### Checkbox and Switch

Prefer native checkbox input with a visible label. A switch represents an immediately applied on/off setting, uses a button or checkbox with switch semantics, and must expose checked state. Minimum hit target is 44px. Do not use a switch for a choice that requires a Save action.

### Tabs

Anatomy: tab list → tab/indicator → tab panel. Use `.siq-tabs`, `role="tablist"`, `role="tab"`, and `aria-selected`. Use tabs for peer views of one object; use secondary/underline emphasis when embedded in content. Do not use tabs for sequential setup steps.

### Disclosure

Use native `details`/`summary` with `.siq-disclosure`; the runtime mirrors open state to `aria-expanded` and connects summary to its content. Use for optional or advanced content such as Twin refinement and event details. Do not hide the primary task, required information, or only CTA.

### Surface and Card

`.siq-surface` groups related controls/content with low prominence. `.siq-card` represents a discrete object such as a garment, Look, or recommendation. Both default to no shadow. Prefer whitespace, sections, and dividers for page layout. Do not nest visible cards; a nested surface becomes transparent.

### Modal and Drawer/Sheet

Modal anatomy: scrim → labelled dialog → content → actions. Drawer anatomy: scrim → labelled bottom sheet → optional grabber/header → content/actions. Use `.siq-modal` and `.siq-drawer`, `aria-modal="true"`, an accessible title, Escape close, focus entry, focus containment, and restoration where the existing native dialog retains its trigger. Use a modal for a blocking decision and a sheet for contextual or progressive work. Do not route to a new screen for a lightweight confirmation.

### Toast

Use the single app toast with `role="status"` and polite live announcements for non-blocking confirmation. Errors requiring action stay inline or use an alert dialog. Do not put essential instructions only in a transient toast.

### Empty State

Use `.siq-empty-state`: one restrained editorial image/illustration where helpful, clear outcome-oriented title, short explanation, and one primary CTA. Do not add decorative art to every list or fill empty space with multiple cards.

### AI Insight

Use `.siq-ai-panel` for context-aware Muse reasoning, wardrobe gaps, and generated summaries. The accent edge communicates intelligence without neon, glow, or chatbot chrome. Insights should name the useful context and a concrete recommendation. Do not label ordinary static copy as AI.

### Loading and Skeleton

Use the existing `.skeleton` inside the expected final layout, with a status message for meaningful waits. Respect reduced motion. Do not show a full-screen AI interstitial for automatic background work.

## Responsive behavior

The primary viewport is 375×812. Controls stay useful-width, touch targets are at least 44px, content scrolls instead of compressing, and the content bottom inset clears the floating navigation. At desktop/prototype sizes, `.siq-content` is max-width constrained. Entry and Studio retain intentional immersive/media layouts.

## Accessibility contract

Every visible form control has a programmatic label; descriptions/errors connect with `aria-describedby`; keyboard focus is visible; native semantics are preferred; tab/pressed/expanded states are exposed; autocomplete supports arrows, Enter, and Escape; dialogs have names, Escape handling, and a focus loop. Decorative icons and art remain hidden from assistive technology where appropriate.
