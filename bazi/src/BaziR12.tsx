import React from 'react';
import {P, H, HAND, CJK, L, Page, Star, A, cl, Pop, TT, Lbl, Head, Tag, Coin, Briefcase, Block, Cross, Tick, Person, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle, EC, EZ, El} from './BaziHand';
import cap from './capR12.json';

// ====== Dòng 12 · Ngũ hành là gì: 5 nhóm năng lượng, không có hành xấu · 6 cảnh ======
// Hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR12.json
export const R12_TOTAL = totalFrames(50.4); // 1524

const ORD: El[] = ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'];
const RX = [150, 330, 510, 690, 870];
const ElBall: React.FC<{el: El; r?: number; han?: boolean}> = ({el, r = 82, han = true}) => (
  <g>
    <circle r={r} fill={EC[el]} {...L} />
    <g transform={`translate(0 ${-r * 0.2}) scale(${r / 110})`}><Doodle el={el} /></g>
    <text y={r * 0.78} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.38} fill={P.navy}>{el}</text>
    {han && <text x={r * 0.72} y={-r * 0.62} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={r * 0.42} fill={P.navy}>{EZ[el]}</text>}
  </g>
);

// 1. HOOK 0–10.49: mở lá số thấy 5 hành, hành nào tốt/xấu?
const AT1 = [4.0, 4.9, 5.6, 6.2, 6.7];
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Mở lá số ra thấy" text="Ngũ hành" size={160} />
    <g filter="url(#wob)">
      <Pop t={t} at={1.2} x={510} y={1300} s={1.2}><Person c={P.coral} mood={t > 8.4 ? 'flat' : 'smile'} /></Pop>
      {ORD.map((el, i) => <Pop key={el} t={t} at={AT1[i]} x={RX[i]} y={760 + (i % 2 ? 50 : 0)}><ElBall el={el} r={78} /></Pop>)}
      <Lbl at={8.7} t={t} x={260} y={1060} w={280} fill={P.mint} r={-3} size={42}>tốt?</Lbl>
      <Lbl at={9.6} t={t} x={760} y={1060} w={280} fill={P.coral} r={3} size={42}>xấu?</Lbl>
    </g>
  </g>
);

