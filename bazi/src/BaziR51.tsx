import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Tag, Calendar, Briefcase, Coin, Tick, Cross, Star, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Metro} from './BaziR23';
import cap from './capR51.json';

// ====== Dòng 51 · Nhìn lại năm cũ, thấy mình gồng · lưu niên Bính Ngọ → Đinh Mùi · 9 cảnh ======
// Can chi 2026 Bính Ngọ, 2027 Đinh Mùi lấy từ bảng STEM/BR. Không có lá số thật. Mốc: src/capR51.json (align_dp)
export const R51_TOTAL = totalFrames(48.12);

// 1. HOOK 0–4.79 · nhìn lại năm cũ, gồng quá nhiều
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Nhìn lại năm cũ" text="Gồng quá nhiều" size={118} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={280} y={860} r={-4}><Calendar label="2026" /></Pop>
      <Pop t={t} at={2.0} x={640} y={1200} s={1.4}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={3.2} t={t} x={300} y={1140} w={300} fill={P.coral} r={2} size={36}>gồng quá nhiều</Lbl>
      <Pop t={t} at={3.6} x={800} y={1000} s={0.6}><Star x={0} y={0} s={3} /></Pop>
    </g>
  </g>
);

// 2. LƯU NIÊN · ÍT AI ĐỂ Ý KHI TỔNG KẾT 4.79–8.86
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.84} note="Nguyên nhân nằm ở" text="Lưu niên" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.6} x={480} y={820}><Tag w={420} h={120} fill={P.yellow}><TT size={52} y={18}>lưu niên</TT></Tag></Pop>
      <Pop t={t} at={7.0} x={300} y={1130} r={-3}><g><rect x={-150} y={-120} width={300} height={240} rx={16} fill="#fff" {...L} />{[-60, 0, 60].map((y) => <path key={y} d={`M-110 ${y} H110`} stroke={P.silver} strokeWidth={8} strokeLinecap="round" />)}<TT size={34} y={-74}>tổng kết</TT></g></Pop>
      <Lbl at={7.8} t={t} x={680} y={1130} w={280} fill={P.mint} r={2} size={34}>ít ai để ý</Lbl>
    </g>
  </g>
);

// 3. BÍNH NGỌ · HỎA · NHỊP NHANH · NHẬT CHỦ CHẠY THEO 8.86–16.55
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={8.9} note="Năng lượng từng năm" text="Năm Bính Ngọ" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={11.6} x={270} y={900} s={0.62} r={-3}><GZ can="Bính" chi="Ngọ" year="2026" /></Pop>
      <Lbl at={12.6} t={t} x={270} y={1100} w={220} fill={P.coral} r={2} size={36}>hành Hỏa</Lbl>
      <Pop t={t} at={13.3} x={680} y={880} s={0.9}><Metro k={Math.sin(t * 12)} c={P.coral} /></Pop>
      <Lbl at={13.6} t={t} x={680} y={1090} w={260} fill="#fff" r={-2} size={34}>nhịp nhanh</Lbl>
      <Pop t={t} at={14.6} x={480} y={1330}><Tag w={520} h={90} fill={P.mint}><TT size={36} y={12}>nhật chủ phải chạy theo</TT></Tag></Pop>
    </g>
  </g>
);

