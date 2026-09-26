import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#111111] bg-[#111111] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-[#111111] bg-[#20C979] text-xs font-black text-[#111111]">
                R
              </div>
              <span className="text-base font-black tracking-tight">REROUTE</span>
            </div>
            <p className="mono mt-2 text-xs text-neutral-400">
              AI Financial Journey Engine
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Don&apos;t restart. Reroute.
            </p>
          </div>

          <div>
            <p className="mono text-xs font-black uppercase text-[#20C979]">PRODUCT</p>
            <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
              <li><Link href="/journey" className="hover:text-white">Customer Journey</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">Journey Intelligence</Link></li>
              <li><Link href="/risk" className="hover:text-white">Risk Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <p className="mono text-xs font-black uppercase text-[#20C979]">OPERATIONS</p>
            <ul className="mt-3 space-y-2 text-xs text-neutral-300 mono">
              <li><Link href="/review" className="hover:text-white">Human Review Queue</Link></li>
              <li><a href="https://github.com/sukrut07/ReRoute/tree/main/docs" target="_blank" rel="noreferrer" className="hover:text-white">System Documentation</a></li>
              <li><a href="https://github.com/sukrut07/ReRoute/blob/main/docs/ARCHITECTURE.md" target="_blank" rel="noreferrer" className="hover:text-white">Architecture</a></li>
            </ul>
          </div>

          <div>
            <p className="mono text-xs font-black uppercase text-[#20C979]">SYSTEM STATUS</p>
            <div className="mt-3 space-y-2 text-xs mono text-neutral-400">
              <p className="flex items-center gap-1.5 text-neutral-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#20C979]" />
                <span>ALL ENGINES NORMAL</span>
              </p>
              <p>LATENCY: 120ms</p>
              <p>RECOVERY: 89.2%</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-neutral-400">
          <p>
            DISCLAIMER: Synthetic demonstration data. AI assists with journey orchestration and does not independently execute regulated financial decisions.
          </p>
          <p className="mono">
            SUKRUT07 // PAYTM BUILD FOR INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
