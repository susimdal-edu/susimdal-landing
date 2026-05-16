import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

type AccentKey = "coral" | "violet";

type AccentTheme = {
  charBg: string;        // 캐릭터 영역 배경
  chip: string;          // 배지
  border: string;        // hover 시 카드 테두리
  subtitle: string;      // subtitle 텍스트 색
  button: string;        // 메인 CTA 버튼
  focusRing: string;     // 키보드 포커스 링
};

const ACCENTS: Record<AccentKey, AccentTheme> = {
  coral: {
    charBg: "bg-coral-soft/40",
    chip: "chip-coral",
    border: "hover:border-coral",
    subtitle: "text-coral-strong",
    button: "btn-primary",
    focusRing: "focus-visible:ring-coral",
  },
  violet: {
    charBg: "bg-violet-soft/40",
    chip: "chip-violet",
    border: "hover:border-violet",
    subtitle: "text-violet-strong",
    button: "btn-primary-violet",
    focusRing: "focus-visible:ring-violet",
  },
};

type CardSpec = {
  href: string | null;
  character: string;
  characterAlt: string;
  badge: string;
  accent: AccentKey;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  disabled: boolean;
};

const CARDS: CardSpec[] = [
  {
    href: "/guide",
    character: "/characters/matty-honor.png",
    characterAlt: "모범생 매티",
    badge: "기본",
    accent: "coral",
    title: "수심달 학생용 기본가이드",
    subtitle: "처음 시작하는 학생을 위한 매티의 한 페이지씩",
    description:
      "설치부터 챌린지까지, 매티가 8개 챕터·40 페이지에 걸쳐 한 장씩 넘기며 친절하게 안내해요.",
    cta: "시작하기",
    disabled: false,
  },
  {
    href: null,
    character: "/characters/matty-fortune.png",
    characterAlt: "점술 매티",
    badge: "심화",
    accent: "violet",
    title: "수심달 학생용 심화가이드",
    subtitle: "선배들이 들려주는 수심달의 진짜 가치",
    description:
      "네 명의 앰버서더 선배가 직접 겪은 변화와 학습 노하우. 색깔펜 첨삭부터 습관 신호등까지 매티가 함께 안내해요.",
    cta: "준비중",
    disabled: true,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-6 py-12 md:px-10">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {CARDS.map((c) => (
          <GuideCard key={c.title} card={c} />
        ))}
      </div>
    </main>
  );
}

function GuideCard({ card }: { card: CardSpec }) {
  const t = ACCENTS[card.accent];
  const inner = (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border bg-card shadow-card transition-all ${
        card.disabled
          ? "border-border-soft opacity-90"
          : `border-border-soft hover:-translate-y-1 ${t.border} hover:shadow-elevated`
      }`}
    >
      {/* 캐릭터 영역 */}
      <div
        className={`relative flex items-center justify-center px-6 pb-3 pt-7 ${
          card.disabled ? "bg-subtle" : t.charBg
        }`}
        style={{ minHeight: "min(34vh, 280px)" }}
      >
        {/* 배지 */}
        <span className={`absolute left-5 top-5 ${t.chip}`}>{card.badge}</span>

        <div
          className={`relative char-shadow transition-transform duration-500 ${
            card.disabled ? "" : "group-hover:-rotate-2 group-hover:scale-105"
          }`}
          style={{ width: "min(220px, 28vh)", height: "min(220px, 28vh)" }}
        >
          <Image
            src={card.character}
            alt={card.characterAlt}
            fill
            sizes="220px"
            className={`object-contain ${card.disabled ? "grayscale-[40%]" : ""}`}
            unoptimized
            priority
          />
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col px-6 py-6 md:px-7 md:py-7">
        <h2 className="text-title-m text-ink-90">{card.title}</h2>
        <p className={`mt-1 text-caption font-semibold ${t.subtitle}`}>
          {card.subtitle}
        </p>
        <p className="mt-3 text-body leading-relaxed text-ink-70">
          {card.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          {card.disabled ? (
            <span className="btn-secondary cursor-not-allowed opacity-60">
              <Clock className="h-4 w-4" />
              {card.cta}
            </span>
          ) : (
            <span className={t.button}>
              {card.cta}
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (card.disabled || !card.href) {
    return <div aria-disabled="true">{inner}</div>;
  }

  return (
    <Link
      href={card.href}
      className={`block rounded-card focus:outline-none focus-visible:ring-2 ${t.focusRing} focus-visible:ring-offset-2 focus-visible:ring-offset-page`}
    >
      {inner}
    </Link>
  );
}
