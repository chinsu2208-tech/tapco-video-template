import type {ScentKey, ThemeKey} from './theme';

export type Kind = 'hook' | 'lineup' | 'scent' | 'quiz' | 'features' | 'occasion' | 'full' | 'end';

export type Scene = {
  kind: Kind;
  s: number; e: number; // giây
  title: string;
  hi?: string; // cụm từ tô màu trong tiêu đề
  tag?: string; // chip nhỏ phía trên tiêu đề
  sub?: string; // dòng phụ / chip dưới
  scent?: ScentKey; // đổi theme của riêng cảnh này
  n?: number; // số thứ tự (vd 1/5) ở cảnh scent
  line?: string; // câu tính cách ở cảnh scent
  img?: string; // ảnh thật (thay chai minh hoạ / nền full)
  vid?: string; // clip cho cảnh full
  items?: string[]; // nhãn tuỳ chỉnh: features (3), occasion (≤4)
  ty?: number; // cảnh full: vị trí y của tiêu đề (mặc định 1180), chỉnh khi chữ che mặt/chai trong ảnh
};

export type VideoData = {
  id: string;
  theme: ThemeKey; // 'mix' = bản 5 mùi; tên mùi = bản 1 mùi
  audio?: string; // để trống = bản xem thử không tiếng
  brand?: string;
  dur: number;
  scenes: Scene[];
  caps: {s: number; e: number; t: string}[];
};

// Chia script thành câu phụ đề ngắn, chia thời gian theo số ký tự.
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

// script là chuỗi = chia phụ đề theo cả voice; là mảng (1 câu / cảnh) = phụ đề khớp từng cảnh (hợp bản demo không voice).
export const v = (id: string, theme: ThemeKey, audio: string | undefined, dur: number, script: string | string[], scenes: Scene[], brand?: string): VideoData => ({
  id, theme, audio, dur, scenes, brand,
  caps: typeof script === 'string' ? makeCaps(script, dur)
    : scenes.flatMap((sc, i) => (script[i] ? makeCaps(script[i], sc.e - sc.s, 0.1).map((c) => ({...c, s: c.s + sc.s, e: c.e + sc.s})) : [])),
});
