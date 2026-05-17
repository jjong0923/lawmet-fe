import type React from "react";

export default function BoxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-[#FAEEE1] p-3 text-[14px] font-bold text-[#897361]">
      {children}
    </div>
  );
}
