// 수심달 APP 학생용 가이드 — 동화책 페이지 데이터
// 톤: 매티가 학생에게 직접 말하듯, 다정하고 명료. '여러분' 호칭. 이모지는 절제.

export type Callout = {
  kind: "info" | "tip" | "warn" | "gold" | "good";
  text: string;
};

export type ScreenshotItem = {
  src: string;
  caption?: string;
};

export type ListItem = {
  label: string;
  desc: string;
};

export type BookPage = {
  id: string;
  chapter: number;
  chapterTitle: string;
  pageNumber: number; // 챕터 내 페이지 번호
  layout: "cover" | "shot-right" | "shot-left" | "shot-big" | "shots-2" | "list" | "narration" | "stages" | "ending";
  matty: { src: string; alt: string };
  eyebrow?: string;
  title?: string;
  body: string; // 줄바꿈은 \n
  callout?: Callout;
  screenshots?: ScreenshotItem[];
  items?: ListItem[];
  /** 학습 단계 그룹용 */
  stages?: { name: string; tip: string; shots: string[] }[];
  /** 태블릿 목업 화면 배경을 흰색으로 — 앱스토어 같이 원본 이미지 배경이 흰색일 때 사용 */
  whiteFrame?: boolean;
};

const M = {
  default: { src: "/characters/matty-default.png", alt: "매티" },
  honor: { src: "/characters/matty-honor.png", alt: "모범생 매티" },
  laptop: { src: "/characters/matty-laptop.png", alt: "노트북하는 매티" },
  surprised: { src: "/characters/matty-surprised.png", alt: "놀란 매티" },
  wink: { src: "/characters/matty-wink.png", alt: "윙크하는 매티" },
  sad: { src: "/characters/matty-sad.png", alt: "슬픈 매티" },
  begging: { src: "/characters/matty-begging.png", alt: "간절한 매티" },
  traveler: { src: "/characters/matty-traveler.png", alt: "방랑자 매티" },
  fortune: { src: "/characters/matty-fortune.png", alt: "점술 매티" },
  hipster: { src: "/characters/matty-hipster.png", alt: "힙스터 매티" },
  drum: { src: "/characters/matty-drum.png", alt: "드럼치는 매티" },
  sleepy: { src: "/characters/matty-sleepy.png", alt: "졸린 매티" },
};

export const CHAPTERS = [
  { num: 1, title: "첫 만남", subtitle: "설치부터 학원 등록까지" },
  { num: 2, title: "메인 화면", subtitle: "오늘 무엇을 할까요" },
  { num: 3, title: "사이드바", subtitle: "메뉴 한눈에 보기" },
  { num: 4, title: "튼튼 개념 쌓기", subtitle: "공부 전 진단 루트" },
  { num: 5, title: "학습하기", subtitle: "5가지 모드로 차근차근" },
  { num: 6, title: "도움이 필요할 때", subtitle: "혼자 끙끙대지 마세요" },
  { num: 7, title: "나의 학습", subtitle: "성장이 보이는 페이지" },
  { num: 8, title: "챌린지", subtitle: "다시 풀어볼 시간" },
] as const;

