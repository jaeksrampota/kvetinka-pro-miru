import { FlowerSpecies, PetalData, CenterData, ColorPalette } from "./types";
import { randFloat, randInt } from "../utils/random";

const CX = 100;
const CY = 105;

export function generatePetals(
  species: FlowerSpecies,
  palette: ColorPalette
): { petals: PetalData[]; center: CenterData | null } {
  switch (species) {
    case FlowerSpecies.DAISY:
      return generateDaisy(palette);
    case FlowerSpecies.TULIP:
      return generateTulip(palette);
    case FlowerSpecies.SUNFLOWER:
      return generateSunflower(palette);
    case FlowerSpecies.ROSE:
      return generateRose(palette);
    case FlowerSpecies.PEONY:
      return generatePeony(palette);
    case FlowerSpecies.LAVENDER:
      return generateLavender(palette);
    case FlowerSpecies.POPPY:
      return generatePoppy(palette);
  }
}

function generateDaisy(palette: ColorPalette): { petals: PetalData[]; center: CenterData } {
  const count = randInt(10, 16);
  const petalLength = randFloat(30, 40);
  const petalWidth = randFloat(8, 12);
  const petals: PetalData[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i + randFloat(-3, 3);
    const len = petalLength + randFloat(-4, 4);
    const w = petalWidth + randFloat(-2, 2);

    const d = `M 0 0 Q ${w / 2} ${-len * 0.4}, 0 ${-len} Q ${-w / 2} ${-len * 0.4}, 0 0`;

    petals.push({
      d,
      fill: i % 3 === 0 ? palette.petalSecondary : palette.petalPrimary,
      rotation: angle,
      originX: CX,
      originY: CY,
    });
  }

  const center: CenterData = {
    type: "circle",
    cx: CX,
    cy: CY,
    r: randFloat(10, 14),
    fill: palette.center,
  };

  return { petals, center };
}

function generateTulip(palette: ColorPalette): { petals: PetalData[]; center: null } {
  const count = randInt(3, 5);
  const petalHeight = randFloat(45, 55);
  const petalWidth = randFloat(22, 30);
  const petals: PetalData[] = [];

  for (let i = 0; i < count; i++) {
    const spreadAngle = ((i - (count - 1) / 2) / count) * 30;
    const w = petalWidth + randFloat(-3, 3);
    const h = petalHeight + randFloat(-4, 4);

    const d = `M 0 0 C ${-w * 0.6} ${-h * 0.2}, ${-w * 0.5} ${-h * 0.7}, 0 ${-h} C ${w * 0.5} ${-h * 0.7}, ${w * 0.6} ${-h * 0.2}, 0 0`;

    petals.push({
      d,
      fill: i % 2 === 0 ? palette.petalPrimary : palette.petalSecondary,
      rotation: spreadAngle,
      originX: CX,
      originY: CY + 10,
    });
  }

  return { petals, center: null };
}

function generateSunflower(palette: ColorPalette): { petals: PetalData[]; center: CenterData } {
  const outerCount = randInt(16, 22);
  const innerCount = randInt(12, 16);
  const petals: PetalData[] = [];

  // Outer ring
  for (let i = 0; i < outerCount; i++) {
    const angle = (360 / outerCount) * i + randFloat(-2, 2);
    const len = randFloat(32, 38);
    const w = randFloat(6, 9);

    const d = `M 0 0 Q ${w * 0.3} ${-len * 0.3}, 0 ${-len} Q ${-w * 0.3} ${-len * 0.3}, 0 0`;

    petals.push({
      d,
      fill: palette.petalPrimary,
      rotation: angle,
      originX: CX,
      originY: CY,
    });
  }

  // Inner ring
  for (let i = 0; i < innerCount; i++) {
    const angle = (360 / innerCount) * i + 360 / (innerCount * 2) + randFloat(-2, 2);
    const len = randFloat(22, 28);
    const w = randFloat(5, 7);

    const d = `M 0 0 Q ${w * 0.3} ${-len * 0.3}, 0 ${-len} Q ${-w * 0.3} ${-len * 0.3}, 0 0`;

    petals.push({
      d,
      fill: palette.petalSecondary,
      rotation: angle,
      originX: CX,
      originY: CY,
    });
  }

  // Center disc with dots
  const centerR = randFloat(16, 20);
  const dots: CenterData["dots"] = [];
  for (let i = 0; i < 30; i++) {
    const angle = randFloat(0, Math.PI * 2);
    const dist = randFloat(2, centerR - 2);
    dots.push({
      cx: CX + Math.cos(angle) * dist,
      cy: CY + Math.sin(angle) * dist,
      r: randFloat(1, 2),
      fill: palette.accent,
    });
  }

  return {
    petals,
    center: { type: "disc", cx: CX, cy: CY, r: centerR, fill: palette.center, dots },
  };
}

