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
  [FlowerSpecies.ORCHID]: [
    { petalPrimary: "#DA70D6", petalSecondary: "#BA55D3", center: "#FFD700", stem: "#3D6B35", accent: "#EE82EE" },
    { petalPrimary: "#FF69B4", petalSecondary: "#FF1493", center: "#FFE066", stem: "#4A7C3F", accent: "#FFB6C1" },
    { petalPrimary: "#E8D0F0", petalSecondary: "#D8B0E8", center: "#C8A028", stem: "#3D6B35", accent: "#F0E0F8" },
    { petalPrimary: "#9370DB", petalSecondary: "#7B68EE", center: "#FFD700", stem: "#4A7C3F", accent: "#B08ADB" },
  ],
  [FlowerSpecies.LILY]: [
    { petalPrimary: "#FFFFFF", petalSecondary: "#FFF5E6", center: "#4A7C3F", stem: "#3D6B35", accent: "#FFFAF0" },
    { petalPrimary: "#FF8C00", petalSecondary: "#FF7700", center: "#8B4513", stem: "#4A7C3F", accent: "#FFA940" },
    { petalPrimary: "#FFB6C1", petalSecondary: "#FF9AAE", center: "#228B22", stem: "#3D6B35", accent: "#FFC0CB" },
    { petalPrimary: "#FFD700", petalSecondary: "#FFC107", center: "#6B4226", stem: "#4A7C3F", accent: "#FFE44D" },
  ],
  [FlowerSpecies.DAHLIA]: [
    { petalPrimary: "#DC143C", petalSecondary: "#B22222", center: "#FFD700", stem: "#3D6B35", accent: "#FF6B6B" },
    { petalPrimary: "#FF6347", petalSecondary: "#FF4500", center: "#E8A020", stem: "#4A7C3F", accent: "#FF7F50" },
    { petalPrimary: "#FFB347", petalSecondary: "#FFA500", center: "#8B4513", stem: "#3D6B35", accent: "#FFCC66" },
    { petalPrimary: "#E066FF", petalSecondary: "#CC44FF", center: "#FFD700", stem: "#4A7C3F", accent: "#D89EF7" },
  ],
  [FlowerSpecies.IRIS]: [
    { petalPrimary: "#4B0082", petalSecondary: "#6A0DAD", center: "#FFD700", stem: "#3D6B35", accent: "#7B52AB" },
    { petalPrimary: "#6959CD", petalSecondary: "#483D8B", center: "#E8C840", stem: "#4A7C3F", accent: "#9370DB" },
    { petalPrimary: "#4169E1", petalSecondary: "#0000CD", center: "#FFD700", stem: "#3D6B35", accent: "#6495ED" },
  ],
  [FlowerSpecies.CHERRY_BLOSSOM]: [
    { petalPrimary: "#FFB7C5", petalSecondary: "#FF9EB5", center: "#FFD700", stem: "#8B6C5C", accent: "#FFC0CB" },
    { petalPrimary: "#FFC0CB", petalSecondary: "#FFB6C1", center: "#E8C840", stem: "#8B7355", accent: "#FFD1DC" },
    { petalPrimary: "#FFFFFF", petalSecondary: "#FFF0F5", center: "#FFD700", stem: "#8B6C5C", accent: "#FFF5F8" },
  ],
  [FlowerSpecies.HYDRANGEA]: [
    { petalPrimary: "#6495ED", petalSecondary: "#4169E1", center: "#6495ED", stem: "#3D6B35", accent: "#87CEFA" },
    { petalPrimary: "#DDA0DD", petalSecondary: "#DA70D6", center: "#DDA0DD", stem: "#4A7C3F", accent: "#EE82EE" },
    { petalPrimary: "#FF69B4", petalSecondary: "#FF1493", center: "#FF69B4", stem: "#3D6B35", accent: "#FFB6C1" },
    { petalPrimary: "#E6E6FA", petalSecondary: "#D8BFD8", center: "#B0C4DE", stem: "#4A7C3F", accent: "#F0E6FF" },
  ],
  [FlowerSpecies.FORGET_ME_NOT]: [
    { petalPrimary: "#87CEEB", petalSecondary: "#6BB3D9", center: "#FFD700", stem: "#3D6B35", accent: "#ADD8E6" },
    { petalPrimary: "#6495ED", petalSecondary: "#4682B4", center: "#FFD700", stem: "#4A7C3F", accent: "#87CEFA" },
    { petalPrimary: "#B0C4DE", petalSecondary: "#8FAADC", center: "#FFE066", stem: "#3D6B35", accent: "#C6D9F1" },
  ],
};

export function getPalette(species: FlowerSpecies): ColorPalette {
  const options = palettes[species];
  return options[Math.floor(Math.random() * options.length)];
}
