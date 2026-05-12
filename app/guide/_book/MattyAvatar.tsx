"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  /** number(px) 또는 CSS 길이 문자열 */
  size?: number | string;
  bobbing?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function MattyAvatar({
  src,
  alt,
  size,
  bobbing = true,
  className = "",
  style,
}: Props) {
  const dim = typeof size === "number" ? `${size}px` : size;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block char-shadow ${className}`}
      style={{ width: dim, height: dim, ...style }}
    >
      <motion.div
        animate={bobbing ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-contain"
          unoptimized
          priority
        />
      </motion.div>
    </motion.div>
  );
}
