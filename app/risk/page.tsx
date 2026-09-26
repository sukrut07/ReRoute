"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  ShieldAlert,
  AlertTriangle,
  Info,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function RiskPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("CASE #R-1024");

  const riskSignals = [
    { label: "Identity record mismatch (DOB variance)", count: 18, pct: 36, severity: "MEDIUM", color: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]" },
    { label: "Document duplication / unreadable scan", count: 11, pct: 22, severity: "HIGH", color: "bg-[#FEE2E2] text-[#991B1B] border-[#D9414B]" },
    { label: "Amount exceeds regional clinical median", count: 9, pct: 18, severity: "HIGH", color: "bg-[#FEE2E2] text-[#991B1B] border-[#D9414B]" },
    { label: "Discharge date temporal ordering variance", count: 7, pct: 14, severity: "MEDIUM", color: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]" },
    { label: "Low OCR field confidence (<80%)", count: 5, pct: 10, severity: "LOW", color: "bg-[#DDF8EA] text-[#111111] border-[#111111]" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#111111] pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
            <ShieldAlert size={13} strokeWidth={2.5} />
            RISK TELEMETRY & DECISION SUPPORT
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
            RISK INTELLIGENCE & EVALUATION
          </h1>
          <p className="mt-1 text-sm text-[#666666]">
            Transparent risk evaluation designed to support dynamic routing and human officers, not execute black-box denials.
          </p>
        </div>

        {/* Section 22: Severity Summary Cards (LOW, MEDIUM, HIGH, CRITICAL) */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] font-bold text-[#666666]">ACTIVE ASSESSMENTS</span>
              <span className="mono text-[10px] text-[#666666]">TOTAL</span>
            </div>
            <p className="mt-2 text-3xl font-black text-[#111111]">128</p>
            <p className="mono mt-1 text-[11px] text-[#666666]">Synthetic claims in queue</p>
          </div>

          <div className="rounded-lg border border-[#111111] bg-[#DDF8EA] p-4 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] font-black uppercase text-[#111111]">LOW SEVERITY</span>
              <span className="mono text-[10px] font-bold text-[#111111]">73.4%</span>
            </div>
            <p className="mt-2 text-3xl font-black text-[#111111]">94</p>
            <p className="mono mt-1 text-[11px] text-[#111111]">Direct verification straight-through</p>
          </div>

          <div className="rounded-lg border border-[#D97706] bg-[#FEF3C7] p-4 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] font-black uppercase text-[#92400E]">MEDIUM SEVERITY</span>
              <span className="mono text-[10px] font-bold text-[#92400E]">20.3%</span>
            </div>
            <p className="mt-2 text-3xl font-black text-[#92400E]">26</p>
            <p className="mono mt-1 text-[11px] text-[#92400E]">Dynamic reroute active</p>
          </div>

          <div className="rounded-lg border border-[#D9414B] bg-[#FEE2E2] p-4 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] font-black uppercase text-[#991B1B]">HIGH / CRITICAL</span>
              <span className="mono text-[10px] font-bold text-[#991B1B]">6.3%</span>
            </div>
            <p className="mt-2 text-3xl font-black text-[#991B1B]">8</p>
            <p className="mono mt-1 text-[11px] text-[#991B1B]">Routed to Human Review queue</p>
          </div>
        </section>

        {/* Section 22: Risk Signals Horizontal Bars + Case Inspection */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Risk Signals Horizontal Bars */}
          <div className="rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
            <div className="border-b border-[#111111] pb-3 flex items-center justify-between">
              <div>
                <span className="mono text-xs font-black uppercase text-[#666666]">
                  SIGNAL CLASSIFICATION
                </span>
                <h2 className="text-xl font-black text-[#111111]">Risk Signals Distribution</h2>
              </div>
              <span className="mono text-[11px] font-bold text-[#666666]">5 DETECTORS</span>
            </div>

            <div className="mt-5 space-y-4">
              {riskSignals.map((sig) => (
                <div key={sig.label} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111]">{sig.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`mono rounded border px-1.5 py-0.2 text-[10px] font-black ${sig.color}`}>
                        {sig.severity}
                      </span>
                      <span className="mono font-bold text-[#666666]">{sig.count} cases</span>
                    </div>
                  </div>
                  <div className="h-2.5 w-full rounded border border-[#111111] bg-[#F7F6F2] overflow-hidden">
                    <div
                      className={`h-full ${
                        sig.severity === "HIGH"
                          ? "bg-[#D9414B]"
                          : sig.severity === "MEDIUM"
                          ? "bg-[#D97706]"
                          : "bg-[#20C979]"
                      }`}
                      style={{ width: `${sig.pct * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded border border-neutral-300 bg-[#F7F6F2] p-3 text-xs text-[#666666]">
              All risk signals are computed deterministically from evidence discrepancies. They inform the dynamic routing engine to prompt customers for clarification or escalate to an officer.
            </div>
          </div>

          {/* Case View Inspection */}
          <div className="rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between border-b border-[#111111] pb-3">
              <div>
                <span className="mono text-xs font-black uppercase text-[#666666]">
                  CASE INSPECTION
                </span>
                <h2 className="text-xl font-black text-[#111111]">CASE #R-1024</h2>
              </div>
              <span className="mono rounded border border-[#D97706] bg-[#FEF3C7] px-2.5 py-0.5 text-xs font-black text-[#92400E]">
                MEDIUM RISK
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-xs">
              {/* Risk Score */}
              <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3 flex items-center justify-between">
                <span className="mono font-bold text-[#666666]">EVALUATED SCORE</span>
                <div className="text-right">
                  <span className="mono text-2xl font-black text-[#111111]">42</span>
                  <span className="mono text-xs text-[#666666]"> / 100</span>
                </div>
              </div>

              {/* Signals */}
              <div className="rounded border border-[#111111] bg-white p-3">
                <span className="mono text-[11px] font-bold text-[#666666] block mb-2">ACTIVE SIGNALS</span>
                <ul className="space-y-1.5 mono text-xs font-bold">
                  <li className="flex items-center gap-2 text-[#92400E]">
                    <AlertTriangle size={13} className="shrink-0 text-[#D97706]" />
                    <span>DOB mismatch detected across policy vs hospital bill</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#111111]">
                    <CheckCircle2 size={13} className="shrink-0 text-[#20C979]" />
                    <span>Identity proof & name match verified (100% string similarity)</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#111111]">
                    <CheckCircle2 size={13} className="shrink-0 text-[#20C979]" />
                    <span>Claim amount ₹84,500 within inpatient standard median</span>
                  </li>
                </ul>
              </div>

              {/* Evidence count */}
              <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3 flex items-center justify-between">
                <span className="mono font-bold text-[#666666]">ATTACHED EVIDENCE</span>
                <span className="mono font-bold text-[#111111]">4 documents (OCR verified)</span>
              </div>

              {/* Recommended Action */}
              <div className="rounded border border-[#111111] bg-[#DDF8EA] p-3">
                <span className="mono text-[10px] font-black uppercase text-[#111111] block">
                  RECOMMENDED NEXT ACTION
                </span>
                <p className="font-black text-[#111111] mt-0.5 text-sm">
                  In-place customer confirmation of date of birth, followed by review if unconfirmed.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/journey"
                  className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5"
                >
                  <span>TEST IN LIVE JOURNEY</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/review"
                  className="mono rounded border border-[#111111] bg-white px-3 py-2 text-xs font-bold text-[#111111] shadow-[1px_1px_0px_#111111] hover:bg-[#F7F6F2]"
                >
                  Open Human Review Dossier →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
