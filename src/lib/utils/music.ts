// Happy Birthday melody using Web Audio API
// Notes as [frequency, duration in beats]
const MELODY: [number, number][] = [
  // Hap-py birth-day to you
  [262, 0.75], [262, 0.25], [294, 1], [262, 1], [349, 1], [330, 2],
  // Hap-py birth-day to you
  [262, 0.75], [262, 0.25], [294, 1], [262, 1], [392, 1], [349, 2],
  // Hap-py birth-day dear Mi-ra
  [262, 0.75], [262, 0.25], [523, 1], [440, 1], [349, 1], [330, 1], [294, 2],
  // Hap-py birth-day to you
  [466, 0.75], [466, 0.25], [440, 1], [349, 1], [392, 1], [349, 2],
];

const TEMPO = 200; // ms per beat

let audioCtx: AudioContext | null = null;
let stopRequested = false;

export function stopMusic() {
  stopRequested = true;
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
}

export async function playHappyBirthday(): Promise<void> {
  stopRequested = false;
  audioCtx = new AudioContext();
  const ctx = audioCtx;

  let time = ctx.currentTime + 0.1;

  for (const [freq, beats] of MELODY) {
    if (stopRequested) break;

    const duration = (beats * TEMPO) / 1000;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = freq;

    // Gentle envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.15, time + 0.03);
    gain.gain.setValueAtTime(0.15, time + duration * 0.7);
    gain.gain.linearRampToValueAtTime(0, time + duration * 0.95);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration);

    time += duration;
  }

  // Wait for melody to finish
  const totalDuration = MELODY.reduce((sum, [, b]) => sum + (b * TEMPO) / 1000, 0);
  await new Promise((resolve) => setTimeout(resolve, totalDuration * 1000 + 200));

  if (!stopRequested && audioCtx === ctx) {
    ctx.close();
    audioCtx = null;
  }
}
