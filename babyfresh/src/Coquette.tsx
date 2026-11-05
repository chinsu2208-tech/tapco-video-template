import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Sequence} from 'remotion';
import '@fontsource/baloo-2/800.css';
import '@fontsource/baloo-2/600.css';
import '@fontsource/dancing-script/700.css';
import '@fontsource/playfair-display/700-italic.css';
import '@fontsource/patrick-hand/400.css';

// ---------- Korean cute coquette palette ----------
export const C = {
  cream: '#fff8f3',
  ballet: '#fde6ec',
  blush: '#f7c6d3',
  ribbon: '#ef93ad',
  rose: '#d9667f',
  cocoa: '#6e3b4a',
  lilac: '#e7dcf7',
  lilacD: '#b9a3e3',
  pearl: '#fffdf8',
  butter: '#fff1c9',
};
const TITLE = "'Baloo 2', sans-serif";
const SCRIPT = "'Dancing Script', cursive";
const SERIF = "'Playfair Display', serif";
const HAND = "'Patrick Hand', cursive";

export type Scene = {
  kind: 'cover' | 'tip' | 'check' | 'end' | 'full';
  s: number; e: number; // seconds
  title: string; sub?: string; n?: number; img?: string; img2?: string;
  items?: string[]; note?: string; tag?: string; hi?: string; vid?: string; fx?: string[]; fxl?: string[]; brand?: boolean;
};
export type VideoData = {id: string; audio: string; dur: number; scenes: Scene[]; caps: {s: number; e: number; t: string}[]};

const useT = () => useCurrentFrame() / useVideoConfig().fps;
const pop = (f: number, fps: number, delay = 0) => spring({frame: f - delay * fps, fps, config: {damping: 11, mass: 0.7}});

// ---------- decorations ----------
export const Bow: React.FC<{x: number; y: number; s?: number; color?: string; rot?: number; delay?: number}> = ({x, y, s = 1, color = C.ribbon, rot = 0, delay = 0}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  const sway = Math.sin(f / fps * 2.2 + x) * 3;
  const dark = '#c9607d';
  return (
    <svg width={220 * s} height={180 * s} viewBox="0 0 220 180" style={{position: 'absolute', left: x - 110 * s, top: y - 70 * s, transform: `rotate(${rot + sway}deg) scale(${k})`, overflow: 'visible', filter: 'drop-shadow(0 6px 8px rgba(160,70,100,.25))'}}>
      {/* tails */}
      <path d="M100 78 C 88 110, 70 140, 52 172 L 76 166 L 86 180 C 98 146, 108 112, 110 84 Z" fill={color} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      <path d="M120 78 C 132 110, 150 140, 168 172 L 144 166 L 134 180 C 122 146, 112 112, 110 84 Z" fill={color} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      {/* loops */}
      <path d="M108 72 C 80 20, 20 12, 14 48 C 8 86, 64 96, 108 80 Z" fill={color} stroke={dark} strokeWidth="3" />
      <path d="M112 72 C 140 20, 200 12, 206 48 C 212 86, 156 96, 112 80 Z" fill={color} stroke={dark} strokeWidth="3" />
      <path d="M96 66 C 72 40, 40 38, 36 54" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" />
      <path d="M124 66 C 148 40, 180 38, 184 54" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="110" cy="76" rx="17" ry="20" fill={color} stroke={dark} strokeWidth="3" />
      <ellipse cx="105" cy="70" rx="5" ry="6" fill="#fff" opacity=".6" />
    </svg>
  );
};

export const Heart: React.FC<{x: number; y: number; s?: number; fill?: string; delay?: number; float?: boolean}> = ({x, y, s = 1, fill = C.ribbon, delay = 0, float = true}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  const dy = float ? Math.sin(f / fps * 2 + x * 0.01) * 8 : 0;
  return (
    <svg width={60 * s} height={56 * s} viewBox="0 0 60 56" style={{position: 'absolute', left: x, top: y + dy, transform: `scale(${k}) rotate(${Math.sin(f / 20 + x) * 6}deg)`}}>
      <path d="M30 52 C 10 38, 2 26, 4 16 C 6 4, 22 0, 30 12 C 38 0, 54 4, 56 16 C 58 26, 50 38, 30 52 Z" fill={fill} stroke="#fff" strokeWidth="4" />
      <ellipse cx="17" cy="16" rx="5" ry="4" fill="#fff" opacity=".7" />
    </svg>
  );
};

