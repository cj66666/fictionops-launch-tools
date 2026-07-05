"use client";

import { type FormEvent, useState } from "react";
import { Bell } from "lucide-react";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { isValidPreviewEmail, type SignupMessageTone } from "@/lib/signup";

const emailCaptureConfig = getEmailCaptureConfig();

type EmailSignupFormProps = {
  className?: string;
  enabledLabel?: string;
  previewLabel?: string;
};

export function EmailSignupForm({
  className = "signupForm",
  enabledLabel = "Get checklist",
  previewLabel = "Preview signup"
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [signupMessage, setSignupMessage] = useState<{
    text: string;
    tone: SignupMessageTone;
  } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!isValidPreviewEmail(email)) {
      event.preventDefault();
      setSignupMessage({
        text: "Enter a valid email to preview the update signup.",
        tone: "error"
      });
      return;
    }

    if (emailCaptureConfig.enabled) {
      return;
    }

    event.preventDefault();
    setSignupMessage({
      text: "Preview saved in this browser session. No email was sent or stored.",
      tone: "success"
    });
  }

  return (
    <>
      <form
        action={emailCaptureConfig.enabled ? emailCaptureConfig.action : undefined}
        className={className}
        method={emailCaptureConfig.enabled ? emailCaptureConfig.method : undefined}
        onSubmit={handleSubmit}
      >
        <label className="field">
          <span>Email</span>
          <input
            autoComplete="email"
            name={emailCaptureConfig.emailFieldName}
            onChange={(event) => {
              setEmail(event.target.value);
              setSignupMessage(null);
            }}
            placeholder="author@example.com"
            type="email"
            value={email}
          />
        </label>
        {emailCaptureConfig.enabled
          ? emailCaptureConfig.hiddenFields.map((field) => (
              <input key={field.name} name={field.name} type="hidden" value={field.value} />
            ))
          : null}
        <button className="button full" type="submit">
          <Bell size={15} />
          {emailCaptureConfig.enabled ? enabledLabel : previewLabel}
        </button>
      </form>
      {signupMessage ? <p className={`signupMessage ${signupMessage.tone}`}>{signupMessage.text}</p> : null}
      <p className="signupFinePrint">
        {emailCaptureConfig.enabled
          ? "This form submits your email to the approved checklist provider. No platform credentials are requested."
          : "Preview mode only. No email is sent, stored, or subscribed."}
      </p>
    </>
  );
}
