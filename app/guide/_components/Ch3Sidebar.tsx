"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import {
  User,
  Coins,
  Home,
  BarChart3,
  Trophy,
  MessagesSquare,
  SkipForward,
} from "lucide-react";

const SIDEBAR_MENUS = [
  {
    icon: User,
    name: "프로필 설정",
    desc: "프로필 이미지 옆 톱니바퀴를 눌러 개인정보를 수정해요. ‘멘토’ 탭에서는 다른 학생들의 리포트도 참고할 수 있어요.",
  },
  {
    icon: Coins,
    name: "보유 포인트",
    desc: "문제 풀이와 퀘스트로 모은 포인트를 확인하는 곳이에요.",
  },
  {
    icon: Home,
    name: "Home",
    desc: "메인 화면으로 돌아오기. 튼튼개념·학습하기·복습하기로 빠르게 이동.",
  },
  {
    icon: BarChart3,
    name: "학습 프로필",
    desc: "레벨·랭킹·누적 정답률·순공 시간·성취도 그래프 등 학습 전체 요약. 모든 학습 리포트는 여기 리포트 버튼에서 모아 볼 수 있어요.",
  },
  {
    icon: Trophy,
    name: "챌린지업",
    desc: "내가 생성한 챌린지에 도전하는 공간. 다시 풀고 싶은 문제를 모아 정복해요.",
  },
  {
    icon: MessagesSquare,
    name: "질문 게시판",
    desc: "AI 매티나 개념 상자로 해결되지 않을 때 친구들에게 질문! 답하는 과정에서 내 개념도 단단해져요.",
  },
  {
    icon: SkipForward,
    name: "SKIP 관리",
    desc: "학습하기에서 건너뛴 문제들이 모이는 곳. 쉬워서, 또는 어려워서 넘긴 문제를 다시 골라 풀 수 있어요.",
  },
];

export function Ch3Sidebar() {
  return (
    <section id="ch-sidebar" className="relative scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="03"
          emoji="📂"
          eyebrow="사이드바"
          accent="from-fuchsia-500 to-rose-500"
          title={
            <>
              왼쪽 위 버튼 하나로 <span className="marker-rose">전체 메뉴 이동</span>
            </>
          }
          description={
            <>
              자주 쓰는 메뉴를 한 곳에 모아둔 사이드바. 어떤 메뉴가 뭘 하는
              곳인지 한 줄로 정리했어요.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
          {/* 사이드바 스크린샷 (둥근 폰 프레임) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[44px] bg-gradient-to-br from-fuchsia-400/30 to-rose-400/30 blur-2xl" />
              <div className="relative h-[560px] w-[300px] overflow-hidden rounded-[36px] border-[8px] border-slate-900 bg-slate-900 shadow-glow-rose">
                <Image
                  src="/images/red/11_사이드바_전체메뉴.png"
                  alt="사이드바 전체 메뉴"
                  fill
                  sizes="300px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* 라벨 */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-700 shadow-card">
                ← 메인 화면 좌측 상단 버튼
              </div>
            </div>
          </motion.div>

          {/* 메뉴 리스트 */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="space-y-3"
          >
            {SIDEBAR_MENUS.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.li
                  key={m.name}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white shadow-md transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {m.name}
                      </h3>
                      <span className="rounded-full bg-fuchsia-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-fuchsia-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {m.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
