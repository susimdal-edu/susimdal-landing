import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

type CardSpec = {
  href: string | null;
  character: string;
  characterAlt: string;
  badge: string;
  badgeKind: "coral" | "muted";
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
    badgeKind: "coral",
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
    badge: "준비중",
    badgeKind: "muted",
    title: "수심달 학생용 심화가이드",
    subtitle: "한 단계 더 깊이, 곧 만나요",
    description:
      "심화 학습 노하우와 챌린지 활용법, 학습 플래너의 더 깊은 사용법을 매티가 정성껏 준비하고 있어요.",
    cta: "곧 만나요",
    disabled: true,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-page">
      {/* 헤더 */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <div className="flex items-baseline gap-2">
          <span className="text-title-m font-bold text-coral-strong">수심달</span>
          <span className="hidden text-caption text-ink-50 sm:inline">
            수학에 심장을 달다
          </span>
        </div>
        <a
          href="mailto:contact@susimdal.com"
          className="text-caption font-semibold text-ink-70 hover:text-coral-strong"
        >
          문의하기
        </a>
      </header>

      {/* 본문 */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 pb-16 md:px-10">
        <div className="mb-10 text-center md:mb-14">
          <div className="chip-coral mb-4 inline-flex">학생용 가이드</div>
          <h1 className="mb-3 text-display font-bold text-ink-90 md:text-[40px]">
            어떤 가이드를 볼까요?
          </h1>
          <p className="text-body-l text-ink-70">
            처음 사용하는 학생이라면 기본 가이드부터 시작해보세요.
          </p>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {CARDS.map((c) => (
            <GuideCard key={c.title} card={c} />
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-border-soft bg-card/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-1 px-6 py-5 text-caption text-ink-50 md:flex-row md:px-10">
          <span>© 2026 수심달. All rights reserved.</span>
          <span>contact@susimdal.com</span>
        </div>
      </footer>
    </main>
  );
}

function GuideCard({ card }: { card: CardSpec }) {
  const inner = (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border bg-card shadow-card transition-all ${
        card.disabled
          ? "border-border-soft opacity-90"
          : "border-border-soft hover:-translate-y-1 hover:border-coral hover:shadow-elevated"
      }`}
    >
      {/* 캐릭터 영역 */}
      <div
        className={`relative flex items-center justify-center px-6 pt-7 pb-3 ${
          card.disabled ? "bg-subtle" : "bg-coral-soft/40"
        }`}
        style={{ minHeight: "min(34vh, 280px)" }}
      >
        {/* 배지 */}
        <span
          className={`absolute left-5 top-5 ${
            card.badgeKind === "coral" ? "chip-coral" : "chip"
          }`}
        >
          {card.badgeKind === "muted" && <Clock className="h-3 w-3" />}
          {card.badge}
        </span>

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
        <p className="mt-1 text-caption font-semibold text-coral-strong">
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
            <span className="btn-primary">
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
    <Link href={card.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-page rounded-card">
      {inner}
    </Link>
  );
}
