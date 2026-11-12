import React from 'react';
import {P, H, L, CJK, Page, A, Pop, TT, Lbl, Head, Coin, Block, Person, Briefcase, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {STEM, EC} from './BaziHand';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR20.json';

// ====== Dòng 20 · Thiên can là gì: 10 thiên can = 10 kiểu năng lượng (Giáp cây lớn, Ất dây leo, Bính mặt trời) · 8 cảnh ======
// Can lấy từ bảng STEM. Khung 4 trụ là khung trống minh hoạ. Mốc: src/capR20.json (căn tay theo khoảng lặng)
export const R20_TOTAL = totalFrames(46.06);

// kính lúp
const Lens: React.FC = () => (
  <g>
    <path d="M70 70 L170 170" stroke={P.navy} strokeWidth={26} strokeLinecap="round" />
    <path d="M70 70 L170 170" stroke={P.orange} strokeWidth={14} strokeLinecap="round" />
    <circle r={110} fill="#fff" fillOpacity={0.55} {...L} strokeWidth={10} />
    <path d="M-60 -40 Q-50 -70 -20 -80" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" />
  </g>
);
// thẻ thiên can nhỏ, màu theo hành
const StemChip: React.FC<{can: string}> = ({can}) => {
  const [z, e] = STEM[can];
  return (
    <g>
      <rect x={-70} y={-80} width={140} height={160} rx={16} fill={EC[e]} {...L} strokeWidth={5} />
      <text y={14} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={70} fill={P.navy}>{z}</text>
      <text y={60} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={28} fill={P.navy}>{can}</text>
    </g>
  );
};
// cây lớn thẳng (Giáp)
const BigTree: React.FC<{g: number}> = ({g}) => (
  <g transform={`scale(1 ${0.6 + 0.4 * g})`}>
    <rect x={-22} y={-60} width={44} height={200} rx={10} fill={P.orange} {...L} />
    <circle cx={0} cy={-150} r={90} fill="#7ec9a3" {...L} />
    <circle cx={-70} cy={-90} r={60} fill="#8fd5b0" {...L} />
    <circle cx={70} cy={-90} r={60} fill="#8fd5b0" {...L} />
  </g>
);
// dây leo uốn quanh cọc (Ất)
const Vine: React.FC<{k: number}> = ({k}) => (
  <g>
    <rect x={-10} y={-200} width={20} height={340} rx={8} fill={P.peach} {...L} strokeWidth={5} />
    <path d="M0 140 C80 100 -80 60 0 20 C80 -20 -80 -60 0 -100 C60 -130 -40 -170 10 -200" fill="none" stroke="#5fb88a" strokeWidth={14} strokeLinecap="round" pathLength={1} strokeDasharray={`${k} 1`} opacity={k > 0.01 ? 1 : 0} />
    {[[40, 110], [-42, 40], [42, -30], [-40, -100], [30, -170]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx={30} ry={16} transform={`rotate(${x > 0 ? -30 : 30} ${x} ${y})`} fill={P.mint} {...L} strokeWidth={4} opacity={k > 0.15 + i * 0.17 ? 1 : 0} />
    ))}
  </g>
);
// mặt trời (Bính)
const Sun: React.FC<{t: number}> = ({t}) => (
  <g>
    <g transform={`rotate(${t * 20})`}>{Array.from({length: 10}).map((_, i) => <path key={i} transform={`rotate(${i * 36})`} d="M0 -120 L0 -165" stroke={P.orange} strokeWidth={14} strokeLinecap="round" />)}</g>
    <circle r={100} fill={P.yellow} {...L} />
    <circle r={70} fill={P.coral} opacity={0.35} />
    <circle cx={-30} cy={-10} r={8} fill={P.navy} /><circle cx={30} cy={-10} r={8} fill={P.navy} />
    <path d="M-30 25 Q0 50 30 25" fill="none" stroke={P.navy} strokeWidth={6} strokeLinecap="round" />
  </g>
);

