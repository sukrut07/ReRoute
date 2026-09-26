"use client";

import { JourneyStep, StepId } from "@/lib/types";
import { Check, AlertTriangle, ArrowRight, Circle, Disc3 } from "lucide-react";

interface JourneySidebarProps {
  steps: JourneyStep[];
  currentStepId: StepId;
  progressPercent: number;
  onStepSelect: (stepId: StepId) => void;
  isConflictActive: boolean;
}

export function JourneySidebar({
  steps,
  currentStepId,
  progressPercent,
  onStepSelect,
  isConflictActive,
}: JourneySidebarProps) {
  // Rail mapping: Goal, Policy, Claim Details, Documents, Verification, Completion
  const railItems = [
    { id: "goal" as StepId, label: "Goal", fullTitle: "Goal Intake" },
    { id: "policy" as StepId, label: "Policy", fullTitle: "Policy Check" },
    { id: "evidence" as StepId, label: "Claim Details", fullTitle: "Evidence Collection" },
    { id: "extraction" as StepId, label: "Documents", fullTitle: "Document Intelligence" },
    { id: "verification" as StepId, label: "Verification", fullTitle: "Cross-Verification" },
    { id: "completion" as StepId, label: "Completion", fullTitle: "Claim Completed" },
  ];

  return (
    <aside className="rounded-lg border border-[#111111] bg-white p-4 sm:p-5 shadow-[3px_3px_0px_#111111]">
      {/* Journey Header */}
      <div className="border-b border-[#111111] pb-3.5">
        <div className="mono flex items-center justify-between text-xs font-bold text-[#666666]">
          <span>JOURNEY RAIL</span>
          <span className="rounded border border-[#111111] bg-[#111111] px-1.5 py-0.2 text-[10px] font-black text-[#20C979]">
            CASE #R-1024
          </span>
        </div>
        <h2 className="mt-2 text-base sm:text-lg font-black tracking-tight text-[#111111]">
          Health Insurance Claim
        </h2>
        <p className="mt-0.5 text-xs text-[#666666]">
          Inpatient Surgery Reimbursement
        </p>
      </div>

      {/* Journey Rail Items */}
      <nav className="mt-3.5 space-y-1" aria-label="Journey Steps">
        {railItems.map((item) => {
          const isCurrent =
            currentStepId === item.id ||
            (item.id === "verification" && currentStepId === "reroute") ||
            (item.id === "completion" && currentStepId === "risk");

          const matchingStep = steps.find((s) => s.id === item.id);
          const isDone = matchingStep?.status === "completed" && !isCurrent;
          const isBlocked = isCurrent && isConflictActive;

          return (
            <button
              key={item.id}
              onClick={() => onStepSelect(item.id === "verification" && isConflictActive ? "reroute" : item.id)}
              className={`flex w-full items-center justify-between rounded p-2 text-left text-xs font-bold transition-all ${
                isCurrent
                  ? "border border-[#111111] bg-[#111111] text-[#20C979] shadow-[2px_2px_0px_#20C979]"
                  : isDone
                  ? "text-[#111111] hover:bg-[#F7F6F2]"
                  : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isDone ? (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">
                    ✓
                  </span>
                ) : isBlocked ? (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D97706] text-[9px] font-black text-white">
                    !
                  </span>
                ) : isCurrent ? (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">
                    ●
                  </span>
                ) : (
                  <span className="flex h-4 w-4 items-center justify-center text-neutral-400 text-xs">
                    ○
                  </span>
                )}

                <div>
                  <span className="block font-black">{item.label}</span>
                  <span className="mono text-[10px] text-neutral-500">
                    {item.fullTitle}
                  </span>
                </div>
              </div>

              {isCurrent && <ArrowRight size={13} strokeWidth={2.5} />}
            </button>
          );
        })}
      </nav>

      {/* Reroute Philosophy Note */}
      <div className="mt-4 rounded border border-neutral-300 bg-[#F7F6F2] p-2.5 text-[11px] text-[#666666]">
        <p className="mono font-bold text-[#111111]">DYNAMIC REROUTE</p>
        <p className="mt-0.5 leading-snug">
          Issues are isolated to single fields. No progress is reset.
        </p>
      </div>
    </aside>
  );
}
