"use client";

import { useState } from "react";
import { DocumentEvidence } from "@/lib/types";
import {
  UploadCloud,
  FileText,
  Check,
  Disc3,
  ArrowRight,
  ShieldCheck,
  Eye,
  AlertCircle,
} from "lucide-react";

interface UploadStepProps {
  documents: DocumentEvidence[];
  onProcessComplete: () => void;
  onViewDoc: (doc: DocumentEvidence) => void;
  isMissingDocScenario?: boolean;
}

export function UploadStep({
  documents,
  onProcessComplete,
  onViewDoc,
  isMissingDocScenario = false,
}: UploadStepProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const stages = ["UPLOADING", "READING", "EXTRACTING", "VERIFYING"];

  const handleStartProcessing = () => {
    setIsProcessing(true);
    setCurrentStageIndex(0);

    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            onProcessComplete();
          }, 400);
          return prev;
        }
      });
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#101010] bg-[#20C77A] px-2.5 py-1 text-xs font-black uppercase text-[#101010]">
          <UploadCloud size={13} strokeWidth={2.5} />
          STEP 3 · DOCUMENT CENTER
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Evidence & Document Center
        </h2>
        <p className="mt-1 text-sm text-[#555555]">
          Manage and upload all required documents for your claim.
        </p>
      </div>

      {/* Required Evidence Checklist Summary */}
      <div className="rounded-lg border-2 border-[#101010] bg-white p-5 shadow-[3px_3px_0px_#101010]">
        <span className="mono text-xs font-black uppercase text-[#555555]">
          REQUIRED EVIDENCE
        </span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mono text-xs font-bold">
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#FAF9F5] p-2 text-[#101010]">
            <span className="text-[#20C77A] font-black">✓</span>
            <span>Policy</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#FAF9F5] p-2 text-[#101010]">
            <span className="text-[#20C77A] font-black">✓</span>
            <span>Identity</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#FAF9F5] p-2 text-[#101010]">
            <span className="text-[#20C77A] font-black">✓</span>
            <span>Hospital Bill</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#FAF9F5] p-2 text-[#101010]">
            <span className={isMissingDocScenario ? "text-[#E85C65] font-black" : "text-[#20C77A] font-black"}>
              {isMissingDocScenario ? "○" : "✓"}
            </span>
            <span>Discharge Summary</span>
          </div>
        </div>
      </div>

      {/* Upload Dropzone */}
      <div className="rounded-lg border-2 border-dashed border-[#101010] bg-[#FAF9F5] p-6 text-center">
        <UploadCloud size={32} className="mx-auto text-[#101010]" />
        <h3 className="mt-2 text-base font-black text-[#101010]">UPLOAD DOCUMENT</h3>
        <p className="mt-1 text-xs text-[#555555]">
          Drag and drop PDF, JPG, PNG or use synthetic preloaded demo files.
        </p>

        {/* Processing Sequence Indicator (Section 14) */}
        {isProcessing && (
          <div className="mx-auto mt-5 max-w-lg rounded border border-[#101010] bg-white p-3.5">
            <div className="flex items-center justify-center gap-2 mono text-xs font-black">
              {stages.map((stage, idx) => {
                const isActive = idx === currentStageIndex;
                const isPassed = idx < currentStageIndex;
                return (
                  <div key={stage} className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-[#20C77A] text-black font-black"
                          : isPassed
                          ? "bg-neutral-200 text-neutral-800"
                          : "text-neutral-400"
                      }`}
                    >
                      {stage}
                    </span>
                    {idx < stages.length - 1 && <span className="text-neutral-400">↓</span>}
                  </div>
                );
              })}
            </div>
            <div className="mt-3 h-1.5 w-full rounded bg-neutral-100 overflow-hidden">
              <div
                className="h-full bg-[#20C77A] transition-all duration-300"
                style={{ width: `${((currentStageIndex + 1) / stages.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Uploaded Document Cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {documents.map((doc) => {
          const isMissing = doc.status === "MISSING";
          return (
            <div
              key={doc.id}
              className={`rounded-lg border-2 p-4 transition-all ${
                isMissing
                  ? "border-dashed border-[#F2A900] bg-[#FFF8E7]"
                  : "border-[#101010] bg-white shadow-[3px_3px_0px_#101010]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-black text-[#101010]">{doc.category}</h4>
                  <p className="mono text-xs text-[#555555]">{doc.fileName}</p>
                  {!isMissing && (
                    <span className="mono mt-1 inline-block text-[11px] font-bold text-[#20C77A]">
                      PROCESSED {Math.round(doc.ocrConfidence * 100)}% CONFIDENCE
                    </span>
                  )}
                  {isMissing && (
                    <span className="mono mt-1 inline-block text-[11px] font-bold text-[#D97706]">
                      ○ PENDING UPLOAD
                    </span>
                  )}
                </div>

                {!isMissing && (
                  <button
                    onClick={() => onViewDoc(doc)}
                    className="brutal-btn rounded border border-[#101010] bg-[#FAF9F5] px-2.5 py-1 text-[11px] font-black text-[#101010] hover:bg-white"
                  >
                    VIEW EVIDENCE
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t-2 border-[#101010] pt-4">
        <div className="flex items-center gap-1.5 mono text-xs text-[#555555]">
          <ShieldCheck size={15} className="text-[#20C77A]" />
          <span>Synthetic evidence sandbox</span>
        </div>

        <button
          disabled={isProcessing}
          onClick={handleStartProcessing}
          className="brutal-btn inline-flex items-center gap-2 bg-[#20C77A] px-5 py-2.5 text-xs font-black text-[#101010] hover:bg-[#1bb36d] disabled:opacity-50"
        >
          <span>{isProcessing ? "PROCESSING..." : "EXTRACT DATA →"}</span>
        </button>
      </div>
    </div>
  );
}
