function emailFormActionSource() {
  const action = process.env.NEXT_PUBLIC_EMAIL_FORM_ACTION?.trim();

  if (!action) {
    return "'self'";
  }

  try {
    return `'self' ${new URL(action).origin}`;
  } catch {
    return "'self'";
  }
}

function analyticsSources() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER?.trim().toLowerCase();

  if (provider === "vercel") {
    return { scriptSrc: "'self'", connectSrc: "'self'" };
  }

  if (provider === "plausible") {
    return { scriptSrc: "https://plausible.io", connectSrc: "https://plausible.io" };
  }

  if (provider === "umami") {
    const hostUrl = process.env.NEXT_PUBLIC_UMAMI_HOST_URL?.trim();

    if (!hostUrl) {
      return { scriptSrc: "https://cloud.umami.is", connectSrc: "https://cloud.umami.is" };
    }

    try {
      const origin = new URL(hostUrl).origin;
      return { scriptSrc: origin, connectSrc: origin };
    } catch {
      return { scriptSrc: "'self'", connectSrc: "'self'" };
    }
  }

  return { scriptSrc: "'self'", connectSrc: "'self'" };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    const analytics = analyticsSources();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              `default-src 'self'; script-src 'self' ${analytics.scriptSrc} 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' ${analytics.connectSrc}; base-uri 'self'; form-action ${emailFormActionSource()}; frame-ancestors 'none'`
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()"
          }
        ]
      },
      {
        source: "/:path(login|signup)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
