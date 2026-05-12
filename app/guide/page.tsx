import type { Metadata } from "next";
import { BookReader } from "./_book/BookReader";

export const metadata: Metadata = {
  title: "수심달 APP · 학생용 가이드",
  description:
    "매티와 함께 한 페이지씩 천천히 따라가는 수심달 APP 사용 가이드. 설치부터 챌린지까지 동화책처럼 넘겨보세요.",
};

export default function GuidePage() {
  return <BookReader />;
}
