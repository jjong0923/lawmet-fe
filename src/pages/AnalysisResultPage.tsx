import Img from "../assets/complete.png";
import BoxWrapper from "../components/BoxWrapper";
import Title from "../components/Title";

export default function AnalysisResultPage() {
  return (
    <div className="flex flex-col items-center">
      <img src={Img} className="h-42 w-40" />
      <div className="mt-8">
        <Title title="로빗이 상황을 분석했어요!" />
      </div>
      <BoxWrapper>
        <p className="text-[13px] font-black">사건 요약</p>
        현재 사용자는 학원 조교로 약 1년 이상 근무 중이며, 근로계약서상
        근무시간은 15:00~18:00으로 명시되어 있으나 실제로는 지속적인 연장근로가
        발생하고 있습니다. 연차휴가
        <ul>
          <li>연장근로수당 미지급</li>
          <li>휴게시간 미보장 가능성</li>
          <li>연차휴가 미사용</li>
          <li>5인 이상 사업장 적용 여부</li>
        </ul>
        등의 문제가 함께 존재하는 복합 노동 사건으로 분석됩니다.
      </BoxWrapper>

      <p className="text-primary-color-2 border-primary-color-2 border-b text-[10px] font-semibold">
        자세히 알아보기
      </p>
    </div>
  );
}
