# StyleIQ — Reduce Steps / Friction Prompt (per file)

> **Goal:** fewer steps, less friction, more helpful — *"one button click and the job is done."*
> This prompt is split by file: **`index.html`** (auth), **`1.html`** (onboarding), **`2.html`** (daily loop + Muse hub), **`3.html`** (Muse chat + analytics).
>
> **Before editing:** read `DESIGN.md` and reuse the existing design system exactly — palette (ink `#1B1716`, ivory `#F8F6F3`, gold `#C89B45`, line `#ECE7E1`), Playfair headings / Inter body, `375×812` shell, `.card` / `.muse-card` / `.primary-btn` / `.secondary-btn` / `.chip` classes, `data-target` navigation.
> **Rules:** one clear primary action per screen · "show, don't ask" · gold border + gold check for selected (never black cards) · warm-stylist voice, never "AI"/"chatbot"/"dashboard". Mark every change with an HTML comment `<!-- REDUCE-STEPS: ... -->`.

---

## FILE 0 — `index.html` (Auth & Entry, screens 01–05)

**Current cost:**
- New user: Splash (auto) → Welcome → Sign Up form (4 fields: first name, last name, email, password) → Create Account = **4 fields typed + 3 taps** before entering the app.
- Returning user: Welcome → Login (email + password) → Login = **2 fields + 3 taps**, but SSO buttons are buried below a long form.

**Target:** new user in the app in **1 tap** (SSO); returning user in **1 tap**.

### 0.1 — Flip the auth layout: SSO first, form second (Screens 03 & 04)
Move **"Continue with Google"** and **"Continue with Apple"** to the **top** of both Login (03) and Sign Up (04), above everything else. Move the email/password form below, collapsed/hidden behind a small **"Use email instead"** text link. One tap → in. This is the highest-impact single change.

### 0.2 — Add SSO shortcut directly on the Welcome screen (Screen 02)
On Screen 02, add two SSO buttons between "Get Started" and "I Already Have An Account":
```
[ Get Started ]
[ Continue with Google ]
[ Continue with Apple ]
[ I already have an account ]
```
Returning users can re-auth in one tap without ever seeing a form.

### 0.3 — Reduce Sign Up form to email-only (Screen 04)
Remove **First Name**, **Last Name**, and **Password** from step 1. Show only:
- Email field
- "Continue" primary button
- SSO buttons above

Defer name to the onboarding personalization screen (08B in `1.html`, which already has gender/persona — add a name field there). Defer password to a post-email "Set your password" micro-step or use magic link / SSO entirely. This removes **3 of 4 fields** from the entry gate.

### 0.4 — Auto-dismiss or remove the Splash screen (Screen 01)
The Splash (logo only, no CTA) adds ~1.5 s of dead time for every new user. Either:
- Auto-advance to Welcome after 1.5 s (current design), or
- Remove it from the new-user flow and reserve it for return visits only.

### 0.5 — Forgot Password (Screen 05) — no change needed
Already minimal: one email field + one CTA. Correct.

**File 0 deliverable:** SSO as hero on screens 02/03/04, form demoted to "use email instead", Sign Up reduced to email-only. Marked `<!-- REDUCE-STEPS: index.html ... -->`.

---

## FILE 1 — `1.html` (Onboarding, screens 06–28)

**Current cost:** ~14–16 taps to first value. 3 intro screens + a 5-screen quiz (09–13) + method + loaders + first-looks + feedback. Pre-selection and per-screen "Let Muse Decide" already exist, but there is **no single express route.**

**Target:** fastest route = **≤ 3 taps** to a Style DNA result.

### 1.1 — Add a one-tap Express path (Screen 06)
Add a secondary CTA under "Continue":
> **"Build my style in one tap"** ✨ — *applies Muse's smart defaults to every step. You can refine anything later.*

Wire its `data-target` to `screen-14` (Building DNA → 15 result), conceptually applying "Let Muse Decide" to all of 08B–13 at once.

### 1.2 — Collapse the 5-screen quiz (09–13) into ONE optional "Refine" screen
Replace the five sequential quiz screens with a single **"Refine Your Style (optional)"** screen: four **collapsible accordion sections** (Style · Style muses · Color palette · Lifestyle), each **pre-answered** by Muse and collapsed by default.
- Primary: **"Looks good — Continue"** (one tap)
- Secondary: **"Let Muse Decide everything"**
- Power users expand a section to tweak.
Keep original 09–13 as an appendix or replace them — note which in a comment.

