"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { playHappyBirthday, stopMusic } from "../lib/utils/music";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);

  const handleClick = useCallback(async () => {
    if (playing) {
      stopMusic();
      setPlaying(false);
    } else {
      setPlaying(true);
      await playHappyBirthday();
      setPlaying(false);
    }
  }, [playing]);

  return (
    <motion.button
      onClick={handleClick}
      className="fixed top-4 right-24 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-xl cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
      style={{
        backgroundColor: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(255,255,255,0.6)",
        color: "var(--color-text-secondary)",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.3 }}
      aria-label={playing ? "Stop music" : "Play happy birthday"}
    >
      <span className="text-sm">{playing ? "\u23F9" : "\u266B"}</span>
      <span>{playing ? "Stop" : "Music"}</span>
    </motion.button>
  );
}
