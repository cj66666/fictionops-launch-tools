import { describe, expect, it, vi } from "vitest";
import { getSearchVerification } from "@/lib/searchVerification";

describe("getSearchVerification", () => {
  it("keeps search verification disabled by default", () => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION", "");
    vi.stubEnv("NEXT_PUBLIC_BING_SITE_VERIFICATION", "");

    expect(getSearchVerification()).toEqual({
      google: undefined,
      other: undefined
    });

    vi.unstubAllEnvs();
  });

  it("maps Google and Bing verification tokens to Next metadata", () => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION", "google-token");
    vi.stubEnv("NEXT_PUBLIC_BING_SITE_VERIFICATION", "bing-token");

    expect(getSearchVerification()).toEqual({
      google: "google-token",
      other: {
        "msvalidate.01": "bing-token"
      }
    });

    vi.unstubAllEnvs();
  });
});

