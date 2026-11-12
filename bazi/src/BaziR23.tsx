import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Calendar, Clock, Coin, Briefcase, Tick, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart, House} from './BaziR14';
import cap from './capR23.json';

// ====== Dòng 23 · Sinh năm 2000 (Canh Thìn): chưa chậm, chỉ khác nhịp → đại vận · 8 cảnh ======
// Can chi lấy từ bảng STEM/BR: Canh (Kim) Thìn (Thổ). Đoạn đường đại vận là hình minh hoạ, không phải lá số của ai.
// Mốc: src/capR23.json (align_dp, khớp khoảng lặng)
export const R23_TOTAL = totalFrames(40.97);

// máy đếm nhịp (metronome): k = góc lắc
export const Metro: React.FC<{k: number; c?: string}> = ({k, c = P.peach}) => (
  <g>
    <path d="M-90 120 L-50 -150 H50 L90 120Z" fill={c} {...L} />
    <g transform={`rotate(${k * 24} 0 90)`}><path d="M0 90 V-170" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /><rect x={-20} y={-90} width={40} height={30} rx={6} fill={P.yellow} {...L} strokeWidth={4} /></g>
    <circle cx={0} cy={90} r={14} fill={P.navy} />
  </g>
);
// biển chỉ đường hai ngả
export const Sign: React.FC<{a?: string; b?: string}> = ({a = 'hướng A', b = 'hướng B'}) => (
  <g>
    <rect x={-10} y={-160} width={20} height={330} rx={8} fill={P.orange} {...L} strokeWidth={5} />
    <path d="M10 -150 H190 L230 -110 L190 -70 H10Z" fill={P.mint} {...L} />
    <text x={100} y={-98} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={32} fill={P.navy}>{a}</text>
    <path d="M-10 -50 H-190 L-230 -10 L-190 30 H-10Z" fill={P.sky} {...L} />
    <text x={-100} y={2} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={32} fill={P.navy}>{b}</text>
  </g>
);
// cái cân: k = độ nghiêng (-1..1)
export const Scale: React.FC<{k: number}> = ({k}) => (
  <g>
    <path d="M0 -150 V150 M-80 150 H80" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    <g transform={`rotate(${k * 12} 0 -130)`}>
      <path d="M-200 -130 H200" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
      {[-200, 200].map((x) => (
        <g key={x} transform={`translate(${x} -130) rotate(${-k * 12})`}>
          <path d="M0 0 L-70 110 M0 0 L70 110" stroke={P.navy} strokeWidth={4} />
          <path d="M-90 110 H90 Q70 160 0 160 Q-70 160 -90 110Z" fill={P.yellow} {...L} strokeWidth={5} />
        </g>
      ))}
    </g>
    <circle cx={0} cy={-150} r={16} fill={P.red} {...L} strokeWidth={4} />
  </g>
);

// 1. HOOK 0–3.89
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 2000 ơi" text="Bạn chưa chậm" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={1.2} x={300} y={1250} s={1.05}><Person c={P.silver} mood="smile" /></Pop>
      <Pop t={t} at={2.3} x={680} y={960} s={1.1}><Metro k={t > 2.3 ? Math.sin((t - 2.3) * 3) : 0} /></Pop>
      <Lbl at={3.0} t={t} x={680} y={1180} w={360} fill={P.yellow} r={2} size={36}>nhịp khác</Lbl>
      <Note t={t} at={1.0} x={500} y={1440} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. ĐẠI VẬN 3.89–8.62
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={3.95} note="Điều ít người để ý" text="Đại vận" size={160} />
    <g filter="url(#wob)">
      {[0, 1, 2].map((i) => <Pop key={i} t={t} at={4.6 + i * 0.4} x={300 + i * 200} y={1000 - i * 30} r={-6 + i * 6}><Calendar label={`${10 * (i + 1)} năm`} /></Pop>)}
      <Lbl at={7.6} t={t} x={500} y={1300} w={360} fill="#fff" r={-2} size={36}>đại vận · 大運</Lbl>
    </g>
  </g>
);

