import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig, spring, delayRender, continueRender} from 'remotion';

const NAVY = '#33477a', CORAL = '#f4907b', PINK = '#f7b6c5', MINT = '#a9dfc4', BUTTER = '#fbe38a', LAV = '#d9c8f0', SKY = '#cfe6f7', PEACH = '#fbd3bd';
const CX = 490;
let TNOW = 0;

const VI = 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB';
const LAT = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATX = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

const useFonts = () => {
  const [h] = useState(() => delayRender('fonts'));
  useEffect(() => {
    const defs: [string, string, string, string][] = [];
    for (const w of ['600', '800']) for (const [sub, r] of [['vietnamese', VI], ['latin', LAT], ['latin-ext', LATX]] as const)
      defs.push(['Baloo2', `baloo-2-${sub}-${w}-normal.woff2`, w, r]);
    for (const [sub, r] of [['vietnamese', VI], ['latin', LAT], ['latin-ext', LATX]] as const)
      defs.push(['PHand', `patrick-hand-${sub}-400-normal.woff2`, '400', r]);
    Promise.all(defs.map(([fam, f, w, r]) => {
      const ff = new FontFace(fam, `url(${staticFile('f/' + f)})`, {weight: w, unicodeRange: r});
      return ff.load().then((x) => document.fonts.add(x));
    })).then(() => continueRender(h)).catch(() => continueRender(h));
  }, [h]);
};

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const ease = (p: number) => 1 - Math.pow(1 - clamp(p), 3);

// pop-in scale driven by spring
const usePop = (t0: number) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  if (f / fps < t0) return 0;
  return spring({frame: f - t0 * fps, fps, config: {damping: 10, mass: 0.7}});
};

// ---------- Sticker wrapper (outline white + navy, wobble) ----------
const Sticker: React.FC<{x: number; y: number; size: number; t0: number; rot?: number; hide?: number; children: React.ReactNode}> = ({x, y, size, t0, rot = 0, hide, children}) => {
  const p = usePop(t0);
  const fade = hide !== undefined ? 1 - clamp((TNOW - hide) / 0.25) : 1;
  if (p <= 0 || fade <= 0) return null;
  const wob = Math.floor(TNOW * 6) % 5 + 1;
  const shake = Math.sin(TNOW * 6.3 + x) * 2;
  return (
    <div style={{position: 'absolute', left: x - size / 2, top: y - size / 2, width: size, height: size, opacity: fade,
      transform: `scale(${p}) rotate(${rot + shake}deg)`, filter: `url(#wob${wob})`}}>
      {children}
    </div>
  );
};

// outlined shape: paths drawn twice (thick white then fill+navy)
const Sh: React.FC<{d: string; fill: string}[] | any> = ({items, extra}: any) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}>
    <g stroke="#fff" strokeWidth={22 / 1.6} strokeLinejoin="round" strokeLinecap="round" fill="#fff">
      {items.map((it: any, i: number) => <path key={i} d={it.d} />)}
    </g>
    <g stroke={NAVY} strokeWidth={4 / 1.6} strokeLinejoin="round" strokeLinecap="round">
      {items.map((it: any, i: number) => <path key={i} d={it.d} fill={it.fill} />)}
    </g>
    {extra}
  </svg>
);

const Face: React.FC<{cx: number; cy: number}> = ({cx, cy}) => (
  <g>
    <circle cx={cx - 18} cy={cy} r={4.5} fill={NAVY} />
    <circle cx={cx + 18} cy={cy} r={4.5} fill={NAVY} />
    <path d={`M${cx - 7} ${cy + 8} Q${cx} ${cy + 16} ${cx + 7} ${cy + 8}`} stroke={NAVY} strokeWidth={3} fill="none" strokeLinecap="round" />
    <ellipse cx={cx - 30} cy={cy + 9} rx={8} ry={5} fill={CORAL} opacity={0.55} />
    <ellipse cx={cx + 30} cy={cy + 9} rx={8} ry={5} fill={CORAL} opacity={0.55} />
  </g>
);

