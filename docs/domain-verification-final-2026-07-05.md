# Domain Verification Final - 2026-07-05

## Status

`fictionops.com` and `www.fictionops.com` are live on Vercel.

## DNS

Observed DNS:

```text
fictionops.com
A 216.198.79.65
A 64.29.17.65

www.fictionops.com
CNAME d4998b8eafabf9c4.vercel-dns-017.com
```

## HTTP

Observed responses:

```text
https://fictionops.com                  200 Vercel
https://www.fictionops.com              200 Vercel
https://fictionops-launch-tools.vercel.app 200 Vercel
```

## Vercel Domain Verification

Both domains are verified and configured correctly in Vercel:

- `fictionops.com`
- `www.fictionops.com`

## Route Verification

Command:

```bash
node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com
```

Result:

All route checks passed for:

- `/`
- `/app`
- `/tools`
- `/features`
- `/pricing`
- `/blog`
- `/login`
- `/signup`
- `/tools/royal-road-launch-plan`
- `/tools/shoutout-swap-tracker`
- `/tools/royal-road-patreon-calculator`
- `/guides/royal-road-stats`
- `/feedback`
- `/privacy`
- `/terms`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- `/feed.xml`
- `/llms.txt`
- `/missing-launch-route`
- `/images/fictionops-og.png`

## Still Not Done

- No email provider connected.
- No analytics provider connected.
- No Search Console submission.
- No community post or private outreach sent.
- No payment or account integration enabled.
