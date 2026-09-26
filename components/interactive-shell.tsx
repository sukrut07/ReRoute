"use client";

import { useEffect, useState } from "react";

export function InteractiveShell() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        aria-hidden
        style={{ left: cursor.x, top: cursor.y }}
        className="pointer-events-none fixed z-50 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-[#54e38e] mix-blend-multiply md:block"
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <span className="interactive-dot left-[8%] top-[18%]" />
        <span className="interactive-dot left-[24%] top-[32%]" />
        <span className="interactive-dot left-[76%] top-[22%]" />
        <span className="interactive-dot left-[88%] top-[54%]" />
        <span className="interactive-dot left-[12%] top-[74%]" />
      </div>
    </>
  );
}
