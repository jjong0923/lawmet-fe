import type React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sub-color-4 w-full cursor-pointer rounded-[10px] bg-[#4C2A18] py-3"
    >
      {children}
    </button>
  );
}
