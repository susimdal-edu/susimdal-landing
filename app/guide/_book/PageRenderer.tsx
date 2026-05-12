"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TabletFrame } from "./TabletFrame";
import { MattyAvatar } from "./MattyAvatar";
import { Callout } from "./Callout";
import { MarkdownLite } from "./MarkdownLite";
import type { BookPage } from "./pages";

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
};

export function PageRenderer({ page }: { page: BookPage }) {
  switch (page.layout) {
    case "cover":
      return <CoverLayout page={page} />;
    case "shot-right":
      return <ShotRightLayout page={page} />;
    case "shot-left":
      return <ShotLeftLayout page={page} />;
    case "shot-big":
      return <ShotBigLayout page={page} />;
    case "shots-2":
      return <Shots2Layout page={page} />;
    case "list":
      return <ListLayout page={page} />;
    case "stages":
      return <StagesLayout page={page} />;
    case "ending":
      return <EndingLayout page={page} />;
    default:
      return <ShotRightLayout page={page} />;
  }
}

function Eyebrow({ text }: { text: string }) {
  return (
    <motion.div {...fadeIn} className="chip-coral mb-4">
      {text}
    </motion.div>
  );
}

function Title({ text }: { text: string }) {
  return (
    <motion.h2
      {...fadeIn}
      className="mb-5 font-bold leading-tight text-ink-90"
      style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.25 }}
    >
      {text}
    </motion.h2>
  );
}

function Body({ text }: { text: string }) {
  return (
    <motion.div {...fadeIn}>
      <MarkdownLite text={text} className="text-body-l leading-relaxed text-ink-70" />
    </motion.div>
  );
}

// ─────────────── Layouts ───────────────

function CoverLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-6 py-10 text-center md:flex-row md:gap-16 md:px-12 md:text-left">
      <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={280} />
      <div className="max-w-xl">
        {page.eyebrow && <Eyebrow text={page.eyebrow} />}
        {page.title && (
          <motion.h2
            {...fadeIn}
            className="mb-6 font-bold leading-tight text-ink-90"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.2 }}
          >
            {page.title}
          </motion.h2>
        )}
        <Body text={page.body} />
        {page.callout && (
          <motion.div {...fadeIn} className="mt-6">
            <Callout {...page.callout} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ShotRightLayout({ page }: { page: BookPage }) {
  return (
    <div className="grid h-full grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12 md:px-12">
      <div className="flex flex-col">
        <div className="mb-4 flex items-center gap-3">
          <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={88} bobbing />
          {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
        </div>
        {page.title && <Title text={page.title} />}
        <Body text={page.body} />
        {page.callout && (
          <motion.div {...fadeIn} className="mt-5">
            <Callout {...page.callout} />
          </motion.div>
        )}
      </div>
      <div>
        {page.screenshots && page.screenshots[0] && (
          <TabletFrame
            src={page.screenshots[0].src}
            alt={page.title ?? page.matty.alt}
            caption={page.screenshots[0].caption}
          />
        )}
      </div>
    </div>
  );
}

function ShotLeftLayout({ page }: { page: BookPage }) {
  return (
    <div className="grid h-full grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-12">
      <div className="order-2 md:order-1">
        {page.screenshots && page.screenshots[0] && (
          <TabletFrame
            src={page.screenshots[0].src}
            alt={page.title ?? page.matty.alt}
            caption={page.screenshots[0].caption}
          />
        )}
      </div>
      <div className="order-1 flex flex-col md:order-2">
        <div className="mb-4 flex items-center gap-3">
          <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={88} bobbing />
          {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
        </div>
        {page.title && <Title text={page.title} />}
        <Body text={page.body} />
        {page.callout && (
          <motion.div {...fadeIn} className="mt-5">
            <Callout {...page.callout} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ShotBigLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full flex-col gap-6 px-6 py-10 md:px-12">
      <div className="flex items-center gap-3">
        <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={72} bobbing />
        {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
      </div>
      {page.title && <Title text={page.title} />}
      <Body text={page.body} />
      <div className="mx-auto w-full max-w-3xl">
        {page.screenshots && page.screenshots[0] && (
          <TabletFrame
            src={page.screenshots[0].src}
            alt={page.title ?? page.matty.alt}
            caption={page.screenshots[0].caption}
          />
        )}
      </div>
    </div>
  );
}

function Shots2Layout({ page }: { page: BookPage }) {
  return (
    <div className="grid h-full grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12 md:px-12">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={88} bobbing />
          {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
        </div>
        {page.title && <Title text={page.title} />}
        <Body text={page.body} />
        {page.callout && (
          <motion.div {...fadeIn} className="mt-5">
            <Callout {...page.callout} />
          </motion.div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {page.screenshots?.slice(0, 4).map((s) => (
          <TabletFrame key={s.src} src={s.src} alt={s.caption ?? page.matty.alt} caption={s.caption} />
        ))}
      </div>
    </div>
  );
}

function ListLayout({ page }: { page: BookPage }) {
  return (
    <div className="grid h-full grid-cols-1 gap-10 px-6 py-10 md:grid-cols-[1fr_1.2fr] md:items-start md:gap-12 md:px-12">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={88} bobbing />
          {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
        </div>
        {page.title && <Title text={page.title} />}
        <Body text={page.body} />
        {page.screenshots && page.screenshots[0] && (
          <div className="mt-6 max-w-md">
            <TabletFrame src={page.screenshots[0].src} alt={page.title ?? page.matty.alt} />
          </div>
        )}
      </div>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
        }}
        className="space-y-2.5"
      >
        {page.items?.map((it, i) => (
          <motion.li
            key={it.label}
            variants={{
              hidden: { opacity: 0, x: 16 },
              show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
            }}
            className="flex items-start gap-3 rounded-card border border-border-soft bg-card px-4 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-coral-soft text-caption font-bold text-coral-strong">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-title-s text-ink-90">{it.label}</div>
              <div className="mt-0.5 text-caption text-ink-70">{it.desc}</div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function StagesLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full flex-col gap-6 px-6 py-10 md:px-12">
      <div className="flex items-center gap-3">
        <MattyAvatar src={page.matty.src} alt={page.matty.alt} size={72} bobbing />
        {page.eyebrow && <div className="chip-coral">{page.eyebrow}</div>}
      </div>
      {page.title && <Title text={page.title} />}
      <Body text={page.body} />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
        }}
        className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {page.stages?.map((s, i) => (
          <motion.div
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="overflow-hidden rounded-card border border-border-soft bg-card"
          >
            <div className="flex items-start gap-3 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-coral text-caption font-black text-white">
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-title-s text-ink-90">{s.name}</h3>
                <p className="mt-1 text-caption text-ink-70">{s.tip}</p>
              </div>
            </div>
            <div className="flex gap-1.5 bg-subtle p-2.5">
              {s.shots.slice(0, 3).map((src) => (
                <div
                  key={src}
                  className="relative aspect-[1.43] flex-1 overflow-hidden rounded-inner border border-border-soft bg-card"
                >
                  <Image
                    src={src}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function EndingLayout({ page }: { page: BookPage }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-6 py-10 text-center md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-56 w-56 char-shadow"
      >
        <Image
          src={page.matty.src}
          alt={page.matty.alt}
          fill
          sizes="224px"
          className="object-contain"
          unoptimized
          priority
        />
      </motion.div>
      <Eyebrow text={page.eyebrow ?? ""} />
      {page.title && (
        <motion.h2
          {...fadeIn}
          className="max-w-2xl font-bold leading-tight text-ink-90"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.25 }}
        >
          {page.title}
        </motion.h2>
      )}
      <div className="max-w-xl">
        <MarkdownLite text={page.body} className="text-body-l leading-relaxed text-ink-70" />
      </div>
    </div>
  );
}
