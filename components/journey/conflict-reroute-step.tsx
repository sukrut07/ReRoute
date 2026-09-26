"use client";

import { useState } from "react";
import { ConflictRecord } from "@/lib/types";
import {
  ArrowRight,
  Route,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  Check,
  UserCheck,
} from "lucide-react";

interface ConflictRerouteStepProps {
  conflict: ConflictRecord;
  onResolve: (selectedValue: string) => void;
  onOpenExplain: (key: string) => void;
  onEscalateToHuman: () => void;
}

export function ConflictRerouteStep({
  conflict,
  onResolve,
  onOpenExplain,
  onEscalateToHuman,
}: ConflictRerouteStepProps) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isRerouting, setIsRerouting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [chosenValue, setChosenValue] = useState<string>("14/07/1998");

  const handleReroute = (value: string, label: string) => {
    setSelectedAction(label);
    setChosenValue(value);
    setIsRerouting(true);

    setTimeout(() => {
      setIsRerouting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleFinalContinue = () => {
    onResolve(chosenValue);
  };

  if (isSuccess) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-[#20C979] bg-white p-6 sm:p-8 shadow-[3px_3px_0px_#20C979]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#20C979]">
            <CheckCircle2 size={18} strokeWidth={2.5} />
            <span>REROUTED & PRESERVED</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
            Issue isolated. Context preserved without restart.
          </h2>

          <div className="mt-3 max-w-xl text-sm leading-relaxed text-[#666666]">
            <p>
              The journey remains continuous. No documents were invalidated and no redundant forms were presented.
            </p>
            <p className="mt-1 font-bold text-[#111111]">
              NEXT SAFE STEP: Deterministic risk scoring and settlement review.
            </p>
          </div>

          <div className="mt-5 rounded border border-[#111111] bg-[#F7F6F2] p-4 text-xs font-bold text-[#111111]">
            <div className="flex items-center justify-between">
              <span className="mono text-[#666666]">CONFIRMED VALUE</span>
              <span className="mono font-black text-[#111111] bg-[#20C979] px-2 py-0.5 rounded border border-[#111111]">
                {chosenValue}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-neutral-200 pt-2">
              <span className="mono text-[#666666]">PRESERVED CONTEXT</span>
              <span className="mono text-[#111111]">Policy & Hospital Documents Intact</span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleFinalContinue}
              className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-5 py-2.5 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5"
            >
              <span>CONTINUE JOURNEY</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Signature Reroute Banner */}
      <div className="rounded-lg border border-[#111111] bg-white p-6 sm:p-7 shadow-[3px_3px_0px_#111111]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111111] pb-3.5">
          <div className="flex items-center gap-2">
            <span className="mono rounded border border-[#D97706] bg-[#FEF3C7] px-2 py-0.5 text-xs font-black uppercase text-[#92400E]">
              REROUTE REQUIRED
            </span>
            <span className="mono text-xs font-bold text-[#666666]">
              STEP 4 OF 6 · IN-PLACE RECOVERY
            </span>
          </div>

          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-xs font-bold text-[#111111] hover:bg-neutral-100"
          >
            <HelpCircle size={13} />
            <span>WHY?</span>
          </button>
        </div>

        {/* Status / Issue / Confidence grid */}
        <div className="mt-5 grid gap-3 sm:grid-cols-4 mono text-xs">
          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
            <span className="text-[10px] uppercase text-[#666666]">CURRENT STATE</span>
            <p className="mt-1 font-black text-[#111111]">Verification held</p>
          </div>
          <div className="rounded border border-[#D97706] bg-[#FEF3C7] p-3">
            <span className="text-[10px] uppercase text-[#92400E]">DETECTED ISSUE</span>
            <p className="mt-1 font-black text-[#92400E]">DOB mismatch</p>
          </div>
          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
            <span className="text-[10px] uppercase text-[#666666]">EVIDENCE</span>
            <p className="mt-1 font-black text-[#111111]">2 sources</p>
          </div>
          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
            <span className="text-[10px] uppercase text-[#666666]">CONFIDENCE</span>
            <p className="mt-1 font-black text-[#20C979]">92%</p>
          </div>
        </div>

        {/* Next Safe Action Callout */}
        <div className="mt-4 rounded border border-[#111111] bg-[#F7F6F2] p-3">
          <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
            RECOMMENDED ACTION
          </span>
          <p className="mt-0.5 text-sm font-black text-[#111111]">
            Confirm the correct information to continue
          </p>
        </div>

        {/* Section 11 & 24: Information Conflict Detail */}
        <div className="mt-5 rounded-lg border border-[#D97706] bg-[#FEF3C7] p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-[#D97706]" />
            <h3 className="text-xs font-black uppercase tracking-wider text-[#92400E]">
              CONFLICT DETECTED: DATE OF BIRTH
            </h3>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded border border-[#111111] bg-white p-4">
              <span className="mono text-[10px] font-bold uppercase text-[#666666]">
                POLICY RECORD
              </span>
              <p className="mono mt-1 text-2xl font-black text-[#111111]">14/07/1998</p>
              <p className="mt-1 text-xs text-[#666666]">Source: Schedule POL-2026-1024</p>
            </div>

            <div className="rounded border border-[#D9414B] bg-white p-4">
              <span className="mono text-[10px] font-bold uppercase text-[#991B1B]">
                HOSPITAL RECORD
              </span>
              <p className="mono mt-1 text-2xl font-black text-[#991B1B]">17/07/1998</p>
              <p className="mt-1 text-xs text-[#666666]">Source: CityCare Invoice Desk</p>
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-[#111111]">
            ReRoute does not guess or assume. Confirm the true record to proceed safely without restarting.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <button
              disabled={isRerouting}
              onClick={() => handleReroute("14/07/1998", "POLICY VALUE")}
              className="mono flex flex-col items-center justify-center rounded border border-[#111111] bg-[#20C979] p-3 text-center text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              <span>USE POLICY VALUE</span>
              <span className="text-[10px] font-normal text-[#111111] mt-0.5">(14/07/1998)</span>
            </button>

            <button
              disabled={isRerouting}
              onClick={() => handleReroute("17/07/1998", "DOCUMENT VALUE")}
              className="mono flex flex-col items-center justify-center rounded border border-[#111111] bg-white p-3 text-center text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#F7F6F2] disabled:opacity-50"
            >
              <span>USE DOCUMENT VALUE</span>
              <span className="text-[10px] font-normal text-[#666666] mt-0.5">(17/07/1998)</span>
            </button>

            <button
              disabled={isRerouting}
              onClick={onEscalateToHuman}
              className="mono flex flex-col items-center justify-center rounded border border-[#111111] bg-white p-3 text-center text-xs font-bold text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#F7F6F2] disabled:opacity-50"
            >
              <span>REQUEST HUMAN REVIEW</span>
              <span className="text-[10px] font-normal text-[#666666] mt-0.5">(Adjudication queue)</span>
            </button>
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="mt-5 rounded border border-neutral-300 bg-[#F7F6F2] p-3 text-center">
          <p className="mono text-xs font-bold text-[#111111]">
            YOUR PROGRESS IS FULLY PRESERVED.
          </p>
          <p className="text-xs text-[#666666] mt-0.5">
            You will continue from this step with all verified evidence intact.
          </p>
        </div>

        {isRerouting && (
          <div className="mt-4 flex items-center justify-center gap-2 mono text-xs font-bold text-[#20C979]">
            <Sparkles size={16} className="animate-spin" />
            <span>REROUTING IN PROGRESS · RESTORING CONTEXT...</span>
          </div>
        )}
      </div>
    </div>
  );
}
