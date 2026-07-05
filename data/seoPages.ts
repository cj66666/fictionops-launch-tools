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
        title: "What Rising Stars readiness really means",
        body:
          "Rising Stars readiness is not a promise that a story will appear on a ranking page. It is a way to check whether the launch has the basics in place before early readers arrive: a clear genre promise, enough chapters to show momentum, a cadence the author can keep, and a simple way to record what happened during the first few weeks. The useful question is not whether an author can force an outcome. The useful question is whether the story is prepared enough that real reader response can be measured without chaos.",
        bullets: [
          "Prepare a first-week chapter queue before launch so the opening does not depend on last-minute writing.",
          "Record a baseline of followers, views, favorites, ratings context, and comments before any promotion push.",
          "Review genre and tag fit without stuffing unrelated tags that will disappoint readers later.",
          "Write down which events happened on which day: chapter drops, shoutouts, ads, forum posts, and Reddit discussions."
        ]
      },
      {
        title: "A safer first-month watch loop",
        body:
          "A practical watch loop is weekly, not minute-by-minute. On launch day, record the starting numbers and the exact packaging used: cover, title, blurb, categories, tags, and first chapter version. During the first week, note every release and every external mention. After each week, compare the change in numbers against the actual launch activity. This keeps the author from rewriting everything after one noisy day and makes later decisions easier to explain.",
        bullets: [
          "Day 0: capture packaging and starting stats before any launch activity.",
          "Days 1-7: track releases, comments, shoutouts, follower movement, and visible reader objections.",
          "Days 8-14: inspect the opening hook and blurb if views rise but follows lag.",
          "Days 15-30: review whether cadence and community work are sustainable instead of chasing one ranking surface."
        ]
      },
      {
        title: "Packaging checks before launch",
        body:
          "Packaging is part of launch operations. If the cover suggests one subgenre, the blurb promises another, and the first chapter opens with a different tone, early stats become hard to interpret. Before publishing, compare the story promise across the cover, title, blurb, tags, first chapter, and author note. The goal is not to make everything generic. The goal is to make the right reader understand what they are being offered before they click.",
        bullets: [
          "Read the blurb beside the first chapter and mark every promise the chapter does or does not support.",
          "Check whether the first visible tags match the audience the launch is trying to reach.",
          "Keep a screenshot or note of the launch version so later packaging changes have context.",
          "Do not change cover, blurb, tags, and cadence all at once unless the launch is clearly broken."
        ]
      },
      {
        title: "What not to promise",
        body:
          "Do not market a launch as guaranteed to reach any ranking surface. A safer framing is to say the launch is prepared, measurable, and community-safe. That matters because Royal Road and adjacent communities are sensitive to anything that looks like manipulation: review trades, engagement farming, irrelevant promotion, or AI-generated spam. A tool can help the author organize launch work, but it should not imply platform endorsement or special access to an algorithm.",
        bullets: [
          "Avoid guaranteed ranking language.",
          "Avoid engagement farming, review trades, or pressure campaigns.",
          "Use source-linked guidance and update it when platform rules change.",
          "Treat external trackers and public lists as observation tools, not as instructions to game the platform."
        ]
      },
      {
        title: "A practical readiness worksheet",
        body:
          "Before launch, write one worksheet that can survive the first month: story promise, target reader, first-week chapter queue, release cadence, baseline stats, community rules, and planned review dates. The worksheet should be boring on purpose. It gives the author a place to compare what was planned against what happened. If a launch starts well, the worksheet explains which parts of the system held together. If a launch starts slowly, it prevents the author from guessing at causes without evidence.",
        bullets: [
          "Keep the worksheet outside Royal Road so it remains under the author's control.",
          "Add one note for every public event that could affect discovery.",
          "Use weekly review dates to avoid constant stat refreshing.",
          "Turn the week-four review into one focused next experiment."
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
          "Genre and tag surfaces are useful for review because they tell you where reader expectations may differ. Use them to audit positioning, not to force a story into tags it does not satisfy. A launch plan should treat genre placement as a reader promise. If a story is listed for progression fantasy readers, the opening chapters need to show progression hooks early enough that those readers understand why they clicked. If a story is tagged for romance, horror, comedy, or academy arcs, those signals should not feel like decoration. The list a story appears near can shape the first wave of expectations.",
        bullets: [
          "Compare the story promise against the actual opening chapters.",
          "Check whether the primary genre matches reader expectations.",
          "Record tag changes as launch notes so later stats have context.",
          "Review whether the strongest tag is visible in the cover, blurb, and first chapter."
        ]
      },
      {
        title: "Tag hygiene",
        body:
          "The practical goal is clarity. Readers should be able to understand the story promise from the cover, title, blurb, and tags without feeling misled. Tag hygiene also makes later stats easier to interpret. If the launch attracts the wrong readers, weak follows or negative comments may not mean the story is broken. They may mean the story was shown to readers who expected a different experience. Before launch, write a one-sentence reader promise, then check each visible tag against that sentence.",
        bullets: [
          "Remove tags that only describe one minor scene.",
          "Keep content warnings and sensitive labels current.",
          "Revisit tags after the first arc if the story direction changes.",
          "Avoid changing many tags at once unless the current positioning is clearly misleading."
        ]
      },
      {
        title: "Launch notes for genre surfaces",
        body:
          "A simple genre watch note should include the launch date, current tags, primary category, cover version, blurb version, and any visible list movement the author cares about. The note is not for obsessing over rank. It is for remembering what the public package looked like when readers reacted. If the author later rewrites the blurb, swaps the cover, or changes the primary tags, the old version should still be available for comparison.",
        bullets: [
          "Take a quick screenshot or text note of the launch metadata.",
          "Record any packaging changes with dates.",
          "Compare reactions after the change to the prior week, not to an isolated hour.",
          "Keep genre watch tasks separate from writing tasks so neither gets lost."
        ]
      },
      {
        title: "Common mistakes",
        body:
          "The most common mistake is using tags as discovery bait instead of reader guidance. That can produce short-term clicks and long-term distrust. Another mistake is reacting to one comment by changing the entire genre promise. Use reader feedback to decide what to inspect, but let repeated patterns drive major changes. If several readers misunderstand the premise in the same way, the issue may be the blurb or opening sequence. If one reader simply wanted another subgenre, the launch may still be positioned correctly.",
        bullets: [
          "Do not tag for a popular niche unless the story actually satisfies that niche.",
          "Do not remove accurate warnings just to broaden the funnel.",
          "Do not rewrite the whole package after one noisy reaction.",
          "Use a weekly review cadence for positioning changes."
        ]
      },
      {
        title: "When to revisit genre positioning",
        body:
          "Revisit genre positioning after enough readers have seen the same public package. That usually means waiting until several chapters are live, the first release rhythm has been tested, and there is more than one piece of feedback. A tag change is most useful when it answers a clear question: are the wrong readers clicking, are the right readers failing to recognize the promise, or has the story moved into a different emphasis than the launch package suggested? Without that question, tag changes become guesswork.",
        bullets: [
          "Use comments and follows together before deciding that a tag is wrong.",
          "Compare the story to nearby reader expectations, not just to the author's intent.",
          "Keep older tag versions in the launch notes.",
          "Make one positioning change at a time when possible."
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
        title: "What each metric can and cannot tell you",
        body:
          "Royal Road stats are useful when they are read together. Views can show exposure or reading activity, but they do not always mean a reader wants future chapters. Followers are a stronger signal of continued interest, but they lag behind discovery. Favorites, comments, ratings, and reviews each carry different biases. A small story with engaged comments may be healthier than a larger spike that disappears after one shoutout. The author should avoid turning any single metric into a verdict.",
        bullets: [
          "Views answer whether readers are reaching chapters, not whether they are committed.",
          "Followers answer whether some readers want future updates.",
          "Favorites and comments can show attachment, but they depend heavily on genre and reader habits.",
          "Ratings and reviews need context; one early reaction should not drive the whole launch plan."
        ]
      },
      {
        title: "Weekly review loop",
        body:
          "A weekly review is more useful than refreshing stats every few minutes. Record the same numbers on the same day each week, then compare the change against what happened in the story and promotion plan. The review should include both stats and events. Without event notes, a spike after a shoutout can be mistaken for packaging improvement, and a quiet week after a missed update can be mistaken for reader rejection.",
        bullets: [
          "Record followers, views, favorites, comments, review count, and rating context.",
          "Note chapter releases, shoutouts, ads, and community posts beside the numbers.",
          "Separate story changes from promotion events so the cause is easier to inspect.",
          "Look for trend direction rather than one noisy day."
        ]
      },
      {
        title: "A simple benchmark table",
        body:
          "The first benchmark does not need automation. A manual table is enough: week number, total chapters, total words, followers, total views, favorites, comments, review count, major launch events, and one short note. The important part is consistency. Record the same fields every week and keep the definitions stable. If the author later uses a more advanced tracker, this early table becomes the baseline.",
        bullets: [
          "Week 0: capture the launch state before public promotion.",
          "Week 1: mark first-week chapter drops and any shoutouts.",
          "Week 2: inspect whether readers who arrived in week 1 continued following.",
          "Week 4: decide whether packaging, cadence, or community channel needs one focused change."
        ]
      },
      {
        title: "Do not overreact",
        body:
          "Early numbers are noisy. Use stats to decide what to inspect next: blurb, cover, opening hook, cadence, audience fit, or community channel. Avoid changing everything at once. If views are present but followers are weak, inspect promise-to-opening fit. If followers grow but comments stay quiet, inspect whether the author notes invite useful discussion. If stats drop after cadence slips, fix the publishing system before rewriting the story's positioning.",
        bullets: [
          "Change one major variable at a time when practical.",
          "Keep notes beside the numbers.",
          "Use the Patreon calculator only after the audience signal is stable enough to model.",
          "Treat stats as triage signals, not as a substitute for reader judgment."
        ]
      },
      {
        title: "Turn stats into decisions",
        body:
          "The best stats review ends with a decision, not a mood. After each weekly check, write one of three outcomes: keep the current plan, inspect one possible problem, or make one controlled change. Keeping the plan is a valid decision if cadence is holding and reader response is still too early to interpret. Inspecting a problem means gathering more evidence before changing the public package. Making a controlled change means recording exactly what changed and when the next review will happen.",
        bullets: [
          "Keep the plan when evidence is too thin.",
          "Inspect one weak point when the pattern is plausible but not proven.",
          "Change one variable when repeated evidence points to the same issue.",
          "Document the decision so future stats are easier to read.",
          "Bring the decision back into the launch checklist so the next week has one owner and one review date.",
          "If no decision can be stated clearly, keep collecting the same baseline fields for another week before changing the public package."
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
          "Views and followers answer different questions. Views show exposure and reading activity, while followers are a stronger signal that readers want future chapters. A useful review looks at both, plus release cadence and chapter age. A launch can receive many views from curiosity, a shoutout, an ad, or a discussion thread without creating many follows. That is not automatically failure, but it does tell the author what to inspect next. The goal is to understand whether readers are reaching the story, whether the promise is clear, and whether enough readers want the next update.",
        bullets: [
          "Compare follower movement after major release days.",
          "Note whether views came from a shoutout, ad, or community discussion.",
          "Avoid judging a story from one isolated spike.",
          "Review chapter age and cadence before comparing one week to another."
        ]
      },
      {
        title: "What to check next",
        body:
          "If views rise but followers lag, inspect the promise-to-opening fit: title, cover, blurb, tags, first chapter hook, and update cadence. The fix is usually packaging or reader expectation, not a single magic number. If readers click but do not follow, the story may be attracting people who expected a different tone, speed, trope, or genre payoff. If both views and followers are quiet, the issue may be exposure, posting cadence, weak metadata, or simply a launch that has not reached enough readers yet.",
        bullets: [
          "Review the first chapter against the blurb promise.",
          "Check whether cover and tags attract the intended genre readers.",
          "Record any packaging changes before comparing future weeks.",
          "Separate exposure problems from conversion problems before changing the story."
        ]
      },
      {
        title: "A weekly interpretation table",
        body:
          "A simple table can prevent overreaction. Record week number, chapters live, new views, total followers, follower change, major events, and one short interpretation. If a shoutout happened on Tuesday and views spiked on Wednesday, write that down. If no chapter went live for a week, write that down too. The table turns stats into evidence instead of mood. It also gives the author a way to compare packaging changes later without relying on memory.",
        bullets: [
          "Week 0 should capture the baseline before public promotion.",
          "Week 1 should include every release, shoutout, and ad event.",
          "Week 2 should inspect whether the first readers kept following.",
          "Week 4 should summarize which operational change deserves attention next."
        ]
      },
      {
        title: "Examples of safer conclusions",
        body:
          "Safer conclusions are narrow. Instead of saying 'the story failed,' say 'views rose after a shoutout but follows did not move much, so I need to inspect promise-to-opening fit.' Instead of saying 'the algorithm hates me,' say 'I missed two planned updates, so cadence is the first operational issue.' This language matters because it points to an action the author can take. Good stats review reduces panic and makes the next experiment smaller.",
        bullets: [
          "High views and low follows: inspect reader promise, first chapter, tags, and blurb.",
          "Low views and steady follows: inspect exposure channels and posting consistency.",
          "Follower growth with quiet comments: inspect author notes and discussion prompts.",
          "Stats drop after missed updates: repair cadence before changing positioning."
        ]
      },
      {
        title: "What not to calculate too early",
        body:
          "Avoid building complex ratios during the first few days. A brand-new story can have distorted numbers because chapter count, external mentions, browser behavior, and returning readers are all mixed together. It is better to record the same basic fields for several weeks than to invent a precise conversion target too soon. Once the story has a stable release pattern, views and followers become more useful as a trend line. Before that, they are mostly clues for what to inspect.",
        bullets: [
          "Do not compare a one-day spike to a month-old story.",
          "Do not treat one shoutout as proof of durable audience fit.",
          "Do not model Patreon from unstable follower movement.",
          "Do keep the raw weekly notes so later analysis has context."
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
        title: "Choose by launch workflow, not vibes",
        body:
          "A platform choice should match genre fit, update cadence, community norms, and how much operational overhead the author can handle. Treat the first platform as a launch system, not a permanent identity. Many authors ask whether one site is simply better than the other, but the more useful question is where the specific story can find the right first readers and where the author can maintain the work. A launch that fits the author's weekly rhythm is more valuable than a theoretical audience the author cannot serve consistently.",
        bullets: [
          "List where similar stories already find readers.",
          "Check formatting, scheduling, and community expectations before launch.",
          "Keep cross-posting plans realistic for your writing pace.",
          "Decide which platform is primary for the first month so stats and feedback are easier to interpret."
        ]
      },
      {
        title: "Royal Road launch fit",
        body:
          "Royal Road is often discussed by authors of progression fantasy, LitRPG, fantasy, sci-fi, and long-form serial fiction because it has visible discovery surfaces, active reader expectations, and a culture of watching launch movement. That can be useful for a story with a strong serial hook and a prepared chapter buffer. It can also be stressful for authors who refresh stats constantly or expect one ranking surface to solve packaging problems. If Royal Road is the primary launch platform, the author should prepare a 30-day operating plan before publishing.",
        bullets: [
          "Prepare enough chapters to show consistency during the first weeks.",
          "Make the cover, blurb, tags, and opening chapter point at the same reader.",
          "Track stats weekly instead of rewriting the whole launch after one day.",
          "Keep community posts rule-safe and avoid asking for artificial engagement."
        ]
      },
      {
        title: "Scribble Hub launch fit",
        body:
          "Scribble Hub can be part of a cross-posting strategy, but it should not be added casually. Every extra platform adds formatting, scheduling, author-note, comment, and stats-review work. If the author already struggles to keep one cadence stable, cross-posting can create more operational drag than benefit. If the story fits audiences on multiple platforms and the author can maintain the routine, cross-posting may still be useful as a discovery and redundancy strategy.",
        bullets: [
          "Check whether similar stories are active on the platform before committing.",
          "Confirm formatting and metadata needs before copying chapters over.",
          "Decide whether comments and reader feedback will be monitored in both places.",
          "Do not promise simultaneous updates unless the chapter buffer can support it."
        ]
      },
      {
        title: "Plan the first month",
        body:
          "Whichever platform comes first, the author still needs the same operating basics: chapter buffer, release cadence, packaging, feedback path, and a place to track stats. The first month should answer a small number of questions. Did the story reach the intended readers? Did the opening promise match the reader response? Did the cadence hold? Did community activity produce useful feedback or only stress? Those answers matter more than declaring a universal winner between platforms.",
        bullets: [
          "Build a 30-day checklist before opening new accounts everywhere.",
          "Keep community-specific rules next to each posting task.",
          "Review whether cross-posting creates more maintenance than value.",
          "Use one primary platform's stats as the baseline, then compare other platforms only after the workflow is stable."
        ]
      },
      {
        title: "A simple decision rule",
        body:
          "Use a simple rule for the first launch: one primary platform, one secondary platform only if the author can maintain it without breaking cadence. The primary platform gets the cleanest stats, the most attention, and the first review loop. The secondary platform should not become a second full-time launch unless it is clearly producing useful reader feedback. If cross-posting creates missed updates, inconsistent author notes, or ignored comments, it is no longer free distribution. It is operational debt.",
        bullets: [
          "Choose the platform where the target reader is easiest to understand.",
          "Keep the first-month stats review centered on the primary platform.",
          "Add cross-posting only when formatting and update work are sustainable.",
          "Stop or pause a secondary platform if it damages the release rhythm."
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
          "Author communities work best when the author participates before asking for anything. Use Discords for craft talk, critique, swaps, and feedback, but read the current server rules before posting links. A launch plan should treat each server as a community with norms, not as a traffic source. The author who shows up only to request swaps or clicks will usually get weaker responses than the author who understands the channel structure, gives useful feedback, and asks specific workflow questions before promotion.",
        bullets: [
          "Observe channel norms before starting a promotion thread.",
          "Keep swap requests specific and genre-aware.",
          "Do not DM authors cold unless the community explicitly allows it.",
          "Use public channels and opt-in threads before private outreach."
        ]
      },
      {
        title: "Track community context",
        body:
          "A community note is as important as a contact name. Record where the conversation happened, what was agreed, and whether the server has self-promotion, critique, or swap-specific channels. This prevents a common launch problem: finding an old Discord conversation three weeks later and not knowing whether a swap was actually agreed, where the snippet should go, or whether the channel allowed that kind of request in the first place.",
        bullets: [
          "Keep Discord and Reddit rule notes separate.",
          "Use the swap tracker only after a real conversation exists.",
          "Update notes when server rules or channel names change.",
          "Record the exact channel or thread where an agreement happened."
        ]
      },
      {
        title: "What to ask for",
        body:
          "Good community asks are specific and easy to answer. Instead of asking people to read an entire story, ask whether the blurb matches the opening promise, whether a shoutout snippet is clear, or whether a launch cadence sounds sustainable. For swaps, include genre, tone, content boundaries, expected date, and where the shoutout would appear. That makes it easier for another author to decide whether the audiences actually fit.",
        bullets: [
          "Ask for feedback on one asset at a time: blurb, hook, cover fit, or schedule.",
          "For swaps, describe audience fit before asking for dates.",
          "Keep the request short enough that someone can answer without doing unpaid project management.",
          "Thank people and record any agreed follow-up immediately."
        ]
      },
      {
        title: "Red flags to avoid",
        body:
          "Avoid anything that looks like mass outreach, review trading, or pressure. Communities built around authors are usually sensitive to promotional behavior because everyone has something to promote. The safest approach is to be transparent, ask for workflow advice, and keep links inside channels where links are allowed. If the server has a dedicated promo or swap channel, use it. If it does not, ask a moderator or do not post the link.",
        bullets: [
          "Do not send the same private message to a list of authors.",
          "Do not ask for reviews in exchange for reviews.",
          "Do not hide that a post is about your own launch workflow.",
          "Do not treat silence as permission to follow up repeatedly."
        ]
      },
      {
        title: "How to use Discord notes in a launch plan",
        body:
          "Discord notes should feed the launch plan without becoming a contact database full of cold leads. Record only useful operational context: server name, relevant channels, rule notes, people who opted into a conversation, agreed swap date, and follow-up status. This keeps the author honest about what actually happened. It also makes the launch less fragile, because agreed swaps and critique promises are not scattered across direct messages, browser tabs, and memory.",
        bullets: [
          "Keep opt-in conversations separate from prospects you have not contacted.",
          "Record rule notes before drafting a post.",
          "Use the swap tracker for agreed or credible conversations, not scraping member lists.",
          "Review the notes weekly and close stale items instead of chasing everyone.",
          "Copy only the operational summary into the launch plan so private chat context is not exposed or over-shared.",
          "If a server feels unclear about promotion, keep participating normally and skip the launch ask until the rules are explicit, current, and moderator-visible."
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
          "A cover is not only decoration. It tells genre readers what kind of story they are about to try. Before launch, compare the cover against the title, blurb, tags, and opening chapter. The cover does not need to explain every subplot, but it should support the main promise. If the art suggests grimdark military fantasy and the opening reads like cozy academy progression, early readers may bounce before the story has a chance to work. That mismatch will show up later as confusing stats.",
        bullets: [
          "Check that genre signals are obvious at small sizes.",
          "Avoid misleading mood or character promises.",
          "Keep title readability separate from art detail.",
          "Compare the cover to stories that target the same reader, not to unrelated bestsellers."
        ]
      },
      {
        title: "Launch checklist",
        body:
          "Prepare the cover and blurb early enough to get feedback before the first release day. Last-minute packaging changes make it harder to understand what affected early stats. A practical launch checklist should freeze the first public version, record who gave feedback, and note what changed. If the author changes the cover after week one, that change should be visible in the same review notes as follower, view, and comment movement.",
        bullets: [
          "Freeze a launch version before collecting baseline stats.",
          "Save notes about feedback and revisions.",
          "Revisit cover performance alongside views, followers, and comments.",
          "Do not change cover, blurb, and tags at the same time unless the package is clearly misleading."
        ]
      },
      {
        title: "Small-size and thumbnail checks",
        body:
          "Many readers first see the cover at a small size. The thumbnail does not need to show every detail, but it should preserve the strongest contrast, title readability, and genre signal. Test the cover at the size where it appears in a list, not only as a full image. If the title disappears, the character silhouette turns muddy, or the art no longer reads as the intended genre, the cover may be weaker than it looks in isolation.",
        bullets: [
          "Check title readability at thumbnail size.",
          "Look for one strong focal point instead of many tiny details.",
          "Confirm that contrast survives on mobile screens.",
          "Ask feedback readers what genre they expect before showing them the blurb."
        ]
      },
      {
        title: "Blurb and cover alignment",
        body:
          "The cover gets the click; the blurb sets the expectation; the first chapter has to pay off that expectation. If those three pieces disagree, the author may see views without follows. Before launch, read the blurb while looking at the cover and underline every promise: protagonist type, conflict, power fantasy, tone, setting, and stakes. Then check whether the first chapter starts delivering those promises quickly enough for the target reader.",
        bullets: [
          "Use the same core genre promise across art, blurb, tags, and opening scene.",
          "Cut blurb details that the first chapters do not support yet.",
          "Keep a dated copy of every major packaging version.",
          "Review packaging after collecting enough reader response, not after every single click."
        ]
      },
      {
        title: "Feedback before public launch",
        body:
          "Cover feedback is most useful when the reviewer knows the target reader. A generic 'looks good' is less valuable than a specific answer to whether the thumbnail signals the intended genre. Before launch, ask a small number of people what genre they expect, what emotion the image suggests, and whether the title is readable. Then compare those answers to the blurb promise. If the answers are scattered, the cover may be attractive but unclear.",
        bullets: [
          "Ask what genre the cover suggests before sharing the blurb.",
          "Ask whether the title is readable at small size.",
          "Ask which element pulls attention first.",
          "Record feedback themes instead of treating every opinion as a required change.",
          "Keep the original file and the launch version separate so later packaging reviews can identify what actually changed.",
          "If feedback is split, prioritize the response from readers who already understand the target genre, platform context, and thumbnail discovery surface for serial fiction launches and browsing behavior."
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
          "A web novel launch is a weekly operating loop: prepare chapters, publish consistently, record stats, talk to the right communities, and adjust packaging based on evidence. The mistake many first-time serial authors make is treating launch as a single announcement. In practice, the first month is a system: a chapter queue, a release rhythm, a packaging baseline, a feedback path, and a review habit. If those pieces are not written down, every quiet day feels like a crisis and every spike feels like proof that the plan worked.",
        bullets: [
          "Start with one primary platform and one clear reader promise.",
          "Keep launch tasks dated and reviewable.",
          "Separate writing work from promotion work so neither disappears.",
          "Record what changed each week so later stats have context."
        ]
      },
      {
        title: "The pre-launch baseline",
        body:
          "Before the first public chapter goes live, freeze a baseline. That does not mean the story can never change. It means the author should know what version of the cover, blurb, tags, title, cadence, and first chapter produced the first wave of feedback. Without a baseline, it is hard to tell whether a weak start came from the story premise, the opening chapter, the cover promise, a thin stockpile, or simply not enough readers seeing the work yet.",
        bullets: [
          "Save the launch blurb and cover version before making public changes.",
          "Write down the planned cadence and the actual chapter buffer.",
          "List the first communities where feedback or discussion will be sought.",
          "Decide which stats will be reviewed weekly, not constantly."
        ]
      },
      {
        title: "The first 30 days",
        body:
          "The first month should be planned in phases. The two weeks before launch are for packaging, queue preparation, rule checks, and swap coordination. The first week is for consistent posting and watching obvious friction points. The second week is for comparing early reactions against the story promise. Weeks three and four are for deciding whether the operating system is sustainable. This structure keeps authors from trying to fix everything at once.",
        bullets: [
          "Day -14 to -1: prepare chapters, metadata, author notes, and community rule notes.",
          "Days 1 to 7: publish consistently and record reader-facing events.",
          "Days 8 to 14: inspect view-to-follow behavior, comments, and opening hook fit.",
          "Days 15 to 30: adjust one major variable only if the evidence is clear."
        ]
      },
      {
        title: "Community work without looking like spam",
        body:
          "Community work is not the same as dropping a link everywhere. A useful launch presence starts with participation, workflow questions, feedback requests where allowed, and carefully matched shoutout swaps. Each community has its own tolerance for promotion, surveys, AI discussion, and critique requests. The safest launch plan keeps community rules beside the task list so the author can ask the right question in the right place instead of improvising under pressure.",
        bullets: [
          "Use workflow and craft questions before asking people to look at a story.",
          "Keep self-promotion frequency notes next to each planned post.",
          "Do not send private messages unless the relationship or community rules make it appropriate.",
          "Track shoutout swaps only after there is real fit and agreement."
        ]
      },
      {
        title: "Stats review after launch",
        body:
          "Stats should answer operational questions. Did the release cadence hold? Did readers who saw the first chapters follow for more? Did a shoutout create a temporary view spike or a lasting follower change? Did comments point to packaging confusion, pacing issues, or genre mismatch? A launch review is strongest when the author records numbers and events together. That turns vague anxiety into a small set of next inspections.",
        bullets: [
          "Review stats weekly with release and promotion notes beside them.",
          "Separate packaging questions from cadence questions.",
          "Avoid changing cover, blurb, tags, and release rhythm all in the same week.",
          "Use Patreon planning only after the audience signal is stable enough to model."
        ]
      },
      {
        title: "Keep the stack simple",
        body:
          "The first launch does not need a complicated growth stack. Use no-login tools and simple exports until the author has enough signal to justify saved accounts, reminders, or deeper reporting. A notes app, a launch checklist, a swap sheet, and a weekly review table are enough to start. More automation should come after the author knows which repeated tasks are actually painful. This is also safer for community trust: authors can inspect the work, keep control of their own accounts, and avoid tools that look like platform manipulation.",
        bullets: [
          "Use the launch planner for the first 30 days.",
          "Use the swap tracker only for real partner conversations.",
          "Use the Patreon calculator when the backlog promise is concrete.",
          "Add accounts, reminders, and deeper reporting only after validation."
        ]
      },
      {
        title: "What a completed launch plan should contain",
        body:
          "A completed launch plan is not just a calendar. It should include the story promise, chapter buffer, release cadence, first-week checklist, community rules, swap commitments, stats review cadence, and a short list of decisions that will wait until week four. That final list matters. It prevents an author from making emotional changes before enough evidence exists. The author can still respond to bugs, broken links, or obvious copy mistakes immediately, but deeper positioning changes deserve a small review window.",
        bullets: [
          "Story promise: genre, target reader, and opening hook.",
          "Operations: chapter queue, release days, and backup buffer.",
          "Community: where feedback can be requested and where promotion is risky.",
          "Review: which numbers matter and when they will be checked."
        ]
      }
    ]
  }
];

export function findSeoPage(slug: string, type?: "tool" | "guide") {
  return seoPages.find((page) => page.slug === slug && (!type || page.type === type));
}