const HeartS = (p: any) => <Sticker {...p}><Sh items={[{d: 'M100 172 C20 112 8 52 54 34 C80 26 96 44 100 58 C104 44 120 26 146 34 C192 52 180 112 100 172Z', fill: PINK}]} extra={<Face cx={100} cy={88} />} /></Sticker>;
const StarS = (p: any) => <Sticker {...p}><Sh items={[{d: 'M100 14 L124 74 L188 78 L138 118 L156 182 L100 146 L44 182 L62 118 L12 78 L76 74Z', fill: BUTTER}]} extra={<Face cx={100} cy={102} />} /></Sticker>;
const CloudS = (p: any) => <Sticker {...p}><Sh items={[{d: 'M50 150 C14 150 10 102 46 98 C44 60 98 48 112 84 C136 62 178 86 160 120 C196 124 190 152 160 150Z', fill: SKY}]} extra={<Face cx={100} cy={118} />} /></Sticker>;
const FlowerS = (p: any) => <Sticker {...p}><Sh items={[
  {d: 'M100 100 m-22 -40 a22 22 0 1 1 44 0 a22 22 0 1 1 -44 0Z', fill: LAV},
  {d: 'M100 100 m-22 18 a22 22 0 1 1 44 0 a22 22 0 1 1 -44 0Z', fill: LAV},
  {d: 'M60 80 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z', fill: LAV},
  {d: 'M140 80 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z', fill: LAV},
  {d: 'M100 78 a24 24 0 1 0 0.1 0Z', fill: BUTTER}]} extra={<Face cx={100} cy={102} />} /></Sticker>;

const LipsS: React.FC<any> = ({cross, ...p}) => {
  const cp = clamp((TNOW - cross) / 0.35);
  return (
    <Sticker {...p}>
      <Sh items={[
        {d: 'M20 100 C56 66 86 66 100 84 C114 66 144 66 180 100 C144 112 56 112 20 100Z', fill: CORAL},
        {d: 'M20 100 C56 140 144 140 180 100 C144 112 56 112 20 100Z', fill: '#f2776a'}]}
        extra={<g>
          <path d="M60 92 Q74 84 84 90" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" opacity={0.8} />
          {cross > 0 && cp > 0 && <g stroke="#e0364c" strokeWidth={13} strokeLinecap="round">
            <line x1={30} y1={30} x2={30 + 140 * clamp(cp * 2)} y2={30 + 140 * clamp(cp * 2)} />
            <line x1={170} y1={30} x2={170 - 140 * clamp(cp * 2 - 1)} y2={30 + 140 * clamp(cp * 2 - 1)} />
          </g>}
        </g>} />
    </Sticker>
  );
};

const JacketS = (p: any) => (
  <Sticker {...p}>
    <Sh items={[{d: 'M62 30 L92 18 L100 40 L108 18 L138 30 L184 74 L162 108 L146 94 L146 184 L54 184 L54 94 L38 108 L16 74Z', fill: MINT}]}
      extra={<g stroke={NAVY} strokeWidth={2.5} fill="none" strokeLinecap="round">
        <path d="M100 40 L100 184" strokeDasharray="5 6" />
        <path d="M92 18 L80 56 L100 40 L120 56 L108 18" fill={LAV} />
        <circle cx={100} cy={100} r={3} fill={NAVY} /><circle cx={100} cy={130} r={3} fill={NAVY} />
      </g>} />
  </Sticker>
);

const BottleS = (p: any) => (
  <Sticker {...p}>
    <Sh items={[
      {d: 'M66 90 h68 a10 10 0 0 1 10 10 v78 a10 10 0 0 1 -10 10 h-68 a10 10 0 0 1 -10 -10 v-78 a10 10 0 0 1 10 -10Z', fill: PINK},
      {d: 'M84 60 h32 v30 h-32Z', fill: '#fff'},
      {d: 'M78 40 h56 a8 8 0 0 1 0 16 h-56 a8 8 0 0 1 0 -16Z', fill: LAV}]}
      extra={<Face cx={100} cy={140} />} />
  </Sticker>
);

const Mist: React.FC<{x: number; y: number; t0: number; hide?: number}> = ({x, y, t0, hide}) => {
  if (TNOW < t0) return null;
  const fade = hide !== undefined ? 1 - clamp((TNOW - hide) / 0.3) : 1;
  return (
    <div style={{position: 'absolute', left: 0, top: 0, opacity: fade}}>
      {[0, 1, 2, 3, 4].map((i) => {
        const ph = ((TNOW - t0) * 0.9 + i * 0.2) % 1;
        const px = x - ph * 190, py = y + ph * 60 + Math.sin(i * 2) * 28 + (i - 2) * 16;
        return <div key={i} style={{position: 'absolute', left: px - 16, top: py - 16, width: 32 * (0.5 + ph), height: 32 * (0.5 + ph),
          borderRadius: '50%', background: 'rgba(255,255,255,0.85)', border: `3px solid ${PINK}`, opacity: 1 - ph * 0.7}} />;
      })}
    </div>
  );
};

