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
    { label: "HOSPITAL", value: "CityCare Hospital", status: "✓" },
    { label: "ADMISSION DATE", value: "12/08/2026", status: "✓" },
    { label: "DISCHARGE DATE", value: "17/08/2026", status: "✓" },
    { label: "CLAIM AMOUNT", value: "₹84,500", status: "✓" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-[#20C77A] px-2.5 py-1 text-xs font-black uppercase text-[#101010]">
          <Sparkles size={13} strokeWidth={2.5} />
          STEP 4 · EXTRACTED DATA
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Extracted Data View
        </h2>
        <p className="mt-1 text-sm text-[#555555]">
          Structured parameters extracted with high-confidence OCR and entity parsing.
        </p>
      </div>

      {/* Main Extracted Fields Card */}
      <div className="rounded-lg border-2 border-[#101010] bg-white p-6 shadow-[4px_4px_0px_#101010]">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#101010] pb-4">
          <div>
            <span className="mono text-[10px] font-black uppercase text-[#555555]">DOCUMENT SOURCE</span>
            <h3 className="text-lg font-black text-[#101010]">Hospital Bill (CityCare Invoice)</h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="mono rounded border border-[#101010] bg-[#D7F7E7] px-2.5 py-1 text-xs font-black text-[#101010]">
              CONFIDENCE 96%
            </span>

            {hospitalBill && (
              <button
                onClick={() => onViewEvidence(hospitalBill)}
                className="brutal-btn inline-flex items-center gap-1.5 bg-[#FAF9F5] px-3 py-1.5 text-xs font-black text-[#101010] hover:bg-white"
              >
                <Eye size={13} />
                <span>VIEW SOURCE</span>
              </button>
            )}
          </div>
        </div>

        {/* Fields List */}
        <div className="mt-6 divide-y divide-neutral-200">
          {extractedFields.map((field) => (
            <div key={field.label} className="py-3 flex items-center justify-between">
              <span className="mono text-xs font-black uppercase text-[#555555]">
                {field.label}
              </span>
              <div className="flex items-center gap-3">
                <span className="mono text-sm font-black text-[#101010]">
                  {field.value}
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20C77A] text-xs font-black text-[#101010]">
                  {field.status}
                </span>
              </div>
            </div>
          ))}
          {/* DOB Field with conflict notice */}
          <div className="py-3 flex items-center justify-between bg-[#FFF8E7] px-3 rounded mt-2">
            <div>
              <span className="mono text-xs font-black uppercase text-[#B45309]">
                DATE OF BIRTH (BILL)
              </span>
              {isConflictScenario && (
                <p className="mono text-[10px] text-[#E85C65] font-bold">
                  ! Differs from Policy Record (14/07/1998)
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="mono text-sm font-black text-[#E85C65]">
                17/07/1998
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E85C65] text-xs font-black text-white">
                !
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t-2 border-[#101010] pt-4">
          <span className="mono text-xs text-[#555555]">
            4 documents analyzed · Ready for reconciliation
          </span>
          <button
            onClick={onContinue}
            className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-5 py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d]"
          >
            <span>PROCEED TO VERIFICATION</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
