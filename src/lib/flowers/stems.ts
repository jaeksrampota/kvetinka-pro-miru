import { LeafData } from "./types";
import { randFloat, randInt } from "../utils/random";

const STEM_BASE_X = 100;
const STEM_BASE_Y = 285;
const STEM_TOP_Y = 130;

export function generateStem(stemColor: string): string {
  const sway = randFloat(-8, 8);
  const cp1x = STEM_BASE_X + sway * 0.5;
  const cp1y = STEM_BASE_Y - 60;
  const cp2x = STEM_BASE_X + sway;
  const cp2y = STEM_TOP_Y + 40;

  return `M ${STEM_BASE_X} ${STEM_BASE_Y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${STEM_BASE_X + sway * 0.3} ${STEM_TOP_Y}`;
}

export function generateLeaves(stemColor: string, count?: number): LeafData[] {
  const leafCount = count ?? randInt(1, 3);
  const leaves: LeafData[] = [];

  for (let i = 0; i < leafCount; i++) {
    const t = randFloat(0.35, 0.7);
    const y = STEM_BASE_Y - t * (STEM_BASE_Y - STEM_TOP_Y);
    const side = i % 2 === 0 ? 1 : -1;
    const size = randFloat(12, 20);
    const rotation = side * randFloat(25, 50);

    const d = `M 0 0 Q ${side * size * 0.6} ${-size * 0.4}, ${side * size} 0 Q ${side * size * 0.6} ${size * 0.4}, 0 0`;

    leaves.push({
      d,
      fill: stemColor,
      x: STEM_BASE_X + randFloat(-2, 2),
      y,
      rotation,
    });
  }

  return leaves;
}
