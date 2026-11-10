import React from 'react';
import {P, H, HAND, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Block, Person, Cross, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF, Battery, Drop} from './BaziR17';
import cap from './capR19.json';

// ====== Dòng 19 · Sinh năm 1993 (Quý Dậu, can Quý Thủy): càng ít nói càng mệt → nước lặng mà sâu · 8 cảnh ======
// Can chi lấy từ bảng STEM/BR. Khung 4 trụ là khung trống minh hoạ. Mốc: src/capR19.json (căn tay theo khoảng lặng)
export const R19_TOTAL = totalFrames(40.97);

// bong bóng thoại / suy nghĩ
const Bubble: React.FC<{w: number; h: number; think?: boolean; children?: React.ReactNode; fill?: string}> = ({w, h, think = false, children, fill = '#fff'}) => (
  <g>
    {think
      ? <g>{[[-w * 0.3, -h * 0.15], [0, -h * 0.3], [w * 0.3, -h * 0.15], [w * 0.28, h * 0.2], [-w * 0.28, h * 0.2], [0, h * 0.25]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={w * 0.3} ry={h * 0.32} fill={fill} {...L} />)}
          <ellipse rx={w * 0.42} ry={h * 0.36} fill={fill} />
          <circle cx={-w * 0.25} cy={h * 0.62} r={16} fill={fill} {...L} strokeWidth={4} /><circle cx={-w * 0.33} cy={h * 0.78} r={9} fill={fill} {...L} strokeWidth={4} /></g>
      : <g><rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2.4} fill={fill} {...L} /><path d={`M${-w * 0.15} ${h / 2 - 3} l-24 40 l50 -40`} fill={fill} {...L} strokeWidth={5} /></g>}
    {children}
  </g>
);
// mặt hồ cắt ngang: phẳng phía trên, dòng xoáy sâu bên dưới
const Lake: React.FC<{t: number; calm: number; deep: number}> = ({t, calm, deep}) => (
  <g>
    <rect x={-400} y={-40} width={800} height={500} rx={30} fill={P.blue} {...L} />
    <rect x={-400} y={-40} width={800} height={120} rx={30} fill={P.sky} opacity={0.75} />
    <path d="M-400 -40 H400" stroke={P.navy} strokeWidth={6} opacity={calm} />
    {[0, 1, 2].map((i) => (
      <path key={i} transform={`translate(${-250 + i * 250 + 30 * Math.sin(t * 2 + i)} ${220 + i * 50})`} d="M-90 0 C-60 -50 40 -50 50 0 C56 30 10 40 -10 20" fill="none" stroke={P.navy} strokeWidth={7} strokeLinecap="round" opacity={deep} />
    ))}
  </g>
);

// 1. HOOK 0–5.01: 1993, càng ít nói càng mệt
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Sinh năm 1993 ơi" text="Ít nói, mệt" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={740} y={760} s={0.75} r={3}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
      <Pop t={t} at={2.7} x={300} y={1220} s={1.1}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={3.0} x={290} y={820} r={-3}><Bubble w={240} h={110}><TT size={56} y={14}>…</TT></Bubble></Pop>
      <Pop t={t} at={3.9} x={660} y={1150}><Battery k={Math.max(0.12, 1 - A(t, 4.0, 1.0) * 0.88)} /></Pop>
      <Note t={t} at={3.5} x={500} y={1420} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. QUÝ DẬU · THỦY 5.01–10.62
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={5.05} note="Điều ít người để ý" text="Quý Dậu" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={8.3} x={290} y={950} s={0.95} r={-3}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
      <Pop t={t} at={9.5} x={700} y={900} s={1.2}><Drop /></Pop>
      <Lbl at={9.6} t={t} x={700} y={1100} w={320} fill={P.blue} r={2} size={36}>can Quý · Thủy</Lbl>
      <Lbl at={6.0} t={t} x={680} y={640} w={300} fill="#fff" r={3} size={34}>trong lá số</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ 10.62–16.12
