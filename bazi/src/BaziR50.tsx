import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Tag, Block, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Pillar, PIL, PF, Drop} from './BaziR17';
import {Metro} from './BaziR23';
import {LaSo} from './BaziR49';
import cap from './capR50.json';

// ====== Dòng 50 · Sinh năm 1993, chăm chỉ mà nhịp lệch · nhật chủ & nhịp riêng · 8 cảnh ======
// Can chi 1993 Quý Dậu lấy từ bảng STEM/BR. Không có lá số thật (trụ để "?"). Mốc: src/capR50.json (align_dp)
export const R50_TOTAL = totalFrames(50.76);

// 1. HOOK 0–5.24 · chăm chỉ mà nhịp lệch
const S1: React.FC<SP> = ({t}) => {
  const sw = Math.sin(t * 5) * (0.4 + 0.6 * A(t, 3.6, 0.6));
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 1993" text="Nhịp bị lệch" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={260} y={860} s={0.6} r={-3}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
        <Note t={t} at={1.0} x={260} y={1050} size={26}>năm bát tự tính từ Lập xuân</Note>
        <Pop t={t} at={1.8} x={640} y={1280} s={1.3}><Person c={P.blue} mood="flat" /></Pop>
        <Lbl at={2.4} t={t} x={640} y={1440} w={300} fill={P.mint} r={-2} size={34}>làm đủ chăm chỉ</Lbl>
        <Pop t={t} at={3.6} x={660} y={800} s={0.85}><Metro k={sw + 0.6} c={P.coral} /></Pop>
        <Lbl at={4.2} t={t} x={300} y={1220} w={280} fill={P.yellow} r={2} size={36}>vẫn lệch</Lbl>
      </g>
    </g>
  );
};

// 2. THỨ ÍT AI ĐỂ Ý · NHẬT CHỦ 5.24–10.37
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={5.3} note="Ít người để ý" text="Nhật chủ" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={6.6} x={310} y={950} r={-3}><LaSo /></Pop>
      <Lbl at={7.6} t={t} x={310} y={1210} w={280} fill="#fff" r={2} size={34}>trong lá số</Lbl>
      <Pop t={t} at={9.1} x={680} y={950}><g><circle r={120} fill={P.yellow} {...L} /><TT size={40} y={14}>nhật chủ</TT></g></Pop>
      <Lbl at={9.6} t={t} x={680} y={1150} w={260} fill={P.mint} r={-2} size={34}>chìa khoá</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ · CAN TRÊN CHI DƯỚI 10.37–16.64
const PAT = [10.6, 12.2, 12.96, 13.44];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.42} note="Bát tự gồm" text="Bốn trụ" size={145} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={150 + i * 200} y={930} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>
      ))}
      <Lbl at={14.6} t={t} x={300} y={1180} w={280} fill="#fff" r={-2} size={34}>trên: thiên can</Lbl>
      <Lbl at={15.6} t={t} x={660} y={1180} w={280} fill={P.yellow} r={2} size={34}>dưới: địa chi</Lbl>
      <Note t={t} at={11} x={450} y={1300} size={26}>khung trống · chưa có lá số thật</Note>
    </g>
  </g>
);

// 4. CAN NGÀY = NHẬT CHỦ · 1993 QUÝ DẬU · THỦY 16.64–23.48
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={16.7} note="Can trụ ngày" text="Là nhật chủ" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={17.0} x={250} y={930} s={0.85}><Pillar name="ngày" fill={P.coral} hi={A(t, 18.2, 0.4)} /></Pop>
      <Lbl at={18.6} t={t} x={250} y={1180} w={260} fill="#fff" r={-2} size={34}>= nhật chủ</Lbl>
      <Pop t={t} at={19.6} x={640} y={900} s={0.62} r={2}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
      <Note t={t} at={20.2} x={640} y={1090} size={26}>đây là trụ năm</Note>
      <Pop t={t} at={22.4} x={640} y={1260} s={0.7}><Drop /></Pop>
      <Lbl at={22.6} t={t} x={430} y={1300} w={200} fill={P.blue} r={2} size={36}>Thủy</Lbl>
    </g>
  </g>
);