export const Sparkle: React.FC<{x: number; y: number; s?: number; c?: string; ph?: number}> = ({x, y, s = 1, c = '#fff', ph = 0}) => {
  const t = useT();
  const k = 0.55 + 0.45 * Math.abs(Math.sin(t * 2.4 + ph));
  return (
    <svg width={50 * s} height={50 * s} viewBox="0 0 50 50" style={{position: 'absolute', left: x, top: y, transform: `scale(${k}) rotate(${t * 30}deg)`}}>
      <path d="M25 0 C 27 18, 32 23, 50 25 C 32 27, 27 32, 25 50 C 23 32, 18 27, 0 25 C 18 23, 23 18, 25 0 Z" fill={c} />
    </svg>
  );
};

export const Pearls: React.FC<{x1: number; y1: number; x2: number; y2: number; sag?: number; r?: number}> = ({x1, y1, x2, y2, sag = 40, r = 11}) => {
  const n = Math.round(Math.hypot(x2 - x1, y2 - y1) / (r * 2.15));
  const beads = Array.from({length: n + 1}, (_, i) => {
    const u = i / n; const x = x1 + (x2 - x1) * u; const y = y1 + (y2 - y1) * u + Math.sin(Math.PI * u) * sag;
    return <circle key={i} cx={x} cy={y} r={r} fill="url(#pearlG)" stroke="#ead8d0" strokeWidth="1.5" />;
  });
  return (
    <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none'}}>
      <defs><radialGradient id="pearlG" cx="35%" cy="30%" r="70%"><stop offset="0" stopColor="#ffffff" /><stop offset=".6" stopColor="#fbf1ea" /><stop offset="1" stopColor="#e9d6cf" /></radialGradient></defs>
      {beads}
    </svg>
  );
};

// scalloped lace edge as a pattern strip
const Lace: React.FC<{x: number; y: number; w: number; flip?: boolean; color?: string}> = ({x, y, w, flip, color = '#fff'}) => {
  const n = Math.ceil(w / 36);
  return (
    <svg width={w} height={34} style={{position: 'absolute', left: x, top: y, transform: flip ? 'scaleY(-1)' : undefined, overflow: 'visible'}}>
      {Array.from({length: n}, (_, i) => (
        <g key={i}>
          <circle cx={i * 36 + 18} cy={6} r={18} fill={color} />
          <circle cx={i * 36 + 18} cy={8} r={4} fill={C.blush} />
          <circle cx={i * 36 + 9} cy={16} r={2.4} fill={C.blush} />
          <circle cx={i * 36 + 27} cy={16} r={2.4} fill={C.blush} />
        </g>
      ))}
    </svg>
  );
};

// ---------- background ----------
const Background: React.FC<{tint?: string}> = ({tint = C.ballet}) => {
  const t = useT();
  return (
    <AbsoluteFill style={{background: tint}}>
      {/* soft gingham */}
      <AbsoluteFill style={{
        backgroundImage: `repeating-linear-gradient(0deg, rgba(239,147,173,.16) 0 44px, transparent 44px 88px), repeating-linear-gradient(90deg, rgba(239,147,173,.16) 0 44px, transparent 44px 88px)`,
        backgroundPosition: `${t * 8}px ${t * 8}px`,
      }} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,.55), rgba(255,255,255,0) 70%)'}} />
      {[[70, 300, 0], [960, 420, 1], [120, 1180, 2], [930, 1060, 3], [520, 210, 4], [60, 760, 5]].map(([x, y, p], i) => (
        <Sparkle key={i} x={x} y={y} s={0.8} ph={p} />
      ))}
    </AbsoluteFill>
  );
};

// ---------- card with lace + photo ----------
const PhotoCard: React.FC<{img: string; x: number; y: number; w: number; h: number; rot?: number; delay?: number; label?: string}> = ({img, x, y, w, h, rot = 0, delay = 0, label}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  const t = f / fps;
  const z = 1 + t * 0.012;
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h + (label ? 92 : 40), transform: `rotate(${rot}deg) scale(${0.85 + 0.15 * k})`, opacity: k}}>
      <div style={{position: 'absolute', inset: 0, background: C.pearl, borderRadius: 26, boxShadow: '0 18px 40px rgba(170,80,110,.22)', border: `4px solid ${C.blush}`}} />
      <div style={{position: 'absolute', left: 20, top: 20, width: w - 40, height: h - 20, borderRadius: 18, overflow: 'hidden'}}>
        <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${z})`}} />
      </div>
      {label && <div style={{position: 'absolute', left: 0, right: 0, bottom: 18, textAlign: 'center', fontFamily: SCRIPT, fontSize: 44, color: C.rose}}>{label}</div>}
    </div>
  );
};

const Sticker: React.FC<{x: number; y: number; text: string; bg?: string; rot?: number; delay?: number; size?: number}> = ({x, y, text, bg = C.lilac, rot = -6, delay = 0, size = 34}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, delay);
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg) scale(${k})`, background: bg, color: C.cocoa, fontFamily: HAND, fontSize: size, padding: '10px 26px', borderRadius: 999, border: '4px solid #fff', boxShadow: '0 8px 16px rgba(160,80,110,.2)', whiteSpace: 'nowrap'}}>{text}</div>
  );
};

