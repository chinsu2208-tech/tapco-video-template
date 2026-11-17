import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Gear, Block, Tick, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {PIL, PF, Pillar} from './BaziR17';
import {Sign, Scale} from './BaziR23';
import {ElRow} from './BaziR26';
import cap from './capR28.json';

// ====== Dòng 28 · Sinh năm 2002: đi làm mấy năm chưa thấy hướng · nhật chủ · 9 cảnh ======
// 2002 = Nhâm Ngọ (lấy từ STEM/BR qua GZ). Khung 4 trụ là khung trống minh hoạ, không có lá số thật.
// Mốc: src/capR28.json (align_dp, script thêm dấu phẩy cho khớp khoảng lặng)
export const R28_TOTAL = totalFrames(45.31);

// gương: nhìn lại chính mình
const Mirror: React.FC = () => (
  <g>
    <ellipse rx={170} ry={230} fill={P.orange} {...L} />
    <ellipse rx={135} ry={195} fill={P.sky} {...L} strokeWidth={5} />
    <path d="M-80 -120 Q-60 -150 -30 -160" fill="none" stroke="#fff" strokeWidth={12} strokeLinecap="round" />
    <path d="M-40 230 L-70 300 M40 230 L70 300" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
  </g>
);

// 1. HOOK 0–4.4
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 2002" text="Chưa thấy hướng" size={100} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={720} y={880} s={0.9} r={3}><GZ can="Nhâm" chi="Ngọ" year="2002" /></Pop>
      <Pop t={t} at={2.6} x={260} y={1360}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={3.0} x={330} y={900} s={0.8}><Sign a="?" b="?" /></Pop>
      <Note t={t} at={1.2} x={720} y={1160} size={26}>can chi năm · tính từ Lập xuân</Note>
      <Pop t={t} at={3.6} x={760} y={1360} s={0.6}><Briefcase /></Pop>
    </g>
  </g>
);

// 2. ÍT AI ĐỂ Ý: NHẬT CHỦ CỦA CHÍNH MÌNH 4.4–8.8
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.45} note="Điều ít người để ý" text="Chính mình" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.2} x={560} y={1000}><Mirror /></Pop>
      <Pop t={t} at={6.0} x={560} y={1080} s={0.8}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={4.9} x={210} y={1200} s={0.9}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={7.6} t={t} x={560} y={680} w={280} fill={P.yellow} r={-2} size={40}>nhật chủ</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ, MỖI TRỤ CAN + CHI 8.8–14.54
const PAT = [10.9, 11.25, 11.6, 11.95];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={8.85} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={200 + i * 200} y={980}>
          <g>
            <rect x={-80} y={-200} width={160} height={400} rx={18} fill={PF[i]} {...L} />
            <text y={-152} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={38} fill={P.navy}>{n}</text>
            <rect x={-58} y={-120} width={116} height={124} rx={12} fill={t > 13.4 ? P.yellow : '#fff'} {...L} strokeWidth={5} />
            <text y={-46} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 13.4 ? 'can' : '?'}</text>
            <rect x={-58} y={36} width={116} height={124} rx={12} fill={t > 14.0 ? P.mint : '#fff'} {...L} strokeWidth={5} />
            <text y={108} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 14.0 ? 'chi' : '?'}</text>
          </g>
        </Pop>
      ))}
      <Pop t={t} at={9.7} x={500} y={660}><TT size={64}>4</TT></Pop>
      <Note t={t} at={12.4} x={500} y={1260} size={28}>khung trống minh hoạ</Note>
    </g>
  </g>
);

// 4. CAN TRỤ NGÀY = NHẬT CHỦ, THUỘC 1 TRONG 5 HÀNH 14.54–18.37
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={14.6} note="Can trụ ngày gọi là" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={14.7 + i * 0.1} x={200 + i * 200} y={820} s={0.8}>
          <Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 15.9) : 0} top={i === 2 && t > 15.9 ? '★' : '?'} />
        </Pop>
      ))}
      <Lbl at={16.4} t={t} x={600} y={1040} w={250} fill={P.yellow} r={-2} size={36}>= bạn</Lbl>
      <ElRow t={t} at={17.4} y={1300} step={0.12} r={72} />
    </g>
  </g>
);

