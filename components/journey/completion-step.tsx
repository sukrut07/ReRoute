"use client";

import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, FileText, Sparkles, ExternalLink, RotateCcw } from "lucide-react";

interface CompletionStepProps {
  claimId: string;
  journeyId: string;
  customerName: string;
  onRestart: () => void;
}

export function CompletionStep({
  claimId,
  journeyId,
  customerName,
  onRestart,
}: CompletionStepProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <Sparkles size={13} strokeWidth={2.5} />
          JOURNEY FINALIZED · 100% COMPLETE
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Journey execution complete.
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          All evidence has been collected, discrepancies reconciled via ReRoute, and the case dossier has been prepared for authorized review.
        </p>
      </div>

      {/* Completion Card */}
      <div className="rounded-lg border border-[#111111] bg-white p-5 sm:p-7 shadow-[3px_3px_0px_#111111]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-4 gap-3">
          <div>
            <span className="mono text-[10px] font-bold uppercase text-[#666666]">
              CASE REFERENCE
            </span>
            <h3 className="text-2xl font-black text-[#111111]">{journeyId}</h3>
            <p className="mono text-xs text-[#666666]">Claim ID: {claimId} · Claimant: {customerName}</p>
          </div>

          <div className="rounded border border-[#111111] bg-[#DDF8EA] px-3.5 py-1.5 text-right">
            <span className="mono block text-[10px] uppercase text-[#666666]">
              CURRENT STATUS
            </span>
            <span className="text-xs sm:text-sm font-black text-[#111111]">
              Ready for final human decision
            </span>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-center gap-3 rounded border border-neutral-200 bg-[#F7F6F2] p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C979] text-[#111111]">
              <Check size={12} strokeWidth={3} />
            </div>
            <div>
              <p className="text-xs font-black text-[#111111]">All 4 Required Documents Verified</p>
              <p className="text-[11px] text-[#666666]">Policy Schedule, Hospital Invoice, Discharge Summary, Identity Card</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded border border-neutral-200 bg-[#F7F6F2] p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C979] text-[#111111]">
              <Check size={12} strokeWidth={3} />
            </div>
            <div>
              <p className="text-xs font-black text-[#111111]">Date of Birth Discrepancy Resolved via ReRoute</p>
              <p className="text-[11px] text-[#666666]">Confirmed matching official policy record without restarting the application</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded border border-neutral-200 bg-[#F7F6F2] p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C979] text-[#111111]">
              <Check size={12} strokeWidth={3} />
            </div>
            <div>
              <p className="text-xs font-black text-[#111111]">Deterministic Risk Screening Completed</p>
              <p className="text-[11px] text-[#666666]">Risk Score 42/100 (Medium) — Queued for routine claims officer review</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded border border-neutral-200 bg-[#F7F6F2] p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C979] text-[#111111]">
              <Check size={12} strokeWidth={3} />
            </div>
            <div>
              <p className="text-xs font-black text-[#111111]">Review Package Prepared for Adjudicator</p>
              <p className="text-[11px] text-[#666666]">Includes extracted entities, audit trail, confidence scores, and customer confirmation</p>
            </div>
          </div>
        </div>

        {/* Responsible AI Disclaimer Banner */}
        <div className="mt-5 rounded border border-dashed border-neutral-400 bg-[#F7F6F2] p-3 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-[#111111]">
            <ShieldCheck size={14} className="text-[#20C979]" />
            <span>RESPONSIBLE AI GUARANTEE</span>
          </div>
          <p className="mt-1 leading-relaxed text-[11px] text-[#666666]">
            ReRoute does not make autonomous financial denials or final settlements. ReRoute coordinates and assists the journey, ensuring the case is 100% prepared for human decision-makers with zero missing evidence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#111111] pt-4">
          <button
            onClick={onRestart}
            className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-white px-3.5 py-2 text-xs font-bold text-[#111111] shadow-[1px_1px_0px_#111111] hover:bg-neutral-100"
          >
            <RotateCcw size={13} />
            <span>Reset Demo Journey</span>
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/review"
              className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-[#111111] px-4 py-2 text-xs font-black text-white shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#333333]"
            >
              <FileText size={13} />
              <span>INSPECT IN HUMAN REVIEW QUEUE</span>
              <ExternalLink size={12} />
            </Link>

            <Link
              href="/dashboard"
              className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
            >
              <span>VIEW JOURNEY ANALYTICS</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
