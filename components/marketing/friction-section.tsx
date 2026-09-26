import React from "react";
import { LandingInteractiveSuite } from "@/components/landing-interactive-suite";

export function FrictionSection() {
  return (
    <section className="relative z-10 border-t border-[#111111] bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <LandingInteractiveSuite />
      </div>
    </section>
  );
}
