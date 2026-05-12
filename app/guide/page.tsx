import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "./_components/Hero";
import { ProgressBar } from "./_components/ProgressBar";
import { TOC } from "./_components/TOC";
import { Ch1Start } from "./_components/Ch1Start";
import { Ch2Home } from "./_components/Ch2Home";
import { Ch3Sidebar } from "./_components/Ch3Sidebar";
import { Ch4Foundation } from "./_components/Ch4Foundation";
import { Ch5Learning } from "./_components/Ch5Learning";
import { Ch6Help } from "./_components/Ch6Help";
import { Ch7Profile } from "./_components/Ch7Profile";
import { Ch8Challenge } from "./_components/Ch8Challenge";
import { Closing } from "./_components/Closing";

export const metadata: Metadata = {
  title: "수심달 RED · 학생용 가이드 | 처음이라도 5분이면 OK",
  description:
    "설치부터 챌린지까지 — AI 매티와 함께하는 8개 챕터 사용 가이드. 스크린샷 100여 장으로 단계별로 친절하게 안내합니다.",
};

export default function GuidePage() {
  return (
    <main id="top" className="relative bg-white text-ink">
      <ProgressBar />

      {/* 상단 작은 네비게이션 */}
      <nav className="fixed left-1/2 top-4 z-40 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-2 py-1.5 shadow-card backdrop-blur">
          <Link
            href="/"
            className="rounded-full px-3 py-1 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100"
          >
            ← 랜딩
          </Link>
          <span className="hidden text-xs font-bold text-slate-400 sm:block">|</span>
          <span className="hidden gradient-text text-sm font-extrabold sm:block">
            수심달 RED · 학생 가이드
          </span>
        </div>
      </nav>

      <Hero />
      <TOC />
      <Ch1Start />
      <Ch2Home />
      <Ch3Sidebar />
      <Ch4Foundation />
      <Ch5Learning />
      <Ch6Help />
      <Ch7Profile />
      <Ch8Challenge />
      <Closing />
    </main>
  );
}
