import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getWallIndex } from "./_lib/blob";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const wall = await getWallIndex();

    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");
    return res.status(200).json(wall);
  } catch (err) {
    console.error("students error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
