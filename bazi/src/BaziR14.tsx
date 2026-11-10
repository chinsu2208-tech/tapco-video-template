import React from 'react';
import {P, H, HAND, CJK, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Briefcase, Person, Calendar, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames, Star} from './BaziKit';
import {EC, STEM, BR} from './BaziHand';
import cap from './capR14.json';

// ====== Dòng 14 · Sinh năm 1988 (Mậu Thìn), cuối một đại vận, nhìn lại mới thấy mình gánh nhiều · 6 cảnh ======
// Can chi lấy từ bảng STEM/BR. Đại vận/thập thần chỉ là hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR14.json
export const R14_TOTAL = totalFrames(56.11);

/* ---- dùng chung cho R14–R16 ---- */
// Thẻ can chi: ô thiên can (trên) + ô địa chi (dưới), màu theo hành cố định
export const GZ: React.FC<{can: string; chi: string; year?: string; s?: number}> = ({can, chi, year, s = 1}) => {
  const [cz, ce] = STEM[can];
  const [bz, be] = BR[chi];
  return (
    <g transform={`scale(${s})`}>
      {year && <text y={-200} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={48} fill={P.navy}>{year}</text>}
      <rect x={-105} y={-170} width={210} height={170} rx={18} fill={EC[ce]} {...L} />
      <text y={-62} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={88} fill={P.navy}>{cz}</text>
      <text y={-18} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={30} fill={P.navy}>{can} · {ce}</text>
      <rect x={-105} y={8} width={210} height={170} rx={18} fill={EC[be]} {...L} />
      <text y={116} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={88} fill={P.navy}>{bz}</text>
      <text y={160} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={30} fill={P.navy}>{chi} · {be}</text>
    </g>
  );
};
export const Note: React.FC<{t: number; at: number; x: number; y: number; children: React.ReactNode; size?: number}> = ({t, at, x, y, children, size = 32}) => (
  <text x={x} y={y} textAnchor="middle" fontFamily={HAND} fontSize={size} fill={P.navy} opacity={A(t, at) * 0.8}>{children}</text>
);
export const House: React.FC<{c?: string}> = ({c = P.peach}) => (
  <g>
    <rect x={-90} y={-30} width={180} height={130} rx={8} fill={c} {...L} />
    <path d="M-115 -20 L0 -115 L115 -20Z" fill={P.coral} {...L} />
    <rect x={-25} y={30} width={50} height={70} rx={6} fill={P.yellow} {...L} strokeWidth={5} />
  </g>
);
export const Heart: React.FC<{c?: string}> = ({c = P.red}) => <path d="M0 40 C-80 -14 -54 -80 0 -40 C54 -80 80 -14 0 40Z" fill={c} {...L} strokeWidth={5} />;
// đòn gánh hai đầu thúng; k = độ đầy thúng 0..1
const Pole: React.FC<{k: number}> = ({k}) => (
  <g>
    <path d="M-260 0 Q0 -30 260 0" stroke={P.orange} strokeWidth={14} fill="none" strokeLinecap="round" />
    {[-230, 230].map((x) => (
      <g key={x} transform={`translate(${x} 0)`}>
        <path d="M-50 100 L0 0 L50 100" stroke={P.navy} strokeWidth={4} fill="none" />
        {[0, 1, 2].map((i) => <rect key={i} x={-46 + i * 30} y={90 - 60 * k - i * 14} width={34} height={34} rx={6} fill={[P.yellow, P.silver, P.mint][i]} {...L} strokeWidth={4} opacity={k > 0.05 ? 1 : 0} />)}
        <path d="M-70 100 H70 L52 170 H-52Z" fill={P.yellow} {...L} />
      </g>
    ))}
  </g>
);

// 1. HOOK 0–10.03: 1988 Mậu Thìn, nhìn về 10 năm, gánh nhiều hơn mình tưởng
const S1: React.FC<SP> = ({t}) => {
  const load = A(t, 7.4, 1.6);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={0.05} note="Sinh năm 1988 ơi" text="Gánh nhiều" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.6} x={720} y={760} s={0.85} r={3}><GZ can="Mậu" chi="Thìn" year="1988" /></Pop>
        <Pop t={t} at={4.6} x={270} y={720} r={-4}><Calendar label="10 năm" /></Pop>
        <Lbl at={5.4} t={t} x={270} y={880} w={300} fill="#fff" r={-2} size={34}>nhìn lại</Lbl>
        <g opacity={A(t, 2.9)} transform={`translate(500 ${1150 + 6 * load})`}>
          <g transform="translate(0 -130)"><Pole k={load} /></g>
          <g transform="translate(0 150)"><Person c={P.coral} mood={t > 8.2 ? 'sad' : 'flat'} /></g>
        </g>
        <Lbl at={8.4} t={t} x={500} y={1450} w={560} fill={P.yellow} r={-1} size={38}>nhiều hơn mình tưởng</Lbl>
        <Note t={t} at={1.2} x={690} y={950} size={26}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
      </g>
    </g>
  );
};

