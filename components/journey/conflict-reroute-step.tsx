"use client";

import { useState } from "react";
import { ConflictRecord } from "@/lib/types";
import {
  ArrowRight,
  Route,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FileText,
  UserCheck,
  RotateCcw,
  Sparkles,
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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isResolving, setIsResolving] = useState(false);
  const [resolvedStatus, setResolvedStatus] = useState<string | null>(null);

  const handleConfirm = (val: string) => {
    setSelectedOption(val);
    setIsResolving(true);
    setResolvedStatus("Applying confirmation to claim record...");

    setTimeout(() => {
      setResolvedStatus("Re-running Verification Engine with corrected Date of Birth...");
    }, 800);

    setTimeout(() => {
      setResolvedStatus("Evidence reconciled! Resuming journey from step 6...");
    }, 1600);

    setTimeout(() => {
      setIsResolving(false);
      onResolve(val);
    }, 2200);
  };

  return (
    <div className="space-y-6">
      {/* Visual Route Status Architecture Banner */}
      <div className="brutal-border bg-black p-4 text-white sm:p-5">
        <p className="mono text-[11px] font-black tracking-widest text-[#54e38e]">
          REROUTE ENGINE ORCHESTRATION LOOP
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-black sm:gap-3 sm:text-sm">
          <span className="border border-red-500 bg-red-950 px-2.5 py-1 text-red-300">
            JOURNEY INTERRUPTED
          </span>
          <ArrowRight size={14} className="text-[#54e38e]" />
          <span className="border border-amber-500 bg-amber-950 px-2.5 py-1 text-amber-300">
            ISSUE IDENTIFIED
          </span>
          <ArrowRight size={14} className="text-[#54e38e]" />
          <span className="border border-[#54e38e] bg-[#54e38e] px-2.5 py-1 text-black">
            SAFE NEXT ACTION
          </span>
        </div>
      </div>

      {/* Main Reroute Hero Card */}
      <div className="brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mono mb-2 inline-flex items-center gap-1.5 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black text-black">
              <Route size={14} />
              REROUTE IN ACTION
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#101010] sm:text-4xl">
              We&apos;ve rerouted your journey.
            </h2>
            <p className="mt-2 max-w-2xl text-base font-semibold leading-relaxed text-neutral-700">
              Instead of restarting your claim or making you call a helpline, Reroute identified exactly what needs clarification so you keep all your progress.
            </p>
          </div>

          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono brutal-btn flex items-center gap-1.5 bg-white px-3.5 py-2 text-xs font-bold hover:bg-neutral-100"
          >
            <HelpCircle size={14} />
            <span>Why did Reroute flag this?</span>
          </button>
        </div>

        {/* Diagnostic Metadata Grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <div className="border-2 border-black bg-white p-3">
            <span className="mono text-[10px] uppercase text-neutral-500">ISSUE IDENTIFIED</span>
            <p className="mt-1 text-sm font-black text-[#101010]">Date of Birth Mismatch</p>
          </div>
          <div className="border-2 border-black bg-white p-3">
            <span className="mono text-[10px] uppercase text-neutral-500">AFFECTED EVIDENCE</span>
            <p className="mt-1 text-sm font-black text-[#101010]">2 Source Documents</p>
          </div>
          <div className="border-2 border-black bg-white p-3">
            <span className="mono text-[10px] uppercase text-neutral-500">ORCHESTRATOR CONFIDENCE</span>
            <p className="mt-1 text-sm font-black text-emerald-700">92% High Precision</p>
          </div>
          <div className="border-2 border-black bg-white p-3">
            <span className="mono text-[10px] uppercase text-neutral-500">NEXT SAFE ACTION</span>
            <p className="mt-1 text-sm font-black text-[#101010]">Confirm Legal DOB</p>
          </div>
        </div>

        {/* Side-by-Side Conflicting Records */}
        <div className="mt-6 border-2 border-black bg-neutral-50 p-4 sm:p-5">
          <span className="mono text-xs font-black uppercase text-neutral-500">
            COMPARE THE DISCREPANCY
          </span>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {/* Source A */}
            <div className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_#101010]">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="mono text-[11px] font-bold text-neutral-600">
                  {conflict.sourceA.docName}
                </span>
                <span className="mono border border-emerald-600 bg-[#e7f9ee] px-1.5 py-0.2 text-[10px] font-bold text-emerald-800">
                  Policy Schedule
                </span>
              </div>
              <p className="mono mt-3 text-2xl font-black text-[#101010]">
                {conflict.sourceA.value}
              </p>
              <p className="mt-2 text-xs italic text-neutral-600">
                &ldquo;{conflict.sourceA.excerpt}&rdquo;
              </p>
            </div>

            {/* Source B */}
            <div className="border-2 border-amber-600 bg-amber-50 p-4 shadow-[3px_3px_0px_#d97706]">
              <div className="flex items-center justify-between border-b border-amber-300 pb-2">
                <span className="mono text-[11px] font-bold text-amber-900">
                  {conflict.sourceB.docName}
                </span>
                <span className="mono border border-amber-600 bg-amber-200 px-1.5 py-0.2 text-[10px] font-bold text-amber-950">
                  Hospital Invoice
                </span>
              </div>
              <p className="mono mt-3 text-2xl font-black text-red-600">
                {conflict.sourceB.value}
              </p>
              <p className="mt-2 text-xs italic text-neutral-600">
                &ldquo;{conflict.sourceB.excerpt}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Resolution Options */}
        <div className="mt-6">
          <h4 className="text-sm font-black uppercase tracking-wider text-neutral-700">
            SELECT THE ACCURATE VALUE TO PROCEED:
          </h4>
          <p className="mt-1 text-xs text-neutral-500">
            Reroute does not guess or assume. Your selection will update the verification state instantly.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              disabled={isResolving}
              onClick={() => handleConfirm(conflict.sourceA.value)}
              className="brutal-border brutal-shadow flex flex-col items-start bg-[#e7f9ee] p-4 text-left transition-all hover:-translate-y-0.5 hover:bg-[#d5f7e2]"
            >
              <div className="flex w-full items-center justify-between">
                <span className="mono text-xs font-black uppercase text-emerald-900">
                  OPTION 1 (RECOMMENDED)
                </span>
                <span className="border border-black bg-black px-1.5 py-0.5 text-[10px] font-black text-[#54e38e]">
                  MATCHES AADHAAR
                </span>
              </div>
              <span className="mt-2 text-lg font-black text-[#101010]">
                Confirm {conflict.sourceA.value}
              </span>
              <span className="mt-1 text-xs text-neutral-600">
                Affirms the policy schedule and government photo ID record.
              </span>
            </button>

            <button
              disabled={isResolving}
              onClick={() => handleConfirm(conflict.sourceB.value)}
              className="brutal-border brutal-shadow flex flex-col items-start bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:bg-neutral-50"
            >
              <span className="mono text-xs font-black uppercase text-neutral-500">OPTION 2</span>
              <span className="mt-2 text-lg font-black text-[#101010]">
                Confirm {conflict.sourceB.value}
              </span>
              <span className="mt-1 text-xs text-neutral-600">
                Uses the hospital billing desk record (will prompt policy update).
              </span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-black pt-4">
            <button
              disabled={isResolving}
              onClick={onEscalateToHuman}
              className="mono border border-black bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-100"
            >
              Neither is correct · Request Human Review Officer
            </button>

            {isResolving && (
              <div className="mono flex items-center gap-2 text-xs font-black text-emerald-800">
                <Sparkles size={14} className="animate-spin text-emerald-600" />
                <span>{resolvedStatus}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
