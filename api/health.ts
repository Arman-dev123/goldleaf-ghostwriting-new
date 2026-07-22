import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkDatabaseConnection } from "../src/lib/supabase";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const isConnected = await checkDatabaseConnection();
  return res.status(200).json({
    database: isConnected ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
}