# StyleIQ legacy and supporting archive

This folder contains the previous HTML prototypes, their tests, documentation,
review captures, exports, and temporary working files that are not required to
run or verify the current `0.html` prototype.

Nothing was deleted during the cleanup. The original names and directory
structure were preserved here so any item can be moved back if needed.

The active project files intentionally left at the repository root are:

- `0.html`
- `images/`
- `tests/zero-html-baseline.spec.js`
- `playwright.config.js`
- `package.json` and `package-lock.json`
- `node_modules/`
- `.git/` and `.gitignore`

The `images` and `node_modules` symlinks in this archive point to the active
root dependencies so older HTML and utility files can still resolve shared
assets without copying them.
