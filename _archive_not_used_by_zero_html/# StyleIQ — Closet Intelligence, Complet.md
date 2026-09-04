# StyleIQ — Closet Intelligence, Completion Percentage & AI Item Upload

## Context

You are updating an existing **mobile app prototype board** for an app called **StyleIQ**.

StyleIQ is a premium personal style and wardrobe intelligence app. It helps users understand what they own, create outfits, plan looks, identify wardrobe gaps, avoid duplicates, and gradually build a more useful digital wardrobe.

This task is focused only on the second product layer after onboarding:

1. Closet Intelligence
2. Closet Readiness / Completion Percentage
3. AI-assisted item upload
4. Wardrobe categories and organization
5. Closet gaps and duplicate detection
6. Sleeping items and wardrobe usage
7. Natural wardrobe growth prompts
8. Making the Closet tab useful every day

Do not redesign onboarding, login, avatar creation, Today, Planner, Discover, Wishlist, or Shopping Scan in this task.

The onboarding flow already exists separately. Assume the user has completed onboarding and is now inside the main StyleIQ app.

The app is mobile-first. Every screen must be shown inside a realistic iPhone mockup.

Above every iPhone mockup, include exactly:

`SCREEN XX — SCREEN NAME`

Example:

`SCREEN C01 — MY CLOSET`

Every screen must be connected to another screen through clear buttons, bottom navigation, back actions, or contextual actions.

Do not create isolated screens.

---

# Product Direction

Do not position StyleIQ as an app that automatically scans an entire wardrobe.

Do not use language such as:

- “Scan your whole closet”
- “Digitize your wardrobe instantly”
- “Upload your wardrobe in one click”
- “Muse knows everything you own”

Instead, position the product around this idea:

> “Your wardrobe becomes more useful as you add to it.”

And:

> “Your AI stylist gets smarter as your closet grows.”

The user should add clothing one item at a time when convenient.

StyleIQ should make this process feel easy by doing most of the work after the photo is taken.

The user action should be simple:

> Take a photo or upload one clothing item.

StyleIQ should then assist with:

- Background removal
- Image enhancement
- Clean high-resolution product-style clothing image
- Category detection
- Subcategory detection
- Color detection
- Pattern detection
- Estimated material
- Suggested brand when recognizable
- Suggested season
- Suggested occasion
- Duplicate or similar-item detection
- Outfit compatibility suggestions
- Confidence-based confirmation only when needed

The product should feel calm, elegant, useful, and achievable.

Avoid technical AI language, complicated scanning interfaces, or dense inventory-management UI.

---

# Core Product Promise

The Closet tab should not feel like a boring inventory list.

It should feel like:

- A personal wardrobe journal
- A calm visual wardrobe archive
- A useful styling workspace
- A growing source of outfit inspiration
- A private fashion atelier

The user should understand at a glance:

1. What StyleIQ currently knows about their wardrobe
2. What categories are missing
3. What they can add next
4. What outfits can already be created
5. Which pieces are underused
6. Which pieces are similar or duplicated
7. How close they are to stronger recommendations

---

# Visual Direction

Keep the existing StyleIQ visual system:

- Warm ivory / cream background
- Charcoal black primary buttons
- Soft muted beige cards
- Gold / camel accent color
- Elegant editorial fashion photography
- Clean background-removed clothing imagery
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
- Dense spreadsheet-like wardrobe tables
- Generic SaaS dashboard UI
- Excessive charts
- Aggressive popups

---

# Bottom Navigation

The main application already uses this bottom navigation:

1. Today
2. Closet
3. Planner
4. Discover
5. Profile

For this feature set:

- Closet must be the active tab on all primary wardrobe screens.
- Today may show small wardrobe prompts that route into Closet.
- Planner may show packing or missing-item prompts that route into Closet.
- Profile may show Closet Readiness as a small profile insight.
- Every secondary Closet screen must have a back action returning to Closet or the originating screen.
- No screen should be isolated.

Use the existing bottom navigation visual style.

---

# Muse Direction

Muse should remain subtle.

Muse is not a bossy AI stylist.

Do not use language like:

- “Muse knows best.”
- “You should wear this.”
- “You need to buy this.”
- “Your closet is incomplete.”
- “Fix your wardrobe.”

Use language like:

- “Based on the pieces you have added.”
- “Here is one area that may unlock more combinations.”
- “You may already own something similar.”
- “This piece could work well with…”
- “Would you like to add it?”
- “Your wardrobe snapshot is becoming clearer.”

Muse can appear as a small elegant portrait or small companion card in selected moments only.