const Title: React.FC<{text: string; y: number; size?: number; delay?: number; color?: string; left?: number; width?: number}> = ({text, y, size = 92, delay = 0, color = C.cocoa, left = 90, width = 800}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return (
    <div style={{position: 'absolute', left, width, top: y, textAlign: 'center'}}>
      {text.split('\n').map((ln, i) => {
        const k = pop(f, fps, delay + i * 0.12);
        return (
          <div key={i} style={{fontFamily: TITLE, fontWeight: 800, fontSize: size, lineHeight: 1.08, color, transform: `translateY(${(1 - k) * 40}px)`, opacity: Math.min(1, k * 1.4),
            WebkitTextStroke: '14px #fff', paintOrder: 'stroke fill', textShadow: `0 6px 0 ${C.blush}`}}>{ln}</div>
        );
      })}
    </div>
  );
};

// ---------- scenes ----------
const Cover: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background />
    <Lace x={0} y={0} w={1080} flip color={C.pearl} />
    <div style={{position: 'absolute', left: 0, width: 980, top: 255, textAlign: 'center', fontFamily: SCRIPT, fontSize: 58, color: C.rose}}>{sc.tag ?? 'morning routine ♡'}</div>
    <Title text={sc.title} y={330} size={100} />
    <PhotoCard img={sc.img!} x={215} y={640} w={550} h={700} rot={-3} delay={0.25} />
    {sc.img2 && <PhotoCard img={sc.img2} x={600} y={900} w={260} h={330} rot={8} delay={0.45} />}
    <Pearls x1={180} y1={650} x2={800} y2={650} sag={70} />
    <Bow x={490} y={620} s={1.15} delay={0.4} />
    <Heart x={150} y={1260} s={1.3} delay={0.6} />
    <Heart x={245} y={1330} s={0.8} fill={C.lilacD} delay={0.7} />
    {sc.sub && <Sticker x={160} y={1420} text={sc.sub} bg={C.butter} rot={-3} delay={0.8} size={40} />}
  </AbsoluteFill>
);

const NumBadge: React.FC<{n: number; x: number; y: number}> = ({n, x, y}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const k = pop(f, fps, 0.05);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: 190, height: 178, transform: `scale(${k}) rotate(-8deg)`}}>
      <svg viewBox="0 0 60 56" width={190} height={178}><path d="M30 52 C 10 38, 2 26, 4 16 C 6 4, 22 0, 30 12 C 38 0, 54 4, 56 16 C 58 26, 50 38, 30 52 Z" fill={C.ribbon} stroke="#fff" strokeWidth="3" /></svg>
      <div style={{position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontFamily: SERIF, fontStyle: 'italic', fontWeight: 700, fontSize: 92, color: '#fff'}}>{n}</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: -34, textAlign: 'center', fontFamily: SCRIPT, fontSize: 42, color: C.rose}}>step</div>
    </div>
  );
};

const Tip: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background tint={sc.n === 2 ? '#f3ebfb' : C.ballet} />
    <NumBadge n={sc.n!} x={80} y={290} />
    <Lace x={0} y={0} w={1080} flip color={C.pearl} />
    <Title text={sc.title} y={300} size={88} left={280} width={600} />
    <PhotoCard img={sc.img!} x={150} y={560} w={580} h={760} rot={sc.n! % 2 ? 3 : -3} delay={0.2} />
    <Bow x={sc.n! % 2 ? 690 : 210} y={570} s={0.85} rot={sc.n! % 2 ? 18 : -18} delay={0.35} />
    <Heart x={790} y={1180} s={1.1} delay={0.5} />
    {sc.note && <Sticker x={170} y={1400} text={sc.note} delay={0.6} rot={-2} size={38} />}
  </AbsoluteFill>
);

