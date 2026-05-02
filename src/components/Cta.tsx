"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Arrow, Check, SectionTag, Reveal } from "./atoms";

export function Cta({ t }: { t: any }) {
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="cta" className="final-cta">
      <div className="container final-cta-inner">
        <Reveal>
          <SectionTag>{t.cta.tag}</SectionTag>
          <h2 className="section-title">
            {t.cta.title[0]}
            <em>{t.cta.title[1]}</em>
            {t.cta.title[2]}
          </h2>
          <p className="section-lede">{t.cta.lede}</p>
          <ul style={{ marginTop: 28, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {t.cta.bullets.map((b: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--cream-dim)", fontSize: 15 }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(0,102,204,.15)", color: "var(--purple)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={14} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <form className="cta-form" onSubmit={submit}>
            {done ? (
              <div className="cta-success">
                <div className="check-big">
                  <Check size={28} />
                </div>
                <h3>{t.cta.success[0]}</h3>
                <p>{t.cta.success[1]}</p>
              </div>
            ) : (
              <>
                <h3>{t.cta.formTitle}</h3>
                <p>{t.cta.formSub}</p>
                <div className="field-row">
                  <div className="field"><label>{t.cta.f_name}</label><input required defaultValue="" /></div>
                  <div className="field"><label>{t.cta.f_company}</label><input required /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>{t.cta.f_role}</label><input /></div>
                  <div className="field">
                    <label>{t.cta.f_filials}</label>
                    <select><option>1</option><option>2–4</option><option>5–8</option><option>9+</option></select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field"><label>{t.cta.f_email}</label><input type="email" required /></div>
                  <div className="field"><label>{t.cta.f_phone}</label><input /></div>
                </div>
                <div className="field"><label>{t.cta.f_msg}</label><textarea rows={3} /></div>
                <button type="submit" className="btn btn-purple" style={{ width: "100%", justifyContent: "center", marginTop: 6 }}>
                  {t.cta.submit} <Arrow />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
