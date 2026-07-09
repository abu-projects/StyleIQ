# StyleIQ — Shopping Scan, Wishlist Intelligence & Smart Buying Decisions

## Context

You are updating an existing **mobile app prototype board** for an app called **StyleIQ**.

StyleIQ is a premium personal style and wardrobe intelligence app. It helps users understand their wardrobe, create better outfits, plan looks, identify wardrobe gaps, save products they like, and make more thoughtful shopping decisions.

This task is focused only on the third product layer:

1. Shopping Scan
2. Wishlist Intelligence
3. Smart Buying Decisions
4. Product-to-closet compatibility
5. Duplicate detection before buying
6. “Complete this look” suggestions
7. Wishlist organization
8. Shopping decisions based on the user’s existing wardrobe

Do not redesign onboarding, avatar creation, closet upload, closet readiness, Planner, or the entire Discover experience in this task.

Assume the user has already completed onboarding and has started building their Closet.

The app is mobile-first. Every screen must be shown inside a realistic iPhone mockup.

Above every iPhone mockup, include exactly:

`SCREEN XX — SCREEN NAME`

Example:

`SCREEN S01 — DISCOVER`

Every screen must be connected to another screen through clear buttons, navigation, back actions, bottom navigation, or contextual actions.

Do not create isolated screens.

---

# Product Direction

StyleIQ should not feel like a shopping app that pushes users to buy more clothes.

It should feel like a personal wardrobe intelligence layer that helps users decide:

- Do I already own something similar?
- Will this work with what I have?
- Is this a useful addition or just another duplicate?
- How many outfits could I create with this?
- Should I save this for later?
- Does this fill a real wardrobe gap?
- Is this worth buying based on my wardrobe needs?

The product should help users shop more intentionally.

Core promise:

> “Buy pieces that work harder with your wardrobe.”

Secondary promise:

> “Before you buy, see how it may fit into what you already own.”

Do not use language such as:

- “You need this.”
- “Buy now.”
- “Muse says you should buy this.”
- “This is a must-have.”
- “Your wardrobe is incomplete without this.”
- “This product will transform your style.”

Use language such as:

- “This may work well with pieces already in your closet.”
- “You may already own something similar.”
- “This could add more versatility to your wardrobe.”
- “Would you like to save this for later?”
- “This may fill a gap in your current wardrobe.”
- “Explore how this could work with your existing pieces.”

Muse should remain a quiet intelligence layer, not a salesperson.

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
- Clean product imagery on neutral backgrounds

The shopping experience should feel closer to:

- A private stylist’s shopping notebook
- A luxury fashion editorial wishlist
- A thoughtful wardrobe planning tool
- A calm personal shopping assistant

Avoid:

- Marketplace-style dense product grids
- Loud sale badges
- Red urgency timers
- Aggressive “Buy Now” buttons
- Generic e-commerce UI
- Neon gradients
- Heavy gamification
- Excessive AI visual effects
- Too many charts or scores

---

# Bottom Navigation

The main application already uses this bottom navigation:

1. Today
2. Closet
3. Planner
4. Discover
5. Profile

For this feature set:

- Discover should be the primary entry point for Shopping Scan and inspiration.
- Closet should show saved shopping opportunities and wardrobe gaps.
- Planner can surface prompts when a missing piece could improve a planned look.
- Today can show “Complete this look” suggestions.
- Profile can include saved preferences such as favorite brands, sizes, and shopping budget later.

All screens after onboarding must connect back to one of the five primary tabs.

No screen should be isolated.

---

# Muse Direction

Muse should be subtle.

Muse should feel like:

- A quiet wardrobe memory
- A helpful shopping companion
- A thoughtful visual organizer
- A soft intelligence layer

Muse can appear in a small elegant card or small portrait moment.

Do not place Muse on every screen.

Use language such as:

> “Based on the pieces you have added.”

> “This may work with several items already in your closet.”

