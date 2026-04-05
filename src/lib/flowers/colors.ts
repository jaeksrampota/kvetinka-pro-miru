import { FlowerSpecies, ColorPalette } from "./types";

const palettes: Record<FlowerSpecies, ColorPalette[]> = {
  [FlowerSpecies.DAISY]: [
    { petalPrimary: "#FFFFFF", petalSecondary: "#F5F0E8", center: "#FFD700", stem: "#4A7C3F", accent: "#FFF8DC" },
    { petalPrimary: "#FFB6C1", petalSecondary: "#FF9AAE", center: "#FFD700", stem: "#3D6B35", accent: "#FFC0CB" },
    { petalPrimary: "#E6D5F5", petalSecondary: "#D4BEE8", center: "#F0C040", stem: "#4A7C3F", accent: "#DBC4F0" },
    { petalPrimary: "#FFF5E6", petalSecondary: "#FFE8CC", center: "#E8A020", stem: "#3D6B35", accent: "#FFECD2" },
  ],
  [FlowerSpecies.TULIP]: [
    { petalPrimary: "#E63946", petalSecondary: "#C1121F", center: "#FFD700", stem: "#3D6B35", accent: "#FF6B6B" },
    { petalPrimary: "#FF6F91", petalSecondary: "#E8567A", center: "#FFE066", stem: "#4A7C3F", accent: "#FF9AB5" },
    { petalPrimary: "#9B59B6", petalSecondary: "#7D3C98", center: "#D4A5E8", stem: "#3D6B35", accent: "#C39BD3" },
    { petalPrimary: "#F39C12", petalSecondary: "#E67E22", center: "#FFE066", stem: "#4A7C3F", accent: "#F5B041" },
    { petalPrimary: "#FFFFFF", petalSecondary: "#F0EAE0", center: "#E8E0D0", stem: "#3D6B35", accent: "#FFF8F0" },
  ],
  [FlowerSpecies.SUNFLOWER]: [
    { petalPrimary: "#FFD700", petalSecondary: "#FFC107", center: "#5D3A1A", stem: "#3D6B35", accent: "#FFE44D" },
    { petalPrimary: "#FFAA00", petalSecondary: "#FF8C00", center: "#4A2E12", stem: "#4A7C3F", accent: "#FFBB33" },
    { petalPrimary: "#FFE57F", petalSecondary: "#FFD54F", center: "#6B4226", stem: "#3D6B35", accent: "#FFF176" },
  ],
  [FlowerSpecies.ROSE]: [
    { petalPrimary: "#E74C6F", petalSecondary: "#C93756", center: "#D44D6E", stem: "#3D6B35", accent: "#F06292" },
    { petalPrimary: "#FF8A9E", petalSecondary: "#E87590", center: "#FF9AAE", stem: "#4A7C3F", accent: "#FFB1C1" },
    { petalPrimary: "#F5E6CC", petalSecondary: "#EDDCB8", center: "#E8D4A0", stem: "#3D6B35", accent: "#FFF0D6" },
    { petalPrimary: "#9B2335", petalSecondary: "#7A1B2A", center: "#B02844", stem: "#3D6B35", accent: "#C93756" },
  ],
  [FlowerSpecies.PEONY]: [
    { petalPrimary: "#FFB6C1", petalSecondary: "#FF9AAE", center: "#E8A0B0", stem: "#4A7C3F", accent: "#FFC0CB" },
    { petalPrimary: "#F8BBD0", petalSecondary: "#F48FB1", center: "#EC8DAE", stem: "#3D6B35", accent: "#FCE4EC" },
    { petalPrimary: "#E8D0E8", petalSecondary: "#D8B8D8", center: "#C8A0C8", stem: "#4A7C3F", accent: "#F0E0F0" },
    { petalPrimary: "#FFFFFF", petalSecondary: "#FFF0F5", center: "#FFE0E8", stem: "#3D6B35", accent: "#FFF5F8" },
  ],
  [FlowerSpecies.LAVENDER]: [
    { petalPrimary: "#9B72CF", petalSecondary: "#7B52A0", center: "#6A4C93", stem: "#4A7C3F", accent: "#B794D6" },
    { petalPrimary: "#8E7CC3", petalSecondary: "#6D5B9E", center: "#5C4A8A", stem: "#3D6B35", accent: "#A594D0" },
    { petalPrimary: "#C5A3E8", petalSecondary: "#AD87D6", center: "#9B72C0", stem: "#4A7C3F", accent: "#D4B8F0" },
  ],
  [FlowerSpecies.POPPY]: [
    { petalPrimary: "#E63946", petalSecondary: "#D62839", center: "#1A1A1A", stem: "#3D6B35", accent: "#FF6B6B" },
    { petalPrimary: "#FF4500", petalSecondary: "#E53E00", center: "#2D2D2D", stem: "#4A7C3F", accent: "#FF6633" },
    { petalPrimary: "#FF7043", petalSecondary: "#F4511E", center: "#1A1A1A", stem: "#3D6B35", accent: "#FF8A65" },
    { petalPrimary: "#FF3D00", petalSecondary: "#DD2C00", center: "#212121", stem: "#4A7C3F", accent: "#FF6E40" },
  ],
};

export function getPalette(species: FlowerSpecies): ColorPalette {
  const options = palettes[species];
  return options[Math.floor(Math.random() * options.length)];
}
