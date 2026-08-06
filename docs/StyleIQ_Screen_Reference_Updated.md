# StyleIQ — Complete Screen Reference

**Document type:** Functional screen inventory, content reference, interaction map, and navigation specification  
**Prototype source:** `index(13).html`  
**Product name:** StyleIQ  
**Current screen count:** 89 app screens  
**Excluded from the screen count:** Z-1 and Z-2 reusable patterns, shared confirmation overlays, drawers, toasts, and local UI states.
**Update coverage:** Brand Fit, Style Inspiration, Y-flow renumbering, Profile edit entry points, Wishlist discoverability, and Style Budget–Wishlist planning integration.

---

## 1. Purpose of This Document

This document is the working reference for the current StyleIQ application. It records, for every screen in the prototype:

- the screen's purpose;
- the information and UI sections displayed;
- the expected input or selection behavior;
- every visible action and its destination;
- local states, validations, overlays, filters, and confirmation behavior;
- prototype-only shortcuts or behaviors that still require production logic.

The current HTML prototype is the primary source of truth for screen names, content, and navigation. Product briefs provide supporting product context, but they do not override a route or interaction visible in the current prototype.

### How to read action destinations

| Destination type | Meaning |
|---|---|
| `A-1`, `C-7`, etc. | Opens another documented StyleIQ screen. |
| Local state | Changes content, selection, filter, or status without leaving the screen. |
| Overlay / drawer | Opens a layer inside the current screen. |
| External marketplace | Opens a third-party website. The prototype uses placeholder URLs in several locations. |
| Prototype toast | Shows temporary feedback without a new screen. |
| Not connected | The control is visible, but the prototype has no resulting route or data mutation. |

---

## 2. Screen Inventory

| Section | Product area | Screens |
|---|---|---:|
| X | Authentication | 4 |
| Y | Onboarding and Style Twin | 20 |
| A | Today and Daily Outfit Loop | 6 |
| B | Saved Looks | 2 |
| C | Closet | 20 |
| D | Planner | 5 |
| E | Wardrobe Value and Activity | 7 |
| F | Profile / My Atelier | 13 |
| G | Discover and Shopping | 12 |
| **Total** |  | **89** |

---

## 3. Shared Application Behavior

### 3.1 Primary bottom navigation

The signed-in app uses five primary destinations wherever the bottom navigation is present:

| Navigation item | Destination |
|---|---|
| Today | A-1 — Today / Morning Outfit |
| Closet | C-1 — My Closet |
| Planner | D-1 — Planner Home |
| Discover | G-1 — Discover |
| Profile | F-1 — Profile / My Atelier |

The current area is visually highlighted. Detail and task screens generally use a back arrow instead of showing the bottom navigation.

### 3.2 Shared feedback patterns

- **Back arrow:** Returns to the explicitly linked parent screen; it is not a browser-history action in the prototype.
- **Toast:** Temporary confirmation for local prototype actions such as saving, copying, dismissing, or updating a status.
- **Generic confirmation overlay:** Used for potentially destructive or consequential actions. It contains a title, explanatory copy, a confirm button, and Cancel.
- **Add to Planner overlay:** Any generic “Add to Planner” action opens a date-selection confirmation first, then routes to D-1 after confirmation.
- **Wear This Look:** Stores the selected outfit locally. If a destination is present, it then follows that screen route.
- **External marketplace disclosure:** Resale and pre-owned screens clarify that payment, shipping, returns, fulfillment, and buyer protection are handled by the external marketplace, not StyleIQ.
- **Prototype persistence:** Several actions save only to local prototype state or local storage. Production persistence, accounts, APIs, and server-side synchronization are not represented by the HTML prototype.

### 3.3 Reusable patterns, not standalone screens

| Pattern | Used for |
|---|---|
| Z-1 — Closet Readiness Pattern | Reusable progress presentation used in Y-15, Y-19, C-1, and F-4. It communicates that styling quality improves as category coverage grows. |
| Z-2 — Contextual Closet Growth Prompt Pattern | Optional contextual prompts that encourage gradual closet building without blocking the user's current task. C-17 demonstrates the available prompt contexts. |

---

# Section X — Authentication

## X-1 — Welcome to StyleIQ

**Purpose**

Introduces StyleIQ and separates new-account entry from returning-user login.

**Visible content**

- StyleIQ Atelier branding.
- Core proposition: “Your personal style, made easier.”
- Supporting message explaining that StyleIQ helps the user understand owned items, discover combinations, and build a personal wardrobe.

**Actions and destinations**

| Control | Result |
|---|---|
| Get Started | Opens X-2 — Create Your Account. |
| Already have an account? Log in | Opens X-3 — Email Access. |

**States / notes**

- This is the public start screen.
- No bottom navigation is shown.

## X-2 — Create Your Account

**Purpose**

Offers the supported account-creation methods and communicates the low-friction onboarding approach.

**Visible content**

- Heading: “Create your account.”
- Supporting copy: the closet and style profile can grow naturally over time.
- Apple, Google, and Email sign-up choices.
- Terms and Privacy Policy acknowledgement.
- Returning-user login link.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to X-1. |
| Continue with Apple | Prototype shortcut to Y-1 — Meet Muse. |
| Continue with Google | Prototype shortcut to Y-1 — Meet Muse. |
| Continue with Email | Opens X-3 — Email Access. |
| Log in | Opens X-3 — Email Access. |

**States / notes**

- Production routing must check whether onboarding is complete. A new user goes to Y-1; a returning fully onboarded user should go to A-1.
- Apple and Google authentication are represented as navigation shortcuts only; no provider consent or error state is modeled.

## X-3 — Email Access

**Purpose**

Collects an email address and begins passwordless authentication using a six-digit verification code.

**Visible content and fields**

- Heading: “Continue with Email.”
- Email field with placeholder `you@example.com`.
- Inline validation message: “Enter a valid email address.”
- Loading message: “Sending your verification code…”

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to X-2. |
| Send Verification Code | Validates the email, shows a short sending state, masks the entered email, starts a 30-second resend timer, then opens X-4. |
| Use Apple or Google | Returns to X-2. |

**Validation and states**

- Email must match a basic valid email format.
- Invalid input keeps the user on X-3 and exposes the inline validation message.
- While sending, the button is disabled and its label becomes “Sending…”.
- The prototype simulates the send operation; no email service is called.

## X-4 — Verify Code

**Purpose**

Completes passwordless email verification.

**Visible content and fields**

- Heading: “Check Your Email.”
- Masked destination email, such as `a•••@example.com`.
- Six-digit verification-code field with placeholder `000000`.
- Invalid-code message.
- Resend countdown and resend-success message.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to X-3. |
| Verify and Continue | Validates the code. A valid prototype code opens Y-1 and shows a welcome toast. |
| Resend code in 30s / Resend code | Disabled during the countdown. When available, restarts the countdown and temporarily shows “A new verification code was sent.” |
| Change Email | Returns to X-3. |

**Validation and states**

- Prototype valid code: `246810`.
- Any other value exposes the invalid-code message and keeps the user on X-4.
- The current prototype always routes a verified user to Y-1. Production must route a returning user with completed onboarding to A-1.

---

---

# Section Y — Onboarding and Style Twin

## Y-1 — Meet Muse

**Purpose**

Introduces Muse as the user's personal stylist and starts onboarding.

**Visible content**

- Step label: 1 of 5.
- Muse introduction: “Hi, I'm Muse.”
- Proposition: personal styling starts with what the user already owns.

**Actions and destinations**

| Control | Result |
|---|---|
| Let's Begin | Opens Y-2 — Who Are We Styling? |

## Y-2 — Who Are We Styling?

**Purpose**

Defines the wardrobe/profile context that StyleIQ should build first.

**Visible options**

- Women's.
- Men's.
- Both / Shared Wardrobe.
- Styling for someone else.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-1. |
| Any profile option | Selects that context and opens Y-3 in the prototype. |
| Continue | Opens Y-3 — Create Your Style Twin. |

**States / notes**

- The prototype does not visibly persist the selected profile on later screens.
- All options share the same destination.

## Y-3 — Create Your Style Twin

**Purpose**

Explains the Style Twin value before requesting photos and personal details.

**Visible content**

- Primary message: create a Style Twin.
- Benefits: looks styled around the user, seeing how looks may appear, and understanding suitable colors, fits, and styles.
- Style Twin visual preview.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-2. |
| Let's Start | Opens Y-4 — Face Photos. |

**Entry note**

- F-1's profile avatar also points to Y-3 as the current Twin setup-details destination.

## Y-4 — Face Photos

**Purpose**

Collects the face views needed for the Style Twin.

**Visible content**

- Step 1 of 9.
- Guidance: use clear lighting and keep hair away from the face.
- Main face preview.
- Selectable Front, Left, and Right thumbnails.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-3. |
| Front / Left / Right | Selects one thumbnail, updates the main preview, and visually marks the active view. Left may mirror the preview. |
| Continue | Opens Y-5 — Body Photos. |

**States / notes**

- The prototype demonstrates view selection only; camera permission, photo capture, upload, retake, crop, failure, and missing-photo validation are not modeled.

## Y-5 — Body Photos

**Purpose**

Collects body views used to understand proportions for the Style Twin.

**Visible content**

- Step 2 of 9.
- Guidance to wear fitted clothing and capture multiple angles.
- Main body preview.
- Front, Side, Back, and 45° Angle thumbnails.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-4. |
| Front / Side / Back / 45° Angle | Updates the active thumbnail and main preview. |
| Continue | Opens Y-6 — Your Details. |

**States / notes**

- Photo capture, permissions, upload, retake, and required-view validation are not modeled.

## Y-6 — Your Details

**Purpose**

Collects basic profile details and general size starting points before the user adds brand-specific fit information.

**Fields and options**

| Field | Current options / format |
|---|---|
| Height | 5'4” through 5'10” in the visible prototype list. |
| Date of Birth | Text input formatted as `MM / DD / YYYY`. |
| Gender | Female, Male, Non-binary, Prefer not to say. |
| Usual Clothing Fit | Slim, True to size, Relaxed, Oversized. |
| Tops | Free-text usual-size field; example `M`. |
| Bottoms | Free-text usual-size field; example `40`. |
| Dresses or Suits | Free-text usual-size field; example `8`. |
| Shoes | Free-text usual-size field; example `8.5`. |

Supporting copy:

- “How do your clothes usually fit you?”
- “Start with your usual sizes. You can add brand-specific sizing next.”

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-5. |
| Continue | Sets Y-7 to onboarding mode and opens Y-7 — Brand Fit Profile. |

**States / notes**

- The form prevents default submission but does not enforce required fields, validate the date, or normalize size systems.
- General sizes are intentionally separate from the brand-specific records collected on Y-7.

## Y-7 — Brand Fit Profile

**Purpose**

Collects what size usually fits the user in individual brands so Muse can later support brand-specific fit guidance.