const Check: React.FC<{sc: Scene}> = ({sc}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return (
    <AbsoluteFill>
      <Background tint="#fdeef2" />
      <div style={{position: 'absolute', left: 110, top: 420, width: 770, height: 900, background: C.pearl, borderRadius: 36, boxShadow: '0 20px 44px rgba(170,80,110,.2)', border: `5px dashed ${C.blush}`}} />
      <Lace x={110} y={400} w={770} flip color={C.pearl} />
      <Bow x={495} y={410} s={1} delay={0.1} />
      <Title text={sc.title} y={520} size={84} />
      {sc.items!.map((it, i) => {
        const d = 0.5 + i * 0.6; const k = pop(f, fps, d); const ck = pop(f, fps, d + 0.35);
        return (
          <div key={i} style={{position: 'absolute', left: 170, top: 720 + i * 170, display: 'flex', alignItems: 'center', gap: 30, opacity: k, transform: `translateX(${(1 - k) * -60}px)`}}>
            <div style={{position: 'relative', width: 86, height: 80}}>
              <svg viewBox="0 0 60 56" width={86} height={80}><path d="M30 52 C 10 38, 2 26, 4 16 C 6 4, 22 0, 30 12 C 38 0, 54 4, 56 16 C 58 26, 50 38, 30 52 Z" fill={ck > 0.5 ? C.ribbon : '#fff'} stroke={C.ribbon} strokeWidth="4" /></svg>
              <svg viewBox="0 0 60 56" width={86} height={80} style={{position: 'absolute', left: 0, top: 0}}><path d="M18 26 L 27 35 L 44 16" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDasharray="44" strokeDashoffset={44 * (1 - Math.min(1, ck))} /></svg>
            </div>
            <div style={{fontFamily: TITLE, fontWeight: 600, fontSize: 54, color: C.cocoa, maxWidth: 560, lineHeight: 1.1}}>{it}</div>
          </div>
        );
      })}
      <Heart x={790} y={1260} s={1.2} delay={2} />
      <Sparkle x={150} y={1240} s={1.2} c={C.ribbon} />
    </AbsoluteFill>
  );
};

const End: React.FC<{sc: Scene}> = ({sc}) => (
  <AbsoluteFill>
    <Background />
    <PhotoCard img={sc.img!} x={230} y={420} w={520} h={660} rot={-4} delay={0.1} />
    <Pearls x1={200} y1={430} x2={780} y2={430} sag={60} />
    <Bow x={490} y={410} s={1.1} delay={0.25} />
    <Title text={sc.title} y={1170} size={84} delay={0.35} />
    <div style={{position: 'absolute', left: 0, width: 980, top: 1390, textAlign: 'center'}}>
      <span style={{fontFamily: SERIF, fontStyle: 'italic', fontWeight: 700, fontSize: 64, color: C.rose}}>Babyfresh</span>
      <span style={{fontFamily: SCRIPT, fontSize: 48, color: C.cocoa}}> · lá trầu không ♡</span>
    </div>
    {sc.sub && <div style={{position: 'absolute', left: 90, width: 800, top: 1480, textAlign: 'center', fontFamily: HAND, fontSize: 30, color: '#9b7480'}}>{sc.sub}</div>}
    <Heart x={140} y={1090} s={1.2} delay={0.6} />
    <Heart x={810} y={1000} s={0.9} fill={C.lilacD} delay={0.7} />
  </AbsoluteFill>
);

// ---------- captions (TikTok safe: y≈1610, width 760) ----------
const Caption: React.FC<{caps: VideoData['caps']}> = ({caps}) => {
  const t = useT();
  const c = caps.find((c) => t >= c.s && t < c.e);
  if (!c) return null;
  return (
    <div style={{position: 'absolute', left: 110, width: 760, top: 1590, display: 'flex', justifyContent: 'center'}}>
      <div style={{background: 'rgba(255,255,255,.92)', border: `3px solid ${C.blush}`, borderRadius: 30, padding: '12px 28px', fontFamily: TITLE, fontWeight: 600, fontSize: 40, lineHeight: 1.2, color: C.cocoa, textAlign: 'center'}}>{c.t}</div>
    </div>
  );
};

export const Coquette: React.FC<{data: VideoData}> = ({data}) => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{background: C.ballet}}>
      {data.scenes.map((sc, i) => {
        const from = Math.round(sc.s * fps); const dur = Math.round((sc.e - sc.s) * fps);
        const Comp = {cover: Cover, tip: Tip, check: Check, end: End}[sc.kind];
        return (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <SceneWrap dur={dur}><Comp sc={sc} /></SceneWrap>
          </Sequence>
        );
      })}
      <Caption caps={data.caps} />
      {data.audio && <Audio src={staticFile(data.audio)} />}
    </AbsoluteFill>
  );
};

const SceneWrap: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8, dur - 6, dur], [0, 1, 1, 0.0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const z = interpolate(f, [0, dur], [1, 1.03]);
  return <AbsoluteFill style={{opacity: o, transform: `scale(${z})`}}>{children}</AbsoluteFill>;
};
