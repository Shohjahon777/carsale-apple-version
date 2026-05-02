"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import { CarMark, SectionTag, Reveal } from "./atoms";
import { BarChart2, ShoppingCart, Users, PhoneCall, Car, Box, Home, Search, Bell } from "lucide-react";
import { MotionValue, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const ico = {
  chart: <BarChart2 size={16} strokeWidth={1.8} />,
  cart: <ShoppingCart size={16} strokeWidth={1.8} />,
  users: <Users size={16} strokeWidth={1.8} />,
  phone: <PhoneCall size={16} strokeWidth={1.8} />,
  car: <Car size={16} strokeWidth={1.8} />,
  box: <Box size={16} strokeWidth={1.8} />,
  home: <Home size={16} strokeWidth={1.8} />,
  search: <Search size={14} strokeWidth={1.8} />,
  bell: <Bell size={14} strokeWidth={1.8} />,
};

const moduleIcons: Record<string, React.ReactElement> = {
  home: ico.home,
  analytics: ico.chart,
  sales: ico.cart,
  crm: ico.users,
  callcenter: ico.phone,
  pdi: ico.car,
  parts: ico.box,
};

function CrslFrame({ sidebar, children }: { sidebar: any; children: React.ReactNode }) {
  return (
    <div className="crsl-frame">
      <aside className="crsl-side">
        <div className="crsl-side-brand">
          <div className="crsl-side-brand-icon"><CarMark size={18} /></div>
          <span>{sidebar.title}</span>
        </div>
        {sidebar.groups.map((g: any, i: number) => (
          <div key={i}>
            {g.label && <div className="crsl-side-label">{g.label}</div>}
            {g.items.map((it: any, j: number) => (
              <div key={j} className={"crsl-side-item" + (it.active ? " active" : "")}>
                <span className="crsl-side-dot" /> {it.name}
              </div>
            ))}
          </div>
        ))}
        <div className="crsl-side-foot">
          <div className="crsl-side-item"><span className="crsl-side-dot" /> Тема</div>
          <div className="crsl-side-item"><span className="crsl-side-dot" /> Язык <span style={{ marginLeft: "auto", fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--cream-mute)" }}>RU</span></div>
        </div>
      </aside>
      <main className="crsl-main">{children}</main>
    </div>
  );
}

function ScreenHome({ d }: { d: any }) {
  return (
    <div className="crsl-frame crsl-frame-light">
      <div className="crsl-light-topbar">
        <div className="crsl-light-brand">
          <CarMark size={20} />
          <span style={{ fontFamily: "var(--f-italic)", fontStyle: "italic", fontSize: 18 }}>
            <span style={{ color: "#1a1729" }}>car</span>
            <span style={{ color: "var(--purple-deep)" }}>sale</span>
          </span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center", fontSize: 11, color: "#6b6757" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: "rgba(124,224,184,.15)", color: "#1f8a5b" }}>● 16:21</span>
          <span style={{ fontFamily: "var(--f-mono)" }}>RU</span>
        </div>
      </div>
      <div style={{ padding: "24px 28px 16px" }}>
        <div style={{ fontSize: 11, color: "#8a8474", fontFamily: "var(--f-mono)", letterSpacing: ".06em" }}>{d.date}</div>
        <h2 style={{ fontFamily: "var(--f-italic)", fontSize: 42, fontWeight: 400, color: "#1a1729", margin: "8px 0 4px", letterSpacing: "-0.01em" }}>{d.greeting}</h2>
        <p style={{ fontSize: 12, color: "#8a8474", margin: 0 }}>{d.subtitle}</p>
      </div>
      <div className="crsl-home-grid">
        {d.cards.map((c: any, i: number) => (
          <div key={i} className="crsl-home-card">
            <div className="crsl-home-icon-wrap">
              <div className="crsl-home-icon" style={{ background: ["#EDE9FE", "#FFE4E6", "#DBEAFE", "#FEF3C7", "#FED7AA", "#E0F2FE"][i] }}>
                {[ico.chart, ico.cart, ico.users, ico.phone, ico.car, ico.box][i]}
              </div>
              <span className="crsl-home-num">{c.num}</span>
            </div>
            <h4>{c.name}</h4>
            <p>{c.desc}</p>
            <div className="crsl-home-open">Открыть <span>↗</span></div>
          </div>
        ))}
      </div>
      <div className="crsl-home-foot">
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--f-mono)", fontSize: 10, color: "#6b6757" }}>
          <span style={{ width: 14, height: 14, border: "1px solid #c9c2b5", borderRadius: 3, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>✦</span> {d.hint}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--purple-deep)", background: "rgba(167,139,250,.12)", padding: "4px 10px", borderRadius: 999 }}>
          ● CarSale CRM <span style={{ color: "#a8a194" }}>{d.version}</span>
        </span>
      </div>
    </div>
  );
}

function AreaChart() {
  const points = [42, 48, 38, 52, 56, 60, 54, 66, 62, 74, 70, 82, 78, 88];
  const points2 = [22, 26, 24, 30, 28, 36, 32, 40, 38, 46, 44, 52, 48, 58];
  const max = 100,
    w = 600,
    h = 180;
  const px = (i: number) => (i / (points.length - 1)) * w;
  const py = (v: number) => h - (v / max) * h;
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${px(i)} ${py(v)}`).join(" ");
  const fill = (arr: number[]) => `${path(arr)} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: 180, display: "block" }}>
      <defs>
        <linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ag2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D2A0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F4D2A0" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g, i) => <line key={i} x1="0" y1={h * g} x2={w} y2={h * g} stroke="#251F3A" strokeDasharray="2 4" />)}
      <path d={fill(points)} fill="url(#ag1)" />
      <path d={path(points)} stroke="#A78BFA" strokeWidth="2" fill="none" />
      <path d={fill(points2)} fill="url(#ag2)" />
      <path d={path(points2)} stroke="#F4D2A0" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    </svg>
  );
}

