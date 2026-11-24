import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Block, Calendar, Tick, Cross, Tag, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF, Battery} from './BaziR17';
import {Metro} from './BaziR23';
import {ElRow} from './BaziR26';
import cap from './capR41.json';

// ====== Dòng 41 · Mệt cuối năm, càng nghỉ càng chưa đủ: nhịp vận hành của nhật chủ · 9 cảnh ======
// Bốn trụ để trống "?" (minh hoạ, không có lá số thật). Hình cây mùa đông là ẩn dụ của script.
// Mốc: src/capR41.json (align_dp)
export const R41_TOTAL = totalFrames(53.496);

// cây: snow 0..1 (tuyết phủ), sprout 0..1 (chồi non), leaves 0..1 (tán lá)
export const Tree: React.FC<{snow?: number; sprout?: number; leaves?: number; dry?: number}> = ({snow = 0, sprout = 0, leaves = 0, dry = 0}) => (
  <g>
    <path d="M-26 200 L-18 -20 L18 -20 L26 200Z" fill={dry > 0.5 ? '#d9a86a' : '#c58b55'} {...L} />
    <path d="M0 -10 L-90 -120 M0 -40 L80 -150 M-50 -70 L-60 -170 M40 -90 L110 -110" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    {leaves > 0.01 && <g opacity={leaves}>
      <circle cx={-80} cy={-140} r={70} fill={dry > 0.5 ? P.yellow : P.mint} {...L} />
      <circle cx={70} cy={-160} r={80} fill={dry > 0.5 ? P.yellow : P.mint} {...L} />
      <circle cx={0} cy={-210} r={80} fill={dry > 0.5 ? P.yellow : P.mint} {...L} />
    </g>}
    {snow > 0.01 && <g opacity={snow}>
      <path d="M-120 -120 Q-90 -142 -62 -122 M52 -152 Q80 -170 108 -150 M-82 -168 Q-60 -186 -38 -168" stroke="#fff" strokeWidth={16} strokeLinecap="round" fill="none" />
      <path d="M-170 200 Q0 160 170 200Z" fill="#fff" {...L} strokeWidth={5} />
    </g>}
    {sprout > 0.01 && <g transform={`translate(80 -150) scale(${sprout})`}>
      <path d="M0 0 Q10 -30 0 -50" stroke={P.navy} strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M0 -40 Q30 -70 50 -44 Q24 -30 0 -40Z M0 -40 Q-30 -66 -46 -40 Q-22 -28 0 -40Z" fill={P.mint} {...L} strokeWidth={4} />
    </g>}
  </g>
);
// bông tuyết
export const Flake: React.FC<{t: number; x: number; y: number; o?: number}> = ({t, x, y, o = 1}) => (
  <g opacity={o}>
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const yy = ((y + (t * 60 + i * 97) % 300)) ;
      return <text key={i} x={x + i * 60 - 150 + 10 * Math.sin(t * 2 + i)} y={yy} fontSize={34} fill="#fff" stroke={P.navy} strokeWidth={2} textAnchor="middle">✻</text>;
    })}
  </g>
);
// nút tạm dừng
const PauseBtn: React.FC = () => (
  <g><circle r={80} fill={P.mint} {...L} /><rect x={-34} y={-40} width={22} height={80} rx={6} fill={P.navy} /><rect x={12} y={-40} width={22} height={80} rx={6} fill={P.navy} /></g>
);
// hơi thở
const Breath: React.FC<{t: number}> = ({t}) => (
  <g opacity={0.5 + 0.5 * Math.sin(t * 2)}>
    <path d="M0 0 Q40 -20 80 0 T160 0" fill="none" stroke={P.blue} strokeWidth={8} strokeLinecap="round" />
    <path d="M20 40 Q60 20 100 40 T180 40" fill="none" stroke={P.blue} strokeWidth={8} strokeLinecap="round" />
  </g>
);

// 1. HOOK 0–3.29
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người thấy" text="Mệt cuối năm" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={320} y={1150} s={1.05}><Person c={P.blue} mood="sad" /></Pop>
      <Pop t={t} at={1.6} x={700} y={900}><Battery k={0.12 + 0.18 * A(t, 2.0, 1.2)} /></Pop>
      <Note t={t} at={1.8} x={700} y={1010} size={30}>càng nghỉ…</Note>
      <Lbl at={2.7} t={t} x={680} y={1200} w={300} fill={P.coral} r={2} size={36}>vẫn chưa đủ</Lbl>
    </g>
  </g>
);

// 2. NHỊP VẬN HÀNH CỦA NHẬT CHỦ 3.29–9.52
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={3.34} note="Ít ai để ý" text="Nhịp vận hành" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={4.0} x={320} y={1050}><Metro k={Math.sin((t - 4) * 3.2)} c={P.peach} /></Pop>
      <Pop t={t} at={7.3} x={680} y={950}><Person c={P.yellow} mood="flat" /></Pop>
      <Lbl at={8.6} t={t} x={560} y={1330} w={380} fill={P.yellow} r={-1} size={38}>của nhật chủ</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ · NHẬT CHỦ = TRỤ NGÀY 9.52–17.21
