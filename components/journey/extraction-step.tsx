"use client";

import { DocumentEvidence } from "@/lib/types";
import { ArrowRight, CheckCircle2, Eye, FileText, Sparkles, AlertTriangle } from "lucide-react";

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <Sparkles size={13} />
          STEP 4 · DOCUMENT INTELLIGENCE
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Information Extracted from Evidence
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Visual Language Models and OCR turned submitted PDF artifacts into structured, confidence-scored fields.
        </p>
      </div>

      {/* Main Focus: Hospital Bill Extraction Card */}
      <div className="brutal-border brutal-shadow bg-[#fffef8] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-4">
          <div className="flex items-center gap-3">
            <div className="brutal-border flex h-10 w-10 items-center justify-center bg-[#bcd8ff]">
              <FileText size={20} />
            </div>
            <div>
              <span className="mono text-xs font-bold uppercase text-neutral-500">
                PRIMARY INVOICE ARTIFACT
              </span>
              <h3 className="text-xl font-black text-[#101010]">
                {hospitalBill ? hospitalBill.name : "Itemized Hospital Bill"}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="border-2 border-black bg-white px-3 py-1.5 text-right">
              <span className="mono block text-[10px] uppercase text-neutral-500">
                EXTRACTION CONFIDENCE
              </span>
              <span className="text-base font-black text-emerald-700">
                {hospitalBill ? Math.round(hospitalBill.confidence * 100) : 96}%
              </span>
            </div>
            {hospitalBill && (
              <button
                onClick={() => onViewEvidence(hospitalBill)}
                className="brutal-btn flex items-center gap-1.5 bg-black px-3 py-2 text-xs font-bold text-white hover:bg-neutral-800"
              >
                <Eye size={13} />
                <span>VIEW EVIDENCE</span>
              </button>
            )}
          </div>
        </div>

        {/* Extracted Fields Grid */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hospitalBill &&
            Object.entries(hospitalBill.extractedFields).map(([label, val]) => {
              const isDob = label.toLowerCase().includes("birth");
              return (
                <div
                  key={label}
                  className={`border-2 p-3.5 transition-all ${
                    isDob && isConflictScenario
                      ? "border-amber-500 bg-[#fff0b8]"
                      : "border-black bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-[10px] uppercase text-neutral-500">{label}</span>
                    <button
                      onClick={() => onViewEvidence(hospitalBill, label)}
                      className="mono text-[10px] font-bold text-emerald-800 underline hover:text-black"
                    >
                      Audit
                    </button>
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-base font-black text-[#101010]">{val}</span>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#54e38e] text-[10px] text-black">
                      ✓
                    </span>
                  </div>
                  {isDob && isConflictScenario && (
                    <p className="mono mt-1 text-[10px] font-bold text-amber-800">
                      ⚠ Differs from Policy Record (14/07/1998)
                    </p>
                  )}
                </div>
              );
            })}
        </div>

        {/* Confidence Meter */}
        <div className="mt-5 border-2 border-black bg-white p-4">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>OCR & ENTITY EXTRACTION FIDELITY</span>
            <span className="mono">96.4% ACCURACY SCORE</span>
          </div>
          <div className="mt-2 h-2.5 w-full border border-black bg-neutral-100">
            <div className="h-full bg-[#54e38e]" style={{ width: "96.4%" }} />
          </div>
          <p className="mt-2 text-[11px] text-neutral-600">
            All surgical codes, admission timestamps, and net payable subtotals were parsed without manual data entry.
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-4">
          <span className="mono text-xs text-neutral-600">
            Reconciliation ready across 4 submitted documents
          </span>
          <button
            onClick={onContinue}
            className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-6 py-2.5 text-xs font-black text-black hover:bg-[#40d27c]"
          >
            <span>PROCEED TO VERIFICATION</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
