export interface ScoreNote {
  melody: number;
  beats: number;
  accompaniment: number[];
}

export interface SongDefinition {
  id: string;
  titleSk: string;
  titleEn: string;
  descriptionSk: string;
  descriptionEn: string;
  tempo: number;
  score: ScoreNote[];
  /** Override waveform layers: [type, mixLevel, detuneInCents][] */
  waveforms?: [OscillatorType, number, number][];
  masterVolume?: number;
  attackMs?: number;
  releaseMultiplier?: number;
}
