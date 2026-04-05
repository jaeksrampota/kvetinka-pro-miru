"use client";

import { motion } from "framer-motion";

interface FlowerInfoProps {
  name: string;
  fact: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FlowerInfo({ name, fact }: FlowerInfoProps) {
  return (
    <motion.div
      className="text-center max-w-xs"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-xl md:text-2xl font-bold tracking-widest uppercase text-[var(--color-text-primary)]"
        variants={itemVariants}
      >
        {name}
      </motion.h2>

      {/* Decorative divider */}
      <motion.div
        className="h-px w-16 mx-auto my-3 bg-gradient-to-r from-transparent via-rose-300 to-transparent origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
      />

      <motion.p
        className="text-sm md:text-base text-[var(--color-text-secondary)] italic leading-relaxed"
        variants={itemVariants}
      >
        {fact}
      </motion.p>
    </motion.div>
  );
}
