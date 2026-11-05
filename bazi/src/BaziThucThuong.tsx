import React from 'react';
import {AbsoluteFill, Audio, Easing, continueRender, delayRender, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {P, CAL, H, HAND, CJK, L, EC, Page, Star, Title, Doodle, SAFE, SafeCtx} from './BaziHand';
import cap from './capTT.json';

// ====== Tập Thực Thương: nói thẳng, nhiều ý tưởng · 7 cảnh ======
// Mốc thời gian: src/capTT.json (tools/align_dp.py). Hình minh hoạ khái niệm, không phải lá số thật.
export const TT_TOTAL = 1040; // ceil((34.25 + 0.4) * 30)
const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const A = (t: number, at: number, d = 0.4) => Easing.out(Easing.cubic)(cl((t - at) / d));
const POP = (t: number, at: number, d = 0.5) => Easing.out(Easing.back(1.8))(cl((t - at) / d));

const Pop: React.FC<{t: number; at: number; x: number; y: number; r?: number; s?: number; children: React.ReactNode}> = ({t, at, x, y, r = 0, s = 1, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${Math.max(0.0001, s * POP(t, at))})`} opacity={cl((t - at) / 0.15)}>{children}</g>
);
const Fade: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => <g opacity={o}>{children}</g>;
const TT: React.FC<{y?: number; size?: number; fill?: string; w?: number; children: React.ReactNode; font?: string; x?: number; anchor?: 'middle' | 'start'}> = ({y = 14, size = 40, fill = P.navy, w = 800, children, font = H, x = 0, anchor = 'middle'}) => (
  <text x={x} y={y} textAnchor={anchor} fontFamily={font} fontWeight={w} fontSize={size} fill={fill}>{children}</text>
);
const Tag: React.FC<{w: number; h?: number; fill?: string; children: React.ReactNode; r?: number}> = ({w, h = 76, fill = P.yellow, children, r = 0}) => (
  <g transform={`rotate(${r})`} filter="url(#sh)"><rect x={-w / 2} y={-h / 2} width={w} height={h} rx={14} fill={fill} {...L} strokeWidth={5} />{children}</g>
);
const Lbl: React.FC<{at: number; t: number; x: number; y: number; w: number; fill?: string; r?: number; size?: number; children: React.ReactNode}> = ({at, t, x, y, w, fill = P.yellow, r = 0, size = 38, children}) => (
  <Pop t={t} at={at} x={x} y={y} r={r}><Tag w={w} h={size + 34} fill={fill}><TT size={size} y={size * 0.36}>{children}</TT></Tag></Pop>
);

/* ---------- icon vẽ tay ---------- */
const Person: React.FC<{c?: string; mood?: 'smile' | 'flat' | 'sad' | 'talk'}> = ({c = P.blue, mood = 'smile'}) => (
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
const Bulb: React.FC<{on?: boolean}> = ({on = true}) => (
  <g>
    {on && Array.from({length: 7}).map((_, i) => <path key={i} transform={`rotate(${-90 + (i - 3) * 30})`} d="M0 -70 L0 -92" stroke={P.navy} strokeWidth={6} strokeLinecap="round" />)}
    <path d="M0 -58 C34 -58 50 -32 46 -8 C42 14 24 22 22 40 H-22 C-24 22 -42 14 -46 -8 C-50 -32 -34 -58 0 -58Z" fill={on ? P.yellow : '#fff'} {...L} strokeWidth={5} />
    <rect x={-22} y={40} width={44} height={26} rx={6} fill={P.silver} {...L} strokeWidth={4} />
    <path d="M-12 -2 Q0 14 12 -2" fill="none" stroke={P.orange} strokeWidth={4} strokeLinecap="round" />
  </g>
);
const Bubble: React.FC<{w: number; h: number; fill?: string; tail?: 'left' | 'right'; children?: React.ReactNode}> = ({w, h, fill = '#fff', tail = 'left', children}) => (
  <g filter="url(#sh)">
    <path d={tail === 'left' ? `M${-w / 2 + 50} ${h / 2 - 4} L${-w / 2 + 20} ${h / 2 + 46} L${-w / 2 + 110} ${h / 2 - 4}` : `M${w / 2 - 50} ${h / 2 - 4} L${w / 2 - 20} ${h / 2 + 46} L${w / 2 - 110} ${h / 2 - 4}`} fill={fill} {...L} strokeWidth={5} />
    <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={32} fill={fill} {...L} strokeWidth={5} />
    <rect x={tail === 'left' ? -w / 2 + 44 : w / 2 - 116} y={h / 2 - 10} width={72} height={14} fill={fill} />
    {children}
  </g>
);
const Dots: React.FC<{t: number}> = ({t}) => <g>{[-40, 0, 40].map((x, i) => <circle key={x} cx={x} cy={-4 * Math.max(0, Math.sin(t * 6 - i))} r={11} fill={P.navy} />)}</g>;
const Faucet: React.FC = () => (
  <g>
    <rect x={-150} y={-40} width={70} height={80} rx={10} fill={P.silver} {...L} />
    <path d="M-80 -24 H40 C80 -24 96 0 96 40 V60 H52 V44 C52 26 44 20 30 20 H-80Z" fill={P.silver} {...L} />
    <rect x={-30} y={-62} width={50} height={40} rx={8} fill={P.silver} {...L} strokeWidth={5} />
    <rect x={-70} y={-78} width={130} height={22} rx={11} fill={P.coral} {...L} strokeWidth={5} />
    <rect x={44} y={56} width={60} height={18} rx={6} fill={P.silver} {...L} strokeWidth={5} />
  </g>
);
const Gear: React.FC<{r?: number; c?: string; rot?: number}> = ({r = 90, c = P.mint, rot = 0}) => (
  <g transform={`rotate(${rot})`}>
    {Array.from({length: 8}).map((_, i) => <rect key={i} transform={`rotate(${i * 45})`} x={-r * 0.18} y={-r * 1.18} width={r * 0.36} height={r * 0.4} rx={6} fill={c} {...L} strokeWidth={5} />)}
    <circle r={r} fill={c} {...L} /><circle r={r * 0.36} fill="#fff" {...L} strokeWidth={5} />
  </g>
);
const Crown: React.FC = () => <path d="M-60 0 L-70 -66 L-30 -32 L0 -84 L30 -32 L70 -66 L60 0Z" fill={P.yellow} {...L} strokeWidth={6} />;
const Briefcase: React.FC = () => (
  <g>
    <path d="M-36 -70 V-92 H36 V-70" fill="none" stroke={P.navy} strokeWidth={9} strokeLinejoin="round" />
    <rect x={-110} y={-70} width={220} height={150} rx={18} fill={P.orange} {...L} />
    <path d="M-110 -6 H110" stroke={P.navy} strokeWidth={5} /><rect x={-18} y={-20} width={36} height={28} rx={6} fill={P.yellow} {...L} strokeWidth={4} />
  </g>
);
const Burst: React.FC<{txt?: string}> = ({txt = 'va!'}) => (
  <g>
    <path d="M0 -120 L26 -44 L104 -64 L52 -2 L118 52 L36 48 L22 124 L-16 56 L-92 94 L-56 22 L-130 -20 L-48 -34 L-62 -108 L-8 -58Z" fill={P.yellow} {...L} />
    <text y={22} textAnchor="middle" fontFamily={CAL} fontSize={84} fill={P.red}>{txt}</text>
  </g>
);
const Tick: React.FC = () => <g><circle r={34} fill={P.mint} {...L} strokeWidth={5} /><path d="M-16 0 L-4 14 L18 -14" fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /></g>;
const Cross: React.FC = () => <g><circle r={34} fill={P.coral} {...L} strokeWidth={5} /><path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /></g>;
const Card: React.FC<{x: number; y: number; w: number; h: number; fill: string; label?: string; r?: number; children?: React.ReactNode}> = ({x, y, w, h, fill, label, r = 0, children}) => (
  <g transform={`translate(${x} ${y}) rotate(${r} ${w / 2} ${h / 2})`} filter="url(#sh)">
    <rect width={w} height={h} rx={16} fill={fill} {...L} />
    <rect x={12} y={12} width={w - 24} height={h - 24} rx={10} fill="#fff" opacity={0.78} />
    {label && <text x={w / 2} y={50} textAnchor="middle" fontFamily={HAND} fontSize={30} fill={P.navy} opacity={0.75}>{label}</text>}
    {children}
  </g>
);

/* ---------- cảnh ---------- */
type SP = {t: number};

// 1. HOOK 0–7.19
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Fade o={A(t, 0.05, 0.4)}><Title note="Ai hay có ý tưởng" text="Nói thẳng" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={0.3} x={280} y={1180} s={1.5}><Person c={P.coral} mood={t < 4.0 ? 'talk' : 'flat'} /></Pop>
      {[{x: 160, y: 640, at: 1.6}, {x: 300, y: 560, at: 2.2}, {x: 440, y: 650, at: 2.8}].map((b, i) => <Pop key={i} t={t} at={b.at} x={b.x} y={b.y} s={0.85} r={(i - 1) * 10}><Bulb /></Pop>)}
      <Pop t={t} at={4.0} x={720} y={820}><Bubble w={340} h={150} tail="left"><Dots t={t} /></Bubble></Pop>
      {[640, 840].map((x, i) => <Pop key={x} t={t} at={5.4 + i * 0.3} x={x} y={1340} s={1.05}><Person c={i ? P.mint : P.blue} mood="flat" /></Pop>)}
      <Lbl at={6.2} t={t} x={740} y={1460} w={380} fill="#fff" r={2} size={40}>im im…</Lbl>
      <Star x={920} y={560} s={A(t, 2.8, 0.4)} />
    </g>
  </g>
);

// 2. THỰC THƯƠNG 7.19–13.87
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Fade o={A(t, 7.25, 0.4)}><Title note="Trong bát tự · nhóm" text="Thực Thương" y={340} size={140} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={8.3} x={0} y={0}>
        <Card x={130} y={480} w={330} h={300} fill={P.yellow} label="Thực Thần" r={-1.5}><TT x={165} y={200} size={120} font={CJK} w={700}>食神</TT></Card>
      </Pop>
      <Pop t={t} at={8.7} x={0} y={0}>
        <Card x={540} y={480} w={330} h={300} fill={P.coral} label="Thương Quan" r={1.5}><TT x={165} y={200} size={120} font={CJK} w={700}>傷官</TT></Card>
      </Pop>
      <Pop t={t} at={9.3} x={500} y={860}><Tag w={700} h={70} fill="#fff"><TT size={32} font={HAND} w={400} y={11}>hành do nhật chủ sinh ra</TT></Tag></Pop>
      <Lbl at={9.95} t={t} x={330} y={1030} w={420} fill={P.mint} r={-2} size={44}>biểu đạt</Lbl>
      <Lbl at={11.6} t={t} x={700} y={1170} w={400} fill={P.blue} r={2} size={44}>sáng tạo</Lbl>
      <Lbl at={12.45} t={t} x={500} y={1330} w={760} fill={P.yellow} r={-1} size={42}>nói ra điều mình nghĩ</Lbl>
    </g>
  </g>
);

// 3. VÒI NƯỚC 13.87–17.21
const S3: React.FC<SP> = ({t}) => {
  const flow = A(t, 15.4, 0.6);
  return (
    <g>
      <Page tint={P.mint} />
      <Fade o={A(t, 13.95, 0.4)}><Title note="Giống như" text="Vòi nước" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={14.1} x={430} y={620} s={1.6}><Faucet /></Pop>
        <Pop t={t} at={14.6} x={230} y={560} s={0.8}><Bulb /></Pop>
        <path d="M330 560 Q300 600 340 640" fill="none" stroke={P.navy} strokeWidth={5} strokeLinecap="round" opacity={A(t, 14.8, 0.3)} />
        {flow > 0.01 && <rect x={512} y={740} width={56} height={560 * flow} rx={26} fill={EC['Thủy']} {...L} strokeWidth={5} />}
        {[0, 1, 2, 3].map((i) => {
          const ph = ((t - 15.4) * 1.6 + i / 4) % 1;
          return flow > 0.9 ? <circle key={i} cx={540 + (i % 2 ? 22 : -22)} cy={800 + ph * 480} r={8} fill="#fff" opacity={0.8} /> : null;
        })}
        <Pop t={t} at={15.9} x={540} y={1330} s={1.3}><Doodle el="Thủy" /></Pop>
        <Lbl at={15.6} t={t} x={300} y={1180} w={420} fill="#fff" r={-3} size={38}>nghĩ gì…</Lbl>
        <Lbl at={16.4} t={t} x={680} y={1450} w={440} fill={P.yellow} r={2} size={38}>…chảy ra liền</Lbl>
      </g>
    </g>
  );
};

// 4. ĐI LÀM 17.21–22.23
const S4: React.FC<SP> = ({t}) => {
  const shake = t > 20.9 && t < 21.7 ? Math.sin(t * 90) * 6 : 0;
  return (
    <g>
      <Page tint={P.sky} />
      <Fade o={A(t, 17.3, 0.4)}><Title note="Nên đi làm hay bị bảo" text="Thẳng quá" y={340} size={150} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={17.5} x={260} y={1150} s={1.3}><Person c={P.coral} mood="talk" /></Pop>
        <Pop t={t} at={17.7} x={760} y={1150} s={1.3}><Person c={P.silver} mood="flat" /></Pop>
        <Pop t={t} at={17.9} x={760} y={1250} s={0.55}><Briefcase /></Pop>
        <Pop t={t} at={18.2} x={640} y={640}><Bubble w={520} h={150} fill={P.yellow} tail="right"><TT size={42} y={14}>“sao nói thẳng quá?”</TT></Bubble></Pop>
        {[0, 1, 2, 3].map((i) => <Pop key={i} t={t} at={19.6 + i * 0.25} x={120 + i * 95} y={790 - (i % 2) * 50} s={0.55}><Bulb /></Pop>)}
        <Pop t={t} at={20.9} x={510 + shake} y={1000} s={0.85}><Burst /></Pop>
        <Lbl at={21.0} t={t} x={510} y={1360} w={420} fill={P.coral} r={-2} size={42}>dễ va chạm</Lbl>
      </g>
    </g>
  );
};

// 5. TÀI NĂNG 22.23–24.37
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Fade o={A(t, 22.3, 0.4)}><Title note="Nhưng đó cũng là" text="Tài năng" y={340} size={150} /></Fade>
    <g filter="url(#wob)">
      <Pop t={t} at={22.5} x={500} y={1260} s={1.8}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={23.2} x={500} y={890} s={1.3}><Crown /></Pop>
      <Pop t={t} at={22.9} x={760} y={720} s={0.9}><Bulb /></Pop>
      <Star x={240} y={700} s={A(t, 23.4, 0.4) * 1.3} /><Star x={820} y={1040} s={A(t, 23.6, 0.4)} />
      <Lbl at={23.5} t={t} x={500} y={1400} w={540} fill={P.yellow} r={-2} size={44}>của chính mình</Lbl>
    </g>
  </g>
);

// 6. KHÔNG PHẢI SỐ PHẬN 24.37–29.73
const S6: React.FC<SP> = ({t}) => {
  const strike = A(t, 25.6, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Fade o={A(t, 24.45, 0.4)}><Title note="Lá số là" text="Cách vận hành" y={340} size={120} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={24.7} x={500} y={620} r={-2}><Tag w={640} h={110} fill="#fff"><TT size={50} y={18}>số phận cố định</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M190 640 L${190 + 620 * strike} 600`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={26.4} x={840} y={600}><Cross /></Pop>
        <Pop t={t} at={27.3} x={380} y={1030}><Gear r={120} c={P.mint} rot={(t - 27.3) * 40} /></Pop>
        <Pop t={t} at={27.6} x={620} y={1170}><Gear r={80} c={P.yellow} rot={-(t - 27.6) * 60 + 22} /></Pop>
        <Lbl at={28.4} t={t} x={500} y={1420} w={680} fill={P.yellow} r={-1} size={42}>cách mình đang vận hành</Lbl>
        <Pop t={t} at={28.8} x={850} y={1290}><Tick /></Pop>
      </g>
    </g>
  );
};