const Burst: React.FC<{x: number; y: number; t0: number; text: string; color?: string; size?: number}> = ({x, y, t0, text, color = CORAL, size = 230}) => {
  const pts: string[] = [];
  for (let i = 0; i < 32; i++) { const a = (i / 32) * Math.PI * 2, r = i % 2 ? 78 : 98; pts.push(`${100 + Math.cos(a) * r},${100 + Math.sin(a) * r}`); }
  const lines = text.split('\n');
  return (
    <Sticker x={x} y={y} size={size} t0={t0} rot={-8}>
      <Sh items={[{d: `M${pts.join('L')}Z`, fill: color}]} extra={
        <g fontFamily="Baloo2" fontWeight={800} fill="#fff" textAnchor="middle" stroke={NAVY} strokeWidth={2} paintOrder="stroke">
          {lines.map((l, i) => <text key={i} x={100} y={100 + (i - (lines.length - 1) / 2) * 44 + 16} fontSize={46}>{l}</text>)}
        </g>} />
    </Sticker>
  );
};

// ---------- Text ----------
const Title: React.FC<{x: number; y: number; t0: number; lines: string[]; size?: number; hl?: [number, number, string?]}> = ({x, y, t0, lines, size = 96, hl}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const lh = size * 1.02;
  const hp = clamp((TNOW - t0 - 0.35) / 0.5);
  return (
    <div style={{position: 'absolute', left: x - 450, top: y - (lines.length * lh) / 2, width: 900, textAlign: 'center', transform: `scale(${0.6 + 0.4 * p}) rotate(-1.5deg)`, opacity: clamp(p * 1.5)}}>
      {lines.map((l, i) => (
        <div key={i} style={{position: 'relative', height: lh, lineHeight: `${lh}px`, fontFamily: 'Baloo2', fontWeight: 800, fontSize: size}}>
          {hl && hl[0] === i && <div style={{position: 'absolute', left: '50%', bottom: lh * 0.12, height: size * 0.34, width: `${(l.length * size * 0.5) * hp}px`, transform: 'translateX(-50%)', background: hl[2] || BUTTER, opacity: 0.9, borderRadius: 14, textAlign: 'left'}} />}
          <span style={{position: 'absolute', left: 0, right: 0, color: CORAL, transform: 'translate(6px,7px)', WebkitTextStroke: '16px #fff', paintOrder: 'stroke fill'}}>{l}</span>
          <span style={{position: 'absolute', left: 0, right: 0, color: NAVY, WebkitTextStroke: '14px #fff', paintOrder: 'stroke fill'}}>{l}</span>
        </div>
      ))}
    </div>
  );
};

const Sticky: React.FC<{x: number; y: number; w: number; t0: number; text: string; color?: string; rot?: number; size?: number; font?: string}> = ({x, y, w, t0, text, color = BUTTER, rot = 2, size = 44, font = 'PHand'}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y, width: w, transform: `scale(${p}) rotate(${rot}deg)`, transformOrigin: 'top center'}}>
      <div style={{position: 'absolute', left: w / 2 - 70, top: -22, width: 140, height: 40, background: `repeating-linear-gradient(135deg, ${PINK} 0 12px, #fff 12px 24px)`, opacity: 0.9, transform: 'rotate(-3deg)'}} />
      <div style={{background: color, border: `3px solid ${NAVY}`, borderRadius: 8, padding: '34px 26px 28px', boxShadow: '8px 9px 0 rgba(51,71,122,0.18)', fontFamily: font, fontWeight: font === 'Baloo2' ? 600 : 400, fontSize: size, lineHeight: 1.2, color: NAVY, textAlign: 'center'}}>{text}</div>
    </div>
  );
};

