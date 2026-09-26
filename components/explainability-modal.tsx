"use client";

import { ExplainabilityContext } from "@/lib/types";
import { X, HelpCircle, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";

interface ExplainabilityDrawerProps {
  context: ExplainabilityContext | null;
  onClose: () => void;
}

export function ExplainabilityModal({ context, onClose }: ExplainabilityDrawerProps) {
  if (!context) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
      {/* Backdrop click to dismiss */}
      <div className="flex-1" onClick={onClose} />

      {/* Right-Side Drawer */}
      <aside className="relative flex h-full w-full max-w-md flex-col justify-between border-l-2 border-[#101010] bg-[#FAF9F5] p-6 text-[#101010] shadow-[-6px_0px_0px_#101010] sm:p-7 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between border-b-2 border-[#101010] pb-4">
            <div>
              <span className="mono text-[10px] font-black uppercase tracking-wider text-[#555555]">
                EXPLAINABLE AI DRAWER
              </span>
              <h3 className="text-xl font-black text-[#101010] mt-1">
                WHY WAS THIS FLAGGED?
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded border-2 border-[#101010] bg-white text-[#101010] hover:bg-neutral-100"
              aria-label="Close Explainability Drawer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Rationale */}
          <div className="mt-5 space-y-4 text-xs font-bold">
            <div className="rounded border-2 border-[#101010] bg-white p-4">
              <span className="mono text-[10px] font-black uppercase text-[#555555]">
                RATIONALE
              </span>
              <p className="mt-1 text-sm font-black text-[#101010] leading-snug">
                {context.summary || "Two sources contain different dates of birth."}
              </p>
            </div>

            {/* Sources */}
            <div className="rounded border-2 border-[#101010] bg-white p-4">
              <span className="mono text-[10px] font-black uppercase text-[#555555]">
                SOURCES
              </span>
              <div className="mt-2 space-y-1.5 mono">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
                  <span>Policy Schedule</span>
                  <span className="text-[#20C77A]">POL-2026-1024</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span>Hospital Bill</span>
                  <span className="text-[#E85C65]">CityCare Invoice</span>
                </div>
              </div>
            </div>

            {/* Confidence & Next Action */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded border-2 border-[#101010] bg-white p-3">
                <span className="mono text-[10px] font-black uppercase text-[#555555]">
                  CONFIDENCE
                </span>
                <p className="mono mt-1 text-2xl font-black text-[#20C77A]">
                  {Math.round(context.confidence * 100)}%
                </p>
                <span className="mono text-[9px] text-[#555555]">High Precision</span>
              </div>

              <div className="rounded border-2 border-[#101010] bg-white p-3">
                <span className="mono text-[10px] font-black uppercase text-[#555555]">
                  NEXT ACTION
                </span>
                <p className="mt-1 text-xs font-black text-[#101010] leading-tight">
                  Customer confirmation
                </p>
                <span className="mono text-[9px] text-[#20C77A]">In-Place Reroute</span>
              </div>
            </div>

            {/* Regulatory Clause Citation */}
            <div className="rounded border border-neutral-300 bg-white p-3 text-[11px] text-[#555555]">
              <div className="flex items-center gap-1.5 text-black font-bold">
                <ShieldCheck size={14} className="text-[#20C77A]" />
                <span>IRDAI KYC & Adjudication Rule #K-08</span>
              </div>
              <p className="mt-1 italic">
                &ldquo;Discrepancies in birth certificates or identity numbers must be verified by the policyholder prior to claims discharge.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Drawer Action */}
        <div className="mt-6 border-t-2 border-[#101010] pt-4">
          <button
            onClick={onClose}
            className="brutal-btn flex w-full items-center justify-center gap-2 bg-[#20C77A] py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
          >
            <span>DISMISS EXPLANATION</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </aside>
    </div>
  );
}
