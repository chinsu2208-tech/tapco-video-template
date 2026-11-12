import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Book, Tick, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {EC, BR} from './BaziHand';
import {GZ, Note, Heart} from './BaziR14';
import {PIL, PF} from './BaziR17';
import cap from './capR25.json';

// ====== Dòng 25 · Địa chi là gì: 12 con giáp = 12 địa chi, một nửa của can chi · 8 cảnh ======
// Chữ Hán + hành của địa chi lấy từ bảng BR; 1992 = Nhâm Thân từ STEM/BR. Khung 4 trụ là khung trống minh hoạ.
// Mốc: src/capR25.json (align_dp, khớp khoảng lặng)
export const R25_TOTAL = totalFrames(44.93);

const ORDER = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
// vòng 12 địa chi, màu theo hành; k = số ô đã hiện (0..12)
const Wheel: React.FC<{k: number; R?: number}> = ({k, R = 300}) => (
  <g>
    <circle r={R + 70} fill="#fff" {...L} />
    <circle r={R - 75} fill={P.cream} {...L} strokeWidth={5} />
    {ORDER.map((n, i) => {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const [z, e] = BR[n];
      return (
        <g key={n} transform={`translate(${Math.cos(a) * R} ${Math.sin(a) * R})`} opacity={k > i ? 1 : 0}>
          <circle r={58} fill={EC[e]} {...L} strokeWidth={5} />
          <text y={8} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={50} fill={P.navy}>{z}</text>
          <text y={44} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={22} fill={P.navy}>{n}</text>
        </g>
      );
    })}
  </g>
);
// thẻ can chi chia đôi: hi = 'can' | 'chi' | ''
const Half: React.FC<{hi: string}> = ({hi}) => (
  <g>
    <rect x={-150} y={-230} width={300} height={220} rx={20} fill={hi === 'chi' ? '#fff' : P.yellow} {...L} opacity={hi === 'chi' ? 0.5 : 1} />
    <text y={-105} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={48} fill={P.navy}>thiên can</text>
    <rect x={-150} y={10} width={300} height={220} rx={20} fill={hi === 'chi' ? P.mint : '#fff'} {...L} />
    <text y={135} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={48} fill={P.navy}>địa chi</text>
  </g>
);

// 1. HOOK 0–4.8
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người mới tìm hiểu bát tự" text="Đọc không ra" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={1.9} x={300} y={1280} s={1.05}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={2.2} t={t} x={300} y={960} w={300} fill={P.yellow} r={-3} size={34}>tuổi con giáp</Lbl>
      <Pop t={t} at={3.4} x={690} y={1060} s={1.3} r={3}><g><Book c={P.mint} /><g transform="translate(10 -62) rotate(-4)"><Book c={P.coral} w={220} /></g><g transform="translate(-6 -124) rotate(3)"><Book c={P.yellow} w={200} /></g></g></Pop>
      <Pop t={t} at={3.9} x={720} y={820}><TT size={110}>?</TT></Pop>
    </g>
  </g>
);

// 2. CON GIÁP = ĐỊA CHI = MỘT NỬA 4.8–9.83
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={4.85} note="Con giáp thực ra là" text="Địa chi" size={160} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.4} x={340} y={1000}><Half hi={t > 7.4 ? 'chi' : ''} /></Pop>
      <Lbl at={8.4} t={t} x={720} y={900} w={300} fill="#fff" r={3} size={36}>một nửa</Lbl>
      <Note t={t} at={8.7} x={720} y={990} size={30}>của can chi</Note>
      {t > 7.6 && <path d="M520 1130 Q600 1100 650 960" fill="none" stroke={P.red} strokeWidth={8} strokeLinecap="round" opacity={A(t, 7.6)} />}
    </g>
  </g>
);

// 3. 12 CON GIÁP = 12 ĐỊA CHI, mỗi chi một nhịp một mùa 9.83–15.74
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={9.9} note="Nói đơn giản hơn" text="12 địa chi" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={10.2} x={500} y={1010} s={0.95}><Wheel k={cl12(t)} /></Pop>
      <Lbl at={14.3} t={t} x={500} y={1010} w={300} fill={P.yellow} size={32}>mỗi chi 1 nhịp</Lbl>
      <Note t={t} at={14.8} x={500} y={1060} size={26}>một mùa riêng</Note>
    </g>
  </g>
);
function cl12(t: number) { return Math.max(0, Math.min(12, (t - 11.6) * 6)); }

