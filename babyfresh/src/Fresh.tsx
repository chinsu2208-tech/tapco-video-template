import React from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Loop, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Sequence} from 'remotion';
import '@fontsource/baloo-2/800.css';
import '@fontsource/baloo-2/600.css';
import '@fontsource/patrick-hand/400.css';
import type {VideoData, Scene} from './Coquette';

// Babyfresh "fresh & trusted" palette: lavender purple + betel-leaf green, clean white
export const P = {
  bg: '#f4f1fd',
  bg2: '#eef8f2',
  card: '#ffffff',
  purple: '#7c6fd6',
  purpleD: '#4b3f9e',
  lav: '#d9d2f6',
  leaf: '#4fb37f',
  leafD: '#2f8a5c',
  mint: '#cdeedb',
  ink: '#2f2a5a',
  soft: '#7a7699',
};
const TITLE = "'Baloo 2', sans-serif";
const HAND = "'Patrick Hand', cursive";

const useT = () => useCurrentFrame() / useVideoConfig().fps;
const pop = (f: number, fps: number, delay = 0) => spring({frame: f - delay * fps, fps, config: {damping: 12, mass: 0.7}});

// ---------- icons ----------
const LeafPath = ({fill, vein}: {fill: string; vein: string}) => (
  <>
    <path d="M10 90 C 10 40, 45 8, 92 8 C 92 55, 62 90, 10 90 Z" fill={fill} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
    <path d="M14 86 C 38 62, 58 42, 84 16" fill="none" stroke={vein} strokeWidth="4" strokeLinecap="round" />
    <path d="M38 62 L 34 44 M52 48 L 50 30 M44 56 L 62 56 M58 42 L 74 40" stroke={vein} strokeWidth="3" strokeLinecap="round" />
  </>
);
export const Leaf: React.FC<{x: number; y: number; s?: number; rot?: number; delay?: number; c?: string}> = ({x, y, s = 1, rot = 0, delay = 0, c = P.leaf}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  const sway = Math.sin(f / fps * 1.8 + x * 0.02) * 5;
  return (
    <svg width={100 * s} height={100 * s} viewBox="0 0 100 100" style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot + sway}deg) scale(${k})`, overflow: 'visible', filter: 'drop-shadow(0 6px 8px rgba(47,138,92,.22))'}}>
      <LeafPath fill={c} vein={P.leafD} />
    </svg>
  );
};

const Shield: React.FC<{x: number; y: number; s?: number; delay?: number}> = ({x, y, s = 1, delay = 0}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  return (
    <svg width={110 * s} height={124 * s} viewBox="0 0 110 124" style={{position: 'absolute', left: x, top: y, transform: `scale(${k}) rotate(${Math.sin(f / 25) * 4}deg)`, filter: 'drop-shadow(0 6px 10px rgba(75,63,158,.25))'}}>
      <path d="M55 6 L 100 22 C 100 70, 84 100, 55 118 C 26 100, 10 70, 10 22 Z" fill={P.purple} stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
      <path d="M34 62 L 50 78 L 78 46" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const Sparkle: React.FC<{x: number; y: number; s?: number; c?: string; ph?: number}> = ({x, y, s = 1, c = '#fff', ph = 0}) => {
  const t = useT();
  const k = 0.55 + 0.45 * Math.abs(Math.sin(t * 2.2 + ph));
  return (
    <svg width={44 * s} height={44 * s} viewBox="0 0 50 50" style={{position: 'absolute', left: x, top: y, transform: `scale(${k})`}}>
      <path d="M25 0 C 27 18, 32 23, 50 25 C 32 27, 27 32, 25 50 C 23 32, 18 27, 0 25 C 18 23, 23 18, 25 0 Z" fill={c} />
    </svg>
  );
};

const Bubble: React.FC<{x: number; y: number; r: number; c: string; ph: number}> = ({x, y, r, c, ph}) => {
  const t = useT();
  return <div style={{position: 'absolute', left: x - r, top: y - r + Math.sin(t * 1.3 + ph) * 14, width: r * 2, height: r * 2, borderRadius: '50%', background: c}} />;
};

// ---------- background ----------
const Background: React.FC<{alt?: boolean}> = ({alt}) => {
  const t = useT();
  return (
    <AbsoluteFill style={{background: alt ? P.bg2 : P.bg}}>
      <Bubble x={960} y={260} r={170} c={alt ? P.lav : P.mint} ph={0} />
      <Bubble x={90} y={1480} r={200} c={alt ? P.mint : P.lav} ph={1.5} />
      <Bubble x={1000} y={1350} r={90} c={alt ? P.lav : P.mint} ph={3} />
      <AbsoluteFill style={{backgroundImage: `radial-gradient(${alt ? 'rgba(79,179,127,.22)' : 'rgba(124,111,214,.22)'} 3px, transparent 3.5px)`, backgroundSize: '44px 44px', backgroundPosition: `${t * 6}px ${t * 6}px`}} />
      {[[70, 330, 0], [940, 520, 1], [520, 215, 2], [70, 900, 3]].map(([x, y, p], i) => (
        <Sparkle key={i} x={x} y={y} s={0.9} c={i % 2 ? P.purple : P.leaf} ph={p} />
      ))}
    </AbsoluteFill>
  );
};

// ---------- pieces ----------
const PhotoCard: React.FC<{img: string; x: number; y: number; w: number; h: number; rot?: number; delay?: number}> = ({img, x, y, w, h, rot = 0, delay = 0}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  const z = 1 + (f / fps) * 0.012;
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, transform: `rotate(${rot}deg) scale(${0.86 + 0.14 * k})`, opacity: Math.min(1, k * 1.3)}}>
      <div style={{position: 'absolute', inset: 0, background: P.card, borderRadius: 36, boxShadow: '0 20px 44px rgba(75,63,158,.20)'}} />
      <div style={{position: 'absolute', left: 18, top: 18, right: 18, bottom: 18, borderRadius: 24, overflow: 'hidden', border: `4px solid ${P.lav}`}}>
        <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${z})`}} />
      </div>
    </div>
  );
};

