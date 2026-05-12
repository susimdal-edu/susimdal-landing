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
      className={`flex items-start gap-2.5 rounded-card border ${s.border} ${s.bg} px-4 py-3`}
    >
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${s.text}`} strokeWidth={2.4} />
      <p className={`text-caption font-semibold leading-relaxed ${s.text}`}>{text}</p>
    </div>
  );
}
