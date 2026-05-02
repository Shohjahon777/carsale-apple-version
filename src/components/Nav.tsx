"use client";

import { useEffect, useState } from "react";
import { Arrow, CarsaleLogo } from "./atoms";
import { useScrolled } from "./hooks";
import type { Lang } from "./i18n";
import { Moon, Sun, Menu, X } from "lucide-react";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("carsale_theme") as Theme | null) || null;
    const preferred =
      saved ||
      (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");
    queueMicrotask(() => {
      setTheme(preferred);
    });
    document.body.dataset.theme = preferred;
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.body.dataset.theme = next;
      localStorage.setItem("carsale_theme", next);
      return next;
    });
  };

  const nav = t.nav;

  return (
    <>
      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="container nav-row">
          <a href="#top" className="nav-logo" aria-label="Carsale home">
            <CarsaleLogo height={34} priority />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#features">{nav.features}</a>
            <a href="#product">{nav.product}</a>
            <a href="#pricing">{nav.pricing}</a>
            <a href="#faq">{nav.faq}</a>
          </nav>
          <div className="nav-right">
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-ghost nav-theme-btn"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <div className="lang-switch" role="group" aria-label="Language">
              {(["uz", "ru", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  className={lang === l ? "active" : ""}
                  aria-pressed={lang === l}
                  aria-label={`Language ${l.toUpperCase()}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>
            <a href="#cta" className="btn btn-purple">
              {nav.trial} <Arrow />
            </a>
            <button
              type="button"
              className="nav-menu-btn"
              aria-expanded={drawerOpen}
              aria-controls="nav-mobile-drawer"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen((o) => !o)}
            >
              {drawerOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={"nav-drawer-backdrop" + (drawerOpen ? " open" : "")}
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        id="nav-mobile-drawer"
        className={"nav-drawer" + (drawerOpen ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <a href="#features" onClick={() => setDrawerOpen(false)}>
          {nav.features}
        </a>
        <a href="#product" onClick={() => setDrawerOpen(false)}>
          {nav.product}
        </a>
        <a href="#pricing" onClick={() => setDrawerOpen(false)}>
          {nav.pricing}
        </a>
        <a href="#faq" onClick={() => setDrawerOpen(false)}>
          {nav.faq}
        </a>
        <a href="#cta" className="btn btn-purple" style={{ marginTop: 16, textAlign: "center", justifyContent: "center" }} onClick={() => setDrawerOpen(false)}>
          {nav.trial} <Arrow />
        </a>
      </div>
    </>
  );
}
