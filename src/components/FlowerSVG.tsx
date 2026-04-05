"use client";

import { motion } from "framer-motion";
import { GeneratedFlower } from "../lib/flowers/types";

interface FlowerSVGProps {
  flower: GeneratedFlower;
}

export default function FlowerSVG({ flower }: FlowerSVGProps) {
  const { petalPaths, stemPath, leaves, center, palette } = flower;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      whileHover={{ rotate: 2, scale: 1.02 }}
      className="w-full max-w-[300px] md:max-w-[360px]"
    >
      <svg viewBox="0 0 200 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* Stem - draws in */}
        <motion.path
          d={stemPath}
          stroke={palette.stem}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />

        {/* Leaves - fade in after stem */}
        {leaves.map((leaf, i) => (
          <motion.path
            key={`leaf-${i}`}
            d={leaf.d}
            fill={leaf.fill}
            opacity={0.85}
            transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotation})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: "easeOut" }}
          />
        ))}

        {/* Center (behind petals for disc type) */}
        {center && center.type === "disc" && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          >
            <circle cx={center.cx} cy={center.cy} r={center.r} fill={center.fill} />
            {center.dots?.map((dot, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={dot.fill}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.7 + i * 0.02 }}
              />
            ))}
          </motion.g>
        )}

        {/* Petals - staggered bloom */}
        {petalPaths.map((petal, i) => (
          <motion.path
            key={`petal-${i}`}
            d={petal.d}
            fill={petal.fill}
            transform={`translate(${petal.originX}, ${petal.originY}) rotate(${petal.rotation})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{
              delay: 0.3 + i * 0.03,
              duration: 0.35,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Center (in front for circle type) */}
        {center && center.type === "circle" && (
          <motion.circle
            cx={center.cx}
            cy={center.cy}
            r={center.r}
            fill={center.fill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          />
        )}
      </svg>
    </motion.div>
  );
}
