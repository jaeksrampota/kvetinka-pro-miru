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
    [FlowerSpecies.ORCHID]: {
      name: "Orchidea",
      facts: [
        "Orchidey sú jedna z najväčších čeľadí kvetín s vyše 25 000 druhmi.",
        "Niektoré orchidey napodobňujú hmyz, aby prilákali opeľovačov.",
        "Vanilka pochádza z orchidey druhu Vanilla planifolia.",
        "Orchidey môžu žiť desaťročia, niektoré aj viac než sto rokov.",
      ],
    },
    [FlowerSpecies.LILY]: {
      name: "Ľalia",
      facts: [
        "Ľalie sú jednou z najstarších pestovaných kvetín v histórii.",
        "V starom Grécku bola ľalia symbolom čistoty a krásy.",
        "Peľ ľalie zanecháva škvrny, ktoré sa takmer nedajú odstrániť.",
        "Niektoré druhy ľalií voňajú tak intenzívne, že naplnia celú miestnosť.",
      ],
    },
    [FlowerSpecies.DAHLIA]: {
      name: "Georgína",
      facts: [
        "Georgíny pochádzajú z Mexika, kde boli pôvodne pestované na jedenie.",
        "Existuje vyše 42 000 registrovaných odrôd georgín.",
        "Georgína je národná kvetina Mexika.",
        "Na konci 18. storočia sa georgíny pestovali pre ich jedlé hľuzy, nie kvety.",
      ],
    },
    [FlowerSpecies.IRIS]: {
      name: "Kosatec",
      facts: [
        "Názov iris pochádza od gréckej bohyne dúhy.",
        "Kosatce sa používajú vo francúzskej parfumérii už stáročia.",
        "Koreň florentského kosatca vonia po fialkách.",
        "Kosatec je symbolom na francúzskom erbe, známy ako fleur-de-lis.",
      ],
    },
    [FlowerSpecies.CHERRY_BLOSSOM]: {
      name: "Sakura",
      facts: [
        "V Japonsku je hanami — obdivovanie sakúr — tisícročná tradícia.",
        "Väčšina sakúr kvitne len 1 až 2 týždne v roku.",
        "Sakury symbolizujú pominuteľnosť a krásu okamihu.",
        "Japonsko každoročne daruje sakury mestám po celom svete ako symbol priateľstva.",
      ],
    },
    [FlowerSpecies.HYDRANGEA]: {
      name: "Hortenzia",
      facts: [
        "Farba hortenzií závisí od kyslosti pôdy — kyslá pôda dáva modrú.",
        "V alkalickej pôde rastú ružové hortenzie.",
        "Hortenzia bola objavená v Japonsku a nesie meno po francúzskom botanikovi.",
        "Jedna hortenzia sa skladá z desiatok malých kvetov.",
      ],
    },
    [FlowerSpecies.FORGET_ME_NOT]: {
      name: "Nezábudka",
      facts: [
        "Podľa legendy rytier hodil kyticu nezábudiek svojej milej s výkrikom 'Nezabudni na mňa!'",
        "Nezábudky sú symbolom vernej lásky a spomienok.",
        "Tieto drobné kvety rastú rady pri potokoch a na vlhkých lúkach.",
        "Nezábudka je oficiálna kvetina amerického štátu Aljaška.",
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
    [FlowerSpecies.ORCHID]: {
      name: "Orchid",
      facts: [
        "Orchids are one of the largest flower families with over 25,000 species.",
        "Some orchids mimic insects to attract pollinators.",
        "Vanilla comes from the orchid species Vanilla planifolia.",
        "Orchids can live for decades, some even over a hundred years.",
      ],
    },
    [FlowerSpecies.LILY]: {
      name: "Lily",
      facts: [
        "Lilies are among the oldest cultivated flowers in history.",
        "In ancient Greece, the lily was a symbol of purity and beauty.",
        "Lily pollen leaves stains that are nearly impossible to remove.",
        "Some lily species have a fragrance so intense it fills an entire room.",
      ],
    },
    [FlowerSpecies.DAHLIA]: {
      name: "Dahlia",
      facts: [
        "Dahlias originate from Mexico, where they were first grown for eating.",
        "There are over 42,000 registered dahlia varieties.",
        "The dahlia is the national flower of Mexico.",
        "In the late 1700s, dahlias were cultivated for their edible tubers, not flowers.",
      ],
    },
    [FlowerSpecies.IRIS]: {
      name: "Iris",
      facts: [
        "The name iris comes from the Greek goddess of the rainbow.",
        "Irises have been used in French perfumery for centuries.",
        "The root of the Florentine iris smells like violets.",
        "The iris is the symbol on the French coat of arms, known as fleur-de-lis.",
      ],
    },
    [FlowerSpecies.CHERRY_BLOSSOM]: {
      name: "Cherry Blossom",
      facts: [
        "In Japan, hanami — admiring cherry blossoms — is a thousand-year-old tradition.",
        "Most cherry blossoms bloom for only one to two weeks per year.",
        "Cherry blossoms symbolise the fleeting beauty of each moment.",
        "Japan gives cherry trees to cities worldwide as a symbol of friendship.",
      ],
    },
    [FlowerSpecies.HYDRANGEA]: {
      name: "Hydrangea",
      facts: [
        "Hydrangea colour depends on soil acidity — acidic soil produces blue.",
        "In alkaline soil, hydrangeas grow pink.",
        "The hydrangea was discovered in Japan and named after a French botanist.",
        "A single hydrangea head is actually made up of dozens of tiny flowers.",
      ],
    },
    [FlowerSpecies.FORGET_ME_NOT]: {
      name: "Forget-Me-Not",
      facts: [
        "Legend says a knight tossed forget-me-nots to his love crying 'Forget me not!'",
        "Forget-me-nots symbolise faithful love and remembrance.",
        "These tiny flowers love growing near streams and in damp meadows.",
        "The forget-me-not is the official flower of the U.S. state of Alaska.",
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
