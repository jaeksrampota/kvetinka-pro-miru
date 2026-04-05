export type Locale = "sk" | "en";

export interface UITranslations {
  greeting: string[];
  greetingName: string;
  buttonFirst: string;
  buttonNext: string;
}

const ui: Record<Locale, UITranslations> = {
  sk: {
    greeting: ["Všetko", "najlepšie", "k sviatku,"],
    greetingName: "Mira!",
    buttonFirst: "Vygeneruj kvetinu",
    buttonNext: "Ďalšia kvetina",
  },
  en: {
    greeting: ["Happy", "Name Day,"],
    greetingName: "Mira!",
    buttonFirst: "Generate flower",
    buttonNext: "Next flower",
  },
};

export function getUITranslations(locale: Locale): UITranslations {
  return ui[locale];
}
