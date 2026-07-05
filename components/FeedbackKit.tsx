"use client";

import { useMemo, useRef, useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { buildFeedbackBrief, feedbackBoundaries, feedbackQuestions } from "@/data/feedbackKit";
import { copyText } from "@/lib/download";

export function FeedbackKit() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "selected">("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const feedbackBrief = useMemo(() => buildFeedbackBrief(), []);

  async function copyBrief() {
    const copied = await copyText(feedbackBrief);
    if (copied) {
      setCopyState("copied");
      return;
    }

    textareaRef.current?.focus();
    textareaRef.current?.select();
    setCopyState("selected");
  }

  return (
    <>
      <section>
        <h2>Feedback questions</h2>
        <ol className="questionList">
          {feedbackQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Trust boundaries</h2>
        <ul className="trustList">
          {feedbackBoundaries.map((boundary) => (
            <li key={boundary}>{boundary}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Copy packet</h2>
        <textarea
          aria-label="Feedback packet text"
          className="copyBlock"
          readOnly
          ref={textareaRef}
          value={feedbackBrief}
        />
        <button className="button primary" onClick={copyBrief} type="button">
          {copyState === "copied" ? <Check size={16} /> : <Clipboard size={16} />}
          {copyState === "copied"
            ? "Copied"
            : copyState === "selected"
              ? "Text selected"
              : "Copy feedback packet"}
        </button>
        {copyState === "selected" ? (
          <p className="signupMessage error">Clipboard access was blocked. The packet text is selected.</p>
        ) : null}
      </section>
    </>
  );
}
