export const feedbackQuestions = [
  "What part of your Royal Road launch workflow is still manual or easy to forget?",
  "Which FictionOps tool felt useful, confusing, or unnecessary?",
  "What would make you distrust a no-login author tool in this space?",
  "If this saved one hour per week, what would it need to track or remind you about?",
  "Would you want saved plans, reminder emails, swap CRM, benchmark reports, or none of those?"
];

export const feedbackBoundaries = [
  "No login or platform credentials.",
  "No auto-posting or private messages.",
  "No scraping promise or ranking guarantee.",
  "No email is sent or stored by this feedback kit."
];

export function buildFeedbackBrief() {
  return [
    "FictionOps feedback questions",
    "",
    "Context: no-login Royal Road launch tools for cadence, swaps, Patreon backlog, and community-safe planning.",
    "",
    "Questions:",
    ...feedbackQuestions.map((question, index) => `${index + 1}. ${question}`),
    "",
    "Trust boundaries:",
    ...feedbackBoundaries.map((boundary) => `- ${boundary}`)
  ].join("\n");
}
