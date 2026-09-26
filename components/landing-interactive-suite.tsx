"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  TriangleAlert,
  Route,
  Sparkles,
  Calculator,
  ShieldCheck,
  RotateCcw,
  Sliders,
  FileCheck,
  AlertTriangle,
  Play,
  CheckCircle2,
} from "lucide-react";

export function LandingInteractiveSuite() {
  // Simulator State
  const [activeSimulatorStage, setActiveSimulatorStage] = useState<number>(3); // Default to REROUTE stage
  const [isConflictToggled, setIsConflictToggled] = useState<boolean>(true);

  // ROI Calculator State
  const [monthlyClaims, setMonthlyClaims] = useState<number>(1500);
  const [avgClaimAmount, setAvgClaimAmount] = useState<number>(84500);

  // Calculations
  const traditionalDropOffs = Math.round(monthlyClaims * 0.385);
  const rerouteDropOffs = Math.round(monthlyClaims * 0.154);
  const recoveredClaims = traditionalDropOffs - rerouteDropOffs;
  const hoursSaved = Math.round(monthlyClaims * 1.8);
  const recoveredValueCrores = ((recoveredClaims * avgClaimAmount) / 10000000).toFixed(2);

  const stages = [
    {
      id: 0,
      title: "01 · GOAL INTAKE",
      tagline: "Natural Language Intent",
      summary: "Customer enters: 'I want to claim my hospital expenses for appendicitis surgery.'",
      badge: "INTENT IDENTIFIED",
      detail: "Mapped to HEALTH_INSURANCE_CLAIM · Linked to Policy Schedule POL-2026-1024 (₹5,00,000 coverage).",
      status: "COMPLETED",
    },
    {
      id: 1,
      title: "02 · EVIDENCE COLLECTION",
      tagline: "Document AI & OCR",
      summary: "Customer uploads 4 synthetic PDFs: Policy Schedule, Hospital Invoice, Discharge Summary, Aadhaar.",
      badge: "4 ARTIFACTS PARSED",
      detail: "Visual Language Models extract itemized surgical fees, admission dates, and identity numbers with 96% OCR confidence.",
      status: "COMPLETED",
    },
    {
      id: 2,
      title: "03 · CROSS-VERIFICATION",
      tagline: "Reconciliation Matrix",
      summary: "Verification engine reconciles fields across policy schedule and hospital bill.",
      badge: isConflictToggled ? "DISCREPANCY FLAGGED" : "100% MATCH",
      detail: isConflictToggled
        ? "Policy records DOB 14/07/1998, but Hospital Bill records 17/07/1998. Traditional systems reject here."
        : "All fields agree across policy, hospital invoice, and identity card.",
      status: isConflictToggled ? "INTERRUPTED" : "COMPLETED",
    },
    {
      id: 3,
      title: "04 · THE REROUTE MOMENT",
      tagline: "Dynamic In-Place Recovery",
      summary: "Instead of restarting or saying 'Application Incomplete', Reroute isolates the exact blocker.",
      badge: "REROUTE ACTIVE",
      detail: "Prompt: 'Confirm your legal birth date'. Customer confirms 14 July 1998. Re-verification clears the issue in 800ms.",
      status: "REROUTED",
    },
    {
      id: 4,
      title: "05 · PREPARED DOSSIER",
      tagline: "Responsible AI Completion",
      summary: "Case #R-1024 assembled with audit trail, 0-100 risk screening (42/100 Medium), and queued for human officer.",
      badge: "READY FOR HUMAN REVIEW",
      detail: "Zero autonomous financial approval. The claims officer receives an audit-ready dossier with customer confirmation.",
      status: "COMPLETED",
    },
  ];

  const currentStageData = stages[activeSimulatorStage];

  return (
    <div className="space-y-12">
      {/* 1. Interactive Core Loop Simulator */}
      <section className="brutal-border brutal-shadow bg-[#fffef8] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <div className="mono mb-1 inline-flex items-center gap-1.5 border border-black bg-black px-2 py-0.5 text-xs font-black uppercase text-[#54e38e]">
              <Play size={12} />
              INTERACTIVE PIPELINE SIMULATOR
            </div>
            <h3 className="text-2xl font-black text-[#101010]">
              Test The Reroute State Machine Live
            </h3>
            <p className="mt-1 text-xs text-neutral-600">
              Click any stage below to simulate live state transitions, discrepancy detection, and in-place recovery.
            </p>
          </div>

          <button
            onClick={() => setIsConflictToggled(!isConflictToggled)}
            className="mono brutal-btn flex items-center gap-1.5 bg-white px-3 py-1.5 text-xs font-bold hover:bg-neutral-100"
          >
            <Sliders size={13} />
            <span>Simulate Discrepancy: {isConflictToggled ? "ACTIVE (DOB Conflict)" : "OFF (Clean Match)"}</span>
          </button>
        </div>

        {/* Stage Selector Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {stages.map((stg) => {
            const isSelected = activeSimulatorStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveSimulatorStage(stg.id)}
                className={`mono flex items-center gap-1.5 rounded px-3 py-2 text-xs font-bold transition-all ${
                  isSelected
                    ? "border-2 border-black bg-black text-[#54e38e] shadow-[2px_2px_0px_#54e38e]"
                    : "border-2 border-neutral-300 bg-white text-neutral-800 hover:border-black hover:bg-neutral-100"
                }`}
              >
                <span>{stg.title}</span>
                {isSelected && <ArrowRight size={13} className="text-[#54e38e]" />}
              </button>
            );
          })}
        </div>

        {/* Live Simulator Console Card */}
        <div className="mt-6 border-2 border-black bg-white p-5 sm:p-6 shadow-[4px_4px_0px_#101010]">
          <div className="flex flex-wrap items-center justify-between border-b pb-3 text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="mono uppercase text-neutral-500">{currentStageData.tagline}</span>
              <span
                className={`mono border px-2 py-0.5 text-[10px] font-black uppercase ${
                  currentStageData.status === "REROUTED"
                    ? "border-amber-600 bg-[#ffd166] text-black"
                    : currentStageData.status === "INTERRUPTED"
                    ? "border-red-600 bg-red-100 text-red-900"
                    : "border-emerald-600 bg-[#e7f9ee] text-emerald-900"
                }`}
              >
                {currentStageData.badge}
              </span>
            </div>

            <span className="mono text-neutral-500">
              STATE: {currentStageData.status} · LATENCY: 42ms
            </span>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-black text-[#101010]">{currentStageData.summary}</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 font-semibold">
              {currentStageData.detail}
            </p>
          </div>

          {/* Interactive Action Prompt for Stage 3 (Reroute) */}
          {activeSimulatorStage === 3 && (
            <div className="mt-5 border-2 border-black bg-[#fff0b8] p-4 text-xs font-bold">
              <div className="flex items-center gap-2 text-amber-950 font-black">
                <AlertTriangle size={15} />
                <span>REROUTE RESOLUTION CHOICES</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/journey"
                  className="brutal-btn bg-black px-4 py-2 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
                >
                  CONFIRM 14 JULY 1998 (TEST IN FULL DEMO) →
                </Link>
                <Link
                  href="/journey"
                  className="brutal-btn bg-white px-4 py-2 text-xs font-bold text-black hover:bg-neutral-100"
                >
                  REQUEST HUMAN REVIEW
                </Link>
              </div>
            </div>
          )}

          {/* Stepper Navigation */}
          <div className="mt-6 flex items-center justify-between border-t pt-4 text-xs">
            <button
              disabled={activeSimulatorStage === 0}
              onClick={() => setActiveSimulatorStage((prev) => Math.max(0, prev - 1))}
              className="mono border border-black bg-neutral-100 px-3 py-1.5 font-bold hover:bg-neutral-200 disabled:opacity-40"
            >
              ← PREVIOUS STAGE
            </button>

            <span className="mono text-neutral-500">
              Stage {activeSimulatorStage + 1} of {stages.length}
            </span>

            <button
              disabled={activeSimulatorStage === stages.length - 1}
              onClick={() => setActiveSimulatorStage((prev) => Math.min(stages.length - 1, prev + 1))}
              className="mono border border-black bg-black px-3 py-1.5 font-bold text-white hover:bg-neutral-800 disabled:opacity-40"
            >
              NEXT STAGE →
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Friction & Business ROI Calculator */}
      <section className="brutal-border brutal-shadow bg-white p-6 sm:p-8">
        <div className="border-b-2 border-black pb-4">
          <div className="mono mb-1 inline-flex items-center gap-1.5 border border-black bg-[#54e38e] px-2 py-0.5 text-xs font-black uppercase text-black">
            <Calculator size={13} />
            INTERACTIVE BUSINESS IMPACT CALCULATOR
          </div>
          <h3 className="text-2xl font-black text-[#101010]">
            Calculate Your Organization&apos;s Friction Reduction
          </h3>
          <p className="mt-1 text-xs text-neutral-600">
            Adjust monthly claim volume and average ticket size to see how in-place Rerouting prevents drop-offs.
          </p>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {/* Sliders */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="claims-slider" className="mono uppercase text-neutral-600">
                  MONTHLY CLAIM VOLUME
                </label>
                <span className="mono text-base font-black text-[#101010]">
                  {monthlyClaims.toLocaleString("en-IN")} claims/mo
                </span>
              </div>
              <input
                id="claims-slider"
                type="range"
                min="200"
                max="10000"
                step="100"
                value={monthlyClaims}
                onChange={(e) => setMonthlyClaims(Number(e.target.value))}
                className="mt-2 w-full accent-black cursor-pointer"
              />
              <div className="mono flex justify-between text-[10px] text-neutral-400">
                <span>200</span>
                <span>5,000</span>
                <span>10,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="amount-slider" className="mono uppercase text-neutral-600">
                  AVERAGE CLAIM AMOUNT
                </label>
                <span className="mono text-base font-black text-[#101010]">
                  ₹{avgClaimAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                id="amount-slider"
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={avgClaimAmount}
                onChange={(e) => setAvgClaimAmount(Number(e.target.value))}
                className="mt-2 w-full accent-black cursor-pointer"
              />
              <div className="mono flex justify-between text-[10px] text-neutral-400">
                <span>₹20,000</span>
                <span>₹1,25,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            <div className="border-2 border-dashed border-neutral-300 bg-neutral-50 p-4 text-xs text-neutral-700">
              <p className="font-bold text-neutral-900">Benchmark Assumptions:</p>
              <p className="mt-1">
                Based on traditional industry drop-off benchmarks (38.5% due to document and verification friction) vs. Reroute&apos;s 15.4% measured drop-off.
              </p>
            </div>
          </div>

          {/* Computed Output Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black bg-[#e7f9ee] p-4">
              <span className="mono text-[10px] uppercase text-emerald-900 font-bold">
                CLAIMS SAVED FROM ABANDONMENT
              </span>
              <p className="mt-2 text-3xl font-black text-emerald-900">
                +{recoveredClaims.toLocaleString("en-IN")}
              </p>
              <p className="mono mt-1 text-[11px] text-emerald-800">
                23.1% fewer customers drop off
              </p>
            </div>

            <div className="border-2 border-black bg-[#bcd8ff] p-4">
              <span className="mono text-[10px] uppercase text-blue-900 font-bold">
                PROCESSING TIME SAVED
              </span>
              <p className="mt-2 text-3xl font-black text-blue-950">
                {hoursSaved.toLocaleString("en-IN")} hrs
              </p>
              <p className="mono mt-1 text-[11px] text-blue-800">
                Saved in support calls & rework
              </p>
            </div>

            <div className="col-span-2 border-2 border-black bg-[#fff0b8] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="mono text-xs uppercase text-amber-950 font-black">
                    RETAINED SETTLEMENT VALUE
                  </span>
                  <p className="mt-1 text-4xl font-black text-black">
                    ₹{recoveredValueCrores} Crores / month
                  </p>
                  <p className="mt-1 text-xs text-neutral-700">
                    Disbursed to legitimate policyholders instead of stranded in incomplete application queues.
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="brutal-btn bg-black px-4 py-2 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
                >
                  VIEW TELEMETRY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
