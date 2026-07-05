# SEO Acquisition Pass

Date: 2026-07-04

## Scope

Upgrade the highest-intent SEO tool page from a thin shell into a more credible acquisition page.

Primary page:

- `/tools/royal-road-patreon-calculator`

## Implemented

- Extended `SeoPage` with optional:
  - `ctaHref`
  - `contentSections`
  - `proofPoints`
  - `trustNotes`
- Rendered those fields in dynamic tool and guide pages.
- Packaged the Patreon calculator page with:
  - a "What you get" proof grid
  - default assumption explanation
  - how-to-read-result guidance
  - trust boundaries
  - a direct CTA to `/#patreon`
- Added long-link wrapping for content pages so source URLs do not create mobile overflow.
- Added a unit test that checks the Patreon calculator page has acquisition packaging.

## Guardrails Preserved

- No Patreon login.
- No Royal Road credentials.
- No real email capture.
- No analytics, payment, posting, scraping, or external account integration.
- No guaranteed revenue, ranking, subscriber, or conversion claims.

## Verification

- `npm run lint` passed.
- `npm test` passed: 6 files, 21 tests after the follow-up SEO content pack.
- `npm run build` passed: 21 static routes.
- `npm audit --omit=dev` passed: 0 production vulnerabilities.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed.
- Local production preview restarted on `http://127.0.0.1:3102`.
- Browser QA on `/tools/royal-road-patreon-calculator`:
  - H1 renders.
  - "What you get", "Default assumptions", "How to read the result", and trust boundaries render.
  - CTA points to `/#patreon`.
  - Desktop console warnings/errors: 0.
  - Mobile console warnings/errors: 0.
  - Mobile scroll width equals client width after long-link wrapping fix.

Evidence screenshots:

- `output/qa/fictionops-patreon-seo-desktop.png`
- `output/qa/fictionops-patreon-seo-mobile.png`
