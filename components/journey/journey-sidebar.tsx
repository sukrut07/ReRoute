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
  // Section 11 Rail mapping: Goal, Policy, Claim Details, Documents, Verification, Completion
  const railItems = [
    { id: "goal" as StepId, label: "Goal", fullTitle: "Goal Intake" },
    { id: "policy" as StepId, label: "Policy", fullTitle: "Policy Check" },
    { id: "evidence" as StepId, label: "Claim Details", fullTitle: "Evidence Collection" },
    { id: "extraction" as StepId, label: "Documents", fullTitle: "Document Intelligence" },
    { id: "verification" as StepId, label: "Verification", fullTitle: "Cross-Verification" },
    { id: "completion" as StepId, label: "Completion", fullTitle: "Claim Completed" },
  ];

  return (
    <aside className="rounded-lg border-2 border-[#101010] bg-white p-5 shadow-[4px_4px_0px_#101010]">
      {/* Journey Header */}
      <div className="border-b-2 border-[#101010] pb-4">
        <div className="mono flex items-center justify-between text-xs font-bold text-[#555555]">
          <span>JOURNEY RAIL</span>
          <span className="rounded border border-[#101010] bg-[#101010] px-1.5 py-0.2 text-[10px] font-black text-[#20C77A]">
            CASE #R-1024
          </span>
        </div>
        <h2 className="mt-2 text-lg font-black tracking-tight text-[#101010]">
          Health Insurance Claim
        </h2>
        <p className="mt-0.5 text-xs text-[#555555]">
          Inpatient Surgery Reimbursement
        </p>
      </div>

      {/* Journey Rail Items */}
      <nav className="mt-4 space-y-1" aria-label="Journey Steps">
        {railItems.map((item, idx) => {
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
              className={`flex w-full items-center justify-between rounded-md p-2.5 text-left text-xs font-bold transition-all ${
                isCurrent
                  ? "border-2 border-[#101010] bg-[#101010] text-[#20C77A] shadow-[2px_2px_0px_#20C77A]"
                  : isDone
                  ? "text-[#101010] hover:bg-[#FAF9F5]"
                  : "text-[#777777] hover:text-[#101010]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isDone ? (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C77A] text-[10px] font-black text-[#101010]">
                    ✓
                  </span>
                ) : isBlocked ? (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F2A900] text-[10px] font-black text-[#101010]">
                    !
                  </span>
                ) : isCurrent ? (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C77A] text-[10px] font-black text-[#101010]">
                    ●
                  </span>
                ) : (
                  <span className="flex h-5 w-5 items-center justify-center text-neutral-400 text-xs">
                    ○
                  </span>
                )}

                <div>
                  <span className="block font-black">{item.label}</span>
                  <span className="mono text-[10px] text-neutral-400">
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
      <div className="mt-5 rounded-md border border-neutral-300 bg-[#FAF9F5] p-3 text-[11px] text-[#555555]">
        <p className="mono font-bold text-[#101010]">DYNAMIC REROUTE</p>
        <p className="mt-0.5 leading-snug">
          Issues are isolated to single fields. No progress is reset.
        </p>
      </div>
    </aside>
  );
}
