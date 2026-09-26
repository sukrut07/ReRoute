"use client";

import { useState } from "react";
import { DocumentEvidence } from "@/lib/types";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
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
  const [processingStage, setProcessingStage] = useState<string | null>(null);
  const [processedDocs, setProcessedDocs] = useState<string[]>(
    documents.map((d) => d.id)
  );

  const simulateProcessing = () => {
    setIsProcessing(true);
    setProcessingStage("Uploading synthetic evidence...");

    setTimeout(() => {
      setProcessingStage("Executing OCR layout analysis...");
    }, 700);

    setTimeout(() => {
      setProcessingStage("Extracting medical, identity & invoice fields...");
    }, 1400);

    setTimeout(() => {
      setProcessingStage("Reconciling evidence across documents...");
    }, 2100);

    setTimeout(() => {
      setIsProcessing(false);
      setProcessingStage(null);
      onProcessComplete();
    }, 2800);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="mono mb-2 inline-flex items-center gap-2 border border-black bg-[#54e38e] px-2.5 py-1 text-xs font-black uppercase text-black">
          <UploadCloud size={13} />
          STEP 3 · EVIDENCE COLLECTION
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#101010]">
          Upload Required Documents
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Submit your hospital invoice, clinical discharge summary, and identity proof.
        </p>
      </div>

      {/* Upload Zone */}
      <div className="brutal-border brutal-shadow border-dashed bg-[#fffef8] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-[#54e38e]">
          <UploadCloud size={28} className="text-black" />
        </div>
        <h3 className="mt-4 text-lg font-black text-[#101010]">
          Drag & drop your hospital files here
        </h3>
        <p className="mt-1 text-xs text-neutral-600">
          Accepts PDF, JPG, PNG up to 25MB · Pre-populated with synthetic sandbox artifacts
        </p>

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="mx-auto mt-6 max-w-md border-2 border-black bg-white p-4">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-neutral-900">
              <Disc3 size={16} className="animate-spin text-emerald-600" />
              <span>{processingStage}</span>
            </div>
            <div className="mt-3 h-2.5 w-full border border-black bg-neutral-100">
              <div className="h-full animate-pulse bg-[#54e38e]" style={{ width: "85%" }} />
            </div>
          </div>
        )}
      </div>

      {/* Synthetic Demo Documents List */}
      <div>
        <div className="flex items-center justify-between">
          <span className="mono text-xs font-bold uppercase text-neutral-500">
            LOADED DEMO DOCUMENTS ({documents.length})
          </span>
          <span className="mono text-[11px] font-bold text-emerald-700">
            {isMissingDocScenario ? "1 Document Missing for Recovery Demo" : "All 4 Documents Attached"}
          </span>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {documents.map((doc) => {
            const isMissing = doc.status === "MISSING";
            return (
              <div
                key={doc.id}
                className={`border-2 p-4 transition-all ${
                  isMissing
                    ? "border-dashed border-amber-600 bg-amber-50"
                    : "border-black bg-white shadow-[3px_3px_0px_#101010]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black ${
                        isMissing ? "bg-amber-200" : "bg-[#e7f9ee]"
                      }`}
                    >
                      <FileText size={16} />
                    </div>
                    <div>
                      <span className="mono text-[10px] font-bold uppercase text-neutral-500">
                        {doc.category}
                      </span>
                      <h4 className="text-sm font-black text-[#101010]">{doc.fileName}</h4>
                      <p className="mono text-[11px] text-neutral-500">
                        {doc.size} · OCR Clarity: {Math.round(doc.ocrConfidence * 100)}%
                      </p>
                    </div>
                  </div>

                  {!isMissing && (
                    <button
                      onClick={() => onViewDoc(doc)}
                      className="mono flex items-center gap-1 border border-black bg-neutral-100 px-2 py-1 text-[10px] font-bold hover:bg-neutral-200"
                    >
                      <Eye size={11} />
                      <span>Inspect</span>
                    </button>
                  )}
                </div>

                {isMissing && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <AlertCircle size={13} />
                    <span>Missing: Discharge summary required to proceed</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="flex items-center justify-between border-t-2 border-black pt-4">
        <div className="mono flex items-center gap-2 text-xs text-neutral-600">
          <ShieldCheck size={16} className="text-emerald-600" />
          <span>Synthetic data only · Zero real PII collected</span>
        </div>
        <button
          disabled={isProcessing}
          onClick={simulateProcessing}
          className="brutal-btn flex items-center gap-2 bg-[#54e38e] px-6 py-3 text-xs font-black text-black hover:bg-[#40d27c] disabled:opacity-50"
        >
          <span>{isProcessing ? "PROCESSING..." : "EXTRACT & VERIFY EVIDENCE"}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
