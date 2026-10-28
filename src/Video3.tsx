import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig, spring, delayRender, continueRender, Sequence, Loop, OffthreadVideo} from 'remotion';

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

const Polaroid: React.FC<{x: number; y: number; t0: number; src: string; rot: number; note: string; sc?: number}> = ({x, y, t0, src, rot, note, sc = 1}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const w = 360;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y - 250, width: w, transform: `scale(${p * sc}) rotate(${rot + Math.sin(TNOW * 3 + x) * 1}deg)`}}>
      <div style={{position: 'absolute', left: w / 2 - 60, top: -20, width: 120, height: 36, background: `repeating-linear-gradient(135deg, ${BUTTER} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-4deg)', zIndex: 2}} />
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 8, padding: '16px 16px 62px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <img src={staticFile(src)} style={{width: '100%', display: 'block', border: `2px solid ${PINK}`}} />
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 14, textAlign: 'center', fontFamily: 'PHand', fontSize: 38, color: NAVY}}>{note}</div>
      </div>
    </div>
  );
};

// ---------- Video frame (AI clip in scrapbook frame) ----------
const VideoFrame: React.FC<{x: number; y: number; w: number; t0: number; src: string; rot: number; from?: number; dur: number}> = ({x, y, w, t0, src, rot, from = 0, dur}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const h = Math.round((w * 16) / 9);
  return (
    <div style={{position: 'absolute', left: x - (w + 36) / 2, top: y - (h + 36) / 2, width: w + 36, transform: `scale(${p}) rotate(${rot + Math.sin(TNOW * 3 + x) * 0.8}deg)`}}>
      <div style={{position: 'absolute', left: (w + 36) / 2 - 60, top: -20, width: 120, height: 36, background: `repeating-linear-gradient(135deg, ${BUTTER} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-4deg)', zIndex: 2}} />
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 10, padding: 14, boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <div style={{position: 'relative', width: w, height: h, overflow: 'hidden', border: `2px solid ${PINK}`}}>
          <Sequence from={Math.round(t0 * 30)} durationInFrames={dur} layout="none">
            <Loop durationInFrames={150}>
              <OffthreadVideo src={staticFile(src)} muted startFrom={from} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </Loop>
          </Sequence>
        </div>
      </div>
    </div>
  );
};

