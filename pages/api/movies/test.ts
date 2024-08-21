import { ResolvingViewport } from 'next/dist/lib/metadata/types/metadata-interface.js';
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  

    if (req.method === "GET") {
      const externalApiUrl = "https://multiembed.mov/directstream.php?video_id=tt0012349";
      const externalApiResponse = await axios.get(externalApiUrl);

      if (!externalApiResponse || externalApiResponse.status !== 200) {
        throw new Error("Failed to fetch data from external API");
      }

      const finalUrl = externalApiResponse.request.res.responseUrl;
      console.log(finalUrl)
      res.status(200).json(finalUrl);

    } 
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
// https://multiembed.mov/directstream.php?video_id=tt0012349