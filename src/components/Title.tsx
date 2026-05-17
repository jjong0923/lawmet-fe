interface TitleProps {
  title: string;
  size?: string;
  align?: string;
}

export default function Title({
  title,
  size = "text-[28px]",
  align = "text-center",
}: TitleProps) {
  return (
    <div
      className={`text-color-primary font-bold whitespace-pre-wrap ${align} ${size}`}
    >
      {title}
    </div>
  );
}
