"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Arrow, Check, SectionTag, Reveal } from "./atoms";

function PriceCard({ tier, monthly }: { tier: any; monthly: string }) {
  return (
    <div className={"price-card" + (tier.popular ? " featured" : "")}>
      {tier.popular && <span className="pop-badge">★</span>}
      <div className="tier">{tier.name}</div>
      <div className="amount">
        <em>{tier.price[0]}</em>
        {tier.price[1]}
      </div>
      <div className="per">{tier.price[0] ? monthly : ""}</div>
      <div className="desc">{tier.desc}</div>
      <ul>
        {tier.features.map((f: string, i: number) => (
          <li key={i}>
            <span className="check">
              <Check size={14} />
            </span>{" "}
            {f}
          </li>
        ))}
      </ul>
      <div className="cta">
        <a href="#cta" className={tier.popular ? "btn btn-purple" : "btn btn-ghost"}>
          {tier.cta} <Arrow />
        </a>
      </div>
    </div>
  );
}

export function Pricing({ t }: { t: any }) {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{t.pricing.tag}</SectionTag>
          <h2 className="section-title">
            {t.pricing.title[0]}
            <em>{t.pricing.title[1]}</em>
          </h2>
          <p className="section-lede">{t.pricing.lede}</p>
        </Reveal>
        <div className="pricing-grid">
          {t.pricing.tiers.map((tier: any, i: number) => (
            <Reveal key={i} delay={i * 0.1}>
              <PriceCard tier={tier} monthly={t.pricing.monthly} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