Do not place Muse on every screen.

Muse should feel like:

- A quiet intelligence layer
- A wardrobe memory
- A visual organizer
- A helpful style companion

---

# Closet Readiness System

Create a visible and useful progress system called:

> “Closet Readiness”

Do not call it:

- “100% Complete Closet”
- “Wardrobe Completion”
- “Upload Progress”
- “Closet Score”

Closet Readiness should communicate useful wardrobe coverage, not the literal number of clothing items owned.

Use this supporting language:

> “Muse knows enough to make better suggestions as your closet grows.”

> “Add a few more essentials to unlock stronger outfit ideas.”

> “Your wardrobe snapshot is becoming clearer.”

Suggested category targets:

| Category | Suggested Target |
|---|---:|
| Tops | 10 |
| Bottoms | 5 |
| Shoes | 3 |
| Outerwear | 2 |
| Dresses / One Pieces | Optional |
| Accessories | Optional |

Important:

Do not force users to reach 100%.

The user should always feel that they can build their wardrobe naturally over time.

Use readiness milestones:

### 20% — First Outfit Suggestions

> “You can now receive basic outfit ideas.”

### 40% — Better Daily Recommendations

> “StyleIQ can now suggest more balanced daily looks.”

### 60% — Weekly Planning Unlocks

> “Plan a week of outfits with more confidence.”

### 80% — Strong Closet Intelligence

> “Find gaps, duplicates, and high-value combinations.”

Use a warm visual progress circle or elegant horizontal progress bar.

Avoid overly playful badges, confetti, or game-like reward systems.

---

# Required Screens

Create or update the following connected screens.

---

## SCREEN C01 — MY CLOSET

Purpose:

Create the main Closet tab experience.

This is the primary entry point for wardrobe intelligence.

Layout:

- Bottom navigation with Closet active
- Elegant header:
  - “My Closet”
  - Small readiness percentage
  - Optional small avatar or profile silhouette
- Large Closet Readiness card
- Category overview
- Recently added pieces
- Closet insights
- Add Item CTA

Headline:

> “My Closet”

Supporting copy:

> “A growing picture of the pieces you wear and love.”

Show:

- Closet Readiness: 32%
- Small progress ring or bar
- Supporting text:
  > “Add 2 more tops to unlock stronger weekday outfit suggestions.”

Category cards:

- Tops
- Bottoms
- Shoes
- Outerwear
- Accessories
- Dresses / One Pieces if relevant

Each category card should include:

- Clean clothing image
- Current number
- Suggested target
- Small completion indicator

Example:

> Tops  
> 6 / 10  
> “2 more could unlock more outfit combinations.”

Add a “Recently Added” horizontal clothing carousel.

Add a small “Closet Insight” card:

Example:

> “Your wardrobe currently leans toward warm neutrals and tailored everyday pieces.”

Primary CTA:

> “Add an Item”

Secondary actions:

- “Explore Categories”
- “View Closet Insights”

Navigation:

Add an Item → Screen C02  
Explore Categories → Screen C06  
View Closet Insights → Screen C09  
Bottom navigation Closet → remains Screen C01  
Today tab → existing Today screen  
Profile tab → existing Profile / My Atelier screen

---

## SCREEN C02 — ADD TO MY CLOSET

Purpose:

Give the user a calm, simple entry point for adding one clothing item.

Do not use “Scan Closet.”

Do not use closet video scanning.

Layout:

- Back arrow to My Closet
- Large visual upload area
- Premium minimal camera / gallery interface
- Three small example image cards

Headline:

> “Add one piece at a time.”

Supporting copy:

> “A clear photo is all you need. StyleIQ will help organize the rest.”

Show visual examples:

1. Flat lay
2. Clothing on hanger
3. Clothing on mannequin

Show small visual warning card:

> “For the best result, avoid crowded closets, overlapping clothes, dark lighting, or folded items.”

Primary actions:

- Take Photo
- Upload from Gallery

Optional secondary action:

- “Add manually”

Manual add should be visually quiet and should not be the main route.

Navigation:

Take Photo → Screen C03  
Upload from Gallery → Screen C03  
Add manually → Screen C05  
Back → Screen C01

---

## SCREEN C03 — PREPARING YOUR ITEM

Purpose:

Show StyleIQ improving the uploaded item image.

Layout:

- Back arrow to Add to My Closet
- Calm processing experience
- Before / after visual comparison
- Original uploaded clothing image
- Clean background-removed product-style clothing image
- Soft progress states

Headline:

