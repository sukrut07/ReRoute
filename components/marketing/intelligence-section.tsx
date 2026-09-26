import React from "react";
import { Sparkles, FileSearch, Scale, Route } from "lucide-react";

export function IntelligenceSection() {
  const intelligenceCapabilities = [
    {
      icon: Sparkles,
      title: "INTENT UNDERSTANDING",
      desc: "Understands what the customer is trying to accomplish and initializes the appropriate regulated workflow.",
    },
    {
      icon: FileSearch,
      title: "DOCUMENT INTELLIGENCE",
      desc: "Extracts and validates information across submitted documents with OCR confidence and bounding-box coordinates.",
    },
    {
      icon: Scale,
      title: "RISK DETECTION",
      desc: "Identifies inconsistencies, missing information and potential friction before passing to adjudicators.",
    },
    {
      icon: Route,
      title: "DYNAMIC REROUTING",
      desc: "Determines the next appropriate action instead of forcing the customer to restart from scratch.",
    },
  ];

  return (
    <section id="features" className="relative z-10 border-t border-[#111111] bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="mono text-xs font-black uppercase tracking-wider text-[#666666]">
            CORE INTELLIGENCE
          </span>
          <h2 className="mt-1 text-3xl font-black text-[#111111] tracking-tight">
            What ReRoute Actually Does
          </h2>
          <p className="mt-1.5 text-sm text-[#666666]">
            Supporting intelligence layers designed to assist the journey, not replace human judgment.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intelligenceCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="rounded-lg border border-[#111111] bg-white p-5 shadow-[3px_3px_0px_#111111]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded border border-[#111111] bg-[#F7F6F2]">
                  <Icon size={16} className="text-[#111111]" />
                </div>
                <h3 className="mt-3 text-sm font-black text-[#111111]">{cap.title}</h3>
                <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
