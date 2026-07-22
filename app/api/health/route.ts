// @ts-nocheck
import { NextResponse } from "next/server";
import { getIsDatabaseConnected } from "@/src/lib/supabase";

export async function GET() {
  const connected = getIsDatabaseConnected();
  return NextResponse.json({
    database: connected ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
}