> “Preparing your item for your closet.”

Supporting copy:

> “StyleIQ is creating a clean wardrobe-ready version of your piece.”

Show processing steps:

- Background cleaned
- Image enhanced
- Category detected
- Color detected
- Pattern detected
- Material estimated
- Season suggested

Use soft checkmarks and a calm loading state.

Do not use technical words such as:

- Computer vision
- Neural processing
- AI extraction pipeline
- Image segmentation

Optional small note:

> “You will only need to confirm details if something looks uncertain.”

Navigation:

Processing complete → Screen C04  
Back → Screen C02

---

## SCREEN C04 — CONFIRM YOUR ITEM

Purpose:

Allow the user to review and confirm the item with minimal effort.

Layout:

- Large clean clothing image
- Small edit photo icon
- Auto-detected attributes in elegant cards
- Only uncertain fields should ask for confirmation

Headline:

> “Does this look right?”

Supporting copy:

> “StyleIQ filled in the details. Adjust anything that needs a closer look.”

Fields:

- Category
- Subcategory
- Color
- Pattern
- Material
- Brand
- Season
- Occasion

Use visual chips and compact dropdown-style cards.

Do not show a long form.

Example high-confidence fields:

- Category: Blazer
- Color: Camel
- Pattern: Solid
- Season: Autumn / Winter
- Occasion: Work / Smart Casual

Example low-confidence field:

> “Material: Wool blend?”  
> “Is this closer to wool or cashmere?”

Use two or three quick selectable chips.

Add a duplicate check section if relevant:

> “You may already have a similar camel blazer.”

Show two small comparison images.

Actions:

Primary CTA:

> “Add to My Closet”

Secondary actions:

- “Edit Photo”
- “Save as Draft”

Navigation:

Add to My Closet → Screen C05  
Edit Photo → Screen C02  
Save as Draft → Screen C01  
Back → Screen C03

---

## SCREEN C05 — ITEM ADDED

Purpose:

Celebrate progress quietly and immediately show value.

Layout:

- Large clothing image
- Small success icon
- Closet Readiness update
- Category progress
- Optional outfit compatibility preview
- Natural next actions

Headline:

> “Added to your closet.”

Supporting copy:

> “Your wardrobe snapshot is becoming clearer.”

Show:

- Closet Readiness increased:
  > “32% → 36%”
- Category progress:
  > “Tops: 6 / 10”
- Small insight:
  > “This blazer may work with 4 pieces already in your closet.”

Show a mini visual outfit combination preview using the newly added item.

Primary CTA:

> “See Outfit Ideas”

Secondary actions:

- “Add Another Item”
- “Back to My Closet”

Navigation:

See Outfit Ideas → existing Today outfit recommendations or Screen C10  
Add Another Item → Screen C02  
Back to My Closet → Screen C01

---

## SCREEN C06 — BROWSE MY CLOSET

Purpose:

Let the user browse wardrobe items visually.

Layout:

- Closet active in bottom navigation
- Header:
  > “My Pieces”
- Search field
- Category filters
- Visual clothing grid
- Filter / sort action
- Add item floating action button or clear top CTA

Filters:

- All
- Tops
- Bottoms
- Shoes
- Outerwear
- Accessories
- Favorites
- Recently Added

Each item card should show:

- Background-removed clothing image
- Category
- Optional color dot
- Small usage indicator
- Optional small “New” badge

Do not make it look like an e-commerce catalog.

It should feel personal and editorial.

Navigation:

Tap clothing item → Screen C07  
Tap filter → Screen C08  
Add Item → Screen C02  
Back → Screen C01  
Bottom navigation → primary tabs

---

## SCREEN C07 — ITEM DETAILS

Purpose:

Show the details and intelligence around one wardrobe item.

Layout:

- Back arrow to Browse My Closet
- Large clean clothing image
- Item title
- Category / color / season chips
- Usage information
- Outfit compatibility
- Similar items
- Edit action

Example content:

> Camel Wool Blazer

Show:

- Category: Blazer
- Color: Camel
- Season: Autumn / Winter
- Occasion: Work / Smart Casual
- Added: 2 weeks ago
- Worn: 3 times
- Last worn: Last Tuesday

Closet intelligence cards:

### Works Well With

Show 3–4 clothing pieces already in the closet.

Copy:

> “This piece may work well with these items.”

### Similar Pieces

If there is a possible duplicate:

> “You have 2 similar tailored blazers.”

Do not use alarming language.

Use:

> “Similar pieces in your closet”

Actions:

- Edit Item
- Mark as Worn
- Add to Outfit
- Archive Item

Navigation:

Edit Item → compact edit state or Screen C08  
Mark as Worn → Screen C11  
Add to Outfit → existing outfit builder / Today  
Archive Item → confirmation state → Screen C06  
Back → Screen C06

---

## SCREEN C08 — FILTERS & EDIT ITEM

Purpose:

Create a reusable clean editing interface for Closet filters and item details.

Do not make it feel like a long database form.

Layout:

- Bottom sheet or full-screen lightweight editor
- Large clean item image if editing item
- Chips and dropdowns
- Save action

For closet filters:

- Category
- Color
- Season
- Occasion
- Recently Worn
- Rarely Worn
- Favorites

For item editing:

- Category
- Color
- Pattern
- Material
- Brand
- Season
- Occasion
- Favorite toggle
- Archive item

Primary CTA:

> “Save Changes”

Navigation:

Save Changes → return to Screen C06 or Screen C07  
Cancel / Back → originating screen

---

## SCREEN C09 — CLOSET INSIGHTS

Purpose:

Make Closet Intelligence feel valuable without becoming overwhelming.

Layout:

- Back arrow to My Closet
- Elegant editorial dashboard
- Three to four insight cards maximum
- Strong visual hierarchy
- Use clothing images, palette strips, and simple visual indicators instead of dense charts

Headline:

> “Your Closet Insights”

Supporting copy:

> “A clearer picture of what you wear, what works together, and what may be missing.”

Required insight cards:

### 1. Your Wardrobe Direction

Example:

> “Your closet currently leans toward elevated everyday dressing, warm neutrals, and relaxed tailoring.”

Show:

- Palette strip
- 3 visual style keywords
- Small outfit image

### 2. Strongest Categories

Example:

> “You have a strong foundation of tops and outerwear.”

Show category indicators.

### 3. Opportunity Area

Example:

> “Adding 2 versatile bottoms may unlock more weekday outfit combinations.”

Show visual suggested category cards.

### 4. Underused Pieces

Example:

> “3 pieces have not been worn recently.”

Show small item cards.

Use gentle language.

Do not shame the user.

Do not say:

- “You waste clothes.”
- “You have too many items.”
- “Your wardrobe is bad.”
- “You need to buy more.”

Actions:

- “Explore Gaps” → Screen C10
- “View Underused Pieces” → Screen C12
- “Back to My Closet” → Screen C01

---

## SCREEN C10 — WARDROBE GAPS & OPPORTUNITIES

Purpose:

Help the user understand what categories could make their wardrobe more flexible.

This is not a shopping screen yet.

Do not recommend products or brands in this task.

Focus only on wardrobe intelligence.

Layout:

- Back arrow to Closet Insights
- Visual category opportunity cards
- Outfit combination explanation
- Existing closet context

Headline:

> “A few pieces could unlock more combinations.”

Supporting copy:

> “Based on the items you have added, these categories may make your wardrobe more flexible.”

Example cards:

### Versatile Bottoms

> “You have 8 tops but only 2 bottoms.”

Show two visual clothing examples.

### Everyday Shoes

> “One additional neutral shoe could work with 6 existing pieces.”

### Light Layer

> “A lightweight layer may help bridge your work and weekend looks.”

Each card should include:

- Category image
- Why it matters
- Number of potential combinations unlocked
- Optional “Save for Later” action

Important:

Do not make this feel like pressure to shop.

Use language like:

> “Explore when you are ready.”

> “Save this idea for later.”

Actions:

- “Save to Wishlist” should not be implemented here; it will be part of the separate Shopping Scan + Wishlist Intelligence feature.
- Use a placeholder or quiet action:
  > “Keep this in mind”
- “View My Closet” → Screen C06
- Back → Screen C09

---

## SCREEN C11 — MARK AS WORN

Purpose:

Allow the user to build useful wardrobe usage history with minimal effort.

Layout:

- Bottom sheet or small lightweight screen
- Item image
- Date selector
- Optional occasion chips
- Optional outfit context
- Save action

Headline:

> “Mark as worn”

Supporting copy:

> “A small habit that helps StyleIQ understand what you reach for.”

Fields:

- Worn today
- Choose another date
- Occasion:
  - Work
  - Weekend
  - Dinner
  - Travel
  - Event
  - Casual
- Optional note

Primary CTA:

> “Save Wear”

Navigation:

Save Wear → Screen C07  
Cancel → Screen C07

---

## SCREEN C12 — UNDERUSED PIECES

Purpose:

Help the user rediscover items they own.

