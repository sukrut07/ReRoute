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
  ShieldAlert,
} from "lucide-react";

export default function DashboardPage() {
  // Section 22: Top Metrics (ACTIVE JOURNEYS, COMPLETION RATE, REROUTE RATE, PENDING REVIEW, AVG. JOURNEY TIME)
  const topKPIs = [
    { label: "ACTIVE JOURNEYS", value: "1,248", delta: "+14% this week", icon: Activity },
    { label: "COMPLETION RATE", value: "84.6%", delta: "1,056 resolved", icon: CheckCircle2 },
    { label: "REROUTE RATE", value: "21.4%", delta: "267 in-place recovered", icon: Route },
    { label: "PENDING REVIEW", value: "38", delta: "3.0% human queue", icon: Clock },
    { label: "AVG. JOURNEY TIME", value: "18m", delta: "-73% duration", icon: TrendingUp },
  ];

  const funnelSteps = [
    { step: "STARTED", count: 1248, percent: 100 },
    { step: "DOCUMENTS", count: 1110, percent: 89 },
    { step: "VERIFICATION", count: 1084, percent: 87 },
    { step: "REROUTE", count: 1062, percent: 85 },
    { step: "COMPLETE", count: 1056, percent: 84.6 },
  ];

  const topFrictionPoints = [
    { name: "Document upload", share: "34%", impact: "High volume, multi-page hospital invoices" },
    { name: "Verification", share: "28%", impact: "Discrepancy cross-check & field extraction" },
    { name: "Missing information", share: "22%", impact: "Omitted discharge summary / surgical notes" },
    { name: "Conflict resolution", share: "16%", impact: "DOB and name spelling variance" },
  ];

  // Section 20: Journey Table (Case, Journey, Status, Risk, Progress, Action)
  // Statuses: VERIFIED, IN REVIEW, REROUTED, RESOLVED, ESCALATED
  const operationalCases = [
    {
      caseId: "CASE #R-1024",
      journey: "Health Insurance Claim",
      claimant: "Sukrut Dusane",
      amount: "₹84,500",
      status: "REROUTED",
      risk: "Medium",
      riskScore: 42,
      progress: 72,
      actionHref: "/journey",
    },
    {
      caseId: "CASE #R-1025",
      journey: "Daycare Surgery Claim",
      claimant: "Priya Sharma",
      amount: "₹32,400",
      status: "RESOLVED",
      risk: "Low",
      riskScore: 12,
      progress: 100,
      actionHref: "/journey",
    },
    {
      caseId: "CASE #R-1026",
      journey: "Joint Replacement Claim",
      claimant: "Rajesh Verma",
      amount: "₹1,85,000",
      status: "ESCALATED",
      risk: "High",
      riskScore: 78,
      progress: 50,
      actionHref: "/review",
    },
    {
      caseId: "CASE #R-1027",
      journey: "Accident Expense Claim",
      claimant: "Ananya Iyer",
      amount: "₹18,200",
      status: "IN REVIEW",
      risk: "Medium",
      riskScore: 38,
      progress: 60,
      actionHref: "/review",
    },
    {
      caseId: "CASE #R-1028",
      journey: "Emergency CT Scan Claim",
      claimant: "Karan Mehta",
      amount: "₹24,800",
      status: "VERIFIED",
      risk: "Low",
      riskScore: 8,
      progress: 88,
      actionHref: "/journey",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "VERIFIED":
        return "bg-[#DDF8EA] text-[#111111] border-[#111111]";
      case "RESOLVED":
        return "bg-[#DDF8EA] text-[#111111] border-[#111111]";
      case "REROUTED":
        return "bg-[#20C979] text-[#111111] border-[#111111]";
      case "IN REVIEW":
        return "bg-[#FEF3C7] text-[#92400E] border-[#D97706]";
      case "ESCALATED":
        return "bg-[#FEE2E2] text-[#991B1B] border-[#D9414B]";
      default:
        return "bg-white text-[#111111] border-[#111111]";
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-[#DDF8EA] text-[#111111] border-[#111111]";
      case "Medium":
        return "bg-[#FEF3C7] text-[#92400E] border-[#D97706]";
      case "High":
        return "bg-[#FEE2E2] text-[#991B1B] border-[#D9414B]";
      default:
        return "bg-white text-[#111111] border-[#111111]";
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#111111] pb-6">
          <div>
            <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
              <BarChart3 size={13} strokeWidth={2.5} />
              SYSTEM TELEMETRY
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
              JOURNEY OPERATIONS DASHBOARD
            </h1>
            <p className="mt-1 text-sm text-[#666666]">
              Real-time telemetry tracking completion velocity, friction distribution, and dynamic reroute recovery.
            </p>
          </div>

          <div className="flex items-center gap-2 mono text-xs font-bold text-[#111111]">
            <span className="h-2 w-2 rounded-full bg-[#20C979] animate-pulse" />
            <span>SYNTHETIC DEMO BENCHMARK</span>
          </div>
        </div>

        {/* Section 19: Top Metrics (5 items: Active Journeys, Completed, Rerouted, Pending Review, Average Resolution Time) */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topKPIs.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] font-bold text-[#666666]">{kpi.label}</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2]">
                    <Icon size={13} />
                  </div>
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
                  {kpi.value}
                </p>
                <p className="mono mt-1 text-[11px] font-bold text-[#111111]">
                  <span className="text-[#20C979]">● </span>{kpi.delta}
                </p>
              </div>
            );
          })}
        </section>

        {/* Section 20: Clean Operational Table */}
        <section className="mt-8 rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
          <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-4 gap-3">
            <div>
              <span className="mono text-xs font-black uppercase text-[#666666]">
                OPERATIONAL PIPELINE
              </span>
              <h2 className="text-xl font-black text-[#111111]">Live Journey Table</h2>
            </div>
            <Link
              href="/journey"
              className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-[#20C979] px-3.5 py-1.5 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111]"
            >
              <span>Inspect Active Case #R-1024</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#111111] bg-[#F7F6F2] mono">
                  <th className="p-3 font-black text-[#111111]">CASE</th>
                  <th className="p-3 font-black text-[#111111]">JOURNEY</th>
                  <th className="p-3 font-black text-[#111111]">STATUS</th>
                  <th className="p-3 font-black text-[#111111]">RISK</th>
                  <th className="p-3 font-black text-[#111111]">PROGRESS</th>
                  <th className="p-3 font-black text-right text-[#111111]">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {operationalCases.map((c) => (
                  <tr key={c.caseId} className="hover:bg-[#F7F6F2] transition-colors">
                    <td className="p-3">
                      <span className="mono font-black text-[#111111]">{c.caseId}</span>
                      <p className="text-[11px] text-[#666666]">{c.claimant}</p>
                    </td>
                    <td className="p-3 font-medium text-[#111111]">
                      <span>{c.journey}</span>
                      <p className="mono text-[11px] text-[#666666]">{c.amount}</p>
                    </td>
                    <td className="p-3">
                      <span
                        className={`mono inline-block rounded border px-2 py-0.5 text-[10px] font-black uppercase ${getStatusBadge(
                          c.status
                        )}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`mono inline-block rounded border px-2 py-0.5 text-[10px] font-bold ${getRiskBadge(
                          c.risk
                        )}`}
                      >
                        {c.risk} ({c.riskScore})
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 sm:w-28 rounded border border-[#111111] bg-white overflow-hidden">
                          <div
                            className={`h-full ${
                              c.status === "REROUTED" ? "bg-[#20C979]" : "bg-[#111111]"
                            }`}
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>
                        <span className="mono text-[11px] font-bold text-[#111111]">
                          {c.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={c.actionHref}
                        className="mono inline-flex items-center gap-1 rounded border border-[#111111] bg-white px-2.5 py-1 text-[11px] font-bold text-[#111111] shadow-[1px_1px_0px_#111111] hover:bg-[#DDF8EA]"
                      >
                        <span>Inspect</span>
                        <ArrowRight size={11} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Funnel & Friction Distribution */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Journey Funnel */}
          <section className="rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between border-b border-[#111111] pb-3">
              <div>
                <span className="mono text-xs font-black uppercase text-[#666666]">
                  PIPELINE TELEMETRY
                </span>
                <h2 className="text-xl font-black text-[#111111]">Journey Funnel</h2>
              </div>
              <span className="mono text-[11px] font-bold text-[#111111]">
                84.6% END-TO-END
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              {funnelSteps.map((step, idx) => (
                <div key={step.step} className="space-y-1">
                  <div className="flex items-center justify-between mono text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="text-[#666666]">0{idx + 1}</span>
                      <span className="text-[#111111] font-black">{step.step}</span>
                    </div>
                    <span className="text-[#666666]">
                      {step.count.toLocaleString()} cases ({step.percent}%)
                    </span>
                  </div>
                  <div className="h-3 w-full rounded border border-[#111111] bg-[#F7F6F2] overflow-hidden">
                    <div
                      className="h-full bg-[#20C979] transition-all"
                      style={{ width: `${step.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Friction Points */}
          <div className="rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
            <div className="border-b border-[#111111] pb-3">
              <span className="mono text-xs font-black uppercase text-[#666666]">
                SYSTEM BOTTLENECKS
              </span>
              <h2 className="text-xl font-black text-[#111111]">Top Friction Points</h2>
            </div>

            <div className="mt-5 space-y-3">
              {topFrictionPoints.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded border border-[#111111] bg-[#F7F6F2] p-3 text-xs"
                >
                  <div>
                    <p className="font-black text-[#111111]">{item.name}</p>
                    <p className="text-[#666666] mt-0.5">{item.impact}</p>
                  </div>
                  <span className="mono font-black text-xs text-[#111111] rounded bg-white border border-[#111111] px-2 py-0.5">
                    {item.share}
                  </span>
                </div>
              ))}
            </div>

            {/* Benchmark panel note */}
            <div className="mt-4 rounded border border-neutral-300 bg-[#F7F6F2] p-3 mono text-[11px] text-[#666666]">
              <span className="font-bold text-[#111111]">SYNTHETIC DEMO BENCHMARK: </span>
              41% fewer steps, 43% less paperwork, 60% less manual entry under simulated journey conditions.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