// 4. KHÔNG VÌ CẦN · NĂM ĐẨY ĐI 16.55–21.5
const S4: React.FC<SP> = ({t}) => {
  const strike = A(t, 19.4, 0.4);
  const push = A(t, 20.2, 0.8);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={16.6} note="Nói đơn giản hơn" text="Năm đẩy đi" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={18.2} x={300} y={760}><Tag w={280} h={100} fill="#fff"><TT size={42} y={14}>vì cần</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M170 780 L${170 + 260 * strike} 740`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={19.6} x={520} y={740}><Cross /></Pop>
        {push > 0.01 && [0, 1, 2].map((i) => <path key={i} d={`M${130} ${1040 + i * 70} H${130 + 230 * push}`} stroke={P.coral} strokeWidth={14} strokeLinecap="round" opacity={0.9} />)}
        <Pop t={t} at={20.2} x={560 + 90 * push} y={1150} r={10 * push} s={1.3}><Person c={P.blue} mood="flat" /></Pop>
        <Lbl at={20.6} t={t} x={300} y={1330} w={300} fill={P.yellow} r={-2} size={34}>năm ấy đẩy</Lbl>
      </g>
    </g>
  );
};

// 5. KIỂM TRA BA CHỖ 21.5–32.09
const CHK: [string, number, number][] = [['việc nào đã gồng', 27.5, 0], ['tiền nào đã căng', 29.0, 1], ['quan hệ nào đã níu', 30.5, 2]];
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={21.55} note="Trước khi đặt mục tiêu 2027" text="Kiểm tra 3 chỗ" size={118} />
    <g filter="url(#wob)">
      <Pop t={t} at={22.4} x={480} y={1000} r={-1}><rect x={-370} y={-330} width={740} height={660} rx={24} fill="#fff" {...L} /></Pop>
      {CHK.map(([s, at, i]) => (
        <g key={s}>
          <Pop t={t} at={at} x={200} y={790 + i * 200} s={0.55}>{i === 0 ? <Briefcase /> : i === 1 ? <Coin r={70} /> : <Heart />}</Pop>
          <Pop t={t} at={at + 0.15} x={300} y={790 + i * 200}><TT size={40} y={14} x={0} anchor="start">{s}</TT></Pop>
          <Pop t={t} at={at + 0.7} x={760} y={790 + i * 200} s={0.9}><Tick /></Pop>
        </g>
      ))}
    </g>
  </g>
);

// 6. BUÔNG MỘT THỨ CŨNG ĐÁNG TỰ HÀO 32.09–34.78
const S6: React.FC<SP> = ({t}) => {
  const fall = A(t, 32.8, 0.9);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={32.14} note="Buông được một thứ" text="Đáng tự hào" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={32.3} x={420} y={1150} s={1.4}><Person c={P.blue} mood="smile" /></Pop>
        <g opacity={1 - 0.6 * fall} transform={`translate(${640 + 60 * fall} ${820 + 420 * fall}) rotate(${40 * fall})`}><Tag w={200} h={84} fill={P.silver}><TT size={34} y={12}>gánh</TT></Tag></g>
        <Pop t={t} at={33.6} x={260} y={800} s={0.7}><Star x={0} y={0} s={3} /></Pop>
        <Pop t={t} at={33.9} x={760} y={1350} s={0.5}><Star x={0} y={0} s={3} /></Pop>
      </g>
    </g>
  );
};

// 7. KHÔNG PHẢI SỐ PHẬN 34.78–38.66
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.78} strikeAt={35.6} gearAt={36.9} okAt={37.4} tint={P.mint} />;

// 8. SANG ĐINH MÙI NHẸ HƠN 38.66–42.44
const S8: React.FC<SP> = ({t}) => {
  const ar = A(t, 39.4, 0.6);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={38.7} note="Dọn xong năm cũ" text="Sang Đinh Mùi" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={38.9} x={250} y={900} s={0.58} r={-3}><g opacity={1 - 0.4 * A(t, 40.4, 0.6)}><GZ can="Bính" chi="Ngọ" year="2026" /></g></Pop>
        {ar > 0.01 && <path d={`M380 880 H${380 + 160 * ar}`} stroke={P.navy} strokeWidth={10} strokeLinecap="round" />}
        {ar > 0.98 && <path d="M520 856 L548 880 L520 904" fill="none" stroke={P.navy} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />}
        <Pop t={t} at={39.8} x={690} y={900} s={0.58} r={3}><GZ can="Đinh" chi="Mùi" year="2027" /></Pop>
        <Lbl at={41.0} t={t} x={480} y={1220} w={300} fill={P.mint} r={-1} size={38}>nhẹ hơn</Lbl>
      </g>
    </g>
  );
};

// 9. CTA 42.44–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={42.5} note="Năm 2026" text="Bạn buông gì?" size={128} />
    <g filter="url(#wob)">
      <Pop t={t} at={42.8} x={270} y={860} r={-4}><Calendar label="2026" /></Pop>
      <Pop t={t} at={43.6} x={640} y={940} s={1.3}><Person c={P.blue} mood="talk" /></Pop>
      <CommentBar t={t} at={44.6} text="mình buông được … · nhật chủ …" y={1110} dur={1.5} />
      <Lbl at={46.6} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={46.8} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.79, C: S1}, {s: 4.79, e: 8.86, C: S2}, {s: 8.86, e: 16.55, C: S3}, {s: 16.55, e: 21.5, C: S4},
  {s: 21.5, e: 32.09, C: S5}, {s: 32.09, e: 34.78, C: S6}, {s: 34.78, e: 38.66, C: S7}, {s: 38.66, e: 42.44, C: S8},
  {s: 42.44, e: 48.52, C: S9},
];

export const BaziR51: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r51.mp3" phrases={cap.phrases} scenes={SCENES} />;
