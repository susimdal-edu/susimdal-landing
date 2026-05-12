"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { TabletFrame } from "./TabletFrame";
import { MattyAvatar } from "./MattyAvatar";
import { Callout } from "./Callout";
import { MarkdownLite } from "./MarkdownLite";
import { HoverPreview } from "./HoverPreview";
import { LoadingImage } from "./LoadingImage";
import type { BookPage } from "./pages";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
};

/** 시각 영역 자식 박스 사이즈 — viewport vh/vw 한도 안에서 1.43:1 비율 유지.
 *
 *  ⚠ 주의: max-* 한도에 '100%' 를 넣지 않음. flex-1 로 height 가 computed 인 부모에서
 *     CSS spec 상 percentage 가 0 으로 평가되어 max-height 가 0 이 되는 버그가 있음.
 *     대신 부모 영역이 자식보다 작은 경우는 부모의 overflow-hidden 으로 잘림 처리. */
function fitBox(maxVh: number, maxVw: number, ratio = 1.43): CSSProperties {
  return {
    width: "100%",
    height: "auto",
    aspectRatio: `${ratio} / 1`,
    maxWidth: `min(${maxVw}vw, calc(${maxVh}vh * ${ratio}))`,
    maxHeight: `min(${maxVh}vh, calc(${maxVw}vw / ${ratio}))`,
  };
}

// 카드 안 시각+텍스트가 viewport 100svh 안에 동시에 들어가야 하므로 vh 한도를 보수적으로.
const SINGLE_BOX = fitBox(45, 70);
const LIST_BOX = fitBox(30, 60);

export function PageRenderer({ page }: { page: BookPage }) {
  if (page.layout === "cover" || page.layout === "ending") {
    return <CoverEndingLayout page={page} />;
  }
  return <StandardLayout page={page} />;
}

/* ─────────────────────── Cover / Ending ─────────────────────── */

function CoverEndingLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-4 text-center sm:gap-3 sm:px-6 md:gap-4 md:px-12 md:py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        // 모바일: 28vh · 50vw · 240px 중 최소값 (페이지 안에 안전하게 들어감)
        // sm+: 좀 더 큼. md+: 기존 360px 한도
        className="flex shrink-0 items-center justify-center [height:min(28vh,50vw,240px)] [width:min(28vh,50vw,240px)] sm:[height:min(34vh,320px)] sm:[width:min(34vh,320px)] md:[height:min(40vh,360px)] md:[width:min(40vh,360px)]"
      >
        <MattyAvatar src={page.matty.src} alt={page.matty.alt} size="100%" />
      </motion.div>
      {page.eyebrow && (
        <motion.div {...fadeIn} className="chip-coral">
          {page.eyebrow}
        </motion.div>
      )}
      {page.title && (
        <motion.h1
          {...fadeIn}
          className="font-bold leading-tight text-ink-90"
          style={{ fontSize: "clamp(20px, 3.4vh, 44px)", lineHeight: 1.22 }}
        >
          {page.title}
        </motion.h1>
      )}
      <motion.div {...fadeIn} className="max-w-2xl">
        <MarkdownLite
          text={page.body}
          className="text-[14px] leading-relaxed text-ink-70 sm:text-base"
        />
      </motion.div>
      {page.callout && (
        <motion.div {...fadeIn} className="w-full max-w-md">
          <Callout {...page.callout} />
        </motion.div>
      )}
    </div>
  );
}

/* ─────────────────────── Standard (visual + caption) ─────────────────────── */

function StandardLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
      {/* 시각 + 텍스트를 묶어 화면 가운데 정렬. 카드 배경/보더/그림자 없는 투명 컨테이너. */}
      <div className="flex w-full max-w-3xl flex-col items-stretch gap-3 sm:gap-4 md:gap-5">
        {/* 시각 영역 */}
        <div className="flex w-full items-center justify-center">
          <VisualSlot page={page} />
        </div>
        {/* 텍스트 영역 */}
        <DescriptionSlot page={page} />
      </div>
    </div>
  );
}

/* ─────────────────────── Visual slot ─────────────────────── */

