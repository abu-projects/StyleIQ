# Analysis Report — StyleIQ

> Analysis of the current screens (`index.html`, `1.html`, `2.html`, `3.html`) against client feedback:
> reduce user input steps, make Muse emotion-driven, add a profile/wardrobe dashboard, and identify missing pages.

**Client feedback that drove this analysis:**
- Less user friction, more helpful, fewer steps — *"one button click and the job is done."*
- Muse should solve these emotions:
  - "I hope I feel confident today."
  - "I don't know what to wear."
  - "I want to look put together."
  - "I don't want to waste time."
  - "I don't want to buy more if I don't have to."
- Onboarding should solve for those same emotions.
- Add a profile page / wardrobe dashboard: closet value, savings made, items sold/donated, and every action the user has taken.

---

## 0. index.html — Auth / Entry (screens 01–05)

**Screens:** Splash (01) · Welcome (02) · Login (03) · Sign Up (04) · Forgot Password (05).

**Current flow for a new user:**
1. Splash (auto) → 2. Welcome → tap "Get Started" → 3. Sign Up form → fill First Name, Last Name, Email, Password → tap "Create Account" = **5 fields typed** before entering the app.

**For returning user:**
1. Welcome → tap "I Already Have An Account" → 3. Login → Email + Password typed → "Login" = **2 fields + 3 taps**, or scroll past the form to find social auth.

**Findings:**
- The **social auth buttons (Google / Apple) are buried** below the full form and a divider on both Login (03) and Sign Up (04). Most users will scroll past long form fields when one-tap SSO is available.
- **Sign Up asks 4 fields** (First Name, Last Name, Email, Password) before showing any value. Best-in-class auth (Notion, Linear, Spotify) asks for **email only** at step one, defers everything else.
- **Screen 01 (Splash)** is a pure branding screen — no action available, adds a second of dead time.
- **Screen 05 (Forgot Password)** is fine — one email field, clean.

**Recommended reductions:**
1. **Flip the layout on Login (03) and Sign Up (04):** hero = SSO buttons (Google, Apple) at the top. Email/password form below, collapsed behind "Use email instead." One tap → in.
2. **Sign Up step 1:** email only + Continue. Defer first/last name to the onboarding personalization screen (08B already exists). Eliminates 2 of the 4 fields at the entry gate.
3. **Remove the Splash screen (01) from the user flow** — auto-dismiss after 1.5 s or skip entirely on return visits. It adds zero value to new users.
4. **Welcome (02):** already good. Keep "Get Started" as the primary. Optionally add a "Sign in with Google" shortcut directly on this screen so returning users never see the Login form at all.

---

## 1. Current onboarding flow (screens 06–28) & where the friction is

**The flow today (Woman path):**

| Step | Screen | Required action | Skippable? |
|---|---|---|---|
| 1 | 06 What Is StyleIQ | Continue | intro |
| 2 | 07 Save Time | Continue | intro |
| 3 | 08 Unlock Closet | Continue | intro |
| 4 | 08B Personalize | Pick "shopping for" + gender (both pre-selected) → Continue | required |
| 5 | 09 Style Preference | 4/6 pre-selected → Continue *or* "Let Muse Decide" | tappable |
| 6 | 10 Celebrity | pre-selected → Continue / Let Muse Decide | tappable |
| 7 | 11 Outfit Preference | 4/6 pre-selected → Continue / Let Muse Decide | tappable |
| 8 | 12 Color Palette | pre-selected → Continue / Let Muse Decide | tappable |
| 9 | 13 Lifestyle | pre-selected → Continue / Let Muse Decide | tappable |
| 10 | 14 Building DNA | (auto loader) | — |
| 11 | 15 Style DNA result | Build My Closet | required |
| 12 | 16 Choose method | pre-selected → Continue | required |
| 13 | 17–25 Wardrobe capture | Upload / scan / connect | required |
| 14 | 26 Building profile | (auto loader) | — |
| 15 | 27 First 3 Looks | View My Looks | required |
| 16 | 28 Outfit Feedback | Love/Not/Never → Finish | required |

**Findings:**

- **The good news:** the team has *already* done meaningful friction work — every quiz screen is **pre-populated** ("4 of 6 preselected") and has a **"Let Muse Decide"** escape hatch, and there's a countdown ("30 seconds left"). This is ahead of the client feedback, which likely predates it.
- **The remaining problem:** it's still a **5-screen quiz (09→13) + 3 intro screens + a method screen + 2 loaders + a first-looks + a feedback screen = ~14–16 taps** before the user reaches value. "Let Muse Decide" exists *per screen*, so a user must still tap it **5 times** to skip the quiz.
- **No single express path.** There is no "one button and it's done" entry — the fastest route still walks all 5 quiz screens.
- **3 intro carousel screens** (06/07/08) are pure marketing before any value — a classic churn point.

