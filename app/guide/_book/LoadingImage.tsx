"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Variant = "light" | "dark";

type Props = ImageProps & {
  /** spinner 색상 변형. light = 어두운 배경 위 (연한 흰색), dark = 밝은 배경 위 (회색) */
  spinnerVariant?: Variant;
};

/** Next/Image 위에 로딩 스피너를 얹어주는 wrapper.
 *  부모 element 는 position: relative 여야 스피너가 가운데에 정확히 배치됨. */
export function LoadingImage({
  spinnerVariant = "light",
  className,
  onLoad,
  onError,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        {...rest}
        className={`${className ?? ""} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true); // 에러 시에도 스피너 멈춤
          onError?.(e);
        }}
      />
      {!loaded && <Spinner variant={spinnerVariant} />}
    </>
  );
}

function Spinner({ variant }: { variant: Variant }) {
  const border =
    variant === "light"
      ? "border-white/15 border-t-white/55"
      : "border-ink-30/40 border-t-ink-50";
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
        className={`h-9 w-9 animate-spin rounded-full border-[3px] ${border}`}
        aria-label="이미지 불러오는 중"
      />
    </div>
  );
}
