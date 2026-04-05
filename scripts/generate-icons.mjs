import sharp from "sharp";
import { mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// A simple flower SVG — 5 petals with a golden center, pink/purple palette
function flowerSvg(size, maskable = false) {
  const pad = maskable ? size * 0.2 : 0;
  const cx = size / 2;
  const cy = size / 2;
  const petalR = (size / 2 - pad) * 0.38;
  const petalDist = (size / 2 - pad) * 0.28;
  const centerR = (size / 2 - pad) * 0.22;

  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    const px = cx + Math.cos(angle) * petalDist;
    const py = cy + Math.sin(angle) * petalDist;
    const colors = ["#f472b6", "#e879a8", "#c084fc", "#d68fea", "#f9a8d4", "#b89aee"];
    return `<circle cx="${px}" cy="${py}" r="${petalR}" fill="${colors[i]}" opacity="0.92"/>`;
  }).join("\n    ");

  const bg = maskable
    ? `<rect width="${size}" height="${size}" fill="#fef1f7" rx="${size * 0.15}"/>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  ${bg}
  <g>
    ${petals}
    <circle cx="${cx}" cy="${cy}" r="${centerR}" fill="#fbbf24"/>
    <circle cx="${cx}" cy="${cy}" r="${centerR * 0.55}" fill="#f59e0b" opacity="0.6"/>
  </g>
</svg>`;
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const maskableSizes = [192, 512];

async function main() {
  const iconsDir = join(root, "public", "icons");
  await mkdir(iconsDir, { recursive: true });

  // Regular icons
  for (const size of sizes) {
    const svg = Buffer.from(flowerSvg(size));
    await sharp(svg).png().toFile(join(iconsDir, `icon-${size}x${size}.png`));
    console.log(`  icon-${size}x${size}.png`);
  }

  // Maskable icons (extra padding for safe zone)
  for (const size of maskableSizes) {
    const svg = Buffer.from(flowerSvg(size, true));
    await sharp(svg).png().toFile(join(iconsDir, `icon-maskable-${size}x${size}.png`));
    console.log(`  icon-maskable-${size}x${size}.png`);
  }

  // Apple touch icon (180x180)
  const appleSvg = Buffer.from(flowerSvg(180));
  await sharp(appleSvg).png().toFile(join(root, "src", "app", "apple-icon.png"));
  console.log("  apple-icon.png (180x180)");

  console.log("Done!");
}

main().catch(console.error);
