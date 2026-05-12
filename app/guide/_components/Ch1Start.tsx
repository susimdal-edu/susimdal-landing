"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import {
  Download,
  Play,
  UserPlus,
  School,
  Send,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    icon: Download,
    badge: "STEP 01",
    title: "앱 설치하기",
    detail:
      "태블릿 스토어에서 '수심달' 검색 → 수심달 RED 앱 설치. 갤럭시탭 S6 Lite 이후 / 아이패드 9세대 이후 + 전용 펜슬이 권장 환경이에요.",
    img: "/images/red/02_앱스토어_설치_화면.png",
    hint: "전용 펜슬이 있으면 학습 효과가 훨씬 좋아요",
  },
  {
    icon: Play,
    badge: "STEP 02",
    title: "앱 실행하기",
    detail: "설치가 끝나면 앱을 실행해서 본격적인 여정을 시작해요.",
    img: "/images/red/03_앱_실행_화면.png",
    hint: "처음 실행 시 권한 안내가 나오면 모두 허용해주세요",
  },
  {
    icon: UserPlus,
    badge: "STEP 03",
    title: "회원가입",
    detail:
      "안내에 따라 회원가입을 완료한 뒤, 가입한 정보로 로그인해주세요.",
    img: "/images/red/04_회원가입_화면.png",
    hint: "이름과 학교 정보는 정확히 입력해주세요",
  },
  {
    icon: School,
    badge: "STEP 04",
    title: "학원 등록 신청 ①",
    detail: "처음 로그인하면 '학원'에 등록해야 해요. 등록 화면으로 이동해요.",
    img: "/images/red/05_학원등록신청_1.png",
    hint: "학원 등록 없이는 학습을 시작할 수 없어요",
  },
  {
    icon: Send,
    badge: "STEP 05",
    title: "학원 등록 신청 ②",
    detail:
      "‘수심달 클래스’ 학원에 가입 신청 (띄어쓰기 필수!) → 신청 완료 후 ‘수심달’ 카톡 채널로 알려주세요!",
    img: "/images/red/06_학원등록신청_2.png",
    hint: "띄어쓰기를 빠뜨리면 검색되지 않으니 주의!",
  },
  {
    icon: CheckCircle2,
    badge: "STEP 06",
    title: "등록 완료!",
    detail:
      "다시 로그인 하면 모든 앱 기능을 바로 사용할 수 있어요. 환영합니다!",
    img: "/images/red/07_등록완료_화면.png",
    hint: "이제 본격적인 학습 여정을 시작해요 🎉",
  },
];

export function Ch1Start() {
  return (
    <section id="ch-start" className="relative scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          number="01"
          emoji="🚀"
          eyebrow="시작하기"
          accent="from-indigo-500 to-violet-500"
          title={
            <>
              <span className="marker-indigo">6단계</span>면 끝나는 첫 설정
            </>
          }
          description={
            <>
              가입부터 학원 등록까지, 처음이라도 막힘없이 시작할 수 있도록
              순서대로 정리했어요. 화면을 따라가면서 똑같이 진행해보세요.
            </>
          }
        />

        <div className="relative">
          {/* 세로 타임라인 라인 */}
          <div className="pointer-events-none absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-300 via-fuchsia-300 to-rose-300 md:block" />

          <ol className="space-y-12 md:space-y-20">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const reversed = i % 2 === 1;
              return (
                <motion.li
                  key={s.badge}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[3.5rem_1fr_auto] md:gap-10"
                >
                  {/* 아이콘 노드 */}
                  <div className="relative z-10 hidden md:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-glow ring-4 ring-white">
                      <Icon className="h-6 w-6" strokeWidth={2.4} />
                    </div>
                  </div>

                  {/* 텍스트 */}
                  <div
                    className={`order-1 ${
                      reversed ? "md:order-3 md:text-right" : "md:order-2"
                    }`}
                  >
                    <div className="step-badge mb-3 inline-flex">
                      <Icon className="h-3.5 w-3.5 md:hidden" />
                      {s.badge}
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-bold text-ink md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                      {s.detail}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 ${
                        reversed ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span>💡</span>
                      <span>{s.hint}</span>
                    </div>
                  </div>

                  {/* 스크린샷 */}
                  <div
                    className={`order-2 mx-auto ${
                      reversed ? "md:order-2" : "md:order-3"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6, rotate: reversed ? -2 : 2 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-[320px] w-[200px] overflow-hidden rounded-[28px] border-[6px] border-slate-900 bg-slate-900 shadow-glow md:h-[420px] md:w-[240px]"
                    >
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 200px, 240px"
                        className="object-cover"
                        unoptimized
                      />
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
