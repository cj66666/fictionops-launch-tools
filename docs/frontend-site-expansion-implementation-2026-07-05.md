# Frontend Site Expansion Implementation

Date: 2026-07-05

## Scope

Implemented the public-facing product website layer from
`docs/frontend-site-expansion-plan-2026-07-04.md` and the screenshot pack under
`output/competitor-reference-2026-07-04/`.

## Implemented Routes

- `/` - marketing landing page.
- `/app` - existing no-login tool workbench.
- `/tools` - tool directory.
- `/tools/[slug]` - existing tool SEO pages retained.
- `/features` - product feature overview.
- `/pricing` - Free + Pro waitlist pricing hypothesis, no real payment.
- `/blog` - visible guide/blog index for existing guide and tool content.
- `/guides/[slug]` - existing guide SEO pages retained.
- `/login` - account-not-live placeholder.
- `/signup` - checklist / Pro waitlist preview placeholder.

## Product Decisions

- The working tool suite moved from `/` to `/app`.
- `/` now explains the public product value before sending users into the real workbench.
- Public navigation now includes Tools, Features, Pricing, Blog, Log in, and Sign up.
- Login and signup pages do not create accounts, store data, connect auth, or connect email.
- Existing tool CTAs now point to `/app#launch`, `/app#swaps`, `/app#patreon`,
  `/app#rules`, and `/app#updates`.

## Visual Direction

Reference emphasis:

- Chapter Chronicles: niche author positioning, repeated CTA, pricing/FAQ-style clarity.
- Novelcrafter: polished SaaS structure, resource navigation, footer completeness.
- Ream: author-income narrative and clear workflow progression.
- Rising Stars Tracker: data-product credibility and compact navigation.

Implementation choices:

- White/light product shell with restrained blue, green trust accents, dark trust band, and
  amber warning/exclusion accents.
- Real FictionOps workspace screenshot used as the homepage product preview asset:
  `public/images/fictionops-workbench.png`.
- Static 1200 x 630 social preview image added:
  `public/images/fictionops-og.png`.
- JSON-LD structured data added separately after this expansion pass; see
  `docs/structured-data-hardening-2026-07-05.md`.
- No decorative auth form, no fake payment table, no production integration.

## Verification

Passed locally:

- `npm run lint`
- `npm test` - 9 files, 28 tests.
- `npm run build` - 29 static routes.
- `npm run verify:local-preview` - lint, tests, production audit, local-origin build,
  temporary production server, and strengthened route/metadata checks.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- `npm run verify:routes`
- Route verification checks canonical URL, OpenGraph URL, OpenGraph image, Twitter
  large-image metadata, sitemap origin, robots sitemap origin, and the social image resource.

Browser QA:

- Desktop 1440 x 900:
  - `/`
  - `/app`
  - `/pricing`
  - `/blog`
- Mobile 390 x 844:
  - `/`
  - `/app`
  - `/pricing`
  - `/signup`
- Console warnings/errors: 0.
- Mobile document width equals viewport width on checked pages.
- Public mobile navigation shows Tools, Features, Pricing, Blog, Log in, and Sign up.
- Claude Code review fixes verified: no visible internal SEO fields on tool pages, noindex
  placeholder auth pages, auth placeholders removed from sitemap, skip links, focus-visible styles,
  workbench selected state, and stable Vitest worker config.

Screenshots:

- `output/qa/fictionops-site-home-desktop.png`
- `output/qa/fictionops-site-app-desktop.png`
- `output/qa/fictionops-site-pricing-desktop.png`
- `output/qa/fictionops-site-blog-desktop.png`
- `output/qa/fictionops-site-home-mobile-final.png`
- `output/qa/fictionops-site-app-mobile.png`
- `output/qa/fictionops-site-pricing-mobile.png`
- `output/qa/fictionops-site-signup-mobile.png`

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, private outreach, Discord interaction,
or account integration was performed.
