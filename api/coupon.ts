import { NextRequest, NextResponse } from "next/server";
import { saveCouponLead, checkDatabaseConnection } from "@/src/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    await checkDatabaseConnection();

    const body = await request.json();
    const { name, email, phone } = body || {};

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "All required fields (Name, Email, Phone) must be provided." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const result = await saveCouponLead({ name, email, phone });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to log coupon into database." },
        { status: result.statusCode || 500 }
      );
    }

    const responsePayload: any = {
      success: true,
      message: "Exclusive coupon registered successfully.",
      data: result.data,
    };
    if (result.warning) responsePayload.warning = result.warning;

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ API error in /api/coupon:`, err);
    return NextResponse.json(
      { success: false, error: "An unexpected internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}