// 3. CHU KỲ 10 NĂM → không ai cùng tốc độ 8.62–15.43
const SEG = [P.mint, P.coral, P.yellow, P.silver, P.blue];
const S3: React.FC<SP> = ({t}) => {
  const run = A(t, 13.5, 1.6);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={8.65} note="Đại vận là" text="Chu kỳ 10 năm" size={120} />
      <g filter="url(#wob)">
        {SEG.map((c, i) => (
          <g key={i} opacity={A(t, 10.2 + i * 0.25)}>
            <rect x={60 + i * 176} y={760} width={170} height={70} rx={12} fill={c} {...L} strokeWidth={5} />
            <text x={145 + i * 176} y={808} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>10 năm</text>
          </g>
        ))}
        <Lbl at={11.6} t={t} x={500} y={900} w={560} fill="#fff" r={1} size={32}>mỗi chặng một kiểu năng lượng</Lbl>
        <Pop t={t} at={13.4} x={200 + 420 * run} y={1290} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
        <Pop t={t} at={13.6} x={200 + 200 * run} y={1290} s={0.85}><Person c={P.silver} mood="flat" /></Pop>
        <Pop t={t} at={14.5} x={820} y={1080}><Clock t={t} /></Pop>
        <Note t={t} at={14.8} x={500} y={1440} size={28}>không ai đi cùng một tốc độ · hình minh hoạ</Note>
      </g>
    </g>
  );
};

// 4. CANH THÌN · KIM → nghĩ nhiều, chắc hướng rồi mới bước 15.43–22.18
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.silver} />
    <Head t={t} at={15.5} note="Năm 2000 là" text="Canh Thìn" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={16.85} x={260} y={900} s={0.9} r={-3}><GZ can="Canh" chi="Thìn" year="2000" /></Pop>
      <Lbl at={17.6} t={t} x={260} y={1150} w={300} fill={P.silver} r={-2} size={32}>can Canh · Kim</Lbl>
      <Pop t={t} at={20.4} x={700} y={980} s={0.9}><Sign a="hướng 1" b="hướng 2" /></Pop>
      <Pop t={t} at={18.9} x={700} y={700}><TT size={90}>?</TT></Pop>
      <Lbl at={21.0} t={t} x={560} y={1330} w={520} fill={P.yellow} r={1} size={34}>chắc hướng rồi mới bước</Lbl>
    </g>
  </g>
);

// 5. BẠN BÈ ỔN ĐỊNH SỚM → áp lực 22.18–29.38
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={22.25} note="Khi bạn bè" text="Đã ổn định sớm" size={115} />
    <g filter="url(#wob)">
      <Pop t={t} at={24.0} x={250} y={760} s={0.8}><House /></Pop>
      <Pop t={t} at={24.4} x={250} y={1000} s={0.75}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={25.4} x={660} y={1250} s={1.0}><Person c={P.silver} mood={t > 26.5 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={25.9} x={560} y={830} s={0.65}><Briefcase /></Pop>
      <Pop t={t} at={27.5} x={730} y={760} s={1.2}><Coin /></Pop>
      <Pop t={t} at={28.2} x={860} y={880} s={1.0}><Heart /></Pop>
      <Note t={t} at={26.0} x={720} y={990} size={28}>công việc · tiền bạc · tình cảm</Note>
    </g>
  </g>
);

// 6. THỰC RA ĐANG CÂN NHẮC KỸ 29.38–31.86
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={29.42} note="Dù thực ra bạn" text="Đang cân nhắc" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={29.7} x={500} y={1000}><Scale k={Math.sin((t - 29.7) * 2.2) * 0.6} /></Pop>
      <Pop t={t} at={30.8} x={790} y={1260}><Tick /></Pop>
      <Lbl at={30.9} t={t} x={480} y={1290} w={300} fill={P.yellow} r={-1} size={36}>cân kỹ</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 31.86–36.59
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={31.86} strikeAt={32.8} gearAt={34.2} okAt={35.3} tint={P.mint} />;

// 8. CTA 36.59–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={36.65} note="Bạn sinh năm 2000?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={36.9} x={300} y={820} s={0.7} r={-3}><GZ can="Canh" chi="Thìn" year="2000" /></Pop>
      <Pop t={t} at={37.3} x={700} y={820} s={0.9}><Metro k={Math.sin((t - 37.3) * 3)} /></Pop>
      <CommentBar t={t} at={38.0} text="2000 · mình đang đi nhịp …" y={1110} dur={1.5} />
      <Lbl at={39.2} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={39.6} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.89, C: S1}, {s: 3.89, e: 8.62, C: S2}, {s: 8.62, e: 15.43, C: S3}, {s: 15.43, e: 22.18, C: S4},
  {s: 22.18, e: 29.38, C: S5}, {s: 29.38, e: 31.86, C: S6}, {s: 31.86, e: 36.59, C: S7}, {s: 36.59, e: 41.37, C: S8},
];

export const BaziR23: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r23.mp3" phrases={cap.phrases} scenes={SCENES} />;
