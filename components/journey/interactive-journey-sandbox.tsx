"use client";

import { useState } from "react";
import { Sliders, RefreshCw, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";

interface InteractiveJourneySandboxProps {
  currentBillDob: string;
  currentAmount: number;
  onApplyCustomValues: (customValues: {
    billDob: string;
    claimAmount: number;
    hospitalName: string;
  }) => void;
}

export function InteractiveJourneySandbox({
  currentBillDob,
  currentAmount,
  onApplyCustomValues,
}: InteractiveJourneySandboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [testDob, setTestDob] = useState(currentBillDob);
  const [testAmount, setTestAmount] = useState(currentAmount);
  const [testHospital, setTestHospital] = useState("CityCare Super Speciality Hospital");
  const [justApplied, setJustApplied] = useState(false);

  const handleApply = () => {
    onApplyCustomValues({
      billDob: testDob,
      claimAmount: testAmount,
      hospitalName: testHospital,
    });
    setJustApplied(true);
    setTimeout(() => setJustApplied(false), 2500);
  };

  const handlePreset = (presetType: "conflict" | "clean" | "high_risk") => {
    if (presetType === "conflict") {
      setTestDob("17/07/1998");
      setTestAmount(84500);
      setTestHospital("CityCare Super Speciality Hospital");
    } else if (presetType === "clean") {
      setTestDob("14/07/1998");
      setTestAmount(84500);
      setTestHospital("CityCare Super Speciality Hospital");
    } else if (presetType === "high_risk") {
      setTestDob("19/07/1998");
      setTestAmount(185000);
      setTestHospital("Unverified Regional Clinic");
    }
  };

  return (
    <div className="brutal-border bg-[#fffef8] p-4 text-xs font-bold text-[#101010] shadow-[3px_3px_0px_#101010]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded border border-black bg-[#54e38e]">
            <Sliders size={13} className="text-black" />
          </div>
          <div>
            <span className="mono text-[10px] font-black uppercase text-neutral-500">
              JUDGE INTERACTIVE PLAYGROUND
            </span>
            <h4 className="text-sm font-black text-[#101010]">
              Test Custom Discrepancies & Live Reroute Engine
            </h4>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mono border border-black bg-white px-2.5 py-1 text-[11px] font-black hover:bg-neutral-100"
        >
          {isOpen ? "Hide Controls ▲" : "Configure Custom Inputs ▼"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 border-t-2 border-black pt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono text-[10px] uppercase text-neutral-500">PRESETS:</span>
            <button
              onClick={() => handlePreset("conflict")}
              className="mono rounded border border-amber-600 bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 hover:bg-amber-200"
            >
              Staged DOB Mismatch (17/07 vs 14/07)
            </button>
            <button
              onClick={() => handlePreset("clean")}
              className="mono rounded border border-emerald-600 bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-900 hover:bg-emerald-200"
            >
              Clean Alignment (14/07 vs 14/07)
            </button>
            <button
              onClick={() => handlePreset("high_risk")}
              className="mono rounded border border-red-600 bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-900 hover:bg-red-200"
            >
              High Ticket Anomaly (₹1,85,000 + Mismatch)
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mono block text-[10px] uppercase text-neutral-500">
                Hospital Bill DOB
              </label>
              <input
                type="text"
                value={testDob}
                onChange={(e) => setTestDob(e.target.value)}
                className="mt-1 w-full border border-black bg-white p-2 font-mono text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#54e38e]"
                placeholder="DD/MM/YYYY"
              />
              <span className="mono text-[9px] text-neutral-500">Policy DOB is 14/07/1998</span>
            </div>

            <div>
              <label className="mono block text-[10px] uppercase text-neutral-500">
                Claim Amount (₹)
              </label>
              <input
                type="number"
                value={testAmount}
                onChange={(e) => setTestAmount(Number(e.target.value))}
                className="mt-1 w-full border border-black bg-white p-2 font-mono text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#54e38e]"
                placeholder="84500"
              />
              <span className="mono text-[9px] text-neutral-500">&gt; ₹1,50,000 triggers High Risk signal</span>
            </div>

            <div>
              <label className="mono block text-[10px] uppercase text-neutral-500">
                Hospital Facility Name
              </label>
              <input
                type="text"
                value={testHospital}
                onChange={(e) => setTestHospital(e.target.value)}
                className="mt-1 w-full border border-black bg-white p-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#54e38e]"
                placeholder="Hospital Name"
              />
              <span className="mono text-[9px] text-neutral-500">Empaneled facility check</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-3">
            <span className="mono text-[10px] text-neutral-500">
              Evaluates through RerouteEngine.evaluate() and RiskEngine.assessRisk() in real time.
            </span>

            <button
              onClick={handleApply}
              className="brutal-btn flex items-center gap-1.5 bg-[#54e38e] px-4 py-1.5 text-xs font-black text-black hover:bg-[#40d27c]"
            >
              <RefreshCw size={13} className={justApplied ? "animate-spin" : ""} />
              <span>{justApplied ? "EVALUATING..." : "RUN LIVE ENGINE EVALUATION"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
