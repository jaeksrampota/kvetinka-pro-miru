import type { SongDefinition } from "./types";
import { playScore, stopMusic, isPlaying } from "./engine";
import happyBirthday from "./songs/happyBirthday";
import chromaticReverie from "./songs/chromaticReverie";
import harmonicLabyrinth from "./songs/harmonicLabyrinth";
import twilightOmnibus from "./songs/twilightOmnibus";

const songs: SongDefinition[] = [
  happyBirthday,
  chromaticReverie,
  harmonicLabyrinth,
  twilightOmnibus,
];

export function getSongList(): SongDefinition[] {
  return songs;
}

export async function playSong(id: string): Promise<void> {
  const song = songs.find((s) => s.id === id);
  if (!song) return;
  await playScore(song);
}

export { stopMusic, isPlaying };
export type { SongDefinition } from "./types";
