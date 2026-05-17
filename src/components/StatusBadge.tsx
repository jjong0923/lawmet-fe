type StatusBadgeTone = "rose" | "amber";

export default function StatusBadge({
  label,
  tone,
  className = "",
}: {
  label: string;
  tone: StatusBadgeTone;
  className?: string;
}) {
  const toneClass =
    tone === "rose"
      ? "bg-[#F7D5D5] text-[#D94E4E]"
      : "bg-[#FFE7C7] text-[#F08A35]";

  return (
    <span
      className={`inline-flex min-w-15 items-center justify-center rounded-full px-3.5 py-2.5 text-[15px] leading-none font-bold ${toneClass} ${className}`}
    >
      {label}
    </span>
  );
}