// 2. KHÔNG CÓ HÀNH XẤU + 5 nhóm năng lượng sinh khắc 10.49–18.77
const S2: React.FC<SP> = ({t}) => {
  const cx = 510, cy = 1010, R = 300;
  const order: El[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy']; // vòng tương sinh
  const pts = order.map((_, k) => {const a = (-90 + k * 72) * Math.PI / 180; return {x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R};});
  const arr = A(t, 16.9, 0.9);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={10.55} note="Thực ra không có" text="Hành xấu" size={150} />
      <g filter="url(#wob)">
        <g opacity={1 - A(t, 12.9, 0.4)}>
          <Pop t={t} at={10.8} x={510} y={760} r={-2}><Tag w={300} h={100} fill="#fff"><TT size={52} y={18}>xấu</TT></Tag></Pop>
          {t > 11.6 && <path d={`M370 790 L${370 + 280 * A(t, 11.6, 0.4)} 730`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
          <Pop t={t} at={12.1} x={720} y={720}><Cross /></Pop>
        </g>
        <g opacity={A(t, 12.9, 0.4)}>
          {arr > 0.02 && pts.map((p, k) => {
            const q = pts[(k + 1) % 5];
            const mx = (p.x + q.x) / 2 + (((p.x + q.x) / 2) - cx) * 0.18, my = (p.y + q.y) / 2 + (((p.y + q.y) / 2) - cy) * 0.18;
            return <path key={k} d={`M${p.x} ${p.y} Q${mx} ${my} ${q.x} ${q.y}`} fill="none" stroke={P.navy} strokeWidth={6} strokeDasharray="1" pathLength={1} strokeDashoffset={1 - arr} strokeLinecap="round" opacity={0.75} />;
          })}
          {order.map((el, k) => <Pop key={el} t={t} at={13.4 + k * 0.2} x={pts[k].x} y={pts[k].y}><ElBall el={el} r={84} /></Pop>)}
          <Lbl at={14.6} t={t} x={cx} y={cy - 10} w={330} fill={P.yellow} size={36}>5 nhóm năng lượng</Lbl>
          <Lbl at={17.0} t={t} x={cx} y={cy + 80} w={260} fill="#fff" size={36}>sinh · khắc</Lbl>
        </g>
      </g>
    </g>
  );
};

// 3. MÂM CƠM 18.77–25.81
const Bowl: React.FC<{c: string; s?: number}> = ({c, s = 1}) => (
  <g transform={`scale(${s})`}>
    <path d={`M-64 -28 C-40 -70 40 -70 64 -28Z`} fill={c} {...L} strokeWidth={5} />
    <path d="M-72 -28 H72 C66 22 36 40 0 40 C-36 40 -66 22 -72 -28Z" fill="#fff" {...L} strokeWidth={5} />
  </g>
);
const S3: React.FC<SP> = ({t}) => {
  const imb = A(t, 22.4, 0.8);
  const tilt = A(t, 24.9, 0.5) * -7;
  const SC = [1, 1 + 0.55 * imb, 1, 1 - 0.5 * imb, 1];
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={18.85} note="Hình dung như" text="Mâm cơm" size={150} />
      <g filter="url(#wob)">
        <g transform={`translate(510 1050) rotate(${tilt})`}>
          <Pop t={t} at={19.4} x={0} y={0}><ellipse rx={420} ry={150} fill={P.orange} {...L} /><ellipse rx={380} ry={120} fill={P.yellow} opacity={0.6} /></Pop>
          {ORD.map((el, i) => {
            const a = (-90 + i * 72) * Math.PI / 180;
            return <Pop key={el} t={t} at={20.6 + i * 0.18} x={Math.cos(a) * 250} y={Math.sin(a) * 72 + 10}><Bowl c={EC[el]} s={SC[i]} /></Pop>;
          })}
        </g>
        <Lbl at={21.0} t={t} x={510} y={760} w={320} fill="#fff" r={-2} size={40}>5 món</Lbl>
        <Lbl at={22.6} t={t} x={260} y={1300} w={220} fill={P.coral} r={-3} size={38}>dư</Lbl>
        <Lbl at={23.0} t={t} x={760} y={1300} w={220} fill={P.blue} r={3} size={38}>thiếu</Lbl>
        <Lbl at={25.0} t={t} x={510} y={1420} w={320} fill={P.yellow} r={-1} size={44}>mâm lệch!</Lbl>
      </g>
    </g>
  );
};

// 4. MẤT CÂN BẰNG LỘ RA Ở ĐÂU 25.81–35.04
const S4: React.FC<SP> = ({t}) => {
  const tip = A(t, 27.3, 0.8) * 12;
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={25.9} note="Lệch thì lộ ra ở" text="Đời sống" size={150} />
      <g filter="url(#wob)">
        <g opacity={A(t, 26.6)} transform="translate(510 780)">
          <path d="M0 0 V170 M-90 170 H90" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
          <g transform={`rotate(${tip})`}>
            <path d="M-260 0 H260" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
            <g transform="translate(-260 0)"><path d="M-60 0 L0 -2 L60 0 Q0 50 -60 0Z" fill={P.coral} {...L} strokeWidth={5} /></g>
            <g transform="translate(260 0)"><path d="M-60 0 L0 -2 L60 0 Q0 50 -60 0Z" fill={P.blue} {...L} strokeWidth={5} /></g>
          </g>
          <circle r={18} fill={P.red} {...L} strokeWidth={4} />
        </g>
        <Lbl at={28.6} t={t} x={510} y={640} w={340} fill="#fff" r={-1} size={38}>mất cân bằng</Lbl>
        <Pop t={t} at={30.1} x={210} y={1150}><Coin r={70} /></Pop>
        <Lbl at={30.2} t={t} x={210} y={1290} w={240} fill={P.yellow} r={-2} size={36}>tiền bạc</Lbl>
        <Pop t={t} at={31.1} x={510} y={1160} s={0.7}><Briefcase /></Pop>
        <Lbl at={31.2} t={t} x={510} y={1290} w={260} fill="#fff" r={1} size={36}>công việc</Lbl>
        <Pop t={t} at={32.5} x={810} y={1150} s={1.6}><path d="M0 30 C-60 -10 -40 -60 0 -30 C40 -60 60 -10 0 30Z" fill={P.red} {...L} strokeWidth={4} /></Pop>
        <Lbl at={32.6} t={t} x={810} y={1290} w={260} fill={P.mint} r={2} size={36}>tình cảm</Lbl>
        <Pop t={t} at={34.2} x={510} y={1440} s={0.6} r={-2}><Block txt="áp lực nhất" w={460} /></Pop>
      </g>
    </g>
  );
};

// 5. KHÔNG PHẢI SỐ PHẬN 35.04–41.35
const S5: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.04} strikeAt={38.0} gearAt={39.1} okAt={39.8} tint={P.peach} />;

// 6. CTA 41.35–hết: bạn giống hành nào nhất?
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={41.4} note="Bạn giống hành nào nhất?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      {ORD.map((el, i) => <Pop key={el} t={t} at={41.8 + i * 0.15} x={RX[i]} y={780 + (i % 2 ? 50 : 0)}><ElBall el={el} r={74} /></Pop>)}
      <CommentBar t={t} at={44.0} text="Mình thấy giống hành…" y={1060} dur={1.6} />
      <Lbl at={45.4} t={t} x={500} y={1210} w={560} fill={P.yellow} r={-1} size={38}>năm sinh hoặc nhật chủ</Lbl>
      <text x={500} y={1310} textAnchor="middle" fontFamily={HAND} fontSize={32} fill={P.navy} opacity={A(t, 45.8)}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</text>
      <ArrowDown t={t} at={48.2} x={500} y={1340} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 10.49, C: S1}, {s: 10.49, e: 18.77, C: S2}, {s: 18.77, e: 25.81, C: S3},
  {s: 25.81, e: 35.04, C: S4}, {s: 35.04, e: 41.35, C: S5}, {s: 41.35, e: 50.8, C: S6},
];

export const BaziR12: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r12.mp3" phrases={cap.phrases} scenes={SCENES} />;
