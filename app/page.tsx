import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  ShieldCheck,
  TriangleAlert,
  Route,
  BarChart3,
  HelpCircle,
  Sparkles,
  Users,
  ShieldAlert,
  Clock,
  Layers,
  CheckCircle2,
  FileSearch,
  Scale,
  BrainCircuit,
  RotateCcw,
} from "lucide-react";
import { InteractiveShell } from "@/components/interactive-shell";
import { Navbar } from "@/components/navbar";

const featureTree = [
  {
    category: "CUSTOMER GOAL",
    color: "bg-[#e7f9ee]",
    features: [
      {
        num: "01",
        title: "Goal-Based Journey",
        desc: "State customer intent in natural language; Reroute automatically orchestrates the required financial workflow.",
        icon: Sparkles,
      },
      {
        num: "02",
        title: "Journey Memory",
        desc: "Remembers past verified state and uploaded evidence across sessions so users never restart from scratch.",
        icon: RotateCcw,
      },
    ],
  },
  {
    category: "INTELLIGENCE LAYER",
    color: "bg-[#fff0b8]",
    features: [
      {
        num: "03",
        title: "Document Intelligence",
        desc: "OCR and Vision models extract itemized invoices, clinical discharge summaries, and identity numbers with confidence metrics.",
        icon: FileSearch,
      },
      {
        num: "04",
        title: "Verification & Evidence",
        desc: "Automated cross-check across policy schedules, hospital bills, and government ID cards catches discrepancies.",
        icon: Scale,
      },
      {
        num: "05",
        title: "Risk & AML Signals",
        desc: "Transparent, explainable checks for duplicate documents, claim amount anomalies, and identity variance.",
        icon: ShieldAlert,
      },
    ],
  },
  {
    category: "SAFETY & TRUST",
    color: "bg-[#bcd8ff]",
    features: [
      {
        num: "06",
        title: "Dynamic Rerouting",
        desc: "Isolates the blocking discrepancy and dynamically routes to the exact safe action needed to continue.",
        icon: Route,
      },
      {
        num: "07",
        title: "Explainable AI",
        desc: "Every AI prompt exposes its rationale, policy citations, and confidence scores via plain-language explainers.",
        icon: BrainCircuit,
      },
      {
        num: "08",
        title: "Human-in-the-Loop",
        desc: "Pre-assembles structured review dossiers for human adjudicators—zero autonomous financial approval.",
        icon: Users,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f0] text-[#101010]">
      <InteractiveShell />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pt-16">
        <div>
          <div className="mono mb-6 inline-flex items-center gap-2 border-2 border-black bg-[#54e38e] px-3 py-1.5 text-xs font-black uppercase text-black shadow-[2px_2px_0px_#101010]">
            <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
            AI FINANCIAL JOURNEY ENGINE
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl">
            Financial journeys shouldn&apos;t feel like a maze.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4e4e4e]">
            Reroute understands customer intent, verifies evidence across documents, catches blocking discrepancies, and dynamically guides users to the next safe action.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/journey"
              className="brutal-btn inline-flex items-center gap-3 bg-[#54e38e] px-6 py-4 text-sm font-black text-black hover:bg-[#40d27c]"
            >
              <span>START A JOURNEY</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="#flow"
              className="brutal-btn inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-bold text-black hover:bg-neutral-100"
            >
              SEE HOW REROUTE WORKS
            </a>
          </div>

          {/* Interactive route ribbon */}
          <div className="mt-10 border-2 border-black bg-white p-4 shadow-[3px_3px_0px_#101010]">
            <p className="mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              THE CORE REROUTE PIPELINE
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-black">
              <span className="border border-black bg-neutral-100 px-2 py-1">CUSTOMER GOAL</span>
              <span className="text-neutral-400">→</span>
              <span className="border border-black bg-neutral-100 px-2 py-1">UNDERSTAND</span>
              <span className="text-neutral-400">→</span>
              <span className="border border-black bg-neutral-100 px-2 py-1">VERIFY</span>
              <span className="text-neutral-400">→</span>
              <span className="border-2 border-black bg-[#54e38e] px-2 py-1 text-black">
                REROUTE
              </span>
              <span className="text-neutral-400">→</span>
              <span className="border border-black bg-black px-2 py-1 text-white">COMPLETE</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Product Preview Mockup */}
        <div id="journey-preview" className="brutal-border brutal-shadow self-center bg-[#fffef8] p-6">
          <div className="mono flex items-center justify-between border-b-2 border-black pb-4 text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#54e38e]" />
              <span>LIVE JOURNEY PREVIEW</span>
            </div>
            <span className="border border-black bg-black px-2 py-0.5 text-white">CASE #R-1024</span>
          </div>

          <div className="py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="mono text-xs text-neutral-500">IDENTIFIED INTENT</p>
                <h2 className="mt-1 text-2xl font-black text-[#101010]">Health Insurance Claim</h2>
                <p className="mono text-xs text-neutral-600">Claimant: Sukrut Dusane · ₹84,500</p>
              </div>
              <div className="border-2 border-black bg-[#54e38e] px-3.5 py-1.5 text-lg font-black text-black">
                72%
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-5 space-y-2.5 text-xs font-bold">
              <div className="flex items-center gap-2.5 border-2 border-black bg-[#e7f9ee] p-2.5">
                <Check size={16} className="text-emerald-700" />
                <span>Policy Schedule POL-2026-1024 verified</span>
              </div>
              <div className="flex items-center gap-2.5 border-2 border-black bg-[#e7f9ee] p-2.5">
                <Check size={16} className="text-emerald-700" />
                <span>Identity documents (Aadhaar) verified</span>
              </div>
              <div className="flex items-center gap-2.5 border-2 border-black bg-[#e7f9ee] p-2.5">
                <Check size={16} className="text-emerald-700" />
                <span>Hospital billing desk invoice extracted</span>
              </div>

              {/* Reroute Trigger Card */}
              <div className="border-2 border-amber-600 bg-[#fff0b8] p-4 text-black shadow-[3px_3px_0px_#d97706]">
                <div className="flex items-start gap-2.5">
                  <TriangleAlert className="mt-0.5 shrink-0 text-amber-700" size={18} />
                  <div>
                    <span className="mono text-[10px] font-black uppercase text-amber-950">
                      REROUTE ACTION REQUIRED
                    </span>
                    <p className="text-sm font-black">Date of birth differs between two documents</p>
                    <p className="mt-0.5 text-xs text-neutral-700">
                      Policy records 14/07/1998, but Hospital Bill records 17/07/1998.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="mono text-[10px] font-bold text-neutral-600">
                    No restart needed · In-place recovery
                  </span>
                  <Link
                    href="/journey"
                    className="brutal-btn bg-black px-4 py-2 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
                  >
                    RESOLVE ISSUE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reroute? Problem Section */}
      <section className="relative z-10 border-t-2 border-black bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mono text-xs font-black uppercase text-neutral-500">
              THE STRUCTURAL PROBLEM
            </span>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#101010] sm:text-5xl">
              &ldquo;The problem isn&apos;t the destination. It&apos;s getting stuck along the way.&rdquo;
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Financial products are built around internal systems and paper forms. When a single discrepancy happens, customers are forced to restart or wait indefinitely in opaque review queues.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="brutal-border bg-[#fffef8] p-6">
              <div className="mono flex h-8 w-8 items-center justify-center border-2 border-black bg-[#bcd8ff] font-black">
                01
              </div>
              <h3 className="mt-4 text-xl font-black text-[#101010]">Complex Processes</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Multiple forms, exclusions, waiting periods, and multi-tier verification stages overwhelm users.
              </p>
            </div>

            <div className="brutal-border bg-[#fffef8] p-6">
              <div className="mono flex h-8 w-8 items-center justify-center border-2 border-black bg-[#ffd166] font-black">
                02
              </div>
              <h3 className="mt-4 text-xl font-black text-[#101010]">Customer Drop-offs</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Traditional portals report &ldquo;Application Incomplete&rdquo; with no guidance, causing 38%+ of users to abandon valid claims.
              </p>
            </div>

            <div className="brutal-border bg-[#fffef8] p-6">
              <div className="mono flex h-8 w-8 items-center justify-center border-2 border-black bg-[#ff5c5c] text-white font-black">
                03
              </div>
              <h3 className="mt-4 text-xl font-black text-[#101010]">Mismatched Evidence</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                A single typo in Date of Birth or patient name halts progress, requiring manual customer support intervention.
              </p>
            </div>

            <div className="brutal-border bg-[#fffef8] p-6">
              <div className="mono flex h-8 w-8 items-center justify-center border-2 border-black bg-[#54e38e] font-black">
                04
              </div>
              <h3 className="mt-4 text-xl font-black text-[#101010]">Lack of Guidance</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Customers don&apos;t know what specific document is missing or why it was requested in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Loop Comparison Section */}
      <section id="flow" className="relative z-10 border-t-2 border-black bg-black px-6 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono text-xs font-black tracking-widest text-[#54e38e]">
                THE CORE DIFFERENTIATOR
              </p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">
                When something goes wrong, don&apos;t start over.
              </h2>
            </div>
            <Link
              href="/journey"
              className="brutal-btn inline-flex items-center gap-2 bg-[#54e38e] px-5 py-3 text-xs font-black text-black hover:bg-[#40d27c]"
            >
              <span>EXPERIENCE REROUTE DEMO</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Traditional path */}
            <div className="border-2 border-neutral-700 bg-neutral-900/80 p-6">
              <span className="mono text-xs font-black uppercase text-red-400">
                TRADITIONAL PORTAL
              </span>
              <h3 className="mt-2 text-xl font-black">Fragile Waterfall Workflow</h3>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="border border-neutral-700 bg-neutral-800 p-3 text-neutral-300">
                  Missing Information / Typo
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="border border-red-500 bg-red-950/60 p-3 text-red-300 font-bold">
                  &ldquo;Application Incomplete / Rejected&rdquo;
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="border border-neutral-700 bg-neutral-800 p-3 text-neutral-300">
                  Call Customer Helpline / Wait on Hold
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="border border-neutral-700 bg-neutral-800 p-3 text-neutral-400">
                  Restart from Step 1 (All progress lost)
                </div>
              </div>
            </div>

            {/* Reroute path */}
            <div className="border-2 border-[#54e38e] bg-neutral-950 p-6 shadow-[6px_6px_0px_#54e38e]">
              <span className="mono text-xs font-black uppercase text-[#54e38e]">
                THE REROUTE ENGINE
              </span>
              <h3 className="mt-2 text-xl font-black text-white">Dynamic Journey Orchestration</h3>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="border border-neutral-600 bg-neutral-900 p-3 text-neutral-300">
                  Missing Information / Typo Detected
                </div>
                <div className="text-center text-[#54e38e]">↓</div>
                <div className="border border-amber-400 bg-amber-950/70 p-3 text-amber-200 font-bold">
                  Understand the Issue & Isolate Blocker
                </div>
                <div className="text-center text-[#54e38e]">↓</div>
                <div className="border-2 border-[#54e38e] bg-[#54e38e] p-3 text-black font-black">
                  REROUTE TO EXACT SAFE NEXT ACTION
                </div>
                <div className="text-center text-[#54e38e]">↓</div>
                <div className="border border-emerald-400 bg-emerald-950/80 p-3 text-emerald-200 font-bold">
                  Re-verify Single Field & Continue Seamlessly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature Tree Section */}
      <section className="relative z-10 border-t-2 border-black bg-[#fffef8] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="mono text-xs font-black uppercase text-neutral-500">
              ORCHESTRATION ARCHITECTURE
            </span>
            <h2 className="mt-2 text-4xl font-black text-[#101010]">
              The Reroute Engine Architecture
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              All specialized capabilities feed directly into the central dynamic journey loop.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {featureTree.map((group) => (
              <div key={group.category} className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_#101010]">
                <div className="flex items-center gap-2 border-b-2 border-black pb-3">
                  <span className="mono text-xs font-black uppercase tracking-wider text-[#101010]">
                    {group.category}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={feat.num}
                        className="border border-neutral-300 bg-neutral-50 p-4 transition-all hover:border-black hover:bg-white"
                      >
                        <div className="flex items-center justify-between">
                          <span className="mono text-xs font-bold text-neutral-400">{feat.num}</span>
                          <Icon size={16} className="text-neutral-800" />
                        </div>
                        <h4 className="mt-3 text-base font-black text-[#101010]">{feat.title}</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{feat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Intelligence Teaser */}
      <section className="relative z-10 border-t-2 border-black bg-[#e7f9ee] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="mono mb-2 inline-flex items-center gap-1.5 border border-black bg-white px-2 py-0.5 text-xs font-black uppercase">
              <ShieldCheck size={14} className="text-emerald-700" />
              TRANSPARENT RISK SCREENING
            </div>
            <h2 className="text-3xl font-black text-[#101010] sm:text-4xl">
              Transparent signals, not black-box denials.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Reroute surfaces explainable synthetic risk signals—including DOB mismatches, duplicate documents, and claim amount variances—while routing elevated cases to human adjudicators.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/risk"
                className="brutal-btn inline-flex items-center gap-2 bg-black px-5 py-3 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
              >
                <span>OPEN RISK INTELLIGENCE</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/review"
                className="brutal-btn inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-bold text-black hover:bg-neutral-100"
              >
                <span>VIEW HUMAN REVIEW DOSSIERS</span>
              </Link>
            </div>
          </div>

          <div className="brutal-border brutal-shadow bg-white p-6">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="mono text-xs font-bold text-neutral-500">SAMPLE SCREENING / R-1024</span>
              <span className="mono border border-black bg-amber-300 px-2 py-0.5 text-[11px] font-black">
                MEDIUM RISK (42/100)
              </span>
            </div>
            <div className="mt-4 space-y-2 text-xs font-bold">
              <div className="flex items-center justify-between border p-2 bg-neutral-50">
                <span>Identity Consistency Check</span>
                <span className="mono text-amber-700">DOB Mismatch (+35)</span>
              </div>
              <div className="flex items-center justify-between border p-2 bg-neutral-50">
                <span>Claim Amount Variance</span>
                <span className="mono text-blue-700">Standard Tier-1 (+7)</span>
              </div>
              <div className="flex items-center justify-between border p-2 bg-neutral-50">
                <span>Duplicate Document Check</span>
                <span className="mono text-emerald-700">Zero matches (0)</span>
              </div>
            </div>
            <div className="mt-4 border-t pt-3 text-[11px] text-neutral-500">
              Disclaimer: Synthetic demonstration risk score — not a financial decision.
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative z-10 border-t-2 border-black bg-white px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mono mb-3 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-3 py-1 text-xs font-black uppercase">
            DON&apos;T RESTART. REROUTE.
          </div>
          <h2 className="text-4xl font-black text-[#101010] sm:text-5xl">
            Financial journeys should adapt to people, not the other way around.
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Complete financial journeys with less friction, clearer guidance, and smarter recovery from the unexpected.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/journey"
              className="brutal-btn inline-flex items-center gap-2 bg-[#54e38e] px-8 py-4 text-sm font-black text-black hover:bg-[#40d27c]"
            >
              <span>START A JOURNEY NOW</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/dashboard"
              className="brutal-btn inline-flex items-center gap-2 bg-black px-8 py-4 text-sm font-black text-white hover:bg-neutral-800"
            >
              <span>EXPLORE DASHBOARD</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-black bg-black px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center border border-white bg-[#54e38e] font-black text-black">
                R
              </div>
              <span className="text-lg font-black tracking-tight">REROUTE</span>
            </div>
            <p className="mono mt-1 text-xs text-neutral-400">
              When the journey gets stuck, Reroute gets you moving.
            </p>
          </div>

          <div className="mono flex flex-wrap gap-6 text-xs text-neutral-400">
            <Link href="/journey" className="hover:text-white">Customer Journey</Link>
            <Link href="/dashboard" className="hover:text-white">Journey Intelligence</Link>
            <Link href="/risk" className="hover:text-white">Risk Intelligence</Link>
            <Link href="/review" className="hover:text-white">Human Review Queue</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
