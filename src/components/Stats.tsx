"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTag, Reveal } from "./atoms";
import { useCounter } from "./hooks";

function StatCell({ num, label }: { num: [string, string]; label: string }) {
  const numeric = parseFloat(num[0]);
  const decimals = num[0].includes(".") ? 1 : 0;
  const [ref, val] = useCounter(numeric, { duration: 1.6, decimals });
  return (
    <div className="cell" ref={ref}>
      <div className="num">
        <em>{val}</em>
        {num[1] && <span className="num-suffix">{num[1]}</span>}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export function Stats({ t }: { t: any }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{t.stats.tag}</SectionTag>
          <h2 className="section-title">
            {t.stats.title[0]}
            <em>{t.stats.title[1]}</em>
            {t.stats.title[2]}
          </h2>
        </Reveal>
        <div className="stats-row">
          {t.stats.cells.map((c: any, i: number) => (
            <StatCell key={i} num={c.num} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
