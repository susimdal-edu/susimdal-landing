"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function TabletFrame({ src, alt, caption, className = "" }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <div className="tablet-frame">
        <span className="tablet-camera" />
        <div className="tablet-screen">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            unoptimized
            priority
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-caption text-ink-50">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function StatusBar() {
  return (
    <div className="status-bar">
      <span>오후 7:21 · 화요일</span>
      <span>Wi-Fi · 92%</span>
    </div>
  );
}
