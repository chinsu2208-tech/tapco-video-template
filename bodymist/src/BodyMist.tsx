import React from 'react';
import {AbsoluteFill, Audio, Img, Loop, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import '@fontsource/baloo-2/800.css';
import '@fontsource/baloo-2/600.css';
import '@fontsource/dancing-script/700.css';
import '@fontsource/patrick-hand/400.css';
import {BRAND, SCENTS, THEMES, Theme, ThemeKey} from './theme';
import type {Scene, VideoData} from './make';
import {Bottle, BowIcon, Candy, FxClock, FxLimited, FxPocket, HAND, Heart, Motifs, SCRIPT, TITLE, pop, usePop, useT} from './Art';

const Ctx = React.createContext<{T: Theme; brand: string}>({T: THEMES.mix, brand: BRAND});
const useTh = () => React.useContext(Ctx);

// ---------- nền ----------
const Background: React.FC<{alt?: boolean}> = ({alt}) => {
  const {T} = useTh(); const t = useT();
  const a = alt ? T.bg2 : T.bg; const b = alt ? T.bg : T.bg2;
  return (
    <AbsoluteFill style={{background: `linear-gradient(170deg, ${a} 0%, ${b} 100%)`}}>
      <div style={{position: 'absolute', left: 760, top: 120 + Math.sin(t) * 16, width: 420, height: 420, borderRadius: '50%', background: T.light, opacity: T.dark ? 0.55 : 0.7}} />
      <div style={{position: 'absolute', left: -160, top: 1280 + Math.sin(t + 2) * 16, width: 480, height: 480, borderRadius: '50%', background: T.light, opacity: T.dark ? 0.45 : 0.6}} />
      <AbsoluteFill style={{backgroundImage: `radial-gradient(${T.dark ? 'rgba(255,255,255,.12)' : T.main + '33'} 3px, transparent 3.5px)`, backgroundSize: '46px 46px', backgroundPosition: `${t * 6}px ${t * 6}px`}} />
      <Motifs T={T} />
    </AbsoluteFill>
  );
};

// ---------- chữ ----------
const Title: React.FC<{text: string; y: number; size?: number; delay?: number; left?: number; width?: number; hi?: string; align?: 'center' | 'left'}> = ({text, y, size = 96, delay = 0, left = 90, width = 800, hi, align = 'center'}) => {
  const {T} = useTh(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const maxLen = Math.max(...text.split('\n').map((l) => l.length));
  size = Math.min(size, Math.floor((width - 20) / (maxLen * 0.5)));
  return (
    <div style={{position: 'absolute', left, width, top: y, textAlign: align}}>
      {text.split('\n').map((ln, i) => {
        const k = pop(f, fps, delay + i * 0.12);
        const parts = hi && ln.includes(hi) ? ln.split(hi) : null;
        return (
          <div key={i} style={{fontFamily: TITLE, fontWeight: 800, fontSize: size, lineHeight: 1.08, color: T.ink, transform: `translateY(${(1 - k) * 40}px)`, opacity: Math.min(1, k * 1.4),
            WebkitTextStroke: `14px ${T.dark ? T.light : '#fff'}`, paintOrder: 'stroke fill', textShadow: `0 7px 0 ${T.dark ? '#160b26' : T.light}`}}>
            {parts ? <>{parts[0]}<span style={{color: T.dark ? T.accent : T.deep}}>{hi}</span>{parts[1]}</> : ln}
          </div>
        );
      })}
    </div>
  );
};

const Chip: React.FC<{x: number; y: number; text: string; rot?: number; delay?: number; size?: number; alt?: boolean; th?: Theme}> = ({x, y, text, rot = -2, delay = 0, size = 36, alt, th}) => {
  const ctx = useTh(); const T = th ?? ctx.T; const k = usePop(delay);
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg) scale(${k})`, background: alt ? T.accent : T.main, color: alt ? T.ink === '#fff3df' ? '#2b1842' : T.ink : '#fff', fontFamily: TITLE, fontWeight: 800, fontSize: size, padding: '8px 28px', borderRadius: 999, border: '5px solid #fff', boxShadow: '0 10px 18px rgba(80,30,70,.2)', whiteSpace: 'nowrap'}}>{text}</div>
  );
};

const BrandPill: React.FC<{x: number; y: number; delay?: number; center?: boolean}> = ({x, y, delay = 0, center}) => {
  const {T, brand} = useTh(); const k = usePop(delay);
  return (
    <div style={{position: 'absolute', left: center ? 0 : x, right: center ? 0 : undefined, margin: center ? '0 auto' : undefined, width: 'fit-content', top: y, transform: `scale(${k})`, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 999, padding: '8px 28px 8px 14px', boxShadow: '0 8px 16px rgba(80,30,70,.16)'}}>
      <div style={{width: 46, height: 42}}><Heart c={T.main} /></div>
      <span style={{fontFamily: TITLE, fontWeight: 800, fontSize: 36, color: T.dark ? T.bg : T.deep}}>{brand}</span>
    </div>
  );
};

// Ảnh thật trong khung (thay chai minh hoạ)
const PhotoCard: React.FC<{img: string; x: number; y: number; w: number; h: number; rot?: number; delay?: number}> = ({img, x, y, w, h, rot = 0, delay = 0}) => {
  const {T} = useTh(); const k = usePop(delay); const t = useT();
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, transform: `rotate(${rot}deg) scale(${0.86 + 0.14 * k})`, opacity: Math.min(1, k * 1.3)}}>
      <div style={{position: 'absolute', inset: 0, background: '#fff', borderRadius: 40, boxShadow: '0 20px 44px rgba(80,30,70,.22)'}} />
      <div style={{position: 'absolute', inset: 18, borderRadius: 28, overflow: 'hidden', border: `4px solid ${T.light}`}}>
        <Img src={staticFile(img)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1 + t * 0.012})`}} />
      </div>
    </div>
  );
};