const PAT = [10.5, 11.4, 11.95, 12.5];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={9.57} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={980} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 14.2, 0.4) : 0} /></Pop>
      ))}
      <Lbl at={14.4} t={t} x={610} y={1260} w={340} fill={P.yellow} r={-2} size={34}>nhật chủ ↑ can ngày</Lbl>
      <Lbl at={16.4} t={t} x={430} y={1370} w={300} fill="#fff" r={2} size={36}>= chính bạn</Lbl>
      <Note t={t} at={11} x={500} y={1460} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. NĂM HÀNH · CẦN NẠP SỨC · CÂY MÙA ĐÔNG 17.21–25.29
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={17.26} note="Hành nào cũng cần" text="Nạp lại sức" size={130} />
    <g filter="url(#wob)">
      <ElRow t={t} at={18.6} y={660} r={60} step={0.15} />
      <Pop t={t} at={21.2} x={230} y={900} s={0.8}><Battery k={0.2 + 0.8 * A(t, 21.4, 2.5)} /></Pop>
      <Pop t={t} at={22.4} x={560} y={1150}><Tree snow={1 - A(t, 24.3, 0.8)} sprout={A(t, 24.4, 0.6)} /></Pop>
      <Flake t={t} x={560} y={860} o={A(t, 23.0, 0.4) * (1 - A(t, 24.3, 0.6))} />
      <Note t={t} at={23.1} x={560} y={1420} size={30}>mùa đông → đâm chồi</Note>
    </g>
  </g>
);

// 5. DỪNG LẠI ≠ BỎ CUỘC 25.29–30.41
const S5: React.FC<SP> = ({t}) => {
  const st = A(t, 27.6, 0.5);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={25.34} note="Điều này có nghĩa là" text="Muốn dừng lại" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={26.6} x={500} y={760}><PauseBtn /></Pop>
        <Pop t={t} at={27.3} x={500} y={1000} r={-2}><Tag w={420} h={100} fill="#fff"><TT size={48} y={17}>bỏ cuộc</TT></Tag></Pop>
        {st > 0.01 && <path d={`M300 1010 L${300 + 400 * st} 990`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={28.0} x={760} y={980}><Cross /></Pop>
        <Lbl at={29.4} t={t} x={480} y={1250} w={460} fill={P.mint} r={1} size={40}>nhịp cần thiết</Lbl>
        <Pop t={t} at={29.8} x={760} y={1180}><Tick /></Pop>
      </g>
    </g>
  );
};

// 6. CÔNG VIỆC · TIỀN · TÌNH CẢM · ÁP LỰC DỒN 30.41–36.15
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={30.46} note="Nó hiện ra ở" text="Áp lực dồn" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={31.1} x={220} y={760} s={0.5}><Briefcase /></Pop>
      <Note t={t} at={31.2} x={220} y={860} size={26}>công việc</Note>
      <Pop t={t} at={31.95} x={500} y={760}><Coin r={50} /></Pop>
      <Note t={t} at={32.0} x={500} y={860} size={26}>tiền bạc</Note>
      <Pop t={t} at={32.7} x={780} y={760}><Heart /></Pop>
      <Note t={t} at={32.8} x={780} y={860} size={26}>tình cảm</Note>
      <Pop t={t} at={33.6} x={420} y={1080} s={0.55}><Block txt="áp lực" /></Pop>
      <Pop t={t} at={34.2} x={420} y={1180} s={0.55}><Block txt="áp lực" /></Pop>
      <Lbl at={35.2} t={t} x={430} y={1340} w={400} fill={P.coral} r={-1} size={36}>chưa được xả</Lbl>
      <Pop t={t} at={35.4} x={740} y={1150} s={0.75}><Battery k={0.1} /></Pop>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 36.15–40.6
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={36.15} strikeAt={37.0} gearAt={38.3} okAt={39.4} tint={P.mint} />;

// 8. NGHỈ CHO NHẸ · BƯỚC SANG 2027 40.6–45.53
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={40.65} note="Nghỉ cho nhẹ" text="Nhịp thở mới" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={41.0} x={300} y={1120} s={1.05}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={42.6} x={680} y={880} s={0.85}><Calendar label="2027" /></Pop>
      <Pop t={t} at={44.3} x={420} y={830}><Breath t={t} /></Pop>
      <Lbl at={44.6} t={t} x={620} y={1250} w={360} fill={P.mint} r={2} size={36}>thoải mái hơn</Lbl>
    </g>
  </g>
);

// 9. CTA 45.53–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={45.58} note="Năm 2027 bạn muốn" text="Nhẹ ở đâu?" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={46.3} x={500} y={880} s={0.75}><Tree leaves={1} sprout={1} /></Pop>
      <CommentBar t={t} at={49.4} text="nhẹ chuyện … · nhật chủ …" y={1160} dur={1.4} />
      <Lbl at={52.0} t={t} x={500} y={1310} w={380} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={52.3} x={500} y={1370} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.29, C: S1}, {s: 3.29, e: 9.52, C: S2}, {s: 9.52, e: 17.21, C: S3}, {s: 17.21, e: 25.29, C: S4},
  {s: 25.29, e: 30.41, C: S5}, {s: 30.41, e: 36.15, C: S6}, {s: 36.15, e: 40.6, C: S7}, {s: 40.6, e: 45.53, C: S8},
  {s: 45.53, e: 53.896, C: S9},
];

export const BaziR41: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r41.mp3" phrases={cap.phrases} scenes={SCENES} />;
