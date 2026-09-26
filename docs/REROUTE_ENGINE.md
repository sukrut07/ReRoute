# Reroute Engine

## States
ACTIVE, BLOCKED, REROUTE, HUMAN_REVIEW, COMPLETED

## Actions
- CONTINUE
- REQUEST_DOCUMENT
- REQUEST_CLARIFICATION
- RESOLVE_CONFLICT
- SKIP_VERIFIED_STEP
- REVERIFY
- HUMAN_REVIEW
- COMPLETE

## Principle
Never restart the full journey for a local problem. Identify the blocker, explain it, request only what is needed, then re-verify.