const Chip: React.FC<{x: number; y: number; text: string; green?: boolean; rot?: number; delay?: number; size?: number; icon?: string}> = ({x, y, text, green, rot = -2, delay = 0, size = 38, icon}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg) scale(${k})`, background: green ? P.leaf : P.purple, color: '#fff', fontFamily: TITLE, fontWeight: 600, fontSize: size, padding: '10px 30px', borderRadius: 999, border: '5px solid #fff', boxShadow: '0 10px 18px rgba(75,63,158,.22)', whiteSpace: 'nowrap'}}>{icon ? icon + ' ' : ''}{text}</div>
  );
};

const Title: React.FC<{text: string; y: number; size?: number; delay?: number; left?: number; width?: number; hi?: string}> = ({text, y, size = 92, delay = 0, left = 90, width = 800, hi}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const maxLen = Math.max(...text.split('\n').map((l) => l.length));
  size = Math.min(size, Math.floor((width - 20) / (maxLen * 0.5)));
  return (
    <div style={{position: 'absolute', left, width, top: y, textAlign: 'center'}}>
      {text.split('\n').map((ln, i) => {
        const k = pop(f, fps, delay + i * 0.12);
        const parts = hi && ln.includes(hi) ? ln.split(hi) : null;
        return (
          <div key={i} style={{fontFamily: TITLE, fontWeight: 800, fontSize: size, lineHeight: 1.08, color: P.ink, transform: `translateY(${(1 - k) * 40}px)`, opacity: Math.min(1, k * 1.4),
            WebkitTextStroke: '14px #fff', paintOrder: 'stroke fill', textShadow: `0 7px 0 ${P.lav}`}}>
            {parts ? <>{parts[0]}<span style={{color: P.leafD}}>{hi}</span>{parts[1]}</> : ln}
          </div>
        );
      })}
    </div>
  );
};

const Brand: React.FC<{x: number; y: number; delay?: number}> = ({x, y, delay = 0}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `scale(${k})`, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 999, padding: '8px 26px 8px 12px', boxShadow: '0 8px 16px rgba(75,63,158,.15)'}}>
      <svg width={46} height={46} viewBox="0 0 100 100"><LeafPath fill={P.leaf} vein={P.leafD} /></svg>
      <span style={{fontFamily: TITLE, fontWeight: 800, fontSize: 38, color: P.purpleD}}>Babyfresh</span>
    </div>
  );
};


// ---------- motion icons (FX) ----------
const loopT = (t: number, period: number) => (t % period) / period;

// Protection: shield + expanding rings + check redraw
const FxShield: React.FC = () => {
  const t = useT(); const u = loopT(t, 1.8);
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {[0, 0.33, 0.66].map((o, i) => { const v = (u + o) % 1; return <circle key={i} cx="100" cy="100" r={40 + v * 60} fill="none" stroke={i % 2 ? P.leaf : P.purple} strokeWidth={8 * (1 - v)} opacity={1 - v} />; })}
      <path d="M100 42 L 142 58 C 142 104, 126 134, 100 152 C 74 134, 58 104, 58 58 Z" fill={P.purple} stroke="#fff" strokeWidth="6" strokeLinejoin="round" transform={`translate(100 100) scale(${1 + Math.sin(t * 4) * 0.04}) translate(-100 -100)`} />
      <path d="M80 98 L 95 113 L 122 84" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="60" strokeDashoffset={60 * Math.max(0, 1 - loopT(t, 1.8) * 3)} />
    </svg>
  );
};

// Dry & airy: breeze lines sweep + droplet evaporating into dots
const FxDry: React.FC = () => {
  const t = useT(); const u = loopT(t, 2);
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {[[60, 0], [100, 0.3], [140, 0.6]].map(([y, o], i) => (
        <path key={i} d={`M20 ${y} C 70 ${y - 22}, 110 ${y + 22}, 170 ${y - 6} C 186 ${y - 10}, 190 ${y - 30}, 174 ${y - 32}`} fill="none" stroke={i === 1 ? P.leaf : P.purple} strokeWidth="9" strokeLinecap="round"
          strokeDasharray="230" strokeDashoffset={230 - 230 * Math.min(1, ((u + o) % 1) * 1.6)} opacity={1 - Math.max(0, ((u + o) % 1) - 0.7) / 0.3} />
      ))}
      {/* droplet shrinking */}
      <g transform={`translate(100 172) scale(${1 - u * 0.8})`}>
        <path d="M0 -22 C 10 -8, 14 0, 14 6 C 14 14, 7 20, 0 20 C -7 20, -14 14, -14 6 C -14 0, -10 -8, 0 -22 Z" fill="#9fd8ff" stroke="#fff" strokeWidth="3" />
      </g>
      {[0, 1, 2, 3].map((i) => { const v = (u + i * 0.25) % 1; return <circle key={i} cx={86 + i * 9 + Math.sin(v * 8 + i) * 6} cy={160 - v * 60} r={4 * (1 - v)} fill="#9fd8ff" opacity={1 - v} />; })}
    </svg>
  );
};

// Serum thin & light: drop falls, spreads to thin film; feather floats
const FxSerum: React.FC = () => {
  const t = useT(); const u = loopT(t, 2.2);
  const fall = Math.min(1, u / 0.35); const spread = Math.max(0, Math.min(1, (u - 0.35) / 0.4));
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <ellipse cx="100" cy="150" rx={14 + spread * 70} ry={4 + spread * 6} fill={P.lav} opacity={0.9 - spread * 0.3} />
      <ellipse cx="100" cy="148" rx={10 + spread * 60} ry={2 + spread * 3} fill="#fff" opacity={0.7 * spread} />
      {u < 0.4 && <path transform={`translate(100 ${30 + fall * 108})`} d="M0 -20 C 10 -6, 13 2, 13 8 C 13 16, 7 21, 0 21 C -7 21, -13 16, -13 8 C -13 2, -10 -6, 0 -20 Z" fill={P.purple} stroke="#fff" strokeWidth="3" />}
      <g transform={`translate(${130 + Math.sin(t * 2) * 22} ${70 + Math.sin(t * 1.3) * 10}) rotate(${-30 + Math.sin(t * 2) * 20})`}>
        <path d="M0 -40 C 18 -20, 16 20, 0 40 C -16 20, -18 -20, 0 -40 Z" fill="#fff" stroke={P.leaf} strokeWidth="4" />
        <path d="M0 -36 L 0 44" stroke={P.leafD} strokeWidth="3" strokeLinecap="round" />
      </g>
      {[0, 1, 2].map((i) => <circle key={i} cx={40 + i * 60} cy={150 - 18 - ((u * 40 + i * 13) % 30)} r="3" fill="#fff" opacity={spread} />)}
    </svg>
  );
};

// Fresh leaf: leaves orbit a sparkle
const FxLeaf: React.FC = () => {
  const t = useT();
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {[0, 1, 2].map((i) => { const a = t * 1.4 + (i * Math.PI * 2) / 3; return (
        <g key={i} transform={`translate(${100 + Math.cos(a) * 55} ${100 + Math.sin(a) * 55}) rotate(${(a * 180) / Math.PI + 90}) scale(.55) translate(-50 -50)`}><LeafPath fill={i === 1 ? '#6cc596' : P.leaf} vein={P.leafD} /></g>); })}
      <path transform={`translate(100 100) scale(${0.8 + Math.abs(Math.sin(t * 3)) * 0.4}) translate(-25 -25)`} d="M25 0 C 27 18, 32 23, 50 25 C 32 27, 27 32, 25 50 C 23 32, 18 27, 0 25 C 18 23, 23 18, 25 0 Z" fill={P.purple} />
    </svg>
  );
};

export type FxKind = 'shield' | 'dry' | 'serum' | 'leaf';
const FX_MAP: Record<FxKind, React.FC> = {shield: FxShield, dry: FxDry, serum: FxSerum, leaf: FxLeaf};
export const FxBadge: React.FC<{k: FxKind; label?: string; x: number; y: number; size?: number; delay?: number}> = ({k, label, x, y, size = 230, delay = 0}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const a = pop(f, fps, delay); const Comp = FX_MAP[k];
  return (
    <div style={{position: 'absolute', left: x, top: y, width: size, transform: `scale(${a})`}}>
      <div style={{width: size, height: size, borderRadius: '50%', background: 'rgba(255,255,255,.94)', border: `6px solid ${k === 'dry' || k === 'leaf' ? P.mint : P.lav}`, boxShadow: '0 14px 28px rgba(47,42,90,.22)', padding: size * 0.08, boxSizing: 'border-box'}}><Comp /></div>
      {label && <div style={{marginTop: -18, display: 'flex', justifyContent: 'center'}}><div style={{background: k === 'dry' || k === 'leaf' ? P.leaf : P.purple, color: '#fff', fontFamily: TITLE, fontWeight: 800, fontSize: 32, padding: '4px 22px', borderRadius: 999, border: '4px solid #fff', whiteSpace: 'nowrap'}}>{label}</div></div>}
    </div>
  );
};

// ---------- full-bleed scene (video or photo) ----------
const Full: React.FC<{sc: Scene}> = ({sc}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const z = 1.04 + (f / fps) * 0.01;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <AbsoluteFill style={{transform: `scale(${z})`}}>
        {sc.vid ? <Loop durationInFrames={Math.round(5 / 0.85 * fps) - 2}><OffthreadVideo src={staticFile(sc.vid)} muted playbackRate={0.85} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Loop>
          : <Img src={staticFile(sc.img!)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(47,42,90,.45) 0%, rgba(47,42,90,0) 34%, rgba(47,42,90,0) 70%, rgba(47,42,90,.35) 100%)'}} />
      {sc.tag && <Chip x={110} y={250} text={sc.tag} green size={32} rot={-2} />}
      <Title text={sc.title} y={sc.tag ? 330 : 290} size={sc.n ? 92 : 100} hi={sc.hi} />
      {sc.fx?.map((k, i) => <FxBadge key={i} k={k as FxKind} label={sc.fxl?.[i]} x={i % 2 ? 110 : 640} y={1050 - i * 40 + (i % 2) * 120} size={i ? 200 : 230} delay={0.35 + i * 0.25} />)}
      {sc.brand && <Brand x={110} y={1420} delay={0.5} />}
    </AbsoluteFill>
  );
};

// ---------- scenes ----------
const Cover: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background />
    <Brand x={110} y={250} />
    {sc.tag && <Chip x={560} y={252} text={sc.tag} green rot={3} size={32} delay={0.15} />}
    <Title text={sc.title} y={360} size={102} hi={sc.hi} />
    <PhotoCard img={sc.img!} x={95} y={600} w={790} h={900} rot={-1.5} delay={0.25} />
    <Leaf x={40} y={540} s={1.3} rot={-30} delay={0.45} />
    <Leaf x={800} y={1380} s={1.0} rot={120} delay={0.55} c="#6cc596" />
    <Shield x={800} y={540} s={1.0} delay={0.6} />
    {sc.sub && <Chip x={130} y={1455} text={sc.sub} rot={-2} delay={0.8} size={36} />}
  </AbsoluteFill>
);

const NumBadge: React.FC<{n: number; x: number; y: number}> = ({n, x, y}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, 0.05);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: 170, height: 170, transform: `scale(${k}) rotate(-6deg)`}}>
      <div style={{position: 'absolute', inset: 0, borderRadius: '50%', background: P.purple, border: '7px solid #fff', boxShadow: '0 10px 20px rgba(75,63,158,.25)'}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 6, textAlign: 'center', fontFamily: TITLE, fontWeight: 800, fontSize: 110, color: '#fff'}}>{n}</div>
      <svg width={70} height={70} viewBox="0 0 100 100" style={{position: 'absolute', right: -24, top: -18, transform: 'rotate(20deg)'}}><LeafPath fill={P.leaf} vein={P.leafD} /></svg>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: -44, textAlign: 'center', fontFamily: HAND, fontSize: 36, color: P.soft}}>bước</div>
    </div>
  );
};

const Tip: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background alt={sc.n === 2} />
    <NumBadge n={sc.n!} x={90} y={290} />
    <Title text={sc.title} y={300} size={88} left={290} width={590} hi={sc.hi} />
    <PhotoCard img={sc.img!} x={95} y={540} w={790} h={950} rot={sc.n! % 2 ? 1.5 : -1.5} delay={0.2} />
    <Leaf x={sc.n! % 2 ? 800 : 30} y={480} s={1.1} rot={sc.n! % 2 ? 20 : -60} delay={0.35} />
    <Sparkle x={900} y={1000} s={1.2} c={P.purple} />
    {sc.fx?.[0] && <FxBadge k={sc.fx[0] as FxKind} label={sc.fxl?.[0]} x={sc.n! % 2 ? 60 : 690} y={1150} size={200} delay={0.45} />}
    {sc.note && <Chip x={sc.n! % 2 ? 300 : 120} y={1450} text={sc.note} green={sc.n === 2} delay={0.6} size={36} />}
  </AbsoluteFill>
);

const Check: React.FC<{sc: Scene}> = ({sc}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return (
    <AbsoluteFill>
      <Background alt />
      <div style={{position: 'absolute', left: 110, top: 430, width: 770, height: 900, background: '#fff', borderRadius: 44, boxShadow: '0 22px 48px rgba(47,138,92,.18)', border: `6px solid ${P.mint}`}} />
      <Shield x={430} y={360} s={1.15} delay={0.1} />
      <Title text={sc.title} y={540} size={80} />
      {sc.items!.map((it, i) => {
        const d = 0.5 + i * 0.6; const k = pop(f, fps, d); const ck = pop(f, fps, d + 0.35);
        return (
          <div key={i} style={{position: 'absolute', left: 170, top: 730 + i * 170, display: 'flex', alignItems: 'center', gap: 30, opacity: k, transform: `translateX(${(1 - k) * -60}px)`}}>
            <div style={{width: 84, height: 84, borderRadius: 26, background: ck > 0.5 ? P.leaf : '#fff', border: `5px solid ${P.leaf}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <svg viewBox="0 0 60 60" width={60} height={60}><path d="M14 31 L 26 43 L 47 18" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="50" strokeDashoffset={50 * (1 - Math.min(1, ck))} /></svg>
            </div>
            <div style={{fontFamily: TITLE, fontWeight: 600, fontSize: 52, color: P.ink, maxWidth: 560, lineHeight: 1.1}}>{it}</div>
          </div>
        );
      })}
      <Leaf x={770} y={1200} s={1.2} rot={140} delay={2} />
    </AbsoluteFill>
  );
};