> “You may already own a similar piece.”

> “This could be useful for the wardrobe direction you are building.”

> “Would you like to explore how this fits into your closet?”

Avoid commands.

Avoid saying Muse “knows best.”

---

# Smart Shopping Principles

StyleIQ should help the user make better buying decisions before they purchase something.

Every saved or scanned product should answer at least one of these questions:

1. Does the user already own something similar?
2. Does this product work with existing wardrobe pieces?
3. Does this fill a useful gap?
4. How many outfit combinations could this unlock?
5. Does it fit the user’s style direction?
6. Does it fit the user’s preferred colors, silhouettes, occasions, or seasons?
7. Is this a wishlist item, a useful wardrobe addition, or a possible duplicate?

Do not pretend StyleIQ can know exact fit, fabric quality, delivery details, price changes, or availability unless that information is visibly provided.

Use confidence-aware language.

Examples:

> “This appears similar to a blazer already in your closet.”

> “Based on your saved pieces, this may work well with 5 items.”

> “This could help create more work-to-evening combinations.”

> “This may be more useful than another similar neutral top.”

> “Availability and fit should be confirmed with the retailer.”

---

# Shopping Scan Entry Points

Shopping Scan should be available from multiple natural entry points:

1. Discover tab
2. Product screenshot from gallery
3. Shared product link
4. Product image upload
5. “Complete this look” recommendation
6. Wishlist add action
7. Closet gap card

Do not make Shopping Scan feel mandatory.

Use a simple entry point:

> “See how this works with my closet”

or:

> “Analyze a piece”

Do not use:

> “AI Shopping Scanner”

as the main user-facing label.

A more premium label can be:

> “Style Check”

or:

> “Closet Compatibility”

Recommended label:

> “Style Check”

---

# Required Screens

Create or update the following connected screens.

---

## SCREEN S01 — DISCOVER

Purpose:

Create the Discover tab as the main inspiration and shopping-intelligence entry point.

Layout:

- Bottom navigation with Discover active
- Editorial hero image
- “Style Check” action
- Curated inspiration cards
- Complete-the-look suggestions
- Saved wishlist preview
- Small wardrobe gap insight

Headline:

> “Discover”

Supporting copy:

> “Explore ideas that may work with the wardrobe you are building.”

Top primary card:

> “Style Check”

Supporting text:

> “Add a product photo, screenshot, or link to see how it may fit into your closet.”

Primary CTA:

> “Analyze a Piece”

Secondary sections:

### Complete Your Look

Show 2–3 outfit cards based on items already in the user’s closet.

Example:

> “This camel blazer could work with a relaxed trouser and neutral loafer.”

CTA:

> “Explore Look”

### Saved for Later

Show small wishlist preview.

Example:

> “4 pieces saved”

CTA:

> “View Wishlist”

### Wardrobe Opportunity

Example:

> “A versatile everyday shoe may unlock more combinations.”

CTA:

> “Explore”

Navigation:

Analyze a Piece → Screen S02  
Explore Look → Screen S10  
View Wishlist → Screen S08  
Explore wardrobe opportunity → Screen S11  
Bottom navigation Discover → remains Screen S01  
Closet tab → existing Closet screens  
Today tab → existing Today screen

---

## SCREEN S02 — STYLE CHECK

Purpose:

Allow the user to add a product they are considering.

The user may add:

- A screenshot
- A product image
- A product link
- A photo from a store

Layout:

- Back arrow to Discover
- Warm ivory background
- Large upload / paste area
- Visual examples
- Calm minimal interface

Headline:

> “See how a piece may fit your closet.”

Supporting copy:

> “Add a screenshot, product image, link, or store photo.”

Primary options:

- Upload Screenshot
- Add Product Link
- Take a Photo
- Choose from Gallery

Show small visual examples:

1. Product screenshot from an online store
2. Product photo on a model
3. Product image on a neutral background
4. Photo taken in a store

