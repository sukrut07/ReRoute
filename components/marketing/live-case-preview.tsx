import Link from "next/link";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";

export function LiveCasePreview() {
  return (
    <div className="rounded-lg border-2 border-[#111111] bg-white p-5 shadow-[4px_4px_0px_#111111]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#111111] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#20C979] animate-pulse" />
          <span className="mono text-[11px] font-black uppercase tracking-wider text-[#111111]">
            LIVE CASE PREVIEW
          </span>
        </div>
        <span className="mono rounded border border-[#111111] bg-[#111111] px-2 py-0.5 text-[11px] font-bold text-white">
          CASE #R-1024
        </span>
      </div>

      {/* Case Info */}
      <div className="mt-3.5 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-black text-[#111111] tracking-tight">
            HEALTH INSURANCE CLAIM
          </h2>
          <p className="mono text-xs text-[#666666] mt-0.5">
            Sukrut Dusane · ₹84,500
          </p>
        </div>
        <div className="rounded border border-[#111111] bg-[#DDF8EA] px-2 py-1 text-xs font-black text-[#111111]">
          72% COMPLETE
        </div>
      </div>

      {/* Verification Checklist */}
      <div className="mt-4 space-y-2 text-xs font-bold">
        <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
          <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
          <span className="text-[#111111]">Policy verified</span>
        </div>
        <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
          <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
          <span className="text-[#111111]">Identity verified</span>
        </div>
        <div className="flex items-center gap-2 rounded border border-[#111111] bg-[#FAF9F6] p-2">
          <Check size={14} className="text-[#20C979] shrink-0 stroke-[3]" />
          <span className="text-[#111111]">Hospital document processed</span>
        </div>

        {/* Conflict Detection Card (Visual Focal Point) */}
        <div className="rounded border-2 border-[#D97706] bg-[#FEF3C7] p-3 text-[#111111]">
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} className="text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <span className="mono text-[10px] font-black uppercase tracking-wider text-[#92400E]">
                CONFLICT DETECTED
              </span>
              <p className="text-xs font-black text-[#111111]">
                ! DOB mismatch detected
              </p>
              <div className="mono text-[11px] text-[#4B5563] mt-1 space-y-0.5">
                <p>Policy record: <span className="font-bold text-[#111111]">14/07/1998</span></p>
                <p>Hospital record: <span className="font-bold text-[#D9414B]">17/07/1998</span></p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#D97706]/30">
            <span className="mono text-[10px] font-black uppercase text-[#92400E]">
              REROUTE REQUIRED
            </span>
            <Link
              href="/journey"
              className="inline-flex items-center gap-1 rounded border border-[#111111] bg-[#111111] px-2.5 py-1 text-[11px] font-bold text-[#20C979] hover:bg-neutral-800"
            >
              <span>RESOLVE ISSUE</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
