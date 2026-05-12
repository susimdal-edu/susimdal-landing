"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Heart, MessageCircle } from "lucide-react";

export function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-indigo-950 to-slate-950 px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-10 h-40 w-40 md:h-48 md:w-48"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-400/40 to-rose-400/40 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[40%] border-4 border-white/20 shadow-glow">
            <Image
              src="/images/red/35_매티_마무리.png"
              alt="매티 마무리 응원"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-extrabold leading-tight md:text-6xl"
        >
          이제 RED와 함께할
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
            준비가 모두 끝났어요.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          수심달 RED는 도구에 불과해요. 하지만 그 과정 속에 남은{" "}
          <span className="font-bold text-white">여러분의 습관은 ‘진짜’</span>가
          될 거예요. 여러분 안에 숨은 무한한 가능성을 저와 함께 발견해봐요.
          언제나 곁에서 응원할게요!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          <Heart className="h-4 w-4 text-rose-400" />
          모범생 매티 드림
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:contact@susimdal.com"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            수심달 카톡 채널 문의하기
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
          >
            <ArrowUp className="h-5 w-5" />
            처음으로 돌아가기
          </a>
        </motion.div>

        <p className="mt-16 text-xs text-white/40">
          © 2026 수심달 · 본 가이드는 학생용 사용 매뉴얼입니다.
        </p>
      </div>
    </section>
  );
}
