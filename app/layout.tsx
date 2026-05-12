import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수심달 RED · 학생용 가이드",
  description:
    "수학 심화의 새로운 기준, 수심달 RED. 설치부터 챌린지까지 — 처음 사용하는 학생도 5분 만에 따라할 수 있는 완벽 가이드.",
  openGraph: {
    title: "수심달 RED · 학생용 가이드",
    description:
      "AI 매티와 함께하는 단계별 학습. 8개 챕터로 정리한 수심달 RED 사용법.",
    type: "website",
    siteName: "수심달",
  },
  themeColor: "#4F46E5",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative overflow-x-hidden">{children}</body>
    </html>
  );
}
