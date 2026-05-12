"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Home, List, X } from "lucide-react";
import { PageRenderer } from "./PageRenderer";
import { CHAPTERS, PAGES } from "./pages";

const pageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    rotateY: dir > 0 ? 6 : -6,
    transformPerspective: 1200,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    rotateY: dir > 0 ? -6 : 6,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  }),
};

export function BookReader() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tocOpen, setTocOpen] = useState(false);
  const page = PAGES[index];
  const total = PAGES.length;

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
      if (tocOpen) return;
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
      } else if (e.key === "Escape") {
        setTocOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, jumpTo, total, tocOpen]);

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

  return (
    <div className="relative min-h-screen bg-page">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border-soft bg-page/85 px-4 backdrop-blur-md">
        <Link href="/" className="btn-ghost text-caption">
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">랜딩으로</span>
        </Link>
        <div className="flex items-center gap-2 text-caption text-ink-70">
          <BookOpen className="h-4 w-4 text-coral" />
          <span className="font-bold text-ink-90">수심달 RED · 학생 가이드</span>
          <span className="hidden text-ink-50 sm:inline">|</span>
          <span className="hidden font-semibold text-ink-50 sm:inline">
            Chapter {page.chapter}. {page.chapterTitle}
          </span>
        </div>
        <button
          onClick={() => setTocOpen(true)}
          className="btn-ghost text-caption"
          aria-label="목차 열기"
        >
          <List className="h-4 w-4" />
          <span className="hidden sm:inline">목차</span>
        </button>
      </header>

      {/* 상단 진행바 */}
      <div className="sticky top-14 z-20 h-1 w-full bg-border-soft">
        <motion.div
          className="h-full bg-gradient-to-r from-coral to-coral-strong"
          initial={false}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* 챕터 도트 (데스크탑) */}
      <div className="sticky top-16 z-20 hidden justify-center px-6 pt-3 md:flex">
        <div className="flex items-center gap-1 rounded-pill border border-border-soft bg-card px-2 py-1.5 shadow-card">
          {CHAPTERS.map((c) => {
            const prog = progressByChapter[c.num];
            if (!prog) return null;
            const active = page.chapter === c.num;
            return (
              <button
                key={c.num}
                onClick={() => jumpTo(prog.first)}
                className={`group relative flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-micro font-bold transition-all ${
                  active
                    ? "bg-coral-soft text-coral-strong"
                    : "text-ink-50 hover:bg-page"
                }`}
                title={`${c.title} — ${c.subtitle}`}
              >
                <span>{String(c.num).padStart(2, "0")}</span>
                <span className="hidden lg:inline">{c.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 책 본문 */}
      <main
        className="relative mx-auto max-w-6xl px-3 py-6 md:px-6 md:py-10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative">
          {/* 책 그림자 (페이지 옆) */}
          <div className="absolute -bottom-3 left-4 right-4 -z-10 h-6 rounded-full bg-ink-90/10 blur-xl" />
          <div className="paper paper-noise relative overflow-hidden rounded-card border border-border-soft shadow-elevated md:rounded-[20px]">
            {/* 페이지 영역 */}
            <div className="relative" style={{ minHeight: "min(78vh, 720px)" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={page.id}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <PageRenderer page={page} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 하단 페이지 푸터 (페이지 번호, 챕터) */}
            <div className="flex items-center justify-between border-t border-border-soft bg-subtle/60 px-5 py-3 text-caption text-ink-50">
              <span>
                Chapter {page.chapter}. {page.chapterTitle}
              </span>
              <span>
                Page <span className="font-bold text-ink-70">{index + 1}</span> / {total}
              </span>
            </div>
          </div>
        </div>

        {/* 좌우 컨트롤 (모바일 + 데스크탑) */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="btn-secondary"
            aria-label="이전 페이지"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>이전</span>
          </button>

          {/* 페이지 인디케이터 도트 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {PAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => jumpTo(i)}
                aria-label={`${i + 1}페이지로 이동`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-coral"
                    : i < index
                    ? "w-2 bg-coral/40"
                    : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            disabled={index === total - 1}
            className="btn-primary"
            aria-label="다음 페이지"
          >
            <span>{index === total - 1 ? "끝!" : "다음"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-center text-micro text-ink-50">
          좌우 화살표 키 · 스페이스바 · 모바일은 좌우 스와이프
        </p>
      </main>

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
              className="flex w-full max-w-sm flex-col bg-card shadow-elevated"
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
                    <div key={c.num} className="mb-3 rounded-card border border-border-soft bg-card">
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
                                    active ? "font-bold text-coral-strong" : "text-ink-70"
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