// 4. CAN + CHI = CAN CHI · 1992 Nhâm Thân 15.74–19.37
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={15.8} note="Thiên can + địa chi" text="Can chi" size={150} />
    <g filter="url(#wob)">
      <Lbl at={16.0} t={t} x={250} y={880} w={240} fill="#fff" size={34}>thiên can</Lbl>
      <Lbl at={16.5} t={t} x={250} y={1100} w={240} fill={P.mint} size={34}>địa chi</Lbl>
      <Pop t={t} at={16.6} x={250} y={990}><TT size={70}>+</TT></Pop>
      <Pop t={t} at={17.2} x={680} y={960} s={0.95} r={2}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <Note t={t} at={18.0} x={500} y={1300} size={28}>ví dụ: năm 1992</Note>
    </g>
  </g>
);

// 5. MỖI TRỤ: 1 CAN + 1 CHI 19.37–29.51
const PAT = [20.5, 22.83, 24.44, 25.0];
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={19.4} note="Trong bát tự" text="Mỗi trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={200 + i * 200} y={980}>
          <g>
            <rect x={-80} y={-200} width={160} height={400} rx={18} fill={PF[i]} {...L} />
            <text y={-152} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={38} fill={P.navy}>{n}</text>
            <rect x={-58} y={-120} width={116} height={124} rx={12} fill={t > 26.6 ? P.yellow : '#fff'} {...L} strokeWidth={5} />
            <text y={-46} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 26.6 ? 'can' : '?'}</text>
            <rect x={-58} y={36} width={116} height={124} rx={12} fill={t > 28.3 ? P.mint : '#fff'} {...L} strokeWidth={5} />
            <text y={108} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{t > 28.3 ? 'chi' : '?'}</text>
          </g>
        </Pop>
      ))}
      <Note t={t} at={25.5} x={500} y={1260} size={28}>khung trống minh hoạ · 4 can + 4 chi = 8 chữ</Note>
    </g>
  </g>
);

// 6. CÙNG TUỔI, KHÁC NHỊP 29.51–36.31
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={29.55} note="Điều này có nghĩa là" text="Cùng tuổi, khác" size={115} />
    <g filter="url(#wob)">
      <Pop t={t} at={30.4} x={250} y={1300} s={0.95}><Person c={P.silver} mood="smile" /></Pop>
      <Pop t={t} at={30.7} x={750} y={1300} s={0.95}><Person c={P.silver} mood="flat" /></Pop>
      <Lbl at={31.0} t={t} x={500} y={1220} w={160} fill="#fff" size={40}>≠</Lbl>
      {[[31.8, 650, 'việc'], [32.4, 840, 'tiền'], [33.5, 1030, 'tình cảm']].map(([at, y, s]) => (
        <g key={s as string}>
          <Note t={t} at={at as number} x={500} y={(y as number) + 10} size={30}>{s as string}</Note>
        </g>
      ))}
      <Pop t={t} at={31.8} x={250} y={650} s={0.5}><Briefcase /></Pop>
      <Pop t={t} at={31.9} x={750} y={650} s={0.5} r={14}><Briefcase /></Pop>
      <Pop t={t} at={32.4} x={250} y={840} s={0.9}><Coin /></Pop>
      <Pop t={t} at={32.5} x={720} y={840} s={0.7}><Coin /></Pop><Pop t={t} at={32.6} x={790} y={850} s={0.7}><Coin /></Pop>
      <Pop t={t} at={33.5} x={250} y={1030} s={0.9}><Heart /></Pop>
      <Pop t={t} at={33.6} x={750} y={1030} s={0.9}><Heart c={P.coral} /></Pop>
      <Note t={t} at={34.6} x={500} y={1460} size={26}>hai người minh hoạ · cùng con giáp</Note>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 36.31–40.45
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={36.31} strikeAt={37.2} gearAt={38.6} okAt={39.3} tint={P.sky} />;

// 8. CTA 40.45–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={40.5} note="Bạn tuổi con gì?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.7} x={500} y={800} s={0.5}><Wheel k={12} /></Pop>
      <CommentBar t={t} at={41.9} text="năm sinh của mình là …" y={1110} dur={1.5} />
      <Lbl at={43.0} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={43.4} x={500} y={1320} />
      <Pop t={t} at={43.8} x={820} y={1270}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.8, C: S1}, {s: 4.8, e: 9.83, C: S2}, {s: 9.83, e: 15.74, C: S3}, {s: 15.74, e: 19.37, C: S4},
  {s: 19.37, e: 29.51, C: S5}, {s: 29.51, e: 36.31, C: S6}, {s: 36.31, e: 40.45, C: S7}, {s: 40.45, e: 45.33, C: S8},
];

export const BaziR25: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r25.mp3" phrases={cap.phrases} scenes={SCENES} />;
