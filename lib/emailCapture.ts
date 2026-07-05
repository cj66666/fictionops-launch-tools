export type EmailCaptureConfig = {
  enabled: boolean;
  action: string;
  method: "post" | "get";
  emailFieldName: string;
  sourceFieldName: string;
  sourceValue: string;
  hiddenFields: Array<{
    name: string;
    value: string;
  }>;
};

const DEFAULT_EMAIL_FIELD = "email";
const DEFAULT_SOURCE_FIELD = "metadata__source";
const DEFAULT_SOURCE_VALUE = "fictionops-weekly-checklist";

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

function parseHiddenFields(value: string | undefined) {
  return clean(value)
    .split(",")
    .map((pair) => {
      const [rawName, ...rawValueParts] = pair.split("=");
      const name = clean(rawName);
      const fieldValue = clean(rawValueParts.join("="));

      if (!name || !fieldValue) {
        return null;
      }

      return { name, value: fieldValue };
    })
    .filter((field): field is { name: string; value: string } => Boolean(field));
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
  const hiddenFields = [
    { name: sourceFieldName, value: sourceValue },
    ...parseHiddenFields(env.NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS)
  ];

  return {
    enabled: action.length > 0,
    action,
    method,
    emailFieldName,
    sourceFieldName,
    sourceValue,
    hiddenFields
  };
}
