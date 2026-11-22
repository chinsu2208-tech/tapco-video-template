import React from 'react';
import {P, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Calendar, Block, Bolt, Tag, Tick, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import {Sign} from './BaziR23';
import {ElRow} from './BaziR26';
import cap from './capR36.json';

// ====== Dòng 36 · Sinh 1999, làm nhiều việc mà chưa thấy hướng: nhật chủ thuộc hành nào · 9 cảnh ======
// 1999 = Kỷ Mão lấy từ STEM/BR qua GZ. Khung 4 trụ "?" và các việc A/B/C là minh hoạ, không phải lá số thật.
// Mốc: src/capR36.json (align_dp)
export const R36_TOTAL = totalFrames(50.928);

// 1. HOOK 0–4.83
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1999" text="Chưa thấy hướng" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={240} y={900} s={0.6}><GZ can="Kỷ" chi="Mão" year="1999" /></Pop>
      <Pop t={t} at={2.4} x={670} y={980} s={0.95}><Sign a="việc A" b="việc B" /></Pop>
      <Pop t={t} at={3.6} x={830} y={760}><TT size={110} fill={P.red}>?</TT></Pop>
      <Lbl at={2.9} t={t} x={500} y={1310} w={360} fill="#fff" r={-1} size={38}>làm nhiều việc</Lbl>
    </g>
  </g>
);

// 2. ĐIỀU ÍT NGƯỜI ĐỂ Ý: NHẬT CHỦ 4.83–10.07
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.88} note="Ít người để ý trong lá số" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={5.4} x={330} y={1000}><Pillar name="ngày" fill={P.coral} hi={A(t, 8.9, 0.4)} /></Pop>
      <Lbl at={6.8} t={t} x={690} y={850} w={270} fill="#fff" r={2} size={32}>ít người để ý</Lbl>
      <Pop t={t} at={8.9} x={690} y={1010}><Tag w={260} h={100} fill={P.yellow} r={-2}><TT size={44} y={16}>nhật chủ</TT></Tag></Pop>
      <Pop t={t} at={9.3} x={690} y={1150}><TT size={90} fill={P.red}>!</TT></Pop>
    </g>
  </g>
);

// 3. BỐN TRỤ 10.07–21.53
const PAT = [13.5, 16.3, 17.1, 17.5];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.12} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={960} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={19.9} t={t} x={300} y={1260} w={260} fill={P.yellow} r={-2} size={34}>trên: thiên can</Lbl>
      <Lbl at={20.9} t={t} x={680} y={1260} w={260} fill={P.sky} r={2} size={34}>dưới: địa chi</Lbl>
    </g>
  </g>
);

// 4. NHẬT CHỦ = CAN TRỤ NGÀY = BẠN 21.53–25.25
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={21.58} note="Nhật chủ" text="Tức chính bạn" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={21.7} x={300} y={980} s={1.05}><Pillar name="ngày" fill={P.coral} hi={A(t, 22.5, 0.4)} top={t > 23.6 ? 'bạn' : '?'} /></Pop>
      <Lbl at={22.5} t={t} x={660} y={800} w={300} fill="#fff" r={2} size={34}>can trụ ngày</Lbl>
      <Pop t={t} at={23.7} x={660} y={1200} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
    </g>
  </g>
);

// 5. MỖI NHẬT CHỦ THUỘC MỘT HÀNH → MÔI TRƯỜNG PHÁT HUY 25.25–31.18
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={25.3} note="Nói đơn giản hơn" text="Mỗi người một hành" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={27.5} x={500} y={740} s={0.6}><Person c={P.coral} mood="smile" /></Pop>
      <ArrowDown t={t} at={28.3} x={500} y={850} />
      <ElRow t={t} at={28.6} y={1030} r={70} />
      <Lbl at={30.3} t={t} x={500} y={1250} w={520} fill={P.mint} r={-1} size={36}>môi trường bạn phát huy</Lbl>
      <Note t={t} at={29.2} x={500} y={1360} size={26}>5 hành chỉ là bảng tham khảo, chưa phải lá số của bạn</Note>
    </g>
  </g>
);

// 6. THỬ NHIỀU VIỆC CHƯA CHẮC LẠC HƯỚNG 31.18–35.76
const S6: React.FC<SP> = ({t}) => {
  const strike = A(t, 33.95, 0.4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={31.23} note="Thử nhiều việc" text="Chưa chắc lạc" size={130} />
      <g filter="url(#wob)">
        {[0, 1, 2].map((i) => <Pop key={i} t={t} at={32.3 + i * 0.2} x={260 + i * 240} y={770} s={0.5} r={(i - 1) * 6}><Briefcase /></Pop>)}
        <Pop t={t} at={33.3} x={500} y={990} r={-2}><Tag w={360} h={110} fill="#fff"><TT size={50} y={18}>lạc hướng</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M330 1010 L${330 + 340 * strike} 970`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Lbl at={34.9} t={t} x={470} y={1220} w={560} fill={P.yellow} r={1} size={36}>chưa gặp đúng cách làm</Lbl>
        <Pop t={t} at={35.5} x={800} y={1220}><Tick /></Pop>
      </g>
    </g>
  );
};

// 7. VIỆC/TIỀN/ÁP LỰC + LƯU NIÊN 2027 35.76–42.12
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={35.81} note="Sang 2027" text="Lưu niên mới" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={35.9} x={230} y={720} s={0.42}><Briefcase /></Pop>
      <Pop t={t} at={36.6} x={500} y={720}><Coin r={46} /></Pop>
      <Pop t={t} at={37.2} x={770} y={720} s={0.42}><Block txt="áp lực" /></Pop>
      <Note t={t} at={37.4} x={500} y={840} size={28}>đều ảnh hưởng theo nhật chủ</Note>
      <Pop t={t} at={38.6} x={380} y={1080} s={0.9}><Calendar label="2027" /></Pop>
      <Pop t={t} at={41.4} x={650} y={1060} s={0.5}><Bolt /></Pop>
      <Lbl at={41.5} t={t} x={500} y={1300} w={380} fill={P.yellow} r={-1} size={36}>tác động thêm</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 42.12–46.22
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={42.12} strikeAt={43.5} gearAt={44.4} okAt={44.9} tint={P.yellow} />;

// 9. CTA 46.22–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={46.28} note="Bạn sinh năm 1999" text="Để lại nhé" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={46.9} x={500} y={820} s={0.55}><GZ can="Kỷ" chi="Mão" year="1999" /></Pop>
      <CommentBar t={t} at={48.1} text="1999 · nhật chủ của mình là …" y={1130} dur={1.6} />
      <Lbl at={50.0} t={t} x={500} y={1290} w={420} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={50.2} x={500} y={1350} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.83, C: S1}, {s: 4.83, e: 10.07, C: S2}, {s: 10.07, e: 21.53, C: S3}, {s: 21.53, e: 25.25, C: S4},
  {s: 25.25, e: 31.18, C: S5}, {s: 31.18, e: 35.76, C: S6}, {s: 35.76, e: 42.12, C: S7}, {s: 42.12, e: 46.22, C: S8},
  {s: 46.22, e: 51.33, C: S9},
];

export const BaziR36: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r36.mp3" phrases={cap.phrases} scenes={SCENES} />;
