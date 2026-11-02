import React from 'react';
import {AbsoluteFill, Audio, Easing, continueRender, delayRender, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {P, CAL, H, HAND, CJK, L, EC, EZ, STEM, BR, Page, Wavy, Star, Title, Doodle, SAFE, SafeCtx} from './BaziHand';
import type {El} from './BaziHand';
import cap from './cap1992.json';

// ====== Video 1992: nửa cuối 2026 nặng nề (Nhâm Thân gặp Bính Ngọ) · 10 cảnh + comment thật ======
// Mốc thời gian: src/baziScriptCap.json (tools/align_dp.py). Dữ liệu trong cảnh là minh hoạ, không phải lá số thật.
export const BZ_FPS = 30;
export const BZ_TOTAL = 1830;
const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const A = (t: number, at: number, d = 0.4) => Easing.out(Easing.cubic)(cl((t - at) / d));
const POP = (t: number, at: number, d = 0.5) => Easing.out(Easing.back(1.8))(cl((t - at) / d));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

const Pop: React.FC<{t: number; at: number; x: number; y: number; r?: number; s?: number; children: React.ReactNode}> = ({t, at, x, y, r = 0, s = 1, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${Math.max(0.0001, s * POP(t, at))})`} opacity={cl((t - at) / 0.15)}>{children}</g>
);
const Fade: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => <g opacity={o}>{children}</g>;

/* ---------- icon vẽ tay ---------- */
const Person: React.FC<{c?: string; hair?: string; mood?: 'smile' | 'flat' | 'sad'}> = ({c = P.blue, hair = P.navy, mood = 'smile'}) => (
  <g>
    <path d="M-62 0 C-62 -70 -40 -100 0 -100 C40 -100 62 -70 62 0Z" fill={c} {...L} />
    <circle cx={0} cy={-150} r={52} fill={P.peach} {...L} />
    <path d="M-52 -156 C-50 -208 50 -208 52 -156 C30 -178 -30 -178 -52 -156Z" fill={hair} {...L} strokeWidth={4} />
    <circle cx={-18} cy={-146} r={5} fill={P.navy} /><circle cx={18} cy={-146} r={5} fill={P.navy} />
    {mood === 'smile' && <path d="M-15 -126 Q0 -112 15 -126" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" />}
    {mood === 'flat' && <path d="M-12 -122 H12" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" />}
    {mood === 'sad' && <g><path d="M-14 -118 Q0 -130 14 -118" fill="none" stroke={P.navy} strokeWidth={4} strokeLinecap="round" /><path d="M44 -150 q6 14 0 22 q-8 -8 0 -22z" fill={P.sky} stroke={P.navy} strokeWidth={3} /></g>}
  </g>
);
const Coin: React.FC<{r?: number}> = ({r = 34}) => (
  <g><circle r={r} fill={P.yellow} {...L} strokeWidth={4} /><circle r={r * 0.6} fill="none" stroke={P.orange} strokeWidth={3} /><path d={`M${-r * 0.35} ${-r * 0.25} q${r * 0.2} ${-r * 0.3} ${r * 0.5} ${-r * 0.3}`} fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" /></g>
);
const Pile: React.FC<{t: number; at: number; n: number}> = ({t, at, n}) => (
  <g>{Array.from({length: n}).map((_, i) => (
    <g key={i} transform={`translate(${(i % 2 ? 5 : -5)} ${-i * 24 - 12 + (1 - POP(t, at + i * 0.1, 0.4)) * -160}) `} opacity={cl((t - at - i * 0.1) / 0.1)}>
      <rect x={-46} y={-12} width={92} height={26} rx={10} fill={P.yellow} {...L} strokeWidth={4} /><path d="M-30 -2 H30" stroke={P.orange} strokeWidth={3} strokeLinecap="round" />
    </g>
  ))}</g>
);
const Bag: React.FC<{c?: string; hole?: boolean}> = ({c = P.mint, hole = false}) => (
  <g>
    <path d="M-56 0 C-84 -64 -46 -96 -22 -122 L22 -122 C46 -96 84 -64 56 0Z" fill={c} {...L} />
    <path d="M-28 -122 Q0 -146 28 -122" fill="none" {...L} strokeWidth={5} />
    <path d="M-20 -140 L-8 -122 M20 -140 L8 -122" stroke={P.navy} strokeWidth={5} strokeLinecap="round" />
    <g transform="translate(0 -56) scale(0.9)"><Coin r={26} /></g>
    {hole && <ellipse cx={20} cy={-8} rx={16} ry={10} fill={P.navy} />}
  </g>
);
const Shop: React.FC = () => (
  <g>
    <rect x={-100} y={-120} width={200} height={120} fill={P.cream} {...L} />
    <path d="M-112 -120 H112 L96 -176 H-96Z" fill={P.coral} {...L} />
    {[-64, -20, 24, 68].map((x) => <path key={x} d={`M${x} -176 L${x - 8} -120`} stroke={P.navy} strokeWidth={4} />)}
    <rect x={-30} y={-74} width={60} height={74} fill={P.blue} {...L} />
    <rect x={44} y={-92} width={42} height={36} fill="#fff" {...L} strokeWidth={4} />
  </g>
);
const Crown: React.FC = () => <path d="M-50 0 L-58 -56 L-26 -28 L0 -72 L26 -28 L58 -56 L50 0Z" fill={P.yellow} {...L} strokeWidth={5} />;
const Tick: React.FC = () => <g><circle r={34} fill={P.mint} {...L} strokeWidth={5} /><path d="M-16 0 L-4 14 L18 -14" fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /></g>;
const Cross: React.FC = () => <g><circle r={34} fill={P.coral} {...L} strokeWidth={5} /><path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /></g>;
const Calendar: React.FC = () => (
  <g>
    <rect x={-90} y={-80} width={180} height={160} rx={14} fill="#fff" {...L} />
    <path d="M-90 -80 H90 V-36 H-90Z" fill={P.coral} {...L} />
    <path d="M-48 -100 V-62 M48 -100 V-62" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
    {[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => <circle key={r * 4 + c} cx={-54 + c * 36} cy={-8 + r * 36} r={7} fill={r === 1 && c === 2 ? P.red : P.navy} opacity={r === 1 && c === 2 ? 1 : 0.4} />))}
  </g>
);
const Clock: React.FC = () => (
  <g><circle r={84} fill="#fff" {...L} />{[0, 90, 180, 270].map((a) => <path key={a} transform={`rotate(${a})`} d="M0 -72 V-58" stroke={P.navy} strokeWidth={6} strokeLinecap="round" />)}<path d="M0 0 V-52" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /><path d="M0 0 L38 20" stroke={P.red} strokeWidth={8} strokeLinecap="round" /><circle r={9} fill={P.navy} /></g>
);
const Tag: React.FC<{w: number; h?: number; fill?: string; children: React.ReactNode; r?: number}> = ({w, h = 76, fill = P.yellow, children, r = 0}) => (
  <g transform={`rotate(${r})`} filter="url(#sh)"><rect x={-w / 2} y={-h / 2} width={w} height={h} rx={14} fill={fill} {...L} strokeWidth={5} />{children}</g>
);
const TT: React.FC<{y?: number; size?: number; fill?: string; w?: number; children: React.ReactNode; font?: string; x?: number}> = ({y = 14, size = 40, fill = P.navy, w = 800, children, font = H, x = 0}) => (
  <text x={x} y={y} textAnchor="middle" fontFamily={font} fontWeight={w} fontSize={size} fill={fill}>{children}</text>
);
const Card: React.FC<{x: number; y: number; w: number; h: number; fill: string; label?: string; r?: number; dash?: boolean; children?: React.ReactNode}> = ({x, y, w, h, fill, label, r = 0, dash, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r} ${w / 2} ${h / 2})`} filter="url(#sh)">
    <rect width={w} height={h} rx={16} fill={fill} {...L} strokeDasharray={dash ? '14 12' : undefined} />
    <rect x={12} y={12} width={w - 24} height={h - 24} rx={10} fill="#fff" opacity={0.78} />
    {label && <text x={w / 2} y={50} textAnchor="middle" fontFamily={HAND} fontSize={30} fill={P.navy} opacity={0.75}>{label}</text>}
    {children}
  </g>
);

