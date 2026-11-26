import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Tag, Calendar, Clock, Coin, Briefcase, Block, Bolt, Cross, CommentBar, ArrowDown, NotDestiny, TermCard, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Scale} from './BaziR23';
import cap from './capR52.json';

// ====== Dòng 52 · Sinh năm 1995, định từ chối mà lại nói đồng ý · nhóm Quan Sát · 9 cảnh ======
// Can chi 1995 Ất Hợi lấy từ bảng STEM/BR. Không có lá số thật; cân Quan Sát/nhật chủ là minh hoạ. Mốc: src/capR52.json (align_dp)
export const R52_TOTAL = totalFrames(49.97);

const Bubble: React.FC<{txt: string; w?: number; fill?: string}> = ({txt, w = 340, fill = '#fff'}) => (
  <g><path d={`M${-w / 2} -70 H${w / 2} V50 H-30 L-80 110 L-70 50 H${-w / 2}Z`} fill={fill} {...L} /><TT size={40} y={0}>{txt}</TT></g>
);

// 1. HOOK 0–5.22 · định từ chối, miệng nói đồng ý
const S1: React.FC<SP> = ({t}) => {
  const strike = A(t, 4.2, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 1995" text="Lại nói đồng ý" size={118} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={250} y={860} s={0.6} r={-3}><GZ can="Ất" chi="Hợi" year="1995" /></Pop>
        <Note t={t} at={1.0} x={250} y={1050} size={26}>năm bát tự tính từ Lập xuân</Note>
        <Pop t={t} at={2.8} x={660} y={1280} s={1.3}><Person c={P.blue} mood="talk" /></Pop>
        <Pop t={t} at={3.0} x={660} y={760}><Tag w={280} h={96} fill={P.silver}><TT size={40} y={14}>từ chối</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M530 780 L${530 + 260 * strike} 740`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={4.4} x={680} y={980}><Bubble txt="đồng ý!" w={280} fill={P.yellow} /></Pop>
      </g>
    </g>
  );
};

// 2. KHÔNG PHẢI CẢ NỂ · ÁP LỰC TỪ BÊN NGOÀI 5.22–10.91
const S2: React.FC<SP> = ({t}) => {
  const ar = A(t, 9.4, 0.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={5.27} note="Không phải cả nể" text="Áp lực ngoài" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={6.2} x={300} y={760}><Tag w={260} h={96} fill="#fff"><TT size={40} y={14}>cả nể</TT></Tag></Pop>
        <Pop t={t} at={7.0} x={510} y={750}><Cross /></Pop>
        <Pop t={t} at={8.6} x={480} y={1150} s={1.2}><Person c={P.blue} mood="flat" /></Pop>
        {ar > 0.01 && [[-1, 0], [1, 0]].map(([d], i) => (
          <path key={i} d={`M${480 + d * 380} 1050 H${480 + d * (380 - 180 * ar)}`} stroke={P.coral} strokeWidth={14} strokeLinecap="round" />
        ))}
        <Lbl at={9.8} t={t} x={480} y={1380} w={300} fill={P.yellow} r={-1} size={34}>từ bên ngoài</Lbl>
      </g>
    </g>
  );
};

// 3. MƯỜI THẦN · NHÓM QUAN SÁT · YÊU CẦU & KỲ VỌNG 10.91–16.61
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.96} note="Trong mười thần" text="Nhóm Quan Sát" size={118} />
    <g filter="url(#wob)">
      <TermCard t={t} at={12.4} x={290} y={950} vi="Quan Sát" han="官殺" fill={P.silver} r={-3} w={330} />
      <Pop t={t} at={14.6} x={690} y={820} r={3}><Tag w={250} h={96} fill={P.yellow}><TT size={38} y={13}>yêu cầu</TT></Tag></Pop>
      <Pop t={t} at={15.5} x={690} y={960} r={-2}><Tag w={250} h={96} fill={P.peach}><TT size={38} y={13}>kỳ vọng</TT></Tag></Pop>
      <Pop t={t} at={16.0} x={690} y={1230} s={1.1}><Person c={P.blue} mood="flat" /></Pop>
    </g>
  </g>
);

// 4. NHÓM MẠNH · NHẬT CHỦ KHÔNG ĐỦ NỀN · NHẬN VIỆC CHO YÊN 16.61–23.05
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={16.66} note="Nhật chủ không đủ nền" text="Nhận cho yên" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={17.0} x={480} y={880} s={0.85}><Scale k={A(t, 17.6, 1.0)} /></Pop>
      <Pop t={t} at={17.4} x={300} y={1080} s={0.85}><Tag w={230} h={84} fill={P.silver}><TT size={34} y={12}>Quan Sát</TT></Tag></Pop>
      <Pop t={t} at={18.4} x={660} y={930} s={0.85}><Tag w={230} h={84} fill={P.blue}><TT size={34} y={12}>nhật chủ</TT></Tag></Pop>
      <Note t={t} at={18.0} x={480} y={1130} size={26}>minh hoạ · không phải lá số thật</Note>
      <Pop t={t} at={20.6} x={330} y={1320} s={0.7}><Briefcase /></Pop>
      <Lbl at={21.6} t={t} x={640} y={1320} w={320} fill={P.mint} r={2} size={34}>cho yên chuyện</Lbl>
    </g>
  </g>
);

// 5. MIỆNG NHANH HƠN ĐẦU 23.05–25.64
const S5: React.FC<SP> = ({t}) => {
  const run = A(t, 24.2, 1.0);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={23.1} note="Nói đơn giản hơn" text="Miệng nhanh" size={135} />
      <g filter="url(#wob)">
        <Pop t={t} at={24.2} x={200 + 520 * run} y={880}><Tag w={220} h={96} fill={P.coral}><TT size={40} y={14}>miệng</TT></Tag></Pop>
        <Pop t={t} at={24.3} x={200 + 260 * run} y={1060}><Tag w={200} h={96} fill={P.silver}><TT size={40} y={14}>đầu</TT></Tag></Pop>
        <Pop t={t} at={24.9} x={760} y={1150} s={0.7}><Bolt /></Pop>
        <Lbl at={25.0} t={t} x={400} y={1300} w={360} fill={P.yellow} r={-2} size={36}>nhanh hơn đầu</Lbl>
      </g>
    </g>
  );
};

// 6. HỨA NÓI KHÔNG → "OK ĐỂ EM LÀM" · THÓI QUEN CHẠY TRƯỚC 25.64–33.45
const S6: React.FC<SP> = ({t}) => {
  const strike = A(t, 29.4, 0.4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={25.7} note="Năm nào cũng hứa" text="Sẽ nói không" size={128} />
      <g filter="url(#wob)">
        <Pop t={t} at={26.0} x={250} y={820} r={-4}><Calendar label="mỗi năm" /></Pop>
        <Pop t={t} at={27.6} x={650} y={760}><Bubble txt="không!" w={260} /></Pop>
        {strike > 0.01 && <path d={`M540 770 L${540 + 220 * strike} 730`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={29.8} x={600} y={1050}><Bubble txt="ok để em làm" w={380} fill={P.yellow} /></Pop>
        <Pop t={t} at={29.2} x={330} y={1300} s={1.1}><Person c={P.blue} mood="talk" /></Pop>
        <Lbl at={32.0} t={t} x={650} y={1300} w={330} fill={P.mint} r={2} size={34}>thói quen chạy trước</Lbl>
      </g>
    </g>
  );
};

// 7. ĂN VÀO THỜI GIAN · TIỀN · TÌNH CẢM · DÀNH CHỖ CHO NGƯỜI KHÁC 33.45–39.78
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={33.5} note="Âm thầm ăn vào" text="Chỗ của mình" size={128} />
    <g filter="url(#wob)">
      <Pop t={t} at={34.5} x={200} y={800} s={0.8}><Clock t={t} /></Pop>
      <Pop t={t} at={35.6} x={480} y={800}><Coin r={70} /></Pop>
      <Pop t={t} at={36.6} x={760} y={800} s={1.5}><Heart /></Pop>
      <Pop t={t} at={37.6} x={340} y={1220} s={1.2}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={38.0} x={640} y={1260} s={0.95}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={38.4} t={t} x={480} y={1440} w={380} fill={P.yellow} r={-1} size={34}>người khác trước</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 39.78–43.82
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={39.78} strikeAt={40.9} gearAt={42.0} okAt={42.6} tint={P.peach} />;

// 9. CTA 43.82–hết · giơ tay
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={43.9} note="Sinh năm 1995 nào" text="Giơ tay nhé" size={135} />
    <g filter="url(#wob)">
      <Pop t={t} at={44.2} x={270} y={860} s={0.62} r={-3}><GZ can="Ất" chi="Hợi" year="1995" /></Pop>
      <Pop t={t} at={45.2} x={640} y={960} s={1.3}><Person c={P.blue} mood="smile" /></Pop>
      <CommentBar t={t} at={46.8} text="1995 · giơ tay nè" y={1110} dur={1.2} />
      <Lbl at={48.6} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={48.8} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.22, C: S1}, {s: 5.22, e: 10.91, C: S2}, {s: 10.91, e: 16.61, C: S3}, {s: 16.61, e: 23.05, C: S4},
  {s: 23.05, e: 25.64, C: S5}, {s: 25.64, e: 33.45, C: S6}, {s: 33.45, e: 39.78, C: S7}, {s: 39.78, e: 43.82, C: S8},
  {s: 43.82, e: 50.37, C: S9},
];

export const BaziR52: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r52.mp3" phrases={cap.phrases} scenes={SCENES} />;