**Visible content and initial prototype data**

- Step 4 of 9 in onboarding mode.
- Heading: “Your Brand Fit.”
- Explanation that this is the user's personal fit profile, not a verified official brand size chart.
- Initial records:
  - Zara — Tops M, Bottoms 40, fit note “Runs slightly small.”
  - COS — Tops S, Bottoms 38, Dress/Suit 8, fit note “True to size in knits.”
- Add-brand form with an Arket example.

**Brand record fields**

- Brand name.
- Top size.
- Bottom size.
- Dress or suit size.
- Shoe size.
- Optional fit note.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow, onboarding mode | Returns to Y-6. |
| Add Another Brand | Expands the inline add/edit form. |
| Add Brand | Adds a local brand-fit record, refreshes the list and F-2 summary, and shows a prototype toast. |
| Edit icon | Prefills the inline form for the selected record; the submit label becomes Save Brand. |
| Remove icon | Removes the record locally and offers Undo through the shared toast. |
| Cancel, inline form | Closes the form and clears edit mode. |
| Continue, onboarding mode | Saves the current summary locally and opens Y-8 — Body Shape. |
| Skip for Now, onboarding mode | Opens Y-8 without requiring an additional brand record. |
| Save Brand Fit, profile edit mode | Saves the summary and returns to F-2 — My Style Profile. |
| Return to My Style Profile, profile edit mode | Returns to F-2. |

**Edit-mode behavior**

- Entered from F-2 through Edit Brand Fit.
- The step label becomes “Edit profile.”
- Back, primary, and secondary destinations change to F-2.
- The same canonical Brand Fit screen and local records are reused; no duplicate profile-size flow is created.

**Prototype limitations**

- Data is stored only in local prototype state.
- Empty fields are displayed as `-`.
- Brand names and size formats are free text.
- No official size-chart lookup, account sync, fit verification, or recommendation model is represented.

## Y-8 — Body Shape

**Purpose**

Collects the user's self-selected silhouette to support proportion-aware styling.

**Visible content**

- Step 5 of 9.
- Options: Hourglass, Pear, Rectangle, Inverted Triangle.
- Supporting note that the choice helps Muse understand proportions.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-7. |
| Any body-shape card | Applies a single active selection state. |
| Continue | Opens Y-9 — Hair Details. |

**States / notes**

- Only one body shape can be selected at a time.
- No “not sure” or skip option is shown.

## Y-9 — Hair Details

**Purpose**

Collects hair length, color, and usual styling for a more representative Style Twin.

**Visible content**

- Step 6 of 9.
- Hair Length: Short, Medium, Long.
- Hair Color: six visual swatches.
- Usual wear style: Open, Up, Half Up.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-8. |
| Hair length pill | Selects one length. |
| Hair color swatch | Selects one color and moves the active ring. |
| Wear-style pill | Selects one style. |
| Continue | Opens Y-10 — Shoe Preferences. |

## Y-10 — Shoe Preferences

**Purpose**

Captures the footwear or heel-height preference the user wears most often.

**Visible content**

- Step 7 of 9.
- Flats / Sneakers.
- Low Heel, up to 1.5 inches.
- Mid Heel, 1.5 to 3 inches.
- High Heel, above 3 inches.
- Boots.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-9. |
| Any footwear option | Applies a single active selection with a check indicator. |
| Continue | Resets Y-11 to onboarding mode and opens Y-11 — Style Preferences. |

## Y-11 — Style Preferences

**Purpose**

Captures up to three preferred style directions. The same screen is reused later to fine-tune the profile.

**Visible content**

- Step 8 of 9.
- Options: Classic, Minimal, Chic, Elegant, Edgy, Boho, Romantic, Sporty, Trendy.
- Instruction to pick up to three.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-10. |
| Any style card | Toggles that style. A maximum of three may be active. |
| Continue, onboarding mode | Sets Y-12 to onboarding mode and opens Y-12 — Style Inspiration. |
| Save Style Changes, edit mode | Returns to F-2 — My Style Profile. |
| Save changes and return to My Style Profile | Secondary edit-mode link to F-2. |

**States / notes**

- Attempting to select a fourth preference keeps the existing three and applies short shake feedback to the fourth card.
- Entering from F-2 or the Edit My Twin action changes the primary CTA from Continue to Save Style Changes and exposes the return link.
- Style Preferences no longer creates the Twin directly; Style Inspiration is the final onboarding-input screen.

## Y-12 — Style Inspiration

**Purpose**

Collects long-term visual taste references for Muse. It is distinct from G-2 Style Check, which evaluates one considered product.

**Visible sources and initial prototype state**

| Source | Initial state / input |
|---|---|
| Personal Looks | Six personal looks in prototype state; Add Outfit Photos adds four more locally. |
| Screenshots | Starts at zero; Add Screenshots adds three locally. |
| Instagram | Username/profile-link field; initially connected in prototype state. |
| Pinterest | Board/profile-link field; initially one board connected in prototype state. |
| Creators & Celebrities | Name/handle input; initial chips: Sofia Richie Grainge, David Beckham, Matilda Djerf. |

The screen states that Style Inspiration teaches Muse the user's long-term taste, while Style Check evaluates one product before purchase.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow, onboarding mode | Returns to Y-11. |
| Add Outfit Photos | Increments the personal-look count by four locally and shows a toast. |
| Add Screenshots | Increments the screenshot count by three locally and shows a toast. |
| Connect Instagram / Disconnect | Toggles the simulated Instagram connection and updates its label/status. |
| Connect Pinterest / Disconnect | Toggles the simulated Pinterest-board connection and updates its label/status. |
| Add creator/reference | Adds a non-empty name or handle as a removable chip. |
| Remove chip | Removes the selected creator/reference and shows a toast. |
| Create My Twin, onboarding mode | Saves the profile-learning summary locally and opens Y-13 — Creating Your Style Twin. |
| Skip for Now, onboarding mode | Opens Y-13. |
| Save Inspiration, profile edit mode | Saves the summary and returns to F-2. |
| Return to My Style Profile, profile edit mode | Returns to F-2. |

**Edit-mode behavior**

- Entered from F-2 through Edit Inspiration.
- The step label becomes “Edit profile.”
- Back, primary, and secondary destinations change to F-2.

**Prototype limitations**

- Photo actions adjust local counts; no device picker, upload, crop, analysis, permission, or failure state is modeled.
- Instagram and Pinterest are simulated local toggles; no OAuth, account access, API synchronization, or content import occurs.
- The entered profile links are not validated or used to fetch content.
- Creator names are free-text local chips.

## Y-13 — Creating Your Style Twin

**Purpose**

Communicates simulated progress while the Style Twin is prepared.

**Visible progress content**

- Estimate: approximately 30 seconds.
- Progress percentage beginning at 0%.
- Stages:
  - Capturing face details.
  - Capturing body details.
  - Understanding proportions.
  - Understanding your style references.

**Actions and destinations**

| Control | Result |
|---|---|
| Preview Style Twin Setup, board simulation control | Starts the local progress simulation. |
| Reveal My Style Twin | Appears when the simulation completes and opens Y-14 — Meet Your Style Twin. |

**States / notes**

- No processing error, retry, background completion, or cancellation state is modeled.
- The style-reference stage reflects the Style Inspiration input added on Y-12.

## Y-14 — Meet Your Style Twin

**Purpose**

Reveals the completed Style Twin and lets the user preview it in different lifestyle scenes.

**Visible content**

- “Your Twin is Ready” status.
- Style Twin visual.
- Scene tabs: Daytime, Relaxing, Evening.
- Fit Profile Status: 100% Calibrated.
- Scene-specific direction, look number, description, mood, use, and finish.
- Default Daytime example: Polished Day, Look 01, Composed, Workday, Tailored.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Opens Y-11 — Style Preferences in the current HTML. |
| Daytime / Relaxing / Evening | Switches the visual scene and associated content locally. |
| Explore Looks | Opens Y-15 — Start With Your Favorites. |
| Edit My Twin | Opens Y-11 in profile-edit mode. |

**States / notes**

- The back arrow intentionally documents the route currently present in the HTML; it does not return to Y-13.
- Scene changes are local presentation states.

## Y-15 — Start With Your Favorites

**Purpose**

Introduces gradual closet building and asks the user to add an initial essential item.

**Visible content**

- Step label: 5 of 5.
- Message that the user does not need to add the whole wardrobe immediately.
- Closet Readiness at 0%.
- Goal guidance: around 20 essentials unlock the first full-week outfit plan.
- Category targets: Tops 0/10, Bottoms 0/5, Shoes 0/3, Outerwear 0/2.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-14. |
| Add My First Item | Opens Y-16 — Add One Item. |
| I'll build it later | Skips item entry and opens Y-20 — Your First Style Snapshot. |

## Y-16 — Add One Item

**Purpose**

Guides the user to capture one clean wardrobe item during onboarding.

**Visible content**

- Recommended capture examples: flat lay, hanger, mannequin.
- Warning to avoid crowded closets, overlapping clothing, and dark photos.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-15. |
| Take Photo | Prototype shortcut to Y-17 — Item Style Check. |
| Upload from Gallery | Prototype shortcut to Y-17. |

**States / notes**

- Camera/gallery permission, source selection, upload progress, failure, crop, and retake are not modeled.

## Y-17 — Item Style Check

**Purpose**

Shows the onboarding item being cleaned and classified before confirmation.

**Visible processing content**

- Original and Cleaned views.
- Background cleaned.
- Category detected.
- Color detected.
- Fabric estimated.
- Season noted.
- Instruction to tap when processing is complete.

**Actions and destinations**

| Control | Result |
|---|---|
| Main processing surface | Opens Y-18 — Confirm Your Item. |

**States / notes**

- No explicit back, cancel, processing failure, or retry control is shown.

## Y-18 — Confirm Your Item

**Purpose**

Lets the user verify the first item's extracted attributes before adding it to the closet.

**Visible item data**

- Category: Blazer.
- Color: Camel.
- Pattern: Solid.
- Material: Wool blend, marked as uncertain.
- Clarifying prompt: “Is this wool or cashmere?” with Wool and Cashmere choices.
- Tags: Autumn, Work, Smart casual.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-16. |
| Wool / Cashmere | Represents the material confirmation choice; no additional route is connected. |
| Add to My Closet | Opens Y-19 — Closet Progress Celebration. |
| Edit Photo | Returns to Y-16. |

## Y-19 — Closet Progress Celebration

**Purpose**

Confirms the first closet addition, shows progress, and encourages either another item or continued exploration.

**Visible content**

- Celebration message: Muse now knows one everyday piece.
- Closet Readiness: 5%.
- Category counts: Tops 1/10, Bottoms 0/5, Shoes 0/3, Outerwear 0/2.
- Muse note suggesting future pairings with tailored trousers, denim, or a simple knit.

