"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Route, ShieldCheck, Menu, X, Activity } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const centerLinks = [
    { href: "/#features", label: "PRODUCT" },
    { href: "/#how-it-works", label: "HOW IT WORKS" },
    { href: "/journey", label: "JOURNEYS" },
    { href: "/dashboard", label: "INTELLIGENCE" },
  ];

  const secondaryNav = [
    { href: "/review", label: "REVIEW QUEUE" },
    { href: "/risk", label: "RISK SCREENING" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#101010] bg-[#F5F3EE]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="Reroute Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[#101010] bg-[#20C77A] text-sm font-black text-[#101010] shadow-[2px_2px_0px_#101010]">
            <Route size={16} strokeWidth={2.5} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-black tracking-tight text-[#101010]">REROUTE</span>
            <span className="mono rounded border border-[#101010] bg-white px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-[#101010]">
              ENGINE
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {centerLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`mono rounded-md px-3 py-1.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                  pathname === link.href
                    ? "border-2 border-[#101010] bg-[#101010] text-[#20C77A] shadow-[2px_2px_0px_#20C77A]"
                    : "text-[#333333] hover:border-2 hover:border-[#101010] hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Status Area */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Live Status Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-md border border-[#101010] bg-white px-2 py-1">
            <span className="h-2 w-2 rounded-full bg-[#20C77A] animate-pulse" />
            <span className="mono text-[10px] font-bold text-[#101010]">LIVE ENGINE</span>
          </div>

          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex mono rounded-md border-2 border-transparent px-3 py-1.5 text-xs font-bold text-[#101010] hover:border-[#101010] hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-black"
          >
            DASHBOARD
          </Link>

          {/* Primary CTA */}
          <Link
            href="/journey"
            className="brutal-btn inline-flex items-center gap-1.5 bg-[#20C77A] px-3.5 py-1.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d] focus-visible:ring-2 focus-visible:ring-black"
          >
            <span>START JOURNEY</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-md border-2 border-[#101010] bg-white text-[#101010]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-[#101010] bg-[#FAF9F5] p-4 md:hidden">
          <div className="flex flex-col space-y-2 mono text-xs font-bold">
            {centerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded border border-[#101010] bg-white p-2.5 text-[#101010] hover:bg-[#20C77A]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-300">
              <p className="text-[10px] uppercase text-neutral-500 mb-1">OPERATIONS</p>
              {secondaryNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded border border-dashed border-[#101010] bg-neutral-50 p-2 text-[#101010] mb-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
