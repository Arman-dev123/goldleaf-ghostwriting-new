import { NextRequest, NextResponse } from "next/server";
import { saveContactLead, checkDatabaseConnection } from "@/src/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // Serverless functions are stateless between invocations, so verify
    // the connection on each call rather than relying on in-memory state
    // from a previous, possibly different, function instance.
    await checkDatabaseConnection();

    const body = await request.json();
    const { name, email, phone, service, budget, message } = body || {};

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All required fields (Name, Email, Phone, Service, Message) must be provided.",
        },
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

    const result = await saveContactLead({
      name,
      email,
      phone,
      service,
      budget: budget || "Not specified",
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to log lead into database." },
        { status: result.statusCode || 500 }
      );
    }

    const responsePayload: any = {
      success: true,
      message: "Contact lead secured successfully.",
      data: result.data,
    };
    if (result.warning) responsePayload.warning = result.warning;

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ API error in /api/contact:`, err);
    return NextResponse.json(
      { success: false, error: "An unexpected internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}