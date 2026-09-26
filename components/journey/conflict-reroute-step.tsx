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
        <div className="rounded-lg border-2 border-[#20C77A] bg-white p-6 sm:p-8 shadow-[5px_5px_0px_#20C77A]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#20C77A]">
            <CheckCircle2 size={18} strokeWidth={2.5} />
            <span>REROUTED</span>
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#101010]">
            The issue was isolated to one piece of information.
          </h2>

          <div className="mt-3 max-w-xl text-sm leading-relaxed text-[#555555]">
            <p>
              No restart required. Journey restored.
            </p>
            <p className="mt-1 font-bold text-[#101010]">
              NEXT: Re-verify information
            </p>
          </div>

          <div className="mt-6 rounded-md border border-[#101010] bg-[#FAF9F5] p-4 text-xs font-bold text-[#101010]">
            <div className="flex items-center justify-between">
              <span className="mono text-[#555555]">CONFIRMED VALUE</span>
              <span className="mono font-black text-black bg-[#20C77A] px-2 py-0.5 rounded">
                {chosenValue}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-neutral-200 pt-2">
              <span className="mono text-[#555555]">PRESERVED CONTEXT</span>
              <span className="mono text-[#101010]">Policy & Hospital Documents Intact</span>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleFinalContinue}
              className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-6 py-3 text-sm font-black text-[#101010] hover:bg-[#1bb36d]"
            >
              <span>CONTINUE JOURNEY</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Signature Reroute Banner */}
      <div className="rounded-lg border-2 border-[#101010] bg-white p-6 sm:p-8 shadow-[5px_5px_0px_#101010]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#101010] pb-4">
          <div className="flex items-center gap-2">
            <span className="mono rounded border border-[#101010] bg-[#F2A900] px-2 py-0.5 text-xs font-black uppercase text-[#101010]">
              REROUTE REQUIRED
            </span>
            <span className="mono text-xs font-bold text-[#555555]">
              STEP 4 OF 6 · IN-PLACE RECOVERY
            </span>
          </div>

          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono flex items-center gap-1.5 rounded border border-[#101010] bg-[#FAF9F5] px-2.5 py-1 text-xs font-bold text-[#101010] hover:bg-neutral-100"
          >
            <HelpCircle size={13} />
            <span>WHY?</span>
          </button>
        </div>

        {/* Status / Issue / Confidence grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-4 mono text-xs">
          <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
            <span className="text-[10px] uppercase text-[#777777]">CURRENT STATE</span>
            <p className="mt-1 font-black text-[#101010]">Verification blocked</p>
          </div>
          <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
            <span className="text-[10px] uppercase text-[#777777]">ISSUE</span>
            <p className="mt-1 font-black text-[#E85C65]">DOB mismatch</p>
          </div>
          <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
            <span className="text-[10px] uppercase text-[#777777]">EVIDENCE</span>
            <p className="mt-1 font-black text-[#101010]">2 sources</p>
          </div>
          <div className="rounded border border-[#101010] bg-[#FAF9F5] p-3">
            <span className="text-[10px] uppercase text-[#777777]">CONFIDENCE</span>
            <p className="mt-1 font-black text-[#20C77A]">92%</p>
          </div>
        </div>

        {/* Next Safe Action Callout */}
        <div className="mt-4 rounded-md border-2 border-[#101010] bg-[#FAF9F5] p-3.5">
          <span className="mono text-[10px] font-black uppercase tracking-wider text-[#555555]">
            NEXT SAFE ACTION
          </span>
          <p className="mt-0.5 text-sm font-black text-[#101010]">
            Confirm the correct information
          </p>
        </div>

        {/* Section 17: Information Conflict Detail */}
        <div className="mt-6 rounded-lg border-2 border-[#F2A900] bg-[#FFF8E7] p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-[#D97706]" />
            <h3 className="text-sm font-black uppercase tracking-wider text-[#B45309]">
              INFORMATION CONFLICT: DATE OF BIRTH
            </h3>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded border-2 border-[#101010] bg-white p-4">
              <span className="mono text-[10px] font-bold uppercase text-[#555555]">
                POLICY VALUE
              </span>
              <p className="mono mt-1 text-2xl font-black text-[#101010]">14/07/1998</p>
              <p className="mt-1 text-xs text-[#777777]">Source: Health Policy Schedule POL-2026-1024</p>
            </div>

            <div className="rounded border-2 border-[#E85C65] bg-white p-4">
              <span className="mono text-[10px] font-bold uppercase text-[#E85C65]">
                HOSPITAL DOCUMENT
              </span>
              <p className="mono mt-1 text-2xl font-black text-[#E85C65]">17/07/1998</p>
              <p className="mt-1 text-xs text-[#777777]">Source: CityCare Hospital Invoice desk</p>
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold text-[#555555]">
            We found a difference between two documents. Do not automatically determine the correct value.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <button
              disabled={isRerouting}
              onClick={() => handleReroute("14/07/1998", "POLICY VALUE")}
              className="brutal-btn flex flex-col items-center justify-center bg-[#20C77A] p-3 text-center text-xs font-black text-[#101010] hover:bg-[#1bb36d] disabled:opacity-50"
            >
              <span>USE POLICY VALUE</span>
              <span className="mono text-[10px] font-normal text-[#101010] mt-0.5">(14/07/1998)</span>
            </button>

            <button
              disabled={isRerouting}
              onClick={() => handleReroute("17/07/1998", "DOCUMENT VALUE")}
              className="brutal-btn flex flex-col items-center justify-center bg-white p-3 text-center text-xs font-black text-[#101010] hover:bg-neutral-50 disabled:opacity-50"
            >
              <span>USE DOCUMENT VALUE</span>
              <span className="mono text-[10px] font-normal text-[#555555] mt-0.5">(17/07/1998)</span>
            </button>

            <button
              disabled={isRerouting}
              onClick={onEscalateToHuman}
              className="brutal-btn flex flex-col items-center justify-center bg-white p-3 text-center text-xs font-bold text-[#101010] hover:bg-neutral-50 disabled:opacity-50"
            >
              <span>REQUEST HUMAN REVIEW</span>
              <span className="mono text-[10px] font-normal text-[#555555] mt-0.5">(Adjudication queue)</span>
            </button>
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="mt-6 rounded border border-neutral-300 bg-[#FAF9F5] p-3 text-center">
          <p className="mono text-xs font-bold text-[#101010]">
            YOUR JOURNEY WILL NOT RESTART.
          </p>
          <p className="text-xs text-[#555555] mt-0.5">
            You will continue from the current verification step with preserved evidence.
          </p>
        </div>

        {isRerouting && (
          <div className="mt-4 flex items-center justify-center gap-2 mono text-xs font-bold text-[#20C77A]">
            <Sparkles size={16} className="animate-spin" />
            <span>REROUTING IN PROGRESS · RESTORING CONTEXT...</span>
          </div>
        )}
      </div>
    </div>
  );
}
