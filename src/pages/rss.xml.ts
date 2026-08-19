import type { APIRoute } from "astro";

const site = "https://rian-t.github.io";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async () => {
  const modules = import.meta.glob("./blog/*.md", { eager: true });
  const posts = Object.values(modules)
    .map((mod: any) => ({ url: mod.url as string, ...mod.frontmatter }))
    .sort((a: any, b: any) => (a.date < b.date ? 1 : -1));

  const items = posts
    .map(
      (post: any) => `    <item>
      <title>${esc(post.title)}</title>
      <link>${site}${post.url}/</link>
      <guid isPermaLink="true">${site}${post.url}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.description ? `<description>${esc(post.description)}</description>` : ""}
    </item>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rian Touchent</title>
    <link>${site}/</link>
    <description>Notes on language models, evaluation, and NLP research.</description>
    <language>en</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