function DonutChart({ values, colors, center, centerLabel }: { values: number[]; colors: string[]; center: string; centerLabel: string }) {
  const total = values.reduce((a, b) => a + b, 0);
  const r = 50,
    cx = 60,
    cy = 60;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--ink-3)" strokeWidth="14" />
      {values.map((v, i) => {
        const len = (v / total) * C;
        const offset = -acc;
        acc += len;
        return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={colors[i]} strokeWidth="14" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={offset} transform={`rotate(-90 ${cx} ${cy})`} />;
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500, fill: "var(--cream)" }}>{center}</text>
      <text x={cx} y={cy + 14} textAnchor="middle" style={{ fontFamily: "var(--f-mono)", fontSize: 9, fill: "var(--cream-mute)" }}>{centerLabel}</text>
    </svg>
  );
}

function RingProgress({ value }: { value: number }) {
  const r = 38,
    cx = 50,
    cy = 50,
    C = 2 * Math.PI * r;
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--ink-3)" strokeWidth="10" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#7CE0B8" strokeWidth="10" strokeDasharray={`${(C * value) / 100} ${C}`} strokeDashoffset={0} transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="round" />
      <text x={cx} y={cy + 6} textAnchor="middle" style={{ fontFamily: "var(--f-display)", fontSize: 20, fontWeight: 500, fill: "var(--cream)" }}>{value}%</text>
    </svg>
  );
}

function WeekBars({ data }: { data: { d: string; in: number; out: number; miss: number }[] }) {
  const max = Math.max(...data.map((d) => d.in));
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: 14, alignItems: "end", height: 160, marginTop: 8 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ display: "flex", gap: 3, alignItems: "end", height: 130 }}>
            <span style={{ width: 8, height: `${(d.in / max) * 100}%`, background: "#A78BFA", borderRadius: "3px 3px 0 0" }} />
            <span style={{ width: 8, height: `${(d.out / max) * 100}%`, background: "#7CE0B8", borderRadius: "3px 3px 0 0" }} />
            <span style={{ width: 8, height: `${(d.miss / max) * 100}%`, background: "#FF7A8A", borderRadius: "3px 3px 0 0" }} />
          </div>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)" }}>{d.d}</div>
        </div>
      ))}
    </div>
  );
}

