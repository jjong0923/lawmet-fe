import type React from "react";

export default function Button({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sub-color-4 w-full cursor-pointer rounded-[14px] bg-[#4C2A18] py-4 text-[16px] font-bold ${className}`}
    >
      {children}
    </button>
  );
}
