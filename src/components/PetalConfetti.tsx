"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randFloat, randInt, pick } from "../lib/utils/random";

const PETAL_SHAPES = [
  "50% 50% 50% 0%",
  "50% 0% 50% 50%",
  "40% 60% 40% 60%",
  "60% 40% 60% 20%",
];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  swayKeyframes: string[];
  rotation: number;
  borderRadius: string;
}

interface PetalConfettiProps {
  trigger: number;
  colors: string[];
}

let particleIdCounter = 0;

export default function PetalConfetti({ trigger, colors }: PetalConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showBurst, setShowBurst] = useState(false);
  const [burstColor, setBurstColor] = useState("#FFB6C1");

  useEffect(() => {
    if (trigger <= 0) return;

    // Burst flash
    setBurstColor(colors[0] || "#FFB6C1");
    setShowBurst(true);
    const burstTimeout = setTimeout(() => setShowBurst(false), 800);

    const count = randInt(20, 30);
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particleIdCounter++;
      const startX = randFloat(5, 95);
      // 5-6 sway keyframes for organic motion
      const swayAmt = randFloat(20, 60);
      const swayKeyframes = [
        `${startX}vw`,
        `${startX + swayAmt * 0.3}vw`,
        `${startX - swayAmt * 0.2}vw`,
        `${startX + swayAmt * 0.4}vw`,
        `${startX - swayAmt * 0.3}vw`,
        `${startX}vw`,
      ];

      newParticles.push({
        id: particleIdCounter,
        x: startX,
        color: colors[i % colors.length] || "#FFB6C1",
        size: randFloat(4, 16),
        duration: randFloat(2.5, 5),
        delay: randFloat(0, 1),
        swayKeyframes,
        rotation: randFloat(0, 360),
        borderRadius: pick(PETAL_SHAPES),
      });
    }

    setParticles(newParticles);

    const timeout = setTimeout(() => setParticles([]), 6500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(burstTimeout);
    };
  }, [trigger, colors]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
      {/* Background burst flash */}
      <AnimatePresence>
        {showBurst && (
          <motion.div
            key="burst"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${burstColor}40 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.15, 0], scale: [0.5, 1.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      {/* Petal particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: -20,
              rotate: p.rotation,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              y: "110vh",
              rotate: p.rotation + randFloat(540, 720),
              x: p.swayKeyframes,
              opacity: [0, 1, 1, 1, 0],
              scale: [0.6, 1, 0.9, 1, 0.7],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
              x: { duration: p.duration, ease: "easeInOut" },
            }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size * 1.4,
              borderRadius: p.borderRadius,
              backgroundColor: p.color,
              willChange: "transform",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
