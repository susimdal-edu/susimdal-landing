"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** 태블릿 가로 프레임 — 부모 컨테이너 크기에 맞춰 채워짐 (aspect 1.43:1). */
export function TabletFrame({ src, alt, className = "" }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <div className="tablet-frame h-full w-full">
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
      </div>
    </motion.figure>
  );
}
