import { describe, expect, it } from "vitest";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { isValidPreviewEmail } from "@/lib/signup";

describe("isValidPreviewEmail", () => {
  it("accepts a normal email address", () => {
    expect(isValidPreviewEmail("author@example.com")).toBe(true);
  });

  it("trims surrounding whitespace", () => {
    expect(isValidPreviewEmail(" author@example.com ")).toBe(true);
  });

  it("rejects empty and malformed emails", () => {
    expect(isValidPreviewEmail("")).toBe(false);
    expect(isValidPreviewEmail("@")).toBe(false);
    expect(isValidPreviewEmail("@example.com")).toBe(false);
    expect(isValidPreviewEmail("author@example")).toBe(false);
  });
});

describe("getEmailCaptureConfig", () => {
  it("keeps email capture disabled without an approved provider action", () => {
    expect(getEmailCaptureConfig({}).enabled).toBe(false);
  });

  it("builds a provider-ready form config from public env values", () => {
    const config = getEmailCaptureConfig({
      NEXT_PUBLIC_EMAIL_FORM_ACTION: "https://example.com/forms/signup",
      NEXT_PUBLIC_EMAIL_FORM_METHOD: "get",
      NEXT_PUBLIC_EMAIL_FIELD_NAME: "subscriber_email",
      NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME: "tag",
      NEXT_PUBLIC_EMAIL_SOURCE_VALUE: "weekly-checklist",
      NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS: "embed=1,utm=launch"
    });

    expect(config).toEqual({
      enabled: true,
      action: "https://example.com/forms/signup",
      method: "get",
      emailFieldName: "subscriber_email",
      sourceFieldName: "tag",
      sourceValue: "weekly-checklist",
      hiddenFields: [
        { name: "tag", value: "weekly-checklist" },
        { name: "embed", value: "1" },
        { name: "utm", value: "launch" }
      ]
    });
  });

  it("defaults provider form fields for Buttondown-style embeds", () => {
    const config = getEmailCaptureConfig({
      NEXT_PUBLIC_EMAIL_FORM_ACTION: " https://buttondown.email/example "
    });

    expect(config.enabled).toBe(true);
    expect(config.method).toBe("post");
    expect(config.emailFieldName).toBe("email");
    expect(config.sourceFieldName).toBe("metadata__source");
    expect(config.sourceValue).toBe("fictionops-weekly-checklist");
    expect(config.hiddenFields).toEqual([
      { name: "metadata__source", value: "fictionops-weekly-checklist" }
    ]);
  });
});
