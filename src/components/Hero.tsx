"use client";

import { useId } from "react";
import { Arrow, RisingWords, Reveal } from "./atoms";
import { useScrollY, usePrefersReducedMotion } from "./hooks";
import { motion } from "framer-motion";

function MiniChart({ trendLabel }: { trendLabel: string }) {
  const reduce = usePrefersReducedMotion();
  const gid = useId().replace(/:/g, "");
  const points = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 34, 44, 42, 52];
  const max = Math.max(...points);
  const w = 100,
    h = 60;
  const path = points
    .map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`)
    .join(" L ");
  const gradId = `grad-${gid}`;
  return (
    <div className="hm-chart">
      <div className="hm-chart-label">{trendLabel}</div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="hm-chart-svg" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M ${path} L ${w},${h} L 0,${h} Z`} fill={`url(#${gradId})`} />
        <motion.path
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 1.5, ease: "easeOut", delay: 0.5 }}
          d={`M ${path}`}
          fill="none"
          stroke="#7C5CFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- i18n bundle is loosely typed
function HeroMockup({ t }: { t: any }) {
  const h = t.hero;
  return (
    <div className="hero-mockup">
      <div className="hero-mockup-card hero-mockup-surface">
        <div className="hm-top">
          <div className="hm-dots" aria-hidden="true">
            <span className="hm-dot hm-dot-r" />
            <span className="hm-dot hm-dot-y" />
            <span className="hm-dot hm-dot-g" />
          </div>
          <span className="hm-chrome hm-label">{h.mockChrome}</span>
        </div>
        <div className="hm-kpis">
          {h.mockKpis.map((k: { l: string; v: string; d: string }, i: number) => (
            <div key={i} className="hm-tile">
              <div className="hm-label hm-kpi-label">{k.l}</div>
              <div className="hm-title hm-kpi-val">{k.v}</div>
              <div className="hm-mono hm-kpi-delta">{k.d}</div>
            </div>
          ))}
        </div>
        <MiniChart trendLabel={h.mockTrend} />
        <div className="hm-queue">
          {h.mockQueue.map((q: { n: string; s: string; tag: string; tagLabel: string }, i: number) => (
            <div key={i} className="hm-row">
              <div className="hm-avatar" aria-hidden="true">
                {q.n[0]}
              </div>
              <div className="hm-queue-body">
                <div className="hm-title hm-queue-name">{q.n}</div>
                <div className="hm-mono hm-queue-sub">{q.s}</div>
              </div>
              <span className={"hm-tag hm-tag--" + q.tag}>
                <span className="sr-only">{q.tagLabel}</span>
                <span aria-hidden="true">{q.tag}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- i18n bundle is loosely typed
export function Hero({ t, variant }: { t: any; variant: string }) {
  const y = useScrollY();
  const reduceMotion = usePrefersReducedMotion();
  const parallax = reduceMotion ? 0 : 1;
  const orbStyleA = { transform: `translateY(${y * 0.18 * parallax}px)` };
  const orbStyleB = { transform: `translateY(${y * -0.12 * parallax}px)` };

  return (
    <section id="top" className={"hero hero-variant-" + variant}>
      <div className="hero-bg">
        <div className="hero-grid-bg" />
        <div className="hero-orb a" style={orbStyleA} />
        <div className="hero-orb b" style={orbStyleB} />
      </div>

      <Reveal className="container hero-inner">
        {variant === "typeled" ? (
          <div>
            <span className="hero-eyebrow">
              <span className="pulse" aria-hidden="true" /> {t.hero.eyebrow}
            </span>
            <h1 className="hero-title-massive">
              <RisingWords words={[t.hero.typeLed.line1]} delay={50} />
              <br />
              <RisingWords words={[t.hero.typeLed.line2]} delay={150} />
              <br />
              <span className="em">
                <RisingWords words={[t.hero.typeLed.line3]} delay={250} />
              </span>
              <br />
              <RisingWords words={[t.hero.typeLed.line4]} delay={350} />
            </h1>
            <p className="hero-sub hero-sub-narrow">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-purple">
                {t.hero.cta1} <Arrow />
              </a>
              <a href="#product" className="btn btn-ghost">
                {t.hero.cta2} <Arrow />
              </a>
            </div>
          </div>
        ) : variant === "split" ? (
          <>
            <div>
              <span className="hero-eyebrow">
                <span className="pulse" aria-hidden="true" /> {t.hero.eyebrow}
              </span>
              <h1 className="hero-title">
                <RisingWords words={t.hero.titleA} emIndex={t.hero.titleAEm} />
              </h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="hero-ctas">
                <a href="#cta" className="btn btn-purple">
                  {t.hero.cta1} <Arrow />
                </a>
                <a href="#product" className="btn btn-ghost">
                  {t.hero.cta2} <Arrow />
                </a>
              </div>
            </div>
            <HeroMockup t={t} />
          </>
        ) : (
          <div>
            <span className="hero-eyebrow">
              <span className="pulse" aria-hidden="true" /> {t.hero.eyebrow}
            </span>
            <h1 className="hero-title">
              <RisingWords words={t.hero.titleA} emIndex={t.hero.titleAEm} />
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-purple">
                {t.hero.cta1} <Arrow />
              </a>
              <a href="#product" className="btn btn-ghost">
                {t.hero.cta2} <Arrow />
              </a>
            </div>
            <div className="hero-stats">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s: string[], i: number) => (
                <div key={i}>
                  <div className="stat-num">
                    <em>{s[0]}</em> {s[1]}
                  </div>
                  <div className="stat-label">{s[2]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i}>
            <em>{it}</em>
            <span className="dot" style={{ marginLeft: 72 }} aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
