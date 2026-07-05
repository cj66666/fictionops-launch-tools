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

Vercel reports both domains are attached to the project and ownership is verified, but DNS
configuration is not yet valid.

Current DNS provider:

- Cloudflare
- nameservers: `rob.ns.cloudflare.com`, `olga.ns.cloudflare.com`

Recommended Vercel DNS records:

```text
Type: CNAME
Name: @
Value: d4998b8eafabf9c4.vercel-dns-017.com.
Proxy: DNS only / disable proxy

Type: CNAME
Name: www
Value: d4998b8eafabf9c4.vercel-dns-017.com.
Proxy: DNS only / disable proxy
```

Alternative Vercel nameservers:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Vercel also provided Cloudflare Domain Connect apply URLs for the apex and `www` domains.
The user must review/apply DNS changes in Cloudflare before `https://fictionops.com` can resolve.

## Not Done

- No Cloudflare DNS change was performed by Codex.
- No Search Console submission.
- No analytics provider connected.
- No email provider connected.
- No community post or outreach sent.
