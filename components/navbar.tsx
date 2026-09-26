"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Route, ShieldAlert, Users, LayoutDashboard } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Overview", icon: null },
    { href: "/journey", label: "Customer Journey", icon: Route, badge: "DEMO" },
    { href: "/dashboard", label: "Journey Intelligence", icon: LayoutDashboard },
    { href: "/risk", label: "Risk Screening", icon: ShieldAlert },
    { href: "/review", label: "Human Review", icon: Users, badge: "3" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-[#f5f5f0]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:-translate-y-0.5">
          <div className="brutal-border flex h-9 w-9 items-center justify-center bg-[#54e38e] text-base font-black shadow-[2px_2px_0px_#101010]">
            R
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-[#101010]">REROUTE</span>
              <span className="mono rounded border border-black bg-[#54e38e] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                ENGINE
              </span>
            </div>
            <p className="mono -mt-1 hidden text-[10px] text-[#666] sm:block">
              Don&apos;t restart. Reroute.
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="desktop-nav flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mono relative flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? "border-2 border-black bg-black text-[#54e38e] shadow-[2px_2px_0px_#54e38e]"
                    : "text-[#222] hover:border-2 hover:border-black hover:bg-white"
                }`}
              >
                {Icon && <Icon size={14} className={isActive ? "text-[#54e38e]" : "text-black"} />}
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`ml-1 rounded px-1 py-0.2 text-[9px] font-black ${
                      isActive
                        ? "bg-[#54e38e] text-black"
                        : "border border-black bg-[#ffd166] text-black"
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/journey"
            className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-4 py-2 text-xs font-black text-black hover:bg-[#40d27c]"
          >
            <span>START JOURNEY</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