**Actions and destinations**

| Control | Result |
|---|---|
| Add Another Item | Returns to Y-16. |
| See What StyleIQ Can Do | Opens Y-20 — Your First Style Snapshot. |

## Y-20 — Your First Style Snapshot

**Purpose**

Provides an early style result even when the closet is incomplete, then hands the user into the signed-in application.

**Visible content**

- “Early Style Snapshot” status.
- Style direction: Elevated Minimal.
- Explanation that personalization improves as more pieces are added.
- Look example: Elevated Everyday.
- Style tags: Minimal and Classic.
- Palette notes.
- Closet readiness indicator at 5%.
- Muse note encouraging gradual addition of essentials.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to Y-19. |
| Explore My StyleIQ | Opens A-1 — Today / Morning Outfit. |

# Section A — Today and Daily Outfit Loop

## A-1 — Today / Morning Outfit

**Purpose**

Acts as the main daily home screen. It combines today's context, Muse's styling rationale, a recommended outfit, and the fastest daily actions.

**Visible content**

- Personalized greeting for Amelia.
- Daily context: 18°C, office day, and light rain later.
- Muse message explaining the choice of structure, warmth, and easy layers for a client meeting.
- Ask Muse quick-action card.
- Muse's Pick: “The Camel Composer.”
- Outfit rationale: warm neutrals, meeting suitability, and cooler-afternoon layering.
- Outfit preview showing the main look and two additional pieces (`+2`).
- Primary bottom navigation.

**Actions and destinations**

| Control | Result |
|---|---|
| Why this look? | Opens A-2 — Outfit Details. Both the Muse rationale link and the outfit-card link share this destination. |
| Ask Muse card | Opens A-5 — Ask Muse Quick Action. |
| Outfit card | Opens A-2. |
| Wear This | Opens A-4 — Outfit Feedback and stores the selected outfit locally. |
| Alternatives | Opens A-3 — Alternatives. |
| Save Look | Opens B-1 — Saved Looks. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

## A-2 — Outfit Details

**Purpose**

Explains the recommended outfit in detail and identifies the wardrobe pieces that make up the look.

**Visible content**

- Context: Office Day, 18°C, light rain.
- Outfit name: The Camel Composer.
- “Why This Works” explanation covering silhouette, warmth, indoor layering, and meeting suitability.
- Color profile: Camel, Charcoal, Ivory, Cream.
- Wardrobe Pieces count: 4.
- Visible pieces include the Max Mara Double-Breasted Camel Wool Coat and Theory Tapered Wool Trousers in Charcoal Melange.
- Closet Versatility insight: the outerwear matches six other active wardrobe items.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to A-1. |
| Header utility icon 1 | Visible icon button; no route or action is connected. |
| Header utility icon 2 | Visible icon button; no route or action is connected. |
| Wear This Look | Opens A-4 and stores the selection locally. |
| See Alternatives | Opens A-3. |

## A-3 — Alternatives

**Purpose**

Offers alternate styling paths for the same day's weather and context.

**Visible alternatives**

| Direction | Look | Supporting pieces |
|---|---|---|
| More Relaxed | The Soft Neutral | Fine knit and wool tailored pants. |
| Warmer Option | Layered Cashmere | Chunky turtleneck and wool lining. |
| More Polished | Structured Monochrome | Double blazer and structured belt. |

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to A-2. |
| Alternative card | Selects a different look locally. |
| Choose This Look | Opens A-4 — Outfit Feedback. |

## A-4 — Outfit Feedback

**Purpose**

Captures quick and detailed feedback so Muse can learn the user's practical daily preferences.

**Visible content and inputs**

- Prompt: “How does this look feel?”
- “Muse Remembers” explanation asking about fit and warmth.
- Quick feedback options: Love This, Not Today, Too Formal, Too Casual, Save for Later.
- Free-text field with an example covering coat preference and leather loafers.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to A-2. |
| Feedback option | Selects a sentiment locally; no new screen is opened. |
| Tell Muse more | Accepts optional free-text feedback. |
| Send to Muse | Returns to A-1. |

**States / notes**

- The prototype does not show a required-selection rule or a post-submit detail view.
- “Save for Later” is a feedback choice here; it does not route to G-7.

## A-5 — Ask Muse Quick Action

**Purpose**

Provides fast entry points into Muse styling help and accepts a custom styling question.

**Visible shortcuts**

- What should I wear today?
- Style my Max Mara camel coat.
- Help me pack for a trip.
- Find a wardrobe gap.
- Make my current outfit more formal.
- Custom textarea with an example question about Sage trousers.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to A-1. |
| What should I wear today? | Opens A-6 — Muse Styling Plan. |
| Style my Max Mara camel coat | Opens A-6. |
| Help me pack for a trip | Opens D-4 — Packing Edit. |
| Find a wardrobe gap | Opens A-6. |
| Make my current outfit more formal | Opens A-6. |
| Ask Muse | Opens A-6 using the custom question context. |

## A-6 — Muse Styling Plan

**Purpose**

Returns an actionable styling response that combines owned pieces with an optional missing item and new/pre-owned discovery.

**Visible content**

- Muse's Edit pairing the Max Mara Camel Coat with Theory Charcoal Trousers and a white silk shell.
- Curated look: Camel & Charcoal Contrast.
- Composition statement: three owned pieces and one wishlist piece.
- Missing item: Theory Tailored Pants with a 98% match score.
- New and pre-owned results for the missing trouser, including price, brand, size, condition, seller source, and community status.
- Example listings: Everlane new trouser, Theory/Poshmark community listing, and COS/Depop external listing.
- Empty community-result state.
- External marketplace disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to A-5. |
| All / New / Pre-owned | Filters results locally. |
| StyleIQ Users Only | Toggles community-only pre-owned results. If New was selected, enabling this changes the filter to Pre-owned. |
| Save on new item | Opens G-8 — My Wishlist. |
| View on Poshmark / View on Depop | Opens the external marketplace in a new context. Current prototype URLs are placeholders. |
| View All Pre-owned | Selects the Pre-owned filter and clears community-only mode. |
| Save Search | Shows a local “Search saved” toast. |
| Apply This Look | Opens A-4. |
| Save Plan | Shows a saved confirmation and opens B-1 — Saved Looks. |
| Ask Another | Returns to A-5. |

---

---

# Section B — Saved Looks

## B-1 — Saved Looks

**Purpose**

Provides the user's reusable collection of saved outfits, organized by context.

**Visible content**

- Category filters: Today, All, Work, Weekend, Evening, Travel.
- Saved cards: Silk & Cashmere / Evening, Camel Composer / Office, Sunday Soft / Weekend, Travel Trench / Travel.
- Primary bottom navigation.

**Actions and destinations**

| Control | Result |
|---|---|
| Today filter | Links to A-1 in the current prototype rather than filtering the list. |
| All / Work / Weekend / Evening / Travel | Presented as filter options; no local filtering function is connected. |
| Silk & Cashmere | Opens B-2 — Saved Look Detail. |
| Camel Composer | Opens A-2 — Outfit Details. |
| Other saved cards | Visible, but no destination is connected. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

## B-2 — Saved Look Detail

**Purpose**

Explains one saved look and lets the user wear it, schedule it, or remove it.

**Visible content**

- Look: Silk & Cashmere.
- Why Saved: suitable for high-contrast evening meetings and dinners; silk with charcoal flannel trousers.
- Best Occasion: Evening / Dinner.
- Weather Forecast: 15°C to 22°C.
- Related closet piece: Theory Ivory Silk Crepe Blouse.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to B-1. |
| Header utility icon | Visible; no route or action is connected. |
| Wear This Look | Stores the selected look locally; no new screen is connected. |
| Add to Planner | Opens the shared date-selection confirmation, then routes to D-1. |
| Remove Save | Visible local action; no removal behavior is connected in the prototype. |

---

---

# Section C — Closet

## C-1 — My Closet

**Purpose**

Acts as the closet overview, showing readiness, category coverage, recent additions, and summarized closet guidance.

**Visible content**

- Closet Readiness: 32%.
- Guidance: add two more tops for stronger weekday options.
- Category progress: Tops 6/10, Bottoms 3/5, Shoes 2/3, Outerwear 2/2.
- Category-specific messages such as a good base, need for a neutral shoe, or strong foundation.
- Recently Added area.
- Closet Note: wardrobe leans toward warm neutrals and tailored everyday pieces.
- Primary bottom navigation.

**Actions and destinations**

| Control | Result |
|---|---|
| View notes | Opens C-13 — Closet Notes. |
| Any category progress row | Opens C-6 — Browse My Closet. |
| Explore Categories | Opens C-6. |
| Add an Item | Opens C-2 — Add to My Closet. |
| View Closet Notes | Opens C-13. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

## C-2 — Add to My Closet

**Purpose**

Provides all supported entry methods for adding a closet item.

**Visible content**

- Instruction to add one piece at a time using a clear photo.
- Capture examples: flat lay, hanger, mannequin.
- Warning against crowded, overlapping, folded, or dark item photos.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-1. |
| Take Photo | Opens C-3 — Preparing Your Item. |
| Upload Gallery | Opens C-3. |
| Add Manually | Sets C-4 to manual-entry mode and opens C-4. |
| Import Purchase | Opens E-4 — Import Purchase History. |

## C-3 — Preparing Your Item

**Purpose**

Shows image processing and attribute detection for a photographed or uploaded closet item.

**Visible processing content**

- Original and Clean image states.
- Background cleaned.
- Image enhanced.
- Category, color, and pattern detected.
- Material estimated.
- Explanation that the user only needs to confirm uncertain details.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-2. |
| Main processing surface | Opens C-4 in detected-from-photo mode. |

**States / notes**

- The prototype does not model failure, retry, cancellation, or processing time.

## C-4 — Confirm Your Item

**Purpose**

Acts as the canonical item-data form for detected photos, manual entry, imported receipts, and purchased wishlist items.

**Modes**

| Mode | Entry source | Behavior |
|---|---|---|
| Detected from photo | C-3 | Prefills Camel Wool Blazer data and asks the user to review detected details. |
| Manual entry | C-2 or E-4 | Clears item fields, removes confidence language, and asks the user to enter known details. |
| Imported purchase | E-5 | Prefills receipt data for Maison Row Leather Loafers and shows purchase-source context. |
| Purchased from Wishlist | G-9 | Prefills product and purchase data carried over from the wishlist. |

**Fields and visible data**

- Item name, required.
- Category, required.
- Color, required.
- Brand.
- Paid price.
- Purchase date.
- Purchase source panel when the mode includes an imported/purchased source.
- Example source: Wishlist · Maison Row · purchased today.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-3. |
| Header utility icon | Visible; no route or action is connected. |
| Add to My Closet | Opens C-5 — Item Added. |
| Edit Source | Returns to C-2. |
| Save as Draft | Opens C-1. No explicit draft-list state is shown. |

