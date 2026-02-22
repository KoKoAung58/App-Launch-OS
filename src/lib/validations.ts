import { z } from "zod";

export const ROLES = [
  "Indie dev",
  "Founder",
  "Marketer",
  "Designer",
  "Other",
] as const;

export const BUILDING_OPTIONS = [
  "iOS app",
  "Android app",
  "Web app",
  "SaaS",
  "Game",
  "Other",
] as const;

export const LAUNCH_STAGES = [
  "Planning",
  "Pre-launch",
  "Launching soon",
  "Post-launch",
] as const;

export const PAIN_POINTS = [
  "I don't know what to do after shipping",
  "I need a launch checklist / system",
  "Writing launch posts takes forever",
  "I don't know where to promote",
  "I can't tell what channels worked",
  "ASO and store pages confuse me",
  "I'm juggling too many tools/tabs",
] as const;

export const INTERESTED_FEATURES = [
  "Timeline engine",
  "X scheduling + threads",
  "Post templates",
  "Link tracking / UTMs",
  "Dashboard analytics",
  "Landing page builder",
  "Community directory",
  "ASO lite tools",
  "Asset hub",
] as const;

export const waitlistSchema = z.object({
  fullName: z.string().min(1, "Full name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(ROLES, { errorMap: () => ({ message: "Please select your role" }) }),
  building: z.enum(BUILDING_OPTIONS, {
    errorMap: () => ({ message: "Please select what you're building" }),
  }),
  launchStage: z.enum(LAUNCH_STAGES, {
    errorMap: () => ({ message: "Please select your launch stage" }),
  }),
  biggestPain: z.enum(PAIN_POINTS, {
    errorMap: () => ({ message: "Please select your biggest pain point" }),
  }),
  interestedFeatures: z
    .array(z.enum(INTERESTED_FEATURES))
    .min(1, "Please select at least one feature"),
  launchDate: z.string().optional(),
  timezone: z.string().optional(),
  twitterHandle: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "You must agree to receive emails",
  }),
  // UTM / tracking
  ref: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
