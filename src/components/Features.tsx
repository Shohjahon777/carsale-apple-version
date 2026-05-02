"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTag, Reveal } from "./atoms";
import { useMouseGlow } from "./hooks";
import { FileText, Users, PhoneCall, ClipboardCheck, Box, BarChart3 } from "lucide-react";

const iconMap: Record<number, React.ReactElement> = {
  0: <FileText size={22} strokeWidth={1.8} />,
  1: <Users size={22} strokeWidth={1.8} />,
  2: <PhoneCall size={22} strokeWidth={1.8} />,
  3: <ClipboardCheck size={22} strokeWidth={1.8} />,
  4: <Box size={22} strokeWidth={1.8} />,
  5: <BarChart3 size={22} strokeWidth={1.8} />,
};

function FeatVisualSales() {
  const items = [
    { l: "Новый", n: 260, c: "new" },
    { l: "Бронь", n: 102, c: "reserved" },
    { l: "В очереди", n: 6, c: "queue" },
    { l: "Черновик", n: 3, c: "draft" },
  ];
  const total = items.reduce((a, b) => a + b.n, 0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 0, height: 6, borderRadius: 3, overflow: "hidden" }}>
        {items.map((s, i) => (
          <span key={i} className={"crsl-bar-seg seg-" + s.c} style={{ flex: s.n / total }} />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((s, i) => (
          <span key={i} className={"crsl-chip chip-" + s.c}>
            {s.l} {s.n}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatVisualFunnel() {
  const data = [
    { n: "Новый", v: 25, c: "#0066CC" },
    { n: "Контакт", v: 38, c: "#004499" },
    { n: "Не дозвон", v: 13, c: "#34C759" },
    { n: "Успех", v: 6, c: "#34C759" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ flex: "0 0 80px", color: "var(--cream-mute)" }}>{d.n}</span>
          <span style={{ flex: 1, height: 5, background: "var(--ink-3)", borderRadius: 3 }}>
            <span style={{ display: "block", height: "100%", width: `${d.v * 2.5}%`, background: d.c, borderRadius: 3 }} />
          </span>
        </div>
      ))}
    </div>
  );
}

function FeatVisualCalls() {
  const data = [
    [184, 92, 12],
    [212, 108, 14],
    [168, 76, 9],
    [240, 130, 18],
    [268, 148, 22],
    [96, 38, 4],
    [42, 14, 2],
  ];
  const max = 268;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, alignItems: "end", height: 70 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: "flex", gap: 2, alignItems: "end", height: "100%" }}>
          <span style={{ flex: 1, height: `${(d[0] / max) * 100}%`, background: "#0066CC", borderRadius: "2px 2px 0 0" }} />
          <span style={{ flex: 1, height: `${(d[1] / max) * 100}%`, background: "#34C759", borderRadius: "2px 2px 0 0" }} />
          <span style={{ flex: 1, height: `${(d[2] / max) * 100}%`, background: "#FF3B30", borderRadius: "2px 2px 0 0" }} />
        </div>
      ))}
    </div>
  );
}

function FeatVisualPDI() {
  const items = [
    { vin: "WBXXC2R7TS7P3", stages: [false, false, false, false, false, false], status: "не начат" },
    { vin: "G1K632W7T4SST7", stages: [true, true, false, false, false, false], status: "в работе" },
    { vin: "S1K6J2W7T4S87", stages: [true, true, true, true, true, true], status: "готов" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11 }}>
          <span style={{ fontFamily: "var(--f-mono)", color: "var(--cream)", flex: "0 0 110px" }}>{it.vin}</span>
          <span style={{ display: "flex", gap: 3, flex: 1 }}>
            {it.stages.map((s, j) => (
              <span key={j} style={{ flex: 1, height: 6, borderRadius: 3, background: s ? "#34C759" : "var(--ink-3)" }} />
            ))}
          </span>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--cream-mute)", textTransform: "uppercase" }}>
            {it.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function FeatureCard({
  idx,
  title,
  body,
  visual,
}: {
  idx: number;
  title: string[];
  body: string;
  visual: React.ReactNode;
}) {
  const ref = useMouseGlow<HTMLElement>();
  return (
    <article className="feature-card" ref={ref as React.RefObject<HTMLElement>}>
      <div className="glow" />
      <div className="feature-card-head">
        <div className="icon">{iconMap[idx]}</div>
        <span className="feature-card-kicker">0{idx + 1}</span>
      </div>
      <div className="feature-card-copy">
        <h3>
          {title[0]}
          <em>{title[1]}</em>
        </h3>
        <p>{body}</p>
      </div>
      {visual && <div className="visual">{visual}</div>}
    </article>
  );
}

export function Features({ t }: { t: any }) {
  const spans = ["large", "medium", "wide", "wide", "standard", "standard", "standard"];
  const visuals = [<FeatVisualSales key="s" />, <FeatVisualFunnel key="f" />, <FeatVisualCalls key="c" />, <FeatVisualPDI key="p" />, null, null];

  return (
    <section id="features" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{t.features.tag}</SectionTag>
          <h2 className="section-title">
            {t.features.title[0]}
            <em>{t.features.title[1]}</em>
            {t.features.title[2]}
          </h2>
          <p className="section-lede">{t.features.lede}</p>
        </Reveal>
        <div className="features-grid">
          {t.features.cards.map((c: any, i: number) => (
            <Reveal key={i} delay={i * 0.08} className={"feature-card-shell " + spans[i]}>
              <FeatureCard idx={i} title={c.title} body={c.body} visual={visuals[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