**Validation / notes**

- Required fields are visually marked, but the prototype link does not validate them before opening C-5.

## C-5 — Item Added

**Purpose**

Confirms the addition, shows its impact on readiness, and offers relevant next actions.

**Visible content**

- Added confirmation.
- Closet Readiness change: 32% to 36%.
- Tops count: 6/10.
- Outfit compatibility: the blazer may work with four owned pieces.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-4. |
| See Outfit Ideas | Passes “Camel Wool Blazer” into Muse context and opens A-6. |
| Add Another Item | Opens C-2. |
| Back to My Closet | Opens C-1. |
| View Item Details | Opens C-7 — Item Details. |

## C-6 — Browse My Closet

**Purpose**

Provides searchable, filterable access to individual closet items.

**Visible content**

- Search field: “Search pieces.”
- Quick filters: All, Tops, Outerwear.
- Filter button with active-filter count.
- Item cards: Camel Wool Blazer, Ivory Silk Shell, Soft Trench, Black Loafers.
- Item metadata such as wears, listed status, last worn date, rarely worn, or most worn.
- Empty result state with Clear all.
- Primary bottom navigation.

**Filter drawer**

- Category: Tops, Outerwear, Shoes.
- Color: Any color, Camel, Black.
- Season: Any season, Spring, Autumn / Winter.
- Occasion: Any occasion, Work, Weekend.
- Brand: Any brand, Maison Row.
- Status: Favorites, Recently worn, Underused, Listed for resale, Archived.
- Sort: Recently added, Most worn, Least worn, Category.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-1. |
| Add icon | Opens C-2. |
| Search | Filters item cards locally by text and tags. |
| All / Tops / Outerwear | Applies a local quick category filter. |
| Filter button | Opens the filter drawer. |
| Apply filters | Applies selected filters, updates the active count, closes the drawer, and shows a toast. |
| Clear all | Clears drawer filters, search, and quick filters, then shows all items. |
| Drawer close / Close without applying | Closes the drawer. |
| Any visible item card | Opens C-7. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

**States / notes**

- The empty state appears when no item matches the combined search, quick filter, and drawer filters.

## C-7 — Item Details

**Purpose**

Shows the canonical closet item record, wear activity, related items, listing status, and item-level actions.

**Visible content**

- Item: Camel Wool Blazer.
- Category, color, and season: Blazer, Camel, Autumn/Winter.
- Activity: 3 wears, added two weeks ago, last worn Tuesday.
- Works Well With section.
- Similarity insight: two similar tailored blazers.
- External listing panel: Active, Poshmark, asking price $68.
- External-marketplace responsibility disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-6. |
| View Listing | Opens the external listing. Current prototype URL is a placeholder. |
| Edit Link | Opens C-10 — Link Your Listing. |
| Mark as Sold | Opens a confirmation overlay requesting final sale price, platform, and sale date. On valid confirmation, marks the listing sold, archives the item while preserving history, updates resale earnings/activity, and opens E-7. |
| Remove | Opens a confirmation overlay. Confirmation unlinks the marketplace listing but keeps the Closet Item and offers Undo. |
| Edit Item | Opens C-12 — Edit Item. |
| Mark as Worn | Opens C-15 — Mark as Worn. |
| Add to Outfit | Opens A-1. |
| Archive Item | Opens a confirmation overlay. Confirmation archives the item, preserves history, offers Undo, and opens C-6. |
| Sell This Item | Opens C-8 — Prepare Your Listing. |

## C-8 — Prepare Your Listing

**Purpose**

Builds a ready-to-copy resale listing draft from the closet item's existing data.

**Visible listing draft**

- Item: Camel Wool Blazer.
- Condition and asking price: Excellent, $68.
- Summary: tailored camel wool-blend blazer, worn three times.
- Brand: Estimated.
- Category: Blazer.
- Color: Camel.
- Size: M.
- Original price: $188.
- Suggested resale range: $58–$76.
- Asking price: $68.
- Prepared listing description.
- External marketplace disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-7. |
| Choose Selling Platform | Opens C-9 — Choose Where to Sell. |

## C-9 — Choose Where to Sell

**Purpose**

Lets the user select the external marketplace where they will publish and manage the sale.

**Visible platform choices**

- Poshmark — broad resale audience.
- Depop — trend-led community listings.
- Vestiaire Collective — designer and premium pieces.
- Grailed — menswear-focused resale.
- eBay — large external marketplace.
- Other platform — any preferred resale site.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-8. |
| Platform card | Applies a single local selection and updates the CTA label to “Continue to [Platform].” |
| Continue to selected platform | Opens C-10 — Link Your Listing. |
| Copy Listing Details | Copies the title, description, size, condition, and price when clipboard access is available; always shows a confirmation toast. |

**States / notes**

- Poshmark is the default selected platform.
- The prototype does not open the selected platform's listing-creation page from this screen.

## C-10 — Link Your Listing

**Purpose**

Connects the external marketplace listing back to its StyleIQ Closet Item.

**Visible fields and content**

- Item summary: Camel Wool Blazer.
- Platform selector: Poshmark, Depop, Vestiaire Collective, Grailed, eBay, Other platform.
- Required external listing URL.
- Asking price.
- Initial status: Draft.
- Possible duplicate-link warning.
- Disclosure that the sale and fulfillment stay on the marketplace.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-9. |
| Listing URL input | Detects known marketplace domains locally. An accepted unknown HTTPS domain falls back to Other platform. |
| Save Listing | Validates the URL. On success, shows a confirmation, sets Pending Review, and opens C-11. |
| I'll Do This Later | Returns to C-7 without connecting a listing. |

**Validation and states**

- URL is required.
- URL must use HTTPS and must be complete/valid.
- A URL containing the prototype marker `already-linked` triggers the duplicate-link error.
- Known marketplaces update the platform selector automatically.

---

## C-11 — Listing Connected

**Purpose**

Confirms that an external listing link has been connected and communicates its review state.

**Entry rule**

- Opened programmatically after successful URL validation on C-10. There is no direct anchor link to C-11 in the prototype.

**Visible states**

| State | Title and meaning |
|---|---|
| Pending Review | Listing is connected but will not appear in StyleIQ community results until reviewed. |
| Active / Connected | Listing is approved and can appear in relevant community results. |
| Review Failed | Listing needs attention and must be edited/resubmitted before community display. |

The screen also repeats the external marketplace responsibility disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-10. |
| Pending / Active / Review Failed | Prototype controls that switch the displayed review state locally. |
| View External Listing | Opens Poshmark externally. |
| View Closet Item | Opens C-7. |
| Back to My Closet | Opens C-6. |

## C-12 — Edit Item

**Purpose**

Edits the full closet record and provides archive/delete management.

**Visible fields**

- Change image.
- Item name.
- Category and subcategory.
- Brand, color, pattern, and material.
- Size, season, and occasion.
- Purchase price and purchase date.
- Notes, with example: tailored fit; best over light knits.
- Favorite checkbox.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-7. |
| Change image | Visible local control; no image-picker flow is connected. |
| Save Changes | Shows a success toast and opens C-7. |
| Cancel | Returns to C-7 without saving. |
| Archive Item | Opens the in-screen confirmation overlay. Confirmation archives the item, preserves wear/history, and opens C-6. |
| Delete Item | Opens the in-screen confirmation overlay. Confirmation deletes the prototype Closet Item and opens C-6. |
| Confirmation Cancel | Closes the overlay and keeps the user on C-12. |

**Archive/delete distinction**

- Archive removes the item from the active closet while keeping wear and wardrobe history.
- Delete removes the Closet Item from the prototype. A connected listing must be removed separately.
- Archive confirmation offers an Undo toast; delete does not.

## C-13 — Closet Notes

**Purpose**

Summarizes the overall wardrobe direction, strengths, opportunity areas, and underused pieces.

**Visible insights**

- Wardrobe Direction: elevated everyday dressing, warm neutrals, relaxed tailoring.
- Strongest Categories: strong foundation of tops and outerwear.
- Opportunity Area: two versatile bottoms may unlock more weekday combinations.
- Underused Pieces: three items have not been worn recently.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-1. |
| Explore Gaps | Opens C-14 — Wardrobe Gaps & Opportunities. |
| View Underused Pieces | Opens C-16 — Underused Pieces. |
| Back to My Closet | Opens C-1. |

## C-14 — Wardrobe Gaps & Opportunities

**Purpose**

Explains categories that may make the user's existing closet more flexible, without framing every gap as a purchase requirement.

**Visible opportunities**

| Opportunity | Rationale | Action |
|---|---|---|
| Versatile Bottoms | Eight tops and two bottoms; could unlock 12 combinations. | Keep this in mind. |
| Everyday Shoes | One additional neutral shoe could work with six owned pieces. | Explore when you are ready. |
| Light Layer | May bridge work and weekend looks. | No dedicated card action is connected. |

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-13. |
| Keep this in mind | Changes the label to “Saved to Discover” and shows a confirmation toast. |
| Explore when you are ready | Opens G-1 with a toast indicating Everyday Shoes context. |
| View My Closet | Opens C-6. |

## C-15 — Mark as Worn

**Purpose**

Records wear activity to improve outfit learning and cost-per-wear data.

**Visible fields**

- Date: Worn today or Choose date.
- Occasion: Work, Weekend, Dinner, Travel.
- Optional note.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-7. |
| Date and occasion controls | Set the wear record values locally. |
| Save Wear | Returns to C-7. |
| Cancel | Returns to C-7. |

**States / notes**

- The prototype does not show validation, successful wear-count change, or a duplicate-date warning.

## C-16 — Underused Pieces

**Purpose**

Surfaces pieces that have not appeared in recent looks and offers styling or resale actions.

**Visible items**

- Ivory Silk Shell — last worn 84 days ago.
- Shearling Jacket — last worn 96 days ago.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to C-13. |
| Style this piece | Passes the selected item into Muse context and opens A-6. |
| Sell | Opens C-8 — Prepare Your Listing. |
| Back to Notes | Returns to C-13. |

## C-17 — Natural Closet Growth Prompts

**Purpose**

Documents reusable, optional prompts that can appear after relevant actions. This is a pattern-demonstration screen rather than a current routed destination.

**Current entry status**

- No screen links to C-17 in the prototype.

**Prompt contexts and actions**

| Context | Prompt | Positive action | Destination | Secondary action |
|---|---|---|---|---|
| After Creating an Outfit | Do you own the shoes you wore with this look? | Add them to your closet | C-2 | Dismiss locally. |
| After Saving a Look | This jacket is not in your closet yet. | Add jacket | C-2 | Dismiss locally. |
| During Trip Planning | Add travel essentials for a better packing list. | Add essentials | C-2 | Dismiss locally. |
| After Marking an Outfit as Worn | Save this piece for future looks? | Save piece | C-2 | Dismiss locally. |

**Navigation**

