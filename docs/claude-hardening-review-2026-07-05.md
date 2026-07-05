# Claude Code Hardening Review

Date: 2026-07-05

## Scope

Requested a read-only Claude Code review of the latest launch-readiness hardening work:

- metadata and social image
- JSON-LD structured data
- RSS feed
- security headers
- branded not-found page
- launch readiness verifier
- local preview preflight

The project is not a git repository, so the review covered current files directly rather than a
git diff range.

## Findings Addressed

- Added RSS namespace and self-link:
  - `xmlns:atom="http://www.w3.org/2005/Atom"`
  - `<atom:link rel="self" type="application/rss+xml">`
- Added RSS channel language.
- Switched RSS serialization to newline-separated XML.
- Added page-level `publishedAt` and `updatedAt` fields to SEO page data.
- Added `datePublished` and `dateModified` to Article JSON-LD.
- Updated sitemap `lastModified` to use stable page dates.
- Added `Strict-Transport-Security`.
- Added `Content-Security-Policy-Report-Only`.
- Removed deprecated `interest-cohort=()` from `Permissions-Policy`.
- Added `X-Robots-Tag: noindex, follow` for `/login` and `/signup`.
- Expanded route verifier to check security headers on all HTML responses.
- Expanded route verifier to check RSS atom/language output and login/signup X-Robots-Tag.

## Intentional Pushback

Claude suggested disallowing `/login` and `/signup` in `robots.txt`. I did not apply that exact
change because blocking crawl can prevent crawlers from seeing page-level `noindex`. Instead, the
pages now have both:

- HTML robots metadata: `noindex, follow`
- HTTP header: `X-Robots-Tag: noindex, follow`

They remain excluded from the sitemap.

## Verification

Passed locally:

- `npm run lint`
- `npm test` - 12 files, 36 tests.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- manual HTTP checks confirmed:
  - `/login` returns `X-Robots-Tag: noindex, follow`
  - `/feed.xml` includes Atom namespace
  - `/` returns HSTS and CSP report-only headers
- `npm run verify:routes`
- `npm run verify:local-preview`

The current build generates 30 routes, including dynamic `/feed.xml`.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, private outreach, Discord interaction,
or account integration was performed.
