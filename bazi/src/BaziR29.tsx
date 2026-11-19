import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Gear, Block, Tick, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames, Star} from './BaziKit';
import {Umbrella, Rain} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {PIL, PF, Pillar} from './BaziR17';
import {ElRow} from './BaziR26';
import cap from './capR29.json';

// ====== Dòng 29 · Sinh năm 1987: qua những năm khó mà chưa thấy nhẹ · nhật chủ · 10 cảnh ======
// 1987 = Đinh Mão (lấy từ STEM/BR qua GZ). Khung 4 trụ là khung trống minh hoạ, không có lá số thật.
// Mốc: src/capR29.json (align_dp)
export const R29_TOTAL = totalFrames(56.93);

// dốc đá: những năm khó đã đi qua
const Hill: React.FC<{k: number}> = ({k}) => (
  <g>
    <path d="M-380 220 L-120 -60 L20 40 L230 -200 L400 220Z" fill={P.silver} {...L} />
    <path d="M230 -200 L180 -140 L230 -120 L270 -150Z" fill="#fff" {...L} strokeWidth={4} />
    {[[-300, 160], [-160, 20], [-40, 60], [120, -60], [210, -170]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={11} fill={P.orange} stroke={P.navy} strokeWidth={4} opacity={k > i / 5 ? 1 : 0} />
    ))}
  </g>
);
// ba lô nặng
const Pack: React.FC = () => (
  <g>
    <rect x={-60} y={-80} width={120} height={150} rx={26} fill={P.orange} {...L} />
    <rect x={-40} y={-20} width={80} height={56} rx={12} fill={P.yellow} {...L} strokeWidth={5} />
    <text y={-38} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>nặng</text>
  </g>
);
// kính lúp
const Lens: React.FC = () => (
  <g>
    <path d="M70 70 L170 170" stroke={P.navy} strokeWidth={26} strokeLinecap="round" />
    <path d="M70 70 L170 170" stroke={P.orange} strokeWidth={14} strokeLinecap="round" />
    <circle r={110} fill={P.sky} fillOpacity={0.55} {...L} strokeWidth={10} />
    <path d="M-60 -40 Q-50 -70 -20 -80" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" />
  </g>
);
// xúc xắc: may rủi
const Dice: React.FC = () => (
  <g>
    <rect x={-80} y={-80} width={160} height={160} rx={26} fill="#fff" {...L} />
    {[[-40, -40], [40, 40], [0, 0], [40, -40], [-40, 40]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={13} fill={P.red} />)}
  </g>
);
// huy chương
const Medal: React.FC = () => (
  <g>
    <path d="M-70 -200 L-20 -60 M70 -200 L20 -60" stroke={P.navy} strokeWidth={6} />
    <path d="M-90 -210 L-30 -60 L0 -70 L-40 -210Z" fill={P.blue} {...L} strokeWidth={5} />
    <path d="M90 -210 L30 -60 L0 -70 L40 -210Z" fill={P.coral} {...L} strokeWidth={5} />
    <circle r={110} fill={P.yellow} {...L} />
    <circle r={78} fill="none" stroke={P.orange} strokeWidth={8} />
    <text y={36} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={100} fill={P.navy}>✓</text>
  </g>
);
// gương: nhìn lại mình
const Mirror: React.FC = () => (
  <g>
    <ellipse rx={150} ry={200} fill={P.orange} {...L} />
    <ellipse rx={118} ry={168} fill={P.sky} {...L} strokeWidth={5} />
    <path d="M-70 -100 Q-52 -130 -24 -140" fill="none" stroke="#fff" strokeWidth={12} strokeLinecap="round" />
    <path d="M-40 200 L-70 270 M40 200 L70 270" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
  </g>
);

