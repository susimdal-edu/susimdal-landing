export type Chapter = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  accent: string;
  emoji: string;
};

export const CHAPTERS: Chapter[] = [
  {
    id: "ch-start",
    number: "01",
    title: "첫 시작",
    subtitle: "설치 · 회원가입 · 학원 등록",
    accent: "from-indigo-500 to-violet-500",
    emoji: "🚀",
  },
  {
    id: "ch-home",
    number: "02",
    title: "메인 화면",
    subtitle: "튼튼개념 · 학습하기 · 복습하기",
    accent: "from-violet-500 to-fuchsia-500",
    emoji: "🏠",
  },
  {
    id: "ch-sidebar",
    number: "03",
    title: "사이드바",
    subtitle: "모든 메뉴 한눈에 보기",
    accent: "from-fuchsia-500 to-rose-500",
    emoji: "📂",
  },
  {
    id: "ch-step1",
    number: "04",
    title: "튼튼 개념 쌓기",
    subtitle: "학습 전 6단계 진단 루트",
    accent: "from-rose-500 to-orange-500",
    emoji: "🧱",
  },
  {
    id: "ch-step2",
    number: "05",
    title: "학습하기 18단계",
    subtitle: "스트레칭부터 심화 3step까지",
    accent: "from-orange-500 to-amber-500",
    emoji: "📚",
  },
  {
    id: "ch-help",
    number: "06",
    title: "도움 받기",
    subtitle: "AI 매티 · 개념상자 · 질문",
    accent: "from-amber-500 to-emerald-500",
    emoji: "🆘",
  },
  {
    id: "ch-profile",
    number: "07",
    title: "나의 학습",
    subtitle: "프로필과 리포트 보는 법",
    accent: "from-emerald-500 to-sky-500",
    emoji: "📊",
  },
  {
    id: "ch-challenge",
    number: "08",
    title: "챌린지",
    subtitle: "다시 풀어보는 강력한 도구",
    accent: "from-sky-500 to-indigo-500",
    emoji: "🏆",
  },
];
