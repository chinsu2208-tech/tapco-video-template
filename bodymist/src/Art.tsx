import React from 'react';
import {Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BOTTLE_IMG, BOTTLE_RATIO, THEMES, Theme, ThemeKey} from './theme';
import '@fontsource/baloo-2/800.css';
import '@fontsource/dancing-script/700.css';

export const TITLE = "'Baloo 2', sans-serif";
export const SCRIPT = "'Dancing Script', cursive";
export const HAND = "'Patrick Hand', cursive";

export const useT = () => useCurrentFrame() / useVideoConfig().fps;
export const pop = (f: number, fps: number, delay = 0) => spring({frame: f - delay * fps, fps, config: {damping: 11, mass: 0.7}});
export const usePop = (delay = 0) => { const f = useCurrentFrame(); const {fps} = useVideoConfig(); return pop(f, fps, delay); };

// ---------- chai xịt bỏ túi (minh hoạ, thay bằng ảnh thật qua `img`) ----------
// Mặc định dùng ảnh chai thật; drawn = chai vẽ tay (dự phòng khi chưa có ảnh).
export const Bottle: React.FC<{th: ThemeKey; x: number; y: number; s?: number; delay?: number; spray?: boolean; rot?: number; bob?: boolean; glow?: boolean; drawn?: boolean}> = ({th, x, y, s = 1, delay = 0, spray, rot = 0, bob = true, glow, drawn}) => {
  const t = useT(); const k = usePop(delay); const T = THEMES[th];
  const id = `g-${th}`;
  const dy = bob ? Math.sin(t * 2.2 + x * 0.01) * 10 : 0;
  if (th !== 'mix' && !drawn) {
    const H = 300 * s; const W = H * BOTTLE_RATIO; const shake = spray ? Math.sin(t * 40) * Math.max(0, Math.sin((t % 1.6) / 1.6 * Math.PI * 2)) * 1.5 : 0;
    return (
      <div style={{position: 'absolute', left: x + (140 * s - W) / 2, top: y + dy, width: W, height: H, transform: `rotate(${rot + shake}deg) scale(${k})`, transformOrigin: '50% 100%'}}>
        {glow && <div style={{position: 'absolute', left: W / 2 - 150 * s, top: H * 0.15, width: 300 * s, height: 300 * s, borderRadius: '50%', background: `radial-gradient(${T.accent}dd, transparent 68%)`}} />}
        <Img src={staticFile(BOTTLE_IMG(th))} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', filter: `drop-shadow(0 ${12 * s}px ${14 * s}px rgba(60,30,60,.28))`}} />
        {spray && <div style={{position: 'absolute', left: W * 0.55 - 92 * s, top: H * 0.13}}><Mist th={th} s={s} /></div>}
      </div>
    );
  }
  const press = spray ? Math.max(0, Math.sin((t % 1.6) / 1.6 * Math.PI * 2)) : 0;
  return (
    <div style={{position: 'absolute', left: x, top: y + dy, width: 140 * s, height: 300 * s, transform: `rotate(${rot}deg) scale(${k})`, transformOrigin: '50% 100%'}}>
      {glow && <div style={{position: 'absolute', left: -60 * s, top: 20 * s, width: 260 * s, height: 260 * s, borderRadius: '50%', background: `radial-gradient(${T.accent}cc, transparent 68%)`}} />}
      <svg viewBox="0 0 140 300" width="100%" height="100%" style={{overflow: 'visible', filter: `drop-shadow(0 ${14 * s}px ${16 * s}px rgba(60,30,60,.25))`}}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={T.liquid[0]} /><stop offset="1" stopColor={T.liquid[1]} /></linearGradient>
        </defs>
        {/* đầu xịt */}
        <rect x="50" y={6 + press * 6} width="40" height="36" rx="12" fill={T.deep} stroke="#fff" strokeWidth="4" />
        <circle cx="90" cy={22 + press * 6} r="4" fill="#fff" />
        <rect x="42" y="40" width="56" height="20" rx="6" fill={T.dark ? T.accent : '#fff'} stroke={T.deep} strokeWidth="4" />
        {/* thân chai */}
        <rect x="16" y="56" width="108" height="238" rx="34" fill="rgba(255,255,255,.75)" stroke="#fff" strokeWidth="6" />
        <rect x="26" y="92" width="88" height="194" rx="26" fill={`url(#${id})`} />
        <rect x="32" y="78" width="10" height="190" rx="5" fill="#fff" opacity=".6" />
        {/* nhãn */}
        <rect x="30" y="148" width="80" height="90" rx="20" fill="#fff" stroke={T.main} strokeWidth="3" />
        <text x="70" y="182" textAnchor="middle" fontFamily={SCRIPT} fontWeight="700" fontSize="27" fill={T.dark ? T.light : T.deep}>Baby</text>
        <text x="70" y="212" textAnchor="middle" fontFamily={TITLE} fontWeight="800" fontSize={T.short.length > 5 ? 17 : 20} letterSpacing="1" fill={T.dark ? T.light : T.deep}>{T.short}</text>
        <path d="M70 230 c -4 -5 -10 -2 -6 3 l 6 5 l 6 -5 c 4 -5 -2 -8 -6 -3 z" fill={T.main} />
      </svg>
      {spray && <Mist th={th} s={s} />}
    </div>
  );
};