// 1. HOOK 0–7.03
const S1: React.FC<SP> = ({t}) => {
  const k = A(t, 1.6, 2.6);
  const px = -300 + k * 480, py = 160 - k * 300;
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 1987" text="Qua năm khó" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.4} x={760} y={800} s={0.75} r={3}><GZ can="Đinh" chi="Mão" year="1987" /></Pop>
        <Note t={t} at={1.0} x={760} y={980} size={26}>can chi năm · tính từ Lập xuân</Note>
        <Pop t={t} at={1.2} x={460} y={1300} s={0.95}><Hill k={k} /></Pop>
        <g opacity={A(t, 1.6)} transform={`translate(${460 + px * 0.95} ${1300 + py * 0.95 - 10}) scale(0.5)`}>
          <g transform="translate(-70 -90)"><Pack /></g>
          <Person c={P.coral} mood={t > 5.0 ? 'flat' : 'smile'} />
        </g>
        <Lbl at={5.2} t={t} x={300} y={720} w={380} fill="#fff" r={-2} size={36}>vẫn chưa nhẹ</Lbl>
      </g>
    </g>
  );
};

// 2. ÍT AI ĐỂ Ý → NHẬT CHỦ 7.03–12.64
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={7.08} note="Điều ít người để ý" text="Trong lá số" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={7.6} x={480} y={1000} r={-2}>
        <g>
          <rect x={-260} y={-200} width={520} height={400} rx={24} fill="#fff" {...L} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={-220 + i * 115} y={-150} width={90} height={300} rx={12} fill={PF[i]} {...L} strokeWidth={4} opacity={0.75} />)}
        </g>
      </Pop>
      <g transform={`translate(${300 + A(t, 9.2, 1.4) * 190} ${900 + A(t, 9.2, 1.4) * 60})`} opacity={A(t, 8.6)}><Lens /></g>
      <Lbl at={11.1} t={t} x={480} y={1330} w={320} fill={P.yellow} r={-2} size={46}>nhật chủ</Lbl>
      <Pop t={t} at={11.4} x={720} y={1330}><Star x={0} y={0} s={2.2} /></Pop>
    </g>
  </g>
);

// 3. BỐN TRỤ, CAN + CHI 12.64–19.24
const PAT = [13.2, 14.55, 15.3, 15.85];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={12.7} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={200 + i * 200} y={980}>
          <g>
            <rect x={-80} y={-200} width={160} height={400} rx={18} fill={PF[i]} {...L} />
            <text y={-152} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={38} fill={P.navy}>{n}</text>
            <rect x={-58} y={-120} width={116} height={124} rx={12} fill={t > 17.9 ? P.yellow : '#fff'} {...L} strokeWidth={5} />
            <text y={-46} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 17.9 ? 'can' : '?'}</text>
            <rect x={-58} y={36} width={116} height={124} rx={12} fill={t > 18.6 ? P.mint : '#fff'} {...L} strokeWidth={5} />
            <text y={108} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 18.6 ? 'chi' : '?'}</text>
          </g>
        </Pop>
      ))}
      <Note t={t} at={16.4} x={500} y={1270} size={28}>khung trống minh hoạ</Note>
    </g>
  </g>
);

// 4. CAN TRỤ NGÀY = NHẬT CHỦ = BẠN, 1 TRONG 5 HÀNH 19.24–24.93
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={19.3} note="Can trụ ngày là" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={19.4 + i * 0.1} x={200 + i * 200} y={820} s={0.8}>
          <Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 20.4) : 0} top={i === 2 && t > 20.4 ? '★' : '?'} />
        </Pop>
      ))}
      <Lbl at={22.2} t={t} x={600} y={1040} w={250} fill={P.yellow} r={-2} size={36}>= bạn</Lbl>
      <Pop t={t} at={22.4} x={300} y={1110} s={0.5}><Person c={P.coral} mood="smile" /></Pop>
      <ElRow t={t} at={23.6} y={1310} step={0.12} r={72} />
    </g>
  </g>
);

// 5. MỖI NGƯỜI CHỊU ÁP LỰC & XOAY XỞ MỘT KIỂU 24.93–32.36
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={25.0} note="Điều này có nghĩa là" text="Mỗi người một cách" size={84} />
    <g filter="url(#wob)">
      <Rain t={t} x={120} y={560} w={760} h={240} o={A(t, 26.6) * 0.8} />
      <Pop t={t} at={27.0} x={270} y={880} s={0.8}><Umbrella c={P.coral} /></Pop>
      <Pop t={t} at={26.8} x={270} y={1180} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={27.6} x={730} y={940}><Gear r={90} c={P.mint} rot={(t - 27.6) * 70} /></Pop>
      <Pop t={t} at={27.4} x={730} y={1180} s={0.85}><Person c={P.blue} mood="talk" /></Pop>
      <Pop t={t} at={27.3} x={500} y={1060}><TT size={60}>≠</TT></Pop>
      <Pop t={t} at={29.8} x={250} y={1400} s={0.55}><Briefcase /></Pop>
      <Pop t={t} at={30.8} x={500} y={1400}><Coin r={52} /></Pop>
      <Pop t={t} at={31.6} x={740} y={1400} s={1.2}><Heart /></Pop>
    </g>
  </g>
);

