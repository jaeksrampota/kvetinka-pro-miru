// Twilight Omnibus -- Wagner Tristan, Liszt late works, dark late-Romantic grandeur
// Tristan chord, omnibus progression, Neapolitan, augmented 6ths,
// enharmonic pivot, Picardy third ending
import { f } from "../freq";
import type { SongDefinition } from "../types";

const twilightOmnibus: SongDefinition = {
  id: "twilight-omnibus",
  titleSk: "Sumracny omnibus",
  titleEn: "Twilight Omnibus",
  descriptionSk: "Temny neskororomanticky dramaticky kus",
  descriptionEn: "Dark late-Romantic drama",
  tempo: 300,
  waveforms: [["sine", 0.65, 0], ["triangle", 0.35, 2]],
  attackMs: 50,
  releaseMultiplier: 1.3,
  score: [
    // -- Section 1: Tristan chord opening (harmonically ambiguous) --
    // The Tristan chord: F-B-D#-G# (the most analyzed chord in music history)
    { melody: f("G#",4), beats: 2.5, accompaniment: [f("F",2), f("B",2), f("D#",3)] },
    // "Attempts" to resolve to E major...
    { melody: f("A",4),  beats: 1.5, accompaniment: [f("E",2), f("G#",2), f("B",2), f("D",3)] },
    // ...deflected! Deceptive cadence to C minor
    { melody: f("G",4),  beats: 2.0, accompaniment: [f("C",3), f("Eb",3), f("G",3)] },
    // Another deception to Ab major
    { melody: f("Ab",4), beats: 2.0, accompaniment: [f("Ab",2), f("C",3), f("Eb",3)] },

    // -- Section 2: Omnibus progression --
    // One voice ascends chromatically, another descends, cycling through dim7 inversions
    // C bass ascending, Bb upper descending
    { melody: f("Bb",4), beats: 1.0, accompaniment: [f("C",3), f("E",3), f("G",3)] },
    // C# ascending, A descending
    { melody: f("A",4),  beats: 1.0, accompaniment: [f("C#",3), f("E",3), f("G",3)] },
    // D ascending, Ab descending -- dim7 (D-F-Ab-B enharmonic)
    { melody: f("Ab",4), beats: 1.0, accompaniment: [f("D",3), f("F",3), f("B",2)] },
    // D# ascending, G descending
    { melody: f("G",4),  beats: 1.0, accompaniment: [f("D#",3), f("F#",3), f("A",3)] },
    // E ascending, F# descending -- another dim7 spelling
    { melody: f("F#",4), beats: 1.0, accompaniment: [f("E",3), f("G",3), f("Bb",3)] },
    // F ascending, F held -- convergence point
    { melody: f("F",4),  beats: 1.5, accompaniment: [f("F",2), f("Ab",2), f("B",2), f("D",3)] },

    // -- Section 3: Neapolitan approach (classic dark-mode formula) --
    // Gb major (Neapolitan of F minor) in first inversion
    { melody: f("Bb",4), beats: 1.5, accompaniment: [f("Bb",2), f("Db",3), f("Gb",3)] },
    // Cadential 6/4: F minor second inversion over C
    { melody: f("Ab",4), beats: 1.0, accompaniment: [f("C",3), f("F",3), f("Ab",3)] },
    // V7: C7
    { melody: f("G",4),  beats: 1.5, accompaniment: [f("C",2), f("E",2), f("G",2), f("Bb",2)] },

    // -- Section 4: Chromatic ascending sequence (intensifying) --
    // F minor - C7 (pattern)
    { melody: f("Ab",4), beats: 1.0, accompaniment: [f("F",3), f("Ab",3), f("C",4)] },
    { melody: f("G",4),  beats: 1.0, accompaniment: [f("C",3), f("E",3), f("Bb",3)] },
    // F# minor - C#7 (up a semitone)
    { melody: f("A",4),  beats: 1.0, accompaniment: [f("F#",3), f("A",3), f("C#",4)] },
    { melody: f("G#",4), beats: 1.0, accompaniment: [f("C#",3), f("F",3), f("B",3)] },
    // G minor - D7 (up another semitone)
    { melody: f("Bb",4), beats: 1.0, accompaniment: [f("G",3), f("Bb",3), f("D",4)] },
    { melody: f("A",4),  beats: 1.0, accompaniment: [f("D",3), f("F#",3), f("C",4)] },

    // -- Section 5: Italian augmented 6th -- resolution --
    // It+6: Ab-C-F# (simplest augmented 6th, just 3 notes)
    { melody: f("F#",4), beats: 1.5, accompaniment: [f("Ab",2), f("C",3)] },
    // Resolves outward to G octave, then G7
    { melody: f("G",4),  beats: 1.5, accompaniment: [f("G",2), f("B",2), f("D",3), f("F",3)] },

    // -- Section 6: Enharmonic pivot via dim7 reinterpretation --
    // F#-A-C-Eb: functions in G minor...
    { melody: f("Eb",4), beats: 1.5, accompaniment: [f("F#",2), f("A",2), f("C",3)] },
    // ...respelled as Ab-Cb(=B)-D-F: now functions in Bb minor!
    { melody: f("F",4),  beats: 1.5, accompaniment: [f("Ab",2), f("B",2), f("D",3)] },

    // -- Section 7: Final cadence with Picardy third --
    // F minor (tonic, dark)
    { melody: f("Ab",4), beats: 1.5, accompaniment: [f("F",2), f("Ab",2), f("C",3)] },
    // Gb major first inversion (Neapolitan)
    { melody: f("Bb",4), beats: 1.0, accompaniment: [f("Bb",2), f("Db",3), f("Gb",3)] },
    // C7 (dominant, tension)
    { melody: f("G",4),  beats: 1.5, accompaniment: [f("C",2), f("E",2), f("Bb",2)] },
    // F MAJOR -- Picardy third! Ray of light after darkness
    { melody: f("A",4),  beats: 3.0, accompaniment: [f("F",2), f("A",2), f("C",3), f("F",3)] },
  ],
};

export default twilightOmnibus;
