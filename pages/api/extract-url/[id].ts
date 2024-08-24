import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      const url = `https://multiembed.mov/directstream.php?video_id=${id}`;
      const response = await axios.get(url);

      if (!response || response.status !== 200) {
        throw new Error("Failed to fetch data from external API");
      }

      const finalUrl = response.request.res.responseUrl;

      res.status(200).json(finalUrl);
    }
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
