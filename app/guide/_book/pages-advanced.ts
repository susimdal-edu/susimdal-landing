// 수심달 APP 학생용 심화 가이드 — 동화책 페이지 데이터
// 4명의 앰버서더 학생 리뷰(강*리·금*윤·서*령·송*윤)에서 도출한 공통 가치를 매티 1인칭으로 재작성.
// 학생 원문은 직접 길게 인용하지 않고 익명/요약 위주. 짧은 따옴표 인용은 "한 선배" 형태.

import type { BookPage, Chapter } from "./pages";

const M = {
  default: { src: "/characters/matty-default.png", alt: "매티" },
  honor: { src: "/characters/matty-honor.png", alt: "모범생 매티" },
  laptop: { src: "/characters/matty-laptop.png", alt: "노트북하는 매티" },
  surprised: { src: "/characters/matty-surprised.png", alt: "놀란 매티" },
  wink: { src: "/characters/matty-wink.png", alt: "윙크하는 매티" },
  begging: { src: "/characters/matty-begging.png", alt: "간절한 매티" },
  traveler: { src: "/characters/matty-traveler.png", alt: "방랑자 매티" },
  fortune: { src: "/characters/matty-fortune.png", alt: "점술 매티" },
  hipster: { src: "/characters/matty-hipster.png", alt: "힙스터 매티" },
  drum: { src: "/characters/matty-drum.png", alt: "드럼치는 매티" },
};

export const CHAPTERS: Chapter[] = [
  { num: 1, title: "심화 가이드 시작", subtitle: "왜 이 가이드를 봐야 할까요?" },
  { num: 2, title: "가치 ① 연산 → 해석", subtitle: "선배들의 첫 번째 변화" },
  { num: 3, title: "가치 ② 보여주기 → 진짜", subtitle: "공부의 방향이 달라져요" },
  { num: 4, title: "심쿵 개념", subtitle: "나만의 의미를 발견하는 순간" },
  { num: 5, title: "색깔펜 첨삭", subtitle: "초록펜·노란펜의 역할" },
  { num: 6, title: "AI 매티 활용법", subtitle: "정답이 아닌 설계의 파트너" },
  { num: 7, title: "습관 신호등", subtitle: "내 시간을 색깔로 보여줘요" },
  { num: 8, title: "진짜 변화", subtitle: "점수보다 자신감" },
  { num: 9, title: "4가지 습관", subtitle: "선배들이 공통으로 키운 것" },
  { num: 10, title: "미래", subtitle: "수심달이 그려준 다음 발걸음" },
];

