"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";

export default function NorwegianFlag() {
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-md overflow-hidden shadow-md"
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.4 }}
      aria-label="Norwegian flag"
      title="Norge!"
    >
      {/* Norwegian flag SVG — Scandinavian cross design */}
      <motion.svg
        width="48"
        height="35"
        viewBox="0 0 22 16"
        xmlns="http://www.w3.org/2000/svg"
        animate={
          clicks > 0
            ? {
                rotate: [0, -10, 10, -5, 5, 0],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
        key={clicks}
      >
        {/* Red background */}
        <rect width="22" height="16" fill="#BA0C2F" />
        {/* White cross */}
        <rect x="6" y="0" width="4" height="16" fill="#FFFFFF" />
        <rect x="0" y="6" width="22" height="4" fill="#FFFFFF" />
        {/* Blue cross */}
        <rect x="7" y="0" width="2" height="16" fill="#00205B" />
        <rect x="0" y="7" width="22" height="2" fill="#00205B" />
      </motion.svg>
    </motion.button>
  );
}
