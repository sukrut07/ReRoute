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
      <div className="rounded-lg border-2 border-[#101010] bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#101010]">
        <label className="mono block text-xs font-black uppercase tracking-wider text-[#555555]">
          WHAT ARE YOU TRYING TO DO?
        </label>

        <form onSubmit={handleSubmit} className="mt-3">
          <textarea
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            rows={3}
            placeholder="I want to claim my hospital expenses."
            className="w-full rounded-md border-2 border-[#101010] bg-[#FAF9F5] p-4 text-base font-bold text-[#101010] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#20C77A]"
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 mono text-xs text-[#555555]">
              <span>Quick tests:</span>
              <button
                type="button"
                onClick={() => setGoalText("I want to claim my hospital expenses for surgery.")}
                className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 hover:border-black"
              >
                Hospital Expenses
              </button>
              <button
                type="button"
                onClick={() => setGoalText("I need to claim cashless reimbursement for my clinic stay.")}
                className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 hover:border-black"
              >
                Inpatient Stay
              </button>
            </div>

            <button
              type="submit"
              className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-5 py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
            >
              <span>IDENTIFY JOURNEY</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      </div>

      {/* Identified Journey Details */}
      {isIdentified && (
        <div className="rounded-lg border-2 border-[#101010] bg-[#FAF9F5] p-6 shadow-[4px_4px_0px_#101010]">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
            <div>
              <span className="mono text-[10px] font-black uppercase text-[#555555]">
                JOURNEY IDENTIFIED
              </span>
              <h3 className="text-xl font-black text-[#101010]">Health Insurance Claim</h3>
            </div>
            <span className="mono rounded border border-[#101010] bg-[#20C77A] px-2.5 py-1 text-xs font-black text-[#101010]">
              CONFIDENCE 99%
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mono text-xs">
            <div className="rounded border border-[#101010] bg-white p-3">
              <span className="text-[10px] text-[#777777] uppercase">JOURNEY TYPE</span>
              <p className="font-bold text-[#101010] mt-0.5">Medical Reimbursement</p>
            </div>
            <div className="rounded border border-[#101010] bg-white p-3">
              <span className="text-[10px] text-[#777777] uppercase">REQUIRED STAGES</span>
              <p className="font-bold text-[#101010] mt-0.5">6 Progressive Steps</p>
            </div>
            <div className="rounded border border-[#101010] bg-white p-3">
              <span className="text-[10px] text-[#777777] uppercase">INITIAL STATE</span>
              <p className="font-bold text-[#101010] mt-0.5">Policy Attached</p>
            </div>
            <div className="rounded border border-[#101010] bg-white p-3">
              <span className="text-[10px] text-[#777777] uppercase">CUSTOMER CONTEXT</span>
              <p className="font-bold text-[#101010] mt-0.5">Sukrut Dusane · POL-1024</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => onConfirmGoal(goalText)}
              className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-6 py-3 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
            >
              <span>START JOURNEY →</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
