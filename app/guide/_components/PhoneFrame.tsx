"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PhoneFrameProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
  tilt?: "left" | "right" | "none";
};

const tiltMap = {
  left: "rotate(-4deg)",
  right: "rotate(4deg)",
  none: "rotate(0deg)",
};

export function PhoneFrame({
  src,
  alt,
  width = 320,
  height = 680,
  caption,
  className = "",
  tilt = "none",
}: PhoneFrameProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ transform: tiltMap[tilt] }}
      className={`phone-frame mx-auto w-fit ${className}`}
    >
      <div className="phone-screen" style={{ width, height }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-xs font-medium text-white/70">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function FlatShot({
  src,
  alt,
  caption,
  className = "",
  ratio = "9/16",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 shadow-card backdrop-blur ${className}`}
    >
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      {caption && (
        <figcaption className="absolute bottom-3 left-3 right-3 rounded-2xl bg-black/55 px-3 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
