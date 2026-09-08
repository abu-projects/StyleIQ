# Phase 4 Changes — Closet Item Detail

## Canonical architecture

`C-02` is the canonical Closet Item Detail. The former detail-family IDs are compatibility entries that select local tabs:

| ID | Decision | Canonical state |
| --- | --- | --- |
| C-02 | Keep | Item Detail / Overview |
| C-03 | Merge as local state | Details |
| C-04 | Merge as local state | Photo tools |
| C-05 | Merge as local state | Wear & value |
| C-06 | Merge as local state | Wear & value compatibility |
| C-07 | Repurpose | Item-led styling entry |

The selected item remains in `selectedClosetItemId`. Style This Item sets the item-led styling context before opening the outfit-family flow.

## Photo tools

Edit Item Photo now opens the existing lightweight photo-tool state with Clean background, Crop, Original, Save, and Cancel controls. It no longer relies on a toast-only action.

## Verification

- JavaScript syntax: PASS
- Focused Closet test discovery: 4 desktop/mobile tests
- `git diff --check`: PASS
- Browser execution: pending because the container cannot bind the local test server socket (`Operation not permitted`).
