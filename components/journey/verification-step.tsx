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
      field: "Patient Full Name",
      policy: "Sukrut Dusane",
      bill: "Sukrut Dusane",
      idDoc: "Sukrut Dusane",
      status: "MATCH",
    },
    {
      field: "Date of Birth (DOB)",
      policy: "14/07/1998",
      bill: hasConflict ? "17/07/1998" : "14/07/1998",
      idDoc: "14/07/1998",
      status: hasConflict ? "CONFLICT" : "MATCH",
    },
    {
      field: "Empaneled Hospital",
      policy: "Preferred Network",
      bill: "CityCare Hospital",
      idDoc: "—",
      status: "MATCH",
    },
    {
      field: "Claim Amount Reconciled",
      policy: "Within ₹5L Cap",
      bill: "₹84,500",
      idDoc: "—",
      status: "MATCH",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <Check size={13} />
          STEP 5 · CROSS-EVIDENCE VERIFICATION
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Evidence Comparison & Cross-Check
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          The Verification Engine matches identity and clinical records across all submitted artifacts.
        </p>
      </div>

      {/* Comparison Matrix Table */}
      <div className="brutal-border brutal-shadow overflow-hidden bg-[#fffef8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b-2 border-black bg-black text-white">
                <th className="mono p-3.5 font-black uppercase">RECONCILED FIELD</th>
                <th className="mono p-3.5 font-black uppercase">POLICY RECORD</th>
                <th className="mono p-3.5 font-black uppercase">HOSPITAL BILL</th>
                <th className="mono p-3.5 font-black uppercase">GOVT ID CARD</th>
                <th className="mono p-3.5 font-black uppercase text-center">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/20 font-bold">
              {comparisonRows.map((row) => {
                const isConflict = row.status === "CONFLICT";
                return (
                  <tr
                    key={row.field}
                    className={`transition-colors ${
                      isConflict ? "bg-[#fff0b8]" : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <td className="mono p-3.5 text-neutral-800">{row.field}</td>
                    <td className="p-3.5 font-mono text-neutral-900">{row.policy}</td>
                    <td
                      className={`p-3.5 font-mono ${
                        isConflict ? "font-black text-red-600 underline" : "text-neutral-900"
                      }`}
                    >
                      {row.bill}
                    </td>
                    <td className="p-3.5 font-mono text-neutral-900">{row.idDoc}</td>
                    <td className="p-3.5 text-center">
                      {isConflict ? (
                        <span className="mono inline-flex items-center gap-1 border-2 border-amber-600 bg-amber-400 px-2 py-0.5 text-[11px] font-black text-black">
                          <AlertTriangle size={12} />
                          CONFLICT
                        </span>
                      ) : (
                        <span className="mono inline-flex items-center gap-1 border border-emerald-600 bg-[#e7f9ee] px-2 py-0.5 text-[11px] font-black text-emerald-800">
                          <Check size={12} />
                          MATCH
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Conflict Trigger Banner */}
        {hasConflict ? (
          <div className="border-t-2 border-black bg-[#fff0b8] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="brutal-border flex h-9 w-9 shrink-0 items-center justify-center bg-amber-400">
                  <ShieldAlert size={20} className="text-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs font-black uppercase text-amber-950">
                      DELIBERATE DISCREPANCY DETECTED
                    </span>
                    <button
                      onClick={() => onOpenExplain("dob_conflict")}
                      className="mono flex items-center gap-1 text-[11px] font-bold text-amber-900 underline hover:text-black"
                    >
                      <HelpCircle size={12} />
                      Why does this matter?
                    </button>
                  </div>
                  <h4 className="mt-1 text-lg font-black text-[#101010]">
                    Date of Birth differs between Policy and Hospital Invoice
                  </h4>
                  <p className="mt-1 max-w-xl text-xs text-neutral-700">
                    Policy Schedule records <strong>14/07/1998</strong>, while the Hospital Invoice recorded <strong>17/07/1998</strong>.
                    Rather than failing or restarting your claim, Reroute will safely reroute your journey.
                  </p>
                </div>
              </div>

              <button
                onClick={onTriggerReroute}
                className="brutal-btn flex items-center gap-2 bg-black px-6 py-3 text-xs font-black text-[#54e38e] hover:bg-neutral-800"
              >
                <span>REROUTE THIS JOURNEY</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t-2 border-black bg-[#e7f9ee] p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                <Check size={16} className="text-emerald-700" />
                <span>All documents reconciled with 100% agreement. Zero conflicts detected.</span>
              </div>
              <button
                onClick={onTriggerReroute}
                className="brutal-btn bg-[#54e38e] px-5 py-2 text-xs font-black text-black hover:bg-[#40d27c]"
              >
                PROCEED TO RISK SCREENING →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
