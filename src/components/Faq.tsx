"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Plus, SectionTag, Reveal } from "./atoms";

export function Faq({ t }: { t: any }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{t.faq.tag}</SectionTag>
          <h2 className="section-title">
            {t.faq.title[0]}
            <em>{t.faq.title[1]}</em>
            {t.faq.title[2]}
          </h2>
        </Reveal>
        <div className="faq-list">
          {t.faq.items.map((it: any, i: number) => (
            <Reveal key={i} delay={i * 0.05}>
              <details
                className="faq-item"
                open={open === i}
                onToggle={(e) => {
                  if (e.currentTarget.open) setOpen(i);
                  else if (open === i) setOpen(null);
                }}
              >
                <summary>
                  <span>{it.q}</span>
                  <span className="plus" aria-hidden="true">
                    <Plus size={16} />
                  </span>
                </summary>
                <div className="answer">{it.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
