import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Wallet, Jar, Calendar, Tag, Tick, Cross, Gear, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR39.json';

// ====== Dòng 39 · Sinh 2001: hứa để dành, ngày 25 ví vẫn sạch — nhật chủ gặp Tài · 8 cảnh ======
// Can chi năm 2001 lấy từ bảng STEM/BR (Tân 辛 Kim · Tỵ 巳 Hỏa; đổi năm ở Lập xuân). Trụ, nhân vật là minh hoạ, không phải lá số thật.
// Mốc: src/capR39.json (align_dp)
export const R39_TOTAL = totalFrames(48.96);

// đồng xu bay: k 0..1 từ (x1,y1) tới (x2,y2)
const Fly: React.FC<{k: number; x1: number; y1: number; x2: number; y2: number}> = ({k, x1, y1, x2, y2}) =>
  k > 0.01 && k < 0.99 ? <g transform={`translate(${x1 + (x2 - x1) * k} ${y1 + (y2 - y1) * k - Math.sin(k * Math.PI) * 120})`}><Coin r={34} /></g> : null;

// 1. HOOK 0–6.61
const S1: React.FC<SP> = ({t}) => {
  const fill = 0.7 * (1 - A(t, 4.8, 1.4));
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 2001" text="Ngày 25" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={760} y={830} s={0.62}><GZ can="Tân" chi="Tỵ" /></Pop>
        <Note t={t} at={0.9} x={760} y={1000} size={24}>năm 2001 · tính từ Lập xuân</Note>
        <Pop t={t} at={2.6} x={280} y={900} s={0.8}><Jar lid={false} fill={fill} /></Pop>
        <Lbl at={3.4} t={t} x={280} y={1080} w={280} fill={P.mint} r={-2} size={34}>hứa để dành</Lbl>
        <Pop t={t} at={4.6} x={300} y={1300} s={0.8}><Calendar label="25" /></Pop>
        <Pop t={t} at={5.8} x={700} y={1300} s={0.85}><Wallet open /></Pop>
        <Lbl at={6.1} t={t} x={700} y={1450} w={240} fill="#fff" r={2} size={34}>ví sạch</Lbl>
      </g>
    </g>
  );
};

// 2. NHẬT CHỦ GẶP TÀI 6.61–11.95
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={6.66} note="Ít người để ý trong lá số" text="Gặp Tài" size={150} />
    <g filter="url(#wob)">
      <Lbl at={7.0} t={t} x={500} y={700} w={340} fill="#fff" r={-2} size={36}>nguyên nhân?</Lbl>
      <Pop t={t} at={10.6} x={330} y={1080}><Person c={P.coral} mood="smile" /></Pop>
      <Note t={t} at={10.9} x={330} y={1140} size={28}>nhật chủ</Note>
      <Pop t={t} at={11.5} x={690} y={960}><Coin r={70} /></Pop>
      <Pop t={t} at={11.7} x={760} y={1070}><Coin r={50} /></Pop>
      <Lbl at={11.6} t={t} x={700} y={1200} w={160} fill={P.yellow} r={2} size={38}>Tài</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ, NHẬT CHỦ = CAN NGÀY 11.95–20.06
const PAT = [12.5, 13.2, 15.0, 15.8];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={12.0} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={1000} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 18.3, 0.4) : 0} /></Pop>
      ))}
      <Lbl at={17.7} t={t} x={610} y={1260} w={300} fill={P.yellow} r={-1} size={34}>can trụ ngày</Lbl>
      <Lbl at={19.2} t={t} x={610} y={1370} w={300} fill="#fff" r={1} size={34}>chính là mình</Lbl>
      <Note t={t} at={13} x={500} y={1480} size={24}>khung trụ minh hoạ</Note>
    </g>
  </g>
);

// 4. TÀI = THỨ NHẬT CHỦ KHẮC ĐƯỢC 20.06–23.19
const S4: React.FC<SP> = ({t}) => {
  const ar = A(t, 21.3, 0.5);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={20.1} note="Tài là" text="Thứ khắc được" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={20.4} x={250} y={1080} s={0.9}><Person c={P.coral} mood="smile" /></Pop>
        {ar > 0.01 && <path d={`M380 960 L${380 + 230 * ar} 960`} stroke={P.navy} strokeWidth={10} strokeLinecap="round" />}
        {ar > 0.98 && <path d="M580 935 L612 960 L580 985" fill="none" stroke={P.navy} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />}
        <Note t={t} at={21.4} x={495} y={920} size={32}>khắc</Note>
        {[0, 1, 2].map((i) => <Pop key={i} t={t} at={21.8 + i * 0.15} x={740} y={1060 - i * 70}><Coin r={56} /></Pop>)}
        <Lbl at={22.3} t={t} x={740} y={1250} w={260} fill={P.mint} r={2} size={38}>tiền bạc</Lbl>
      </g>
    </g>
  );
};

