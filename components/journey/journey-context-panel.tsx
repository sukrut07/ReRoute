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
      <div className="rounded-lg border-2 border-[#101010] bg-white p-4 shadow-[3px_3px_0px_#101010]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#555555]">
            CUSTOMER CONTEXT
          </span>
          <span className="mono text-[10px] font-bold text-[#20C77A]">ACTIVE</span>
        </div>
        <div className="mt-3 space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-[#555555]">Claimant:</span>
            <span className="font-bold text-[#101010]">Sukrut Dusane</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#555555]">Policy:</span>
            <span className="mono font-bold text-[#101010]">POL-2026-1024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#555555]">Amount:</span>
            <span className="mono font-bold text-[#101010]">₹84,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#555555]">Hospital:</span>
            <span className="font-bold text-[#101010]">CityCare Hospital</span>
          </div>
        </div>
      </div>

      {/* AI Decision & Friction Inspector */}
      <div className="rounded-lg border-2 border-[#101010] bg-white p-4 shadow-[3px_3px_0px_#101010]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#555555]">
            AI EXPLANATION
          </span>
          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono flex items-center gap-1 text-[10px] font-bold text-[#20C77A] underline hover:text-[#101010]"
          >
            <HelpCircle size={11} />
            <span>WHY?</span>
          </button>
        </div>

        <div className="mt-3">
          {isConflict ? (
            <div className="rounded border border-[#F2A900] bg-[#FFF8E7] p-2.5 text-xs font-bold text-[#101010]">
              <span className="mono text-[10px] font-black text-[#B45309] block">
                ! CONFLICT FLAGGED
              </span>
              <p className="mt-0.5 text-xs">
                DOB differs between Policy (14/07) and Hospital Bill (17/07).
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-[#F2A900]/30 pt-1.5 mono text-[10px]">
                <span className="text-[#555555]">CONFIDENCE: 92%</span>
                <span className="text-[#B45309]">ACTION: Confirm DOB</span>
              </div>
            </div>
          ) : (
            <div className="rounded border border-[#20C77A] bg-[#D7F7E7] p-2.5 text-xs font-bold text-[#101010]">
              <span className="mono text-[10px] font-black text-[#101010] block">
                ✓ ALL SIGNALS CLEAR
              </span>
              <p className="mt-0.5 text-[11px] text-[#555555]">
                Cross-document verification reconciled. Ready for next stage.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Verified Evidence Stack */}
      <div className="rounded-lg border-2 border-[#101010] bg-white p-4 shadow-[3px_3px_0px_#101010]">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span className="mono text-[10px] font-black uppercase text-[#555555]">
            ATTACHED EVIDENCE ({documents.length})
          </span>
          <span className="mono text-[10px] text-[#555555]">OCR VERIFIED</span>
        </div>

        <div className="mt-3 space-y-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded border border-neutral-200 bg-[#FAF9F5] p-2 text-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={13} className="text-[#555555] shrink-0" />
                <span className="font-bold truncate text-[#101010]">{doc.category}</span>
              </div>
              <button
                onClick={() => onViewDoc(doc)}
                className="mono text-[10px] font-bold text-[#555555] hover:text-[#101010] shrink-0 underline"
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
