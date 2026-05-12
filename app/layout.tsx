import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수심달 · 학생용 가이드",
  description:
    "수심달 학생용 가이드 — 기본 가이드와 심화 가이드 중 원하는 가이드를 선택해서 매티와 함께 학습해보세요.",
  openGraph: {
    title: "수심달 · 학생용 가이드",
    description:
      "AI 매티와 함께하는 수심달 APP 사용 가이드. 기본·심화 중에서 골라서 시작하세요.",
    type: "website",
    siteName: "수심달",
  },
  themeColor: "#FF6971",
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
