import type { VercelRequest, VercelResponse } from "@vercel/node";
import { saveContactLead, checkDatabaseConnection } from "../../src/lib/supabase";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    // Serverless functions are stateless between invocations, so verify
    // the connection on each cold start rather than relying on startup state.
    await checkDatabaseConnection();

    const { name, email, phone, service, budget, message } = req.body || {};

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        error: "All required fields (Name, Email, Phone, Service, Message) must be provided.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
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
      return res.status(result.statusCode || 500).json({
        success: false,
        error: result.error || "Failed to log lead into database.",
      });
    }

    const responsePayload: any = {
      success: true,
      message: "Contact lead secured successfully.",
      data: result.data,
    };
    if (result.warning) responsePayload.warning = result.warning;

    return res.status(200).json(responsePayload);
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ Vercel function error in /api/contact:`, err);
    return res.status(500).json({
      success: false,
      error: "An unexpected internal server error occurred while processing your request.",
    });
  }
}