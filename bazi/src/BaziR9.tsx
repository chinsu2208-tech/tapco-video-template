import React from 'react';
import {P, HAND, L, Page, Star, A, cl, Pop, TT, Lbl, Head, Person, Clock, Phone, Briefcase, Bolt, Burst, Block, Tick, Card, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import cap from './capR9.json';

// ====== Dòng 9 · Chính Quan & Thất Sát: áp lực công việc · 7 cảnh ======
// Hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR9.json
export const R9_TOTAL = totalFrames(48.168); // 1458

// 1. HOOK 0–8.3: sáng mở mắt đã thấy deadline + tin nhắn sếp
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Sáng mở mắt đã thấy" text="Nặng đầu" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.9} x={280} y={1250} s={1.4}><Person c={P.blue} mood={t < 5.5 ? 'flat' : 'sad'} /></Pop>
      <Pop t={t} at={1.9} x={250} y={700} s={0.95}><Clock t={t} ring={t > 1.9 && t < 3.6} /></Pop>
      <Pop t={t} at={3.4} x={700} y={820} s={1.05}>
        <Phone>
          <g opacity={A(t, 3.6)}><rect x={-86} y={-140} width={172} height={64} rx={14} fill={P.coral} stroke={P.navy} strokeWidth={4} /><text y={-98} textAnchor="middle" fontFamily={HAND} fontSize={34} fill={P.navy}>deadline!</text></g>
          <g opacity={A(t, 4.5)}><rect x={-86} y={-60} width={172} height={64} rx={14} fill="#fff" stroke={P.navy} strokeWidth={4} /><text y={-18} textAnchor="middle" fontFamily={HAND} fontSize={34} fill={P.navy}>Sếp: ?</text></g>
          <g opacity={A(t, 5.0)}><rect x={-86} y={20} width={172} height={64} rx={14} fill="#fff" stroke={P.navy} strokeWidth={4} /><text y={62} textAnchor="middle" fontFamily={HAND} fontSize={34} fill={P.navy}>Sếp: ??</text></g>
        </Phone>
      </Pop>
      <Lbl at={7.3} t={t} x={680} y={1340} w={420} fill={P.yellow} r={2} size={40}>khá phổ biến</Lbl>
    </g>
  </g>
);

// 2. QUAN SÁT 8.3–16.57
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={8.4} note="Một nhóm thập thần" text="Quan Sát" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={11.4} x={300} y={720} vi="Chính Quan" han="正官" fill={P.silver} r={-2} />
      <TermCard t={t} at={11.8} x={720} y={720} vi="Thất Sát" han="七殺" fill={P.coral} r={2} />
      <Lbl at={13.6} t={t} x={280} y={1010} w={300} fill={P.coral} r={-3} size={40}>áp lực</Lbl>
      <Lbl at={14.1} t={t} x={720} y={1010} w={300} fill={P.yellow} r={2} size={40}>kỷ luật</Lbl>
      <Lbl at={14.8} t={t} x={280} y={1150} w={300} fill={P.mint} r={2} size={40}>quy tắc</Lbl>
      <Pop t={t} at={16.0} x={720} y={1210} s={0.6}><Briefcase /></Pop>
      <Lbl at={16.1} t={t} x={720} y={1320} w={300} fill={P.blue} r={-2} size={40}>cấp trên</Lbl>
    </g>
  </g>
);

// 3. CHÍNH QUAN 16.57–21.11: luật êm, có khuôn có phép (đường ray thẳng)
const S3: React.FC<SP> = ({t}) => {
  const walk = cl((t - 17.4) / 3.4);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={16.65} note="Kiểu luật êm" text="Chính Quan" size={140} />
      <g filter="url(#wob)">
        <g opacity={A(t, 16.9, 0.4)}>
          <path d="M180 1240 H860 M180 1340 H860" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
          {Array.from({length: 8}).map((_, i) => <path key={i} d={`M${210 + i * 90} 1240 V1340`} stroke={P.orange} strokeWidth={10} strokeLinecap="round" />)}
        </g>
        <g transform={`translate(${240 + walk * 520} 1250) scale(0.9)`} opacity={A(t, 17.2)}><Person c={P.mint} mood="smile" /></g>
        <Pop t={t} at={18.9} x={300} y={720} s={1}><Card x={-160} y={-110} w={320} h={220} fill={P.silver}><g transform="translate(160 120)">{[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={-75 + c * 52} y={-60 + r * 42} width={44} height={34} rx={6} fill="#fff" stroke={P.navy} strokeWidth={4} />))}</g></Card></Pop>
        <Lbl at={19.2} t={t} x={300} y={900} w={380} fill="#fff" r={-2} size={38}>có khuôn có phép</Lbl>
        <Pop t={t} at={20.2} x={720} y={720} s={1.6}><Tick /></Pop>
        <Lbl at={20.3} t={t} x={720} y={900} w={300} fill={P.yellow} r={2} size={40}>rõ ràng</Lbl>
      </g>
    </g>
  );
};

