import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Block, Calendar, Tick, Cross, Tag, Gear, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note} from './BaziR14';
import {Pillar, PIL, PF, Battery, Drop} from './BaziR17';
import {Tree, Flake} from './BaziR41';
import cap from './capR42.json';

// ====== Dòng 42 · Cùng nhật chủ mà sống khác: tháng sinh = mùa của cây · 8 cảnh ======
// Hai người, bốn trụ trống "?" đều là minh hoạ (không có lá số thật).
// Mốc: src/capR42.json (align_dp)
export const R42_TOTAL = totalFrames(46.584);

const Sun: React.FC<{t: number}> = ({t}) => (
  <g>
    <g transform={`rotate(${t * 20})`}>{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d="M0 -78 V-108" transform={`rotate(${i * 45})`} stroke={P.navy} strokeWidth={8} strokeLinecap="round" />)}</g>
    <circle r={60} fill={P.yellow} {...L} />
  </g>
);
const Cloud: React.FC = () => (
  <path d="M-90 30 Q-110 -20 -60 -30 Q-50 -80 0 -70 Q40 -100 70 -50 Q120 -50 110 0 Q120 40 70 40 H-70 Q-100 40 -90 30Z" fill="#fff" {...L} />
);

// 1. HOOK 0–5.06
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người mới học bát tự" text="Cùng nhật chủ" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={2.6} x={290} y={1100}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={2.9} x={710} y={1100}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={3.0} t={t} x={500} y={780} w={360} fill={P.yellow} r={-1} size={34}>cùng nhật chủ</Lbl>
      <Lbl at={4.2} t={t} x={500} y={1330} w={400} fill={P.coral} r={1} size={36}>sống rất khác</Lbl>
    </g>
  </g>
);

// 2. NGUYÊN NHÂN: THÁNG SINH 5.06–9.5
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={5.11} note="Ít ai để ý" text="Tháng sinh" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.6} x={500} y={1020} s={1.1}><Calendar label="tháng" /></Pop>
      <Pop t={t} at={8.4} x={720} y={860}><Tag w={110} h={100} fill={P.yellow} r={8}><TT size={70} y={24}>!</TT></Tag></Pop>
    </g>
  </g>
);

// 3. BỐN TRỤ · TRỤ THÁNG = MÙA 9.5–16.92
const PAT = [10.9, 11.5, 12.15, 12.75];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={9.55} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={980} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 1 ? A(t, 13.9, 0.4) : 0} /></Pop>
      ))}
      <Lbl at={15.0} t={t} x={430} y={1270} w={420} fill={P.yellow} r={-2} size={34}>trụ tháng → mùa sinh</Lbl>
      <Pop t={t} at={16.2} x={770} y={1270} s={0.5}><Sun t={t} /></Pop>
      <Note t={t} at={11} x={500} y={1420} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. NHẬT CHỦ = CÂY, THÁNG SINH = THỜI TIẾT 16.92–22.9
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={16.97} note="Nói đơn giản hơn" text="Cây và thời tiết" size={115} />
    <g filter="url(#wob)">
      <Pop t={t} at={19.4} x={300} y={1120} s={0.9}><Tree leaves={1} /></Pop>
      <Lbl at={19.6} t={t} x={300} y={1380} w={260} fill={P.mint} r={-2} size={34}>nhật chủ</Lbl>
      <Pop t={t} at={21.2} x={700} y={820} s={0.8}><Cloud /></Pop>
      <Pop t={t} at={21.4} x={760} y={760} s={0.55}><Sun t={t} /></Pop>
      <Lbl at={21.6} t={t} x={700} y={1000} w={260} fill={P.yellow} r={2} size={34}>tháng sinh</Lbl>
      <Note t={t} at={22.2} x={700} y={1090} size={28}>thời tiết cây gặp</Note>
    </g>
  </g>
);

// 5. MÙA ĐÔNG CẦN ẤM · MÙA HÈ CẦN NƯỚC 22.9–29.77
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.cream} />
    <Head t={t} at={22.95} note="Cùng một cây" text="Hai mùa khác" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={24.2} x={270} y={1100} s={0.75}><Tree snow={1} /></Pop>
      <Flake t={t} x={270} y={760} o={A(t, 24.4, 0.4)} />
      <Lbl at={24.4} t={t} x={270} y={1330} w={240} fill={P.blue} r={-2} size={34}>mùa đông</Lbl>
      <Pop t={t} at={25.9} x={300} y={720} s={0.45}><Sun t={t} /></Pop>
      <Note t={t} at={26.0} x={270} y={1420} size={28}>cần hơi ấm</Note>
      <Pop t={t} at={27.0} x={720} y={1100} s={0.75}><Tree leaves={1} dry={1 - A(t, 29.0, 0.6) * 0.99} /></Pop>
      <Lbl at={27.1} t={t} x={720} y={1330} w={220} fill={P.coral} r={2} size={34}>mùa hè</Lbl>
      <Pop t={t} at={28.4} x={720} y={730} s={0.6}><Drop /></Pop>
      <Note t={t} at={28.5} x={720} y={1420} size={28}>cần nước</Note>
    </g>
  </g>
);

// 6. DÙNG SỨC · KIẾM TIỀN · CHỊU ÁP LỰC KHÁC NHAU 29.77–36.7
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={29.82} note="Điều này có nghĩa là" text="Cách sống khác" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={30.3} x={200} y={1120} s={0.75}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={30.5} x={800} y={1120} s={0.75}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={31.6} x={500} y={720} s={0.7}><Battery k={0.7} /></Pop>
      <Note t={t} at={31.7} x={500} y={800} size={26}>cách dùng sức</Note>
      <Pop t={t} at={32.8} x={500} y={920}><Coin r={46} /></Pop>
      <Note t={t} at={32.9} x={500} y={1010} size={26}>cách kiếm tiền</Note>
      <Pop t={t} at={34.1} x={500} y={1120} s={0.45}><Block txt="áp lực" /></Pop>
      <Lbl at={35.6} t={t} x={500} y={1320} w={380} fill={P.yellow} r={-1} size={36}>rất khác nhau</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 36.7–41.8
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={36.7} strikeAt={38.0} gearAt={39.4} okAt={40.4} tint={P.mint} />;

// 8. CTA 41.8–hết
const SEA = [
  {n: 'xuân', c: P.mint}, {n: 'hạ', c: P.coral}, {n: 'thu', c: P.yellow}, {n: 'đông', c: P.blue},
];
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={41.85} note="Bạn sinh vào" text="Mùa nào?" size={150} />
    <g filter="url(#wob)">
      {SEA.map((s, i) => (
        <Pop key={s.n} t={t} at={42.2 + i * 0.2} x={170 + i * 220} y={820}><Tag w={180} h={110} fill={s.c} r={i % 2 ? 3 : -3}><TT size={46} y={16}>{s.n}</TT></Tag></Pop>
      ))}
      <CommentBar t={t} at={43.6} text="mình sinh tháng …" y={1100} dur={1.2} />
      <Lbl at={45.0} t={t} x={500} y={1260} w={380} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={45.3} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.06, C: S1}, {s: 5.06, e: 9.5, C: S2}, {s: 9.5, e: 16.92, C: S3}, {s: 16.92, e: 22.9, C: S4},
  {s: 22.9, e: 29.77, C: S5}, {s: 29.77, e: 36.7, C: S6}, {s: 36.7, e: 41.8, C: S7}, {s: 41.8, e: 46.984, C: S8},
];

export const BaziR42: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r42.mp3" phrases={cap.phrases} scenes={SCENES} />;
