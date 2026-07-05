# Conversion Event Tracking - 2026-07-05

Purpose: make the live soft-launch loop easier to evaluate without adding accounts,
session replay, ad pixels, or platform credentials.

## Implemented

Added provider-compatible client event tracking for the two core soft-launch questions:

1. Do visitors click from public pages into the free workbench?
2. Do visitors attempt to join the weekly checklist?

Tracked events:

- `cta_click`
  - `href`
  - `location`
  - `target`
- `email_signup_submit`
  - `mode`
  - `source`
- `email_signup_invalid`
  - `mode`
- `workbench_section_click`
  - `section`

## Provider Behavior

- Vercel Analytics uses the official `@vercel/analytics` package and `track()`.
- Plausible uses `window.plausible(eventName, { props })` when configured.
- Umami uses `window.umami.track(eventName, properties)` when configured.
- When analytics is disabled or not loaded, event calls are no-ops.

Vercel's official custom event documentation says client interactions should import
`track` from `@vercel/analytics` and call it from the user action handler. It also notes
custom event data must stay flat and cannot use nested objects.

Source checked:

- `https://vercel.com/docs/analytics/custom-events`

## Privacy Boundaries

- No email address is sent as an analytics property.
- No Royal Road username, story URL, credential, or private account data is tracked.
- No session replay or advertising pixel was added.
- Event properties are limited to page location, CTA target, mode, source tag, and workbench
  section.

## Verification

Local verification on 2026-07-05:

- `npm run lint`
- `npm test` - 16 files / 55 tests passed.
- `npm run build` - production build passed and generated 31 routes.
- `npm audit --omit=dev` - 0 production vulnerabilities.
- `npm run verify:routes` - route verifier passed.

Note: Vercel custom events are plan-dependent. If the Vercel dashboard does not show custom
events, keep page-view analytics active and use Buttondown subscription counts until the plan
supports custom events or another approved analytics provider is selected.
