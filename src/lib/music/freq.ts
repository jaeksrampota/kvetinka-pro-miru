/** Equal-temperament frequency for a note name + octave (A4 = 440 Hz). */
export function freq(note: string, octave: number): number {
  const semi: Record<string, number> = {
    C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
    "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
  };
  return 440 * Math.pow(2, (semi[note] - 9 + (octave - 4) * 12) / 12);
}

export const f = freq;
