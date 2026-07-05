import Script from "next/script";
import { getAnalyticsConfig } from "@/lib/analytics";

export function AnalyticsScripts() {
  const config = getAnalyticsConfig();

  if (!config.enabled || !config.provider) {
    return null;
  }

  if (config.provider === "vercel") {
    return <Script defer src={config.scriptSrc} strategy="afterInteractive" />;
  }

  if (config.provider === "plausible") {
    return (
      <Script
        data-domain={config.domain}
        defer
        src={config.scriptSrc}
        strategy="afterInteractive"
      />
    );
  }

  return (
    <Script
      data-website-id={config.websiteId}
      defer
      src={config.scriptSrc}
      strategy="afterInteractive"
    />
  );
}

