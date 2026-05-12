"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";

type Stage = {
  key: string;
  name: string;
  desc: string;
  group: "워밍업" | "기본" | "응용" | "정리" | "심화";
  emoji: string;
  shots: string[];
};

const STAGES: Stage[] = [
  {
    key: "stretch",
    name: "학습 스트레칭",
    group: "워밍업",
    emoji: "🤸",
    desc: "오늘 배울 내용을 공부하기 전에 가볍게 훑어보는 시간!",
    shots: ["/images/ios/학습_스트레칭_01.png", "/images/ios/학습_스트레칭_02.png"],
  },
  {
    key: "quest",
    name: "학습 퀘스트",
    group: "워밍업",
    emoji: "🎯",
    desc: "AI 매티가 준 미션 + 내가 직접 설정한 미션으로 오늘의 목표를 정해요. 높은 난이도일수록 큰 보상!",
    shots: ["/images/ios/학습_퀘스트_01.png", "/images/ios/퀘스트_내용_확인_모달_01.png"],
  },
  {
    key: "summary",
    name: "개념 정리하기",
    group: "기본",
    emoji: "📝",
    desc: "빈칸 채우기로 개념을 떠올리는 퀴즈! 막히면 개념 상자 열어서 확인하면 돼요.",
    shots: [
      "/images/ios/개념_정리하기_01.png",
      "/images/ios/개념_정리하기_02.png",
      "/images/ios/개념_정리하기_03.png",
      "/images/ios/개념_정리하기_04.png",
    ],
  },
  {
    key: "practice",
    name: "개념 연습하기",
    group: "기본",
    emoji: "✏️",
    desc: "배운 개념을 직접 계산해보는 연습! 스스로 정직하게 채점하는 게 핵심.",
    shots: [
      "/images/ios/개념_연습하기_01.png",
      "/images/ios/개념_연습하기_02.png",
      "/images/ios/개념_연습하기_03.png",
      "/images/ios/개념_연습하기_04.png",
    ],
  },
  {
    key: "ground",
    name: "개념 다지기",
    group: "기본",
    emoji: "🪨",
    desc: "기본 문제로 개념을 실제로 이해하는 단계. 답보다 풀이 과정이 더 중요!",
    shots: ["/images/ios/개념_다지기_01.png", "/images/ios/개념_다지기_02.png"],
  },
  {
    key: "test",
    name: "개념 테스트",
    group: "기본",
    emoji: "📋",
    desc: "O/X와 객관식 문제를 쭉 풀고 마지막에 한 번에 채점하는 시험 연습.",
    shots: [
      "/images/ios/개념_테스트_01.png",
      "/images/ios/개념_테스트_02.png",
      "/images/ios/개념_테스트_03.png",
      "/images/ios/개념_테스트_04.png",
    ],
  },
  {
    key: "apply",
    name: "개념 활용하기",
    group: "응용",
    emoji: "🛠️",
    desc: "배운 개념을 실제 문제에 어떻게 적용하는지 연습! 실전 감각을 키워요.",
    shots: [
      "/images/ios/개념_활용하기_01.png",
      "/images/ios/개념_활용하기_02.png",
    ],
  },
  {
    key: "check",
    name: "개념 점검하기",
    group: "응용",
    emoji: "🔍",
    desc: "문제를 풀고 그 문제에 쓰인 개념을 스스로 선택! 찍었는지 아닌지 바로 티나요.",
    shots: [
      "/images/ios/개념_점검하기_01.png",
      "/images/ios/개념_점검하기_02.png",
      "/images/ios/개념_점검하기_03.png",
      "/images/ios/개념_점검하기_04.png",
      "/images/ios/개념_점검하기_05.png",
      "/images/ios/개념_점검하기_06.png",
    ],
  },
  {
    key: "concept-train",
    name: "개념별 훈련하기",
    group: "응용",
    emoji: "💪",
    desc: "특정 개념만 콕 찝어서 훈련! 약한 부분만 집중적으로 파고들어요.",
    shots: Array.from(
      { length: 6 },
      (_, i) => `/images/ios/개념별_훈련하기_${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    key: "interpret",
    name: "문제 해석하기",
    group: "응용",
    emoji: "🧩",
    desc: "바로 풀기보단 문제를 구조화하는 훈련! 어떤 개념이 필요한지 차근차근 분석.",
    shots: Array.from(
      { length: 6 },
      (_, i) => `/images/ios/문제_해석하기_${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    key: "wrap",
    name: "개념 마무리",
    group: "정리",
    emoji: "📦",
    desc: "이번 중단원에서 배운 개념을 깔끔하게 정리하고 흡수하는 마지막 복습.",
    shots: ["/images/ios/개념_마무리_01.png"],
  },
  {
    key: "midwrap-1",
    name: "중단원 마무리 1step",
    group: "정리",
    emoji: "🧭",
    desc: "중단원에서 배운 개념이 잘 연결됐는지 확인하는 기본 점검.",
    shots: [
      "/images/ios/중단원_마무리_1step_01.png",
      "/images/ios/중단원_마무리_1step_02.png",
    ],
  },
  {
    key: "midwrap-2",
    name: "중단원 마무리 2step",
    group: "정리",
    emoji: "🧗",
    desc: "더 어려운 문제들로 진짜 실력 시험! 실전 준비 제대로!",
    shots: [
      "/images/ios/중단원_마무리_2step_01.png",
      "/images/ios/중단원_마무리_2step_02.png",
    ],
  },
  {
    key: "warmup",
    name: "테스트 워밍업",
    group: "정리",
    emoji: "🔥",
    desc: "시험 모드 진입 전, 컨디션을 끌어올리는 워밍업.",
    shots: [
      "/images/ios/테스트_워밍업_01.png",
      "/images/ios/테스트_워밍업_02.png",
      "/images/ios/테스트_워밍업_03.png",
    ],
  },
  {
    key: "mid-test",
    name: "중단원 테스트",
    group: "정리",
    emoji: "📑",
    desc: "중단원 전체를 시험처럼 풀어보며 실력 점검. 집중력을 끌어올려요!",
    shots: Array.from(
      { length: 6 },
      (_, i) => `/images/ios/중단원_테스트_1_2회_${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    key: "big-test",
    name: "대단원 테스트",
    group: "정리",
    emoji: "🏁",
    desc: "대단원 전체를 실제 시험처럼 풀어보는 실전 모드.",
    shots: Array.from(
      { length: 6 },
      (_, i) => `/images/ios/대단원_테스트_1_2회_${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    key: "deep-1",
    name: "심화 1step",
    group: "심화",
    emoji: "🔥",
    desc: "기본 개념이지만 난이도가 높은 문제! 머리 좀 써야 해요.",
    shots: ["/images/ios/심화_1step_01.png", "/images/ios/심화_1step_02.png"],
  },
  {
    key: "deep-2",
    name: "심화 2step",
    group: "심화",
    emoji: "🚀",
    desc: "확장 개념·특별한 풀이법이 필요한 문제. 한 단계 더 올라간 훈련.",
    shots: [
      "/images/ios/심화_2step_01.png",
      "/images/ios/심화_2step_02.png",
      "/images/ios/심화_2step_03.png",
    ],
  },
  {
    key: "deep-3",
    name: "심화 3step",
    group: "심화",
    emoji: "👑",
    desc: "지금까지 배운 모든 개념 총동원! 최강 난이도. 진짜 실력자의 길.",
    shots: Array.from(
      { length: 6 },
      (_, i) => `/images/ios/심화_3step_${String(i + 1).padStart(2, "0")}.png`
    ),
  },
];

const GROUPS = ["전체", "워밍업", "기본", "응용", "정리", "심화"] as const;
type Group = (typeof GROUPS)[number];

export function Ch5Learning() {
  const [filter, setFilter] = useState<Group>("전체");
  const [activeKey, setActiveKey] = useState<string>(STAGES[0].key);

  const filtered = useMemo(
    () =>
      filter === "전체" ? STAGES : STAGES.filter((s) => s.group === filter),
    [filter]
  );

  const active = useMemo(
    () => STAGES.find((s) => s.key === activeKey) || STAGES[0],
    [activeKey]
  );

  return (
    <section
      id="ch-step2"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="05"
          emoji="📚"
          eyebrow="학습하기"
          accent="from-orange-500 to-amber-500"
          title={
            <>
              <span className="marker-highlight">19가지</span> 학습 단계로 끝장
              마스터
            </>
          }
          description={
            <>
              스트레칭으로 가볍게 시작해서 심화 3step까지. 각 단계의 역할과
              실제 화면을 한 곳에서 확인해보세요.
            </>
          }
        />

        {/* 필터 칩 */}
        <div className="mb-10 flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                filter === g
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-glow"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-amber-300"
              }`}
            >
              {g}
              <span className="ml-1.5 opacity-70">
                {g === "전체"
                  ? STAGES.length
                  : STAGES.filter((s) => s.group === g).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* 단계 리스트 */}
          <motion.ul
            layout
            className="grid grid-cols-1 gap-2 self-start sm:grid-cols-2 lg:grid-cols-1"
          >
            {filtered.map((s, i) => {
              const isActive = s.key === activeKey;
              return (
                <motion.li
                  key={s.key}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <button
                    onClick={() => setActiveKey(s.key)}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-glow"
                        : "border-slate-100 bg-white hover:border-amber-200 hover:bg-amber-50/30"
                    }`}
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-bold text-ink">
                          {s.name}
                        </h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider ${
                            isActive
                              ? "bg-orange-500 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {s.group}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                    <div
                      className={`text-xs font-bold transition-all ${
                        isActive
                          ? "translate-x-0 text-orange-600 opacity-100"
                          : "-translate-x-2 text-slate-400 opacity-0"
                      }`}
                    >
                      →
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* 활성 단계 상세 + 스크린샷 */}
          <div className="sticky top-32 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-glow"
              >
                <div className="border-b border-slate-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-black tracking-wider text-white">
                      {active.group}
                    </span>
                    <span className="text-3xl">{active.emoji}</span>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {active.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-3 md:p-6">
                  {active.shots.slice(0, 6).map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card"
                    >
                      <Image
                        src={src}
                        alt={active.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                {active.shots.length > 6 && (
                  <div className="border-t border-slate-100 px-6 pb-4 pt-3 text-xs text-slate-500">
                    + {active.shots.length - 6}장의 추가 스크린샷이 더 있어요
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
