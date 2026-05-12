"use client";

import { Info, AlertCircle, Lightbulb, Sparkles, Check } from "lucide-react";
import type { Callout as CalloutType } from "./pages";

const KIND_STYLE = {
  info: {
    icon: Info,
    bg: "bg-info-soft",
    text: "text-[#1E4DB0]",
    border: "border-[#C9D9FF]",
  },
  tip: {
    icon: Lightbulb,
    bg: "bg-warn-soft",
    text: "text-gold-deep",
    border: "border-[#FFE5AD]",
  },
  warn: {
    icon: AlertCircle,
    bg: "bg-coral-soft",
    text: "text-coral-strong",
    border: "border-[#FFD2D4]",
  },
  gold: {
    icon: Sparkles,
    bg: "bg-warn-soft",
    text: "text-gold-deep",
    border: "border-[#FFE5AD]",
  },
  good: {
    icon: Check,
    bg: "bg-good-soft",
    text: "text-good",
    border: "border-[#BFE6D2]",
  },
};

export function Callout({ kind, text }: CalloutType) {
  const s = KIND_STYLE[kind];
  const Icon = s.icon;
  return (
    <div
      className={`flex items-start gap-2 rounded-card border ${s.border} ${s.bg} px-3 py-2 sm:gap-2.5 sm:px-4 sm:py-3`}
    >
      <Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${s.text}`} strokeWidth={2.4} />
      <p className={`text-[12px] font-semibold leading-snug sm:text-caption sm:leading-relaxed ${s.text}`}>
        {text}
      </p>
    </div>
  );
}
