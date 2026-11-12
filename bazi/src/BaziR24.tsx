import React from 'react';
import {P, H, HAND, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Block, Umbrella, Cross, Tick, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart, House} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR24.json';

// ====== Dòng 24 · Sinh năm 1989: lo cho cả nhà, ít ai hỏi mình cần gì → thập thần (Thực Thương, Tài, Quan Sát) · 8 cảnh ======
// Can chi năm 1989 lấy từ bảng STEM/BR: Kỷ (Thổ) Tỵ (Hỏa) — chỉ là trụ năm. Khung 4 trụ là khung trống minh hoạ.
// Mốc: src/capR24.json (căn tay theo khoảng lặng, align_dp lệch 1 câu)
export const R24_TOTAL = totalFrames(48.14);

// cỏ bốn lá (may mắn)
const Clover: React.FC = () => (
  <g>
    <path d="M0 20 Q20 110 -10 170" fill="none" stroke="#5fb88a" strokeWidth={10} strokeLinecap="round" />
    {[0, 90, 180, 270].map((r) => <path key={r} transform={`rotate(${r})`} d="M0 0 C-60 -40 -60 -100 0 -80 C60 -100 60 -40 0 0Z" fill={P.mint} {...L} strokeWidth={5} />)}
  </g>
);
// bong bóng nói
const Bubble: React.FC<{text: string; w?: number}> = ({text, w = 360}) => (
  <g>
    <path d={`M${-w / 2} -60 H${w / 2} Q${w / 2 + 20} -60 ${w / 2 + 20} -40 V30 Q${w / 2 + 20} 50 ${w / 2} 50 H-40 L-80 100 L-70 50 H${-w / 2} Q${-w / 2 - 20} 50 ${-w / 2 - 20} 30 V-40 Q${-w / 2 - 20} -60 ${-w / 2} -60Z`} fill="#fff" {...L} strokeWidth={5} />
    <text y={12} textAnchor="middle" fontFamily={HAND} fontSize={40} fill={P.navy}>{text}</text>
  </g>
);
// danh sách ưu tiên: "mình" ở cuối
const LIST = ['bố mẹ', 'anh chị em', 'công việc', 'tiền nhà', '…', 'mình'];
const List: React.FC<{t: number; at: number}> = ({t, at}) => (
  <g>
    <rect x={-210} y={-300} width={420} height={600} rx={20} fill="#fff" {...L} />
    {LIST.map((s, i) => (
      <g key={s} opacity={A(t, at + i * 0.35)}>
        <text x={-170} y={-220 + i * 92} fontFamily={H} fontWeight={800} fontSize={40} fill={i === 5 ? P.red : P.navy}>{i === 4 ? '' : `${i < 4 ? i + 1 : 9}.`} {s}</text>
      </g>
    ))}
  </g>
);

// 1. HOOK 0–5.19
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.1} note="Tuổi 1989 ơi" text="Lo cho cả nhà" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={2.0} x={300} y={1300} s={1.0}><Person c={P.yellow} mood="flat" /></Pop>
      <Pop t={t} at={2.4} x={430} y={870} s={1.25}><Umbrella c={P.coral} /></Pop>
      {[0, 1, 2].map((i) => <Pop key={i} t={t} at={2.7 + i * 0.2} x={470 + i * 120} y={1300} s={0.6}><Person c={[P.mint, P.blue, P.peach][i]} mood="smile" /></Pop>)}
      <Pop t={t} at={3.3} x={680} y={740} s={0.95}><Bubble text="mình cần gì?" /></Pop>
      <Pop t={t} at={4.2} x={880} y={700}><Cross /></Pop>
      <Note t={t} at={1.0} x={500} y={1450} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. THẬP THẦN, không phải thiếu may mắn 5.19–10.51
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={5.25} note="Nguyên nhân thường nằm ở" text="Thập thần" size={150} />
    <g filter="url(#wob)">
      <Lbl at={7.0} t={t} x={500} y={860} w={420} fill="#fff" r={-2} size={44}>十神 · 10 vai trò</Lbl>
      <Pop t={t} at={8.3} x={320} y={1170} s={1.1}><Clover /></Pop>
      <Pop t={t} at={9.0} x={470} y={1080}><Cross /></Pop>
      <Lbl at={9.2} t={t} x={680} y={1200} w={340} fill={P.yellow} r={2} size={32}>không phải xui</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ → cách đối đãi người khác 10.51–17.61
const S3: React.FC<SP> = ({t}) => {
  const rel = A(t, 14.2, 0.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={10.55} note="Bát tự gồm" text="Bốn trụ" size={150} />
      <g filter="url(#wob)">
        <g opacity={1 - rel}>
          {PIL.map((n, i) => <Pop key={n} t={t} at={11.0 + i * 0.45} x={200 + i * 200} y={950}><Pillar name={n} fill={PF[i]} /></Pop>)}
          <Note t={t} at={12.5} x={500} y={1220} size={28}>khung trống minh hoạ</Note>
        </g>
        <g opacity={rel}>
          <Pop t={t} at={14.2} x={500} y={1250} s={1.0}><Person c={P.yellow} mood="smile" /></Pop>
          {[0, 1, 2].map((i) => <Pop key={i} t={t} at={14.8 + i * 0.3} x={200 + i * 300} y={820} s={0.65}><Person c={[P.mint, P.blue, P.coral][i]} mood="smile" /></Pop>)}
          {[0, 1, 2].map((i) => <path key={i} d={`M500 1080 Q${350 + i * 150} 960 ${200 + i * 300} 860`} fill="none" stroke={P.coral} strokeWidth={8} strokeLinecap="round" strokeDasharray="4 18" opacity={A(t, 15.3 + i * 0.2)} />)}
          <Lbl at={15.6} t={t} x={500} y={1400} w={520} fill="#fff" r={1} size={32}>cách mình đối đãi người khác</Lbl>
        </g>
      </g>
    </g>
  );
};

