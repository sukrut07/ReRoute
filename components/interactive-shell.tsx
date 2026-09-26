"use client";

import { useEffect, useState } from "react";

export function InteractiveShell() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.getAttribute("role") === "button" ||
          target.closest("button") ||
          target.closest("a"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (isReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Subtle Custom Cursor Dot */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
        className={`pointer-events-none fixed top-0 left-0 z-50 hidden transition-all duration-75 ease-out md:block rounded-full border border-[#101010] ${
          isHovered
            ? "h-6 w-6 bg-[#20C77A]/50 scale-125"
            : "h-3.5 w-3.5 bg-[#20C77A]"
        }`}
      />

      {/* Static Subtle Engineering Grid Markers & Thin Route Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-40"
      >
        {/* Subtle Static Coordinate Labels */}
        <div className="absolute top-20 right-6 mono text-[9px] font-bold text-neutral-400">
          SYS_ID: REROUTE_V2.4 // COORD: 19.0760° N, 72.8777° E
        </div>
        <div className="absolute bottom-6 left-6 mono text-[9px] font-bold text-neutral-400">
          STATE: DETERMINISTIC_ORCHESTRATION // BUFFER: VERIFIED
        </div>

        {/* Static Anchor Checkpoints */}
        <span className="absolute left-[4%] top-[14%] h-2 w-2 rounded-full border border-[#101010] bg-[#20C77A]" />
        <span className="absolute left-[92%] top-[24%] h-2 w-2 rounded-full border border-[#101010] bg-neutral-300" />
        <span className="absolute left-[8%] top-[86%] h-2 w-2 rounded-full border border-[#101010] bg-neutral-300" />
        <span className="absolute left-[88%] top-[78%] h-2 w-2 rounded-full border border-[#101010] bg-[#20C77A]" />
      </div>
    </>
  );
}
