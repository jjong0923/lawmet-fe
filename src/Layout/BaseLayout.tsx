import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <div className="hide-scrollbar flex min-h-dvh items-center justify-center overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(232,211,177,0.9),transparent_32%),linear-gradient(180deg,#dfc49d_0%,#f4e7d3_28%,#fbf4ea_100%)] p-4">
      <div className="border-primary-color-1/8 bg-sub-color-4 relative flex h-[min(820px,calc(100dvh-2rem))] w-full max-w-100.5 flex-col overflow-hidden rounded-[38px] border shadow-[0_30px_90px_rgba(75,43,24,0.20)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/50 to-transparent" />
        <main className="hide-scrollbar relative flex-1 overflow-y-auto px-6 pt-12 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
