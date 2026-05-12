import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수심달 | 수학 심화 달인",
  description: "수학 심화 학습의 새로운 기준, 수심달 RED",
  openGraph: {
    title: "수심달 | 수학 심화 달인",
    description: "수학 심화 학습의 새로운 기준, 수심달 RED",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
