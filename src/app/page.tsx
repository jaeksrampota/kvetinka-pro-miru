"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Greeting from "../components/Greeting";
import GenerateButton from "../components/GenerateButton";
import FlowerDisplay from "../components/FlowerDisplay";
import PetalConfetti from "../components/PetalConfetti";
import FloatingParticles from "../components/FloatingParticles";
import LanguageToggle from "../components/LanguageToggle";
import MusicButton from "../components/MusicButton";
import NorwegianFlag from "../components/NorwegianFlag";
import RotatingPhoto from "../components/RotatingPhoto";
import { generateFlower } from "../lib/flowers/generator";
import { GeneratedFlower } from "../lib/flowers/types";
import { LanguageProvider, useTranslation } from "../lib/i18n/LanguageContext";

function HomeContent() {
  const { locale } = useTranslation();
  const [flower, setFlower] = useState<GeneratedFlower | null>(null);
  const [confettiTrigger, setConfettiTrigger] = useState(1);

  const handleGenerate = useCallback(() => {
    const newFlower = generateFlower(locale);
    setFlower(newFlower);
    setConfettiTrigger((prev) => prev + 1);
  }, [locale]);

  // Re-generate flower when language changes so name/fact update
  useEffect(() => {
    if (flower) {
      setFlower(generateFlower(locale));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const confettiColors = useMemo(() => {
    if (!flower) return ["#00205B", "#BA0C2F", "#2e7d32", "#fdd835", "#64b5f6"];
    const p = flower.palette;
    return [p.petalPrimary, p.petalSecondary, p.accent, p.center];
  }, [flower]);

  // Register service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  // Ambient mood: shift page accent colors to match current flower
  useEffect(() => {
    if (!flower) return;
    const root = document.documentElement;
    const primary = flower.palette.petalPrimary;
    const secondary = flower.palette.petalSecondary;
    root.style.setProperty("--color-glow", `${primary}40`);
    root.style.setProperty("--color-accent-from", primary);
    root.style.setProperty("--color-accent-to", secondary);

    return () => {
      root.style.removeProperty("--color-glow");
      root.style.removeProperty("--color-accent-from");
      root.style.removeProperty("--color-accent-to");
    };
  }, [flower]);

  return (
    <main className="relative flex flex-col items-center min-h-dvh px-6 md:px-8 pt-20 md:pt-28 pb-12 gap-10 md:gap-14 overflow-x-hidden">
      <FloatingParticles />
      <PetalConfetti trigger={confettiTrigger} colors={confettiColors} />
      <MusicButton />
      <LanguageToggle />
      <NorwegianFlag />

      <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-xl">
        <div style={{ display: "flex", alignItems: "center", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          <div className="flex flex-col items-center" style={{ gap: 40 }}>
            <div className="font-[family-name:var(--font-caveat)]">
              <Greeting />
            </div>
            <GenerateButton onClick={handleGenerate} hasFlower={!!flower} />
          </div>
          <RotatingPhoto />
        </div>

        <FlowerDisplay flower={flower} />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