const End: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background />
    <PhotoCard img={sc.img!} x={240} y={360} w={520} h={680} rot={-3} delay={0.1} />
    <Leaf x={170} y={330} s={1.2} rot={-30} delay={0.25} />
    <Shield x={690} y={940} s={1} delay={0.3} />
    <Title text={sc.title} y={1090} size={82} delay={0.35} hi={sc.hi} />
    <Brand x={340} y={1300} delay={0.5} />
    {sc.sub && <div style={{position: 'absolute', left: 90, width: 800, top: 1400, textAlign: 'center', fontFamily: HAND, fontSize: 30, color: P.soft}}>{sc.sub}</div>}
  </AbsoluteFill>
);

const Caption: React.FC<{caps: VideoData['caps']}> = ({caps}) => {
  const t = useT();
  const c = caps.find((c) => t >= c.s && t < c.e);
  if (!c) return null;
  return (
    <div style={{position: 'absolute', left: 110, width: 760, top: 1590, display: 'flex', justifyContent: 'center'}}>
      <div style={{background: 'rgba(255,255,255,.95)', borderLeft: `10px solid ${P.leaf}`, borderRadius: 22, padding: '12px 28px', fontFamily: TITLE, fontWeight: 600, fontSize: 40, lineHeight: 1.2, color: P.ink, textAlign: 'center', boxShadow: '0 6px 14px rgba(75,63,158,.15)'}}>{c.t}</div>
    </div>
  );
};

const SceneWrap: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8, dur - 6, dur], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const z = interpolate(f, [0, dur], [1, 1.03]);
  return <AbsoluteFill style={{opacity: o, transform: `scale(${z})`}}>{children}</AbsoluteFill>;
};

export const Fresh: React.FC<{data: VideoData}> = ({data}) => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{background: P.bg}}>
      {data.scenes.map((sc, i) => {
        const from = Math.round(sc.s * fps); const dur = Math.round((sc.e - sc.s) * fps);
        const Comp = ({cover: Cover, tip: Tip, check: Check, end: End, full: Full} as any)[sc.kind];
        return <Sequence key={i} from={from} durationInFrames={dur}><SceneWrap dur={dur}><Comp sc={sc} /></SceneWrap></Sequence>;
      })}
      <Caption caps={data.caps} />
      {data.audio && <Audio src={staticFile(data.audio)} />}
    </AbsoluteFill>
  );
};