// 4. THỰC THƯƠNG · TÀI · QUAN SÁT 17.61–20.42
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={17.65} note="Khi nổi bật" text="Ba nhóm này" size={130} />
    <g filter="url(#wob)">
      <TermCard t={t} at={17.9} x={180} y={920} vi="Thực Thương" han="食傷" fill={P.mint} r={-3} w={290} />
      <TermCard t={t} at={18.6} x={500} y={960} vi="Tài" han="財" fill={P.yellow} r={0} w={260} />
      <TermCard t={t} at={19.0} x={810} y={920} vi="Quan Sát" han="官殺" fill={P.silver} r={3} w={280} />
      <Note t={t} at={19.4} x={500} y={1240} size={28}>thuật ngữ thập thần · không phải lá số của ai</Note>
    </g>
  </g>
);

// 5. GÁNH VIỆC · LO TIỀN · TRÁCH NHIỆM 20.42–24.88
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={20.45} note="Người ta quen" text="Đứng ra gánh" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={20.6} x={500} y={1360} s={1.05}><Person c={P.yellow} mood={t > 23.5 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={21.2} x={500} y={1080} s={0.7}><Briefcase /></Pop>
      <Pop t={t} at={22.2} x={500} y={930} s={1.3}><Coin /></Pop>
      <Pop t={t} at={23.1} x={500} y={760} s={0.75}><House /></Pop>
      <Lbl at={21.4} t={t} x={210} y={1000} w={240} fill="#fff" r={-3} size={32}>gánh việc</Lbl>
      <Lbl at={22.3} t={t} x={790} y={930} w={200} fill="#fff" r={3} size={32}>lo tiền</Lbl>
      <Lbl at={23.4} t={t} x={210} y={740} w={260} fill="#fff" r={-2} size={30}>người thân</Lbl>
    </g>
  </g>
);

// 6. CHO ĐI TRƯỚC, MÌNH XẾP CUỐI 24.88–29.92
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={24.95} note="Bạn quen cho đi trước" text="Mình xếp cuối" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={25.2} x={400} y={1000} r={-2}><List t={t} at={25.6} /></Pop>
      {t > 28.4 && <ellipse cx={340} cy={1260} rx={110} ry={50} fill="none" stroke={P.red} strokeWidth={8} opacity={A(t, 28.4)} />}
      <Pop t={t} at={28.6} x={760} y={1250} s={0.85}><Person c={P.yellow} mood="flat" /></Pop>
    </g>
  </g>
);

// 7. TÌNH CẢM · lặng lẽ chịu áp lực 29.92–36.20
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={30.0} note="Lộ ra cả trong" text="Tình cảm" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={30.1} x={250} y={760} s={0.55}><Briefcase /></Pop>
      <Pop t={t} at={30.6} x={420} y={760} s={1.0}><Coin /></Pop>
      <Pop t={t} at={32.4} x={700} y={780} s={1.5}><Heart /></Pop>
      <Pop t={t} at={33.6} x={500} y={1350} s={1.0}><Person c={P.yellow} mood="flat" /></Pop>
      <Pop t={t} at={34.4} x={500} y={1080} s={0.6}><Block txt="áp lực" /></Pop>
      {t > 35.0 && <path d="M478 1222 H522" stroke={P.red} strokeWidth={8} strokeLinecap="round" opacity={A(t, 35.0)} />}
      <Lbl at={35.1} t={t} x={780} y={1230} w={240} fill="#fff" r={3} size={32}>không nói</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 36.20–41.89
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={36.2} strikeAt={37.9} gearAt={39.5} okAt={40.3} tint={P.peach} />;

// 9. CTA 41.89–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={41.95} note="Bạn sinh năm 1989?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={42.3} x={300} y={820} s={0.7} r={-3}><GZ can="Kỷ" chi="Tỵ" year="1989" /></Pop>
      <Pop t={t} at={42.8} x={700} y={800} s={1.0}><Umbrella c={P.coral} /></Pop>
      <CommentBar t={t} at={43.7} text="89 · nhật chủ của mình là …" y={1110} dur={1.5} />
      <Lbl at={45.0} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={45.4} x={500} y={1320} />
      <Pop t={t} at={45.8} x={820} y={1270}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.19, C: S1}, {s: 5.19, e: 10.51, C: S2}, {s: 10.51, e: 17.61, C: S3}, {s: 17.61, e: 20.42, C: S4},
  {s: 20.42, e: 24.88, C: S5}, {s: 24.88, e: 29.92, C: S6}, {s: 29.92, e: 36.2, C: S7}, {s: 36.2, e: 41.89, C: S8}, {s: 41.89, e: 48.54, C: S9},
];

export const BaziR24: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r24.mp3" phrases={cap.phrases} scenes={SCENES} />;
