"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLanguage } = useTranslation();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-xl cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:outline-none"
      style={{
        backgroundColor: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(255,255,255,0.6)",
        color: "var(--color-text-secondary)",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      aria-label={locale === "sk" ? "Switch to English" : "Prepnúť na slovenčinu"}
    >
      <span className={locale === "sk" ? "opacity-100" : "opacity-40"}>SK</span>
      <span className="opacity-30">|</span>
      <span className={locale === "en" ? "opacity-100" : "opacity-40"}>EN</span>
    </motion.button>
  );
}