// ---------- cảnh ----------
// Mở đầu: 1 chai lớn (bản 1 mùi) hoặc 5 chai xòe quạt (bản 5 mùi)
const Hook: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh();
  return (
    <AbsoluteFill>
      <Background />
      {sc.tag && <Chip x={110} y={260} text={sc.tag} alt rot={-3} size={34} />}
      <Title text={sc.title} y={sc.tag ? 350 : 290} size={108} hi={sc.hi} />
      {sc.img ? <PhotoCard img={sc.img} x={160} y={700} w={660} h={780} rot={-2} delay={0.25} />
        : T.key === 'mix'
          ? SCENTS.map((k, i) => <Bottle key={k} th={k} x={140 + i * 150} y={760 + Math.abs(i - 2) * 50} s={1.55} rot={(i - 2) * 8} delay={0.25 + i * 0.1} />)
          : <Bottle th={T.key} x={330} y={700} s={2.4} spray glow delay={0.25} />}
      {sc.sub && <Chip x={130} y={1440} text={sc.sub} delay={0.8} rot={2} />}
    </AbsoluteFill>
  );
};

// Dàn 5 chai, lần lượt "bật" từng chai kèm tên
const Lineup: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh();
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const t = f / fps; const focus = Math.floor(Math.max(0, t - 0.6) / 0.45) % 5;
  return (
    <AbsoluteFill>
      <Background alt />
      {sc.tag && <Chip x={110} y={260} text={sc.tag} alt rot={-3} size={34} />}
      <Title text={sc.title} y={sc.tag ? 350 : 300} size={96} hi={sc.hi} />
      {SCENTS.map((k, i) => {
        const on = t > 0.6 && i === focus; const Tk = THEMES[k];
        return (
          <React.Fragment key={k}>
            <Bottle th={k} x={118 + i * 158} y={on ? 640 : 720} s={on ? 1.6 : 1.4} delay={0.2 + i * 0.12} spray={on} />
            <div style={{position: 'absolute', left: 98 + i * 158, top: 1160, width: 180, textAlign: 'center', fontFamily: SCRIPT, fontWeight: 700, fontSize: 40, color: T.dark ? (Tk.dark ? Tk.accent : Tk.main) : Tk.deep === '#f2c46d' ? '#5b2f80' : Tk.deep, opacity: pop(f, fps, 0.4 + i * 0.12)}}>{Tk.short.charAt(0) + Tk.short.slice(1).toLowerCase()}</div>
          </React.Fragment>
        );
      })}
      {sc.sub && <Chip x={150} y={1330} text={sc.sub} delay={0.9} rot={2} />}
    </AbsoluteFill>
  );
};

