import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Tick, Cross, Tag, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Bolt} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Drop} from './BaziR17';
import {Metro, Scale} from './BaziR23';
import cap from './capR31.json';

// ====== Dòng 31 · Âm dương trong can chi: đuôi chẵn dương, đuôi lẻ âm · 8 cảnh ======
// 1991 Tân Mùi (Tân = can âm), 1992 Nhâm Thân (Nhâm = can dương) — lấy từ STEM/BR qua GZ.
// Quy tắc đuôi năm: chẵn → can dương (Giáp Bính Mậu Canh Nhâm), lẻ → can âm (Ất Đinh Kỷ Tân Quý).
// Mốc: src/capR31.json (align_dp)
export const R31_TOTAL = totalFrames(38.28);

// thái cực âm dương
const YinYang: React.FC<{r?: number; rot?: number}> = ({r = 170, rot = 0}) => (
  <g transform={`rotate(${rot})`}>
    <circle r={r} fill="#fff" {...L} />
    <path d={`M0 ${-r} A${r} ${r} 0 0 1 0 ${r} A${r / 2} ${r / 2} 0 0 1 0 0 A${r / 2} ${r / 2} 0 0 0 0 ${-r}Z`} fill={P.navy} />
    <circle cy={-r / 2} r={r / 7} fill="#fff" />
    <circle cy={r / 2} r={r / 7} fill={P.navy} />
    <circle r={r} fill="none" {...L} />
  </g>
);
const Sun: React.FC = () => (
  <g>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d="M0 -82 V-120" stroke={P.navy} strokeWidth={8} strokeLinecap="round" transform={`rotate(${i * 45})`} />)}
    <circle r={66} fill={P.yellow} {...L} />
  </g>
);
const Moon: React.FC = () => <path d="M30 -80 A86 86 0 1 0 30 80 A66 66 0 1 1 30 -80Z" fill={P.silver} {...L} />;
// dải chữ số đuôi năm
const Digits: React.FC<{ds: number[]; fill: string}> = ({ds, fill}) => (
  <g>
    {ds.map((d, i) => (
      <g key={d} transform={`translate(${(i - 2) * 76} 0)`}>
        <rect x={-32} y={-38} width={64} height={76} rx={12} fill={fill} {...L} strokeWidth={4} />
        <text y={20} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={48} fill={P.navy}>{d}</text>
      </g>
    ))}
  </g>
);

// 1. HOOK 0–3.69: âm dương là hơn kém?
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người mới tìm hiểu" text="Hơn hay kém?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.6} x={500} y={1000}><Scale k={Math.sin(t * 2.4)} /></Pop>
      <Lbl at={1.6} t={t} x={260} y={760} w={190} fill={P.yellow} r={-3} size={40}>dương</Lbl>
      <Lbl at={1.8} t={t} x={740} y={760} w={160} fill={P.silver} r={3} size={40}>âm</Lbl>
      <Pop t={t} at={2.8} x={500} y={1330} s={0.8}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={3.0} x={620} y={1150}><TT size={90}>?</TT></Pop>
    </g>
  </g>
);

// 2. MỖI CAN CHI MANG ÂM HOẶC DƯƠNG 3.69–9.80
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={3.74} note="Điều ít người để ý" text="Mỗi can chi" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={7.6} x={500} y={1000}><YinYang rot={(t - 7.6) * 20} /></Pop>
      <Lbl at={8.5} t={t} x={230} y={1240} w={170} fill={P.silver} r={-3} size={40}>âm</Lbl>
      <Lbl at={9.1} t={t} x={770} y={1240} w={200} fill={P.yellow} r={3} size={40}>dương</Lbl>
      <Pop t={t} at={6.8} x={230} y={790} s={0.55} r={-4}><GZ can="Ất" chi="Sửu" /></Pop>
      <Pop t={t} at={7.0} x={770} y={790} s={0.55} r={4}><GZ can="Giáp" chi="Tý" /></Pop>
      <Note t={t} at={7.2} x={500} y={1420} size={28}>can chi ví dụ</Note>
    </g>
  </g>
);

// 3. ĐUÔI CHẴN = DƯƠNG, ĐUÔI LẺ = ÂM 9.80–14.20
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={9.85} note="Nói đơn giản hơn" text="Nhìn số đuôi" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={11.3} x={420} y={760} s={0.95}><Digits ds={[0, 2, 4, 6, 8]} fill={P.yellow} /></Pop>
      <Pop t={t} at={12.0} x={830} y={760} s={0.7}><Sun /></Pop>
      <Lbl at={12.2} t={t} x={420} y={880} w={300} fill="#fff" r={-1} size={34}>chẵn → dương</Lbl>
      <Pop t={t} at={13.0} x={420} y={1150} s={0.95}><Digits ds={[1, 3, 5, 7, 9]} fill={P.silver} /></Pop>
      <Pop t={t} at={13.6} x={830} y={1150} s={0.7}><Moon /></Pop>
      <Lbl at={13.7} t={t} x={420} y={1270} w={260} fill="#fff" r={1} size={34}>lẻ → âm</Lbl>
      <Note t={t} at={13.9} x={480} y={1430} size={26}>năm tính từ Lập xuân</Note>
    </g>
  </g>
);

