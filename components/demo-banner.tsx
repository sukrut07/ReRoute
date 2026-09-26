"use client";

import { DEMO_SCENARIOS } from "@/lib/synthetic-data";
import { DemoScenarioId } from "@/lib/types";
import { Sparkles, Info } from "lucide-react";

interface DemoBannerProps {
  currentScenario: DemoScenarioId;
  onSelectScenario: (scenario: DemoScenarioId) => void;
}

export function DemoBanner({ currentScenario, onSelectScenario }: DemoBannerProps) {
  return (
    <div className="border-b-2 border-black bg-[#fffef8] px-4 py-2.5 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="mono flex items-center gap-1.5 border border-black bg-black px-2 py-0.5 font-black uppercase text-[#54e38e]">
            <Sparkles size={12} />
            DEMO MODE ACTIVE
          </span>
          <span className="hidden text-neutral-600 md:inline">
            Switch scenarios to test instant rerouting, missing document prompts, and risk handling:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {DEMO_SCENARIOS.map((scenario) => {
            const isSelected = currentScenario === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => onSelectScenario(scenario.id)}
                className={`mono flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-bold transition-all ${
                  isSelected
                    ? "border-2 border-black bg-[#54e38e] text-black shadow-[2px_2px_0px_#101010]"
                    : "border border-neutral-400 bg-white text-neutral-700 hover:border-black hover:bg-neutral-100"
                }`}
                title={scenario.description}
              >
                <span>{scenario.name}</span>
                <span
                  className="rounded px-1 py-0.2 text-[9px] font-black uppercase"
                  style={{
                    backgroundColor: isSelected ? "#101010" : "#eee",
                    color: isSelected ? "#54e38e" : "#555",
                  }}
                >
                  {scenario.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
