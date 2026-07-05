const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://fictionops.com";
const host = new URL(origin).host;
const key = process.env.INDEXNOW_KEY || "cf75c61bc21243e88f63089c89aeedde";
const keyLocation = `${origin}/${key}.txt`;
const endpoint = process.env.INDEXNOW_ENDPOINT || "https://www.bing.com/indexnow";

function textBetweenAll(source, start, end) {
  const results = [];
  let cursor = 0;

  while (cursor < source.length) {
    const startIndex = source.indexOf(start, cursor);
    if (startIndex === -1) break;
    const valueStart = startIndex + start.length;
    const endIndex = source.indexOf(end, valueStart);
    if (endIndex === -1) break;
    results.push(source.slice(valueStart, endIndex));
    cursor = endIndex + end.length;
  }

  return results;
}

async function main() {
  const sitemapUrl = `${origin}/sitemap.xml`;
  const sitemapResponse = await fetch(sitemapUrl);

  if (!sitemapResponse.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: ${sitemapResponse.status}`);
  }

  const sitemap = await sitemapResponse.text();
  const urlList = textBetweenAll(sitemap, "<loc>", "</loc>")
    .map((url) => url.trim())
    .filter((url) => url.startsWith(origin));

  if (urlList.length === 0) {
    throw new Error(`No URLs found in sitemap ${sitemapUrl}`);
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  console.log(`[indexnow] endpoint ${endpoint}`);
  console.log(`[indexnow] host ${host}`);
  console.log(`[indexnow] keyLocation ${keyLocation}`);
  console.log(`[indexnow] submitted ${urlList.length} urls`);
  console.log(`[indexnow] status ${response.status}`);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
