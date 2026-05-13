"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, List, X } from "lucide-react";
import { PageRenderer } from "./PageRenderer";
import type { BookPage, Chapter } from "./pages";
import { FirstTimeHint } from "./FirstTimeHint";

const pageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  }),
};

type BookReaderProps = {
  pages: BookPage[];
  chapters: Chapter[];
};

export function BookReader({ pages: PAGES, chapters: CHAPTERS }: BookReaderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tocOpen, setTocOpen] = useState(false);
  // 가이드 첫 진입(컴포넌트 mount) 시마다 hint 표시 — 사용자가 새로고침/재방문할 때마다 보임
  const [showHint, setShowHint] = useState(true);
  const page = PAGES[index];
  const total = PAGES.length;

  const dismissHint = useCallback(() => {
    setShowHint(false);
  }, []);

  // hash 동기화
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#p-", "");
      if (!h) return;
      const found = PAGES.findIndex((p) => p.id === h);
      if (found >= 0) setIndex(found);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const newHash = `#p-${PAGES[index].id}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, "", newHash);
    }
  }, [index]);

  const go = useCallback(
    (delta: number) => {
      setIndex((cur) => {
        const next = Math.max(0, Math.min(total - 1, cur + delta));
        if (next !== cur) setDirection(delta);
        return next;
      });
    },
    [total]
  );

  const jumpTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
      setTocOpen(false);
    },
    [index]
  );

  // 키보드 단축키
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showHint) {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          dismissHint();
        }
        return;
      }
      if (tocOpen) {
        if (e.key === "Escape") setTocOpen(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        jumpTo(0);
      } else if (e.key === "End") {
        jumpTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, jumpTo, total, tocOpen, showHint, dismissHint]);

  // 스와이프 (모바일)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
    setTouchStart(null);
  };

  const progressByChapter = useMemo(() => {
    const map: Record<number, { done: number; total: number; first: number }> = {};
    PAGES.forEach((p, i) => {
      if (!map[p.chapter]) map[p.chapter] = { done: 0, total: 0, first: i };
      map[p.chapter].total += 1;
      if (i <= index) map[p.chapter].done += 1;
    });
    return map;
  }, [index]);

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div
      className="relative h-[100svh] w-full overflow-hidden bg-page"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* 좌상단 미니 링크 */}
      <Link
        href="/"
        className="absolute left-2.5 top-2.5 z-30 inline-flex items-center gap-1 rounded-pill border border-border-soft bg-card/85 px-2.5 py-1 text-[11px] font-bold text-ink-70 shadow-card backdrop-blur transition-all hover:bg-card md:left-4 md:top-4 md:gap-1.5 md:px-3 md:py-1.5 md:text-micro"
      >
        <ArrowLeft className="h-3 w-3 md:h-3.5 md:w-3.5" />
        랜딩으로
      </Link>

      {/* 우상단: 페이지 카운터 + TOC */}
      <div className="absolute right-2.5 top-2.5 z-30 flex items-center gap-1.5 md:right-4 md:top-4 md:gap-2">
        <div className="rounded-pill border border-border-soft bg-card/85 px-2.5 py-1 text-[11px] font-bold text-ink-70 shadow-card backdrop-blur md:px-3 md:py-1.5 md:text-micro">
          <span className="text-coral-strong">{index + 1}</span>
          <span className="text-ink-30"> / {total}</span>
        </div>
        <button
          onClick={() => setTocOpen(true)}
          className="inline-flex h-7 items-center gap-1 rounded-pill border border-border-soft bg-card/85 px-2.5 text-[11px] font-bold text-ink-70 shadow-card backdrop-blur transition-all hover:bg-card md:h-8 md:gap-1.5 md:px-3 md:text-micro"
          aria-label="목차 열기"
        >
          <List className="h-3 w-3 md:h-3.5 md:w-3.5" />
          목차
        </button>
      </div>

      {/* 콘텐츠 영역. 데스크탑은 좌우 버튼 공간 확보, 모바일은 화면 끝까지 사용 */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page.id}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-y-0 inset-x-0 md:inset-x-[104px]"
          >
            <PageRenderer page={page} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 모바일 좌측 탭 영역 — 화면 절반, 시각적 단서 없음 (invisible) */}
      <button
        onClick={() => go(-1)}
        disabled={isFirst}
        aria-label="이전 페이지"
        className="absolute left-0 top-0 z-10 h-full w-1/2 disabled:cursor-not-allowed md:hidden"
      />

      {/* 모바일 우측 탭 영역 */}
      <button
        onClick={() => go(1)}
        disabled={isLast}
        aria-label="다음 페이지"
        className="absolute right-0 top-0 z-10 h-full w-1/2 disabled:cursor-not-allowed md:hidden"
      />

      {/* 데스크탑 좌측 이전 버튼 (md+ 만 표시) */}
      <button
        onClick={() => go(-1)}
        disabled={isFirst}
        aria-label="이전 페이지"
        className="group absolute left-0 top-0 z-20 hidden h-full w-[104px] items-center justify-center disabled:cursor-not-allowed md:flex"
      >
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-full border border-border-soft bg-card/90 text-ink-70 shadow-card backdrop-blur transition-all ${
            isFirst
              ? "opacity-30"
              : "group-hover:-translate-x-0.5 group-hover:bg-coral group-hover:text-white group-hover:shadow-coral"
          }`}
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
        </span>
      </button>

      {/* 데스크탑 우측 다음 버튼 (md+ 만 표시) */}
      <button
        onClick={() => go(1)}
        disabled={isLast}
        aria-label="다음 페이지"
        className="group absolute right-0 top-0 z-20 hidden h-full w-[104px] items-center justify-center disabled:cursor-not-allowed md:flex"
      >
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-full border border-coral bg-coral text-white shadow-coral transition-all ${
            isLast
              ? "opacity-30"
              : "group-hover:translate-x-0.5 group-hover:bg-coral-pressed"
          }`}
        >
          <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
        </span>
      </button>

      {/* 첫 진입 슬라이드 제스처 안내 */}
      <AnimatePresence>
        {showHint && <FirstTimeHint onClose={dismissHint} />}
      </AnimatePresence>

      {/* TOC 오버레이 */}
      <AnimatePresence>
        {tocOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-ink-90/30 backdrop-blur-sm"
            onClick={() => setTocOpen(false)}
          >
            <motion.div
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="flex h-full w-full max-w-sm flex-col bg-card shadow-elevated"
            >
              <div className="flex items-center justify-between border-b border-border-soft p-4">
                <h3 className="text-title-s text-ink-90">목차</h3>
                <button
                  onClick={() => setTocOpen(false)}
                  className="btn-ghost"
                  aria-label="닫기"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {CHAPTERS.map((c) => {
                  const prog = progressByChapter[c.num];
                  if (!prog) return null;
                  return (
                    <div
                      key={c.num}
                      className="mb-3 rounded-card border border-border-soft bg-card"
                    >
                      <div className="flex items-center justify-between border-b border-border-soft px-4 py-3">
                        <div>
                          <div className="text-micro font-bold text-coral-strong">
                            Chapter {String(c.num).padStart(2, "0")}
                          </div>
                          <div className="text-title-s text-ink-90">{c.title}</div>
                          <div className="text-caption text-ink-50">{c.subtitle}</div>
                        </div>
                        <div className="text-micro font-bold text-ink-50">
                          {prog.done}/{prog.total}
                        </div>
                      </div>
                      <ul className="p-2">
                        {PAGES.filter((p) => p.chapter === c.num).map((p) => {
                          const i = PAGES.findIndex((x) => x.id === p.id);
                          const active = i === index;
                          return (
                            <li key={p.id}>
                              <button
                                onClick={() => jumpTo(i)}
                                className={`flex w-full items-start gap-3 rounded-inner px-3 py-2 text-left transition-colors ${
                                  active ? "bg-coral-soft" : "hover:bg-page"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 text-micro font-bold ${
                                    active ? "text-coral-strong" : "text-ink-50"
                                  }`}
                                >
                                  {String(p.pageNumber).padStart(2, "0")}
                                </span>
                                <span
                                  className={`text-caption ${
                                    active
                                      ? "font-bold text-coral-strong"
                                      : "text-ink-70"
                                  }`}
                                >
                                  {p.title ?? p.eyebrow ?? "(페이지)"}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
