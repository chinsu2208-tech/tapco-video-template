import React from 'react';
import {AbsoluteFill, Audio, Img, Loop, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import '@fontsource/playfair-display/vietnamese-500.css';
import '@fontsource/playfair-display/vietnamese-700.css';
import '@fontsource/playfair-display/vietnamese-900.css';
import '@fontsource/playfair-display/vietnamese-500-italic.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/playfair-display/500-italic.css';
import '@fontsource/cormorant-garamond/vietnamese-500-italic.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/be-vietnam-pro/vietnamese-300.css';
import '@fontsource/be-vietnam-pro/vietnamese-500.css';
import '@fontsource/be-vietnam-pro/vietnamese-600.css';
import '@fontsource/be-vietnam-pro/300.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import {BRAND, FAMILY, Family, ITALIC, RAINBOW, SANS, SEASONS, SERIF, Season, SeasonKey} from './theme';
import type {Scene, VideoData} from './make';

// =====================================================================
// Phong cách: TẠP CHÍ THỜI TRANG hiện đại (editorial / magazine).
// Trang giấy ngà (hoặc đen espresso), masthead chữ Didone cực lớn, chữ nhỏ in hoa giãn,
// số trang, đường kẻ mảnh. Màu chỉ xuất hiện dưới dạng KHỐI MÀU tràn mép / thẻ Pantone.
// =====================================================================

type Pal = {dark: boolean; bg: string; ink: string; muted: string; rule: string};
const LIGHT: Pal = {dark: false, bg: '#f4efe7', ink: '#141110', muted: '#6f655d', rule: '#141110'};
const DARK: Pal = {dark: true, bg: '#14110f', ink: '#f4ece0', muted: '#a89a8a', rule: '#f4ece0'};
const Ctx = React.createContext<{P: Pal; S?: Season; page: number}>({P: LIGHT, page: 1});
const use = () => React.useContext(Ctx);

const useT = () => { const f = useCurrentFrame(); const {fps} = useVideoConfig(); return f / fps; };
const pop = (f: number, fps: number, delay = 0) => spring({frame: f - delay * fps, fps, config: {damping: 200, mass: 0.8}});
const usePop = (delay = 0) => { const f = useCurrentFrame(); const {fps} = useVideoConfig(); return pop(f, fps, delay); };
const ease = (t: number, a: number, b: number) => interpolate(t, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1)});
// lộ dần theo chiều ngang / dọc
const wipe = (k: number, dir: 'x' | 'y' = 'x') => (dir === 'x' ? `inset(0 ${(1 - k) * 100}% 0 0)` : `inset(${(1 - k) * 100}% 0 0 0)`);

const ISSUE = 'Personal Color Issue';
const SAFE_L = 90; const SAFE_R = 880; const SAFE_W = SAFE_R - SAFE_L;

// ---------- chữ ----------
const Kicker: React.FC<{text: string; x?: number; y: number; delay?: number; color?: string; align?: 'left' | 'center' | 'right'; w?: number}> = ({text, x = SAFE_L, y, delay = 0.1, color, align = 'left', w = SAFE_W}) => {
  const {P} = use(); const k = usePop(delay);
  return <div style={{position: 'absolute', left: x, top: y, width: w, textAlign: align, fontFamily: SANS, fontWeight: 500, fontSize: 24, letterSpacing: 8, textTransform: 'uppercase', color: color ?? P.ink, opacity: k}}>{text}</div>;
};

