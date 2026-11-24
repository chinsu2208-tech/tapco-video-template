import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Briefcase, Jar, Tick, Cross, Tag, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle, EC, El} from './BaziHand';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import {Scale} from './BaziR23';
import cap from './capR43.json';

// ====== Dòng 43 · Sợ lá số thiếu hành: thiếu = lệch nhịp, không hỏng · 9 cảnh ======
// Bốn trụ trống, cột "nhiều/ít" của 5 hành là số liệu minh hoạ (không có lá số thật).
// Mốc: src/capR43.json (align_dp)
export const R43_TOTAL = totalFrames(45.096);

const ELS: El[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
// hàng 5 hành, miss = chỉ số hành "thiếu" (vẽ nét đứt)
const ElMiss: React.FC<{t: number; at: number; y: number; miss?: number; r?: number}> = ({t, at, y, miss = -1, r = 66}) => (
  <g>
    {ELS.map((el, i) => (
      <Pop key={el} t={t} at={at + i * 0.15} x={180 + i * 160} y={y}>
        {i === miss ? (
          <g>
            <circle r={r} fill="#fff" stroke={P.navy} strokeWidth={5} strokeDasharray="14 10" />
            <text y={18} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={54} fill={P.navy}>?</text>
          </g>
        ) : (
          <g>
            <circle r={r} fill={EC[el]} {...L} strokeWidth={5} />
            <g transform={`translate(0 ${-r * 0.18}) scale(${r / 110})`}><Doodle el={el} /></g>
            <text y={r * 0.72} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.36} fill={P.navy}>{el}</text>
          </g>
        )}
      </Pop>
    ))}
  </g>
);
// cột năng lượng 5 hành (minh hoạ)
const LV = [0.9, 0.55, 0.35, 0.15, 0.6];
const Bars: React.FC<{t: number; at: number}> = ({t, at}) => (
  <g>
    <path d="M90 1200 H910" stroke={P.navy} strokeWidth={6} strokeLinecap="round" />
    {ELS.map((el, i) => {
      const h = 380 * LV[i] * A(t, at + i * 0.12, 0.6);
      return (
        <g key={el}>
          {h > 1 && <rect x={130 + i * 160} y={1200 - h} width={100} height={h} rx={10} fill={EC[el]} {...L} strokeWidth={5} />}
          <text x={180 + i * 160} y={1250} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy} opacity={A(t, at, 0.3)}>{el}</text>
        </g>
      );
    })}
  </g>
);

// 1. HOOK 0–3.88
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người mới sợ nhất" text="Thiếu hành" size={140} />
    <g filter="url(#wob)">
      <ElMiss t={t} at={2.4} y={700} miss={3} />
      <Pop t={t} at={1.2} x={360} y={1120} s={1.05}><Person c={P.blue} mood="sad" /></Pop>
      <Pop t={t} at={3.2} x={660} y={1000}><Tag w={120} h={110} fill={P.coral} r={6}><TT size={76} y={26}>!</TT></Tag></Pop>
    </g>
  </g>
);

// 2. HIỂU LẦM: THIẾU = XẤU 3.88–10.22
const S2: React.FC<SP> = ({t}) => {
  const st = A(t, 9.6, 0.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={3.93} note="Ít người để ý" text="Một hiểu lầm" size={130} />
      <g filter="url(#wob)">
        <Note t={t} at={7.0} x={500} y={760} size={34}>trước đây ai cũng nghĩ…</Note>
        <Pop t={t} at={8.3} x={500} y={960} r={-2}><Tag w={620} h={120} fill="#fff"><TT size={50} y={18}>thiếu hành = lá số xấu</TT></Tag></Pop>
        {st > 0.01 && <path d={`M200 975 L${200 + 600 * st} 945`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={9.8} x={800} y={1120}><Cross /></Pop>
      </g>
    </g>
  );
};

// 3. THIẾU = CHƯA XUẤT HIỆN ĐỦ TRONG 4 TRỤ 10.22–16.89
const PAT = [13.7, 14.3, 15.0, 15.7];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.27} note="Thực ra thiếu là" text="Chưa đủ hiện" size={130} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={1000} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>
      ))}
      <Lbl at={12.0} t={t} x={500} y={700} w={420} fill={P.yellow} r={-1} size={36}>năng lượng chưa đủ</Lbl>
      <Note t={t} at={14} x={500} y={1300} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. LỆCH NHỊP, KHÔNG HỎNG 16.89–20.41
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={16.94} note="Nói đơn giản hơn" text="Lệch nhịp" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={18.3} x={500} y={1000}><Scale k={A(t, 18.6, 0.8)} /></Pop>
      <Lbl at={19.8} t={t} x={460} y={1300} w={380} fill={P.mint} r={-1} size={40}>chứ không hỏng</Lbl>
      <Pop t={t} at={20.1} x={760} y={1230}><Tick /></Pop>
    </g>
  </g>
);

