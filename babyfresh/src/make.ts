import {VideoData, Scene} from './Coquette';
export type {VideoData, Scene};

// Split script into short caption chunks, timed by character share of voice length.
export const makeCaps = (script: string, dur: number, lead = 0.15) => {
  const parts = script.replace(/\s+/g, ' ').split(/(?<=[.,!?:])\s+/).flatMap((p) => {
    const w = p.split(' '); const out: string[] = []; let cur = '';
    for (const x of w) { if ((cur + ' ' + x).trim().length > 38 && cur) { out.push(cur.trim()); cur = x; } else cur += ' ' + x; }
    if (cur.trim()) out.push(cur.trim()); return out;
  });
  const total = parts.reduce((a, p) => a + p.length + 4, 0);
  let t = lead; const span = dur - lead - 0.2;
  return parts.map((p) => { const d = ((p.length + 4) / total) * span; const c = {s: t, e: t + d, t: p.replace(/[,.]$/, '')}; t += d; return c; });
};

export const v = (id: string, audio: string, dur: number, script: string, scenes: Scene[]): VideoData => ({id, audio, dur, scenes, caps: makeCaps(script, dur)});

