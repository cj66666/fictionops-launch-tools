# Live Launch Fixes - 2026-07-05

## Trigger

Post-launch review found two issues:

1. `fictionops.com` and `www.fictionops.com` both served the same page while canonical URLs pointed to the apex domain.
2. Public homepage/header CTAs sent real visitors to a signup placeholder before email capture was approved.

## Fixes

- Added a canonical host middleware:
  - `https://www.fictionops.com/*` redirects to `https://fictionops.com/*`.
  - Apex `https://fictionops.com/*` remains the canonical host.
  - This keeps redirects, canonical metadata, OpenGraph URLs, and sitemap URLs aligned.
- Updated public CTAs while email capture is disabled:
  - Header primary action points to `/app`.
  - Homepage secondary CTA points to `/blog`.
  - Footer trust link labels `/signup` as signup status instead of waitlist.
- Added provider-ready email capture configuration, disabled by default:
  - `NEXT_PUBLIC_EMAIL_FORM_ACTION`
  - `NEXT_PUBLIC_EMAIL_FORM_METHOD`
  - `NEXT_PUBLIC_EMAIL_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_VALUE`
- Updated CSP report-only `form-action` so approved provider origins can be allowed when configured.

## Human-Gated Still

- Real email provider connection.
- Analytics.
- Search Console / Bing Webmaster submission.
- Community posting.

## Verification

Production deployment:

- Deployment ID: `dpl_6a3Mg9ZqPr2QfsrVuJAPn1Kzo4tV`
- Vercel URL: `https://fictionops-launch-tools-1y61d7tgb-jingchens-projects-753863a8.vercel.app`
- Alias: `https://fictionops.com`

Post-deployment results:

- `https://fictionops.com` returns 200.
- `https://www.fictionops.com` returns 308 to `https://fictionops.com/`.
- `https://www.fictionops.com/guides/royal-road-stats` returns 308 to the same apex path.
- `https://www.fictionops.com/sitemap.xml` returns 308 to the apex sitemap.
- Homepage canonical, `og:url`, and `og:image` point to `https://fictionops.com`.
- Sitemap contains apex URLs and no `https://www.fictionops.com` URLs.
- Homepage no longer shows the inactive `Get weekly checklist` CTA while email capture is disabled.

Run before deployment:

```bash
npm test
npm run lint
NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run build:public
```

Run after deployment:

```bash
node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com
curl -I https://www.fictionops.com
curl -I https://fictionops.com
```
