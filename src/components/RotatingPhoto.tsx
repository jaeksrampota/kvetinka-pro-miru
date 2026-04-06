"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { randFloat, randInt } from "../lib/utils/random";

const W = 200;
const H = 250;

export default function RotatingPhoto() {
  const controls = useAnimation();
  const [initialAngle] = useState(() => randFloat(-12, 12));
  const [pixelLevel, setPixelLevel] = useState(0); // 0 = normal, >0 = pixelated
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const animRef = useRef<number>(0);

  // Periodically rotate to a new random angle
  useEffect(() => {
    const id = setInterval(() => {
      controls.start({
        rotate: randFloat(-15, 15),
        transition: { type: "spring", stiffness: 80, damping: 12 },
      });
    }, randFloat(3000, 5000));
    return () => clearInterval(id);
  }, [controls]);

  // Pixelation animation via canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || pixelLevel === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pixelate: draw small then scale up
    const blockSize = pixelLevel;
    const sw = Math.max(2, Math.floor(W / blockSize));
    const sh = Math.max(2, Math.floor(H / blockSize));

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W, H);
    // Draw image at tiny size
    ctx.drawImage(img, 0, 0, sw, sh);
    // Scale tiny version back up — pixelated!
    ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, W, H);
  }, [pixelLevel]);

  // Click: pixelate then animate back to clear
  const handleClick = useCallback(() => {
    controls.start({
      rotate: randFloat(-20, 20),
      transition: { type: "spring", stiffness: 200, damping: 10 },
    });

    // Animate: pixelate in, hold, then slowly depixelate
    clearTimeout(animRef.current);
    const maxBlock = randInt(16, 28);
    let block = maxBlock;
    setPixelLevel(block);

    const step = () => {
      block -= 1;
      if (block <= 0) {
        setPixelLevel(0);
        return;
      }
      setPixelLevel(block);
      // Use setTimeout for slower, more visible depixelation
      animRef.current = window.setTimeout(step, 50) as unknown as number;
    };

    // Hold the pixelated state then animate out
    setTimeout(() => step(), 400);
  }, [controls]);

  return (
    <div style={{ zIndex: 20 }}>
    <motion.div
      className="cursor-pointer select-none"
      initial={{ opacity: 0, scale: 0.85, rotate: initialAngle, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, rotate: initialAngle, filter: "blur(0px)" }}
      transition={{
        delay: 1.8,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <motion.div
        animate={controls}
        className="p-3 rounded-3xl backdrop-blur-xl"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-surface-border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 0 60px rgba(100,181,246,0.15)",
        }}
      >
        <div className="relative rounded-2xl overflow-hidden" style={{ width: W, height: H }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/group-photo.jpeg"
            alt="Group photo"
            className="object-cover"
            crossOrigin="anonymous"
            style={{
              width: W,
              height: H,
              opacity: pixelLevel > 0 ? 0 : 1,
            }}
          />
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              opacity: pixelLevel > 0 ? 1 : 0,
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
}
