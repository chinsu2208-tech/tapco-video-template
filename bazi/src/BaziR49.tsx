import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Clock, Tag, Briefcase, Block, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Battery} from './BaziR17';
import cap from './capR49.json';

// ====== Dòng 49 · Sinh năm 1990, việc khó nhất luôn rơi vào tay · gánh quá lâu · 9 cảnh ======
// Can chi 1990 Canh Ngọ lấy từ bảng STEM/BR. Không có lá số thật. Mốc: src/capR49.json (align_dp)
// tờ lá số khung trống (minh hoạ)
export const LaSo: React.FC = () => (
  <g>
    <rect x={-150} y={-190} width={300} height={380} rx={20} fill="#fff" {...L} />
    <text y={-130} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={38} fill={P.navy}>lá số</text>
    {[0, 1, 2, 3].map((i) => <g key={i}><rect x={-126 + i * 64} y={-90} width={52} height={120} rx={8} fill={[P.yellow, P.mint, P.coral, P.blue][i]} {...L} strokeWidth={4} /><rect x={-126 + i * 64} y={44} width={52} height={120} rx={8} fill={P.cream} {...L} strokeWidth={4} /></g>)}
  </g>
);

export const R49_TOTAL = totalFrames(45.24);

// 1. HOOK 0–4.85
const S1: React.FC<SP> = ({t}) => {
  const drop = A(t, 2.6, 0.7);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 1990" text="Việc khó nhất" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={250} y={820} s={0.6} r={-3}><GZ can="Canh" chi="Ngọ" year="1990" /></Pop>
        <Pop t={t} at={1.8} x={640} y={1300} s={1.4}><Person c={P.blue} mood="flat" /></Pop>
        {drop > 0.01 && <g transform={`translate(640 ${600 + 330 * drop})`}><Briefcase /></g>}
        <Lbl at={4.0} t={t} x={300} y={1200} w={300} fill={P.yellow} r={-2} size={34}>rơi vào tay bạn</Lbl>
        <Note t={t} at={1.0} x={250} y={1010} size={26}>năm bát tự tính từ Lập xuân</Note>
      </g>
    </g>
  );
};

// 2. CÁCH NHẬT CHỦ GÁNH VÁC 4.85–10.25
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.9} note="Ít người để ý" text="Cách gánh vác" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={7.6} x={300} y={900} r={-3}><LaSo /></Pop>
      <Lbl at={8.2} t={t} x={300} y={1180} w={260} fill="#fff" r={2} size={34}>ít ai để ý</Lbl>
      <Pop t={t} at={9.0} x={680} y={900} s={0.85}><Block w={300} h={150} txt="gánh" /></Pop>
      <Lbl at={9.4} t={t} x={680} y={1060} w={280} fill={P.yellow} r={-2} size={34}>nhật chủ</Lbl>
    </g>
  </g>
);

// 3. NHẬT CHỦ = CHÍNH BẠN 10.25–14.01
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.3} note="Nhật chủ là" text="Chính bạn" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={10.6} x={300} y={880}><g><circle r={110} fill="#fff" {...L} /><TT size={38} y={14}>nhật chủ</TT></g></Pop>
      <Lbl at={11.4} t={t} x={300} y={1080} w={400} fill={P.blue} r={-1} size={34}>thiên can trụ ngày</Lbl>
      <Pop t={t} at={13.0} x={680} y={1120} s={1.4}><Person c={P.blue} mood="smile" /></Pop>
      <Lbl at={13.4} t={t} x={680} y={1230} w={260} fill={P.yellow} r={2} size={36}>là bạn</Lbl>
    </g>
  </g>
);

// 4. VAI NGƯỜI CHỊU LỰC · VIỆC NẶNG CHỒNG LÊN 14.01–20.9
const LOAD: [string, number][] = [['việc gấp', 16.8], ['việc khó', 17.6], ['việc nặng', 18.2]];
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={14.06} note="Quen đứng vai" text="Người chịu lực" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={15.4} x={330} y={1420} s={1.3}><Person c={P.blue} mood="flat" /></Pop>
      {LOAD.map(([s, at], i) => (
        <Pop key={s} t={t} at={at} x={330 + (i % 2 ? 14 : -14)} y={1070 - i * 110}><Tag w={260} h={100} fill={[P.coral, P.silver, P.peach][i]}><TT size={36} y={12}>{s}</TT></Tag></Pop>
      ))}
      <Lbl at={19.8} t={t} x={690} y={900} w={300} fill="#fff" r={3} size={34}>chuyện</Lbl>
      <Lbl at={20.2} t={t} x={690} y={1010} w={300} fill={P.mint} r={-2} size={34}>đương nhiên</Lbl>
    </g>
  </g>
);

