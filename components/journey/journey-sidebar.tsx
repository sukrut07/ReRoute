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
  return (
    <aside className="brutal-border brutal-shadow bg-[#fffef8] p-5 lg:w-80">
      {/* Journey Header */}
      <div className="border-b-2 border-black pb-4">
        <div className="mono flex items-center justify-between text-xs font-bold text-neutral-600">
          <span>JOURNEY STATE</span>
          <span className="border border-black bg-black px-1.5 py-0.5 text-[10px] font-black text-[#54e38e]">
            CASE #R-1024
          </span>
        </div>
        <h2 className="mt-2 text-xl font-black tracking-tight text-[#101010]">
          Health Insurance Claim
        </h2>
        <p className="mt-1 text-xs text-neutral-600">
          Reimbursement for inpatient surgery
        </p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="mono flex items-center justify-between text-xs font-bold">
            <span className="text-neutral-500">COMPLETION</span>
            <span className="font-black text-[#101010]">{progressPercent}%</span>
          </div>
          <div className="mt-1.5 h-3 w-full border-2 border-black bg-neutral-200">
            <div
              className={`h-full transition-all duration-300 ${
                isConflictActive ? "bg-[#ffd166]" : "bg-[#54e38e]"
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {isConflictActive && (
            <div className="mt-2 flex items-center gap-1.5 border border-amber-600 bg-amber-100 p-1.5 text-[11px] font-bold text-amber-900">
              <AlertTriangle size={13} className="shrink-0 text-amber-700" />
              <span>Reroute Action Required</span>
            </div>
          )}
        </div>
      </div>

      {/* Step Navigation Tree */}
      <nav className="mt-5 space-y-1">
        {steps.map((step, idx) => {
          const isCurrent = step.id === currentStepId;
          const isDone = step.status === "completed";
          const isInterrupted = step.status === "interrupted";

          return (
            <button
              key={step.id}
              onClick={() => onStepSelect(step.id)}
              className={`flex w-full items-center justify-between rounded p-2.5 text-left text-xs font-bold transition-all ${
                isCurrent
                  ? "border-2 border-black bg-black text-[#54e38e] shadow-[2px_2px_0px_#54e38e]"
                  : isInterrupted
                  ? "border-2 border-amber-500 bg-[#fff0b8] text-amber-950"
                  : isDone
                  ? "text-neutral-800 hover:bg-neutral-100"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isDone ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#54e38e] text-black">
                    <Check size={12} strokeWidth={3} />
                  </div>
                ) : isInterrupted ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-black">
                    <AlertTriangle size={12} strokeWidth={3} />
                  </div>
                ) : isCurrent ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#54e38e] text-black">
                    <Disc3 size={14} className="animate-spin" />
                  </div>
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center text-neutral-300">
                    <Circle size={10} />
                  </div>
                )}
                <div>
                  <span className="block font-bold">{step.title}</span>
                  <span className="mono text-[10px] text-neutral-500">
                    Step {idx + 1} of {steps.length}
                  </span>
                </div>
              </div>

              {isCurrent && <ArrowRight size={14} className="text-[#54e38e]" />}
            </button>
          );
        })}
      </nav>

      {/* Reroute Core Principle Footer */}
      <div className="mt-6 border-2 border-dashed border-neutral-300 bg-neutral-50 p-3 text-[11px] text-neutral-600">
        <p className="mono font-bold text-neutral-800">REROUTE PRINCIPLE</p>
        <p className="mt-1 leading-relaxed">
          Never tell the user &ldquo;Application incomplete&rdquo;. Explain what is missing and guide directly to the resolution.
        </p>
      </div>
    </aside>
  );
}