// Hạt sương xịt ra từ đầu chai
const Mist: React.FC<{th: ThemeKey; s: number}> = ({th, s}) => {
  const t = useT(); const T = THEMES[th];
  return (
    <svg viewBox="0 0 300 200" width={300 * s} height={200 * s} style={{position: 'absolute', left: 92 * s, top: -70 * s, overflow: 'visible'}}>
      {Array.from({length: 18}).map((_, i) => {
        const u = ((t / 1.6) + i / 18) % 1;
        const a = -0.45 + ((i * 37) % 11) / 11 * 0.9;
        const r = 20 + u * 230;
        return <circle key={i} cx={Math.cos(a) * r} cy={92 + Math.sin(a) * r * 0.7 - u * 20} r={(3 + (i % 4) * 2) * (1 - u * 0.6)} fill={i % 3 ? '#fff' : T.main} opacity={(1 - u) * 0.9} />;
      })}
    </svg>
  );
};

// ---------- họa tiết theo mùi ----------
const Cloud: React.FC<{c: string}> = ({c}) => (
  <svg viewBox="0 0 120 70" width="100%" height="100%"><path d="M22 62 C 4 62, 2 40, 20 36 C 18 16, 44 8, 56 24 C 64 6, 96 8, 96 32 C 116 32, 120 62, 98 62 Z" fill={c} stroke="#fff" strokeWidth="4" /></svg>
);
const Flower: React.FC<{c: string; d: string}> = ({c, d}) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx="50" cy="26" rx="17" ry="24" fill={c} stroke="#fff" strokeWidth="3" transform={`rotate(${r} 50 50)`} />)}
    <circle cx="50" cy="50" r="12" fill={d} />
  </svg>
);
const Moon: React.FC<{c: string}> = ({c}) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M66 10 A 42 42 0 1 0 90 72 A 34 34 0 1 1 66 10 Z" fill={c} /></svg>
);
const Star: React.FC<{c: string}> = ({c}) => (
  <svg viewBox="0 0 50 50" width="100%" height="100%"><path d="M25 0 C 27 18, 32 23, 50 25 C 32 27, 27 32, 25 50 C 23 32, 18 27, 0 25 C 18 23, 23 18, 25 0 Z" fill={c} /></svg>
);
const Pearl: React.FC<{c: string}> = ({c}) => (
  <svg viewBox="0 0 50 50" width="100%" height="100%"><circle cx="25" cy="25" r="22" fill={c} stroke="#fff" strokeWidth="3" /><circle cx="18" cy="17" r="6" fill="#fff" opacity=".85" /></svg>
);
export const BowIcon: React.FC<{c: string; d: string}> = ({c, d}) => (
  <svg viewBox="0 0 120 80" width="100%" height="100%">
    <path d="M60 40 C 40 10, 6 8, 8 30 C 10 52, 40 54, 60 40 Z" fill={c} stroke="#fff" strokeWidth="4" />
    <path d="M60 40 C 80 10, 114 8, 112 30 C 110 52, 80 54, 60 40 Z" fill={c} stroke="#fff" strokeWidth="4" />
    <path d="M56 44 L 40 76 M64 44 L 80 76" stroke={c} strokeWidth="9" strokeLinecap="round" />
    <circle cx="60" cy="40" r="10" fill={d} stroke="#fff" strokeWidth="3" />
  </svg>
);
const Grape: React.FC<{c: string; d: string; l: string}> = ({c, d, l}) => (
  <svg viewBox="0 0 80 100" width="100%" height="100%">
    <path d="M40 18 C 44 6, 56 4, 64 8 C 56 12, 50 16, 42 20 Z" fill={l} />
    {[[30, 30], [50, 30], [20, 48], [40, 48], [60, 48], [30, 66], [50, 66], [40, 84]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="11" fill={i % 3 ? c : d} stroke="#fff" strokeWidth="2.5" />)}
  </svg>
);
export const Candy: React.FC<{c: string; d: string}> = ({c, d}) => (
  <svg viewBox="0 0 120 60" width="100%" height="100%">
    <path d="M30 30 L 6 12 L 10 30 L 6 48 Z M90 30 L 114 12 L 110 30 L 114 48 Z" fill={d} stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
    <ellipse cx="60" cy="30" rx="32" ry="22" fill={c} stroke="#fff" strokeWidth="4" />
    <path d="M42 18 Q 60 30 46 44 M60 10 Q 76 28 62 50" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />
  </svg>
);
export const Heart: React.FC<{c: string}> = ({c}) => (
  <svg viewBox="0 0 100 90" width="100%" height="100%"><path d="M50 86 C 10 58, 0 36, 10 18 C 22 -2, 46 4, 50 22 C 54 4, 78 -2, 90 18 C 100 36, 90 58, 50 86 Z" fill={c} stroke="#fff" strokeWidth="5" /></svg>
);

