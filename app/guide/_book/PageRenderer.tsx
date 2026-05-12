"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TabletFrame } from "./TabletFrame";
import { MattyAvatar } from "./MattyAvatar";
import { Callout } from "./Callout";
import { MarkdownLite } from "./MarkdownLite";
import type { BookPage } from "./pages";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
};

export function PageRenderer({ page }: { page: BookPage }) {
  if (page.layout === "cover" || page.layout === "ending") {
    return <CoverEndingLayout page={page} />;
  }
  return <StandardLayout page={page} />;
}

/* ─────────────────────── Cover / Ending ─────────────────────── */

function CoverEndingLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-[3vh] flex shrink-0 items-center justify-center"
        style={{ height: "min(40vh, 360px)", width: "min(40vh, 360px)" }}
      >
        <MattyAvatar src={page.matty.src} alt={page.matty.alt} size="100%" />
      </motion.div>
      {page.eyebrow && (
        <motion.div {...fadeIn} className="chip-coral mb-3">
          {page.eyebrow}
        </motion.div>
      )}
      {page.title && (
        <motion.h1
          {...fadeIn}
          className="mb-4 font-bold leading-tight text-ink-90"
          style={{
            fontSize: "clamp(24px, 4.2vh, 44px)",
            lineHeight: 1.22,
          }}
        >
          {page.title}
        </motion.h1>
      )}
      <motion.div {...fadeIn} className="max-w-2xl">
        <MarkdownLite text={page.body} className="leading-relaxed text-ink-70" />
      </motion.div>
      {page.callout && (
        <motion.div {...fadeIn} className="mt-5 w-full max-w-md">
          <Callout {...page.callout} />
        </motion.div>
      )}
    </div>
  );
}

/* ─────────────────────── Standard (visual + caption) ─────────────────────── */

function StandardLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full w-full flex-col items-center px-3 pb-4 pt-12 md:px-6 md:pb-6 md:pt-14">
      {/* 시각 영역 */}
      <div className="flex w-full flex-1 items-center justify-center" style={{ minHeight: 0 }}>
        <VisualSlot page={page} />
      </div>

      {/* 하단 설명 */}
      <div className="mt-3 w-full max-w-4xl shrink-0 md:mt-5">
        <DescriptionSlot page={page} />
      </div>
    </div>
  );
}

/* ─────────────────────── Visual slot ─────────────────────── */

function VisualSlot({ page }: { page: BookPage }) {
  // 시각 영역 자체의 max-height는 부모 flex-1이 결정. aspect-ratio가 height 잡아줌.
  switch (page.layout) {
    case "shots-2":
      return (
        <div className="flex h-full w-full items-center justify-center gap-4 md:gap-6">
          {page.screenshots?.slice(0, 2).map((s) => (
            <div
              key={s.src}
              className="h-full max-w-[48%]"
              style={{ aspectRatio: "1.43 / 1" }}
            >
              <TabletFrame src={s.src} alt={s.caption ?? page.matty.alt} />
            </div>
          ))}
        </div>
      );

    case "list":
      // 사이드바: 태블릿 1장만 (리스트는 아래 설명으로 이동)
      return (
        <div
          className="h-full max-w-[80%]"
          style={{ aspectRatio: "1.43 / 1" }}
        >
          {page.screenshots?.[0] && (
            <TabletFrame
              src={page.screenshots[0].src}
              alt={page.title ?? page.matty.alt}
            />
          )}
        </div>
      );

    case "stages":
      return <StagesVisual page={page} />;

    default: {
      // shot-right / shot-left / shot-big → 동일: 가운데 1장
      const src = page.screenshots?.[0]?.src;
      if (!src) return null;
      return (
        <div
          className="h-full max-w-[80%]"
          style={{ aspectRatio: "1.43 / 1" }}
        >
          <TabletFrame src={src} alt={page.title ?? page.matty.alt} />
        </div>
      );
    }
  }
}

