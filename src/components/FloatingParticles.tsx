"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { randFloat, randInt } from "../lib/utils/random";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const particles = useMemo(() => {
    const count = randInt(15, 20);
    const items: Particle[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: randFloat(2, 98),
        size: randFloat(2, 6),
        duration: randFloat(15, 30),
        delay: randFloat(0, 15),
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: "var(--color-glow, rgba(244,114,182,0.35))",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