**Recommended reductions:**
1. **Add an Express path** — one "Build my style in one tap" button on the *first* screen that applies "Let Muse Decide" across **all** quiz screens at once and jumps straight to DNA result. Collapses 5 taps → 1.
2. **Collapse the 5-screen quiz into 1 optional "Refine" screen** (accordion of style / celeb / color / lifestyle), all pre-answered. Advanced users can expand; everyone else taps Continue once.
3. **Merge the 3 intro screens into 1** value-forward screen (or make them swipeable with a persistent "Skip" → express).
4. **Photo-first capture:** promote "Upload Photos / Record Video" as the single hero action on screen 16 (already marked "Fastest") and let Muse infer the quiz *from the photos*, removing the quiz entirely for photo users.

---

## 2. Muse vs. what the client wants

**Current Muse (screens 61, 78, 79, 80):**
- Screen 61 (hub): insight cards + analytics tiles — good, warm, on-brand.
- Screen 78 (Ask Muse): a **persona/profile card** + proactive check-ins + **a text input bar** ("Ask Muse styling advice…").
- Screen 79: a **full chatbot conversation** with a typed input field and send button.
- Screen 80: a weekly action plan.

**The gap:** Screens 78/79 lean into a **chat / typing interface** — exactly the "AI startup / tech platform" feeling the brand rules say to avoid, and the opposite of "one button click and the job is done." Typing a question is friction and cognitive load.

**The client's 5 emotions are not surfaced anywhere.** They map perfectly to **one-tap intents:**

| Emotion | One-tap Muse action |
|---|---|
| "I hope I feel confident today" | → Today's confident look |
| "I don't know what to wear" | → Instant outfit for now/weather/calendar |
| "I want to look put together" | → A polished occasion look |
| "I don't want to waste time" | → Auto-plan my week |
| "I don't want to buy more if I don't have to" | → Style what I already own / duplicate check |

**Recommendation:** reframe Muse's entry (screen 78) from a **chat box** into an **emotion-led launcher** — 5 large tappable "intent" cards written in the user's emotional voice. Each is **one tap → an instant answer** (a look or a plan), no typing. Keep the chat conversation as a *secondary/hidden* "Ask something else" affordance, not the headline.

---

## 3. Profile page (missing) — the "wardrobe dashboard"

There is **no user profile / wardrobe dashboard** today. The data the client wants already exists but is **scattered:**
- Wardrobe value & savings: `£847 saved this year`, `£245 resale earnings` (screen 29/58)
- Style Score `87` (screen 57)
- Resale/Donate actions (screens 70, 71, 83/85 marketplace)
- Outfit history / Style Story / Wrapped (screens 72, 73, 74)

These need to be **consolidated into a Profile hub** showing: closet value, total savings, style score, items sold/donated + earnings, a full **activity timeline of every action** (added, worn, saved, sold, donated, purchases avoided), and entry points to **edit the closet**, edit profile, and settings.

---

## 4. Missing pages (vs. the 87-screen inventory)

Files cover: **1.html** = 06–28, **2.html** = 29–61, **3.html** = 62–81. The **entire Profile & Settings phase (screens 82–87) is unbuilt** (the numbers 82–85 were partially reused by social screens). Genuinely missing:

- **Profile / Wardrobe Dashboard** (value, savings, score, stats)
- **Wardrobe Activity Log** (all actions timeline)
- **Sold & Donated Items** (resale + donation history/earnings)
- **Edit Profile**
- **Settings** (+ Subscription / Privacy)
- Plus the new **Express Onboarding** screen and the **reworked emotion-led Muse hub**.

These belong in the new **`4.html`**.

---

## File coverage map

| File | Screens | Phase |
|---|---|---|
| `index.html` | 01–05 | Auth & Entry (Splash, Welcome, Login, Sign Up, Forgot Password) |
| `1.html` | 06–28 | Onboarding & Style DNA, Wardrobe acquisition, First value |
| `2.html` | 29–61 | Core daily experience, Closet, Planner, Intelligence, Savings, Muse hub |
| `3.html` | 62–81 | Deep analytics, Resale/Donate, Social, Style Story, Muse chat |
| `4.html` (to build) | 82–87 | **Profile & Wardrobe Dashboard, Activity Log, Sold & Donated, Edit Profile, Settings** |
