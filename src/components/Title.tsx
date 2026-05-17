interface TitleProps {
  title: string;
  size?: string;
}

export default function Title({ title, size = "text-[28px]" }: TitleProps) {
  return (
    <div
      className={`text-color-primary text-center font-bold whitespace-pre-wrap ${size}`}
    >
      {title}
    </div>
  );
}
