import { useState } from "react";
import { useNavigate } from "react-router";
import Img from "../assets/problem.png";
import BoxWrapper from "../components/BoxWrapper";
import SubText from "../components/SubTitle";
import Title from "../components/Title";
import BulbIcon from "../assets/tip-bubl.svg?react";
import Button from "../components/Button";
import LoadingPage from "./LoadingPage";

export default function SituationInputPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/analysis/result");
      setIsLoading(false);
    }, 2500);
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="flex flex-col items-center">
      <img src={Img} className="h-38 w-42" />
      <div className="flex flex-col items-center gap-2">
        <Title title={`현재 어떤 문제 상황을 \n겪고 있나요?`} />
        <SubText text={"겪고 있는 상황을 간단하게 알려주세요."} />
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <BoxWrapper>
          <p className="h-30">
            3개월 동안 주 6일 하루 10시간씩 일했는데{"\n"}사장님이 주휴수당과
            야간수당을 지급하지 않았어요.{"\n"}근로계약서도 작성하지 않았고
            {"\n"}퇴사하겠다고 하자 마지막 월급 일부를 주지 않았습니다.{"\n"}
            어떻게 대응해야 하나요?
          </p>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex items-center gap-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F1E0CA]">
              <BulbIcon />
            </div>
            <div>
              <p className="text-primary-color-1 text-[13px] font-bold">
                어떻게 작성하면 좋을까요?
              </p>
              <p className="text-[13px] font-semibold whitespace-pre-wrap text-[#897361]">
                언제, 어떤 일이 있었는 지 적어주시면{"\n"}상황 분석이 더
                쉬워져요.
              </p>
            </div>
          </div>
        </BoxWrapper>
      </div>

      <div className="mt-4 w-full">
        <Button onClick={handleClick}>다음</Button>
      </div>
    </div>
  );
}
