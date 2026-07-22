import { NextResponse } from "next/server";
import { checkDatabaseConnection } from "@/src/lib/supabase";

export async function GET() {
  const isConnected = await checkDatabaseConnection();
  return NextResponse.json({
    database: isConnected ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
}