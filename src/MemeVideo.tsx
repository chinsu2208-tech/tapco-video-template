import React, {createContext, useContext, useEffect, useState} from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Loop, Sequence, staticFile, useCurrentFrame, useVideoConfig, delayRender, continueRender} from 'remotion';

/**
 * Template "Sticker meme Gen Z" (kênh phụ TAP Store) — 1080x1920, 30fps.
 * Nền màu đậm + chấm halftone, chữ trắng viền đen dày, sticker nổ, ảnh full 9:16 hoặc card nghiêng,
 * chuyển cảnh kiểu "punch" (không trượt), caption karaoke tô vàng từng từ.
 * Dùng theo spec dữ liệu (xem src/memeSpecs/*.ts và README mục Meme).
 */

export type MemeSticker = {type: 'burst' | 'heart' | 'star' | 'arrow' | 'sparkle' | 'tag'; x: number; y: number; size?: number; rot?: number; text?: string; t0?: number; color?: string};
export type MemeScene = {
  s: number; // giây bắt đầu
  e: number; // giây kết thúc
  bg?: 'pink' | 'lime' | 'blue' | 'yellow' | 'violet' | 'orange';
  photo?: string; // dl/IMGxxx.jpg hoặc dl/CLIPxxx.mp4 (9:16)
  photos?: string[]; // nhiều ảnh/clip xoay đều trong cảnh (cắt cứng), ưu tiên hơn photo
  mode?: 'full' | 'card' | 'bleed' | 'frame' | 'none'; // bleed = clip tràn màn, chuyển mờ dần, chữ thẳng, không viền
  title?: string[]; // 1-3 dòng chữ to
  titleY?: number; // mặc định 430
  titleSize?: number; // mặc định 88
  list?: string[]; // các ý dạng pill đánh số
  listY?: number; // mặc định 1000
  listAt?: number[]; // giây (tuyệt đối) hiện từng pill, mặc định s+0.5+i*0.5
  note?: string; // sticky ngắn dưới cùng (y ~1330)
  stickers?: MemeSticker[];
  review?: {stars?: number; text: string; src?: string; y?: number}; // thẻ đánh giá thật (trích nguyên văn)
  qa?: {user?: string; q: string; a: string; y?: number}; // comment khách + shop trả lời
};
export type MemeSpec = {
  voice?: string; // dl/voiceNN.mp3 (bỏ trống = không tiếng, dùng để xem thử)
  caps: [number, number, string][]; // [bắt đầu, kết thúc, câu]
  scenes: MemeScene[];
  day?: number; // series: tập thứ mấy
  total?: number; // mặc định 100
};

const INK = '#111111';
const BG: Record<string, [string, string]> = {
  pink: ['#ff5fa2', '#ff8fc0'],
  lime: ['#c8f23a', '#e3ff7a'],
  blue: ['#3b6dff', '#7fa0ff'],
  yellow: ['#ffd23a', '#ffe680'],
  violet: ['#9b5cff', '#c3a0ff'],
  orange: ['#ff7a3a', '#ffa66e'],
};
const ACCENT = ['#ffe600', '#00e5ff', '#ff3d81', '#7CFF4D', '#ffffff'];

const TCtx = createContext(0);
const useT = () => useContext(TCtx);
const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const backOut = (p: number) => {
  const c1 = 2.2, c3 = c1 + 1;
  return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
};
const useFonts = () => {
  const [h] = useState(() => delayRender('fonts'));
  useEffect(() => {
    const VI = 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB';
    const LAT = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
    const LATX = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
    const defs: [string, string, string][] = [];
    for (const w of ['600', '800']) for (const [sub, r] of [['vietnamese', VI], ['latin', LAT], ['latin-ext', LATX]] as const) defs.push([`baloo-2-${sub}-${w}-normal.woff2`, w, r]);
    Promise.all(defs.map(([f, w, r]) => new FontFace('Baloo2', `url(${staticFile('f/' + f)})`, {weight: w, unicodeRange: r}).load().then((x) => document.fonts.add(x))))
      .then(() => continueRender(h)).catch(() => continueRender(h));
  }, [h]);
};

