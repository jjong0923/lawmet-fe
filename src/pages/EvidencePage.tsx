import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import PrevIcon from "../assets/prev.svg?react";
import Img from "../assets/status.png";
import Button from "../components/Button";
import BoxWrapper from "../components/BoxWrapper";

const evidenceItems = [
  {
    title: "출퇴근 기록",
    description: "하우머치, 타임스탬프 등",
    accent: "green",
    icon: "document",
  },
  {
    title: "근로계약서",
    description: "계약서 사본",
    accent: "green",
    icon: "document",
  },
  {
    title: "근무표 및 일정표",
    description: "스케줄표, 교대표 등",
    accent: "green",
    icon: "calendar",
  },
  {
    title: "휴게시간 관련 기록",
    description: "휴게시간 공지, 대화 내용 등",
    accent: "rose",
    icon: "clock",
  },
  {
    title: "급여 내역",
    description: "급여명세서, 계좌 이체 내역 등",
    accent: "green",
    icon: "document",
  },
] as const;

export default function EvidencePage() {
  const navigate = useNavigate();
  const [collectedCount, setCollectedCount] = useState(0);
  const totalCount = evidenceItems.length;
  const progress = useMemo(
    () => (collectedCount / totalCount) * 100,
    [collectedCount, totalCount],
  );

  const handleCollectNext = () => {
    setCollectedCount((prev) => Math.min(prev + 1, totalCount));
  };

  return (
    <div className="flex flex-col gap-7 pb-4">
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
          증거 관리
        </p>
      </div>

      <BoxWrapper className="rounded-[20px] border border-[#E1C9AB] bg-[#FCF6EE] px-5 py-7">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-color-primary text-[16px] font-extrabold">
              증거 준비 현황
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-color-primary text-[50px] leading-none font-extrabold">
                {collectedCount}
              </span>
              <span className="text-[26px] leading-none font-extrabold text-[#7A543D]">
                / {totalCount}
              </span>
            </div>

            <p className="mt-1 text-[14px] font-semibold text-[#C1B4A7]">
              단계
            </p>

            <div className="mt-3 h-3.5 w-full rounded-full bg-[#EFE5DB]">
              <div
                className="h-full rounded-full bg-[#5A2E16] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-5 text-[16px] font-extrabold text-[#7A543D]">
              필요한 증거를 모아주세요!
            </p>
          </div>

          <img
            src={Img}
            alt="증거 준비 상태 일러스트"
            className="w-36 shrink-0 self-end"
          />
        </div>
      </BoxWrapper>

      <div className="overflow-hidden rounded-[20px] border border-[#E8D5BE] bg-[#FCF7F0]">
        {evidenceItems.map((item, index) => {
          const collected = index < collectedCount;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 border-b border-[#E8D5BE] px-5 py-5 last:border-b-0"
            >
              <div
                className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-[14px] ${
                  item.accent === "green" ? "bg-[#E8F0E3]" : "bg-[#F8E2E0]"
                }`}
              >
                <EvidenceIcon type={item.icon} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-color-primary text-[14px] font-extrabold">
                  {item.title}
                </p>
                <p className="mt-1 text-[13px] font-semibold text-[#B0A59A]">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {collected ? <CheckStatusIcon /> : <NeedStatusIcon />}
                <EvidencePill collected={collected} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-1">
        <Button
          onClick={handleCollectNext}
          disabled={collectedCount === totalCount}
        >
          {collectedCount === totalCount
            ? "모든 증거 수집 완료"
            : "증거 추가하기"}
        </Button>
      </div>
    </div>
  );
}

function EvidencePill({ collected }: { collected: boolean }) {
  return (
    <span className="inline-flex min-w-20 items-center justify-center rounded-full bg-[#F2ECE6] px-4 py-2.5 text-[14px] leading-none font-bold text-[#5C3926]">
      {collected ? "수집 완료" : "수집 필요"}
    </span>
  );
}

function EvidenceIcon({
  type,
}: {
  type: (typeof evidenceItems)[number]["icon"];
}) {
  switch (type) {
    case "document":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 3.75H13L17.25 8V19.25C17.25 19.6642 16.9142 20 16.5 20H8C7.58579 20 7.25 19.6642 7.25 19.25V4.5C7.25 4.08579 7.58579 3.75 8 3.75Z"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.75 3.75V8H17"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11H14.75"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 14.5H14.75"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chat":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.25 16.5L4.75 19V7.75C4.75 6.7835 5.5335 6 6.5 6H14.5C15.4665 6 16.25 6.7835 16.25 7.75V13.5C16.25 14.4665 15.4665 15.25 14.5 15.25H8.5L7.25 16.5Z"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 17.5L12.5 19.25H17.25C18.2165 19.25 19 18.4665 19 17.5V10.5C19 9.5335 18.2165 8.75 17.25 8.75"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "edit":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.5 4.75H14L17.25 8V18.75C17.25 19.1642 16.9142 19.5 16.5 19.5H7.5C7.08579 19.5 6.75 19.1642 6.75 18.75V5.5C6.75 5.08579 7.08579 4.75 7.5 4.75Z"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 4.75V8H17"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.75L13.75 10L15.75 12L11 16.75L8.5 17.25L9 14.75Z"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="4.75"
            y="6.25"
            width="14.5"
            height="12.5"
            rx="1.25"
            stroke="#5A2E16"
            strokeWidth="1.8"
          />
          <path
            d="M8 4.5V8"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 4.5V8"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M4.75 10H19.25" stroke="#5A2E16" strokeWidth="1.8" />
          <path
            d="M8.75 13H11.25"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12.75 13H15.25"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8.75 16H11.25"
            stroke="#5A2E16"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="13" r="6.75" stroke="#111111" strokeWidth="1.8" />
          <path
            d="M12 9.5V13L14.5 14.5"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.25 3.75H14.75"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function CheckStatusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#469A41" />
      <path
        d="M7.5 12.25L10.5 15.25L16.5 8.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NeedStatusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.25" stroke="#B0172E" strokeWidth="1.5" />
      <path
        d="M12 10.5V15"
        stroke="#B0172E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.75" r="1.1" fill="#B0172E" />
    </svg>
  );
}
