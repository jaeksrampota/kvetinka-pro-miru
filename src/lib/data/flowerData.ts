import { FlowerSpecies } from "../flowers/types";

interface FlowerInfo {
  name: string;
  facts: string[];
}

const flowerData: Record<FlowerSpecies, FlowerInfo> = {
  [FlowerSpecies.DAISY]: {
    name: "Kopretina",
    facts: [
      "Kopretina se otevírá s východem slunce a zavírá za soumraku.",
      'Ve staré češtině se jí říkalo „oko dne".',
      'Každý bílý „lístek" je ve skutečnosti samostatný květ.',
      "Kopretiny patří do rodiny hvězdnicovitých, stejně jako slunečnice.",
    ],
  },
  [FlowerSpecies.TULIP]: {
    name: "Tulipán",
    facts: [
      "V 17. století stála jedna cibulka tulipánu víc než dům v Amsterdamu.",
      "Tulipány po utržení stále rostou — až o 3 cm ve váze.",
      "Původně pochází z Persie, ne z Holandska.",
      "Tulipán je jedlý — jeho okvětní lístky chutnají trochu jako hrášek.",
    ],
  },
  [FlowerSpecies.SUNFLOWER]: {
    name: "Slunečnice",
    facts: [
      "Mladé slunečnice sledují slunce od východu k západu.",
      "Jeden květ slunečnice může mít až 2 000 semínek.",
      "Spirály semínek sledují Fibonacciho posloupnost.",
      "Slunečnice dokáže absorbovat radioaktivní látky z půdy.",
    ],
  },
  [FlowerSpecies.ROSE]: {
    name: "Růže",
    facts: [
      "Růže jsou botanicky příbuzné s jablky, hruškami i jahodami.",
      "Nejstarší živá růže roste u katedrály v Hildesheimu už přes 1 000 let.",
      "Vůně růže se používá v parfumerii déle než 3 000 let.",
      "Existuje přes 30 000 odrůd růží.",
    ],
  },
  [FlowerSpecies.PEONY]: {
    name: "Pivoňka",
    facts: [
      "Pivoňka je pojmenovaná po Paeonovi, lékaři řeckých bohů.",
      "V Číně je pivoňka symbolem bohatství a královské cti.",
      "Některé pivoňky voní po růžích, jiné po citronech.",
      "Pivoňky mohou žít přes sto let.",
    ],
  },
  [FlowerSpecies.LAVENDER]: {
    name: "Levandule",
    facts: [
      'Název levandule pochází z latinského „lavare" — mýt.',
      "Staří Římané přidávali levanduli do koupelí.",
      "Levandulový olej odpuzuje komáry lépe než mnohé chemické repelenty.",
      "Levandule patří do čeledi hluchavkovitých, stejně jako máta.",
    ],
  },
  [FlowerSpecies.POPPY]: {
    name: "Vlčí mák",
    facts: [
      "Vlčí mák kvete jen dva dny, ale jedna rostlina vytvoří tisíce semínek.",
      "Lístky vlčího máku jsou tak jemné, že se mačkají pouhým dotykem.",
      "Po dešti se vlčí mák otřepe a stojí zase rovně.",
      "Semínka vlčího máku si uchovávají klíčivost i desítky let.",
    ],
  },
};

export function getFlowerInfo(species: FlowerSpecies): { name: string; fact: string } {
  const info = flowerData[species];
  const fact = info.facts[Math.floor(Math.random() * info.facts.length)];
  return { name: info.name, fact };
}
