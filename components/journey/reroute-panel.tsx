"use client";

import { ConflictRecord, RerouteAction } from "@/lib/types";
import { AlertTriangle, ArrowRight, Eye, HelpCircle, Sparkles } from "lucide-react";

export interface ReroutePanelProps {
  currentState?: string;
  issueTitle?: string;
  evidenceCount?: number;
  confidence?: number;
  nextSafeAction?: string;
  conflict?: ConflictRecord;
  rerouteAction?: RerouteAction;
  onReroute: () => void;
  onViewEvidence?: () => void;
  onOpenExplain?: (key: string) => void;
  isRerouting?: boolean;
}

export function ReroutePanel({
  currentState = "Verification blocked",
  issueTitle = "DOB mismatch",
  evidenceCount = 2,
  confidence = 92,
  nextSafeAction = "Confirm information",
  conflict,
  rerouteAction,
  onReroute,
  onViewEvidence,
  onOpenExplain,
  isRerouting = false,
}: ReroutePanelProps) {
  return (
    <div className="rounded-lg border border-[#111111] bg-white p-5 sm:p-6 shadow-[3px_3px_0px_#111111]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111111] pb-3.5">
        <div className="flex items-center gap-2">
          <span className="mono rounded border border-[#D97706] bg-[#FEF3C7] px-2.5 py-0.5 text-xs font-black uppercase text-[#92400E]">
            REROUTE REQUIRED
          </span>
          <span className="mono text-xs font-bold text-[#666666]">
            IN-PLACE CONTEXT RECOVERY
          </span>
        </div>

        {onOpenExplain && (
          <button
            onClick={() => onOpenExplain("dob_conflict")}
            className="mono flex items-center gap-1.5 rounded border border-[#111111] bg-[#F7F6F2] px-2.5 py-1 text-xs font-bold text-[#111111] hover:bg-neutral-200"
          >
            <HelpCircle size={13} />
            <span>WHY?</span>
          </button>
        )}
      </div>

      {/* Structured Telemetry Grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-4 mono text-xs">
        <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
          <span className="text-[10px] uppercase text-[#666666]">CURRENT STATE</span>
          <p className="mt-1 font-black text-[#111111]">{currentState}</p>
        </div>
        <div className="rounded border border-[#D97706] bg-[#FEF3C7] p-3">
          <span className="text-[10px] uppercase text-[#92400E]">ISSUE</span>
          <p className="mt-1 font-black text-[#92400E]">{issueTitle}</p>
        </div>
        <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
          <span className="text-[10px] uppercase text-[#666666]">EVIDENCE</span>
          <p className="mt-1 font-black text-[#111111]">{evidenceCount} sources</p>
        </div>
        <div className="rounded border border-[#111111] bg-[#F7F6F2] p-3">
          <span className="text-[10px] uppercase text-[#666666]">CONFIDENCE</span>
          <p className="mt-1 font-black text-[#20C979]">{confidence}%</p>
        </div>
      </div>

      {/* Next Safe Action Callout */}
      <div className="mt-4 rounded border border-[#111111] bg-[#F7F6F2] p-3.5">
        <span className="mono text-[10px] font-black uppercase tracking-wider text-[#666666]">
          NEXT SAFE ACTION
        </span>
        <p className="mt-0.5 text-sm font-black text-[#111111]">
          {nextSafeAction}
        </p>
      </div>

      {/* Conflict Comparator if provided */}
      {conflict && (
        <div className="mt-4 rounded-lg border border-[#D97706] bg-[#FEF3C7] p-4 text-xs font-bold text-[#111111]">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={16} className="text-[#D97706]" />
            <span className="mono uppercase tracking-wider text-[#92400E]">
              CONFLICT DETAILS: {conflict.label.toUpperCase()}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded border border-[#111111] bg-white p-3">
              <span className="mono text-[10px] uppercase text-[#666666]">
                {conflict.sourceA.docName}
              </span>
              <p className="mono mt-1 text-lg font-black text-[#111111]">{conflict.sourceA.value}</p>
            </div>
            <div className="rounded border border-[#D9414B] bg-white p-3">
              <span className="mono text-[10px] uppercase text-[#991B1B]">
                {conflict.sourceB.docName}
              </span>
              <p className="mono mt-1 text-lg font-black text-[#991B1B]">{conflict.sourceB.value}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons: Primary REROUTE -> & Secondary VIEW EVIDENCE */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-[#111111]">
        <div className="mono text-xs text-[#666666]">
          No restart required. Continuous state machine.
        </div>

        <div className="flex items-center gap-2.5">
          {onViewEvidence && (
            <button
              onClick={onViewEvidence}
              className="mono inline-flex items-center gap-1.5 rounded border border-[#111111] bg-white px-3.5 py-2 text-xs font-bold text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#F7F6F2]"
            >
              <Eye size={13} />
              <span>VIEW EVIDENCE</span>
            </button>
          )}

          <button
            onClick={onReroute}
            disabled={isRerouting}
            className="mono inline-flex items-center gap-2 rounded border border-[#111111] bg-[#20C979] px-5 py-2 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5 hover:bg-[#1bb36d] disabled:opacity-50"
          >
            {isRerouting ? (
              <>
                <Sparkles size={14} className="animate-spin" />
                <span>REROUTING...</span>
              </>
            ) : (
              <>
                <span>REROUTE →</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
