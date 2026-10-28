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


const IMG_H: Record<string, number> = {r1: 190, r2: 223, r3: 196};
const Review: React.FC<{x: number; y: number; w: number; t0: number; src: string; rot?: number; hls: [number, number, number, number, number][]}> = ({x, y, w, t0, src, rot = -1, hls}) => {
  const p = usePop(t0);
  if (p <= 0) return null;
  const k = (w - 56) / 1107;
  const ih = IMG_H[src] * k;
  return (
    <div style={{position: 'absolute', left: x - w / 2, top: y - (ih + 80) / 2, width: w, transform: `scale(${p}) rotate(${rot}deg)`}}>
      <div style={{position: 'absolute', left: w / 2 - 70, top: -22, width: 140, height: 38, background: `repeating-linear-gradient(135deg, ${MINT} 0 12px, #fff 12px 24px)`, opacity: 0.95, transform: 'rotate(-3deg)', zIndex: 3}} />
      <div style={{position: 'absolute', right: 18, top: -30, zIndex: 3, background: CORAL, color: '#fff', fontFamily: 'Baloo2', fontWeight: 800, fontSize: 28, padding: '2px 16px', borderRadius: 14, border: `3px solid ${NAVY}`, transform: 'rotate(4deg)'}}>feedback thật</div>
      <div style={{background: '#fff', border: `4px solid ${NAVY}`, borderRadius: 14, padding: '34px 24px 22px', boxShadow: '8px 9px 0 rgba(51,71,122,0.2)'}}>
        <div style={{position: 'relative', width: 1107 * k, height: ih}}>
          <img src={staticFile(src + '.png')} style={{width: '100%', height: '100%', display: 'block'}} />
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
  [0, 2.4, 'Lý do vì sao mấy bà đi học chỉ chuộng'],
  [2.4, 5.3, 'xịt thơm mùi em bé thay vì nước hoa đắt tiền?'],
  [5.65, 7.9, 'Đọc đúng cái feedback này là hiểu liền nè'],
  [8.0, 10.9, 'Khách nhà tui để lại quả review chuẩn bài:'],
  [11.2, 12.8, 'Thơm mùi phấn rôm em bé,'],
  [12.9, 16.2, 'đi học năm tiết xịt lên áo khoác lúc về vẫn còn thơm'],
  [16.4, 19.4, 'Mấy bà hay sợ đi học ngồi phòng kín xịt nước hoa bị nồng'],
  [19.4, 21.5, 'rồi bạn cùng bàn soi mói đúng không?'],
  [21.85, 24.5, 'Xịt loại này hạt sương bám vào sớ vải áo khoác,'],
  [24.7, 27.6, 'nó thoang thoảng như mùi nước xả vải tự nhiên cả buổi luôn'],
  [27.9, 28.9, 'Thêm một bà khen:'],
  [29.05, 31.6, 'Siêu dịu keo, y hệt mùi của em bé thật,'],
  [31.75, 33.3, 'ngửi phát là siu nghiện'],
  [33.55, 36.4, 'Điểm mấu chốt ở đây là tone phấn rôm baby chuchu này'],
  [36.4, 38.4, 'nó không có cảm giác cồn gắt'],
  [38.55, 41.8, 'Ngửi vào chỉ thấy sạch sẽ, ngọt nhẹ, cảm giác mặt mộc trong veo'],
  [42.0, 43.6, 'Hèn chi có bạn bảo:'],
  [43.85, 45.7, 'Tui còn mê huống chi người yêu,'],
  [45.8, 47.6, 'lần sau ủng hộ tiếp.'],
  [47.75, 50.2, 'Đi học hay đi date, người ta ngồi sát cạnh'],
  [50.35, 54.0, 'chỉ thấy bạn có một cái vibe thơm tho nhẹ nhàng,'],
  [54.15, 56.5, 'không hề bị ô dề hay làm lố một chút nào'],
  [56.7, 59.0, 'Ai đang tìm một mùi hương chân ái để mang theo đi học mỗi ngày'],
  [59.0, 62, 'thì nghía ngay giỏ hàng bên dưới nha!'],
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

export const Video2: React.FC = () => {
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
      <Audio src={staticFile('voice2.mp3')} />

      {/* S1 hook */}
      <Scene s={0} e={7.9} bg={SKY} tab={PINK}>
        <Sticky x={CX} y={300} w={420} t0={0.1} text="mẹo đi học" color={PINK} rot={-3} font="Baloo2" size={48} />
        <Title x={CX} y={560} t0={0.3} lines={['Vì sao mấy bà', 'chuộng mùi em bé?']} size={96} hl={[1, 0, PINK]} />
        <Hand x={CX} y={760} t0={2.4} text="hơn cả nước hoa đắt tiền" size={62} />
        <Polaroid x={300} y={1200} t0={3.4} src="c1.jpg" rot={-5} note="Baby" sc={0.72} />
        <Polaroid x={680} y={1215} t0={3.7} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.72} />
        <Sticky x={CX} y={880} w={680} t0={5.7} text="Đọc feedback này là hiểu liền nè" color={BUTTER} rot={-2} font="Baloo2" size={48} />
        <HeartS x={150} y={930} size={110} t0={1.0} rot={-10} />
        <StarS x={830} y={940} size={110} t0={1.2} rot={10} />
      </Scene>

      {/* S2 review 1 */}
      <Scene s={7.9} e={21.55} bg={PEACH} tab={CORAL}>
        <Burst x={225} y={400} t0={8.05} text={'Review\nthật'} />
        <Title x={600} y={410} t0={8.3} lines={['Khách nhà tui', 'review chuẩn bài']} size={68} hl={[1, 0, BUTTER]} />
        <Review x={CX + 20} y={790} w={970} t0={10.6} src="r1" rot={-1.5}
          hls={[[262, 805, 78, 125, 11.3], [245, 1055, 135, 185, 13.0]]} />
        <Sticky x={CX} y={1010} w={700} t0={16.45} text="Sợ xịt nước hoa bị nồng, bạn cùng bàn soi mói?" color={PINK} rot={2} font="Baloo2" size={44} />
        <CloudS x={220} y={1330} size={170} t0={17.6} rot={-6} />
        <Hand x={CX + 60} y={1290} t0={20.0} text="đúng không?" size={68} />
      </Scene>

      {/* S3 mist */}
      <Scene s={21.55} e={27.75} bg={'#d6efe3'} tab={BUTTER}>
        <Title x={CX} y={420} t0={21.9} lines={['Hạt sương bám', 'vào sớ vải áo khoác']} size={76} hl={[1, 0, BUTTER]} />
        <JacketS x={300} y={850} size={330} t0={22.4} rot={-4} />
        <BottleS x={710} y={830} size={280} t0={22.7} rot={6} />
        <Mist x={640} y={760} t0={23.0} />
        <Sticky x={CX} y={1100} w={700} t0={24.8} text="Thoang thoảng như mùi nước xả vải tự nhiên cả buổi" color={PINK} rot={-2} font="Baloo2" size={44} />
        <StarS x={800} y={1360} size={110} t0={26.0} rot={10} />
      </Scene>

      {/* S4 review 2 */}
      <Scene s={27.75} e={33.45} bg={LAV} tab={MINT}>
        <Sticky x={CX} y={330} w={520} t0={27.95} text="Thêm một bà khen:" color={BUTTER} rot={-2} font="Baloo2" size={50} />
        <Review x={CX + 20} y={720} w={970} t0={29.0} src="r2" rot={1.5}
          hls={[[262, 500, 95, 145, 29.1], [553, 1085, 95, 145, 30.3], [20, 510, 155, 205, 31.8]]} />
        <HeartS x={250} y={1050} size={220} t0={30.8} rot={-8} />
        <StarS x={730} y={1040} size={200} t0={31.2} rot={9} />
        <FlowerS x={CX} y={1250} size={140} t0={32.0} rot={0} />
      </Scene>

      {/* S5 baby chuchu */}
      <Scene s={33.45} e={42.05} bg={'#fdf1bf'} tab={PINK}>
        <Sticky x={CX} y={300} w={500} t0={33.6} text="Điểm mấu chốt" color={LAV} rot={-2} font="Baloo2" size={48} />
        <Title x={CX} y={540} t0={33.95} lines={['Tone phấn rôm', 'Baby Chuchu']} size={90} hl={[0, 0, PINK]} />
        <Polaroid x={290} y={1000} t0={34.6} src="c2.jpg" rot={-4} note="Baby Chuchu" sc={0.86} />
        <Sticky x={685} y={780} w={360} t0={36.5} text="Không có cảm giác cồn gắt" color={MINT} rot={2} font="Baloo2" size={40} />
        <Sticky x={685} y={970} w={360} t0={38.6} text="Sạch sẽ, ngọt nhẹ" color={PINK} rot={-2} font="Baloo2" size={40} />
        <Sticky x={685} y={1150} w={360} t0={40.2} text="Mặt mộc trong veo" color={BUTTER} rot={2} font="Baloo2" size={40} />
      </Scene>

      {/* S6 review 3 + vibe */}
      <Scene s={42.05} e={56.55} bg={SKY} tab={LAV}>
        <Sticky x={CX} y={320} w={560} t0={42.1} text="Hèn chi có bạn bảo:" color={PINK} rot={-2} font="Baloo2" size={50} />
        <Review x={CX + 20} y={680} w={970} t0={43.6} src="r3" rot={-1.5}
          hls={[[108, 660, 87, 142, 43.8], [680, 1035, 87, 142, 44.2], [20, 140, 147, 197, 44.9], [160, 790, 147, 197, 45.9]]} />
        <Check x={CX + 10} y={920} w={740} t0={47.8} text="Đi học hay đi date" />
        <Check x={CX + 10} y={1040} w={740} t0={50.4} text="Chỉ thấy vibe thơm tho nhẹ nhàng" color={PINK} />
        <Check x={CX + 10} y={1180} w={740} t0={54.2} text="Không ô dề, không làm lố" color={BUTTER} />
        <HeartS x={170} y={1390} size={110} t0={55.0} rot={-8} />
        <StarS x={800} y={1380} size={110} t0={55.2} rot={8} />
      </Scene>

      {/* S7 CTA */}
      <Scene s={56.55} e={62} bg={PEACH} tab={CORAL} last>
        <Title x={CX} y={440} t0={56.8} lines={['Mùi hương chân ái', 'đi học mỗi ngày']} size={80} hl={[0, 0, PINK]} />
        <Polaroid x={300} y={960} t0={57.4} src="c1.jpg" rot={-5} note="Baby" sc={0.9} />
        <Polaroid x={690} y={980} t0={57.7} src="c2.jpg" rot={4} note="Baby Chuchu" sc={0.9} />
        <Hand x={CX} y={1290} t0={59.2} text="Nghía giỏ hàng bên dưới nha!" size={58} />
        <HeartS x={150} y={640} size={110} t0={58.0} rot={-10} />
        <StarS x={830} y={650} size={110} t0={58.2} rot={10} />
      </Scene>

      <Caption />
      <div style={{position: 'absolute', left: CX - 300, top: 1705, width: 600, textAlign: 'center', fontFamily: 'PHand', fontSize: 34, color: NAVY, opacity: 0.7}}>mẹo nhỏ cho học sinh</div>
    </AbsoluteFill>
  );
};