// 4. THẤT SÁT 21.11–24.78: áp lực gắt, đến nhanh, dồn dập
const S4: React.FC<SP> = ({t}) => {
  const shake = t > 24.2 && t < 24.9 ? Math.sin(t * 90) * 7 : 0;
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={21.2} note="Áp lực gắt" text="Thất Sát" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={22.3} x={280} y={760} s={1.1}><Bolt c={P.coral} /></Pop>
        <Lbl at={22.4} t={t} x={280} y={940} w={240} fill={P.coral} r={-3} size={42}>gắt</Lbl>
        {[0, 1, 2].map((i) => {
          const k = A(t, 23.1 + i * 0.12, 0.25);
          return <g key={i} transform={`translate(${800 - k * 200 - i * 60} ${700 + i * 80})`} opacity={k}><path d="M-60 0 H40 M-80 30 H20" stroke={P.navy} strokeWidth={6} strokeLinecap="round" /><circle cx={60} cy={15} r={22} fill={P.yellow} stroke={P.navy} strokeWidth={4} /></g>;
        })}
        <Lbl at={23.1} t={t} x={700} y={940} w={280} fill={P.yellow} r={2} size={42}>nhanh</Lbl>
        {[0, 1, 2, 3, 4].map((i) => <Pop key={i} t={t} at={24.0 + i * 0.1} x={360 + i * 70 + shake} y={1260 - i * 46} r={(i % 2 ? 4 : -4)}><rect x={-120} y={-22} width={240} height={44} rx={6} fill={i % 2 ? '#fff' : P.silver} {...L} strokeWidth={4} /></Pop>)}
        <Pop t={t} at={24.3} x={740 + shake} y={1340} s={0.6}><Burst txt="dồn!" size={60} /></Pop>
      </g>
    </g>
  );
};

// 5. BỊ ĐÈ – KHÔNG PHẢI BẠN YẾU 24.78–34.74
const S5: React.FC<SP> = ({t}) => {
  const press = A(t, 27.2, 0.6) * (1 - A(t, 33.3, 0.6));
  const lift = A(t, 33.3, 0.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={24.85} note="Cảm giác bị đè" text="Trong công việc" size={120} />
      <g filter="url(#wob)">
        <g transform={`translate(500 ${1300}) scale(1.3 ${1.3 - 0.25 * press})`} opacity={A(t, 25.0)}><Person c={P.blue} mood={lift > 0.5 ? 'smile' : 'sad'} /></g>
        <g transform={`translate(500 ${960 - 300 * (1 - A(t, 27.0, 0.5)) - 140 * lift + 30 * press})`} opacity={A(t, 27.0, 0.2)}><Block txt="Quan Sát" /></g>
        {[0, 1, 2].map((i) => <g key={i} opacity={A(t, 29.4 + i * 0.25) * (1 - lift)}><path d={`M${330 + i * 170} 640 V${780}`} stroke={P.red} strokeWidth={9} strokeLinecap="round" /><path d={`M${305 + i * 170} 755 L${330 + i * 170} 790 L${355 + i * 170} 755`} fill="none" stroke={P.red} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" /></g>)}
        <Lbl at={30.3} t={t} x={500} y={600} w={440} fill={P.yellow} r={-1} size={38}>nhóm năng lượng</Lbl>
        <Lbl at={33.3} t={t} x={500} y={1460} w={560} fill={P.mint} r={-1} size={42}>không hẳn do bạn yếu</Lbl>
        <Pop t={t} at={33.9} x={830} y={1350}><Tick /></Pop>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI SỐ PHẬN 34.74–40.63
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.74} strikeAt={37.7} gearAt={38.6} okAt={39.4} />;

// 7. CTA 40.63–hết
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={40.7} note="Áp lực lớn nhất của bạn?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={41.0} x={500} y={780} s={0.9}><Block txt="áp lực ?" w={420} /></Pop>
      <Star x={250} y={640} s={A(t, 41.4) * 1.2} /><Star x={780} y={900} s={A(t, 41.6)} />
      <CommentBar t={t} at={42.2} text="Áp lực lớn nhất của mình là…" y={1080} dur={1.8} />
      <Lbl at={44.6} t={t} x={500} y={1240} w={560} fill={P.yellow} r={-1} size={40}>+ nhật chủ (nếu biết)</Lbl>
      <ArrowDown t={t} at={46.4} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 8.3, C: S1}, {s: 8.3, e: 16.57, C: S2}, {s: 16.57, e: 21.11, C: S3}, {s: 21.11, e: 24.78, C: S4},
  {s: 24.78, e: 34.74, C: S5}, {s: 34.74, e: 40.63, C: S6}, {s: 40.63, e: 48.6, C: S7},
];

export const BaziR9: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r9.mp3" phrases={cap.phrases} scenes={SCENES} />;