function StagesVisual({ page }: { page: BookPage }) {
  const stages = page.stages ?? [];
  // 단계 카드를 가로로 나열, 카드 안에 미니 스크린샷
  return (
    <div className="flex h-full w-full items-stretch justify-center gap-3 overflow-hidden md:gap-4">
      {stages.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
          className="flex h-full flex-1 flex-col overflow-hidden rounded-card border border-border-soft bg-card shadow-card"
          style={{ minWidth: 0 }}
        >
          <div className="flex items-center gap-2 border-b border-border-soft px-3 py-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-coral text-[11px] font-black text-white">
              {i + 1}
            </span>
            <span className="truncate text-caption font-bold text-ink-90">
              {s.name}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-1.5 bg-subtle p-2" style={{ minHeight: 0 }}>
            {s.shots.slice(0, 2).map((src) => (
              <div
                key={src}
                className="relative w-full overflow-hidden rounded-inner border border-border-soft bg-card"
                style={{ aspectRatio: "1.43 / 1" }}
              >
                <Image
                  src={src}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────── Description slot ─────────────────────── */

function DescriptionSlot({ page }: { page: BookPage }) {
  const mattyBlock = (
    <div className="shrink-0" style={{ width: "min(80px, 12vh)" }}>
      <MattyAvatar src={page.matty.src} alt={page.matty.alt} size="100%" bobbing />
    </div>
  );

  // list 페이지: 매티 + 제목/본문 + 항목 그리드
  if (page.layout === "list" && page.items) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="flex items-start gap-4 md:gap-5"
      >
        {mattyBlock}
        <div className="min-w-0 flex-1">
          {page.eyebrow && (
            <div className="chip-coral mb-1.5">{page.eyebrow}</div>
          )}
          {page.title && (
            <h2
              className="mb-1.5 font-bold leading-tight text-ink-90"
              style={{ fontSize: "clamp(18px, 2.6vh, 26px)" }}
            >
              {page.title}
            </h2>
          )}
          <ul className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-3">
            {page.items.map((it, i) => (
              <li
                key={it.label}
                className="flex items-start gap-2 rounded-inner bg-card px-2.5 py-1.5 ring-1 ring-border-soft"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-coral-soft text-[10px] font-black text-coral-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="text-caption font-bold text-ink-90">
                    {it.label}
                  </div>
                  <div className="line-clamp-2 text-[12px] leading-snug text-ink-70">
                    {it.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  // stages 페이지: 매티 + 제목/본문 + 단계명 인라인
  if (page.layout === "stages" && page.stages) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="flex items-start gap-4 md:gap-5"
      >
        {mattyBlock}
        <div className="min-w-0 flex-1">
          {page.eyebrow && <div className="chip-coral mb-1.5">{page.eyebrow}</div>}
          {page.title && (
            <h2
              className="mb-1.5 font-bold leading-tight text-ink-90"
              style={{ fontSize: "clamp(18px, 2.6vh, 26px)" }}
            >
              {page.title}
            </h2>
          )}
          <MarkdownLite text={page.body} className="text-caption leading-relaxed text-ink-70" />
        </div>
      </motion.div>
    );
  }

  // 일반: 매티 + 제목/본문/callout
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="flex items-start gap-4 md:gap-5"
    >
      {mattyBlock}
      <div className="min-w-0 flex-1">
        {page.eyebrow && <div className="chip-coral mb-1.5">{page.eyebrow}</div>}
        {page.title && (
          <h2
            className="mb-2 font-bold leading-tight text-ink-90"
            style={{ fontSize: "clamp(20px, 3vh, 30px)" }}
          >
            {page.title}
          </h2>
        )}
        <MarkdownLite
          text={page.body}
          className="leading-relaxed text-ink-70"
        />
        {page.callout && (
          <div className="mt-2.5">
            <Callout {...page.callout} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