const ArrowS: React.FC<{x: number; y: number; t0: number; rot: number}> = ({x, y, t0, rot}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const bob = Math.sin(TNOW * 7) * 10;
  return (
    <div style={{position: 'absolute', left: x - 90, top: y - 90 + bob, width: 180, height: 180, transform: `scale(${p}) rotate(${rot}deg)`}}>
      <svg viewBox="0 0 200 200" width="100%" height="100%" style={{overflow: 'visible'}}>
        <path d="M20 100 Q90 40 150 100" stroke="#fff" strokeWidth={22} fill="none" strokeLinecap="round" />
        <path d="M140 70 L168 104 L128 116" stroke="#fff" strokeWidth={22} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 100 Q90 40 150 100" stroke={CORAL} strokeWidth={10} fill="none" strokeLinecap="round" strokeDasharray="2 18" />
        <path d="M140 70 L168 104 L128 116" stroke={CORAL} strokeWidth={10} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

// quote card: text builds up phrase by phrase
const QuoteCard: React.FC<{x: number; y: number; w: number; t0: number; parts: [number, string][]; color?: string; rot?: number}> = ({x, y, w, t0, parts, color = '#fff', rot = -1.5}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const txt = parts.filter(([t]) => TNOW >= t).map(([, s]) => s).join('');
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y, width: w, transform: `scale(${p}) rotate(${rot}deg)`, transformOrigin: 'top center'}}>
      <div style={{position: 'absolute', left: w / 2 - 70, top: -22, width: 140, height: 38, background: `repeating-linear-gradient(135deg, ${MINT} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-3deg)', zIndex: 3}} />
      <div style={{position: 'absolute', right: 18, top: -30, zIndex: 3, background: CORAL, color: '#fff', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 28, padding: '2px 16px', borderRadius: 14, border: `3px solid ${NAVY}`, transform: 'rotate(4deg)'}}>khách nói</div>
      <div style={{background: color, border: `4px solid ${NAVY}`, borderRadius: 18, padding: '34px 30px 30px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)', minHeight: 190, fontFamily: 'Baloo2', fontWeight: 600, fontSize: 48, lineHeight: 1.18, color: NAVY, textAlign: 'center'}}>{txt}</div>
    </div>
  );
};

const Review2: React.FC<{x: number; y: number; w: number; t0: number; src: string; iw: number; ih0: number; rot?: number; hls: [number, number, number, number, number][]}> = ({x, y, w, t0, src, iw, ih0, rot = -1, hls}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const k = (w - 56) / iw;
  const ih = ih0 * k;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y - (ih + 80) / 2, width: w, transform: `scale(${p}) rotate(${rot}deg)`}}>
      <div style={{position: 'absolute', left: w / 2 - 70, top: -22, width: 140, height: 38, background: `repeating-linear-gradient(135deg, ${MINT} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-3deg)', zIndex: 3}} />
      <div style={{position: 'absolute', right: 18, top: -30, zIndex: 3, background: CORAL, color: '#fff', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 28, padding: '2px 16px', borderRadius: 14, border: `3px solid ${NAVY}`, transform: 'rotate(4deg)'}}>feedback thật</div>
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 14, padding: '34px 24px 22px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <div style={{position: 'relative', width: iw * k, height: ih}}>
          <img src={staticFile(src)} style={{width: '100%', height: '100%', display: 'block'}} />
          {hls.map(([x0, x1, y0, y1, t], i) => {
            const hp = ease((TNOW - t) / 0.5);
            if (hp <= 0) return null;
            return (
              <div key={i} style={{position: 'absolute', left: x0 * k - 3, top: y0 * k, width: (x1 - x0) * k * hp + 6, height: (y1 - y0) * k, overflow: 'hidden'}}>
                <div style={{position: 'absolute', inset: 0, background: BUTTER, mixBlendMode: 'multiply', opacity: 0.95, borderRadius: 6}} />
                <div style={{position: 'absolute', left: 0, right: 0, bottom: 1, height: 5, background: CORAL, borderRadius: 3}} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CAPS: [number, number, string][] = [
  [0, 3.42, 'Đi học muốn người ta đi ngang qua thấy mình thơm tho sạch sẽ,'],
  [3.86, 6.95, 'nhưng lại sợ bị bạn cùng bàn kêu làm lố hay ngộp thở:'],
  [7.39, 10.52, 'Đổi bài ngay sang chai xịt thơm quần áo mùi phấn em bé này đi!'],
  [11.18, 14.38, 'Không phải tự nhiên mà lượt đánh giá năm sao nhiều đến thế đâu,'],
  [14.74, 17.14, 'đọc feedback của mấy bạn học sinh là hiểu liền nè:'],
  [17.59, 20.2, 'Đầu tiên là bạn Gia Hân mua tặng bạn thân'],
  [20.2, 22.05, 'xong mê quá phải quay lại khen:'],
  [22.47, 23.43, '"Mùi như em bé,'],
  [23.76, 25.88, 'trời hè hay trời nóng không hề bị ngộp,'],
  [26.33, 27.7, 'dùng mùa đông thì đủ ngọt,'],
  [27.99, 29.24, 'nữ tính yêu lắm"'],
  [29.65, 31.27, 'Chuẩn bài luôn, mùi phấn rôm baby này'],
  [31.65, 34.95, 'điểm ăn tiền là không bị nồng cồn gắt,'],
  [35.43, 37.61, 'ai sợ mùi gắt ngửi phát là ưng liền.'],
  [38.08, 41.24, 'Tiếp theo là quả review thực chiến của bạn Lưng Dài Chân Ngắn:'],
  [41.63, 42.83, '"Mùi phấn rôm em bé,'],
  [43.17, 46.45, 'đi học năm tiết xịt lên áo khoác lúc về vẫn còn thơm"'],
  [46.83, 49.76, 'Điểm khác biệt là hạt sương bám thẳng vào từng sợi vải,'],
  [50.15, 52.3, 'khử sạch mùi bí bách sau mấy tiết thể dục'],
  [52.3, 54.28, 'mà không làm bạn ngồi cạnh khó chịu.'],
  [54.61, 56.08, 'Thậm chí có bạn còn bảo:'],
  [56.49, 58.19, '"Lúc xịt vô mát cơ thể lắm,'],
  [58.59, 60.7, 'đợi tui xài xong chai 50ml'],
  [60.7, 62.55, 'rồi qua sử dụng chai 100ml"'],
  [62.96, 64.15, 'Bạn khác thì thú nhận:'],
  [64.57, 65.82, '"Mùi thơm như em bé ấy,'],
  [66.15, 67.93, 'tui còn mê huống chi người yêu,'],
  [68.27, 69.34, 'lần sau ủng hộ tiếp."'],
  [69.77, 71.46, 'Rồi có bạn khen nức nở là:'],
  [71.74, 72.74, '"Siêu dịu keo,'],
  [73.04, 74.19, 'y hệt mùi em bé thật,'],
  [74.58, 76.24, 'ngửi phát là siu nghiện luôn"'],
  [76.63, 79.24, 'Từ đi học năm tiết đến đi date ngồi sát rạt,'],
  [79.64, 81.6, 'người ta chỉ thấy bạn tỏa ra'],
  [81.6, 84.3, 'cái vibe thơm tho nhẹ nhàng như vừa giặt áo xong thôi.'],
  [84.8, 87.23, 'Vừa túi tiền học sinh mà thơm tinh tế thế này,'],
  [87.64, 90.4, 'bấm ngay góc trái để rinh về một chai đi học nha!'],
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

const D = (a: number, b: number) => Math.ceil((b - a) * 30) + 6;

export const Video3: React.FC = () => {
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
      <Audio src={staticFile('voice3.mp3')} />

      {/* A hook */}
      <Scene s={0} e={10.9} bg={SKY} tab={PINK}>
        <Sticky x={CX} y={290} w={420} t0={0.1} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
        <Title x={CX} y={500} t0={0.3} lines={['Đi học muốn thơm', 'mà sợ bị bảo làm lố?']} size={70} hl={[1, 0, PINK]} />
        <VideoFrame x={CX} y={980} w={400} t0={1.0} src="clipA.mp4" rot={-2} dur={D(1.0, 10.9)} />
        <HeartS x={150} y={760} size={110} t0={3.5} rot={-10} />
        <StarS x={830} y={780} size={110} t0={3.9} rot={10} />
        <CloudS x={150} y={1150} size={130} t0={5.0} rot={6} />
        <Hand x={CX} y={1380} t0={7.5} text="Đổi sang xịt mùi phấn em bé nha~" size={56} />
      </Scene>

      {/* B feedback intro */}
      <Scene s={10.9} e={17.4} bg={PEACH} tab={CORAL}>
        <Burst x={225} y={420} t0={11.05} text={'Review\nthật'} />
        <Title x={600} y={430} t0={11.3} lines={['Feedback của', 'mấy bạn học sinh']} size={66} hl={[1, 0, BUTTER]} />
        {[0, 1, 2, 3, 4].map((i) => <StarS key={i} x={170 + i * 160} y={880} size={130} t0={11.8 + i * 0.35} rot={i % 2 ? 8 : -8} />)}
        <Hand x={CX} y={1000} t0={12.6} text="năm sao nhiều đến thế đâu~" size={60} />
        <Sticky x={CX} y={1150} w={700} t0={14.85} text="Đọc feedback là hiểu liền nè" color={BUTTER} rot={-2} font="Baloo2" size={48} />
      </Scene>

      {/* C Gia Han */}
      <Scene s={17.4} e={29.45} bg={LAV} tab={MINT}>
        <Sticky x={CX} y={300} w={780} t0={17.6} text="Bạn Gia Hân mua tặng bạn thân, mê quá quay lại khen:" color={BUTTER} rot={-2} font="Baloo2" size={42} />
        <Review2 x={CX + 20} y={790} w={970} t0={21.2} src="g3.png" iw={1217} ih0={363} rot={1.2}
          hls={[[350, 700, 148, 202, 22.6], [705, 1135, 148, 202, 23.9], [40, 400, 205, 258, 24.3], [425, 1000, 205, 258, 26.3], [840, 1150, 264, 320, 28.0]]} />
        <HeartS x={250} y={1090} size={200} t0={24.5} rot={-8} />
        <StarS x={730} y={1085} size={190} t0={26.8} rot={9} />
        <FlowerS x={CX} y={1290} size={140} t0={28.0} rot={0} />
      </Scene>

      {/* D phan rom baby */}
      <Scene s={29.45} e={38.0} bg={'#fdf1bf'} tab={PINK}>
        <Title x={CX} y={400} t0={29.7} lines={['Mùi phấn rôm', 'baby chuẩn bài']} size={84} hl={[1, 0, PINK]} />
        <VideoFrame x={290} y={1040} w={340} t0={30.4} src="clipB.mp4" rot={-4} dur={D(30.4, 38.0)} />
        <Sticky x={690} y={790} w={360} t0={31.7} text="Không nồng cồn gắt" color={MINT} rot={2} font="Baloo2" size={42} />
        <Sticky x={690} y={1040} w={360} t0={35.5} text="Ngửi phát là ưng liền" color={PINK} rot={-2} font="Baloo2" size={42} />
        <StarS x={760} y={1330} size={110} t0={36.8} rot={10} />
      </Scene>

      {/* E Lung dai chan ngan */}
      <Scene s={38.0} e={46.65} bg={SKY} tab={LAV}>
        <Sticky x={CX} y={310} w={620} t0={38.2} text="Review thực chiến" color={LAV} rot={-2} font="Baloo2" size={50} />
        <Review2 x={CX + 20} y={640} w={970} t0={40.4} src="g2.png" iw={1145} ih0={210} rot={-1.5}
          hls={[[228, 555, 90, 142, 41.7], [568, 1010, 90, 142, 43.2]]} />
        <Check x={CX + 10} y={880} w={740} t0={43.2} text="Đi học năm tiết" />
        <Check x={CX + 10} y={1010} w={740} t0={44.3} text="Xịt lên áo khoác" color={PINK} />
        <Check x={CX + 10} y={1140} w={740} t0={45.4} text="Lúc về vẫn còn thơm" color={BUTTER} />
        <CloudS x={170} y={1380} size={140} t0={45.6} rot={-6} />
        <HeartS x={800} y={1380} size={110} t0={45.9} rot={8} />
      </Scene>

      {/* F mist */}
      <Scene s={46.65} e={54.45} bg={'#d6efe3'} tab={BUTTER}>
        <Title x={CX} y={420} t0={46.9} lines={['Hạt sương bám thẳng', 'vào từng sợi vải']} size={72} hl={[1, 0, BUTTER]} />
        <JacketS x={300} y={850} size={330} t0={47.4} rot={-4} />
        <BottleS x={710} y={830} size={280} t0={47.7} rot={6} />
        <Mist x={640} y={760} t0={48.0} />
        <Sticky x={CX} y={1090} w={700} t0={50.3} text="Khử sạch mùi bí bách sau mấy tiết thể dục" color={PINK} rot={-2} font="Baloo2" size={44} />
        <Hand x={CX} y={1340} t0={52.4} text="mà không làm bạn ngồi cạnh khó chịu" size={52} />
        <StarS x={810} y={1420} size={100} t0={53.2} rot={10} />
      </Scene>

      {/* G review 50ml -> 100ml */}
      <Scene s={54.45} e={62.75} bg={PEACH} tab={CORAL}>
        <Sticky x={CX} y={310} w={620} t0={54.7} text="Thậm chí có bạn còn bảo:" color={BUTTER} rot={-2} font="Baloo2" size={50} />
        <Review2 x={CX + 20} y={720} w={970} t0={55.6} src="g1.png" iw={1145} ih0={217} rot={1.5}
          hls={[[565, 1075, 92, 150, 56.5], [40, 1085, 158, 212, 58.6]]} />
        <BottleS x={270} y={1130} size={200} t0={59.4} rot={-5} />
        <Hand x={270} y={1260} t0={59.6} text="50ml" size={56} w={300} />
        <ArrowS x={490} y={1100} t0={60.7} rot={0} />
        <BottleS x={700} y={1090} size={290} t0={61.2} rot={5} />
        <Hand x={700} y={1260} t0={61.4} text="100ml" size={60} w={300} />
      </Scene>

      {/* H1 */}
      <Scene s={62.75} e={69.55} bg={'#e8dcf7'} tab={BUTTER}>
        <Sticky x={CX} y={300} w={600} t0={62.9} text="Bạn khác thì thú nhận:" color={PINK} rot={-2} font="Baloo2" size={50} />
        <VideoFrame x={CX} y={800} w={330} t0={63.4} src="clipC.mp4" rot={2} dur={D(63.4, 69.55)} />
        <QuoteCard x={CX} y={1140} w={780} t0={64.4} rot={-1.5} parts={[[64.57, '"Mùi thơm như em bé ấy,'], [66.15, ' tui còn mê huống chi người yêu,'], [68.27, ' lần sau ủng hộ tiếp."']]} />
        <HeartS x={150} y={640} size={110} t0={65.0} rot={-10} />
        <StarS x={830} y={650} size={110} t0={65.4} rot={10} />
      </Scene>

      {/* H2 */}
      <Scene s={69.55} e={76.45} bg={'#fde4ec'} tab={MINT}>
        <Sticky x={CX} y={300} w={640} t0={69.7} text="Rồi có bạn khen nức nở là:" color={BUTTER} rot={2} font="Baloo2" size={50} />
        <VideoFrame x={CX} y={800} w={330} t0={70.2} src="clipB.mp4" from={60} rot={-2} dur={D(70.2, 76.45)} />
        <QuoteCard x={CX} y={1140} w={780} t0={71.0} rot={1.5} parts={[[71.74, '"Siêu dịu keo,'], [73.04, ' y hệt mùi em bé thật,'], [74.58, ' ngửi phát là siu nghiện luôn"']]} />
        <FlowerS x={150} y={640} size={120} t0={72.0} rot={-8} />
        <HeartS x={830} y={650} size={110} t0={73.5} rot={8} />
      </Scene>

      {/* I vibe */}
      <Scene s={76.45} e={84.55} bg={'#d6efe3'} tab={LAV}>
        <Title x={CX} y={420} t0={76.7} lines={['Đi học hay đi date', 'ngồi sát rạt']} size={74} hl={[1, 0, PINK]} />
        <Check x={CX + 10} y={760} w={740} t0={79.7} text="Chỉ thấy bạn có vibe thơm tho" />
        <Check x={CX + 10} y={890} w={740} t0={81.7} text="Nhẹ nhàng như vừa giặt áo xong" color={PINK} />
        <Polaroid x={300} y={1230} t0={82.4} src="c1.jpg" rot={-5} note="Baby" sc={0.62} />
        <Polaroid x={690} y={1240} t0={82.9} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.62} />
      </Scene>

      {/* J CTA */}
      <Scene s={84.55} e={90.4} bg={PEACH} tab={CORAL} last>
        <Title x={CX} y={420} t0={84.8} lines={['Vừa túi tiền học sinh', 'mà thơm tinh tế']} size={66} hl={[1, 0, PINK]} />
        <Polaroid x={300} y={960} t0={86.0} src="c1.jpg" rot={-5} note="Baby" sc={0.9} />
        <Polaroid x={690} y={980} t0={86.4} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.9} />
        <HeartS x={150} y={700} size={110} t0={85.6} rot={-10} />
        <StarS x={830} y={710} size={110} t0={85.9} rot={10} />
        <Hand x={CX} y={1340} t0={87.7} text="Bấm giỏ hàng góc trái nha!" size={58} />
        <ArrowS x={190} y={1440} t0={88.0} rot={-150} />
      </Scene>

      <Caption />
      <div style={{position: 'absolute', left: CX - 300, top: 1705, width: 600, textAlign: 'center', fontFamily: 'PHand', fontSize: 34, color: NAVY, opacity: 0.7}}>feedback thật từ khách TAP Store</div>
    </AbsoluteFill>
  );
};

// ================= Carousel (ảnh tĩnh 1080x1350) =================
const SPage: React.FC<{tab: string}> = ({tab}) => (
  <div style={{position: 'absolute', left: 60, top: 60, width: 960, height: 1230}}>
    <div style={{position: 'absolute', inset: 0, background: '#fffaf0', borderRadius: 28, border: `4px solid ${NAVY}`, boxShadow: '12px 14px 0 rgba(51,71,122,0.18)',
      backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 55px, #d3e7f5 55px 57px)'}} />
    <div style={{position: 'absolute', left: 120, top: 0, bottom: 0, width: 3, background: PINK}} />
    <div style={{position: 'absolute', inset: 22, border: `3px dashed ${PINK}`, borderRadius: 18}} />
    {Array.from({length: 10}).map((_, i) => <div key={i} style={{position: 'absolute', left: 22, top: 70 + i * 118, width: 34, height: 34, borderRadius: '50%', background: '#e9dfce', border: `3px solid ${NAVY}`}} />)}
    <div style={{position: 'absolute', right: -30, top: 120, width: 56, height: 200, background: tab, border: `4px solid ${NAVY}`, borderRadius: '0 18px 18px 0'}} />
    <div style={{position: 'absolute', right: -30, top: 360, width: 56, height: 200, background: SKY, border: `4px solid ${NAVY}`, borderRadius: '0 18px 18px 0'}} />
  </div>
);

const SlideBase: React.FC<{bg: string; tab: string; n: number; total: number; children: React.ReactNode}> = ({bg, tab, n, total, children}) => (
  <AbsoluteFill style={{background: bg}}>
    {Array.from({length: 14}).map((_, i) => (
      <div key={i} style={{position: 'absolute', left: (i * 173) % 1080, top: (i * 311) % 1350, width: 14 + (i % 4) * 8, height: 14 + (i % 4) * 8, borderRadius: '50%', background: 'rgba(255,255,255,0.7)'}} />
    ))}
    <SPage tab={tab} />
    {children}
    <div style={{position: 'absolute', right: 96, top: 84, background: '#fff', border: `3px solid ${NAVY}`, borderRadius: 20, padding: '0 16px', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 28, color: NAVY}}>{n}/{total}</div>
    <div style={{position: 'absolute', left: 140, top: 1303, width: 800, textAlign: 'center', fontFamily: 'PHand', fontSize: 30, color: NAVY, opacity: 0.7}}>feedback thật từ khách TAP Store</div>
  </AbsoluteFill>
);

const T = 0.1;
const CX2 = 540;
const SLIDES: {bg: string; tab: string; el: () => React.ReactNode}[] = [
  {bg: SKY, tab: PINK, el: () => (<>
    <Sticky x={CX2} y={130} w={420} t0={T} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
    <Title x={CX2} y={380} t0={T} lines={['Đi học muốn thơm', 'mà sợ bị bảo làm lố?']} size={76} hl={[1, 0, PINK]} />
    <Polaroid x={330} y={860} t0={T} src="c1.jpg" rot={-5} note="Baby" sc={0.92} />
    <Polaroid x={760} y={880} t0={T} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.92} />
    <HeartS x={170} y={600} size={110} t0={T} rot={-10} />
    <StarS x={920} y={620} size={110} t0={T} rot={10} />
    <Hand x={CX2} y={1200} t0={T} text="Đổi sang xịt mùi phấn em bé nha~" size={54} />
  </>)},
  {bg: PEACH, tab: CORAL, el: () => (<>
    <Burst x={270} y={300} t0={T} text={'Review\nthật'} />
    <Title x={700} y={310} t0={T} lines={['Feedback của', 'mấy bạn học sinh']} size={64} hl={[1, 0, BUTTER]} />
    {[0, 1, 2, 3, 4].map((i) => <StarS key={i} x={190 + i * 175} y={680} size={140} t0={T} rot={i % 2 ? 8 : -8} />)}
    <Hand x={CX2} y={820} t0={T} text="năm sao nhiều đến thế đâu~" size={60} />
    <Sticky x={CX2} y={980} w={700} t0={T} text="Đọc feedback là hiểu liền nè" color={BUTTER} rot={-2} font="Baloo2" size={48} />
  </>)},
  {bg: LAV, tab: MINT, el: () => (<>
    <Sticky x={CX2} y={140} w={780} t0={T} text="Bạn Gia Hân mua tặng bạn thân, mê quá quay lại khen:" color={BUTTER} rot={-2} font="Baloo2" size={42} />
    <Review2 x={CX2} y={640} w={900} t0={T} src="g3.png" iw={1217} ih0={363} rot={1.2}
      hls={[[350, 700, 148, 202, 0], [705, 1135, 148, 202, 0], [40, 400, 205, 258, 0], [425, 1000, 205, 258, 0], [840, 1150, 264, 320, 0]]} />
    <HeartS x={290} y={980} size={200} t0={T} rot={-8} />
    <StarS x={790} y={975} size={190} t0={T} rot={9} />
    <FlowerS x={CX2} y={1170} size={140} t0={T} rot={0} />
  </>)},
  {bg: '#fdf1bf', tab: PINK, el: () => (<>
    <Title x={CX2} y={260} t0={T} lines={['Mùi phấn rôm', 'baby chuẩn bài']} size={86} hl={[1, 0, PINK]} />
    <Polaroid x={330} y={820} t0={T} src="c1.jpg" rot={-4} note="Baby" sc={1.0} />
    <Sticky x={780} y={600} w={340} t0={T} text="Không nồng cồn gắt" color={MINT} rot={2} font="Baloo2" size={42} />
    <Sticky x={780} y={860} w={340} t0={T} text="Ngửi phát là ưng liền" color={PINK} rot={-2} font="Baloo2" size={42} />
    <StarS x={830} y={1140} size={120} t0={T} rot={10} />
  </>)},
  {bg: SKY, tab: LAV, el: () => (<>
    <Sticky x={CX2} y={150} w={620} t0={T} text="Review thực chiến" color={LAV} rot={-2} font="Baloo2" size={50} />
    <Review2 x={CX2} y={520} w={900} t0={T} src="g2.png" iw={1145} ih0={210} rot={-1.5} hls={[[228, 555, 90, 142, 0], [568, 1010, 90, 142, 0]]} />
    <Check x={CX2} y={710} w={760} t0={T} text="Đi học năm tiết" />
    <Check x={CX2} y={840} w={760} t0={T} text="Xịt lên áo khoác" color={PINK} />
    <Check x={CX2} y={970} w={760} t0={T} text="Lúc về vẫn còn thơm" color={BUTTER} />
    <CloudS x={230} y={1190} size={140} t0={T} rot={-6} />
    <HeartS x={860} y={1190} size={110} t0={T} rot={8} />
  </>)},
  {bg: '#d6efe3', tab: BUTTER, el: () => (<>
    <Title x={CX2} y={260} t0={T} lines={['Hạt sương bám thẳng', 'vào từng sợi vải']} size={74} hl={[1, 0, BUTTER]} />
    <JacketS x={330} y={640} size={330} t0={T} rot={-4} />
    <BottleS x={760} y={620} size={280} t0={T} rot={6} />
    <Mist x={690} y={560} t0={T} />
    <Sticky x={CX2} y={900} w={760} t0={T} text="Khử sạch mùi bí bách sau mấy tiết thể dục" color={PINK} rot={-2} font="Baloo2" size={44} />
    <Hand x={CX2} y={1120} t0={T} text="mà không làm bạn ngồi cạnh khó chịu" size={52} w={800} />
    <StarS x={880} y={1200} size={90} t0={T} rot={10} />
  </>)},
  {bg: PEACH, tab: CORAL, el: () => (<>
    <Sticky x={CX2} y={150} w={620} t0={T} text="Thậm chí có bạn còn bảo:" color={BUTTER} rot={-2} font="Baloo2" size={50} />
    <Review2 x={CX2} y={520} w={900} t0={T} src="g1.png" iw={1145} ih0={217} rot={1.5} hls={[[565, 1075, 92, 150, 0], [40, 1085, 158, 212, 0]]} />
    <BottleS x={290} y={900} size={200} t0={T} rot={-5} />
    <Hand x={290} y={1020} t0={T} text="50ml" size={56} w={300} />
    <ArrowS x={540} y={880} t0={T} rot={0} />
    <BottleS x={780} y={880} size={290} t0={T} rot={5} />
    <Hand x={780} y={1040} t0={T} text="100ml" size={60} w={300} />
  </>)},
  {bg: '#fde4ec', tab: MINT, el: () => (<>
    <QuoteCard x={CX2} y={170} w={820} t0={T} rot={-1.5} parts={[[0, '"Mùi thơm như em bé ấy, tui còn mê huống chi người yêu, lần sau ủng hộ tiếp."']]} />
    <QuoteCard x={CX2} y={650} w={820} t0={T} rot={1.5} color={'#fffbe0'} parts={[[0, '"Siêu dịu keo, y hệt mùi em bé thật, ngửi phát là siu nghiện luôn"']]} />
    <FlowerS x={190} y={1120} size={120} t0={T} rot={-8} />
    <HeartS x={880} y={1120} size={110} t0={T} rot={8} />
  </>)},
  {bg: PEACH, tab: CORAL, el: () => (<>
    <Title x={CX2} y={240} t0={T} lines={['Vừa túi tiền học sinh', 'mà thơm tinh tế']} size={68} hl={[1, 0, PINK]} />
    <Polaroid x={330} y={760} t0={T} src="c1.jpg" rot={-5} note="Baby" sc={0.95} />
    <Polaroid x={760} y={780} t0={T} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.95} />
    <HeartS x={160} y={470} size={110} t0={T} rot={-10} />
    <StarS x={930} y={480} size={110} t0={T} rot={10} />
    <Hand x={CX2} y={1120} t0={T} text="Nghía giỏ hàng nha!" size={62} />
  </>)},
];

export const Carousel: React.FC<{n: number}> = ({n}) => {
  useFonts();
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  TNOW = f / fps;
  const s = SLIDES[(n || 1) - 1];
  return (
    <>
      <svg width={0} height={0} style={{position: 'absolute'}}>
        <defs>
          {[1, 2, 3, 4, 5].map((k) => (
            <filter key={k} id={`wob${k}`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves={2} seed={k} result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={4} />
            </filter>
          ))}
        </defs>
      </svg>
      <SlideBase bg={s.bg} tab={s.tab} n={n || 1} total={SLIDES.length}>{s.el()}</SlideBase>
    </>
  );
};
