"use client";

import { DemoScenarioId } from "@/lib/types";
import { SlidersHorizontal } from "lucide-react";

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
    <div className="border-b border-[#111111] bg-[#F7F6F2] px-4 py-2 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-[#111111] px-2 py-0.5 font-bold uppercase text-[#20C979]">
            <SlidersHorizontal size={12} />
            DEMO SCENARIOS:
          </span>
          <span className="hidden text-[#666666] md:inline">
            Deterministic live test benchmarks:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {scenarioOptions.map((s) => {
            const isSelected = currentScenario === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScenario(s.id)}
                className={`mono flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-bold transition-all ${
                  isSelected
                    ? "border border-[#111111] bg-[#20C979] text-[#111111] shadow-[2px_2px_0px_#111111]"
                    : "border border-neutral-300 bg-white text-[#666666] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                <span>{s.label}</span>
                {s.badge && (
                  <span
                    className={`rounded px-1 text-[9px] font-black uppercase ${
                      isSelected ? "bg-[#111111] text-[#20C979]" : "bg-neutral-100 text-[#666666]"
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
