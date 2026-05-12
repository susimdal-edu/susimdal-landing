"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Hand } from "lucide-react";

type Props = {
  onClose: () => void;
};

/** 가이드 첫 진입 시 한 번만 보이는 슬라이드 제스처 안내. 어디든 탭하면 닫힘. */
export function FirstTimeHint({ onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-ink-90/65 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="페이지 이동 안내"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-w-sm flex-col items-center gap-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 슬라이드 애니메이션 — 손이 좌우로 이동하며 화살표가 양옆에서 펄스 */}
        <div className="relative flex h-20 w-56 items-center justify-center">
          {/* 좌측 화살표 (펄스) */}
          <motion.div
            animate={{ x: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 text-white"
          >
            <ArrowLeft className="h-7 w-7" strokeWidth={2.5} />
          </motion.div>

          {/* 가운데 손가락 — 좌우로 슬라이드 */}
          <motion.div
            animate={{ x: [-32, 32, -32], rotate: [-6, 6, -6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-coral shadow-coral"
          >
            <Hand className="h-7 w-7" strokeWidth={2.4} />
          </motion.div>

          {/* 우측 화살표 (펄스) */}
          <motion.div
            animate={{ x: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute right-0 text-white"
          >
            <ArrowRight className="h-7 w-7" strokeWidth={2.5} />
          </motion.div>
        </div>

        {/* 헤더 */}
        <div className="flex flex-col gap-2 text-white">
          <h2 className="text-title-l font-bold">한 페이지씩 천천히 넘겨봐요</h2>
          <p className="text-body leading-relaxed text-white/80">
            <span className="md:hidden">
              화면 좌우를 <strong className="text-white">탭</strong>하거나{" "}
              <strong className="text-white">좌우로 슬라이드</strong>해서
              페이지를 넘길 수 있어요.
            </span>
            <span className="hidden md:inline">
              화면 양옆 <strong className="text-white">← → 버튼</strong>이나{" "}
              <strong className="text-white">키보드 화살표 키</strong>로 페이지를
              넘길 수 있어요.
            </span>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 rounded-pill bg-white px-6 py-3 text-body font-bold text-coral-strong shadow-elevated transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          시작하기
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="text-caption text-white/50">어디든 탭해서 닫기</p>
      </motion.div>
    </motion.div>
  );
}
