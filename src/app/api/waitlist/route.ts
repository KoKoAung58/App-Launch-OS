import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";

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

    const data = result.data;

    // Netlify sets process.env.URL to the site's primary URL on every deploy.
    // We use it to make a server-side POST that Netlify's CDN can intercept
    // for form processing — bypassing the client-side routing issue with OpenNext.
    const siteUrl = process.env.URL;

    if (!siteUrl) {
      // Local dev: log the data so submissions aren't silently lost
      console.log("[waitlist] Local dev — submission not forwarded to Netlify Forms:");
      console.log(JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }

    // Build a form-encoded body (Netlify Forms requires this format)
    const params = new URLSearchParams();
    params.append("form-name", "waitlist");
    params.append("fullName", data.fullName);
    params.append("email", data.email);
    params.append("role", data.role);
    params.append("building", data.building);
    params.append("launchStage", data.launchStage);
    params.append("biggestPain", data.biggestPain);
    for (const f of data.interestedFeatures) {
      params.append("interestedFeatures", f);
    }
    if (data.launchDate)     params.append("launchDate", data.launchDate);
    if (data.timezone)       params.append("timezone", data.timezone);
    if (data.twitterHandle)  params.append("twitterHandle", data.twitterHandle);
    params.append("consent", String(data.consent));
    if (data.ref)            params.append("ref", data.ref);
    if (data.utmSource)      params.append("utmSource", data.utmSource);
    if (data.utmMedium)      params.append("utmMedium", data.utmMedium);
    if (data.utmCampaign)    params.append("utmCampaign", data.utmCampaign);
    if (data.utmContent)     params.append("utmContent", data.utmContent);
    if (data.utmTerm)        params.append("utmTerm", data.utmTerm);

    // Server-side fetch → goes out through Netlify's CDN, which intercepts
    // the POST to /__forms.html and saves it under the registered form.
    const netlifyRes = await fetch(`${siteUrl}/__forms.html`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!netlifyRes.ok) {
      console.error(
        `[waitlist] Netlify Forms returned ${netlifyRes.status}:`,
        await netlifyRes.text()
      );
      throw new Error(`Netlify Forms returned ${netlifyRes.status}`);
    }

    console.log(`[waitlist] Saved to Netlify Forms: ${data.email}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[waitlist] Submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
