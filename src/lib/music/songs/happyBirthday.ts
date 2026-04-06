// Wagner-style chromatic Happy Birthday -- migrated from utils/music.ts
import { f } from "../freq";
import type { SongDefinition } from "../types";

const happyBirthday: SongDefinition = {
  id: "happy-birthday",
  titleSk: "Narodeniny pre Miru",
  titleEn: "Happy Birthday for Mira",
  descriptionSk: "Wagnerovske chromaticke Vsetko najlepsie",
  descriptionEn: "Wagner-style chromatic Happy Birthday",
  tempo: 280,
  score: [
    // -- Line 1: "Happy birthday to you" --
    { melody: f("C",4), beats: 0.75, accompaniment: [f("C",3), f("E",3), f("G",3), f("B",3)] },     // Cmaj7
    { melody: f("C",4), beats: 0.25, accompaniment: [f("C",3), f("E",3), f("G",3), f("Bb",3)] },    // C7
    { melody: f("D",4), beats: 1.0,  accompaniment: [f("D",3), f("F#",3), f("Ab",3)] },              // D7b5
    { melody: f("C",4), beats: 1.0,  accompaniment: [f("Db",3), f("E",3), f("G",3), f("Bb",3)] },   // Db°7
    { melody: f("F",4), beats: 1.0,  accompaniment: [f("F",3), f("A",3), f("C",4)] },                // F
    { melody: f("E",4), beats: 2.0,  accompaniment: [f("A",2), f("C",3), f("E",3), f("G",3)] },     // Am7

    // -- Line 2: "Happy birthday to you" --
    { melody: f("C",4), beats: 0.75, accompaniment: [f("C",3), f("F",3), f("A",3)] },                // F/C
    { melody: f("C",4), beats: 0.25, accompaniment: [f("C",3), f("F",3), f("Ab",3)] },               // Fm/C
    { melody: f("D",4), beats: 1.0,  accompaniment: [f("G",2), f("B",2), f("D",3), f("F",3)] },     // G7
    { melody: f("C",4), beats: 1.0,  accompaniment: [f("B",2), f("E",3), f("G",3)] },                // Em
    { melody: f("G",4), beats: 1.0,  accompaniment: [f("G",2), f("B",2), f("F",3), f("Ab",3)] },    // G7b9
    { melody: f("F",4), beats: 2.0,  accompaniment: [f("F",2), f("A",2), f("C",3), f("E",3)] },     // Fmaj7

    // -- Line 3: "Happy birthday dear Mira" --
    { melody: f("C",4), beats: 0.75, accompaniment: [f("C",3), f("F",3), f("Ab",3)] },               // Fm
    { melody: f("C",4), beats: 0.25, accompaniment: [f("C",3), f("Eb",3), f("F#",3), f("A",3)] },   // F#°7
    { melody: f("C",5), beats: 1.0,  accompaniment: [f("Ab",2), f("C",3), f("Eb",3), f("G",3)] },   // AbMaj7
    { melody: f("A",4), beats: 1.0,  accompaniment: [f("A",2), f("C",3), f("Eb",3), f("G",3)] },    // Am7b5
    { melody: f("F",4), beats: 1.0,  accompaniment: [f("D",3), f("F",3), f("A",3), f("C",4)] },     // Dm7
    { melody: f("E",4), beats: 1.0,  accompaniment: [f("C",3), f("E",3), f("G",3), f("B",3)] },     // Cmaj7
    { melody: f("D",4), beats: 2.0,  accompaniment: [f("G",2), f("B",2), f("E",3), f("F",3)] },     // G13

    // -- Line 4: "Happy birthday to you" --
    { melody: f("Bb",4), beats: 0.75, accompaniment: [f("Bb",2), f("D",3), f("F",3), f("A",3)] },   // BbMaj7
    { melody: f("Bb",4), beats: 0.25, accompaniment: [f("B",2), f("D",3), f("F",3), f("Ab",3)] },   // B°7
    { melody: f("A",4), beats: 1.0,  accompaniment: [f("A",2), f("C",3), f("F",3)] },                // F/A
    { melody: f("F",4), beats: 1.0,  accompaniment: [f("D",3), f("F",3), f("A",3), f("C",4)] },     // Dm7
    { melody: f("G",4), beats: 1.0,  accompaniment: [f("G",2), f("C",3), f("D",3), f("F",3)] },     // Gsus4
    { melody: f("F",4), beats: 2.0,  accompaniment: [f("F",2), f("A",2), f("C",3), f("E",3)] },     // Fmaj7
  ],
};

export default happyBirthday;
