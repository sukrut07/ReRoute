"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Users, FileText, ArrowRight, Check } from "lucide-react";

export default function ReviewPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("CASE #R-1024");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const cases = [
    {
      caseId: "CASE #R-1024",
      goal: "Health insurance claim",
      title: "Health Insurance Claim",
      issue: "DOB conflict",
      confidence: "72%",
      risk: "Medium",
      documentsCount: 4,
      evidence: ["Policy", "Hospital Bill", "ID"],
      state: "Verification",
      summary: "Two sources contain different dates of birth (14/07 vs 17/07). In-place reroute executed for customer confirmation.",
      recommendedAction: "Human verification",
    },
    {
      caseId: "CASE #R-1026",
      goal: "Knee replacement surgery reimbursement",
      title: "Health Insurance Claim",
      issue: "High amount anomaly",
      confidence: "65%",
      risk: "High",
      documentsCount: 3,
      evidence: ["Policy", "Hospital Bill", "Implant Barcode"],
      state: "Verification",
      summary: "Amount ₹1,85,000 exceeds standard regional median and requires implant verification.",
      recommendedAction: "Surgeon verification",
    },
    {
      caseId: "CASE #R-1028",
      goal: "Emergency room CT scan claim",
      title: "Health Insurance Claim",
      issue: "Clean audit verification",
      confidence: "98%",
      risk: "Low",
      documentsCount: 3,
      evidence: ["Policy", "ER Bill", "CT Report"],
      state: "Completion",
      summary: "All data sources matched with 100% agreement. Low risk daycare procedure.",
      recommendedAction: "Approve for settlement",
    },
  ];

  const activeCase = cases.find((c) => c.caseId === selectedCaseId) || cases[0];

  const handleAction = (action: string) => {
    setStatusMessage(`Action taken: ${action} for ${activeCase.caseId}`);
    setTimeout(() => setStatusMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-[#101010] pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-white px-2.5 py-0.5 text-xs font-black uppercase text-[#101010]">
            <Users size={13} />
            HUMAN-IN-THE-LOOP
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#101010]">
            HUMAN REVIEW QUEUE
          </h1>
          <p className="mt-1 text-sm text-[#555555]">
            Structured review dossiers for claims officers. Zero autonomous payout or denial decisions.
          </p>
        </div>

        {statusMessage && (
          <div className="mt-4 rounded-md border-2 border-[#101010] bg-[#20C77A] p-3 mono text-xs font-black text-[#101010] shadow-[2px_2px_0px_#101010]">
            ✓ {statusMessage}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.4fr] items-start">
          {/* Left Column: Review Queue (Section 22) */}
          <div className="space-y-4">
            <span className="mono text-xs font-black uppercase text-[#555555] block">
              REVIEW QUEUE ({cases.length} CASES)
            </span>

            {cases.map((c) => {
              const isSelected = activeCase.caseId === c.caseId;
              return (
                <div
                  key={c.caseId}
                  onClick={() => setSelectedCaseId(c.caseId)}
                  className={`cursor-pointer rounded-lg border-2 p-5 transition-all ${
                    isSelected
                      ? "border-[#101010] bg-white shadow-[4px_4px_0px_#101010]"
                      : "border-neutral-300 bg-[#FAF9F5] hover:border-[#101010]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="mono text-xs font-black text-[#101010]">{c.caseId}</span>
                      <h3 className="text-base font-black text-[#101010] mt-0.5">{c.title}</h3>
                      <p className="mono text-xs text-[#E85C65] font-bold mt-1">
                        {c.issue}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCaseId(c.caseId);
                      }}
                      className="brutal-btn rounded border border-[#101010] bg-[#20C77A] px-3 py-1 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
                    >
                      REVIEW
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-2.5 mono text-[11px] text-[#555555]">
                    <span>Confidence: <strong>{c.confidence}</strong></span>
                    <span>·</span>
                    <span>Risk: <strong>{c.risk}</strong></span>
                    <span>·</span>
                    <span>{c.documentsCount} documents</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Case View (Section 23) */}
          <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[5px_5px_0px_#101010]">
            <div className="flex items-center justify-between border-b-2 border-[#101010] pb-3">
              <div>
                <span className="mono text-[10px] font-black uppercase text-[#555555]">
                  CASE INSPECTION
                </span>
                <h2 className="text-2xl font-black text-[#101010]">{activeCase.caseId}</h2>
              </div>
              <span className="mono rounded border border-[#101010] bg-[#FAF9F5] px-2.5 py-1 text-xs font-black text-[#101010]">
                CONFIDENCE {activeCase.confidence}
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs font-bold">
              {/* Customer Goal */}
              <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
                <span className="mono text-[10px] uppercase text-[#555555]">CUSTOMER GOAL</span>
                <p className="text-sm font-black text-[#101010] mt-0.5">{activeCase.goal}</p>
              </div>

              {/* Current State & Issue */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
                  <span className="mono text-[10px] uppercase text-[#555555]">CURRENT STATE</span>
                  <p className="text-sm font-black text-[#101010] mt-0.5">{activeCase.state}</p>
                </div>
                <div className="rounded border border-[#101010] bg-[#FFF8E7] p-3">
                  <span className="mono text-[10px] uppercase text-[#B45309]">ISSUE</span>
                  <p className="text-sm font-black text-[#E85C65] mt-0.5">{activeCase.issue}</p>
                </div>
              </div>

              {/* Evidence */}
              <div className="rounded border border-[#101010] bg-white p-3">
                <span className="mono text-[10px] uppercase text-[#555555] block mb-1.5">
                  EVIDENCE
                </span>
                <div className="flex flex-wrap gap-2 mono">
                  {activeCase.evidence.map((doc) => (
                    <span
                      key={doc}
                      className="rounded border border-[#101010] bg-[#FAF9F5] px-2 py-1 text-xs font-bold text-[#101010]"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Summary */}
              <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
                <span className="mono text-[10px] uppercase text-[#555555]">AI SUMMARY</span>
                <p className="text-xs font-semibold text-[#101010] mt-1 leading-relaxed">
                  {activeCase.summary}
                </p>
              </div>

              {/* Recommended Action */}
              <div className="rounded border-2 border-[#20C77A] bg-[#D7F7E7] p-3.5">
                <span className="mono text-[10px] font-black uppercase text-[#101010] block">
                  RECOMMENDED ACTION
                </span>
                <p className="text-sm font-black text-[#101010] mt-0.5">
                  {activeCase.recommendedAction}
                </p>
              </div>

              {/* Actions: REQUEST CLARIFICATION, CONTINUE JOURNEY, ESCALATE */}
              <div className="pt-3 border-t-2 border-[#101010]">
                <span className="mono text-[10px] font-black uppercase text-[#555555] block mb-3">
                  ADJUDICATION CONTROLS
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => handleAction("REQUEST CLARIFICATION")}
                    className="brutal-btn rounded border border-[#101010] bg-white px-3.5 py-2 text-xs font-black text-[#101010] hover:bg-neutral-50"
                  >
                    REQUEST CLARIFICATION
                  </button>

                  <button
                    onClick={() => handleAction("CONTINUE JOURNEY")}
                    className="brutal-btn rounded border border-[#101010] bg-[#20C77A] px-4 py-2 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
                  >
                    CONTINUE JOURNEY
                  </button>

                  <button
                    onClick={() => handleAction("ESCALATE")}
                    className="brutal-btn rounded border border-[#101010] bg-[#101010] px-3.5 py-2 text-xs font-black text-white hover:bg-neutral-800"
                  >
                    ESCALATE
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