const Gauge: React.FC<{t: number; at: number; v: number; c: string; label: string}> = ({t, at, v, c, label}) => (
  <g opacity={cl((t - at) / 0.2)}>
    <TT y={-30} size={40} x={200} w={800}>{label}</TT>
    <rect x={0} y={0} width={400} height={50} rx={25} fill="#fff" {...L} />
    <rect x={5} y={5} width={Math.max(0, 390 * v * A(t, at + 0.1, 0.9))} height={40} rx={20} fill={c} />
  </g>
);

/* ---------- đồ vật dùng riêng cho tập 1992 ---------- */
const Kettle: React.FC<{label?: string}> = ({label = '2026'}) => (
  <g>
    <path d="M-34 -60 C-34 -112 34 -112 34 -60" fill="none" stroke={P.navy} strokeWidth={14} strokeLinecap="round" />
    <path d="M-34 -60 C-34 -112 34 -112 34 -60" fill="none" stroke="#9fb0cc" strokeWidth={5} strokeLinecap="round" />
    <path d="M-78 40 C-86 -30 -48 -64 0 -64 C48 -64 86 -30 78 40 C76 62 -76 62 -78 40Z" fill="#7f8fb0" {...L} />
    <text y={24} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={40} fill="#fff">{label}</text>
  </g>
);
const Sun: React.FC = () => (
  <g>
    {Array.from({length: 10}).map((_, i) => <path key={i} transform={`rotate(${i * 36})`} d="M0 -78 L0 -106" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />)}
    <circle r={62} fill={P.yellow} {...L} /><circle cx={-18} cy={-18} r={12} fill="#fff" opacity={0.7} />
  </g>
);
const Candle: React.FC = () => (
  <g>
    <rect x={-26} y={-20} width={52} height={96} rx={10} fill="#fff" {...L} />
    <path d="M0 -20 V-34" stroke={P.navy} strokeWidth={5} strokeLinecap="round" />
    <path d="M0 -92 C16 -70 24 -56 16 -42 C10 -32 -10 -32 -16 -42 C-24 -58 -8 -70 0 -92Z" fill={P.coral} {...L} strokeWidth={5} />
  </g>
);
const Heart: React.FC<{c?: string}> = ({c = P.coral}) => <path d="M0 16 C-34 -10 -26 -36 -10 -32 C-3 -30 0 -22 0 -22 C0 -22 3 -30 10 -32 C26 -36 34 -10 0 16Z" fill={c} {...L} strokeWidth={4} />;
const Battery: React.FC<{lv: number}> = ({lv}) => (
  <g>
    <rect x={-70} y={-34} width={130} height={68} rx={14} fill="#fff" {...L} /><rect x={60} y={-14} width={16} height={28} rx={5} fill={P.navy} />
    <rect x={-62} y={-26} width={Math.max(8, 114 * lv)} height={52} rx={9} fill={lv < 0.3 ? P.red : P.mint} />
  </g>
);
const Burst: React.FC = () => (
  <g>
    <path d="M0 -120 L26 -44 L104 -64 L52 -2 L118 52 L36 48 L22 124 L-16 56 L-92 94 L-56 22 L-130 -20 L-48 -34 L-62 -108 L-8 -58Z" fill={P.yellow} {...L} />
    <text y={22} textAnchor="middle" fontFamily={CAL} fontSize={84} fill={P.red}>va!</text>
  </g>
);
const Ring: React.FC<{x: number; y: number; w: number; h: number; o: number}> = ({x, y, w, h, o}) => (
  <rect x={x} y={y} width={w} height={h} rx={26} fill="none" stroke={P.red} strokeWidth={7} strokeDasharray={`${(w + h) * 1.9} 60`} opacity={o} />
);
// 1 trụ (Can trên, Chi dưới) lấy chữ Hán + hành từ bảng STEM/BR
const NoteCB: React.FC<{x: number; y: number; w?: number; h?: number; kind: 'can' | 'chi'; name: string; r?: number}> = ({x, y, w = 300, h = 300, kind, name, r = 0}) => {
  const [ch, el] = kind === 'can' ? STEM[name] : BR[name];
  return (
    <Card x={x} y={y} w={w} h={h} fill={EC[el]} label={kind === 'can' ? 'Thiên can' : 'Địa chi'} r={r}>
      <TT x={w / 2} y={h * 0.58} size={h * 0.4} font={CJK} w={700}>{ch}</TT>
      <TT x={w / 2} y={h * 0.79} size={h * 0.145}>{name}</TT>
      <TT x={w / 2} y={h * 0.92} size={h * 0.1} font={HAND} w={400}>{el}</TT>
    </Card>
  );
};
const Lbl: React.FC<{at: number; t: number; x: number; y: number; w: number; fill?: string; r?: number; size?: number; children: React.ReactNode}> = ({at, t, x, y, w, fill = P.yellow, r = 0, size = 38, children}) => (
  <Pop t={t} at={at} x={x} y={y} r={r}><Tag w={w} h={size + 34} fill={fill}><TT size={size} y={size * 0.36}>{children}</TT></Tag></Pop>
);

