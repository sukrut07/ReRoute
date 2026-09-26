"use client";

import { DemoScenarioId } from "@/lib/types";
import { Sparkles, SlidersHorizontal } from "lucide-react";

interface DemoBannerProps {
  currentScenario: DemoScenarioId;
  onSelectScenario: (scenario: DemoScenarioId) => void;
}

export function DemoBanner({ currentScenario, onSelectScenario }: DemoBannerProps) {
  const scenarioOptions: { id: DemoScenarioId; label: string; badge?: string }[] = [
    { id: "dob_conflict", label: "Conflict (Default)", badge: "CORE" },
    { id: "happy_path", label: "Happy Path", badge: "CLEAN" },
    { id: "missing_evidence", label: "Missing Evidence", badge: "RECOVERY" },
    { id: "high_risk", label: "Low Confidence", badge: "ESCALATE" },
  ];

  return (
    <div className="border-b-2 border-[#101010] bg-[#FAF9F5] px-4 py-2.5 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="mono flex items-center gap-1.5 rounded border border-[#101010] bg-[#101010] px-2 py-0.5 font-bold uppercase text-[#20C77A]">
            <SlidersHorizontal size={12} />
            DEMO SCENARIO:
          </span>
          <span className="hidden text-[#555555] md:inline">
            Select test scenarios to inspect live deterministic rerouting:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {scenarioOptions.map((s) => {
            const isSelected = currentScenario === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScenario(s.id)}
                className={`mono flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold transition-all ${
                  isSelected
                    ? "border-2 border-[#101010] bg-[#20C77A] text-[#101010] shadow-[2px_2px_0px_#101010]"
                    : "border border-neutral-300 bg-white text-[#555555] hover:border-black hover:text-black"
                }`}
              >
                <span>{s.label}</span>
                {s.badge && (
                  <span
                    className={`rounded px-1 text-[9px] font-black uppercase ${
                      isSelected ? "bg-[#101010] text-[#20C77A]" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {s.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
