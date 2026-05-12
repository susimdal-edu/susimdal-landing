"use client";

import { motion } from "framer-motion";
import { LoadingImage } from "./LoadingImage";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** 태블릿 스크린 영역 배경색 (기본: #0e0e10 검정). 흰 배경이 필요한 페이지에선 "#fff" 등 전달. */
  screenBg?: string;
};

/** 태블릿 가로 프레임 — 부모 컨테이너 크기를 그대로 채워서 렌더링. */
export function TabletFrame({ src, alt, className = "", screenBg }: Props) {
  // screenBg 가 지정된 경우(보통 밝은 색) 스피너는 dark variant 로 — 보이지 않게 되는 걸 방지
  const spinnerVariant = screenBg ? "dark" : "light";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`tablet-frame relative h-full w-full ${className}`}
    >
      <span className="tablet-camera" />
      <div
        className="tablet-screen"
        style={screenBg ? { background: screenBg } : undefined}
      >
        <LoadingImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          className="object-contain"
          unoptimized
          priority
          spinnerVariant={spinnerVariant}
        />
      </div>
    </motion.figure>
  );
}
