import LoadingImg from "../assets/loading.png";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center">
      <img src={LoadingImg} className="h-71 w-50" />
      <p className="text-color-primary text-center text-[24px] font-semibold whitespace-pre-wrap">
        로빗이 생각하고 있어요.{"\n"}조금만 기다려주세요!
      </p>
    </div>
  );
}
