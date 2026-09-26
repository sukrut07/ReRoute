"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, MessageSquareQuote } from "lucide-react";

interface GoalStepProps {
  initialGoal: string;
  onConfirmGoal: (goal: string) => void;
}

export function GoalStep({ initialGoal, onConfirmGoal }: GoalStepProps) {
  const [goalText, setGoalText] = useState(initialGoal);
  const [isAnalyzed, setIsAnalyzed] = useState(true);

  const sampleGoals = [
    "I want to claim my hospital expenses for appendicitis surgery.",
    "Claim reimbursement for my father's 3-day viral fever admission.",
    "File hospital bill for emergency knee ligament procedure.",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <Sparkles size={13} />
          STEP 1 · GOAL-FIRST INTAKE
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          What are you trying to accomplish?
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          State your situation in natural language. Reroute maps your objective to the appropriate regulated financial workflow.
        </p>
      </div>

      {/* Goal Input Box */}
      <div className="brutal-border brutal-shadow bg-white p-5 sm:p-6">
        <label className="mono block text-xs font-bold uppercase text-neutral-500">
          YOUR FINANCIAL GOAL
        </label>
        <div className="mt-2 flex flex-col gap-3">
          <textarea
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            rows={3}
            className="w-full border-2 border-black bg-[#fffef8] p-3 text-base font-bold text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#54e38e]"
            placeholder="e.g. I had a hospital stay and need to claim my bills..."
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
              <span className="mono font-bold">Try examples:</span>
              {sampleGoals.map((sample, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setGoalText(sample);
                    setIsAnalyzed(true);
                  }}
                  className="rounded border border-neutral-300 bg-neutral-100 px-2 py-1 text-[11px] font-semibold text-neutral-800 hover:border-black hover:bg-neutral-200"
                >
                  Example {i + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsAnalyzed(true)}
              className="mono border border-black bg-neutral-100 px-3 py-1.5 text-xs font-bold hover:bg-neutral-200"
            >
              Analyze Intent
            </button>
          </div>
        </div>
      </div>

      {/* Detected Journey Preview */}
      {isAnalyzed && (
        <div className="brutal-border bg-[#e7f9ee] p-6">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-900">
            <CheckCircle2 size={16} className="text-emerald-700" />
            <span>WE UNDERSTAND YOUR GOAL</span>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-black/10 pb-4">
            <div>
              <span className="mono text-xs font-bold text-neutral-500">JOURNEY IDENTIFIED</span>
              <h3 className="text-2xl font-black text-[#101010]">Health Insurance Claim</h3>
            </div>
            <div className="border border-black bg-white px-2.5 py-1 text-xs font-black">
              ORCHESTRATOR CONFIDENCE: 99%
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-black uppercase text-neutral-600">REROUTE WILL HELP YOU:</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs font-bold text-neutral-800">
              <div className="flex items-center gap-2 border border-black/20 bg-white p-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
                <span>Verify your policy schedule & coverage limits</span>
              </div>
              <div className="flex items-center gap-2 border border-black/20 bg-white p-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
                <span>Collect & extract required medical evidence</span>
              </div>
              <div className="flex items-center gap-2 border border-black/20 bg-white p-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
                <span>Reconcile documents & catch discrepancies</span>
              </div>
              <div className="flex items-center gap-2 border border-black/20 bg-white p-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
                <span>Reroute cleanly if conflicting information arises</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => onConfirmGoal(goalText)}
              className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-6 py-3 text-sm font-black text-black hover:bg-[#40d27c]"
            >
              <span>BEGIN JOURNEY</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
