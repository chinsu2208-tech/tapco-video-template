import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Tag, Tick, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR35.json';

// ====== Dòng 35 · Sinh 1996, cuối năm nhìn lại mình: nhật chủ & thập thần trước khi sang 2027 · 8 cảnh ======
// 1996 = Bính Tý lấy từ STEM/BR qua GZ. Khung 4 trụ "?" là khung trống minh hoạ, không phải lá số thật.
// Mốc: src/capR35.json (align_dp)
export const R35_TOTAL = totalFrames(43.248);

// gương soi: nhìn lại mình
const Mirror: React.FC<{q?: boolean}> = ({q = true}) => (
  <g>
    <rect x={-14} y={150} width={28} height={110} rx={8} fill={P.orange} {...L} strokeWidth={5} />
    <path d="M-90 270 H90" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    <ellipse rx={150} ry={190} fill={P.yellow} {...L} />
    <ellipse rx={118} ry={158} fill={P.sky} {...L} strokeWidth={5} />
    <path d="M-70 -90 Q-40 -120 -10 -110" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" />
    {q && <text y={40} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={130} fill={P.navy}>?</text>}
  </g>
);

// 1. HOOK 0–4.01
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1996" text="Nhìn lại" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={250} y={880} s={0.6}><GZ can="Bính" chi="Tý" year="1996" /></Pop>
      <Pop t={t} at={1.3} x={650} y={960} s={0.95}><Mirror /></Pop>
      <Lbl at={2.4} t={t} x={500} y={1330} w={460} fill="#fff" r={-1} size={38}>chưa gọi tên được mình</Lbl>
    </g>
  </g>
);

// 2. NGUYÊN NHÂN: NHẬT CHỦ 4.01–8.74
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.06} note="Nguyên nhân thường ở" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.6} x={330} y={990} s={1.0}><Pillar name="ngày" fill={P.coral} hi={A(t, 5.9, 0.4)} /></Pop>
      <Lbl at={5.8} t={t} x={680} y={820} w={250} fill={P.yellow} r={2} size={38}>nhật chủ</Lbl>
      <Pop t={t} at={6.6} x={680} y={1000}><TT size={110} fill={P.red}>!</TT></Pop>
      <Lbl at={7.2} t={t} x={680} y={1170} w={270} fill="#fff" r={-2} size={32}>ít người để ý</Lbl>
      <Note t={t} at={8.0} x={500} y={1330} size={28}>khi xem lá số</Note>
    </g>
  </g>
);

// 3. BỐN TRỤ, CAN + CHI 8.74–14.74
const PAT = [10.0, 10.55, 11.05, 11.6];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={8.79} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={960} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={13.4} t={t} x={300} y={1260} w={260} fill={P.yellow} r={-2} size={34}>trên: thiên can</Lbl>
      <Lbl at={14.1} t={t} x={680} y={1260} w={260} fill={P.sky} r={2} size={34}>dưới: địa chi</Lbl>
    </g>
  </g>
);

// 4. NHẬT CHỦ = CAN TRỤ NGÀY = BẠN 14.74–18.78
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={14.8} note="Nhật chủ là" text="Chính bạn" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={15.0} x={300} y={980} s={1.05}><Pillar name="ngày" fill={P.coral} hi={A(t, 16.2, 0.4)} top={t > 17.9 ? 'bạn' : '?'} /></Pop>
      <Lbl at={16.0} t={t} x={660} y={780} w={260} fill="#fff" r={2} size={34}>thiên can</Lbl>
      <Lbl at={16.9} t={t} x={660} y={900} w={260} fill={P.mint} r={-2} size={34}>của trụ ngày</Lbl>
      <Pop t={t} at={18.1} x={660} y={1250} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
    </g>
  </g>
);

// 5. VIỆC / TIỀN / TÌNH CẢM XOAY QUANH NHẬT CHỦ GẶP THẬP THẦN 18.78–25.61
const S5: React.FC<SP> = ({t}) => {
  const rot = A(t, 23.4, 1.2) * 360 + Math.max(0, t - 24.6) * 25;
  const orb = (deg: number) => {
    const a = ((deg + rot) * Math.PI) / 180;
    return [500 + Math.cos(a) * 290, 1000 + Math.sin(a) * 260];
  };
  const [x1, y1] = orb(-90), [x2, y2] = orb(30), [x3, y3] = orb(150);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={18.83} note="Điều này có nghĩa là" text="Xoay quanh" size={150} />
      <g filter="url(#wob)">
        <ellipse cx={500} cy={1000} rx={290} ry={260} fill="none" stroke={P.navy} strokeWidth={5} strokeDasharray="18 18" opacity={A(t, 19.2)} />
        <Pop t={t} at={19.2} x={500} y={1010} s={0.7}><Person c={P.coral} mood="smile" /></Pop>
        <Lbl at={23.7} t={t} x={500} y={1150} w={200} fill={P.yellow} r={-1} size={30}>nhật chủ</Lbl>
        <Pop t={t} at={20.9} x={x1} y={y1} s={0.42}><Briefcase /></Pop>
        <Pop t={t} at={21.6} x={x2} y={y2}><Coin r={46} /></Pop>
        <Pop t={t} at={22.6} x={x3} y={y3}><Heart /></Pop>
        <Lbl at={24.6} t={t} x={500} y={1360} w={360} fill={P.mint} r={1} size={38}>gặp thập thần nào</Lbl>
        <Note t={t} at={23.0} x={500} y={1450} size={26}>việc · tiền · tình cảm</Note>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI SỐ PHẬN 25.61–31.51
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={25.61} strikeAt={28.4} gearAt={29.4} okAt={30.0} tint={P.mint} />;

// 7. TRƯỚC 2027: HIỂU MÌNH > ĐOÁN TRƯỚC 31.51–36.54
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={31.56} note="Trước khi sang" text="Năm 2027" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={33.0} x={500} y={760} s={0.9}><Calendar label="2027" /></Pop>
      <Pop t={t} at={34.3} x={280} y={1110} r={-2}><Tag w={300} h={100} fill={P.mint}><TT size={40} y={14}>hiểu mình</TT></Tag></Pop>
      <Pop t={t} at={34.9} x={280} y={1250}><Tick /></Pop>
      <Pop t={t} at={35.6} x={720} y={1110} r={2}><Tag w={300} h={100} fill="#fff"><TT size={40} y={14}>đoán trước</TT></Tag></Pop>
      <Pop t={t} at={36.1} x={720} y={1250}><Cross /></Pop>
      <Pop t={t} at={34.6} x={500} y={1110}><TT size={80} fill={P.red}>&gt;</TT></Pop>
    </g>
  </g>
);

// 8. CTA 36.54–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={36.6} note="Bạn tuổi 1996" text="Để lại nhé" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={37.3} x={500} y={820} s={0.55}><GZ can="Bính" chi="Tý" year="1996" /></Pop>
      <CommentBar t={t} at={39.4} text="1996 · nhật chủ của mình là …" y={1130} dur={1.6} />
      <Lbl at={42.0} t={t} x={500} y={1290} w={420} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={42.3} x={500} y={1350} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.01, C: S1}, {s: 4.01, e: 8.74, C: S2}, {s: 8.74, e: 14.74, C: S3}, {s: 14.74, e: 18.78, C: S4},
  {s: 18.78, e: 25.61, C: S5}, {s: 25.61, e: 31.51, C: S6}, {s: 31.51, e: 36.54, C: S7}, {s: 36.54, e: 43.65, C: S8},
];

export const BaziR35: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r35.mp3" phrases={cap.phrases} scenes={SCENES} />;
