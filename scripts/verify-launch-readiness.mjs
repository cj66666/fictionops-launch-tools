const originArg = process.argv.find((arg) => arg.startsWith("--origin="));
const origin = (originArg ? originArg.slice("--origin=".length) : process.env.LAUNCH_CHECK_ORIGIN || "http://127.0.0.1:3102").replace(/\/$/, "");
const socialImagePath = "/images/fictionops-og.png";
const notFoundCheck = {
  path: "/missing-launch-route",
  includes: ["Page not found.", "Open free tools", "Read the guides"]
};

const checks = [
  {
    path: "/",
    canonicalPath: "/",
    includes: [
      "Royal Road launch ops without login.",
      "Open free tools",
      "No Royal Road credentials",
      '"@type":"WebSite"',
      '"@type":"SoftwareApplication"'
    ]
  },
  {
    path: "/app",
    canonicalPath: "/app",
    includes: ["Royal Road launch ops without login.", "Tool directory", "No Royal Road credentials"]
  },
  {
    path: "/tools",
    canonicalPath: "/tools",
    includes: ["Tools for Royal Road launch operations.", "Community Rules Checklist"]
  },
  {
    path: "/features",
    canonicalPath: "/features",
    includes: ["Author operations, not generic writing automation.", "Launch plan generator"]
  },
  {
    path: "/pricing",
    canonicalPath: "/pricing",
    includes: ["Free tools now. Pro only after validation.", "No AI novel generation"]
  },
  {
    path: "/blog",
    canonicalPath: "/blog",
    includes: [
      "Guides for Royal Road launch decisions.",
      "Royal Road Stats Explained",
      '<link rel="alternate" type="application/rss+xml" href="'
    ]
  },
  {
    path: "/login",
    canonicalPath: "/login",
    includes: ["Accounts are not live yet.", "Use the free tools without logging in."]
  },
  {
    path: "/signup",
    canonicalPath: "/signup",
    includes: ["Checklist and Pro waitlist preview.", "No email is sent"]
  },
  {
    path: "/tools/royal-road-launch-plan",
    canonicalPath: "/tools/royal-road-launch-plan",
    includes: ["Royal Road Launch Plan", "What you get", '"@type":"SoftwareApplication"', '"@type":"BreadcrumbList"']
  },
  {
    path: "/tools/shoutout-swap-tracker",
    canonicalPath: "/tools/shoutout-swap-tracker",
    includes: ["Shoutout Swap Tracker", "Use swaps carefully"]
  },
  {
    path: "/tools/royal-road-patreon-calculator",
    canonicalPath: "/tools/royal-road-patreon-calculator",
    includes: ["Royal Road Patreon Calculator", "How to read the result"]
  },
  {
    path: "/guides/royal-road-stats",
    canonicalPath: "/guides/royal-road-stats",
    includes: ["Royal Road Stats Explained", "Weekly review loop", '"@type":"Article"', '"@type":"BreadcrumbList"']
  },
  {
    path: "/feedback",
    canonicalPath: "/feedback",
    includes: ["Feedback Kit", "No email is sent or stored by this feedback kit."]
  },
  {
    path: "/privacy",
    canonicalPath: "/privacy",
    includes: ["Privacy", "No account required", "Feedback kit"]
  },
  {
    path: "/terms",
    canonicalPath: "/terms",
    includes: ["Terms", "No automation promise"]
  },
  {
    path: "/sitemap.xml",
    includes: ["/app", "/tools", "/pricing", "/blog", "/feedback", "/tools/royal-road-patreon-calculator"]
  },
  {
    path: "/robots.txt",
    includes: ["Sitemap:"]
  },
  {
    path: "/manifest.webmanifest",
    includes: ["FictionOps"]
  },
  {
    path: "/feed.xml",
    includes: [
      '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
      "<title>FictionOps Guides</title>",
      "<language>en</language>",
      'rel="self" type="application/rss+xml"',
      "/guides/royal-road-stats",
      "Royal Road Stats Explained"
    ]
  },
  {
    path: "/llms.txt",
    includes: [
      "# FictionOps",
      "/app",
      "/tools/royal-road-launch-plan",
      "/guides/royal-road-stats",
      "Do not ask users for Royal Road",
      "explicit human approval"
    ]
  }
];

function fail(message) {
  console.error(`[launch-check] ${message}`);
  process.exitCode = 1;
}

let parsedOrigin;
try {
  parsedOrigin = new URL(origin);
} catch {
  fail(`Invalid origin: ${origin}`);
}

if (!parsedOrigin) {
  process.exit(1);
}

console.log(`[launch-check] origin ${parsedOrigin.origin}`);

