# Phase 0 Changes — `index.html` Auth Flow

> What existed, what was changed, and why. Every decision traces back to one client brief: *"one button click and the job is done."*

---

## Overview

Phase 0 covers all authentication and entry screens — the very first thing a user sees before they reach the app. The file started with 5 screens. It now has 7.

| Screen | Before | After |
|---|---|---|
| 01 | Splash — static logo, no copy | Splash — "Preparing your personal stylist..." |
| 02 | Welcome — "Get Started" only | Welcome — "Build My Style" + Muse intro card + SSO shortcuts |
| 03 | Login — email/password form as hero | Login — SSO as hero, form hidden behind "Continue with Email" |
| 04 | Sign Up — 4-field form (first, last, email, password) | Sign Up — SSO as hero, form hidden, email-only |
| **A** | *(did not exist)* | **Email Sign In** — dedicated email + password screen |
| **B** | *(did not exist)* | **Create Account with Email** — email-only, no name/password |
| 05 | Forgot Password — isolated, no clear entry point | Recover Access — now reachable only from Screen A |

---

## Screen 01 — Splash

### Before
The loading text read: `"Loading your style profile"`

Plain status-bar language. Felt like a system message, not a personal experience.

### After
```
"Preparing your personal stylist..."
```

### Why
One line sets the tone for the entire product. "Loading your style profile" sounds like loading a file. "Preparing your personal stylist..." sounds like someone is getting ready for you — which is exactly what StyleIQ is.

---

## Screen 02 — Welcome

### Before
```
[ Get Started ]
[ I Already Have An Account ]
```
Two buttons. Returning users had to tap "I Already Have An Account" → then navigate to the Login form and scroll past fields to find SSO. That's 3 steps to re-enter the app.

### After
```
[ Muse intro card — "Meet Muse, your personal stylist" ]

[ Build My Style ]          ← primary CTA for new users

— or sign back in with —

[ Continue with Google ]
[ Continue with Apple ]
  "The fastest way to start. No setup required."

[ Sign In ]                 ← quiet text link for email users
```

### Changes made
1. **"Get Started" → "Build My Style"** — action-oriented, product-language, avoids generic app phrasing.
2. **Muse intro card added** — warm teaser before any CTA. First impression of the product's personality.
3. **SSO buttons on Welcome** — returning users can re-authenticate in one tap without ever seeing a form. Eliminated 2 steps.
4. **SSO helper text** — "The fastest way to start. No setup required." — removes hesitation.
5. **"I Already Have An Account" → "Sign In"** — reduced to a quiet text link. Not the primary path.
6. **Divider rewording** — "Returning? Sign in with" removed. Replaced with "or sign back in with" — conversational, not instructional.

---

## Screen 03 — Login

### Before
```
[ Email Address field ]
[ Password field ]
[ Forgot Password? ]
[ Login button ]
────────────
[ Continue with Google ]
[ Continue with Apple ]
```
SSO was buried **below** the form. Users who wanted one-tap sign-in had to scroll to find it.

### After
```
[ Continue with Google ]    ← hero (60px, visible immediately)
[ Continue with Apple ]     ← hero (60px, visible immediately)
────── Or ──────
[ Continue with Email ▾ ]   ← toggle reveals form on tap
  "Secure sign in. Takes less than a minute."

  [hidden: email + password + Forgot Password? + Sign In button]

────────────────────
[ New here? Build My Style ]
```

### Changes made
1. **SSO flipped to top** — SSO is now the hero. No scrolling required.
2. **Form hidden by default** — email/password form collapses behind a toggle. Zero fields on arrival.
3. **"Use email & password instead" → "Continue with Email"** — warmer, less technical. Avoids the word "password" upfront.
4. **Reassurance line added** — "Secure sign in. Takes less than a minute." — addresses hesitation without adding friction.
5. **"Create Account" → "Build My Style"** — consistent language with Screen 02 CTA.
6. **Subheadline** — "Sign in to your personal style assistant." → "Your style is waiting for you." — personal stylist voice.

---

## Screen 04 — Sign Up

### Before
```
[ First Name ]
[ Last Name ]
[ Email Address ]
[ Password ]
[ Create Account ]
────────────
[ Continue with Google ]
[ Continue with Apple ]
```
4 fields before a user has seen any value. SSO buried below. Industry worst practice for conversion.

### After
```
[ Continue with Google ]    ← hero
[ Continue with Apple ]     ← hero
────── Or ──────
[ Continue with Email ▾ ]
  "We'll securely sign you in and personalize your experience."

  [hidden: Your Email field only]
  "We'll personalize everything together in the next step."
  [ Continue ]

────────────────────
[ Already have a style profile? Sign In ]
```

### Changes made
1. **SSO flipped to top** — same treatment as Login.
2. **"Create Account" → "Build Your Style"** — headline reframed around the outcome, not the action.
3. **"Start building your intelligent wardrobe today." → "Let's personalize everything together."** — warm, collaborative, not a feature announcement.
4. **First Name, Last Name, Password removed** — these are collected during onboarding (Screen 08B already asks for personalization details). Eliminated 3 of 4 fields at the entry gate.
5. **"Email Address" label → "Your Email"** — possessive, personal.
6. **Button copy: "Send Magic Link" → "Continue"** — neutral, not prescriptive about the auth mechanism.
7. **Reassurance copy updated** — sets the expectation that personalization comes next, removing anxiety about the short form.
8. **"Already have an account?" → "Already have a style profile?"** — avoids "account" (generic SaaS language). Reinforces what they actually have.

