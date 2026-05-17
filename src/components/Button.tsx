import type React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-sub-color-4 w-full rounded-[10px] bg-[#4C2A18] py-3"
    >
      {children}
    </button>
  );
}
