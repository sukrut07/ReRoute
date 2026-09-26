"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Info,
  ArrowRight,
  FileText,
  TrendingUp,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function RiskPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("R-1024");

  const riskSignals = [
    { label: "DOB / Identity Discrepancy", count: 18, pct: 36, color: "bg-amber-400" },
    { label: "Potential Duplicate Document", count: 11, pct: 22, color: "bg-red-500" },
    { label: "Claim Amount Variance (High Ticket)", count: 9, pct: 18, color: "bg-blue-400" },
    { label: "Repeated Claims in 30 Days", count: 7, pct: 14, color: "bg-amber-400" },
    { label: "Low OCR Extraction Confidence", count: 5, pct: 10, color: "bg-neutral-400" },
  ];

  const riskCases = [
    {
      id: "R-1024",
      claimant: "Sukrut Dusane",
      journeyType: "Health Insurance Claim",
      claimAmount: "₹84,500",
      hospital: "CityCare Super Speciality Hospital",
      riskScore: 42,
      tier: "MEDIUM",
      signals: ["! DOB mismatch (Policy 14/07 vs Hospital 17/07)", "! Claim amount variance (+₹7,000 above median)"],
      documentsCount: 4,
      recommendedAction: "Resolve via customer DOB confirmation or review packet audit",
    },
    {
      id: "R-1026",
      claimant: "Rajesh Verma",
      journeyType: "Health Insurance Claim",
      claimAmount: "₹1,85,000",
      hospital: "Fortis Escorts Heart Institute",
      riskScore: 68,
      tier: "HIGH",
      signals: ["! High ticket claim amount anomaly", "! 2nd orthopedic claim within 45 days"],
      documentsCount: 3,
      recommendedAction: "Mandatory human adjudicator investigation",
    },
    {
      id: "R-1025",
      claimant: "Priya Sharma",
      journeyType: "Health Insurance Claim",
      claimAmount: "₹32,400",
      hospital: "Apollo Spectra Hospital",
      riskScore: 14,
      tier: "LOW",
      signals: ["Standard low-variance claim", "All identity records aligned"],
      documentsCount: 4,
      recommendedAction: "Eligible for fast-track human sign-off",
    },
  ];

  const selectedCase = riskCases.find((c) => c.id === selectedCaseId) || riskCases[0];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-black pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-black px-2.5 py-1 text-xs font-black uppercase text-[#54e38e]">
            <ShieldAlert size={13} />
            SCREENING & ANOMALY DETECTION
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#101010]">
            Risk Intelligence
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Deterministic risk signals, cross-document discrepancy screening, and anomaly scoring.
          </p>
        </div>

        {/* Top KPI Cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="brutal-border brutal-shadow bg-white p-5">
            <span className="mono text-xs font-bold text-neutral-500">ACTIVE CASES</span>
            <p className="mt-2 text-4xl font-black text-[#101010]">128</p>
            <p className="mono mt-1 text-xs text-neutral-600">Total screened submissions</p>
          </div>

          <div className="brutal-border brutal-shadow bg-[#e7f9ee] p-5">
            <span className="mono text-xs font-bold text-emerald-800">LOW RISK (0 - 30)</span>
            <p className="mt-2 text-4xl font-black text-emerald-900">94</p>
            <p className="mono mt-1 text-xs text-emerald-700">73.4% of total traffic</p>
          </div>

          <div className="brutal-border brutal-shadow bg-[#fff0b8] p-5">
            <span className="mono text-xs font-bold text-amber-900">MEDIUM RISK (31 - 60)</span>
            <p className="mt-2 text-4xl font-black text-amber-950">26</p>
            <p className="mono mt-1 text-xs text-amber-800">Reroute / clarification active</p>
          </div>

          <div className="brutal-border brutal-shadow bg-[#ffdada] p-5">
            <span className="mono text-xs font-bold text-red-900">HIGH RISK (61 - 100)</span>
            <p className="mt-2 text-4xl font-black text-red-900">8</p>
            <p className="mono mt-1 text-xs text-red-700">Escalated to Human Review</p>
          </div>
        </section>

        {/* Risk Signals Frequency Chart & Case Detail */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* Risk Signals Horizontal Bars */}
          <div className="brutal-border brutal-shadow bg-white p-6">
            <div className="border-b-2 border-black pb-3">
              <span className="mono text-xs font-bold uppercase text-neutral-500">
                SIGNAL TAXONOMY
              </span>
              <h3 className="text-xl font-black text-[#101010]">Observed Risk Signals</h3>
              <p className="mt-1 text-xs text-neutral-600">
                Transparent rule triggers evaluated on synthetic claim batches.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {riskSignals.map((sig) => (
                <div key={sig.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{sig.label}</span>
                    <span className="mono font-black">{sig.count} cases</span>
                  </div>
                  <div className="h-3 w-full border border-black bg-neutral-100">
                    <div
                      className={`h-full ${sig.color}`}
                      style={{ width: `${sig.pct * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Responsible AI Notice */}
            <div className="mt-8 border border-dashed border-neutral-400 bg-neutral-100 p-3.5 text-xs text-neutral-700">
              <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                <Info size={14} />
                <span>DEMONSTRATION DISCLAIMER</span>
              </div>
              <p className="mt-1 leading-relaxed">
                Synthetic demonstration risk score — not a financial decision or fraud determination. Reroute does not autonomously reject claims or make credit/underwriting choices.
              </p>
            </div>
          </div>

          {/* Case Risk View Card */}
          <div className="brutal-border brutal-shadow bg-[#fffef8] p-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <div>
                <span className="mono text-xs font-bold uppercase text-neutral-500">
                  CASE INSPECTION
                </span>
                <h3 className="text-xl font-black text-[#101010]">CASE #{selectedCase.id}</h3>
              </div>
              <span
                className={`mono border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase ${
                  selectedCase.tier === "HIGH"
                    ? "bg-[#ff5c5c] text-white"
                    : selectedCase.tier === "MEDIUM"
                    ? "bg-[#ffd166] text-black"
                    : "bg-[#54e38e] text-black"
                }`}
              >
                {selectedCase.tier} RISK
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 border-2 border-black bg-white p-3.5">
                <div>
                  <span className="mono text-[10px] text-neutral-500 uppercase">CLAIMANT</span>
                  <p className="text-sm font-black text-[#101010]">{selectedCase.claimant}</p>
                </div>
                <div>
                  <span className="mono text-[10px] text-neutral-500 uppercase">CLAIM AMOUNT</span>
                  <p className="text-sm font-black text-emerald-800">{selectedCase.claimAmount}</p>
                </div>
                <div className="col-span-2 pt-1 border-t">
                  <span className="mono text-[10px] text-neutral-500 uppercase">HOSPITAL</span>
                  <p className="font-bold text-[#101010]">{selectedCase.hospital}</p>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="border-2 border-black bg-white p-3.5">
                <div className="flex items-baseline justify-between">
                  <span className="mono font-bold text-neutral-600">COMPUTED SCORE</span>
                  <span className="text-2xl font-black text-[#101010]">
                    {selectedCase.riskScore} <span className="text-xs text-neutral-500">/ 100</span>
                  </span>
                </div>
                <div className="mt-2 h-2.5 w-full border border-black bg-neutral-100">
                  <div
                    className={`h-full ${
                      selectedCase.tier === "HIGH"
                        ? "bg-[#ff5c5c]"
                        : selectedCase.tier === "MEDIUM"
                        ? "bg-[#ffd166]"
                        : "bg-[#54e38e]"
                    }`}
                    style={{ width: `${selectedCase.riskScore}%` }}
                  />
                </div>
              </div>

              {/* Signals */}
              <div className="border-2 border-black bg-white p-3.5">
                <span className="mono font-bold text-neutral-600 block mb-2">TRIGGERED SIGNALS</span>
                <ul className="space-y-1.5 font-bold">
                  {selectedCase.signals.map((s, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-neutral-800">
                      <AlertTriangle size={13} className="text-amber-600 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Action */}
              <div className="border-2 border-black bg-[#e7f9ee] p-3.5">
                <span className="mono text-[10px] font-black uppercase text-emerald-900 block">
                  RECOMMENDED ACTION
                </span>
                <p className="font-bold text-neutral-900 mt-1">{selectedCase.recommendedAction}</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/journey"
                  className="brutal-btn bg-[#54e38e] px-4 py-2 text-xs font-black text-black hover:bg-[#40d27c]"
                >
                  TEST REROUTE ON THIS CASE →
                </Link>
                <Link
                  href="/review"
                  className="mono border border-black bg-white px-3 py-2 text-xs font-bold hover:bg-neutral-100"
                >
                  View Review Dossier
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Case Selector Tabs */}
        <section className="mt-8 border-2 border-black bg-white p-5">
          <span className="mono text-xs font-bold uppercase text-neutral-500">
            SWITCH RISK CASE ARTIFACT
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {riskCases.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`mono border-2 px-3 py-1.5 text-xs font-bold transition-all ${
                  selectedCaseId === c.id
                    ? "border-black bg-black text-[#54e38e]"
                    : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:border-black hover:bg-white"
                }`}
              >
                Case #{c.id} · {c.claimant} ({c.tier})
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
