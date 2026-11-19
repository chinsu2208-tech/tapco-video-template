import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Person, Briefcase, Calendar, Clock, Block, Bolt, Tick, Cross, Tag, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle} from './BaziHand';
import {GZ, Note} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import {Sign} from './BaziR23';
import cap from './capR33.json';

// ====== Dòng 33 · Sinh năm 1998 (Mậu Dần, can Mậu hành Thổ), càng làm lâu càng muốn đi · Quan Sát · lưu niên · 9 cảnh ======
// Can chi lấy từ STEM/BR qua GZ: 1998 Mậu Dần, lưu niên 2026 Bính Ngọ. Mức áp lực/trụ bị kích hoạt chỉ là minh hoạ, không phải lá số thật.
// Mốc: src/capR33.json (align_dp)
export const R33_TOTAL = totalFrames(44.616);

// cánh cửa ra
const Door: React.FC<{open: number}> = ({open}) => (
  <g>
    <rect x={-110} y={-200} width={220} height={400} rx={10} fill={P.sky} {...L} />
    <g transform={`translate(-110 0) scale(${1 - 0.55 * open} 1) translate(110 0)`}>
      <rect x={-110} y={-200} width={220} height={400} rx={10} fill={P.peach} {...L} />
      <circle cx={70} cy={10} r={14} fill={P.yellow} {...L} strokeWidth={4} />
    </g>
    <rect x={-80} y={-260} width={160} height={52} rx={10} fill={P.mint} {...L} strokeWidth={4} />
    <text y={-222} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={32} fill={P.navy}>LỐI RA</text>
  </g>
);

// 1. HOOK 0–4.42
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1998" text="Muốn đi" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.9} x={300} y={1180}><Person c={P.yellow} mood={t > 3.4 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={1.3} x={170} y={1000} s={0.5}><Briefcase /></Pop>
      <Pop t={t} at={2.4} x={330} y={720} s={0.75}><Clock t={t} /></Pop>
      <Lbl at={2.6} t={t} x={330} y={860} w={290} fill="#fff" r={-2} size={34}>càng làm lâu</Lbl>
      <Pop t={t} at={3.9} x={700} y={1020} s={0.9}><Door open={A(t, 4.0, 0.6)} /></Pop>
      <Pop t={t} at={4.1} x={520} y={1100}><TT size={80}>→</TT></Pop>
    </g>
  </g>
);

// 2. CÁCH LÁ SỐ XỬ LÝ ÁP LỰC 4.42–9.43
const S2: React.FC<SP> = ({t}) => {
  const drop = A(t, 8.9, 0.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={4.48} note="Điều ít người để ý" text="Áp lực" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={5.4} x={500} y={1250}><Person c={P.blue} mood={drop > 0.5 ? 'sad' : 'flat'} /></Pop>
        <g transform={`translate(500 ${700 + 220 * drop})`} opacity={A(t, 8.6, 0.3)}><Block txt="áp lực" w={340} h={150} /></g>
        <Pop t={t} at={8.0} x={800} y={700}><TT size={110}>?</TT></Pop>
        <Lbl at={8.2} t={t} x={500} y={1440} w={420} fill={P.yellow} r={-1} size={36}>lá số xử lý ra sao</Lbl>
      </g>
    </g>
  );
};

// 3. BỐN TRỤ 9.43–13.32
const PAT = [10.9, 11.3, 11.95, 12.55];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={9.5} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={980} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Note t={t} at={12.8} x={500} y={1330} size={30}>năm · tháng · ngày · giờ</Note>
    </g>
  </g>
);

// 4. QUAN SÁT = ÁP LỰC TỪ NGOÀI → NHẬT CHỦ 13.32–19.02
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.silver} />
    <Head t={t} at={13.38} note="Thập thần" text="Quan Sát" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={15.0} x={270} y={790} vi="Quan Sát" han="官殺" fill={P.silver} r={-3} w={340} />
      {[0, 1, 2].map((i) => (
        <Pop key={i} t={t} at={16.4 + i * 0.25} x={600 + i * 110} y={700 + i * 60} s={0.42} r={30 + i * 8}><Bolt c={P.coral} /></Pop>
      ))}
      <Lbl at={16.6} t={t} x={690} y={560} w={330} fill={P.coral} r={2} size={32}>áp lực bên ngoài</Lbl>
      <Pop t={t} at={17.6} x={650} y={1260}><Person c={P.yellow} mood="flat" /></Pop>
      <ArrowDown t={t} at={17.3} x={650} y={960} />
      <Lbl at={18.2} t={t} x={300} y={1220} w={230} fill={P.yellow} r={-2} size={36}>nhật chủ</Lbl>
    </g>
  </g>
);

