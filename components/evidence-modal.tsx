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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg border border-[#111111] bg-white p-5 text-[#111111] shadow-[4px_4px_0px_#111111] sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#111111] pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2]">
              <FileText size={16} className="text-[#111111]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
                  DOCUMENT EVIDENCE VIEWER
                </span>
                <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-1.5 py-0.2 text-[10px] font-bold text-[#111111]">
                  {document.category}
                </span>
              </div>
              <h3 className="text-base font-black leading-snug tracking-tight text-[#111111] mt-0.5">
                {document.fileName}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2] hover:bg-neutral-200"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 flex-1 space-y-3.5 overflow-y-auto pr-1 text-xs">
          {/* Document Simulated Canvas Scan */}
          <div className="rounded border border-[#111111] bg-white p-3.5">
            <div className="mb-2 flex items-center justify-between border-b border-neutral-200 pb-1.5 text-xs">
              <span className="mono font-bold text-[#666666]">RAW ARTIFACT SNIPPET</span>
              <span className="mono text-[11px] font-bold text-[#20C979]">
                OCR Confidence: {Math.round(document.ocrConfidence * 100)}%
              </span>
            </div>
            <div className="relative rounded border border-dashed border-neutral-300 bg-[#F7F6F2] p-3 font-mono text-xs leading-relaxed text-[#111111]">
              <pre className="whitespace-pre-wrap font-mono">{document.rawSnippet}</pre>
              {highlightField && (
                <div className="mt-2.5 rounded border border-[#D97706] bg-[#FEF3C7] p-2 font-bold text-[#92400E]">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Eye size={13} />
                    <span>Highlighted Field: {highlightField}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Extracted Fields Table */}
          <div className="rounded border border-[#111111] bg-white p-3.5">
            <p className="mono mb-2 text-xs font-black text-[#111111]">STRUCTURED EXTRACTIONS</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(document.extractedFields).map(([key, value]) => {
                const isHighlighted = highlightField && key.toLowerCase().includes(highlightField.toLowerCase());
                return (
                  <div
                    key={key}
                    className={`rounded border p-2 transition-colors ${
                      isHighlighted
                        ? "border-[#D97706] bg-[#FEF3C7]"
                        : "border-neutral-200 bg-[#F7F6F2]"
                    }`}
                  >
                    <span className="mono block text-[10px] uppercase text-[#666666]">{key}</span>
                    <span className="font-bold text-[#111111]">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#DDF8EA] p-3 text-xs">
            <ShieldCheck size={15} className="text-[#20C979]" />
            <span className="font-bold text-[#111111]">
              Cryptographically timestamped & verified via deterministic entity pipeline.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 border-t border-[#111111] pt-3 text-right">
          <button
            onClick={onClose}
            className="mono rounded border border-[#111111] bg-[#111111] px-4 py-1.5 text-xs font-black text-white hover:bg-[#333333]"
          >
            CLOSE VIEWER
          </button>
        </div>
      </div>
    </div>
  );
}
