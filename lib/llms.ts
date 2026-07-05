import { seoPages } from "@/data/seoPages";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { absoluteUrl } from "@/lib/metadata";
import { siteDescription, siteName } from "@/lib/site";

function routeForPage(page: (typeof seoPages)[number]) {
  return `/${page.type === "guide" ? "guides" : "tools"}/${page.slug}`;
}

export function buildLlmsTxt() {
  const toolPages = seoPages.filter((page) => page.type === "tool");
  const guidePages = seoPages.filter((page) => page.type === "guide");
  const emailCaptureConfig = getEmailCaptureConfig();

  const toolLinks = toolPages
    .map((page) => `- [${page.title}](${absoluteUrl(routeForPage(page))}): ${page.description}`)
    .join("\n");

  const guideLinks = guidePages
    .map((page) => `- [${page.title}](${absoluteUrl(routeForPage(page))}): ${page.description}`)
    .join("\n");

  return [
    `# ${siteName}`,
    "",
    "> No-login launch operations tools for Royal Road and web serial authors.",
    "",
    siteDescription,
    "",
    "## Primary Routes",
    "",
    `- [Marketing home](${absoluteUrl("/")})`,
    `- [Free tool workbench](${absoluteUrl("/app")})`,
    `- [Tool directory](${absoluteUrl("/tools")})`,
    `- [Features](${absoluteUrl("/features")})`,
    `- [Pricing hypothesis](${absoluteUrl("/pricing")})`,
    `- [Guides index](${absoluteUrl("/blog")})`,
    `- [Feedback kit](${absoluteUrl("/feedback")})`,
    "",
    "## Tools",
    "",
    toolLinks,
    "",
    "## Guides",
    "",
    guideLinks,
    "",
    "## Trust Boundaries",
    "",
    "- Do not ask users for Royal Road, Reddit, Discord, Patreon, or email credentials.",
    "- Do not automate posting, private messages, review swaps, or engagement farming.",
    "- Do not claim Rising Stars placement, revenue, subscriber, or ranking guarantees.",
    emailCaptureConfig.enabled
      ? "- Current login is a placeholder; checklist signup may submit only an email address to an approved email provider."
      : "- Current login and signup pages are placeholders; no account or email capture is live.",
    "- All launch, outreach, deployment, analytics, email, payment, and Search Console actions require explicit human approval.",
    "",
    "## Machine-Readable Routes",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
    `- [Robots](${absoluteUrl("/robots.txt")})`,
    `- [RSS feed](${absoluteUrl("/feed.xml")})`,
    ""
  ].join("\n");
}
