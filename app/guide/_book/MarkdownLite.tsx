"use client";

import { Fragment } from "react";

/** **bold** 만 변환하는 초간단 인라인 포매터. 코랄 하이라이트로 강조. */
export function MarkdownLite({ text, className = "" }: { text: string; className?: string }) {
  const lines = text.split("\n");
  return (
    <p className={className}>
      {lines.map((line, li) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <Fragment key={li}>
            {parts.map((p, i) => {
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <strong
                    key={i}
                    className="font-bold text-coral-strong"
                  >
                    {p.slice(2, -2)}
                  </strong>
                );
              }
              return <Fragment key={i}>{p}</Fragment>;
            })}
            {li < lines.length - 1 && <br />}
          </Fragment>
        );
      })}
    </p>
  );
}
