"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is App Launch OS for?",
    a: "Indie developers, solo founders, small teams, and anyone who builds apps or SaaS products and wants a structured, repeatable way to launch them. If you've ever shipped something and heard nothing but crickets, this is for you.",
  },
  {
    q: "How is this different from Notion templates or spreadsheets?",
    a: "Templates and spreadsheets are passive — you still have to fill them out, remember to update them, and manually pull everything together. App Launch OS is active: it tells you what to do next, auto-inserts UTMs, connects to X, generates your posts, and gives you a live dashboard. It's a system, not a document.",
  },
  {
    q: "Do I need to be launching on Product Hunt?",
    a: "No. App Launch OS is designed for any type of launch — App Store, Play Store, SaaS, indie communities, your own audience. Product Hunt is one of many channels you can use. The system works regardless of which platforms you target.",
  },
  {
    q: "Is this only for mobile apps?",
    a: "Not at all. It works for iOS apps, Android apps, web apps, SaaS products, games — any digital product you're shipping. The ASO features are mobile-specific, but everything else applies broadly.",
  },
  {
    q: "What does the X (Twitter) integration do exactly?",
    a: "You connect your X account, then compose posts directly inside App Launch OS — single tweets, launch threads, whatever you need. UTMs are auto-inserted, links go through your tracking layer, and you can schedule posts or publish immediately. Retry logic handles any failures automatically.",
  },
  {
    q: "Can I track results across multiple launches?",
    a: "Yes. Each project gets its own dashboard. You can see which channels drove clicks, what your conversion rate was, how your timeline progressed, and which posts performed best — all per-project.",
  },
  {
    q: "Is there a free tier or trial?",
    a: "Pricing isn't finalized yet — that's actually one of the things we'll decide based on waitlist feedback. Waitlist members will be the first to know and will get early access pricing. Join the waitlist to make sure you don't miss it.",
  },
  {
    q: "When does it launch?",
    a: "We're building in public and targeting an early access release soon. The more feedback we get from the waitlist, the better we can prioritize the right features for launch.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              Questions?
              <br />
              <span className="text-gradient">We've got answers.</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl border border-white/[0.08] px-5 py-0"
              >
                <AccordionTrigger className="text-left font-semibold text-sm py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-muted-foreground text-sm mt-10">
            More questions?{" "}
            <a
              href="mailto:hello@applauncos.com"
              className="text-blue-400 hover:underline"
            >
              Drop us a message
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
