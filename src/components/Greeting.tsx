"use client";

import { motion } from "framer-motion";

const prefixWords = ["Všechno", "nejlepší", "k svátku,"];

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
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      delay: 0.9,
    },
  },
};

export default function Greeting() {
  return (
    <motion.h1
      className="text-4xl md:text-6xl text-center text-[var(--color-text-primary)] leading-[1.15] font-bold tracking-tight overflow-visible px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {prefixWords.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-2 md:mr-3">
          {word}
        </motion.span>
      ))}
      <br className="md:hidden" />
      <motion.span variants={nameVariant} className="relative inline-block">
        {/* Soft glow behind name */}
        <span className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden>
          <span className="block w-40 h-12 bg-rose-400/20 blur-2xl rounded-full" />
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
          Míro!
        </span>
      </motion.span>
    </motion.h1>
  );
}
