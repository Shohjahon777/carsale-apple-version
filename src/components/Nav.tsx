"use client";

import { useEffect, useState } from "react";
import { Arrow, CarMark, Wordmark } from "./atoms";
import { useScrolled } from "./hooks";
import type { Lang } from "./i18n";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function Nav({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}) {
  const scrolled = useScrolled(20);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("carsale_theme") as Theme | null) || null;
    const preferred =
      saved ||
      (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");
    setTheme(preferred);
    document.body.dataset.theme = preferred;
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.body.dataset.theme = next;
      localStorage.setItem("carsale_theme", next);
      return next;
    });
  };

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-row">
        <a href="#top" className="nav-logo" aria-label="Carsale home">
          <CarMark size={28} />
          <Wordmark />
        </a>
        <nav className="nav-links">
          <a href="#features">{t.nav.features}</a>
          <a href="#product">{t.nav.product}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className="nav-right">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-ghost"
            aria-label="Toggle theme"
            style={{ padding: "10px 12px" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <div className="lang-switch" role="tablist" aria-label="Language">
            {(["uz", "ru", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                className={lang === l ? "active" : ""}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#cta" className="btn btn-purple">
            {t.nav.trial} <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