/* ---------- comment thật (trích từ thread Threads của Sếp; handle bị che bớt) ---------- */
const MASK = true;
const wrap = (s: string, n: number) => {const out: string[] = []; let cur = ''; for (const w of s.split(' ')) {if ((cur + ' ' + w).trim().length > n) {out.push(cur); cur = w;} else cur = (cur + ' ' + w).trim();} if (cur) out.push(cur); return out;};
const COMMENTS = [
  {user: 'dtnquyenn', ago: '3 ngày', likes: 10, hue: P.peach, text: 'T 92 từ giữa năm tới h t thấy nặng người thật sự, tự nhiên cảm thấy lo âu… cứ mệt mệt trong người, mất ngủ, thức khuya, biếng ăn, người ko muốn làm gì hết'},
  {user: 'thanhhoaqinghua', ago: '3 ngày', likes: 6, hue: P.mint, text: '1992+ lo lắng bất an sự nghiệp, tình cảm'},
  {user: 'hanhth3986', ago: '3 ngày', likes: 7, hue: P.sky, text: 'Do năm nay hoả vượng nên mọi thứ cảm giác trì trệ, nặng nề, mệt mỏi. Con người nóng nảy khó chịu hơn.'},
];
const shown = (u: string) => (MASK ? u.slice(0, 4) + '****' : u);
const ccH = (text: string) => 160 + wrap(text, 34).length * 46;
const CC: React.FC<{i: number; w?: number}> = ({i, w = 800}) => {
  const c = COMMENTS[i], lines = wrap(c.text, 34), h = ccH(c.text);
  return (
    <g filter="url(#sh)">
      <rect width={w} height={h} rx={26} fill="#fff" {...L} strokeWidth={5} />
      <circle cx={62} cy={62} r={34} fill={c.hue} {...L} strokeWidth={4} />
      <text x={62} y={74} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy}>{c.user[0].toUpperCase()}</text>
      <text x={116} y={58} fontFamily={H} fontWeight={800} fontSize={36} fill={P.navy}>{shown(c.user)}</text>
      <text x={116 + shown(c.user).length * 20 + 14} y={58} fontFamily={HAND} fontSize={30} fill={P.navy} opacity={0.5}>{c.ago}</text>
      {lines.map((ln, k) => <text key={k} x={116} y={112 + k * 46} fontFamily={HAND} fontSize={38} fill={P.navy}>{ln}</text>)}
      <g transform={`translate(${134} ${h - 44}) scale(0.8)`}><Heart /></g>
      <text x={168} y={h - 32} fontFamily={H} fontWeight={600} fontSize={32} fill={P.navy}>{c.likes}</text>
    </g>
  );
};