- Back arrow opens C-1.

## C-18 — Cost Per Wear

**Purpose**

Analyzes recorded purchase price and wear data across owned pieces.

**Visible metrics and content**

- Closet investment: $4,286.
- Average cost per wear: $18.40.
- Filter dimensions: Category, Season, Brand, Date.
- Camel Wool Blazer: $188, 11 wears, $17.09 per wear, last worn Tuesday.
- Best value: Black Loafers at $6.20 per wear and 31 wears.
- Missing-data warning: three pieces need a purchase price.
- Note that cost-per-wear remains incomplete until missing values are added.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Currently links to F-4. The screen text says back should follow entry context from F-4 or E-6. |
| Category / Season / Brand / Date | Visible filter controls; no filtering behavior is connected. |
| Details | Opens C-7. |
| Mark worn | Opens C-15. |
| Edit price | Opens C-12. |
| Review Underused Pieces | Opens C-16. |

## C-19 — Duplicates & Similar Pieces

**Purpose**

Performs closet-wide comparison between owned pieces. This differs from G-5, which compares an owned item with a product being considered.

**Visible comparison**

- Group: Tailored camel layers.
- Similarity: 88%.
- Item metrics: one item at 11 wears / $17.09 CPW and another at 2 wears / $72 CPW.
- Comparison dimensions: Category, Color, Silhouette, Season, Material.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-4. |
| Keep Both | Saves the selected decision locally and displays status feedback. |
| Compare Details | Saves the selected decision locally and displays status feedback. No new detail screen opens. |
| Archive One | Saves the selected decision locally and displays status feedback. It does not perform the archive. |
| Sell One | Saves “Sell One” locally and opens C-8. |
| Open Item Details | Opens C-7. |

## C-20 — Seasonal Audit

**Purpose**

Guides item-by-item seasonal decisions and summarizes their effect on closet readiness and potential resale value.

**Visible items and decisions**

| Item | Context | Available decisions |
|---|---|---|
| Camel Blazer | Worn this season | Keep, Store, Sell. |
| Ivory Silk Shell | Not worn; needs repair | Repair, Donate, Archive. |
| Soft Trench | Ready for next season | Keep, Store. |

**Visible summary**

- Progress starts at 0/3.
- Counters for Kept, Stored, Archived, Donation, and Resale.
- Potential value starts at $0.
- Warning that Closet Readiness may change after confirmation.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-4. |
| Keep / Store / Repair / Donate / Archive | Selects one local audit decision for the item and updates progress/counters. |
| Sell | Selects resale for the item and opens C-8. |
| Complete Audit | Opens F-4. The prototype does not enforce all three items being decided first. |
| Open selected item | Opens C-7. |

---

---

# Section D — Planner

## D-1 — Planner Home

**Purpose**

Shows the user's week, planned looks, events, and travel-packing entry point.

**Visible content**

- Week strip from Sunday 12 through Saturday 18.
- Travel Packing Edit card.
- Today evening event: Dinner with Sarah, with Layered Cashmere planned at 16°C.
- Wednesday all-day office business meeting requiring a look.
- Thursday afternoon weekend travel commute with The Soft Neutral planned at 19°C and dry weather.
- Primary bottom navigation.

**Actions and destinations**

| Control | Result |
|---|---|
| Week day | Presented as date navigation; no date-switch behavior is connected. |
| Travel Packing Edit | Opens D-4 — Packing Edit. |
| Existing planned look / Dinner with Sarah | Opens D-3 — Planned Look Detail. |
| Plan a Look | Opens D-2 — Plan a Look. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

## D-2 — Plan a Look

**Purpose**

Collects the date and occasion for a planned look and presents Muse's weather-aware direction.

**Visible fields and content**

- Selected date: Wednesday, October 15.
- Occasion options: Office, Dinner, Travel, Event, Casual.
- Weather: 16°C and cloudy.
- Muse note recommending a structured monochrome pantsuit for the office and weather.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to D-1. |
| Occasion option | Represents the selected occasion; no local selection function is connected. |
| Create My Look | Opens D-3 — Planned Look Detail. |

## D-3 — Planned Look Detail

**Purpose**

Shows the scheduled look, its conditions, and controls for wearing, changing, or removing the plan.

**Visible content**

- Date: Wednesday, October 15.
- Context: Office Business Suit, 16°C, cool breeze.
- Selected outfit: Structured Monochrome.
- Composition: black double-breasted blazer, tailored high-rise trousers, crisp white cotton shirt.
- Weather-suitability explanation.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to D-1. |
| Wear This Look | Stores the selected look locally and opens A-4. |
| Change Look | Opens D-2. |
| Remove Plan | Returns to D-1. The prototype does not show a confirmation. |

## D-4 — Packing Edit

**Purpose**

Collects trip details needed to generate a coordinated travel capsule.

**Visible fields and content**

- Destination text field.
- Trip duration: 5 days, October 16–20.
- Occasion profile: Work Meetings, Sightseeing, Dinners.
- Expected London weather: 14°C, light rain and breeze.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to D-1. |
| Trip fields / occasion options | Capture the packing context; no validation is modeled. |
| Build My Packing Plan | Opens D-5 — Travel Wardrobe Plan. |

## D-5 — Travel Wardrobe Plan

**Purpose**

Presents a generated capsule, daily outfit schedule, and packing checklist.

**Visible content**

- London, 5 days, 7 pieces.
- Weather direction: pack waterproof layers for 14°C.
- Day 1 Travel: Sunday Soft Commute, fine knit and trench.
- Day 2 Work: The Camel Composer, camel coat and tapered charcoal pants.
- Day 3 Dinner: Structured Monochrome, black blazer and silk shell.
- Checklist: two outerwear items, three tops, two bottoms.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to D-4. |
| Add to Planner | Opens the shared planner-date confirmation, then routes to D-1. |
| Edit Packing List | Returns to D-4. |

---

---

# Section E — Wardrobe Value and Activity

## E-1 — Wardrobe Value & Activity

**Purpose**

Provides a financial and activity overview while separating confirmed activity, estimates, and Wishlist-oriented planning.

**Visible content**

- Available Style Budget: $250.
- Goal state: loafers are covered.
- Wishlist goal outcome: $36 left after loafers.
- Import Purchase History: three receipts ready.
- Brand Value Insights: best value is Arket.
- Cost Per Wear: $18.40 average.
- Resale Activity: two active, one sold.
- Confirmed value: $86 resale earnings.
- Estimated value: $142 duplicate savings.
- Disclosure: Style Budget is a personal planning tool; StyleIQ does not hold or transfer money.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| Available Style Budget card | Opens E-2 — Style Budget & Purchase Goal. |
| Wishlist goal card | Opens E-2. |
| Import Purchase History | Opens E-4. |
| Brand Value Insights | Opens E-6. |
| Cost Per Wear | Opens C-18. |
| Resale Activity | Opens E-7. |

## E-2 — Style Budget & Purchase Goal

**Purpose**

Connects the user's personal Style Budget planning with the current canonical Wishlist goal without presenting the value as a wallet or held balance.

**Visible content**

- Available Style Budget: $250.
- Label: Personal plan.
- Confirmed value: $206.
- Estimated value: $44.
- Current Wishlist target: Leather Loafers.
- Item price: $214.
- Covered state: covered by the available Style Budget.
- Remaining after purchase: $36.
- Alternative not-covered example: Camel Tailored Blazer at $290, requiring $40 more.
- Disclosure: Style Budget is a personal planning tool; StyleIQ does not hold or transfer money.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-1. |
| View Wishlist | Opens G-8 — My Wishlist. |
| View Wishlist Goal | Opens G-9 — Wishlist Item Details. |
| Configure Budget | Opens E-3 — Budget Settings. |

**States / notes**

- The screen demonstrates both a covered goal and an underfunded alternative.
- No payment, reservation, transfer, checkout, or stored-value behavior is represented.
- The Wishlist remains the canonical source for the target item.

## E-3 — Budget Settings

**Purpose**

Edits the user's personal wardrobe budget and purchase-goal rules.

**Visible fields**

- Monthly wardrobe budget.
- Currency: USD, GBP, EUR.
- Purchase-goal allocation.
- Checkbox: count confirmed resale earnings toward the next purchase goal.
- Estimated goal completion: October 2026.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-2. |
| Save | Prevents normal form submission, shows “Budget settings saved locally,” and displays a confirmation toast. It stays on E-3. |
| Cancel | Returns to E-2. |

## E-4 — Import Purchase History

**Purpose**

Offers receipt-based purchase import to prefill closet data and improve cost-per-wear tracking.

**Visible content**

- Supported receipt examples: Nordstrom, COS, Arket, Zara, Net-a-Porter, and marketplace receipts.
- Privacy note: production should request explicit receipt-only permission; the prototype does not access email.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-1. |
| Connect Gmail (Prototype) | Opens E-5 — Detected Purchases. No actual account permission occurs. |
| Upload Receipt | Opens E-5. No file picker is modeled. |
| Add Purchase Manually | Sets C-4 to manual-entry mode and opens C-4. |

## E-5 — Detected Purchases

**Purpose**

Lets the user review purchases detected from receipts before importing them into the closet.

**Visible purchases and alerts**

- Three purchases detected.
- Maison Row Leather Loafers from Nordstrom, July 12, 2026, paid $214.
- Wishlist match note: importing will mark the matching wishlist item as purchased.
- Ivory Poplin Shirt from COS, July 4, 2026, paid $89.
- Possible duplicate alert.
- Selection checkboxes.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-4. |
| Purchase checkbox | Selects the purchase for import. |
| Import Selected | Sets C-4 to imported-purchase mode and opens C-4. |
| Ignore | Shows a “Purchase ignored” toast with an Undo statement; no separate ignored list is shown. |
| Edit before import | Sets imported-purchase mode and opens C-4. |

## E-6 — Brand Value Insights

**Purpose**

Summarizes value and usage patterns by brand while identifying incomplete data.

**Visible insights**

- Closet investment share: 34% Maison Row.
- Best value: Arket at $8.40 average cost per wear.
- Low use: Maison Row at 2.8 wears per item.
- Missing data: seven pieces need purchase prices and three need wear history.
- Directional-data disclaimer when purchase price or wear data is missing.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-1. |
| Open Cost Per Wear | Opens C-18. |

## E-7 — Resale Activity

**Purpose**

Tracks the status and confirmed value of listings managed on external marketplaces.

**Visible content**

- Confirmed earnings: $86.
- Status tabs: Active, Sold, Expired / Removed.
- Camel Wool Blazer: Active on Poshmark, asking $68, linked July 12.
- Silk Midi Skirt: Sold on Depop for $86 on July 3, 2026.
- Marketplace and Style Budget disclosures.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to E-1. |
| Active / Sold / Expired / Removed | Visible status controls; no list filtering behavior is connected. |
| Original Closet Item | Opens C-7. |
| Edit listing | Opens C-10. |
| View Style Budget | Opens E-2. |