// 5. 1998 MẬU DẦN · HÀNH THỔ 19.02–22.42
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={19.08} note="Năm sinh này" text="Mậu Dần" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={20.6} x={330} y={960} s={0.95} r={-2}><GZ can="Mậu" chi="Dần" year="1998" /></Pop>
      <Pop t={t} at={21.7} x={720} y={880} s={1.6}><Doodle el="Thổ" /></Pop>
      <Lbl at={21.9} t={t} x={720} y={1080} w={250} fill={P.yellow} r={2} size={40}>hành Thổ</Lbl>
      <Note t={t} at={22.0} x={720} y={1170} size={26}>theo can Mậu</Note>
      <Note t={t} at={21.0} x={330} y={1300} size={26}>năm tính từ Lập xuân</Note>
    </g>
  </g>
);

// 6. NGỘT NGẠT CUỐI NĂM — LƯU NIÊN KÍCH HOẠT 22.42–29.66
const S6: React.FC<SP> = ({t}) => {
  const zap = A(t, 28.2, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={22.48} note="Cảm giác cuối năm" text="Ngột ngạt" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={24.9} x={220} y={720} s={0.75}><Calendar label="cuối năm" /></Pop>
        <Pop t={t} at={25.6} x={520} y={720} s={0.55}><Briefcase /></Pop>
        <Lbl at={26.0} t={t} x={520} y={860} w={290} fill="#fff" r={-2} size={32}>việc tệ?</Lbl>
        <Pop t={t} at={26.4} x={700} y={680}><Cross /></Pop>
        <Pop t={t} at={27.6} x={260} y={1220} s={0.62} r={-2}><GZ can="Bính" chi="Ngọ" year="2026" /></Pop>
        <Lbl at={27.8} t={t} x={260} y={1450} w={230} fill={P.coral} r={-1} size={34}>lưu niên</Lbl>
        {zap > 0.01 && <path d={`M400 1160 L${400 + 230 * zap} ${1160 - 30 * zap}`} stroke={P.red} strokeWidth={10} strokeLinecap="round" />}
        <Pop t={t} at={28.6} x={720} y={1180} s={0.7}><Pillar name="trụ ?" fill={P.mint} hi={0.5 + 0.5 * Math.sin((t - 28.6) * 6)} /></Pop>
        <Note t={t} at={29.0} x={720} y={1350} size={26}>một phần lá số · minh hoạ</Note>
      </g>
    </g>
  );
};

// 7. TRƯỚC KHI ĐỔI MÔI TRƯỜNG: HIỂU KIỂU ÁP LỰC 29.66–34.58
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={29.72} note="Nói đơn giản hơn" text="Hiểu trước" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={31.3} x={500} y={900}><Sign a="ở lại" b="đổi chỗ" /></Pop>
      <Pop t={t} at={32.3} x={760} y={1120}><TT size={110}>?</TT></Pop>
      <Pop t={t} at={33.6} x={300} y={1260} s={0.6}><Block txt="áp lực" /></Pop>
      <Lbl at={34.2} t={t} x={560} y={1400} w={420} fill={P.yellow} r={-1} size={38}>kiểu nào của mình?</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 34.58–38.52
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.58} strikeAt={35.6} gearAt={37.2} okAt={37.7} tint={P.mint} />;

// 9. CTA 38.52–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={38.58} note="Bạn sinh năm 1998?" text="Để lại năm sinh" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={39.3} x={300} y={830} s={0.6} r={-3}><GZ can="Mậu" chi="Dần" year="1998" /></Pop>
      <Pop t={t} at={40.0} x={680} y={880}><Person c={P.yellow} mood="talk" /></Pop>
      <CommentBar t={t} at={41.6} text="1998 · nhật chủ …" y={1130} dur={1.2} />
      <Lbl at={43.2} t={t} x={500} y={1290} w={420} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={43.6} x={500} y={1350} />
      <Pop t={t} at={43.8} x={800} y={1290}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.42, C: S1}, {s: 4.42, e: 9.43, C: S2}, {s: 9.43, e: 13.32, C: S3}, {s: 13.32, e: 19.02, C: S4},
  {s: 19.02, e: 22.42, C: S5}, {s: 22.42, e: 29.66, C: S6}, {s: 29.66, e: 34.58, C: S7}, {s: 34.58, e: 38.52, C: S8},
  {s: 38.52, e: 45.02, C: S9},
];

export const BaziR33: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r33.mp3" phrases={cap.phrases} scenes={SCENES} />;