// 5. CHỊU ĐỰNG LÂU · QUÊN NÓI RA 20.9–25.01
const S5: React.FC<SP> = ({t}) => {
  const cross = A(t, 24.2, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={20.95} note="Chịu đựng lâu" text="Quên than" size={145} />
      <g filter="url(#wob)">
        <Pop t={t} at={21.4} x={300} y={1260} s={1.5}><Person c={P.blue} mood="flat" /></Pop>
        <Pop t={t} at={22.4} x={640} y={780}><g><path d="M-170 -80 H170 V60 H-40 L-90 120 L-80 60 H-170Z" fill="#fff" {...L} /><TT size={40} y={0}>mệt quá…</TT></g></Pop>
        {cross > 0.01 && <path d={`M480 720 L${480 + 320 * cross} 800`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Lbl at={24.0} t={t} x={640} y={1050} w={330} fill={P.yellow} r={2} size={36}>không nói ra</Lbl>
      </g>
    </g>
  );
};

// 6. NGOÀI 35 · DỒN VỀ · CUỐI NĂM MỎI 25.01–31.87
const DON: [string, string, number, number][] = [['công việc', P.mint, 27.0, 200], ['tiền bạc', P.yellow, 27.9, 480], ['gia đình', P.peach, 28.9, 760]];
const S6: React.FC<SP> = ({t}) => {
  const gather = A(t, 29.3, 0.8);
  const k = 1 - 0.85 * A(t, 30.0, 1.4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={25.06} note="Ngoài ba mươi lăm" text="Cùng dồn về" size={130} />
      <g filter="url(#wob)">
        {DON.map(([s, c, at, x], i) => (
          <Pop key={s} t={t} at={at} x={x + (480 - x) * gather * 0.2} y={720 + gather * 90 + (i % 2) * 70 * gather} r={(i - 1) * 4}><Tag w={240} h={96} fill={c}><TT size={36} y={12}>{s}</TT></Tag></Pop>
        ))}
        <Pop t={t} at={29.6} x={480} y={1130} s={1.2}><Battery k={k} /></Pop>
        <Lbl at={30.6} t={t} x={480} y={1290} w={260} fill="#fff" r={-1} size={34}>cuối năm</Lbl>
        <Lbl at={31.2} t={t} x={480} y={1390} w={300} fill={P.coral} r={2} size={36}>mỏi thật</Lbl>
      </g>
    </g>
  );
};

// 7. KHÔNG YẾU · GÁNH QUÁ LÂU 31.87–35.66
const S7: React.FC<SP> = ({t}) => {
  const strike = A(t, 33.4, 0.4);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={31.92} note="Nói đơn giản hơn" text="Gánh quá lâu" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={32.9} x={340} y={760}><Tag w={300} h={110} fill="#fff"><TT size={46} y={16}>bạn yếu</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M200 780 L${200 + 280 * strike} 740`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={33.6} x={600} y={760}><Cross /></Pop>
        <Pop t={t} at={34.4} x={320} y={1120} s={0.8}><Clock t={t} /></Pop>
        <Lbl at={34.8} t={t} x={640} y={1120} w={330} fill={P.yellow} r={2} size={36}>gánh quá lâu</Lbl>
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN 35.66–40.03
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.66} strikeAt={36.8} gearAt={38.3} okAt={39.0} tint={P.peach} />;

// 9. CTA 40.03–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={40.08} note="Sinh năm 1990 nào" text="Nhật chủ gì?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.5} x={270} y={860} s={0.62} r={-3}><GZ can="Canh" chi="Ngọ" year="1990" /></Pop>
      <Pop t={t} at={41.4} x={640} y={960} s={1.3}><Person c={P.blue} mood="talk" /></Pop>
      <CommentBar t={t} at={42.4} text="nhật chủ của mình là …" y={1110} dur={1.3} />
      <Lbl at={44.4} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={44.6} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.85, C: S1}, {s: 4.85, e: 10.25, C: S2}, {s: 10.25, e: 14.01, C: S3}, {s: 14.01, e: 20.9, C: S4},
  {s: 20.9, e: 25.01, C: S5}, {s: 25.01, e: 31.87, C: S6}, {s: 31.87, e: 35.66, C: S7}, {s: 35.66, e: 40.03, C: S8},
  {s: 40.03, e: 45.64, C: S9},
];

export const BaziR49: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r49.mp3" phrases={cap.phrases} scenes={SCENES} />;
