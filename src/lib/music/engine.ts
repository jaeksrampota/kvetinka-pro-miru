import type { SongDefinition } from "./types";

let audioCtx: AudioContext | null = null;
let stopRequested = false;

const DEFAULT_WAVEFORMS: [OscillatorType, number, number][] = [
  ["sine", 0.7, 0],
  ["triangle", 0.3, 1.5],
];

export function stopMusic() {
  stopRequested = true;
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
}

export function isPlaying(): boolean {
  return audioCtx !== null && !stopRequested;
}

/** Schedule one voice: layered oscillators, slightly detuned for warmth. */
function scheduleVoice(
  ctx: AudioContext,
  dest: AudioNode,
  hz: number,
  start: number,
  dur: number,
  vol: number,
  waveforms: [OscillatorType, number, number][],
  attackMs: number,
  releaseMultiplier: number,
) {
  const attack = attackMs / 1000;
  const release = Math.min(0.18 * releaseMultiplier, dur * 0.35);

  for (const [type, mix, detune] of waveforms) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = hz;
    osc.detune.value = detune;

    const v = vol * mix;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(v, start + attack);
    g.gain.setValueAtTime(v, start + dur - release);
    g.gain.linearRampToValueAtTime(0, start + dur);

    osc.connect(g).connect(dest);
    osc.start(start);
    osc.stop(start + dur + 0.02);
  }
}

/** Schedule a full chord (melody + accompaniment voices). */
function scheduleChord(
  ctx: AudioContext,
  dest: AudioNode,
  melody: number,
  accomp: number[],
  start: number,
  dur: number,
  song: SongDefinition,
) {
  const waveforms = song.waveforms ?? DEFAULT_WAVEFORMS;
  const masterVol = song.masterVolume ?? 1;
  const attackMs = song.attackMs ?? 50;
  const relMul = song.releaseMultiplier ?? 1;

  // Melody -- prominent
  scheduleVoice(ctx, dest, melody, start, dur, 0.13 * masterVol, waveforms, attackMs, relMul);
  // Accompaniment -- softer; bass voices get a touch more body
  for (const hz of accomp) {
    const vol = (hz < 150 ? 0.09 : 0.065) * masterVol;
    scheduleVoice(ctx, dest, hz, start, dur, vol, waveforms, attackMs, relMul);
  }
}

async function sleepUnlessStopped(ms: number): Promise<void> {
  const end = Date.now() + ms;
  return new Promise((resolve) => {
    const tick = () => {
      if (stopRequested || Date.now() >= end) resolve();
      else setTimeout(tick, 60);
    };
    tick();
  });
}

export async function playScore(song: SongDefinition): Promise<void> {
  stopRequested = false;
  audioCtx = new AudioContext();
  const ctx = audioCtx;

  try {
    while (!stopRequested && audioCtx === ctx) {
      let t = ctx.currentTime + 0.05;

      for (const note of song.score) {
        if (stopRequested || audioCtx !== ctx) break;
        const dur = (note.beats * song.tempo) / 1000;
        scheduleChord(ctx, ctx.destination, note.melody, note.accompaniment, t, dur + 0.04, song);
        t += dur;
      }

      if (stopRequested || audioCtx !== ctx) break;

      const totalMs = song.score.reduce((s, n) => s + n.beats * song.tempo, 0);
      await sleepUnlessStopped(totalMs + 300);

      if (stopRequested || audioCtx !== ctx) break;
      await sleepUnlessStopped(1500);
    }
  } catch {
    // AudioContext closed by stopMusic() -- expected, ignore
  }

  if (audioCtx === ctx) {
    ctx.close();
    audioCtx = null;
  }
}
