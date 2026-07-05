import type { CommunityRule } from "@/lib/types";

export const communityRules: CommunityRule[] = [
  {
    community: "r/royalroad",
    url: "https://www.reddit.com/r/royalroad/",
    lastReviewed: "2026-07-04",
    allowed: [
      "Royal Road-specific discussion",
      "Meaningful questions about author workflow",
      "RoyalRoad links when following self-promotion rules"
    ],
    risky: [
      "Promotion more than once per month",
      "Drop-and-run promotional posts",
      "Generic tool promotion without community history"
    ],
    doNotDo: [
      "Hide marketing as discussion",
      "Cross-post non-RoyalRoad links as promotion",
      "Post shoutout codes in the subreddit"
    ],
    notes: ["Best used for pain mining and carefully approved feedback requests."]
  },
  {
    community: "r/litrpg",
    url: "https://www.reddit.com/r/litrpg/",
    lastReviewed: "2026-07-04",
    allowed: [
      "Genre discussion",
      "Reviews and recommendations",
      "Market Research / Creator Feedback under subreddit limits"
    ],
    risky: [
      "Promotion posts above two per month",
      "Market research more than once per 30 days",
      "Promotion comments that are not relevant and good-faith"
    ],
    doNotDo: ["Misuse promo flair", "Start AI witch-hunt threads"],
    notes: ["Useful validation channel after trust-building and exact rule check."]
  },
  {
    community: "r/ProgressionFantasy",
    url: "https://www.reddit.com/r/ProgressionFantasy/",
    lastReviewed: "2026-07-04",
    allowed: ["Reader discussion", "Genre discussion", "Self-promotion by meaningful contributors"],
    risky: [
      "Self-promotion without contribution history",
      "Writing advice or ARC requests that count as self-promotion",
      "AI art without source/ethics expectations"
    ],
    doNotDo: ["Low-effort promo", "Off-topic tool posts"],
    notes: ["Best for reader language and expectation research before launch."]
  },
  {
    community: "r/writing",
    url: "https://www.reddit.com/r/writing/",
    lastReviewed: "2026-07-04",
    allowed: ["Broad writing discussion", "Some restricted topics inside weekly threads"],
    risky: ["Narrow self-serving research", "Tool promotion"],
    doNotDo: ["Generative AI posts/comments", "Self-promotion outside permitted threads"],
    notes: ["Poor launch channel for this product; keep as background research."]
  },
  {
    community: "r/selfpublish",
    url: "https://www.reddit.com/r/selfpublish/",
    lastReviewed: "2026-07-04",
    allowed: ["Self-publishing discussion inside rules"],
    risky: ["Anything that looks like service, website, networking, or product promotion"],
    doNotDo: ["AI posts/comments", "Self-promotion", "Survey the crowd for product ideas"],
    notes: ["Use only as background research for now."]
  },
  {
    community: "Royal Road forums",
    url: "https://www.royalroad.com/forums/",
    lastReviewed: "2026-07-04",
    allowed: ["Author workflow discussion", "Stats, launch process, and writing tool questions"],
    risky: ["Tool promotion without transparency", "Overclaiming ranking mechanics"],
    doNotDo: ["Claim official status", "Claim ranking outcomes", "Repeat the same thread"],
    notes: ["Good workflow validation channel after approval."]
  },
  {
    community: "Discord author servers",
    url: "https://discord.com/servers/rr-writer-s-guild-1189543938089029703",
    lastReviewed: "2026-07-04",
    allowed: ["Server-specific behavior after joining and reading rules"],
    risky: ["Entering only to advertise", "Cold DMs without context"],
    doNotDo: ["Auto-message", "Scrape member lists", "Store private Discord content"],
    notes: ["Potentially valuable, but every interaction needs approval."]
  }
];
