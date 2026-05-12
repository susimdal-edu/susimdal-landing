"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  number: string;
  emoji: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  accent: string;
};

export function ChapterHeader({
  number,
  emoji,
  eyebrow,
  title,
  description,
  accent,
}: Props) {
  return (
    <header className="mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4"
      >
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${accent} text-3xl shadow-glow md:h-20 md:w-20 md:text-4xl`}
        >
          {emoji}
        </div>
        <div>
          <div
            className={`bg-gradient-to-r ${accent} bg-clip-text text-xs font-black tracking-[0.3em] text-transparent md:text-sm`}
          >
            CHAPTER {number} · {eyebrow.toUpperCase()}
          </div>
          <h2 className="mt-1 font-display text-3xl font-extrabold leading-tight text-ink md:text-5xl">
            {title}
          </h2>
        </div>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="ml-0 mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:ml-24 md:text-lg"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8 h-1 origin-left rounded-full shimmer-bar md:ml-24"
      />
    </header>
  );
}
