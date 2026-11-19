import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Block, Tick, Tag, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR34.json';

// ====== Dòng 34 · Cùng năm sinh mà tính khác: năm sinh chỉ là 1 trụ, còn tháng/ngày/giờ · 9 cảnh ======
// 1992 Nhâm Thân lấy từ STEM/BR qua GZ. Hai người A/B và tháng/ngày/giờ "?" là minh hoạ, không phải lá số thật.
// Mốc: src/capR34.json (align_dp)
export const R34_TOTAL = totalFrames(45.408);

// ô nhỏ cho tháng/ngày/giờ
const Mini: React.FC<{n: string; c: string}> = ({n, c}) => (
  <g>
    <rect x={-56} y={-56} width={112} height={112} rx={14} fill={c} {...L} strokeWidth={5} />
    <text y={-14} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={26} fill={P.navy}>{n}</text>
    <text y={36} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={44} fill={P.navy}>?</text>
  </g>
);

// 1. HOOK 0–3.83
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người mới tìm hiểu" text="Cùng tuổi" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={2.0} x={260} y={1180}><Person c={P.coral} mood="talk" /></Pop>
      <Pop t={t} at={2.3} x={740} y={1180}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={2.5} t={t} x={500} y={720} w={300} fill={P.yellow} r={-2} size={38}>cùng tuổi</Lbl>
      <Pop t={t} at={3.2} x={500} y={1040}><TT size={130} fill={P.red}>≠</TT></Pop>
      <Lbl at={3.4} t={t} x={500} y={1360} w={300} fill="#fff" r={1} size={36}>tính khác hẳn</Lbl>
    </g>
  </g>
);

// 2. NĂM SINH KHÔNG NÓI HẾT 3.83–6.40
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={3.88} note="Lý do nằm ở" text="Phần còn lại" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.5} x={330} y={950} s={1.1}><Calendar label="năm sinh" /></Pop>
      <Pop t={t} at={5.9} x={650} y={950}><Tag w={200} h={120} fill="#fff"><TT size={70} y={20}>…</TT></Tag></Pop>
      <Pop t={t} at={6.1} x={800} y={850}><TT size={100}>?</TT></Pop>
      <Lbl at={6.0} t={t} x={500} y={1240} w={420} fill={P.yellow} r={-1} size={36}>chưa nói hết</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ, MỖI TRỤ CAN + CHI 6.40–13.26
const PAT = [8.0, 8.2, 8.9, 9.65];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={6.45} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={960} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={11.5} t={t} x={300} y={1260} w={260} fill={P.yellow} r={-2} size={34}>trên: thiên can</Lbl>
      <Lbl at={12.4} t={t} x={680} y={1260} w={260} fill={P.sky} r={2} size={34}>dưới: địa chi</Lbl>
    </g>
  </g>
);

// 4. NĂM SINH CHỈ LÀ MỘT TRỤ 13.26–17.75
const S4: React.FC<SP> = ({t}) => {
  const dim = A(t, 13.7, 0.5);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={13.3} note="Năm sinh chỉ là" text="Một trụ" size={150} />
      <g filter="url(#wob)">
        {PIL.map((n, i) => (
          <g key={n} opacity={i === 0 ? 1 : 1 - 0.6 * dim}>
            <Pop t={t} at={13.35} x={170 + i * 220} y={860} s={0.7}><Pillar name={n} fill={PF[i]} hi={i === 0 ? dim : 0} /></Pop>
          </g>
        ))}
        <Pop t={t} at={15.2} x={300} y={1340} s={0.75}><Person c={P.coral} mood="smile" /></Pop>
        <Pop t={t} at={15.4} x={700} y={1340} s={0.75}><Person c={P.blue} mood="smile" /></Pop>
        <Lbl at={17.2} t={t} x={500} y={1160} w={300} fill="#fff" r={-1} size={40}>cùng 1992</Lbl>
      </g>
    </g>
  );
};

