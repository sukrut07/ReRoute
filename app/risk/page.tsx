"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  ShieldAlert,
  AlertTriangle,
  Info,
  ArrowRight,
} from "lucide-react";

export default function RiskPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("R-1024");

  const riskSignals = [
    { label: "Identity mismatch", count: 18, pct: 36, color: "bg-[#F2A900]" },
    { label: "Document duplication", count: 11, pct: 22, color: "bg-[#E85C65]" },
    { label: "Amount anomaly", count: 9, pct: 18, color: "bg-blue-400" },
    { label: "Repeated submissions", count: 7, pct: 14, color: "bg-[#F2A900]" },
    { label: "Low extraction confidence", count: 5, pct: 10, color: "bg-neutral-400" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-[#101010] pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-white px-2.5 py-0.5 text-xs font-black uppercase text-[#101010]">
            <ShieldAlert size={13} />
            TRANSPARENT SYNTHETIC DEMONSTRATION LAYER
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#101010]">
            RISK INTELLIGENCE
          </h1>
          <p className="mt-1 text-sm text-[#555555]">
            Supports the routing and review logic rather than making black-box automated denials.
          </p>
        </div>

        {/* Section 24: Top Cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border-2 border-[#101010] bg-white p-5 shadow-[4px_4px_0px_#101010]">
            <span className="mono text-xs font-bold text-[#555555]">ACTIVE CASES</span>
            <p className="mt-2 text-3xl font-black text-[#101010]">128</p>
            <p className="mono mt-1 text-xs text-[#555555]">Total synthetic submissions</p>
          </div>

          <div className="rounded-lg border-2 border-[#101010] bg-[#D7F7E7] p-5 shadow-[4px_4px_0px_#101010]">
            <span className="mono text-xs font-bold text-[#101010]">LOW</span>
            <p className="mt-2 text-3xl font-black text-[#101010]">94</p>
            <p className="mono mt-1 text-xs text-[#555555]">73.4% of total traffic</p>
          </div>

          <div className="rounded-lg border-2 border-[#101010] bg-[#FFF8E7] p-5 shadow-[4px_4px_0px_#101010]">
            <span className="mono text-xs font-bold text-[#B45309]">MEDIUM</span>
            <p className="mt-2 text-3xl font-black text-[#B45309]">26</p>
            <p className="mono mt-1 text-xs text-[#B45309]">Reroute & confirmation active</p>
          </div>

          <div className="rounded-lg border-2 border-[#101010] bg-[#FDE8E9] p-5 shadow-[4px_4px_0px_#101010]">
            <span className="mono text-xs font-bold text-[#E85C65]">HIGH</span>
            <p className="mt-2 text-3xl font-black text-[#E85C65]">8</p>
            <p className="mono mt-1 text-xs text-[#E85C65]">Routed to Human Review</p>
          </div>
        </section>

        {/* Section 24 & 25: Risk Signals & Case View */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Section 24: Risk Signals Horizontal Bars */}
          <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
            <div className="border-b-2 border-[#101010] pb-3">
              <span className="mono text-xs font-black uppercase text-[#555555]">
                SIGNAL CLASSIFICATION
              </span>
              <h2 className="text-xl font-black text-[#101010]">RISK SIGNALS</h2>
            </div>

            <div className="mt-6 space-y-4">
              {riskSignals.map((sig) => (
                <div key={sig.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#101010]">{sig.label}</span>
                    <span className="mono font-bold text-[#555555]">{sig.count} cases</span>
                  </div>
                  <div className="h-3 w-full rounded border border-[#101010] bg-[#FAF9F5] overflow-hidden">
                    <div
                      className={`h-full ${sig.color}`}
                      style={{ width: `${sig.pct * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded border border-neutral-300 bg-[#FAF9F5] p-3 text-xs text-[#555555]">
              Signals are evaluated deterministically to feed routing logic, not autonomous denial algorithms.
            </div>
          </div>

          {/* Section 25: Case View */}
          <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
            <div className="flex items-center justify-between border-b-2 border-[#101010] pb-3">
              <div>
                <span className="mono text-xs font-black uppercase text-[#555555]">
                  CASE INSPECTION
                </span>
                <h2 className="text-xl font-black text-[#101010]">CASE #R-1024</h2>
              </div>
              <span className="mono rounded border-2 border-[#101010] bg-[#FFF8E7] px-2.5 py-0.5 text-xs font-black text-[#B45309]">
                MEDIUM RISK
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs font-bold">
              {/* Risk Score */}
              <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3 flex items-center justify-between">
                <span className="mono text-[#555555]">RISK SCORE</span>
                <span className="mono text-xl font-black text-[#101010]">
                  42 / 100 <span className="text-xs text-[#B45309] font-black">MEDIUM</span>
                </span>
              </div>

              {/* Signals */}
              <div className="rounded border border-[#101010] bg-white p-3">
                <span className="mono text-[#555555] block mb-2">SIGNALS</span>
                <ul className="space-y-1.5 mono">
                  <li className="flex items-center gap-1.5 text-[#E85C65]">
                    <AlertTriangle size={13} className="shrink-0" />
                    <span>! DOB mismatch</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-[#F2A900]">
                    <AlertTriangle size={13} className="shrink-0" />
                    <span>! Amount anomaly</span>
                  </li>
                </ul>
              </div>

              {/* Evidence */}
              <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3 flex items-center justify-between">
                <span className="mono text-[#555555]">EVIDENCE</span>
                <span className="mono font-bold text-[#101010]">4 documents</span>
              </div>

              {/* Recommended Action */}
              <div className="rounded border-2 border-[#20C77A] bg-[#D7F7E7] p-3">
                <span className="mono text-[10px] font-black uppercase text-[#101010] block">
                  RECOMMENDED ACTION
                </span>
                <p className="font-black text-[#101010] mt-0.5">Human review</p>
              </div>

              {/* Disclaimer */}
              <div className="rounded border border-dashed border-[#101010] bg-neutral-50 p-3 text-[11px] text-[#555555] leading-relaxed">
                <strong>Disclaimer:</strong> Synthetic demonstration risk score. Do not represent this as an actual fraud determination.
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/journey"
                  className="brutal-btn inline-flex items-center gap-1.5 bg-[#20C77A] px-4 py-2 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
                >
                  <span>TEST IN JOURNEY</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/review"
                  className="mono rounded border border-[#101010] bg-white px-3 py-2 text-xs font-bold hover:bg-neutral-100"
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
