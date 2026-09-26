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
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <ShieldCheck size={13} />
          STEP 2 · POLICY & ENTITLEMENTS
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Active Policy Verified
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          We matched your customer profile with your active health insurance schedule.
        </p>
      </div>

      {/* Policy Card */}
      <div className="brutal-border brutal-shadow bg-[#fffef8] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-4">
          <div>
            <span className="mono text-xs font-bold text-neutral-500">POLICY SCHEDULE</span>
            <h3 className="text-xl font-black text-[#101010]">{DEMO_CUSTOMER.policyName}</h3>
          </div>
          <span className="mono border border-black bg-[#e7f9ee] px-2.5 py-1 text-xs font-black text-emerald-900">
            {DEMO_CUSTOMER.policyNumber}
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="border-2 border-black bg-white p-3.5">
            <span className="mono text-[10px] uppercase text-neutral-500">PRIMARY INSURED</span>
            <p className="mt-1 text-base font-black text-[#101010]">{DEMO_CUSTOMER.name}</p>
            <p className="mono text-xs text-neutral-600">DOB: 14/07/1998</p>
          </div>

          <div className="border-2 border-black bg-white p-3.5">
            <span className="mono text-[10px] uppercase text-neutral-500">BASE SUM INSURED</span>
            <p className="mt-1 text-base font-black text-emerald-700">{DEMO_CUSTOMER.baseSumInsured}</p>
            <p className="mono text-xs text-neutral-600">No Prior Claims this Term</p>
          </div>

          <div className="border-2 border-black bg-white p-3.5">
            <span className="mono text-[10px] uppercase text-neutral-500">ROOM RENT LIMIT</span>
            <p className="mt-1 text-base font-black text-[#101010]">{DEMO_CUSTOMER.roomRentCap}</p>
            <p className="mono text-xs text-neutral-600">Single AC Room Covered</p>
          </div>
        </div>

        {/* Policy Coverage Rules Table */}
        <div className="mt-5 border-2 border-black bg-white p-4">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="mono text-xs font-bold text-neutral-700">ENTITLEMENT RULES SUMMARY</span>
            <button
              onClick={() => onOpenExplain("discharge_summary_request")}
              className="mono flex items-center gap-1 text-[11px] font-bold text-emerald-800 underline hover:text-black"
            >
              <HelpCircle size={13} />
              <span>Why are these needed?</span>
            </button>
          </div>
          <ul className="mt-3 space-y-2 text-xs font-semibold text-neutral-800">
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
              <span>Inpatient admission &gt; 24 hours: Full medical reimbursement subject to bill audit</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
              <span>Pre-existing Waiting Period: Completed (Inception 01/04/2024 - 29 months active)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">✓</span>
              <span>Network status: CityCare Super Speciality Hospital is an empaneled tier-1 partner</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-4">
          <div className="mono flex items-center gap-2 text-xs text-neutral-600">
            <FileCheck size={15} className="text-emerald-600" />
            <span>Schedule POL-2026-1024 validated</span>
          </div>
          <button
            onClick={onContinue}
            className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-6 py-2.5 text-xs font-black text-black hover:bg-[#40d27c]"
          >
            <span>CONTINUE TO DOCUMENTS</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
