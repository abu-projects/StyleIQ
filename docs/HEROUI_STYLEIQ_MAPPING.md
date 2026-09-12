# HeroUI → StyleIQ Static Mapping

## Reference

The implementation uses the official `heroui-react` Agent Skill (HeroUI v3.0.1) and official HeroUI v3 documentation as the design-system reference. StyleIQ remains static HTML/CSS/JavaScript and does not install React, Tailwind, `@heroui/react`, or `@heroui/styles`.

HeroUI principles retained:

- semantic variants instead of per-screen colors;
- composed anatomy instead of flat one-off controls;
- CSS-variable theming;
- predictable BEM-like component/modifier names;
- React Aria state behavior reproduced with native HTML and explicit ARIA where needed;
- cards described by prominence, including transparent treatment for nesting.

## Component mapping

| HeroUI v3 | StyleIQ static primitive | Retained anatomy/behavior |
| --- | --- | --- |
| TextField / Label / Description / FieldError | `.siq-field` | Label, control, description/error association |
| Input | `.siq-input` | Shared container size, padding, border, focus, invalid and disabled states |
| TextArea | `.siq-textarea` | Field anatomy, multiline sizing and resize behavior |
| Select | `.siq-select` | Label, selected native value, trailing indicator, description |
| Autocomplete | `.siq-autocomplete-input` + `.siq-autocomplete-popover` | Trigger/input, filtered listbox, active option, selection, Escape/arrow/Enter behavior |
| SearchField | `.siq-search-input` | Search-specific input semantics without forced selection |
| InputOTP | `.siq-otp-input` | Named cells, numeric entry, timing/status and verification action |
| Button | `.siq-button` + semantic modifiers | Primary, secondary, ghost, danger, size/state contract |
| CloseButton / icon-only Button | `.siq-button--icon-only` | 44px target and accessible name |
| Chip | `.siq-chip` | Compact selection and pressed/selected states |
| Checkbox | native checkbox + `.siq-field` | Native checked/disabled/focus semantics |
| Switch | existing toggle + SIQ tokens | Immediate boolean state and visible focus |
| RadioGroup | semantic grouped choice buttons | Group name and single selected/pressed state |
| Tabs | `.siq-tabs` | List, tabs, selected state and panel concept |
| Disclosure / Accordion | `.siq-disclosure` | Summary trigger, expanded state and controlled content |
| Surface | `.siq-surface` | Low-emphasis grouping; no default elevation |
| Card | `.siq-card` | Discrete-object grouping; header/content/footer composition where present |
| Modal / AlertDialog | `.siq-modal` | Labelled modal semantics, Escape and focus containment |
| Drawer | `.siq-drawer` | Contextual bottom sheet with modal behavior |
| Popover / ListBox | `.siq-autocomplete-popover` | Positioned overlay, listbox/options and active selection |
| Toast | existing `.toast` | Polite live-region feedback |
| Skeleton / Spinner | existing `.skeleton` | Loading placeholder and reduced-motion support |
| Surface-based AI context | `.siq-ai-panel` | Semantic contextual emphasis using StyleIQ accent |

## Token substitution

HeroUI's default color tokens are not copied. StyleIQ maps component roles to `--siq-bg`, `--siq-surface*`, `--siq-text*`, `--siq-border*`, `--siq-accent*`, feedback colors, and `--siq-focus`. The warm ivory, espresso, muted neutral, restrained gold, green, and red identity remains intact. Only navigation/overlay surfaces use the strong glass treatment.

## Plain HTML accessibility implementation

- Inputs retain native elements and receive explicit labels when templates lack one.
- Native selects remain native; custom autocomplete uses `role="combobox"`, `aria-autocomplete`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `role="listbox"`, and `role="option"`.
- Native buttons provide keyboard activation. Icon-only buttons require `aria-label`.
- Native `details`/`summary` provides disclosure behavior; the runtime mirrors `open` to `aria-expanded` and links controlled content.
- Tabs expose `role="tablist"`, `role="tab"`, and `aria-selected` where they are true peer views; segmented controls remain pressed-button groups.
- Dialogs use `role="dialog"` or `role="alertdialog"`, `aria-modal`, labelled titles, Escape dismissal, focus entry, and focus containment. The native Wishlist dialog restores focus to its trigger.
- Field descriptions and errors are connected with `aria-describedby`; invalid controls use `aria-invalid` and the shared danger state.
- Focus-visible styling is applied consistently across controls, tabs, chips, disclosures, and navigation.

## Deliberate departures

StyleIQ does not use HeroUI's React runtime, compound JSX API, `onPress`, Tailwind utilities, default OKLCH theme, or component package. Static class composition and native browser behavior are the correct equivalent for this architecture. StyleIQ also removes most default card shadow in favor of editorial whitespace and reserves liquid glass for navigation and transient layers.
