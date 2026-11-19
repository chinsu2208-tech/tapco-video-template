import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Block, Tick, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Battery} from './BaziR17';
import cap from './capR30.json';

// ====== Dòng 30 · Sinh năm 1985: gánh trên gánh dưới, chưa nghỉ ngày nào · Ấn & Thực Thương · 7 cảnh ======
// 1985 = Ất Sửu (lấy từ STEM/BR qua GZ). Không có lá số thật; Ấn/Thực Thương là khái niệm minh hoạ theo script.
// Mốc: src/capR30.json (align_dp; nối câu 3–4 đã cắt chồng)
export const R30_TOTAL = totalFrames(45.79);

// đòn gánh: k = độ nặng 2 đầu (0..1), tilt = nghiêng
const Pole: React.FC<{k: number; la?: string; lb?: string}> = ({k, la, lb}) => (
  <g>
    <path d="M-260 0 Q0 -30 260 0" stroke={P.orange} strokeWidth={14} fill="none" strokeLinecap="round" />
    {[-230, 230].map((x, j) => (
      <g key={x} transform={`translate(${x} 0)`}>
        <path d="M-50 100 L0 0 L50 100" stroke={P.navy} strokeWidth={4} fill="none" />
        {[0, 1, 2].map((i) => <rect key={i} x={-46 + i * 30} y={90 - 60 * k - i * 14} width={34} height={34} rx={6} fill={[P.yellow, P.silver, P.mint][i]} {...L} strokeWidth={4} opacity={k > 0.05 ? 1 : 0} />)}
        <path d="M-70 100 H70 L52 170 H-52Z" fill={j ? P.mint : P.coral} {...L} />
        {(j ? lb : la) && <text y={150} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={30} fill={P.navy}>{j ? lb : la}</text>}
      </g>
    ))}
  </g>
);
// mũi tên kéo
const Pull: React.FC<{o: number; dir: 1 | -1}> = ({o, dir}) => (
  <g opacity={o} transform={`scale(${dir} 1)`}>
    <path d="M40 0 H180" stroke={P.red} strokeWidth={14} strokeLinecap="round" />
    <path d="M150 -34 L196 0 L150 34" fill="none" stroke={P.red} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
  </g>
);
// dòng chảy lượn sóng
const Stream: React.FC<{t: number; y: number; dir: 1 | -1; o: number}> = ({t, y, dir, o}) => {
  const ph = (t * 80 * dir) % 120;
  return (
    <g opacity={o}>
      <rect x={60} y={y - 60} width={860} height={120} rx={60} fill={P.blue} {...L} strokeWidth={5} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${110 + i * 120 + ph} ${y} q20 -18 40 0 t40 0`} fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.85} />
      ))}
    </g>
  );
};
// giường: phần nghỉ
const Bed: React.FC = () => (
  <g>
    <rect x={-150} y={-20} width={300} height={70} rx={14} fill={P.sky} {...L} />
    <rect x={-150} y={-90} width={30} height={180} rx={8} fill={P.orange} {...L} strokeWidth={5} />
    <rect x={-110} y={-48} width={80} height={36} rx={14} fill="#fff" {...L} strokeWidth={4} />
    <path d="M120 50 V90" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
    <text x={60} y={-60} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={40} fill={P.navy}>z z</text>
  </g>
);

// 1. HOOK 0–4.95
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1985" text="Gánh cả nhà" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={770} y={780} s={0.7} r={3}><GZ can="Ất" chi="Sửu" year="1985" /></Pop>
      <Note t={t} at={1.0} x={770} y={940} size={26}>can chi năm · tính từ Lập xuân</Note>
      <Pop t={t} at={2.6} x={460} y={1130} s={0.9}><Pole k={A(t, 2.8, 1)} /></Pop>
      <Pop t={t} at={2.6} x={460} y={1300} s={0.85}><Person c={P.yellow} mood="flat" /></Pop>
      <Pop t={t} at={3.8} x={260} y={780} s={0.8} r={-4}><Calendar label="nghỉ: 0" /></Pop>
    </g>
  </g>
);

// 2. ẤN & THỰC THƯƠNG KÉO VỀ HAI PHÍA 4.95–12.69
const S2: React.FC<SP> = ({t}) => {
  const sway = t > 11.4 ? Math.sin((t - 11.4) * 6) * 18 : 0;
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={5.0} note="Điều ít người để ý" text="Kéo hai phía" size={120} />
      <g filter="url(#wob)">
        <TermCard t={t} at={9.7} x={240} y={760} vi="Ấn" han="印" fill={P.blue} r={-3} w={300} />
        <TermCard t={t} at={10.5} x={720} y={760} vi="Thực Thương" han="食傷" fill={P.mint} r={3} w={330} />
        <Note t={t} at={8.4} x={480} y={620} size={30}>thập thần</Note>
        <g transform={`translate(${480 + sway} 1220) scale(0.95)`} opacity={A(t, 7.0)}><Person c={P.yellow} mood="flat" /></g>
        <g transform="translate(400 1130)"><Pull o={A(t, 11.4)} dir={-1} /></g>
        <g transform="translate(560 1130)"><Pull o={A(t, 11.6)} dir={1} /></g>
        <Lbl at={11.9} t={t} x={480} y={1400} w={360} fill={P.yellow} r={-1} size={34}>đứng ở giữa</Lbl>
      </g>
    </g>
  );
};

// 3. ẤN = LO BỐ MẸ (ĐI TRƯỚC) · THỰC THƯƠNG = LO CON (ĐI SAU) 12.69–20.07
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={12.74} note="Nói đơn giản hơn" text="Trên và dưới" size={120} />
    <g filter="url(#wob)">
      <Lbl at={13.6} t={t} x={260} y={640} w={240} fill={P.blue} r={-2} size={40}>Ấn</Lbl>
      <Pop t={t} at={14.0} x={190} y={960} s={0.75}><Person c={P.silver} mood="smile" /></Pop>
      <Pop t={t} at={14.3} x={330} y={960} s={0.75}><Person c={P.peach} mood="smile" /></Pop>
      <Lbl at={14.6} t={t} x={260} y={1040} w={250} fill="#fff" r={1} size={30}>bố mẹ</Lbl>
      <Note t={t} at={15.5} x={260} y={1110} size={28}>người đi trước</Note>
      <Lbl at={16.7} t={t} x={720} y={640} w={330} fill={P.mint} r={2} size={40}>Thực Thương</Lbl>
      <Pop t={t} at={17.6} x={720} y={960} s={0.55}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={18.0} t={t} x={720} y={1040} w={200} fill="#fff" r={-1} size={30}>con</Lbl>
      <Note t={t} at={18.9} x={720} y={1110} size={28}>người đi sau</Note>
      <Pop t={t} at={15.0} x={480} y={1330} s={0.8}><Pole k={A(t, 17.6, 1.2)} la="trước" lb="sau" /></Pop>
    </g>
  </g>
);

// 4. NHẬT CHỦ GIỮA HAI DÒNG CHẢY · NẶNG TRƯỚC, NGHỈ SAU 20.07–28.17
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={20.12} note="Điều này có nghĩa là" text="Giữa hai dòng" size={110} />
    <g filter="url(#wob)">
      <Stream t={t} y={640} dir={-1} o={A(t, 21.4)} />
      <Stream t={t} y={1020} dir={1} o={A(t, 21.8)} />
      <Pop t={t} at={20.8} x={480} y={940} s={0.7}><Person c={P.yellow} mood="flat" /></Pop>
      <Lbl at={21.6} t={t} x={480} y={820} w={260} fill={P.yellow} r={-2} size={34}>nhật chủ</Lbl>
      <Pop t={t} at={24.9} x={290} y={1310} s={0.75}><Block txt="nặng: trước" w={380} /></Pop>
      <Pop t={t} at={26.6} x={720} y={1330} s={0.75}><Bed /></Pop>
      <Note t={t} at={27.0} x={720} y={1440} size={30}>nghỉ: để sau</Note>
    </g>
  </g>
);

// 5. SANG 2027 MỚI NHẬN RA CHƯA DỪNG LẦN NÀO 28.17–35.84
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={28.22} note="Sang năm 2027" text="Chưa dừng lần nào" size={96} />
    <g filter="url(#wob)">
      <Pop t={t} at={28.6} x={270} y={820} r={-4}><Calendar label="2027" /></Pop>
      <Pop t={t} at={30.6} x={700} y={860} s={0.9}><Battery k={Math.max(0.12, 0.9 - A(t, 31.0, 2) * 0.8)} /></Pop>
      <Lbl at={31.8} t={t} x={500} y={1100} w={420} fill="#fff" r={-1} size={34}>chưa nghỉ lần nào</Lbl>
      <Pop t={t} at={33.1} x={250} y={1380} s={0.55}><Briefcase /></Pop>
      <Pop t={t} at={34.2} x={500} y={1380}><Coin r={52} /></Pop>
      <Pop t={t} at={34.9} x={740} y={1380} s={1.2}><Heart /></Pop>
    </g>
  </g>
);

// 6. KHÔNG PHẢI SỐ PHẬN 35.84–40.08
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.84} strikeAt={36.8} gearAt={38.0} okAt={38.6} tint={P.sky} />;

// 7. CTA 40.08–hết
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={40.12} note="Bạn sinh năm 1985?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.4} x={500} y={820} s={0.85}><GZ can="Ất" chi="Sửu" year="1985" /></Pop>
      <CommentBar t={t} at={42.3} text="1985 · nhật chủ …" y={1160} dur={1.4} />
      <Lbl at={44.0} t={t} x={500} y={1300} w={520} fill={P.mint} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={44.3} x={500} y={1360} />
      <Pop t={t} at={44.6} x={820} y={1310}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.95, C: S1}, {s: 4.95, e: 12.69, C: S2}, {s: 12.69, e: 20.07, C: S3}, {s: 20.07, e: 28.17, C: S4},
  {s: 28.17, e: 35.84, C: S5}, {s: 35.84, e: 40.08, C: S6}, {s: 40.08, e: 46.19, C: S7},
];

export const BaziR30: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r30.mp3" phrases={cap.phrases} scenes={SCENES} />;
