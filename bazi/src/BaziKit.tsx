import React from 'react';
import {AbsoluteFill, Audio, Easing, continueRender, delayRender, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {P, CAL, H, HAND, CJK, L, Page, Star, Title, SAFE, SafeCtx} from './BaziHand';

// Bộ primitive + shell dùng chung cho các tập dựng đêm (BaziR*). Rút từ BaziThucThuong.tsx.
export const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const A = (t: number, at: number, d = 0.4) => Easing.out(Easing.cubic)(cl((t - at) / d));
export const POP = (t: number, at: number, d = 0.5) => Easing.out(Easing.back(1.8))(cl((t - at) / d));
export const totalFrames = (sec: number) => Math.ceil((sec + 0.4) * 30);

export const Pop: React.FC<{t: number; at: number; x: number; y: number; r?: number; s?: number; children: React.ReactNode}> = ({t, at, x, y, r = 0, s = 1, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${Math.max(0.0001, s * POP(t, at))})`} opacity={cl((t - at) / 0.15)}>{children}</g>
);
export const Fade: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => <g opacity={o}>{children}</g>;
export const TT: React.FC<{y?: number; size?: number; fill?: string; w?: number; children: React.ReactNode; font?: string; x?: number; anchor?: 'middle' | 'start'}> = ({y = 14, size = 40, fill = P.navy, w = 800, children, font = H, x = 0, anchor = 'middle'}) => (
  <text x={x} y={y} textAnchor={anchor} fontFamily={font} fontWeight={w} fontSize={size} fill={fill}>{children}</text>
);
export const Tag: React.FC<{w: number; h?: number; fill?: string; children: React.ReactNode; r?: number}> = ({w, h = 76, fill = P.yellow, children, r = 0}) => (
  <g transform={`rotate(${r})`} filter="url(#sh)"><rect x={-w / 2} y={-h / 2} width={w} height={h} rx={14} fill={fill} {...L} strokeWidth={5} />{children}</g>
);
export const Lbl: React.FC<{at: number; t: number; x: number; y: number; w: number; fill?: string; r?: number; size?: number; children: React.ReactNode}> = ({at, t, x, y, w, fill = P.yellow, r = 0, size = 38, children}) => (
  <Pop t={t} at={at} x={x} y={y} r={r}><Tag w={w} h={size + 34} fill={fill}><TT size={size} y={size * 0.36}>{children}</TT></Tag></Pop>
);
export const Head: React.FC<{t: number; at: number; note: string; text: string; size?: number}> = ({t, at, note, text, size = 140}) => (
  <Fade o={A(t, at, 0.4)}><Title note={note} text={text} y={340} size={size} /></Fade>
);

/* ---------- icon vẽ tay ---------- */
export const Person: React.FC<{c?: string; mood?: 'smile' | 'flat' | 'sad' | 'talk'}> = ({c = P.blue, mood = 'smile'}) => (
  <g>
    <path d="M-62 0 C-62 -70 -40 -100 0 -100 C40 -100 62 -70 62 0Z" fill={c} {...L} />
    <circle cx={0} cy={-150} r={52} fill={P.peach} {...L} />
    <path d="M-52 -156 C-50 -208 50 -208 52 -156 C30 -178 -30 -178 -52 -156Z" fill={P.navy} {...L} strokeWidth={4} />
    <circle cx={-18} cy={-146} r={5} fill={P.navy} /><circle cx={18} cy={-146} r={5} fill={P.navy} />
    {mood === 'smile' && <path d="M-15 -126 Q0 -112 15 -126" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" />}
    {mood === 'flat' && <path d="M-12 -122 H12" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" />}
    {mood === 'talk' && <ellipse cx={0} cy={-122} rx={11} ry={9} fill={P.red} stroke={P.navy} strokeWidth={4} />}
    {mood === 'sad' && <g><path d="M-14 -118 Q0 -130 14 -118" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" /><path d="M44 -150 q6 14 0 22 q-8 -8 0 -22z" fill={P.sky} stroke={P.navy} strokeWidth={3} /></g>}
  </g>
);
export const Coin: React.FC<{r?: number}> = ({r = 38}) => (
  <g><circle r={r} fill={P.yellow} {...L} strokeWidth={5} /><circle r={r * 0.62} fill="none" stroke={P.orange} strokeWidth={4} /><text y={r * 0.3} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.85} fill={P.navy}>đ</text></g>
);
export const Wallet: React.FC<{open?: boolean}> = ({open = false}) => (
  <g>
    {open && <path d="M-120 -40 L-90 -110 H90 L120 -40" fill={P.mint} {...L} strokeWidth={5} />}
    <rect x={-130} y={-50} width={260} height={160} rx={22} fill={P.orange} {...L} />
    <rect x={40} y={0} width={110} height={60} rx={16} fill={P.coral} {...L} strokeWidth={5} /><circle cx={80} cy={30} r={9} fill={P.yellow} stroke={P.navy} strokeWidth={4} />
  </g>
);
export const Jar: React.FC<{lid?: boolean; fill?: number}> = ({lid = true, fill = 0.7}) => (
  <g>
    <path d="M-90 -110 H90 V-80 C120 -60 120 -40 120 0 V110 C120 140 100 150 70 150 H-70 C-100 150 -120 140 -120 110 V0 C-120 -40 -120 -60 -90 -80Z" fill="#fff" {...L} />
    {fill > 0 && <rect x={-108} y={150 - 230 * fill} width={216} height={230 * fill - 10} rx={18} fill={P.yellow} opacity={0.9} />}
    {[0, 1, 2].map((i) => fill > 0.3 + i * 0.2 ? <circle key={i} cx={-50 + i * 50} cy={110 - i * 40} r={20} fill={P.yellow} stroke={P.navy} strokeWidth={4} /> : null)}
    {lid && <rect x={-104} y={-140} width={208} height={40} rx={12} fill={P.coral} {...L} strokeWidth={5} />}
  </g>
);
export const Bucket: React.FC = () => (
  <g>
    <path d="M-110 -100 H110 L86 120 H-86Z" fill={P.silver} {...L} />
    <path d="M-110 -100 C-110 -180 110 -180 110 -100" fill="none" stroke={P.navy} strokeWidth={6} />
    <circle cx={40} cy={80} r={14} fill={P.navy} />
    <path d="M-60 40 L-40 60 M-30 30 L-10 48" stroke={P.navy} strokeWidth={4} strokeLinecap="round" />
  </g>
);
export const Calendar: React.FC<{label?: string}> = ({label = 'tháng'}) => (
  <g>
    <rect x={-110} y={-100} width={220} height={210} rx={16} fill="#fff" {...L} />
    <rect x={-110} y={-100} width={220} height={60} rx={16} fill={P.coral} {...L} strokeWidth={5} />
    {[-60, 60].map((x) => <rect key={x} x={x - 8} y={-124} width={16} height={44} rx={8} fill={P.navy} />)}
    <text y={60} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={44} fill={P.navy}>{label}</text>
  </g>
);
export const Clock: React.FC<{t?: number; ring?: boolean}> = ({t = 0, ring = false}) => {
  const sh = ring ? Math.sin(t * 60) * 5 : 0;
  return (
    <g transform={`rotate(${sh})`}>
      <circle cx={-62} cy={-76} r={26} fill={P.coral} {...L} strokeWidth={5} /><circle cx={62} cy={-76} r={26} fill={P.coral} {...L} strokeWidth={5} />
      <circle r={96} fill="#fff" {...L} />
      <path d="M0 0 V-58 M0 0 L42 18" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
      <path d="M-56 84 L-76 112 M56 84 L76 112" stroke={P.navy} strokeWidth={7} strokeLinecap="round" />
      {ring && [-1, 1].map((d) => <path key={d} d={`M${d * 120} -60 q${d * 20} 20 0 40 M${d * 140} -80 q${d * 30} 40 0 80`} fill="none" stroke={P.navy} strokeWidth={5} strokeLinecap="round" />)}
    </g>
  );
};
export const Phone: React.FC<{children?: React.ReactNode}> = ({children}) => (
  <g>
    <rect x={-120} y={-200} width={240} height={400} rx={36} fill={P.navy} {...L} />
    <rect x={-100} y={-170} width={200} height={330} rx={16} fill={P.sky} />
    <circle cy={180} r={10} fill="#fff" />
    {children}
  </g>
);
export const Book: React.FC<{c?: string; w?: number}> = ({c = P.blue, w = 240}) => (
  <g><rect x={-w / 2} y={-30} width={w} height={60} rx={8} fill={c} {...L} strokeWidth={5} /><rect x={-w / 2 + 14} y={-14} width={w - 28} height={28} rx={4} fill="#fff" opacity={0.85} /></g>
);
export const Seal: React.FC<{ch?: string}> = ({ch = '印'}) => (
  <g>
    <rect x={-110} y={-110} width={220} height={220} rx={18} fill={P.red} {...L} />
    <rect x={-88} y={-88} width={176} height={176} rx={10} fill="none" stroke="#fff" strokeWidth={6} />
    <text y={52} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={150} fill="#fff">{ch}</text>
  </g>
);
export const Umbrella: React.FC<{c?: string}> = ({c = P.coral}) => (
  <g>
    <path d="M-200 0 C-200 -150 200 -150 200 0 C170 -26 135 -26 100 0 C70 -26 30 -26 0 0 C-30 -26 -70 -26 -100 0 C-135 -26 -170 -26 -200 0Z" fill={c} {...L} />
    <path d="M0 0 V170 C0 200 -40 200 -40 172" fill="none" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
  </g>
);
export const Rain: React.FC<{t: number; x: number; y: number; w: number; h: number; o?: number}> = ({t, x, y, w, h, o = 1}) => (
  <g opacity={o}>{Array.from({length: 14}).map((_, i) => {
    const ph = ((t * 1.3 + i * 0.37) % 1);
    return <path key={i} d={`M${x + ((i * 97) % w)} ${y + ph * h} l-10 34`} stroke={EC_THUY} strokeWidth={7} strokeLinecap="round" />;
  })}</g>
);
const EC_THUY = '#6aa7e8';
export const Shield: React.FC = () => (
  <g><path d="M0 -110 L90 -76 V-6 C90 56 50 92 0 116 C-50 92 -90 56 -90 -6 V-76Z" fill={P.mint} {...L} /><path d="M-34 0 L-8 26 L38 -28" fill="none" stroke={P.navy} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" /></g>
);
export const Gear: React.FC<{r?: number; c?: string; rot?: number}> = ({r = 90, c = P.mint, rot = 0}) => (
  <g transform={`rotate(${rot})`}>
    {Array.from({length: 8}).map((_, i) => <rect key={i} transform={`rotate(${i * 45})`} x={-r * 0.18} y={-r * 1.18} width={r * 0.36} height={r * 0.4} rx={6} fill={c} {...L} strokeWidth={5} />)}
    <circle r={r} fill={c} {...L} /><circle r={r * 0.36} fill="#fff" {...L} strokeWidth={5} />
  </g>
);
export const Briefcase: React.FC = () => (
  <g>
    <path d="M-36 -70 V-92 H36 V-70" fill="none" stroke={P.navy} strokeWidth={9} strokeLinejoin="round" />
    <rect x={-110} y={-70} width={220} height={150} rx={18} fill={P.orange} {...L} />
    <path d="M-110 -6 H110" stroke={P.navy} strokeWidth={5} /><rect x={-18} y={-20} width={36} height={28} rx={6} fill={P.yellow} {...L} strokeWidth={4} />
  </g>
);
export const Bolt: React.FC<{c?: string}> = ({c = P.yellow}) => <path d="M20 -120 L-60 10 H-6 L-30 120 L60 -20 H6Z" fill={c} {...L} />;
export const Burst: React.FC<{txt?: string; size?: number}> = ({txt = '!', size = 84}) => (
  <g>
    <path d="M0 -120 L26 -44 L104 -64 L52 -2 L118 52 L36 48 L22 124 L-16 56 L-92 94 L-56 22 L-130 -20 L-48 -34 L-62 -108 L-8 -58Z" fill={P.yellow} {...L} />
    <text y={size * 0.3} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={size} fill={P.red}>{txt}</text>
  </g>
);
export const Block: React.FC<{w?: number; h?: number; txt?: string}> = ({w = 360, h = 170, txt = 'áp lực'}) => (
  <g><rect x={-w / 2} y={-h / 2} width={w} height={h} rx={14} fill={P.silver} {...L} /><path d={`M${-w / 2 + 30} ${-h / 2 + 30} l40 30 M${w / 2 - 60} ${h / 2 - 50} l30 20`} stroke="#9fb0cc" strokeWidth={6} strokeLinecap="round" /><TT size={56} y={18}>{txt}</TT></g>
);
export const Tick: React.FC = () => <g><circle r={34} fill={P.mint} {...L} strokeWidth={5} /><path d="M-16 0 L-4 14 L18 -14" fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /></g>;
export const Cross: React.FC = () => <g><circle r={34} fill={P.coral} {...L} strokeWidth={5} /><path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /></g>;
export const Card: React.FC<{x: number; y: number; w: number; h: number; fill: string; label?: string; r?: number; children?: React.ReactNode}> = ({x, y, w, h, fill, label, r = 0, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r} ${w / 2} ${h / 2})`} filter="url(#sh)">
    <rect width={w} height={h} rx={16} fill={fill} {...L} />
    <rect x={12} y={12} width={w - 24} height={h - 24} rx={10} fill="#fff" opacity={0.78} />
    {label && <text x={w / 2} y={52} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={34} fill={P.navy}>{label}</text>}
    {children}
  </g>
);
// Thẻ thuật ngữ: tên Việt + chữ Hán (thuật ngữ thập thần cố định, không phải can chi)
export const TermCard: React.FC<{t: number; at: number; x: number; y: number; vi: string; han: string; fill: string; r?: number; w?: number}> = ({t, at, x, y, vi, han, fill, r = 0, w = 330}) => (
  <Pop t={t} at={at} x={x} y={y} r={r}><Card x={-w / 2} y={-150} w={w} h={300} fill={fill} label={vi}><TT x={w / 2} y={210} size={110} font={CJK} w={700}>{han}</TT></Card></Pop>
);
export const ArrowDown: React.FC<{t: number; at: number; x: number; y: number}> = ({t, at, x, y}) => (
  <g opacity={A(t, at, 0.3)} transform={`translate(${x} ${y + 12 * Math.sin((t - at) * 6)})`}>
    <path d="M0 0 V50" stroke={P.red} strokeWidth={12} strokeLinecap="round" /><path d="M-30 26 L0 62 L30 26" fill="none" stroke={P.red} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
  </g>
);
export const CommentBar: React.FC<{t: number; at: number; text: string; y: number; dur?: number}> = ({t, at, text, y, dur = 1.6}) => {
  const n = Math.floor(cl((t - at) / dur) * text.length);
  const blink = Math.floor(t * 2.2) % 2 === 0;
  return (
    <g opacity={A(t, at - 0.1, 0.4)} transform={`translate(500 ${y})`}>
      <rect x={-430} y={-52} width={860} height={104} rx={52} fill="#fff" {...L} strokeWidth={5} />
      <circle cx={-370} cy={0} r={28} fill={P.peach} {...L} strokeWidth={4} />
      <text x={-320} y={14} fontFamily={HAND} fontSize={40} fill={P.navy}>{text.slice(0, n)}{blink ? '|' : ''}</text>
    </g>
  );
};

