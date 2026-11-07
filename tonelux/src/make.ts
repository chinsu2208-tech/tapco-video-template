import type {SeasonKey} from './theme';

export type Kind = 'hook' | 'seasons' | 'palette' | 'drape' | 'steps' | 'tips' | 'product' | 'full' | 'end';

export type Scene = {
  kind: Kind;
  s: number; e: number; // giây
  title: string; // tiêu đề serif, xuống dòng bằng \n
  hi?: string; // cụm từ in nghiêng màu vàng champagne
  tag?: string; // dòng chữ nhỏ in hoa phía trên tiêu đề
  sub?: string; // dòng phụ
  season?: SeasonKey; // cảnh dùng bảng màu của mùa này (hook / palette / drape / tips)
  n?: number; // số thứ tự mùa ở cảnh palette (N° 08 / 12)
  line?: string; // câu chú thích nghiêng (palette, full)
  items?: string[]; // steps (3), tips (≤4), product (≤3), drape [hợp, chưa hợp]
  cols?: string[]; // tips: màu cho từng ý; drape: [màu hợp, màu chưa hợp]
  img?: string; // ảnh thật: hook / palette / product (khung vòm), drape (ảnh "hợp"), full (nền)
  img2?: string; // drape: ảnh "chưa hợp"
  vid?: string; // cảnh full
  ty?: number; // cảnh full: y của tiêu đề (mặc định 1180)
  dark?: boolean; // cảnh nền tối espresso
  cover?: boolean; // cảnh full: masthead TONELUX lớn kiểu bìa (thường dùng cho cảnh mở đầu)
};

export type VideoData = {
  id: string;
  season?: SeasonKey; // mùa mặc định của cả video (bản 1 mùa); bỏ trống = bản tổng quan
  dark?: boolean; // cả video nền tối
  audio?: string; // để trống = bản xem thử không tiếng
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

type Opt = {season?: SeasonKey; dark?: boolean; audio?: string};
// script là chuỗi = phụ đề chia theo cả voice; mảng (1 câu / cảnh) = phụ đề khớp từng cảnh (bản demo không voice).
export const v = (id: string, dur: number, script: string | string[], scenes: Scene[], opt: Opt = {}): VideoData => ({
  id, dur, scenes, ...opt,
  caps: typeof script === 'string' ? makeCaps(script, dur)
    : scenes.flatMap((sc, i) => (script[i] ? makeCaps(script[i], sc.e - sc.s, 0.1).map((c) => ({...c, s: c.s + sc.s, e: c.e + sc.s})) : [])),
});