// Một vật trang trí trôi nổi
const Float: React.FC<{x: number; y: number; w: number; h: number; ph: number; spin?: number; fall?: boolean; children: React.ReactNode}> = ({x, y, w, h, ph, spin = 8, fall, children}) => {
  const t = useT();
  const yy = fall ? ((y + t * 70 + ph * 300) % 2100) - 120 : y + Math.sin(t * 1.4 + ph) * 18;
  const rot = fall ? t * 40 + ph * 90 : Math.sin(t * 1.1 + ph) * spin;
  return <div style={{position: 'absolute', left: x + (fall ? Math.sin(t + ph) * 30 : 0), top: yy, width: w, height: h, transform: `rotate(${rot}deg)`}}>{children}</div>;
};

// Vị trí trang trí: né vùng chữ giữa, chủ yếu ở mép trái/phải
const SPOTS: [number, number, number][] = [[40, 230, 0], [900, 300, 1], [960, 760, 2], [30, 820, 3], [70, 1330, 4], [920, 1040, 5], [480, 170, 6], [30, 1700, 7], [960, 1720, 8]];

export const Motifs: React.FC<{T: Theme}> = ({T}) => {
  const t = useT();
  return (
    <>
      {SPOTS.map(([x, y, p], i) => {
        const sz = 70 + (i % 3) * 26;
        switch (T.motif) {
          case 'cloud': return <Float key={i} x={x - 30} y={y} w={sz * 1.6} h={sz} ph={p}><Cloud c={i % 2 ? '#fff' : T.light} /></Float>;
          case 'petal': return <Float key={i} x={x} y={y} w={sz * 0.8} h={sz * 0.8} ph={p} fall><Flower c={i % 2 ? T.light : T.main} d={T.accent} /></Float>;
          case 'moon': return i === 0 ? <Float key={i} x={830} y={1160} w={170} h={170} ph={p}><Moon c={T.accent} /></Float>
            : <div key={i} style={{position: 'absolute', left: x, top: y, width: 50, height: 50, transform: `scale(${0.4 + 0.6 * Math.abs(Math.sin(t * 1.8 + p))})`}}><Star c={i % 2 ? T.accent : '#fff'} /></div>;
          case 'pearl': return i % 3 === 0 ? <Float key={i} x={x - 20} y={y} w={120} h={80} ph={p}><BowIcon c={T.accent} d={T.main} /></Float>
            : <Float key={i} x={x} y={y} w={sz * 0.5} h={sz * 0.5} ph={p}><Pearl c={i % 2 ? '#fffaf0' : T.light} /></Float>;
          case 'grape': return i % 2 ? <Float key={i} x={x} y={y} w={sz * 0.8} h={sz} ph={p}><Grape c={T.accent} d='#9a6be0' l='#8fd16a' /></Float>
            : <Float key={i} x={x - 20} y={y} w={sz * 1.3} h={sz * 0.65} ph={p} spin={18}><Candy c={T.accent} d={T.main} /></Float>;
          default: return i % 2 ? <Float key={i} x={x} y={y} w={sz * 0.7} h={sz * 0.63} ph={p}><Heart c={i % 4 === 1 ? T.main : '#ffb3cc'} /></Float>
            : <Float key={i} x={x - 20} y={y} w={sz * 1.3} h={sz * 0.65} ph={p} spin={18}><Candy c={[THEMES.joy.main, THEMES.puffy.main, THEMES.angel.main, THEMES.soft.main][i % 4]} d={T.accent} /></Float>;
        }
      })}
    </>
  );
};

