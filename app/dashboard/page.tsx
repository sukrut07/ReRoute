"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Route,
  CheckCircle2,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const topKPIs = [
    { label: "ACTIVE JOURNEYS", value: "1,248", delta: "+14% this week", icon: Activity },
    { label: "COMPLETION", value: "84.6%", delta: "vs 61.2% industry avg", icon: CheckCircle2 },
    { label: "AVG TIME", value: "18m", delta: "-73% duration", icon: Clock },
    { label: "REROUTE RATE", value: "21.4%", delta: "89.2% auto-recovered", icon: Route },
  ];

  const funnelSteps = [
    { step: "STARTED", count: 1248, percent: 100 },
    { step: "DOCUMENTS", count: 1110, percent: 89 },
    { step: "VERIFICATION", count: 1084, percent: 87 },
    { step: "REROUTE", count: 1062, percent: 85 },
    { step: "COMPLETE", count: 1056, percent: 84.6 },
  ];

  const topFrictionPoints = [
    { name: "Document upload", share: "34%", impact: "High volume, multi-page bills" },
    { name: "Verification", share: "28%", impact: "Discrepancy detection & cross-check" },
    { name: "Missing information", share: "22%", impact: "Omitted discharge summary/reports" },
    { name: "Conflict resolution", share: "16%", impact: "DOB and name spelling variance" },
  ];

  const liveCases = [
    { id: "CASE #R-1024", claimant: "Sukrut Dusane", amount: "₹84,500", stage: "REROUTE", issue: "DOB Conflict (14/07 vs 17/07)", status: "Recovered" },
    { id: "CASE #R-1025", claimant: "Priya Sharma", amount: "₹32,400", stage: "COMPLETE", issue: "Clean Verification", status: "Approved" },
    { id: "CASE #R-1026", claimant: "Rajesh Verma", amount: "₹1,85,000", stage: "VERIFICATION", issue: "High Amount Anomaly", status: "Escalated" },
    { id: "CASE #R-1027", claimant: "Ananya Iyer", amount: "₹18,200", stage: "DOCUMENTS", issue: "Missing ID Proof", status: "Prompted" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#101010] pb-6">
          <div>
            <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-[#101010] px-2.5 py-0.5 text-xs font-black uppercase text-[#20C77A]">
              <BarChart3 size={13} />
              METRICS & ANALYTICS
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#101010]">
              JOURNEY INTELLIGENCE
            </h1>
            <p className="mt-1 text-sm text-[#555555]">
              Real-time telemetry tracking completion velocity, friction distribution, and dynamic reroute efficacy.
            </p>
          </div>

          <div className="flex items-center gap-2 mono text-xs font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#20C77A] animate-pulse" />
            <span>SYNTHETIC DEMO BENCHMARK</span>
          </div>
        </div>

        {/* Section 26: Top KPIs */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topKPIs.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="rounded-lg border-2 border-[#101010] bg-white p-5 shadow-[4px_4px_0px_#101010]"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-xs font-bold text-[#555555]">{kpi.label}</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded border border-[#101010] bg-[#FAF9F5]">
                    <Icon size={15} />
                  </div>
                </div>
                <p className="mt-3 text-3xl font-black tracking-tight text-[#101010]">
                  {kpi.value}
                </p>
                <p className="mono mt-2 text-xs font-bold text-[#20C77A]">{kpi.delta}</p>
              </div>
            );
          })}
        </section>

        {/* Section 26: Journey Funnel */}
        <section className="mt-8 rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
          <div className="flex items-center justify-between border-b-2 border-[#101010] pb-3">
            <div>
              <span className="mono text-xs font-black uppercase text-[#555555]">
                PIPELINE TELEMETRY
              </span>
              <h2 className="text-xl font-black text-[#101010]">JOURNEY FUNNEL</h2>
            </div>
            <span className="mono text-xs font-bold text-[#20C77A]">
              STARTED ↓ DOCUMENTS ↓ VERIFICATION ↓ REROUTE ↓ COMPLETE
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {funnelSteps.map((step, idx) => (
              <div key={step.step} className="space-y-1">
                <div className="flex items-center justify-between mono text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">0{idx + 1}</span>
                    <span className="text-[#101010] font-black">{step.step}</span>
                  </div>
                  <span className="text-[#555555]">
                    {step.count.toLocaleString()} cases ({step.percent}%)
                  </span>
                </div>
                <div className="h-4 w-full rounded border border-[#101010] bg-[#FAF9F5] overflow-hidden">
                  <div
                    className="h-full bg-[#20C77A] transition-all"
                    style={{ width: `${step.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 26 & 27: Top Friction Points & Friction Panel (Before/After) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Top Friction Points */}
          <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
            <div className="border-b-2 border-[#101010] pb-3">
              <span className="mono text-xs font-black uppercase text-[#555555]">
                SYSTEM BOTTLENECKS
              </span>
              <h2 className="text-xl font-black text-[#101010]">TOP FRICTION POINTS</h2>
            </div>

            <div className="mt-5 space-y-3">
              {topFrictionPoints.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded border border-[#101010] bg-[#FAF9F5] p-3 text-xs"
                >
                  <div>
                    <p className="font-black text-[#101010]">{item.name}</p>
                    <p className="text-[#555555] mt-0.5">{item.impact}</p>
                  </div>
                  <span className="mono font-black text-sm text-[#101010] rounded bg-white border border-[#101010] px-2 py-0.5">
                    {item.share}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 27: Friction Panel (Before / After) */}
          <div className="rounded-lg border-2 border-[#101010] bg-[#FAF9F5] p-6 shadow-[4px_4px_0px_#101010]">
            <div className="flex items-center justify-between border-b-2 border-[#101010] pb-3">
              <div>
                <span className="mono text-xs font-black uppercase text-[#555555]">
                  BENCHMARK COMPARISON
                </span>
                <h2 className="text-xl font-black text-[#101010]">FRICTION PANEL</h2>
              </div>
              <span className="mono rounded border border-[#101010] bg-white px-2 py-0.5 text-[10px] font-bold">
                SYNTHETIC DEMO BENCHMARK
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {/* Traditional Column */}
              <div className="rounded-lg border-2 border-[#E85C65] bg-white p-4">
                <span className="mono text-xs font-black uppercase text-[#E85C65]">
                  TRADITIONAL
                </span>
                <div className="mt-3 space-y-2 mono text-sm font-bold text-[#555555]">
                  <p className="flex justify-between border-b border-neutral-100 pb-1">
                    <span>Steps:</span> <strong className="text-[#101010]">12 steps</strong>
                  </p>
                  <p className="flex justify-between border-b border-neutral-100 pb-1">
                    <span>Documents:</span> <strong className="text-[#101010]">7 documents</strong>
                  </p>
                  <p className="flex justify-between">
                    <span>Inputs:</span> <strong className="text-[#101010]">5 manual inputs</strong>
                  </p>
                </div>
              </div>

              {/* Reroute Column */}
              <div className="rounded-lg border-2 border-[#20C77A] bg-white p-4 shadow-[3px_3px_0px_#20C77A]">
                <span className="mono text-xs font-black uppercase text-[#20C77A]">
                  REROUTE
                </span>
                <div className="mt-3 space-y-2 mono text-sm font-bold text-[#101010]">
                  <p className="flex justify-between border-b border-neutral-100 pb-1">
                    <span>Steps:</span> <strong className="text-[#20C77A]">7 steps</strong>
                  </p>
                  <p className="flex justify-between border-b border-neutral-100 pb-1">
                    <span>Documents:</span> <strong className="text-[#20C77A]">4 documents</strong>
                  </p>
                  <p className="flex justify-between">
                    <span>Inputs:</span> <strong className="text-[#20C77A]">2 manual inputs</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded border border-neutral-300 bg-white p-3 mono text-[11px] text-[#555555]">
              Result: 41% fewer steps, 43% less paperwork, 60% less manual entry, zero waterfall drop-offs.
            </div>
          </div>
        </div>

        {/* Live Journey Queue */}
        <section className="mt-8 rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#101010] pb-3">
            <div>
              <span className="mono text-xs font-black uppercase text-[#555555]">
                SAMPLE CASES
              </span>
              <h2 className="text-xl font-black text-[#101010]">Live Monitored Journeys</h2>
            </div>
            <Link
              href="/journey"
              className="mono rounded border border-[#101010] bg-[#20C77A] px-3 py-1.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
            >
              Simulate Case #R-1024 →
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-[#101010] bg-[#FAF9F5] mono">
                  <th className="p-3 font-black">CASE ID</th>
                  <th className="p-3 font-black">CLAIMANT</th>
                  <th className="p-3 font-black">AMOUNT</th>
                  <th className="p-3 font-black">STAGE</th>
                  <th className="p-3 font-black">ACTIVE ISSUE</th>
                  <th className="p-3 font-black text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {liveCases.map((c) => (
                  <tr key={c.id} className="hover:bg-[#FAF9F5]">
                    <td className="mono p-3 font-bold text-[#101010]">{c.id}</td>
                    <td className="p-3 font-bold text-[#101010]">{c.claimant}</td>
                    <td className="mono p-3 text-[#555555]">{c.amount}</td>
                    <td className="p-3">
                      <span className="mono rounded border border-[#101010] bg-white px-2 py-0.5 text-[10px] font-bold">
                        {c.stage}
                      </span>
                    </td>
                    <td className="p-3 text-[#555555]">{c.issue}</td>
                    <td className="p-3 text-right">
                      <Link
                        href="/journey"
                        className="mono text-xs font-bold text-[#20C77A] underline hover:text-[#101010]"
                      >
                        Inspect
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