// 5. MỖI NGƯỜI MỘT NHỊP 23.48–29.92
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={23.53} note="Mỗi người có" text="Nhịp riêng" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={27.1} x={290} y={900} s={0.95}><Metro k={Math.sin(t * 12)} c={P.coral} /></Pop>
      <Lbl at={27.4} t={t} x={290} y={1120} w={260} fill={P.coral} r={-2} size={36}>chạy nhanh</Lbl>
      <Pop t={t} at={28.4} x={680} y={900} s={0.95}><Metro k={Math.sin(t * 3)} c={P.mint} /></Pop>
      <Lbl at={28.8} t={t} x={680} y={1120} w={300} fill={P.mint} r={2} size={36}>chậm mà chắc</Lbl>
      <Pop t={t} at={24.6} x={480} y={1320}><Tag w={460} h={90} fill="#fff"><TT size={36} y={12}>nhịp vận hành riêng</TT></Tag></Pop>
    </g>
  </g>
);

// 6. ÉP THEO NHỊP NGƯỜI KHÁC → ÁP LỰC 29.92–37.05
const AP: [string, string, number, number][] = [['công việc', P.mint, 34.4, 210], ['tiền bạc', P.yellow, 35.3, 480], ['tình cảm', P.peach, 36.3, 750]];
const S6: React.FC<SP> = ({t}) => {
  const sq = 1 - 0.18 * A(t, 32.6, 0.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={29.97} note="Nói đơn giản hơn" text="Đừng ép mình" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={31.8} x={300} y={900} s={0.8}><Metro k={Math.sin(t * 12)} c={P.coral} /></Pop>
        <Note t={t} at={32.0} x={300} y={1100} size={26}>nhịp người khác</Note>
        <g transform={`translate(660 1000) scale(${1.2} ${1.2 * sq})`}><Pop t={t} at={31.6} x={0} y={0}><Person c={P.blue} mood="sad" /></Pop></g>
        <Pop t={t} at={33.2} x={660} y={720} s={0.7}><Block w={300} h={130} txt="áp lực" /></Pop>
        {AP.map(([s, c, at, x], i) => (
          <Pop key={s} t={t} at={at} x={x} y={1300 + (i % 2) * 30} r={(i - 1) * 3}><Tag w={230} h={90} fill={c}><TT size={34} y={12}>{s}</TT></Tag></Pop>
        ))}
      </g>
    </g>
  );
};

// 7. HIỂU CÁCH VẬN HÀNH TRƯỚC 2027 · KHÔNG PHẢI SỐ PHẬN 37.05–44.24
const S7: React.FC<SP> = ({t}) => (
  <NotDestiny t={t} s={37.05} gearAt={38.4} okAt={39.4} strikeAt={42.8} tint={P.mint}
    extra={<Pop t={t} at={41.2} x={760} y={1000} r={4}><Tag w={230} h={96} fill={P.coral}><TT size={38} y={13}>trước 2027</TT></Tag></Pop>} />
);

// 8. CTA 44.24–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={44.3} note="Sinh năm 1993 nào" text="Nhật chủ gì?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={44.6} x={270} y={860} s={0.62} r={-3}><GZ can="Quý" chi="Dậu" year="1993" /></Pop>
      <Pop t={t} at={45.4} x={640} y={960} s={1.3}><Person c={P.blue} mood="talk" /></Pop>
      <CommentBar t={t} at={47.0} text="1993 · nhật chủ của mình là …" y={1110} dur={1.5} />
      <Lbl at={49.2} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={49.4} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.24, C: S1}, {s: 5.24, e: 10.37, C: S2}, {s: 10.37, e: 16.64, C: S3}, {s: 16.64, e: 23.48, C: S4},
  {s: 23.48, e: 29.92, C: S5}, {s: 29.92, e: 37.05, C: S6}, {s: 37.05, e: 44.24, C: S7}, {s: 44.24, e: 51.16, C: S8},
];

export const BaziR50: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r50.mp3" phrases={cap.phrases} scenes={SCENES} />;
