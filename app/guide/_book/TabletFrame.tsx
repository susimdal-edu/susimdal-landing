"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** 태블릿 가로 프레임 — 부모 컨테이너 크기를 그대로 채워서 렌더링.
 *  부모가 width/height 를 명시했다는 가정. (aspect-ratio 는 부모에서 잡거나 calc fitBox 로 처리) */
export function TabletFrame({ src, alt, className = "" }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`tablet-frame relative h-full w-full ${className}`}
    >
      <span className="tablet-camera" />
      <div className="tablet-screen">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          className="object-cover"
          unoptimized
          priority
        />
      </div>
    </motion.figure>
  );
}