// ---------- icon tính năng (motion) ----------
export const FxPocket: React.FC<{T: Theme}> = ({T}) => {
  const t = useT(); const u = (t % 2.4) / 2.4;
  const drop = u < 0.5 ? -60 + u * 2 * 90 : 30;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <g transform={`translate(100 ${80 + drop})`}>
        <rect x="-16" y="-50" width="32" height="70" rx="11" fill={T.liquid[1]} stroke="#fff" strokeWidth="4" />
        <rect x="-9" y="-64" width="18" height="16" rx="5" fill={T.deep} />
      </g>
      <path d="M40 96 L 160 96 L 152 168 C 150 178, 140 184, 130 184 L 70 184 C 60 184, 50 178, 48 168 Z" fill={T.main} stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
      <path d="M48 116 L 152 116" stroke="#fff" strokeWidth="4" strokeDasharray="8 8" />
      <path d="M100 150 c -6 -8 -16 -3 -10 5 l 10 9 l 10 -9 c 6 -8 -4 -13 -10 -5 z" fill="#fff" />
    </svg>
  );
};
export const FxClock: React.FC<{T: Theme}> = ({T}) => {
  const t = useT();
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <circle cx="100" cy="104" r="70" fill="#fff" stroke={T.main} strokeWidth="10" />
      <path d={`M100 104 L ${100 + Math.cos(-Math.PI / 2 + t * 2) * 46} ${104 + Math.sin(-Math.PI / 2 + t * 2) * 46}`} stroke={T.deep} strokeWidth="8" strokeLinecap="round" />
      <path d={`M100 104 L ${100 + Math.cos(-Math.PI / 2 + t * 0.4) * 30} ${104 + Math.sin(-Math.PI / 2 + t * 0.4) * 30}`} stroke={T.main} strokeWidth="10" strokeLinecap="round" />
      <circle cx="100" cy="104" r="8" fill={T.deep} />
      {[0, 1, 2].map((i) => { const v = ((t / 2) + i / 3) % 1; return <path key={i} transform={`translate(${150 + i * 6} ${70 - v * 60}) scale(${0.6 * (1 - v) + 0.2})`} d="M0 -20 C 8 -8, 12 0, 12 6 C 12 14, 6 18, 0 18 C -6 18, -12 14, -12 6 C -12 0, -8 -8, 0 -20 Z" fill={T.main} opacity={1 - v} />; })}
    </svg>
  );
};
export const FxLimited: React.FC<{T: Theme}> = ({T}) => {
  const t = useT();
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><path id="ring" d="M100 100 m -66 0 a 66 66 0 1 1 132 0 a 66 66 0 1 1 -132 0" /></defs>
      <g transform={`rotate(${t * 40} 100 100)`}>
        <circle cx="100" cy="100" r="88" fill={T.deep} stroke="#fff" strokeWidth="6" />
        <text fontFamily={TITLE} fontWeight="800" fontSize="22" fill="#fff" letterSpacing="3"><textPath href="#ring">LIMITED • LIMITED • LIMITED •</textPath></text>
      </g>
      <circle cx="100" cy="100" r="46" fill={T.accent} stroke="#fff" strokeWidth="4" />
      <path transform={`translate(100 100) scale(${0.9 + Math.abs(Math.sin(t * 3)) * 0.25}) translate(-25 -25)`} d="M25 0 C 27 18, 32 23, 50 25 C 32 27, 27 32, 25 50 C 23 32, 18 27, 0 25 C 18 23, 23 18, 25 0 Z" fill={T.dark ? T.bg : T.deep} />
    </svg>
  );
};