function VisualSlot({ page }: { page: BookPage }) {
  switch (page.layout) {
    case "shots-2":
      // 모바일 세로 stack / 데스크탑 가로 row.
      // ⚠ 컨테이너에 w-full 필수 — 없으면 자식 w-full 가 0으로 평가되는 순환 참조 발생.
      return (
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          {page.screenshots?.slice(0, 2).map((s) => (
            <div
              key={s.src}
              className="aspect-[1.43/1] w-full [max-height:min(18vh,calc(78vw/1.43))] [max-width:min(78vw,calc(18vh*1.43))] md:[max-height:min(50vh,calc(36vw/1.43))] md:[max-width:min(36vw,calc(50vh*1.43))]"
            >
              <HoverPreview
                src={s.src}
                alt={s.caption ?? page.matty.alt}
                className="relative h-full w-full"
              >
                <TabletFrame src={s.src} alt={s.caption ?? page.matty.alt} />
              </HoverPreview>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="max-h-full max-w-full" style={LIST_BOX}>
          {page.screenshots?.[0] && (
            <HoverPreview
              src={page.screenshots[0].src}
              alt={page.title ?? page.matty.alt}
              className="relative h-full w-full"
            >
              <TabletFrame
                src={page.screenshots[0].src}
                alt={page.title ?? page.matty.alt}
              />
            </HoverPreview>
          )}
        </div>
      );

    case "stages":
      return <StagesVisual page={page} />;

    default: {
      // shot-right / shot-left / shot-big — 단일 스크린샷도 HoverPreview 로 감싸 호버 확대 지원
      const src = page.screenshots?.[0]?.src;
      if (!src) return null;
      return (
        <div className="max-h-full max-w-full" style={SINGLE_BOX}>
          <HoverPreview
            src={src}
            alt={page.title ?? page.matty.alt}
            className="relative h-full w-full"
          >
            <TabletFrame src={src} alt={page.title ?? page.matty.alt} />
          </HoverPreview>
        </div>
      );
    }
  }
}

function colsClass(n: number) {
  // 모바일/데스크탑 모두 정적 클래스로 매핑 (Tailwind 빌드 안정성)
  if (n <= 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-2";
  if (n === 3) return "grid-cols-2 md:grid-cols-3";
  // n=4+ — 모바일 2cols, 데스크탑 4cols (7개면 4×2)
  return "grid-cols-2 md:grid-cols-4";
}

function StagesVisual({ page }: { page: BookPage }) {
  const stages = page.stages ?? [];
  const n = stages.length;
  // ⚠ height 를 'auto' 가 아니라 명시 사이즈로 — 자식 카드의 h-full / flex-1 이 정상 작동.
  //   모바일은 vw 한도 우선, 데스크탑은 vh 한도 우선으로 분기 (arbitrary class).
  const sizeClass =
    n === 1
      ? "w-full [max-width:min(70vw,720px)] [height:min(40vh,60vw)]"
      : "w-full [max-width:min(90vw,1200px)] [height:min(50vh,80vw)] md:[height:min(42vh,60vw)]";

  return (
    <div
      className={`grid gap-2 md:gap-4 ${colsClass(n)} ${sizeClass}`}
      style={{
        gridAutoRows: "1fr",
      }}
    >
      {stages.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }}
          className="flex h-full flex-col overflow-hidden rounded-card border border-border-soft bg-card shadow-card"
          style={{ minWidth: 0, minHeight: 0 }}
        >
          <div className="flex items-center gap-2 border-b border-border-soft px-3 py-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-coral text-[11px] font-black text-white">
              {i + 1}
            </span>
            <span className="truncate text-[13px] font-bold text-ink-90">
              {s.name}
            </span>
          </div>
          {/* 미니 스크린샷 — flex-1 로 카드 남은 공간 채우고 object-contain 으로 비율 유지.
              HoverPreview 로 감싸서 호버 시 화면 가운데 큰 미리보기로 떠오름.
              밝은 카드 배경 위에서는 dark variant 스피너 (회색) 사용. */}
          <div
            className="relative flex-1 overflow-hidden bg-subtle"
            style={{ minHeight: 0 }}
          >
            {s.shots[0] && (
              <HoverPreview src={s.shots[0]} alt={s.name} className="absolute inset-0">
                <LoadingImage
                  src={s.shots[0]}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                  className="object-contain p-1.5 transition-transform duration-300 hover:scale-[1.03]"
                  unoptimized
                  spinnerVariant="dark"
                />
              </HoverPreview>
            )}
          </div>
          {s.tip && (
            <div className="border-t border-border-soft px-3 py-2 text-[11px] leading-snug text-ink-50">
              {s.tip}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────── Description slot ─────────────────────── */

function DescriptionSlot({ page }: { page: BookPage }) {
  // 모바일: 작은 매티(56px) 가 위 / sm+ : 큰 매티(80px) 가 옆
  const mattyBlock = (
    <div className="shrink-0 [width:min(56px,8vh)] sm:[width:min(80px,12vh)]">
      <MattyAvatar src={page.matty.src} alt={page.matty.alt} size="100%" bobbing />
    </div>
  );

  // 공통 컨테이너 클래스: 모바일 세로 stack, sm+ 가로 row
  const wrap = "flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4 md:gap-5";

  // list 페이지: 매티 + 제목 + 항목 그리드
  if (page.layout === "list" && page.items) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className={wrap}
      >
        {mattyBlock}
        <div className="w-full min-w-0 flex-1">
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

  // stages 페이지: 매티 + 제목 + 본문
  if (page.layout === "stages") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className={wrap}
      >
        {mattyBlock}
        <div className="w-full min-w-0 flex-1">
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
          <MarkdownLite
            text={page.body}
            className="text-caption leading-relaxed text-ink-70"
          />
        </div>
      </motion.div>
    );
  }

  // 일반: 매티 + 제목 + 본문 + callout
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className={wrap}
    >
      {mattyBlock}
      <div className="w-full min-w-0 flex-1">
        {page.eyebrow && <div className="chip-coral mb-1.5">{page.eyebrow}</div>}
        {page.title && (
          <h2
            className="mb-2 font-bold leading-tight text-ink-90"
            style={{ fontSize: "clamp(20px, 3vh, 30px)" }}
          >
            {page.title}
          </h2>
        )}
        <MarkdownLite text={page.body} className="leading-relaxed text-ink-70" />
        {page.callout && (
          <div className="mt-2.5">
            <Callout {...page.callout} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
