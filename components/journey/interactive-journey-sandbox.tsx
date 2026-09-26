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
    <div className="rounded-lg border border-[#111111] bg-white p-4 text-xs font-bold text-[#111111] shadow-[3px_3px_0px_#111111]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded border border-[#111111] bg-[#20C979]">
            <Sliders size={13} className="text-[#111111]" />
          </div>
          <div>
            <span className="mono text-[10px] font-black uppercase text-[#666666]">
              INTERACTIVE ENGINE PLAYGROUND
            </span>
            <h4 className="text-sm font-black text-[#111111]">
              Simulate Field Discrepancies & Live Rerouting
            </h4>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mono rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-[11px] font-bold text-[#111111] hover:bg-neutral-200"
        >
          {isOpen ? "Hide Controls ▲" : "Configure Custom Inputs ▼"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-[#111111] pt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono text-[10px] uppercase text-[#666666]">PRESETS:</span>
            <button
              onClick={() => handlePreset("conflict")}
              className="mono rounded border border-[#D97706] bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-bold text-[#92400E] hover:bg-amber-200"
            >
              Staged DOB Mismatch (17/07 vs 14/07)
            </button>
            <button
              onClick={() => handlePreset("clean")}
              className="mono rounded border border-[#111111] bg-[#DDF8EA] px-2 py-0.5 text-[10px] font-bold text-[#111111] hover:bg-emerald-200"
            >
              Clean Alignment (14/07 vs 14/07)
            </button>
            <button
              onClick={() => handlePreset("high_risk")}
              className="mono rounded border border-[#D9414B] bg-[#FEE2E2] px-2 py-0.5 text-[10px] font-bold text-[#991B1B] hover:bg-red-200"
            >
              High Ticket Anomaly (₹1,85,000 + Mismatch)
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mono block text-[10px] uppercase text-[#666666]">
                Hospital Bill DOB
              </label>
              <input
                type="text"
                value={testDob}
                onChange={(e) => setTestDob(e.target.value)}
                className="mt-1 w-full rounded border border-[#111111] bg-[#F7F6F2] p-2 font-mono text-xs font-bold text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#20C979]"
                placeholder="DD/MM/YYYY"
              />
              <span className="mono text-[9px] text-[#666666]">Policy DOB is 14/07/1998</span>
            </div>

            <div>
              <label className="mono block text-[10px] uppercase text-[#666666]">
                Claim Amount (₹)
              </label>
              <input
                type="number"
                value={testAmount}
                onChange={(e) => setTestAmount(Number(e.target.value))}
                className="mt-1 w-full rounded border border-[#111111] bg-[#F7F6F2] p-2 font-mono text-xs font-bold text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#20C979]"
                placeholder="84500"
              />
              <span className="mono text-[9px] text-[#666666]">&gt; ₹1,50,000 triggers High Risk signal</span>
            </div>

            <div>
              <label className="mono block text-[10px] uppercase text-[#666666]">
                Hospital Facility Name
              </label>
              <input
                type="text"
                value={testHospital}
                onChange={(e) => setTestHospital(e.target.value)}
                className="mt-1 w-full rounded border border-[#111111] bg-[#F7F6F2] p-2 text-xs font-bold text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#20C979]"
                placeholder="Hospital Name"
              />
              <span className="mono text-[9px] text-[#666666]">Empaneled facility check</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between border-t border-neutral-200 pt-3 gap-2">
            <span className="mono text-[10px] text-[#666666]">
              Evaluates through RerouteEngine.evaluate() and RiskEngine.assessRisk() in real time.
            </span>

            <button
              onClick={handleApply}
              className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-[#20C979] px-3.5 py-1.5 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#1bb36d]"
            >
              <RefreshCw size={13} className={justApplied ? "animate-spin" : ""} />
              <span>{justApplied ? "EVALUATING..." : "RUN ENGINE EVALUATION"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