// 5. NHÌN NHẬT CHỦ · HÀNH NHIỀU / ÍT 20.41–26.28
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={20.46} note="Nhìn nhật chủ của mình" text="Nhiều hay ít" size={125} />
    <g filter="url(#wob)">
      <Bars t={t} at={23.6} />
      <Lbl at={24.8} t={t} x={180} y={740} w={160} fill="#fff" r={-3} size={32}>nhiều</Lbl>
      <Lbl at={25.7} t={t} x={660} y={960} w={120} fill="#fff" r={3} size={32}>ít</Lbl>
      <Note t={t} at={23.8} x={500} y={1330} size={26}>số liệu minh hoạ</Note>
    </g>
  </g>
);

// 6. CÔNG VIỆC CĂNG · TIỀN KHÓ GIỮ · TÌNH CẢM VƯỚNG 26.28–31.38
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={26.33} note="Rồi hiểu vì sao" text="Hay vướng" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={27.6} x={230} y={850} s={0.55}><Briefcase /></Pop>
      <Lbl at={27.9} t={t} x={230} y={1010} w={220} fill={P.coral} r={-2} size={32}>dễ căng</Lbl>
      <Pop t={t} at={28.7} x={500} y={850} s={0.45}><Jar lid={false} fill={0.25} /></Pop>
      <Lbl at={29.4} t={t} x={500} y={1010} w={220} fill={P.yellow} r={2} size={32}>khó giữ</Lbl>
      <Pop t={t} at={30.4} x={770} y={850}><Heart /></Pop>
      <Lbl at={30.8} t={t} x={770} y={1010} w={200} fill={P.blue} r={-2} size={32}>hay vướng</Lbl>
      <Pop t={t} at={30.0} x={500} y={1300} s={0.8}><Person c={P.yellow} mood="flat" /></Pop>
    </g>
  </g>
);

// 7. BIẾT LỆCH Ở ĐÂU → ĐIỀU CHỈNH NHẸ 31.38–34.85
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={31.43} note="Biết mình lệch ở đâu" text="Chỉnh nhẹ hơn" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={31.8} x={500} y={1000}><Scale k={1 - A(t, 33.0, 1.2) * 0.9} /></Pop>
      <Lbl at={34.2} t={t} x={500} y={1300} w={420} fill={P.yellow} r={-1} size={38}>nhẹ hơn nhiều</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 34.85–39.31
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.85} strikeAt={35.8} gearAt={37.1} okAt={38.1} tint={P.sky} />;

// 9. CTA 39.31–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={39.36} note="Lá số bạn nghiêng về" text="Hành nào?" size={145} />
    <g filter="url(#wob)">
      <ElMiss t={t} at={39.8} y={760} />
      <CommentBar t={t} at={42.0} text="năm sinh … · nhật chủ …" y={1100} dur={1.3} />
      <Lbl at={43.6} t={t} x={500} y={1260} w={380} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={43.9} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.88, C: S1}, {s: 3.88, e: 10.22, C: S2}, {s: 10.22, e: 16.89, C: S3}, {s: 16.89, e: 20.41, C: S4},
  {s: 20.41, e: 26.28, C: S5}, {s: 26.28, e: 31.38, C: S6}, {s: 31.38, e: 34.85, C: S7}, {s: 34.85, e: 39.31, C: S8},
  {s: 39.31, e: 45.496, C: S9},
];

export const BaziR43: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r43.mp3" phrases={cap.phrases} scenes={SCENES} />;
