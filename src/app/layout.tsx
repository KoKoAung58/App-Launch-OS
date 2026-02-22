import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://applauncos.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "App Launch OS — The All-in-One Launch Cockpit for Indie Devs",
    template: "%s | App Launch OS",
  },
  description:
    "Stop shipping to crickets. App Launch OS turns launch chaos into a system — timeline, assets, posts, tracking, and a dashboard. Built for indie devs.",
  keywords: [
    "app launch",
    "indie dev",
    "product launch",
    "launch checklist",
    "product hunt",
    "launch system",
    "saas launch",
    "indie hacker",
    "launch strategy",
    "UTM tracking",
  ],
  authors: [{ name: "App Launch OS" }],
  creator: "App Launch OS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "App Launch OS",
    title: "App Launch OS — Stop Shipping to Crickets",
    description:
      "The all-in-one launch cockpit that turns chaos into a launch system — timeline, assets, posting, tracking, and dashboards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "App Launch OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Launch OS — Stop Shipping to Crickets",
    description:
      "The all-in-one launch cockpit for indie devs. Timeline, assets, posts, tracking, dashboards.",
    images: ["/og-image.png"],
    creator: "@applauncos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Analytics placeholder — swap src for PostHog, Plausible, etc. */}
        {/* <script defer data-domain="applauncos.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
