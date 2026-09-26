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
        <div className="mono mb-2 inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-2.5 py-0.5 text-xs font-black uppercase text-[#111111]">
          <UploadCloud size={13} strokeWidth={2.5} />
          STEP 3 · EVIDENCE COLLECTION
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
          Evidence & Document Center
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Manage and upload all required documents for your claim.
        </p>
      </div>

      {/* Required Evidence Checklist Summary */}
      <div className="rounded-lg border border-[#111111] bg-white p-4 sm:p-5 shadow-[3px_3px_0px_#111111]">
        <span className="mono text-xs font-black uppercase text-[#666666]">
          REQUIRED EVIDENCE CHECKLIST
        </span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mono text-xs font-bold">
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#F7F6F2] p-2 text-[#111111]">
            <span className="text-[#20C979] font-black">✓</span>
            <span>Policy Schedule</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#F7F6F2] p-2 text-[#111111]">
            <span className="text-[#20C979] font-black">✓</span>
            <span>Identity Proof</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#F7F6F2] p-2 text-[#111111]">
            <span className="text-[#20C979] font-black">✓</span>
            <span>Hospital Bill</span>
          </div>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-[#F7F6F2] p-2 text-[#111111]">
            <span className={isMissingDocScenario ? "text-[#D9414B] font-black" : "text-[#20C979] font-black"}>
              {isMissingDocScenario ? "○" : "✓"}
            </span>
            <span>Discharge Summary</span>
          </div>
        </div>
      </div>

      {/* Upload Dropzone */}
      <div className="rounded-lg border border-dashed border-[#111111] bg-[#F7F6F2] p-6 text-center">
        <UploadCloud size={28} className="mx-auto text-[#111111]" />
        <h3 className="mt-2 text-sm font-black text-[#111111]">UPLOAD EVIDENCE DOCUMENT</h3>
        <p className="mt-1 text-xs text-[#666666]">
          Drag and drop PDF, JPG, PNG or use synthetic preloaded demo files.
        </p>

        {/* Processing Sequence Indicator */}
        {isProcessing && (
          <div className="mx-auto mt-4 max-w-lg rounded border border-[#111111] bg-white p-3">
            <div className="flex items-center justify-center gap-2 mono text-xs font-black">
              {stages.map((stage, idx) => {
                const isActive = idx === currentStageIndex;
                const isPassed = idx < currentStageIndex;
                return (
                  <div key={stage} className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] ${
                        isActive
                          ? "bg-[#20C979] text-[#111111] font-black"
                          : isPassed
                          ? "bg-neutral-200 text-neutral-800"
                          : "text-neutral-400"
                      }`}
                    >
                      {stage}
                    </span>
                    {idx < stages.length - 1 && <span className="text-neutral-400">→</span>}
                  </div>
                );
              })}
            </div>
            <div className="mt-2.5 h-1.5 w-full rounded bg-neutral-100 overflow-hidden">
              <div
                className="h-full bg-[#20C979] transition-all duration-300"
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
              className={`rounded-lg border p-4 transition-all ${
                isMissing
                  ? "border-dashed border-[#D97706] bg-[#FEF3C7]"
                  : "border-[#111111] bg-white shadow-[2px_2px_0px_#111111]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-black text-[#111111]">{doc.category}</h4>
                  <p className="mono text-xs text-[#666666]">{doc.fileName}</p>
                  {!isMissing && (
                    <span className="mono mt-1 inline-block text-[11px] font-bold text-[#20C979]">
                      PROCESSED {Math.round(doc.ocrConfidence * 100)}% CONFIDENCE
                    </span>
                  )}
                  {isMissing && (
                    <span className="mono mt-1 inline-block text-[11px] font-bold text-[#92400E]">
                      ○ PENDING UPLOAD
                    </span>
                  )}
                </div>

                {!isMissing && (
                  <button
                    onClick={() => onViewDoc(doc)}
                    className="mono rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-[11px] font-bold text-[#111111] hover:bg-neutral-200"
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
      <div className="flex items-center justify-between border-t border-[#111111] pt-4">
        <div className="flex items-center gap-1.5 mono text-xs text-[#666666]">
          <ShieldCheck size={14} className="text-[#20C979]" />
          <span>Synthetic evidence sandbox</span>
        </div>

        <button
          disabled={isProcessing}
          onClick={handleStartProcessing}
          className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-4 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d] disabled:opacity-50"
        >
          <span>{isProcessing ? "PROCESSING..." : "EXTRACT DATA →"}</span>
        </button>
      </div>
    </div>
  );
}
