import { useNavigate } from "react-router";
import Img from "../assets/report.png";
import BoxWrapper from "../components/BoxWrapper";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import SubText from "../components/SubTitle";
import Title from "../components/Title";

const issues = [
  {
    label: "연장근로수당 미지급",
    level: "높음",
    tone: "high",
    icon: "document",
  },
  {
    label: "휴게시간 미보장",
    level: "높음",
    tone: "high",
    icon: "clock",
  },
  {
    label: "연차휴가 미사용",
    level: "높음",
    tone: "high",
    icon: "leave",
  },
  {
    label: "근로계약과 실제 근무 불일치",
    level: "보통",
    tone: "medium",
    icon: "contract",
  },
] as const;

export default function AnalysisReportPage() {
  const navigate = useNavigate();
  const today = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replace(/\.\s/g, ".")
    .replace(/\.$/, "");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Title title="상황 분석 리포트" size="text-[28px]" align="text-left" />
        <SubText
          text={`분석완료 · ${today}`}
          className="text-[14px] text-[#8C755F]"
        />
      </div>

      <div className="flex items-end gap-3">
        <div className="flex-1 pb-3">
          <SubText
            text="박당근님의 상황을 분석했어요."
            className="mb-5 text-[15px] font-semibold text-[#8C755F]"
          />
          <Title
            title={"총 4가지의 노동문제가능성이 있어요."}
            size="text-[24px] leading-[1.35]"
            align="text-left"
          />
        </div>
        <img
          src={Img}
          alt="상황 분석 결과 일러스트"
          className="w-40 shrink-0"
        />
      </div>

      <BoxWrapper className="rounded-xl px-5 py-6">
        <div className="flex flex-col gap-5">
          <Title
            title="분석된 문제 요약"
            size="text-[18px]"
            align="text-left"
          />

          <div className="flex flex-col gap-4">
            {issues.map((issue) => (
              <div key={issue.label} className="flex items-center gap-4">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#EACF9E]">
                  <IssueIcon type={issue.icon} />
                </div>
                <p className="text-color-primary flex-1 text-[14px] font-bold">
                  {issue.label}
                </p>
                <StatusBadge
                  label={issue.level}
                  tone={issue.tone === "high" ? "rose" : "amber"}
                />
              </div>
            ))}
          </div>
        </div>
      </BoxWrapper>
      <p className="px-2 text-[11px] leading-[1.45] font-medium text-[#897361]">
        *본 리포트는 일반적인 법률 정보를 바탕으로 한 분석이며, 정확한 판단은
        전문가의 상담이 필요합니다.
      </p>

      <Button onClick={() => navigate("/analysis/report/detail")}>
        리포트 상세보기
      </Button>

      <button
        type="button"
        className="w-full cursor-pointer text-left"
        onClick={() => navigate("/evidence")}
      >
        <BoxWrapper className="rounded-xl px-5 py-4">
          <div
            className="flex items-center gap-4"
            onClick={() => navigate("/evidence")}
          >
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#EACF9E]">
              <FolderIcon />
            </div>
            <div className="flex-1">
              <p className="text-color-primary text-[16px] font-extrabold">
                다음 단계: 증거 관리하기
              </p>
              <p className="mt-1 text-[13px] font-semibold text-[#6D5442]">
                필요한 증거를 확인하고 준비해요
              </p>
            </div>
            <ChevronRightIcon />
          </div>
        </BoxWrapper>
      </button>
    </div>
  );
}

function IssueIcon({ type }: { type: (typeof issues)[number]["icon"] }) {
  switch (type) {
    case "document":
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 3.75H13L17.25 8V19.25C17.25 19.6642 16.9142 20 16.5 20H8C7.58579 20 7.25 19.6642 7.25 19.25V4.5C7.25 4.08579 7.58579 3.75 8 3.75Z"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.75 3.75V8H17"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11H14.75"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 14.5H14.75"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="13" r="6.75" stroke="#2D1A12" strokeWidth="1.8" />
          <path
            d="M12 9.5V13L14.5 14.5"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.25 3.75H14.75"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.4 6.1L5 4.7"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.6 6.1L19 4.7"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leave":
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 18.75V6.75"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 9.5C13.2 7.3 15.6 6.25 18.25 6.25C17.95 9.45 15.8 11.75 12.75 11.75H12V9.5Z"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.25C10.7 8.75 8.35 7.5 5.75 7.5C5.95 10.85 8.15 13.25 11.35 13.25H12V11.25Z"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 19.25H17"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "contract":
      return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M7.75 4.25H16.25C16.6642 4.25 17 4.58579 17 5V19C17 19.4142 16.6642 19.75 16.25 19.75H7.75C7.33579 19.75 7 19.4142 7 19V5C7 4.58579 7.33579 4.25 7.75 4.25Z"
            stroke="#2D1A12"
            strokeWidth="1.8"
          />
          <path
            d="M9.5 8H14.5"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 11.5H14.5"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 15H12.5"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 7.75L4.75 9.5L6.5 11.25"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 12.75L19.25 14.5L17.5 16.25"
            stroke="#2D1A12"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function FolderIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path
        d="M3.75 7.5C3.75 6.80964 4.30964 6.25 5 6.25H9.1L10.4 8H19C19.6904 8 20.25 8.55964 20.25 9.25V17.75C20.25 18.4404 19.6904 19 19 19H5C4.30964 19 3.75 18.4404 3.75 17.75V7.5Z"
        stroke="#2D1A12"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M3.75 10H20.25" stroke="#2D1A12" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6L15 12L9 18"
        stroke="#2D1A12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