export const PAGES: BookPage[] = [
  // ─────────── Ch 1. 시작 ───────────
  {
    id: "1-1",
    chapter: 1,
    chapterTitle: "심화 가이드 시작",
    pageNumber: 1,
    layout: "cover",
    matty: M.honor,
    eyebrow: "Chapter 1",
    title: "수심달의 진짜 가치를 만나봐요",
    body:
      "기본 가이드가 ‘수심달을 어떻게 쓰는지’ 였다면,\n심화 가이드는 ‘수심달이 왜 학생을 바꾸는지’ 에 대한 이야기예요.\n네 명의 선배가 직접 겪은 변화를 모아 들려드릴게요.",
    callout: {
      kind: "info",
      text: "화면 오른쪽을 탭하거나 좌우로 슬라이드 / 키보드 → 키로 페이지를 넘겨주세요.",
    },
  },
  {
    id: "1-2",
    chapter: 1,
    chapterTitle: "심화 가이드 시작",
    pageNumber: 2,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "두 가이드의 차이",
    title: "기본은 ‘방법’, 심화는 ‘이유’",
    body:
      "기본 가이드를 보면 수심달을 능숙하게 다룰 수 있어요.\n하지만 ‘왜 이렇게 공부해야 할까?’ 라는 질문에는 답해주지 못해요.\n심화 가이드는 선배들의 경험으로 그 답을 드려요.",
  },
  {
    id: "1-3",
    chapter: 1,
    chapterTitle: "심화 가이드 시작",
    pageNumber: 3,
    layout: "cover",
    matty: M.default,
    eyebrow: "오늘의 화자들",
    title: "네 명의 선배가 함께 들려줄게요",
    body:
      "수심달을 1년 넘게 함께한 네 명의 앰버서더가\n자기 변화를 솔직하게 적어준 이야기를 모았어요.\n신기하게도 네 명의 핵심 메시지가 거의 똑같았어요.\n그게 바로 ‘수심달이 만드는 진짜 가치’예요.",
  },

  // ─────────── Ch 2. 연산 → 해석 ───────────
  {
    id: "2-1",
    chapter: 2,
    chapterTitle: "가치 ① 연산 → 해석",
    pageNumber: 1,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "Chapter 2",
    title: "‘연산하던 손’이 ‘해석하는 머리’로",
    body:
      "선배들이 가장 많이 말한 변화예요.\n네 명 모두 약속이라도 한 듯 같은 말을 했어요.\n‘답을 구하기 전에 문제부터 들여다보게 됐어요.’",
  },
  {
    id: "2-2",
    chapter: 2,
    chapterTitle: "가치 ① 연산 → 해석",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.surprised,
    eyebrow: "변화 전",
    title: "이전에는 어땠을까요",
    body:
      "수심달 만나기 전 선배들은\n문제를 보자마자 **곧바로 계산**부터 시작했어요.\n조건이 왜 주어졌는지 묻지 않고,\n눈으로 보고 ‘알겠다’ 싶으면 답만 적었죠.",
    callout: {
      kind: "warn",
      text: "한 선배의 말 — “문제 푸는 기계처럼 풀이 끝만 외워서 답을 썼어요.”",
    },
    screenshots: [
      {
        src: "/images/reviews/student-01-강x리/p03_img01_1600x1199.png",
        caption: "변화 전 — 풀이 과정 없이 답만",
      },
    ],
  },
  {
    id: "2-3",
    chapter: 2,
    chapterTitle: "가치 ① 연산 → 해석",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.honor,
    eyebrow: "변화 후",
    title: "지금은 어떻게 풀까요",
    body:
      "수심달과 함께한 뒤로는 문제 앞에서 **조건의 의미부터** 묻게 됐어요.\n‘이 조건이 왜 주어졌을까’, ‘무엇을 어떻게 이용해야 할까’\n계산을 하기 전에 머릿속에서 **설계**를 해요.",
    callout: {
      kind: "good",
      text: "조건을 정확히 캐치하면 문제는 이미 절반 풀린 거예요.",
    },
    screenshots: [
      {
        src: "/images/reviews/student-01-강x리/p03_img02_1600x1199.png",
        caption: "변화 후 — 조건의 의미부터 적기",
      },
    ],
  },
  {
    id: "2-4",
    chapter: 2,
    chapterTitle: "가치 ① 연산 → 해석",
    pageNumber: 4,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "매티의 한마디",
    title: "답이 아니라 구조부터 보세요",
    body:
      "수학 문제는 풀어야만 하는 ‘적’이 아니라\n해석해야 하는 ‘이야기’예요.\n구조를 먼저 읽으면 풀이는 자연스럽게 따라와요.",
  },

  // ─────────── Ch 3. 보여주기 → 진짜 ───────────
  {
    id: "3-1",
    chapter: 3,
    chapterTitle: "가치 ② 보여주기 → 진짜",
    pageNumber: 1,
    layout: "cover",
    matty: M.laptop,
    eyebrow: "Chapter 3",
    title: "보여주기 공부에서 진짜 공부로",
    body:
      "예쁜 노트, 빠른 진도, 깔끔한 정리.\n언뜻 잘 공부하는 것처럼 보이지만\n사실 자기에게는 남는 게 별로 없는 공부예요.\n선배들도 모두 이 함정에 빠진 적이 있었어요.",
  },
  {
    id: "3-2",
    chapter: 3,
    chapterTitle: "가치 ② 보여주기 → 진짜",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.surprised,
    eyebrow: "함정",
    title: "예쁜 개념노트의 함정",
    body:
      "선배들이 공통적으로 반성한 부분이에요.\n**‘이쁘게 정리하기’**, **‘꼼꼼하게 받아적기’** 를 목표로 삼았는데\n사실 그건 ‘이해’ 가 아니라 ‘기록’ 일 뿐이었어요.\n수심달은 그 차이를 명확히 짚어줘요.",
    screenshots: [
      { src: "/images/reviews/student-01-강x리/p02_img01_1600x2235.jpeg", caption: "선배의 개념노트" },
    ],
  },
  {
    id: "3-3",
    chapter: 3,
    chapterTitle: "가치 ② 보여주기 → 진짜",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.honor,
    eyebrow: "진짜 공부",
    title: "이해한 노트, 빠짐없이 쓴 풀이",
    body:
      "노트는 **나에게 설명하기 위해** 쓰는 거예요.\n예쁘지 않아도 좋고, 글씨가 흔들려도 괜찮아요.\n중요한 건 빠짐없이 쓰고, 다시 보면서 ‘아 그래서였구나’ 떠올릴 수 있는지.",
    callout: {
      kind: "info",
      text: "‘과정의 흔적’이 남는 노트가 가장 좋은 노트예요.",
    },
    screenshots: [
      {
        src: "/images/reviews/student-01-강x리/p01_img02_1600x2235.jpeg",
        caption: "풀이의 흔적이 남은 화면",
      },
    ],
  },
  {
    id: "3-4",
    chapter: 3,
    chapterTitle: "가치 ② 보여주기 → 진짜",
    pageNumber: 4,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "매티의 한마디",
    title: "노트는 ‘보여주는 것’이 아니에요",
    body:
      "노트는 미래의 나에게 보내는 편지예요.\n다시 펴봤을 때 ‘아 그래서였구나’ 떠올릴 수 있게,\n과정을 빠짐없이 적어두세요.",
  },

  // ─────────── Ch 4. 심쿵 개념 ───────────
  {
    id: "4-1",
    chapter: 4,
    chapterTitle: "심쿵 개념",
    pageNumber: 1,
    layout: "cover",
    matty: M.hipster,
    eyebrow: "Chapter 4",
    title: "한 단원이 인생을 바꿔요",
    body:
      "선배들에게 ‘심장이 뛴 순간’ 을 물었어요.\n네 명 모두 단원은 달랐지만, 공통점이 있었어요.\n그 순간 이후 **공부하는 태도가 완전히 달라졌다**는 점이에요.",
  },
  {
    id: "4-2",
    chapter: 4,
    chapterTitle: "심쿵 개념",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "사례 ①",
    title: "순열과 조합 — 설계의 발견",
    body:
      "한 선배는 **순열과 조합** 단원에서 자기 풀이를 돌아봤어요.\n‘어떻게 설계하느냐에 따라 1분이 될 수도, 1시간이 될 수도 있다’ 는 말씀에\n그동안의 비효율적인 풀이가 비로소 눈에 보이기 시작했대요.",
    screenshots: [
      {
        src: "/images/reviews/student-03-서x령/p02_img01_1600x1112.jpeg",
        caption: "선배의 학습 화면",
      },
    ],
  },
  {
    id: "4-3",
    chapter: 4,
    chapterTitle: "심쿵 개념",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.surprised,
    eyebrow: "사례 ②",
    title: "피타고라스 정리 — 17가지 증명",
    body:
      "또 다른 선배는 **피타고라스 정리를 17가지 방법으로** 증명했어요.\n‘외우지 않고도 떠오르는 공식’ 의 경험을 처음 했고,\n그 뒤로 모든 수학 개념을 ‘외우지 않고 증명해보자’ 는 자세로 대하게 됐어요.",
    screenshots: [
      {
        src: "/images/reviews/student-02-금x윤/p02_img02_1600x2256.jpeg",
        caption: "피타고라스 17증명 노트",
      },
    ],
  },
  {
    id: "4-4",
    chapter: 4,
    chapterTitle: "심쿵 개념",
    pageNumber: 4,
    layout: "shot-right",
    matty: M.honor,
    eyebrow: "사례 ③",
    title: "집합 — 조건을 정리하는 힘",
    body:
      "어떤 선배는 **집합**을 배우며 ‘수학이 진짜 재미있을 수 있구나’ 를 처음 느꼈대요.\n복잡해 보이던 문제도 조건을 분류하고 구조를 만드는 순간\n갑자기 풀리기 시작했다고요.",
    screenshots: [
      {
        src: "/images/reviews/student-04-송x윤/p01_img02_1600x1159.jpeg",
        caption: "집합 단원 학습 인증",
      },
    ],
  },
  {
    id: "4-5",
    chapter: 4,
    chapterTitle: "심쿵 개념",
    pageNumber: 5,
    layout: "cover",
    matty: M.wink,
    eyebrow: "매티의 한마디",
    title: "여러분의 심쿵 개념을 기대해요",
    body:
      "단원은 달라도 한 사람당 한 번은 와요.\n그 순간을 놓치지 마세요.\n‘아, 그래서 이거구나!’ 라고 느낀 단원은\n그날부터 내 공부의 방향을 바꿔주니까요.",
  },

  // ─────────── Ch 5. 색깔펜 첨삭 (NEW) ───────────
  {
    id: "5-1",
    chapter: 5,
    chapterTitle: "색깔펜 첨삭",
    pageNumber: 1,
    layout: "cover",
    matty: M.laptop,
    eyebrow: "Chapter 5",
    title: "색깔펜이 가르쳐주는 것",
    body:
      "수심달 학생들의 노트를 보면 두 가지 색깔펜이 자주 보여요.\n초록펜과 노란펜.\n단순한 색이 아니라 **공부의 단계**를 나누는 도구예요.",
  },
  {
    id: "5-2",
    chapter: 5,
    chapterTitle: "색깔펜 첨삭",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "🟢 초록펜",
    title: "스스로 고치는 단계",
    body:
      "어려운 문제는 한 번 틀렸다고 끝나지 않아요.\n**내가 왜 틀렸는지 스스로 생각해본 뒤** 나의 풀이를 다시 고쳐봐요.\n그게 바로 초록펜의 역할이에요.",
    callout: {
      kind: "good",
      text: "초록펜은 ‘내 머리로 다시 찾은 풀이’ 의 색이에요.",
    },
    screenshots: [
      { src: "/images/landing/pen-correct-01.webp", caption: "초록펜으로 다시 풀이" },
    ],
  },
  {
    id: "5-3",
    chapter: 5,
    chapterTitle: "색깔펜 첨삭",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.surprised,
    eyebrow: "🟡 노란펜",
    title: "해설과 비교 점검하는 단계",
    body:
      "노란펜은 해설을 보고 **나의 풀이를 점검하는 단계**예요.\n반드시 내 풀이가 해설과 어떤 부분이 다른지 비교하고\n그 차이를 고치지 않으면 성장할 수 없어요.",
    callout: {
      kind: "warn",
      text: "‘해설만 읽고 끝’ 은 노란펜이 아니에요. 차이를 노트에 직접 옮겨 적어야 해요.",
    },
    screenshots: [
      { src: "/images/landing/pen-correct-01.webp", caption: "노란펜으로 해설과 비교" },
    ],
  },
  {
    id: "5-4",
    chapter: 5,
    chapterTitle: "색깔펜 첨삭",
    pageNumber: 4,
    layout: "cover",
    matty: M.honor,
    eyebrow: "매티의 한마디",
    title: "두 색깔은 ‘성장의 흔적’이에요",
    body:
      "초록은 ‘스스로 고친 흔적’, 노란은 ‘해설과 다른 점’.\n이 두 가지가 노트에 차곡차곡 쌓이면\n어느새 같은 실수를 반복하지 않는 자기 자신을 만나게 돼요.",
  },

  // ─────────── Ch 6. AI 매티 ───────────
  {
    id: "6-1",
    chapter: 6,
    chapterTitle: "AI 매티 활용법",
    pageNumber: 1,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "Chapter 6",
    title: "AI 매티는 답이 아니라 설계의 파트너",
    body:
      "선배들이 가장 늦게 깨달은 것 중 하나예요.\n‘AI 매티는 답을 알려주는 기계가 아니라\n나와 같이 풀이를 짜는 친구다’ 라는 사실이요.",
  },
  {
    id: "6-2",
    chapter: 6,
    chapterTitle: "AI 매티 활용법",
    pageNumber: 2,
    layout: "cover",
    matty: M.begging,
    eyebrow: "잘못된 사용",
    title: "이런 질문은 피해주세요",
    body:
      "‘이거 어떻게 풀어요?’\n‘답이 뭐예요?’\n매티에게 이렇게 묻는 순간 매티는 답 기계로 전락해요.\n그리고 여러분도 ‘생각하지 않는 학생’ 이 돼요.",
  },
  {
    id: "6-3",
    chapter: 6,
    chapterTitle: "AI 매티 활용법",
    pageNumber: 3,
    layout: "shot-right",
    matty: M.honor,
    eyebrow: "좋은 사용",
    title: "이렇게 물어보세요",
    body:
      "‘이 조건은 왜 주어졌을까요?’\n‘제가 설계한 방향이 맞을까요?’\n‘이 두 방법 중 어느 게 효율적일까요?’\n**설계를 같이 짜는 질문**이 진짜 좋은 활용이에요.",
    screenshots: [{ src: "/images/red/23_학습지원_AI매티힌트.png" }],
  },
  {
    id: "6-4",
    chapter: 6,
    chapterTitle: "AI 매티 활용법",
    pageNumber: 4,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "매티의 한마디",
    title: "저를 답 기계로 쓰지 말고, 같이 생각해주세요",
    body:
      "여러분이 ‘어디까지 풀어봤는지’ 보여주면\n저는 그 다음 한 걸음을 같이 고민해드릴 수 있어요.\n저를 ‘답 자판기’ 가 아닌 ‘설계 파트너’ 로 써주세요.",
  },

  // ─────────── Ch 7. 습관 신호등 (NEW) ───────────
  {
    id: "7-1",
    chapter: 7,
    chapterTitle: "습관 신호등",
    pageNumber: 1,
    layout: "cover",
    matty: M.surprised,
    eyebrow: "Chapter 7",
    title: "내 시간을 색깔로 보여주는 신호등",
    body:
      "수심달에는 ‘습관 신호등’ 이라는 작은 도우미가 있어요.\n예상 소요 시간 대비 내가 지금 얼마나 쓰고 있는지\n**🟢 🟠 🔴 세 가지 색깔**로 알려줘요.",
  },
  {
    id: "7-2",
    chapter: 7,
    chapterTitle: "습관 신호등",
    pageNumber: 2,
    layout: "shots-2",
    matty: M.laptop,
    eyebrow: "어떻게 동작해요?",
    title: "예상 시간 대비 비율로 색이 바뀌어요",
    body:
      "🟢 예상 시간의 100% 안 — 잘 따라가고 있어요.\n🟠 101~300% — 살짝 늘어지는 중이에요.\n🔴 301% 이상 — 너무 오래 잡혀 있어요. 잠시 호흡을 가다듬어 봐요.",
    callout: {
      kind: "info",
      text: "학습 중에는 신호등이 실시간으로 바뀌고, 제출 풀이에는 최종 색깔이 남아요.",
    },
    screenshots: [
      { src: "/images/ios/습관_신호등_01.png", caption: "학습 진행 중 신호등" },
      { src: "/images/ios/습관_신호등_02.png", caption: "제출 풀이의 최종 신호등" },
    ],
  },
  {
    id: "7-3",
    chapter: 7,
    chapterTitle: "습관 신호등",
    pageNumber: 3,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "매티의 한마디",
    title: "신호등은 ‘재촉’이 아니라 ‘거울’이에요",
    body:
      "빨간색이 나왔다고 자책하지 마세요.\n오래 걸린 문제는 그만큼 깊이 고민한 문제예요.\n다만 그 패턴을 알아차리고, 다음에는 어떻게 접근할지\n스스로 점검할 수 있게 도와주는 거울일 뿐이에요.",
  },

  // ─────────── Ch 8. 진짜 변화 ───────────
  {
    id: "8-1",
    chapter: 8,
    chapterTitle: "진짜 변화",
    pageNumber: 1,
    layout: "cover",
    matty: M.drum,
    eyebrow: "Chapter 8",
    title: "점수보다 자신감",
    body:
      "선배들 모두 ‘점수가 올랐다’ 고 말했어요.\n어떤 친구는 기말 82점에서 96점으로,\n어떤 친구는 15분 만에 100점을 받기도 했고요.\n하지만 진짜 변화는 점수가 아니에요.",
  },
  {
    id: "8-2",
    chapter: 8,
    chapterTitle: "진짜 변화",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.honor,
    eyebrow: "더 큰 변화",
    title: "두려움 → 분석으로",
    body:
      "어려운 문제를 만났을 때\n예전에는 ‘몰라, 포기’ 였다면\n지금은 ‘일단 어떻게 설계할지 생각해보자’ 가 돼요.\n친구가 풀이를 물어보면 당황하기보다\n조건부터 정리해서 같이 보게 된대요.",
    callout: {
      kind: "good",
      text: "수심달의 목표는 점수가 아니라 사고력이에요.",
    },
    screenshots: [
      {
        src: "/images/reviews/student-04-송x윤/p01_img03_1600x1129.jpeg",
        caption: "선배의 학습 인증",
      },
    ],
  },
  {
    id: "8-3",
    chapter: 8,
    chapterTitle: "진짜 변화",
    pageNumber: 3,
    layout: "cover",
    matty: M.wink,
    eyebrow: "매티의 한마디",
    title: "여러분의 진짜 변화는 ‘태도’예요",
    body:
      "점수는 결과일 뿐이에요.\n진짜 자랑할 만한 건\n포기하지 않는 끈기,\n스스로 ‘제대로 하고 있어’ 라고 말할 수 있는 확신이에요.",
  },

  // ─────────── Ch 9. 4가지 습관 ───────────
  {
    id: "9-1",
    chapter: 9,
    chapterTitle: "4가지 습관",
    pageNumber: 1,
    layout: "cover",
    matty: M.hipster,
    eyebrow: "Chapter 9",
    title: "선배들이 공통으로 키운 4가지 습관",
    body:
      "네 명의 선배 모두 자기만의 학습 루틴을 가지고 있어요.\n그런데 그 안에 공통된 네 가지 습관이 있더라고요.\n이것만 익혀도 학습 효율이 완전히 달라져요.",
  },
  {
    id: "9-2",
    chapter: 9,
    chapterTitle: "4가지 습관",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "습관 ①",
    title: "학습 목표는 한 줄이 아니라 시간표로",
    body:
      "‘오늘 열심히 한다’ 같은 두루뭉술한 목표 대신\n시간 단위로 ‘몇 시 무엇을 한다’ 를 적어요.\n끝낸 것에 체크를 하면 성취감도 올라가고\n다음 목표를 어떻게 잡을지 감이 생겨요.",
    screenshots: [
      {
        src: "/images/reviews/student-03-서x령/p05_img01_804x1129.jpeg",
        caption: "선배의 학습 기록 노트",
      },
    ],
  },
  {
    id: "9-3",
    chapter: 9,
    chapterTitle: "4가지 습관",
    pageNumber: 3,
    layout: "cover",
    matty: M.begging,
    eyebrow: "습관 ②",
    title: "솔직하게 ‘모르겠어요’",
    body:
      "모른다는 사실을 인정하는 게 가장 어려워요.\n하지만 ‘모르겠어요’ 를 누르는 만큼\n매티가 여러분에게 필요한 콘텐츠를 더 잘 찾아줘요.\n**솔직함이 곧 학습량**이에요.",
  },
  {
    id: "9-4",
    chapter: 9,
    chapterTitle: "4가지 습관",
    pageNumber: 4,
    layout: "cover",
    matty: M.surprised,
    eyebrow: "습관 ③",
    title: "챌린지로 다시 풀어보기",
    body:
      "‘답 찾기’ 가 아니라 ‘식 쓰기’ 연습.\n한 번 푼 문제를 다시 푸는 건 외우는 게 아니라\n풀이의 ‘과정’을 내 것으로 만드는 일이에요.\n선배들도 챌린지 재도전을 가장 강력한 도구로 꼽았어요.",
  },
  {
    id: "9-5",
    chapter: 9,
    chapterTitle: "4가지 습관",
    pageNumber: 5,
    layout: "cover",
    matty: M.laptop,
    eyebrow: "습관 ④",
    title: "리셋 시간으로 자기 점검",
    body:
      "수업 중간 ‘리셋’ 시간을 그냥 흘려보내지 마세요.\n오늘 어떤 단원을 어떻게 풀었는지,\n어디서 막혔는지 잠깐 적어두는 것만으로\n학습 효율과 시간 관리가 확실히 좋아져요.",
  },

  // ─────────── Ch 10. 미래 ───────────
  {
    id: "10-1",
    chapter: 10,
    chapterTitle: "미래",
    pageNumber: 1,
    layout: "cover",
    matty: M.traveler,
    eyebrow: "Chapter 10",
    title: "수심달이 그려준 다음 발걸음",
    body:
      "네 명의 선배는 모두 다른 꿈을 그리고 있어요.\n자율형 사립고, 외국어고, 과학고, 약학과…\n수학은 그 꿈으로 가는 ‘사고력의 도구’ 가 되었어요.",
  },
  {
    id: "10-2",
    chapter: 10,
    chapterTitle: "미래",
    pageNumber: 2,
    layout: "cover",
    matty: M.fortune,
    eyebrow: "수학의 새로운 정의",
    title: "수학은 ‘점수 과목’ 이 아니에요",
    body:
      "수심달의 진짜 가르침은 단 하나예요.\n수학은 점수를 위한 과목이 아니라\n**사고력을 단단하게 만들어 주는 도구** 라는 것.\n그 도구로 여러분은 어디든 갈 수 있어요.",
  },
  {
    id: "10-3",
    chapter: 10,
    chapterTitle: "미래",
    pageNumber: 3,
    layout: "cover",
    matty: M.drum,
    eyebrow: "마무리 한마디",
    title: "여러분의 이야기는 이제 시작이에요",
    body:
      "심화 가이드의 모든 이야기는 선배들이 직접 겪은 변화에서 나왔어요.\n여러분도 곧 자기만의 ‘심쿵 개념’, 자기만의 ‘진짜 변화’ 를 만나게 될 거예요.\n그 순간을 저와 함께 만들어요.\n\n— 모범생 매티 드림",
  },
];
