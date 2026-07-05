const WWW_HOST = "www.fictionops.com";
const APEX_HOST = "fictionops.com";

export function canonicalHostRedirectUrl(requestUrl: string, host: string | null) {
  const normalizedHost = (host || "").toLowerCase().split(":")[0];

  if (normalizedHost !== WWW_HOST) {
    return null;
  }

  const url = new URL(requestUrl);
  url.hostname = APEX_HOST;
  url.protocol = "https:";
  return url;
}

