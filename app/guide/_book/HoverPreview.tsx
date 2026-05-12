"use client";

import type { ReactNode, MouseEvent } from "react";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingImage } from "./LoadingImage";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  /** lightbox 안 태블릿 스크린 배경색 (기본: 검정). 페이지 단위로 흰 배경 등 다른 톤이 필요할 때 사용. */
  screenBg?: string;
};

/** 작은 스크린샷을 감싸면:
 *  - 데스크탑(md+): 호버 시 화면 가운데 lightbox 로 확대 (mouseenter/leave state)
 *  - 모바일(<md): 탭으로 lightbox 열고 닫음. 좌우 탭 영역의 페이지 이동을 stopPropagation 으로 차단
 *
 *  ⚠ lightbox 는 React Portal 로 document.body 에 mount 됨.
 *     wrapper 의 z-20 이 만드는 stacking context 와 무관하게 viewport 최상위에 표시되어
 *     형제 카드들이 위에 비치는 위계 문제가 발생하지 않음. */
export function HoverPreview({
  src,
  alt,
  children,
  className = "",
  screenBg,
}: Props) {
  const spinnerVariant = screenBg ? "dark" : "light";
  const screenStyle = screenBg ? { background: screenBg } : undefined;
  const [openClick, setOpenClick] = useState(false); // 모바일 click 토글
  const [openHover, setOpenHover] = useState(false); // 데스크탑 hover
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setOpenClick((v) => !v);
  }, []);

  const closeAll = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setOpenClick(false);
    setOpenHover(false);
  }, []);

  const enterHover = useCallback(() => setOpenHover(true), []);
  const leaveHover = useCallback(() => setOpenHover(false), []);

  const lightboxes = (
    <>
      {/* 데스크탑 hover lightbox — md+ */}
      <AnimatePresence>
        {openHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none fixed inset-0 z-[100] hidden items-center justify-center bg-ink-90/45 backdrop-blur-sm md:flex"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ width: "min(80vw, 1100px)", aspectRatio: "1.43 / 1" }}
            >
              <div className="tablet-frame relative h-full w-full">
                <span className="tablet-camera" />
                <div className="tablet-screen" style={screenStyle}>
                  <LoadingImage
                    src={src}
                    alt={alt}
                    fill
                    sizes="80vw"
                    className="object-contain"
                    unoptimized
                    spinnerVariant={spinnerVariant}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-pill bg-card/90 px-3 py-1.5 text-caption font-semibold text-ink-70 shadow-card backdrop-blur">
                마우스를 떼면 닫혀요
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 모바일 click lightbox — md 미만 */}
      <AnimatePresence>
        {openClick && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeAll}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-90/65 px-4 backdrop-blur-sm md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="이미지 확대"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{
                width: "min(92vw, calc(72vh * 1.43))",
                aspectRatio: "1.43 / 1",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tablet-frame relative h-full w-full">
                <span className="tablet-camera" />
                <div className="tablet-screen">
                  <LoadingImage
                    src={src}
                    alt={alt}
                    fill
                    sizes="92vw"
                    className="object-contain"
                    unoptimized
                    spinnerVariant="light"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-pill bg-card/90 px-3 py-1.5 text-caption font-semibold text-ink-70 shadow-card backdrop-blur">
                탭해서 닫기
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <div
      onClick={handleClick}
      onMouseEnter={enterHover}
      onMouseLeave={leaveHover}
      className={`z-20 cursor-zoom-in ${className}`}
    >
      {children}
      {mounted && createPortal(lightboxes, document.body)}
    </div>
  );
}
