"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ROLES,
  BUILDING_OPTIONS,
  LAUNCH_STAGES,
  PAIN_POINTS,
  INTERESTED_FEATURES,
  waitlistSchema,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

// ─── Encode object → application/x-www-form-urlencoded ───────────────────────
function encode(data: Record<string, string | string[] | boolean>): string {
  const parts: string[] = [];
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      for (const v of value) {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
      }
    } else {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      );
    }
  }
  return parts.join("&");
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-red-400 mt-1" role="alert">
      {message}
    </p>
  );
}

const emptyValues = {
  fullName: "",
  email: "",
  role: "" as string,
  building: "" as string,
  launchStage: "" as string,
  biggestPain: "" as string,
  interestedFeatures: [] as string[],
  launchDate: "",
  twitterHandle: "",
  timezone: "",
  consent: false,
  // hidden tracking
  ref: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
};

export function WaitlistForm() {
  const router = useRouter();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // Detect timezone + UTM params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setValues((prev) => ({
      ...prev,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ref: params.get("ref") ?? "",
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
    }));
  }, []);

  const set = (field: string, value: string | boolean | string[]) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const toggleFeature = (f: string) =>
    setValues((prev) => ({
      ...prev,
      interestedFeatures: prev.interestedFeatures.includes(f)
        ? prev.interestedFeatures.filter((x) => x !== f)
        : [...prev.interestedFeatures, f],
    }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Client-side validation
    const result = waitlistSchema.safeParse({
      ...values,
      // Cast string selects to their enum types for Zod
      role: values.role,
      building: values.building,
      launchStage: values.launchStage,
      biggestPain: values.biggestPain,
    });

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      const firstErrors: Record<string, string> = {};
      for (const [k, v] of Object.entries(flat)) {
        if (v?.[0]) firstErrors[k] = v[0];
      }
      setErrors(firstErrors);
      // Scroll to first error
      const el = document.querySelector("[data-has-error]");
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "waitlist",
          "bot-field": "", // honeypot
          ...values,
          consent: String(values.consent),
          interestedFeatures: values.interestedFeatures,
        }),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      router.push(`/thanks?email=${encodeURIComponent(values.email)}`);
    } catch (err) {
      console.error("Netlify Forms submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 lg:py-32 relative"
      aria-labelledby="waitlist-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Early access
            </p>
            <h2
              id="waitlist-heading"
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              Get early access.
              <br />
              <span className="text-gradient">Shape what we build.</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-lg mx-auto">
              Takes 2 minutes. Your answers help us prioritize the features
              that matter most to you.
            </p>
          </div>

          {status === "error" && (
            <div
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              role="alert"
            >
              Something went wrong. Please try again in a moment.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            name="waitlist"
            className="glass-card rounded-2xl p-6 md:p-8 space-y-6"
            noValidate
          >
            {/* Honeypot — hidden from real users, catches bots */}
            <div className="hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            {/* ── Name + Email ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="space-y-1.5"
                data-has-error={errors.fullName ? "" : undefined}
              >
                <Label htmlFor="fullName">
                  Full name{" "}
                  <span className="text-red-400" aria-hidden="true">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Ada Lovelace"
                  value={values.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  aria-required="true"
                  className={cn(errors.fullName && "border-red-500/50")}
                />
                <FieldError message={errors.fullName} />
              </div>
              <div
                className="space-y-1.5"
                data-has-error={errors.email ? "" : undefined}
              >
                <Label htmlFor="email">
                  Email{" "}
                  <span className="text-red-400" aria-hidden="true">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ada@example.com"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-required="true"
                  className={cn(errors.email && "border-red-500/50")}
                />
                <FieldError message={errors.email} />
              </div>
            </div>

            {/* ── Role + Building ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="space-y-1.5"
                data-has-error={errors.role ? "" : undefined}
              >
                <Label htmlFor="role-trigger">
                  I am a…{" "}
                  <span className="text-red-400" aria-hidden="true">*</span>
                </Label>
                <Select
                  value={values.role}
                  onValueChange={(v) => set("role", v)}
                >
                  <SelectTrigger
                    id="role-trigger"
                    className={cn(errors.role && "border-red-500/50")}
                    aria-required="true"
                  >
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.role} />
              </div>
              <div
                className="space-y-1.5"
                data-has-error={errors.building ? "" : undefined}
              >
                <Label htmlFor="building-trigger">
                  Building a…{" "}
                  <span className="text-red-400" aria-hidden="true">*</span>
                </Label>
                <Select
                  value={values.building}
                  onValueChange={(v) => set("building", v)}
                >
                  <SelectTrigger
                    id="building-trigger"
                    className={cn(errors.building && "border-red-500/50")}
                    aria-required="true"
                  >
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUILDING_OPTIONS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.building} />
              </div>
            </div>

            {/* ── Launch stage ── */}
            <div
              className="space-y-1.5"
              data-has-error={errors.launchStage ? "" : undefined}
            >
              <Label htmlFor="launchStage-trigger">
                Launch journey stage{" "}
                <span className="text-red-400" aria-hidden="true">*</span>
              </Label>
              <Select
                value={values.launchStage}
                onValueChange={(v) => set("launchStage", v)}
              >
                <SelectTrigger
                  id="launchStage-trigger"
                  className={cn(errors.launchStage && "border-red-500/50")}
                  aria-required="true"
                >
                  <SelectValue placeholder="Where are you right now?" />
                </SelectTrigger>
                <SelectContent>
                  {LAUNCH_STAGES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.launchStage} />
            </div>

            {/* ── Biggest pain ── */}
            <div
              className="space-y-1.5"
              data-has-error={errors.biggestPain ? "" : undefined}
            >
              <Label htmlFor="biggestPain-trigger">
                Biggest launch pain?{" "}
                <span className="text-red-400" aria-hidden="true">*</span>
              </Label>
              <Select
                value={values.biggestPain}
                onValueChange={(v) => set("biggestPain", v)}
              >
                <SelectTrigger
                  id="biggestPain-trigger"
                  className={cn(errors.biggestPain && "border-red-500/50")}
                  aria-required="true"
                >
                  <SelectValue placeholder="What frustrates you most?" />
                </SelectTrigger>
                <SelectContent>
                  {PAIN_POINTS.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.biggestPain} />
            </div>

            {/* ── Interested features (multi-select) ── */}
            <div
              className="space-y-2"
              data-has-error={errors.interestedFeatures ? "" : undefined}
            >
              <Label>
                Features you care about most{" "}
                <span className="text-red-400" aria-hidden="true">*</span>
                <span className="text-muted-foreground text-xs font-normal ml-1">
                  (pick all that apply)
                </span>
              </Label>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                role="group"
                aria-label="Select interested features"
              >
                {INTERESTED_FEATURES.map((opt) => {
                  const checked = values.interestedFeatures.includes(opt);
                  return (
                    <label
                      key={opt}
                      className={cn(
                        "flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer text-sm transition-all select-none",
                        checked
                          ? "bg-blue-600/10 border-blue-500/40 text-foreground"
                          : "bg-white/[0.02] border-white/[0.06] text-muted-foreground hover:bg-white/[0.05] hover:border-white/10"
                      )}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleFeature(opt)}
                        aria-label={opt}
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
              <FieldError message={errors.interestedFeatures} />
            </div>

            {/* ── Optional fields ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="launchDate">
                  Expected launch date{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="launchDate"
                  name="launchDate"
                  type="date"
                  value={values.launchDate}
                  onChange={(e) => set("launchDate", e.target.value)}
                  className="[color-scheme:dark]"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="twitterHandle">
                  X / Twitter handle{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="twitterHandle"
                  name="twitterHandle"
                  placeholder="@yourhandle"
                  value={values.twitterHandle}
                  onChange={(e) => set("twitterHandle", e.target.value)}
                />
              </div>
            </div>

            {/* ── Consent ── */}
            <div
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border transition-colors",
                errors.consent
                  ? "bg-red-500/5 border-red-500/30"
                  : "bg-white/[0.02] border-white/[0.06]"
              )}
              data-has-error={errors.consent ? "" : undefined}
            >
              <Checkbox
                id="consent"
                checked={values.consent}
                onCheckedChange={(checked) =>
                  set("consent", checked === true)
                }
                className="mt-0.5"
              />
              <div>
                <label
                  htmlFor="consent"
                  className="text-sm cursor-pointer leading-relaxed"
                >
                  OK to email me about early access, product updates, and
                  launch tips. I can unsubscribe anytime.
                </label>
                <FieldError message={errors.consent} />
              </div>
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={status === "loading"}
              className="w-full glow-blue-sm"
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Joining waitlist…
                </>
              ) : (
                <>
                  <Rocket className="h-4 w-4" />
                  Join the waitlist
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
