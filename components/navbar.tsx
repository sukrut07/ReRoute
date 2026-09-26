"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Route, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const centerLinks = [
    { href: "/#product", label: "PRODUCT" },
    { href: "/#how-it-works", label: "HOW IT WORKS" },
    { href: "/journey", label: "JOURNEYS" },
    { href: "/risk", label: "INTELLIGENCE" },
    { href: "/dashboard", label: "DASHBOARD" },
  ];

  const secondaryNav = [
    { href: "/review", label: "HUMAN REVIEW" },
    { href: "/risk", label: "RISK SCREENING" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#111111] bg-[#F7F6F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="ReRoute Home"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[#111111] bg-[#20C979] text-[#111111] shadow-[2px_2px_0px_#111111]">
            <Route size={14} strokeWidth={2.5} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-black tracking-tight text-[#111111]">REROUTE</span>
            <span className="mono rounded border border-[#111111] bg-white px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-[#111111]">
              ENGINE
            </span>
          </div>
        </Link>

        {/* Center Navigation Links with Green Active Indicator Dot */}
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
                className={`mono relative rounded-md px-3 py-1.5 text-xs font-bold transition-colors hover:text-[#111111] ${
                  isActive
                    ? "text-[#111111]"
                    : "text-[#666666] hover:bg-black/5"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#20C979]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Status Area */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Live Status Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-md border border-[#111111] bg-white px-2.5 py-1 shadow-[1px_1px_0px_#111111]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#20C979] animate-pulse" />
            <span className="mono text-[10px] font-bold tracking-wider text-[#111111]">LIVE ENGINE</span>
          </div>

          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex mono rounded-md px-2.5 py-1 text-xs font-bold text-[#666666] hover:text-[#111111] transition-colors"
          >
            DASHBOARD
          </Link>

          {/* Primary CTA */}
          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#111111] bg-[#20C979] px-3.5 py-1.5 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111]"
          >
            <span>START JOURNEY</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-7 w-7 items-center justify-center rounded-md border border-[#111111] bg-white text-[#111111]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#111111] bg-[#FAF9F6] p-4 md:hidden">
          <div className="flex flex-col space-y-2 mono text-xs font-bold">
            {centerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded border border-[#111111] bg-white p-2 text-[#111111] hover:bg-[#DDF8EA]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-300">
              <p className="text-[10px] uppercase text-[#888888] mb-1">OPERATIONS</p>
              {secondaryNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded border border-dashed border-[#111111] bg-neutral-50 p-2 text-[#111111] mb-1"
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
