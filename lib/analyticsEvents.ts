"use client";

import { track } from "@vercel/analytics";
import { analyticsEventsEnabled, getAnalyticsConfig } from "@/lib/analytics";

type AnalyticsEventProperties = Record<string, string>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsEventProperties }) => void;
    umami?: {
      track: (eventName: string, properties?: AnalyticsEventProperties) => void;
    };
  }
}

export function trackEvent(eventName: string, properties: AnalyticsEventProperties = {}) {
  const config = getAnalyticsConfig();

  if (!analyticsEventsEnabled(config) || typeof window === "undefined") {
    return;
  }

  if (config.provider === "vercel") {
    track(eventName, properties);
    return;
  }

  if (config.provider === "plausible") {
    window.plausible?.(eventName, { props: properties });
    return;
  }

  window.umami?.track(eventName, properties);
}
