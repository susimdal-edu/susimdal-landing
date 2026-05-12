"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { Brain, GraduationCap, RotateCcw } from "lucide-react";

const MENUS = [
  {
    icon: Brain,
    name: "튼튼 개념 쌓기",
    badge: "STEP 1",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    desc: "새로운 단원에 들어가기 전, 내가 그 개념을 얼마나 알고 있는지 진단해요.",
    rule: "정답률 80% 이상이면 합격!",
    img: "/images/red/08_메인_튼튼개념쌓기.png",
  },
  {
    icon: GraduationCap,
    name: "학습하기",
    badge: "STEP 2",
    color: "from-fuchsia-500 to-rose-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-700",
    desc: "새로운 내용을 본격적으로 공부하는 가장 기본 메뉴. 진도는 여기서 나가요.",
    rule: "다양한 학습 단계로 실력을 차곡차곡!",
    img: "/images/red/09_메인_학습하기.png",
  },
  {
    icon: RotateCcw,
    name: "복습하기",
    badge: "STEP 3",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    desc: "학습하기에서 틀린 문제들이 자동으로 모이는 오답 노트예요.",
    rule: "약점을 완전히 내 것으로!",
    img: "/images/red/10_메인_복습하기.png",
  },
];

export function Ch2Home() {
  return (
    <section
      id="ch-home"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-white px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeader
          number="02"
          emoji="🏠"
          eyebrow="메인 화면"
          accent="from-violet-500 to-fuchsia-500"
          title={
            <>
              로그인하면 보이는 <span className="marker-rose">3가지 핵심 메뉴</span>
            </>
          }
          description={
            <>
              메인 화면은 학습의 출발점. 어떤 상황에 어떤 메뉴를 눌러야 할지
              한눈에 정리했어요.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MENUS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-1 shadow-card backdrop-blur"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative h-full rounded-[28px] bg-white p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.4} />
                    </div>
                    <span
                      className={`rounded-full ${m.bgColor} px-3 py-1 text-xs font-bold ${m.textColor}`}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {m.desc}
                  </p>
                  <div
                    className={`mt-4 inline-flex items-center gap-2 rounded-full ${m.bgColor} px-3 py-1.5 text-xs font-bold ${m.textColor}`}
                  >
                    ✨ {m.rule}
                  </div>

                  {/* 스크린샷 */}
                  <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 학습 흐름 화살표 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50 px-6 py-4 text-center shadow-card">
            <p className="text-sm font-bold text-violet-700">
              🎯 학습 순서: <span className="gradient-text">튼튼개념</span> →{" "}
              <span className="gradient-text-warm">학습하기</span> →{" "}
              <span className="gradient-text-cool">복습하기</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
