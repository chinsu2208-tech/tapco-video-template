import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Block, Tag, Tick, Cross, Gear, Umbrella, Seal, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note, Heart} from './BaziR14';
import {Pillar, Battery} from './BaziR17';
import cap from './capR38.json';

// ====== Dòng 38 · Nhật chủ vượng hay nhược: ôm hết việc không phải vì mạnh · 9 cảnh ======
// Vượng/nhược = mức nâng đỡ từ Tỉ Kiếp và Ấn (theo script). Nhân vật, mức pin là minh hoạ, không phải lá số thật.
// Mốc: src/capR38.json (align_dp)
export const R38_TOTAL = totalFrames(44.352);

// chồng đồ trên đầu: items xuất hiện dần
const Stack: React.FC<{t: number; ats: number[]; sway?: number}> = ({t, ats, sway = 0}) => {
  const items = [
    <g key="b" transform="scale(0.55)"><Briefcase /></g>,
    <g key="p" transform="scale(0.42)"><Block txt="áp lực" /></g>,
    <Coin key="c" r={40} />,
    <g key="h" transform="scale(1.1)"><Heart /></g>,
  ];
  return (
    <g transform={`rotate(${sway})`}>
      {items.map((it, i) => (i < ats.length ? <Pop key={i} t={t} at={ats[i]} x={0} y={-250 - i * 100}>{it}</Pop> : null))}
    </g>
  );
};

// 1. HOOK 0–4.45
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người hay ôm hết việc" text="Ôm hết" size={150} />
    <g filter="url(#wob)">
      <g transform="translate(330 1260)">
        <Pop t={t} at={0.3} x={0} y={0} s={1.3}><Person c={P.blue} mood={t > 3.6 ? 'sad' : 'flat'} /></Pop>
        <g transform="scale(1.1)"><Stack t={t} ats={[0.8, 1.1, 1.4]} sway={Math.sin(t * 3) * 3} /></g>
      </g>
      <Lbl at={1.4} t={t} x={720} y={760} w={300} fill="#fff" r={2} size={36}>ít nhờ ai</Lbl>
      <Lbl at={2.6} t={t} x={720} y={900} w={340} fill={P.mint} r={-2} size={34}>tưởng mình mạnh</Lbl>
      <Pop t={t} at={3.7} x={720} y={1080}><Battery k={0.15} /></Pop>
      <Note t={t} at={3.8} x={720} y={1180} size={34}>mà vẫn mệt</Note>
    </g>
  </g>
);

// 2. VƯỢNG HAY NHƯỢC 4.45–10.06
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.5} note="Ít người để ý trong lá số" text="Vượng · Nhược" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={6.0} x={500} y={760} s={0.7}><Person c={P.coral} mood="smile" /></Pop>
      <Note t={t} at={8.1} x={500} y={820} size={28}>nhật chủ</Note>
      <Pop t={t} at={9.4} x={290} y={1100} r={-3}><Tag w={300} h={130} fill={P.mint}><TT size={64} y={22}>vượng</TT></Tag></Pop>
      <Pop t={t} at={9.75} x={710} y={1100} r={3}><Tag w={300} h={130} fill={P.yellow}><TT size={64} y={22}>nhược</TT></Tag></Pop>
      <Note t={t} at={9.9} x={500} y={1110} size={44}>hay</Note>
    </g>
  </g>
);

// 3. NHẬT CHỦ = CAN TRỤ NGÀY 10.06–12.52
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.1} note="Nhật chủ là" text="Can ngày" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={10.6} x={500} y={1000}><Pillar name="ngày" fill={P.coral} hi={A(t, 11.4, 0.4)} /></Pop>
      <Lbl at={11.4} t={t} x={500} y={1300} w={360} fill={P.yellow} r={-1} size={36}>thiên can · chính bạn</Lbl>
      <Note t={t} at={11.6} x={500} y={1400} size={26}>khung trụ minh hoạ</Note>
    </g>
  </g>
);

