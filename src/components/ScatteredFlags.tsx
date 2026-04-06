"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { randFloat, randInt } from "../lib/utils/random";

interface FlagDecoration {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  animDelay: number;
  animDuration: number;
}

function FlagSVG({ size }: { size: number }) {
  const h = size * (16 / 22);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 22 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22" height="16" fill="#BA0C2F" />
      <rect x="6" y="0" width="4" height="16" fill="#FFFFFF" />
      <rect x="0" y="6" width="22" height="4" fill="#FFFFFF" />
      <rect x="7" y="0" width="2" height="16" fill="#00205B" />
      <rect x="0" y="7" width="22" height="2" fill="#00205B" />
    </svg>
  );
}

export default function ScatteredFlags() {
  const flags = useMemo(() => {
    const count = randInt(18, 24);
    const items: FlagDecoration[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: randFloat(2, 96),
        y: randFloat(2, 96),
        size: randFloat(16, 32),
        rotation: randFloat(-25, 25),
        opacity: randFloat(0.12, 0.28),
        animDelay: randFloat(0, 6),
        animDuration: randFloat(4, 8),
      });
    }
    return items;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {flags.map((f) => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0, rotate: f.rotation }}
          animate={{
            opacity: f.opacity,
            y: [0, -5, 0, 3, 0],
            rotate: [f.rotation, f.rotation + 3, f.rotation - 2, f.rotation],
          }}
          transition={{
            opacity: { duration: 1.5, delay: f.animDelay * 0.3 },
            y: {
              duration: f.animDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.animDelay,
            },
            rotate: {
              duration: f.animDuration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.animDelay,
            },
          }}
          style={{
            position: "absolute",
            left: `${f.x}%`,
            top: `${f.y}%`,
            willChange: "transform",
          }}
        >
          <FlagSVG size={f.size} />
        </motion.div>
      ))}
    </div>
  );
}
