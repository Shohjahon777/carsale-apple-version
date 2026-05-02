"use client";

import { Arrow, RisingWords, Reveal } from "./atoms";
import { useScrollY } from "./hooks";
import { motion } from "framer-motion";

function MiniChart() {
  const points = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 34, 44, 42, 52];
  const max = Math.max(...points);
  const w = 100,
    h = 60;
  const path = points
    .map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`)
    .join(" L ");
  return (
    <div
      style={{
        background: "var(--ink-3)",
        border: "1px solid var(--ink-line)",
        borderRadius: 10,
        padding: 14,
        position: "relative",
        height: 90,
      }}
    >
      <div
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 9,
          color: "var(--cream-mute)",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        14d trend
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: 56, display: "block" }}
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0066CC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M ${path} L ${w},${h} L 0,${h} Z`} fill="url(#grad)" />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          d={`M ${path}`}
          fill="none"
          stroke="#0066CC"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="hero-mockup">
      <div className="hero-mockup-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 6px 12px" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF7A8A" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#F4D2A0" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#7CE0B8" }} />
          </div>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", letterSpacing: ".08em" }}>
            CARSALE · LIVE
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 10 }}>
          {[
            { l: "Calls", v: "1,284", d: "+12%" },
            { l: "Leads", v: "312", d: "+24%" },
            { l: "AHT", v: "2:48", d: "-22s" },
          ].map((k, i) => (
            <div key={i} style={{ background: "var(--ink-3)", border: "1px solid var(--ink-line)", borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--cream-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>{k.l}</div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>{k.v}</div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--green)" }}>{k.d}</div>
            </div>
          ))}
        </div>
        <MiniChart />
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { n: "A. Karimov", s: "BMW X5", tag: "live" },
            { n: "M. Volkova", s: "Lexus RX", tag: "new" },
            { n: "O. Saidov", s: "Toyota Camry", tag: "live" },
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", border: "1px solid var(--ink-line)", borderRadius: 8, background: "var(--ink-3)" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, var(--purple), var(--purple-deep))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--f-display)", fontSize: 10, fontWeight: 600, color: "#fff" }}>
                {q.n[0]}
              </div>
              <div style={{ flex: 1, fontSize: 12 }}>
                <div style={{ color: "var(--cream)" }}>{q.n}</div>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)" }}>{q.s}</div>
              </div>
              <span style={{
                fontFamily: "var(--f-mono)",
                fontSize: 9,
                padding: "3px 7px",
                borderRadius: 999,
                background: q.tag === "live" ? "rgba(52,199,89,.15)" : "rgba(0,102,204,.15)",
                color: q.tag === "live" ? "var(--green)" : "var(--purple)",
                textTransform: "uppercase",
                letterSpacing: ".05em",
              }}>{q.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero({ t, variant }: { t: any /* eslint-disable-line @typescript-eslint/no-explicit-any */; variant: string }) {
  const y = useScrollY();

  const orbStyleA = { transform: `translateY(${y * 0.18}px)` };
  const orbStyleB = { transform: `translateY(${y * -0.12}px)` };

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
            <span className="hero-eyebrow"><span className="pulse" /> {t.hero.eyebrow}</span>
            <h1 className="hero-title-massive">
              <RisingWords words={[t.hero.typeLed.line1]} delay={50} /><br />
              <RisingWords words={[t.hero.typeLed.line2]} delay={150} /><br />
              <span className="em"><RisingWords words={[t.hero.typeLed.line3]} delay={250} /></span><br />
              <RisingWords words={[t.hero.typeLed.line4]} delay={350} />
            </h1>
            <p className="hero-sub" style={{ maxWidth: "50ch" }}>{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-purple">{t.hero.cta1} <Arrow /></a>
              <a href="#product" className="btn btn-ghost">{t.hero.cta2} <Arrow /></a>
            </div>
          </div>
        ) : variant === "split" ? (
          <>
            <div>
              <span className="hero-eyebrow"><span className="pulse" /> {t.hero.eyebrow}</span>
              <h1 className="hero-title">
                <RisingWords words={t.hero.titleA} emIndex={t.hero.titleAEm} />
              </h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="hero-ctas">
                <a href="#cta" className="btn btn-purple">{t.hero.cta1} <Arrow /></a>
                <a href="#product" className="btn btn-ghost">{t.hero.cta2} <Arrow /></a>
              </div>
            </div>
            <HeroMockup />
          </>
        ) : (
          <div>
            <span className="hero-eyebrow"><span className="pulse" /> {t.hero.eyebrow}</span>
            <h1 className="hero-title">
              <RisingWords words={t.hero.titleA} emIndex={t.hero.titleAEm} />
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-purple">{t.hero.cta1} <Arrow /></a>
              <a href="#product" className="btn btn-ghost">{t.hero.cta2} <Arrow /></a>
            </div>
            <div className="hero-stats">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s: string[], i: number) => (
                <div key={i}>
                  <div className="stat-num"><em>{s[0]}</em> {s[1]}</div>
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
            <span className="dot" style={{ marginLeft: 72 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
