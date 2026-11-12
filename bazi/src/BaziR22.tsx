import React from 'react';
import {P, H, L, CJK, Page, A, Pop, TT, Lbl, Head, Block, Person, Gear, Calendar, Cross, Tick, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF, Drop} from './BaziR17';
import cap from './capR22.json';

// ====== Dòng 22 · Sinh năm 1997 (Đinh Sửu): yêu thật lòng mà không dám chắc → nhật chủ + Tài, Quan Sát · 9 cảnh ======
// Can chi lấy từ bảng STEM/BR: Đinh (Hỏa) Sửu (Thổ). "Hành Thủy" trong giọng đọc là nạp âm Giản Hạ Thủy của năm Đinh Sửu → ghi rõ trên hình.
// Khung 4 trụ là khung trống minh hoạ. Mốc: src/capR22.json (căn tay theo khoảng lặng)
export const R22_TOTAL = totalFrames(47.45);

// hoa bứt cánh "yêu / không chắc"
const Daisy: React.FC<{k: number}> = ({k}) => (
  <g>
    <path d="M0 40 Q-10 140 10 220" fill="none" stroke="#5fb88a" strokeWidth={10} strokeLinecap="round" />
    {Array.from({length: 8}).map((_, i) => (
      <ellipse key={i} transform={`rotate(${i * 45}) translate(0 -62)`} rx={24} ry={44} fill="#fff" {...L} strokeWidth={5} opacity={i < 8 - Math.floor(k * 5) ? 1 : 0} />
    ))}
    <circle r={34} fill={P.yellow} {...L} strokeWidth={5} />
  </g>
);
// kính lúp
const Lens: React.FC = () => (
  <g>
    <path d="M70 70 L170 170" stroke={P.navy} strokeWidth={26} strokeLinecap="round" />
    <path d="M70 70 L170 170" stroke={P.orange} strokeWidth={14} strokeLinecap="round" />
    <circle r={110} fill="#fff" fillOpacity={0.55} {...L} strokeWidth={10} />
  </g>
);

// 1. HOOK 0–3.7
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1997 ơi" text="Yêu mà chưa chắc" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={300} y={1250} s={1.05}><Person c={P.coral} mood="flat" /></Pop>
      <Pop t={t} at={1.5} x={680} y={900} s={1.1}><Daisy k={A(t, 2.0, 1.6)} /></Pop>
      <Pop t={t} at={1.8} x={300} y={880} s={1.2}><Heart /></Pop>
      <Pop t={t} at={2.6} x={400} y={800}><TT size={90}>?</TT></Pop>
      <Note t={t} at={1.2} x={500} y={1420} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. NHẬT CHỦ 3.7–8.6
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={3.75} note="Thứ ít người để ý" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={4.2} x={500} y={950}>
        <g><rect x={-300} y={-200} width={600} height={400} rx={20} fill="#fff" {...L} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={-250 + i * 130} y={-150} width={110} height={300} rx={12} fill={PF[i]} opacity={0.5} stroke={P.navy} strokeWidth={4} />)}
          <circle cx={10} cy={-80} r={10} fill={P.red} /></g>
      </Pop>
      <Pop t={t} at={6.9} x={520} y={870} s={0.9}><Lens /></Pop>
      <Lbl at={5.0} t={t} x={500} y={1250} w={300} fill="#fff" r={-2} size={34}>trong lá số</Lbl>
    </g>
  </g>
);

// 3. CAN TRỤ NGÀY = BẠN → đứng trước một mối quan hệ 8.6–15.95
const S3: React.FC<SP> = ({t}) => {
  const rel = A(t, 12.4, 0.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={8.65} note="Nhật chủ là" text="Can trụ ngày" size={130} />
      <g filter="url(#wob)">
        <g opacity={1 - rel}>
          {PIL.map((n, i) => <Pop key={n} t={t} at={8.8 + i * 0.25} x={200 + i * 200} y={930}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 9.6) : 0} top={i === 2 && t > 10.0 ? '★' : '?'} /></Pop>)}
          <Lbl at={10.9} t={t} x={500} y={1260} w={440} fill={P.yellow} r={-1} size={36}>★ = chính bạn</Lbl>
        </g>
        <g opacity={rel}>
          <Pop t={t} at={12.4} x={290} y={1250} s={1.0}><Person c={P.coral} mood="flat" /></Pop>
          <Pop t={t} at={12.7} x={710} y={1250} s={1.0}><Person c={P.blue} mood="smile" /></Pop>
          <Pop t={t} at={13.4} x={500} y={900} s={1.3}><Heart /></Pop>
          <Lbl at={13.9} t={t} x={500} y={700} w={420} fill="#fff" r={2} size={34}>trước một mối quan hệ</Lbl>
        </g>
      </g>
    </g>
  );
};