Supporting microcopy:

> “StyleIQ will help identify the piece and compare it with your wardrobe.”

Navigation:

Upload Screenshot → Screen S03  
Add Product Link → Screen S03  
Take a Photo → Screen S03  
Choose from Gallery → Screen S03  
Back → Screen S01

---

## SCREEN S03 — ANALYZING THE PIECE

Purpose:

Show the product analysis process in a calm and premium way.

Layout:

- Back arrow to Style Check
- Before / after comparison
- Original screenshot or product image
- Clean product image extraction
- Subtle processing states

Headline:

> “Looking at this piece.”

Supporting copy:

> “StyleIQ is preparing a clearer view of how it may work with your wardrobe.”

Show subtle steps:

- Product identified
- Category detected
- Color detected
- Pattern detected
- Material estimated
- Similar closet items checked
- Outfit compatibility explored

Do not use overly technical wording.

Do not show fake certainty.

Use soft progress states.

Navigation:

Analysis complete → Screen S04  
Back → Screen S02

---

## SCREEN S04 — STYLE CHECK RESULT

Purpose:

Show the product and explain how it may fit the user’s wardrobe.

Layout:

- Back arrow to Style Check
- Large clean product image
- Product details
- Compatibility insight
- Similar-item check
- Outfit combinations
- Wishlist action

Headline:

> “How this may fit your closet.”

Show product title example:

> “Camel Tailored Blazer”

Show compact detected attributes:

- Category: Blazer
- Color: Camel
- Pattern: Solid
- Season: Autumn / Winter
- Occasion: Work / Smart Casual

Main compatibility card:

> “This may work with 6 pieces already in your closet.”

Show 3–4 small clothing images from the user’s closet.

Supporting copy:

> “It may pair well with your black trousers, white shirt, dark denim, and neutral loafers.”

Show style alignment card:

> “Fits your style direction”

Example:

> “Relaxed Tailoring · Quiet Luxury · Elevated Everyday”

Show duplicate / similarity card if relevant:

> “You may already own a similar piece.”

Show side-by-side images.

Supporting copy:

> “Your existing camel blazer appears similar in color and silhouette.”

Actions:

Primary CTA:

> “Save to Wishlist”

Secondary actions:

- “Compare Similar Pieces”
- “See Outfit Ideas”
- “Add to Closet Later”
- “Remove”

Navigation:

Save to Wishlist → Screen S08  
Compare Similar Pieces → Screen S05  
See Outfit Ideas → Screen S06  
Add to Closet Later → Screen S07  
Back → Screen S02

---

## SCREEN S05 — SIMILAR PIECES IN YOUR CLOSET

Purpose:

Help the user understand whether a product is a duplicate, variation, or useful addition.

Layout:

- Back arrow to Style Check Result
- Side-by-side product comparison
- Existing closet item
- New product being considered
- Visual difference highlights
- Calm recommendation language

Headline:

> “You may already own something similar.”

Show:

Left:

> “In Your Closet”

Right:

> “Considering”

Comparison rows:

- Category
- Color
- Silhouette
- Occasion
- Season
- Estimated versatility

Example insight:

> “Both pieces are camel tailored blazers. The new piece may still be useful if it offers a different fit, fabric, or occasion.”

Use options:

- “Keep in Wishlist”
- “I Already Have Enough”
- “View Existing Item”

Do not automatically tell the user not to buy.

Do not use negative language.

Navigation:

Keep in Wishlist → Screen S08  
I Already Have Enough → return to Screen S01 or Screen S08  
View Existing Item → existing Closet Item Details  
Back → Screen S04

---

## SCREEN S06 — OUTFIT POSSIBILITIES

Purpose:

Show how the considered product may work with existing wardrobe items.

Layout:

- Back arrow to Style Check Result
- Large editorial outfit card
- Product being considered included in outfit
- Existing closet pieces clearly identified
- Multiple outfit directions
- Optional visual avatar / silhouette

