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
  ShieldAlert,
  ArrowUpRight,
  CornerDownRight,
} from "lucide-react";
import { InteractiveShell } from "@/components/interactive-shell";
import { Navbar } from "@/components/navbar";
import { LandingInteractiveSuite } from "@/components/landing-interactive-suite";

export default function Home() {
  const features = [
    {
      num: "01",
      icon: Sparkles,
      title: "Goal-Based Journey",
      desc: "Understands user intent directly in natural language and instantiates the exact multi-step financial process.",
    },
    {
      num: "02",
      icon: FileSearch,
      title: "Document Intelligence",
      desc: "Extracts clinical, identity, and billing data with bounding box grounding and field confidence scores.",
    },
    {
      num: "03",
      icon: Route,
      title: "Journey Intelligence",
      desc: "Tracks state progression, detects bottlenecks, and maps live drop-off telemetry across every customer stage.",
    },
    {
      num: "04",
      icon: Scale,
      title: "Verification & Evidence",
      desc: "Cross-checks records across policy schedules, hospital bills, and government IDs to surface conflicts.",
    },
    {
      num: "05",
      icon: Route,
      title: "Dynamic Rerouting",
      desc: "Isolates discrepancies and routes customers to targeted in-place resolution instead of restarting.",
    },
    {
      num: "06",
      icon: BrainCircuit,
      title: "Explainable AI",
      desc: "Every flagged friction point includes transparent rationale, source citations, and confidence metrics.",
    },
    {
      num: "07",
      icon: Users,
      title: "Human-in-the-Loop",
      desc: "Pre-assembles structured adjudication dossiers for complex or high-risk cases without autonomous approval.",
    },
    {
      num: "08",
      icon: BarChart3,
      title: "Journey Analytics",
      desc: "Surfaces friction heatmaps, reroute efficacy rates, and aggregate completion velocity metrics.",
    },
  ];

  const problemCards = [
    {
      num: "01",
      title: "COMPLEX PROCESSES",
      desc: "Multi-tiered financial forms with convoluted policy clauses leave customers frustrated and confused.",
    },
    {
      num: "02",
      title: "REPEATED DOCUMENT REQUESTS",
      desc: "Legacy portals fail to explain document deficiencies, asking customers for the same paperwork repeatedly.",
    },
    {
      num: "03",
      title: "MISSING / CONFLICTING INFORMATION",
      desc: "A single mismatched digit or date between two valid papers triggers an abrupt, silent rejection.",
    },
    {
      num: "04",
      title: "CUSTOMER DROP-OFF",
      desc: "Over 38% of valid claims and applications are abandoned midway due to rigid, unforgiving waterfall steps.",
    },
  ];

  const futureScopes = [
    "Insurance Claims & Policy Management",
    "Banking & Account Opening",
    "Loans, Credit & Mortgage Applications",
    "Payments, KYC & Financial Onboarding",
    "Investments, Wealth Management & Mutual Funds",
    "Enterprise AI Journey Orchestration Platform",
  ];

  return (
    <main className="relative min-h-screen bg-[#F5F3EE] text-[#101010] selection:bg-[#101010] selection:text-[#20C77A]">
      <InteractiveShell />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-start">
          {/* Left Column: Headline and CTAs */}
          <div>
            <div className="mono mb-4 inline-flex items-center gap-2 rounded-md border-2 border-[#101010] bg-[#20C77A] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#101010] shadow-[2px_2px_0px_#101010]">
              <span className="h-2 w-2 rounded-full bg-[#101010]" />
              AI FINANCIAL JOURNEY ENGINE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tight text-[#101010]">
              FINANCIAL JOURNEYS SHOULDN&apos;T FEEL LIKE A MAZE.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#555555] max-w-xl">
              Reroute understands the customer&apos;s goal, verifies evidence, detects friction and dynamically guides them to the next safe action.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/journey"
                className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-6 py-3.5 text-sm font-black text-[#101010] hover:bg-[#1bb36d]"
              >
                <span>START A JOURNEY</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a
                href="#how-it-works"
                className="brutal-btn inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-[#101010] hover:bg-neutral-50"
              >
                <span>SEE HOW IT WORKS</span>
                <ArrowDownIcon />
              </a>
            </div>

            {/* Live Journey Route Visual */}
            <div className="mt-12 rounded-lg border-2 border-[#101010] bg-white p-4 shadow-[4px_4px_0px_#101010]">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="mono text-[10px] font-black uppercase tracking-widest text-[#555555]">
                  DYNAMIC JOURNEY PIPELINE
                </span>
                <span className="mono text-[10px] font-bold text-[#20C77A]">DETERMINISTIC</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 mono text-xs font-bold">
                <span className="rounded border border-[#101010] bg-neutral-100 px-2 py-1">
                  GOAL
                </span>
                <span className="text-neutral-400">↓</span>
                <span className="rounded border border-[#101010] bg-neutral-100 px-2 py-1">
                  VERIFY
                </span>
                <span className="text-neutral-400">↓</span>
                <span className="rounded border border-[#101010] bg-neutral-100 px-2 py-1">
                  DETECT
                </span>
                <span className="text-neutral-400">↓</span>
                <span className="rounded border-2 border-[#101010] bg-[#20C77A] px-2.5 py-1 text-[#101010] shadow-[2px_2px_0px_#101010]">
                  REROUTE
                </span>
                <span className="text-neutral-400">↓</span>
                <span className="rounded border border-[#101010] bg-[#101010] px-2 py-1 text-white">
                  COMPLETE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Live Case Card (Visual Centerpiece) */}
          <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[5px_5px_0px_#101010]">
            <div className="flex items-center justify-between border-b-2 border-[#101010] pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#20C77A]" />
                <span className="mono text-xs font-black uppercase tracking-wider text-[#101010]">
                  LIVE CASE PREVIEW
                </span>
              </div>
              <span className="mono rounded border border-[#101010] bg-[#101010] px-2.5 py-0.5 text-xs font-bold text-white">
                CASE #R-1024
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#101010]">HEALTH INSURANCE CLAIM</h2>
                  <p className="mono text-xs text-[#555555]">Claimant: Sukrut Dusane · Claim ₹84,500</p>
                </div>
                <div className="rounded border-2 border-[#101010] bg-[#20C77A] px-2.5 py-1 text-xs font-black text-[#101010]">
                  72% COMPLETE
                </div>
              </div>

              {/* Progress Checklist */}
              <div className="mt-5 space-y-2.5 text-xs font-bold">
                <div className="flex items-center gap-2 rounded border border-[#101010] bg-[#FAF9F5] p-2.5">
                  <Check size={15} className="text-[#20C77A] shrink-0 stroke-[3]" />
                  <span>Policy verified</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-[#101010] bg-[#FAF9F5] p-2.5">
                  <Check size={15} className="text-[#20C77A] shrink-0 stroke-[3]" />
                  <span>Identity verified</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-[#101010] bg-[#FAF9F5] p-2.5">
                  <Check size={15} className="text-[#20C77A] shrink-0 stroke-[3]" />
                  <span>Hospital document processed</span>
                </div>

                {/* Conflict & Reroute Alert */}
                <div className="rounded-lg border-2 border-[#F2A900] bg-[#FFF8E7] p-4 text-[#101010] shadow-[3px_3px_0px_#F2A900]">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle size={18} className="text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="mono text-[10px] font-black uppercase text-[#B45309]">
                        CONFLICT DETECTED
                      </span>
                      <p className="text-xs font-black text-[#101010]">
                        ! DOB mismatch detected
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#555555]">
                        Policy records 14/07/1998, but Hospital Bill records 17/07/1998.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#F2A900]/30">
                    <span className="mono text-[10px] font-black uppercase tracking-wider text-[#B45309]">
                      REROUTE REQUIRED
                    </span>
                    <Link
                      href="/journey"
                      className="brutal-btn inline-flex items-center gap-1.5 bg-[#101010] px-3 py-1.5 text-xs font-black text-[#20C77A] hover:bg-neutral-800"
                    >
                      <span>RESOLVE ISSUE</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Problem Section */}
      <section className="relative z-10 border-t-2 border-[#101010] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#555555]">
              WHY REROUTE?
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#101010] tracking-tight">
              Financial journeys break because:
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((p) => (
              <div
                key={p.num}
                className="rounded-lg border-2 border-[#101010] bg-[#FAF9F5] p-5 shadow-[3px_3px_0px_#101010] transition-transform hover:-translate-y-0.5"
              >
                <div className="mono flex h-7 w-7 items-center justify-center rounded border border-[#101010] bg-white text-xs font-black text-[#101010]">
                  {p.num}
                </div>
                <h3 className="mt-3 text-base font-black text-[#101010]">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#555555]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Core Differentiator Section */}
      <section id="how-it-works" className="relative z-10 border-t-2 border-[#101010] bg-[#101010] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mono text-xs font-black uppercase tracking-widest text-[#20C77A]">
                THE CORE DIFFERENTIATOR
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight">
                WHEN THE JOURNEY GETS STUCK, DON&apos;T START OVER.
              </h2>
            </div>
            <Link
              href="/journey"
              className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-4 py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
            >
              <span>TRY REROUTE LIVE</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Left: Traditional Flow */}
            <div className="rounded-lg border-2 border-neutral-700 bg-neutral-900 p-6">
              <span className="mono text-xs font-black uppercase text-[#E85C65]">
                TRADITIONAL FLOW
              </span>
              <h3 className="mt-2 text-xl font-black">Fragile Waterfall</h3>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="rounded border border-neutral-700 bg-neutral-800 p-3 text-neutral-300">
                  Missing information
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="rounded border border-[#E85C65] bg-red-950/50 p-3 font-bold text-[#E85C65]">
                  Application incomplete
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="rounded border border-neutral-700 bg-neutral-800 p-3 text-neutral-300">
                  Contact support / Wait indefinitely
                </div>
                <div className="text-center text-neutral-500">↓</div>
                <div className="rounded border border-neutral-700 bg-neutral-800 p-3 text-neutral-400">
                  Restart from beginning
                </div>
              </div>
            </div>

            {/* Right: Reroute Flow */}
            <div className="rounded-lg border-2 border-[#20C77A] bg-black p-6 shadow-[5px_5px_0px_#20C77A]">
              <span className="mono text-xs font-black uppercase text-[#20C77A]">
                REROUTE FLOW
              </span>
              <h3 className="mt-2 text-xl font-black text-white">Targeted In-Place Recovery</h3>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="rounded border border-neutral-600 bg-neutral-900 p-3 text-neutral-300">
                  Problem detected
                </div>
                <div className="text-center text-[#20C77A]">↓</div>
                <div className="rounded border border-neutral-600 bg-neutral-900 p-3 text-neutral-300">
                  Understand issue
                </div>
                <div className="text-center text-[#20C77A]">↓</div>
                <div className="rounded border border-neutral-600 bg-neutral-900 p-3 text-neutral-300">
                  Targeted request
                </div>
                <div className="text-center text-[#20C77A]">↓</div>
                <div className="rounded border border-[#20C77A] bg-[#20C77A]/20 p-3 font-bold text-[#20C77A]">
                  Reverify
                </div>
                <div className="text-center text-[#20C77A]">↓</div>
                <div className="rounded-md border-2 border-[#20C77A] bg-[#20C77A] p-3 text-center font-black text-[#101010]">
                  CONTINUE (Zero restart)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator & ROI Calculator Suite */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <LandingInteractiveSuite />
      </section>

      {/* Section 10: Feature System */}
      <section id="features" className="relative z-10 border-t-2 border-[#101010] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#555555]">
              CAPABILITIES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#101010] tracking-tight">
              Eight Core Pillars of Reroute
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.num}
                  className="rounded-lg border-2 border-[#101010] bg-[#FAF9F5] p-4 shadow-[3px_3px_0px_#101010] transition-all hover:bg-white"
                >
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <span className="mono text-xs font-black text-[#555555]">{f.num}</span>
                    <Icon size={16} className="text-[#101010]" />
                  </div>
                  <h3 className="mt-3 text-sm font-black text-[#101010]">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#555555]">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 28: Impact Tree Section */}
      <section className="relative z-10 border-t-2 border-[#101010] bg-[#FAF9F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#555555]">
              STAKEHOLDER VALUE
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#101010] tracking-tight">
              Multi-Dimensional Impact Tree
            </h2>
          </div>

          <div className="mt-8 rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
            <p className="mono text-xs font-black text-[#101010]">IMPACT HIERARCHY</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mono text-xs">
              <div className="rounded border border-[#101010] p-4 bg-[#FAF9F5]">
                <p className="font-black text-[#101010] border-b border-[#101010] pb-1">├── CUSTOMER</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>│   ├── Faster completion</li>
                  <li>│   ├── Less rework</li>
                  <li>│   ├── Clearer guidance</li>
                  <li>│   └── Better accessibility</li>
                </ul>
              </div>

              <div className="rounded border border-[#101010] p-4 bg-[#FAF9F5]">
                <p className="font-black text-[#101010] border-b border-[#101010] pb-1">├── BUSINESS</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>│   ├── Lower support cost</li>
                  <li>│   ├── Higher productivity</li>
                  <li>│   └── Better compliance</li>
                </ul>
              </div>

              <div className="rounded border border-[#101010] p-4 bg-[#FAF9F5]">
                <p className="font-black text-[#101010] border-b border-[#101010] pb-1">├── OPERATIONS</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>│   ├── Less manual entry</li>
                  <li>│   ├── Fewer handoffs</li>
                  <li>│   └── Faster exceptions</li>
                </ul>
              </div>

              <div className="rounded border border-[#101010] p-4 bg-[#FAF9F5]">
                <p className="font-black text-[#101010] border-b border-[#101010] pb-1">├── TRUST</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>│   ├── Grounded answers</li>
                  <li>│   ├── Traceability</li>
                  <li>│   └── Human oversight</li>
                </ul>
              </div>

              <div className="rounded border border-[#101010] p-4 bg-[#FAF9F5] sm:col-span-2 lg:col-span-2">
                <p className="font-black text-[#101010] border-b border-[#101010] pb-1">└── STRATEGIC</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>    ├── Reusable dynamic journey engine</li>
                  <li>    ├── Multi-domain expansion across financial verticals</li>
                  <li>    └── Completion-focused AI (high outcome realization)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 29: Future Scope */}
      <section className="relative z-10 border-t-2 border-[#101010] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#555555]">
              EXPANSION
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#101010]">
              Future Domain Scope
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureScopes.map((scope, idx) => (
              <div
                key={scope}
                className="flex items-center justify-between rounded-lg border border-[#101010] bg-[#FAF9F5] p-3.5 text-xs font-bold text-[#101010] hover:bg-white"
              >
                <span>{scope}</span>
                <span className="mono text-[10px] text-neutral-400">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 50: Footer */}
      <footer className="relative z-10 border-t-2 border-[#101010] bg-[#101010] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded border border-[#101010] bg-[#20C77A] text-xs font-black text-[#101010]">
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
              <p className="mono text-xs font-black uppercase text-[#20C77A]">PRODUCT</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
                <li><Link href="/journey" className="hover:text-white">Customer Journey</Link></li>
                <li><Link href="/risk" className="hover:text-white">Risk Intelligence</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Journey Intelligence</Link></li>
              </ul>
            </div>

            <div>
              <p className="mono text-xs font-black uppercase text-[#20C77A]">RESOURCES</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
                <li><a href="https://github.com/sukrut07/ReRoute/tree/main/docs" target="_blank" rel="noreferrer" className="hover:text-white">Documentation</a></li>
                <li><a href="https://github.com/sukrut07/ReRoute/blob/main/docs/ARCHITECTURE.md" target="_blank" rel="noreferrer" className="hover:text-white">Architecture</a></li>
                <li><Link href="/journey" className="hover:text-white">Interactive Demo</Link></li>
              </ul>
            </div>

            <div>
              <p className="mono text-xs font-black uppercase text-[#20C77A]">OPERATIONS</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
                <li><Link href="/review" className="hover:text-white">Human Review Queue</Link></li>
                <li><Link href="/risk" className="hover:text-white">Risk Telemetry</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-neutral-400">
            <p>
              DISCLAIMER: Synthetic demo. AI assists with journey orchestration and does not independently make regulated financial decisions.
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

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
