import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Block, Tag, Tick, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {EC, Doodle, El} from './BaziHand';
import {Note, Heart} from './BaziR14';
import {Pillar} from './BaziR17';
import {Scale} from './BaziR23';
import {ElRow} from './BaziR26';
import cap from './capR37.json';

// ====== Dòng 37 · Ngũ hành tương sinh tương khắc: khắc không phải xấu, là kiềm chế để cân bằng · 9 cảnh ======
// Vòng sinh Mộc→Hỏa→Thổ→Kim→Thủy→Mộc theo script; màu hành từ EC. Nhật chủ / khung trụ là minh hoạ, không phải lá số thật.
// Mốc: src/capR37.json (align_dp)
export const R37_TOTAL = totalFrames(44.976);

const ELS: El[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
const pos = (i: number, R: number) => {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return [Math.cos(a) * R, Math.sin(a) * R];
};
// vòng tương sinh: show[i] = độ hiện của hành i, arr[i] = tiến độ mũi tên i→i+1
const Cycle: React.FC<{show: number[]; arr: number[]; R?: number; hi?: number}> = ({show, arr, R = 290, hi = -1}) => (
  <g>
    {ELS.map((el, i) => {
      const [x1, y1] = pos(i, R), [x2, y2] = pos((i + 1) % 5, R);
      const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
      const sx = x1 + ux * 100, sy = y1 + uy * 100, len = d - 200, k = arr[i] ?? 0;
      if (k < 0.01) return null;
      const ex = sx + ux * len * k, ey = sy + uy * len * k;
      return (
        <g key={`a${el}`}>
          <path d={`M${sx} ${sy} L${ex} ${ey}`} stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
          {k > 0.98 && <path d={`M${ex - ux * 34 - uy * 22} ${ey - uy * 34 + ux * 22} L${ex} ${ey} L${ex - ux * 34 + uy * 22} ${ey - uy * 34 - ux * 22}`} fill="none" stroke={P.navy} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      );
    })}
    {ELS.map((el, i) => {
      const [x, y] = pos(i, R);
      const o = show[i] ?? 0;
      return (
        <g key={el} transform={`translate(${x} ${y}) scale(${0.6 + 0.4 * o})`} opacity={0.25 + 0.75 * o}>
          <circle r={84} fill={EC[el]} {...L} strokeWidth={hi === i ? 10 : 6} stroke={hi === i ? P.red : P.navy} />
          <g transform="translate(0 -16) scale(0.62)"><Doodle el={el} /></g>
          <text y={60} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={32} fill={P.navy}>{el}</text>
        </g>
      );
    })}
  </g>
);
// vô lăng: kiềm chế
const Wheel: React.FC<{rot: number}> = ({rot}) => (
  <g transform={`rotate(${rot})`}>
    <circle r={170} fill="none" stroke={P.navy} strokeWidth={40} />
    <circle r={170} fill="none" stroke={P.silver} strokeWidth={26} />
    {[90, 210, 330].map((a) => <rect key={a} transform={`rotate(${a})`} x={-16} y={0} width={32} height={150} rx={10} fill={P.silver} {...L} strokeWidth={5} />)}
    <circle r={56} fill={P.coral} {...L} />
  </g>
);

// 1. HOOK 0–4.82
const S1: React.FC<SP> = ({t}) => {
  const strike = A(t, 3.9, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Người mới học bát tự" text="Khắc là xấu?" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={1.4} x={500} y={860} r={-2}><Tag w={520} h={130} fill="#fff"><TT size={60} y={20}>khắc = xấu</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M260 880 L${260 + 480 * strike} 840`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={2.4} x={250} y={1180} s={0.8}><Person c={P.blue} mood="sad" /></Pop>
        <Pop t={t} at={4.3} x={800} y={860}><Cross /></Pop>
        <Lbl at={4.0} t={t} x={640} y={1180} w={360} fill={P.yellow} r={1} size={38}>thực ra không phải</Lbl>
      </g>
    </g>
  );
};

// 2. VẬN HÀNH THEO VÒNG 4.82–9.32
const S2: React.FC<SP> = ({t}) => {
  const loop = A(t, 7.6, 1.4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={4.87} note="Ít người để ý" text="Theo vòng" size={150} />
      <g filter="url(#wob)">
        <g transform="translate(500 1000)">
          <circle r={260} fill="#fff" {...L} opacity={A(t, 5.4)} />
          {loop > 0.01 && <path d="M0 -200 A200 200 0 1 1 -1 -200" fill="none" stroke={P.coral} strokeWidth={22} strokeLinecap="round" pathLength={1} strokeDasharray={`${loop * 0.92} 1`} />}
          {loop > 0.98 && <path d="M-40 -240 L10 -200 L-40 -160" fill="none" stroke={P.coral} strokeWidth={22} strokeLinecap="round" strokeLinejoin="round" />}
          <text y={24} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={64} fill={P.navy} opacity={A(t, 7.6)}>ngũ hành</text>
        </g>
        <Lbl at={8.6} t={t} x={500} y={1360} w={340} fill={P.yellow} r={-1} size={38}>chạy thành vòng</Lbl>
      </g>
    </g>
  );
};

// 3. TƯƠNG SINH 9.32–14.30
const ST = [9.35, 10.4, 11.45, 12.5, 13.5];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={9.37} note="Vòng tương sinh" text="Sinh" size={150} />
    <g filter="url(#wob)">
      <g transform="translate(500 1010)">
        <Cycle show={ST.map((s) => A(t, s, 0.35))} arr={ST.map((s, i) => A(t, (ST[i + 1] ?? 14.0) - 0.4, 0.4))} />
      </g>
      <Note t={t} at={13.9} x={500} y={1420} size={30}>Mộc → Hỏa → Thổ → Kim → Thủy → Mộc</Note>
    </g>
  </g>
);

// 4. KHẮC = KIỀM CHẾ, NHƯ TAY LÁI 14.30–19.44
const S4: React.FC<SP> = ({t}) => {
  const sway = A(t, 16.4, 0.5) * Math.sin((t - 16.4) * 2.4) * 22 * (1 - A(t, 18.6, 0.6));
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={14.35} note="Còn khắc là" text="Kiềm chế" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={16.3} x={500} y={960}><Wheel rot={sway} /></Pop>
        <Lbl at={15.7} t={t} x={500} y={700} w={300} fill="#fff" r={-2} size={36}>sự kiềm chế</Lbl>
        <Lbl at={18.5} t={t} x={500} y={1260} w={440} fill={P.mint} r={1} size={36}>xe không lao quá đà</Lbl>
        <Pop t={t} at={18.9} x={820} y={1260}><Tick /></Pop>
      </g>
    </g>
  );
};

