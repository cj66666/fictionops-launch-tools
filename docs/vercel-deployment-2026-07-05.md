# Vercel Deployment - 2026-07-05

## Status

Vercel deployment completed.

Project:

`jingchens-projects-753863a8/fictionops-launch-tools`

Deployment:

- ID: `dpl_u9Cpg5Z6P1quunmhYpgs3A1LyFJp`
- Status: Ready
- Target: Production
- URL: `https://fictionops-launch-tools-kkllsrf9k-jingchens-projects-753863a8.vercel.app`
- Alias: `https://fictionops-launch-tools.vercel.app`
- Inspector: `https://vercel.com/jingchens-projects-753863a8/fictionops-launch-tools/u9Cpg5Z6P1quunmhYpgs3A1LyFJp`

## Build

Build command:

```bash
npm run build:public
```

Build environment:

```text
NEXT_PUBLIC_SITE_URL=https://fictionops.com
```

The Vercel build generated 31 routes and completed successfully.

## Environment Variables

`NEXT_PUBLIC_SITE_URL=https://fictionops.com` was added to:

- Production
- Preview

## Domains

Added to the Vercel project:

- `fictionops.com`
- `www.fictionops.com`

Vercel reports both domains are attached to the project and configured correctly.

Current DNS provider:

- Cloudflare
- nameservers: `rob.ns.cloudflare.com`, `olga.ns.cloudflare.com`

Final observed DNS:

```text
fictionops.com
A 216.198.79.65
A 64.29.17.65

www.fictionops.com
CNAME d4998b8eafabf9c4.vercel-dns-017.com
```

Final HTTP checks:

```text
https://fictionops.com 200 Vercel
https://www.fictionops.com 200 Vercel
```

Final route verification passed:

```bash
node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com
```

## Not Done

- No Search Console submission.
- No analytics provider connected.
- No email provider connected.
- No community post or outreach sent.