// 4. ĐINH SỬU 15.95–18.95
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={16.0} note="Năm 1997 là" text="Đinh Sửu" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={16.4} x={290} y={950} s={0.95} r={-3}><GZ can="Đinh" chi="Sửu" year="1997" /></Pop>
      <Pop t={t} at={17.6} x={710} y={880} s={1.1}><Drop /></Pop>
      <Lbl at={17.7} t={t} x={700} y={1080} w={380} fill={P.blue} r={2} size={32}>nạp âm: Giản Hạ Thủy</Lbl>
      <Note t={t} at={17.9} x={700} y={1170} size={26}>澗下水 · nước khe suối</Note>
      <Note t={t} at={18.0} x={500} y={1360} size={26}>can Đinh · Hỏa, chi Sửu · Thổ; "hành Thủy" là theo nạp âm năm</Note>
    </g>
  </g>
);

// 5. CHỌN NGƯỜI: nhật chủ + Tài + Quan Sát 18.95–26.3
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={19.0} note="Cách cân nhắc khi" text="Chọn người" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={19.6} x={500} y={1260} s={0.95}><Person c={P.coral} mood="flat" /></Pop>
      <Lbl at={21.8} t={t} x={500} y={1360} w={260} fill={P.yellow} size={32}>nhật chủ</Lbl>
      <TermCard t={t} at={23.6} x={250} y={830} vi="Tài" han="財" fill={P.yellow} r={-3} w={280} />
      <TermCard t={t} at={24.3} x={750} y={830} vi="Quan Sát" han="官殺" fill={P.silver} r={3} w={300} />
      {[0, 1].map((i) => <path key={i} d={i ? 'M700 1000 Q640 1060 580 1080' : 'M300 1000 Q360 1060 420 1080'} fill="none" stroke={P.coral} strokeWidth={9} strokeLinecap="round" opacity={A(t, 24.8 + i * 0.2)} />)}
      <Note t={t} at={24.0} x={500} y={1460} size={26}>thuật ngữ thập thần · không phải lá số của ai</Note>
    </g>
  </g>
);

// 6. DO DỰ ≠ THIẾU TÌNH CẢM 26.3–32.8
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={26.35} note="Nói đơn giản hơn" text="Do dự ≠ hết yêu" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={27.6} x={300} y={850} s={1.6}><Heart /></Pop>
      <Lbl at={28.4} t={t} x={300} y={1020} w={330} fill="#fff" r={-2} size={30}>thiếu tình cảm?</Lbl>
      <Pop t={t} at={28.9} x={470} y={780}><Cross /></Pop>
      <Pop t={t} at={30.0} x={700} y={900}><Gear r={110} c={P.mint} rot={(t - 30) * 40} /></Pop>
      <Pop t={t} at={30.4} x={700} y={900} s={0.6}><Tick /></Pop>
      <Lbl at={30.8} t={t} x={560} y={1240} w={560} fill={P.yellow} r={1} size={34}>cách vận hành cần hiểu rõ</Lbl>
    </g>
  </g>
);

// 7. CUỐI NĂM: áp lực công việc chồng lên chuyện chọn người 32.8–38.15
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={32.85} note="Cuối năm nhìn lại" text="Chồng lên nhau" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={33.0} x={760} y={720} s={0.9}><Calendar label="tháng 12" /></Pop>
      <Pop t={t} at={34.0} x={420} y={1310} s={1.0}><Person c={P.coral} mood={t > 34.8 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={35.2} x={420} y={1050} s={0.7}><Block txt="công việc" w={460} h={150} /></Pop>
      <Pop t={t} at={36.3} x={430} y={900} s={1.0}><Heart /></Pop>
      <Lbl at={36.6} t={t} x={720} y={1100} w={320} fill="#fff" r={3} size={30}>chọn đúng người</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 38.15–42.8
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={38.15} strikeAt={39.1} gearAt={40.4} okAt={40.9} tint={P.mint} />;

// 9. CTA 42.8–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={42.85} note="Bạn sinh năm 1997?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={43.1} x={300} y={820} s={0.7} r={-3}><GZ can="Đinh" chi="Sửu" year="1997" /></Pop>
      <Pop t={t} at={43.4} x={700} y={800} s={1.3}><Heart /></Pop>
      <CommentBar t={t} at={44.3} text="97 · nhật chủ của mình là …" y={1110} dur={1.5} />
      <Lbl at={45.6} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={45.9} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.7, C: S1}, {s: 3.7, e: 8.6, C: S2}, {s: 8.6, e: 15.95, C: S3}, {s: 15.95, e: 18.95, C: S4},
  {s: 18.95, e: 26.3, C: S5}, {s: 26.3, e: 32.8, C: S6}, {s: 32.8, e: 38.15, C: S7}, {s: 38.15, e: 42.8, C: S8}, {s: 42.8, e: 47.85, C: S9},
];

export const BaziR22: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r22.mp3" phrases={cap.phrases} scenes={SCENES} />;
