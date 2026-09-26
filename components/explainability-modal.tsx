"use client";

import { ExplainabilityContext } from "@/lib/types";
import { X, HelpCircle, ShieldCheck, BookOpen, Sparkles } from "lucide-react";

interface ExplainabilityModalProps {
  context: ExplainabilityContext | null;
  onClose: () => void;
}

export function ExplainabilityModal({ context, onClose }: ExplainabilityModalProps) {
  if (!context) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="brutal-border brutal-shadow-lg relative w-full max-w-xl bg-[#fffef8] p-6 text-black sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-black pb-4">
          <div className="flex items-center gap-2.5">
            <div className="brutal-border flex h-8 w-8 items-center justify-center bg-[#54e38e]">
              <HelpCircle size={18} className="text-black" />
            </div>
            <div>
              <span className="mono text-xs font-black uppercase tracking-wider text-[#101010]">
                EXPLAINABLE AI ENGINE
              </span>
              <h3 className="text-lg font-black leading-snug tracking-tight text-[#101010]">
                {context.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="brutal-border flex h-8 w-8 items-center justify-center bg-white hover:bg-neutral-100"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="mt-5 space-y-4 text-sm">
          {/* Plain language explanation */}
          <div className="border-2 border-black bg-white p-4">
            <p className="mono mb-1 text-[11px] font-bold text-neutral-500">EXPLANATION</p>
            <p className="font-semibold leading-relaxed text-[#101010]">{context.summary}</p>
          </div>

          {/* Regulatory / Policy Citation */}
          <div className="border-2 border-black bg-[#e7f9ee] p-4">
            <div className="flex items-center gap-2 text-xs font-black">
              <BookOpen size={14} />
              <span>SOURCE & POLICY CLAUSE</span>
            </div>
            <p className="mono mt-1 text-xs font-bold text-[#101010]">{context.sourceDoc}</p>
            <p className="mono text-[11px] text-neutral-600">{context.sourceSection}</p>
            <blockquote className="mt-2 border-l-2 border-black pl-3 text-xs italic text-neutral-800">
              &ldquo;{context.quote}&rdquo;
            </blockquote>
          </div>

          {/* Confidence and Rule ID Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-black bg-white p-3">
              <span className="mono text-[11px] text-neutral-500">AI CONFIDENCE</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-black">{Math.round(context.confidence * 100)}%</span>
                <span className="mono text-[10px] font-bold text-emerald-700">VERIFIED</span>
              </div>
              <div className="mt-1.5 h-2 w-full border border-black bg-neutral-100">
                <div
                  className="h-full bg-[#54e38e]"
                  style={{ width: `${Math.round(context.confidence * 100)}%` }}
                />
              </div>
            </div>

            <div className="border-2 border-black bg-white p-3">
              <span className="mono text-[11px] text-neutral-500">RULE SPECIFICATION</span>
              <p className="mono mt-1 text-sm font-black text-[#101010]">{context.policyRuleId}</p>
              <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-neutral-600">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>IRDAI Compliant Sandbox</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-4">
          <div className="mono flex items-center gap-1.5 text-[11px] text-neutral-500">
            <Sparkles size={12} className="text-[#54e38e]" />
            <span>Deterministic Reroute Logic</span>
          </div>
          <button
            onClick={onClose}
            className="brutal-btn bg-black px-4 py-2 text-xs font-bold text-white hover:bg-neutral-800"
          >
            I UNDERSTAND →
          </button>
        </div>
      </div>
    </div>
  );
}
