"use client";

import { DocumentEvidence } from "@/lib/types";
import { X, FileText, CheckCircle2, Eye, ShieldCheck } from "lucide-react";

interface EvidenceModalProps {
  document: DocumentEvidence | null;
  highlightField?: string | null;
  onClose: () => void;
}

export function EvidenceModal({ document, highlightField, onClose }: EvidenceModalProps) {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="brutal-border brutal-shadow-lg relative flex max-h-[90vh] w-full max-w-2xl flex-col bg-[#fffef8] p-6 text-black sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-black pb-4">
          <div className="flex items-center gap-2.5">
            <div className="brutal-border flex h-8 w-8 items-center justify-center bg-[#bcd8ff]">
              <FileText size={18} className="text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="mono text-xs font-black uppercase tracking-wider text-[#101010]">
                  DOCUMENT EVIDENCE VIEWER
                </span>
                <span className="border border-black bg-[#e7f9ee] px-1.5 py-0.2 text-[10px] font-bold text-emerald-800">
                  {document.category}
                </span>
              </div>
              <h3 className="text-lg font-black leading-snug tracking-tight text-[#101010]">
                {document.fileName}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="brutal-border flex h-8 w-8 items-center justify-center bg-white hover:bg-neutral-100"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1 text-sm">
          {/* Document Simulated Canvas Scan */}
          <div className="border-2 border-black bg-white p-4">
            <div className="mb-2 flex items-center justify-between border-b pb-2 text-xs">
              <span className="mono font-bold text-neutral-500">RAW ARTIFACT VIEW</span>
              <span className="mono text-[11px] text-emerald-700">
                OCR Confidence: {Math.round(document.ocrConfidence * 100)}%
              </span>
            </div>
            <div className="relative rounded border border-dashed border-neutral-300 bg-neutral-50 p-4 font-mono text-xs leading-relaxed text-neutral-800">
              <pre className="whitespace-pre-wrap font-mono">{document.rawSnippet}</pre>
              {highlightField && (
                <div className="mt-3 border-2 border-amber-500 bg-amber-100/90 p-2 font-bold text-amber-950">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Eye size={13} />
                    <span>Highlighted Field: {highlightField}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Extracted Fields Table */}
          <div className="border-2 border-black bg-white p-4">
            <p className="mono mb-2 text-xs font-black text-[#101010]">STRUCTURED EXTRACTIONS</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(document.extractedFields).map(([key, value]) => {
                const isHighlighted = highlightField && key.toLowerCase().includes(highlightField.toLowerCase());
                return (
                  <div
                    key={key}
                    className={`border p-2.5 transition-colors ${
                      isHighlighted
                        ? "border-2 border-black bg-[#fff0b8]"
                        : "border-neutral-300 bg-neutral-50"
                    }`}
                  >
                    <span className="mono block text-[10px] uppercase text-neutral-500">{key}</span>
                    <span className="font-bold text-[#101010]">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 border-2 border-black bg-[#e7f9ee] p-3 text-xs">
            <ShieldCheck size={16} className="text-emerald-700" />
            <span className="font-bold text-neutral-900">
              Cryptographically timestamped & extracted via synthetic VLM pipeline.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-end border-t-2 border-black pt-3">
          <button
            onClick={onClose}
            className="brutal-btn bg-black px-4 py-2 text-xs font-bold text-white hover:bg-neutral-800"
          >
            CLOSE VIEWER
          </button>
        </div>
      </div>
    </div>
  );
}