export const PAGES: BookPage[] = [
  // ─────────── Ch 1 ───────────
  {
    id: "1-1",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 1,
    layout: "cover",
    matty: M.honor,
    eyebrow: "Chapter 1",
    title: "안녕하세요, 매티예요",
    body:
      "여러분의 학습 파트너, 모범생 매티예요.\n수심달 APP은 정답을 맞히는 곳이 아니라,\n스스로 생각하는 힘과 올바른 공부 습관을 길러주는 공간이에요.\n처음이라 조금 낯설겠지만, 저만 믿고 따라오세요.",
    callout: {
      kind: "info",
      text: "화면 오른쪽을 탭하거나 좌우로 슬라이드 / 키보드 → 키로 페이지를 넘겨주세요.",
    },
  },
  {
    id: "1-2",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.default,
    eyebrow: "STEP 1",
    title: "앱 설치하기",
    body:
      "태블릿 스토어에서 ‘수심달’을 검색해 **‘수심달 APP’**을 설치해주세요.\n전용 펜슬이 있으면 학습이 훨씬 자연스러워요.",
    callout: {
      kind: "tip",
      text: "권장 기기: 갤럭시탭 S6 Lite 이후 모델 + 정품 펜슬 / 아이패드 9 이후 + 호환 펜슬 (정품 펜슬 가능)",
    },
    screenshots: [{ src: "/images/red/02_앱스토어_설치_화면.png", caption: "앱스토어에서 ‘수심달’ 검색" }],
    whiteFrame: true,
  },
  {
    id: "1-3",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.surprised,
    eyebrow: "STEP 2",
    title: "앱을 실행해볼까요",
    body:
      "설치가 끝났다면 앱을 한 번 실행해주세요.\n첫 화면에서 매티가 여러분을 반갑게 맞이할 거예요.",
    screenshots: [{ src: "/images/red/03_앱_실행_화면.png" }],
  },
  {
    id: "1-4",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 4,
    layout: "shot-right",
    matty: M.laptop,
    eyebrow: "STEP 3",
    title: "회원가입",
    body:
      "안내에 따라 회원가입을 완료해주세요.\n가입이 끝나면 다시 로그인해서 다음 단계로 넘어가요.",
    callout: { kind: "info", text: "이름과 학교 정보는 정확히 입력해주세요." },
    screenshots: [{ src: "/images/red/04_회원가입_화면.png" }],
  },
  {
    id: "1-5",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 5,
    layout: "shot-left",
    matty: M.traveler,
    eyebrow: "STEP 4",
    title: "학원 등록 신청 — 첫 단계",
    body:
      "처음 로그인을 하면 ‘학원’에 등록해야 모든 기능을 쓸 수 있어요.\n등록 화면으로 함께 이동해봐요.",
    screenshots: [{ src: "/images/red/05_학원등록신청_1.png" }],
  },
  {
    id: "1-6",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 6,
    layout: "shot-right",
    matty: M.begging,
    eyebrow: "STEP 5",
    title: "‘수심달 클래스’ 신청",
    body:
      "**‘수심달 클래스’** 학원에 가입 신청을 해주세요.\n신청이 끝나면 ‘수심달’ 카톡 채널로 한 번만 알려주면 돼요.",
    callout: {
      kind: "warn",
      text: "‘수심달 클래스’는 띄어쓰기 필수! 한 글자라도 빠지면 검색이 안 돼요.",
    },
    screenshots: [{ src: "/images/red/06_학원등록신청_2.png" }],
  },
  {
    id: "1-7",
    chapter: 1,
    chapterTitle: "첫 만남",
    pageNumber: 7,
    layout: "shot-left",
    matty: M.drum,
    eyebrow: "STEP 6",
    title: "등록 완료!",
    body:
      "다시 로그인하면 이제 수심달 APP의 모든 기능을 자유롭게 쓸 수 있어요.\n여러분의 학습 여정이 본격적으로 시작돼요.",
    callout: { kind: "good", text: "준비 끝! 첫 챕터 클리어예요." },
    screenshots: [{ src: "/images/red/07_등록완료_화면.png" }],
  },

  // ─────────── Ch 2 ───────────
  {
    id: "2-1",
    chapter: 2,
    chapterTitle: "메인 화면",
    pageNumber: 1,
    layout: "cover",
    matty: M.default,
    eyebrow: "Chapter 2",
    title: "메인 화면을 둘러봐요",
    body:
      "로그인하면 가장 먼저 보이는 메인 화면.\n핵심 메뉴 3가지만 알면 오늘 무엇을 해야 할지 한눈에 보여요.",
  },
  {
    id: "2-2",
    chapter: 2,
    chapterTitle: "메인 화면",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.honor,
    eyebrow: "메뉴 1",
    title: "튼튼 개념 쌓기",
    body:
      "새로운 단원에 들어가기 전, 내가 그 개념을 얼마나 알고 있는지 점검해요.\n부족한 부분은 영상·웹툰으로 보충하고 다시 풀면서 개념을 단단하게 만들어요.",
    callout: {
      kind: "gold",
      text: "정답률 90% 이상이면 합격! 이제 ‘학습하기’로 출발해요.",
    },
    screenshots: [{ src: "/images/red/08_메인_튼튼개념쌓기.png" }],
  },
  {
    id: "2-3",
    chapter: 2,
    chapterTitle: "메인 화면",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.laptop,
    eyebrow: "메뉴 2",
    title: "학습하기",
    body:
      "새로운 내용을 본격적으로 공부하는 가장 기본 메뉴예요.\n‘튼튼 개념 쌓기’에서 준비한 내용을 여기서 진도로 이어 나가요.",
    screenshots: [{ src: "/images/red/09_메인_학습하기.png" }],
  },
  {
    id: "2-4",
    chapter: 2,
    chapterTitle: "메인 화면",
    pageNumber: 4,
    layout: "shot-right",
    matty: M.wink,
    eyebrow: "메뉴 3",
    title: "복습하기",
    body:
      "학습하기에서 틀린 문제들이 자동으로 모이는 오답 노트예요.\n다시 풀어보면서 약점을 완전히 내 것으로 만들어요.",
    screenshots: [{ src: "/images/red/10_메인_복습하기.png" }],
  },

  // ─────────── Ch 3 ───────────
  {
    id: "3-1",
    chapter: 3,
    chapterTitle: "사이드바",
    pageNumber: 1,
    layout: "list",
    matty: M.fortune,
    eyebrow: "Chapter 3",
    title: "사이드바 — 메뉴 한눈에",
    body:
      "왼쪽 위 버튼을 누르면 사이드바가 열려요.\n자주 쓰는 메뉴를 한 곳에서 빠르게 이동할 수 있어요.",
    screenshots: [{ src: "/images/red/11_사이드바_전체메뉴.png" }],
    items: [
      { label: "프로필 설정", desc: "프로필 옆 톱니바퀴로 개인정보 수정. 멘토 탭에서 다른 학생의 리포트도 참고 가능." },
      { label: "보유 포인트", desc: "문제 풀이와 퀘스트로 모은 포인트를 확인하는 곳이에요." },
      { label: "Home", desc: "메인 화면으로 돌아오기. 튼튼개념·학습하기·복습하기로 빠르게 이동." },
      { label: "학습 프로필", desc: "레벨, 정답률, 순공 시간, 성취도 등 누적 학습 요약. 모든 리포트도 여기서 모아볼 수 있어요." },
      { label: "챌린지업", desc: "내가 만든 챌린지에 도전하는 공간이에요." },
      { label: "질문 게시판", desc: "AI 매티나 개념 상자로 해결이 어려울 때 친구들과 묻고 답하는 곳." },
      { label: "SKIP 관리", desc: "학습하기에서 건너뛴 문제들이 모이는 곳. 쉬워서/어려워서 넘긴 문제를 다시 골라 풀 수 있어요." },
    ],
  },

  // ─────────── Ch 4 ───────────
  {
    id: "4-1",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 1,
    layout: "cover",
    matty: M.honor,
    eyebrow: "Chapter 4",
    title: "공부 전, 진단부터 해요",
    body:
      "본격적인 학습 전에 ‘튼튼 개념 쌓기’로 내 수준을 점검해요.\n부족한 부분은 영상·웹툰·추천 콘텐츠로 채우고,\n정답률 90%를 넘으면 학습하기로 출발이에요.",
    callout: { kind: "gold", text: "통과 기준이 80% → 90%로 강화됐어요. 더 탄탄해진 게이트예요." },
  },
  {
    id: "4-2",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 2,
    layout: "shots-2",
    matty: M.traveler,
    eyebrow: "STEP 1",
    title: "튼튼 개념 쌓기 진입",
    body:
      "메인 화면에서 ‘튼튼 개념 쌓기’를 눌러 들어가요.\n다른 단원이 궁금하면 ‘다른 개념 살펴보기’도 눌러볼 수 있어요.",
    screenshots: [
      { src: "/images/red/13_튼튼개념_진입화면.png", caption: "진입 화면" },
      { src: "/images/red/14_튼튼개념_다른개념.png", caption: "다른 개념 살펴보기" },
    ],
  },
  {
    id: "4-3",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 3,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "STEP 2",
    title: "학습 전 체크 시작",
    body:
      "본격 학습 전, 내가 어떤 부분을 모르는지 ‘진단’하는 단계예요.\n아직 배우기 전이니까 못 푸는 게 당연해요. 부담 갖지 말아요.",
    screenshots: [{ src: "/images/red/15_튼튼개념_시작하기.png" }],
  },
  {
    id: "4-4",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 4,
    layout: "shot-left",
    matty: M.begging,
    eyebrow: "STEP 3",
    title: "솔직하게 ‘모르겠어요’",
    body:
      "모르는 문제는 모두 솔직하게 **‘모르겠어요’**를 눌러요.\n다양한 유형을 미리 보면서 풀 수 있는 문제만 도전해도 충분해요.",
    callout: {
      kind: "info",
      text: "솔직하게 누른 만큼 매티가 여러분에게 필요한 콘텐츠를 더 잘 추천해줘요.",
    },
    screenshots: [{ src: "/images/red/16_튼튼개념_모르겠어요.png" }],
  },
  {
    id: "4-5",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 5,
    layout: "shots-2",
    matty: M.laptop,
    eyebrow: "STEP 4",
    title: "영상 · 웹툰으로 개념 학습",
    body:
      "정답률 90%를 넘지 못했다면, 영상과 웹툰으로 부족한 개념을 채워요.\n보고 → 다시 체크 → 합격까지 반복하면 돼요.",
    screenshots: [
      { src: "/images/red/17_튼튼개념_본격학습1.png", caption: "학습 시작 안내" },
      { src: "/images/red/18_튼튼개념_본격학습2.png", caption: "영상·웹툰 학습" },
    ],
  },
  {
    id: "4-6",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 6,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "STEP 5",
    title: "‘추천 콘텐츠’로 보강",
    body:
      "그래도 부족한 부분이 있다면, 리포트의 **‘추천 콘텐츠’**가 약한 개념을 짚어줘요.\n해당 콘텐츠를 다 보고 다시 한 번 도전해봐요.",
    screenshots: [{ src: "/images/red/19_튼튼개념_추천콘텐츠.png" }],
  },
  {
    id: "4-7",
    chapter: 4,
    chapterTitle: "튼튼 개념 쌓기",
    pageNumber: 7,
    layout: "shot-left",
    matty: M.drum,
    eyebrow: "STEP 6",
    title: "짝짝짝! 합격!",
    body:
      "정답률 **90% 돌파**, 진단 통과!\n이제 ‘학습하기’에서 실전 문제를 풀 준비가 끝났어요.",
    callout: { kind: "good", text: "틀린 문제의 개념까지 한 번씩 확인하고 학습하기로 출발해요." },
    screenshots: [{ src: "/images/red/20_튼튼개념_합격화면.png" }],
  },

  // ─────────── Ch 5 ───────────
  {
    id: "5-1",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 1,
    layout: "cover",
    matty: M.hipster,
    eyebrow: "Chapter 5",
    title: "5가지 모드로 배우는 단계별 학습!",
    body:
      "수심달 APP의 학습하기는 다섯 가지 모드로 짜여 있어요.\n개념 → 확인 → 해석 → 심화 → 극심화, 한 모드씩 차근차근 정복해봐요.",
  },
  {
    id: "5-2",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "학습 시작 전",
    title: "오늘의 목표 정하기 — 퀘스트 설정",
    body:
      "본격 학습 전, AI 매티가 준 미션과 내가 직접 설정한 미션으로 오늘의 목표를 정해요.\n목표가 명확하면 집중력이 달라져요. 난이도가 높을수록 보상도 커요.",
    screenshots: [{ src: "/images/red/21_학습하기_퀘스트설정.png" }],
  },
  {
    id: "5-3",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 3,
    layout: "stages",
    matty: M.honor,
    eyebrow: "모드 ① 개념",
    title: "차근차근 다지는 개념 7단계",
    body:
      "한 단원의 개념을 일곱 단계로 꼼꼼하게 익히는 모드예요.\n빈칸 채우기로 시작해서 활용·점검·마무리까지 — 가장 기본이 되는 흐름이에요.",
    stages: [
      {
        name: "개념 정리하기",
        tip: "빈칸 채우기로 개념을 떠올려요.",
        shots: ["/images/ios/개념_정리하기_01.png"],
      },
      {
        name: "개념 연습하기",
        tip: "직접 계산하며 손에 익혀요. 스스로 정직하게 채점.",
        shots: ["/images/ios/개념_연습하기_01.png"],
      },
      {
        name: "개념 다지기",
        tip: "기본 문제로 풀이 과정을 의식하며 풀어요.",
        shots: ["/images/ios/개념_다지기_01.png"],
      },
      {
        name: "개념 테스트",
        tip: "O/X와 객관식을 한 번에 풀고 마지막에 채점.",
        shots: ["/images/ios/개념_테스트_01.png"],
      },
      {
        name: "개념 활용하기",
        tip: "실제 문제에 배운 개념을 적용해봐요.",
        shots: ["/images/ios/개념_활용하기_01.png"],
      },
      {
        name: "개념 점검하기",
        tip: "내가 어떤 개념을 썼는지 직접 골라봐요.",
        shots: ["/images/ios/개념_점검하기_01.png"],
      },
      {
        name: "개념 마무리",
        tip: "이번 단원의 개념을 깔끔하게 정리.",
        shots: ["/images/ios/개념_마무리_01.png"],
      },
    ],
  },
  {
    id: "5-4",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 4,
    layout: "stages",
    matty: M.laptop,
    eyebrow: "모드 ② 확인",
    title: "약점을 짚어내는 확인 3단계",
    body:
      "무엇을 알고 무엇을 모르는지 정확히 짚어내는 모드예요.\n약한 개념과 유형을 콕 집어서 다시 단단히 만들어요.",
    stages: [
      {
        name: "개념별 훈련하기",
        tip: "약한 개념만 골라 집중 훈련.",
        shots: ["/images/ios/개념별_훈련하기_01.png"],
      },
      {
        name: "유형별 훈련하기",
        tip: "유형별 약점을 빠르게 진단하고 비슷한 문제로 반복.",
        shots: ["/images/ios/개념별_훈련하기_07.png"],
      },
      {
        name: "중단원 마무리 1step",
        tip: "중단원의 개념들이 잘 연결됐는지 기본 점검.",
        shots: ["/images/ios/중단원_마무리_1step_01.png"],
      },
    ],
  },
  {
    id: "5-5",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 5,
    layout: "stages",
    matty: M.fortune,
    eyebrow: "모드 ③ 해석",
    title: "문제를 분해해서 풀어내는 해석",
    body:
      "바로 풀지 않고 문제의 구조부터 뜯어보는 모드예요.\n어떤 개념이 필요한지 차근차근 분석하면서 사고력을 길러요.",
    stages: [
      {
        name: "문제 해석하기",
        tip: "문제를 구조화하는 훈련. 어떤 개념이 필요한지 분석.",
        shots: ["/images/ios/문제_해석하기_01.png"],
      },
      {
        name: "중단원 마무리 2step",
        tip: "더 어려운 문제로 진짜 실력 시험.",
        shots: ["/images/ios/중단원_마무리_2step_01.png"],
      },
    ],
  },
  {
    id: "5-6",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 6,
    layout: "stages",
    matty: M.surprised,
    eyebrow: "모드 ④ 심화",
    title: "기본의 정점, 심화 1step",
    body:
      "기본 개념이지만 난이도가 높은 문제를 만나는 모드예요.\n익숙해진 개념을 비틀어 적용하는 연습 — 머리를 좀 써야 해요.",
    stages: [
      {
        name: "심화 1step",
        tip: "기본 개념의 난이도 높은 문제. 한 번 더 생각하게 만들어요.",
        shots: ["/images/ios/심화_1step_01.png"],
      },
    ],
  },
  {
    id: "5-7",
    chapter: 5,
    chapterTitle: "학습하기",
    pageNumber: 7,
    layout: "stages",
    matty: M.honor,
    eyebrow: "모드 ⑤ 극심화",
    title: "최강 난이도, 극심화로!",
    body:
      "확장 개념과 특별한 풀이법이 필요한 진짜 실력자의 모드예요.\n지금까지 배운 모든 걸 총동원해서 도전해봐요.",
    stages: [
      {
        name: "심화 2step",
        tip: "확장 개념·특별한 풀이법이 필요한 문제.",
        shots: ["/images/ios/심화_2step_01.png"],
      },
      {
        name: "심화 3step",
        tip: "지금까지 배운 모든 개념 총동원. 최강 난이도.",
        shots: ["/images/ios/심화_3step_01.png"],
      },
    ],
  },

  // ─────────── Ch 6 ───────────
  {
    id: "6-1",
    chapter: 6,
    chapterTitle: "도움이 필요할 때",
    pageNumber: 1,
    layout: "cover",
    matty: M.begging,
    eyebrow: "Chapter 6",
    title: "혼자 끙끙대지 마세요",
    body:
      "막힐 땐 언제든 도움을 요청할 수 있어요.\nAI 매티, 개념 상자, 질문 게시판 — 세 가지 든든한 지원군이 함께해요.",
  },
  {
    id: "6-2",
    chapter: 6,
    chapterTitle: "도움이 필요할 때",
    pageNumber: 2,
    layout: "shots-2",
    matty: M.fortune,
    eyebrow: "도움 ①",
    title: "AI 매티 — 정답 대신 힌트",
    body:
      "정답을 바로 알려주지 않아요.\n대신 “이 조건을 먼저 사용해볼까요?”처럼 스스로 답을 찾도록 힌트를 줘요.",
    callout: {
      kind: "warn",
      text: "진단고사·학습 전 체크·테스트 등 AI의 도움 없이 풀어야 하는 단계에서는 사용할 수 없어요.",
    },
    screenshots: [
      { src: "/images/red/22_학습지원_AI매티.png", caption: "AI 매티 호출" },
      { src: "/images/red/23_학습지원_AI매티힌트.png", caption: "단계적 힌트" },
    ],
  },
  {
    id: "6-3",
    chapter: 6,
    chapterTitle: "도움이 필요할 때",
    pageNumber: 3,
    layout: "shots-2",
    matty: M.surprised,
    eyebrow: "도움 ②",
    title: "개념 상자 — 원할 때 바로",
    body:
      "문제 화면 오른쪽 위 **[<]** 버튼을 누르면, 문제와 관련된 개념 영상·웹툰이 바로 열려요.\n비밀 상자처럼 자유롭게 열고 닫을 수 있어요.",
    screenshots: [
      { src: "/images/red/24_학습지원_개념상자열기.png", caption: "개념 상자 열기" },
      { src: "/images/red/25_학습지원_개념상자내용.png", caption: "내용 보기" },
    ],
  },
  {
    id: "6-4",
    chapter: 6,
    chapterTitle: "도움이 필요할 때",
    pageNumber: 4,
    layout: "shot-right",
    matty: M.wink,
    eyebrow: "도움 ③",
    title: "질문 게시판 — 친구들과 함께",
    body:
      "AI 매티·개념 상자로도 안 풀릴 땐 같은 학원 친구들과 묻고 답하는 공간을 이용해요.\n다른 친구의 질문에 답해주다 보면 내 개념도 한 번 더 단단해져요.",
    screenshots: [{ src: "/images/red/26_학습지원_질문게시판.png" }],
  },

  // ─────────── Ch 7 ───────────
  {
    id: "7-1",
    chapter: 7,
    chapterTitle: "나의 학습",
    pageNumber: 1,
    layout: "cover",
    matty: M.honor,
    eyebrow: "Chapter 7",
    title: "성장이 보이는 페이지",
    body:
      "지금까지 얼마나 학습했는지 한눈에 보고 싶다면 ‘학습 프로필’을 펴봐요.\n학습 1회의 결과는 ‘학습 리포트’에서 자세히 볼 수 있어요.",
  },
  {
    id: "7-2",
    chapter: 7,
    chapterTitle: "나의 학습",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "프로필",
    title: "학습 프로필",
    body:
      "레벨·랭킹·누적 정답률·순공 시간, 그리고 난이도·학기·대단원별 성취도까지\n그래프로 한눈에 보여요. 모든 학습 리포트는 여기 ‘리포트’ 버튼에서 모아 볼 수 있어요.",
    screenshots: [{ src: "/images/red/27_나의학습_학습프로필.png" }],
  },
  {
    id: "7-3",
    chapter: 7,
    chapterTitle: "나의 학습",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.drum,
    eyebrow: "리포트",
    title: "학습 리포트 — S부터 C까지",
    body:
      "‘학습하기’ 한 회의 결과예요. 정답률·학습 시간 등을 종합해 **S부터 C까지 등급**으로 보여줘요.\n내가 작성한 풀이, 정답률 같은 자세한 정보도 모두 여기서 확인할 수 있어요.",
    callout: { kind: "info", text: "등급은 보조적인 신호일 뿐, 매티는 여러분의 성장 자체를 더 중요하게 봐요." },
    screenshots: [{ src: "/images/red/28_나의학습_학습리포트.png" }],
  },

  // ─────────── Ch 8 ───────────
  {
    id: "8-1",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 1,
    layout: "cover",
    matty: M.hipster,
    eyebrow: "Chapter 8",
    title: "다시 풀어볼 시간 — 챌린지",
    body:
      "내가 풀어본 문제를 다시 풀어보는 수심달 APP의 강력한 도구예요.\n‘답을 찾는’ 연습보다 **‘식을 쓰는’ 연습**이 챌린지의 핵심이에요.",
  },
  {
    id: "8-2",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 2,
    layout: "shot-right",
    matty: M.laptop,
    eyebrow: "만들기 ①",
    title: "문항 확인에서 챌린지 생성",
    body:
      "문항 확인 화면에서 ‘챌린지 생성’을 누르면 한 문제짜리 챌린지를 만들 수 있어요.",
    callout: { kind: "warn", text: "‘튼튼 개념 쌓기’에서 제출한 문제는 챌린지로 만들 수 없어요." },
    screenshots: [{ src: "/images/red/29_챌린지_생성화면.png" }],
  },
  {
    id: "8-3",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 3,
    layout: "shot-left",
    matty: M.surprised,
    eyebrow: "만들기 ②",
    title: "리포트에서 묶음 챌린지",
    body:
      "학습 리포트의 ‘학습 문항 확인’에서 여러 문항을 체크박스로 골라 한 번에 챌린지로 만들 수 있어요.\n사이드바의 ‘챌린지업’ 메뉴로 자동 저장돼요.",
    screenshots: [{ src: "/images/red/30_챌린지_리포트에서생성.png" }],
  },
  {
    id: "8-4",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 4,
    layout: "shot-right",
    matty: M.fortune,
    eyebrow: "도전 ①",
    title: "챌린지 리스트에서 골라골라",
    body:
      "생성된 모든 챌린지는 챌린지업에서 한꺼번에 확인할 수 있어요.\n도전할 챌린지를 눌러서 바로 시작해봐요.",
    screenshots: [{ src: "/images/red/31_챌린지_리스트.png" }],
  },
  {
    id: "8-5",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 5,
    layout: "shot-right",
    matty: M.wink,
    eyebrow: "도전 ②",
    title: "테스트 형식으로 진행",
    body:
      "챌린지는 결과를 한 번에 채점받는 **‘테스트’ 형식**으로 진행돼요.\n한 문제씩 풀이 과정을 적어가면서 도전해봐요.",
    screenshots: [{ src: "/images/red/33_챌린지_시작화면2.png" }],
  },
  {
    id: "8-6",
    chapter: 8,
    chapterTitle: "챌린지",
    pageNumber: 6,
    layout: "shot-left",
    matty: M.drum,
    eyebrow: "마무리",
    title: "문제 정복 완료!",
    body:
      "이미 풀었던 문제를 다시 푸는 건 정답을 외우는 게 아니에요.\n풀이의 **‘과정’**을 다지는 일이고, 그게 진짜 실력이 돼요.",
    screenshots: [{ src: "/images/red/34_챌린지_정복완료.png" }],
  },

  // ─────────── Ending ───────────
  {
    id: "end",
    chapter: 9,
    chapterTitle: "마무리",
    pageNumber: 1,
    layout: "ending",
    matty: { src: "/images/red/35_매티_마무리.png", alt: "매티 마무리" },
    eyebrow: "Final Page",
    title: "이제 수심달 APP과 함께할 준비가 모두 끝났어요",
    body:
      "수심달 APP은 도구일 뿐이에요. 하지만 그 과정 속에 남는 **여러분의 습관은 ‘진짜’**가 될 거예요.\n여러분 안에 숨어 있는 무한한 가능성을 저와 함께 발견해봐요.\n언제나 곁에서 응원할게요.\n\n— 모범생 매티 드림",
  },
];

export const TOTAL_PAGES = PAGES.length;
