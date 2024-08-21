import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client.connect();
    console.log("Connected to database");

    if (req.method === "GET") {
      const data = await client
        .db("test")
        .collection("popular_tvs")
        .find({})
        .toArray();
      res.status(200).json(data);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