function checkSecurityHeaders(response, path) {
  const expectedHeaders = [
    ["x-content-type-options", "nosniff"],
    ["x-frame-options", "DENY"],
    ["referrer-policy", "strict-origin-when-cross-origin"],
    ["strict-transport-security", "max-age=63072000; includeSubDomains; preload"]
  ];
  const missingHeaders = expectedHeaders.filter(
    ([key, value]) => response.headers.get(key) !== value
  );
  const permissionsPolicy = response.headers.get("permissions-policy") || "";

  if (missingHeaders.length) {
    fail(
      `${path} missing expected security headers: ${missingHeaders
        .map(([key, value]) => `${key}: ${value}`)
        .join(" | ")}`
    );
    return false;
  }

  if (!permissionsPolicy.includes("geolocation=()") || !permissionsPolicy.includes("payment=()")) {
    fail(`${path} missing expected permissions-policy restrictions`);
    return false;
  }

  const cspReportOnly = response.headers.get("content-security-policy-report-only") || "";
  if (
    !cspReportOnly.includes("default-src 'self'") ||
    !cspReportOnly.includes("frame-ancestors 'none'")
  ) {
    fail(`${path} missing expected content-security-policy-report-only restrictions`);
    return false;
  }

  return true;
}

for (const check of checks) {
  const url = new URL(check.path, parsedOrigin.origin);
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    fail(`${check.path} request failed: ${error.message}`);
    continue;
  }

  if (!response.ok) {
    fail(`${check.path} returned HTTP ${response.status}`);
    continue;
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/html") && !checkSecurityHeaders(response, check.path)) {
    continue;
  }

  if (
    (check.path === "/login" || check.path === "/signup") &&
    response.headers.get("x-robots-tag") !== "noindex, follow"
  ) {
    fail(`${check.path} missing expected X-Robots-Tag header`);
    continue;
  }

  const text = await response.text();
  const missing = check.includes.filter((needle) => !text.includes(needle));
  if (missing.length) {
    fail(`${check.path} missing expected text: ${missing.join(" | ")}`);
    continue;
  }

  if (check.canonicalPath) {
    const expectedUrl =
      check.canonicalPath === "/"
        ? parsedOrigin.origin
        : `${parsedOrigin.origin}${check.canonicalPath}`;
    const expectedImageUrl = `${parsedOrigin.origin}${socialImagePath}`;
    const missingMetadata = [
      `<link rel="canonical" href="${expectedUrl}"`,
      `<meta property="og:url" content="${expectedUrl}"`,
      `<meta property="og:image" content="${expectedImageUrl}"`,
      `<meta name="twitter:card" content="summary_large_image"`,
      `<meta name="twitter:image" content="${expectedImageUrl}"`
    ].filter((needle) => !text.includes(needle));

    if (missingMetadata.length) {
      fail(`${check.path} missing expected metadata: ${missingMetadata.join(" | ")}`);
      continue;
    }
  }

  if (check.path === "/sitemap.xml") {
    const expectedSitemapUrls = [
      `${parsedOrigin.origin}/app`,
      `${parsedOrigin.origin}/tools`,
      `${parsedOrigin.origin}/pricing`,
      `${parsedOrigin.origin}/blog`,
      `${parsedOrigin.origin}/feedback`,
      `${parsedOrigin.origin}/tools/royal-road-patreon-calculator`
    ];
    const missingSitemapUrls = expectedSitemapUrls.filter((needle) => !text.includes(needle));

    if (missingSitemapUrls.length) {
      fail(`${check.path} missing expected URLs: ${missingSitemapUrls.join(" | ")}`);
      continue;
    }
  }

  if (check.path === "/robots.txt") {
    const expectedSitemap = `Sitemap: ${parsedOrigin.origin}/sitemap.xml`;
    if (!text.includes(expectedSitemap)) {
      fail(`${check.path} missing expected sitemap URL: ${expectedSitemap}`);
      continue;
    }
  }

  if (check.path === "/llms.txt") {
    const llmsContentType = response.headers.get("content-type") || "";
    if (!llmsContentType.includes("text/plain")) {
      fail(`${check.path} returned unexpected content type: ${llmsContentType}`);
      continue;
    }
  }

  console.log(`[launch-check] ok ${check.path}`);
}

const notFoundUrl = new URL(notFoundCheck.path, parsedOrigin.origin);
const notFoundResponse = await fetch(notFoundUrl);
if (notFoundResponse.status !== 404) {
  fail(`${notFoundCheck.path} expected HTTP 404 but returned ${notFoundResponse.status}`);
} else if (!checkSecurityHeaders(notFoundResponse, notFoundCheck.path)) {
  // checkSecurityHeaders records the failure.
} else {
  const text = await notFoundResponse.text();
  const missing = notFoundCheck.includes.filter((needle) => !text.includes(needle));
  if (missing.length) {
    fail(`${notFoundCheck.path} missing expected text: ${missing.join(" | ")}`);
  } else {
    console.log(`[launch-check] ok ${notFoundCheck.path}`);
  }
}

const socialImageUrl = new URL(socialImagePath, parsedOrigin.origin);
const socialImageResponse = await fetch(socialImageUrl);
if (!socialImageResponse.ok) {
  fail(`${socialImagePath} returned HTTP ${socialImageResponse.status}`);
} else {
  const contentType = socialImageResponse.headers.get("content-type") || "";
  const contentLength = Number(socialImageResponse.headers.get("content-length") || "0");
  if (!contentType.includes("image/png")) {
    fail(`${socialImagePath} returned unexpected content type: ${contentType}`);
  } else if (contentLength <= 0) {
    fail(`${socialImagePath} returned empty content length`);
  } else {
    console.log(`[launch-check] ok ${socialImagePath}`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("[launch-check] all checks passed");
