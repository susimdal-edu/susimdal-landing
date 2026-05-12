"use client";

import type { ReactNode } from "react";
import { useState, useCallback, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingImage } from "./LoadingImage";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

/** 작은 스크린샷 영역을 감싸면:
 *  - 데스크탑(md+): 마우스 호버 시 화면 가운데 lightbox 로 확대 (CSS group-hover)
 *  - 모바일(<md): 탭하면 lightbox 가 열리고, 좌우 탭 영역(페이지 이동)은 가로채지 않음
 *
 *  ⚠ 모바일에서 stopPropagation 으로 부모 좌우 탭 영역의 클릭 핸들러에 이벤트가 안 가도록 가드. */
export function HoverPreview({ src, alt, children, className = "" }: Props) {
  const [openMobile, setOpenMobile] = useState(false);

  const handleClick = useCallback((e: MouseEvent) => {
    // 이미지 위 클릭 → 페이지 이동 방지 + 모바일 lightbox 토글
    // 데스크탑에서도 stopPropagation 은 무해 (좌우 버튼은 별도 element)
    e.stopPropagation();
    setOpenMobile((v) => !v);
  }, []);

  const closeMobile = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setOpenMobile(false);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`group relative z-20 cursor-zoom-in ${className}`}
    >
      {children}

      {/* 데스크탑 hover lightbox — md+ 에서만 hover 동작 */}
      <div
        className="pointer-events-none invisible fixed inset-0 z-50 hidden items-center justify-center bg-ink-90/45 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:visible group-hover:opacity-100 md:flex"
        aria-hidden="true"
      >
        <div
          className="relative scale-95 transition-transform duration-200 ease-out group-hover:scale-100"
          style={{ width: "min(80vw, 1100px)", aspectRatio: "1.43 / 1" }}
        >
          <div className="tablet-frame relative h-full w-full">
            <span className="tablet-camera" />
            <div className="tablet-screen">
              <LoadingImage
                src={src}
                alt={alt}
                fill
                sizes="80vw"
                className="object-contain"
                unoptimized
                spinnerVariant="light"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-pill bg-card/90 px-3 py-1.5 text-caption font-semibold text-ink-70 shadow-card backdrop-blur">
            마우스를 떼면 닫혀요
          </div>
        </div>
      </div>

      {/* 모바일 click lightbox — 모든 viewport 에서 click 으로 토글되지만 md:hidden 으로 데스크탑은 숨김 */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-90/65 px-4 backdrop-blur-sm md:hidden"
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
    </div>
  );
}
