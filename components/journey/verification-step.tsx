"use client";

import { ArrowRight, Check, AlertTriangle, HelpCircle, ShieldAlert } from "lucide-react";

interface VerificationStepProps {
  onTriggerReroute: () => void;
  onOpenExplain: (key: string) => void;
  hasConflict?: boolean;
}

export function VerificationStep({
  onTriggerReroute,
  onOpenExplain,
  hasConflict = true,
}: VerificationStepProps) {
  const comparisonRows = [
    {
      field: "Patient Name",
      policy: "Sukrut Dusane",
      document: "Sukrut Dusane",
      status: "MATCH",
      icon: "✓",
    },
    {
      field: "Date of Birth",
      policy: "14/07/1998",
      document: hasConflict ? "17/07/1998" : "14/07/1998",
      status: hasConflict ? "CONFLICT" : "MATCH",
      icon: hasConflict ? "!" : "✓",
    },
    {
      field: "Hospital Name",
      policy: "CityCare Network",
      document: "CityCare Hospital",
      status: "MATCH",
      icon: "✓",
    },
    {
      field: "Invoiced Amount",
      policy: "Coverage Active",
      document: "₹84,500",
      status: "MATCH",
      icon: "✓",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <Check size={13} strokeWidth={2.5} />
          STEP 5 · VERIFICATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Cross-Document Verification
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Comparison matrix evaluating official policy records against submitted hospital evidence.
        </p>
      </div>

      {/* Verification Table */}
      <div className="rounded-lg border border-[#111111] bg-white overflow-hidden shadow-[3px_3px_0px_#111111]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#111111] bg-[#111111] text-white mono">
                <th className="p-3.5 font-black uppercase">FIELD</th>
                <th className="p-3.5 font-black uppercase">POLICY RECORD</th>
                <th className="p-3.5 font-black uppercase">SUBMITTED EVIDENCE</th>
                <th className="p-3.5 font-black uppercase text-center">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {comparisonRows.map((row) => {
                const isConflict = row.status === "CONFLICT";
                return (
                  <tr
                    key={row.field}
                    className={`transition-colors ${
                      isConflict ? "bg-[#FEF3C7]" : "hover:bg-[#F7F6F2]"
                    }`}
                  >
                    <td className="mono p-3.5 font-bold text-[#111111]">{row.field}</td>
                    <td className="mono p-3.5 text-[#666666]">{row.policy}</td>
                    <td
                      className={`mono p-3.5 font-bold ${
                        isConflict ? "text-[#92400E] font-black" : "text-[#111111]"
                      }`}
                    >
                      {row.document}
                    </td>
                    <td className="p-3.5 text-center">
                      {isConflict ? (
                        <span className="mono inline-flex items-center gap-1 rounded border border-[#D97706] bg-[#FEF3C7] px-2 py-0.5 text-xs font-black text-[#92400E]">
                          ! Conflict
                        </span>
                      ) : (
                        <span className="mono inline-flex items-center gap-1 rounded border border-[#111111] bg-[#DDF8EA] px-2 py-0.5 text-xs font-black text-[#111111]">
                          ✓ Verified
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Dynamic Action Trigger */}
        {hasConflict ? (
          <div className="border-t border-[#111111] bg-[#FEF3C7] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="mono text-xs font-black uppercase text-[#92400E]">
                    DISCREPANCY DETECTED
                  </span>
                  <button
                    onClick={() => onOpenExplain("dob_conflict")}
                    className="mono text-xs font-bold text-[#92400E] underline hover:text-[#111111]"
                  >
                    WHY?
                  </button>
                </div>
                <p className="mt-1 text-xs text-[#666666]">
                  Policy specifies <strong>14/07/1998</strong>, while Hospital Bill contains <strong>17/07/1998</strong>.
                </p>
              </div>

              <button
                onClick={onTriggerReroute}
                className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
              >
                <span>REROUTE TO SAFE ACTION</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-[#111111] bg-[#DDF8EA] p-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#111111]">All fields reconciled with 100% agreement.</span>
            <button
              onClick={onTriggerReroute}
              className="mono rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#1bb36d]"
            >
              PROCEED TO RISK EVALUATION →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
