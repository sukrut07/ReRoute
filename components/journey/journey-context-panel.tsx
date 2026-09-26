"use client";

import { DocumentEvidence, ConflictRecord } from "@/lib/types";
import { HelpCircle, ShieldCheck, Eye, FileText, ArrowUpRight, Scale } from "lucide-react";

interface JourneyContextPanelProps {
  documents: DocumentEvidence[];
  conflict: ConflictRecord;
  currentStepId: string;
  onOpenExplain: (key: string) => void;
  onViewDoc: (doc: DocumentEvidence) => void;
}

export function JourneyContextPanel({
  documents,
  conflict,
  currentStepId,
  onOpenExplain,
  onViewDoc,
}: JourneyContextPanelProps) {
  const isConflict = !conflict.resolved && (currentStepId === "reroute" || currentStepId === "verification");

  return (
    <aside className="space-y-4">
      {/* Customer Context Card */}
      <div className="rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#666666]">
            CUSTOMER CONTEXT
          </span>
          <span className="mono text-[10px] font-bold text-[#20C979]">ACTIVE</span>
        </div>
        <div className="mt-3 space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-[#666666]">Claimant:</span>
            <span className="font-bold text-[#111111]">Sukrut Dusane</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666666]">Policy:</span>
            <span className="mono font-bold text-[#111111]">POL-2026-1024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666666]">Amount:</span>
            <span className="mono font-bold text-[#111111]">₹84,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666666]">Hospital:</span>
            <span className="font-bold text-[#111111]">CityCare Hospital</span>
          </div>
        </div>
      </div>

      {/* AI Decision & Friction Inspector */}
      <div className="rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#666666]">
            AI EXPLANATION
          </span>
          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono flex items-center gap-1 text-[10px] font-bold text-[#20C979] underline hover:text-[#111111]"
          >
            <HelpCircle size={11} />
            <span>WHY?</span>
          </button>
        </div>

        <div className="mt-3">
          {isConflict ? (
            <div className="rounded border border-[#D97706] bg-[#FEF3C7] p-2.5 text-xs font-bold text-[#111111]">
              <span className="mono text-[10px] font-black text-[#92400E] block">
                ! CONFLICT FLAGGED
              </span>
              <p className="mt-0.5 text-xs">
                DOB differs between Policy (14/07) and Hospital Bill (17/07).
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-[#D97706]/30 pt-1.5 mono text-[10px]">
                <span className="text-[#666666]">CONFIDENCE: 92%</span>
                <span className="text-[#92400E]">ACTION: Confirm DOB</span>
              </div>
            </div>
          ) : (
            <div className="rounded border border-[#20C979] bg-[#DDF8EA] p-2.5 text-xs font-bold text-[#111111]">
              <span className="mono text-[10px] font-black text-[#111111] block">
                ✓ ALL SIGNALS CLEAR
              </span>
              <p className="mt-0.5 text-[11px] text-[#666666]">
                Cross-document verification reconciled. Ready for next stage.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Verified Evidence Stack */}
      <div className="rounded-lg border border-[#111111] bg-white p-4 shadow-[3px_3px_0px_#111111]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#666666]">
            ATTACHED EVIDENCE ({documents.length})
          </span>
          <span className="mono text-[10px] text-[#666666]">OCR VERIFIED</span>
        </div>

        <div className="mt-3 space-y-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded border border-neutral-200 bg-[#F7F6F2] p-2 text-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={13} className="text-[#666666] shrink-0" />
                <span className="font-bold truncate text-[#111111]">{doc.category}</span>
              </div>
              <button
                onClick={() => onViewDoc(doc)}
                className="mono text-[10px] font-bold text-[#666666] hover:text-[#111111] shrink-0 underline"
              >
                Inspect
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
