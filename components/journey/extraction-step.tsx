"use client";

import { DocumentEvidence } from "@/lib/types";
import { ArrowRight, Check, Eye, FileText, Sparkles } from "lucide-react";

interface ExtractionStepProps {
  documents: DocumentEvidence[];
  onContinue: () => void;
  onViewEvidence: (doc: DocumentEvidence, fieldKey?: string) => void;
  isConflictScenario?: boolean;
}

export function ExtractionStep({
  documents,
  onContinue,
  onViewEvidence,
  isConflictScenario = true,
}: ExtractionStepProps) {
  const hospitalBill = documents.find((d) => d.category === "Hospital Bill") || documents[1];

  const extractedFields = [
    { label: "PATIENT NAME", value: "Sukrut Dusane", status: "✓" },
    { label: "HOSPITAL FACILITY", value: "CityCare Hospital", status: "✓" },
    { label: "ADMISSION DATE", value: "12/08/2026", status: "✓" },
    { label: "DISCHARGE DATE", value: "17/08/2026", status: "✓" },
    { label: "CLAIM AMOUNT", value: "₹84,500", status: "✓" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <Sparkles size={13} strokeWidth={2.5} />
          STEP 4 · EXTRACTED DATA
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Extracted Data View
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Structured parameters extracted with deterministic OCR and entity parsing.
        </p>
      </div>

      {/* Main Extracted Fields Card */}
      <div className="rounded-lg border border-[#111111] bg-white p-5 sm:p-6 shadow-[3px_3px_0px_#111111]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3.5 gap-2">
          <div>
            <span className="mono text-[10px] font-black uppercase text-[#666666]">DOCUMENT SOURCE</span>
            <h3 className="text-base sm:text-lg font-black text-[#111111]">Hospital Bill (CityCare Invoice)</h3>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-2.5 py-0.5 text-xs font-black text-[#111111]">
              CONFIDENCE 96%
            </span>

            {hospitalBill && (
              <button
                onClick={() => onViewEvidence(hospitalBill)}
                className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-xs font-bold text-[#111111] hover:bg-neutral-200"
              >
                <Eye size={12} />
                <span>VIEW SOURCE</span>
              </button>
            )}
          </div>
        </div>

        {/* Fields List */}
        <div className="mt-4 divide-y divide-neutral-200">
          {extractedFields.map((field) => (
            <div key={field.label} className="py-2.5 flex items-center justify-between">
              <span className="mono text-xs font-black uppercase text-[#666666]">
                {field.label}
              </span>
              <div className="flex items-center gap-3">
                <span className="mono text-xs sm:text-sm font-black text-[#111111]">
                  {field.value}
                </span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20C979] text-[9px] font-black text-[#111111]">
                  {field.status}
                </span>
              </div>
            </div>
          ))}
          {/* DOB Field with conflict notice */}
          <div className="py-2.5 flex items-center justify-between bg-[#FEF3C7] px-3 rounded border border-[#D97706] mt-2">
            <div>
              <span className="mono text-xs font-black uppercase text-[#92400E]">
                DATE OF BIRTH (BILL)
              </span>
              {isConflictScenario && (
                <p className="mono text-[10px] text-[#92400E] font-bold">
                  ! Differs from Policy Schedule (14/07/1998)
                </p>
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <span className="mono text-xs sm:text-sm font-black text-[#92400E]">
                17/07/1998
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D97706] text-[9px] font-black text-white">
                !
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#111111] pt-3.5">
          <span className="mono text-xs text-[#666666]">
            4 documents analyzed · Ready for reconciliation
          </span>
          <button
            onClick={onContinue}
            className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d]"
          >
            <span>PROCEED TO VERIFICATION</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
