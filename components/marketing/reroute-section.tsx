import React from "react";

export function RerouteSection() {
  const howItWorksSteps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "Parses customer intent from natural language input to identify the exact financial journey type and required criteria.",
    },
    {
      num: "02",
      title: "VERIFY",
      desc: "Extracts and cross-checks data points across submitted policy schedules, clinical invoices, and identity records.",
    },
    {
      num: "03",
      title: "DETECT",
      desc: "Flags discrepancies, missing reports, or variance thresholds deterministically without black-box rejections.",
    },
    {
      num: "04",
      title: "REROUTE",
      desc: "Isolates the blocking issue and guides the customer to the safest in-place action without restarting.",
    },
    {
      num: "05",
      title: "COMPLETE",
      desc: "Assembles structured, auditable evidence dossiers for authorized human claims officers.",
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 border-t border-[#111111] bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
            WORKFLOW ARCHITECTURE
          </span>
          <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
            HOW REROUTE WORKS
          </h2>
          <p className="mt-2 text-sm text-[#666666]">
            A five-stage deterministic recovery loop designed to eliminate friction and prevent journey abandonment.
          </p>
        </div>

        {/* 5-Step Explanation */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((step) => (
            <div
              key={step.num}
              className="rounded-lg border border-[#111111] bg-[#FAF9F6] p-4 shadow-[2px_2px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                <span className="mono text-xs font-black text-[#888888]">{step.num}</span>
                <h3 className="mt-2 text-sm font-black text-[#111111]">{step.title}</h3>
                <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Flow Timeline Visualization */}
        <div className="mt-10 rounded-lg border border-[#111111] bg-[#FAF9F6] p-5 shadow-[2px_2px_0px_#111111]">
          <span className="mono text-[10px] font-black uppercase text-[#666666] block mb-3">
            JOURNEY TIMELINE EXECUTION
          </span>
          <div className="flex flex-wrap items-center justify-between gap-2 mono text-xs font-bold">
            <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">CUSTOMER GOAL</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">DOCUMENTS</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">VERIFICATION</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#D97706] bg-[#FEF3C7] px-2.5 py-1 text-[#92400E]">RISK / CONFLICT</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#111111] bg-[#20C979] px-2.5 py-1 text-[#111111]">REROUTE</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#111111] bg-white px-2.5 py-1 text-[#111111]">HUMAN REVIEW</span>
            <span className="text-[#111111]">↓</span>
            <span className="rounded border border-[#111111] bg-[#111111] px-2.5 py-1 text-white">RESOLUTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