// 2. ĐẠI VẬN 10.03–23.07: con đường chia đoạn 10 năm, mỗi đoạn một màu; gần cuối đoạn → nhìn lại
const SEG = [P.mint, P.coral, P.yellow, P.silver];
const S2: React.FC<SP> = ({t}) => {
  const walk = A(t, 18.4, 2.2);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={10.1} note="Trong bát tự, đó là" text="Đại vận" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={11.9} x={720} y={560} r={3}><Tag w={300} h={110} fill="#fff"><TT size={64} y={22} font={CJK}>大運</TT></Tag></Pop>
        {SEG.map((c, i) => (
          <g key={i} opacity={A(t, 15.6 + i * 0.45)}>
            <rect x={120 + i * 195} y={900} width={195} height={90} fill={c} {...L} />
            <text x={217 + i * 195} y={960} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy}>10 năm</text>
          </g>
        ))}
        <g opacity={A(t, 13.8)}>
          <path d="M120 870 Q217 820 315 870" stroke={P.red} strokeWidth={7} fill="none" strokeLinecap="round" />
          <text x={217} y={810} textAnchor="middle" fontFamily={HAND} fontSize={38} fill={P.navy}>1 chu kỳ</text>
        </g>
        <Lbl at={16.6} t={t} x={600} y={790} w={420} fill={P.yellow} r={2} size={34}>mỗi chu kỳ một năng lượng</Lbl>
        <g transform={`translate(${230 + walk * 230} 1240)`} opacity={A(t, 18.5)}>
          <Person c={P.blue} mood="flat" />
        </g>
        <Pop t={t} at={19.6} x={480} y={1040} s={0.7}><Star x={0} y={0} s={1.6} /></Pop>
        <Lbl at={19.4} t={t} x={720} y={1110} w={300} fill={P.peach} r={-2} size={34}>gần cuối đoạn</Lbl>
        <g opacity={A(t, 21.0)}>
          <path d="M380 1120 Q260 1080 200 1130" stroke={P.navy} strokeWidth={7} fill="none" strokeLinecap="round" />
          <path d="M210 1105 L196 1132 L226 1140" stroke={P.navy} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <Lbl at={21.2} t={t} x={500} y={1420} w={460} fill="#fff" r={1} size={38}>nhìn lại rất rõ</Lbl>
        <Note t={t} at={16.0} x={500} y={1510} size={28}>hình minh hoạ, không phải lá số thật</Note>
      </g>
    </g>
  );
};

// 3. TRÁCH NHIỆM 23.07–36.09: công việc, tiền bạc, gia đình ↔ Tài, Quan Sát → thấy nặng
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={23.15} note="Những năm trách nhiệm" text="Đổ về" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={26.4} x={220} y={700} s={0.7}><Briefcase /></Pop>
      <Lbl at={26.5} t={t} x={220} y={820} w={250} fill="#fff" r={-2} size={34}>công việc</Lbl>
      <Pop t={t} at={27.6} x={500} y={700}><Coin r={70} /></Pop>
      <Lbl at={27.7} t={t} x={500} y={820} w={230} fill={P.yellow} r={2} size={34}>tiền bạc</Lbl>
      <Pop t={t} at={28.5} x={780} y={700} s={0.75}><House /></Pop>
      <Lbl at={28.6} t={t} x={780} y={820} w={230} fill={P.mint} r={-1} size={34}>gia đình</Lbl>
      <TermCard t={t} at={30.9} x={310} y={1120} vi="Tài" han="財" fill={P.yellow} r={-3} w={300} />
      <TermCard t={t} at={31.9} x={690} y={1120} vi="Quan Sát" han="官殺" fill={P.coral} r={3} w={340} />
      <Lbl at={33.8} t={t} x={500} y={1420} w={600} fill={P.yellow} r={-1} size={38}>thấy nặng thường ở đây</Lbl>
    </g>
  </g>
);

// 4. LƯU NIÊN 36.09–43.19: lịch lật 2026 Bính Ngọ → 2027 Đinh Mùi
const S4: React.FC<SP> = ({t}) => {
  const flip = A(t, 41.0, 0.7);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={36.15} note="Năng lượng từng năm" text="Lưu niên" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={36.6} x={720} y={560} r={3}><Tag w={300} h={110} fill="#fff"><TT size={64} y={22} font={CJK}>流年</TT></Tag></Pop>
        <Pop t={t} at={38.0} x={290} y={1010} s={0.8} r={-3}><g opacity={1 - 0.45 * flip}><GZ can="Bính" chi="Ngọ" year="2026" /></g></Pop>
        <g opacity={A(t, 40.2)}>
          <path d="M440 1010 H560" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
          <path d="M535 985 L565 1010 L535 1035" stroke={P.navy} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <Pop t={t} at={41.0} x={710} y={1010} s={0.8} r={3}><GZ can="Đinh" chi="Mùi" year="2027" /></Pop>
        <Lbl at={39.6} t={t} x={500} y={1400} w={460} fill={P.yellow} r={-1} size={38}>đổi sắc thái</Lbl>
      </g>
    </g>
  );
};

// 5. KHÔNG PHẢI SỐ PHẬN 43.19–48.67
const S5: React.FC<SP> = ({t}) => <NotDestiny t={t} s={43.19} strikeAt={44.7} gearAt={46.0} okAt={46.7} tint={P.mint} />;

// 6. CTA 48.67–hết
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={48.75} note="Bạn sinh năm 1988?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={49.2} x={300} y={800} s={0.75} r={-3}><GZ can="Mậu" chi="Thìn" year="1988" /></Pop>
      <Pop t={t} at={50.0} x={700} y={820} s={0.9}><Person c={P.coral} mood="smile" /></Pop>
      <CommentBar t={t} at={51.8} text="Mình 1988 · nhật chủ…" y={1110} dur={1.8} />
      <Lbl at={52.6} t={t} x={500} y={1260} w={560} fill={P.yellow} r={-1} size={38}>năm sinh hoặc nhật chủ</Lbl>
      <ArrowDown t={t} at={54.2} x={500} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 10.03, C: S1}, {s: 10.03, e: 23.07, C: S2}, {s: 23.07, e: 36.09, C: S3},
  {s: 36.09, e: 43.19, C: S4}, {s: 43.19, e: 48.67, C: S5}, {s: 48.67, e: 56.6, C: S6},
];

export const BaziR14: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r14.mp3" phrases={cap.phrases} scenes={SCENES} />;