// Giới thiệu 1 mùi: chai lớn xịt sương + tên + tính cách
const ScentCard: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh();
  return (
    <AbsoluteFill>
      <Background />
      {sc.n && <Chip x={100} y={250} text={`${sc.n}/5`} alt rot={-6} size={34} />}
      <div style={{position: 'absolute', left: 90, width: 800, top: 330, textAlign: 'center'}}>
        <ScentName name={T.name} />
      </div>
      <Title text={sc.title || T.vibe} y={505} size={70} hi={sc.hi} />
      {sc.img ? <PhotoCard img={sc.img} x={120} y={640} w={480} h={680} rot={-3} delay={0.2} />
        : <Bottle th={T.key} x={150} y={630} s={2.2} spray glow delay={0.2} rot={-4} />}
      {T.tags.map((tg, i) => <Chip key={tg} x={560 + (i % 2) * 20} y={760 + i * 150} text={tg} alt={i === 1} rot={i % 2 ? 4 : -3} delay={0.5 + i * 0.25} size={40} />)}
      {sc.line && <SpeechCard text={sc.line} y={1340} delay={1} />}
    </AbsoluteFill>
  );
};

const ScentName: React.FC<{name: string}> = ({name}) => {
  const {T} = useTh(); const k = usePop(0.05); const t = useT();
  return (
    <div style={{display: 'inline-block', transform: `scale(${k}) rotate(${-3 + Math.sin(t * 2) * 1.5}deg)`, fontFamily: SCRIPT, fontWeight: 700, fontSize: 150, lineHeight: 1, color: T.dark ? T.accent : T.deep,
      WebkitTextStroke: `12px ${T.dark ? T.light : '#fff'}`, paintOrder: 'stroke fill', textShadow: `0 8px 0 ${T.dark ? '#160b26' : T.light}`}}>{name}</div>
  );
};

const SpeechCard: React.FC<{text: string; y: number; delay?: number}> = ({text, y, delay = 0}) => {
  const {T} = useTh(); const k = usePop(delay);
  return (
    <div style={{position: 'absolute', left: 110, width: 760, top: y, display: 'flex', justifyContent: 'center', transform: `scale(${k})`}}>
      <div style={{background: '#fff', border: `5px solid ${T.main}`, borderRadius: 34, padding: '14px 34px', fontFamily: HAND, fontSize: 46, color: T.dark ? '#3b2256' : T.ink, textAlign: 'center', lineHeight: 1.15, boxShadow: '0 10px 22px rgba(80,30,70,.18)'}}>{text}</div>
    </div>
  );
};

// "Bạn là Baby nào?" — 5 thẻ tính cách
const Quiz: React.FC<{sc: Scene}> = ({sc}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return (
    <AbsoluteFill>
      <Background />
      <Title text={sc.title} y={270} size={100} hi={sc.hi} />
      {SCENTS.map((k, i) => {
        const Tk = THEMES[k]; const a = pop(f, fps, 0.35 + i * 0.22);
        return (
          <div key={k} style={{position: 'absolute', left: 110, top: 560 + i * 176, width: 760, height: 150, borderRadius: 40, background: Tk.dark ? Tk.bg2 : '#fff', border: `6px solid ${Tk.main}`, boxShadow: '0 10px 20px rgba(80,30,70,.14)',
            transform: `translateX(${(1 - a) * (i % 2 ? 120 : -120)}px) rotate(${i % 2 ? 1 : -1}deg)`, opacity: Math.min(1, a * 1.4), display: 'flex', alignItems: 'center', gap: 24, padding: '0 30px', boxSizing: 'border-box'}}>
            <div style={{width: 96, height: 96, borderRadius: '50%', background: `linear-gradient(160deg, ${Tk.liquid[0]}, ${Tk.liquid[1]})`, border: '5px solid #fff', boxShadow: `0 0 0 4px ${Tk.main}`, flexShrink: 0}} />
            <div>
              <div style={{fontFamily: SCRIPT, fontWeight: 700, fontSize: 52, lineHeight: 1, color: Tk.dark ? Tk.accent : Tk.deep}}>{Tk.name}</div>
              <div style={{fontFamily: TITLE, fontWeight: 600, fontSize: 34, lineHeight: 1.2, color: Tk.dark ? Tk.ink : Tk.ink}}>{Tk.tags.join(' · ')}</div>
            </div>
          </div>
        );
      })}
      {sc.sub && <Chip x={180} y={1450} text={sc.sub} delay={1.6} rot={-2} alt />}
    </AbsoluteFill>
  );
};

