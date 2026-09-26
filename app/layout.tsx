import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Reroute — AI Financial Journey Engine",
  description:
    "AI-powered financial journeys that dynamically guide customers to completion. Don't restart. Reroute.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Reroute — AI Financial Journey Engine",
    description:
      "Dynamic financial journey orchestration: Goal → Verify → Detect Conflict → Reroute → Resolve → Complete.",
    url: "https://reroute.ai",
    siteName: "Reroute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reroute — AI Financial Journey Engine",
    description: "Don't restart. Reroute.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#F5F3EE] text-[#101010]">
        {children}
      </body>
    </html>
  );
}
