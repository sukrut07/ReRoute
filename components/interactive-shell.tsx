"use client";

import { useEffect, useState } from "react";

export function InteractiveShell() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

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
        className={`pointer-events-none fixed top-0 left-0 z-50 hidden transition-all duration-75 ease-out md:block rounded-full border border-[#111111] ${
          isHovered
            ? "h-5 w-5 bg-[#20C979]/40 scale-125"
            : "h-3 w-3 bg-[#20C979]"
        }`}
      />

      {/* Very Few, Subtle Decorative Dots (Behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-30"
      >
        <span className="absolute left-[3%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#20C979]" />
        <span className="absolute right-[4%] top-[28%] h-1.5 w-1.5 rounded-full border border-[#111111] bg-transparent" />
        <span className="absolute left-[6%] bottom-[20%] h-1.5 w-1.5 rounded-full border border-[#111111] bg-transparent" />
        <span className="absolute right-[5%] bottom-[15%] h-1.5 w-1.5 rounded-full bg-[#20C979]" />
      </div>
    </>
  );
}
