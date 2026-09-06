# StyleIQ project guidance

## Active source

- The active prototype is `1.html`, with presentation in `styles.css` and behavior in `app.js`.
- Treat `_archive_not_used_by_zero_html/` and `old/` as out of scope unless the user explicitly asks for historical material.
- Preserve unrelated working-tree changes and untracked user assets.

## Context-efficient inspection

- Search only the active source files needed for the request. Do not start with a repository-wide file dump.
- For text search, use targeted commands such as `rg -n --max-columns=240 --max-columns-preview PATTERN 1.html styles.css app.js`.
- Never print an entire source file or an unbounded matching line. Inspect a narrow line range and cap displayed columns when a line may be long.
- Do not enumerate or inspect images, videos, PDFs, generated results, or archives unless they are directly relevant to the requested change.

## UI changes

- Make the smallest focused patch that satisfies the request; avoid unrelated redesign or refactoring.
- Reuse the existing local server/browser session when practical.
- Run `git diff --check`, the narrowest relevant test, and one visual browser check for each changed route or viewport. Expand verification only when the change affects shared behavior.
- Stop after the requested change and summarize the files changed and verification performed.
