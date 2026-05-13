import type { Metadata } from "next";
import { BookReader } from "../_book/BookReader";
import { CHAPTERS, PAGES } from "../_book/pages-advanced";

export const metadata: Metadata = {
  title: "수심달 APP · 학생용 심화가이드",
  description:
    "네 명의 앰버서더 선배가 직접 들려주는 수심달의 진짜 가치. 색깔펜 첨삭부터 습관 신호등까지 — 매티와 함께 한 페이지씩 따라가는 심화 가이드.",
};

export default function GuideAdvancedPage() {
  return <BookReader pages={PAGES} chapters={CHAPTERS} />;
}
