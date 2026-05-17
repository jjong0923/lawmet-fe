import { useNavigate } from "react-router";
import PrevIcon from "../assets/prev.svg?react";
import BoxWrapper from "../components/BoxWrapper";
import StatusBadge from "../components/StatusBadge";
import SubText from "../components/SubTitle";
import Title from "../components/Title";

const overtimeRows = [
  { label: "계약 근무시간", value: "3시간 (15:00 - 18:00)" },
  { label: "실제 평균 근무시간", value: "4시간 30분 이상" },
  { label: "최대 초과시간", value: "1시간 30분" },
  { label: "시급", value: "12,384 원" },
  { label: "연장근로 가산율", value: "1.5배" },
] as const;

const restRows = [
  { label: "명시적 휴게시간 부여", value: "없음", tone: "rose" },
  { label: "학생 응대 가능 상태", value: "지속", tone: "rose" },
  { label: "장소 분리 여부", value: "없음", tone: "rose" },
  { label: "지휘 감독 상태", value: "유지", tone: "amber" },
] as const;

export default function AnalysisReportDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 pb-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={() => navigate(-1)}
          aria-label="이전 페이지"
        >
          <PrevIcon className="h-4 w-4" />
        </button>
        <p className="text-color-primary text-[17px] font-extrabold">
          상황 분석 리포트
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-2">
          <Title
            title="연장근로수당 미지급 가능성"
            size="text-[19px] leading-[1.4]"
            align="text-left"
          />
          <SubText
            text={`계약상 근무시간은 3시간이지만, 실제로는 지속적인\n초과근무가 발생했어요.`}
            className="text-[16px] leading-[1.45] font-semibold text-[#8C755F]"
          />
        </div>

        <BoxWrapper className="rounded-3xl px-4 py-5">
          <div className="flex flex-col gap-7">
            {overtimeRows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <p className="text-color-primary flex-1 text-[15px] font-extrabold">
                  {row.label}
                </p>
                <p className="text-color-primary text-right text-[15px] font-extrabold">
                  {row.value}
                </p>
              </div>
            ))}

            <div className="rounded-[18px] bg-[#F2D5D5] px-5 py-5">
              <p className="text-color-primary text-center text-[15px] font-extrabold">
                추정 연장근로수당 미지급액{" "}
                <span className="text-[#D94E4E]">(1년 기준)</span>
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <p className="text-[28px] leading-none font-extrabold text-[#C51627]">
                  약 1,248,000원
                </p>
                <InfoIcon />
              </div>
            </div>
          </div>
        </BoxWrapper>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-2">
          <Title
            title="휴게시간 미보장 가능성"
            size="text-[19px] leading-[1.4]"
            align="text-left"
          />
          <SubText
            text={`4시간 이상 근무 시 30분 이상 휴게시간이 보장되어야\n하지만, 실질적으로 보장되지 않았을 가능성이 높아요.`}
            className="text-[16px] leading-[1.45] font-semibold text-[#8C755F]"
          />
        </div>

        <BoxWrapper className="rounded-none px-6 py-8">
          <div className="flex flex-col gap-10">
            {restRows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <p className="text-color-primary flex-1 text-[15px] font-extrabold">
                  {row.label}
                </p>
                <StatusBadge label={row.value} tone={row.tone} />
              </div>
            ))}
          </div>
        </BoxWrapper>
      </section>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.25" stroke="#A6887B" strokeWidth="1.5" />
      <path
        d="M12 10.75V15.5"
        stroke="#A6887B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.75" r="1" fill="#A6887B" />
    </svg>
  );
}
