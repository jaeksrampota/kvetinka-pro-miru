"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSongList, playSong, stopMusic } from "../lib/music";
import { useTranslation } from "../lib/i18n/LanguageContext";
import type { SongDefinition } from "../lib/music";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentSong, setCurrentSong] = useState<SongDefinition | null>(null);
  const { locale, t } = useTranslation();
  const songs = getSongList();

  const handleStop = useCallback(() => {
    stopMusic();
    setPlaying(false);
    setCurrentSong(null);
  }, []);

  const handleSelect = useCallback(async (song: SongDefinition) => {
    setExpanded(false);
    if (playing) stopMusic();
    setPlaying(true);
    setCurrentSong(song);
    await playSong(song.id);
    setPlaying(false);
    setCurrentSong(null);
  }, [playing]);

  const handleButtonClick = useCallback(() => {
    if (playing) {
      handleStop();
    } else {
      setExpanded((prev) => !prev);
    }
  }, [playing, handleStop]);

  const songTitle = (song: SongDefinition) =>
    locale === "sk" ? song.titleSk : song.titleEn;

  return (
    <div className="fixed top-4 right-24 z-50">
      <motion.button
        onClick={handleButtonClick}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-xl cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
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
        aria-label={playing ? t.stopLabel : t.musicLabel}
      >
        <span className="text-sm">{playing ? "\u23F9" : "\u266B"}</span>
        <span>
          {playing
            ? currentSong
              ? songTitle(currentSong).slice(0, 16)
              : t.stopLabel
            : t.musicLabel}
        </span>
      </motion.button>

      <AnimatePresence>
        {expanded && !playing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 min-w-[200px] max-h-[50vh] overflow-y-auto rounded-2xl backdrop-blur-xl p-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t.chooseSong}
            </p>
            {songs.map((song) => (
              <motion.button
                key={song.id}
                onClick={() => handleSelect(song)}
                className="w-full text-left px-3 py-2 rounded-xl text-xs cursor-pointer select-none transition-colors hover:bg-white/40"
                style={{ color: "var(--color-text-primary)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">{songTitle(song)}</span>
                <br />
                <span className="opacity-60 text-[10px]">
                  {locale === "sk" ? song.descriptionSk : song.descriptionEn}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
