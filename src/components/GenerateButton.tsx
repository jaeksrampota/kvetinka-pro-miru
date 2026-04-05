"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../lib/i18n/LanguageContext";

interface GenerateButtonProps {
  onClick: () => void;
  hasFlower: boolean;
}

export default function GenerateButton({ onClick, hasFlower }: GenerateButtonProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.2, type: "spring", stiffness: 120, damping: 14 }}
    >
      {/* Outer glow halo */}
      <div
        className="absolute -inset-4 rounded-full blur-xl opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-accent-from, #f472b6), var(--color-accent-to, #c084fc))",
          opacity: 0.2,
          transition: "background-image 1.5s ease",
        }}
        aria-hidden
      />

      <motion.button
        onClick={onClick}
        className="relative text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold tracking-wide shadow-lg cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:outline-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-accent-from, #f472b6), #ec4899, var(--color-accent-to, #c084fc))",
          transition: "background-image 1.5s ease",
        }}
        whileHover={{
          scale: 1.06,
          boxShadow:
            "0 0 40px rgba(244,114,182,0.45), 0 10px 30px rgba(192,132,252,0.2)",
        }}
        whileTap={{ scale: 0.94 }}
        // Idle pulse when no flower is shown
        {...(!hasFlower && {
          animate: {
            boxShadow: [
              "0 4px 14px rgba(244,114,182,0.3)",
              "0 4px 14px rgba(244,114,182,0.3), 0 0 0 12px rgba(244,114,182,0)",
              "0 4px 14px rgba(244,114,182,0.3)",
            ],
          },
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        })}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={hasFlower ? "next" : "first"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {hasFlower ? t.buttonNext : t.buttonFirst}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}
