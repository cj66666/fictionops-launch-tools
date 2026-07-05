const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const candidate = explicitUrl || vercelUrl;

function fail(message) {
  console.error(`[public-env] ${message}`);
  process.exit(1);
}

if (!candidate) {
  fail("Set NEXT_PUBLIC_SITE_URL before a public build. Example: https://fictionops.example");
}

let parsed;
try {
  parsed = new URL(candidate);
} catch {
  fail(`NEXT_PUBLIC_SITE_URL is not a valid URL: ${candidate}`);
}

if (!["http:", "https:"].includes(parsed.protocol)) {
  fail("NEXT_PUBLIC_SITE_URL must use http or https.");
}

const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
if (localHosts.has(parsed.hostname)) {
  fail("NEXT_PUBLIC_SITE_URL must not point to localhost for a public build.");
}

console.log(`[public-env] using ${parsed.origin}`);