/* ---------- cảnh ---------- */
type SP = {t: number};

// 1. HOOK 0–7.83
const S1: React.FC<SP> = ({t}) => {
  const c1 = ccH(COMMENTS[0].text);
  return (
    <g>
      <Page tint={P.sky} />
      <Fade o={A(t, 0.05, 0.4)}><Title note="Nửa cuối năm 2026" text="Sinh 1992" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={3.5} x={110} y={500}><CC i={0} /></Pop>
        <Pop t={t} at={0.5} x={290} y={1500} s={1.5}><Person c={P.blue} mood={t > 4.0 ? 'sad' : 'flat'} /></Pop>
        <g transform={`translate(290 ${1105 + (1 - POP(t, 2.0, 0.6)) * -300})`} opacity={cl((t - 2.0) / 0.15)}><Kettle /></g>
        <Lbl at={4.8} t={t} x={720} y={1200} w={420} fill={P.mint} r={3}>Có lý do</Lbl>
        <Pop t={t} at={6.0} x={730} y={1420} r={-2}>
          <g filter="url(#sh)"><rect x={-130} y={-100} width={260} height={200} rx={16} fill={P.yellow} {...L} /></g>
          <TT y={22} size={92} font={CJK} w={700}>八字</TT><TT y={74} size={30} font={HAND} w={400}>nằm trong lá số</TT>
        </Pop>
        <Star x={900} y={1180} s={A(t, 7.0, 0.4)} />
      </g>
    </g>
  );
};

// 2. NHÂM = NƯỚC LỚN 7.83–13.5
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Fade o={A(t, 7.9, 0.4)}><Title note="Người sinh 1992 · Nhâm Thân" text="Can Nhâm" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={8.2} x={0} y={0}>
        <NoteCB x={110} y={470} kind="can" name="Nhâm" r={-1.5} /><NoteCB x={110} y={800} kind="chi" name="Thân" r={1.2} />
      </Pop>
      <Ring x={96} y={456} w={328} h={328} o={A(t, 10.3, 0.3)} />
      <Pop t={t} at={11.4} x={690} y={720} s={1.9}><Doodle el="Thủy" /></Pop>
      <path d="M520 960 q40 -26 80 0 t80 0 t80 0 t80 0" stroke={P.blue} strokeWidth={10} fill="none" strokeLinecap="round" opacity={A(t, 12.0, 0.4)} />
      <Lbl at={12.2} t={t} x={690} y={1070} w={420} fill={EC['Thủy']} r={-2} size={44}>nước lớn</Lbl>
      <Lbl at={9.0} t={t} x={690} y={560} w={420} fill="#fff" r={2} size={34}>sinh 1992 = Nhâm Thân</Lbl>
      <Pop t={t} at={12.4} x={540} y={1330} r={-1}><Tag w={780} h={90} fill={P.yellow}><TT size={30} font={HAND} w={400} y={-6}>Sinh trước Lập xuân (đầu tháng 2)</TT><TT size={30} font={HAND} w={400} y={30}>thì tính theo năm trước</TT></Tag></Pop>
    </g>
  </g>
);

