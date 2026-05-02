"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Arrow, Check, SectionTag, Reveal } from "./atoms";
import type { Lang } from "./i18n";

function PriceCard({
  tier,
  monthly,
  popularLabel,
}: {
  tier: any;
  monthly: string;
  popularLabel: string;
}) {
  const sym = tier.display?.[0] ?? "";
  const amt = tier.display?.[1] ?? "";
  return (
    <div className={"price-card" + (tier.popular ? " featured" : "")}>
      {tier.popular && (
        <span className="pop-badge" title={popularLabel}>
          ★ <span className="pop-badge-text">{popularLabel}</span>
        </span>
      )}
      <div className="tier">{tier.name}</div>
      <div className="amount">
        <em>{sym}</em>
        {amt}
      </div>
      <div className="per">{sym ? monthly : ""}</div>
      <div className="desc">{tier.desc}</div>
      <ul>
        {tier.features.map((f: string, i: number) => (
          <li key={i}>
            <span className="check" aria-hidden="true">
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

export function Pricing({ t, lang }: { t: any; lang: Lang }) {
  const p = t.pricing;
  const showCurrencyToggle = lang === "uz";
  const [currency, setCurrency] = useState<"usd" | "uzs">(() => (lang === "uz" ? "uzs" : "usd"));

  const tiers = p.tiers.map((tier: any) => {
    const useUzs = currency === "uzs" && tier.priceUzs;
    const display = useUzs && tier.priceUzs[1] ? tier.priceUzs : tier.price;
    return { ...tier, display };
  });

  const monthly = currency === "uzs" && p.monthlyUzs ? p.monthlyUzs : p.monthly;
  const popularLabel = p.popularLabel ?? "Popular";

  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{p.tag}</SectionTag>
          <h2 className="section-title">
            {p.title[0]}
            <em>{p.title[1]}</em>
          </h2>
          <p className="section-lede">{p.lede}</p>
          {showCurrencyToggle && (
            <div className="pricing-currency" role="group" aria-label="Currency">
              <button
                type="button"
                className={"pricing-currency-btn" + (currency === "usd" ? " active" : "")}
                aria-pressed={currency === "usd"}
                onClick={() => setCurrency("usd")}
              >
                {p.currencyUsd ?? "USD"}
              </button>
              <button
                type="button"
                className={"pricing-currency-btn" + (currency === "uzs" ? " active" : "")}
                aria-pressed={currency === "uzs"}
                onClick={() => setCurrency("uzs")}
              >
                {p.currencyUzs ?? "UZS"}
              </button>
            </div>
          )}
        </Reveal>
        <div className="pricing-grid">
          {tiers.map((tier: any, i: number) => (
            <Reveal key={i} delay={i * 0.1}>
              <PriceCard tier={tier} monthly={monthly} popularLabel={popularLabel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
