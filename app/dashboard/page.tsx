"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Route,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Users,
  CheckCircle2,
  FileText,
  Activity,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const kpiData = [
    { label: "ACTIVE JOURNEYS", value: "1,248", delta: "+12% this week", icon: Activity, color: "#bcd8ff" },
    { label: "COMPLETION RATE", value: "84.6%", delta: "vs 61.2% benchmark", icon: CheckCircle2, color: "#54e38e" },
    { label: "AVG JOURNEY TIME", value: "18m", delta: "-73% reduction", icon: Clock, color: "#fff0b8" },
    { label: "REROUTE RECOVERY RATE", value: "89.2%", delta: "21.4% rerouted", icon: Route, color: "#54e38e" },
  ];

  const secondaryKpis = [
    { label: "DROP-OFF RATE", value: "15.4%", sub: "Traditional: 38.5%" },
    { label: "CONFLICT RATE", value: "28.2%", sub: "352 handled seamlessly" },
    { label: "HUMAN ESCALATION", value: "7.2%", sub: "90 cases routed safely" },
    { label: "AVERAGE STEPS", value: "7 Steps", sub: "Reduced from 12 steps" },
  ];

  const funnelStages = [
    { stage: "01 · Goal Stated", count: "1,248", percent: 100, drop: "0%" },
    { stage: "02 · Policy Verified", count: "1,198", percent: 96, drop: "-4%" },
    { stage: "03 · Documents Uploaded", count: "1,110", percent: 89, drop: "-7.1%" },
    { stage: "04 · Evidence Verified", count: "1,084", percent: 87, drop: "-2.1%" },
    { stage: "05 · Rerouted & Resolved", count: "1,062", percent: 85, drop: "-1.7%" },
    { stage: "06 · Completed / Prepared", count: "1,056", percent: 84.6, drop: "-0.5%" },
  ];

  const frictionDistribution = [
    { category: "Document Upload Friction", percent: 32, count: 399 },
    { category: "Cross-Document Verification Mismatch", percent: 24, count: 299 },
    { category: "Missing Hospital / Clinical Evidence", percent: 18, count: 224 },
    { category: "Conflict Clarification Awaiting Response", percent: 14, count: 174 },
    { category: "Other Technical & Form Validation", percent: 12, count: 152 },
  ];

  const conflictDistribution = [
    { type: "DOB / Identity Mismatch", count: 18, share: "31%", icon: AlertTriangle, color: "text-amber-600" },
    { type: "Duplicate Document Detected", count: 11, share: "19%", icon: ShieldAlert, color: "text-red-600" },
    { type: "Claim Amount Variance", count: 9, share: "16%", icon: TrendingUp, color: "text-blue-600" },
    { type: "Repeated Consecutive Claims", count: 7, share: "12%", icon: Clock, color: "text-amber-600" },
    { type: "Low OCR / Scanned Image Confidence", count: 5, share: "9%", icon: FileText, color: "text-neutral-600" },
  ];

  const liveJourneys = [
    { id: "R-1024", customer: "Sukrut Dusane", type: "Health Claim", progress: 72, status: "REROUTED", note: "DOB Mismatch Pending Confirmation", amount: "₹84,500" },
    { id: "R-1025", customer: "Priya Sharma", type: "Health Claim", progress: 100, status: "READY_REVIEW", note: "Verified & Prepared", amount: "₹32,400" },
    { id: "R-1026", customer: "Rajesh Verma", type: "Health Claim", progress: 85, status: "IN_REVIEW", note: "High Ticket Amount Anomaly", amount: "₹1,85,000" },
    { id: "R-1027", customer: "Ananya Iyer", type: "Health Claim", progress: 45, status: "DOCUMENTS", note: "Awaiting ID Proof Upload", amount: "₹18,200" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-6">
          <div>
            <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-black px-2.5 py-1 text-xs font-black uppercase text-[#54e38e]">
              <BarChart3 size={13} />
              EXECUTIVE TELEMETRY
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#101010]">
              Journey Intelligence
            </h1>
            <p className="mt-1 text-sm text-neutral-600">
              Real-time monitoring of customer friction, drop-off recovery, and dynamic reroute throughput.
            </p>
          </div>

          <div className="mono flex items-center gap-2 text-xs font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYNTHETIC TELEMETRY ENGINE · LIVE</span>
          </div>
        </div>

        {/* Primary KPI Cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="brutal-border brutal-shadow bg-white p-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-xs font-bold text-neutral-500">{kpi.label}</span>
                  <div
                    className="flex h-8 w-8 items-center justify-center border border-black"
                    style={{ backgroundColor: kpi.color }}
                  >
                    <Icon size={16} />
                  </div>
                </div>
                <p className="mt-3 text-4xl font-black tracking-tight text-[#101010]">{kpi.value}</p>
                <p className="mono mt-2 text-xs font-bold text-emerald-800">{kpi.delta}</p>
              </div>
            );
          })}
        </section>

        {/* Secondary Metric Strips */}
        <section className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {secondaryKpis.map((k) => (
            <div key={k.label} className="border-2 border-black bg-[#fffef8] p-3.5">
              <span className="mono text-[10px] uppercase text-neutral-500">{k.label}</span>
              <p className="text-xl font-black text-[#101010]">{k.value}</p>
              <p className="mono text-[11px] text-neutral-600">{k.sub}</p>
            </div>
          ))}
        </section>

        {/* Journey Funnel vs Friction Distribution */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Journey Funnel */}
          <div className="brutal-border brutal-shadow bg-white p-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <div>
                <span className="mono text-xs font-bold uppercase text-neutral-500">
                  CONVERSION FUNNEL
                </span>
                <h3 className="text-xl font-black text-[#101010]">
                  End-to-End Journey Progression
                </h3>
              </div>
              <span className="mono border border-black bg-[#54e38e] px-2 py-0.5 text-xs font-bold">
                84.6% OVERALL CONVERSION
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {funnelStages.map((stage) => (
                <div key={stage.stage} className="space-y-1">
                  <div className="mono flex justify-between text-xs font-bold">
                    <span>{stage.stage}</span>
                    <span className="text-neutral-500">
                      {stage.count} users ({stage.percent}%)
                    </span>
                  </div>
                  <div className="h-4 w-full border border-black bg-neutral-100">
                    <div
                      className="h-full bg-[#54e38e] transition-all"
                      style={{ width: `${stage.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mono mt-6 border-t-2 border-black pt-3 text-[11px] text-neutral-600">
              Notice: The biggest traditional drop-off (Verification Conflict) is reduced to 1.7% thanks to in-place Rerouting.
            </div>
          </div>

          {/* Friction Point Distribution */}
          <div className="brutal-border brutal-shadow bg-white p-6">
            <div className="border-b-2 border-black pb-3">
              <span className="mono text-xs font-bold uppercase text-neutral-500">
                BOTTLENECK ANALYSIS
              </span>
              <h3 className="text-xl font-black text-[#101010]">Where Friction Occurs</h3>
            </div>

            <div className="mt-5 space-y-4">
              {frictionDistribution.map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="truncate pr-2">{item.category}</span>
                    <span className="mono font-black">{item.percent}%</span>
                  </div>
                  <div className="h-3 w-full border border-black bg-neutral-100">
                    <div
                      className="h-full bg-amber-400"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-neutral-300 bg-neutral-50 p-3 text-xs text-neutral-700">
              <p className="font-bold">Reroute Optimization Strategy:</p>
              <p className="mt-1">
                Document Upload friction is addressed via instant multi-file batch upload and local OCR confidence gates.
              </p>
            </div>
          </div>
        </div>

        {/* Traditional vs Reroute Friction Matrix */}
        <section className="mt-8 brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-7">
          <div className="border-b-2 border-black pb-3">
            <span className="mono text-xs font-black uppercase text-[#54e38e] bg-black px-2 py-0.5">
              THE CORE BUSINESS IMPACT
            </span>
            <h2 className="mt-2 text-2xl font-black text-[#101010]">
              Traditional Claim Flow vs. The Reroute Engine
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Measurable reduction in customer steps, document requests, and support drop-offs.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-black bg-black text-white">
                  <th className="mono p-3 font-black">METRIC</th>
                  <th className="mono p-3 font-black text-red-300">TRADITIONAL JOURNEY</th>
                  <th className="mono p-3 font-black text-[#54e38e]">REROUTE ENGINE</th>
                  <th className="mono p-3 font-black">IMPROVEMENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/20 font-bold">
                <tr className="bg-white">
                  <td className="p-3">Customer Interaction Steps</td>
                  <td className="p-3 font-mono text-red-600">12 steps</td>
                  <td className="p-3 font-mono text-emerald-700">7 steps</td>
                  <td className="p-3 font-mono text-black">41% fewer steps</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3">Required Document Requests</td>
                  <td className="p-3 font-mono text-red-600">7 documents</td>
                  <td className="p-3 font-mono text-emerald-700">4 documents</td>
                  <td className="p-3 font-mono text-black">43% less paperwork</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3">Manual Form Inputs</td>
                  <td className="p-3 font-mono text-red-600">5 manual inputs</td>
                  <td className="p-3 font-mono text-emerald-700">2 inputs</td>
                  <td className="p-3 font-mono text-black">60% less typing</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3">Discrepancy Interruptions</td>
                  <td className="p-3 font-mono text-red-600">3 restarts / calls</td>
                  <td className="p-3 font-mono text-emerald-700">1 inline reroute</td>
                  <td className="p-3 font-mono text-black">Zero restarts</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3">Average Turnaround Time (TAT)</td>
                  <td className="p-3 font-mono text-red-600">14 calendar days</td>
                  <td className="p-3 font-mono text-emerald-700">2.5 days</td>
                  <td className="p-3 font-mono text-black">82% faster resolution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Live Active Journeys Table */}
        <section className="mt-8 brutal-border brutal-shadow bg-white p-6">
          <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-3">
            <div>
              <span className="mono text-xs font-bold uppercase text-neutral-500">
                ACTIVE QUEUE
              </span>
              <h3 className="text-xl font-black text-[#101010]">Recent Journey Cases</h3>
            </div>
            <Link
              href="/journey"
              className="mono border border-black bg-neutral-100 px-3 py-1.5 text-xs font-bold hover:bg-neutral-200"
            >
              Open Interactive Demo Case (R-1024) →
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-black bg-neutral-100">
                  <th className="mono p-3 font-black">CASE ID</th>
                  <th className="mono p-3 font-black">CLAIMANT</th>
                  <th className="mono p-3 font-black">AMOUNT</th>
                  <th className="mono p-3 font-black">PROGRESS</th>
                  <th className="mono p-3 font-black">STATUS</th>
                  <th className="mono p-3 font-black">ACTIVE STATE NOTE</th>
                  <th className="mono p-3 font-black text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-bold">
                {liveJourneys.map((j) => (
                  <tr key={j.id} className="hover:bg-neutral-50">
                    <td className="mono p-3 text-neutral-800">{j.id}</td>
                    <td className="p-3 font-bold text-[#101010]">{j.customer}</td>
                    <td className="mono p-3 text-neutral-900">{j.amount}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 border border-black bg-neutral-200">
                          <div
                            className={`h-full ${
                              j.progress === 100 ? "bg-[#54e38e]" : "bg-amber-400"
                            }`}
                            style={{ width: `${j.progress}%` }}
                          />
                        </div>
                        <span className="mono text-[10px]">{j.progress}%</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span
                        className={`mono border px-2 py-0.5 text-[10px] font-black ${
                          j.status === "REROUTED"
                            ? "border-amber-600 bg-amber-100 text-amber-900"
                            : j.status === "READY_REVIEW"
                            ? "border-emerald-600 bg-[#e7f9ee] text-emerald-800"
                            : "border-neutral-400 bg-neutral-100 text-neutral-800"
                        }`}
                      >
                        {j.status}
                      </span>
                    </td>
                    <td className="p-3 text-xs text-neutral-600">{j.note}</td>
                    <td className="p-3 text-right">
                      <Link
                        href="/journey"
                        className="mono border border-black bg-white px-2 py-1 text-[11px] font-bold hover:bg-neutral-100"
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
