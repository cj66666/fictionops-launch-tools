export type EmailCaptureConfig = {
  enabled: boolean;
  action: string;
  method: "post" | "get";
  emailFieldName: string;
  sourceFieldName: string;
  sourceValue: string;
};

const DEFAULT_EMAIL_FIELD = "email";
const DEFAULT_SOURCE_FIELD = "source";
const DEFAULT_SOURCE_VALUE = "fictionops-weekly-checklist";

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

export function getEmailCaptureConfig(
  env: Partial<Record<string, string | undefined>> = process.env
): EmailCaptureConfig {
  const action = clean(env.NEXT_PUBLIC_EMAIL_FORM_ACTION);
  const configuredMethod = clean(env.NEXT_PUBLIC_EMAIL_FORM_METHOD).toLowerCase();
  const method = configuredMethod === "get" ? "get" : "post";
  const emailFieldName = clean(env.NEXT_PUBLIC_EMAIL_FIELD_NAME) || DEFAULT_EMAIL_FIELD;
  const sourceFieldName = clean(env.NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME) || DEFAULT_SOURCE_FIELD;
  const sourceValue = clean(env.NEXT_PUBLIC_EMAIL_SOURCE_VALUE) || DEFAULT_SOURCE_VALUE;

  return {
    enabled: action.length > 0,
    action,
    method,
    emailFieldName,
    sourceFieldName,
    sourceValue
  };
}

