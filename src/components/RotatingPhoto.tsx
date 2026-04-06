"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { randFloat, randInt } from "../lib/utils/random";

const W = 150;
const H = 190;

interface RotatingPhotoProps {
  delay?: number;
  finalAngle?: number;
}

export default function RotatingPhoto({
  delay = 0.3,
  finalAngle = 0,
}: RotatingPhotoProps) {
  const controls = useAnimation();
  const [initialAngle] = useState(() => randFloat(-18, 18));
  const [pixelLevel, setPixelLevel] = useState(24); // start fully pixelated
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const animRef = useRef<number>(0);
  const imgLoaded = useRef(false);
  const entryDone = useRef(false);

  // Entry animation: depixelate + rotate to final angle after delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Start rotation to final angle
      controls.start({
        rotate: finalAngle,
        transition: { type: "spring", stiffness: 50, damping: 14 },
      });

      // Depixelate step by step
      let block = 24;
      const step = () => {
        block -= 1;
        if (block <= 0) {
          setPixelLevel(0);
          entryDone.current = true;
          return;
        }
        setPixelLevel(block);
        animRef.current = window.setTimeout(step, 75) as unknown as number;
      };
      // Only start if image is loaded, otherwise wait for it
      if (imgLoaded.current) {
        step();
      } else {
        const check = setInterval(() => {
          if (imgLoaded.current) {
            clearInterval(check);
            step();
          }
        }, 50);
      }
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(animRef.current);
    };
  }, [delay, finalAngle, controls]);

  // Canvas pixelation rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || pixelLevel === 0 || !imgLoaded.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const blockSize = pixelLevel;
    const sw = Math.max(2, Math.floor(W / blockSize));
    const sh = Math.max(2, Math.floor(H / blockSize));

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, 0, 0, sw, sh);
    ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, W, H);
  }, [pixelLevel]);

  const handleImageLoad = useCallback(() => {
    imgLoaded.current = true;
    // Draw first pixelated frame immediately
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const blockSize = 24;
    const sw = Math.max(2, Math.floor(W / blockSize));
    const sh = Math.max(2, Math.floor(H / blockSize));
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, 0, 0, sw, sh);
    ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, W, H);
  }, []);

  // Click: pixelate then depixelate (fun interaction)
  const handleClick = useCallback(() => {
    if (!entryDone.current) return;

    controls.start({
      rotate: finalAngle + randFloat(-8, 8),
      transition: { type: "spring", stiffness: 200, damping: 10 },
    });

    clearTimeout(animRef.current);
    const maxBlock = randInt(16, 28);
    let block = maxBlock;
    setPixelLevel(block);

    const step = () => {
      block -= 1;
      if (block <= 0) {
        setPixelLevel(0);
        controls.start({
          rotate: finalAngle,
          transition: { type: "spring", stiffness: 80, damping: 12 },
        });
        return;
      }
      setPixelLevel(block);
      animRef.current = window.setTimeout(step, 50) as unknown as number;
    };

    setTimeout(() => step(), 400);
  }, [controls, finalAngle]);

  return (
    <div style={{ zIndex: 20 }}>
      <motion.div
        className="cursor-pointer select-none"
        initial={{ opacity: 1, scale: 0.85, rotate: initialAngle }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: delay * 0.5,
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
        }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <motion.div
          animate={controls}
          initial={{ rotate: initialAngle }}
          className="p-2 rounded-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-surface-border)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.08), 0 0 60px rgba(100,181,246,0.15)",
          }}
        >
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ width: W, height: H }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src="/group-photo.jpeg"
              alt="Group photo"
              className="object-cover"
              crossOrigin="anonymous"
              onLoad={handleImageLoad}
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