const POP3 = [10.7, 12.1, 12.55, 13.0];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={10.7} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={POP3[i]} x={200 + i * 200} y={940}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={14.2} t={t} x={500} y={650} w={360} fill="#fff" r={-2} size={36}>trên: thiên can</Lbl>
      <Lbl at={15.0} t={t} x={500} y={1240} w={360} fill={P.yellow} r={2} size={36}>dưới: địa chi</Lbl>
      <Note t={t} at={12.0} x={500} y={1340} size={28}>khung trống minh hoạ, chưa phải lá số thật</Note>
    </g>
  </g>
);

// 4. NƯỚC 16.12–21.46: lặng trên mặt, chảy rất sâu bên dưới
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={16.15} note="Thủy là hình ảnh của" text="Nước" size={160} />
    <g filter="url(#wob)">
      <Pop t={t} at={16.6} x={500} y={820}><Lake t={t} calm={A(t, 17.9)} deep={A(t, 19.4, 0.8)} /></Pop>
      <Lbl at={18.0} t={t} x={300} y={690} w={300} fill="#fff" r={-2} size={34}>lặng trên mặt</Lbl>
      <Lbl at={19.6} t={t} x={660} y={1240} w={340} fill={P.yellow} r={2} size={34}>chảy rất sâu</Lbl>
    </g>
  </g>
);

// 5. NGHĨ NHIỀU HƠN NÓI 21.46–25.36
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={21.5} note="Người mang năng lượng Thủy" text="Nghĩ > nói" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={22.4} x={560} y={780}><Bubble w={460} h={240} think><g opacity={A(t, 22.8)}>{['?', '…', '!', '?'].map((c, i) => <text key={i} x={-150 + i * 100} y={20 + (i % 2) * 20} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={60} fill={P.navy}>{c}</text>)}</g></Bubble></Pop>
      <Pop t={t} at={22.0} x={280} y={1250} s={1.05}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={23.6} x={600} y={1150} s={0.8}><Bubble w={170} h={90} fill={P.yellow}><TT size={36} y={12}>ổn mà</TT></Bubble></Pop>
      <Lbl at={24.3} t={t} x={620} y={1330} w={300} fill="#fff" r={-1} size={34}>nghĩ nhiều, nói ít</Lbl>
    </g>
  </g>
);

// 6. TỰ GÁNH 25.36–32.31: xử lý bên trong → chồng hộp công việc, tiền bạc, tình cảm trên vai
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={25.4} note="Xử lý hết bên trong" text="Tự gánh" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={26.7} x={500} y={1330} s={1.05}><Person c={P.blue} mood={t > 30.8 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={28.4} x={500} y={1080} s={0.5}><Block txt="công việc" w={460} h={150} /></Pop>
      <Pop t={t} at={29.7} x={470} y={960}><Coin r={52} /></Pop>
      <Pop t={t} at={30.4} x={540} y={860} s={1.0}><Heart /></Pop>
      <Lbl at={27.0} t={t} x={210} y={760} w={260} fill="#fff" r={-3} size={32}>bên trong</Lbl>
      <Pop t={t} at={27.3} x={210} y={880}><Cross /></Pop>
      <Note t={t} at={27.3} x={210} y={950} size={28}>không kể ai</Note>
      <Lbl at={31.0} t={t} x={780} y={1000} w={240} fill={P.yellow} r={3} size={36}>tự gánh</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 32.31–36.25
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={32.31} strikeAt={33.1} gearAt={34.3} okAt={34.9} tint={P.sky} />;

// 8. CTA 36.25–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={36.3} note="Bạn sinh năm 1993?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={36.6} x={300} y={800} s={0.7} r={-3}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
      <Pop t={t} at={37.0} x={700} y={790} s={1.0}><Drop /></Pop>
      <CommentBar t={t} at={38.7} text="93 · mình đang …" y={1110} dur={1.4} />
      <Lbl at={39.6} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={39.9} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.01, C: S1}, {s: 5.01, e: 10.62, C: S2}, {s: 10.62, e: 16.12, C: S3}, {s: 16.12, e: 21.46, C: S4},
  {s: 21.46, e: 25.36, C: S5}, {s: 25.36, e: 32.31, C: S6}, {s: 32.31, e: 36.25, C: S7}, {s: 36.25, e: 41.37, C: S8},
];

export const BaziR19: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r19.mp3" phrases={cap.phrases} scenes={SCENES} />;
