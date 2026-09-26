import React from "react";

export function JourneyPipeline() {
  const pipelineStages = [
    { label: "GOAL", active: false },
    { label: "VERIFY", active: false },
    { label: "DETECT", active: false },
    { label: "REROUTE", active: true },
    { label: "COMPLETE", active: false },
  ];

  return (
    <div className="rounded-lg border border-[#111111] bg-white p-3.5 shadow-[2px_2px_0px_#111111] max-w-xl">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
        <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
          DYNAMIC JOURNEY PIPELINE
        </span>
        <span className="mono text-[10px] font-bold text-[#20C979]">
          STATE: DETERMINISTIC
        </span>
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5 mono text-[11px] font-bold">
        {pipelineStages.map((stage, idx) => (
          <div key={stage.label} className="flex items-center gap-1.5">
            <span
              className={`rounded border px-2 py-0.5 ${
                stage.active
                  ? "border-[#111111] bg-[#20C979] text-[#111111] shadow-[1px_1px_0px_#111111]"
                  : "border-[#111111] bg-white text-[#666666]"
              }`}
            >
              {stage.label}
            </span>
            {idx < pipelineStages.length - 1 && (
              <span className="text-neutral-400">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
