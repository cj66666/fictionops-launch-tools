import type { SeoPage } from "@/lib/types";

export const seoPages: SeoPage[] = [
  {
    slug: "royal-road-launch-plan",
    type: "tool",
    title: "Royal Road Launch Plan",
    description: "Create a first 30-day Royal Road launch checklist from your chapter stockpile, cadence, swaps, and monetization plan.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road launch plan",
    intent: "Author wants a schedule and checklist before publishing.",
    cta: "Generate your launch plan",
    ctaHref: "/app#launch",
    sources: ["https://www.royalroad.com/support/knowledgebase/78"],
    related: ["shoutout-swap-tracker", "royal-road-patreon-calculator", "royal-road-rising-stars"],
    proofPoints: [
      {
        label: "Inputs",
        value: "Cadence + stockpile",
        note: "Turn chapter count, word count, cadence, swaps, and ads into a concrete first-month plan."
      },
      {
        label: "Output",
        value: "30-day checklist",
        note: "Get dated tasks for launch prep, early posting, community work, and follow-up review."
      },
      {
        label: "Export",
        value: "Markdown",
        note: "Copy the plan into a draft, notes app, or project tracker without creating an account."
      }
    ],
    contentSections: [
      {
        title: "Before you publish",
        body:
          "Use the launch planner when the story is close enough to schedule but before the first chapter goes live. The goal is to expose weak spots early: too little stockpile, unclear cadence, missing swap dates, or a monetization promise that needs more buffer.",
        bullets: [
          "Enter the current manuscript and chapter buffer.",
          "Choose the public cadence you can actually sustain.",
          "Add planned shoutouts and ads only when they are real commitments."
        ]
      },
      {
        title: "How to use the checklist",
        body:
          "Treat the generated plan as an operating checklist, not a ranking formula. Move tasks into your own calendar, rewrite the copy for your story, and check the current rules of each community before posting.",
        bullets: [
          "Review high-priority tasks first.",
          "Export the markdown plan before making manual edits elsewhere.",
          "Re-run the plan when the launch date or cadence changes."
        ]
      }
    ],
    trustNotes: [
      "No Royal Road login is required.",
      "No auto-posting is performed.",
      "No ranking outcome is promised."
    ]
  },
  {
    slug: "shoutout-swap-tracker",
    type: "tool",
    title: "Shoutout Swap Tracker",
    description: "Track Royal Road shoutout partners, snippets, dates, insertion locations, and confirmation status.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road shoutout swaps",
    intent: "Author wants to coordinate swaps without losing track.",
    cta: "Start tracking swaps",
    ctaHref: "/app#swaps",
    sources: ["https://www.reddit.com/r/royalroad/"],
    related: ["royal-road-author-discords", "royal-road-launch-plan"],
    proofPoints: [
      {
        label: "Partners",
        value: "Fit + channel",
        note: "Track genre fit, contact path, and story URL in one table."
      },
      {
        label: "Schedule",
        value: "Date + status",
        note: "Keep agreed dates, insertion location, and confirmation status visible."
      },
      {
        label: "Export",
        value: "CSV",
        note: "Move the swap sheet into your own spreadsheet without a login."
      }
    ],
    contentSections: [
      {
        title: "Use swaps carefully",
        body:
          "A useful shoutout swap starts with audience fit and clear expectations. The tracker is meant to prevent missed dates and mismatched snippets, not to encourage cold spam or irrelevant recommendations.",
        bullets: [
          "Record why the story fit is credible.",
          "Confirm date and chapter placement before launch week.",
          "Mark stale prospects instead of chasing every lead forever."
        ]
      },
      {
        title: "Keep the proof trail",
        body:
          "Before a swap goes live, keep the snippet, agreed date, and contact channel in one place. After posting, mark confirmation so you know which relationships were reliable for future launches.",
        bullets: [
          "Use notes for promised wording or content warnings.",
          "Export CSV before major edits.",
          "Check each community's current self-promotion rules."
        ]
      }
    ],
    trustNotes: [
      "No messages are sent by the tool.",
      "No fake reviews or mass outreach.",
      "No community rule bypassing."
    ]
  },
  {
    slug: "royal-road-patreon-calculator",
    type: "tool",
    title: "Royal Road Patreon Calculator",
    description: "Estimate Patreon scenarios and advance-chapter runway for a Royal Road serial.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road patreon calculator",
    intent: "Author wants to estimate subscribers, revenue, and backlog.",
    cta: "Calculate Patreon runway",
    ctaHref: "/app#patreon",
    sources: ["https://www.chapterchronicles.com/blog/royal-road-patreon-2025/"],
    related: ["royal-road-stats", "royal-road-launch-plan"],
    proofPoints: [
      {
        label: "Inputs",
        value: "Followers + cadence",
        note: "Start from the numbers an author can enter manually without connecting a platform account."
      },
      {
        label: "Output",
        value: "3 scenarios",
        note: "Compare conservative, base, and optimistic patron counts before promising paid chapters."
      },
      {
        label: "Runway",
        value: "Backlog weeks",
        note: "See whether the advance-chapter buffer can survive the paid cadence."
      }
    ],
    contentSections: [
      {
        title: "What this calculator answers",
        body:
          "Use the calculator before announcing a Patreon or changing a paid chapter promise. It turns follower count, conversion assumptions, tier prices, and release cadence into a simple monthly runway view.",
        bullets: [
          "How many patrons might a conservative, base, or optimistic case produce?",
          "What monthly revenue does the current tier mix imply?",
          "Does the advance-chapter buffer last if paid chapters move faster than public chapters?"
        ]
      },
      {
        title: "Default assumptions",
        body:
          "The default workspace uses 850 followers, 1 percent / 3 percent / 6 percent conversion scenarios, and a simple three-tier mix. These are planning assumptions, not market promises. Change them to match the author's own audience and offer.",
        bullets: [
          "Supporter tier: low-friction reader support.",
          "Advance chapters tier: the main promise most serial authors need to model.",
          "Deep archive tier: a higher tier that should not carry the whole forecast."
        ]
      },
      {
        title: "How to read the result",
        body:
          "Treat the revenue number as a readiness signal, not a guarantee. A small but stable backlog can matter more than a larger headline estimate if the author cannot keep the paid queue ahead of public releases.",
        bullets: [
          "Green means the current backlog promise is coherent at the entered cadence.",
          "Warnings mean the offer may be too early, too thin, or too fast.",
          "Run the calculator again after major follower milestones or cadence changes."
        ]
      }
    ],
    trustNotes: [
      "No Patreon login is required.",
      "No Royal Road credentials are requested.",
      "No revenue, ranking, or subscriber outcome is guaranteed.",
      "The tool is planning support, not financial advice."
    ]
  },
  {
    slug: "royal-road-rising-stars",
    type: "guide",
    title: "Royal Road Rising Stars: What to Track Before Launch",
    description: "A practical readiness guide for Rising Stars watch tasks, launch cadence, and tracking without ranking promises.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "how to get on rising stars royal road",
    intent: "Author wants practical launch guidance.",
    cta: "Add Rising Stars watch tasks to your plan",
    ctaHref: "/app#launch",
    sources: ["https://www.royalroad.com/support/knowledgebase/78", "https://rst.doomlabs.net/"],
    related: ["royal-road-genre-rising-stars", "royal-road-launch-plan"],
    contentSections: [
      {
        title: "What to watch",
        body:
          "Track the things an author controls before launch: cadence, chapter buffer, story packaging, early reader response, and whether community posts are rule-safe. External ranking movement should be treated as feedback, not as a promise.",
        bullets: [
          "Prepare the first-week chapter queue before launch.",
          "Keep a baseline of followers, views, favorites, and comments.",
          "Review genre and tag fit without stuffing unrelated tags."
        ]
      },
      {
        title: "What not to promise",
        body:
          "Do not market a launch as guaranteed to reach any ranking surface. A safer framing is to say the launch is prepared, measurable, and community-safe.",
        bullets: [
          "Avoid guaranteed ranking language.",
          "Avoid engagement farming or review trades.",
          "Use source-linked guidance and update it when platform rules change."
        ]
      }
    ]
  },
  {
    slug: "royal-road-genre-rising-stars",
    type: "guide",
    title: "Royal Road Genre Rising Stars",
    description: "How authors can think about genre and tag list visibility during a launch.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road genre rising stars",
    intent: "Author wants to understand genre/tag lists.",
    cta: "Review tag watch tasks",
    ctaHref: "/app#launch",
    sources: ["https://www.royalroad.com/forums/thread/156043"],
    related: ["royal-road-rising-stars", "royal-road-stats"],
    contentSections: [
      {
        title: "Use genre lists as watch surfaces",
        body:
          "Genre and tag surfaces are useful for review because they tell you where reader expectations may differ. Use them to audit positioning, not to force a story into tags it does not satisfy.",
        bullets: [
          "Compare the story promise against the actual opening chapters.",
          "Check whether the primary genre matches reader expectations.",
          "Record tag changes as launch notes so later stats have context."
        ]
      },
      {
        title: "Tag hygiene",
        body:
          "The practical goal is clarity. Readers should be able to understand the story promise from the cover, title, blurb, and tags without feeling misled.",
        bullets: [
          "Remove tags that only describe one minor scene.",
          "Keep content warnings and sensitive labels current.",
          "Revisit tags after the first arc if the story direction changes."
        ]
      }
    ]
  },
  {
    slug: "royal-road-stats",
    type: "guide",
    title: "Royal Road Stats Explained",
    description: "How to interpret views, followers, favorites, comments, retention, and early launch movement.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road stats explained",
    intent: "Author wants to understand story performance signals.",
    cta: "Use the weekly review checklist",
    ctaHref: "/app#updates",
    sources: ["https://www.royalroad.com/support/knowledgebase/110"],
    related: ["royal-road-views-vs-followers", "royal-road-patreon-calculator"],
    contentSections: [
      {
        title: "Weekly review loop",
        body:
          "A weekly review is more useful than refreshing stats every few minutes. Record the same numbers on the same day each week, then compare the change against what happened in the story and promotion plan.",
        bullets: [
          "Record followers, views, favorites, comments, and rating context.",
          "Note chapter releases, shoutouts, ads, and community posts.",
          "Look for trend direction rather than one noisy day."
        ]
      },
      {
        title: "Do not overreact",
        body:
          "Early numbers are noisy. Use stats to decide what to inspect next: blurb, cover, opening hook, cadence, audience fit, or community channel. Avoid changing everything at once.",
        bullets: [
          "Change one major variable at a time when practical.",
          "Keep notes beside the numbers.",
          "Use the Patreon calculator only after the audience signal is stable enough to model."
        ]
      }
    ]
  },
  {
    slug: "royal-road-views-vs-followers",
    type: "guide",
    title: "Royal Road Views vs Followers",
    description: "A practical way to read early launch views, followers, favorites, comments, and retention without overreacting to one noisy metric.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road views vs followers",
    intent: "Author wants to understand whether early story numbers are healthy.",
    cta: "Use the weekly stats checklist",
    ctaHref: "/app#updates",
    sources: ["https://www.royalroad.com/support/knowledgebase/110"],
    related: ["royal-road-stats", "royal-road-launch-plan"],
    contentSections: [
      {
        title: "Read the two metrics together",
        body:
          "Views and followers answer different questions. Views show exposure and reading activity, while followers are a stronger signal that readers want future chapters. A useful review looks at both, plus release cadence and chapter age.",
        bullets: [
          "Compare follower movement after major release days.",
          "Note whether views came from a shoutout, ad, or community discussion.",
          "Avoid judging a story from one isolated spike."
        ]
      },
      {
        title: "What to check next",
        body:
          "If views rise but followers lag, inspect the promise-to-opening fit: title, cover, blurb, tags, first chapter hook, and update cadence. The fix is usually packaging or reader expectation, not a single magic number.",
        bullets: [
          "Review the first chapter against the blurb promise.",
          "Check whether cover and tags attract the intended genre readers.",
          "Record any packaging changes before comparing future weeks."
        ]
      }
    ]
  },
  {
    slug: "royal-road-vs-scribblehub",
    type: "guide",
    title: "Royal Road vs Scribble Hub",
    description: "A launch-oriented comparison for web novel authors deciding where to post.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road vs scribblehub",
    intent: "Author chooses a posting platform.",
    cta: "Choose a launch template",
    ctaHref: "/app#launch",
    sources: ["https://www.royalroad.com/support/knowledgebase/84"],
    related: ["web-novel-launch-plan", "royal-road-launch-plan"],
    contentSections: [
      {
        title: "Choose by workflow, not vibes",
        body:
          "A platform choice should match genre fit, update cadence, community norms, and how much operational overhead the author can handle. Treat the first platform as a launch system, not a permanent identity.",
        bullets: [
          "List where similar stories already find readers.",
          "Check formatting, scheduling, and community expectations before launch.",
          "Keep cross-posting plans realistic for your writing pace."
        ]
      },
      {
        title: "Plan the first month",
        body:
          "Whichever platform comes first, the author still needs the same operating basics: chapter buffer, release cadence, packaging, feedback path, and a place to track stats.",
        bullets: [
          "Build a 30-day checklist before opening new accounts everywhere.",
          "Keep community-specific rules next to each posting task.",
          "Review whether cross-posting creates more maintenance than value."
        ]
      }
    ]
  },
  {
    slug: "royal-road-author-discords",
    type: "guide",
    title: "Royal Road Author Discords",
    description: "Where Royal Road authors find swaps, critique, beta readers, and launch conversations.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road author discord",
    intent: "Author wants communities for swaps and feedback.",
    cta: "Check community rules first",
    ctaHref: "/app#rules",
    sources: ["https://discord.com/servers/rr-writer-s-guild-1189543938089029703"],
    related: ["shoutout-swap-tracker", "royal-road-launch-plan"],
    contentSections: [
      {
        title: "Enter as a participant",
        body:
          "Author communities work best when the author participates before asking for anything. Use Discords for craft talk, critique, swaps, and feedback, but read the current server rules before posting links.",
        bullets: [
          "Observe channel norms before starting a promotion thread.",
          "Keep swap requests specific and genre-aware.",
          "Do not DM authors cold unless the community explicitly allows it."
        ]
      },
      {
        title: "Track community context",
        body:
          "A community note is as important as a contact name. Record where the conversation happened, what was agreed, and whether the server has self-promotion, critique, or swap-specific channels.",
        bullets: [
          "Keep Discord and Reddit rule notes separate.",
          "Use the swap tracker only after a real conversation exists.",
          "Update notes when server rules or channel names change."
        ]
      }
    ]
  },
  {
    slug: "royal-road-cover-checklist",
    type: "guide",
    title: "Royal Road Cover Checklist",
    description: "A launch-focused cover and blurb checklist for Royal Road authors.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    primaryKeyword: "royal road cover art",
    intent: "Author wants launch-ready cover guidance.",
    cta: "Add cover tasks to your launch plan",
    ctaHref: "/app#launch",
    sources: ["https://www.royalroad.com/support/knowledgebase/84"],
    related: ["royal-road-launch-plan", "royal-road-stats"],
    contentSections: [
      {
        title: "Cover as a promise",
        body:
          "A cover is not only decoration. It tells genre readers what kind of story they are about to try. Before launch, compare the cover against the title, blurb, tags, and opening chapter.",
        bullets: [
          "Check that genre signals are obvious at small sizes.",
          "Avoid misleading mood or character promises.",
          "Keep title readability separate from art detail."
        ]
      },
      {
        title: "Launch checklist",
        body:
          "Prepare the cover and blurb early enough to get feedback before the first release day. Last-minute packaging changes make it harder to understand what affected early stats.",
        bullets: [
          "Freeze a launch version before collecting baseline stats.",
          "Save notes about feedback and revisions.",
          "Revisit cover performance alongside views, followers, and comments."
        ]
      }
    ]
  },
  {
    slug: "web-novel-launch-plan",
    type: "guide",
    title: "Web Novel Launch Plan",
    description: "A practical launch workflow for web serial authors across Royal Road, Reddit, Discord, and Patreon.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    primaryKeyword: "web novel launch plan",
    intent: "Author wants a broader launch system.",
    cta: "Build a Royal Road launch plan",
    ctaHref: "/app#launch",
    sources: ["https://www.reddit.com/r/litrpg/", "https://www.reddit.com/r/ProgressionFantasy/"],
    related: ["royal-road-launch-plan", "royal-road-author-discords"],
    contentSections: [
      {
        title: "Build the operating loop",
        body:
          "A web novel launch is a weekly operating loop: prepare chapters, publish consistently, record stats, talk to the right communities, and adjust packaging based on evidence.",
        bullets: [
          "Start with one primary platform and one clear reader promise.",
          "Keep launch tasks dated and reviewable.",
          "Separate writing work from promotion work so neither disappears."
        ]
      },
      {
        title: "Keep the stack simple",
        body:
          "The first launch does not need a complicated growth stack. Use no-login tools and simple exports until the author has enough signal to justify saved accounts, reminders, or deeper reporting.",
        bullets: [
          "Use the launch planner for the first 30 days.",
          "Use the swap tracker only for real partner conversations.",
          "Use the Patreon calculator when the backlog promise is concrete."
        ]
      }
    ]
  }
];

export function findSeoPage(slug: string, type?: "tool" | "guide") {
  return seoPages.find((page) => page.slug === slug && (!type || page.type === type));
}
