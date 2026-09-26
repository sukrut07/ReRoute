import React from "react";

export interface BrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
  children: React.ReactNode;
}

export function BrutalistCard({
  variant = "default",
  className = "",
  children,
  ...props
}: BrutalistCardProps) {
  const variantStyles = {
    default: "border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111]",
    success: "border-[#111111] bg-[#DDF8EA] text-[#111111] shadow-[3px_3px_0px_#111111]",
    warning: "border-[#D97706] bg-[#FEF3C7] text-[#111111] shadow-[3px_3px_0px_#111111]",
    danger: "border-[#D9414B] bg-[#FEE2E2] text-[#111111] shadow-[3px_3px_0px_#111111]",
    info: "border-[#111111] bg-[#F7F6F2] text-[#111111] shadow-[3px_3px_0px_#111111]",
  };

  return (
    <div
      className={`rounded-lg border p-4 sm:p-5 transition-all ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