**Dynamic behavior**

- A confirmed “Mark as Sold” flow from C-7 can insert the sold item into this activity list and increase the confirmed earnings shown in the prototype.

---

---

# Section F — Profile / My Atelier

## F-1 — Profile / My Atelier

**Purpose**

Acts as the personal hub for the user's Style Twin, style identity, progress, Wishlist, history, collaborative features, and wardrobe-value tools.

**Visible content**

- User: Amelia Clark.
- Style identity: The Elevated Minimalist.
- Note that the profile photo opens Style Twin setup details.
- Muse welcome card.
- Style summary: clean lines, calm neutrals, considered tailoring.
- Direct style destinations: View Style Profile, View Style DNA, Preferences & Sizes.
- Wishlist shortcut:
  - Eight saved items.
  - Three ready to buy.
  - Next goal: Leather Loafers.
- Style Score: 92.
- Closet Readiness: 32%, with guidance to add two more tops.
- More from My Atelier: Outfit History, Style Story, Style Wrapped, Style Boards, Wardrobe Value & Activity.
- Primary bottom navigation.

**Actions and destinations**

| Control | Result |
|---|---|
| Profile avatar / Twin detail entry | Opens Y-3. |
| View Style Profile | Opens F-2. |
| View Style DNA | Opens F-6. |
| Preferences & Sizes | Opens F-3. |
| Wishlist / View Wishlist | Opens G-8 — My Wishlist. |
| Style Score details | Opens F-5. |
| Closet Readiness details | Opens F-4. |
| Continue building the closet | Opens C-1. |
| Outfit History | Opens F-7. |
| Style Story | Opens F-8. |
| Style Wrapped | Opens F-9. |
| Style Boards | Opens F-10. |
| Wardrobe Value & Activity | Opens E-1. |
| Header utility icon | Visible; no route or action is connected. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

**Dynamic note**

- The Wishlist summary is refreshed by the shared profile-learning summary function and currently resolves to “8 saved items · 3 ready to buy · next goal: Leather Loafers.”

## F-2 — My Style Profile

**Purpose**

Summarizes the user's style identity, preferred silhouettes, palette, occasions, brand-specific fit, and visual inspiration, with direct edit entry points.

**Visible content**

- Style Identity: The Elevated Minimalist.
- Description: clean lines, neutral colors, high-quality investment garments.
- Style confidence: 88/100.
- Preferred silhouettes: Structured Blazers, Wide-Leg Trousers, Oversized Knits, Trench Outerwear.
- Core palette: Ivory, Camel, Charcoal, Taupe.
- Styled occasions:
  - Business Meetings — six active looks.
  - Weekend Casual — four active looks.
  - Dinners & Galas — eight active looks.
- Brand Fit summary:
  - Two brands added.
  - Zara: Tops M, Bottoms 40.
  - COS: Tops S.
- Style Inspiration summary:
  - Six personal looks.
  - Instagram connected.
  - One Pinterest board.
  - Three style references.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| Edit Brand Fit | Opens Y-7 in profile edit mode. Saving or returning routes back to F-2. |
| Edit Inspiration | Opens Y-12 in profile edit mode. Saving or returning routes back to F-2. |
| Fine-Tune My Style | Opens Y-11 in edit mode. The primary CTA becomes Save Style Changes and returns to F-2. |

**Dynamic behavior**

- Adding, editing, or removing a Y-7 brand record refreshes the Brand Fit summary.
- Adding or removing inspiration sources on Y-12 refreshes the Style Inspiration summary.
- Y-7, Y-11, and Y-12 remain the canonical edit screens; F-2 shows summaries rather than duplicating their forms.

## F-3 — Preferences & Sizes

**Purpose**

Displays and edits favorite brands, sizes, fit preferences, and comfort zone.

**Visible profile data**

- Favorite Brands: Toteme, Max Mara, The Row, COS, Theory.
- Outerwear: Small / US 4.
- Trousers: US 6 / IT 40.
- Knitwear: Small.
- Shoes: EU 38.
- Tops Fit: Oversized / Loose.
- Bottoms Fit: Tailored / Mid-Rise.
- Comfort Zone: Premium Investments.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| Update Preferences | Enters inline edit mode. Displayed values become editable, the CTA changes to Save Preferences, and Cancel appears. |
| Save Preferences | Exits edit mode, shows local saved status and a toast, and stays on F-3. |
| Cancel | Restores the snapshot captured before editing and exits edit mode. |

## F-4 — Closet Readiness

**Purpose**

Explains closet coverage and connects readiness insights to closet optimization tools.

**Visible content**

- Closet Readiness: 32%.
- Category Balance: Outerwear strong at 18 pieces; Tops strongest at 45; Bottoms an opportunity at 22.
- Sleeping Items: 12, mostly light dresses.
- Most Worn: Black Loafers, 15 times this month.
- Closet Notes: consider listing four sleeping summer dresses; fund a warm cream knit turtleneck to improve camel-coat options.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| View Cost Per Wear | Opens C-18. |
| Check Similar Pieces | Opens C-19. |
| Start Seasonal Audit | Opens C-20. |
| See Style Picks (Discover) | Opens G-1. |

## F-5 — Style Score

**Purpose**

Explains the user's overall Style Score and the dimensions contributing to it.

**Visible metrics**

- Style Score: 92, Excellent.
- Monthly change: increased four points due to improved cost per wear and archive listing.
- Versatility: 95/100.
- Cost Efficiency: 88/100.
- Sustainability: 92/100.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |

## F-6 — Style DNA Deep Profile

**Purpose**

Provides a deeper explanation of the user's Style DNA and its key pillars.

**Visible content**

- Core identity: Quiet Luxury Minimalist.
- Description: structured neutral garments, clean tailoring, monochromatic contrasts, and modern architectural forms.
- Preferred Silhouette: Structured / Loose Fit.
- Color Essence: Warm Neutrals including Ivory, Camel, Charcoal.
- Key Fabric Profiles: Double-face Wool, Silk Crepe.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |

## F-7 — Outfit History Timeline

**Purpose**

Shows chronological outfit activity and ratings.

**Visible entries**

- October 12, 2025: Camel Composer Outfit, 5/5 stars.
- October 10, 2025: Sunday Soft Commute, 4.5/5 stars.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |

**States / notes**

- Individual history entries are not linked to an outfit-detail screen in the current prototype.

## F-8 — Style Story

**Purpose**

Turns recorded behavior into a narrative of the user's style evolution.

**Visible content**

- Active Chapter: Autumn Tailoring Evolution.
- Narrative: moved from soft weekend wear toward structured monochrome tailoring.
- Five new luxury pairings unlocked since September.
- Active Pieces: 42 items, increased by three staples.
- Style Timeline: 12 history entries.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| View Timeline | Opens F-7 — Outfit History Timeline. |

## F-9 — Style Wrapped

**Purpose**

Provides a yearly style recap using wardrobe behavior and value metrics.

**Visible content**

- Year in Style: 2025 Wrapped.
- Most Worn Brand: Toteme, worn 32 times in total.
- Cost Per Wear Champion: Camel Wool Coat, shown at $81.60 per wear versus $980 retail.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |

## F-10 — Style Boards Hub

**Purpose**

Lists the user's collaborative style boards and active polls.

**Visible content**

- Search field: “Search boards…”
- Board: Winter Travel Plan, shared with Sophia, 12 items.
- Active Outfit Poll status.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-1. |
| Search | Accepts text; no filtering function is connected. |
| Header utility icon | Visible; no route or action is connected. |
| Winter Travel Plan / shared board | Opens F-11 — Style Board Collaboration. |

## F-11 — Style Board Collaboration

**Purpose**

Shows a shared board's collaborators and its active outfit poll.

**Visible content**

- Board: Winter Travel Plan.
- Collaborator avatars/initials for the owner and Sophia.
- Active Poll, closing in two hours.
- Poll question: which black blazer outfit should be worn for dinner?

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-10. |
| View Poll & Comments | Opens F-12 — Outfit Poll Details. |

## F-12 — Outfit Poll Details

**Purpose**

Shows poll results and links to the participant voting experience.

**Visible results**

- Question: which black blazer outfit should be worn for dinner?
- Option A, Structured Monochrome: 75%, three votes.
- Option B, Coffee Meeting Contrast: 25%, one vote.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-11. |
| Share Poll / Participate | Opens F-13 — Poll Participant Vote. |

**States / notes**

- Comments are referenced in the preceding CTA, but no comment list or comment composer appears on this screen.
- Share mechanics and public-link generation are not modeled.

## F-13 — Poll Participant Vote

**Purpose**

Provides a simplified voting view for a participant helping Yasmin choose an outfit.

**Visible content**

- Context: Yasmin is choosing an outfit for dinner tonight.
- Option A: Structured Blazer.
- Option B: Coffee Meeting suit.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to F-12. |
| Option A / Option B | Selects an outfit option visually; no explicit selection function is connected. |
| Submit My Vote | Returns to F-12. The prototype does not update the displayed vote totals. |

---

---

# Section G — Discover and Shopping

## G-1 — Discover

**Purpose**

Acts as the primary discovery and intentional-shopping hub, connecting product checks, outfit completion, pre-owned discovery, the canonical Wishlist, and wardrobe opportunities.

**Visible sections**

- **Style Check:** add a product photo, screenshot, or link.
- **Complete Your Look:** wardrobe-synced suggestion for a camel blazer, relaxed trouser, and neutral loafer.
- **Shop With Intention / Pre-owned Finds:** new and pre-owned results aligned with the closet.
- **Wishlist:** strengthened module showing:
  - Eight saved items.
  - Three ready to buy.
  - Leather Loafers ready to buy.
  - A $22 price drop.
  - Fit with the current month's purchase goal.
- **Wardrobe Opportunity:** Everyday Shoes gap that may unlock seven combinations.
- **Saved Opportunities:** one saved Versatile Bottoms opportunity, expected value of 12 outfits, saved July 18.
- Primary bottom navigation.

**Pre-owned results shown**

- Ivory Rib Turtleneck, new retailer item, $98.
- Cashmere Turtleneck, Naadam, Poshmark community listing, $72, excellent, worn four times.
- Cream Merino Knit, Uniqlo, Depop external seller, $46, very good.
- Empty community-result state when filters produce no matches.
- Marketplace-responsibility disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Check a Piece | Opens G-2 — Style Check. |
| Explore Look | Opens G-10 — Complete This Look. |
| All / New / Pre-owned | Filters shopping results locally. |
| StyleIQ Users Only | Toggles community-only pre-owned results. |
| Save on new item | Opens G-8 — My Wishlist. |
| View on Poshmark / Depop | Opens the external marketplace. Current prototype URLs are placeholders. |
| View All Pre-owned | Selects the Pre-owned filter and clears community-only mode. |
| Save Search | Opens G-8 in the current HTML. |
| Wishlist module / View Wishlist | Opens G-8. |
| Explore Opportunity | Opens G-11 — Wardrobe Opportunity. |
| Explore ideas on saved opportunity | Opens G-11. |
| Dismiss saved opportunity | Removes the opportunity card, updates the saved count, and offers Undo. |
| Mark resolved | Removes the opportunity card, updates the saved count, and offers Undo. |
| Bottom navigation | Opens A-1, C-1, D-1, G-1, or F-1. |

