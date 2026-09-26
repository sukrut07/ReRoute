import { ArrowRight, Check, FileText, ShieldCheck, TriangleAlert, Route, BarChart3 } from "lucide-react";
import { InteractiveShell } from "@/components/interactive-shell";

const features = [
  ["01", "Goal-based journey", "Start from what the customer wants to accomplish."],
  ["02", "Document intelligence", "Turn submitted evidence into structured fields."],
  ["03", "Verification", "Compare evidence and surface inconsistencies."],
  ["04", "Dynamic rerouting", "Recover from blockers without restarting."],
  ["05", "Explainable AI", "Show what happened, why, and what comes next."],
  ["06", "Human review", "Escalate uncertain or sensitive cases with context."],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <InteractiveShell />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="brutal-border flex h-9 w-9 items-center justify-center bg-[#54e38e] font-black">R</div>
          <span className="text-xl font-black tracking-tight">REROUTE</span>
        </div>
        <div className="desktop-nav flex items-center gap-8 text-sm font-semibold">
          <a href="#product">Product</a>
          <a href="#flow">How it works</a>
          <a href="#risk">Risk intelligence</a>
          <a href="#dashboard">Dashboard</a>
        </div>
        <a href="#journey" className="brutal-border brutal-shadow bg-black px-5 py-3 text-sm font-bold text-white">START JOURNEY →</a>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pt-20">
        <div>
          <div className="mono mb-6 inline-flex items-center gap-2 border-2 border-black bg-[#54e38e] px-3 py-2 text-xs font-bold uppercase">
            <span className="h-2 w-2 rounded-full bg-black" /> AI FINANCIAL JOURNEY ENGINE
          </div>
          <h1 className="max-w-4xl text-6xl font-black leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-8xl">
            Financial journeys shouldn&apos;t feel like a maze.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4e4e4e]">
            Reroute understands customer intent, verifies evidence, detects friction and dynamically guides users toward the next safe action.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#journey" className="brutal-border brutal-shadow inline-flex items-center gap-3 bg-[#54e38e] px-6 py-4 font-black">START A JOURNEY <ArrowRight size={18}/></a>
            <a href="#flow" className="brutal-border inline-flex items-center gap-3 bg-white px-6 py-4 font-black">VIEW FLOW</a>
          </div>
        </div>

        <div id="journey" className="brutal-border brutal-shadow self-end bg-[#fffef8] p-5">
          <div className="mono flex items-center justify-between border-b-2 border-black pb-4 text-xs font-bold">
            <span>LIVE JOURNEY / DEMO</span><span>R-1024</span>
          </div>
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div><p className="mono text-xs">JOURNEY</p><h2 className="mt-1 text-2xl font-black">Health Insurance Claim</h2></div>
              <div className="border-2 border-black bg-[#54e38e] px-3 py-2 font-black">72%</div>
            </div>
            <div className="mt-6 grid gap-3">
              {["Policy verified", "Identity verified", "Hospital verified"].map((item) => <div key={item} className="flex items-center gap-3 border-2 border-black bg-[#e7f9ee] p-3 font-semibold"><Check size={17}/>{item}</div>)}
              <div className="border-2 border-black bg-[#fff0b8] p-4">
                <div className="flex items-start gap-3"><TriangleAlert className="mt-0.5" size={19}/><div><p className="font-black">DOB mismatch detected</p><p className="mt-1 text-sm text-[#555]">Two documents contain different dates of birth.</p></div></div>
                <button className="mt-4 border-2 border-black bg-black px-4 py-2 text-sm font-black text-white">REROUTE THIS JOURNEY →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="relative z-10 border-y-2 border-black bg-black px-6 py-10 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mono mb-5 text-xs text-[#54e38e]">THE CORE LOOP</p>
          <div className="flex flex-wrap items-center gap-3 text-xl font-black md:text-3xl">
            {['GOAL','EVIDENCE','VERIFY','REROUTE','RESOLVE','COMPLETE'].map((step, i) => <div key={step} className="flex items-center gap-3"><span className={i === 3 ? 'border-2 border-white bg-[#54e38e] px-3 py-2 text-black' : 'border-2 border-white px-3 py-2'}>{step}</span>{i < 5 && <ArrowRight size={22}/>}</div>)}
          </div>
        </div>
      </section>

      <section id="product" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="mono text-xs font-bold">WHAT REROUTE DOES</p><h2 className="mt-3 text-4xl font-black tracking-tight">Don&apos;t restart. Reroute.</h2><p className="mt-5 leading-7 text-[#555]">One financial journey, made adaptive. The system keeps track of what is already verified and isolates only the blocker.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map(([n, title, desc]) => <article key={n} className="brutal-border bg-white p-5 transition-transform hover:-translate-y-1"><span className="mono text-xs">{n}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5d5d5d]">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section id="risk" className="relative z-10 border-y-2 border-black bg-[#e7f9ee] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mono text-xs font-bold">RISK INTELLIGENCE</p><h2 className="mt-3 text-4xl font-black">Transparent signals, not black-box decisions.</h2><p className="mt-5 leading-7">Reroute can surface synthetic risk signals such as identity mismatch, duplicate documents, amount anomalies and repeated claims, then route uncertain cases to human review.</p></div>
          <div className="brutal-border brutal-shadow bg-[#fffef8] p-5">
            <div className="flex items-center justify-between border-b-2 border-black pb-4"><span className="mono text-xs font-bold">CASE / R-1024</span><span className="border-2 border-black bg-[#ffd166] px-2 py-1 text-xs font-black">MEDIUM</span></div>
            <div className="grid gap-3 py-5 sm:grid-cols-3"><div className="border-2 border-black p-4"><ShieldCheck size={20}/><p className="mono mt-5 text-xs">RISK SCORE</p><p className="mt-1 text-3xl font-black">42/100</p></div><div className="border-2 border-black p-4"><FileText size={20}/><p className="mono mt-5 text-xs">DOCUMENTS</p><p className="mt-1 text-3xl font-black">4</p></div><div className="border-2 border-black p-4"><Route size={20}/><p className="mono mt-5 text-xs">ACTION</p><p className="mt-1 text-lg font-black">REVIEW</p></div></div>
            <div className="border-2 border-black bg-[#fff0b8] p-4 font-semibold">⚠ DOB mismatch · Claim amount anomaly</div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="mono text-xs font-bold">JOURNEY INTELLIGENCE</p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {[['1,248','ACTIVE JOURNEYS'],['84.6%','COMPLETION'],['18m','AVG TIME'],['21.4%','REROUTE RATE']].map(([v,l]) => <div key={l} className="brutal-border bg-white p-5"><BarChart3 size={18}/><p className="mt-8 text-3xl font-black">{v}</p><p className="mono mt-1 text-xs">{l}</p></div>)}
        </div>
      </section>

      <footer className="relative z-10 border-t-2 border-black bg-black px-6 py-8 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><span className="font-black">REROUTE</span><span className="mono text-xs text-[#54e38e]">DON&apos;T RESTART. REROUTE.</span></div></footer>
    </main>
  );
}
