"use client";

import { ExplainabilityContext } from "@/lib/types";
import { X, ShieldCheck } from "lucide-react";

interface ExplainabilityDrawerProps {
  context: ExplainabilityContext | null;
  onClose: () => void;
}

export function ExplainabilityModal({ context, onClose }: ExplainabilityDrawerProps) {
  if (!context) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      {/* Backdrop click to dismiss */}
      <div className="flex-1" onClick={onClose} />

      {/* Right-Side Drawer */}
      <aside className="relative flex h-full w-full max-w-md flex-col justify-between border-l border-[#111111] bg-[#F7F6F2] p-5 sm:p-6 text-[#111111] shadow-[-4px_0px_0px_#111111] overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#111111] pb-3.5">
            <div>
              <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
                EXPLAINABLE AI DRAWER
              </span>
              <h3 className="text-lg font-black text-[#111111] mt-0.5">
                {context.title || "WHY WAS THIS FLAGGED?"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded border border-[#111111] bg-white text-[#111111] hover:bg-neutral-100"
              aria-label="Close Explainability Drawer"
            >
              <X size={15} />
            </button>
          </div>

          {/* Section 10 Standardized Sections: WHAT HAPPENED? / WHY? / EVIDENCE / CONFIDENCE / NEXT ACTION */}
          <div className="mt-4 space-y-3 text-xs">
            {/* 1. WHAT HAPPENED? */}
            <div className="rounded border border-[#111111] bg-white p-3.5">
              <span className="mono text-[10px] font-black uppercase text-[#666666]">
                WHAT HAPPENED?
              </span>
              <p className="mt-1 text-xs font-bold text-[#111111] leading-snug">
                {context.summary || "DOB differs between two submitted documents."}
              </p>
            </div>

            {/* 2. WHY? */}
            <div className="rounded border border-[#111111] bg-white p-3.5">
              <span className="mono text-[10px] font-black uppercase text-[#666666]">
                WHY?
              </span>
              <p className="mt-1 text-xs text-[#111111] leading-relaxed">
                Critical identity information must remain consistent across submitted records to prevent misattribution and ensure policy entitlement validity.
              </p>
            </div>

            {/* 3. EVIDENCE */}
            <div className="rounded border border-[#111111] bg-white p-3.5">
              <span className="mono text-[10px] font-black uppercase text-[#666666]">
                EVIDENCE
              </span>
              <div className="mt-2 space-y-1.5 mono">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-1">
                  <span className="text-[#111111]">Policy Schedule</span>
                  <span className="text-[#20C979] font-bold">14/07/1998</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#111111]">Hospital Bill</span>
                  <span className="text-[#D9414B] font-bold">17/07/1998</span>
                </div>
              </div>
            </div>

            {/* 4. CONFIDENCE & 5. NEXT ACTION */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded border border-[#111111] bg-white p-3">
                <span className="mono text-[10px] font-black uppercase text-[#666666]">
                  CONFIDENCE
                </span>
                <p className="mono mt-1 text-2xl font-black text-[#20C979]">
                  {Math.round(context.confidence * 100)}%
                </p>
                <span className="mono text-[9px] text-[#666666]">Deterministic OCR</span>
              </div>

              <div className="rounded border border-[#111111] bg-white p-3">
                <span className="mono text-[10px] font-black uppercase text-[#666666]">
                  NEXT ACTION
                </span>
                <p className="mt-1 text-xs font-black text-[#111111] leading-tight">
                  Customer confirmation
                </p>
                <span className="mono text-[9px] text-[#20C979]">In-Place Reroute</span>
              </div>
            </div>

            {/* Regulatory Rule Citation */}
            <div className="rounded border border-neutral-300 bg-white p-3 text-[11px] text-[#666666]">
              <div className="flex items-center gap-1.5 text-[#111111] font-bold">
                <ShieldCheck size={13} className="text-[#20C979]" />
                <span>Rule Reference: {context.policyRuleId}</span>
              </div>
              <p className="mt-1 italic">
                &ldquo;{context.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Close */}
        <div className="mt-4 border-t border-[#111111] pt-3">
          <button
            onClick={onClose}
            className="mono w-full rounded border border-[#111111] bg-[#111111] py-2 text-xs font-black text-white hover:bg-[#333333]"
          >
            DISMISS EXPLANATION
          </button>
        </div>
      </aside>
    </div>
  );
}