function generateRose(palette: ColorPalette): { petals: PetalData[]; center: null } {
  const layers = randInt(4, 6);
  const petals: PetalData[] = [];
  const goldenAngle = 137.5;

  for (let layer = 0; layer < layers; layer++) {
    const petalsInLayer = layer < 2 ? 3 : randInt(4, 6);
    const layerScale = 1 - layer * 0.15;
    const size = (35 + randFloat(-3, 3)) * layerScale;

    for (let i = 0; i < petalsInLayer; i++) {
      const baseAngle = goldenAngle * (layer * 5 + i) + randFloat(-8, 8);
      const w = size * 0.6;

      const d = `M 0 0 C ${-w} ${-size * 0.3}, ${-w * 0.8} ${-size * 0.9}, 0 ${-size} C ${w * 0.8} ${-size * 0.9}, ${w} ${-size * 0.3}, 0 0`;

      petals.push({
        d,
        fill: layer < 2 ? palette.petalSecondary : palette.petalPrimary,
        rotation: baseAngle,
        originX: CX,
        originY: CY,
      });
    }
  }

  return { petals, center: null };
}

function generatePeony(palette: ColorPalette): { petals: PetalData[]; center: CenterData } {
  const count = randInt(18, 26);
  const petals: PetalData[] = [];

  for (let i = 0; i < count; i++) {
    const ring = i < 8 ? 0 : i < 16 ? 1 : 2;
    const size = (30 - ring * 7) + randFloat(-3, 3);
    const angle = (360 / Math.min(count, 8)) * (i % 8) + ring * 20 + randFloat(-10, 10);
    const w = size * randFloat(0.5, 0.7);

    // Ruffled edge
    const ruffleX = randFloat(-2, 2);
    const ruffleY = randFloat(-2, 2);

    const d = `M 0 0 C ${-w} ${-size * 0.3}, ${-w * 0.7 + ruffleX} ${-size * 0.8 + ruffleY}, 0 ${-size} C ${w * 0.7 + ruffleX} ${-size * 0.8 + ruffleY}, ${w} ${-size * 0.3}, 0 0`;

    petals.push({
      d,
      fill: ring === 2 ? palette.petalSecondary : palette.petalPrimary,
      rotation: angle,
      originX: CX,
      originY: CY,
    });
  }

  return {
    petals,
    center: { type: "circle", cx: CX, cy: CY, r: 6, fill: palette.center },
  };
}

function generateLavender(palette: ColorPalette): { petals: PetalData[]; center: null } {
  const floretPairs = randInt(8, 14);
  const petals: PetalData[] = [];
  const spikeTop = 50;
  const spikeBottom = 120;

  for (let i = 0; i < floretPairs; i++) {
    const t = i / floretPairs;
    const y = spikeTop + t * (spikeBottom - spikeTop);
    const size = (6 + (1 - t) * 3) + randFloat(-1, 1);
    const angle = randFloat(-5, 5);

    // Left floret
    const dLeft = `M 0 0 Q ${-size} ${-size * 0.4}, ${-size * 0.3} ${-size} Q ${size * 0.2} ${-size * 0.5}, 0 0`;
    petals.push({
      d: dLeft,
      fill: i % 3 === 0 ? palette.petalSecondary : palette.petalPrimary,
      rotation: angle - 30,
      originX: CX,
      originY: y,
    });

    // Right floret
    const dRight = `M 0 0 Q ${size} ${-size * 0.4}, ${size * 0.3} ${-size} Q ${-size * 0.2} ${-size * 0.5}, 0 0`;
    petals.push({
      d: dRight,
      fill: i % 3 === 1 ? palette.petalSecondary : palette.petalPrimary,
      rotation: angle + 30,
      originX: CX,
      originY: y,
    });
  }

  return { petals, center: null };
}

function generatePoppy(palette: ColorPalette): { petals: PetalData[]; center: CenterData } {
  const count = randInt(4, 6);
  const petals: PetalData[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i + randFloat(-5, 5);
    const size = randFloat(35, 45);
    const w = size * randFloat(0.7, 0.9);

    // Crinkled edges via perturbations
    const cx1 = randFloat(-3, 3);
    const cy1 = randFloat(-3, 3);

    const d = `M 0 0 C ${-w + cx1} ${-size * 0.4 + cy1}, ${-w * 0.6 + cx1} ${-size + cy1}, 0 ${-size} C ${w * 0.6 - cx1} ${-size - cy1}, ${w - cx1} ${-size * 0.4 - cy1}, 0 0`;

    petals.push({
      d,
      fill: i % 2 === 0 ? palette.petalPrimary : palette.petalSecondary,
      rotation: angle,
      originX: CX,
      originY: CY,
    });
  }

  return {
    petals,
    center: { type: "circle", cx: CX, cy: CY, r: randFloat(8, 12), fill: palette.center },
  };
}