Headline:

> “A few ways this may work.”

Supporting copy:

> “Based on the pieces you have added.”

Show 3 outfit cards:

### Workday Tailoring

Product + existing trousers + existing shirt + existing shoes

### Relaxed Weekend

Product + denim + knitwear + sneakers

### Dinner / Smart Casual

Product + dark trousers + top + loafers

Each card should show:

- Outfit image
- Clothing item thumbnails
- Labels:
  - “Considering”
  - “Already in your closet”

Actions:

- “Save Look”
- “Add to Planner”
- “View Closet Pieces”
- “Save Product to Wishlist”

Navigation:

Save Look → existing Saved Looks area / Today  
Add to Planner → existing Planner  
View Closet Pieces → Closet tab  
Save Product to Wishlist → Screen S08  
Back → Screen S04

---

## SCREEN S07 — SAVE FOR LATER

Purpose:

Allow users to save a product without pressure to purchase.

Layout:

- Bottom sheet or focused save screen
- Product image
- Wishlist collection selector
- Optional note
- Optional reminder

Headline:

> “Save for later.”

Supporting copy:

> “Keep this piece in mind while you build your wardrobe.”

Wishlist collections:

- Everyday
- Workwear
- Travel
- Occasionwear
- Future Purchases
- Inspiration
- Custom Collection

Optional note field:

> “Why do you like this?”

Optional reminder options:

- Review next month
- Review before next season
- No reminder

Primary CTA:

> “Save to Wishlist”

Navigation:

Save to Wishlist → Screen S08  
Cancel → Screen S04

---

## SCREEN S08 — MY WISHLIST

Purpose:

Create a premium, useful wishlist rather than a simple saved-products list.

Layout:

- Bottom navigation with Discover active
- Header:
  > “My Wishlist”
- Collection chips
- Product cards
- Smart status labels
- Closet compatibility indicators
- Add Style Check CTA

Wishlist cards should include:

- Product image
- Product name
- Category
- Optional retailer name if available
- Optional price if provided by user or product source
- Compatibility indicator
- Similarity indicator
- Saved date
- Collection label

Example smart labels:

> “Works with 6 closet pieces”

> “Similar to 1 item you own”

> “May fill a wardrobe gap”

> “Saved for autumn”

Use subtle labels only.

Do not make every card look like an ad.

Top summary card:

> “Your wishlist is strongest when it supports the wardrobe you already have.”

Show:

- 8 saved pieces
- 3 may fill useful gaps
- 2 are similar to existing pieces
- 3 work with 5+ closet pieces

Actions:

- Tap product → Screen S09
- Add a piece → Screen S02
- Manage collection → lightweight edit state
- Back → Screen S01

---

## SCREEN S09 — WISHLIST ITEM DETAILS

Purpose:

Give the user a full decision-support view for a saved item.

Layout:

- Back arrow to Wishlist
- Large product image
- Product details
- Compatibility score-style visual without calling it a score
- Closet fit analysis
- Similarity comparison
- Outfit possibilities
- Notes and reminder
- External retailer action if available

Headline:

> “Saved Piece”

Show:

- Product image
- Product name
- Collection
- Saved date
- Optional price
- Optional retailer

Main card:

> “This may work with 6 pieces in your closet.”

Show clothing thumbnails.

Second card:

> “You own 1 similar item.”

CTA:

> “Compare”

Third card:

> “This may help fill your everyday shoe gap.”

Use careful language.

Actions:

Primary CTA:

> “Explore Outfit Ideas”

Secondary actions:

- “Compare Similar Pieces”
- “Move to Another Collection”
- “Edit Note”
- “Remove from Wishlist”
- “Visit Retailer” if retailer URL is available

Important:

If a retailer link exists, clearly separate the action from StyleIQ’s recommendation.

Use:

> “View on retailer site”

