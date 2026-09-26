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
      field: "Name",
      policy: "Sukrut Dusane",
      document: "Sukrut Dusane",
      status: "MATCH",
      icon: "✓",
    },
    {
      field: "DOB",
      policy: "14/07/1998",
      document: hasConflict ? "17/07/1998" : "14/07/1998",
      status: hasConflict ? "CONFLICT" : "MATCH",
      icon: hasConflict ? "!" : "✓",
    },
    {
      field: "Hospital",
      policy: "—",
      document: "CityCare Hospital",
      status: "MATCH",
      icon: "✓",
    },
    {
      field: "Amount",
      policy: "—",
      document: "₹84,500",
      status: "MATCH",
      icon: "✓",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-[#20C77A] px-2.5 py-1 text-xs font-black uppercase text-[#101010]">
          <Check size={13} strokeWidth={2.5} />
          STEP 5 · VERIFICATION
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Cross-Document Verification
        </h2>
        <p className="mt-1 text-sm text-[#555555]">
          Comparison table matching policy records against submitted hospital evidence.
        </p>
      </div>

      {/* Verification Table */}
      <div className="rounded-lg border-2 border-[#101010] bg-white overflow-hidden shadow-[4px_4px_0px_#101010]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b-2 border-[#101010] bg-[#101010] text-white mono">
                <th className="p-3.5 font-black uppercase">FIELD</th>
                <th className="p-3.5 font-black uppercase">POLICY</th>
                <th className="p-3.5 font-black uppercase">DOCUMENT</th>
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
                      isConflict ? "bg-[#FFF8E7]" : "hover:bg-[#FAF9F5]"
                    }`}
                  >
                    <td className="mono p-3.5 font-bold text-[#101010]">{row.field}</td>
                    <td className="mono p-3.5 text-[#555555]">{row.policy}</td>
                    <td
                      className={`mono p-3.5 font-bold ${
                        isConflict ? "text-[#E85C65] font-black" : "text-[#101010]"
                      }`}
                    >
                      {row.document}
                    </td>
                    <td className="p-3.5 text-center">
                      {isConflict ? (
                        <span className="mono inline-flex items-center gap-1 rounded border border-[#E85C65] bg-[#FDE8E9] px-2 py-0.5 text-xs font-black text-[#E85C65]">
                          ! Conflict
                        </span>
                      ) : (
                        <span className="mono inline-flex items-center gap-1 rounded border border-[#20C77A] bg-[#D7F7E7] px-2 py-0.5 text-xs font-black text-[#101010]">
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
          <div className="border-t-2 border-[#101010] bg-[#FFF8E7] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="mono text-xs font-black uppercase text-[#B45309]">
                    DISCREPANCY FLAGGED
                  </span>
                  <button
                    onClick={() => onOpenExplain("dob_conflict")}
                    className="mono text-xs font-bold text-[#B45309] underline hover:text-black"
                  >
                    WHY?
                  </button>
                </div>
                <p className="mt-1 text-xs text-[#555555]">
                  Policy records <strong>14/07/1998</strong>, while Hospital Bill records <strong>17/07/1998</strong>.
                </p>
              </div>

              <button
                onClick={onTriggerReroute}
                className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-5 py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
              >
                <span>REROUTE TO SAFE ACTION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t-2 border-[#101010] bg-[#D7F7E7] p-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#101010]">All fields match across documents.</span>
            <button
              onClick={onTriggerReroute}
              className="brutal-btn bg-[#20C77A] px-4 py-2 text-xs font-black text-[#101010]"
            >
              PROCEED TO RISK SCREENING →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