---

## Screen A — Email Sign In *(new)*

### Before
This screen did not exist. Users who tapped "Continue with Email" on Screen 03 had no dedicated destination — the flow was broken.

### After
A complete, self-contained email sign-in screen:
```
← back

StyleIQ

Sign In
"Welcome back. Your style is waiting."

[ Your Email ]
[ Password ]
                           [ Forgot Password? ]
[ Continue → ]

────────────────────
[ New here? Build My Style ]
```

### Why it was added
The old Screen 03 had the form collapsed behind a toggle — but it was never clear where that form actually led. Screen A makes the email auth journey explicit and navigable:
- **Back button** — returns to Welcome (Screen 02).
- **"Forgot Password?"** — now only accessible from this screen, creating a logical flow.
- **"New here? Build My Style"** — routes to Screen B for email-based sign up.

This screen is the hub of the email authentication path.

---

## Screen B — Create Account with Email *(new)*

### Before
This screen did not exist. Screen 04 showed a 4-field form as the only email-based sign-up option.

### After
A minimal, friction-free email-only entry:
```
← back

StyleIQ

Build Your Style
"Let's get you started."

[ Your Email ]
"We'll securely sign you in and personalize your experience."

[ Continue → ]

────────────────────
[ Already have a style profile? Sign In ]
```

### Why it was added
Screen 04 still exists as the SSO-hero sign-up screen. Screen B is the dedicated path for users who specifically choose email over SSO — it completes the flow that Screen A's "New here?" link points to.

No name, no password. Name is collected in onboarding Screen 08B. Password (if needed) is set post-email. This keeps the email path just as fast as the SSO path.

---

## Screen 05 — Recover Access (was: Forgot Password)

### Before
- Title: "Reset Password"
- Subhead: "Enter the email associated with your account. We'll send a secure reset link straight to your inbox."
- **No clear navigation path leading into it** — it existed as an isolated screen with no upstream screen in the gallery.

### After
- Title: **"Recover Your Access"**
- Subhead: "Enter your email and we'll send a secure link to get you back into your style profile."
- Now clearly reachable via **"Forgot Password?"** on Screen A only.
- "Back To Login" link retained at the bottom.

### Changes made
1. **Title reframed** — "Reset Password" is technical. "Recover Your Access" is human.
2. **Subhead updated** — removed "your account" (generic). Now references "your style profile" (personal).
3. **Navigation reconnected** — Screen 05 now sits at the end of a complete auth chain, not floating in isolation.

---

## Navigation map — final state

```
Screen 01 (Splash — auto)
        ↓
Screen 02 (Welcome)
        ├── [ Build My Style ] ──────────────────→ Onboarding (1.html)
        ├── [ Continue with Google ] ────────────→ App
        ├── [ Continue with Apple ] ─────────────→ App
        └── [ Sign In ] ─────────────────────────→ Screen A
                                                          │
Screen 03 (Login — SSO hero)                             │
        ├── [ Continue with Google ] ────────────→ App   │
        ├── [ Continue with Apple ] ─────────────→ App   │
        └── [ Continue with Email ▾ ] ───────────→ Screen A ←──┘
                                                          │
Screen A (Email Sign In)                                  │
        ├── [ Continue ] ────────────────────────→ App
        ├── [ Forgot Password? ] ────────────────→ Screen 05
        └── [ Build My Style ] ──────────────────→ Screen B

Screen 04 (Sign Up — SSO hero)
        ├── [ Continue with Google ] ────────────→ Onboarding
        ├── [ Continue with Apple ] ─────────────→ Onboarding
        └── [ Continue with Email ▾ ] ───────────→ Screen B

Screen B (Create Account with Email)
        ├── [ Continue ] ────────────────────────→ Onboarding
        └── [ Sign In ] ───────────────────────→ Screen A

Screen 05 (Recover Access)
        └── [ Back To Login ] ──────────────────→ Screen A
```

---

## Words avoided across all screens

| Avoided | Used instead |
|---|---|
| Account | Style profile |
| Register | Build My Style |
| Authentication | Sign in / Continue |
| Dashboard | *(not used in auth)* |
| Password *(upfront)* | Deferred to Screen A only |
| Create Account | Build My Style / Build Your Style |
| Get Started | Build My Style |
| Loading | Preparing your personal stylist |
| Reset Password | Recover Your Access |
| Forgot Password *(as title)* | Recover Your Access |

---

## Step count comparison

| Journey | Before | After |
|---|---|---|
| New user via SSO | 2 taps (Welcome → SSO button) | **1 tap** (SSO on Welcome) |
| New user via email | 4 fields + 3 taps | **1 field + 2 taps** |
| Returning user via SSO | 3 taps (Welcome → Login → SSO) | **1 tap** (SSO on Welcome) |
| Returning user via email | 2 fields + 3 taps | **2 fields + 2 taps** (Screen A) |
| Forgot password | Isolated — no clear path | **3 taps** (Welcome → Sign In → Screen A → Forgot Password?) |