Do not imply StyleIQ controls retailer stock, pricing, shipping, or fit.

Navigation:

Explore Outfit Ideas → Screen S06  
Compare Similar Pieces → Screen S05  
Move to Another Collection → Screen S07  
Back → Screen S08

---

## SCREEN S10 — COMPLETE THIS LOOK

Purpose:

Show a wardrobe-first way to discover useful additions.

This is not a generic shopping recommendation feed.

Layout:

- Entry from Today, Discover, Closet item details, or saved outfit
- Existing outfit shown first
- One missing or optional item suggestion
- Explanation of why it may help
- Save for later action

Headline:

> “Complete this look.”

Supporting copy:

> “This outfit already works with your closet. One additional piece may make it more flexible.”

Show:

- Existing outfit using closet pieces
- One optional product or category suggestion
- Label:
  > “Optional addition”
- Compatibility explanation

Example:

> “A neutral loafer may work with this blazer, trouser, and denim combination.”

Actions:

- “Style Check This Piece”
- “Save Idea”
- “View My Closet”
- “Add to Planner”

Navigation:

Style Check This Piece → Screen S04  
Save Idea → Screen S07  
View My Closet → Closet tab  
Add to Planner → Planner tab  
Back → originating screen

---

## SCREEN S11 — WARDROBE OPPORTUNITY

Purpose:

Connect Closet Intelligence to Wishlist Intelligence without forcing shopping.

Layout:

- Back arrow to Discover or Closet Insights
- Large category image
- Existing wardrobe context
- Suggested usefulness
- Save idea for later action

Headline:

> “A wardrobe opportunity.”

Supporting copy:

> “Based on the pieces you have added, this category may unlock more combinations.”

Example:

> “Versatile everyday shoes”

Show:

- Existing closet pieces that could benefit
- Outfit combinations that may be unlocked
- Suggested color direction
- Suggested occasion
- Suggested season

Example insight:

> “A neutral everyday shoe may work with 7 pieces already in your closet.”

Actions:

- “Explore Inspiration”
- “Save as Wishlist Idea”
- “View My Closet”

Do not show direct retailer products unless they are part of a later curated shopping feature.

Navigation:

Explore Inspiration → Discover inspiration feed  
Save as Wishlist Idea → Screen S07  
View My Closet → Closet tab  
Back → Screen S01 or Closet Insights

---

## SCREEN S12 — WISHLIST REVIEW MOMENT

Purpose:

Create a calm periodic review experience for saved pieces.

This should not feel like a notification or sales reminder.

Layout:

- Elegant editorial card
- Wishlist pieces grouped by usefulness
- Quiet recommendation language
- Optional reminder scheduling

Headline:

> “A quick look at your saved pieces.”

Supporting copy:

> “A few items may be especially useful for the wardrobe you are building.”

Show three groups:

### Strong Fit

> “Works with several pieces already in your closet.”

### Similar to What You Own

> “Worth comparing before buying.”

### Keep for Later

> “Beautiful ideas that may make more sense in another season.”

Actions:

- “Review Wishlist”
- “Compare Similar Pieces”
- “Save for Next Season”
- “Dismiss”

Navigation:

Review Wishlist → Screen S08  
Compare Similar Pieces → Screen S05  
Save for Next Season → Screen S07  
Dismiss → Discover or Today

---

# Shopping Scan Rules

Style Check can analyze:

- Product screenshots
- Product images
- Clothing photos
- Store photos
- Product links when information is available

StyleIQ may assist with:

- Product category detection
- Color detection
- Pattern detection
- Material estimation
- Brand suggestion when recognizable
- Similar-item detection
- Closet compatibility
- Outfit combination possibilities
- Wardrobe gap relevance
- Wishlist organization

StyleIQ should not claim:

- Exact fabric composition unless clearly provided
- Exact size or fit prediction
- Exact stock availability
- Exact retailer pricing unless visibly available
- Guaranteed compatibility
- Perfect duplicate detection

