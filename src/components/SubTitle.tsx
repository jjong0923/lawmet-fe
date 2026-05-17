export default function SubText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`text-[13px] font-medium text-[#47271A] ${className} whitespace-pre-wrap`}
    >
      {text}
    </div>
  );
}
