"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

const nameVariant = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: [0.8, 1.15, 1.0],
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.9,
      scale: { duration: 0.8, delay: 0.9, times: [0, 0.6, 1] },
    },
  },
};

export default function Greeting() {
  const { t } = useTranslation();
  const [entryDone, setEntryDone] = useState(false);

  return (
    <motion.h1
      className="text-4xl md:text-6xl text-center text-[var(--color-text-primary)] leading-[1.15] font-bold tracking-tight overflow-visible px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {t.greeting.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-2 md:mr-3">
          {word}
        </motion.span>
      ))}
      <br className="md:hidden" />
      <motion.span
        variants={nameVariant}
        className="relative inline-block text-5xl md:text-7xl lg:text-8xl font-extrabold"
        onAnimationComplete={() => setEntryDone(true)}
      >
        <motion.span
          className="absolute inset-0 -z-10 flex items-center justify-center"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={
            entryDone
              ? { opacity: [0.15, 0.4, 0.15], scale: [1.0, 1.2, 1.0] }
              : { opacity: 0 }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="block w-60 h-20 blur-2xl rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(186,12,47,0.25), rgba(0,32,91,0.25))",
            }}
          />
        </motion.span>
        <motion.span
          className="inline-block"
          animate={entryDone ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA0C2F] via-[#FF6B8A] to-[#00205B] animate-shimmer"
            style={{
              backgroundSize: "200% auto",
              textShadow: "0 0 20px rgba(186,12,47,0.3), 0 0 40px rgba(0,32,91,0.2)",
            }}
          >
            {t.greetingName}
          </span>
        </motion.span>
      </motion.span>
    </motion.h1>
  );
}
