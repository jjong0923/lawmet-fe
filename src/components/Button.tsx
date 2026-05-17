import type React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-sub-color-4 w-full rounded-[14px] bg-[#4C2A18] py-4 text-[16px] font-bold ${disabled ? "cursor-default opacity-60" : "cursor-pointer"} ${className}`}
    >
      {children}
    </button>
  );
}
