"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Users, FileText, ArrowRight, Check, AlertTriangle, ShieldCheck } from "lucide-react";

export default function ReviewPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("CASE #R-1024");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const cases = [
    {
      caseId: "CASE #R-1024",
      goal: "Health insurance reimbursement",
      title: "Health Insurance Claim",
      issue: "DOB conflict (14/07 vs 17/07)",
      confidence: "72%",
      risk: "Medium",
      documentsCount: 4,
      evidence: ["Policy Schedule", "Hospital Bill", "Aadhaar Card", "Discharge Summary"],
      state: "Verification",
      summary: "Two submitted records contain differing dates of birth. Dynamic in-place reroute executed; customer confirmed 14/07/1998 matches official policy.",
      recommendedAction: "Review hospital invoice discrepancy and approve settlement",
    },
    {
      caseId: "CASE #R-1026",
      goal: "Knee replacement surgery reimbursement",
      title: "Surgery Reimbursement Claim",
      issue: "High amount anomaly (₹1,85,000)",
      confidence: "65%",
      risk: "High",
      documentsCount: 3,
      evidence: ["Policy Schedule", "Hospital Bill", "Implant Barcode Record"],
      state: "Verification",
      summary: "Claim amount ₹1,85,000 exceeds regional clinical median by 34%. Requires implant barcode and surgeon invoice validation.",
      recommendedAction: "Verify implant invoice catalog before disbursement",
    },
    {
      caseId: "CASE #R-1028",
      goal: "Emergency room CT scan claim",
      title: "Daycare Emergency Claim",
      issue: "Clean cross-match verification",
      confidence: "98%",
      risk: "Low",
      documentsCount: 3,
      evidence: ["Policy Schedule", "ER Bill", "CT Report"],
      state: "Completion",
      summary: "All fields cross-checked with 100% concordance. Daycare trauma protocol satisfied.",
      recommendedAction: "Instant approval for automated settlement",
    },
  ];

  const activeCase = cases.find((c) => c.caseId === selectedCaseId) || cases[0];

  const handleAction = (action: string) => {
    setStatusMessage(`Action taken: ${action} for ${activeCase.caseId}`);
    setTimeout(() => setStatusMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#111111] pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
            <Users size={13} strokeWidth={2.5} />
            REGULATED DECISION GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
            HUMAN REVIEW WORKSPACE
          </h1>
          <p className="mt-1 text-sm text-[#666666]">
            Claims officer adjudication environment. AI assists with extraction and discrepancy isolation; licensed officers decide final outcomes.
          </p>
        </div>

        {/* Section 18: Human-in-the-loop Trust Visual (AI DETECTS → AI EXPLAINS → HUMAN REVIEWS → HUMAN DECIDES) */}
        <div className="mt-6 rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="mono text-xs font-black text-[#111111]">GOVERNANCE PROTOCOL</span>
            <div className="flex flex-wrap items-center gap-2 mono text-xs font-bold">
              <span className="rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-[#111111]">
                AI DETECTS
              </span>
              <span className="text-[#666666]">→</span>
              <span className="rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-[#111111]">
                AI EXPLAINS
              </span>
              <span className="text-[#666666]">→</span>
              <span className="rounded border border-[#111111] bg-[#DDF8EA] px-2.5 py-1 text-[#111111]">
                HUMAN REVIEWS
              </span>
              <span className="text-[#666666]">→</span>
              <span className="rounded border border-[#111111] bg-[#20C979] px-2.5 py-1 text-[#111111]">
                HUMAN DECIDES
              </span>
            </div>
            <span className="mono text-[11px] text-[#666666]">ZERO BLACK-BOX DENIALS</span>
          </div>
        </div>

        {statusMessage && (
          <div className="mt-4 rounded border border-[#111111] bg-[#20C979] p-3 mono text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111]">
            ✓ {statusMessage}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.4fr] items-start">
          {/* Left Column: Review Queue */}
          <div className="space-y-4">
            <span className="mono text-xs font-black uppercase text-[#666666] block">
              REVIEW QUEUE ({cases.length} CASES)
            </span>

            {cases.map((c) => {
              const isSelected = activeCase.caseId === c.caseId;
              return (
                <div
                  key={c.caseId}
                  onClick={() => setSelectedCaseId(c.caseId)}
                  className={`cursor-pointer rounded-lg border transition-all p-4 ${
                    isSelected
                      ? "border-[#111111] bg-white shadow-[3px_3px_0px_#111111]"
                      : "border-neutral-300 bg-[#F7F6F2] hover:border-[#111111]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="mono text-xs font-black text-[#111111]">{c.caseId}</span>
                      <h3 className="text-base font-black text-[#111111] mt-0.5">{c.title}</h3>
                      <p className="mono text-xs text-[#92400E] font-bold mt-1">
                        {c.issue}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCaseId(c.caseId);
                      }}
                      className="mono rounded border border-[#111111] bg-[#20C979] px-2.5 py-1 text-xs font-black text-[#111111] shadow-[1px_1px_0px_#111111] hover:bg-[#1bb36d]"
                    >
                      REVIEW
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-2.5 mono text-[11px] text-[#666666]">
                    <span>Confidence: <strong className="text-[#111111]">{c.confidence}</strong></span>
                    <span>·</span>
                    <span>Risk: <strong className="text-[#111111]">{c.risk}</strong></span>
                    <span>·</span>
                    <span>{c.documentsCount} documents</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Case Dossier */}
          <div className="rounded-lg border border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
            <div className="flex items-center justify-between border-b border-[#111111] pb-3">
              <div>
                <span className="mono text-[10px] font-black uppercase text-[#666666]">
                  CASE INSPECTION DOSSIER
                </span>
                <h2 className="text-2xl font-black text-[#111111]">{activeCase.caseId}</h2>
              </div>
              <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-2.5 py-1 text-xs font-black text-[#111111]">
                CONFIDENCE {activeCase.confidence}
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              {/* Customer Goal */}
              <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
                <span className="mono text-[10px] uppercase text-[#666666]">CUSTOMER GOAL</span>
                <p className="text-sm font-black text-[#111111] mt-0.5">{activeCase.goal}</p>
              </div>

              {/* Current State & Issue */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
                  <span className="mono text-[10px] uppercase text-[#666666]">CURRENT STAGE</span>
                  <p className="text-sm font-black text-[#111111] mt-0.5">{activeCase.state}</p>
                </div>
                <div className="rounded border border-[#D97706] bg-[#FEF3C7] p-3">
                  <span className="mono text-[10px] uppercase text-[#92400E]">IDENTIFIED ISSUE</span>
                  <p className="text-sm font-black text-[#92400E] mt-0.5">{activeCase.issue}</p>
                </div>
              </div>

              {/* Attached Evidence */}
              <div className="rounded border border-[#111111] bg-white p-3">
                <span className="mono text-[10px] uppercase text-[#666666] block mb-1.5">
                  ATTACHED EVIDENCE
                </span>
                <div className="flex flex-wrap gap-2 mono">
                  {activeCase.evidence.map((doc) => (
                    <span
                      key={doc}
                      className="rounded border border-[#111111] bg-[#F7F6F2] px-2 py-1 text-xs font-bold text-[#111111]"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Summary */}
              <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
                <span className="mono text-[10px] uppercase text-[#666666]">AI EXPLANATION</span>
                <p className="text-xs font-medium text-[#111111] mt-1 leading-relaxed">
                  {activeCase.summary}
                </p>
              </div>

              {/* Recommended Action */}
              <div className="rounded border border-[#111111] bg-[#DDF8EA] p-3.5">
                <span className="mono text-[10px] font-black uppercase text-[#111111] block">
                  RECOMMENDED ACTION
                </span>
                <p className="text-sm font-black text-[#111111] mt-0.5">
                  {activeCase.recommendedAction}
                </p>
              </div>

              {/* Adjudication Controls */}
              <div className="pt-3 border-t border-[#111111]">
                <span className="mono text-[10px] font-black uppercase text-[#666666] block mb-3">
                  OFFICER ADJUDICATION CONTROLS
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => handleAction("REQUEST CLARIFICATION")}
                    className="mono rounded border border-[#111111] bg-white px-3.5 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#F7F6F2]"
                  >
                    REQUEST CLARIFICATION
                  </button>

                  <button
                    onClick={() => handleAction("APPROVE SETTLEMENT")}
                    className="mono rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
                  >
                    APPROVE SETTLEMENT
                  </button>

                  <button
                    onClick={() => handleAction("ESCALATE TO SENIOR AUDIT")}
                    className="mono rounded border border-[#111111] bg-[#111111] px-3.5 py-2 text-xs font-black text-white shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#333333]"
                  >
                    ESCALATE AUDIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