// 5. CÙNG NHÂM THÂN, LỆCH THÁNG/NGÀY/GIỜ 17.75–21.32
const MN = ['tháng', 'ngày', 'giờ'];
const MA = [P.mint, P.coral, P.blue];
const MB = [P.peach, P.yellow, P.silver];
const MT = [20.1, 20.4, 20.9];
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={17.8} note="Cùng Nhâm Thân" text="Vẫn lệch" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={17.95} x={270} y={820} s={0.6}><GZ can="Nhâm" chi="Thân" year="1992 · A" /></Pop>
      <Pop t={t} at={18.2} x={730} y={820} s={0.6}><GZ can="Nhâm" chi="Thân" year="1992 · B" /></Pop>
      {MN.map((n, i) => <Pop key={`a${n}`} t={t} at={MT[i]} x={150 + i * 120} y={1110} s={0.85}><Mini n={n} c={MA[i]} /></Pop>)}
      {MN.map((n, i) => <Pop key={`b${n}`} t={t} at={MT[i] + 0.1} x={610 + i * 120} y={1110} s={0.85}><Mini n={n} c={MB[i]} /></Pop>)}
      <Lbl at={19.6} t={t} x={500} y={1290} w={320} fill={P.coral} r={-1} size={36}>có thể lệch</Lbl>
      <Note t={t} at={20.0} x={500} y={1390} size={26}>người A · người B: ví dụ minh hoạ</Note>
    </g>
  </g>
);

// 6. TRỤ NGÀY = NHẬT CHỦ = BẠN 21.32–27.74
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={21.38} note="Đáng chú ý nhất" text="Trụ ngày" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={22.4} x={300} y={980} s={1.05}><Pillar name="ngày" fill={P.coral} hi={A(t, 23.8, 0.4)} top={t > 25.4 ? 'bạn' : '?'} /></Pop>
      <Lbl at={24.0} t={t} x={660} y={760} w={260} fill={P.yellow} r={2} size={34}>thiên can</Lbl>
      <Lbl at={25.5} t={t} x={660} y={880} w={260} fill={P.mint} r={-2} size={38}>nhật chủ</Lbl>
      <Pop t={t} at={26.7} x={660} y={1270} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={27.0} t={t} x={300} y={1300} w={300} fill="#fff" r={1} size={32}>chính là bạn</Lbl>
    </g>
  </g>
);

// 7. NĂM SINH = BỐI CẢNH, BỐN TRỤ GHÉP LẠI → VIỆC/TIỀN/YÊU/ÁP LỰC 27.74–35.84
const S7: React.FC<SP> = ({t}) => {
  const join = A(t, 31.4, 0.8);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={27.8} note="Nói đơn giản hơn" text="Ghép lại" size={150} />
      <g filter="url(#wob)">
        <Lbl at={29.6} t={t} x={500} y={580} w={430} fill={P.silver} r={-1} size={34}>năm sinh = bối cảnh</Lbl>
        {PIL.map((n, i) => (
          <Pop key={n} t={t} at={30.6 + i * 0.12} x={500 + (i - 1.5) * (200 - 80 * join)} y={870} s={0.55}><Pillar name={n} fill={PF[i]} /></Pop>
        ))}
        <ArrowDown t={t} at={32.0} x={500} y={1010} />
        <Pop t={t} at={32.6} x={200} y={1240} s={0.45}><Briefcase /></Pop>
        <Pop t={t} at={34.0} x={400} y={1240}><Coin r={46} /></Pop>
        <Pop t={t} at={34.4} x={590} y={1240}><Heart /></Pop>
        <Pop t={t} at={35.2} x={780} y={1240} s={0.42}><Block txt="áp lực" /></Pop>
        <Note t={t} at={35.3} x={500} y={1370} size={28}>việc · tiền · yêu · áp lực</Note>
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN 35.84–40.00
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.84} strikeAt={36.8} gearAt={38.4} okAt={39.0} tint={P.yellow} />;

// 9. CTA 40.00–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={40.05} note="Cùng tuổi mà" text="Khác tính?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.9} x={300} y={880} s={0.8}><Person c={P.coral} mood="talk" /></Pop>
      <Pop t={t} at={41.2} x={700} y={880} s={0.8}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={41.8} x={500} y={800}><TT size={100} fill={P.red}>≠</TT></Pop>
      <CommentBar t={t} at={43.0} text="mình sinh năm …" y={1110} dur={1.0} />
      <Lbl at={44.4} t={t} x={500} y={1270} w={420} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={44.7} x={500} y={1330} />
      <Pop t={t} at={44.9} x={800} y={1270}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.83, C: S1}, {s: 3.83, e: 6.4, C: S2}, {s: 6.4, e: 13.26, C: S3}, {s: 13.26, e: 17.75, C: S4},
  {s: 17.75, e: 21.32, C: S5}, {s: 21.32, e: 27.74, C: S6}, {s: 27.74, e: 35.84, C: S7}, {s: 35.84, e: 40.0, C: S8},
  {s: 40.0, e: 45.81, C: S9},
];

export const BaziR34: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r34.mp3" phrases={cap.phrases} scenes={SCENES} />;
