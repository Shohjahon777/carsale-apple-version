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
          <ul className="cta-bullet-list">
            {t.cta.bullets.map((b: string, i: number) => (
              <li key={i}>
                <span className="cta-bullet-icon" aria-hidden="true">
                  <Check size={14} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <form className="cta-form" onSubmit={submit} noValidate={false}>
            {done ? (
              <div className="cta-success">
                <div className="check-big" aria-hidden="true">
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
                  <div className="field">
                    <label htmlFor="cta-name">{t.cta.f_name}</label>
                    <input id="cta-name" name="name" type="text" required autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="cta-company">{t.cta.f_company}</label>
                    <input id="cta-company" name="organization" type="text" required autoComplete="organization" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cta-role">{t.cta.f_role}</label>
                    <input id="cta-role" name="job-title" type="text" autoComplete="organization-title" />
                  </div>
                  <div className="field">
                    <label htmlFor="cta-filials">{t.cta.f_filials}</label>
                    <select id="cta-filials" name="filials">
                      <option>1</option>
                      <option>2–4</option>
                      <option>5–8</option>
                      <option>9+</option>
                    </select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cta-email">{t.cta.f_email}</label>
                    <input id="cta-email" name="email" type="email" required autoComplete="email" inputMode="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="cta-phone">{t.cta.f_phone}</label>
                    <input id="cta-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cta-msg">{t.cta.f_msg}</label>
                  <textarea id="cta-msg" name="message" rows={3} />
                </div>
                <button type="submit" className="btn btn-purple cta-submit-btn">
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