// 7. CTA 29.73–hết
const S7: React.FC<SP> = ({t}) => {
  const full = 'Mình hay nói thẳng lắm…';
  const n = Math.floor(cl((t - 31.9) / 1.6) * full.length);
  const blink = Math.floor(t * 2.2) % 2 === 0;
  return (
    <g>
      <Page tint={P.peach} />
      <Fade o={A(t, 29.8, 0.4)}><Title note="Bạn có hay nói thẳng?" text="Kể mình nghe" y={340} size={130} /></Fade>
      <g filter="url(#wob)">
        <Pop t={t} at={30.1} x={300} y={760}><Card x={-150} y={-160} w={300} h={300} fill={P.mint} r={-2}><g transform="translate(150 140)"><Tick /></g><TT x={150} y={240} size={54}>Có</TT></Card></Pop>
        <Pop t={t} at={30.5} x={700} y={760}><Card x={-150} y={-160} w={300} h={300} fill={P.coral} r={2}><g transform="translate(150 140)"><Cross /></g><TT x={150} y={240} size={54}>Không</TT></Card></Pop>
        <g opacity={A(t, 31.8, 0.4)} transform="translate(500 1110)">
          <rect x={-430} y={-52} width={860} height={104} rx={52} fill="#fff" {...L} strokeWidth={5} />
          <circle cx={-370} cy={0} r={28} fill={P.peach} {...L} strokeWidth={4} />
          <text x={-320} y={14} fontFamily={HAND} fontSize={42} fill={P.navy}>{full.slice(0, n)}{blink ? '|' : ''}</text>
        </g>
        <Lbl at={32.6} t={t} x={500} y={1290} w={560} fill={P.yellow} r={-1} size={42}>1 comment nhé</Lbl>
        <g opacity={A(t, 33.0, 0.3)} transform={`translate(500 ${1380 + 12 * Math.sin((t - 33.0) * 6)})`}>
          <path d="M0 0 V50" stroke={P.red} strokeWidth={12} strokeLinecap="round" /><path d="M-30 26 L0 62 L30 26" fill="none" stroke={P.red} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  );
};

type Sc = {s: number; e: number; C: React.FC<SP>};
const SCENES: Sc[] = [
  {s: 0, e: 7.19, C: S1}, {s: 7.19, e: 13.87, C: S2}, {s: 13.87, e: 17.21, C: S3}, {s: 17.21, e: 22.23, C: S4},
  {s: 22.23, e: 24.37, C: S5}, {s: 24.37, e: 29.73, C: S6}, {s: 29.73, e: 34.7, C: S7},
];

// Phụ đề: pill tâm (480,1585), rộng tối đa 800 (né cột icon TikTok bên phải)
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

export const BaziThucThuong: React.FC<{guide?: boolean}> = ({guide = false}) => {
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
      <Audio src={staticFile('thucthuong.mp3')} />
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
        {guide && <g fill={P.red} opacity={0.3}><rect width={1080} height={260} /><rect y={1700} width={1080} height={220} /><rect x={880} y={1090} width={200} height={830} /></g>}
      </svg>
    </AbsoluteFill>
  );
};