// 5. MỖI NGƯỜI MỘT CÁCH VẬN HÀNH: ỔN ĐỊNH / THAY ĐỔI 18.37–25.7
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={18.45} note="Điều này có nghĩa là" text="Mỗi người một kiểu" size={90} />
    <g filter="url(#wob)">
      <Pop t={t} at={20.3} x={270} y={1360} s={0.9}><Person c={P.yellow} mood="smile" /></Pop>
      <Pop t={t} at={22.6} x={270} y={870} s={0.9}><Calendar label="đều đặn" /></Pop>
      <Lbl at={23.0} t={t} x={270} y={1080} w={250} fill="#fff" r={-2} size={34}>ổn định</Lbl>
      <Pop t={t} at={20.6} x={730} y={1360} s={0.9}><Person c={P.coral} mood="talk" /></Pop>
      <Pop t={t} at={24.1} x={730} y={880} s={0.9}><Gear r={90} c={P.coral} rot={(t - 24) * 70} /></Pop>
      <Lbl at={24.5} t={t} x={730} y={1080} w={250} fill="#fff" r={2} size={34}>thay đổi</Lbl>
      <Pop t={t} at={20.4} x={500} y={1220}><TT size={60}>≠</TT></Pop>
    </g>
  </g>
);

// 6. BẠN CÙNG LỨA CHẠY NHANH, CHƯA CHẮC VÌ GIỎI HƠN 25.7–31.59
const S6: React.FC<SP> = ({t}) => {
  const run = Math.max(0, Math.min(1, (t - 26.9) / 2.2));
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={25.75} note="Nói đơn giản hơn" text="Khác nhịp" size={150} />
      <g filter="url(#wob)">
        <path d="M120 900 H900 M120 1180 H900" stroke={P.navy} strokeWidth={5} strokeDasharray="20 18" opacity={A(t, 26.0) * 0.7} />
        <path d="M880 760 V1320" stroke={P.red} strokeWidth={8} strokeLinecap="round" opacity={A(t, 26.0)} />
        <g opacity={A(t, 26.9)} transform={`translate(${200 + run * 560} 890) scale(0.75)`}><Person c={P.mint} mood="smile" /></g>
        <g opacity={A(t, 26.9)} transform={`translate(${200 + run * 120} 1170) scale(0.75)`}><Person c={P.blue} mood="flat" /></g>
        <Lbl at={28.2} t={t} x={640} y={1040} w={440} fill="#fff" r={-1} size={34}>chưa chắc vì giỏi hơn</Lbl>
        <Pop t={t} at={30.1} x={330} y={1400} s={0.6}><Gear c={P.mint} rot={(t - 30) * 60} /></Pop>
        <Pop t={t} at={30.3} x={520} y={1400} s={0.45}><Gear c={P.blue} rot={-(t - 30) * 90} /></Pop>
        <Lbl at={30.6} t={t} x={740} y={1400} w={300} fill={P.yellow} r={2} size={32}>vận hành khác</Lbl>
      </g>
    </g>
  );
};

// 7. SO SÁNH → ÁP LỰC VIỆC & TIỀN 31.59–35.62
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={31.65} note="So sánh vào đó" text="Sinh áp lực" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={31.9} x={500} y={900}><Scale k={Math.min(1, Math.max(0, t - 32.2))} /></Pop>
      <Pop t={t} at={32.3} x={300} y={760} s={0.55}><Person c={P.blue} mood="sad" /></Pop>
      <Pop t={t} at={32.4} x={700} y={760} s={0.55}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={33.4} x={500} y={1240} s={0.8}><Block txt="áp lực" w={360} /></Pop>
      <Pop t={t} at={34.1} x={230} y={1420} s={0.6}><Briefcase /></Pop>
      <Pop t={t} at={34.7} x={780} y={1420}><Coin r={50} /></Pop>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 35.62–40.5
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.62} strikeAt={36.5} gearAt={38.0} okAt={39.0} tint={P.mint} />;

// 9. CTA 40.5–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={40.55} note="Bạn sinh năm 2002?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.8} x={500} y={820} s={0.85}><GZ can="Nhâm" chi="Ngọ" year="2002" /></Pop>
      <CommentBar t={t} at={42.8} text="2002 · mình đang …" y={1160} dur={1.3} />
      <Lbl at={44.3} t={t} x={500} y={1300} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={44.5} x={500} y={1360} />
      <Pop t={t} at={44.7} x={820} y={1310}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.4, C: S1}, {s: 4.4, e: 8.8, C: S2}, {s: 8.8, e: 14.54, C: S3}, {s: 14.54, e: 18.37, C: S4},
  {s: 18.37, e: 25.7, C: S5}, {s: 25.7, e: 31.59, C: S6}, {s: 31.59, e: 35.62, C: S7}, {s: 35.62, e: 40.5, C: S8},
  {s: 40.5, e: 45.71, C: S9},
];

export const BaziR28: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r28.mp3" phrases={cap.phrases} scenes={SCENES} />;