// 5. THIẾU KHẮC → MẤT CÂN BẰNG 19.44–22.99
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={19.49} note="Nói đơn giản hơn" text="Cân bằng" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={19.8} x={500} y={1000}><Scale k={A(t, 21.6, 0.6) * 1.4} /></Pop>
      <Lbl at={21.0} t={t} x={500} y={700} w={300} fill="#fff" r={-1} size={36}>thiếu khắc</Lbl>
      <Lbl at={22.3} t={t} x={500} y={1300} w={360} fill={P.coral} r={1} size={38}>mất cân bằng</Lbl>
    </g>
  </g>
);

// 6. NHẬT CHỦ THUỘC 1 TRONG 5 HÀNH 22.99–27.83
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={23.04} note="Trong bát tự" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={24.3} x={300} y={880} s={0.8}><Pillar name="ngày" fill={P.coral} hi={A(t, 25.5, 0.4)} /></Pop>
      <Lbl at={25.4} t={t} x={680} y={820} w={300} fill={P.yellow} r={2} size={32}>can trụ ngày</Lbl>
      <ElRow t={t} at={26.6} y={1250} r={62} step={0.15} />
      <Note t={t} at={27.4} x={500} y={1370} size={28}>thuộc một trong năm hành</Note>
    </g>
  </g>
);

// 7. HÀNH XUNG QUANH SINH / KHẮC → VIỆC · TIỀN · TÌNH CẢM · ÁP LỰC 27.83–34.44
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={27.88} note="Các hành xung quanh" text="Sinh hay khắc" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={28.4} x={500} y={820} s={0.6}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={29.6} x={200} y={820} r={-3}><Tag w={190} h={86} fill={P.mint}><TT size={38} y={13}>sinh →</TT></Tag></Pop>
      <Pop t={t} at={29.9} x={800} y={820} r={3}><Tag w={190} h={86} fill={P.coral}><TT size={38} y={13}>← khắc</TT></Tag></Pop>
      <Note t={t} at={29.0} x={500} y={970} size={26}>nhật chủ · minh hoạ</Note>
      <Pop t={t} at={32.1} x={190} y={1200} s={0.4}><Briefcase /></Pop>
      <Pop t={t} at={32.6} x={400} y={1200}><Coin r={44} /></Pop>
      <Pop t={t} at={33.3} x={600} y={1200}><Heart /></Pop>
      <Pop t={t} at={34.0} x={810} y={1200} s={0.4}><Block txt="áp lực" /></Pop>
      <Lbl at={31.0} t={t} x={500} y={1370} w={420} fill={P.yellow} r={-1} size={34}>cách bạn xử lý</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 34.44–38.44
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.44} strikeAt={35.9} gearAt={36.8} okAt={37.2} tint={P.sky} />;

// 9. CTA 38.44–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={38.5} note="Bạn thử đoán xem" text="Hành nào sinh?" size={120} />
    <g filter="url(#wob)">
      <g transform="translate(500 830) scale(0.62)" opacity={A(t, 38.7)}>
        <Cycle show={[1, 1, 1, 1, 1]} arr={[1, 1, 1, 1, 1]} hi={Math.floor(Math.max(0, t - 39.8) * 2.5) % 5} />
      </g>
      <CommentBar t={t} at={41.2} text="mình sinh năm … · nhật chủ …" y={1180} dur={1.6} />
      <Lbl at={44.1} t={t} x={500} y={1330} w={420} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={44.3} x={500} y={1390} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.82, C: S1}, {s: 4.82, e: 9.32, C: S2}, {s: 9.32, e: 14.3, C: S3}, {s: 14.3, e: 19.44, C: S4},
  {s: 19.44, e: 22.99, C: S5}, {s: 22.99, e: 27.83, C: S6}, {s: 27.83, e: 34.44, C: S7}, {s: 34.44, e: 38.44, C: S8},
  {s: 38.44, e: 45.38, C: S9},
];

export const BaziR37: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r37.mp3" phrases={cap.phrases} scenes={SCENES} />;