**Wishlist architecture note**

- G-1 is an entry and status summary only.
- G-8 and G-9 remain the single canonical Wishlist list and detail flow.
- Wishlist is not added as a sixth bottom-navigation destination.

## G-2 — Style Check

**Purpose**

Accepts a shopping product from different sources so StyleIQ can compare it with the user's closet.

**Visible input methods and examples**

- Paste link or upload image surface.
- Upload Screenshot.
- Add Product Link.
- Take Photo.
- Gallery.
- Source examples: Product, Model, Web crop, Store photo.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-1. |
| Main input surface | Opens G-3 — Checking the Piece. |
| Upload Screenshot / Add Product Link / Take Photo / Gallery | Each opens G-3 in the prototype. |

**States / notes**

- Camera, gallery, file upload, URL input, permissions, invalid source, and extraction errors are not modeled.

## G-3 — Checking the Piece

**Purpose**

Communicates product extraction and closet-comparison progress.

**Visible processing content**

- Screenshot preview with `SHOP NOW $320`.
- Product identified: Tailored Blazer.
- Category and color detected: Camel.
- Material estimated: Wool blend.
- Similar closet items checked.
- Outfit compatibility being explored.
- Instruction to tap anywhere when complete.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-2. |
| Main processing surface | Opens G-4 — Style Check Result. |

**States / notes**

- No failure, retry, cancel, or unrecognized-product state is shown.

## G-4 — Style Check Result

**Purpose**

Explains how a considered product fits the user's closet, style direction, and existing-item similarity.

**Visible result**

- Product: Camel Tailored Blazer.
- Attributes: Blazer, Camel, Solid, Autumn/Winter.
- Closet compatibility: works with six pieces; High Synergy.
- Example pairings: black trousers, white shirt, dark denim, neutral loafers.
- Style alignment: Relaxed Tailoring, Quiet Luxury, Elevated Everyday.
- Similarity warning: the user may already own a similar camel blazer.
- Side-by-side Closet versus Considering preview.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-2. |
| Compare Similar Pieces | Opens G-5. |
| Save to Wishlist | Opens G-8. |
| See Outfit Ideas | Opens G-6. |
| Add to Closet Later | Opens G-7. |
| Remove piece | Returns to G-2. |

## G-5 — Similar Pieces in Your Closet

**Purpose**

Compares the considered product with the most similar owned item before purchase.

**Visible comparison**

- Owned: Camel Blazer.
- Considering: New Tailored Piece.
- Comparison dimensions: Category, Color, Silhouette, Occasion, Season.
- Shared category/color/season; different silhouette and use context.
- Muse's Take: a second piece may still be useful if fit, fabric, or occasion differs.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-4. |
| Keep in Wishlist | Opens G-8. |
| I Already Have Enough | Opens G-1. |
| View Existing Item Details | Opens C-7. |

## G-6 — Outfit Possibilities

**Purpose**

Shows how the considered product may combine with current closet pieces.

**Visible looks**

- Workday Tailoring: considered blazer plus existing trousers, silk shell, and black loafers; three closet items.
- Relaxed Weekend: considered blazer plus dark denim, white shirt, and sneakers; two closet items.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-4. |
| Save Look | Shows a saved toast and opens B-1. |
| Add to Planner | Opens the shared date-selection confirmation, then routes to D-1. |
| Save to Wishlist | Opens G-8. |
| View Closet Pieces | Opens C-1. |

## G-7 — Save for Later

**Purpose**

Captures why and how the user wants to remember a product, including collection and review timing.

**Visible fields and options**

- Collection: Everyday, Workwear, Travel, Occasionwear, Inspiration.
- Free-text note: “Why do you like this?”
- Reminder: Review next month, Review before next season, No reminder.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-4. |
| Save to Wishlist | Opens G-8. |
| Cancel | Returns to the stored origin screen. Default is G-4; G-9 and other save-idea entries can set a different origin. |

**States / notes**

- The prototype does not display validation or a saved summary before G-8.

## G-8 — My Wishlist

**Purpose**

Acts as the canonical Wishlist, keeping compatibility, duplicate risk, price changes, budget context, reminders, availability, and purchase readiness visible.

**Visible summary and items**

- Wishlist Notes: eight intentional saves and three useful gaps.
- Supporting explanation that compatibility, duplicate risk, price changes, budget context, reminders, and availability remain visible.
- Status segments: All, Saved, Review Later, Ready to Buy, Purchased, Unavailable.
- Camel Tailored Blazer:
  - $320.
  - Workwear, saved, review August 1.
  - Works with six pieces.
  - Medium gap value.
  - One similar item and duplicate warning.
- Leather Loafers:
  - $214.
  - Everyday, Ready to Buy.
  - Price down $22.
  - Fills the shoe gap.
  - In stock, reminder today.
  - Covered by Style Budget.
  - Would leave $36 available.
- Ivory Cashmere Knit:
  - $188.
  - Travel, Unavailable.
  - Last checked July 17.
  - Budget context hidden until the item becomes available again.
- Empty state: “No items in this status,” with Check a Piece.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-1. |
| Add/check icon | Opens G-2. |
| Status segment | Filters Wishlist cards locally and shows the empty state when no item matches. |
| Camel Tailored Blazer card | Opens G-9. |
| Leather Loafers card | Opens G-9. |
| Ivory Cashmere Knit | Visible card; no detail destination is connected. |
| Check a Piece | Opens G-2. |

**Budget-context rules represented**

- Budget context is emphasized on the Ready to Buy / active purchase-goal item rather than every card.
- An unavailable item suppresses budget guidance until availability returns.
- Labels communicate planning outcomes only; they do not initiate payment or reserve money.

## G-9 — Wishlist Item Details & Before-You-Buy Evaluation

**Purpose**

Provides the final intentional-purchase evaluation, shows Style Budget impact, and supports Wishlist status, purchase, collection, and removal actions.

**Visible product and evaluation**

- Maison Row Leather Loafers from retailer.
- Current price: $214.
- Price decrease: $22, from $236 to $214.
- Saved July 9 in Everyday.
- In stock; last price check July 17.
- Compatibility: 88%, 14 possible outfits.
- Style alignment: Strong; color excellent.
- Duplicate risk: Low; one similar loafer.
- Gap value: High; Everyday shoes.
- Muse recommendation: compare current black loafers first; the item supports 14 looks and stays within this month's purchase goal.
- Saved context:
  - Note: replace worn work loafers.
  - Reminder: review July 25.
  - Collection: Everyday.

**Budget Impact**

- Item price: $214.
- Available Style Budget: $250.
- Status: Covered.
- After purchase: $36.
- CTA: View Style Budget.
- Disclosure: this is planning context only; StyleIQ does not hold or transfer money.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-8. |
| View Style Budget | Opens E-2 — Style Budget & Purchase Goal. |
| View on Retailer | Opens an external placeholder retailer URL. |
| Explore Outfit Ideas | Opens G-6. |
| Compare Similar | Opens G-5. |
| Move Collection | Sets G-9 as the return origin and opens G-7. |
| Review Later | Shows a local Wishlist-status toast. |
| Mark as Purchased | Opens the purchase confirmation overlay. |
| Remove from Wishlist | Opens a generic confirmation. Confirmation returns to G-8 and offers an Undo toast. |

**Purchase confirmation overlay**

- Explains that C-4 will be prefilled with product, price, purchase date, retailer, image, and Wishlist relationship.
- **Yes, prepare item:** closes the overlay, sets C-4 to purchased-from-Wishlist mode, shows confirmation, and opens C-4.
- **Not now:** marks the item purchased locally without adding it to the closet and stays on G-9.
- **Cancel:** closes the overlay without change.

**Planning limitation**

- Covered and after-purchase values are informational calculations only.
- StyleIQ does not hold funds, execute a purchase, or transfer money to the retailer.

## G-10 — Complete This Look

**Purpose**

Shows an existing closet-based outfit and suggests an optional missing piece using new and pre-owned sources.

**Visible content**

- Look: The Camel Composer.
- Two owned closet pieces.
- Optional addition: Ivory Turtleneck Sweater.
- Rationale: may work with blazer, trouser, and denim combinations.
- New and pre-owned listings for the same wardrobe gap.
- Example listings: new retailer sweater at $88; Everlane/Poshmark community knit at $64; COS/eBay external mockneck at $39.
- Empty community-result state and marketplace disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-1. |
| All / New / Pre-owned | Filters results locally. |
| StyleIQ Users Only | Toggles community-only pre-owned results. |
| Save on new item | Opens G-7. |
| View on Poshmark / eBay | Opens the external marketplace. Current prototype URLs are placeholders. |
| View All Pre-owned | Selects Pre-owned and clears community-only mode. |
| Save Search | Shows a local save toast. |
| Check This Piece | Opens G-4 directly. |
| Save Idea | Sets G-10 as the return origin and opens G-7. |
| View My Closet | Opens C-1. |
| Add to Planner | Opens the shared planner-date confirmation, then routes to D-1. |

## G-11 — Wardrobe Opportunity

**Purpose**

Explains one wardrobe gap, its expected outfit value, and a relevant pre-owned option.

**Visible content**

- Gap: Versatile Everyday Shoes.
- Estimated synergy: seven additional outfit variations.
- Closet items that benefit.
- Color direction: Tan, Black, Taupe.
- Best season: Autumn / Spring.
- Pre-owned find: Black Leather Loafers, Vagabond, size 8, excellent, Depop, $52, StyleIQ Community.
- Marketplace disclosure.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-1. |
| View on Depop | Opens the external marketplace. Current prototype URL is a placeholder. |
| Explore Inspiration | Opens G-1. |
| Save as Wishlist Idea | Sets G-11 as the return origin and opens G-7. |
| View My Closet | Opens C-1. |

## G-12 — Wishlist Review Moment

**Purpose**

Provides a periodic review prompt that groups saved products by purchase usefulness and timing.

**Current entry status**

- No route or trigger currently opens G-12 in the prototype. It appears intended to be event- or schedule-triggered.

**Visible groups**

- Strong Fit / High Value: works with several owned pieces, example Ivory Silk Shell.
- Similar to What You Own / Compare First: worth comparing before buying, example Camel Blazer.
- Keep for Later: attractive ideas that may suit another season.

**Actions and destinations**

