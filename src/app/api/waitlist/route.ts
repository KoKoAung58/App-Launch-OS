import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = waitlistSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data: WaitlistFormData = result.data;

    await sendNotification(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function sendNotification(data: WaitlistFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    // Log to server console so submissions aren't silently lost during dev
    console.log("=== NEW WAITLIST SIGNUP ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("Set RESEND_API_KEY + NOTIFICATION_EMAIL to get email alerts.");
    return;
  }

  const resend = new Resend(apiKey);

  const featureList = data.interestedFeatures.join(", ");
  const utm = [
    data.utmSource && `source=${data.utmSource}`,
    data.utmMedium && `medium=${data.utmMedium}`,
    data.utmCampaign && `campaign=${data.utmCampaign}`,
    data.ref && `ref=${data.ref}`,
  ]
    .filter(Boolean)
    .join(", ");

  await resend.emails.send({
    from: process.env.FROM_EMAIL ?? "App Launch OS <waitlist@resend.dev>",
    to,
    subject: `🚀 New waitlist signup: ${data.fullName}`,
    text: `
New waitlist signup for App Launch OS
======================================
Name:          ${data.fullName}
Email:         ${data.email}
Role:          ${data.role}
Building:      ${data.building}
Launch stage:  ${data.launchStage}
Biggest pain:  ${data.biggestPain}
Features:      ${featureList}
Launch date:   ${data.launchDate || "—"}
Twitter:       ${data.twitterHandle || "—"}
Timezone:      ${data.timezone || "—"}
UTM:           ${utm || "—"}
    `.trim(),
  });
}