// Tiêu đề Didone: cụm `hi` in nghiêng
const Head: React.FC<{text: string; y: number; size?: number; delay?: number; hi?: string; color?: string; hiColor?: string; x?: number; w?: number; align?: 'left' | 'center' | 'right'; weight?: number}> = ({text, y, size = 100, delay = 0.15, hi, color, hiColor, x = SAFE_L, w = SAFE_W, align = 'left', weight = 500}) => {
  const {P} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const maxLen = Math.max(...text.split('\n').map((l) => l.length));
  size = Math.min(size, Math.floor(w / (maxLen * 0.5)));
  return (
    <div style={{position: 'absolute', left: x, width: w, top: y, textAlign: align}}>
      {text.split('\n').map((ln, i) => {
        const k = pop(f, fps, delay + i * 0.12);
        const parts = hi && ln.includes(hi) ? ln.split(hi) : null;
        return (
          <div key={i} style={{overflow: 'hidden', paddingTop: size * 0.2, marginTop: -size * 0.2, paddingBottom: size * 0.1}}>
            <div style={{fontFamily: SERIF, fontWeight: weight, fontSize: size, lineHeight: 1.04, letterSpacing: -size * 0.02, color: color ?? P.ink, transform: `translateY(${(1 - k) * 110}%)`}}>
              {parts ? <>{parts[0]}<span style={{fontStyle: 'italic', fontWeight: 500, color: hiColor ?? color ?? P.ink}}>{hi}</span>{parts[1]}</> : ln}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Rule: React.FC<{y: number; x?: number; w?: number; delay?: number; color?: string; h?: number}> = ({y, x = SAFE_L, w = SAFE_W, delay = 0.05, color, h = 2}) => {
  const {P} = use(); const t = useT();
  return <div style={{position: 'absolute', left: x, top: y, width: w * ease(t, delay, delay + 0.7), height: h, background: color ?? P.rule}} />;
};

// Đầu trang: TONELUX — mục — số trang
const Folio: React.FC<{section: string; color?: string}> = ({section, color}) => {
  const {P, page} = use(); const k = usePop(0);
  const c = color ?? P.ink;
  return (
    <div style={{position: 'absolute', left: SAFE_L, width: SAFE_W, top: 262, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: SANS, fontWeight: 500, fontSize: 21, letterSpacing: 6, textTransform: 'uppercase', color: c, opacity: k}}>
      <span style={{fontFamily: SERIF, fontWeight: 900, letterSpacing: 3, fontSize: 28}}>{BRAND}</span>
      <span>{section}</span>
      <span>P.{String(page).padStart(2, '0')}</span>
    </div>
  );
};

// Thẻ Pantone
const Chip: React.FC<{c: string; name: string; code?: string; w: number; h: number; x: number; y: number; delay?: number; rot?: number}> = ({c, name, code, w, h, x, y, delay = 0, rot = 0}) => {
  const k = usePop(delay);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: '#fffdf9', boxShadow: '0 18px 36px rgba(20,17,16,.18)', transform: `translateY(${(1 - k) * 60}px) rotate(${rot * k}deg)`, opacity: Math.min(1, k * 1.5)}}>
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: h - 100, background: c}} />
      <div style={{position: 'absolute', left: 20, bottom: 48, fontFamily: SANS, fontWeight: 600, fontSize: 25, letterSpacing: 2, textTransform: 'uppercase', color: '#141110'}}>{name}</div>
      <div style={{position: 'absolute', left: 20, bottom: 18, fontFamily: SANS, fontWeight: 300, fontSize: 20, letterSpacing: 2, color: '#6f655d'}}>{code ?? c.toUpperCase()}</div>
    </div>
  );
};

// Dải màu dọc tràn mép (color blocking)
const Stripes: React.FC<{colors: string[]; x: number; y: number; w: number; h: number; delay?: number; dir?: 'x' | 'y'; stagger?: number}> = ({colors, x, y, w, h, delay = 0.2, dir = 'y', stagger = 0.06}) => {
  const t = useT(); const n = colors.length; const sw = w / n;
  return (
    <>
      {colors.map((c, i) => {
        const k = ease(t, delay + i * stagger, delay + i * stagger + 0.8);
        return <div key={i} style={{position: 'absolute', left: x + i * sw, top: y, width: sw + 1, height: h, background: c, clipPath: wipe(k, dir)}} />;
      })}
    </>
  );
};

const Photo: React.FC<{img: string; x: number; y: number; w: number; h: number; delay?: number; filter?: string}> = ({img, x, y, w, h, delay = 0.2, filter}) => {
  const t = useT(); const k = ease(t, delay, delay + 0.9);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, overflow: 'hidden', clipPath: wipe(k, 'y')}}>
      <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.08 - t * 0.008})`, filter}} />
    </div>
  );
};

const Masthead: React.FC<{y?: number; line?: string; color?: string; size?: number}> = ({y = 262, line = ISSUE, color, size = 188}) => {
  const {P} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig(); const k = pop(f, fps, 0);
  const c = color ?? P.ink;
  return (
    <>
      <div style={{position: 'absolute', left: 0, right: 0, top: y, textAlign: 'center', fontFamily: SANS, fontWeight: 500, fontSize: 22, letterSpacing: 8, textTransform: 'uppercase', color: c, opacity: k}}>{line}</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: y + 30, textAlign: 'center', overflow: 'hidden', height: size * 1.08}}>
        <div style={{fontFamily: SERIF, fontWeight: 900, fontSize: size, letterSpacing: -size * 0.03, lineHeight: 1, color: c, transform: `translateY(${(1 - k) * 100}%)`}}>{BRAND}</div>
      </div>
    </>
  );
};

// ---------- cảnh ----------
// 1. BÌA: masthead khổng lồ + khối dải màu tràn mép + cover line
const Hook: React.FC<{sc: Scene}> = ({sc}) => {
  const {P, S} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const colors = S ? S.colors : RAINBOW;
  return (
    <AbsoluteFill style={{background: P.bg}}>
      {sc.img ? <Photo img={sc.img} x={0} y={800} w={1080} h={1120} delay={0.15} />
        : <Stripes colors={colors} x={0} y={800} w={1080} h={1120} delay={0.15} />}
      <Masthead line={`${ISSUE} · N°${String(sc.n ?? 1).padStart(2, '0')}`} />
      <Rule y={540} delay={0.2} />
      {sc.tag && <Kicker text={sc.tag} y={566} delay={0.3} />}
      <Head text={sc.title} y={sc.tag ? 608 : 580} size={84} hi={sc.hi} delay={0.35} w={760} />
      {sc.sub && <div style={{position: 'absolute', left: SAFE_L, top: 1400, padding: '14px 26px', background: P.dark ? P.ink : '#141110', color: P.dark ? '#141110' : '#f4efe7', fontFamily: SANS, fontWeight: 600, fontSize: 26, letterSpacing: 5, textTransform: 'uppercase', opacity: pop(f, fps, 1)}}>{sc.sub}</div>}
    </AbsoluteFill>
  );
};

// 2. MỤC LỤC: số 01 02 03 cực lớn
const Steps: React.FC<{sc: Scene}> = ({sc}) => {
  const {P} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const items = (sc.items ?? ['Nhiệt độ\nấm hay lạnh', 'Độ sáng\nnhạt hay đậm', 'Độ trong\ntrong hay dịu']).slice(0, 3);
  const accents = [RAINBOW[1], RAINBOW[4], RAINBOW[10]];
  return (
    <AbsoluteFill style={{background: P.bg}}>
      <Folio section={sc.tag ?? 'Contents'} />
      <Rule y={306} />
      <Head text={sc.title} y={350} size={92} hi={sc.hi} />
      {items.map((it, i) => {
        const k = pop(f, fps, 0.5 + i * 0.4); const y = 700 + i * 265;
        const [a, b] = it.split('\n');
        return (
          <div key={i} style={{position: 'absolute', left: SAFE_L, top: y, width: SAFE_W, height: 250, opacity: Math.min(1, k * 1.4)}}>
            <div style={{position: 'absolute', left: 0, top: 0, height: 2, width: SAFE_W * k, background: P.rule}} />
            <div style={{position: 'absolute', left: 0, top: 22, fontFamily: SERIF, fontWeight: 900, fontSize: 170, lineHeight: 1, letterSpacing: -6, color: accents[i], transform: `translateY(${(1 - k) * 30}px)`}}>{String(i + 1).padStart(2, '0')}</div>
            <div style={{position: 'absolute', left: 260, top: 44, fontFamily: SERIF, fontWeight: 700, fontSize: 64, color: P.ink, lineHeight: 1.05}}>{a}</div>
            {b && <div style={{position: 'absolute', left: 262, top: 130, fontFamily: ITALIC, fontStyle: 'italic', fontWeight: 500, fontSize: 52, color: P.muted}}>{b}</div>}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// 3. CHỈ MỤC 12 MÙA: lưới 4 cột × 3 hàng ô màu tràn mép
const Seasons: React.FC<{sc: Scene}> = ({sc}) => {
  const {P} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig(); const t = f / fps;
  const fams: Family[] = ['spring', 'summer', 'autumn', 'winter'];
  const W = 1080 / 4; const H = 230; const Y0 = 620;
  return (
    <AbsoluteFill style={{background: P.bg}}>
      <Folio section={sc.tag ?? 'The Index'} />
      <Rule y={306} />
      <Head text={sc.title} y={350} size={96} hi={sc.hi} />
      {fams.map((fm, ci) => (
        <React.Fragment key={fm}>
          {FAMILY[fm].seasons.map((sk, ri) => {
            const s = SEASONS[sk]; const d = 0.35 + (ci + ri) * 0.08; const k = ease(t, d, d + 0.7);
            const light = ['light-spring', 'light-summer', 'soft-autumn', 'true-spring', 'soft-summer'].includes(sk);
            const txt = light ? '#141110' : '#fbf8f3';
            const lx = ci === 0 ? 70 : 20;
            return (
              <div key={sk} style={{position: 'absolute', left: ci * W, top: Y0 + ri * H, width: W, height: H, clipPath: wipe(k, 'y'), overflow: 'hidden'}}>
                <div style={{position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${s.colors[2]} 0%, ${s.colors[4]} 100%)`}} />
                <div style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: 44, display: 'flex', flexDirection: 'column'}}>
                  {[1, 5, 6, 7].map((j) => <div key={j} style={{flex: 1, background: s.colors[j]}} />)}
                </div>
                <div style={{position: 'absolute', left: lx, top: 20, fontFamily: SANS, fontWeight: 500, fontSize: 18, letterSpacing: 4, color: txt, opacity: 0.85}}>{String(ci * 3 + ri + 1).padStart(2, '0')}</div>
                <div style={{position: 'absolute', left: lx, bottom: 20, fontFamily: SERIF, fontWeight: 700, fontSize: 32, color: txt, lineHeight: 1, whiteSpace: 'nowrap'}}>{s.vi}</div>
              </div>
            );
          })}
          <div style={{position: 'absolute', left: ci * W + (ci === 0 ? 70 : 20), top: Y0 + 3 * H + 22, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 500, fontSize: 40, color: P.ink, opacity: pop(f, fps, 0.9 + ci * 0.1)}}>{FAMILY[fm].en}</div>
        </React.Fragment>
      ))}
      {sc.sub && <Kicker text={sc.sub} y={1440} delay={1.4} />}
    </AbsoluteFill>
  );
};

