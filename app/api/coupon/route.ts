// @ts-nocheck
import { NextResponse } from "next/server";
import { saveCouponLead } from "@/src/lib/supabase";

/**
 * Next.js App Router API Route for Coupon popup registrations
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, email, phone } = body;

    // Validation (400 bad input)
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

    // Save coupon registration
    const result = await saveCouponLead({ name, email, phone });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to log coupon." },
        { status: result.statusCode || 500 }
      );
    }

    const responsePayload: any = {
      success: true,
      message: "Coupon registered successfully.",
      data: result.data
    };

    if (result.warning) {
      responsePayload.warning = result.warning;
    }

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ Next.js API error in /api/coupon:`, err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