// 6. KHÔNG CHỈ MAY RỦI — CÁCH BẠN ĐÃ VẬN HÀNH ĐỂ ĐI QUA 32.36–39.52
const S6: React.FC<SP> = ({t}) => {
  const k = A(t, 37.0, 2.2);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={32.4} note="Nói đơn giản hơn" text="Không chỉ may rủi" size={96} />
      <g filter="url(#wob)">
        <Pop t={t} at={34.2} x={260} y={820} r={-8}><Dice /></Pop>
        <Pop t={t} at={35.4} x={360} y={720} s={0.9}><Cross /></Pop>
        <Lbl at={34.6} t={t} x={620} y={820} w={300} fill="#fff" r={2} size={36}>may rủi?</Lbl>
        <path d="M140 1360 C300 1180 420 1400 560 1220 S800 1080 880 1100" fill="none" stroke={P.navy} strokeWidth={8} strokeDasharray="22 18" strokeLinecap="round" opacity={A(t, 36.5) * 0.8} />
        <g opacity={A(t, 36.5)} transform={`translate(${160 + k * 640} ${1330 - k * 220}) scale(0.55)`}><Person c={P.coral} mood="smile" /></g>
        <Lbl at={38.0} t={t} x={430} y={1480} w={460} fill={P.yellow} r={-1} size={36}>cách bạn đã đi qua</Lbl>
      </g>
    </g>
  );
};

// 7. ĐÁNG TỰ HÀO 39.52–41.45
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={39.56} note="Đó là điều" text="Đáng tự hào" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={39.8} x={500} y={1040}><Medal /></Pop>
      <Pop t={t} at={40.3} x={240} y={880}><Star x={0} y={0} s={2.2} /></Pop>
      <Pop t={t} at={40.5} x={770} y={900}><Star x={0} y={0} s={2.2} /></Pop>
      <Pop t={t} at={40.7} x={720} y={1280}><Star x={0} y={0} s={2.2} /></Pop>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 41.45–45.71
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={41.45} strikeAt={42.4} gearAt={43.8} okAt={44.3} tint={P.mint} />;

// 9. TRƯỚC 2027, NHÌN LẠI MÌNH 45.71–50.08
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={45.76} note="Trước khi sang 2027" text="Nhìn lại mình" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={46.2} x={260} y={820} r={-4}><Calendar label="2027" /></Pop>
      <Pop t={t} at={48.4} x={600} y={1050}><Mirror /></Pop>
      <Pop t={t} at={48.9} x={600} y={1110} s={0.6}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={49.2} t={t} x={300} y={1380} w={320} fill={P.yellow} r={-2} size={36}>một lần</Lbl>
    </g>
  </g>
);

// 10. CTA 50.08–hết
const S10: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={50.12} note="Bạn sinh năm 1987?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={50.4} x={500} y={820} s={0.85}><GZ can="Đinh" chi="Mão" year="1987" /></Pop>
      <CommentBar t={t} at={53.2} text="1987 · nhật chủ …" y={1160} dur={1.4} />
      <Lbl at={55.0} t={t} x={500} y={1300} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={55.3} x={500} y={1360} />
      <Pop t={t} at={55.6} x={820} y={1310}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 7.03, C: S1}, {s: 7.03, e: 12.64, C: S2}, {s: 12.64, e: 19.24, C: S3}, {s: 19.24, e: 24.93, C: S4},
  {s: 24.93, e: 32.36, C: S5}, {s: 32.36, e: 39.52, C: S6}, {s: 39.52, e: 41.45, C: S7}, {s: 41.45, e: 45.71, C: S8},
  {s: 45.71, e: 50.08, C: S9}, {s: 50.08, e: 57.33, C: S10},
];

export const BaziR29: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r29.mp3" phrases={cap.phrases} scenes={SCENES} />;
