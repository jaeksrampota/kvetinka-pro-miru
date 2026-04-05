import { FlowerSpecies } from "../flowers/types";
import type { Locale } from "../i18n/translations";

interface FlowerInfo {
  name: string;
  facts: string[];
}

const flowerData: Record<Locale, Record<FlowerSpecies, FlowerInfo>> = {
  sk: {
    [FlowerSpecies.DAISY]: {
      name: "Margaréta",
      facts: [
        "Margaréta sa otvára s východom slnka a zatvára za súmraku.",
        "V starej slovenčine sa jej hovorilo 'oko dňa'.",
        "Každý biely 'lístok' je v skutočnosti samostatný kvet.",
        "Margaréty patria do čeľade astrovitých, rovnako ako slnečnice.",
      ],
    },
    [FlowerSpecies.TULIP]: {
      name: "Tulipán",
      facts: [
        "V 17. storočí stála jedna cibuľka tulipánu viac než dom v Amsterdame.",
        "Tulipány po odtrhnutí stále rastú — až o 3 cm vo váze.",
        "Pôvodne pochádza z Perzie, nie z Holandska.",
        "Tulipán je jedlý — jeho okvetné lístky chutia trochu ako hrášok.",
      ],
    },
    [FlowerSpecies.SUNFLOWER]: {
      name: "Slnečnica",
      facts: [
        "Mladé slnečnice sledujú slnko od východu k západu.",
        "Jeden kvet slnečnice môže mať až 2 000 semienok.",
        "Špirály semienok sledujú Fibonacciho postupnosť.",
        "Slnečnica dokáže absorbovať rádioaktívne látky z pôdy.",
      ],
    },
    [FlowerSpecies.ROSE]: {
      name: "Ruža",
      facts: [
        "Ruže sú botanicky príbuzné s jablkami, hruškami aj jahodami.",
        "Najstaršia živá ruža rastie pri katedrále v Hildesheimu už vyše 1 000 rokov.",
        "Vôňa ruže sa používa v parfumérii dlhšie než 3 000 rokov.",
        "Existuje vyše 30 000 odrôd ruží.",
      ],
    },
    [FlowerSpecies.PEONY]: {
      name: "Pivónia",
      facts: [
        "Pivónia je pomenovaná po Paeonovi, lekárovi gréckych bohov.",
        "V Číne je pivónia symbolom bohatstva a kráľovskej cti.",
        "Niektoré pivónie voňajú po ružiach, iné po citrónoch.",
        "Pivónie môžu žiť viac než sto rokov.",
      ],
    },
    [FlowerSpecies.LAVENDER]: {
      name: "Levanduľa",
      facts: [
        "Názov levanduľa pochádza z latinského 'lavare' — umývať.",
        "Starí Rimania pridávali levanduľu do kúpeľov.",
        "Levanduľový olej odpudzuje komáre lepšie než mnohé chemické repelenty.",
        "Levanduľa patrí do čeľade hluchavkovitých, rovnako ako mäta.",
      ],
    },
    [FlowerSpecies.POPPY]: {
      name: "Vlčí mak",
      facts: [
        "Vlčí mak kvitne len dva dni, ale jedna rastlina vytvorí tisíce semienok.",
        "Lístky vlčieho maku sú tak jemné, že sa pokrčia púhym dotykom.",
        "Po daždi sa vlčí mak otrasie a stojí zase rovno.",
        "Semienka vlčieho maku si uchovávajú klíčivosť aj desiatky rokov.",
      ],
    },
  },
  en: {
    [FlowerSpecies.DAISY]: {
      name: "Daisy",
      facts: [
        "Daisies open at sunrise and close at dusk.",
        "The name 'daisy' comes from 'day's eye' in Old English.",
        "Each white 'petal' is actually a separate flower.",
        "Daisies belong to the aster family, just like sunflowers.",
      ],
    },
    [FlowerSpecies.TULIP]: {
      name: "Tulip",
      facts: [
        "In the 17th century, a single tulip bulb cost more than a house in Amsterdam.",
        "Tulips keep growing after being cut — up to 3 cm in a vase.",
        "They originally come from Persia, not the Netherlands.",
        "Tulips are edible — their petals taste a bit like peas.",
      ],
    },
    [FlowerSpecies.SUNFLOWER]: {
      name: "Sunflower",
      facts: [
        "Young sunflowers track the sun from east to west.",
        "A single sunflower head can contain up to 2,000 seeds.",
        "The seed spirals follow the Fibonacci sequence.",
        "Sunflowers can absorb radioactive material from soil.",
      ],
    },
    [FlowerSpecies.ROSE]: {
      name: "Rose",
      facts: [
        "Roses are botanically related to apples, pears, and strawberries.",
        "The oldest living rose grows at Hildesheim Cathedral and is over 1,000 years old.",
        "Rose fragrance has been used in perfumery for over 3,000 years.",
        "There are over 30,000 varieties of roses.",
      ],
    },
    [FlowerSpecies.PEONY]: {
      name: "Peony",
      facts: [
        "The peony is named after Paeon, physician of the Greek gods.",
        "In China, the peony symbolises wealth and royal honour.",
        "Some peonies smell like roses, others like lemons.",
        "Peonies can live for over a hundred years.",
      ],
    },
    [FlowerSpecies.LAVENDER]: {
      name: "Lavender",
      facts: [
        "The name 'lavender' comes from the Latin 'lavare' — to wash.",
        "Ancient Romans added lavender to their baths.",
        "Lavender oil repels mosquitoes better than many chemical repellents.",
        "Lavender belongs to the mint family.",
      ],
    },
    [FlowerSpecies.POPPY]: {
      name: "Poppy",
      facts: [
        "A poppy blooms for just two days, but one plant produces thousands of seeds.",
        "Poppy petals are so delicate they crumple at the slightest touch.",
        "After rain, poppies shake themselves off and stand upright again.",
        "Poppy seeds can remain viable for decades.",
      ],
    },
  },
};

export function getFlowerInfo(
  species: FlowerSpecies,
  locale: Locale = "sk"
): { name: string; fact: string } {
  const info = flowerData[locale][species];
  const fact = info.facts[Math.floor(Math.random() * info.facts.length)];
  return { name: info.name, fact };
}
