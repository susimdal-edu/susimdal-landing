"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CHAPTERS } from "./chapters-data";

export function TOC() {
  return (
    <section id="toc" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold tracking-widest text-indigo-700">
            CONTENTS · 8 CHAPTERS
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            <span className="gradient-text">한 페이지</span>에 담은
            <br />
            수심달 RED의 모든 것
          </h2>
          <p className="mt-5 text-base text-slate-500 md:text-lg">
            각 챕터의 카드를 누르면 해당 섹션으로 바로 이동해요.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CHAPTERS.map((ch) => (
            <motion.li
              key={ch.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Link
                href={`#${ch.id}`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${ch.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`bg-gradient-to-br ${ch.accent} bg-clip-text font-display text-4xl font-black text-transparent`}
                    >
                      {ch.number}
                    </span>
                    <span className="text-2xl">{ch.emoji}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-ink">
                    {ch.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {ch.subtitle}
                  </p>
                  <div className="mt-5 flex items-center text-sm font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">
                    바로 가기 →
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
