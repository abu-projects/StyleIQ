# StyleIQ — Core Onboarding, Avatar & Realistic Closet Setup Update

## Context

You are updating an existing **mobile app prototype board** for an app called **StyleIQ**.

StyleIQ is a premium personal style and wardrobe intelligence app. It helps users understand their style, build a digital wardrobe gradually, receive outfit inspiration, plan looks, save wishlist items, and make smarter shopping decisions.

This task is focused only on:

1. Core onboarding
2. Creating the user's avatar / personal identity
3. Realistic wardrobe setup
4. Reducing onboarding friction
5. Making the app useful before the user uploads their full wardrobe

Do not redesign the entire application. Update the existing onboarding and closet-entry experience while keeping the current visual language and app structure.

The app is mobile-first. Every screen must be shown inside a realistic iPhone mockup.

Above every iPhone mockup, include:

`SCREEN XX — SCREEN NAME`

Example:

`SCREEN 01 — WELCOME TO STYLEIQ`

Each screen must be connected to another screen through clear buttons, navigation, or back actions. Do not create isolated screens.

---

# Product Direction

Do not position StyleIQ as an app that can automatically scan an entire wardrobe.

Do not use promises like:

- "Scan your whole closet"
- "Digitize your wardrobe instantly"
- "Upload your wardrobe in one click"

This is not realistic because clothes overlap, hangers block items, drawers hide pieces, fabrics wrinkle, and labels are often not visible.

Instead, position StyleIQ as:

> "Your AI stylist gets smarter as your closet grows."

The key product promise is:

> "The least painful wardrobe setup."

The user should only do one simple manual action:

> Take a photo of one clothing item.

StyleIQ should do the rest:

- Remove the background
- Improve / enhance the clothing image
- Create a clean high-resolution product-style image
- Detect clothing category
- Detect color
- Detect pattern
- Estimate material
- Suggest brand if recognizable
- Suggest season
- Suggest occasion
- Ask the user only when confidence is low
- Let the user confirm the item before adding it to their closet

The app should feel intelligent, helpful, calm, and premium.

---

# Important UX Principles

## 1. Reduce onboarding friction

Users do not want to spend one hour uploading their wardrobe before they know whether they like the app.

The onboarding must give value early.

The user should receive a first useful outfit recommendation after adding a small starter wardrobe.

Do not ask the user to upload every item they own.

Instead, introduce a starter wardrobe.

Suggested starter wardrobe:

- 10 Tops
- 5 Bottoms
- 3 Shoes
- 2 Jackets / Outerwear

This is enough for StyleIQ to begin generating useful outfit suggestions.

Use messaging such as:

> "Start with the pieces you wear most."

> "You do not need to add everything today."

> "Muse becomes more helpful as your closet grows."

> "Add a few essentials now. Build the rest naturally over time."

---

## 2. Make every selection visual

The client wants onboarding to use as many images as possible.

Avoid long text forms.

Use:

- Image cards
- Outfit photos
- Clothing images
- Visual style boards
- Visual category cards
- Small selectable image tiles
- Progress indicators
- Clear visual confirmation states

Use text only when it is necessary.

Selections should feel fast and intuitive.

---

## 3. Muse should be subtle

Muse should not feel like an AI character telling users what to wear.

Avoid language like:

> "Muse knows best."

> "Wear this today."

> "You should buy this."

Instead, Muse should feel like a quiet intelligence layer.

Use language like:

> "Based on the pieces you have added."

> "Here are a few directions for today."

> "This may work well with items already in your closet."

> "Would you like to explore this option?"

Muse can appear as a small elegant portrait / visual character in selected moments, but do not place Muse on every screen.

Muse should feel like:

- A style companion
- A wardrobe memory
- A visual organizer
- A quiet recommendation layer

Not a bossy AI stylist.

---

# Visual Direction

Keep the existing StyleIQ visual system:

- Warm ivory / cream background
- Charcoal black primary buttons
- Soft muted beige cards
- Gold / camel accent color
- Elegant editorial fashion photography
- Premium wardrobe / atelier feeling
- Rounded iPhone mockups
- Minimal clean layouts
- Playfair Display or elegant serif for headings
- Inter or clean sans-serif for body text
- Soft shadows
- High-end fashion editorial imagery

The UI should feel closer to:

- A personal atelier
- A luxury wardrobe journal
- A calm fashion magazine
- A premium styling service

Avoid:

- Loud gradients
- Neon colors
- Heavy gamification
- Overly technical AI visuals
- Dense dashboard layouts
- Generic SaaS UI

---

# Bottom Navigation

The main application already uses this bottom navigation:

1. Today
2. Closet
3. Planner
4. Discover
5. Profile

During onboarding, bottom navigation should not appear until the user finishes the core setup.

After onboarding, the user should land on the Today tab.

All screens after onboarding must connect back to one of the five primary tabs.

---

# New Core Onboarding Flow

Create or update the following onboarding flow.

---

## SCREEN 01 — WELCOME TO STYLEIQ

Purpose:

Introduce StyleIQ as a personal style intelligence app.

Layout:

- Full-screen premium editorial fashion image
- Minimal StyleIQ logo
- Warm dark overlay
- Short headline
- Small supporting copy
- Primary CTA

Copy direction:

Headline:

> "Your personal style, made easier."

Supporting copy:

> "StyleIQ helps you understand what you own, discover what works together, and build a wardrobe that feels like you."

Primary CTA:

> "Get Started"

Secondary text link:

> "Already have an account? Log in"

Navigation:

Get Started → Screen 02

---

## SCREEN 02 — CREATE YOUR ACCOUNT

Purpose:

Fast account creation.

Layout:

- Clean white / ivory screen
- Apple sign in
- Google sign in
- Email sign in
- Minimal legal copy

Primary options:

- Continue with Apple
- Continue with Google
- Continue with Email

Navigation:

Successful account creation → Screen 03

---

## SCREEN 03 — MEET MUSE

Purpose:

Introduce Muse subtly.

Layout:

- Editorial portrait of Muse
- Dark or warm charcoal background
- Minimal copy
- Progress indicator: 1 of 5

Copy direction:

Headline:

> "Hi, I’m Muse."

Supporting copy:

> "I help you make sense of your wardrobe, one piece at a time."

Avoid saying:

> "I will tell you what to wear."

Primary CTA:

> "Let’s Begin"

Navigation:

Let’s Begin → Screen 04

---

## SCREEN 04 — WHO ARE WE STYLING?

Purpose:

Let the user choose the style profile they are creating.

Layout:

Large visual cards.

Options:

- Women’s
- Men’s
- Both / Shared Wardrobe
- Styling for someone else

Use real editorial people imagery.

Do not use the phrase "Gender Neutral" unless the product team explicitly wants it.

Use:

> "Both / Shared Wardrobe"

instead.

Navigation:

Continue → Screen 05

---

## SCREEN 05 — CREATE YOUR STYLE AVATAR

Purpose:

Create a personal visual identity for the user.

This is not a mandatory body scan.

The user should have three simple options.

Layout:

Large visual cards.

Options:

### Option 1 — Add a Selfie

User uploads a casual selfie.

Supporting text:

> "Use a photo you like. This helps make StyleIQ feel more personal."

### Option 2 — Create a Style Avatar

User chooses from elegant visual avatar silhouettes.

The avatar should not feel childish or cartoonish.

It should feel editorial and premium.

The user can choose:

- Skin tone
- Hair style
- Hair color
- General body silhouette
- Optional style mood

### Option 3 — Skip for Now

Supporting text:

> "You can add this later in My Atelier."

Important:

The avatar should appear later in:

- Profile / My Atelier
- Outfit recommendations
- Style identity screen
- Optional outfit visualization

Navigation:

Continue → Screen 06

---

## SCREEN 06 — YOUR STYLE STARTING POINT

Purpose:

Let the user choose visual style directions quickly.

Layout:

Visual image cards.

Ask:

> "Which directions feel most like you?"

Allow user to select up to 3.

Example options:

- Elevated Everyday
- Quiet Luxury
- Minimal
- Relaxed Tailoring
- Creative
- Classic
- Modern
- Sporty
- Romantic
- Streetwear

Use fashion editorial images.

Do not use text-only selections.

Navigation:

Continue → Screen 07

---

## SCREEN 07 — START WITH YOUR FAVORITES

Purpose:

Introduce the realistic closet setup.

Layout:

Warm visual screen with clothing flat-lay images.

Headline:

> "Start with the pieces you wear most."

Supporting copy:

> "You do not need to add your whole wardrobe today. Add a few essentials and StyleIQ can start helping immediately."

Show starter wardrobe progress list:

- Tops — 0 / 10
- Bottoms — 0 / 5
- Shoes — 0 / 3
- Outerwear — 0 / 2

Show a visual progress circle:

> "Your Closet Readiness: 0%"

Supporting microcopy:

> "Add around 20 essentials to unlock your first full-week outfit plan."

Primary CTA:

> "Add My First Item"

Secondary action:

> "I’ll build it later"

Navigation:

Add My First Item → Screen 08

I’ll build it later → Screen 12

---

## SCREEN 08 — ADD ONE ITEM

Purpose:

Teach the user the correct way to upload clothing.

Important:

Do not show "Scan Closet".

Do not show a closet video scan.

The user should add one item at a time.

Layout:

Camera / upload screen.

Headline:

> "Add one piece at a time."

Supporting copy:

> "For the best result, place the item flat, hang it clearly, or photograph it on its own."

Show three visual examples:

1. Clothing flat lay
2. Clothing on hanger
3. Clothing on mannequin

Show a small visual warning:

> "Avoid crowded closets, overlapping clothes, or dark photos."

Primary actions:

- Take Photo
- Upload from Gallery

Navigation:

Take Photo / Upload → Screen 09

---

## SCREEN 09 — AI ITEM ANALYSIS

Purpose:

Show AI assistance after photo upload.

Layout:

Before / after comparison.

Left:

Original uploaded photo.

Right:

Clean enhanced clothing image with background removed.