function ScreenAnalytics({ d }: { d: any }) {
  const sidebar = {
    title: "Аналитика",
    groups: [
      { label: "ОБЗОР", items: [{ name: "Дашборд", active: true }, { name: "Контракты" }, { name: "Финансы" }] },
      { label: "ОТЧЁТЫ", items: [{ name: "По регионам" }, { name: "По моделям" }, { name: "По дилерам" }] },
    ],
  };
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.title}</h2>
          <p className="crsl-page-sub">{d.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <span className="crsl-pill">↑ Экспорт</span>
          <span className="crsl-pill">Период</span>
        </div>
      </div>
      <div className="crsl-kpis">
        {d.kpis.map((k: any, i: number) => (
          <div key={i} className="crsl-kpi">
            <div className="crsl-kpi-label">{k.label}</div>
            <div className="crsl-kpi-value">{k.value}</div>
            <div className="crsl-kpi-delta up">↑ {k.delta}</div>
          </div>
        ))}
      </div>
      <div className="crsl-cols">
        <div className="crsl-card">
          <div className="crsl-card-head">
            <h4>{d.chartTitle}</h4>
            <div className="crsl-legend">
              <span><i />{d.legend[0]}</span>
              <span><i className="alt" />{d.legend[1]}</span>
            </div>
          </div>
          <AreaChart />
        </div>
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>{d.regionsTitle}</h4></div>
          <div className="crsl-bars">
            {d.regions.map((r: any, i: number) => {
              const max = Math.max(...d.regions.map((x: any) => x.value));
              return (
                <div key={i} className="crsl-bar-row">
                  <span className="crsl-bar-label">{r.name}</span>
                  <span className="crsl-bar-track">
                    <span className="crsl-bar-fill" style={{ width: `${(r.value / max) * 100}%` }} />
                  </span>
                  <span className="crsl-bar-val">{r.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CrslFrame>
  );
}

function ScreenSales({ d }: { d: any }) {
  const sidebar = {
    title: d.sidebar.title,
    groups: [{ label: d.sidebar.main, items: d.sidebar.items.map((n: string, i: number) => ({ name: n, active: i === 0 })) }],
  };
  const statusColor = (s: string) =>
    (({ Новый: "new", Черновик: "draft", Продолжено: "progress", "В очереди": "queue", Бронь: "reserved" } as Record<string, string>)[s] || "new");
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.title}</h2>
          <p className="crsl-page-sub">{d.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 11, color: "var(--cream-mute)" }}>
          <span style={{ fontFamily: "var(--f-mono)" }}>Поиск… VIN, контракт, ИНН, имя</span>
          <span style={{ width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--ink-line)", borderRadius: 8 }}>{ico.search}</span>
        </div>
      </div>
      <div className="crsl-status-strip">
        <div>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", letterSpacing: ".08em" }}>{d.total}</div>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 28, fontWeight: 500 }}>{d.totalVal}</div>
        </div>
        <div className="crsl-status-bar">
          {d.statuses.map((s: any, i: number) => {
            const total = d.statuses.reduce((a: number, b: any) => a + parseInt(b.count), 0);
            return <span key={i} className={"crsl-bar-seg seg-" + s.color} style={{ flex: parseInt(s.count) / total }} />;
          })}
        </div>
        <div className="crsl-status-chips">
          {d.statuses.map((s: any, i: number) => (
            <span key={i} className={"crsl-chip chip-" + s.color}>{s.label} {s.count}</span>
          ))}
        </div>
      </div>
      <div className="crsl-tabs">
        {d.tabs.map((tab: string, i: number) => <span key={i} className={"crsl-tab" + (i === 0 ? " active" : "")}>{tab}</span>)}
      </div>
      <div className="crsl-toolbar">
        <div style={{ display: "flex", gap: 6 }}>
          {d.toolbar.map((t: string, i: number) => <span key={i} className="crsl-tool-btn">{t}</span>)}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {d.actions.slice(0, 3).map((t: string, i: number) => <span key={i} className="crsl-tool-btn">{t}</span>)}
          <span className="crsl-tool-btn primary">{d.actions[3]}</span>
        </div>
      </div>
      <div className="crsl-table-wrap">
        <table className="crsl-table">
          <thead>
            <tr>{d.cols.map((c: string, i: number) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {d.rows.map((r: string[], i: number) => (
              <tr key={i}>
                <td className="muted">{r[0]}</td>
                <td className="link">{r[1]}</td>
                <td className="muted">{r[2]}</td>
                <td><span className={"crsl-status crsl-status-" + statusColor(r[3])}>{r[3]}</span></td>
                <td>{r[4]}</td>
                <td><span className="crsl-model">{r[5]}</span></td>
                <td>{r[6]}</td>
                <td>{r[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CrslFrame>
  );
}

function ScreenCRM({ d }: { d: any }) {
  const sidebar = {
    title: d.sidebar.title,
    groups: [
      { label: d.sidebar.group1, items: d.sidebar.items1.map((n: string, i: number) => ({ name: n, active: i === 0 })) },
      { label: d.sidebar.group2, items: d.sidebar.items2.map((n: string) => ({ name: n })) },
      { label: d.sidebar.group3, items: d.sidebar.items3.map((n: string) => ({ name: n })) },
    ],
  };
  const colors = ["#A78BFA", "#7C5CFF", "#5EE7DF", "#F4D2A0", "#7CE0B8", "#FF7A8A", "#C4B5FD", "#9CD9FF", "#F5A623"];
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.greet}</h2>
          <p className="crsl-page-sub">{d.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="crsl-tool-btn primary">{d.actions[0]}</span>
          <span className="crsl-tool-btn">{d.actions[1]}</span>
        </div>
      </div>
      <div className="crsl-kpis crsl-kpis-5">
        {d.kpis.map((k: any, i: number) => (
          <div key={i} className="crsl-kpi">
            <div className="crsl-kpi-icon">{[ico.users, ico.bell, ico.chart, ico.phone, ico.box][i]}</div>
            <div className="crsl-kpi-value">{k.value}</div>
            <div className="crsl-kpi-label">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="crsl-cols">
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>{d.funnelTitle}</h4></div>
          <div className="crsl-funnel">
            <div className="crsl-funnel-total">Всего лидов <strong>16</strong></div>
            {d.funnel.map((f: any, i: number) => (
              <div key={i} className="crsl-bar-row">
                <span className="crsl-bar-dot" style={{ background: colors[i] }} />
                <span className="crsl-bar-label">{f.name}</span>
                <span className="crsl-bar-track">
                  <span className="crsl-bar-fill" style={{ width: `${f.pct * 2.5}%`, background: colors[i] }} />
                </span>
                <span className="crsl-bar-val">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>{d.sourcesTitle}</h4></div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <DonutChart values={d.sources.map((s: any) => s.value)} colors={colors} center="16" centerLabel="всего" />
            <div className="crsl-source-list">
              {d.sources.map((s: any, i: number) => (
                <div key={i} className="crsl-source-row">
                  <span className="crsl-bar-dot" style={{ background: colors[i] }} />
                  <span style={{ flex: 1 }}>{s.name}</span>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--cream)" }}>{s.value}</span>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", minWidth: 32, textAlign: "right" }}>{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="crsl-cols crsl-cols-3" style={{ marginTop: 12 }}>
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>{d.modelsTitle}</h4></div>
          <div className="crsl-bars">
            {d.models.map((m: any, i: number) => {
              const max = Math.max(...d.models.map((x: any) => x.value));
              return (
                <div key={i} className="crsl-bar-row">
                  <span className="crsl-bar-label">{m.name}</span>
                  <span className="crsl-bar-track">
                    <span className="crsl-bar-fill" style={{ width: `${(m.value / max) * 100}%` }} />
                  </span>
                  <span className="crsl-bar-val">{m.value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>{d.tasksTitle}</h4></div>
          <div className="crsl-tasks">
            {d.tasks.map((tk: any, i: number) => (
              <div key={i} className="crsl-task-row">
                <span className={"crsl-task-icon " + (tk.warn ? "warn" : "")}>{(["🔔", "🔔", "✓", "☰"][i] || "·")}</span>
                <span style={{ flex: 1 }}>{tk.name}</span>
                <span style={{ fontFamily: "var(--f-display)", fontSize: 16, fontWeight: 500 }}>{tk.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="crsl-card">
          <div className="crsl-card-head"><h4>Эффективность</h4></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "12px 0" }}>
            <RingProgress value={46} />
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", textTransform: "uppercase", letterSpacing: ".08em" }}>выполнено</div>
          </div>
        </div>
      </div>
    </CrslFrame>
  );
}

function ScreenCallCenter({ d }: { d: any }) {
  const sidebar = {
    title: d.sidebar.title,
    groups: [
      { label: d.sidebar.group1, items: d.sidebar.items1.map((n: string, i: number) => ({ name: n, active: i === 0 })) },
      { label: d.sidebar.group2, items: d.sidebar.items2.map((n: string) => ({ name: n })) },
    ],
  };
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.title}</h2>
          <p className="crsl-page-sub">{d.subtitle}</p>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 999, background: "rgba(124,224,184,.12)", color: "var(--green)", fontFamily: "var(--f-mono)", fontSize: 11 }}>● Реалтайм</span>
      </div>
      <div className="crsl-kpis crsl-kpis-5">
        {d.kpis.map((k: any, i: number) => (
          <div key={i} className="crsl-kpi crsl-kpi-target">
            <div className="crsl-kpi-label">{k.label}</div>
            <div className="crsl-kpi-value">{k.value}</div>
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--green)" }}>↑ опережает</div>
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", marginTop: 4 }}>{k.goal}</div>
          </div>
        ))}
      </div>
      <div className="crsl-cols">
        <div className="crsl-card">
          <div className="crsl-card-head">
            <div>
              <h4>{d.weekTitle}</h4>
              <p style={{ fontSize: 11, color: "var(--cream-mute)", margin: "2px 0 0" }}>{d.weekSub}</p>
            </div>
            <div className="crsl-legend">
              <span><i />{d.legend[0]}</span>
              <span><i style={{ background: "#7CE0B8" }} />{d.legend[1]}</span>
              <span><i style={{ background: "#FF7A8A" }} />{d.legend[2]}</span>
            </div>
          </div>
          <WeekBars data={d.weekValues} />
          <div className="crsl-week-totals">
            {d.weekTotals.map((t: any, i: number) => (
              <div key={i} className="crsl-week-total">
                <span className="crsl-week-num">{t.value.toLocaleString("ru-RU")}</span>
                <span style={{ fontSize: 10, fontFamily: "var(--f-mono)", color: "var(--cream-mute)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="crsl-card">
          <div className="crsl-card-head">
            <div>
              <h4>{d.reasonsTitle}</h4>
              <p style={{ fontSize: 11, color: "var(--cream-mute)", margin: "2px 0 0" }}>{d.reasonsSub}</p>
            </div>
          </div>
          <div className="crsl-bars">
            {d.reasons.map((r: any, i: number) => {
              const colors = ["#A78BFA", "#7CE0B8", "#F4D2A0", "#FF7A8A"];
              return (
                <div key={i} className="crsl-bar-row">
                  <span className="crsl-bar-dot" style={{ background: colors[i] }} />
                  <span className="crsl-bar-label">{r.name}</span>
                  <span className="crsl-bar-track">
                    <span className="crsl-bar-fill" style={{ width: `${r.pct}%`, background: colors[i] }} />
                  </span>
                  <span className="crsl-bar-val">{r.value}</span>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", minWidth: 32, textAlign: "right" }}>{r.pct}%</span>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px dashed var(--ink-line)", display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span style={{ color: "var(--cream-mute)" }}>Всего обращений</span>
            <span style={{ fontFamily: "var(--f-display)", fontWeight: 500 }}>{d.reasons.reduce((a: number, b: any) => a + b.value, 0)}</span>
          </div>
        </div>
      </div>
    </CrslFrame>
  );
}

function ScreenPDI({ d }: { d: any }) {
  const sidebar = {
    title: d.sidebar.title,
    groups: [
      { label: d.sidebar.group1, items: d.sidebar.items1.map((n: string, i: number) => ({ name: n, active: i === 0 })) },
      { label: d.sidebar.group2, items: d.sidebar.items2.map((n: string) => ({ name: n })) },
    ],
  };
  const statusColor = (s: string) =>
    (({ "не начат": "draft", "в обработке": "progress", "реализован": "done" } as Record<string, string>)[s.toLowerCase()] || "draft");
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.title}</h2>
          <p className="crsl-page-sub" style={{ textTransform: "uppercase", letterSpacing: ".06em", fontFamily: "var(--f-mono)", fontSize: 10 }}>{d.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="crsl-tool-btn primary">{d.actions[0]}</span>
          <span className="crsl-tool-btn">{d.actions[1]}</span>
        </div>
      </div>
      <div className="crsl-pdi-stats">
        {d.statBoxes.map((s: any, i: number) => (
          <div key={i} className="crsl-pdi-stat">
            <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500 }}>{s.value}</div>
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--cream-mute)", letterSpacing: ".08em" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="crsl-search">
        <span style={{ color: "var(--cream-mute)" }}>{ico.search}</span>
        <span style={{ color: "var(--cream-mute)", fontSize: 12 }}>{d.searchPlaceholder}</span>
      </div>
      <div className="crsl-pdi-list">
        {d.items.slice(0, 6).map((it: any, i: number) => (
          <div key={i} className="crsl-pdi-item">
            <div className="crsl-pdi-vin">{it.vin}</div>
            <div>
              <span className={"crsl-status crsl-status-" + statusColor(it.status)} style={{ marginBottom: 4 }}>{it.status.toUpperCase()}</span>
              <div className="crsl-pdi-model">{it.model}</div>
              <div className="crsl-pdi-trim">{it.trim}</div>
            </div>
            <div>
              <div className="crsl-pdi-bar">
                {it.stages.map((s: boolean, j: number) => (
                  <span key={j} className={"crsl-pdi-stage " + (s ? "done" : "todo")} />
                ))}
              </div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)", marginTop: 4, textAlign: "right" }}>{it.progress[0]}/{it.progress[1]} этапов</div>
            </div>
            <div className="crsl-pdi-meta">
              <div style={{ fontSize: 11, color: "var(--cream)" }}>{it.dealer}</div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)" }}>{it.admin}</div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--cream-mute)" }}>{it.ts}</div>
            </div>
          </div>
        ))}
      </div>
    </CrslFrame>
  );
}

function ScreenParts({ d }: { d: any }) {
  const sidebar = {
    title: d.sidebar.title,
    groups: [
      { label: d.sidebar.group1, items: d.sidebar.items1.map((n: string, i: number) => ({ name: n, active: i === 0 })) },
      { label: d.sidebar.group2, items: d.sidebar.items2.map((n: string) => ({ name: n })) },
    ],
  };
  const statusColor = (s: string) =>
    (({ "В наличии": "done", Мало: "progress", Заказ: "draft" } as Record<string, string>)[s] || "done");
  return (
    <CrslFrame sidebar={sidebar}>
      <div className="crsl-page-head">
        <div>
          <h2 className="crsl-page-title">{d.title}</h2>
          <p className="crsl-page-sub">{d.subtitle}</p>
        </div>
        <span className="crsl-tool-btn primary">+ Поставка</span>
      </div>
      <div className="crsl-kpis">
        {d.kpis.map((k: any, i: number) => (
          <div key={i} className="crsl-kpi">
            <div className="crsl-kpi-label">{k.label}</div>
            <div className="crsl-kpi-value">{k.value}</div>
          </div>
        ))}
      </div>
      <div className="crsl-table-wrap" style={{ marginTop: 12 }}>
        <table className="crsl-table">
          <thead>
            <tr>{d.cols.map((c: string, i: number) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {d.rows.map((r: string[], i: number) => (
              <tr key={i}>
                <td className="link mono">{r[0]}</td>
                <td>{r[1]}</td>
                <td className="muted">{r[2]}</td>
                <td className="muted">{r[3]}</td>
                <td style={{ fontFamily: "var(--f-mono)" }}>{r[4]}</td>
                <td style={{ fontFamily: "var(--f-mono)" }}>{r[5]}</td>
                <td><span className={"crsl-status crsl-status-" + statusColor(r[6])}>{r[6]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CrslFrame>
  );
}

type Slide = {
  id: string;
  num: string;
  name: string;
  desc: string;
  icon: React.ReactElement;
  screen: React.ReactNode;
};

function ProductSlide({
  slide,
  index,
  total,
  progress,
}: {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const center = total === 1 ? 0 : index / (total - 1);
  const a = Math.max(0, center - 0.16);
  const b = center;
  const c = Math.min(1, center + 0.16);

  const opacity = useTransform(progress, [a, b, c], [0.35, 1, 0.35]);
  const scale = useTransform(progress, [a, b, c], [0.96, 1, 0.96]);
  const y = useTransform(progress, [a, b, c], [18, 0, 18]);
  const bgY = useTransform(progress, (v) => (v - center) * -60);

  return (
    <div className="product-slide">
      <div className="container">
        <motion.div className="product-screen-wrap" style={{ opacity, scale, y }}>
          <motion.div className="product-orb" style={{ y: bgY }} aria-hidden="true" />
          <div className="product-screen-label">
            <span className="k">{slide.num}</span>
            <span className="n">{slide.name}</span>
            <span className="d">{slide.desc}</span>
          </div>
          <div className="module-screen">{slide.screen}</div>
        </motion.div>
      </div>
    </div>
  );
}

export function Dashboard({ t }: { t: any }) {
  const m = t.modules;

  const screens: Record<string, React.ReactNode> = {
    home: <ScreenHome d={m.home} />,
    analytics: <ScreenAnalytics d={m.analytics} />,
    sales: <ScreenSales d={m.sales} />,
    crm: <ScreenCRM d={m.crm} />,
    callcenter: <ScreenCallCenter d={m.callcenter} />,
    pdi: <ScreenPDI d={m.pdi} />,
    parts: <ScreenParts d={m.parts} />,
  };

  const slides = useMemo(
    () =>
      (m.list as any[]).map((mod) => ({
        id: mod.id as string,
        num: mod.num as string,
        name: mod.name as string,
        desc: mod.desc as string,
        icon: moduleIcons[mod.id as string],
        screen: screens[mod.id as string],
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m.list]
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => `-${v * (slides.length - 1) * 100}vw`);
  const [activeIdx, setActiveIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (slides.length - 1));
    setActiveIdx(Math.max(0, Math.min(slides.length - 1, idx)));
  });

  return (
    <section id="product" className="section">
      <div className="product-hscroll" ref={scrollerRef} style={{ height: `${Math.max(4, slides.length) * 100}vh` }}>
        <div className="product-sticky">
          <div className="product-head-wrap">
            <div className="container">
              <div className="product-head">
                <Reveal>
                  <SectionTag>{m.tag}</SectionTag>
                  <h2 className="section-title">
                    {m.title[0]}
                    <em>{m.title[1]}</em>
                    {m.title[2]}
                  </h2>
                  <p className="section-lede">{m.lede}</p>
                </Reveal>

                <div
                  className="product-rail"
                  aria-label="Modules rail"
                  role="tablist"
                >
                  {slides.map((s, i) => (
                    <button
                      type="button"
                      key={s.id}
                      role="tab"
                      aria-selected={i === activeIdx}
                      className={"product-chip" + (i === activeIdx ? " active" : "")}
                      onClick={() => {
                        const el = scrollerRef.current;
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const total = el.offsetHeight - window.innerHeight;
                        const ratio = slides.length === 1 ? 0 : i / (slides.length - 1);
                        const top = window.scrollY + rect.top + total * ratio;
                        window.scrollTo({ top, behavior: "smooth" });
                      }}
                    >
                      <span className="product-chip-icon">{s.icon}</span>
                      <span className="product-chip-body">
                        <span className="product-chip-num">{s.num}</span>
                        <span className="product-chip-name">{s.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-stage">
            <motion.div className="product-track" style={{ x }}>
              {slides.map((s, i) => (
                <ProductSlide
                  key={s.id}
                  slide={s}
                  index={i}
                  total={slides.length}
                  progress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
