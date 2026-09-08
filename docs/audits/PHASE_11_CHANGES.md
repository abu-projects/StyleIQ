# Phase 11 Changes — Global Orphan & Duplicate Cleanup

## Conditional and system states

| State | Classification | Trigger |
| --- | --- | --- |
| D-01 | CONDITIONAL_STATE | Today with zero Closet data |
| D-03 | CONDITIONAL_STATE | Today recommendation preparation/loading |
| D-05 | CONDITIONAL_STATE | Multiple Today recommendations / outfit-family presentation |
| D-06 | CONDITIONAL_STATE | Today Look missing a required category |
| B-07 | ERROR_STATE | Low-confidence or failed single-photo detection |
| B-08 | POST_SUBMIT_STATE | Single-photo processing result before review |
| B-10 | POST_SUBMIT_STATE | Batch processing review |
| B-11 | POST_SUBMIT_STATE | Import success |
| A-07–A-15 | LEGACY_REDIRECT | Compatibility routes documented in Phase 10 |

## Duplicate cleanup

- Planner, Trip, Closet Item Detail, Saved Look, and Discover/community duplicate families now use canonical states or explicit local state.
- B-10/B-11 use the canonical batch review/success implementations.
- K-07/K-08 use canonical community comment/report states.
- Remaining compatibility IDs are intentional aliases, not separate product responsibilities.

## Verification

- JavaScript syntax: PASS
- All test files syntax: PASS
- Full Playwright test discovery: PASS — 228 tests in 14 files
- `git diff --check`: PASS
- Runtime browser execution: blocked by container socket/Chromium permissions.
