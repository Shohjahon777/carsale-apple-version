"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarMark, Wordmark, Reveal } from "./atoms";

export function Footer({ t }: { t: any }) {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <CarMark size={28} />
              <Wordmark />
            </div>
            <p style={{ color: "var(--cream-dim)", fontSize: 14, maxWidth: "36ch", lineHeight: 1.55, margin: 0 }}>
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h5>{t.footer.product}</h5>
            <ul>{t.footer.product_l.map((l: string, i: number) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.company}</h5>
            <ul>{t.footer.company_l.map((l: string, i: number) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.resources}</h5>
            <ul>{t.footer.resources_l.map((l: string, i: number) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
        </Reveal>

        <Reveal className="footer-mega" delay={0.2}>car<em>sale</em></Reveal>

        <div className="footer-bottom">
          <span>{t.footer.copy}</span>
          <span style={{ display: "flex", gap: 18 }}>
            {t.footer.legal.map((l: string, i: number) => <a key={i} href="#">{l}</a>)}
          </span>
        </div>
      </div>
    </footer>
  );
}
