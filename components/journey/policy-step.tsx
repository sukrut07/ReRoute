"use client";

import { DEMO_CUSTOMER } from "@/lib/synthetic-data";
import { ArrowRight, ShieldCheck, HelpCircle, FileCheck, Check } from "lucide-react";

interface PolicyStepProps {
  onContinue: () => void;
  onOpenExplain: (key: string) => void;
}

export function PolicyStep({ onContinue, onOpenExplain }: PolicyStepProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <ShieldCheck size={13} strokeWidth={2.5} />
          STEP 2 · POLICY ENTITLEMENTS
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Active Policy Verified
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Customer profile authenticated against active healthcare underwriter database.
        </p>
      </div>

      {/* Policy Card */}
      <div className="rounded-lg border border-[#111111] bg-white p-5 sm:p-6 shadow-[3px_3px_0px_#111111]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3.5 gap-2">
          <div>
            <span className="mono text-[10px] font-bold text-[#666666] uppercase">POLICY SCHEDULE</span>
            <h3 className="text-xl font-black text-[#111111]">{DEMO_CUSTOMER.policyName}</h3>
          </div>
          <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-2.5 py-1 text-xs font-black text-[#111111]">
            {DEMO_CUSTOMER.policyNumber}
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3.5">
            <span className="mono text-[10px] uppercase text-[#666666]">PRIMARY INSURED</span>
            <p className="mt-1 text-base font-black text-[#111111]">{DEMO_CUSTOMER.name}</p>
            <p className="mono text-xs text-[#666666]">DOB: 14/07/1998</p>
          </div>

          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3.5">
            <span className="mono text-[10px] uppercase text-[#666666]">BASE SUM INSURED</span>
            <p className="mt-1 text-base font-black text-[#111111]">{DEMO_CUSTOMER.baseSumInsured}</p>
            <p className="mono text-xs text-[#666666]">No Prior Claims this Term</p>
          </div>

          <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3.5">
            <span className="mono text-[10px] uppercase text-[#666666]">ROOM RENT LIMIT</span>
            <p className="mt-1 text-base font-black text-[#111111]">{DEMO_CUSTOMER.roomRentCap}</p>
            <p className="mono text-xs text-[#666666]">Single AC Room Covered</p>
          </div>
        </div>

        {/* Policy Coverage Rules Table */}
        <div className="mt-4 rounded border border-[#111111] bg-white p-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
            <span className="mono text-xs font-bold text-[#111111]">ENTITLEMENT CRITERIA EVALUATION</span>
            <button
              onClick={() => onOpenExplain("discharge_summary_request")}
              className="mono flex items-center gap-1 text-[11px] font-bold text-[#20C979] underline hover:text-[#111111]"
            >
              <HelpCircle size={12} />
              <span>Why are these needed?</span>
            </button>
          </div>
          <ul className="mt-3 space-y-2 text-xs font-semibold text-[#111111]">
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">✓</span>
              <span>Inpatient admission &gt; 24 hours: Full medical reimbursement subject to bill audit</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">✓</span>
              <span>Pre-existing Waiting Period: Completed (Inception 01/04/2024 - active 29 months)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">✓</span>
              <span>Network status: CityCare Super Speciality Hospital is an empaneled tier-1 partner</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-5 flex items-center justify-between border-t border-[#111111] pt-3.5">
          <div className="mono flex items-center gap-2 text-xs text-[#666666]">
            <FileCheck size={14} className="text-[#20C979]" />
            <span>Schedule POL-2026-1024 validated</span>
          </div>
          <button
            onClick={onContinue}
            className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
          >
            <span>CONTINUE TO EVIDENCE</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
