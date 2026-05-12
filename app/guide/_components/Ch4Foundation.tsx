"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import {
  Compass,
  Search,
  HelpCircle,
  Video,
  Sparkles,
  PartyPopper,
} from "lucide-react";

const STEPS = [
  {
    icon: Compass,
    badge: "STEP 1",
    title: "튼튼 개념 쌓기 진입",
    detail:
      "메인 화면에서 ‘튼튼 개념 쌓기’를 눌러 들어가요. 다른 단원을 보고 싶다면 ‘다른 개념 살펴보기’를 눌러보세요.",
    img: "/images/red/13_튼튼개념_진입화면.png",
    tone: "from-indigo-500 to-violet-500",
  },
  {
    icon: Search,
    badge: "STEP 2",
    title: "시작하기 → 학습 전 체크",
    detail:
      "본격 학습 전, 내가 무엇을 모르는지 ‘진단’하는 단계예요. 못 푸는 게 당연하니 부담 갖지 말기!",
    img: "/images/red/15_튼튼개념_시작하기.png",
    tone: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: HelpCircle,
    badge: "STEP 3",
    title: "솔직하게 ‘모르겠어요’",
    detail:
      "모르는 문제는 모두 솔직하게 ‘모르겠어요’! 풀 수 있는 문제만 도전하면서 다양한 유형을 미리 살펴봐요.",
    img: "/images/red/16_튼튼개념_모르겠어요.png",
    tone: "from-fuchsia-500 to-rose-500",
  },
  {
    icon: Video,
    badge: "STEP 4",
    title: "영상 & 웹툰으로 개념 학습",
    detail:
      "정답률 80% 미만이면 영상과 웹툰으로 개념을 채워요. 보고 → 다시 체크 → 합격까지 반복!",
    img: "/images/red/18_튼튼개념_본격학습2.png",
    tone: "from-rose-500 to-orange-500",
  },
  {
    icon: Sparkles,
    badge: "STEP 5",
    title: "‘추천 콘텐츠’로 보강",
    detail:
      "그래도 부족하면 리포트의 ‘추천 콘텐츠’가 부족한 개념을 짚어줘요. 채우고 다시 한 번 도전!",
    img: "/images/red/19_튼튼개념_추천콘텐츠.png",
    tone: "from-orange-500 to-amber-500",
  },
  {
    icon: PartyPopper,
    badge: "STEP 6",
    title: "🎉 짝짝짝! 합격!",
    detail:
      "정답률 80% 돌파! ‘학습하기’에서 실전 문제를 풀 준비가 끝났어요.",
    img: "/images/red/20_튼튼개념_합격화면.png",
    tone: "from-amber-500 to-emerald-500",
  },
];

export function Ch4Foundation() {
  return (
    <section
      id="ch-step1"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-rose-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="04"
          emoji="🧱"
          eyebrow="튼튼 개념 쌓기"
          accent="from-rose-500 to-orange-500"
          title={
            <>
              학습 전 <span className="marker-rose">진단 → 보강 → 합격</span>의 흐름
            </>
          }
          description={
            <>
              본격 학습 전에 내 수준을 점검하고, 부족한 부분을 영상·웹툰·추천
              콘텐츠로 채워요. 80%를 넘으면 학습하기로 출발!
            </>
          }
        />

        {/* 진행 바 */}
        <div className="mb-12 hidden items-center gap-4 rounded-3xl border border-rose-100 bg-white/80 p-4 shadow-card backdrop-blur md:flex">
          {STEPS.map((s, i) => (
            <div key={s.badge} className="flex flex-1 items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${s.tone} text-xs font-black text-white shadow-md`}
              >
                {i + 1}
              </div>
              <div className="hidden text-xs font-semibold text-slate-600 lg:block">
                {s.title}
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden h-px flex-1 bg-gradient-to-r from-rose-200 to-orange-200 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.badge}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-card transition-shadow hover:shadow-glow-rose"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-slate-800 shadow-md backdrop-blur">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${s.tone}`}
                    >
                      <Icon className="h-3 w-3 text-white" strokeWidth={2.8} />
                    </div>
                    {s.badge}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.detail}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* 합격 규칙 알림 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-dashed border-rose-300 bg-rose-50/60 p-6 text-center md:p-8"
        >
          <div className="mb-2 text-3xl">✅</div>
          <p className="font-display text-xl font-bold text-rose-700 md:text-2xl">
            정답률 <span className="text-3xl md:text-4xl">80%</span>가 넘어가면
            합격!
          </p>
          <p className="mt-2 text-sm text-rose-900/70">
            틀린 문제의 개념까지 꼼꼼히 확인한 뒤 ‘학습하기’로 출발해요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