// 4. KHÔNG PHẢI MẠNH/YẾU, TỐT/XẤU 12.52–16.64
const S4: React.FC<SP> = ({t}) => {
  const s1 = A(t, 14.4, 0.4), s2 = A(t, 16.0, 0.35);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={12.57} note="Vượng hay nhược" text="Không phải…" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={13.4} x={500} y={820} r={-2}><Tag w={560} h={130} fill="#fff"><TT size={60} y={20}>mạnh hay yếu</TT></Tag></Pop>
        {s1 > 0.01 && <path d={`M230 840 L${230 + 540 * s1} 800`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={14.7} x={820} y={720}><Cross /></Pop>
        <Pop t={t} at={15.2} x={500} y={1120} r={2}><Tag w={520} h={130} fill="#fff"><TT size={60} y={20}>tốt hay xấu</TT></Tag></Pop>
        {s2 > 0.01 && <path d={`M250 1140 L${250 + 500 * s2} 1100`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={16.3} x={820} y={1020}><Cross /></Pop>
      </g>
    </g>
  );
};

// 5. MỨC NÂNG ĐỠ TỪ TỈ KIẾP + ẤN 16.64–23.38
const S5: React.FC<SP> = ({t}) => {
  const k = 0.5 + 0.4 * Math.sin(Math.max(0, t - 22.5) * 4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={16.7} note="Nói đơn giản hơn" text="Nâng đỡ" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={18.6} x={500} y={1140} s={0.9}><Person c={P.coral} mood="smile" /></Pop>
        <Note t={t} at={19.4} x={500} y={1200} size={26}>nhật chủ</Note>
        <Pop t={t} at={21.0} x={220} y={1160} s={0.75}><Person c={P.mint} mood="smile" /></Pop>
        <Lbl at={21.2} t={t} x={220} y={1260} w={200} fill={P.mint} r={-2} size={32}>Tỉ Kiếp</Lbl>
        <Pop t={t} at={21.8} x={760} y={960} s={0.45}><Seal ch="印" /></Pop>
        <Lbl at={21.9} t={t} x={760} y={1080} w={140} fill={P.yellow} r={2} size={32}>Ấn</Lbl>
        <Pop t={t} at={22.6} x={500} y={720}><Battery k={k} /></Pop>
        <Lbl at={22.7} t={t} x={500} y={1380} w={300} fill="#fff" r={1} size={34}>nhiều hay ít</Lbl>
      </g>
    </g>
  );
};

// 6. NÂNG ĐỠ ÍT → TỰ GÁNH 23.38–30.18
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={23.43} note="Nâng đỡ ít thì" text="Tự gánh" size={150} />
    <g filter="url(#wob)">
      <g transform="translate(360 1400)">
        <Pop t={t} at={23.8} x={0} y={0} s={1.2}><Person c={P.blue} mood={t > 29 ? 'sad' : 'flat'} /></Pop>
        <Stack t={t} ats={[25.8, 26.8, 28.0, 29.0]} sway={Math.sin(t * 2.6) * 4 * A(t, 27, 1)} />
      </g>
      <Lbl at={25.8} t={t} x={760} y={800} w={220} fill={P.yellow} r={2} size={34}>việc</Lbl>
      <Lbl at={26.8} t={t} x={760} y={920} w={220} fill={P.coral} r={-2} size={34}>áp lực</Lbl>
      <Lbl at={28.1} t={t} x={760} y={1040} w={220} fill={P.mint} r={2} size={34}>tiền bạc</Lbl>
      <Lbl at={29.0} t={t} x={760} y={1160} w={220} fill={P.peach} r={-1} size={34}>tình cảm</Lbl>
    </g>
  </g>
);

// 7. KHÔNG HẲN TÍNH CÁCH CỐ ĐỊNH 30.18–36.28
const S7: React.FC<SP> = ({t}) => {
  const s = A(t, 33.6, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={30.23} note="Thói quen ôm hết" text="Không hẳn" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={32.4} x={500} y={760} r={-2}><Tag w={620} h={120} fill="#fff"><TT size={54} y={18}>tính cách cố định</TT></Tag></Pop>
        {s > 0.01 && <path d={`M200 780 L${200 + 600 * s} 740`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={34.3} x={400} y={1060}><Gear r={110} c={P.mint} rot={(t - 34.3) * 40} /></Pop>
        <Pop t={t} at={34.6} x={620} y={1190}><Gear r={72} c={P.yellow} rot={-(t - 34.3) * 60 + 22} /></Pop>
        <Lbl at={35.5} t={t} x={500} y={1390} w={560} fill={P.yellow} r={-1} size={38}>cách lá số vận hành</Lbl>
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN 36.28–39.63
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={36.28} strikeAt={37.4} gearAt={38.1} okAt={38.6} tint={P.sky} />;

// 9. CTA 39.63–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={39.68} note="Lần gần nhất" text="Nhờ ai giúp?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.2} x={330} y={960} s={0.8}><Person c={P.blue} mood="talk" /></Pop>
      <Pop t={t} at={40.8} x={670} y={960} s={0.8}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={41.4} x={500} y={700} s={0.4}><Umbrella c={P.coral} /></Pop>
      <CommentBar t={t} at={42.5} text="lần gần nhất mình nhờ … là …" y={1160} dur={1.4} />
      <Lbl at={43.6} t={t} x={500} y={1320} w={420} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={43.8} x={500} y={1380} />
      <Pop t={t} at={43.9} x={830} y={1320}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.45, C: S1}, {s: 4.45, e: 10.06, C: S2}, {s: 10.06, e: 12.52, C: S3}, {s: 12.52, e: 16.64, C: S4},
  {s: 16.64, e: 23.38, C: S5}, {s: 23.38, e: 30.18, C: S6}, {s: 30.18, e: 36.28, C: S7}, {s: 36.28, e: 39.63, C: S8},
  {s: 39.63, e: 44.76, C: S9},
];

export const BaziR38: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r38.mp3" phrases={cap.phrases} scenes={SCENES} />;
