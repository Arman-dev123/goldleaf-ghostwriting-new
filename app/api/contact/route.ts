// @ts-nocheck
import { NextResponse } from "next/server";
import { saveContactLead } from "@/src/lib/supabase";

/**
 * Next.js App Router API Route for Contact Form Leads
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, email, phone, service, budget, message } = body;

    // Validation (400 bad input)
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, error: "All required fields (Name, Email, Phone, Service, Message) must be provided." },
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

    // Save lead
    const result = await saveContactLead({
      name,
      email,
      phone,
      service,
      budget: budget || "Not specified",
      message
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to log lead." },
        { status: result.statusCode || 500 }
      );
    }

    const responsePayload: any = {
      success: true,
      message: "Contact lead saved successfully.",
      data: result.data
    };

    if (result.warning) {
      responsePayload.warning = result.warning;
    }

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ Next.js API error in /api/contact:`, err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

