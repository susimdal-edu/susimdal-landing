"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

/** 작은 스크린샷 영역을 감싸면 hover 시 화면 가운데에 큰 미리보기가 떠오르는 컴포넌트.
 *  - CSS group-hover 만으로 동작 (state 없음)
 *  - lightbox 는 pointer-events-none 이라 호버 영역을 가로채지 않음
 *  - 부모를 떠나면 즉시 사라짐 */
export function HoverPreview({ src, alt, children, className = "" }: Props) {
  // ⚠ outer 의 default position 을 두지 않음.
  //   position 은 호출 측의 className 으로 결정 (예: "absolute inset-0", "h-full w-full" 등).
  //   default 로 relative 를 넣어두면 className 에 absolute 가 들어와도 Tailwind utility 충돌로
  //   relative 가 적용되어 자식 Image fill 의 부모 사이즈가 0이 되는 버그가 발생함.
  return (
    <div className={`group cursor-zoom-in ${className}`}>
      {children}

      {/* 확대 미리보기 — fixed lightbox */}
      <div
        className="invisible pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-ink-90/45 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:visible group-hover:opacity-100"
        aria-hidden="true"
      >
        <div
          className="relative scale-95 transition-transform duration-200 ease-out group-hover:scale-100"
          style={{
            width: "min(80vw, 1100px)",
            aspectRatio: "1.43 / 1",
          }}
        >
          {/* 태블릿 프레임 (TabletFrame 과 같은 클래스 그대로 사용) */}
          <div className="tablet-frame relative h-full w-full">
            <span className="tablet-camera" />
            <div className="tablet-screen">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="80vw"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* 안내 라벨 */}
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-pill bg-card/90 px-3 py-1.5 text-caption font-semibold text-ink-70 shadow-card backdrop-blur">
            마우스를 떼면 닫혀요
          </div>
        </div>
      </div>
    </div>
  );
}
