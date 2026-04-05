"use client";

import { motion, AnimatePresence } from "framer-motion";
import FlowerSVG from "./FlowerSVG";
import FlowerInfo from "./FlowerInfo";
import { GeneratedFlower } from "../lib/flowers/types";

interface FlowerDisplayProps {
  flower: GeneratedFlower | null;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(6px)",
    transition: { duration: 0.25 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FlowerDisplay({ flower }: FlowerDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      {flower && (
        <motion.div
          key={flower.id}
          className="flex flex-col items-center gap-6 p-8 md:p-12 rounded-3xl max-w-md w-full backdrop-blur-xl"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-surface-border)",
            boxShadow: `0 0 60px ${flower.palette.petalPrimary}30, 0 8px 32px rgba(0,0,0,0.08)`,
          }}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{
            y: -4,
            boxShadow: `0 0 60px ${flower.palette.petalPrimary}40, 0 12px 40px rgba(0,0,0,0.12)`,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div variants={childVariants}>
            <FlowerSVG flower={flower} />
          </motion.div>
          <motion.div variants={childVariants}>
            <FlowerInfo name={flower.name} fact={flower.fact} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
