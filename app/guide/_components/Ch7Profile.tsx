"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { Award, BarChart3, Clock, Target } from "lucide-react";

const STATS = [
  { icon: Award, label: "최고 등급", value: "S", sub: "S → A → B → C 등급" },
  { icon: BarChart3, label: "그래프로 한눈에", value: "성취도", sub: "단원·학기·난이도별" },
  { icon: Clock, label: "기록되는", value: "순공 시간", sub: "집중한 만큼 쌓여요" },
  { icon: Target, label: "찾아주는", value: "약점 개념", sub: "리포트가 짚어줘요" },
];

export function Ch7Profile() {
  return (
    <section
      id="ch-profile"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-l from-sky-100/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="07"
          emoji="📊"
          eyebrow="나의 학습"
          accent="from-emerald-500 to-sky-500"
          title={
            <>
              학습 프로필 & 리포트로 <span className="marker-indigo">성장이 보여요</span>
            </>
          }
          description={
            <>
              사이드바 ‘학습 프로필’에서 지금까지의 학습을 한눈에 볼 수 있어요.
              모든 학습 리포트는 프로필의 ‘리포트’ 버튼에서 모아 볼 수 있죠.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* 학습 프로필 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              학습 프로필
            </div>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              레벨·랭킹·정답률
              <br />
              <span className="gradient-text-cool">모두 한 페이지에</span>
            </h3>
            <p className="mb-6 text-base leading-relaxed text-slate-600">
              레벨, 누적 정답률, 순공 시간, 난이도·학기·대단원별 성취도,
              최근 학습 성취도까지 그래프로 확인할 수 있어요.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Icon className="h-4 w-4 text-emerald-600" />
                      {s.label}
                    </div>
                    <div className="mt-2 font-display text-2xl font-extrabold text-ink">
                      {s.value}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">{s.sub}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-emerald-300/30 to-sky-300/30 blur-3xl" />
            <div className="relative h-[560px] w-[300px] overflow-hidden rounded-[36px] border-[8px] border-slate-900 bg-slate-900 shadow-glow">
              <Image
                src="/images/red/27_나의학습_학습프로필.png"
                alt="학습 프로필"
                fill
                sizes="300px"
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* 학습 리포트 */}
        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 mx-auto lg:order-1"
          >
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-sky-300/30 to-indigo-300/30 blur-3xl" />
            <div className="relative h-[560px] w-[300px] overflow-hidden rounded-[36px] border-[8px] border-slate-900 bg-slate-900 shadow-glow">
              <Image
                src="/images/red/28_나의학습_학습리포트.png"
                alt="학습 리포트"
                fill
                sizes="300px"
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
              학습 리포트
            </div>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              학습 1회의 결과를
              <br />
              <span className="gradient-text">S · A · B · C 등급</span>으로
            </h3>
            <p className="mb-6 text-base leading-relaxed text-slate-600">
              ‘학습 리포트’는 학습하기의 결과예요. 정답률·학습 시간 등을
              종합해 등급으로 성취도를 보여주고, 내가 작성한 풀이·정답률 등
              자세한 정보는 모두 여기서 확인할 수 있어요.
            </p>

            <div className="space-y-3">
              {[
                { grade: "S", label: "완벽한 마스터", color: "from-amber-400 to-rose-500" },
                { grade: "A", label: "훌륭한 이해", color: "from-violet-500 to-fuchsia-500" },
                { grade: "B", label: "기초는 탄탄", color: "from-sky-500 to-indigo-500" },
                { grade: "C", label: "다시 한 번!", color: "from-slate-400 to-slate-600" },
              ].map((g) => (
                <div
                  key={g.grade}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-card"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} font-display text-2xl font-black text-white shadow-md`}
                  >
                    {g.grade}
                  </div>
                  <span className="font-semibold text-slate-700">{g.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
