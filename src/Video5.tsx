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

const CAPS1: [number, number, string][] = [[0.45, 1.54, "Bạn thân khen xinh rồi,"], [1.93, 2.41, "nhưng ra gần cửa sổ"], [2.41, 3.14, "bạn có chắc không?"], [3.88, 4.75, "Trước khi đi học hay đi date,"], [5.11, 7.12, "bạn thử cách 30 giây này nha."], [7.55, 8.31, "Bước một,"], [8.75, 9.07, "đứng chỗ có ánh sáng"], [9.07, 10.27, "thật, như gần cửa sổ,"], [10.27, 11.37, "rồi soi lớp nền xem có chỗ"], [11.37, 13.04, "nào bị bệt hay lên tông không."], [13.04, 13.83, "Đèn trong phòng đôi khi"], [13.83, 15.27, "làm mình nhìn khác đi."], [15.27, 15.59, "Bước hai,"], [15.59, 16.37, "lùi ra xa một chút"], [16.37, 16.81, "và nhìn tổng thể,"], [17.19, 18.16, "từ mặt tới quần áo,"], [18.16, 19.55, "xem đã gọn gàng chưa."], [19.55, 20.97, "Làm xong là yên tâm bước ra cửa,"], [21.35, 21.97, "không cần chỉ chờ lời"], [21.97, 22.66, "khen của bạn thân."], [23.49, 24.36, "Nghía giỏ hàng bên dưới nha."]];
const CAPS2: [number, number, string][] = [[0.0, 1.19, "Bạn cùng bàn nhìn bạn ở"], [1.19, 2.46, "đâu, mà gương không soi được?"], [3.06, 3.97, "Ngồi sát nhau thì họ"], [3.97, 5.58, "thấy mấy chi tiết rất gần."], [5.58, 6.77, "Một là cổ áo với viền"], [6.77, 8.22, "áo, có nhăn hay không."], [8.22, 9.21, "Hai là tóc hoặc khăn"], [9.21, 10.69, "sát mặt, có gọn không."], [10.69, 11.87, "Ba là mùi trên áo, chi"], [11.87, 12.87, "tiết dễ bị quên nhất,"], [12.87, 14.71, "vì gương đâu có cho bạn ngửi."], [14.71, 16.1, "Nên trước khi ra khỏi nhà, tự"], [16.1, 17.98, "kiểm tra nhanh ba điểm này thôi."], [17.98, 18.97, "Nếu muốn thêm một lựa"], [18.97, 19.96, "chọn cho điểm thứ ba,"], [19.96, 21.55, "bạn có thể xem nước hoa vải Baby"], [21.55, 22.92, "hoặc Baby Chuchu, loại chai 50ml,"], [23.31, 24.65, "và nhớ đọc cách dùng trên nhãn."], [25.14, 26.0, "Vậy là bạn soi được"], [26.0, 26.99, "cả phần gương bỏ sót."], [26.99, 28.18, "Nghía giỏ hàng bên dưới nha."]];
const CAPS3: [number, number, string][] = [[0.0, 1.12, "Sáng nào cũng vội, vậy mà"], [1.12, 3.28, "có bạn nhìn vẫn gọn gàng."], [3.68, 4.24, "Bí quyết nằm ở 9h tối."], [4.24, 5.9, "Không cần làm nhiều hơn đâu,"], [5.9, 7.46, "chỉ một thao tác nhỏ thôi."], [7.46, 9.61, "Đến 9h tối, bạn chọn sẵn bộ đồ cho"], [9.61, 10.93, "ngày mai, treo lên chỗ dễ thấy."], [11.36, 12.98, "Rồi xịt nước hoa vải lên"], [12.98, 14.56, "đồ, nhớ đọc hướng dẫn trên"], [14.56, 15.68, "nhãn để xịt cho đúng cách."], [15.68, 17.14, "Xong, tắt đèn đi ngủ."], [17.14, 18.08, "Sáng dậy, bạn chỉ việc"], [18.08, 19.43, "mặc và ra khỏi nhà,"], [19.43, 20.67, "không phải đứng lục tủ nữa."], [21.06, 22.54, "Đi học với cảm giác mình"], [22.54, 23.66, "đã sẵn sàng từ tối hôm"], [23.66, 25.27, "trước, nghe cũng dễ chịu mà."], [25.27, 26.02, "Tối nay bạn thử"], [26.02, 27.56, "một lần xem sao nha."], [27.56, 28.68, "Nghía giỏ hàng bên dưới nha."]];

