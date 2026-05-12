"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ArrowDown,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMatty = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* 아우로라 배경 */}
      <div className="absolute inset-0 -z-20 aurora" />
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* 떠다니는 블러 블롭들 */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-400/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-28"
      >
        {/* 상단 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-card backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
          수심달 RED · 학생용 공식 가이드
        </motion.div>

        <motion.h1
          style={{ y: yTitle }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-[88px]"
        >
          <span className="block">처음이라도 괜찮아요.</span>
          <span className="block">
            <span className="gradient-text">매티</span>가
            <span className="ml-3 gradient-text-warm">처음부터 끝까지</span>
          </span>
          <span className="block">함께할게요.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-center text-lg text-slate-600 md:text-xl"
        >
          설치부터 챌린지까지, <span className="marker-indigo font-semibold">8개 챕터 · 약 7분</span>이면
          수심달 RED의 모든 기능을 마스터할 수 있어요. 스크롤만 내려보세요.
        </motion.p>

        {/* 매티 마스코트 + 빛나는 링 */}
        <motion.div
          style={{ y: yMatty }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-12"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-400/30 to-rose-400/30 blur-2xl" />
          <div className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-indigo-400/30" />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-44 w-44 overflow-hidden rounded-[40%] border-4 border-white bg-white shadow-glow md:h-56 md:w-56"
          >
            <Image
              src="/images/red/01_매티_캐릭터_인트로.png"
              alt="모범생 매티"
              fill
              sizes="224px"
              className="object-cover"
              unoptimized
              priority
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -right-4 -top-4 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 p-3 shadow-lg"
          >
            <Sparkles className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>

        {/* 빠른 정보 칩 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: GraduationCap, label: "처음 사용자 OK" },
            { icon: BookOpen, label: "8개 챕터로 정리" },
            { icon: Trophy, label: "도전 챌린지 포함" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-card backdrop-blur"
            >
              <Icon className="h-4 w-4 text-indigo-600" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* 스크롤 안내 */}
        <motion.a
          href="#toc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-600"
          aria-label="아래로 스크롤"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xs font-semibold tracking-widest">SCROLL</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
