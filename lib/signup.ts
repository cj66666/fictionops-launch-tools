export type SignupMessageTone = "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidPreviewEmail(email: string) {
  return EMAIL_PATTERN.test(email.trim());
}
