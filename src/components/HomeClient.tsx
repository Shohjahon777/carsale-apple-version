"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero, Marquee } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { I18N, type Lang } from "@/components/i18n";

const LANG_KEY = "carsale_lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem(LANG_KEY);
  if (raw === "uz" || raw === "ru" || raw === "en") return raw;
  return "en";
}

export function HomeClient() {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setLangState(readStoredLang());
      setHydrated(true);
    });
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l === "uz" ? "uz" : l === "ru" ? "ru" : "en";
  };

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang === "uz" ? "uz" : lang === "ru" ? "ru" : "en";
  }, [lang, hydrated]);

  const t = I18N[lang] ?? I18N.en;

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav lang={lang} setLang={setLang} t={t} />
      <main id="main">
        <Hero t={t} variant="split" />
        <Marquee items={t.marquee} />
        <VideoSection t={{ video: t.video }} />
        <Features t={t} />
        <Dashboard t={t} />
        <Stats t={t} />
        <Pricing key={lang} t={t} lang={lang} />
        <Faq t={t} />
        <Cta t={t} />
        <Footer t={t} />
      </main>
      <Chatbot />
    </>
  );
}
