import type React from "react";

export default function BoxWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg bg-[#FAEEE1] p-3 text-[14px] font-bold whitespace-pre-wrap text-[#897361] ${className}`}
    >
      {children}
    </div>
  );
}