Use confidence-aware language.

Examples:

> “This appears to be a tailored wool-blend blazer.”

> “This may be similar to an item already in your closet.”

> “This may work well with several pieces you have added.”

> “Fit, sizing, price, and availability should be confirmed with the retailer.”

---

# Wishlist Intelligence Rules

Wishlist intelligence should help the user organize and evaluate products.

Each saved item can include:

- Product image
- Product title
- Category
- Color
- Season
- Occasion
- Wishlist collection
- Saved date
- Optional price
- Optional retailer
- Compatibility with closet
- Similarity to existing items
- Wardrobe gap relevance
- Outfit possibilities
- Personal note
- Reminder

Do not turn Wishlist into a generic e-commerce cart.

Do not show checkout.

Do not show discounts, payment methods, shipping, or order confirmation.

This feature is about thoughtful decision-making before shopping.

---

# Duplicate Detection Rules

Duplicate detection should be gentle and useful.

When a user scans or saves a product that looks similar to something in their closet, show:

> “You may already own something similar.”

Show:

- New product image
- Existing closet item image
- Similarity explanation

Example:

> “Both pieces are neutral tailored blazers. The new piece may still be useful if it offers a different fit, fabric, or occasion.”

Actions:

- Keep in Wishlist
- Compare Pieces
- I Already Have Enough
- View Existing Item

Do not automatically block the product.

Do not shame the user.

Do not use language like:

- “Duplicate detected”
- “You do not need this”
- “Wasteful purchase”
- “Bad decision”

---

# Natural Product Discovery Prompts

Add subtle prompts across the app.

Do not use aggressive popups.

Use inline cards, bottom sheets, or quiet suggestions.

Examples:

### After Saving an Outfit

> “Would you like to explore one optional piece that could make this look more flexible?”

Action:

> “Explore”

Routes to Screen S10.

### After Identifying a Closet Gap

> “A versatile shoe may unlock more combinations with your existing pieces.”

Action:

> “Save idea”

Routes to Screen S11 or Screen S07.

### After Scanning a Product

> “You may already own something similar.”

Action:

> “Compare”

Routes to Screen S05.

### When Opening Wishlist

> “Three saved pieces may work with five or more items in your closet.”

Action:

> “Review”

Routes to Screen S12.

All prompts must be optional, dismissible, and non-blocking.

---

# Navigation Rules

Every screen must have a logical path.

Primary flow:

Discover → Style Check → Analyze → Result → Wishlist / Outfit Ideas / Similar Pieces

Detailed flow:

- S01 Discover → S02 Style Check
- S02 Style Check → S03 Analyzing the Piece
- S03 → S04 Style Check Result
- S04 → S05 Similar Pieces
- S04 → S06 Outfit Possibilities
- S04 → S07 Save for Later
- S07 → S08 My Wishlist
- S08 → S09 Wishlist Item Details
- S09 → S05 or S06
- S01 → S10 Complete This Look
- S01 → S11 Wardrobe Opportunity
- S08 → S12 Wishlist Review Moment

All secondary screens must have back arrows.

Bottom navigation should appear on primary screens such as:

- Discover
- Wishlist
- Closet
- Today
- Planner
- Profile

Focused flows such as upload, analysis, and comparison may hide bottom navigation to reduce distraction.

No screen should be isolated.

No dead-end screens should exist.

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
- Use realistic product screenshots and clean product imagery
- Use elegant background-removed clothing images where appropriate
- Keep Muse subtle and helpful
- Make Shopping Scan feel useful, not technical
- Make Wishlist feel intelligent, personal, and calm
- Make shopping recommendations wardrobe-first, not sales-first
- Avoid overpromising AI capabilities
- Avoid generic marketplace UI
- Avoid forcing users to buy anything
- Ensure every screen connects to another screen or a main bottom-navigation tab