| Control | Result |
|---|---|
| Back arrow | Returns to G-1. |
| Review Wishlist | Opens G-8. |
| Compare Similar | Opens G-5. |
| Save for Next Season | Opens G-7. |
| Dismiss | Returns to G-1. |

---

---

# 4. Shared Overlays, Drawers, and Non-Screen States

## 4.1 Closet Filter Drawer

**Owner screen:** C-6  
**Trigger:** filter button  
**Behavior:** opens over the closet list, supports multi-field refinement, Apply, Clear all, and close-without-applying. Applying updates the count badge and list. It is not counted as a separate screen.

## 4.2 Item Archive/Delete Confirmation

**Owner screen:** C-12  
**Trigger:** Archive Item or Delete Item  
**Behavior:** changes title and warning copy based on the action; Confirm performs the local action and routes to C-6; Cancel closes the overlay.

## 4.3 Generic Confirmation Overlay

**Used by:** C-7 archive, C-7 remove listing, C-7 mark sold, G-9 remove wishlist, and generic Add to Planner actions.  
**Behavior:** title, explanatory copy, optional fields, Confirm, Cancel. It is rendered dynamically and is not a separate screen.

## 4.4 Mark Listing Sold Overlay

**Owner action:** C-7 — Mark as Sold.

Fields:

- Final sale price, required and validated as a non-negative currency-style number.
- Platform, read-only in the current example.
- Sale date.

Confirmation archives the Closet Item while preserving history, increases confirmed earnings, adds a resale-activity record, and opens E-7.

## 4.5 Purchase Confirmation Overlay

**Owner screen:** G-9  
**Trigger:** Mark as Purchased  
**Behavior:** asks whether the user also wants to prepare the purchased product for the closet. “Yes” opens C-4 with prefilled data; “Not now” marks purchased locally; Cancel closes the overlay.

## 4.6 Toast and Undo Behavior

Toasts provide short feedback for local actions. When an Undo callback exists, the toast exposes Undo. Examples include:

- archived item restoration;
- restored saved opportunity;
- restored wishlist item;
- restored external listing panel.

The toast automatically fades after approximately 4.2 seconds in the prototype.

---

---

# 5. Route and Coverage Audit

## 5.1 Verified screen coverage

- 89 unique screen IDs were found in `index(13).html`.
- No duplicate screen IDs were found.
- Every internal `#screen-*` anchor points to an existing screen ID.
- Section Y now contains 20 screens, including Y-7 Brand Fit Profile and Y-12 Style Inspiration.
- Z-1 and Z-2 are documented as reusable patterns and are not counted as screens.
- The prototype-board header still visibly says “87 Screens · 2 Patterns”; this label is stale compared with the 89 actual screen IDs and should be updated in the HTML.

## 5.2 Screens without a normal inbound anchor

| Screen | Current situation | Required production decision |
|---|---|---|
| C-11 — Listing Connected | Opened by successful C-10 form logic rather than a direct link. | Keep as a post-submit destination/state. |
| C-17 — Natural Closet Growth Prompts | Demonstration screen with no inbound route. | Treat as a pattern specification or add an internal review entry; do not expose it as a normal user destination unless intended. |
| G-12 — Wishlist Review Moment | No route or event trigger is connected. | Define the trigger, such as time-based review, wishlist threshold, price/availability change, or a Discover entry point. |

## 5.3 Visible controls without completed prototype behavior

The following controls are present but do not complete a distinct action beyond their visual state or navigation shell:

- A-2 header utility icons.
- B-1 most category filters and some saved-look cards.
- B-2 header utility icon and Remove Save behavior.
- C-4 required-field validation.
- C-12 Change image flow.
- C-18 analytical filters.
- D-1 date switching.
- D-2 occasion-selection logic and validation.
- E-7 resale-status filtering.
- F-7 individual history-entry detail.
- F-10 board search and header utility icon.
- F-12 comments and actual share-link generation.
- F-13 vote persistence and vote-total update.
- Y-7 Brand Fit uses free-text sizes and does not connect to verified brand size charts.
- Y-12 Instagram and Pinterest connections are simulated local states; no OAuth or content import occurs.
- Y-12 photo/screenshot actions adjust local counts and do not open a real picker or upload flow.
- The Y-14 back arrow currently opens Y-11 rather than the preceding Y-13 processing screen.
- The prototype-board header still reports 87 screens although 89 unique screen IDs exist.
- Several processing screens do not model error, retry, cancel, or timeout states.

## 5.4 External link status

The current prototype includes real marketplace home links in limited cases and placeholder `example.com` destinations elsewhere. Before production, each external link must be generated from validated listing or retailer data. External links should open safely and retain the marketplace disclosure.

## 5.5 Authentication production gap

Apple and Google buttons are navigation shortcuts. Email verification is simulated with code `246810`. Production requires provider authentication, secure OTP generation and expiry, retry/rate-limit handling, session creation, and the new-versus-returning onboarding routing described in X-2 and X-4.

---

---

# 6. Canonical Product Entities Referenced by the Screens

| Entity | Primary screens | Notes |
|---|---|---|
| User Account | X-1–X-4 | Authentication and onboarding-completion routing. |
| Style Twin | Y-3–Y-14, F-1, F-2 | Face/body references, profile details, preferences, inspiration inputs, processing, scene preview, and later editing. |
| General Size Profile | Y-6, F-3 | Usual top, bottom, dress/suit, shoe, and general fit starting points. |
| Brand Fit Profile | Y-7, F-2 | Canonical per-brand size and fit-note records; reused in onboarding and profile edit mode. |
| Style Inspiration | Y-12, F-2 | Personal looks, screenshots, simulated Instagram/Pinterest connections, and creator/celebrity references. |
| Style Preferences / Style DNA | Y-11, F-2, F-3, F-6 | Preferred style directions, identity, palette, silhouette, fabrics, occasions, and later fine-tuning. |
| Closet Item | Y-16–Y-19, C-1–C-20 | One canonical owned-item record with attributes, source, wear history, similarity, lifecycle, and optional listing link. |
| Outfit / Look | A-1–A-6, B-1–B-2, D-1–D-5, G-6 | Generated, saved, planned, worn, rated, or included in travel planning. |
| Wear Record | A-4, C-7, C-15, C-18, F-7 | Date, occasion, notes, feedback, and downstream cost-per-wear/history effects. |
| Wishlist Item | F-1, G-1, G-4, G-7–G-10, G-12, E-1–E-2, E-5 | One canonical saved-item flow with status, collection, reminders, price, availability, compatibility, budget context, purchase state, and closet handoff. |
| External Resale Listing | C-7–C-11, E-7, A-6, G-1, G-10, G-11 | Platform, URL, status, asking/final price, review state, and external responsibility. |
| Wardrobe Opportunity | C-13–C-14, G-1, G-11–G-12 | Gap, expected outfit value, and saved/dismissed/resolved lifecycle. |
| Style Budget | E-1–E-3, E-7, F-1, G-1, G-8–G-9 | Personal planning only; separates confirmed and estimated values and connects them to Wishlist goals without holding money. |
| Style Board / Poll | F-10–F-13 | Shared board, poll, results, and participant vote. |

# 7. Canonical Navigation Summary

| From | Action | To |
|---|---|---|
| X-1 | Get Started | X-2 |
| X-2 / X-3 / X-4 | Complete new-user access | Y-1 |
| Y-1–Y-6 | Begin Style Twin and enter general details | Y-7 |
| Y-7 | Save or skip Brand Fit during onboarding | Y-8 |
| Y-8–Y-11 | Complete body, hair, footwear, and style preferences | Y-12 |
| Y-12 | Save or skip Style Inspiration | Y-13 |
| Y-13 | Complete simulated Twin processing | Y-14 |
| Y-14 | Explore Looks | Y-15 |
| Y-15 | Add first item | Y-16 → Y-17 → Y-18 → Y-19 |
| Y-15 | Skip closet setup | Y-20 |
| Y-19 | Continue to first style snapshot | Y-20 |
| Y-20 | Enter application | A-1 |
| F-2 | Edit Brand Fit | Y-7 edit mode → F-2 |
| F-2 | Edit Inspiration | Y-12 edit mode → F-2 |
| F-2 / Y-14 | Fine-tune / Edit My Twin | Y-11 edit mode → F-2 |
| A-1 | Open outfit | A-2 |
| A-1 / A-2 | Alternatives | A-3 |
| A-1 / A-2 / A-3 / D-3 | Wear / choose look | A-4 |
| A-1 | Ask Muse | A-5 → A-6 |
| A-1 / G-6 | Save look | B-1 |
| C-1 | Browse closet | C-6 → C-7 |
| C-1 / C-6 | Add item | C-2 → C-3 → C-4 → C-5 |
| C-7 | Sell item | C-8 → C-9 → C-10 → C-11 |
| D-1 | Plan a look | D-2 → D-3 |
| D-1 / A-5 | Pack for trip | D-4 → D-5 |
| F-1 | Wishlist shortcut | G-8 |
| F-1 | Value & Activity | E-1 |
| F-1 | Closet Readiness | F-4 → C-18 / C-19 / C-20 |
| E-1 | Available Style Budget / Wishlist goal | E-2 |
| E-2 | View Wishlist / current goal | G-8 / G-9 |
| G-1 | Check a piece | G-2 → G-3 → G-4 |
| G-1 | Wishlist status module | G-8 |
| G-4 | Compare | G-5 |
| G-4 | Outfit ideas | G-6 |
| G-4 / G-10 / G-11 | Save for later | G-7 → G-8 |
| G-8 | Wishlist item | G-9 |
| G-9 | View Style Budget | E-2 |
| G-9 | Purchased item to closet | C-4 |
| F-10 | Shared board | F-11 → F-12 → F-13 |

# 8. Maintenance Rules for Future Updates

When the prototype or product flow changes, update this document using the following rules:

1. Keep the existing Screen ID unless the screen's product responsibility has materially changed.
2. Record every new CTA as either a screen route, local state, overlay, external destination, or intentionally unconnected control.
3. Add error, empty, loading, permission, validation, and destructive confirmation states under the owner screen unless they become independently addressable product screens.
4. Keep one canonical Closet Item, Wishlist Item, Outfit, Listing, and Style Budget flow; document any alternate entry point as a mode of that canonical screen.
5. Update the inventory totals and route audit whenever a screen is added, removed, merged, or converted to a reusable pattern.
6. Do not treat placeholder external URLs or local prototype storage as production integrations.
7. Keep StyleIQ as the official product name in all new screen copy and documentation.
8. When inserting a screen into a numbered flow, update every later screen ID, visible label, anchor, JavaScript selector, route table, pattern reference, entity range, and screen total together.
9. Keep Brand Fit, Style Inspiration, Wishlist, and Style Budget as canonical shared flows. Profile and Discover surfaces should summarize or link to them rather than create duplicate entities.
10. Document simulated social connections and Style Budget values as prototype/planning states, not production integrations or held money.
