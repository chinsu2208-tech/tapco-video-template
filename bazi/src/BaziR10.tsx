import React from 'react';
import {P, HAND, L, Page, Star, A, cl, Pop, TT, Lbl, Head, Person, Book, Seal, Umbrella, Rain, Shield, Briefcase, Card, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import cap from './capR10.json';

// ====== Dòng 10 · Chính Ấn & Thiên Ấn: học hỏi, che chở, quý nhân · 7 cảnh ======
// Hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR10.json
export const R10_TOTAL = totalFrames(53.112); // 1606

const BOOKC = [P.blue, P.coral, P.mint, P.yellow, P.silver, P.peach];

// 1. HOOK 0–8.25: khoá này chưa xong đã đăng ký khoá khác + cần người đỡ phía sau
const S1: React.FC<SP> = ({t}) => {
  const n = 1 + Math.floor(cl((t - 1.8) / 2.6) * 4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={0.05} note="Khoá này chưa xong đã" text="Học thêm" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={620} y={1300} s={1.35}><Person c={P.coral} mood="smile" /></Pop>
        {Array.from({length: 5}).map((_, i) => i < n ? <g key={i} transform={`translate(${260 + (i % 2 ? 14 : -10)} ${1340 - i * 66}) rotate(${(i % 2 ? 3 : -3)})`} opacity={A(t, 1.8 + (i - 1) * 0.65, 0.25)}><Book c={BOOKC[i]} /></g> : null)}
        <Lbl at={2.8} t={t} x={300} y={760} w={360} fill="#fff" r={-3} size={38}>chưa xong…</Lbl>
        <Lbl at={4.0} t={t} x={680} y={720} w={380} fill={P.yellow} r={2} size={38}>đăng ký tiếp!</Lbl>
        <Pop t={t} at={7.0} x={860} y={1300} s={1.0}><Person c={P.mint} mood="smile" /></Pop>
        <g opacity={A(t, 7.3)}><path d="M800 1180 Q760 1150 720 1170" fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" /></g>
        <Lbl at={7.2} t={t} x={780} y={1440} w={360} fill={P.mint} r={-2} size={36}>người đỡ phía sau</Lbl>
      </g>
    </g>
  );
};

// 2. ẤN = con dấu 8.25–16.86
const S2: React.FC<SP> = ({t}) => {
  const st = A(t, 10.9, 0.25);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={8.35} note="Trong bát tự gọi là" text="Ấn" size={130} />
      <g filter="url(#wob)">
        <g transform={`translate(500 ${760 - (1 - st) * 160}) scale(${1.4 - 0.4 * st}) rotate(-4)`} opacity={cl((t - 10.6) / 0.15)}><Seal /></g>
        <Lbl at={13.0} t={t} x={260} y={1040} w={300} fill={P.blue} r={-3} size={40}>học hỏi</Lbl>
        <Lbl at={13.7} t={t} x={720} y={1040} w={300} fill={P.mint} r={2} size={40}>che chở</Lbl>
        <Lbl at={15.2} t={t} x={260} y={1190} w={300} fill={P.yellow} r={2} size={40}>quý nhân</Lbl>
        <Lbl at={16.2} t={t} x={720} y={1190} w={300} fill={P.coral} r={-2} size={40}>người mẹ</Lbl>
        <Star x={820} y={620} s={A(t, 11.1) * 1.2} />
      </g>
    </g>
  );
};

// 3. ĐƯA Ô KHI TRỜI MƯA 16.86–21.34
const S3: React.FC<SP> = ({t}) => {
  const u = A(t, 19.6, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={16.95} note="Giống như người" text="Đưa ô" size={150} />
      <g filter="url(#wob)">
        <Rain t={t} x={150} y={560} w={720} h={700} o={A(t, 17.2) * (1 - 0.6 * u)} />
        <Pop t={t} at={17.3} x={380} y={1300} s={1.3}><Person c={P.blue} mood={u > 0.5 ? 'smile' : 'sad'} /></Pop>
        <Pop t={t} at={18.6} x={700} y={1300} s={1.15}><Person c={P.coral} mood="smile" /></Pop>
        <g transform={`translate(${460 + 80 * (1 - u)} ${830 + 120 * (1 - u)})`} opacity={u}><Umbrella /></g>
        <Lbl at={20.7} t={t} x={540} y={1440} w={400} fill={P.yellow} r={-1} size={42}>khi trời mưa</Lbl>
      </g>
    </g>
  );
};