Layout:

- Back arrow to Closet Insights
- Elegant clothing grid
- Calm, non-judgmental copy
- Outfit inspiration entry points

Headline:

> “Pieces you may want to revisit.”

Supporting copy:

> “These items have not appeared in your recent looks. Explore a few ways to bring them back.”

Show item cards with:

- Clothing image
- Item name
- Last worn
- Small action:
  > “Style this piece”

Actions:

- Style this piece → existing Today / Outfit Builder
- Archive item → confirmation state
- Back → Screen C09

Do not frame this as guilt or waste.

---

## SCREEN C13 — NATURAL CLOSET GROWTH PROMPTS

Purpose:

Define subtle in-context prompts that can appear across the app.

This can be represented as a prototype board screen showing examples of prompts in context.

Do not use full-screen popups.

Use lightweight cards, bottom sheets, or inline suggestion modules.

Show four examples:

### Example 1 — After Creating an Outfit

> “Do you own the shoes you wore with this look?”

Action:

> “Add them to your closet”

Routes to Screen C02.

### Example 2 — After Saving a Look

> “This jacket is not in your closet yet. Would you like to add it?”

Action:

> “Add jacket”

Routes to Screen C02.

### Example 3 — During Trip Planning

> “Add a few travel essentials to help build a better packing list.”

Action:

> “Add essentials”

Routes to Screen C02.

### Example 4 — After Marking an Outfit as Worn

> “Would you like to save this piece for future looks?”

Action:

> “Save piece”

Routes to Screen C02.

Each prompt must include:

- Dismiss action
- Optional / non-blocking behavior
- No aggressive language
- No interruption of the main user task

---

# AI Item Upload Rules

The AI item upload flow should be realistic.

StyleIQ may assist with:

- Background removal
- Image cleanup
- Image enhancement
- Category recognition
- Color recognition
- Pattern recognition
- Material estimation
- Brand suggestion
- Season suggestion
- Occasion suggestion
- Similarity detection

But StyleIQ should not claim perfect accuracy.

Use confidence-aware language.

Examples:

High confidence:

> “Detected: Camel blazer”

Low confidence:

> “This looks like a wool blend. Would you like to confirm?”

> “This may be a similar item to one already in your closet.”

Avoid:

> “We know exactly what this is.”

> “Perfectly identified.”

> “Guaranteed material detection.”

---

# Duplicate Detection Rules

Duplicate detection should be gentle and helpful.

When a user uploads an item that looks similar to an existing item, show:

> “You may already have something similar.”

Show:

- New item image
- Similar existing item image
- Similarity explanation

Example:

> “Both pieces are camel tailored blazers. Keep both if they serve different occasions or fits.”

Actions:

- Add anyway
- View similar item
- Cancel upload

Do not automatically block uploads.

Do not accuse the user of buying duplicates.

---

# Closet Intelligence Rules

Closet intelligence should be based on the wardrobe data available.

Use careful, confidence-aware language.

Examples:

> “Based on the pieces you have added…”

> “Your wardrobe currently appears strongest in…”

> “You may unlock more combinations by adding…”

> “This item may work well with…”

> “These pieces look similar in color, category, or silhouette.”

Do not make absolute claims unless clearly supported by visible wardrobe data.

---

# Navigation Rules

Every screen must have a logical path.

- Closet main tab is Screen C01.
- Add Item flow is C02 → C03 → C04 → C05.
- Browse flow is C01 → C06 → C07.
- Insights flow is C01 → C09 → C10 / C12.
- Natural prompts route to C02.
- All secondary screens have back arrows.
- Bottom navigation appears on primary app screens.
- Bottom navigation does not need to appear on focused upload / confirmation screens if it would distract from the task.
- No screen should be isolated.
- No dead-end screen should exist.

---

# Deliverable Requirements

Create a polished mobile prototype board.

Requirements:

- Every screen inside a realistic iPhone mockup
- Every mockup has a screen number and screen name above it
- Screens are arranged in logical flow order
- Use arrows or small navigation notes between related screens
- Keep visual consistency with the existing StyleIQ prototype
- Use premium fashion editorial imagery
- Use clean background-removed clothing images
- Make Closet Readiness visually understandable
- Make the Closet tab useful even when the user has only a few items
- Keep Muse subtle and helpful
- Avoid overpromising AI capabilities
- Avoid dense dashboards
- Avoid forcing the user to upload their whole wardrobe
- Make wardrobe growth feel gradual, optional, and rewarding
- Ensure every screen connects to another screen or a main bottom-navigation tab