// 3 điểm bán: nhỏ gọn bỏ túi / lưu hương 2–4h / bản limited
const Features: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const labels = sc.items ?? ['Nhỏ gọn bỏ túi', 'Lưu hương 2–4 tiếng', 'Bản limited'];
  const icons = [FxPocket, FxClock, FxLimited];
  return (
    <AbsoluteFill>
      <Background alt />
      <Title text={sc.title} y={280} size={96} hi={sc.hi} />
      {labels.map((lb, i) => {
        const a = pop(f, fps, 0.4 + i * 0.45); const Ic = icons[i];
        return (
          <div key={i} style={{position: 'absolute', left: 110, top: 590 + i * 280, width: 760, height: 240, transform: `scale(${a})`, opacity: Math.min(1, a * 1.3)}}>
            <div style={{position: 'absolute', inset: 0, background: T.dark ? 'rgba(255,255,255,.96)' : '#fff', borderRadius: 48, boxShadow: '0 14px 28px rgba(80,30,70,.16)', border: `6px solid ${T.light}`}} />
            <div style={{position: 'absolute', left: 24, top: 20, width: 200, height: 200}}><Ic T={T} /></div>
            <div style={{position: 'absolute', left: 250, right: 30, top: 0, bottom: 0, display: 'flex', alignItems: 'center', fontFamily: TITLE, fontWeight: 800, fontSize: 54, lineHeight: 1.08, color: T.dark ? '#3b2256' : T.ink}}>{lb}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// Dịp dùng: đi date, mùa lễ…
const OCC_ICON: Record<number, (T: Theme) => React.ReactNode> = {
  0: (T) => <Heart c={T.main} />,
  1: (T) => <svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50 6 L 86 70 L 14 70 Z" fill="#4fb37f" stroke="#fff" strokeWidth="5" strokeLinejoin="round" /><rect x="42" y="70" width="16" height="20" fill="#9a6a3f" /><circle cx="50" cy="8" r="9" fill="#f2c46d" /><circle cx="40" cy="48" r="5" fill={T.main} /><circle cx="60" cy="58" r="5" fill="#fff" /></svg>,
  2: (T) => <svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="12" y="40" width="76" height="52" rx="8" fill={T.main} stroke="#fff" strokeWidth="5" /><rect x="8" y="28" width="84" height="18" rx="6" fill={T.deep} stroke="#fff" strokeWidth="4" /><rect x="44" y="28" width="12" height="64" fill={T.accent} /><g transform="translate(20 0) scale(.5)"><BowIcon c={T.accent} d={T.deep} /></g></svg>,
  3: (T) => <Candy c={T.accent} d={T.main} />,
};
const Occasion: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh(); const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const labels = sc.items ?? ['Đi date', 'Mùa lễ', 'Làm quà', 'Đi chơi'];
  return (
    <AbsoluteFill>
      <Background />
      <Title text={sc.title} y={280} size={96} hi={sc.hi} />
      {sc.img ? <PhotoCard img={sc.img} x={230} y={540} w={520} h={720} rot={2} delay={0.2} />
        : <Bottle th={T.key === 'mix' ? 'soft' : T.key} x={390} y={620} s={1.75} spray glow delay={0.2} />}
      {labels.slice(0, 4).map((lb, i) => {
        const a = pop(f, fps, 0.5 + i * 0.3);
        const pos = [[110, 600], [600, 680], [110, 1000], [580, 1100]][i];
        return (
          <div key={i} style={{position: 'absolute', left: pos[0], top: pos[1], width: 300, transform: `scale(${a}) rotate(${i % 2 ? 4 : -4}deg)`, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: 130, height: 120}}>{OCC_ICON[i](T)}</div>
            <div style={{marginTop: -4, background: '#fff', color: T.dark ? '#3b2256' : T.deep, fontFamily: TITLE, fontWeight: 800, fontSize: 42, padding: '4px 26px', borderRadius: 999, border: `5px solid ${T.main}`, whiteSpace: 'nowrap'}}>{lb}</div>
          </div>
        );
      })}
      {sc.sub && <Chip x={150} y={1420} text={sc.sub} delay={1.6} rot={-2} alt />}
    </AbsoluteFill>
  );
};

// Ảnh/clip thật phủ kín khung (khi có B-roll)
const Full: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh(); const t = useT(); const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <AbsoluteFill style={{transform: `scale(${1.04 + t * 0.01})`}}>
        {sc.vid ? <Loop durationInFrames={Math.round((5 / 0.85) * fps) - 2}><OffthreadVideo src={staticFile(sc.vid)} muted playbackRate={0.85} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Loop>
          : sc.img ? <Img src={staticFile(sc.img)} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : <Background />}
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(60,20,50,.25) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 52%, rgba(60,20,50,.55) 82%, rgba(60,20,50,.6) 100%)'}} />
      {/* ảnh thật: brand trên cùng, tiêu đề nửa dưới để không che mặt / chai trên tay */}
      {(sc.img || sc.vid) && <BrandPill x={110} y={250} delay={0.3} />}
      {sc.tag && <Chip x={110} y={(sc.ty ?? 1180) - 60} text={sc.tag} alt size={32} />}
      <Title text={sc.title} y={(sc.ty ?? 1180) + (sc.tag ? 20 : 0)} size={100} hi={sc.hi} />
      {!sc.img && !sc.vid && T.key !== 'mix' && <Bottle th={T.key} x={110} y={1080} s={1} delay={0.4} spray />}
    </AbsoluteFill>
  );
};

const End: React.FC<{sc: Scene}> = ({sc}) => {
  const {T} = useTh();
  return (
    <AbsoluteFill>
      <Background alt />
      {T.key === 'mix'
        ? SCENTS.map((k, i) => <Bottle key={k} th={k} x={115 + i * 155} y={500 + Math.abs(i - 2) * 45} s={1.45} rot={(i - 2) * 8} delay={0.1 + i * 0.08} spray={i === 2} />)
        : <>
            <Bottle th={T.key} x={380} y={420} s={1.9} spray glow delay={0.1} />
            {SCENTS.filter((k) => k !== T.key).map((k, i) => <Bottle key={k} th={k} x={[110, 230, 690, 800][i]} y={[700, 650, 650, 700][i]} s={0.9} delay={0.4 + i * 0.1} />)}
          </>}
      <div style={{position: 'absolute', left: 680, top: 300, width: 200, height: 200}}><FxLimited T={T} /></div>
      <Title text={sc.title} y={1090} size={96} delay={0.35} hi={sc.hi} />
      <BrandPill x={0} y={1340} delay={0.5} center />
      {sc.sub && <div style={{position: 'absolute', left: 90, width: 800, top: 1440, textAlign: 'center', fontFamily: HAND, fontSize: 34, color: T.dark ? T.ink : T.deep}}>{sc.sub}</div>}
    </AbsoluteFill>
  );
};

// ---------- phụ đề + khung ----------
const Caption: React.FC<{caps: VideoData['caps']}> = ({caps}) => {
  const {T} = useTh(); const t = useT();
  const c = caps.find((c) => t >= c.s && t < c.e);
  if (!c) return null;
  return (
    <div style={{position: 'absolute', left: 110, width: 760, top: 1590, display: 'flex', justifyContent: 'center'}}>
      <div style={{background: 'rgba(255,255,255,.96)', borderLeft: `10px solid ${T.main}`, borderRadius: 22, padding: '12px 28px', fontFamily: TITLE, fontWeight: 600, fontSize: 40, lineHeight: 1.2, color: T.dark ? '#3b2256' : T.ink, textAlign: 'center', boxShadow: '0 6px 14px rgba(80,30,70,.15)'}}>{c.t}</div>
    </div>
  );
};

const SceneWrap: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 7, dur - 5, dur], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const z = interpolate(f, [0, dur], [1, 1.03]);
  return <AbsoluteFill style={{opacity: o, transform: `scale(${z})`}}>{children}</AbsoluteFill>;
};

