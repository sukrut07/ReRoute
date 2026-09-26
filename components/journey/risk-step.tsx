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
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <ShieldCheck size={13} />
          STEP 7 · RISK & AML SCREENING
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Synthetic Risk Intelligence Analysis
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Transparent, rule-based screening checks for suspicious signals, document duplication, or high claim variances.
        </p>
      </div>

      {/* Main Scorecard */}
      <div className="brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-5">
          <div>
            <span className="mono text-xs font-bold uppercase text-neutral-500">
              SYNTHETIC RISK SCORE
            </span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-5xl font-black text-[#101010]">{assessment.score}</span>
              <span className="mono text-sm text-neutral-500">/ 100</span>
              <span
                className={`mono border-2 border-black px-3 py-1 text-xs font-black uppercase ${
                  isHigh
                    ? "bg-[#ff5c5c] text-white"
                    : isMedium
                    ? "bg-[#ffd166] text-black"
                    : "bg-[#54e38e] text-black"
                }`}
              >
                {assessment.tier} RISK
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenExplain("risk_score")}
            className="mono brutal-btn flex items-center gap-1.5 bg-white px-3 py-2 text-xs font-bold hover:bg-neutral-100"
          >
            <HelpCircle size={14} />
            <span>How is this scored?</span>
          </button>
        </div>

        {/* Score Bar */}
        <div className="mt-5">
          <div className="mono flex justify-between text-[11px] font-bold text-neutral-600">
            <span>LOW (0 - 30)</span>
            <span>MEDIUM (31 - 60)</span>
            <span>HIGH (61 - 100)</span>
          </div>
          <div className="mt-1.5 h-3 w-full border-2 border-black bg-neutral-200">
            <div
              className={`h-full transition-all duration-300 ${
                isHigh ? "bg-[#ff5c5c]" : isMedium ? "bg-[#ffd166]" : "bg-[#54e38e]"
              }`}
              style={{ width: `${assessment.score}%` }}
            />
          </div>
        </div>

        {/* Signals Breakdown */}
        <div className="mt-6 border-2 border-black bg-white p-4">
          <span className="mono text-xs font-black uppercase text-neutral-700">
            OBSERVED SIGNALS ({assessment.signals.length})
          </span>
          <div className="mt-3 space-y-2.5">
            {assessment.signals.length === 0 ? (
              <p className="text-xs text-neutral-500">No anomalous risk signals detected.</p>
            ) : (
              assessment.signals.map((sig) => (
                <div
                  key={sig.id}
                  className="flex items-start justify-between border border-neutral-300 bg-neutral-50 p-3 text-xs"
                >
                  <div className="flex items-start gap-2.5">
                    {sig.severity === "HIGH" ? (
                      <ShieldAlert size={16} className="mt-0.5 shrink-0 text-red-600" />
                    ) : (
                      <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600" />
                    )}
                    <div>
                      <span className="font-bold text-[#101010]">{sig.label}</span>
                      <p className="mt-0.5 text-neutral-600">{sig.detail}</p>
                    </div>
                  </div>
                  <span className="mono border border-black bg-white px-2 py-0.5 text-[10px] font-bold text-neutral-800">
                    {sig.syntheticEvidence}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Required Responsible AI Disclaimer */}
        <div className="mt-5 border border-dashed border-neutral-400 bg-neutral-100 p-3 text-xs text-neutral-600">
          <div className="flex items-center gap-1.5 font-bold text-neutral-800">
            <Info size={14} />
            <span>RESPONSIBLE AI SAFEGUARD</span>
          </div>
          <p className="mt-1 leading-relaxed">{assessment.disclaimer}</p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-4">
          <span className="mono text-xs text-neutral-600">
            Ready to prepare Human Review package
          </span>
          <button
            onClick={onContinue}
            className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-6 py-2.5 text-xs font-black text-black hover:bg-[#40d27c]"
          >
            <span>PREPARE REVIEW PACKET</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