// 1. HOOK 0–4.5: đọc mãi chưa hiểu mình
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Người mới tìm hiểu bát tự" text="Đọc mãi…" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={330} y={1250} s={1.1}><Person c={P.blue} mood={t > 2.2 ? 'flat' : 'smile'} /></Pop>
      <Pop t={t} at={0.9} x={330} y={1060} s={1}>
        <g><path d="M-150 -20 L0 0 L150 -20 L150 80 L0 100 L-150 80Z" fill="#fff" {...L} /><path d="M0 0 V100" stroke={P.navy} strokeWidth={5} />
          {[0, 1, 2].map((i) => <path key={i} d={`M-125 ${12 + i * 22} H-25 M25 ${12 + i * 22} H125`} stroke="#9fb0cc" strokeWidth={5} strokeLinecap="round" />)}</g>
      </Pop>
      {['?', '?', '?'].map((q, i) => <Pop key={i} t={t} at={2.3 + i * 0.3} x={560 + i * 110} y={760 + (i % 2) * 70} r={-8 + i * 8}><TT size={110}>{q}</TT></Pop>)}
      <Lbl at={2.6} t={t} x={680} y={1060} w={360} fill={P.yellow} r={3} size={36}>chưa hiểu mình</Lbl>
    </g>
  </g>
);

// 2. NHẬT CHỦ 4.5–8.9: một thứ rất nhỏ trong lá số → kính lúp soi
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={4.55} note="Một thứ rất nhỏ" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={4.8} x={500} y={950}>
        <g><rect x={-300} y={-200} width={600} height={400} rx={20} fill="#fff" {...L} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={-250 + i * 130} y={-150} width={110} height={300} rx={12} fill={PF[i]} opacity={0.5} stroke={P.navy} strokeWidth={4} />)}
          <circle cx={-120 + 130} cy={-80} r={10} fill={P.red} /></g>
      </Pop>
      <Pop t={t} at={6.0} x={520} y={870} s={0.9}><Lens /></Pop>
      <Lbl at={7.3} t={t} x={500} y={1260} w={440} fill={P.yellow} r={-2} size={38}>nhật chủ = bạn</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ → thiên can trụ ngày 8.9–17.8
const POP3 = [9.6, 10.1, 10.6, 11.2];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={8.95} note="Bát tự có" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={POP3[i]} x={200 + i * 200} y={930}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 15.4) : 0} top={i === 2 && t > 15.6 ? '★' : '?'} /></Pop>)}
      <Lbl at={12.9} t={t} x={300} y={640} w={330} fill="#fff" r={-2} size={34}>trên: thiên can</Lbl>
      <Lbl at={13.8} t={t} x={640} y={1210} w={330} fill="#fff" r={2} size={34}>dưới: địa chi</Lbl>
      <Lbl at={16.0} t={t} x={500} y={1330} w={560} fill={P.yellow} r={-1} size={36}>can trụ ngày = nhật chủ</Lbl>
      <Note t={t} at={11.5} x={500} y={1420} size={28}>khung trống minh hoạ, chưa phải lá số thật</Note>
    </g>
  </g>
);

// 4. MƯỜI THIÊN CAN 17.8–22.0: 10 kiểu năng lượng
const STEMS = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={17.85} note="Mười thiên can là" text="10 năng lượng" size={120} />
    <g filter="url(#wob)">
      {STEMS.map((c, i) => <Pop key={c} t={t} at={18.3 + i * 0.22} x={180 + (i % 5) * 160} y={820 + Math.floor(i / 5) * 210} r={(i % 3) - 1}><StemChip can={c} /></Pop>)}
      <Lbl at={20.0} t={t} x={500} y={1260} w={560} fill={P.yellow} r={1} size={36}>mỗi can một kiểu năng lượng</Lbl>
      <Note t={t} at={20.4} x={500} y={1360} size={28}>màu theo hành: Mộc · Hỏa · Thổ · Kim · Thủy</Note>
    </g>
  </g>
);