// 3. 2026 BÍNH NGỌ 13.5–19.66
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Fade o={A(t, 13.55, 0.4)}><Title note="Năm 2026" text="Bính Ngọ" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={13.8} x={0} y={0}>
        <NoteCB x={110} y={470} kind="can" name="Bính" r={1.5} /><NoteCB x={110} y={800} kind="chi" name="Ngọ" r={-1.2} />
      </Pop>
      <Ring x={96} y={456} w={328} h={328} o={A(t, 16.15, 0.3) * (1 - A(t, 17.9, 0.2))} />
      <Ring x={96} y={786} w={328} h={328} o={A(t, 17.96, 0.3)} />
      <Pop t={t} at={16.3} x={700} y={640} s={1.5}><Sun /></Pop>
      <Lbl at={16.9} t={t} x={700} y={840} w={470} fill={P.yellow} r={-2} size={38}>Bính = lửa mặt trời</Lbl>
      <Pop t={t} at={18.0} x={700} y={1010} s={1.6}><Doodle el="Hỏa" /></Pop>
      <Lbl at={18.6} t={t} x={700} y={1190} w={470} fill={EC['Hỏa']} r={2} size={38}>Ngọ cũng là lửa</Lbl>
      <Pop t={t} at={19.0} x={400} y={1420}><Tag w={720} h={84} fill="#fff"><TT size={40} y={14}>lửa gặp lửa = nóng hơn</TT></Tag></Pop>
    </g>
  </g>
);

// 4. NƯỚC ĐỐI LỬA 19.66–26.05
const S4: React.FC<SP> = ({t}) => {
  const k = A(t, 20.6, 0.9), near = lerp(0, 1, k) * (t < 23.2 ? 1 : 0.9);
  const lx = lerp(250, 400, near), rx = lerp(830, 680, near);
  const shake = t > 23.3 && t < 24.2 ? Math.sin(t * 90) * 6 : 0;
  return (
    <g>
      <Page tint={P.peach} />
      <Fade o={A(t, 19.7, 0.4)}><Title note="Nước lớn gặp lửa lớn" text="Đối nhau" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={19.9} x={lx + shake} y={760}><circle r={120} fill={EC['Thủy']} {...L} /><g transform="scale(1.3)"><Doodle el="Thủy" /></g><TT y={170} size={44}>Nhâm <tspan fontFamily={CJK} fontSize={40}>壬</tspan></TT></Pop>
        <Pop t={t} at={20.2} x={rx - shake} y={760}><circle r={120} fill={EC['Hỏa']} {...L} /><g transform="scale(1.3)"><Doodle el="Hỏa" /></g><TT y={170} size={44}>Bính <tspan fontFamily={CJK} fontSize={40}>丙</tspan></TT></Pop>
        <Pop t={t} at={23.3} x={540} y={720} s={1.05}><Burst /></Pop>
        <Pop t={t} at={22.1} x={540} y={1010}><Tag w={500} h={72} fill="#fff"><TT size={38} y={13}>hai bên đối nhau</TT></Tag></Pop>
        <Pop t={t} at={24.3} x={250} y={1500} s={1.1}><Person c={P.blue} mood="sad" /></Pop>
        <g transform="translate(470 1330)"><Gauge t={t} at={24.3} v={0.88} c={P.coral} label="Áp lực" /></g>
        <Pop t={t} at={25.4} x={820} y={1470}><Battery lv={0.14} /></Pop>
        <Lbl at={25.5} t={t} x={780} y={1560} w={300} fill={P.coral} r={2} size={34}>dễ mệt hơn</Lbl>
      </g>
    </g>
  );
};

