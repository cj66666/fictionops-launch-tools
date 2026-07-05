# Analytics Provider Ready - 2026-07-05

## Purpose

Prepare analytics integration without enabling tracking before human approval.

## Current State

- Analytics is disabled by default.
- No analytics script is loaded unless `NEXT_PUBLIC_ANALYTICS_PROVIDER` is set.
- Supported provider values:
  - `vercel`
  - `plausible`
  - `umami`
- Privacy copy is conditional and states whether analytics is enabled.
- CSP report-only headers stay self-only by default and allow the configured analytics origin only after provider configuration.

## Environment Variables

```text
NEXT_PUBLIC_ANALYTICS_PROVIDER=
NEXT_PUBLIC_ANALYTICS_DOMAIN=fictionops.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_UMAMI_HOST_URL=
```

Provider requirements:

- Vercel Analytics: set `NEXT_PUBLIC_ANALYTICS_PROVIDER=vercel`.
- Plausible: set `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible` and `NEXT_PUBLIC_ANALYTICS_DOMAIN=fictionops.com`.
- Umami: set `NEXT_PUBLIC_ANALYTICS_PROVIDER=umami` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID`.

## Human Gate

Do not set analytics environment variables, install a provider package, or enable tracking until the user explicitly approves the provider.

## Verification

Production deployment:

- Deployment ID: `dpl_J34ucA6ncJk8wxToAj6w8w7GRd5G`
- Vercel URL: `https://fictionops-launch-tools-9tkc4yxfm-jingchens-projects-753863a8.vercel.app`
- Alias: `https://fictionops.com`

Post-deployment results:

- `node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com` passed.
- Homepage HTML does not contain Plausible, Umami, or Vercel Analytics scripts while analytics is disabled.
- Privacy page says product analytics is disabled.
- `https://www.fictionops.com` still redirects to `https://fictionops.com/`.

Default-disabled verification:

```bash
npm test
npm run lint
NEXT_PUBLIC_SITE_URL=https://fictionops.com NEXT_PUBLIC_ANALYTICS_PROVIDER= npm run build:public
```

Provider smoke build, not for deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://fictionops.com NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible NEXT_PUBLIC_ANALYTICS_DOMAIN=fictionops.com npm run build:public
```
