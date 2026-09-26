"use client";

import { useState } from "react";
import { ArrowRight, Check, Route, ShieldCheck } from "lucide-react";

interface GoalStepProps {
  initialGoal: string;
  onConfirmGoal: (goal: string) => void;
}

export function GoalStep({ initialGoal, onConfirmGoal }: GoalStepProps) {
  const [goalText, setGoalText] = useState(initialGoal || "I want to claim my hospital expenses.");
  const [isIdentified, setIsIdentified] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsIdentified(true);
  };

  return (
    <div className="space-y-6">
      {/* Goal Entry Card */}
      <div className="rounded-lg border border-[#111111] bg-white p-6 sm:p-7 shadow-[3px_3px_0px_#111111]">
        <label className="mono block text-xs font-black uppercase tracking-wider text-[#666666]">
          WHAT ARE YOU TRYING TO ACCOMPLISH?
        </label>

        <form onSubmit={handleSubmit} className="mt-3">
          <textarea
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            rows={3}
            placeholder="I want to claim my hospital expenses."
            className="w-full rounded border border-[#111111] bg-[#F7F6F2] p-3.5 text-sm font-bold text-[#111111] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#20C979]"
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 mono text-xs text-[#666666]">
              <span>Sample goals:</span>
              <button
                type="button"
                onClick={() => setGoalText("I want to claim my hospital expenses for surgery.")}
                className="rounded border border-neutral-300 bg-[#F7F6F2] px-2 py-0.5 hover:border-[#111111] hover:text-[#111111]"
              >
                Hospital Expenses
              </button>
              <button
                type="button"
                onClick={() => setGoalText("I need to claim reimbursement for my inpatient clinic stay.")}
                className="rounded border border-neutral-300 bg-[#F7F6F2] px-2 py-0.5 hover:border-[#111111] hover:text-[#111111]"
              >
                Inpatient Stay
              </button>
            </div>

            <button
              type="submit"
              className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
            >
              <span>IDENTIFY JOURNEY</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>

      {/* Identified Journey Details */}
      {isIdentified && (
        <div className="rounded-lg border border-[#111111] bg-[#F7F6F2] p-5 sm:p-6 shadow-[3px_3px_0px_#111111]">
          <div className="flex items-center justify-between border-b border-[#111111] pb-3">
            <div>
              <span className="mono text-[10px] font-black uppercase text-[#666666]">
                GOAL INTENT CLASSIFIED
              </span>
              <h3 className="text-xl font-black text-[#111111]">Health Insurance Claim</h3>
            </div>
            <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-2.5 py-0.5 text-xs font-black text-[#111111]">
              CONFIDENCE 99%
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mono text-xs">
            <div className="rounded border border-[#111111] bg-white p-3">
              <span className="text-[10px] text-[#666666] uppercase">JOURNEY TYPE</span>
              <p className="font-bold text-[#111111] mt-0.5">Medical Reimbursement</p>
            </div>
            <div className="rounded border border-[#111111] bg-white p-3">
              <span className="text-[10px] text-[#666666] uppercase">REQUIRED STAGES</span>
              <p className="font-bold text-[#111111] mt-0.5">6 Progressive Steps</p>
            </div>
            <div className="rounded border border-[#111111] bg-white p-3">
              <span className="text-[10px] text-[#666666] uppercase">INITIAL STATE</span>
              <p className="font-bold text-[#111111] mt-0.5">Policy Attached</p>
            </div>
            <div className="rounded border border-[#111111] bg-white p-3">
              <span className="text-[10px] text-[#666666] uppercase">CUSTOMER CONTEXT</span>
              <p className="font-bold text-[#111111] mt-0.5">Sukrut Dusane · POL-1024</p>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              onClick={() => onConfirmGoal(goalText)}
              className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-5 py-2.5 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
            >
              <span>CONFIRM & PROCEED →</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
