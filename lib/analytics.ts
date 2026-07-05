export type AnalyticsProvider = "vercel" | "plausible" | "umami";

export type AnalyticsConfig = {
  enabled: boolean;
  provider: AnalyticsProvider | null;
  scriptSrc: string;
  domain: string;
  websiteId: string;
  hostUrl: string;
};

const PLAUSIBLE_SCRIPT = "https://plausible.io/js/script.js";
const UMAMI_SCRIPT = "https://cloud.umami.is/script.js";
const VERCEL_SCRIPT = "/_vercel/insights/script.js";

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

function normalizeProvider(value: string | undefined): AnalyticsProvider | null {
  const provider = clean(value).toLowerCase();

  if (provider === "vercel" || provider === "plausible" || provider === "umami") {
    return provider;
  }

  return null;
}

export function getAnalyticsConfig(
  env: Partial<Record<string, string | undefined>> = process.env
): AnalyticsConfig {
  const provider = normalizeProvider(env.NEXT_PUBLIC_ANALYTICS_PROVIDER);
  const domain = clean(env.NEXT_PUBLIC_ANALYTICS_DOMAIN);
  const websiteId = clean(env.NEXT_PUBLIC_UMAMI_WEBSITE_ID);
  const hostUrl = clean(env.NEXT_PUBLIC_UMAMI_HOST_URL);

  if (provider === "vercel") {
    return {
      enabled: true,
      provider,
      scriptSrc: VERCEL_SCRIPT,
      domain: "",
      websiteId: "",
      hostUrl: ""
    };
  }

  if (provider === "plausible" && domain) {
    return {
      enabled: true,
      provider,
      scriptSrc: PLAUSIBLE_SCRIPT,
      domain,
      websiteId: "",
      hostUrl: ""
    };
  }

  if (provider === "umami" && websiteId) {
    const scriptSrc = hostUrl ? `${hostUrl.replace(/\/$/, "")}/script.js` : UMAMI_SCRIPT;

    return {
      enabled: true,
      provider,
      scriptSrc,
      domain: "",
      websiteId,
      hostUrl
    };
  }

  return {
    enabled: false,
    provider,
    scriptSrc: "",
    domain,
    websiteId,
    hostUrl
  };
}

export function analyticsCspSources(config = getAnalyticsConfig()) {
  if (!config.enabled || !config.scriptSrc) {
    return { scriptSrc: "", connectSrc: "" };
  }

  const scriptUrl = new URL(config.scriptSrc, "https://fictionops.com");
  const origin = scriptUrl.origin === "https://fictionops.com" ? "'self'" : scriptUrl.origin;

  return {
    scriptSrc: origin,
    connectSrc: origin
  };
}

export function analyticsEventsEnabled(config = getAnalyticsConfig()) {
  return config.enabled && config.provider !== null;
}
