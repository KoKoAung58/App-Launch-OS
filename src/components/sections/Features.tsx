"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban, CalendarClock, Archive, Twitter, FileText,
  Link2, BarChart3, Globe, Compass, Search, Settings2, ChevronDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featureGroups = [
  {
    id: "projects",
    icon: FolderKanban,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    title: "Launch Projects",
    tagline: "Every launch in its own cockpit",
    bullets: [
      "Multiple projects — manage iOS, SaaS, games side by side",
      "App info: name, tagline, description, links, category",
      "Audience + launch date + timezone",
      "Status tracking: Planning → Pre-launch → Launching → Done",
    ],
  },
  {
    id: "timeline",
    icon: CalendarClock,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    title: "Launch Timeline Engine",
    tagline: "An opinionated playbook that does the thinking for you",
    bullets: [
      "3 phases: Pre-Launch / Launch Day / Post-Launch",
      "Editable tasks, due dates, and progress tracking",
      '"Next Best Action" — always know what to do next',
      'Templates (PH comment, launch thread, etc.) + smart AI suggestions coming soon',
    ],
    comingSoon: "Smart AI suggestions",
  },
  {
    id: "assets",
    icon: Archive,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    title: "Asset Hub",
    tagline: "One place, no 10-tab chaos",
    bullets: [
      "Store icon, screenshots, demo video, press kit zip",
      "Feature list, FAQs, elevator pitch — all in one place",
      "Copy snippets library: taglines, descriptions, bios",
      "Grab assets in seconds instead of hunting through Google Drive",
    ],
  },
  {
    id: "distribution",
    icon: Twitter,
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    title: "Distribution Layer",
    tagline: "Post smart, not hard",
    bullets: [
      "X integration: connect, compose, schedule, thread builder",
      "Auto UTM insertion + store tweet URL builder",
      "Retry failed posts automatically",
      "280-char splitting + hook generator — coming soon",
    ],
    comingSoon: "Hook generator",
  },
  {
    id: "posts",
    icon: FileText,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    title: "Post Generator",
    tagline: "Template-driven copy in seconds",
    bullets: [
      "9 post types: launch thread, build-in-public, problem-solution, milestone, teaser, countdown, failure story...",
      "3 variations per template — pick the one that clicks",
      "Edit + copy to clipboard in one click",
      "Built around proven indie dev launch formats",
    ],
  },
  {
    id: "tracking",
    icon: Link2,
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    title: "Link Tracking",
    tagline: "Know what actually drove traffic",
    bullets: [
      "Short links /l/slug — shareable + trackable",
      "Auto UTM tagging built in",
      "Click analytics: total, per post, per day, by referrer",
      "Channel-level comparison to double down on what works",
    ],
  },
  {
    id: "dashboard",
    icon: BarChart3,
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    title: "Performance Dashboard",
    tagline: "Your launch, at a glance",
    bullets: [
      "Posts published, clicks per channel, conversion rate",
      "Timeline progress + top performing post",
      "Waitlist conversion tracking",
      "Graphs + channel comparison — coming soon",
    ],
    comingSoon: "Graphs + channel comparison",
  },
  {
    id: "landing",
    icon: Globe,
    iconColor: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    title: "Landing + Waitlist",
    tagline: "Optional but powerful",
    bullets: [
      "Simple hosted landing page on a subdomain",
      "Email capture + CTA + social proof",
      "Waitlist system with CSV export",
      "Referral system coming soon",
    ],
    comingSoon: "Referral system",
  },
  {
    id: "discovery",
    icon: Compass,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    title: "Discovery Assistant",
    tagline: "Find where your users actually hang out",
    bullets: [
      "Community directory: subreddits, IndieHackers, Discord, Slack, X communities",
      "Launch directories and submission lists",
      "Filters by SaaS / Mobile / AI / Productivity / Indie dev",
      "Never miss a relevant community again",
    ],
  },
  {
    id: "aso",
    icon: Search,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    title: "ASO Lite",
    tagline: "Nail your App Store + Play Store presence",
    bullets: [
      "Title/subtitle length checker with live preview",
      "Keyword suggestions (basic) for discoverability",
      "Competitor manual input for gap analysis",
      "Store listing preview mockup — see it before you submit",
    ],
  },
  {
    id: "ops",
    icon: Settings2,
    iconColor: "text-slate-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/20",
    title: "Operational",
    tagline: "The engine room — always running",
    bullets: [
      "Scheduling engine: queue, retry, timezone-aware, dedup",
      "Draft system: save, duplicate, convert tweet→thread",
      "Archive older drafts, never lose a post idea",
      "Project templates for SaaS / iOS / AI / build-in-public",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.03, 0.26, 1] } },
};

// Show first 4 groups, rest behind accordion
const INITIAL_VISIBLE = 4;

export function Features() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? featureGroups : featureGroups.slice(0, INITIAL_VISIBLE);

  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Everything you need
            </p>
            <h2
              id="features-heading"
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              Your launch stack,
              <br />
              <span className="text-gradient">finally unified.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Stop bouncing between Notion, Buffer, Linktree, Google Sheets,
              and ten browser tabs. It's all here.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <AnimatePresence>
              {visible.map((group) => (
                <motion.div
                  key={group.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`rounded-2xl border ${group.borderColor} p-6 ${group.bgColor} relative group hover:border-opacity-60 transition-all`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg bg-white/5 border border-white/10`}
                    >
                      <group.icon className={`h-4 w-4 ${group.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {group.tagline}
                      </p>
                    </div>
                    {group.comingSoon && (
                      <Badge variant="yellow" className="ml-auto text-[10px] whitespace-nowrap">
                        + Coming soon
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-1.5" role="list">
                    {group.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${group.bgColor
                            .replace("bg-", "bg-")
                            .replace("/10", "/80")} shrink-0`}
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* All features accordion toggle */}
          <motion.div variants={fadeUp} className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              aria-expanded={expanded}
              aria-controls="all-features"
            >
              {expanded ? "Show fewer features" : `See all ${featureGroups.length} feature categories`}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