// 4. 1991 TÂN MÙI ÂM · 1992 NHÂM THÂN DƯƠNG 14.20–19.00
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={14.25} note="Ví dụ" text="91 và 92" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={14.5} x={270} y={960} s={0.8} r={-2}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Pop t={t} at={15.9} x={270} y={1260} s={0.6}><Moon /></Pop>
      <Lbl at={16.0} t={t} x={270} y={1420} w={200} fill={P.silver} r={-2} size={38}>lẻ · âm</Lbl>
      <Pop t={t} at={16.6} x={720} y={960} s={0.8} r={2}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <Pop t={t} at={18.2} x={720} y={1260} s={0.6}><Sun /></Pop>
      <Lbl at={18.3} t={t} x={720} y={1420} w={260} fill={P.yellow} r={2} size={38}>chẵn · dương</Lbl>
    </g>
  </g>
);

// 5. HAI NHỊP KHÁC NHAU, KHÔNG HƠN KÉM 19.00–23.66
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={19.05} note="Điều này có nghĩa là" text="Hai nhịp" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={19.8} x={260} y={900} s={0.9}><Metro k={Math.sin(t * 6)} c={P.yellow} /></Pop>
      <Pop t={t} at={20.1} x={740} y={900} s={0.9}><Metro k={Math.sin(t * 3)} c={P.silver} /></Pop>
      <Note t={t} at={20.3} x={260} y={1090} size={42}>dương</Note>
      <Note t={t} at={20.4} x={740} y={1090} size={42}>âm</Note>
      <Pop t={t} at={21.9} x={500} y={1290}><Scale k={0} /></Pop>
      <Lbl at={22.4} t={t} x={500} y={1500} w={420} fill="#fff" r={-1} size={34}>không ai hơn ai</Lbl>
    </g>
  </g>
);

// 6. CHỦ ĐỘNG vs TINH TẾ trong việc, tiền, tình 23.66–30.28
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={23.7} note="Việc · tiền · tình" text="Mỗi bên một kiểu" size={90} />
    <g filter="url(#wob)">
      <Pop t={t} at={23.8} x={250} y={660} s={0.5}><Briefcase /></Pop>
      <Pop t={t} at={24.8} x={500} y={660}><Coin r={46} /></Pop>
      <Pop t={t} at={25.6} x={740} y={660} s={1.1}><Heart /></Pop>
      <Pop t={t} at={26.3} x={260} y={1200} s={0.85}><Person c={P.yellow} mood="talk" /></Pop>
      <Pop t={t} at={26.8} x={260} y={900} s={0.55}><Bolt /></Pop>
      <Lbl at={27.2} t={t} x={260} y={1330} w={290} fill={P.yellow} r={-2} size={36}>chủ động</Lbl>
      <Pop t={t} at={28.2} x={740} y={1200} s={0.85}><Person c={P.silver} mood="smile" /></Pop>
      <Pop t={t} at={28.7} x={740} y={920} s={0.8}><Drop c={P.blue} /></Pop>
      <Lbl at={29.3} t={t} x={740} y={1330} w={260} fill={P.silver} r={2} size={36}>tinh tế</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 30.28–34.01
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={30.28} strikeAt={31.1} gearAt={32.3} okAt={32.8} tint={P.mint} />;

// 8. CTA 34.01–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={34.05} note="Năm sinh của bạn" text="Chẵn hay lẻ?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={34.6} x={300} y={800} s={0.7}><Sun /></Pop>
      <Pop t={t} at={35.2} x={700} y={800} s={0.7}><Moon /></Pop>
      <Pop t={t} at={34.9} x={500} y={800}><TT size={60}>/</TT></Pop>
      <CommentBar t={t} at={36.0} text="đuôi … · dương / âm" y={1100} dur={1.2} />
      <Lbl at={36.6} t={t} x={500} y={1260} w={520} fill={P.mint} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={36.9} x={500} y={1320} />
      <Pop t={t} at={37.2} x={820} y={1270}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.69, C: S1}, {s: 3.69, e: 9.8, C: S2}, {s: 9.8, e: 14.2, C: S3}, {s: 14.2, e: 19.0, C: S4},
  {s: 19.0, e: 23.66, C: S5}, {s: 23.66, e: 30.28, C: S6}, {s: 30.28, e: 34.01, C: S7}, {s: 34.01, e: 38.68, C: S8},
];

export const BaziR31: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r31.mp3" phrases={cap.phrases} scenes={SCENES} />;