const Check: React.FC<{x: number; y: number; w: number; t0: number; text: string; color?: string}> = ({x, y, w, t0, text, color = MINT}) => {
  const p = usePop(t0);
  const cp = clamp((TNOW - t0 - 0.2) / 0.3);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y, width: w, display: 'flex', alignItems: 'center', gap: 22, transform: `translateX(${(1 - p) * -80}px)`, opacity: clamp(p * 1.4)}}>
      <svg width={84} height={84} viewBox="0 0 84 84" style={{flex: 'none'}}>
        <rect x={5} y={5} width={74} height={74} rx={18} fill={color} stroke={NAVY} strokeWidth={4} />
        <path d="M22 44 L37 58 L63 26" stroke={NAVY} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={80} strokeDashoffset={80 * (1 - cp)} />
      </svg>
      <div style={{flex: 1, fontFamily: 'Baloo2', fontWeight: 600, fontSize: 42, lineHeight: 1.08, color: NAVY, background: 'rgba(255,255,255,0.7)', borderRadius: 18, padding: '8px 18px'}}>{text}</div>
    </div>
  );
};

const Hand: React.FC<{x: number; y: number; t0: number; text: string; size?: number; color?: string; w?: number}> = ({x, y, t0, text, size = 54, color = CORAL, w = 760}) => {
  const p = clamp((TNOW - t0) / 0.4);
  if (p <= 0) return null;
  return <div style={{position: 'absolute', left: x - w / 2, top: y, width: w, textAlign: 'center', fontFamily: 'PHand', fontSize: size, color, opacity: p, transform: `translateY(${(1 - ease(p)) * 20}px) rotate(-1.5deg)`}}>{text}</div>;
};

const Dots: React.FC<{x: number; y: number; t0: number}> = ({x, y, t0}) => {
  if (TNOW < t0) return null;
  return <div style={{position: 'absolute', left: x - 100, top: y, width: 200, display: 'flex', justifyContent: 'space-around'}}>
    {[0, 1, 2].map((i) => <div key={i} style={{width: 34, height: 34, borderRadius: '50%', background: CORAL, border: `3px solid ${NAVY}`, transform: `translateY(${Math.sin((TNOW - t0) * 6 - i * 0.8) * -12}deg)`}} />)}
  </div>;
};

