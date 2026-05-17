import LoadingImg from "../assets/loading.png";
import Title from "../components/Title";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center">
      <img src={LoadingImg} className="h-71 w-50" />
      <Title
        title={`로빗이 법을 찾으며\n 생각하고 있어요.\n조금만 기다려주세요!`}
        size={"text-[24px]"}
      />
    </div>
  );
}
