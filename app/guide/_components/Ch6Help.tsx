"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { Bot, Package, Users } from "lucide-react";

const HELPS = [
  {
    icon: Bot,
    name: "AI 매티",
    tag: "정답 대신 힌트",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    desc: "정답을 바로 알려주진 않아요. 대신 “이 조건을 먼저 사용해볼까?”처럼 스스로 답을 찾도록 힌트를 줘요.",
    warning: "‘학습 전 체크’에서는 사용할 수 없어요",
    imgs: ["/images/red/22_학습지원_AI매티.png", "/images/red/23_학습지원_AI매티힌트.png"],
  },
  {
    icon: Package,
    name: "개념 상자",
    tag: "원할 때 바로",
    color: "from-fuchsia-500 to-rose-500",
    bgColor: "bg-rose-50",
    desc: "문제 화면 오른쪽 위 [<] 버튼을 누르면, 문제와 관련된 개념 영상·웹툰을 바로 볼 수 있어요.",
    warning: "비밀 상자처럼 열고 닫을 수 있어요",
    imgs: ["/images/red/24_학습지원_개념상자열기.png", "/images/red/25_학습지원_개념상자내용.png"],
  },
  {
    icon: Users,
    name: "질문 게시판",
    tag: "친구들과 함께",
    color: "from-emerald-500 to-sky-500",
    bgColor: "bg-emerald-50",
    desc: "AI 매티·개념 상자로도 해결이 안 될 때, 친구들과 질문을 주고받아요. 다른 친구의 질문에 답하면 내 개념도 단단해져요.",
    warning: "답하는 만큼 개념이 깊어져요",
    imgs: ["/images/red/26_학습지원_질문게시판.png"],
  },
];

export function Ch6Help() {
  return (
    <section
      id="ch-help"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="06"
          emoji="🆘"
          eyebrow="학습 지원군"
          accent="from-amber-500 to-emerald-500"
          title={
            <>
              막힐 땐 <span className="marker-highlight">3가지 도움</span>이 있어요
            </>
          }
          description={
            <>
              혼자 끙끙대지 마세요. 수심달 RED에는 3중 안전망이 준비돼 있어요.
              상황에 맞춰 골라 쓰면 돼요.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {HELPS.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-card transition-all hover:-translate-y-2 hover:shadow-glow"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${h.color}`}
                />
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${h.color} text-white shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.4} />
                    </div>
                    <span
                      className={`rounded-full ${h.bgColor} px-3 py-1 text-xs font-bold text-slate-700`}
                    >
                      {h.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    {h.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {h.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    ⚠️ {h.warning}
                  </div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 p-4 pt-0">
                  {h.imgs.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100"
                    >
                      <Image
                        src={src}
                        alt={h.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 16vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
