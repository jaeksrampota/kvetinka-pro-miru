// Chromatic Reverie -- Debussy/Scriabin impressionistic dreamscape
// Journey: Db major --> E major (tritone away)
// Techniques: chromatic mediants, whole-tone passage, mystic chord,
// parallel planing, French augmented 6th, tone clusters
import { f } from "../freq";
import type { SongDefinition } from "../types";

const chromaticReverie: SongDefinition = {
  id: "chromatic-reverie",
  titleSk: "Chromaticke snenie",
  titleEn: "Chromatic Reverie",
  descriptionSk: "Impresionisticka snova krajina",
  descriptionEn: "Impressionistic dreamscape",
  tempo: 340,
  waveforms: [["sine", 0.8, 0], ["sine", 0.2, 3]],
  attackMs: 75,
  releaseMultiplier: 1.5,
  score: [
    // -- Section 1: Chromatic mediants chain (Db -> A -> F -> Db) --
    // Db major 7 -- home base
    { melody: f("F",4),  beats: 2.0, accompaniment: [f("Db",3), f("F",3), f("Ab",3), f("C",4)] },
    // A major 7 -- chromatic mediant down a major 3rd
    { melody: f("E",4),  beats: 2.0, accompaniment: [f("A",2), f("C#",3), f("E",3), f("G#",3)] },
    // F major 9 -- down another major 3rd
    { melody: f("G",4),  beats: 2.0, accompaniment: [f("F",2), f("A",2), f("C",3), f("E",3)] },
    // Db major 7 return -- completes the cycle
    { melody: f("Ab",4), beats: 2.0, accompaniment: [f("Db",3), f("F",3), f("Ab",3), f("C",4)] },
    // Bb minor 9 -- subdominant color
    { melody: f("C",5),  beats: 1.5, accompaniment: [f("Bb",2), f("Db",3), f("F",3), f("Ab",3)] },
    // Gb major 7 -- another chromatic mediant
    { melody: f("Bb",4), beats: 1.5, accompaniment: [f("Gb",2), f("Bb",2), f("Db",3), f("F",3)] },

    // -- Section 2: Whole-tone passage (floating, directionless) --
    // C whole-tone: C-D-E-F#-G#-Bb
    { melody: f("C",5),  beats: 1.0, accompaniment: [f("C",3), f("E",3), f("G#",3)] },
    { melody: f("D",5),  beats: 1.0, accompaniment: [f("D",3), f("F#",3), f("Bb",3)] },
    { melody: f("E",5),  beats: 1.0, accompaniment: [f("E",3), f("G#",3), f("C",4)] },
    { melody: f("F#",4), beats: 1.5, accompaniment: [f("F#",3), f("Bb",3), f("D",4)] },

    // -- Section 3: Scriabin mystic chord (suspended color) --
    // C-F#-Bb-E-A-D (stacked augmented/perfect 4ths)
    { melody: f("D",5),  beats: 3.0, accompaniment: [f("C",3), f("F#",3), f("Bb",3), f("E",4), f("A",4)] },

    // -- Section 4: Parallel planing (chromatic slide of maj7 voicings) --
    // Db maj7
    { melody: f("C",5),  beats: 1.0, accompaniment: [f("Db",3), f("F",3), f("Ab",3)] },
    // D maj7
    { melody: f("C#",5), beats: 1.0, accompaniment: [f("D",3), f("F#",3), f("A",3)] },
    // Eb maj7
    { melody: f("D",5),  beats: 1.0, accompaniment: [f("Eb",3), f("G",3), f("Bb",3)] },
    // E maj7
    { melody: f("D#",5), beats: 1.5, accompaniment: [f("E",3), f("G#",3), f("B",3)] },

    // -- Section 5: French augmented 6th --> resolution --
    // Fr+6: Ab-C-D-F# (two tritones)
    { melody: f("F#",4), beats: 1.5, accompaniment: [f("Ab",2), f("C",3), f("D",3)] },
    // Resolves to G major
    { melody: f("G",4),  beats: 2.0, accompaniment: [f("G",2), f("B",2), f("D",3)] },

    // -- Section 6: Tone cluster (shimmering close-together pitches, very soft) --
    { melody: f("C",5),  beats: 2.0, accompaniment: [f("B",4), f("Db",5), f("D",4), f("Eb",4)] },

    // -- Section 7: Final cadence -- arrival in E major (tritone from Db) --
    // B major prep (dominant of E)
    { melody: f("F#",4), beats: 1.5, accompaniment: [f("B",2), f("D#",3), f("F#",3), f("A",3)] },
    // B7 altered (b9, #5)
    { melody: f("E",4),  beats: 1.0, accompaniment: [f("B",2), f("D#",3), f("G",3), f("C",4)] },
    // E major 9 -- final resolution, warm and luminous
    { melody: f("G#",4), beats: 1.5, accompaniment: [f("E",2), f("G#",2), f("B",2), f("D#",3)] },
    // E major (sustained)
    { melody: f("E",4),  beats: 3.0, accompaniment: [f("E",2), f("B",2), f("E",3), f("G#",3)] },
  ],
};

export default chromaticReverie;