// 4. HAI DẠNG 21.34–30.0
const Steps: React.FC = () => <g>{[0, 1, 2].map((i) => <rect key={i} x={-110 + i * 70} y={40 - i * 50} width={80} height={50 + i * 50} fill={[P.mint, P.yellow, P.coral][i]} stroke={P.navy} strokeWidth={5} />)}</g>;
const Trail: React.FC<{k: number}> = ({k}) => (
  <g><path d="M-110 70 C-40 70 -90 -10 -10 -10 C70 -10 20 -80 100 -80" fill="none" stroke={P.navy} strokeWidth={7} strokeDasharray="14 14" strokeLinecap="round" opacity={k} /><circle cx={100} cy={-80} r={18} fill={P.red} stroke={P.navy} strokeWidth={4} opacity={k} /></g>
);
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={21.4} note="Ấn có" text="Hai dạng" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={22.9} x={290} y={770} vi="Chính Ấn" han="正印" fill={P.mint} r={-2} />
      <Pop t={t} at={24.6} x={290} y={1060} s={0.9}><Steps /></Pop>
      <Lbl at={24.6} t={t} x={290} y={1200} w={300} fill="#fff" r={-2} size={38}>bài bản</Lbl>
      <Lbl at={25.4} t={t} x={290} y={1310} w={300} fill={P.yellow} r={2} size={38}>hệ thống</Lbl>
      <TermCard t={t} at={26.25} x={730} y={770} vi="Thiên Ấn" han="偏印" fill={P.coral} r={2} />
      <g transform="translate(730 1060)" opacity={A(t, 27.7)}><Trail k={A(t, 27.7, 0.8)} /></g>
      <Lbl at={27.8} t={t} x={730} y={1200} w={300} fill="#fff" r={2} size={38}>lối riêng</Lbl>
      <Lbl at={28.7} t={t} x={730} y={1310} w={320} fill={P.yellow} r={-2} size={38}>tự tìm hướng</Lbl>
    </g>
  </g>
);

// 5. CHỖ DỰA → HỌC THÊM → AN TOÀN 30.0–41.64
const S5: React.FC<SP> = ({t}) => {
  const n = Math.floor(cl((t - 36.6) / 1.2) * 4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={30.1} note="Chỉ thấy đủ vững khi có" text="Chỗ dựa" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={33.9} x={260} y={1000} s={1}><g><rect x={-40} y={-260} width={80} height={300} rx={10} fill={P.silver} {...L} /><rect x={-70} y={40} width={140} height={34} rx={8} fill={P.silver} {...L} strokeWidth={5} /></g></Pop>
        <Pop t={t} at={32.0} x={400} y={1040} s={1.1} r={-8}><Person c={P.blue} mood="flat" /></Pop>
        <Lbl at={34.6} t={t} x={300} y={1180} w={300} fill={P.mint} r={-2} size={40}>chỗ dựa</Lbl>
        {Array.from({length: 4}).map((_, i) => i < n ? <g key={i} transform={`translate(${700 + (i % 2 ? 10 : -10)} ${1000 - i * 64})`}><Book c={BOOKC[i + 1]} w={220} /></g> : null)}
        <Lbl at={36.8} t={t} x={700} y={1100} w={300} fill="#fff" r={2} size={40}>học thêm</Lbl>
        <Pop t={t} at={37.9} x={700} y={620} s={0.85}><Shield /></Pop>
        <Lbl at={38.3} t={t} x={720} y={480} w={300} fill={P.yellow} r={-2} size={36}>an toàn</Lbl>
        <Pop t={t} at={39.0} x={260} y={1340} s={0.55}><Briefcase /></Pop>
        <Lbl at={39.2} t={t} x={300} y={1450} w={300} fill="#fff" r={-1} size={36}>công việc</Lbl>
        <Lbl at={40.7} t={t} x={690} y={1400} w={400} fill={P.coral} r={2} size={36}>áp lực cuộc sống</Lbl>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI SỐ PHẬN 41.64–46.14
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={41.64} strikeAt={42.6} gearAt={43.6} okAt={44.6} />;

// 7. CTA 46.14–hết: quý nhân của bạn
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={46.2} note="Ai là quý nhân của bạn?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={46.6} x={360} y={960} s={1.2}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={47.0} x={640} y={960} s={1.2}><Person c={P.yellow} mood="smile" /></Pop>
      <Star x={640} y={640} s={A(t, 47.3) * 1.5} /><Star x={250} y={620} s={A(t, 47.5)} /><Star x={820} y={760} s={A(t, 47.7)} />
      <CommentBar t={t} at={48.2} text="Quý nhân của mình là…" y={1120} dur={1.6} />
      <Lbl at={49.4} t={t} x={500} y={1280} w={560} fill={P.yellow} r={-1} size={40}>tên hoặc nhật chủ</Lbl>
      <ArrowDown t={t} at={51.2} x={500} y={1360} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 8.25, C: S1}, {s: 8.25, e: 16.86, C: S2}, {s: 16.86, e: 21.34, C: S3}, {s: 21.34, e: 30.0, C: S4},
  {s: 30.0, e: 41.64, C: S5}, {s: 41.64, e: 46.14, C: S6}, {s: 46.14, e: 53.52, C: S7},
];

export const BaziR10: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r10.mp3" phrases={cap.phrases} scenes={SCENES} />;
