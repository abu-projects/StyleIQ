# Phase 5 Changes — Saved Look State Architecture

## Canonical architecture

`G-02` is the canonical Saved Look detail. The selected entity is tracked by `selectedSavedLookId`, and the detail surface uses local sections:

- Overview
- Items
- Why It Works
- Activity
- Planning

## Alias decisions

| ID | Decision | Canonical state |
| --- | --- | --- |
| G-02 | Keep | Saved Look detail / Overview |
| G-03 | Merge as local state | Items |
| G-04 | Merge as local state | Why It Works |
| G-05 | Merge as local state | Why It Works compatibility |
| G-06 | Merge as local state | Planning |
| G-07 | Merge as local state | Activity |

The aliases resolve to G-02 and do not render separate duplicate detail bodies.

## Context-preserving actions

- Saved Look selection persists in `styleiqSelectedSavedLookV1`.
- Try On uses the selected Saved Look record.
- Add to Planner carries the selected Saved Look into the Planner Look choice.
- Wear records local activity for the selected detail.
- Remove Save returns to the Saved Looks list.

## Verification

- JavaScript syntax: PASS
- Focused test discovery: 4 desktop/mobile tests
- `git diff --check`: PASS
- Browser execution: pending because the container cannot bind the local test server socket (`Operation not permitted`).
