"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { CHAPTERS } from "./chapters-data";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const [activeId, setActiveId] = useState<string>("toc");

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 페이지 상단 진행 바 */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500"
      />

      {/* 우측 챕터 인디케이터 (데스크탑) */}
      <nav
        aria-label="챕터 네비게이션"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      >
        {CHAPTERS.map((ch, i) => {
          const active = activeId === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="group relative flex items-center gap-3"
              aria-label={`${ch.title}로 이동`}
            >
              <span
                className={`mr-1 hidden whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-card backdrop-blur transition-all duration-300 group-hover:block ${
                  active ? "block" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")} · {ch.title}
              </span>
              <span
                className={`h-2.5 w-2.5 rounded-full border border-white shadow-md transition-all duration-300 ${
                  active
                    ? "scale-150 bg-gradient-to-br from-indigo-500 to-rose-500"
                    : "bg-slate-300 group-hover:bg-indigo-400"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
