# StyleIQ project guidance

## Active source

- The active prototype is `index.html`, with presentation in `styles.css` and behavior in `app.js`.
- Treat `_archive_not_used_by_zero_html/` and `old/` as out of scope unless the user explicitly asks for historical material.
- Preserve unrelated working-tree changes and untracked user assets.

## Context-efficient inspection

- Search only the active source files needed for the request. Do not start with a repository-wide file dump.
- For text search, use targeted commands such as `rg -n --max-columns=240 --max-columns-preview PATTERN index.html styles.css app.js`.
- Never print an entire source file or an unbounded matching line. Inspect a narrow line range and cap displayed columns when a line may be long.
- Do not enumerate or inspect images, videos, PDFs, generated results, or archives unless they are directly relevant to the requested change.

## UI changes

- Make the smallest focused patch that satisfies the request; avoid unrelated redesign or refactoring.
- Reuse the existing local server/browser session when practical.
- Run `git diff --check`, the narrowest relevant test, and one visual browser check for each changed route or viewport. Expand verification only when the change affects shared behavior.
- Stop after the requested change and summarize the files changed and verification performed.

## Next-phase product and visual direction

The durable next-phase North Star is [STYLEIQ_NEXT_DIRECTION.md](../StyleIQ%20app/styleiq-mobile/docs/STYLEIQ_NEXT_DIRECTION.md). Read it before future Muse, Calendar/Recap, Travel, Style Twin, or created-look work. This brief records direction only; do not implement it or replace current screens/assets/flows without a dedicated user task. Refine one area at a time.

## Current work scope — user instruction (2026-09-15)

Work only on this active HTML/CSS/JavaScript prototype for now. Do not edit or implement anything in the mobile application until the user explicitly starts mobile work.

The approved S-00 — StyleIQ splash / S-01 — Welcome to StyleIQ direction preserves the same welcome-film visual shell. S-00 shows the welcome copy without access buttons; tapping it or completing the films navigates to the actual S-01 route. S-01 immediately shows three swipeable introduction slides in a transparent Liquid Glass card. Create account / Log in / Explore as guest are a separate action group below and outside the card. Direct S-01 entry must not replay the splash gate.

The S-00 → S-01 transition must preserve the mounted video elements and continuous playback. Update the route and overlay only: welcome copy fades out, the walkthrough card and separate access actions rise into place. Films continue cycling on S-01; do not pause, seek, reload, or move the video during this transition.

The three welcome slides introduce the product in this order: (1) StyleIQ’s purpose and the problem it solves—choosing outfits from clothes the customer owns; (2) key features—digital wardrobe, outfit combinations, calendar and trip planning; (3) Muse as StyleIQ’s AI personal stylist, helping with outfit suggestions and choices based on wardrobe, taste, and occasion. Do not lead with “Hi, I’m Muse”; establish StyleIQ before introducing its stylist.