// 5. 2027 ĐINH MÙI + HỢP 26.05–33.48
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Fade o={A(t, 26.1, 0.4)}><Title note="Sang năm 2027" text="Đinh Mùi" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={26.6} x={0} y={0}>
        <NoteCB x={110} y={470} kind="can" name="Đinh" r={-1.5} /><NoteCB x={110} y={800} kind="chi" name="Mùi" r={1.2} />
      </Pop>
      <Ring x={96} y={456} w={328} h={328} o={A(t, 29.7, 0.3)} />
      <Pop t={t} at={30.2} x={700} y={640} s={1.5}><Candle /></Pop>
      <Lbl at={30.9} t={t} x={700} y={790} w={440} fill={EC['Hỏa']} r={2} size={38}>Đinh = lửa nhỏ</Lbl>
      <Pop t={t} at={31.3} x={250} y={1300}><NoteCB x={-110} y={-130} w={220} h={230} kind="can" name="Nhâm" /></Pop>
      <Pop t={t} at={31.9} x={830} y={1300}><NoteCB x={-110} y={-130} w={220} h={230} kind="can" name="Đinh" /></Pop>
      <g opacity={A(t, 32.5, 0.3)}>
        <ellipse cx={500} cy={1290} rx={60} ry={42} fill="none" stroke={P.navy} strokeWidth={11} /><ellipse cx={580} cy={1290} rx={60} ry={42} fill="none" stroke={P.navy} strokeWidth={11} />
      </g>
      <Pop t={t} at={32.6} x={540} y={1410}><Tag w={300} h={76} fill={P.mint}><TT size={42} y={14} fill={P.red}>HỢP</TT></Tag></Pop>
    </g>
  </g>
);

// 6. NĂM SAU DỊU HƠN 33.48–37.16
const S6: React.FC<SP> = ({t}) => {
  const k = A(t, 33.6, 1.5);
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const u = i / 60; if (u > k) break;
    const amp = 190 * (1 - u * 0.86);
    pts.push(`${i ? 'L' : 'M'}${100 + u * 880} ${860 + Math.sin(u * 17) * amp}`);
  }
  return (
    <g>
      <Page tint={P.mint} />
      <Fade o={A(t, 33.55, 0.4)}><Title note="Nhịp năm sau" text="Dịu hơn" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        {pts.length > 1 && <path d={pts.join(' ')} fill="none" stroke={P.blue} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />}
        <path d="M100 860 H980" stroke={P.navy} strokeWidth={3} strokeDasharray="4 16" strokeLinecap="round" opacity={0.4} />
        {[{y: 1130, at: 35.4, tx: 'việc dang dở'}, {y: 1260, at: 35.8, tx: 'việc dang dở'}, {y: 1390, at: 36.2, tx: 'việc dang dở'}].map((o, i) => (
          <Pop key={i} t={t} at={o.at} x={0} y={0}>
            <g transform={`translate(${190 + (i % 2) * 40} ${o.y})`}><rect x={-60} y={-44} width={560} height={88} rx={16} fill="#fff" {...L} strokeWidth={5} /><TT x={220} y={14} size={40} font={HAND} w={400}>{o.tx}</TT></g>
            <g transform={`translate(${830 + (i % 2) * 40} ${o.y})`} opacity={A(t, o.at + 0.5, 0.3)}><Tick /></g>
          </Pop>
        ))}
        <Lbl at={36.4} t={t} x={540} y={1530} w={520} fill={P.yellow} r={-2} size={42}>dễ ổn định lại</Lbl>
      </g>
    </g>
  );
};

// 7. 1/4 TRỤ 37.16–42.65
const S7: React.FC<SP> = ({t}) => {
  const hl = A(t, 39.55, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Fade o={A(t, 37.2, 0.4)}><Title note="Lá số bát tự có" text="4 trụ" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        {PILLARS.map((n, i) => {
          const x = 80 + i * 234, year = i === 0, op = year ? 1 : 1 - 0.45 * hl;
          return (
            <Pop key={n} t={t} at={37.5 + i * 0.2} x={0} y={0}>
              <g opacity={op}>
                <g transform={`translate(${x} 470) rotate(${i % 2 ? 1.5 : -1.5} 107 30)`}><rect width={214} height={60} rx={30} fill={P.navy} /><TT x={107} y={44} size={36} fill="#fff">{n}</TT></g>
                {year ? <>
                  <NoteCB x={x} y={560} w={214} h={260} kind="can" name="Nhâm" /><NoteCB x={x} y={850} w={214} h={260} kind="chi" name="Thân" />
                </> : <>
                  <Card x={x} y={560} w={214} h={260} fill={P.cream} label="Thiên can" dash><TT x={107} y={190} size={110}>?</TT></Card>
                  <Card x={x} y={850} w={214} h={260} fill={P.cream} label="Địa chi" dash><TT x={107} y={190} size={110}>?</TT></Card>
                </>}
              </g>
            </Pop>
          );
        })}
        <rect x={68} y={450} width={238} height={680} rx={30} fill="none" stroke={P.red} strokeWidth={7} strokeDasharray="1500 60" opacity={hl} />
        <Lbl at={40.0} t={t} x={540} y={1230} w={760} fill={P.yellow} r={-1} size={40}>năm 1992 mới là 1/4 lá số</Lbl>
        <Pop t={t} at={41.7} x={540} y={1370} r={1}><Tag w={620} h={80} fill="#fff"><TT size={38} y={13}>chưa phải tất cả</TT></Tag></Pop>
        <Pop t={t} at={41.9} x={850} y={1370}><Cross /></Pop>
      </g>
    </g>
  );
};

