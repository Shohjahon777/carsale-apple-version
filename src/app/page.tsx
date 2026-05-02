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

type HeroVariant = "split" | "editorial" | "typeled";
type Typo = "grotesk" | "dm" | "editorial";
type Density = "compact" | "default" | "airy";

type Tweaks = {
  lang: Lang;
  heroVariant: HeroVariant;
  typo: Typo;
  density: Density;
};

const DEFAULTS: Tweaks = {
  lang: "en",
  heroVariant: "split",
  typo: "grotesk",
  density: "default",
};

export default function Page() {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);
  const setTweak = <K extends keyof Tweaks>(k: K, v: Tweaks[K]) =>
    setTweaks((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    document.body.dataset.typo = tweaks.typo;
    document.body.dataset.density = tweaks.density;
  }, [tweaks.typo, tweaks.density]);

  const t = I18N[tweaks.lang] || I18N.en;

  return (
    <>
      <Nav lang={tweaks.lang} setLang={(l) => setTweak("lang", l)} t={t} />
      <Hero t={t} variant={tweaks.heroVariant} />
      <Marquee items={t.marquee} />
      <VideoSection t={t} />
      <Features t={t} />
      <Dashboard t={t} />
      <Stats t={t} />
      <Pricing t={t} />
      <Faq t={t} />
      <Cta t={t} />
      <Footer t={t} />
      <Chatbot />
    </>
  );
}