const PolaroidC: React.FC<{x: number; cy: number; t0: number; src: string; ar: number; rot: number; note: string; sc?: number}> = ({x, cy, t0, src, ar, rot, note, sc = 1}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const w = 360, h = (w - 32) * ar + 78;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: cy - h / 2, width: w, transform: `scale(${p * sc}) rotate(${rot + Math.sin(TNOW * 3 + x) * 1}deg)`}}>
      <div style={{position: 'absolute', left: w / 2 - 60, top: -20, width: 120, height: 36, background: `repeating-linear-gradient(135deg, ${BUTTER} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-4deg)', zIndex: 2}} />
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 8, padding: '16px 16px 62px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <img src={staticFile(src)} style={{width: '100%', display: 'block', border: `2px solid ${PINK}`}} />
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 14, textAlign: 'center', fontFamily: 'PHand', fontSize: 38, color: NAVY}}>{note}</div>
      </div>
    </div>
  );
};

const Caption: React.FC<{caps: [number, number, string][]}> = ({caps}) => {
  const c = caps.find(([s, e]) => TNOW >= s && TNOW < e + 0.12);
  if (!c) return null;
  const p = clamp((TNOW - c[0]) / 0.18);
  return (
    <div style={{position: 'absolute', left: CX - 370, top: 1570, width: 740, minHeight: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 40, padding: '14px 30px', fontFamily: 'Baloo2', fontWeight: 600, fontSize: 40, lineHeight: 1.15, color: NAVY, textAlign: 'center', boxShadow: '6px 7px 0 rgba(51,71,122,0.2)'}}>{c[2]}</div>
    </div>
  );
};

const useClock = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  TNOW = f / fps;
};

const Shell: React.FC<{voice: string; caps: [number, number, string][]; children: React.ReactNode}> = ({voice, caps, children}) => {
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
      <Audio src={staticFile(voice)} />
      {children}
      <Caption caps={caps} />
    </AbsoluteFill>
  );
};

// ===== Dòng 9: soi lớp nền dưới ánh sáng thật =====
export const TapDong9: React.FC = () => {
  useClock();
  return (
  <Shell voice="dl/voice1.mp3" caps={CAPS1}>
    <Scene s={0} e={7.4} bg={SKY} tab={PINK}>
      <Sticky x={CX} y={290} w={420} t0={0.1} text="mẹo 30 giây" color={PINK} rot={-3} font="Baloo2" size={48} />
      <Title x={CX} y={540} t0={0.3} lines={['Soi lớp nền', 'trước khi ra cửa']} size={68} hl={[1, 0, PINK]} />
      <PolaroidC x={CX} cy={1060} t0={1.0} src="dl/raracua.jpg" ar={16 / 9} rot={-2} note="đi học, đi date" sc={1.0} />
      <HeartS x={150} y={820} size={110} t0={3.3} rot={-10} />
      <StarS x={830} y={840} size={110} t0={5.2} rot={10} />
    </Scene>
    <Scene s={7.4} e={15.3} bg={PEACH} tab={CORAL}>
      <Burst x={200} y={420} t0={7.6} text={'Bước\n1'} size={240} />
      <Title x={620} y={430} t0={8.0} lines={['Đứng chỗ có', 'ánh sáng thật']} size={62} hl={[1, 0, BUTTER]} />
      <Sticky x={CX} y={640} w={620} t0={8.8} text="như gần cửa sổ" color={BUTTER} rot={-2} font="Baloo2" size={42} />
      <Check x={CX} y={860} w={780} t0={10.3} text="Soi lớp nền có bệt hay lên tông không" />
      <PolaroidC x={CX} cy={1200} t0={11.4} src="dl/tronglop.jpg" ar={16 / 9} rot={2} note="ánh sáng thật" sc={0.62} />
      <Hand x={CX} y={1425} t0={13.1} text="đèn phòng đôi khi nhìn khác đi" size={46} w={800} />
    </Scene>
    <Scene s={15.3} e={19.55} bg={LAV} tab={BUTTER}>
      <Burst x={200} y={420} t0={15.4} text={'Bước\n2'} size={240} color={'#8aa0e0'} />
      <Title x={620} y={430} t0={15.7} lines={['Lùi ra xa', 'nhìn tổng thể']} size={62} hl={[1, 0, PINK]} />
      <Sticky x={CX} y={650} w={640} t0={16.9} text="từ mặt tới quần áo" color={PINK} rot={2} font="Baloo2" size={42} />
      <Check x={CX} y={850} w={760} t0={18.2} text="Xem đã gọn gàng chưa" />
      <PolaroidC x={CX} cy={1190} t0={17.4} src="dl/duongtoitruong.jpg" ar={16 / 9} rot={-3} note="nhìn tổng thể" sc={0.7} />
    </Scene>
    <Scene s={19.55} e={24.9} bg={SKY} tab={PINK} last>
      <Title x={CX} y={520} t0={19.7} lines={['Yên tâm', 'bước ra cửa']} size={84} hl={[1, 0, PINK]} />
      <Sticky x={CX} y={760} w={680} t0={21.2} text="không cần chỉ chờ lời khen" color={BUTTER} rot={-2} font="Baloo2" size={46} />
      <Sticky x={CX} y={1040} w={680} t0={23.4} text="Nghía giỏ hàng bên dưới nha" color={PINK} rot={2} font="Baloo2" size={46} />
      <HeartS x={170} y={1330} size={130} t0={22.0} rot={-10} />
      <StarS x={810} y={1340} size={130} t0={22.4} rot={10} />
    </Scene>
  </Shell>
  );
};

// ===== Dòng 10: 3 chi tiết bạn cùng bàn thấy =====
export const TapDong10: React.FC = () => {
  useClock();
  return (
  <Shell voice="dl/voice2.mp3" caps={CAPS2}>
    <Scene s={0} e={5.6} bg={SKY} tab={PINK}>
      <Sticky x={CX} y={290} w={420} t0={0.1} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
      <Title x={CX} y={540} t0={0.3} lines={['Bạn cùng bàn', 'nhìn bạn ở đâu?']} size={68} hl={[1, 0, PINK]} />
      <PolaroidC x={CX} cy={1060} t0={1.0} src="dl/tronglop.jpg" ar={16 / 9} rot={-2} note="ngồi sát nhau" sc={1.0} />
      <HeartS x={150} y={820} size={110} t0={3.3} rot={-10} />
      <StarS x={830} y={840} size={110} t0={4.0} rot={10} />
    </Scene>
    <Scene s={5.6} e={14.7} bg={PEACH} tab={CORAL}>
      <Title x={CX} y={440} t0={5.7} lines={['3 chi tiết', 'rất gần mặt bạn']} size={66} hl={[1, 0, BUTTER]} />
      <Check x={CX} y={680} w={800} t0={6.0} text="1. Cổ áo, viền áo có nhăn không" />
      <Check x={CX} y={900} w={800} t0={8.3} text="2. Tóc, khăn sát mặt có gọn không" color={SKY} />
      <Check x={CX} y={1120} w={800} t0={10.7} text="3. Mùi trên áo, dễ bị quên nhất" color={BUTTER} />
      <Hand x={CX} y={1340} t0={12.9} text="vì gương đâu có cho ngửi" size={52} w={800} />
    </Scene>
    <Scene s={14.7} e={18.0} bg={LAV} tab={BUTTER}>
      <Title x={CX} y={520} t0={14.9} lines={['Tự kiểm tra nhanh', '3 điểm này thôi']} size={64} hl={[1, 0, PINK]} />
      <PolaroidC x={CX} cy={1050} t0={15.6} src="dl/raracua.jpg" ar={16 / 9} rot={2} note="trước khi ra khỏi nhà" sc={0.88} />
    </Scene>
    <Scene s={18.0} e={25.1} bg={MINT} tab={SKY}>
      <Burst x={200} y={420} t0={18.2} text={'Điểm\nthứ 3'} size={240} color={'#7fc3a3'} />
      <Title x={620} y={430} t0={18.8} lines={['Thêm một lựa chọn', 'cho mùi trên áo']} size={56} hl={[1, 0, BUTTER]} />
      <Sticky x={CX} y={640} w={700} t0={20.0} text="Nước hoa vải Baby / Baby Chuchu, chai 50ml" color={PINK} rot={-2} font="Baloo2" size={38} />
      <PolaroidC x={CX} cy={1090} t0={21.0} src="dl/baby50.jpg" ar={3 / 2} rot={3} note="Baby Chuchu 50ml" sc={0.72} />
      <Check x={CX} y={1340} w={760} t0={22.9} text="Nhớ đọc cách dùng trên nhãn" color={BUTTER} />
    </Scene>
    <Scene s={25.1} e={28.3} bg={SKY} tab={PINK} last>
      <Title x={CX} y={520} t0={25.2} lines={['Soi cả phần', 'gương bỏ sót']} size={84} hl={[1, 0, PINK]} />
      <Sticky x={CX} y={820} w={680} t0={26.9} text="Nghía giỏ hàng bên dưới nha" color={PINK} rot={2} font="Baloo2" size={46} />
      <HeartS x={170} y={1150} size={130} t0={25.9} rot={-10} />
      <StarS x={810} y={1160} size={130} t0={26.2} rot={10} />
    </Scene>
  </Shell>
  );
};

// ===== Dòng 11: thao tác 9h tối =====
export const TapDong11: React.FC = () => {
  useClock();
  return (
  <Shell voice="dl/voice3.mp3" caps={CAPS3}>
    <Scene s={0} e={4.3} bg={SKY} tab={PINK}>
      <Sticky x={CX} y={290} w={420} t0={0.1} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
      <Title x={CX} y={540} t0={0.3} lines={['Sáng vội mà vẫn', 'gọn gàng?']} size={68} hl={[1, 0, PINK]} />
      <PolaroidC x={CX} cy={1060} t0={1.0} src="dl/raracua.jpg" ar={16 / 9} rot={-2} note="sáng nào cũng vội" sc={1.0} />
      <Burst x={770} y={800} t0={2.8} text={'9h\ntối'} size={230} />
    </Scene>
    <Scene s={4.3} e={10.95} bg={PEACH} tab={CORAL}>
      <Burst x={200} y={420} t0={4.4} text={'9h\ntối'} size={240} />
      <Title x={620} y={430} t0={5.0} lines={['Một thao tác nhỏ', 'lúc 9h tối']} size={60} hl={[1, 0, BUTTER]} />
      <Check x={CX} y={700} w={780} t0={7.6} text="Chọn sẵn bộ đồ cho ngày mai" />
      <JacketS x={CX} y={1080} size={360} t0={8.2} />
      <Sticky x={CX} y={1290} w={700} t0={9.7} text="Treo lên chỗ dễ thấy" color={BUTTER} rot={-2} font="Baloo2" size={44} />
    </Scene>
    <Scene s={10.95} e={15.7} bg={LAV} tab={BUTTER}>
      <Title x={CX} y={450} t0={11.1} lines={['Xịt nước hoa vải', 'lên đồ']} size={66} hl={[1, 0, PINK]} />
      <BottleS x={CX} y={900} size={330} t0={11.8} />
      <Mist x={CX + 140} y={780} t0={12.2} />
      <Check x={CX} y={1210} w={780} t0={13.3} text="Đọc hướng dẫn trên nhãn" color={BUTTER} />
    </Scene>
    <Scene s={15.7} e={21.05} bg={MINT} tab={SKY}>
      <Title x={CX} y={450} t0={15.8} lines={['Xong, tắt đèn', 'đi ngủ']} size={66} hl={[1, 0, BUTTER]} />
      <PolaroidC x={CX} cy={900} t0={16.2} src="dl/ktxdem.jpg" ar={16 / 9} rot={-2} note="buổi tối" sc={0.68} />
      <Sticky x={CX} y={1180} w={720} t0={17.3} text="Sáng dậy chỉ việc mặc rồi ra khỏi nhà" color={BUTTER} rot={-2} font="Baloo2" size={40} />
      <Check x={CX} y={1380} w={720} t0={19.5} text="Không phải lục tủ nữa" />
    </Scene>
    <Scene s={21.05} e={25.3} bg={PEACH} tab={CORAL}>
      <Title x={CX} y={540} t0={21.2} lines={['Sẵn sàng từ', 'tối hôm trước']} size={78} hl={[1, 0, PINK]} />
      <PolaroidC x={CX} cy={1100} t0={22.0} src="dl/duongtoitruong.jpg" ar={16 / 9} rot={2} note="đi học nhẹ nhõm" sc={0.8} />
      <HeartS x={150} y={850} size={110} t0={23.0} rot={-10} />
      <StarS x={830} y={860} size={110} t0={23.4} rot={10} />
    </Scene>
    <Scene s={25.3} e={28.8} bg={SKY} tab={PINK} last>
      <Sticky x={CX} y={450} w={700} t0={25.4} text="Tối nay thử một lần xem sao nha" color={BUTTER} rot={-2} font="Baloo2" size={48} />
      <PolaroidC x={CX} cy={1060} t0={26.2} src="dl/baby50.jpg" ar={3 / 2} rot={-3} note="nước hoa vải" sc={0.62} />
      <Sticky x={CX} y={800} w={700} t0={27.6} text="Nghía giỏ hàng bên dưới nha" color={PINK} rot={2} font="Baloo2" size={44} />
      <HeartS x={170} y={1320} size={120} t0={26.6} rot={-10} />
      <StarS x={810} y={1330} size={120} t0={26.9} rot={10} />
    </Scene>
  </Shell>
  );
};
