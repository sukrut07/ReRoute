import React from "react";

export function HumanOversightSection() {
  return (
    <section className="relative z-10 border-t border-[#111111] bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border-2 border-[#111111] bg-[#FAF9F6] p-6 shadow-[3px_3px_0px_#111111]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#111111] pb-3">
            <div>
              <span className="mono text-[10px] font-black uppercase text-[#666666]">
                RESPONSIBLE AI GOVERNANCE
              </span>
              <h3 className="text-xl font-black text-[#111111]">Human-in-the-Loop Oversight</h3>
            </div>
            <span className="mono rounded border border-[#111111] bg-white px-2 py-0.5 text-xs font-bold text-[#111111]">
              ZERO AUTONOMOUS APPROVALS
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5 mono text-xs font-bold">
            <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
              AI DETECTS
            </div>
            <span className="text-[#111111]">→</span>
            <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
              AI EXPLAINS
            </div>
            <span className="text-[#111111]">→</span>
            <div className="rounded border border-[#D97706] bg-[#FEF3C7] px-3 py-1.5 text-[#92400E]">
              REROUTE RECOMMENDS
            </div>
            <span className="text-[#111111]">→</span>
            <div className="rounded border border-[#111111] bg-white px-3 py-1.5 text-[#111111]">
              HUMAN REVIEWS
            </div>
            <span className="text-[#111111]">→</span>
            <div className="rounded border border-[#111111] bg-[#20C979] px-3 py-1.5 text-[#111111]">
              HUMAN DECIDES
            </div>
            <span className="text-[#111111]">→</span>
            <div className="rounded border border-[#111111] bg-[#111111] px-3 py-1.5 text-white">
              JOURNEY CONTINUES
            </div>
          </div>

          <p className="mt-4 text-xs text-[#666666] leading-relaxed">
            AI assists with document extraction, discrepancy isolation, and route guidance. Authorized human officers remain solely responsible for financial adjudication and payout release.
          </p>
        </div>
      </div>
    </section>
  );
}
