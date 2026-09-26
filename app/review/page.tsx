"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { INITIAL_REVIEW_CASES } from "@/lib/synthetic-data";
import { HumanReviewCase } from "@/lib/types";
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  X,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";

export default function ReviewPage() {
  const [cases, setCases] = useState<HumanReviewCase[]>(INITIAL_REVIEW_CASES);
  const [activeCase, setActiveCase] = useState<HumanReviewCase | null>(INITIAL_REVIEW_CASES[0]);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const handleAction = (caseId: string, actionName: string) => {
    setActionNotice(`Action applied: "${actionName}" for ${caseId}. Audit log updated.`);
    setCases((prev) =>
      prev.map((c) =>
        c.caseId === caseId
          ? {
              ...c,
              status:
                actionName === "Approve Next Step"
                  ? "APPROVED_NEXT_STEP"
                  : actionName === "Request Clarification"
                  ? "CLARIFICATION_REQUESTED"
                  : "IN_REVIEW",
              reviewerNotes: `Officer action executed: ${actionName} at ${new Date().toLocaleTimeString()}`,
            }
          : c
      )
    );

    setTimeout(() => {
      setActionNotice(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#101010]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-black pb-6">
          <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-black px-2.5 py-1 text-xs font-black uppercase text-[#54e38e]">
            <Users size={13} />
            HUMAN-IN-THE-LOOP OVERSIGHT
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#101010]">
            Human Review Queue
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Cases flagged by the Reroute Engine with conflicting records, high risk scores, or low OCR clarity.
          </p>
        </div>

        {/* Action Notice */}
        {actionNotice && (
          <div className="mt-4 border-2 border-black bg-[#54e38e] p-3 text-xs font-black text-black shadow-[3px_3px_0px_#101010]">
            ✓ {actionNotice}
          </div>
        )}

        {/* Layout: Queue List on Left, Case Dossier on Right */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Pending Cases List */}
          <div>
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="mono text-xs font-bold uppercase text-neutral-500">
                PENDING AUDIT QUEUE ({cases.length})
              </span>
              <span className="mono text-[11px] font-bold text-amber-900">
                Sorted by Priority & Risk Index
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {cases.map((c) => {
                const isSelected = activeCase?.caseId === c.caseId;
                const isHigh = c.riskScore >= 60;
                return (
                  <div
                    key={c.caseId}
                    onClick={() => setActiveCase(c)}
                    className={`cursor-pointer border-2 p-4 transition-all ${
                      isSelected
                        ? "border-black bg-white shadow-[4px_4px_0px_#101010]"
                        : "border-neutral-300 bg-[#fffef8] hover:border-black hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="mono text-xs font-black text-[#101010]">{c.caseId}</span>
                          <span
                            className={`mono border px-1.5 py-0.2 text-[9px] font-black uppercase ${
                              isHigh
                                ? "border-red-600 bg-red-100 text-red-800"
                                : "border-amber-600 bg-amber-100 text-amber-900"
                            }`}
                          >
                            Risk: {c.riskScore}/100
                          </span>
                        </div>
                        <h4 className="mt-1 text-base font-black text-[#101010]">{c.customerName}</h4>
                        <p className="mono text-xs text-neutral-600">
                          {c.claimAmount} · {c.hospitalName}
                        </p>
                      </div>

                      <span
                        className={`mono border px-2 py-0.5 text-[10px] font-bold uppercase ${
                          c.status === "APPROVED_NEXT_STEP"
                            ? "border-emerald-600 bg-[#e7f9ee] text-emerald-800"
                            : c.status === "CLARIFICATION_REQUESTED"
                            ? "border-blue-600 bg-blue-100 text-blue-900"
                            : "border-neutral-600 bg-neutral-100 text-neutral-800"
                        }`}
                      >
                        {c.status.replace(/_/g, " ")}
                      </span>
                    </div>

                    <div className="mt-3 border-t pt-2 text-xs font-semibold text-neutral-700">
                      <span className="text-amber-800 font-bold">Issue:</span> {c.issueTitle}
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>{c.evidenceDocs.length} Documents Attached</span>
                      <span className="mono font-bold text-neutral-700">
                        AI Confidence: {Math.round(c.aiConfidence * 100)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Review Dossier */}
          {activeCase && (
            <div className="brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs font-black uppercase text-neutral-500">
                      DOSSIER INSPECTION
                    </span>
                    <span className="border border-black bg-black px-2 py-0.5 text-[10px] font-bold text-[#54e38e]">
                      {activeCase.caseId}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#101010]">
                    {activeCase.customerName}
                  </h3>
                  <p className="mono text-xs text-neutral-600">
                    Hospital: {activeCase.hospitalName} · Claimed: {activeCase.claimAmount}
                  </p>
                </div>

                <div className="border-2 border-black bg-white p-2.5 text-right">
                  <span className="mono block text-[10px] uppercase text-neutral-500">
                    AI CONFIDENCE
                  </span>
                  <span className="text-xl font-black text-emerald-700">
                    {Math.round(activeCase.aiConfidence * 100)}%
                  </span>
                </div>
              </div>

              {/* Goal & Journey State Summary */}
              <div className="mt-5 space-y-3 text-xs">
                <div className="border-2 border-black bg-white p-3.5">
                  <span className="mono text-[10px] uppercase text-neutral-500">CUSTOMER GOAL</span>
                  <p className="mt-0.5 text-sm font-bold text-[#101010]">
                    &ldquo;{activeCase.customerGoal}&rdquo;
                  </p>
                </div>

                {/* Progress Checklist */}
                <div className="border-2 border-black bg-white p-3.5">
                  <span className="mono text-[10px] uppercase text-neutral-500 block mb-2">
                    COMPLETED EVIDENCE VERIFICATION
                  </span>
                  <div className="grid grid-cols-2 gap-2 font-bold text-neutral-800">
                    <div className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 size={13} />
                      <span>Policy Schedule Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 size={13} />
                      <span>Hospital Empanelment Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 size={13} />
                      <span>Discharge Summary Extracted</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 size={13} />
                      <span>Claim Line Items Reconciled</span>
                    </div>
                  </div>
                </div>

                {/* Conflict / Issue Details */}
                <div className="border-2 border-amber-600 bg-amber-50 p-3.5">
                  <span className="mono text-[10px] font-black uppercase text-amber-900 block">
                    FLAGGED ISSUE FOR HUMAN AUDIT
                  </span>
                  <h5 className="font-black text-amber-950 mt-1">{activeCase.issueTitle}</h5>
                  <p className="mt-1 leading-relaxed text-amber-900">{activeCase.issueDescription}</p>

                  {activeCase.customerSelectedValue && (
                    <div className="mt-3 border border-amber-400 bg-white p-2">
                      <span className="mono text-[10px] text-neutral-500 uppercase">
                        CUSTOMER CONFIRMATION VIA REROUTE
                      </span>
                      <p className="font-bold text-[#101010]">{activeCase.customerSelectedValue}</p>
                    </div>
                  )}
                </div>

                {/* Attached Evidence Files */}
                <div className="border-2 border-black bg-white p-3.5">
                  <span className="mono text-[10px] uppercase text-neutral-500 block mb-2">
                    SUBMITTED EVIDENCE ATTACHMENTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.evidenceDocs.map((docName) => (
                      <span
                        key={docName}
                        className="mono flex items-center gap-1 border border-neutral-300 bg-neutral-100 px-2 py-1 text-[11px] font-bold text-neutral-800"
                      >
                        <FileText size={12} />
                        {docName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Next Action */}
                <div className="border-2 border-black bg-[#e7f9ee] p-3.5">
                  <span className="mono text-[10px] font-black uppercase text-emerald-900 block">
                    RECOMMENDED OFFICER NEXT ACTION
                  </span>
                  <p className="font-bold text-neutral-900 mt-0.5">
                    {activeCase.recommendedNextAction}
                  </p>
                </div>
              </div>

              {/* Officer Control Actions */}
              <div className="mt-6 border-t-2 border-black pt-4">
                <span className="mono text-xs font-bold uppercase text-neutral-500 block mb-3">
                  AUTHORIZED OFFICER DECISION CONTROLS
                </span>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction(activeCase.caseId, "Approve Next Step")}
                    className="brutal-btn bg-[#54e38e] px-4 py-2.5 text-xs font-black text-black hover:bg-[#40d27c]"
                  >
                    ✓ APPROVE NEXT STEP
                  </button>

                  <button
                    onClick={() => handleAction(activeCase.caseId, "Request Clarification")}
                    className="brutal-btn bg-white px-4 py-2.5 text-xs font-bold text-black hover:bg-neutral-100"
                  >
                    REQUEST MORE INFORMATION
                  </button>

                  <button
                    onClick={() => handleAction(activeCase.caseId, "Escalate Case")}
                    className="brutal-btn bg-black px-4 py-2.5 text-xs font-bold text-[#ffd166] hover:bg-neutral-800"
                  >
                    ESCALATE TO SENIOR PANEL
                  </button>
                </div>

                <p className="mono mt-3 text-[10px] text-neutral-500">
                  Responsible AI Note: Human officer decisions are logged to the audit ledger. The AI system does not execute final monetary disbursement.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