Show subtle processing steps:

- Background cleaned
- Category detected
- Color detected
- Fabric estimated
- Season suggested

Use a calm progress animation style.

Copy:

> "Preparing your item for your closet."

Do not make it feel overly technical.

Navigation:

Processing complete → Screen 10

---

## SCREEN 10 — CONFIRM YOUR ITEM

Purpose:

Let the user confirm the AI-generated item details.

Layout:

Large clean clothing image with removed background.

Editable fields:

- Category
- Color
- Pattern
- Material
- Brand
- Season
- Occasion

Only highlight fields where AI confidence is low.

Example:

> "Is this wool or cashmere?"

The user should not need to fill a long form.

Use chips, dropdowns, and quick selections.

Primary CTA:

> "Add to My Closet"

Secondary action:

> "Edit Photo"

Navigation:

Add to My Closet → Screen 11

Edit Photo → Screen 08

---

## SCREEN 11 — CLOSET PROGRESS CELEBRATION

Purpose:

Reward progress after adding an item.

Layout:

Clean celebratory screen.

Show:

- Clothing item added
- Closet readiness progress
- Category progress
- Small Muse insight

Example:

> "Great start. Muse now knows 1 of your everyday pieces."

Progress example:

> "Closet Readiness: 5%"

Show visual category progress:

- Tops 1 / 10
- Bottoms 0 / 5
- Shoes 0 / 3
- Outerwear 0 / 2

Primary CTA:

> "Add Another Item"

Secondary CTA:

> "See What StyleIQ Can Do"

Navigation:

Add Another Item → Screen 08

See What StyleIQ Can Do → Screen 12

---

## SCREEN 12 — YOUR FIRST STYLE SNAPSHOT

Purpose:

Give immediate value before the closet is complete.

Layout:

Premium style summary screen.

Show:

- User avatar or style silhouette
- Chosen style directions
- First outfit direction
- Suggested palette
- Small Muse insight
- Closet readiness percentage

Example copy:

> "Your wardrobe is just getting started."

> "Based on your style direction, here is a first look you may enjoy."

Do not pretend the app knows everything yet.

Use language like:

> "Early Style Snapshot"

> "As you add more pieces, your recommendations will become more personal."

Primary CTA:

> "Explore My StyleIQ"

Navigation:

Explore My StyleIQ → Today tab / Main app home

---

# Closet Completion System

Add a visible closet progress system throughout the app.

Do not call it "100% Complete Closet."

Use one of these labels:

- Closet Readiness
- Style Coverage
- Wardrobe Snapshot
- Muse Knows Your Closet

Recommended label:

> "Closet Readiness"

Examples:

> "Closet Readiness: 18%"

> "Muse knows 18% of your wardrobe."

> "Add 3 more tops to improve weekday outfit suggestions."

The percentage should be based on useful coverage, not literal number of clothes.

Suggested category targets:

| Category | Suggested Target |
|---|---:|
| Tops | 10 |
| Bottoms | 5 |
| Shoes | 3 |
| Outerwear | 2 |
| Dresses / One Pieces | Optional |
| Accessories | Optional |

Show milestones:

### 20% — First Outfit Suggestions

> "You can now receive basic outfit ideas."

### 40% — Better Daily Recommendations

> "Muse can now suggest more balanced daily looks."

### 60% — Weekly Planning Unlocks

> "Plan a week of outfits with more confidence."

### 80% — Strong Closet Intelligence

> "Find gaps, duplicates, and high-value combinations."

Do not force the user to reach 100%.

The user should always feel they can continue naturally over time.

---

# Natural Closet Growth Prompts

Add gentle prompts inside the app after onboarding.

Examples:

When user creates an outfit:

> "Do you own the shoes you wore with this look? Add them to your closet."

When user saves an outfit:

> "Muse noticed this jacket is not in your closet yet. Add it?"

When user plans a trip:

> "Add a few travel essentials so Muse can build better packing suggestions."

When user wears something:

> "Would you like to save this piece to your closet for future looks?"

These prompts must be optional and subtle.

Do not interrupt the user with aggressive popups.

---

# Navigation Rules

Every screen must have a logical path.

- Onboarding screens move forward through clear CTAs.
- Back arrows return to the previous onboarding screen.
- After onboarding, the user lands on the Today tab.
- Closet setup screens should be accessible later from Closet tab.
- Profile / My Atelier should allow the user to update avatar later.
- No screen should be isolated.
- Do not create dead-end screens.

---

# Deliverable Requirements

Create a polished mobile prototype board.

Requirements:

- Every screen inside an iPhone mockup
- Every mockup has a screen number and screen name above it
- Screens are arranged in logical flow order
- Use arrows or small navigation notes between related screens
- Keep visual consistency with the existing StyleIQ prototype
- Use premium fashion editorial imagery
- Use realistic clothing upload imagery
- Use clean background-removed clothing images after AI analysis
- Make the onboarding feel fast, visual, calm, and achievable
- Avoid overpromising AI capabilities
- Keep Muse subtle, helpful, and non-commanding
- Make the user feel value before they add their full wardrobe@