// 8. NHẬT CHỦ MẠNH / YẾU 42.65–51.08
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Fade o={A(t, 42.7, 0.4)}><Title note="Quan trọng là bản thân bạn" text="Nhật chủ" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={43.2} x={190} y={830} s={0.95}><Person c={P.blue} /><g transform="translate(0 56)"><rect x={-60} y={-28} width={120} height={52} rx={26} fill={P.red} /><TT size={32} fill="#fff" y={9}>BẠN</TT></g></Pop>
      <path d="M300 740 Q380 700 450 700" fill="none" stroke={P.red} strokeWidth={6} strokeLinecap="round" markerEnd="url(#aR)" opacity={A(t, 44.3, 0.3)} />
      <Pop t={t} at={44.35} x={690} y={720} r={-2}>
        <g filter="url(#sh)"><rect x={-210} y={-130} width={420} height={260} rx={20} fill={P.yellow} {...L} /></g>
        <TT y={22} size={104} font={CJK} w={700}>日主</TT><TT y={86} size={44} fill={P.red}>Nhật chủ</TT>
      </Pop>
      <g transform="translate(70 1030)"><Gauge t={t} at={45.4} v={0.9} c={P.mint} label="Mạnh" /></g>
      <g transform="translate(540 1030)"><Gauge t={t} at={45.7} v={0.2} c={P.coral} label="Yếu" /></g>
      <Pop t={t} at={46.4} x={270} y={1500} s={1.1}><Person c={P.mint} mood="smile" /></Pop>
      <g transform={`translate(270 ${1260 + (1 - POP(t, 46.7, 0.5)) * -200})`} opacity={cl((t - 46.7) / 0.15)}><g transform="scale(0.62)"><Kettle /></g></g>
      <Pop t={t} at={47.8} x={420} y={1400}><Tick /></Pop>
      <Lbl at={47.7} t={t} x={270} y={1555} w={420} fill={P.mint} r={-2} size={32}>chịu được áp lực</Lbl>
      <Pop t={t} at={48.4} x={770} y={1500} s={1.1}><g transform={`scale(1 ${1 - 0.1 * A(t, 49.0, 0.5)}) translate(0 ${A(t, 49.0, 0.5) * 18})`}><Person c={P.coral} mood="sad" /></g></Pop>
      <g transform={`translate(770 ${1215 + (1 - POP(t, 48.7, 0.5)) * -200 + A(t, 49.0, 0.5) * 36})`} opacity={cl((t - 48.7) / 0.15)}><g transform="scale(1.0)"><Kettle /></g></g>
      <Pop t={t} at={50.0} x={930} y={1330}><Cross /></Pop>
      <Lbl at={50.0} t={t} x={770} y={1555} w={420} fill={P.coral} r={2} size={32}>nặng hơn hẳn</Lbl>
    </g>
  </g>
);

// 9. COMMENT THẬT: MỖI NGƯỜI MỘT CẢM NHẬN 51.08–55.22
const S9: React.FC<SP> = ({t}) => {
  const h1 = ccH(COMMENTS[1].text);
  return (
    <g>
      <Page tint={P.mint} />
      <Fade o={A(t, 51.1, 0.4)}><Title note="Cùng sinh 1992" text="Mỗi người khác" y={340} size={112} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={51.5} x={110} y={520} r={-1}><CC i={1} /></Pop>
        <Pop t={t} at={52.9} x={110} y={520 + h1 + 40} r={1}><CC i={2} /></Pop>
        <Lbl at={54.5} t={t} x={540} y={1470} w={760} fill={P.yellow} r={-2} size={40}>mỗi người một cảm nhận</Lbl>
        <Star x={930} y={470} s={A(t, 54.6, 0.4)} />
      </g>
    </g>
  );
};