const KINDS = {hook: Hook, lineup: Lineup, scent: ScentCard, quiz: Quiz, features: Features, occasion: Occasion, full: Full, end: End};

export const BodyMist: React.FC<{data: VideoData}> = ({data}) => {
  const {fps} = useVideoConfig();
  const base = THEMES[data.theme];
  const brand = data.brand ?? BRAND;
  return (
    <AbsoluteFill style={{background: base.bg}}>
      {data.scenes.map((sc, i) => {
        const from = Math.round(sc.s * fps); const dur = Math.round((sc.e - sc.s) * fps);
        const Comp = KINDS[sc.kind];
        const T = THEMES[(sc.scent ?? data.theme) as ThemeKey];
        return (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <Ctx.Provider value={{T, brand}}><SceneWrap dur={dur}><Comp sc={sc} /></SceneWrap></Ctx.Provider>
          </Sequence>
        );
      })}
      <CaptionTheme data={data} />
      {data.audio && <Audio src={staticFile(data.audio)} />}
    </AbsoluteFill>
  );
};

// Phụ đề lấy màu theo cảnh đang chạy
const CaptionTheme: React.FC<{data: VideoData}> = ({data}) => {
  const t = useT();
  const sc = data.scenes.find((s) => t >= s.s && t < s.e);
  const T = THEMES[(sc?.scent ?? data.theme) as ThemeKey];
  return <Ctx.Provider value={{T, brand: data.brand ?? BRAND}}><Caption caps={data.caps} /></Ctx.Provider>;
};