// 5. KHÔNG CÓ ẤN / TỈ KIẾP GIỮ → ĐẾN NHANH ĐI NHANH 23.19–30.64
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={23.24} note="Nói đơn giản hơn" text="Không ai giữ" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={24.8} x={500} y={1100} s={0.9}><Jar lid={false} fill={0.15} /></Pop>
      {[0, 1, 2].map((i) => <Fly key={`i${i}`} k={(t - 24.9 - i * 0.35) / 0.7} x1={160} y1={700} x2={500} y2={1000} />)}
      {[0, 1, 2].map((i) => <Fly key={`o${i}`} k={(t - 29.0 - i * 0.3) / 0.7} x1={500} y1={1000} x2={860} y2={720} />)}
      <Pop t={t} at={26.1} x={230} y={1350} r={-3}><Tag w={160} h={80} fill={P.yellow}><TT size={38} y={13}>Ấn</TT></Tag></Pop>
      <Pop t={t} at={27.0} x={770} y={1350} r={3}><Tag w={210} h={80} fill={P.mint}><TT size={38} y={13}>Tỉ Kiếp</TT></Tag></Pop>
      <Pop t={t} at={27.9} x={330} y={1300}><Cross /></Pop>
      <Pop t={t} at={28.0} x={900} y={1300}><Cross /></Pop>
      <Lbl at={29.0} t={t} x={500} y={1480} w={520} fill="#fff" r={-1} size={34}>đến nhanh · đi cũng nhanh</Lbl>
    </g>
  </g>
);

// 6. LỜI HỨA KHÔNG SAI, CÁCH VẬN HÀNH CHƯA KHỚP 30.64–36.10
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={30.7} note="Lời hứa cuối tháng" text="Không sai" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={32.3} x={290} y={880} s={0.85}><Calendar label="cuối tháng" /></Pop>
      <Pop t={t} at={34.1} x={420} y={790}><Tick /></Pop>
      <Pop t={t} at={34.8} x={620} y={1080}><Gear r={90} c={P.mint} rot={(t - 34.8) * 30} /></Pop>
      <Pop t={t} at={35.1} x={800} y={940}><Gear r={64} c={P.coral} rot={-(t - 34.8) * 20 + 8} /></Pop>
      <Lbl at={35.4} t={t} x={500} y={1350} w={440} fill={P.yellow} r={-1} size={38}>vận hành chưa khớp</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 36.10–41.63
const S7: React.FC<SP> = ({t}) => (
  <NotDestiny t={t} s={36.1} strikeAt={37.3} gearAt={38.5} okAt={39.9} tint={P.mint}
    extra={<Pop t={t} at={40.6} x={160} y={1240}><Coin r={46} /></Pop>} />
);

// 8. CTA 41.63–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={41.68} note="Bạn sinh năm 2001?" text="Để lại năm sinh" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={42.4} x={500} y={860} s={0.55}><GZ can="Tân" chi="Tỵ" year="2001" /></Pop>
      <CommentBar t={t} at={44.3} text="mình 2001 · ngày 25 ví sạch" y={1150} dur={1.6} />
      <Lbl at={45.6} t={t} x={500} y={1300} w={420} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={45.8} x={500} y={1360} />
      <Pop t={t} at={47.3} x={800} y={1430} s={0.5}><Wallet open /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 6.61, C: S1}, {s: 6.61, e: 11.95, C: S2}, {s: 11.95, e: 20.06, C: S3}, {s: 20.06, e: 23.19, C: S4},
  {s: 23.19, e: 30.64, C: S5}, {s: 30.64, e: 36.1, C: S6}, {s: 36.1, e: 41.63, C: S7}, {s: 41.63, e: 49.36, C: S8},
];

export const BaziR39: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r39.mp3" phrases={cap.phrases} scenes={SCENES} />;
