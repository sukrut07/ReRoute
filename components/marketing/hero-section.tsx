import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { JourneyPipeline } from "./journey-pipeline";
import { LiveCasePreview } from "./live-case-preview";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] items-start">
        {/* Left Column: Eyebrow, Refined Headline, Description, CTAs, Pipeline */}
        <div className="flex flex-col justify-center">
          {/* Hero Eyebrow (Technical System Label) */}
          <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 shadow-[1px_1px_0px_#111111]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
            <span className="mono text-[10px] font-black uppercase tracking-wider text-[#111111]">
              AI FINANCIAL JOURNEY ENGINE
            </span>
          </div>

          {/* Refined Headline — Sentence case / Balanced height */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.04] tracking-tight text-[#111111]">
            Financial journeys shouldn&apos;t feel like a maze.
          </h1>

          {/* Short Description — max-width ~600px */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#666666] max-w-[580px]">
            Reroute understands the customer’s goal, verifies evidence, detects friction and dynamically guides them to the next safe action.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 rounded-md border border-[#111111] bg-[#20C979] px-5 py-3 text-xs font-black text-[#111111] shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111]"
            >
              <span>START A JOURNEY</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-[#111111] bg-white px-5 py-3 text-xs font-bold text-[#111111] shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111]"
            >
              <span>SEE HOW IT WORKS</span>
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Dynamic Journey Pipeline Component */}
          <div className="mt-9">
            <JourneyPipeline />
          </div>
        </div>

        {/* Right Column (~45%): Compact Live Case Preview */}
        <div>
          <LiveCasePreview />
        </div>
      </div>
    </section>
  );
}
