import type { VercelRequest, VercelResponse } from "@vercel/node";

const ENDPOINT = process.env.GOOGLE_APPS_SCRIPT_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!ENDPOINT) {
    return res.status(500).json({ ok: false, error: "Missing GOOGLE_APPS_SCRIPT_URL" });
  }

  const email = String(req.body?.email || "").trim().toLowerCase();
  const school = String(req.body?.school || "thewall-landing").trim();

  if (!email.includes("@")) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    const upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        school,
        source: "thewall-landing",
        userAgent: req.headers["user-agent"] || "",
      }),
    });

    const text = await upstream.text();
    try {
      const json = JSON.parse(text);
      return res.status(upstream.ok ? 200 : 502).json(json);
    } catch {
      return res.status(upstream.ok ? 200 : 502).json({ ok: upstream.ok, raw: text });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
