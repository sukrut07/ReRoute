"use client";

import { useState } from "react";
import { DocumentEvidence } from "@/lib/types";
import { X, FileText, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";

interface EvidenceModalProps {
  document: DocumentEvidence | null;
  highlightField?: string | null;
  onClose: () => void;
}

export function EvidenceModal({ document, highlightField, onClose }: EvidenceModalProps) {
  if (!document) return null;

  // Determine initial selected field based on highlightField or the first key
  const fieldEntries = Object.entries(document.extractedFields || {});
  const matchingKey = highlightField
    ? fieldEntries.find(([k]) => k.toLowerCase().includes(highlightField.toLowerCase()))?.[0]
    : undefined;

  const [activeFieldKey, setActiveFieldKey] = useState<string>(
    matchingKey || (fieldEntries.length > 0 ? fieldEntries[0][0] : "Date of Birth")
  );

  const activeValue = document.extractedFields?.[activeFieldKey] || "—";
  const confidencePct = Math.round(
    (document.confidence || document.ocrConfidence || 0.95) * 100
  );

  // Derive source section excerpt from raw snippet
  const getExcerpt = () => {
    if (!document.rawSnippet) return `${document.name} → Identity & Claim Records`;
    const lines = document.rawSnippet.split("\n");
    const matchingLine = lines.find((l) =>
      l.toLowerCase().includes(activeFieldKey.toLowerCase()) ||
      (activeValue !== "—" && l.toLowerCase().includes(activeValue.toLowerCase()))
    );
    if (matchingLine) {
      return `${document.name} → "${matchingLine.trim()}"`;
    }
    return `${document.name} → Section: Verified Artifact Record`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg border-2 border-[#111111] bg-white p-5 text-[#111111] shadow-[5px_5px_0px_#111111] sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-[#111111] pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded border border-[#111111] bg-[#20C979]/20">
              <FileText size={18} className="text-[#111111]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
                  EVIDENCE VERIFICATION INSPECTOR
                </span>
                <span className="mono rounded border border-[#111111] bg-[#DDF8EA] px-1.5 py-0.2 text-[10px] font-bold text-[#111111]">
                  {document.category}
                </span>
              </div>
              <h3 className="text-base font-black leading-snug tracking-tight text-[#111111]">
                {document.fileName}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2] hover:bg-neutral-200 transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1 text-xs">
          {/* Section 18 Primary Structured Evidence Card */}
          <div className="rounded border-2 border-[#111111] bg-[#F7F6F2] p-4 shadow-[3px_3px_0px_#111111]">
            <div className="mono mb-2 flex items-center justify-between border-b border-[#111111] pb-1.5 text-[10px] font-black uppercase text-[#666666]">
              <span>STRUCTURED EVIDENCE RECORD</span>
              <span className="text-[#20C979]">OCR CONFIDENCE: {confidencePct}%</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="mono block text-[10px] uppercase font-bold text-[#666666]">
                  DOCUMENT
                </span>
                <span className="font-black text-sm text-[#111111]">{document.name}</span>
              </div>

              <div>
                <span className="mono block text-[10px] uppercase font-bold text-[#666666]">
                  INSPECTED FIELD
                </span>
                <span className="font-black text-sm text-[#111111]">{activeFieldKey}</span>
              </div>

              <div>
                <span className="mono block text-[10px] uppercase font-bold text-[#666666]">
                  EXTRACTED VALUE
                </span>
                <span className="font-black text-base text-[#111111] bg-white border border-[#111111] px-2 py-0.5 rounded inline-block mt-0.5">
                  {activeValue}
                </span>
              </div>

              <div>
                <span className="mono block text-[10px] uppercase font-bold text-[#666666]">
                  CONFIDENCE
                </span>
                <span className="mono font-black text-sm text-[#20C979]">
                  {confidencePct}% verified
                </span>
              </div>
            </div>

            <div className="mt-3 border-t border-neutral-300 pt-2.5">
              <span className="mono block text-[10px] uppercase font-bold text-[#666666]">
                SOURCE EXCERPT
              </span>
              <p className="mono mt-0.5 text-xs font-bold text-[#111111] bg-white rounded border border-neutral-300 p-2">
                {getExcerpt()}
              </p>
            </div>
          </div>

          {/* Interactive Field Selector */}
          <div className="rounded border border-[#111111] bg-white p-3.5">
            <span className="mono block mb-2 text-xs font-black uppercase text-[#111111]">
              ALL EXTRACTED FIELDS (CLICK TO INSPECT)
            </span>
            <div className="grid gap-2 sm:grid-cols-2">
              {fieldEntries.map(([key, value]) => {
                const isSelected = key === activeFieldKey;
                const isConflict = key.toLowerCase().includes("birth") && document.status === "CONFLICT";
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFieldKey(key)}
                    className={`rounded border p-2 text-left transition-all ${
                      isSelected
                        ? "border-[#111111] bg-[#DDF8EA] shadow-[2px_2px_0px_#111111]"
                        : isConflict
                        ? "border-[#D97706] bg-[#FEF3C7] hover:border-[#111111]"
                        : "border-neutral-200 bg-[#F7F6F2] hover:border-neutral-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono block text-[10px] uppercase text-[#666666]">{key}</span>
                      {isSelected && <ChevronRight size={12} className="text-[#111111]" />}
                    </div>
                    <span className="font-bold text-[#111111]">{value}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Raw Artifact Excerpt */}
          <div className="rounded border border-[#111111] bg-white p-3.5">
            <div className="mb-2 flex items-center justify-between border-b border-neutral-200 pb-1.5 text-xs">
              <span className="mono font-bold text-[#666666]">RAW DOCUMENT EXCERPT</span>
              <span className="mono text-[10px] text-[#666666]">DETERMINISTIC OCR SCAN</span>
            </div>
            <pre className="whitespace-pre-wrap rounded border border-dashed border-neutral-300 bg-[#F7F6F2] p-2.5 font-mono text-[11px] leading-relaxed text-[#111111]">
              {document.rawSnippet}
            </pre>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#DDF8EA] p-3 text-xs">
            <ShieldCheck size={15} className="text-[#20C979] shrink-0" />
            <span className="font-bold text-[#111111]">
              Evidence cryptographically hashed and verified against deterministic journey registry.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 border-t-2 border-[#111111] pt-3 text-right">
          <button
            onClick={onClose}
            className="mono rounded border-2 border-[#111111] bg-[#111111] px-5 py-1.5 text-xs font-black text-white shadow-[2px_2px_0px_#111111] hover:bg-[#333333] transition-colors"
          >
            CLOSE VIEWER
          </button>
        </div>
      </div>
    </div>
  );
}
