import { FlowerSpecies, GeneratedFlower } from "./types";
import { getPalette } from "./colors";
import { generatePetals } from "./petals";
import { generateStem, generateLeaves } from "./stems";
import { getFlowerInfo } from "../data/flowerData";
import { pick } from "../utils/random";
import type { Locale } from "../i18n/translations";

const allSpecies = Object.values(FlowerSpecies);

let counter = 0;

export function generateFlower(locale: Locale = "sk"): GeneratedFlower {
  const species = pick(allSpecies);
  const palette = getPalette(species);
  const { petals, center } = generatePetals(species, palette);
  const stemPath = generateStem(palette.stem);
  let leafCount: number | undefined;
  if (species === FlowerSpecies.LAVENDER) leafCount = 2;
  else if (species === FlowerSpecies.CHERRY_BLOSSOM) leafCount = 1;
  else if (species === FlowerSpecies.HYDRANGEA) leafCount = 3;
  else if (species === FlowerSpecies.FORGET_ME_NOT) leafCount = 1;
  const leaves = leafCount !== undefined
    ? generateLeaves(palette.stem, leafCount)
    : generateLeaves(palette.stem);
  const { name, fact } = getFlowerInfo(species, locale);

  counter++;

  return {
    species,
    palette,
    petalCount: petals.length,
    name,
    fact,
    id: `flower-${counter}-${Date.now()}`,
    petalPaths: petals,
    stemPath,
    leaves,
    center,
  };
}
