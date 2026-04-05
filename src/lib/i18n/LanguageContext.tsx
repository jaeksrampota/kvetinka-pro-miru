"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import type { Locale, UITranslations } from "./translations";
import { getUITranslations } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: UITranslations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("sk");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "sk" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "sk" ? "en" : "sk";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ locale, t: getUITranslations(locale), toggleLanguage }),
    [locale, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be inside LanguageProvider");
  return ctx;
}
