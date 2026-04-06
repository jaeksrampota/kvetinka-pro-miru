export enum FlowerSpecies {
  DAISY = "DAISY",
  TULIP = "TULIP",
  SUNFLOWER = "SUNFLOWER",
  ROSE = "ROSE",
  PEONY = "PEONY",
  LAVENDER = "LAVENDER",
  POPPY = "POPPY",
  ORCHID = "ORCHID",
  LILY = "LILY",
  DAHLIA = "DAHLIA",
  IRIS = "IRIS",
  CHERRY_BLOSSOM = "CHERRY_BLOSSOM",
  HYDRANGEA = "HYDRANGEA",
  FORGET_ME_NOT = "FORGET_ME_NOT",
}

export interface ColorPalette {
  petalPrimary: string;
  petalSecondary: string;
  center: string;
  stem: string;
  accent: string;
}

export interface GeneratedFlower {
  species: FlowerSpecies;
  palette: ColorPalette;
  petalCount: number;
  name: string;
  fact: string;
  id: string;
  petalPaths: PetalData[];
  stemPath: string;
  leaves: LeafData[];
  center: CenterData | null;
}

export interface PetalData {
  d: string;
  fill: string;
  rotation: number;
  originX: number;
  originY: number;
}

export interface LeafData {
  d: string;
  fill: string;
  x: number;
  y: number;
  rotation: number;
}

export interface CenterData {
  type: "circle" | "disc" | "spiral";
  cx: number;
  cy: number;
  r: number;
  fill: string;
  dots?: { cx: number; cy: number; r: number; fill: string }[];
}