/* Cảnh chung "Lá số không phải số phận cố định / là cách đang vận hành" — mốc theo giọng */
export const NotDestiny: React.FC<{t: number; s: number; strikeAt: number; gearAt: number; okAt: number; tint?: string; extra?: React.ReactNode}> = ({t, s, strikeAt, gearAt, okAt, tint = P.mint, extra}) => {
  const strike = A(t, strikeAt, 0.5);
  return (
    <g>
      <Page tint={tint} />
      <Head t={t} at={s + 0.08} note="Lá số là" text="Cách vận hành" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={s + 0.3} x={500} y={620} r={-2}><Tag w={640} h={110} fill="#fff"><TT size={50} y={18}>số phận cố định</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M190 640 L${190 + 620 * strike} 600`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={strikeAt + 0.4} x={840} y={600}><Cross /></Pop>
        <Pop t={t} at={gearAt} x={380} y={1000}><Gear r={120} c={P.mint} rot={(t - gearAt) * 40} /></Pop>
        <Pop t={t} at={gearAt + 0.3} x={620} y={1140}><Gear r={80} c={P.yellow} rot={-(t - gearAt) * 60 + 22} /></Pop>
        <Lbl at={okAt} t={t} x={500} y={1380} w={680} fill={P.yellow} r={-1} size={42}>cách mình đang vận hành</Lbl>
        <Pop t={t} at={okAt + 0.4} x={850} y={1260}><Tick /></Pop>
        {extra}
      </g>
    </g>
  );
};

/* ---------- shell ---------- */
export type SP = {t: number};
export type Sc = {s: number; e: number; C: React.FC<SP>};
type Ph = {text: string; s: number; e: number};

const Caption: React.FC<{t: number; ph: Ph[]}> = ({t, ph}) => {
  let cur: Ph | null = null;
  for (const p of ph) if (p.s <= t + 0.03) cur = p;
  if (!cur || t > cur.e + 0.5) return null;
  const k = Easing.out(Easing.cubic)(cl((t - cur.s + 0.03) / 0.14));
  const fs = Math.min(44, 700 / (cur.text.length * 0.52));
  const w = Math.min(800, Math.max(300, cur.text.length * fs * 0.52 + 90));
  return (
    <g transform={`translate(480 1585) scale(${0.92 + 0.08 * k})`} opacity={k} filter="url(#sh)">
      <rect x={-w / 2} y={-58} width={w} height={116} rx={28} fill="#fff" {...L} />
      <text y={fs * 0.36} textAnchor="middle" fontFamily={H} fontWeight={600} fontSize={fs} fill={P.navy}>{cur.text}</text>
    </g>
  );
};
const FootSafe: React.FC = () => <text x={480} y={1690} textAnchor="middle" fontFamily={HAND} fontSize={26} fill={P.navy} opacity={0.7}>Tham khảo theo mệnh lý truyền thống · không khẳng định vận mệnh</text>;

export const Shell: React.FC<{guide?: boolean; voice: string; phrases: Ph[]; scenes: Sc[]}> = ({guide = false, voice, phrases, scenes}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = f / fps;
  const [handle] = React.useState(() => delayRender('font'));
  React.useEffect(() => {
    const ff = new FontFace('QuangNinh', `url(${staticFile('fonts/QuangNinhThuphap.ttf')})`);
    ff.load().then((r) => {document.fonts.add(r); return document.fonts.ready;}).then(() => continueRender(handle)).catch(() => continueRender(handle));
  }, [handle]);
  const seed = 3 + (Math.floor(t * 7.5) % 5);
  return (
    <AbsoluteFill style={{background: P.cream}}>
      <Audio src={staticFile(voice)} />
      <svg width={1080} height={1920} viewBox="0 0 1080 1920">
        <defs>
          <filter id="wob" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed={seed} result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="5" /></filter>
          <filter id="sh" x="-10%" y="-10%" width="130%" height="130%"><feDropShadow dx="6" dy="9" stdDeviation="5" floodColor="#1f2f5c" floodOpacity="0.18" /></filter>
        </defs>
        {scenes.map((sc, i) => {
          if (t < sc.s - 0.01 || t > sc.e + 0.55) return null;
          const nxt = scenes[i + 1];
          const p = i === 0 ? 1 : Easing.inOut(Easing.cubic)(cl((t - sc.s) / 0.5));
          const q = nxt ? Easing.inOut(Easing.cubic)(cl((t - nxt.s) / 0.5)) : 0;
          const z = 1 + 0.035 * cl((t - sc.s) / (sc.e - sc.s));
          return (
            <g key={i} transform={`translate(${(1 - p) * 1080 - q * 200} 0)`}>
              <SafeCtx.Provider value={true}>
                <g transform={`translate(${SAFE.tx} ${SAFE.ty}) scale(${SAFE.s})`}>
                  <g transform={`translate(540 960) scale(${z}) translate(-540 -960)`}><sc.C t={t} /></g>
                </g>
              </SafeCtx.Provider>
              <rect width={1080} height={1920} fill="#1f2f5c" opacity={q * 0.25} />
            </g>
          );
        })}
        <FootSafe />
        <Caption t={t} ph={phrases} />
        {guide && <g fill={P.red} opacity={0.3}><rect width={1080} height={260} /><rect y={1700} width={1080} height={220} /><rect x={880} y={1090} width={200} height={830} /></g>}
      </svg>
    </AbsoluteFill>
  );
};
export {P, CAL, H, HAND, CJK, L, Page, Star};
