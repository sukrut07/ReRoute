"use client";

import { RiskAssessment } from "@/lib/types";
import { ArrowRight, ShieldCheck, AlertTriangle, ShieldAlert, HelpCircle, Info } from "lucide-react";

interface RiskStepProps {
  assessment: RiskAssessment;
  onContinue: () => void;
  onOpenExplain: (key: string) => void;
}

export function RiskStep({ assessment, onContinue, onOpenExplain }: RiskStepProps) {
  const isHigh = assessment.tier === "HIGH";
  const isMedium = assessment.tier === "MEDIUM";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <ShieldCheck size={13} strokeWidth={2.5} />
          STEP 6 · RISK SCREENING
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Risk Evaluation & Signals
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Transparent, rule-based screening checks for suspicious signals, document duplication, or high claim variances.
        </p>
      </div>

      {/* Main Scorecard */}
      <div className="rounded-lg border border-[#111111] bg-white p-5 sm:p-6 shadow-[3px_3px_0px_#111111]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-4 gap-3">
          <div>
            <span className="mono text-[10px] font-bold uppercase text-[#666666]">
              SYNTHETIC RISK SCORE
            </span>
            <div className="mt-1 flex items-baseline gap-2.5">
              <span className="text-4xl sm:text-5xl font-black text-[#111111]">{assessment.score}</span>
              <span className="mono text-xs text-[#666666]">/ 100</span>
              <span
                className={`mono rounded border px-2.5 py-0.5 text-xs font-black uppercase ${
                  isHigh
                    ? "border-[#D9414B] bg-[#FEE2E2] text-[#991B1B]"
                    : isMedium
                    ? "border-[#D97706] bg-[#FEF3C7] text-[#92400E]"
                    : "border-[#111111] bg-[#DDF8EA] text-[#111111]"
                }`}
              >
                {assessment.tier} RISK
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenExplain("risk_score")}
            className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-[#F7F6F2] px-3 py-1.5 text-xs font-bold text-[#111111] hover:bg-neutral-200"
          >
            <HelpCircle size={13} />
            <span>How is this scored?</span>
          </button>
        </div>

        {/* Score Bar */}
        <div className="mt-4">
          <div className="mono flex justify-between text-[11px] font-bold text-[#666666]">
            <span>LOW (0 - 30)</span>
            <span>MEDIUM (31 - 60)</span>
            <span>HIGH (61 - 100)</span>
          </div>
          <div className="mt-1.5 h-2.5 w-full rounded border border-[#111111] bg-[#F7F6F2] overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                isHigh ? "bg-[#D9414B]" : isMedium ? "bg-[#D97706]" : "bg-[#20C979]"
              }`}
              style={{ width: `${assessment.score}%` }}
            />
          </div>
        </div>

        {/* Signals Breakdown */}
        <div className="mt-5 rounded border border-[#111111] bg-white p-4">
          <span className="mono text-xs font-black uppercase text-[#111111]">
            OBSERVED SIGNALS ({assessment.signals.length})
          </span>
          <div className="mt-3 space-y-2">
            {assessment.signals.length === 0 ? (
              <p className="text-xs text-[#666666]">No anomalous risk signals detected.</p>
            ) : (
              assessment.signals.map((sig) => (
                <div
                  key={sig.id}
                  className="flex items-start justify-between rounded border border-neutral-200 bg-[#F7F6F2] p-2.5 text-xs"
                >
                  <div className="flex items-start gap-2">
                    {sig.severity === "HIGH" ? (
                      <ShieldAlert size={14} className="mt-0.5 shrink-0 text-[#D9414B]" />
                    ) : (
                      <AlertTriangle size={14} className="mt-0.5 shrink-0 text-[#D97706]" />
                    )}
                    <div>
                      <span className="font-bold text-[#111111]">{sig.label}</span>
                      <p className="mt-0.5 text-[#666666]">{sig.detail}</p>
                    </div>
                  </div>
                  <span className="mono rounded border border-neutral-300 bg-white px-2 py-0.5 text-[10px] font-bold text-[#111111]">
                    {sig.syntheticEvidence}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Responsible AI Disclaimer */}
        <div className="mt-4 rounded border border-dashed border-neutral-400 bg-[#F7F6F2] p-3 text-xs text-[#666666]">
          <div className="flex items-center gap-1.5 font-bold text-[#111111]">
            <Info size={13} />
            <span>RESPONSIBLE AI SAFEGUARD</span>
          </div>
          <p className="mt-1 leading-relaxed text-[11px]">{assessment.disclaimer}</p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-5 flex items-center justify-between border-t border-[#111111] pt-3.5">
          <span className="mono text-xs text-[#666666]">
            Ready to prepare Human Review package
          </span>
          <button
            onClick={onContinue}
            className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
          >
            <span>PREPARE REVIEW DOSSIER</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
