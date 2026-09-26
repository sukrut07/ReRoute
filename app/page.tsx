import Link from "next/link";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Route,
  Sparkles,
  FileSearch,
  Scale,
  BrainCircuit,
  Users,
  BarChart3,
  ShieldCheck,
  Activity,
  ArrowDown,
} from "lucide-react";
import { InteractiveShell } from "@/components/interactive-shell";
import { Navbar } from "@/components/navbar";
import { LandingInteractiveSuite } from "@/components/landing-interactive-suite";

export default function Home() {
  const howItWorksSteps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "Parses customer intent from natural language input to identify the exact financial journey type and required criteria.",
    },
    {
      num: "02",
      title: "VERIFY",
      desc: "Extracts and cross-checks data points across submitted policy schedules, clinical invoices, and identity records.",
    },
    {
      num: "03",
      title: "DETECT",
      desc: "Flags discrepancies, missing reports, or variance thresholds deterministically without black-box rejections.",
    },
    {
      num: "04",
      title: "REROUTE",
      desc: "Isolates the blocking issue and guides the customer to the safest in-place action without restarting.",
    },
    {
      num: "05",
      title: "COMPLETE",
      desc: "Assembles structured, auditable evidence dossiers for authorized human claims officers.",
    },
  ];

  const intelligenceCapabilities = [
    {
      icon: Sparkles,
      title: "INTENT UNDERSTANDING",
      desc: "Understands what the customer is trying to accomplish and initializes the appropriate regulated workflow.",
    },
    {
      icon: FileSearch,
      title: "DOCUMENT INTELLIGENCE",
      desc: "Extracts and validates information across submitted documents with OCR confidence and bounding-box coordinates.",
    },
    {
      icon: Scale,
      title: "RISK DETECTION",
      desc: "Identifies inconsistencies, missing information and potential friction before passing to adjudicators.",
    },
    {
      icon: Route,
      title: "DYNAMIC REROUTING",
      desc: "Determines the next appropriate action instead of forcing the customer to restart from scratch.",
    },
  ];

  const problemCards = [
    {
      num: "01",
      title: "COMPLEX PROCESSES",
      desc: "Multi-tiered financial forms and exclusion clauses overwhelm claimants and applicants.",
    },
    {
      num: "02",
      title: "REPEATED DOCUMENT REQUESTS",
      desc: "Portals fail to explain document deficiencies, asking customers for the same paperwork repeatedly.",
    },
    {
      num: "03",
      title: "MISSING / CONFLICTING INFORMATION",
      desc: "A single mismatched digit or birthdate between two valid documents causes an abrupt failure.",
    },
    {
      num: "04",
      title: "CUSTOMER DROP-OFF",
      desc: "Over 38% of legitimate journeys are abandoned midway due to rigid waterfall architectures.",
    },
  ];

  const pipelineStages = [
    { label: "GOAL", active: false },
    { label: "VERIFY", active: false },
    { label: "DETECT", active: false },
    { label: "REROUTE", active: true },
    { label: "COMPLETE", active: false },
  ];

  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#111111] selection:bg-[#111111] selection:text-[#20C979]">
      <InteractiveShell />
      <Navbar />

      {/* Hero Section — 55% Left / 45% Right Layout */}
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

            {/* Section 14: Dynamic Journey Pipeline Component */}
            <div className="mt-10 rounded-lg border border-[#111111] bg-white p-3.5 shadow-[2px_2px_0px_#111111] max-w-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
                  DYNAMIC JOURNEY PIPELINE
                </span>
                <span className="mono text-[10px] font-bold text-[#20C979]">
                  STATE: DETERMINISTIC
                </span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 mono text-[11px] font-bold">
                {pipelineStages.map((stage, idx) => (
                  <div key={stage.label} className="flex items-center gap-1.5">
                    <span
                      className={`rounded border px-2 py-0.5 ${
                        stage.active
                          ? "border-[#111111] bg-[#20C979] text-[#111111] shadow-[1px_1px_0px_#111111]"
                          : "border-[#111111] bg-white text-[#666666]"
                      }`}
                    >
                      {stage.label}
                    </span>
                    {idx < pipelineStages.length - 1 && (
                      <span className="text-neutral-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (~45%): Compact Live Case Preview */}
          <div className="rounded-lg border-2 border-[#111111] bg-white p-5 shadow-[4px_4px_0px_#111111]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#111111] pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#20C979] animate-pulse" />
                <span className="mono text-[11px] font-black uppercase tracking-wider text-[#111111]">
                  LIVE CASE PREVIEW
                </span>
              </div>
              <span className="mono rounded border border-[#111111] bg-[#111111] px-2 py-0.5 text-[11px] font-bold text-white">
                CASE #R-1024
              </span>
            </div>

            {/* Case Info */}
            <div className="mt-3.5 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-black text-[#111111] tracking-tight">
                  HEALTH INSURANCE CLAIM
                </h2>
                <p className="mono text-xs text-[#666666] mt-0.5">
                  Sukrut Dusane · ₹84,500
                </p>
              </div>
              <div className="rounded border border-[#111111] bg-[#DDF8EA] px-2 py-1 text-xs font-black text-[#111111]">
                72% COMPLETE
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="mt-4 space-y-2 text-xs font-bold">
              <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
                <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
                <span className="text-[#111111]">Policy verified</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
                <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
                <span className="text-[#111111]">Identity verified</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
                <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
                <span className="text-[#111111]">Hospital document processed</span>
              </div>

              {/* Conflict Detection Card (Visual Focal Point) */}
              <div className="rounded border-2 border-[#F59E0B] bg-[#FEF3C7] p-3 text-[#111111]">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="mono text-[10px] font-black uppercase tracking-wider text-[#92400E]">
                      CONFLICT DETECTED
                    </span>
                    <p className="text-xs font-black text-[#111111]">
                      ! DOB mismatch detected
                    </p>
                    <div className="mono text-[11px] text-[#4B5563] mt-1 space-y-0.5">
                      <p>Policy record: <span className="font-bold text-[#111111]">14/07/1998</span></p>
                      <p>Hospital record: <span className="font-bold text-[#D9414B]">17/07/1998</span></p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#F59E0B]/30">
                  <span className="mono text-[10px] font-black uppercase text-[#92400E]">
                    REROUTE REQUIRED
                  </span>
                  <Link
                    href="/journey"
                    className="inline-flex items-center gap-1 rounded border border-[#111111] bg-[#111111] px-2.5 py-1 text-[11px] font-bold text-[#20C979] hover:bg-neutral-800"
                  >
                    <span>RESOLVE ISSUE</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15 & 16: HOW REROUTE WORKS & JOURNEY TIMELINE */}
      <section id="how-it-works" className="relative z-10 border-t border-[#111111] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
              WORKFLOW ARCHITECTURE
            </span>
            <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
              HOW REROUTE WORKS
            </h2>
            <p className="mt-2 text-sm text-[#666666]">
              A five-stage deterministic recovery loop designed to eliminate drops.
            </p>
          </div>

          {/* 5-Step Explanation */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorksSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-lg border border-[#111111] bg-[#FAF9F6] p-4 shadow-[2px_2px_0px_#111111] flex flex-col justify-between"
              >
                <div>
                  <span className="mono text-xs font-black text-[#888888]">{step.num}</span>
                  <h3 className="mt-2 text-sm font-black text-[#111111]">{step.title}</h3>
                  <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Flow Timeline Visualization */}
          <div className="mt-10 rounded-lg border border-[#111111] bg-[#FAF9F6] p-5 shadow-[2px_2px_0px_#111111]">
            <span className="mono text-[10px] font-black uppercase text-[#666666] block mb-3">
              JOURNEY TIMELINE EXECUTION
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2 mono text-xs font-bold">
              <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">CUSTOMER GOAL</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">DOCUMENTS</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">VERIFICATION</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#D97706] bg-[#FEF3C7] px-2.5 py-1 text-[#92400E]">RISK / CONFLICT</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#111111] bg-[#20C979] px-2.5 py-1 text-[#111111]">REROUTE</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">HUMAN REVIEW</span>
              <span className="text-[#111111]">↓</span>
              <span className="rounded border border-[#111111] bg-[#111111] px-2.5 py-1 text-white">RESOLUTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 17: Intelligence Capabilities */}
      <section id="features" className="relative z-10 border-t border-[#111111] bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
              CORE INTELLIGENCE
            </span>
            <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
              What ReRoute Actually Does
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {intelligenceCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-lg border border-[#111111] bg-white p-5 shadow-[3px_3px_0px_#111111]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2]">
                    <Icon size={16} className="text-[#111111]" />
                  </div>
                  <h3 className="mt-3 text-sm font-black text-[#111111]">{cap.title}</h3>
                  <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 18: Human-in-the-Loop Trust Block */}
      <section className="relative z-10 border-t border-[#111111] bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg border-2 border-[#111111] bg-[#FAF9F6] p-6 shadow-[3px_3px_0px_#111111]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#111111] pb-3">
              <div>
                <span className="mono text-[10px] font-black uppercase text-[#666666]">
                  RESPONSIBLE AI GOVERNANCE
                </span>
                <h3 className="text-xl font-black text-[#111111]">Human-in-the-Loop Oversight</h3>
              </div>
              <span className="mono rounded border border-[#111111] bg-white px-2 py-0.5 text-xs font-bold text-[#111111]">
                ZERO AUTONOMOUS APPROVALS
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 mono text-xs font-bold">
              <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
                AI DETECTS
              </div>
              <span className="text-[#111111]">→</span>
              <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
                AI EXPLAINS
              </div>
              <span className="text-[#111111]">→</span>
              <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
                HUMAN REVIEWS
              </div>
              <span className="text-[#111111]">→</span>
              <div className="rounded border border-[#111111] bg-[#20C979] px-3 py-1.5 text-[#111111]">
                HUMAN DECIDES
              </div>
            </div>

            <p className="mt-4 text-xs text-[#666666] leading-relaxed">
              AI assists with document extraction, discrepancy isolation, and route guidance. Authorized human officers remain solely responsible for financial adjudication and payout release.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Comparison Section */}
      <section className="relative z-10 border-t border-[#111111] bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
              THE STRUCTURAL FRICTION
            </span>
            <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
              Why Financial Journeys Break
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((p) => (
              <div
                key={p.num}
                className="rounded-lg border border-[#111111] bg-white p-5 shadow-[3px_3px_0px_#111111]"
              >
                <span className="mono text-xs font-bold text-[#888888]">{p.num}</span>
                <h3 className="mt-2 text-sm font-black text-[#111111]">{p.title}</h3>
                <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulator & ROI Calculator Suite */}
      <section className="relative z-10 border-t border-[#111111] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <LandingInteractiveSuite />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#111111] bg-[#111111] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded border border-[#111111] bg-[#20C979] text-xs font-black text-[#111111]">
                  R
                </div>
                <span className="text-base font-black tracking-tight">REROUTE</span>
              </div>
              <p className="mono mt-2 text-xs text-neutral-400">
                AI Financial Journey Engine
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                Don&apos;t restart. Reroute.
              </p>
            </div>

            <div>
              <p className="mono text-xs font-black uppercase text-[#20C979]">PRODUCT</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
                <li><Link href="/journey" className="hover:text-white">Customer Journey</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Journey Intelligence</Link></li>
                <li><Link href="/risk" className="hover:text-white">Risk Intelligence</Link></li>
              </ul>
            </div>

            <div>
              <p className="mono text-xs font-black uppercase text-[#20C979]">OPERATIONS</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
                <li><Link href="/review" className="hover:text-white">Human Review Queue</Link></li>
                <li><a href="https://github.com/sukrut07/ReRoute/tree/main/docs" target="_blank" rel="noreferrer" className="hover:text-white">System Documentation</a></li>
                <li><a href="https://github.com/sukrut07/ReRoute/blob/main/docs/ARCHITECTURE.md" target="_blank" rel="noreferrer" className="hover:text-white">Architecture</a></li>
              </ul>
            </div>

            <div>
              <p className="mono text-xs font-black uppercase text-[#20C979]">SYSTEM STATUS</p>
              <div className="mt-3 space-y-2 text-xs mono text-neutral-400">
                <p className="flex items-center gap-1.5 text-neutral-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#20C979]" />
                  <span>ALL ENGINES NORMAL</span>
                </p>
                <p>LATENCY: 120ms</p>
                <p>RECOVERY: 89.2%</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-neutral-400">
            <p>
              DISCLAIMER: Synthetic demonstration data. AI assists with journey orchestration and does not independently execute regulated financial decisions.
            </p>
            <p className="mono">
              SUKRUT07 // PAYTM BUILD FOR INDIA
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
