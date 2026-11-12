import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Coin, Block, Person, Briefcase, Calendar, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR21.json';

// ====== Dòng 21 · Lưu niên là gì: năng lượng riêng của từng năm → năm nay nặng, năm sau nhẹ · 7 cảnh ======
// Can chi năm lấy từ bảng STEM/BR (2025 Ất Tỵ, 2026 Bính Ngọ, 2027 Đinh Mùi). Khung 4 trụ là khung trống minh hoạ.
export const R21_TOTAL = totalFrames(38.13);

// lông vũ (nhẹ)
const Feather: React.FC = () => (
  <g transform="rotate(-30)">
    <path d="M0 -110 C60 -60 50 40 0 110 C-50 40 -60 -60 0 -110Z" fill="#fff" {...L} />
    <path d="M0 -100 V130" stroke={P.navy} strokeWidth={5} strokeLinecap="round" />
    {[-60, -20, 20, 60].map((y) => <path key={y} d={`M0 ${y} l30 -22 M0 ${y} l-30 -22`} stroke="#9fb0cc" strokeWidth={4} strokeLinecap="round" />)}
  </g>
);
// cân đòn: ang > 0 nghiêng phải (bên phải nặng)
const Beam: React.FC<{ang: number; left: React.ReactNode; right: React.ReactNode}> = ({ang, left, right}) => (
  <g>
    <path d="M-60 150 L0 0 L60 150Z" fill={P.peach} {...L} />
    <g transform={`rotate(${ang})`}>
      <rect x={-330} y={-14} width={660} height={28} rx={14} fill={P.orange} {...L} strokeWidth={5} />
      <g transform={`translate(-280 0) rotate(${-ang})`}><path d="M-90 -14 H90 L70 -40 H-70Z" fill={P.silver} {...L} strokeWidth={5} /><g transform="translate(0 -120)">{left}</g></g>
      <g transform={`translate(280 0) rotate(${-ang})`}><path d="M-90 -14 H90 L70 -40 H-70Z" fill={P.silver} {...L} strokeWidth={5} /><g transform="translate(0 -120)">{right}</g></g>
    </g>
    <circle r={14} fill={P.navy} />
  </g>
);

// 1. HOOK 0–5.0: năm nay nặng, năm sau nhẹ
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Vẫn là bạn, mà…" text="Mỗi năm một khác" size={110} />
    <g filter="url(#wob)">
      <Lbl at={2.4} t={t} x={280} y={640} w={260} fill="#fff" r={-3} size={36}>năm nay</Lbl>
      <Pop t={t} at={2.6} x={280} y={1250} s={1.0}><Person c={P.blue} mood="sad" /></Pop>
      <Pop t={t} at={3.2} x={280} y={960} s={0.8}><Block txt="nặng" w={360} h={160} /></Pop>
      <Lbl at={4.0} t={t} x={720} y={640} w={260} fill={P.yellow} r={3} size={36}>năm sau</Lbl>
      <Pop t={t} at={4.1} x={720} y={1250} s={1.0}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={4.4} x={720} y={980 - 14 * Math.sin(t * 3)} s={0.95}><Feather /></Pop>
    </g>
  </g>
);

// 2. LƯU NIÊN 5.0–8.9
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={5.05} note="Thứ ít người để ý" text="Lưu niên" size={160} />
    <g filter="url(#wob)">
      <Pop t={t} at={7.5} x={500} y={900} s={1.4}><Calendar label="năm" /></Pop>
      <Lbl at={7.9} t={t} x={500} y={1200} w={460} fill={P.yellow} r={-2} size={38}>năng lượng của năm</Lbl>
      <Pop t={t} at={6.0} x={200} y={760}><TT size={90}>?</TT></Pop>
    </g>
  </g>
);

// 3. MỖI NĂM MỘT CAN CHI 8.9–13.3
const YRS: [string, string, string][] = [['2025', 'Ất', 'Tỵ'], ['2026', 'Bính', 'Ngọ'], ['2027', 'Đinh', 'Mùi']];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={8.95} note="Mỗi năm mang" text="Can chi riêng" size={130} />
    <g filter="url(#wob)">
      {YRS.map(([y, c, b], i) => <Pop key={y} t={t} at={9.4 + i * 0.9} x={210 + i * 290} y={930} s={0.95} r={(i - 1) * 3}><GZ can={c} chi={b} year={y} /></Pop>)}
      <Lbl at={11.4} t={t} x={500} y={1240} w={500} fill={P.yellow} r={1} size={36}>mỗi năm một can chi</Lbl>
      <Note t={t} at={12.0} x={500} y={1340} size={28}>năm can chi đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 4. TÁC ĐỘNG LÊN BÁT TỰ 13.3–20.8: năm đến "gõ" vào bốn trụ, cùng nhật chủ mà cảm giác khác