// ---------- Page ----------
const Page: React.FC<{tab: string}> = ({tab}) => (
  <div style={{position: 'absolute', left: 50, top: 190, width: 880, height: 1340}}>
    <div style={{position: 'absolute', inset: 0, background: '#fffaf0', borderRadius: 28, border: `4px solid ${NAVY}`, boxShadow: '12px 14px 0 rgba(51,71,122,0.18)',
      backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 55px, #d3e7f5 55px 57px)'}} />
    <div style={{position: 'absolute', left: 120, top: 0, bottom: 0, width: 3, background: PINK}} />
    <div style={{position: 'absolute', inset: 22, border: `3px dashed ${PINK}`, borderRadius: 18}} />
    {Array.from({length: 11}).map((_, i) => <div key={i} style={{position: 'absolute', left: 22, top: 70 + i * 118, width: 34, height: 34, borderRadius: '50%', background: '#e9dfce', border: `3px solid ${NAVY}`}} />)}
    <div style={{position: 'absolute', right: -30, top: 120, width: 56, height: 200, background: tab, border: `4px solid ${NAVY}`, borderRadius: '0 18px 18px 0'}} />
    <div style={{position: 'absolute', right: -30, top: 360, width: 56, height: 200, background: SKY, border: `4px solid ${NAVY}`, borderRadius: '0 18px 18px 0'}} />
  </div>
);

const Scene: React.FC<{s: number; e: number; bg: string; tab: string; last?: boolean; children: React.ReactNode}> = ({s, e, bg, tab, last, children}) => {
  const t = TNOW;
  if (t < s - 0.02 || t > e + 0.02) return null;
  const inP = ease((t - s) / 0.4), outP = last ? 0 : ease((t - (e - 0.35)) / 0.35);
  const dx = (1 - inP) * 1000 - outP * 1100, rot = (1 - inP) * -6 - outP * 6;
  const zoom = 1 + 0.035 * clamp((t - s) / (e - s));
  return (
    <AbsoluteFill style={{background: bg}}>
      {Array.from({length: 18}).map((_, i) => {
        const bx = (i * 173) % 1080, by = ((i * 311 + t * 30 * (0.5 + (i % 3) * 0.3)) % 2000) - 40;
        return <div key={i} style={{position: 'absolute', left: bx, top: by, width: 14 + (i % 4) * 8, height: 14 + (i % 4) * 8, borderRadius: '50%', background: 'rgba(255,255,255,0.7)'}} />;
      })}
      <div style={{position: 'absolute', inset: 0, transform: `translateX(${dx}px) rotate(${rot}deg) scale(${zoom})`, transformOrigin: '490px 860px'}}>
        <Page tab={tab} />
        {children}
      </div>
    </AbsoluteFill>
  );
};

const Polaroid: React.FC<{x: number; y: number; t0: number; src: string; rot: number; note: string}> = ({x, y, t0, src, rot, note}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const w = 360;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y - 250, width: w, transform: `scale(${p}) rotate(${rot + Math.sin(TNOW * 3 + x) * 1}deg)`}}>
      <div style={{position: 'absolute', left: w / 2 - 60, top: -20, width: 120, height: 36, background: `repeating-linear-gradient(135deg, ${BUTTER} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-4deg)', zIndex: 2}} />
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 8, padding: '16px 16px 62px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <img src={staticFile(src)} style={{width: '100%', display: 'block', border: `2px solid ${PINK}`}} />
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 14, textAlign: 'center', fontFamily: 'PHand', fontSize: 38, color: NAVY}}>{note}</div>
      </div>
    </div>
  );
};

const CAPS: [number, number, string][] = [
  [0, 4.4, 'Đi học muốn crush để ý nhưng sợ bị bạn bè nói là điệu lố'],
  [4.5, 6.3, 'Đừng bao giờ làm hai điều này'],
  [6.6, 8.6, 'Thứ nhất: Đừng đánh son đậm'],
  [8.7, 11.7, 'Lớp trưởng hay bạn thân nhìn vào chỉ thấy gượng gạo'],
  [11.9, 14.7, 'Đổi sang một lớp son dưỡng bóng nhẹ tệp màu môi,'],
  [14.7, 17.2, 'kết hợp chải tơi sợi lông mày hướng lên trên'],
  [17.25, 19.3, 'Mặt mộc tự khắc có chiều sâu'],
  [19.4, 23.7, 'Nhưng chi tiết khiến crush vô thức muốn ngồi gần bạn lại là:'],
  [23.85, 25.7, 'Xịt sương nhẹ vào gáy áo khoác,'],
  [25.8, 28.4, 'mùi thoang thoảng như hương xả vải tự nhiên'],
  [28.5, 31, 'Bởi vì bí quyết để thu hút nhất...'],
];

const Caption: React.FC = () => {
  const c = CAPS.find(([s, e]) => TNOW >= s && TNOW < e);
  if (!c) return null;
  const p = clamp((TNOW - c[0]) / 0.18);
  return (
    <div style={{position: 'absolute', left: CX - 370, top: 1570, width: 740, minHeight: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 40, padding: '14px 30px', fontFamily: 'Baloo2', fontWeight: 600, fontSize: 40, lineHeight: 1.15, color: NAVY, textAlign: 'center', boxShadow: '6px 7px 0 rgba(51,71,122,0.2)'}}>{c[2]}</div>
    </div>
  );
};

export const Video: React.FC = () => {
  useFonts();
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  TNOW = f / fps;
  return (
    <AbsoluteFill style={{background: SKY}}>
      <svg width={0} height={0} style={{position: 'absolute'}}>
        <defs>
          {[1, 2, 3, 4, 5].map((s) => (
            <filter key={s} id={`wob${s}`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves={2} seed={s} result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={4} />
            </filter>
          ))}
        </defs>
      </svg>
      <Audio src={staticFile('voice.mp3')} />

      {/* S1 — hook */}
      <Scene s={0} e={6.4} bg={SKY} tab={PINK}>
        <Sticky x={CX} y={300} w={420} t0={0.1} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
        <Title x={CX} y={640} t0={0.2} lines={['Đi học muốn', 'crush để ý?']} size={116} hl={[1, 0, BUTTER]} />
        <Hand x={CX} y={860} t0={2.0} text="mà sợ bạn bè nói là điệu lố..." size={58} />
        <HeartS x={250} y={1040} size={230} t0={1.0} rot={-8} />
        <StarS x={740} y={1020} size={210} t0={1.3} rot={9} />
        <Sticky x={CX} y={1190} w={640} t0={4.5} text="Đừng bao giờ làm 2 điều này!" color={BUTTER} rot={-2} font="Baloo2" size={54} />
      </Scene>

      {/* S2 — mẹo 1 */}
      <Scene s={6.4} e={19.25} bg={PEACH} tab={CORAL}>
        <Burst x={225} y={400} t0={6.7} text={'Thứ\nnhất'} />
        <Title x={590} y={400} t0={7.44} lines={['Đừng đánh', 'son đậm']} size={96} hl={[1, 0, PINK]} />
        <LipsS x={265} y={800} size={300} t0={7.9} rot={-6} cross={8.3} />
        <Sticky x={655} y={690} w={380} t0={8.82} text="Lớp trưởng, bạn thân nhìn vào chỉ thấy gượng gạo" color={BUTTER} rot={3} size={44} />
        <Sticky x={CX} y={1000} w={380} t0={11.7} text="Thay bằng:" color={MINT} rot={-2} font="Baloo2" size={46} />
        <Check x={CX + 10} y={1130} w={740} t0={11.92} text="Son dưỡng bóng nhẹ, tệp màu môi" />
        <Check x={CX + 10} y={1250} w={740} t0={14.79} text="Chải tơi sợi lông mày lên trên" color={PINK} />
        <Hand x={CX} y={1385} t0={17.3} text="Mặt mộc tự có chiều sâu ~" size={56} />
        <StarS x={800} y={1010} size={120} t0={17.4} rot={12} />
        <FlowerS x={150} y={1400} size={120} t0={17.6} rot={-10} />
      </Scene>

      {/* S3 — mẹo 2 */}
      <Scene s={19.25} e={28.45} bg={LAV} tab={MINT}>
        <Burst x={225} y={400} t0={19.5} text={'Chi\ntiết'} color={'#8fc9ad'} />
        <Title x={590} y={410} t0={19.9} lines={['Crush vô thức', 'muốn ngồi gần']} size={80} hl={[1, 0, BUTTER]} />
        <HeartS x={260} y={800} size={220} t0={20.6} rot={-8} hide={23.8} />
        <CloudS x={720} y={780} size={230} t0={21.2} rot={6} hide={23.8} />
        <Hand x={CX} y={980} t0={22.0} text="là gì nhỉ?" size={64} />
        <JacketS x={300} y={830} size={330} t0={23.9} rot={-4} />
        <BottleS x={710} y={800} size={280} t0={24.1} rot={6} />
        <Mist x={640} y={720} t0={24.4} />
        <Check x={CX + 10} y={1090} w={740} t0={23.9} text="Xịt sương nhẹ vào gáy áo khoác" />
        <Sticky x={CX} y={1230} w={700} t0={25.85} text="Mùi thoang thoảng như hương xả vải tự nhiên" color={PINK} rot={-2} font="Baloo2" size={46} />
        <Hand x={CX} y={1440} t0={27.0} text="(mẹo chung, làm theo hướng dẫn trên nhãn)" size={36} color={NAVY} />
      </Scene>

      {/* S4 — cliffhanger + PR nhẹ */}
      <Scene s={28.45} e={31} bg={BUTTER} tab={PINK} last>
        <Title x={CX} y={440} t0={28.6} lines={['Bởi vì bí quyết', 'để thu hút nhất...']} size={84} hl={[1, 0, PINK]} />
        <Polaroid x={312} y={960} t0={29.2} src="c1.jpg" rot={-5} note="Baby" />
        <Polaroid x={688} y={985} t0={29.45} src="c2.jpg" rot={4} note="Baby Chuchu" />
        <Hand x={CX} y={1330} t0={29.8} text="TAP Store - Fabric Perfume 50ml" size={46} />
        <HeartS x={150} y={640} size={110} t0={29.0} rot={-10} />
        <StarS x={830} y={650} size={110} t0={29.1} rot={10} />
      </Scene>

      <Caption />
      <div style={{position: 'absolute', left: CX - 300, top: 1705, width: 600, textAlign: 'center', fontFamily: 'PHand', fontSize: 34, color: NAVY, opacity: 0.7}}>mẹo nhỏ cho học sinh</div>
    </AbsoluteFill>
  );
};
