"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  size?: number;
  bobbing?: boolean;
  className?: string;
};

export function MattyAvatar({
  src,
  alt,
  size = 220,
  bobbing = true,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block char-shadow ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={bobbing ? { y: [0, -8, 0] } : {}}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-contain"
          unoptimized
          priority
        />
      </motion.div>
    </motion.div>
  );
}