const S4: React.FC<SP> = ({t}) => {
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={13.35} note="Năm tác động lên" text="Bát tự của bạn" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={13.4} x={800} y={620} s={0.72}><GZ can="Bính" chi="Ngọ" year="2026" /></Pop>
        {PIL.map((n, i) => <Pop key={n} t={t} at={15.2 + i * 0.4} x={170 + i * 175} y={1000} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 18.2) : 0} /></Pop>)}
        {[0, 1, 2].map((i) => {
          const o = A(t, 14.0 + i * 0.2) * (1 - A(t, 20.0));
          return <path key={i} d={`M${690 - i * 30} ${740 + i * 20} q-60 50 -140 ${40 + i * 20}`} fill="none" stroke={P.coral} strokeWidth={9} strokeLinecap="round" opacity={o} />;
        })}
        <Lbl at={18.3} t={t} x={430} y={1330} w={600} fill={P.yellow} r={-1} size={34}>cùng nhật chủ · mỗi năm một khác</Lbl>
        <Note t={t} at={16.0} x={430} y={1420} size={28}>khung trống minh hoạ, chưa phải lá số thật</Note>
      </g>
    </g>
  );
};

// 5. CÂN NẶNG – NHẸ 20.8–28.9: công việc, tiền bạc, tình cảm, áp lực
const S5: React.FC<SP> = ({t}) => {
  const ang = 14 * A(t, 24.6, 0.8) - 26 * A(t, 26.7, 0.9);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={20.85} note="Có lúc dồn nặng" text="Có lúc thả lỏng" size={110} />
      <g filter="url(#wob)">
        <Pop t={t} at={21.0} x={500} y={1050}>
          <Beam ang={ang}
            left={<g><g opacity={A(t, 21.8)}><Briefcase /></g></g>}
            right={<g><g opacity={A(t, 22.8)} transform="translate(-50 30)"><Coin r={42} /></g><g opacity={A(t, 23.4)} transform="translate(45 30) scale(0.8)"><Heart /></g><g opacity={A(t, 24.2)} transform="translate(0 -75) scale(0.5)"><Block txt="áp lực" w={360} h={150} /></g></g>} />
        </Pop>
        <Lbl at={22.0} t={t} x={220} y={680} w={230} fill="#fff" r={-3} size={30}>công việc</Lbl>
        <Lbl at={22.8} t={t} x={780} y={680} w={330} fill="#fff" r={3} size={30}>tiền · tình · áp lực</Lbl>
        <Lbl at={27.6} t={t} x={500} y={1330} w={600} fill={P.yellow} r={-1} size={34}>tuỳ năm khơi lên thập thần nào</Lbl>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI SỐ PHẬN 28.9–34.4
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={28.9} strikeAt={30.8} gearAt={32.2} okAt={32.7} tint={P.sky} />;

// 7. CTA 34.4–hết
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={34.45} note="Năm nào bạn thấy" text="Nặng nhất?" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={34.8} x={300} y={830} s={1.1}><Calendar label="20.." /></Pop>
      <Pop t={t} at={35.2} x={680} y={830} s={0.8}><Block txt="nặng" w={360} h={160} /></Pop>
      <CommentBar t={t} at={36.4} text="năm nặng nhất của mình: 20.." y={1110} dur={1.3} />
      <Lbl at={37.2} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={37.4} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.0, C: S1}, {s: 5.0, e: 8.9, C: S2}, {s: 8.9, e: 13.3, C: S3}, {s: 13.3, e: 20.8, C: S4},
  {s: 20.8, e: 28.9, C: S5}, {s: 28.9, e: 34.4, C: S6}, {s: 34.4, e: 38.53, C: S7},
];

export const BaziR21: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r21.mp3" phrases={cap.phrases} scenes={SCENES} />;
