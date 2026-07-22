import type { VercelRequest, VercelResponse } from "@vercel/node";
import { saveCouponLead, checkDatabaseConnection } from "../src/lib/supabase.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    await checkDatabaseConnection();

    const { name, email, phone } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "All required fields (Name, Email, Phone) must be provided.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    const result = await saveCouponLead({ name, email, phone });

    if (!result.success) {
      return res.status(result.statusCode || 500).json({
        success: false,
        error: result.error || "Failed to log coupon into database.",
      });
    }

    const responsePayload: any = {
      success: true,
      message: "Exclusive coupon registered successfully.",
      data: result.data,
    };
    if (result.warning) responsePayload.warning = result.warning;

    return res.status(200).json(responsePayload);
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ Vercel function error in /api/coupon:`, err);
    return res.status(500).json({
      success: false,
      error: "An unexpected internal server error occurred while processing your request.",
    });
  }
}