// 4. TRANG CHÂN DUNG MÙA: nửa trái dải màu tràn mép, nửa phải tên mùa khổng lồ + thông số
const Palette: React.FC<{sc: Scene}> = ({sc}) => {
  const {P, S} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  if (!S) return null;
  const [w1, w2] = (sc.title || S.vi).split(' ');
  const specs = [['Nhiệt độ', S.traits[0]], ['Độ sáng', S.traits[1]], ['Độ trong', S.traits[2]]];
  return (
    <AbsoluteFill style={{background: P.bg}}>
      {sc.img ? <Photo img={sc.img} x={0} y={0} w={430} h={1920} delay={0.1} />
        : <Stripes colors={S.colors.slice(0, 6)} x={0} y={0} w={430} h={1920} delay={0.1} stagger={0.08} />}
      <div style={{position: 'absolute', left: 470, top: 262, width: 410, display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontWeight: 500, fontSize: 21, letterSpacing: 6, textTransform: 'uppercase', color: P.ink, opacity: pop(f, fps, 0)}}>
        <span style={{fontFamily: SERIF, fontWeight: 900, letterSpacing: 3, fontSize: 28}}>{BRAND}</span><span>Feature</span>
      </div>
      <Rule y={306} x={470} w={410} />
      <div style={{position: 'absolute', left: 470, top: 350, width: 420, fontFamily: SANS, fontWeight: 500, fontSize: 19, letterSpacing: 4, textTransform: 'uppercase', color: P.muted, whiteSpace: 'nowrap', opacity: pop(f, fps, 0.3)}}>
        {sc.n ? `N°${String(sc.n).padStart(2, '0')} / 12` : 'Season'} — {S.en}
      </div>
      <Head text={w2 ? `${w1}\n${w2}` : w1} hi={w2} y={400} size={190} x={466} w={420} weight={900} delay={0.35} />
      <Rule y={850} x={470} w={410} delay={0.6} />
      {specs.map(([k, v], i) => (
        <div key={k} style={{position: 'absolute', left: 470, top: 878 + i * 92, width: 410, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${P.dark ? 'rgba(244,236,224,.25)' : 'rgba(20,17,16,.2)'}`, paddingBottom: 14, opacity: pop(f, fps, 0.8 + i * 0.15)}}>
          <span style={{fontFamily: SANS, fontWeight: 500, fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', color: P.muted}}>{k}</span>
          <span style={{fontFamily: SERIF, fontWeight: 700, fontSize: 32, color: P.ink, whiteSpace: 'nowrap'}}>{v}</span>
        </div>
      ))}
      <div style={{position: 'absolute', left: 470, top: 1176, width: 410, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10}}>
        {S.colors.map((c, i) => <div key={i} style={{height: 92, background: c, transform: `scaleX(${pop(f, fps, 1.1 + i * 0.05)})`, transformOrigin: 'left center'}} />)}
      </div>
      {sc.line && <div style={{position: 'absolute', left: 470, top: 1400, width: 410, fontFamily: ITALIC, fontStyle: 'italic', fontWeight: 500, fontSize: 40, lineHeight: 1.15, color: P.ink, opacity: pop(f, fps, 1.4)}}>“{sc.line}”</div>}
    </AbsoluteFill>
  );
};

// Gương mặt minh hoạ tối giản + khăn drape (dùng khi chưa có ảnh thật)
const Face: React.FC<{drape: string; good: boolean; bg: string}> = ({drape, good, bg}) => (
  <svg viewBox="0 0 400 726" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="726" fill={bg} />
    <path d="M95 380 C80 190 140 110 200 110 C260 110 320 190 305 380 L305 520 L95 520 Z" fill="#2a1d17" />
    <rect x="172" y="350" width="56" height="90" fill={good ? '#ecc9ad' : '#d6bda8'} />
    <ellipse cx="200" cy="280" rx="80" ry="102" fill={good ? '#f2d2b6' : '#d9c1ad'} />
    <path d="M120 245 C135 165 180 155 205 158 C250 162 278 200 282 250 C255 200 200 188 120 245 Z" fill="#2a1d17" />
    <path d="M166 290 q12 -7 24 0 M212 290 q12 -7 24 0" stroke="#2a1d17" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M183 345 q17 11 34 0" stroke={good ? '#b8605a' : '#a08a80'} strokeWidth="6" fill="none" strokeLinecap="round" />
    {good ? <><ellipse cx="150" cy="322" rx="18" ry="10" fill="#f2a7a0" opacity=".38" /><ellipse cx="250" cy="322" rx="18" ry="10" fill="#f2a7a0" opacity=".38" /></>
      : <><ellipse cx="178" cy="306" rx="15" ry="5" fill="#7d6a62" opacity=".28" /><ellipse cx="224" cy="306" rx="15" ry="5" fill="#7d6a62" opacity=".28" /></>}
    <path d="M-10 726 C10 560 90 480 200 500 C310 480 390 560 410 726 Z" fill={drape} />
  </svg>
);

// 5. SO SÁNH: chia đôi màn hình, nhãn ĐÚNG MÙA / LỆCH TONE, "vs" ở giữa
const Drape: React.FC<{sc: Scene}> = ({sc}) => {
  const {P, S} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig(); const t = f / fps;
  const good = sc.cols?.[0] ?? S?.colors[4] ?? '#c1622e';
  const bad = sc.cols?.[1] ?? '#a9b8d6';
  const labels = sc.items ?? ['Da sáng, hài hoà', 'Da xỉn, kém tươi'];
  const Y = 580; const H = 1000;
  const half = (x: number, ok: boolean, img: string | undefined, c: string, label: string, d: number) => {
    const k = ease(t, d, d + 0.9); const lx = x === 0 ? SAFE_L : 34;
    return (
      <div style={{position: 'absolute', left: x, top: Y, width: 540, height: H, clipPath: wipe(k, 'y'), overflow: 'hidden'}}>
        {img ? <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover', filter: ok ? 'none' : 'saturate(.75) brightness(.95)'}} />
          : <Face drape={c} good={ok} bg={ok ? '#efe6da' : '#e2ddd8'} />}
        <div style={{position: 'absolute', left: lx, top: 30, fontFamily: SANS, fontWeight: 600, fontSize: 21, letterSpacing: 5, textTransform: 'uppercase', color: ok ? '#fbf8f3' : '#141110', background: ok ? '#141110' : '#fbf8f3', padding: '8px 16px'}}>{ok ? '✓ Đúng mùa' : '✕ Lệch tone'}</div>
        <div style={{position: 'absolute', left: lx, bottom: 100, width: 400, fontFamily: SERIF, fontWeight: 700, fontStyle: ok ? 'normal' : 'italic', fontSize: 44, lineHeight: 1.05, color: '#fbf8f3', textShadow: '0 2px 16px rgba(0,0,0,.4)'}}>{label}</div>
      </div>
    );
  };
  return (
    <AbsoluteFill style={{background: P.bg}}>
      <Folio section={sc.tag ?? 'Drape Test'} />
      <Rule y={306} />
      <Head text={sc.title} y={340} size={92} hi={sc.hi} />
      {half(0, true, sc.img, good, labels[0], 0.35)}
      {half(540, false, sc.img2, bad, labels[1], 0.55)}
      <div style={{position: 'absolute', left: 540 - 1, top: Y, width: 2, height: H * ease(t, 0.8, 1.4), background: P.bg}} />
      <div style={{position: 'absolute', left: 540 - 70, top: Y + 330, width: 140, height: 140, borderRadius: '50%', background: P.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontWeight: 500, fontSize: 68, color: P.ink, transform: `scale(${pop(f, fps, 1)})`}}>vs</div>
    </AbsoluteFill>
  );
};

// 6. SHOPPING LIST: lưới thẻ Pantone 2×2
const Tips: React.FC<{sc: Scene}> = ({sc}) => {
  const {P, S} = use();
  const items = (sc.items ?? []).slice(0, 4);
  const cols = sc.cols ?? (S ? [S.colors[1], S.colors[2], S.colors[5], S.colors[6]] : [RAINBOW[2], RAINBOW[4], RAINBOW[7], RAINBOW[10]]);
  const W = 365; const H = 400; const pos = [[SAFE_L, 690], [SAFE_L + W + 60, 740], [SAFE_L, 1120], [SAFE_L + W + 60, 1170]];
  return (
    <AbsoluteFill style={{background: P.bg}}>
      <Folio section={sc.tag ?? 'The Edit'} />
      <Rule y={306} />
      <Head text={sc.title} y={350} size={92} hi={sc.hi} />
      {items.map((it, i) => <Chip key={i} c={cols[i % cols.length]} name={it} w={W} h={H} x={pos[i][0]} y={pos[i][1]} delay={0.5 + i * 0.25} rot={i % 2 ? 1.5 : -1.5} />)}
    </AbsoluteFill>
  );
};

// 7. THE TOOLKIT: khối màu + quạt thẻ màu + chú thích đánh số
const Product: React.FC<{sc: Scene}> = ({sc}) => {
  const {P, S} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig(); const t = f / fps;
  const items = (sc.items ?? ['Thẻ màu 12 mùa', 'Vải drape chuẩn màu', 'Tự kiểm tra tại nhà']).slice(0, 3);
  const colors = S ? S.colors : RAINBOW;
  const blockC = S ? S.colors[0] : '#e3d5c2';
  const kf = ease(t, 0.5, 1.7); const n = colors.length;
  const cx = 600; const by = 1500;
  return (
    <AbsoluteFill style={{background: P.bg}}>
      <div style={{position: 'absolute', left: 0, top: 640, width: 1080, height: 940, background: blockC, clipPath: wipe(ease(t, 0.1, 0.9), 'x')}} />
      <Folio section={sc.tag ?? 'The Toolkit'} />
      <Rule y={306} />
      <Head text={sc.title} y={350} size={92} hi={sc.hi} />
      {sc.img ? <Photo img={sc.img} x={240} y={700} w={650} h={820} delay={0.4} />
        : colors.map((c, i) => {
          const a = (i / (n - 1) - 0.5) * 76 * kf - 8;
          return (
            <div key={i} style={{position: 'absolute', left: cx - 52, top: by - 600, width: 104, height: 600, background: '#fffdf9', padding: 8, boxSizing: 'border-box', boxShadow: '0 10px 24px rgba(20,17,16,.22)', transformOrigin: '52px 570px', transform: `rotate(${a}deg)`, opacity: Math.min(1, kf * 4)}}>
              <div style={{width: '100%', height: 500, background: c}} />
              <div style={{fontFamily: SANS, fontWeight: 600, fontSize: 14, letterSpacing: 1, marginTop: 12, textAlign: 'center', color: '#6f655d'}}>{String(i + 1).padStart(2, '0')}</div>
            </div>
          );
        })}
      {items.map((it, i) => {
        const k = pop(f, fps, 1.2 + i * 0.25); const y = 690 + i * 70;
        return (
          <div key={it} style={{position: 'absolute', left: SAFE_L, top: y, opacity: k, transform: `translateX(${(1 - k) * -20}px)`, display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontFamily: SERIF, fontStyle: 'italic', fontSize: 32, color: '#141110'}}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{fontFamily: SANS, fontWeight: 600, fontSize: 23, letterSpacing: 4, textTransform: 'uppercase', color: '#141110', background: '#fbf8f3', padding: '7px 14px'}}>{it}</span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// 8. ẢNH / CLIP thật phủ kín 9:16 + lớp chữ tạp chí
// cover = true: masthead TONELUX lớn như bìa; còn lại: đầu trang mảnh (TONELUX · mục · trang).
const Full: React.FC<{sc: Scene}> = ({sc}) => {
  const {S, page} = use(); const t = useT(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const ty = sc.ty ?? 1150;
  const nLines = sc.title.split('\n').length;
  const strip = S ? S.colors.slice(1, 7) : [RAINBOW[1], RAINBOW[2], RAINBOW[4], RAINBOW[7], RAINBOW[9], RAINBOW[10]];
  const kf = ease(t, 0.1, 0.9);
  return (
    <AbsoluteFill style={{background: '#14110f'}}>
      <AbsoluteFill style={{transform: `scale(${1.03 + t * 0.012})`}}>
        {sc.vid ? <Loop durationInFrames={Math.round((sc.e - sc.s) * fps) + 1}><OffthreadVideo src={staticFile(sc.vid)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Loop>
          : sc.img ? <Img src={staticFile(sc.img)} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : null}
      </AbsoluteFill>
      <AbsoluteFill style={{background: `linear-gradient(180deg, rgba(20,17,16,.55) 0%, rgba(20,17,16,0) ${sc.cover ? 30 : 22}%, rgba(20,17,16,0) ${ty / 19.2 - 16}%, rgba(20,17,16,.78) ${ty / 19.2 + 6}%, rgba(20,17,16,.86) 100%)`}} />
      {/* khung chỉ mảnh vẽ dần */}
      <div style={{position: 'absolute', left: 36, top: 36, right: 36, bottom: 36, border: '1.5px solid rgba(251,248,243,.55)', clipPath: wipe(kf, 'x')}} />
      <Ctx.Provider value={{P: DARK, S, page}}>
        {sc.cover ? <Masthead color="#fbf8f3" size={170} line={sc.sub ? undefined : undefined} /> : <Folio section={sc.tag ?? 'Studio'} color="#fbf8f3" />}
        {!sc.cover && <Rule y={306} color="rgba(251,248,243,.7)" />}
        {/* dải màu nhỏ */}
        <div style={{position: 'absolute', left: SAFE_L, top: ty - 92, display: 'flex', gap: 6}}>
          {strip.map((c, i) => <div key={i} style={{width: 44, height: 14, background: c, transform: `scaleX(${pop(f, fps, 0.25 + i * 0.05)})`, transformOrigin: 'left'}} />)}
        </div>
        {sc.cover && sc.tag && <Kicker text={sc.tag} y={ty - 56} color="#fbf8f3" delay={0.3} />}
        <Head text={sc.title} y={ty} size={nLines > 2 ? 92 : 104} hi={sc.hi} color="#fbf8f3" delay={0.3} />
        {sc.line && <div style={{position: 'absolute', left: SAFE_L, top: ty + nLines * (nLines > 2 ? 96 : 108) + 18, width: SAFE_W, fontFamily: ITALIC, fontStyle: 'italic', fontWeight: 500, fontSize: 44, lineHeight: 1.15, color: 'rgba(251,248,243,.92)', opacity: pop(f, fps, 0.9)}}>{sc.line}</div>}
      </Ctx.Provider>
    </AbsoluteFill>
  );
};

// 9. BÌA SAU: masthead + CTA + dải 12 ô màu ở chân trang
const End: React.FC<{sc: Scene}> = ({sc}) => {
  const {P} = use(); const f = useCurrentFrame(); const {fps} = useVideoConfig(); const t = f / fps;
    return (
    <AbsoluteFill style={{background: P.bg}}>
      {RAINBOW.map((c, i) => {
        const col = i % 6; const row = Math.floor(i / 6); const d = 0.05 + i * 0.05; const k = ease(t, d, d + 0.6);
        return <div key={i} style={{position: 'absolute', left: col * 180, top: 1500 + row * 210, width: 180, height: 210, background: c, clipPath: wipe(k, 'y')}} />;
      })}
      <Masthead />
      <Rule y={540} />
      <Head text={sc.title} y={660} size={120} hi={sc.hi} align="center" delay={0.5} />
      <div style={{position: 'absolute', top: 1040, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
        {(sc.sub ?? 'Đặt lịch tư vấn').split('|').map((b, i) => {
          const k = pop(f, fps, 1.3 + i * 0.2);
          return <div key={i} style={{opacity: k, transform: `translateY(${(1 - k) * 20}px)`, fontFamily: SANS, fontWeight: 600, fontSize: 27, letterSpacing: 5, textTransform: 'uppercase', color: i === 0 ? (P.dark ? '#141110' : '#f4efe7') : P.ink, background: i === 0 ? P.ink : 'transparent', border: `2px solid ${P.ink}`, padding: '20px 44px', width: 600, textAlign: 'center', boxSizing: 'border-box'}}>{b.trim()} →</div>;
        })}
      </div>
      <div style={{position: 'absolute', top: (sc.sub ?? '').includes('|') ? 1290 : 1230, left: 0, right: 0, textAlign: 'center', fontFamily: ITALIC, fontStyle: 'italic', fontSize: 42, color: P.muted, opacity: pop(f, fps, 1.6)}}>12 mùa · 1 bảng màu của riêng bạn</div>
    </AbsoluteFill>
  );
};

// ---------- phụ đề ----------
const Caption: React.FC<{caps: VideoData['caps']; dark: boolean}> = ({caps, dark}) => {
  const t = useT();
  const c = caps.find((c) => t >= c.s && t < c.e);
  if (!c) return null;
  return (
    <div style={{position: 'absolute', left: 100, width: 780, top: 1590, display: 'flex', justifyContent: 'center'}}>
      <div style={{background: dark ? '#f4efe7' : '#141110', padding: '12px 28px', fontFamily: SANS, fontWeight: 500, fontSize: 36, lineHeight: 1.3, color: dark ? '#141110' : '#f4efe7', textAlign: 'center'}}>{c.t}</div>
    </div>
  );
};

const SceneWrap: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 6, dur - 5, dur], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

const KINDS = {hook: Hook, seasons: Seasons, palette: Palette, drape: Drape, steps: Steps, tips: Tips, product: Product, full: Full, end: End};

export const Tonelux: React.FC<{data: VideoData}> = ({data}) => {
  const {fps} = useVideoConfig(); const t = useT();
  const cur = data.scenes.find((s) => t >= s.s && t < s.e);
  const curDark = cur?.kind === 'full' || (cur?.dark ?? data.dark ?? false);
  return (
    <AbsoluteFill style={{background: data.dark ? DARK.bg : LIGHT.bg}}>
      {data.scenes.map((sc, i) => {
        const from = Math.round(sc.s * fps); const dur = Math.round((sc.e - sc.s) * fps);
        const Comp = KINDS[sc.kind];
        const sk = (sc.season ?? data.season) as SeasonKey | undefined;
        const P = (sc.dark ?? data.dark) ? DARK : LIGHT;
        return (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <Ctx.Provider value={{P, S: sk ? SEASONS[sk] : undefined, page: i + 1}}><SceneWrap dur={dur}><Comp sc={sc} /></SceneWrap></Ctx.Provider>
          </Sequence>
        );
      })}
      <Caption caps={data.caps} dark={curDark} />
      {data.audio && <Audio src={staticFile(data.audio)} />}
    </AbsoluteFill>
  );
};