// 5. GIÁP · ẤT · BÍNH 22.0–31.55
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={22.05} note="Ví dụ ba thiên can" text="Giáp · Ất · Bính" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={22.1} x={190} y={940}><BigTree g={A(t, 23.3, 1.0)} /></Pop>
      <Pop t={t} at={22.3} x={190} y={610} s={0.8}><StemChip can="Giáp" /></Pop>
      <Lbl at={23.3} t={t} x={190} y={1170} w={260} fill="#fff" r={-3} size={30}>thẳng, vươn lên</Lbl>
      <Pop t={t} at={24.9} x={500} y={960}><Vine k={A(t, 26.0, 1.8)} /></Pop>
      <Pop t={t} at={25.0} x={500} y={610} s={0.8}><StemChip can="Ất" /></Pop>
      <Lbl at={26.1} t={t} x={500} y={1200} w={260} fill="#fff" r={2} size={30}>mềm, biết uốn</Lbl>
      <Pop t={t} at={28.5} x={810} y={950} s={0.85}><Sun t={t} /></Pop>
      <Pop t={t} at={28.6} x={810} y={610} s={0.8}><StemChip can="Bính" /></Pop>
      <Lbl at={29.9} t={t} x={790} y={1170} w={260} fill={P.yellow} r={-2} size={30}>tỏa sáng, nhiệt</Lbl>
      <Note t={t} at={22.6} x={500} y={1330} size={28}>cây lớn · dây leo · mặt trời</Note>
    </g>
  </g>
);

// 6. KHÁC NHẬT CHỦ → KHÁC CÁCH 31.55–38.0: làm việc, tiền bạc, yêu, áp lực
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={31.6} note="Nhật chủ khác nhau" text="Cách khác nhau" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={31.8} x={500} y={1300} s={1.0}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={32.6} x={250} y={760} s={0.8}><Briefcase /></Pop>
      <Lbl at={32.8} t={t} x={250} y={900} w={220} fill="#fff" r={-2} size={30}>làm việc</Lbl>
      <Pop t={t} at={34.1} x={750} y={760}><Coin r={60} /></Pop>
      <Lbl at={34.2} t={t} x={750} y={900} w={220} fill="#fff" r={2} size={30}>tiền bạc</Lbl>
      <Pop t={t} at={35.4} x={250} y={1080} s={1.1}><Heart /></Pop>
      <Lbl at={35.5} t={t} x={250} y={1190} w={160} fill="#fff" r={-2} size={30}>yêu</Lbl>
      <Pop t={t} at={36.3} x={750} y={1080} s={0.5}><Block txt="áp lực" w={360} h={150} /></Pop>
      <Lbl at={36.4} t={t} x={750} y={1190} w={220} fill="#fff" r={2} size={30}>chịu áp lực</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 38.0–42.1
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={38.0} strikeAt={39.0} gearAt={40.2} okAt={40.7} tint={P.sky} />;

// 8. CTA 42.1–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={42.15} note="Bạn thuộc nhật chủ nào?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      {['Giáp', 'Ất', 'Bính'].map((c, i) => <Pop key={c} t={t} at={42.4 + i * 0.25} x={260 + i * 240} y={790} r={(i - 1) * 4}><StemChip can={c} /></Pop>)}
      <Pop t={t} at={43.2} x={500} y={640} s={0.7}><TT size={90}>?</TT></Pop>
      <CommentBar t={t} at={43.7} text="năm sinh của mình: 19.." y={1080} dur={1.4} />
      <Lbl at={44.6} t={t} x={500} y={1240} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={45.0} x={500} y={1300} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.5, C: S1}, {s: 4.5, e: 8.9, C: S2}, {s: 8.9, e: 17.8, C: S3}, {s: 17.8, e: 22.0, C: S4},
  {s: 22.0, e: 31.55, C: S5}, {s: 31.55, e: 38.0, C: S6}, {s: 38.0, e: 42.1, C: S7}, {s: 42.1, e: 46.46, C: S8},
];

export const BaziR20: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r20.mp3" phrases={cap.phrases} scenes={SCENES} />;
