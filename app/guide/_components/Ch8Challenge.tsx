"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { Plus, Layers, ListChecks, Flag, Crown } from "lucide-react";

const FLOW = [
  {
    icon: Plus,
    title: "문항 확인에서 챌린지 생성",
    desc: "‘챌린지 생성’ 버튼을 누르면 한 문제 챌린지를 만들 수 있어요.",
    note: "‘튼튼 개념 쌓기’ 제출 문제는 생성 불가",
    img: "/images/red/29_챌린지_생성화면.png",
  },
  {
    icon: Layers,
    title: "리포트에서 묶음 챌린지 생성",
    desc: "학습 리포트의 ‘학습 문항 확인’에서 여러 문항을 체크박스로 골라 한 번에 챌린지로 만들어요.",
    note: "사이드바 ‘챌린지업’에 자동 저장!",
    img: "/images/red/30_챌린지_리포트에서생성.png",
  },
  {
    icon: ListChecks,
    title: "챌린지 리스트에서 골라골라",
    desc: "생성된 모든 챌린지는 한곳에서 확인. 진행할 챌린지를 눌러 바로 시작.",
    note: "끝낸 챌린지도 다시 도전 가능",
    img: "/images/red/31_챌린지_리스트.png",
  },
  {
    icon: Flag,
    title: "테스트 형식으로 진행",
    desc: "챌린지는 결과를 한 번에 채점받는 ‘테스트’ 형식이에요. 한 문제씩 풀이를 적어보세요.",
    note: "답보다 ‘식 쓰기’가 핵심",
    img: "/images/red/32_챌린지_시작화면1.png",
  },
  {
    icon: Crown,
    title: "정복 완료! 그리고 성장",
    desc: "이미 풀었던 문제를 다시 푸는 건 정답을 외우는 게 아니라 ‘과정’을 다지는 일이에요.",
    note: "‘답 찾기’가 아닌 ‘식 쓰기’ 연습",
    img: "/images/red/34_챌린지_정복완료.png",
  },
];

export function Ch8Challenge() {
  return (
    <section
      id="ch-challenge"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="08"
          emoji="🏆"
          eyebrow="챌린지"
          accent="from-sky-500 to-indigo-500"
          title={
            <>
              <span className="marker-indigo">‘답’</span>이 아니라
              <span className="marker-rose"> ‘식’</span>을 연습하는 시간
            </>
          }
          description={
            <>
              이미 풀어본 문제를 다시 풀면서 풀이 흐름을 내 것으로 만드는 RED의
              강력한 무기. 한 문제부터 여러 문제까지 자유롭게 묶을 수 있어요.
            </>
          }
        />

        {/* 가로 스크롤 카드 카루셀 (스크롤 스냅) */}
        <div className="-mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
          <div className="flex snap-x snap-mandatory gap-6 pb-2 md:gap-8">
            {FLOW.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/60 bg-white shadow-card md:w-[320px]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                    <Image
                      src={f.img}
                      alt={f.title}
                      fill
                      sizes="320px"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-glow">
                      <Icon className="h-5 w-5" strokeWidth={2.4} />
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-slate-800 backdrop-blur">
                      STEP {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {f.desc}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                      💡 {f.note}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* 핵심 한 줄 강조 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-indigo-600 via-violet-600 to-rose-500 p-1 shadow-glow"
        >
          <div className="relative rounded-[28px] bg-slate-950 px-8 py-12 text-center md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <p className="text-sm font-bold tracking-widest text-white/60">
              CHALLENGE PHILOSOPHY
            </p>
            <p className="mt-4 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
              <span className="text-white/40">‘답을 찾는’</span> 연습보다
              <br />
              <span className="bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
                ‘식을 쓰는’ 연습
              </span>
              을 하는 것
            </p>
            <p className="mt-4 text-base text-white/70">— 챌린지의 핵심 —</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
