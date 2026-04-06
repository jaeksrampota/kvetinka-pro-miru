// Harmonic Labyrinth -- Giant Steps meets Bach invention
// Coltrane changes, tritone subs, altered dominants, back-door cadence
import { f } from "../freq";
import type { SongDefinition } from "../types";

const harmonicLabyrinth: SongDefinition = {
  id: "harmonic-labyrinth",
  titleSk: "Harmonicky labyrint",
  titleEn: "Harmonic Labyrinth",
  descriptionSk: "Jazzova chromaticka dobrodruztvo",
  descriptionEn: "Jazz chromatic adventure",
  tempo: 220,
  waveforms: [["triangle", 0.6, 0], ["square", 0.15, 2], ["sine", 0.25, 1]],
  attackMs: 30,
  releaseMultiplier: 0.7,
  score: [
    // -- Section 1: Giant Steps cycle (B-G-Eb, major 3rd division of octave) --
    // B maj7
    { melody: f("F#",4), beats: 1.0, accompaniment: [f("B",2), f("D#",3), f("F#",3), f("A#",3)] },
    // D7 -- V7 of G
    { melody: f("F#",4), beats: 1.0, accompaniment: [f("D",3), f("F#",3), f("A",3), f("C",4)] },
    // G maj7
    { melody: f("B",4),  beats: 1.0, accompaniment: [f("G",2), f("B",2), f("D",3), f("F#",3)] },
    // Bb7 -- V7 of Eb
    { melody: f("Ab",4), beats: 1.0, accompaniment: [f("Bb",2), f("D",3), f("F",3), f("Ab",3)] },
    // Eb maj7
    { melody: f("G",4),  beats: 1.0, accompaniment: [f("Eb",2), f("G",2), f("Bb",2), f("D",3)] },
    // F#7 -- V7 of B
    { melody: f("E",4),  beats: 1.0, accompaniment: [f("F#",2), f("A#",2), f("C#",3), f("E",3)] },
    // B maj7 return
    { melody: f("D#",4), beats: 1.5, accompaniment: [f("B",2), f("D#",3), f("F#",3), f("A#",3)] },
    // Passing: C#m7
    { melody: f("E",4),  beats: 0.5, accompaniment: [f("C#",3), f("E",3), f("G#",3), f("B",3)] },

    // -- Section 2: Tritone substitutions (same cycle, reharmonized) --
    // Ab7 (tritone sub for D7)
    { melody: f("Gb",4), beats: 1.0, accompaniment: [f("Ab",2), f("C",3), f("Eb",3), f("Gb",3)] },
    // G maj7
    { melody: f("B",4),  beats: 1.0, accompaniment: [f("G",2), f("B",2), f("D",3), f("F#",3)] },
    // E7 (tritone sub for Bb7) -- chromatic bass descent!
    { melody: f("G#",4), beats: 1.0, accompaniment: [f("E",2), f("G#",2), f("B",2), f("D",3)] },
    // Eb maj7
    { melody: f("G",4),  beats: 1.0, accompaniment: [f("Eb",2), f("G",2), f("Bb",2), f("D",3)] },
    // C7 (tritone sub for F#7)
    { melody: f("E",4),  beats: 1.0, accompaniment: [f("C",3), f("E",3), f("G",3), f("Bb",3)] },
    // B maj7
    { melody: f("D#",4), beats: 1.0, accompaniment: [f("B",2), f("D#",3), f("F#",3), f("A#",3)] },
    // Chromatic bridge: Bb dim7
    { melody: f("E",4),  beats: 0.5, accompaniment: [f("Bb",2), f("Db",3), f("E",3), f("G",3)] },
    // A7#9 (Hendrix chord)
    { melody: f("C",5),  beats: 1.5, accompaniment: [f("A",2), f("C#",3), f("G",3), f("C",4)] },

    // -- Section 3: Chromatic bass descent with altered dominants --
    // C7alt (b9 #9)
    { melody: f("E",4),  beats: 1.0, accompaniment: [f("C",3), f("E",3), f("Bb",3), f("Db",4)] },
    // B7#11
    { melody: f("D#",4), beats: 1.0, accompaniment: [f("B",2), f("D#",3), f("A",3), f("F",3)] },
    // Bb7b13
    { melody: f("D",4),  beats: 1.0, accompaniment: [f("Bb",2), f("D",3), f("Ab",3), f("Gb",3)] },
    // A7b9#5
    { melody: f("C#",4), beats: 1.0, accompaniment: [f("A",2), f("C#",3), f("F",3), f("Bb",3)] },
    // Ab7#9
    { melody: f("C",4),  beats: 1.0, accompaniment: [f("Ab",2), f("C",3), f("Gb",3), f("B",3)] },
    // G7b5b9
    { melody: f("B",3),  beats: 1.0, accompaniment: [f("G",2), f("B",2), f("Db",3), f("F",3)] },
    // F#7alt
    { melody: f("A#",3), beats: 1.0, accompaniment: [f("F#",2), f("A#",2), f("E",3), f("G",3)] },
    // F7#11
    { melody: f("A",3),  beats: 1.0, accompaniment: [f("F",2), f("A",2), f("B",2), f("Eb",3)] },

    // -- Section 4: German augmented 6th + resolution --
    // Ger+6: Ab-C-Eb-F# (enharmonic Ab7)
    { melody: f("F#",4), beats: 1.5, accompaniment: [f("Ab",2), f("C",3), f("Eb",3)] },
    // Resolves outward to G octave
    { melody: f("G",4),  beats: 1.0, accompaniment: [f("G",2), f("G",3), f("D",3), f("B",3)] },

    // -- Section 5: Back-door cadence ending --
    // Bb7 (bVII7 of C)
    { melody: f("F",4),  beats: 1.5, accompaniment: [f("Bb",2), f("D",3), f("F",3), f("Ab",3)] },
    // C major 6/9 -- surprise resolution! (not Eb)
    { melody: f("E",4),  beats: 2.5, accompaniment: [f("C",2), f("E",2), f("G",2), f("A",2), f("D",3)] },
  ],
};

export default harmonicLabyrinth;
