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

/** 시각 영역 자식 박스 사이즈 — 항상 부모(시각 영역) 안에 fit + 1.43:1 비율 유지.
 *
 *  동작 원리:
 *  - width: 100% 로 시작 → 부모 너비를 채우려 함
 *  - max-width 가 셋 (vw 한도, vh*ratio 한도, 부모 100%) 중 가장 작은 값으로 잘림
 *  - aspect-ratio 로 height 자동 계산
 *  - max-height 도 셋 중 최소로 잘림 → height 줄어들면 aspect 가 width 도 비율로 줄임
 *
 *  → 텍스트 영역이 커서 시각 영역 height 가 작아져도 자동으로 비율 유지하며 fit. */
function fitBox(maxVh: number, maxVw: number, ratio = 1.43): CSSProperties {
  return {
    width: "100%",
    height: "auto",
    aspectRatio: `${ratio} / 1`,
    maxWidth: `min(${maxVw}vw, calc(${maxVh}vh * ${ratio}), 100%)`,
    maxHeight: `min(${maxVh}vh, calc(${maxVw}vw / ${ratio}), 100%)`,
  };
}

// 모바일에선 좌우 버튼 영역이 ~48-68px 정도로 좁아져 콘텐츠 가용 너비가 80vw 이상.
// fitBox vw 를 ~76-80 으로 잡아 모바일 viewport 안에 안전하게 들어가도록.
const SINGLE_BOX = fitBox(56, 78);
const LIST_BOX = fitBox(40, 70);

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
    <div className="flex h-full w-full flex-col items-center overflow-hidden px-1 pb-3 pt-9 sm:px-3 sm:pt-12 md:px-6 md:pb-6 md:pt-14">
      {/* 시각 영역 — flex-1 가 남는 공간 차지, 자식은 max-h/w 100% 로 자동 fit.
         텍스트 영역(shrink-0) 이 자기 사이즈를 가져가고 남은 만큼 시각이 줄어듦. */}
      <div
        className="flex w-full flex-1 items-center justify-center overflow-hidden"
        style={{ minHeight: 0 }}
      >
        <VisualSlot page={page} />
      </div>

      {/* 하단 설명 — shrink-0 이지만 콘텐츠 자체 길이가 너무 길면 시각이 밀리므로
         max-h 로 텍스트 영역 한도도 두어 화면 밖으로 절대 안 나가게. */}
      <div className="mt-2 w-full max-w-4xl shrink-0 overflow-hidden sm:mt-3 md:mt-5">
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
      // 각 박스는 width:100% + aspect 1.43 + max-w/h(vh·vw·100% min) 로 부모 안에 자동 fit.
      return (
        <div className="flex max-h-full max-w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          {page.screenshots?.slice(0, 2).map((s) => (
            <div
              key={s.src}
              className="w-full [aspect-ratio:1.43/1] [max-height:min(24vh,calc(78vw/1.43),100%)] [max-width:min(78vw,calc(24vh*1.43),100%)] md:[max-height:min(50vh,calc(36vw/1.43),100%)] md:[max-width:min(36vw,calc(50vh*1.43),100%)]"
            >
              <HoverPreview
                src={s.src}
                alt={s.caption ?? page.matty.alt}
                className="h-full w-full"
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
      const src = page.screenshots?.[0]?.src;
      if (!src) return null;
      return (
        <div className="max-h-full max-w-full" style={SINGLE_BOX}>
          <TabletFrame src={src} alt={page.title ?? page.matty.alt} />
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
  // 부모 시각 영역에 자동 fit — max-* 한도만 두고 width/height 는 100%/auto
  const containerStyle: CSSProperties =
    n === 1
      ? {
          width: "100%",
          height: "auto",
          maxWidth: "min(78vw, 880px, 100%)",
          maxHeight: "min(54vh, 75vw, 100%)",
        }
      : {
          width: "100%",
          height: "100%",
          maxWidth: "min(94vw, 1280px, 100%)",
          maxHeight: "min(56vh, 75vw, 100%)",
        };

  return (
    <div
      className={`grid gap-2 md:gap-4 ${colsClass(n)}`}
      style={{
        ...containerStyle,
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
