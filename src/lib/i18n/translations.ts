export type Locale = "sk" | "en";

export interface UITranslations {
  greeting: string[];
  greetingName: string;
  buttonFirst: string;
  buttonNext: string;
  musicLabel: string;
  stopLabel: string;
  chooseSong: string;
}

const ui: Record<Locale, UITranslations> = {
  sk: {
    greeting: ["Všetko", "najlepšie", "k sviatku,"],
    greetingName: "Mira!",
    buttonFirst: "Vygeneruj kvetinu",
    buttonNext: "Ďalšia kvetina",
    musicLabel: "Hudba",
    stopLabel: "Stop",
    chooseSong: "Vyber piesen",
  },
  en: {
    greeting: ["Happy", "Name Day,"],
    greetingName: "Mira!",
    buttonFirst: "Generate flower",
    buttonNext: "Next flower",
    musicLabel: "Music",
    stopLabel: "Stop",
    chooseSong: "Choose a song",
  },
};

export function getUITranslations(locale: Locale): UITranslations {
  return ui[locale];
}
