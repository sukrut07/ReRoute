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
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <Sparkles size={13} />
          JOURNEY FINALIZED · 100% COMPLETE
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010] sm:text-4xl">
          Your journey is complete.
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          All evidence has been collected, discrepancies resolved via Reroute, and the case dossier has been prepared for authorized final review.
        </p>
      </div>

      {/* Completion Card */}
      <div className="brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-5">
          <div>
            <span className="mono text-xs font-bold uppercase text-neutral-500">
              CASE REFERENCE
            </span>
            <h3 className="text-2xl font-black text-[#101010]">{journeyId}</h3>
            <p className="mono text-xs text-neutral-600">Claim ID: {claimId} · Claimant: {customerName}</p>
          </div>

          <div className="border-2 border-black bg-[#e7f9ee] px-4 py-2 text-right">
            <span className="mono block text-[10px] uppercase text-neutral-500">
              CURRENT STATUS
            </span>
            <span className="text-sm font-black text-emerald-800">
              Ready for final human review
            </span>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 border-2 border-black bg-white p-3.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#54e38e] text-black">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-black text-[#101010]">All 4 Required Documents Verified</p>
              <p className="text-xs text-neutral-500">Policy Schedule, Hospital Invoice, Discharge Summary, Identity Card</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-2 border-black bg-white p-3.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#54e38e] text-black">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-black text-[#101010]">Date of Birth Discrepancy Resolved via Reroute</p>
              <p className="text-xs text-neutral-500">Confirmed matching UIDAI Aadhaar record without restarting the application</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-2 border-black bg-white p-3.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#54e38e] text-black">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-black text-[#101010]">Synthetic Risk Screening Completed</p>
              <p className="text-xs text-neutral-500">Risk Score 42/100 (Medium) — Queued for routine verification officer review</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-2 border-black bg-white p-3.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#54e38e] text-black">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <p className="text-sm font-black text-[#101010]">Review Package Prepared for Adjudicator</p>
              <p className="text-xs text-neutral-500">Includes extracted entities, audit trail, confidence scores, and customer confirmation</p>
            </div>
          </div>
        </div>

        {/* Responsible AI Disclaimer Banner */}
        <div className="mt-6 border-2 border-black bg-neutral-100 p-4 text-xs">
          <div className="flex items-center gap-2 font-bold text-neutral-900">
            <ShieldCheck size={16} className="text-emerald-700" />
            <span>RESPONSIBLE AI GUARANTEE</span>
          </div>
          <p className="mt-1 leading-relaxed text-neutral-600">
            Reroute does not provide autonomous financial approval, underwriting, or claim settlement. Reroute coordinates and assists the journey, ensuring the case is 100% prepared for human decision-makers with zero missing evidence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t-2 border-black pt-5">
          <button
            onClick={onRestart}
            className="mono brutal-btn flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-bold hover:bg-neutral-100"
          >
            <RotateCcw size={14} />
            <span>Reset Demo Journey</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/review"
              className="brutal-btn flex items-center gap-2 bg-black px-5 py-2.5 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
            >
              <FileText size={14} />
              <span>INSPECT IN HUMAN REVIEW QUEUE</span>
              <ExternalLink size={13} />
            </Link>

            <Link
              href="/dashboard"
              className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-5 py-2.5 text-xs font-black text-black hover:bg-[#40d27c]"
            >
              <span>VIEW JOURNEY ANALYTICS</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