// ---------- Scene wrappers (cắt "punch", không trượt) ----------
const SceneBox: React.FC<{s: number; e: number; soft?: boolean; children: React.ReactNode}> = ({s, e, soft, children}) => {
  const t = useT();
  if (soft) {
    if (t < s - 0.2 - 0.01 || t > e + 0.01) return null;
    const o = s <= 0.01 ? 1 : clamp((t - (s - 0.2)) / 0.2);
    return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
  }
  if (t < s - 0.01 || t > e + 0.01) return null;
  const k = clamp((t - s) / 0.22);
  const punch = 1.09 - 0.09 * (1 - Math.pow(1 - k, 3));
  const shake = t - s < 0.18 ? Math.sin((t - s) * 90) * 6 * (1 - k) : 0;
  const fadeOut = clamp((e - t) / 0.08);
  return (
    <AbsoluteFill style={{opacity: fadeOut < 1 ? 0.2 + 0.8 * fadeOut : 1, transform: `translateX(${shake}px) scale(${punch})`, transformOrigin: '50% 45%'}}>{children}</AbsoluteFill>
  );
};

const Halftone: React.FC<{c1: string; c2: string}> = ({c1, c2}) => {
  const t = useT();
  return (
    <AbsoluteFill style={{background: `linear-gradient(160deg, ${c1} 0%, ${c2} 100%)`}}>
      <div style={{position: 'absolute', inset: -80, backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 6px, transparent 7px)', backgroundSize: '56px 56px', transform: `translate(${(t * 24) % 56}px, ${(t * 24) % 56}px)`}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 140, background: INK, opacity: 0.0}} />
    </AbsoluteFill>
  );
};

const Media: React.FC<{src: string; style: React.CSSProperties}> = ({src, style}) =>
  /\.(mp4|mov)$/i.test(src) ? (
    <Loop durationInFrames={150}><OffthreadVideo src={staticFile(src)} muted style={{objectFit: 'cover', ...style}} /></Loop>
  ) : (
    <Img src={staticFile(src)} style={{objectFit: 'cover', ...style}} />
  );

// Clip tràn màn hình: mỗi clip phát từ đầu (không lặp), chuyển clip bằng mờ dần 0.2s, zoom rất nhẹ
const BleedMedia: React.FC<{s: number; e: number; photos: string[]}> = ({s, e, photos}) => {
  const t = useT();
  const {fps} = useVideoConfig();
  const n = photos.length;
  const seg = (e - s) / n;
  const zoom = 1.0 + 0.04 * clamp((t - s) / (e - s));
  return (
    <AbsoluteFill style={{transform: `scale(${zoom})`, transformOrigin: '50% 45%', filter: 'saturate(1.06) contrast(1.03)'}}>
      {photos.map((src, i) => {
        const st = Math.max(0, s + i * seg - 0.2), en = i === n - 1 ? e + 0.3 : s + (i + 1) * seg;
        if (t < st || t > en + 0.01) return null;
        const o = i === 0 && s <= 0.01 ? 1 : clamp((t - st) / 0.2);
        const isVid = /\.(mp4|mov)$/i.test(src);
        return (
          <AbsoluteFill key={i} style={{opacity: o}}>
            {isVid ? (
              <Sequence from={Math.round(st * fps)}><OffthreadVideo src={staticFile(src)} muted style={{width: 1080, height: 1920, objectFit: 'cover'}} /></Sequence>
            ) : (
              <Img src={staticFile(src)} style={{width: 1080, height: 1920, objectFit: 'cover'}} />
            )}
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- Text ----------
const pop = (t: number, t0: number) => {
  const p = clamp((t - t0) / 0.3);
  return p <= 0 ? 0 : backOut(p);
};

const BigText: React.FC<{y: number; t0: number; lines: string[]; size: number; color?: string; rot?: number; flat?: boolean}> = ({y, t0, lines, size, color = '#fff', rot = -2, flat}) => {
  const t = useT();
  const p = pop(t, t0);
  if (p <= 0) return null;
  const lh = size * 1.0;
  return (
    <div style={{position: 'absolute', left: 90, width: 900, top: y - (lines.length * lh) / 2, textAlign: 'center', transform: `scale(${p}) rotate(${flat ? 0 : rot + Math.sin(t * 5) * 0.6}deg)`}}>
      {lines.map((l, i) => (
        <div key={i} style={{position: 'relative', height: lh, lineHeight: `${lh}px`, fontFamily: 'Baloo2', fontWeight: 800, fontSize: size}}>
          <span style={{position: 'absolute', left: 0, right: 0, color: INK, transform: 'translate(8px,9px)', WebkitTextStroke: `${size * 0.2}px ${INK}`}}>{l}</span>
          <span style={{position: 'absolute', left: 0, right: 0, color, WebkitTextStroke: `${size * 0.2}px ${INK}`, paintOrder: 'stroke fill'}}>{l}</span>
          <span style={{position: 'absolute', left: 0, right: 0, color}}>{l}</span>
        </div>
      ))}
    </div>
  );
};

const Pill: React.FC<{y: number; t0: number; n: number; text: string; color: string; flat?: boolean}> = ({y, t0, n, text, color, flat}) => {
  const t = useT();
  const p = pop(t, t0);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: 120, width: 780, top: y, display: 'flex', alignItems: 'center', gap: 20, transform: `scale(${p}) rotate(${flat ? 0 : n % 2 ? -1.5 : 1.5}deg)`, transformOrigin: 'left center'}}>
      <div style={{flex: 'none', width: 92, height: 92, borderRadius: '50%', background: color, border: `6px solid ${INK}`, boxShadow: `6px 7px 0 ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 56, color: INK}}>{n}</div>
      <div style={{flex: 1, background: '#fff', border: `6px solid ${INK}`, borderRadius: 28, boxShadow: `8px 9px 0 ${INK}`, padding: '12px 22px', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 46, lineHeight: 1.08, color: INK}}>{text}</div>
    </div>
  );
};

const Note: React.FC<{y: number; t0: number; text: string; flat?: boolean}> = ({y, t0, text, flat}) => {
  const t = useT();
  const p = pop(t, t0);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: 130, width: 720, top: y, transform: `scale(${p}) rotate(${flat ? 0 : 2}deg)`}}>
      <div style={{background: '#ffe600', border: `6px solid ${INK}`, borderRadius: 18, boxShadow: `8px 9px 0 ${INK}`, padding: '14px 24px', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 44, lineHeight: 1.1, color: INK, textAlign: 'center'}}>{text}</div>
    </div>
  );
};

// ---------- Stickers ----------
const StickerBox: React.FC<{x: number; y: number; size: number; rot: number; t0: number; children: React.ReactNode}> = ({x, y, size, rot, t0, children}) => {
  const t = useT();
  const p = pop(t, t0);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: x - size / 2, top: y - size / 2, width: size, height: size, transform: `scale(${p}) rotate(${rot + Math.sin(t * 6 + x) * 4}deg)`}}>{children}</div>
  );
};
const outl = {stroke: INK, strokeWidth: 9, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const};
const Sticker: React.FC<MemeSticker & {t0: number}> = ({type, x, y, size = 200, rot = 0, text, t0, color}) => {
  const fill = color || ACCENT[Math.abs(Math.round(x + y)) % 4];
  let inner: React.ReactNode = null;
  if (type === 'burst') {
    const pts: string[] = [];
    for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2, r = i % 2 ? 70 : 98; pts.push(`${100 + Math.cos(a) * r},${100 + Math.sin(a) * r}`); }
    inner = (<svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}>
      <polygon points={pts.join(' ')} fill={fill} {...outl} />
      <text x={100} y={112} textAnchor="middle" fontFamily="Baloo2" fontWeight={800} fontSize={text && text.length > 4 ? 34 : 50} fill={INK}>{text}</text></svg>);
  } else if (type === 'heart') {
    inner = (<svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}><path d="M100 172 C20 112 8 52 54 34 C80 26 96 44 100 58 C104 44 120 26 146 34 C192 52 180 112 100 172Z" fill="#ff3d81" {...outl} /><path d="M58 60 Q70 48 84 56" stroke="#fff" strokeWidth={9} fill="none" strokeLinecap="round" /></svg>);
  } else if (type === 'star') {
    inner = (<svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}><path d="M100 14 L124 74 L188 78 L138 118 L156 182 L100 146 L44 182 L62 118 L12 78 L76 74Z" fill="#ffe600" {...outl} /></svg>);
  } else if (type === 'sparkle') {
    inner = (<svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}><path d="M100 10 Q108 92 190 100 Q108 108 100 190 Q92 108 10 100 Q92 92 100 10Z" fill="#00e5ff" {...outl} /></svg>);
  } else if (type === 'arrow') {
    inner = (<svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}><path d="M30 60 Q110 20 150 110" stroke={INK} strokeWidth={30} fill="none" strokeLinecap="round" /><path d="M30 60 Q110 20 150 110" stroke="#ffe600" strokeWidth={14} fill="none" strokeLinecap="round" /><path d="M110 100 L152 128 L170 80" stroke={INK} strokeWidth={30} fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M110 100 L152 128 L170 80" stroke="#ffe600" strokeWidth={14} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>);
  } else if (type === 'tag') {
    inner = (<div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{background: INK, color: fill, fontFamily: 'Baloo2', fontWeight: 800, fontSize: size * 0.3, padding: '6px 22px', borderRadius: 14, whiteSpace: 'nowrap', border: '5px solid #fff'}}>{text}</div></div>);
  }
  return <StickerBox x={x} y={y} size={size} rot={rot} t0={t0}>{inner}</StickerBox>;
};

// ---------- Caption karaoke ----------
const Caption: React.FC<{caps: [number, number, string][]}> = ({caps}) => {
  const t = useT();
  const c = caps.find(([s, e]) => t >= s && t < e);
  if (!c) return null;
  const words = c[2].split(' ');
  const total = c[2].replace(/ /g, '').length;
  let acc = 0;
  const prog = clamp((t - c[0]) / Math.max(0.1, c[1] - c[0]));
  const p = clamp((t - c[0]) / 0.12);
  return (
    <div style={{position: 'absolute', left: 110, width: 800, top: 1500, minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', opacity: p, transform: `scale(${0.92 + 0.08 * p})`}}>
      <div style={{fontFamily: 'Baloo2', fontWeight: 800, fontSize: 56, lineHeight: 1.08}}>
        {words.map((w, i) => {
          const from = acc / total; acc += w.length; const to = acc / total;
          const on = prog >= from && prog <= to + 0.02;
          return (
            <span key={i} style={{display: 'inline-block', marginRight: 14, color: on ? '#ffe600' : '#fff', WebkitTextStroke: `13px ${INK}`, paintOrder: 'stroke fill', transform: on ? 'scale(1.1) rotate(-2deg)' : 'none'}}>{w}</span>
          );
        })}
      </div>
    </div>
  );
};

// ---------- Scene renderer ----------
const AUTO: MemeSticker[][] = [
  [{type: 'burst', x: 900, y: 1130, size: 200, rot: 10, text: 'WOW'}, {type: 'sparkle', x: 110, y: 1090, size: 110, rot: 12}],
  [{type: 'star', x: 130, y: 1330, size: 130, rot: -12}, {type: 'heart', x: 940, y: 1330, size: 120, rot: 10}],
  [{type: 'sparkle', x: 110, y: 1000, size: 110, rot: 8}, {type: 'burst', x: 890, y: 1250, size: 200, rot: 12, text: 'NÈ!'}],
  [{type: 'heart', x: 180, y: 300, size: 130, rot: -10}, {type: 'arrow', x: 860, y: 1180, size: 200, rot: 20}],
];

const ReviewCard: React.FC<{r: NonNullable<MemeScene['review']>; t0: number}> = ({r, t0}) => {
  const t = useT();
  const k = pop(t, t0) || 0.01;
  const n = r.stars ?? 5;
  return (
    <div style={{position: 'absolute', left: 120, top: r.y ?? 560, width: 780, transform: `rotate(-2deg) scale(${k})`}}>
      <div style={{position: 'absolute', left: 20, top: -44, background: '#ff3d81', color: '#fff', border: `6px solid ${INK}`, borderRadius: 16, padding: '4px 22px', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 38, transform: 'rotate(-4deg)', zIndex: 2}}>ĐÁNH GIÁ THẬT</div>
      <div style={{background: '#fff', border: `8px solid ${INK}`, borderRadius: 28, padding: '48px 40px 34px', boxShadow: `14px 16px 0 ${INK}`}}>
        <div style={{fontSize: 74, letterSpacing: 6, color: '#ffc800', WebkitTextStroke: `3px ${INK}`, lineHeight: 1}}>{'★'.repeat(n)}</div>
        <div style={{fontFamily: 'Baloo2', fontWeight: 800, fontSize: 52, lineHeight: 1.2, color: INK, marginTop: 18}}>“{r.text}”</div>
        <div style={{fontFamily: 'Baloo2', fontWeight: 600, fontSize: 34, color: '#555', marginTop: 16}}>{r.src ?? 'Khách TAP Store · Seller Center'}</div>
      </div>
    </div>
  );
};

const QA: React.FC<{q: NonNullable<MemeScene['qa']>; t0: number}> = ({q, t0}) => {
  const t = useT();
  const k1 = pop(t, t0) || 0.01;
  const k2 = pop(t, t0 + 1.3) || 0.01;
  const y = q.y ?? 520;
  const bub = (bg: string): React.CSSProperties => ({background: bg, border: `8px solid ${INK}`, borderRadius: 32, padding: '26px 34px', boxShadow: `12px 14px 0 ${INK}`, fontFamily: 'Baloo2', fontWeight: 800, color: INK});
  return (
    <>
      <div style={{position: 'absolute', left: 110, top: y, width: 720, transform: `scale(${k1})`, transformOrigin: 'left top'}}>
        <div style={{fontFamily: 'Baloo2', fontWeight: 800, fontSize: 36, color: '#fff', WebkitTextStroke: `1px ${INK}`, marginBottom: 8}}>💬 {q.user ?? 'Khách hỏi'}</div>
        <div style={{...bub('#fff'), fontSize: 50, lineHeight: 1.2}}>{q.q}</div>
      </div>
      <div style={{position: 'absolute', left: 170, top: y + 330, width: 720, transform: `scale(${k2}) rotate(1.5deg)`, transformOrigin: 'right top'}}>
        <div style={{fontFamily: 'Baloo2', fontWeight: 800, fontSize: 36, color: '#ffe600', WebkitTextStroke: `1px ${INK}`, marginBottom: 8, textAlign: 'right'}}>TAP Store trả lời ✓</div>
        <div style={{...bub('#ffe600'), fontSize: 48, lineHeight: 1.2}}>{q.a}</div>
      </div>
    </>
  );
};

const DayBadge: React.FC<{day: number; total: number}> = ({day, total}) => {
  const t = useT();
  const k = pop(t, 0.1) || 0.01;
  return (
    <div style={{position: 'absolute', left: 540 - 230, top: 205, width: 460, textAlign: 'center', transform: `scale(${k}) rotate(-3deg)`, background: '#111', color: '#ffe600', border: '6px solid #fff', borderRadius: 40, padding: '2px 0', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 56, boxShadow: '8px 10px 0 rgba(0,0,0,.35)', zIndex: 50}}>
      NGÀY {day}/{total}
    </div>
  );
};

const SceneView: React.FC<{sc: MemeScene; idx: number}> = ({sc, idx}) => {
  const [c1, c2] = BG[sc.bg || (['pink', 'lime', 'blue', 'yellow', 'violet', 'orange'] as const)[idx % 6]];
  const t = useT();
  const media = sc.photos && sc.photos.length ? sc.photos[Math.min(sc.photos.length - 1, Math.max(0, Math.floor((t - sc.s) / ((sc.e - sc.s) / sc.photos.length))))] : sc.photo;
  const mode = sc.mode || (media ? 'full' : 'none');
  const flat = mode === 'bleed' || mode === 'frame';
  const zoom = 1.03 + 0.07 * clamp((t - sc.s) / (sc.e - sc.s));
  const stickers = sc.stickers || AUTO[idx % AUTO.length];
  const ty = sc.titleY ?? (mode === 'none' ? 640 : 430);
  const ts = sc.titleSize ?? 88;
  return (
    <SceneBox s={sc.s} e={sc.e} soft={flat}>
      <Halftone c1={c1} c2={c2} />
      {mode === 'frame' && (sc.photos?.length || sc.photo) && (
        <div style={{position: 'absolute', left: 108, top: 192, width: 864, height: 1536, borderRadius: 56, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.28)'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, transform: 'scale(0.8)', transformOrigin: '0 0'}}>
            <BleedMedia s={sc.s} e={sc.e} photos={sc.photos?.length ? sc.photos : [sc.photo as string]} />
          </div>
          <div style={{position: 'absolute', left: 0, top: 0, width: 864, height: 560, background: 'linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0) 100%)'}} />
          <div style={{position: 'absolute', left: 0, top: 1000, width: 864, height: 536, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)'}} />
          <div style={{position: 'absolute', inset: 0, borderRadius: 56, border: '8px solid rgba(255,255,255,0.92)'}} />
        </div>
      )}
      {mode === 'bleed' && (sc.photos?.length || sc.photo) && (
        <>
          <BleedMedia s={sc.s} e={sc.e} photos={sc.photos?.length ? sc.photos : [sc.photo as string]} />
          <div style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 720, background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)'}} />
          <div style={{position: 'absolute', left: 0, top: 1180, width: 1080, height: 740, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)'}} />
        </>
      )}
      {mode === 'full' && media && (
        <>
          <Media key={media} src={media} style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, transform: `scale(${zoom})`}} />
          <div style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 700, background: `linear-gradient(to bottom, ${c1}cc 0%, ${c1}55 60%, transparent 100%)`}} />
          <div style={{position: 'absolute', left: 0, top: 1300, width: 1080, height: 620, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'}} />
          <div style={{position: 'absolute', left: 24, top: 24, width: 1032, height: 1872, border: `10px solid ${INK}`, borderRadius: 30}} />
        </>
      )}
      {mode === 'card' && media && (
        <div style={{position: 'absolute', left: 540 - 450, top: 175, width: 900, transform: `rotate(${idx % 2 ? 3 : -3}deg) scale(${pop(t, sc.s + 0.05) || 0.01})`}}>
          <div style={{background: '#fff', border: `8px solid ${INK}`, borderRadius: 22, padding: 14, boxShadow: `14px 16px 0 ${INK}`}}>
            <Media key={media} src={media} style={{width: 864, height: 1536, display: 'block', borderRadius: 10}} />
          </div>
        </div>
      )}
      {sc.title && <BigText y={ty} t0={sc.s + 0.1} lines={sc.title} size={ts} color={idx % 3 === 1 ? '#ffe600' : '#fff'} rot={idx % 2 ? 2 : -2} flat={flat} />}
      {sc.list && sc.list.map((it, i) => <Pill key={i} y={(sc.listY ?? 960) + i * 150} t0={sc.listAt?.[i] ?? sc.s + 0.5 + i * 0.5} n={i + 1} text={it} color={ACCENT[i % 4]} flat={flat} />)}
      {sc.review && <ReviewCard r={sc.review} t0={sc.s + 0.3} />}
      {sc.qa && <QA q={sc.qa} t0={sc.s + 0.3} />}
      {sc.note && <Note y={1330} t0={sc.s + 0.7} text={sc.note} flat={flat} />}
      {stickers.map((st, i) => <Sticker key={i} {...st} t0={st.t0 ?? sc.s + 0.3 + i * 0.25} />)}
    </SceneBox>
  );
};

export const MemeVideo: React.FC<{spec: MemeSpec}> = ({spec}) => {
  useFonts();
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = f / fps;
  return (
    <TCtx.Provider value={t}>
      <AbsoluteFill style={{background: BG.pink[0]}}>
        {spec.voice && <Audio src={staticFile(spec.voice)} />}
        {spec.scenes.map((sc, i) => <SceneView key={i} sc={sc} idx={i} />)}
        {spec.day != null && <DayBadge day={spec.day} total={spec.total ?? 100} />}
        <Caption caps={spec.caps} />
      </AbsoluteFill>
    </TCtx.Provider>
  );
};