// 10. CTA COMMENT 55.22–61
const S10: React.FC<SP> = ({t}) => {
  const full = 'ngày / tháng / năm sinh · giờ sinh';
  const n = Math.floor(cl((t - 57.6) / 1.6) * full.length);
  const blink = Math.floor(t * 2.2) % 2 === 0;
  return (
    <g>
      <Page tint={P.peach} />
      <Fade o={A(t, 55.3, 0.4)}><Title note="Nhật chủ mạnh hay yếu?" text="Comment ngay" y={340} size={130} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={55.6} x={540} y={700}><g filter="url(#sh)"><rect x={-300} y={-110} width={600} height={220} rx={20} fill={P.yellow} {...L} /></g><TT y={22} size={104} font={CJK} w={700}>日主</TT><TT y={80} size={36}>mạnh hay yếu?</TT></Pop>
        <Pop t={t} at={57.5} x={250} y={1010}><Card x={-110} y={-130} w={220} h={260} fill={P.sky} r={-2}><g transform="translate(110 125) scale(0.9)"><Calendar /></g><TT x={110} y={232} size={40}>Ngày</TT></Card></Pop>
        <Pop t={t} at={57.9} x={540} y={1010}><Card x={-110} y={-130} w={220} h={260} fill={P.sky} r={2}><g transform="translate(110 125) scale(0.9)"><Clock /></g><TT x={110} y={232} size={40}>Giờ</TT></Card></Pop>
        <Pop t={t} at={58.6} x={830} y={1010}><Card x={-110} y={-130} w={220} h={260} fill={P.mint} r={-1}><TT x={110} y={150} size={120}>✓</TT><TT x={110} y={232} size={36}>đầy đủ</TT></Card></Pop>
        <g opacity={A(t, 57.4, 0.4)} transform="translate(540 1290)">
          <rect x={-440} y={-52} width={880} height={104} rx={52} fill="#fff" {...L} strokeWidth={5} />
          <circle cx={-380} cy={0} r={28} fill={P.peach} {...L} strokeWidth={4} />
          <text x={-330} y={14} fontFamily={HAND} fontSize={40} fill={P.navy}>{full.slice(0, n)}{blink && n < full.length + 1 ? '|' : ''}</text>
        </g>
        <Lbl at={59.5} t={t} x={540} y={1450} w={640} fill={P.mint} r={-1} size={42}>mình xem giúp bạn</Lbl>
        <g opacity={A(t, 58.7, 0.3)} transform={`translate(540 ${1520 + 12 * Math.sin((t - 58.7) * 6)})`}>
          <path d="M0 0 V50" stroke={P.red} strokeWidth={12} strokeLinecap="round" /><path d="M-30 26 L0 62 L30 26" fill="none" stroke={P.red} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  );
};

const PILLARS = ['Năm', 'Tháng', 'Ngày', 'Giờ'];
type Sc = {s: number; e: number; C: React.FC<SP>};
const SCENES: Sc[] = [
  {s: 0, e: 7.83, C: S1}, {s: 7.83, e: 13.5, C: S2}, {s: 13.5, e: 19.66, C: S3}, {s: 19.66, e: 26.05, C: S4}, {s: 26.05, e: 33.48, C: S5},
  {s: 33.48, e: 37.16, C: S6}, {s: 37.16, e: 42.65, C: S7}, {s: 42.65, e: 51.08, C: S8}, {s: 51.08, e: 55.22, C: S9}, {s: 55.22, e: 61.1, C: S10},
];

// Phụ đề: pill tâm (480,1585), rộng tối đa 800 (lệch trái né cột icon TikTok bên phải)
const Caption: React.FC<{t: number}> = ({t}) => {
  const ph = cap.phrases as {text: string; s: number; e: number}[];
  let cur: {text: string; s: number; e: number} | null = null;
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

export const Bazi1992: React.FC = () => {
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
      <Audio src={staticFile('s1992.mp3')} />
      <svg width={1080} height={1920} viewBox="0 0 1080 1920">
        <defs>
          <filter id="wob" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed={seed} result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="5" /></filter>
          <filter id="sh" x="-10%" y="-10%" width="130%" height="130%"><feDropShadow dx="6" dy="9" stdDeviation="5" floodColor="#1f2f5c" floodOpacity="0.18" /></filter>
          <marker id="aN" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto"><path d="M2 2 L11 7 L2 12" fill="none" stroke={P.navy} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></marker>
          <marker id="aR" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto"><path d="M2 2 L11 7 L2 12" fill="none" stroke={P.red} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></marker>
        </defs>
        {SCENES.map((sc, i) => {
          if (t < sc.s - 0.01 || t > sc.e + 0.55) return null;
          const nxt = SCENES[i + 1];
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
        <Caption t={t} />
      </svg>
    </AbsoluteFill>
  );
};
