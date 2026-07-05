export const siteName = "FictionOps";

export const siteDescription =
  "No-login launch operations tools for Royal Road and web serial authors.";

export const siteSocialImagePath = "/images/fictionops-og.png";

export const siteSocialImageAlt =
  "FictionOps Royal Road launch operations dashboard preview.";

export const siteFeedPath = "/feed.xml";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://127.0.0.1:3102");

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

export const legalEffectiveDate = "2026-07-04";
