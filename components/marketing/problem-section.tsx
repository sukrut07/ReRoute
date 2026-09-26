import React from "react";

export function ProblemSection() {
  const problemCards = [
    {
      num: "01",
      title: "COMPLEX PROCESSES",
      desc: "Multi-tiered financial forms and fine-print exclusion rules overwhelm customers at critical moments.",
    },
    {
      num: "02",
      title: "REPEATED DOCUMENT REQUESTS",
      desc: "Legacy portals fail to explain document deficiencies, asking customers for the same paperwork repeatedly.",
    },
    {
      num: "03",
      title: "MISSING / CONFLICTING INFORMATION",
      desc: "A single mismatched digit or birthdate between two valid documents causes an abrupt failure.",
    },
    {
      num: "04",
      title: "PREVENTABLE JOURNEY DROP-OFFS",
      desc: "Journey drop-offs increase when rigid waterfall processes fail to recover from minor document discrepancies.",
    },
  ];

  return (
    <section id="product" className="relative z-10 border-t border-[#111111] bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
              THE STRUCTURAL FRICTION
            </span>
            <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
              Why Financial Journeys Break
            </h2>
          </div>
          <span className="mono rounded border border-[#111111] bg-white px-2 py-0.5 text-[10px] font-bold text-[#666666]">
            SYNTHETIC DEMO BENCHMARK
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((p) => (
            <div
              key={p.num}
              className="rounded-lg border border-[#111111] bg-white p-5 shadow-[3px_3px_0px_#111111]"
            >
              <span className="mono text-xs font-bold text-[#888888]">{p.num}</span>
              <h3 className="mt-2 text-sm font-black text-[#111111]">{p.title}</h3>
              <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