### 1.3 — Merge the 3 intro screens (06/07/08) into one swipeable screen
One hero screen, 3 messages as swipeable pager dots (dots already exist), plus a persistent **"Skip"** top-right → express path. No forcing 3 separate Continue taps.

### 1.4 — Photo-first capture (Screen 16)
"Upload Photos / Record Video" is already tagged **"Fastest"** — make it the single visual hero. Add: *"Muse learns your style from your photos — no quiz needed."* For photo users, the quiz (1.2) is fully skippable.

### 1.5 — Reduce required selections
Every selection screen must already satisfy its minimum via pre-selection, so **Continue is always enabled on arrival** — the user never has to tap to unlock the button.

**File 1 deliverable:** express CTA, quiz collapsed to 1 refine screen, intro merged, photo-first hero, Continue always enabled. All marked `<!-- REDUCE-STEPS: 1.html ... -->`.

---

## FILE 2 — `2.html` (Daily loop screens 29–60 + Muse hub screen 61)

**Current cost:** the daily "what to wear" answer and the Muse hub have value but the morning action and Muse aren't a clean single tap.

**Target:** the morning outfit = **one tap**; Muse hub surfaces the 5 emotions as one-tap cards.

### 2.1 — One-tap morning loop (Screens 29 → 30 → 40)
On Home (screen 29) and Today's Look (screen 30), make the primary action a single **"Wear this today"** tap that logs the outfit and routes to the "Look Worn" confirmation (`screen-40`). Verify it is ONE tap, not a multi-step confirm. This is the daily embodiment of "one button, job done."

### 2.2 — Add "Get another look" as a single secondary tap
Next to "Wear this today", one **"Show me another"** button → alternative looks (`screen-31`). No filters required first.

### 2.3 — Reframe the Muse hub (Screen 61) around the 5 emotions
Keep the warm insight cards, but add a prominent **"How can I help today?"** block of one-tap intent cards (emotional, first-person). No typing:

| Card copy | Sub-label | One-tap target |
|---|---|---|
| "Help me feel confident today" | Today's most flattering look | `screen-30` |
| "I don't know what to wear" | An outfit for right now | `screen-30` |
| "Make me look put together" | A polished, occasion-ready look | `screen-33` |
| "Save me time this week" | Auto-plan all 7 days | `screen-49` |
| "Help me not overbuy" | Style what I own + duplicate check | `screen-53` |

**File 2 deliverable:** one-tap "Wear this today", one-tap "Show me another", Muse hub emotion cards. Marked `<!-- REDUCE-STEPS: 2.html ... -->`.

---

## FILE 3 — `3.html` (Muse chat screens 78/79/80 + analytics 62–77, 81)

**Current cost:** Screen 78 leads with a **text input**; Screen 79 is a **full chatbot** requiring typing — high friction, reads as "AI startup / tech." The 5 emotions aren't surfaced.

**Target:** Muse answers each emotion in **one tap, no typing.**

### 3.1 — Turn "Ask Muse" (Screen 78) into an emotion-led launcher
Replace the chat-input emphasis with **five large tappable intent cards** (same copy/targets as 2.3 above). Each: gold icon, serif intent line, muted sub-label, chevron — one tap → an instant look or plan. Keep Muse's proactive daily check-ins (on-brand).

### 3.2 — Demote chat to a quiet secondary affordance
Keep the "Ask Muse anything…" input but move it **below** the intent cards ("Or ask Muse something else"). Conversation screen (79) stays available, no longer the headline.

### 3.3 — Keep Muse's voice warm & human
Stylist tone ("Good morning. I prepared three tailored options for your lunch."), never bot/tech. Reword "Editorial Stylist Persona" if it reads techy. No "AI", "prompt", "model".

### 3.4 — One-tap plan application (Screen 80)
"Apply Styling Plan" should be a single tap that confirms the week — no per-day confirmation loop.

**File 3 deliverable:** Screen 78 emotion launcher, chat demoted, warm voice, one-tap plan apply. Marked `<!-- REDUCE-STEPS: 3.html ... -->`.

---

## Success criteria (all files)
- **`index.html`:** new user inside the app in ≤ 1 tap (SSO); Sign Up form asks email only; SSO visible without scrolling.
- **`1.html`:** fastest onboarding = ≤ 3 taps to a Style DNA result; Continue always enabled on arrival.
- **`2.html`:** morning outfit chosen in one tap ("Wear this today"); Muse hub shows 5 emotion cards.
- **`3.html`:** each of the 5 emotions answered in one tap, no typing; chat is secondary.
- Everywhere: gold selected states (never black), warm-stylist voice (never "AI"), no broken images.
