export function getSearchVerification() {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  return {
    google: google || undefined,
    other: bing ? { "msvalidate.01": bing } : undefined
  };
}

